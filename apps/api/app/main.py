from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
from app.routes import categories, policies, search, stats


@asynccontextmanager
async def lifespan(app: FastAPI):
    Base.metadata.create_all(bind=engine)
    from app.seed import seed_db
    seed_db()
    yield


app = FastAPI(
    title="Kastau API",
    version="0.1.0",
    description="REST API untuk platform kebijakan daerah Kabupaten Jayapura",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4321"],  # Astro dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(policies.router)
app.include_router(categories.router)
app.include_router(stats.router)
app.include_router(search.router)


@app.get("/")
async def root():
    return {"message": "Kastau API is running"}


@app.get("/health")
async def health():
    return {"status": "ok"}
