from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.stats import Stats
from app.schemas.stats import StatsRead

router = APIRouter(prefix="/api/v1/stats", tags=["stats"])


@router.get("", response_model=StatsRead)
def get_stats(db: Session = Depends(get_db)):
    stats = db.query(Stats).filter(Stats.id == 1).first()
    if not stats:
        raise HTTPException(status_code=404, detail="Stats not found")
    return stats
