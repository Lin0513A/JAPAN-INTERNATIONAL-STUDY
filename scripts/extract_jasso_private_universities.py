from __future__ import annotations

import json
import re
from pathlib import Path

import pdfplumber
from pypdf import PdfReader


PDF = Path("tmp/pdfs/jasso-private-universities-2026.pdf")
OUT = Path("data/private-universities.json")

REGION_BY_HEADING = {
    "Hokkaido region": "hokkaido",
    "Tohoku region": "tohoku",
    "Kanto region": "kanto",
    "Chubu region": "chubu",
    "Kinki region": "kansai",
    "Chugoku and Shikoku region": "chugoku_shikoku",
    "Kyushu and Okinawa region": "kyushu",
}

PREFECTURES = {
    "Hokkaido",
    "Aomori",
    "Iwate",
    "Miyagi",
    "Akita",
    "Yamagata",
    "Fukushima",
    "Ibaraki",
    "Tochigi",
    "Gunma",
    "Saitama",
    "Chiba",
    "Tokyo",
    "Kanagawa",
    "Niigata",
    "Toyama",
    "Ishikawa",
    "Fukui",
    "Yamanashi",
    "Nagano",
    "Gifu",
    "Shizuoka",
    "Aichi",
    "Mie",
    "Shiga",
    "Kyoto",
    "Osaka",
    "Hyogo",
    "Nara",
    "Wakayama",
    "Tottori",
    "Shimane",
    "Okayama",
    "Hiroshima",
    "Yamaguchi",
    "Tokushima",
    "Kagawa",
    "Ehime",
    "Kochi",
    "Fukuoka",
    "Saga",
    "Nagasaki",
    "Kumamoto",
    "Oita",
    "Miyazaki",
    "Kagoshima",
    "Okinawa",
}


def uri_from_annotation(annotation) -> str:
    obj = annotation.get_object()
    action = obj.get("/A")
    if action and action.get("/URI"):
        return str(action.get("/URI"))
    return ""


def link_rows_by_page() -> dict[int, list[dict]]:
    reader = PdfReader(str(PDF))
    rows: dict[int, list[dict]] = {}
    for page_number, page in enumerate(reader.pages):
        page_rows = []
        for annotation in page.get("/Annots", []) or []:
            uri = uri_from_annotation(annotation)
            if not uri:
                continue
            rect = [float(value) for value in annotation.get_object().get("/Rect")]
            x0, y0, x1, y1 = rect
            page_rows.append(
                {
                    "uri": uri,
                    "x0": min(x0, x1),
                    "x1": max(x0, x1),
                    "pdf_y0": min(y0, y1),
                    "pdf_y1": max(y0, y1),
                }
            )
        rows[page_number] = page_rows
    return rows


def normalize_text(text: str) -> str:
    text = re.sub(r"\s+", " ", text).strip()
    return text.replace("List of Private Universities using EJU", "").strip()


def main() -> None:
    annotations = link_rows_by_page()
    entries = []
    seen = set()
    current_region = ""

    with pdfplumber.open(PDF) as pdf:
      for page_number, page in enumerate(pdf.pages):
        words = page.extract_words(x_tolerance=1.5, y_tolerance=4, keep_blank_chars=False)
        annots = annotations.get(page_number, [])
        rows: list[list[dict]] = []
        for word in words:
            for row in rows:
                if abs(row[0]["top"] - word["top"]) < 4:
                    row.append(word)
                    break
            else:
                rows.append([word])

        for row_words in rows:
            row_words = sorted(row_words, key=lambda item: item["x0"])
            line = normalize_text(" ".join(word["text"] for word in row_words))
            if not line or line in {"Prefecture Name of University", "Prefecture", "Name of University"}:
                continue

            for heading, region in REGION_BY_HEADING.items():
                if heading in line:
                    current_region = region
                    break
            if line in REGION_BY_HEADING:
                continue

            parts = line.split(" ", 1)
            if len(parts) != 2 or parts[0] not in PREFECTURES:
                continue

            prefecture, university_name = parts
            key = (prefecture, university_name)
            if key in seen:
                continue
            seen.add(key)

            row_top = min(word["top"] for word in row_words)
            row_bottom = max(word["bottom"] for word in row_words)
            uri = ""
            for annot in annots:
                top = page.height - annot["pdf_y1"]
                bottom = page.height - annot["pdf_y0"]
                if row_top <= bottom + 4 and row_bottom >= top - 4:
                    uri = annot["uri"]
                    break

            entries.append(
                {
                    "name": university_name,
                    "prefecture": prefecture,
                    "region": current_region or "any",
                    "type": "private",
                    "route": "EJU利用校",
                    "fields": ["humanities", "science"],
                    "line": "JASSO私立大学EJU利用校リスト掲載。学部ごとの科目・点数・出願期間は大学公式募集要項で確認。",
                    "requirement": "EJU利用有無は確認済み。合格ラインは大学・学部・年度で変わるため、公式募集要項と過去データを要確認。",
                    "official": uri,
                    "source": "JASSO List of Private Universities using EJU (as of May 2026)",
                }
            )

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(entries, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {len(entries)} entries to {OUT}")


if __name__ == "__main__":
    main()
