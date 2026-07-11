from openai import OpenAI
from app.config import OPENROUTER_API_KEY, OPENROUTER_MODEL
from app.prompts import (
    RESUME_ANALYSIS_PROMPT,
    JOB_MATCH_PROMPT,
)

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=OPENROUTER_API_KEY,
)


def ask_ai(prompt: str):

    response = client.chat.completions.create(
        model=OPENROUTER_MODEL,
        messages=[
            {
                "role": "system",
                "content": "Return only JSON."
            },
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response.choices[0].message.content


def analyze_resume(text: str):

    prompt = f"""
{RESUME_ANALYSIS_PROMPT}

Resume:

{text}
"""

    return ask_ai(prompt)


def analyze_job_match(resume, job):

    prompt = f"""
{JOB_MATCH_PROMPT}

Resume

{resume}

Job Description

{job}
"""

    return ask_ai(prompt)