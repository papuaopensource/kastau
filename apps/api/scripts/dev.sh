#!/usr/bin/env bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
API_DIR="$(dirname "$SCRIPT_DIR")"

cd "$API_DIR"

uv sync
uv run uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
