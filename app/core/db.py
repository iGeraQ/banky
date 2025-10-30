# app/core/db.py
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker, declarative_base, Session
from typing import Generator
from contextlib import contextmanager
from time import sleep
import logging

from app.core.config import settings

logger = logging.getLogger(__name__)


Base = declarative_base()

# --- Engine SQLAlchemy (síncrono) ---
DB_DSN = settings.database_dsn()

engine = create_engine(
    DB_DSN,
    future=True,
    pool_pre_ping=True,     
    pool_size=5,
    max_overflow=10,
    pool_recycle=1800,
)
SessionLocal = sessionmaker(
    bind=engine,
    autoflush=False,
    autocommit=False,
    expire_on_commit=False,  
    future=True,
)

def _try_connect(retries: int = 10, delay_sec: float = 1.5) -> None:
    last_exc: Exception | None = None
    for attempt in range(1, retries + 1):
        try:
            with engine.connect() as conn:
                conn.execute(text("SELECT 1"))
            logger.info("✅ Conexión a DB exitosa.")
            return
        except Exception as exc:  # noqa: BLE001
            last_exc = exc
            logger.warning(f"Intento {attempt}/{retries} de conexión a DB fallido: {exc}")
            sleep(delay_sec)
    logger.error("❌ No fue posible conectar a la DB después de reintentos.")
    if last_exc:
        raise last_exc

def init_db(run_migrations: bool = False) -> None:
    _try_connect()
    if run_migrations:
        Base.metadata.create_all(bind=engine)


def get_db() -> Generator[Session, None, None]:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@contextmanager
def session_scope() -> Generator[Session, None, None]:
    db = SessionLocal()
    try:
        yield db
        db.commit()
    except Exception:
        db.rollback()
        raise
    finally:
        db.close()
