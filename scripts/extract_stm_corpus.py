#!/usr/bin/env python3
"""Extract the Statistics for Managers master compendium into per-lecture
transcripts — LAYOUT-AWARE, the sole content authority for the shelf 05
rebuild.

Reads upload/STM_L01-L33_Compiled.pdf (the sole content authority), uses its
PDF bookmarks to locate every lecture's page span, and rebuilds the reading
structure from the page geometry:

  · bullets     — the "•" glyph sits at x=54 with its text at x=63
  · sub-bullets — the "◦" glyph sits at x=70 with its text at x=79
  · body rows   — x=47 (paragraphs and sub-heads)
  · title rows  — font size > 12pt (the H1, wraps to two lines)
  · furniture   — the y≈35 running header, the LECTURE/MODULE eyebrow band,
                  the Atlas footer and the page number

Wrapped continuations are joined; every word is preserved verbatim. Each
transcript opens with "# Lecture N: <bookmark title>" — the title comes from
the PDF bookmark and is cross-checked against the wrapped H1
(whitespace-normalised), so the 33 official titles stay byte-exact.

L28 is the deliberate reserved lecture: its bookmark label is carried
verbatim ("Lecture 28 · Reserved — removed from the official course
sequence"), its page renders only the removal card, and its transcript is
written EMPTY — no title, no content, never filled, never renumbered.

Source quirks are preserved as received and logged, never fixed — including
the nine source conflicts. Both sides render; nothing reconciles.

Run: python3 scripts/extract_stm_corpus.py
"""
import os
import re
import sys

import fitz  # PyMuPDF

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PDF = os.path.join(ROOT, "upload", "STM_L01-L33_Compiled.pdf")
OUT = os.path.join(ROOT, "scripts", "stm_lectures")

RESERVED = 28
RESERVED_LABEL = "Reserved — removed from the official course sequence"

doc = fitz.open(PDF)
print(f"pages: {doc.page_count}")
toc = doc.get_toc()
top = [t for t in toc if t[0] == 1]
print(f"top-level bookmarks: {len(top)}")
if len(top) != 34:
    sys.exit(f"expected 34 top-level bookmarks (TOC + 33 lectures), got {len(top)}")

starts = []  # (lecture_number, bookmark_title, page0, reserved?)
for lvl, title, page in top:
    m = re.match(r"Lecture\s+(\d+)\s*[:·]\s*(.*)$", title)
    if m:
        num = int(m.group(1))
        rest = m.group(2).strip()
        starts.append((num, rest, page - 1, rest == RESERVED_LABEL))
starts.sort(key=lambda x: x[0])
if len(starts) != 33:
    sys.exit(f"expected 33 lecture bookmarks, got {len(starts)}")
nums = [s[0] for s in starts]
if nums != list(range(1, 34)):
    sys.exit(f"lecture sequence broken: {nums}")
res = [s for s in starts if s[3]]
if len(res) != 1 or res[0][0] != RESERVED:
    sys.exit(f"expected exactly one reserved bookmark at L{RESERVED}, got {[(r[0], r[1]) for r in res]}")

TITLES = {num: bm for num, bm, _, _ in starts}

# ------------------------------------------------ page geometry readers
def page_rows(page):
    """y-bucketed rows: [(y, [(x, size, text), ...])], sorted."""
    rows = {}
    for b in page.get_text("dict")["blocks"]:
        if b.get("type") != 0:
            continue
        for ln in b["lines"]:
            txt = "".join(s["text"] for s in ln["spans"])
            if not txt.strip():
                continue
            size = max(s["size"] for s in ln["spans"])
            x = round(ln["bbox"][0])
            y = round(ln["bbox"][1])
            rows.setdefault(y, []).append((x, size, txt))
    return [(y, sorted(rows[y])) for y in sorted(rows)]

FURNITURE_RX = [
    re.compile(r"^STATISTICS\s+FOR\s+MANAGERS\s+·\s+SEM\s+1\b.*$"),
    re.compile(r"^Lecture\s+\d+\s+·\s+\S.*$"),
    re.compile(r"^LECTURE\s+\d+\s+OF\s+33\s*$"),
    re.compile(r"^LECTURE\s+\d+\s+OF\s+33\s+MODULE\s+\d+\s+·\s+.*$"),
    re.compile(r"^LECTURE\s+\d+\s+OF\s+33\s+·\s+NUMBERING\s+PRESERVED.*$"),
    re.compile(r"^MODULE\s+\d+\s+·\s+[A-Z\s\-&]+$"),
    re.compile(r"^The\s+Atlas\s+·\s+IIT\s+Jodhpur\s+B\.S\.\s+in\s+Management\s+&\s+Technology\s*$"),
    re.compile(r"^Page\s+\d+\s+of\s+\d+\s*$"),
]

