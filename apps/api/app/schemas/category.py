from pydantic import BaseModel

from app.schemas.policy import PolicyRead


class CategoryBase(BaseModel):
    slug: str
    name: str
    description: str
    icon: str


class CategoryRead(CategoryBase):
    policy_count: int

    model_config = {"from_attributes": True}


class CategoryWithPolicies(CategoryRead):
    policies: list[PolicyRead] = []
