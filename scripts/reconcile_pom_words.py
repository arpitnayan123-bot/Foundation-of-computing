#!/usr/bin/env python3
"""Reconcile the 34,414 cover claim against counting methods; inspect L36 junk."""
import os
import re
import fitz

ROOT = "/home/z/my-project"
PDF = os.path.join(ROOT, "upload", "POM_L01-L40_Compiled.pdf")
doc = fitz.open(PDF)

pages_raw = [doc[p].get_text("text") for p in range(doc.page_count)]
doc.close()

def wc(s):
    return len(re.findall(r"\S+", s))

raw_all = "\n".join(pages_raw)
print(f"raw all pages (cover+TOC+lectures, furniture incl): {wc(raw_all)}")

# furniture-only words (per my extractor's rules, page-scoped)
FURN = [
    re.compile(r"^LECTURE\s+\d+\s+OF\s+40\b.*$", re.M),
    re.compile(r"^PRINCIPLES\s+OF\s+MARKETING\s+·\s+SEM\s+1\b.*$", re.M),
    re.compile(r"^Lecture\s+\d+\s+·\s+.*\u2026\s*$", re.M),
    re.compile(r"^Lecture\s+\d+\s+·\s+removed\s+from\s+course\s*$", re.M),
    re.compile(r"^The\s+Atlas\s+·\s+IIT\s+Jodhpur\s+B\.S\.\s+in\s+Management\s+&\s+Technology\s*$", re.M),
    re.compile(r"^Page\s+\d+\s+of\s+\d+\s*$", re.M),
    re.compile(r"^PART\s+[IV]+\s+·\s+[A-Z,&'\u2019\s\-]+$", re.M),
]
furn_words = 0
for pt in pages_raw:
    lines = pt.splitlines()
    for ln in lines:
        if any(rx.match(ln.rstrip()) for rx in FURN):
            furn_words += wc(ln)
print(f"furniture words stripped: {furn_words}")

body_words = 32029
title_words = 0
for n in range(1, 41):
    if n in (22, 39):
        continue
    t = open(os.path.join(ROOT, "scripts", "mktg_lectures", f"L{n:02d}.md"), encoding="utf-8").read()
    first = t.strip().splitlines()[0]
    title_words += wc(first)
print(f"body words (extracted, furniture-stripped, no titles): {body_words}")
print(f"candidates: body+titles={body_words + title_words} · body+furniture={body_words + furn_words} · raw_all - cover/TOC pages?")

# cover + TOC pages words
cover_toc = wc(pages_raw[0]) + wc(pages_raw[1])
print(f"cover words={wc(pages_raw[0])} · TOC words={wc(pages_raw[1])}")
print(f"raw_all minus cover minus TOC = {wc(raw_all) - cover_toc}")

# ---------- L36 shattered math inspection ----------
l36 = open(os.path.join(ROOT, "scripts", "mktg_lectures", "L36.md"), encoding="utf-8").read()
idx = l36.find("9.99")
print("\n--- L36 around first $9.99 ---")
print(l36[max(0, idx - 400): idx + 500])
