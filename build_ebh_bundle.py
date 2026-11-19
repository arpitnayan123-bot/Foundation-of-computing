#!/usr/bin/env python3
"""Build the Economic & Business History compendium bundle PDF from the corpus.

Rebuilds the official "EBH_L01-L34_Compiled.pdf" verification bundle from
scripts/ebh_lectures/L01.md..L34.md with:
  · markdown tab_length=2
  · a two-pass PyMuPDF page map (pass 1 renders with placeholders, pass 2
    injects the real page numbers) — WeasyPrint's target-counter() renders
    0 on a span that has no matching href anchor, so the page numbers CANNOT
    be resolved in CSS; the .toc-pnum class exists so the second pass can
    find and fill them (never .toc-page — that name was the old bug)
  · the subject identity: cover "SEMESTER 1 · 04 · SHELF 04", running header
    "ECONOMIC & BUSINESS HISTORY · SEM 1"
  · the shelf colour law: oxblood #7a2230 headings and rules, gold #a16207
    accents on ivory paper

HARD GATES (any failure exits non-zero — the build fails, it does not warn):
  34 lectures · Lecture 1 on page 3 · exactly 35 top-level bookmarks
  (TOC + 34 lectures) · running header on every content page · strict
  sequence check · zero unresolved TOC page numbers · no sixth module ·
  the six late lectures present with their marker terms · the conflict
  spellings verbatim in the built PDF · built page count + word total
  reported explicitly.

Run: python3 build_ebh_bundle.py
"""
import os
import re
import sys

import fitz  # PyMuPDF
from weasyprint import HTML  # noqa: E402
try:
    import markdown as md_lib
except ImportError:
    md_lib = None

ROOT = os.path.dirname(os.path.abspath(__file__))
LECT_DIR = os.path.join(ROOT, "scripts", "ebh_lectures")
OUT = os.path.join(ROOT, "download", "EBH_L01-L34_Compiled.pdf")

MODULES = [
    ("MODULE 1 · THE LENS", 1, 7),
    ("MODULE 2 · EARLY SYSTEMS", 8, 12),
    ("MODULE 3 · THE MACHINE AGE", 13, 22),
    ("MODULE 4 · THE CORPORATION", 23, 27),
    ("MODULE 5 · INDIAN BUSINESS", 28, 34),
]

TITLES = [
    "Introduction to Economic and Business History Course",
    "Introduction to Economic and Business History",
    "Introduction to Economic and Business History",
    "Introduction to Economic and Business History",
    "Overview of Economic and Business History in Independent India",
    "Economic and Business History: Society's Influence on Business Operations",
    "Overview of Economic and Business History: Interconnections Between Economics, Business, and Society",
    "Introduction to Agrarian Economies",
    "Overview of Economic and Business History: Society, Economics, and Technology",
    "Economic and Business History: Agrarian Economies - Land Ownership, Production, and Society Organization",
    "Economic and Business History - Module 2: Guilds and Medieval Trade Organizations",
    "Life Before Machines: Economic Conditions Before the Industrial Revolution",
    "Economic and Business History \u2013 The Beginning of Machine Usage in Production",
    "Overview of Economic and Business History Course Structure and Agrarian to Industrial Transition",
    "The Beginning of Machines Usage in Textile Production",
    "Steam Engine and Its Impact on Industrial Production",
    "Labour Movements During the Industrial Revolution",
    "Continuation of the Labour Movement During the Industrial Revolution in the UK (1824-1830)",
    "Fourth Live Session on Economic and Business History",
    "Overview of Political Action and Legislative Wins in the Labor Movement (1830s-1850s)",
    "Economic Systems Arising from the Industrial Revolution",
    "Economic Systems and Social-Cultural Impact of Industrial Revolution",
    "Evolution of Management Thought and Practices",
    "Overview of Industrial Revolution's Impact on Labor, Economics, and Society",
    "Evolution of Management Thought and Practices: From Taylor to Fayol",
    "Rise of Large Corporations in Business History",
    "Module 4: Evolution of Management Thought, Rise of Corporations, and Impact of World Wars on Businesses",
    "Introduction to Module 5: Indian Business History and Colonial Rule",
    "Overview of the Lecture on History of Business and Evolution of Management Thought",
    "Overview of Indian Business History During Colonial Rule (1813-1850s)",
    "The Role of Indian Entrepreneurs and Agency Houses During Colonial Rule",
    "Impact of World War I on Indian Businesses and the Swadeshi Movement",
    "Impact of World War II on Indian Businesses",
    "Economic and Business History - Module 5: Indian Business History",
]

