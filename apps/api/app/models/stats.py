from sqlalchemy import Column, Integer, String

from app.database import Base


class Stats(Base):
    __tablename__ = "stats"

    id = Column(Integer, primary_key=True, default=1)
    kecamatan = Column(Integer, nullable=False)
    kampung = Column(Integer, nullable=False)
    kebijakan_terdokumentasi = Column(Integer, nullable=False)
    warga_berlangganan = Column(Integer, nullable=False)
    tahun_data = Column(String, nullable=False)
