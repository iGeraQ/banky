# app/api/main.py
from fastapi import FastAPI, UploadFile, File, HTTPException, Depends, BackgroundTasks
from sqlalchemy.orm import Session
from app.core.db import get_db
from app.core.executor import EXECUTOR
from app.core.storage import save_upload, hash_file
from app.core.state import set_status
from app.models.document import Document, DocStatus
from app.pipeline.stages import run_pipeline

app = FastAPI()

@app.get("/health")
def health_check():
    return {"status": "healthy", "service": "banky-api"}

def _process_document(doc_id: str):
    from app.core.db import SessionLocal
    db = SessionLocal()
    try:
        doc = db.get(Document, doc_id)
        run_pipeline(db, doc)
        set_status(db, doc_id, DocStatus.DONE)
    except Exception as e:
        set_status(db, doc_id, DocStatus.FAILED, error=str(e))
    finally:
        db.close()

@app.post("/upload")
async def upload(file: UploadFile = File(...), db: Session = Depends(get_db)):
    path, ctype = save_upload(file, name=file.filename or "default_filename")
    fhash = hash_file(path)

    existing = db.query(Document).filter_by(file_hash=fhash).first()
    if existing and existing.status == DocStatus.DONE:
        return {"doc_id": existing.id, "status": existing.status, "cached": True}

    doc = Document(filename=file.filename, content_type=ctype, storage_path=path, file_hash=fhash)
    db.add(doc); db.commit(); db.refresh(doc)

    EXECUTOR.submit(_process_document, doc.id)
    return {"doc_id": doc.id, "status": doc.status}

@app.get("/status/{doc_id}")
def status(doc_id: str, db: Session = Depends(get_db)):
    doc = db.get(Document, doc_id)
    if not doc:
        raise HTTPException(404, "doc not found")
    return {"doc_id": doc.id, "status": doc.status, "error": doc.error}

@app.get("/result/{doc_id}")
def result(doc_id: str, db: Session = Depends(get_db)):
    from app.models.transaction import Transaction
    doc = db.get(Document, doc_id)
    if not doc or doc.status not in (DocStatus.DONE, DocStatus.VALIDATED, DocStatus.PARSED, DocStatus.NORMALIZED):
        raise HTTPException(404, "result not ready")
    txs = db.query(Transaction).filter_by(document_id=doc_id).all()
    return {"document": doc.filename, "bank": doc.bank_code, "status": doc.status,
            "transactions": [
                dict(id=t.id, date=str(t.date), description=t.description, amount=float(t.amount or 0),
                     currency=t.currency, type=t.type, balance=float(t.balance or 0) if t.balance else None)
                for t in txs
            ]}
