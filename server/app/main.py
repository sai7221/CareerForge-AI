from app.routes.analyze import router as analyze_router
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="CareerForge AI API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "CareerForge AI Backend Running 🚀"
    }

@app.get("/health")
def health():
    return {
        "status": "healthy"
    }
app.include_router(
    analyze_router,
    prefix="/api/v1"
)