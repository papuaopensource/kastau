# Contributing to Kastau

Terima kasih sudah tertarik berkontribusi! Panduan ini membantu kamu memulai dengan cepat.

## Prasyarat

| Tool | Versi minimum | Keperluan |
|------|--------------|-----------|
| Node.js | 22.12.0 | Frontend (Astro) |
| pnpm | 9 | Package manager |
| Python | 3.11 | Backend (FastAPI) |
| uv | latest | Python package manager |

Install `uv`: https://docs.astral.sh/uv/getting-started/installation  
Install `pnpm`: `npm install -g pnpm`

## Setup Lokal

```bash
git clone https://github.com/yokoberek/kastau.git
cd kastau

# Install semua Node dependencies (frontend + turbo)
pnpm install
```

## Menjalankan Development Server

```bash
# Jalankan semua sekaligus (Astro + FastAPI)
pnpm dev

# Atau per app
pnpm --filter @kastau/web dev    # Astro  → http://localhost:4321
pnpm --filter @kastau/api dev    # FastAPI → http://localhost:8000
```

FastAPI akan otomatis membuat `.venv` dan menginstall dependencies Python saat pertama kali dijalankan.

## Struktur Proyek

```
kastau/
├── apps/
│   ├── web/          # Astro frontend
│   │   └── src/
│   │       ├── components/
│   │       ├── data/         # mock data (sementara)
│   │       ├── layouts/
│   │       ├── pages/
│   │       └── styles/
│   └── api/          # FastAPI backend
│       ├── app/
│       │   ├── main.py
│       │   └── routers/
│       └── pyproject.toml
├── turbo.json
└── pnpm-workspace.yaml
```

## Menambah Dependency

```bash
# Frontend
pnpm add <package> --filter @kastau/web

# Backend
uv add <package> --project apps/api

# Dev dependency backend
uv add --dev <package> --project apps/api
```

## Konvensi Kode

### Git Commit

Gunakan format [Conventional Commits](https://www.conventionalcommits.org):

```
<type>: <deskripsi singkat>
```

| Type | Kapan dipakai |
|------|--------------|
| `feat` | Fitur baru |
| `fix` | Perbaikan bug |
| `docs` | Perubahan dokumentasi |
| `style` | Formatting, tidak ada perubahan logika |
| `refactor` | Refactor kode tanpa fitur baru/bugfix |
| `chore` | Update dependency, konfigurasi build |

Contoh:
```
feat: tambah filter kebijakan berdasarkan tahun
fix: perbaiki tampilan breadcrumb di mobile
docs: perbarui panduan kontribusi
```

### Branch

```
feat/<nama-fitur>
fix/<nama-bug>
docs/<nama-dokumen>
```

Contoh: `feat/pencarian-fulltext`, `fix/breadcrumb-mobile`

### Frontend (Astro)

- Satu komponen per file di `src/components/`
- Nama file komponen: PascalCase (`Header.astro`, `Kebijakan Card.astro`)
- Gunakan Tailwind — hindari CSS custom kecuali di `global.css`

### Backend (FastAPI)

- Setiap domain/resource punya file router sendiri di `app/routers/`
- Nama file: snake_case (`kebijakan.py`, `kategori.py`)
- Endpoint mengikuti konvensi REST

## Alur Kontribusi

1. Fork repository
2. Buat branch dari `main`
3. Buat perubahan
4. Pastikan tidak ada error: `pnpm build`
5. Buat Pull Request ke `main`

Untuk perubahan besar (arsitektur, fitur mayor), buka Issue terlebih dahulu sebelum mengerjakan.

## Lisensi

Dengan berkontribusi, kamu setuju bahwa kontribusimu dilisensikan di bawah [GNU AGPL v3](LICENSE).
