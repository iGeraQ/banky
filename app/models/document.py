# app/models/document.py
from sqlalchemy.orm import declarative_base, relationship, Mapped, mapped_column
from sqlalchemy import String, Date, Text, Enum, ForeignKey, Numeric, Boolean
from datetime import datetime, timezone
from typing import Optional
from .bank import BankBrand
import enum, uuid

Base = declarative_base()

class DocStatus(str, enum.Enum):
    INGESTED="INGESTED"; CLASSIFIED="CLASSIFIED"; TEXT_EXTRACTED="TEXT_EXTRACTED"
    PARSED="PARSED"; NORMALIZED="NORMALIZED"; VALIDATED="VALIDATED"
    DONE="DONE"; FAILED="FAILED"

class Document(Base):
    __tablename__ = "documents"
    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    filename: Mapped[str] = mapped_column(String)
    content_type: Mapped[str] = mapped_column(String)
    storage_path: Mapped[str] = mapped_column(String)
    bank_type: Mapped[Optional[BankBrand]] = mapped_column(Enum(BankBrand), nullable=False, default=BankBrand.UNKNOWN)
    bank_code: Mapped[Optional[str]] = mapped_column(String, nullable=True)
    is_scanned: Mapped[Optional[bool]] = mapped_column(Boolean, nullable=True)
    period_start: Mapped[Optional[datetime]] = mapped_column(Date, nullable=True)
    period_end: Mapped[Optional[datetime]] = mapped_column(Date, nullable=True)
    status: Mapped[DocStatus] = mapped_column(Enum(DocStatus), default=DocStatus.INGESTED)
    error: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    created_at: Mapped[datetime] = mapped_column(default=lambda: datetime.now(timezone.utc))
    processed_at: Mapped[Optional[datetime]] = mapped_column(nullable=True)
    file_hash: Mapped[str] = mapped_column(String, unique=True, nullable=False)