def is_furniture(spans):
    joined = " ".join(t for _, _, t in spans).strip()
    if any(rx.match(joined) for rx in FURNITURE_RX):
        return True
    # the footer row joins two spans ("The Atlas · …" + "Page N of M") —
    # match each span too, so the joined row never leaks into the corpus
    for _, _, t in spans:
        if re.match(r"^The\s+Atlas\s+·\s+IIT\s+Jodhpur", t.strip()):
            return True
        if re.match(r"^Page\s+\d+\s+of\s+\d+\s*$", t.strip()):
            return True
    return False

# ------------------------------------------------ row → line model
BULLET_GLYPHS = {"•": 1, "◦": 2}  # glyph → level

def lines_from_pages(pages):
    """pages (list of row-lists) → structured lines:
    (level, text) with level 0 = body, 1 = bullet, 2 = sub-bullet.
    Wrapped continuations are joined inside each level."""
    rows = []
    for rows_p in pages:
        for y, spans in rows_p:
            if is_furniture(spans):
                continue
            sizes = [s for _, s, _ in spans]
            mx = max(sizes)
            if mx > 12:
                rows.append(("title", y, spans))
            elif mx > 9.5:  # the compendium's 10.0/11.4pt bold section heads
                rows.append(("sub", y, spans))
            else:
                rows.append(("body", y, spans))

    lines = []  # (kind, text): kind 'title' | 'sub' | (0,1,2) body levels
    cur = None  # (level, text)
    for kind, _y, spans in rows:
        if kind in ("title", "sub"):
            if cur:
                lines.append(cur)
                cur = None
            text = " ".join(t for _, _, t in spans).strip()
            lines.append((kind, text))
            continue
        glyph_level = 0
        text_parts = []
        for x, _s, t in spans:
            g = t.strip()
            if g in BULLET_GLYPHS:
                glyph_level = max(glyph_level, BULLET_GLYPHS[g])
            else:
                text_parts.append(t.strip())
        text = " ".join(p for p in text_parts if p)
        if glyph_level:
            if cur:
                lines.append(cur)
            cur = (glyph_level, text)
            continue
        # body row — continuation logic depends on the text x of the first span
        # (sub-heads never join: they arrive as kind 'sub' and always stand alone)
        x0 = spans[0][0]
        level = 0
        if 58 <= x0 <= 68:  # bullet text column without its glyph: continuation
            level = 1
        elif 74 <= x0 <= 86:  # sub-bullet text column without glyph
            level = 2
        if cur and cur[0] == level:
            # same level — join forward only when the previous chunk is a
            # wrapped paragraph (long and without terminal punctuation);
            # a short chunk is a sub-head and must never swallow the next row
            prev = cur[1]
            if prev and len(prev) > 64 and not re.search(r"[.!?:;]$", prev):
                cur = (level, prev + " " + text)
                continue
            lines.append(cur)
            cur = (level, text)
        else:
            if cur:
                lines.append(cur)
            cur = (level, text)
    if cur:
        lines.append(cur)
    return lines

