import pdfplumber
from docx import Document


def extract_pdf_text(file_path: str) -> str:
    text = ""

    with pdfplumber.open(file_path) as pdf:
        for page in pdf.pages:
            page_text = page.extract_text()

            if page_text:
                text += page_text + "\n"

    return text


def extract_docx_text(file_path: str) -> str:
    doc = Document(file_path)

    return "\n".join(
        paragraph.text
        for paragraph in doc.paragraphs
    )


def extract_resume_text(file_path: str) -> str:
    if file_path.endswith(".pdf"):
        return extract_pdf_text(file_path)

    if file_path.endswith(".docx"):
        return extract_docx_text(file_path)

    raise ValueError("Unsupported file type")