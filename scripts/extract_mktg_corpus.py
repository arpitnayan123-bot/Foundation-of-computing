#!/usr/bin/env python3
"""Extract the Principles of Marketing master compendium into per-lecture corpora.

Reads upload/POM_L01-L40_Compiled.pdf (the sole content authority, 34,414
verified words on its cover), uses its PDF bookmarks to locate every lecture's
page span, strips the running headers/footers, converts bullet glyphs, and
writes scripts/mktg_lectures/L01.md .. L40.md — the per-lecture corpora that
the site rebuild and build_pom_bundle.py both consume.

Source quirks are preserved as received and logged, never fixed:
  · L22 / L39 are reserved (removed) — their pages carry only the removal card
  · L33 renders Kiehl's as "Kéels" and Dettol as "Detal"  — kept verbatim
  · L35 carries "Parleji Surakshah"                        — kept verbatim
  · L36 arrived with shattered letter-spaced dollar math    — logged; the one
    authorised rebuild (ordinary prose, currency symbols intact)

Run: python3 scripts/extract_mktg_corpus.py
"""
import os
import re
import sys

import fitz  # PyMuPDF

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PDF = os.path.join(ROOT, "upload", "POM_L01-L40_Compiled.pdf")
OUT = os.path.join(ROOT, "scripts", "mktg_lectures")

RESERVED = {22, 39}

doc = fitz.open(PDF)
print(f"pages: {doc.page_count}")
toc = doc.get_toc()
top = [t for t in toc if t[0] == 1]
print(f"top-level bookmarks: {len(top)}")
if len(top) != 41:
    sys.exit(f"expected 41 top-level bookmarks (TOC + 40 lectures), got {len(top)}")

starts = []  # (lecture_number, bookmark_title, page0)
for lvl, title, page in top:
    m = re.match(r"Lecture\s+(\d+)\s*[:\-]?\s*(.*)$", title)
    if m:
        starts.append((int(m.group(1)), m.group(2).strip(), page - 1))
starts.sort(key=lambda x: x[0])
if len(starts) != 40:
    sys.exit(f"expected 40 lecture bookmarks, got {len(starts)}")

# ------------------------------------------------ page furniture stripper
FURNITURE = [
    re.compile(r"^LECTURE\s+\d+\s+OF\s+40\b.*$"),                       # page-top eyebrow (incl. reserved suffix line)
    re.compile(r"^PRINCIPLES\s+OF\s+MARKETING\s+·\s+SEM\s+1\b.*$"),     # running header (may glue the truncated title)
    re.compile(r"^Lecture\s+\d+\s+·\s+removed\s+from\s+course\s*$"),    # reserved-page running footer (source renders it one page early too — quirk logged)
    re.compile(r"^The\s+Atlas\s+·\s+IIT\s+Jodhpur\s+B\.S\.\s+in\s+Management\s+&\s+Technology\s*$"),
    re.compile(r"^Page\s+\d+\s+of\s+\d+\s*$"),
    re.compile(r"^PART\s+[IV]+\s+·\s+[A-Z,&'\u2019\s\-]+$"),            # part eyebrow when split onto its own line
]

# the per-page running header repeats INSIDE a lecture's page span as
# "Lecture <n> · <title or truncated title…>" — strip it by lecture number
RUNHDR = re.compile(r"^Lecture\s+(\d+)\s+·\s+\S.*$")

def strip_running_headers(text: str, lecture_no: int) -> str:
    out = []
    for ln in text.splitlines():
        m = RUNHDR.match(ln)
        if m and int(m.group(1)) == lecture_no:
            continue
        out.append(ln)
    return "\n".join(out)

def clean_page(text: str) -> str:
    lines = []
    for raw in text.splitlines():
        ln = raw.rstrip()
        if any(rx.match(ln) for rx in FURNITURE):
            continue
        if re.match(r"^\s*[•·◦]\s*$", ln):  # stray bullet-marker lines
            continue
        if re.match(r"^\d{1,2}\.\s*$", ln):  # stray ordered-list marker split from its text
            continue
        ln = re.sub(r"^•\s+", "- ", ln)
        ln = re.sub(r"^◦\s+", "  - ", ln)
        lines.append(ln)
    return "\n".join(lines)

os.makedirs(OUT, exist_ok=True)
report = []
total_words = 0
for i, (num, bm_title, p0) in enumerate(starts):
    p_end = starts[i + 1][2] if i + 1 < len(starts) else doc.page_count
    if num in RESERVED:
        # the reserved page: keep the removal card verbatim as the corpus record
        raw = doc[p0].get_text("text")
        card = strip_running_headers(clean_page(raw), num)
        card = re.sub(r"\n{2,}", "\n", card).strip()
        body = (
            f"# Lecture {num}: RESERVED — removed from the official course sequence\n\n"
            f"{card}\n"
        )
        words = 0  # reserved pages contribute no lecture words
        kind = "reserved"
    else:
        pages = [clean_page(doc[p].get_text("text")) for p in range(p0, p_end)]
        body = "\n\n".join(pages)
        body = strip_running_headers(body, num)
        body = re.sub(r"\n{3,}", "\n\n", body)
        # the md's own leading title line (first non-empty line) becomes the H1
        m = re.search(r"^Lecture\s+" + str(num) + r"\s*:\s*(.+)$", body, flags=re.M)
        title_line = m.group(1).strip() if m else bm_title
        body = re.sub(r"^\s*Lecture\s+" + str(num) + r"\s*:\s*.+\n", "", body, count=1)
        body = body.strip()
        words = len(re.findall(r"\S+", body))
        total_words += words
        kind = "lecture"
    with open(os.path.join(OUT, f"L{num:02d}.md"), "w", encoding="utf-8") as f:
        f.write(body + "\n")
    report.append((num, bm_title, p0 + 1, p_end, words, kind))

print()
for num, bm_title, pgs, pge, words, kind in report:
    print(f"  L{num:02d}  p{pgs:>3}..{pge:<3} {words:>6} words  {kind:8}  {bm_title[:64]}")
print(f"\nTOTAL extracted lecture words: {total_words} (compendium cover claims 34,414)")
doc.close()

# ------------------------------------------------ quirk verification
def read(n):
    return open(os.path.join(OUT, f"L{n:02d}.md"), encoding="utf-8").read()

quirks = []
if "Kéels" in read(33):
    quirks.append("L33: 'Kéels' present (Kiehl's rendered as received)")
else:
    quirks.append("L33: 'Kéels' NOT FOUND — check extraction")
if "Detal" in read(33):
    quirks.append("L33: 'Detal' present (Dettol rendered as received)")
else:
    quirks.append("L33: 'Detal' NOT FOUND — check extraction")
if "Parleji Surakshah" in read(35):
    quirks.append("L35: 'Parleji Surakshah' present (as received)")
else:
    quirks.append("L35: 'Parleji Surakshah' NOT FOUND — check extraction")
l28 = read(28)
for b in ("Pratfall", "Halo", "Decoy", "Framing"):
    quirks.append(f"L28 tail mentions {b}: {b in l28}")
print("\nquirk log:")
for q in quirks:
    print(f"  {q}")
