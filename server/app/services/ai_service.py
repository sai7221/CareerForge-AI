from  openai import OpenAI
from app.config import OPENROUTER_API_KEY, OPENROUTER_MODEL
from app.prompts import RESUME_ANALYSIS_PROMPT

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=OPENROUTER_API_KEY,
)

def analyze_resume(text: str):
    prompt = f"""
{RESUME_ANALYSIS_PROMPT}

Resume:

{text}
"""

    try:
        response = client.chat.completions.create(
            model=OPENROUTER_MODEL,
            messages=[
                {
                    "role": "system",
                    "content": "You are an expert ATS Resume Reviewer. Return ONLY valid JSON."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
        )

        return response.choices[0].message.content

    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }
    