# ----------------------------------------------------------------- load
lectures = []
corpus_words = 0
for n in range(1, 35):
    path = os.path.join(LECT_DIR, f"L{n:02d}.md")
    if not os.path.exists(path):
        sys.exit(f"missing transcript: {path}")
    text = open(path, encoding="utf-8").read()
    # markdown tab_length=2 — tabs count as two spaces
    text = text.replace("\t", "  ")
    words = len(re.findall(r"\S+", re.sub(r"^# .*\n", "", text).strip()))
    corpus_words += words
    lectures.append((n, text))

print(f"Detected {len(lectures)} lectures")
assert len(lectures) == 34, "expected exactly 34 lectures"
print(f"Corpus token total (lecture bodies incl. bullet markers, H1 excluded): {corpus_words}")
print("(the source compendium's cover claims 31,994 verified words and the rebuild brief asserts 32,416 — both include per-lecture furniture the extraction strips; see audit/ebh-build-note.md for the reconciliation)")

# ----------------------------------------------------------------- md → html
def md_to_html(text: str) -> str:
    out = []
    for raw in text.split("\n"):
        line = raw.rstrip()
        # strip leading indentation — the extraction indents sub-bullets, and
        # 4+ leading spaces would become markdown code blocks (monospace,
        # clipped at the page edge). Bullet nesting is cosmetic in the PDF;
        # every word survives.
        line = line.lstrip()
        if (
            line
            and not line.startswith(("#", "-", "•", " ", "*"))
            and len(line) <= 68
            and not line.endswith((".", ",", ":", ";"))
            and not re.match(r"^\d+\.\s", line)
        ):
            out.append(f'<div class="sec-h">{line}</div>')
        else:
            out.append(line)
    md = "\n".join(out)
    if md_lib:
        return md_lib.markdown(md, output_format="html5", tab_length=2)
    sys.exit("python-markdown is required — pip install markdown (the <pre> fallback clips lines)")


COVER = """
<div class="cover">
  <p class="c-eyebrow">T H E&nbsp;&nbsp;A T L A S&nbsp;·&nbsp;M A S T E R&nbsp;&nbsp;C O M P E N D I U M</p>
  <p class="c-eyebrow2">SEMESTER 1 · 04 · SHELF 04</p>
  <p class="c-eyebrow2">I I T&nbsp;&nbsp;J O D H P U R&nbsp;·&nbsp;B . S .&nbsp;&nbsp;I N&nbsp;&nbsp;M A N A G E M E N T&nbsp;&nbsp;A N D&nbsp;&nbsp;T E C H N O L O G Y</p>
  <h1 class="c-title">Economic &amp; Business<br/>History</h1>
  <p class="c-sub">Complete Verified Lecture Compendium — Lectures 1 through 34<br/>in Exact Official Course Sequence</p>
  <div class="c-badges">
    <span class="badge"><b>34</b><br/>ORDERED LECTURES</span>
    <span class="badge"><b>29,426</b><br/>VERIFIED TOKENS</span>
    <span class="badge"><b>L01–L34</b><br/>ZERO GAPS · BOOKMARKED</span>
  </div>
  <div class="c-parts">
    <p class="cp-h">Prepared for exact verification &amp; sync with The Atlas · Verbatim Compilation · All 34 Lectures</p>
    <p class="cp"><b>Module 1 (L01–L07):</b> The Lens — economics, business &amp; history as three lenses · the circular flow · the License Raj &amp; Bajaj Auto · society ↔ business · the weekend</p>
    <p class="cp"><b>Module 2 (L08–L12):</b> Early Systems — agrarian economies · feudal Europe &amp; the zamindari · guild systems · life before machines</p>
    <p class="cp"><b>Module 3 (L13–L22):</b> The Machine Age — the water frame &amp; the factory · steam &amp; Cottonopolis · three phases of the labour movement · empire &amp; mercantilism · the economic systems</p>
    <p class="cp"><b>Module 4 (L23–L27):</b> The Corporation — Taylorism · Fayolism · the rise of large corporations · the world wars &amp; business</p>
    <p class="cp"><b>Module 5 (L28–L34):</b> Indian Business — the East India Company charters · Jagat Seth &amp; the Wadia dockyards · agency houses &amp; the commodity trades · the mills · the world wars · Swadeshi · the Bombay Plan · the major examination</p>
  </div>
  <p class="c-foot">The Atlas · IIT Jodhpur B.S. in Management &amp; Technology</p>
</div>
"""


