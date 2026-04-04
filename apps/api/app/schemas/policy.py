from typing import Literal

from pydantic import BaseModel


class PolicyBase(BaseModel):
    number: str
    title: str
    category: str
    year: int
    date: str
    status: Literal["berlaku", "dicabut", "direvisi"]
    type: Literal["Perda", "Perbup", "SK Bupati", "Pergub"]
    summary: str
    detail: str
    document_url: str


class PolicyCreate(PolicyBase):
    pass


class PolicyRead(PolicyBase):
    id: int

    model_config = {"from_attributes": True}
