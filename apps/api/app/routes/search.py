from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy import or_
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.policy import Policy
from app.schemas.policy import PolicyRead

router = APIRouter(prefix="/api/v1/search", tags=["search"])


@router.get("", response_model=list[PolicyRead])
def search_policies(
    q: str = Query(..., min_length=1, description="Search query"),
    db: Session = Depends(get_db),
):
    results = (
        db.query(Policy)
        .filter(
            or_(
                Policy.title.ilike(f"%{q}%"),
                Policy.summary.ilike(f"%{q}%"),
                Policy.detail.ilike(f"%{q}%"),
                Policy.number.ilike(f"%{q}%"),
            )
        )
        .all()
    )
    return results