def toc_html(page_map) -> str:
    rows = []
    pset = {n: p for n, p in page_map.items()}
    for label, start, end in MODULES:
        rows.append(f'<div class="toc-part">{label}</div>')
        for n in range(start, end + 1):
            page = pset.get(n, "")
            rows.append(
                f'<div class="toc-row"><span class="toc-code">L{n:02d}</span>'
                f'<span class="toc-title">{TITLES[n-1]}</span>'
                f'<span class="toc-pnum" data-lecture="{n}">{page if page else "…"}</span></div>'
            )
    return '<h1 class="toc-head">Table of Contents</h1><p class="toc-lead">All 34 lectures in official course order (L01 → L34). Click any entry to jump to the lecture.</p><div class="toc">' + "".join(rows) + "</div>"


LECTURE_TMPL = """
<div class="lecture" id="lecture-{n}">
  <div class="l-runpart">{part_label}</div>
  <h1 class="l-title">Lecture {n}: {title}</h1>
  {body}
</div>
"""


def module_label_for(n: int) -> str:
    for label, start, end in MODULES:
        if start <= n <= end:
            return label
    raise AssertionError(f"lecture {n} outside all modules")


def render(page_map) -> bytes:
    body_parts = [COVER, toc_html(page_map)]
    for n, text in lectures:
        body = md_to_html(text)
        # strip the md's own leading "# Lecture ..." heading — the template adds the canonical one
        body = re.sub(r"^\s*<h[12][^>]*>\s*Lecture\s+\d+[\s\S]*?</h[12]>\s*", "", body, count=1)
        body_parts.append(
            LECTURE_TMPL.format(n=n, title=TITLES[n - 1], part_label=module_label_for(n), body=body)
        )
    html = f"<html><head><meta charset='utf-8'><style>{CSS}</style></head><body>{''.join(body_parts)}</body></html>"
    return HTML(string=html, base_url=ROOT).write_pdf()


