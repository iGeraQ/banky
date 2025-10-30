# app/pipeline/stages.py
from app.models.document import DocStatus, Document
from sqlalchemy.orm import Session

from .utils import detect_bank, detect_period, is_scanned_pdf, extract_text_pages, \
                   maybe_ocr, parse_with_template, normalize_transactions, validate_report, \
                   persist_transactions

def run_pipeline(db: Session, doc: Document):
    # 1) CLASSIFY
    bank = detect_bank(doc.storage_path)
    scanned = is_scanned_pdf(doc.storage_path)
    (pstart, pend) = detect_period(doc.storage_path)
    doc.bank_code, doc.is_scanned, doc.period_start, doc.period_end = bank, scanned, pstart, pend
    doc.status = DocStatus.CLASSIFIED; db.commit()

    # 2) TEXT_EXTRACT
    pages_text = extract_text_pages(doc.storage_path)
    if not pages_text or scanned:
        pages_text = maybe_ocr(doc.storage_path)  # si no hay texto o es escaneado
    doc.status = DocStatus.TEXT_EXTRACTED; db.commit()

    # 3) PARSED
    raw_txs, meta = parse_with_template(bank, pages_text, doc.storage_path)
    doc.status = DocStatus.PARSED; db.commit()

    # 4) NORMALIZED
    norm_txs = normalize_transactions(raw_txs)
    doc.status = DocStatus.NORMALIZED; db.commit()

    # 5) VALIDATED
    ok, report = validate_report(norm_txs, pstart, pend)
    if not ok:
        doc.status = DocStatus.FAILED
        doc.error = report
        db.commit()
        return

    # 6) DONE → persistir
    persist_transactions(db, doc.id, norm_txs)
    doc.status = DocStatus.VALIDATED
    db.commit()
