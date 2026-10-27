#!/usr/bin/env python3
"""Extract full text of the FoC course PDF, page by page."""
import fitz  # PyMuPDF

SRC = "/home/z/my-project/upload/Notes_261027_010112.pdf"
OUT = "/home/z/my-project/tool-results/foc_pdf_fulltext.txt"

doc = fitz.open(SRC)
print(f"Pages: {len(doc)}")

with open(OUT, "w", encoding="utf-8") as f:
    for i, page in enumerate(doc, 1):
        text = page.get_text("text").strip()
        f.write(f"\n===== PAGE {i} =====\n")
        f.write(text if text else "[NO TEXT - likely image page]")
        f.write("\n")

print("Done ->", OUT)

# Quick stats: find lecture boundaries
import re
with open(OUT, encoding="utf-8") as f:
    content = f.read()
lects = re.findall(r"Lecture (\d+)", content)
print("Lecture numbers found:", sorted(set(int(x) for x in lects)))
