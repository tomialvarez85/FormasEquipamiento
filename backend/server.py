"""
Stub backend mínimo solo para satisfacer la readiness probe de Kubernetes en el
entorno de preview de Emergent. La aplicación es 100% frontend (Vite).
NO agregar lógica de negocio aquí.
"""
from fastapi import FastAPI

app = FastAPI(title="Formas Equipamiento - Health Stub")


@app.get("/")
@app.get("/health")
@app.get("/api/health")
async def health():
    return {"status": "ok"}
