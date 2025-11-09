
import enum, uuid
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, Date, Text, Enum, ForeignKey, Numeric, Boolean
from datetime import datetime, timezone
from typing import Optional
from app.database.base import Base


class TypeTransaction(str, enum.Enum):
    INCOME = "INCOME"
    EXPENSE = "EXPENSE"


class Transaction(Base):
    __tablename__ = "transactions"
    id: Mapped[str] = mapped_column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    document_id: Mapped[str] = mapped_column(ForeignKey("documents.id", ondelete="CASCADE"), index=True)
    date: Mapped[Optional[datetime]] = mapped_column(Date, nullable=True)
    description: Mapped[str] = mapped_column(Text) 
    amount: Mapped[Optional[float]] = mapped_column(Numeric(15,2))
    currency: Mapped[str] = mapped_column(String, default="MXN")
    type: Mapped[Optional[TypeTransaction]] = mapped_column(Enum(TypeTransaction), nullable=True)
    balance: Mapped[Optional[float]] = mapped_column(Numeric(15,2))

