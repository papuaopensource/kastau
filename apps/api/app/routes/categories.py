from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import func
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.category import Category
from app.models.policy import Policy
from app.schemas.category import CategoryRead, CategoryWithPolicies
from app.schemas.policy import PolicyRead

router = APIRouter(prefix="/api/v1/categories", tags=["categories"])


@router.get("", response_model=list[CategoryRead])
def list_categories(db: Session = Depends(get_db)):
    categories = db.query(Category).all()
    result = []
    for cat in categories:
        count = (
            db.query(func.count(Policy.id))
            .filter(Policy.category == cat.slug)
            .scalar()
        )
        result.append(
            CategoryRead(
                slug=cat.slug,
                name=cat.name,
                description=cat.description,
                icon=cat.icon,
                policy_count=count,
            )
        )
    return result


@router.get("/{slug}", response_model=CategoryWithPolicies)
def get_category(slug: str, db: Session = Depends(get_db)):
    cat = db.query(Category).filter(Category.slug == slug).first()
    if not cat:
        raise HTTPException(status_code=404, detail="Category not found")

    policies = db.query(Policy).filter(Policy.category == slug).all()

    return CategoryWithPolicies(
        slug=cat.slug,
        name=cat.name,
        description=cat.description,
        icon=cat.icon,
        policy_count=len(policies),
        policies=[PolicyRead.model_validate(p) for p in policies],
    )
