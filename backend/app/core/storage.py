# app/core/storage.py
import hashlib, os, shutil
from fastapi import UploadFile

UPLOAD_DIR = "s3"
os.makedirs(UPLOAD_DIR, exist_ok=True)

def save_upload(file: UploadFile, name: str) -> tuple[str, str]:
    path = os.path.join(UPLOAD_DIR, name)
    with open(path, "wb") as f:
        shutil.copyfileobj(file.file, f)
    return path, file.content_type or "application/octet-stream"

def hash_file(path: str) -> str:
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()
