# app/core/config.py
from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import AnyUrl
from typing import Optional

from functools import lru_cache
import os

class Settings(BaseSettings):
    # --- App ---
    APP_NAME: str = "BankyMX"
    ENV: str = "development"
    DEBUG: bool = True

    # --- DB ---
    DATABASE_URL: Optional[str] = None
    DB_HOST: str = "db"
    DB_PORT: int = 5432
    DB_USER: str = "user"
    DB_PASSWORD: str = "pass"
    DB_NAME: str = "bankdb"

    # --- Server ---
    API_PREFIX: str = ""
    LOG_LEVEL: str = "INFO"
    TZ: str = "UTC"

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )

    def database_dsn(self) -> str:
        if self.DATABASE_URL:
            return self.DATABASE_URL
        return (
            f"postgresql+psycopg2://{self.DB_USER}:{self.DB_PASSWORD}"
            f"@{self.DB_HOST}:{self.DB_PORT}/{self.DB_NAME}"
        )

@lru_cache(maxsize=1)
def get_settings() -> Settings:
    settings = Settings()
    os.environ.setdefault("TZ", settings.TZ)
    return settings

settings = get_settings()
