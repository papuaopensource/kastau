from sqlalchemy import Column, Integer, String, Text

from app.database import Base


class Policy(Base):
    __tablename__ = "policies"

    id = Column(Integer, primary_key=True, index=True)
    number = Column(String, nullable=False)
    title = Column(String, nullable=False, index=True)
    category = Column(String, nullable=False, index=True)
    year = Column(Integer, nullable=False, index=True)
    date = Column(String, nullable=False)
    status = Column(String, nullable=False)  # berlaku | dicabut | direvisi
    type = Column(String, nullable=False)    # Perda | Perbup | SK Bupati | Pergub
    summary = Column(Text, nullable=False)
    detail = Column(Text, nullable=False)
    document_url = Column(String, nullable=False)
