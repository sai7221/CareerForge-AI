from fastapi import APIRouter, UploadFile, File
import os
import shutil

from app.services.parser import extract_resume_text
from app.services.ai_service import analyze_resume

router = APIRouter()

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/resume/analyze")
async def analyze_resume_endpoint(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    text = extract_resume_text(file_path)

    analysis = analyze_resume(text)

    return {
        "filename": file.filename,
        "analysis": analysis
    }