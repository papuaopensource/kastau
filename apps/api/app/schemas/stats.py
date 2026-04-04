from pydantic import BaseModel


class StatsRead(BaseModel):
    kecamatan: int
    kampung: int
    kebijakan_terdokumentasi: int
    warga_berlangganan: int
    tahun_data: str

    model_config = {"from_attributes": True}
