from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy import or_
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.policy import Policy
from app.schemas.policy import PolicyRead

router = APIRouter(prefix="/api/v1/policies", tags=["policies"])


@router.get("", response_model=dict)
def list_policies(
    category: Optional[str] = None,
    year: Optional[int] = None,
    status: Optional[str] = None,
    type: Optional[str] = None,
    q: Optional[str] = None,
    page: int = Query(1, ge=1),
    limit: int = Query(20, ge=1, le=100),
    db: Session = Depends(get_db),
):
    query = db.query(Policy)

    if category:
        query = query.filter(Policy.category == category)
    if year:
        query = query.filter(Policy.year == year)
    if status:
        query = query.filter(Policy.status == status)
    if type:
        query = query.filter(Policy.type == type)
    if q:
        query = query.filter(
            or_(
                Policy.title.ilike(f"%{q}%"),
                Policy.summary.ilike(f"%{q}%"),
                Policy.detail.ilike(f"%{q}%"),
                Policy.number.ilike(f"%{q}%"),
            )
        )

    total = query.count()
    items = query.offset((page - 1) * limit).limit(limit).all()

    return {
        "total": total,
        "page": page,
        "limit": limit,
        "items": [PolicyRead.model_validate(item) for item in items],
    }


@router.get("/{id}", response_model=PolicyRead)
def get_policy(id: int, db: Session = Depends(get_db)):
    policy = db.query(Policy).filter(Policy.id == id).first()
    if not policy:
        raise HTTPException(status_code=404, detail="Policy not found")
    return policy