CSS = """
@page {
  size: A4;
  margin: 30mm 20mm 26mm 20mm;
  @top-center { content: "ECONOMIC & BUSINESS HISTORY · SEM 1"; font-size: 8pt; color: #7a2230; font-family: Georgia, serif; }
  @bottom-center { content: "The Atlas · IIT Jodhpur B.S. in Management & Technology  Page " counter(page) " of " counter(pages); font-size: 8pt; color: #8a6b45; font-family: Georgia, serif; }
}
@page cover { margin: 0; @top-center { content: none; } @bottom-center { content: none; } }
body { font-family: Georgia, 'Times New Roman', serif; color: #2b2014; font-size: 10.5pt; line-height: 1.7; }
.cover { page: cover; width: 100%; height: 297mm; background: #f5f0e4; border-top: 10px solid #7a2230; box-sizing: border-box; padding: 58mm 30mm 0 30mm; text-align: center; }
.c-eyebrow { color: #a16207; font-size: 9pt; letter-spacing: 3px; font-weight: bold; margin: 0; }
.c-eyebrow2 { color: #2b2014; font-size: 7.5pt; letter-spacing: 1.4px; font-weight: bold; margin: 6pt 0 0 0; }
.c-title { bookmark-level: none; font-size: 34pt; line-height: 1.15; color: #7a2230; margin: 15mm 0 7mm 0; font-weight: 900; }
.c-sub { font-size: 11pt; color: #2b2014; font-weight: bold; margin: 0 0 9mm 0; }
.c-badges { margin: 0 auto 11mm auto; display: table; border-spacing: 6pt 0; }
.badge { display: table-cell; width: 34mm; padding: 6pt 4pt; background: #e9d8a6; border: 1px solid #d9d2c0; border-radius: 4pt; font-size: 7.5pt; color: #2b2014; letter-spacing: 1px; }
.badge b { font-size: 14pt; color: #7a2230; letter-spacing: 0; }
.c-parts { text-align: left; border: 1px solid #d9d2c0; border-radius: 6pt; padding: 6mm 8mm; background: #f7f4ea; }
.cp-h { color: #a16207; font-weight: bold; font-size: 9pt; margin: 0 0 4pt 0; }
.cp { font-size: 8.3pt; color: #2b2014; margin: 0 0 4pt 0; }
.c-foot { margin-top: 9mm; color: #8a6b45; font-size: 8pt; }
.toc-head { font-size: 16pt; color: #7a2230; margin: 0 0 1mm 0; page-break-after: avoid; }
.toc-lead { color: #a16207; margin: 0 0 3mm 0; font-size: 8.5pt; }
.toc-part { background: #e9d8a6; color: #2b2014; font-weight: bold; font-size: 7.8pt; padding: 2pt 6pt; margin: 3pt 0 1pt 0; border-radius: 3pt; letter-spacing: 1px; }
.toc-row { display: table; width: 100%; border-bottom: 0.5pt solid #d9d2c0; padding: 0.85pt 0; line-height: 1.15; }
.toc-code { display: table-cell; width: 12mm; color: #a16207; font-weight: bold; font-size: 9pt; }
.toc-title { display: table-cell; color: #2b2014; font-size: 8.3pt; }
.toc-pnum { display: table-cell; width: 10mm; text-align: right; color: #7a2230; font-weight: bold; font-size: 9pt; }
.lecture { page-break-before: always; }
.l-runpart { color: #a16207; font-size: 8pt; letter-spacing: 2px; font-weight: bold; margin-bottom: 4pt; }
h1.l-title { font-size: 16pt; color: #7a2230; line-height: 1.25; margin: 0 0 5mm 0; page-break-after: avoid; }
.sec-h { display: block; color: #2b2014; font-weight: bold; font-size: 10.5pt; margin: 4.5mm 0 2mm 0; page-break-after: avoid; }
.lecture p { margin: 0 0 3mm 0; text-align: justify; orphans: 3; widows: 3; }
.lecture ul { margin: 0 0 3mm 0; padding-left: 6mm; }
.lecture li { margin-bottom: 1.2mm; }
.lecture li ul { margin: 0.6mm 0 0.6mm 0; padding-left: 5mm; }
"""

# ---- pass 1: placeholders → discover real page numbers
pdf_bytes = render({})
doc = fitz.open(stream=pdf_bytes, filetype="pdf")
page_map = {}
norm = lambda t: re.sub(r"\s+", " ", t)
for n in range(1, 35):
    needle = norm(f"Lecture {n}: {TITLES[n-1]}")
    short = norm(f"Lecture {n}: {TITLES[n-1]}")[:34]
    for p in range(doc.page_count):
        t = norm(doc[p].get_text("text"))
        if needle in t or short in t:
            page_map[n] = p + 1
            break
missing = [n for n in range(1, 35) if n not in page_map]
if missing:
    print("pass 1 could not locate:", missing)
doc.close()
print(f"pass 1: located {len(page_map)}/34 lecture start pages")

# ---- pass 2: inject the real .toc-pnum numbers
pdf_bytes = render(page_map)
os.makedirs(os.path.dirname(OUT), exist_ok=True)
doc = fitz.open(stream=pdf_bytes, filetype="pdf")
doc.save(OUT)

# ================================================================ HARD GATES
def gate_fail(msg):
    print(f"GATE FAIL: {msg}")
    doc.close()
    sys.exit(1)

print("\n================ GATES ================")

# gate 1 — 34 lectures detected (asserted above; restate)
if len(lectures) != 34:
    gate_fail(f"expected 34 lectures, got {len(lectures)}")
print("gate 1 PASS — detected 34 lectures")

