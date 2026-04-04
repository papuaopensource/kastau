from sqlalchemy import Column, String

from app.database import Base


class Category(Base):
    __tablename__ = "categories"

    slug = Column(String, primary_key=True, index=True)
    name = Column(String, nullable=False)
    description = Column(String, nullable=False)
    icon = Column(String, nullable=False)
