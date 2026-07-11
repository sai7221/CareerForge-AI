const API_URL = "http://127.0.0.1:8000/api/v1";

export async function analyzeResume(file: File) {
    const formData = new FormData();

    formData.append("file", file);

    const response = await fetch(
        `${API_URL}/resume/analyze`,
        {
            method: "POST",
            body: formData,
        }
    );

    if (!response.ok) {
        throw new Error("Resume analysis failed");
    }

    return await response.json();
}