#!/usr/bin/env python3
"""Extract the ATB master compendium into per-lecture transcripts.

Reads upload/ATB_L01-L33_Compiled.pdf (the sole content authority),
uses its PDF bookmarks to locate every lecture's page span, strips the
running headers/footers and bullet artefacts, and writes
scripts/atb_lectures/L01.md .. L33.md — the per-lecture transcripts the
site rebuild and build_atb_bundle.py both consume.

Run: python3 scripts/extract_atb_transcripts.py
"""
import os
import re
import sys

import fitz  # PyMuPDF

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PDF = os.path.join(ROOT, "upload", "ATB_L01-L33_Compiled.pdf")
OUT = os.path.join(ROOT, "scripts", "atb_lectures")

doc = fitz.open(PDF)
print(f"pages: {doc.page_count}")
toc = doc.get_toc()
top = [t for t in toc if t[0] == 1]
print(f"top-level bookmarks: {len(top)}")
for lvl, title, page in top[:6]:
    print(f"  L{lvl} p{page} {title[:70]}")

# lecture start pages: bookmarks whose title begins "Lecture" or "L<nn>"
starts = []  # (lecture_number, title, page0)
for lvl, title, page in top:
    m = re.search(r"Lecture\s+(\d+)", title)
    if m:
        starts.append((int(m.group(1)), title, page - 1))  # 0-based
starts.sort(key=lambda x: x[0])
print(f"lecture bookmarks: {len(starts)}")

HEADER_RE = re.compile(
    r"^\s*(ALGORITHMIC\s+THINKING\s+IN\s+BUSINESS.*|The\s+Atlas\s+·\s+IIT\s+Jodhpur.*Page\s+\d+\s+of\s+\d+.*|LECTURE\s+\d+\s+OF\s+33.*|PART\s+[IV]+\s+·\s+.*)\s*$",
    re.IGNORECASE,
)
LECTURE_HEAD_RE = re.compile(r"^\s*Lecture\s+(\d+)\s*[ofOF\s]*(.*)$")

def clean_page(text: str) -> str:
    lines = []
    for raw in text.splitlines():
        ln = raw.rstrip()
        if HEADER_RE.match(ln):
            continue
        if re.match(r"^\s*[•·◦]\s*$", ln):  # stray bullet marker lines
            continue
        lines.append(ln)
    return "\n".join(lines)

os.makedirs(OUT, exist_ok=True)
total_words = 0
for i, (num, title, p0) in enumerate(starts):
    p_end = starts[i + 1][2] if i + 1 < len(starts) else doc.page_count
    pages = []
    for p in range(p0, p_end):
        pages.append(clean_page(doc[p].get_text("text")))
    body = "\n\n".join(pages)
    # collapse >2 blank lines
    body = re.sub(r"\n{3,}", "\n\n", body)
    # convert the PDF's bullet glyph lines into markdown bullets
    body = re.sub(r"^•\s+", "- ", body, flags=re.M)
    words = len(re.findall(r"\S+", body))
    total_words += words
    with open(os.path.join(OUT, f"L{num:02d}.md"), "w", encoding="utf-8") as f:
        f.write(f"# Lecture {num}: {title.split('Lecture',1)[-1].strip(': ').strip()}\n\n{body}\n")
    print(f"  L{num:02d}  pages {p0+1}..{p_end}  {words} words  first={title[:60]!r}")

print(f"TOTAL extracted words: {total_words} (compendium cover claims 30,674)")
