# app/core/state.py
from sqlalchemy.orm import Session
from app.models.document import Document, DocStatus
from datetime import datetime, timezone
from typing import Optional

def set_status(db: Session, doc_id: str, status: DocStatus, error: Optional[str] = None):
    doc = db.get(Document, doc_id)
    if doc is not None:
        doc.status = status
        doc.error = error
        if status in (DocStatus.DONE, DocStatus.FAILED):
            doc.processed_at = datetime.now(timezone.utc)
        db.commit()
    db.refresh(doc)
    return doc