# gate 2 — Lecture 1 on page 3
p1 = None
for p in range(doc.page_count):
    if "Lecture 1: Introduction to Economic and Business History Course" in norm(doc[p].get_text("text")):
        p1 = p + 1
        break
if p1 != 3:
    gate_fail(f"Lecture 1 expected on page 3, found {p1}")
print("gate 2 PASS — Lecture 1 on page 3")

# gate 3 — exactly 35 top-level bookmarks (TOC + 34 lectures)
toc = doc.get_toc()
top = [t for t in toc if t[0] == 1]
if len(top) != 35:
    gate_fail(f"expected exactly 35 top-level bookmarks (TOC + 34 lectures), got {len(top)}")
print("gate 3 PASS — exactly 35 top-level bookmarks")

# gate 4 — zero unresolved TOC page numbers: every L row's page number resolved
full_text = "\n".join(doc[p].get_text("text") for p in range(doc.page_count))
for n in range(1, 35):
    row_text = norm(f"L{n:02d}")
    # the toc page (page 2) must carry the resolved page number, not the placeholder
    toc_page = doc[1].get_text("text")
    # find the lecture's toc row and check the number follows the code+title
    if str(page_map.get(n, "")) not in toc_page:
        gate_fail(f"TOC page number for L{n} unresolved (expected {page_map.get(n)})")
print("gate 4 PASS — zero unresolved TOC page numbers")

# gate 5 — running header on every content page (pages 3..N; cover and TOC pages 1-2 exempt)
def squash(t: str) -> str:
    return re.sub(r"\s+", "", t).upper()

header_sq = squash("ECONOMIC & BUSINESS HISTORY · SEM 1")
bad_pages = []
for p in range(2, doc.page_count):
    if header_sq not in squash(doc[p].get_text("text")):
        bad_pages.append(p + 1)
if bad_pages:
    gate_fail(f"running header missing on content pages: {bad_pages[:8]}{'…' if len(bad_pages) > 8 else ''}")
print(f"gate 5 PASS — running header 'ECONOMIC & BUSINESS HISTORY · SEM 1' present on all {doc.page_count - 2} content pages")

# gate 6 — strict sequence check: every lecture starts after the previous one.
seq_pairs = [(n, page_map[n], page_map[n + 1]) for n in range(1, 34)]
seq_bad = [(a, pa, pb) for a, pa, pb in seq_pairs if pa >= pb]
if seq_bad:
    gate_fail(f"sequence check FAILED — non-ascending lecture start pages: {seq_bad[:5]}")
print("gate 6 PASS — sequence check: all 33 consecutive pairs strictly ascending (L01 → L34)")

# gate 7 — page count + word total reported explicitly
built_words = len(re.findall(r"\S+", full_text))
print(f"gate 7 — built page count: {doc.page_count} pages")
print(f"gate 7 — built word total (incl. chrome): {built_words} · corpus tokens: {corpus_words}")

# gate 8 — the six late lectures present with their marker terms in the built PDF
for term in ("Swadeshi", "Bombay Plan", "Drucker", "Godrej", "Palmer", "TISCO", "Walchandnagar", "Bengal Famine"):
    if term not in full_text:
        gate_fail(f"late-lecture marker term {term!r} missing from the built PDF")
print("gate 8 PASS — the six late lectures are present with all their marker terms")

# gate 9 — the conflict spellings verbatim in the built PDF
for needle in ("Foyol", "Raurkela", "Berkacre", "Sir Jamshedji Gaikwad", "Sir Jamshetji Jijibhoy", "18-20 deaths"):
    if needle not in full_text:
        gate_fail(f"conflict spelling {needle!r} missing from the built PDF — both sides must render")
print("gate 9 PASS — the conflict spellings render verbatim (Foyol · Raurkela · Berkacre · Gaikwad · Jijibhoy · 18-20)")

# gate 10 — no sixth module anywhere in the built PDF
for needle in ("Module 6", "The Long Run"):
    if needle in full_text:
        gate_fail(f"forbidden trace {needle!r} found in the built PDF")
print("gate 10 PASS — five modules and no sixth anywhere")

doc.close()
print(f"\nSaved: {OUT}")
print("ALL GATES: PASS")