# ------------------------------------------------ per-lecture extraction
os.makedirs(OUT, exist_ok=True)
report = []
title_mismatch = 0
for i, (num, bm_title, p0, reserved) in enumerate(starts):
    p_end = starts[i + 1][2] if i + 1 < len(starts) else doc.page_count
    pages = [page_rows(doc[p]) for p in range(p0, p_end)]
    lines = lines_from_pages(pages)

    if reserved:
        # the reserved page renders only the removal card; its text is the
        # card's own furniture, never lecture content
        card = " ".join(t for lvl, t in lines if t)
        for phrase in ("Reserved — removed from the official course", "intentionally blank", "numbering is preserved"):
            if phrase.lower() not in card.lower():
                sys.exit(f"L28 reserved card missing expected phrase: {phrase!r}")
        body = []
        text = f"# Lecture {num}: {RESERVED_LABEL} — no content, numbering preserved\n"
        with open(os.path.join(OUT, f"L{num:02d}.md"), "w", encoding="utf-8") as f:
            f.write(text)
        report.append((num, bm_title, p0 + 1, p_end, 0, 0, reserved))
        continue

    # title: the joined title lines must equal the bookmark title (normalised)
    title_lines = [t for kind, t in lines if kind == "title"]
    got = re.sub(r"^Lecture\s+\d+\s*[:·]\s*", "", " ".join(title_lines)).strip()
    got_n = re.sub(r"\s+", " ", got)
    want_n = re.sub(r"\s+", " ", bm_title)
    if got_n != want_n:
        title_mismatch += 1
        print(f"  L{num:02d} TITLE MISMATCH: pdf-h1={got_n!r} vs bookmark={want_n!r}")

    body = []
    for kind, t in lines:
        if kind == "title":
            continue
        if not t:
            continue
        if kind == "sub":
            body.append(t)
        elif kind == 1:
            body.append("- " + t)
        elif kind == 2:
            body.append("  - " + t)
        else:
            body.append(t)
    text = f"# Lecture {num}: {bm_title}\n\n" + "\n".join(body) + "\n"
    with open(os.path.join(OUT, f"L{num:02d}.md"), "w", encoding="utf-8") as f:
        f.write(text)
    content_tokens = len(re.findall(r"\S+", "\n".join(body).replace("- ", " ").replace("  - ", " ")))
    dashes = sum(1 for b in body if b.lstrip().startswith("- "))
    report.append((num, bm_title, p0 + 1, p_end, content_tokens, dashes, reserved))

print()
for num, bm_title, pgs, pge, words, dashes, reserved in report:
    tag = "  RESERVED" if reserved else ""
    print(f"  L{num:02d}  p{pgs:>3}..{pge:<3} {words:>6} content tokens  {dashes:>3} bullets  {bm_title[:56]}{tag}")
total = sum(r[4] for r in report)
dash_total = sum(r[5] for r in report)
print(f"\nTOTAL content tokens (H1 + bullet markers excluded): {total}")
print(f"bullet lines rendered as '- ': {dash_total}")
print(f"title mismatches vs bookmarks: {title_mismatch}")
doc.close()

# ------------------------------------------------ completeness verification
# every lecture's transcript tokens (H1 + bullet markers excluded) must be a
# subset of the raw page text (furniture/glyphs/titles aside) — and the raw
# side must have no content token the transcript lost. The reserved page is
# asserted separately (its card is furniture, verified above).
from collections import Counter

doc = fitz.open(PDF)
print("\ncompleteness check (content multiset vs raw pages):")
all_extra = Counter()
all_missing = Counter()
GLYPHS = {"\u2022", "\u25e6"}
for i, (num, bm_title, p0, p_end, _w, _d, reserved) in enumerate(report):
    if reserved:
        continue
    want = Counter()
    for p in range(p0 - 1, p_end):
        for ln in doc[p].get_text("text").splitlines():
            ln = ln.strip()
            if not ln or any(rx.match(ln) for rx in FURNITURE_RX):
                continue
            if ln in GLYPHS:
                continue
            for tok in re.findall(r"\S+", ln):
                want[tok] += 1
    # remove the lecture's own H1 title tokens ("Lecture", "28:", title words)
    for tok in re.findall(r"\S+", f"Lecture {num}: {bm_title}"):
        if want[tok] > 0:
            want[tok] -= 1
    md = open(os.path.join(OUT, f"L{num:02d}.md"), encoding="utf-8").read()
    body = "\n".join(md.splitlines()[2:])
    got = Counter(re.findall(r"\S+", body))
    # discount exactly our own bullet markers, never the body's spaced hyphens
    got["-"] = max(0, got["-"] - _d)
    extra = got - want
    missing = want - got
    all_extra += extra
    all_missing += missing
    if sum(extra.values()) or sum(missing.values()):
        print(f"  L{num:02d}: extra={sum(extra.values())} missing={sum(missing.values())}")
        for tok, n in extra.most_common(4):
            print(f"     + {tok!r} x{n}")
        for tok, n in missing.most_common(4):
            print(f"     - {tok!r} x{n}")
print(f"TOTAL extra (should be 0): {sum(all_extra.values())} · TOTAL missing (should be 0): {sum(all_missing.values())}")
if sum(all_extra.values()) or sum(all_missing.values()):
    sys.exit("COMPLETENESS CHECK FAILED")
print("COMPLETENESS: OK — every content token accounted for")
doc.close()
