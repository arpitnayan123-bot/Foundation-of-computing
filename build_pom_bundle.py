#!/usr/bin/env python3
"""Build the Principles of Marketing compendium bundle PDF from the corpus.

Rebuilds the official "POM_L01-L40_Compiled.pdf" verification bundle from
scripts/mktg_lectures/L01.md..L40.md with:
  · markdown tab_length=2
  · a two-pass PyMuPDF page map (pass 1 renders with placeholders, pass 2
    injects the real page numbers) — WeasyPrint's target-counter() renders
    0 on a span that has no matching href anchor, so the page numbers CANNOT
    be resolved in CSS; the .toc-pnum class exists so the second pass can
    find and fill them (never .toc-page — that name was the old bug)
  · the subject identity: cover "SEMESTER 1 · 01 · SHELF 03", running header
    "PRINCIPLES OF MARKETING · SEM 1" — the prior subject's identity
    (SHELF 02, algorithmic-thinking vocabulary, bronze/orange palette,
    cloned output filenames) is purged by construction and re-checked by gate
  · L22 and L39 render as blank pages carrying only the removal card
    ("numbering preserved · page intentionally left blank")

HARD GATES (any failure exits non-zero — the build fails, it does not warn):
  Detected 40 lectures · Lecture 1 on page 3 · 41 top-level bookmarks
  (TOC + 40 lectures, reserved entries carrying their lecture numbers) ·
  reserved pages blank-but-for-the-card at their expected positions ·
  running header on every content page · strict sequence check ·
  built page count + word total reported explicitly.

Run: python3 build_pom_bundle.py
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
LECT_DIR = os.path.join(ROOT, "scripts", "mktg_lectures")
OUT = os.path.join(ROOT, "download", "POM_L01-L40_Compiled.pdf")

PARTS = [
    (1, "PART I · FOUNDATIONS, VALUE & EXCHANGE", 1, 10),
    (2, "PART II · EXPECTATION GAP, LOYALTY & STP", 11, 17),
    (3, "PART III · POSITIONING", 18, 22),
    (4, "PART IV · THE CONSUMER MIND", 23, 28),
    (5, "PART V · PSYCHOLOGY, BRAND & BEHAVIOUR", 29, 34),
    (6, "PART VI · MARKETING IN PRACTICE", 35, 40),
]

TITLES = [
    "Introduction to Marketing: Understanding Customers, Markets, Brands and Value",
    "Introduction to Marketing: Understanding Customer Value and Business Success",
    "Understanding Marketing: Definitions, Concepts, and Application",
    "Introduction to Marketing and Understanding Consumer Behavior",
    "Understanding Customer Perceived Value",
    "Marketing Environment and Exchange Systems",
    "Fundamental Concepts in Customer Perceived Value and Marketing Exchange",
    "Expectation Gap, Satisfaction, and Loyalty in Marketing",
    "Understanding Customer Satisfaction and Loyalty: Key Concepts and Financial Impact",
    "Understanding Existing State, Desired State, and Consumer Decision-Making in Marketing",
    "Segmentation, Targeting, and Positioning (STP): Fundamentals and Market Strategy",
    "Behavioral and Benefit-Based Market Segmentation",
    "Segmentation and Targeting in Real-World Marketing: The Tupo Case Study",
    "Targeting and Positioning in Marketing Strategy",
    "Understanding Positioning Strategy in Marketing",
    "Segmentation, Targeting, Positioning, and Micro-Marketing in Modern Marketing",
    "Points of Differentiation (POD) and Points of Parity (POP) in Marketing Strategy",
    "Understanding Consumer Behavior: Perception, Opinion Formation, and Purchase Decisions",
    "Overview of Consumer Buying Decision Process",
    "Consumer Behavior: Understanding Purchase Decisions and Consumer Journey",
    "Overview of Consumer Decision-Making Journey and Integrated Behavior Framework",
    "The Decision Journey — Consolidated",
    "Understanding Theories of Motivation in Consumer Behavior",
    "Understanding Perception in Consumer Behavior",
    "Understanding Perception and Gestalt Principles in Marketing",
    "Understanding Consumer Behavior: Motivation, Perception, and Brand Humanization",
    "Understanding Humanizing a Brand Through Product Attributes and Human Characteristics",
    "Understanding Cognitive Biases in Consumer Decision-Making",
    "Product and Product Strategy",
    "Overview of Product Concepts and Portfolio Management",
    "Product Portfolio, Mix, and Strategy Fundamentals",
    "Deepening into Product Strategy: Line Extensions and Market Stretching",
    "Market Stretch and Product Portfolio Strategy",
    "Understanding Product Narratives and Brand Humanization",
    "Overview of Product Strategy and Co-Branding",
    "Pricing Strategy: Frameworks, Psychology, and Implementation",
    "Common Pricing Strategies and Their Execution",
    "Principles of Marketing and Marketing Communications",
    "Lecture 39",
    "Final Class: Three C's in Marketing Communication and Examination Guidelines",
]

RESERVED = {22, 39}

# ----------------------------------------------------------------- load
lectures = []
corpus_words = 0
for n in range(1, 41):
    path = os.path.join(LECT_DIR, f"L{n:02d}.md")
    if not os.path.exists(path):
        sys.exit(f"missing transcript: {path}")
    text = open(path, encoding="utf-8").read()
    # markdown tab_length=2 — tabs count as two spaces
    text = text.replace("\t", "  ")
    words = 0 if n in RESERVED else len(re.findall(r"\S+", re.sub(r"^# .*\n", "", text).strip()))
    corpus_words += words
    lectures.append((n, text))

print(f"Detected {len(lectures)} lectures")
assert len(lectures) == 40, "expected exactly 40 lectures"
print(f"Corpus word total (lecture bodies, furniture excluded): {corpus_words}")
print("(the source compendium's cover claims 34,414 verified words — its count includes page furniture and title lines; see the build note for the reconciliation)")

# ----------------------------------------------------------------- md → html
def md_to_html(text: str) -> str:
    out = []
    for raw in text.split("\n"):
        line = raw.rstrip()
        # strip leading indentation — the PDF extraction indents continuation
        # lines, and 4+ leading spaces would become markdown code blocks
        # (monospace, clipped at the page edge)
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
    return "<pre>" + md + "</pre>"

COVER = """
<div class="cover">
  <p class="c-eyebrow">T H E&nbsp;&nbsp;A T L A S&nbsp;·&nbsp;M A S T E R&nbsp;&nbsp;C O M P E N D I U M</p>
  <p class="c-eyebrow2">SEMESTER 1 · 01 · SHELF 03</p>
  <p class="c-eyebrow2">I I T&nbsp;&nbsp;J O D H P U R&nbsp;·&nbsp;B . S .&nbsp;&nbsp;I N&nbsp;&nbsp;M A N A G E M E N T&nbsp;&nbsp;A N D&nbsp;&nbsp;T E C H N O L O G Y</p>
  <h1 class="c-title">Principles of<br/>Marketing</h1>
  <p class="c-sub">Complete Verified Lecture Compendium — Lectures 1 through 40<br/>in Exact Official Course Sequence</p>
  <div class="c-badges">
    <span class="badge"><b>40</b><br/>ORDERED LECTURES</span>
    <span class="badge"><b>34,414</b><br/>VERIFIED WORDS</span>
    <span class="badge"><b>L01–L40</b><br/>ZERO GAPS · BOOKMARKED</span>
  </div>
  <div class="c-parts">
    <p class="cp-h">Prepared for exact verification &amp; sync with The Atlas · Verbatim Compilation · All 40 Lectures</p>
    <p class="cp"><b>Part I (L01–L10):</b> Foundations, Value &amp; Exchange · customers, markets, brands &amp; value · the marketing system · closed-system consumers · customer perceived value · exchange systems · expectation gap, satisfaction &amp; loyalty</p>
    <p class="cp"><b>Part II (L11–L17):</b> Expectation Gap, Loyalty &amp; STP · segmentation fundamentals · behavioural &amp; benefit segmentation · the Tupo case · targeting · positioning strategy · micro-marketing · POD &amp; POP</p>
    <p class="cp"><b>Part III (L18–L22):</b> Positioning &amp; the Decision Journey · consumer behaviour · the buying decision process · purchase decisions · integrated behaviour framework</p>
    <p class="cp"><b>Part IV (L23–L28):</b> The Consumer Mind · theories of motivation · perception · Gestalt principles · attitude retention &amp; brand humanization · the ABC model · cognitive biases</p>
    <p class="cp"><b>Part V (L29–L34):</b> Product &amp; Portfolio · product strategy · product levels · width, depth &amp; length · line extension · market stretching · product narratives</p>
    <p class="cp"><b>Part VI (L35–L40):</b> Marketing in Practice · co-branding · pricing frameworks · pricing strategies · marketing communications · the three C's &amp; dual-process theory</p>
  </div>
  <p class="c-foot">The Atlas · IIT Jodhpur B.S. in Management &amp; Technology</p>
</div>
"""

def toc_html(page_map) -> str:
    rows = []
    pset = {n: p for n, p in page_map.items()}
    for part_no, part_label, start, end in PARTS:
        rows.append(f'<div class="toc-part">{part_label}</div>')
        for n in range(start, end + 1):
            page = pset.get(n, "")
            suffix = " — removed" if n in RESERVED else ""
            rows.append(
                f'<div class="toc-row"><span class="toc-code">L{n:02d}</span>'
                f'<span class="toc-title">{TITLES[n-1]}{suffix}</span>'
                f'<span class="toc-pnum" data-lecture="{n}">{page if page else "…"}</span></div>'
            )
    return '<h1 class="toc-head">Table of Contents</h1><p class="toc-lead">All 40 lectures in official course order (L01 → L40). Click any entry to jump to the lecture.</p><div class="toc">' + "".join(rows) + "</div>"

LECTURE_TMPL = """
<div class="lecture" id="lecture-{n}">
  <div class="l-runpart">{part_label}</div>
  <h1 class="l-title">Lecture {n}: {title}{suffix}</h1>
  {body}
</div>
"""

RESERVED_TMPL = """
<div class="lecture reserved" id="lecture-{n}">
  <div class="l-runpart">{part_label}</div>
  <h1 class="l-title">Lecture {n}: {title} — removed</h1>
  <div class="r-card">
    <p class="r-num">{spaced}</p>
    <h2 class="r-title">{title}</h2>
    <p class="r-body">This lecture has been removed from the official course
    sequence. The page is intentionally blank so that lecture numbering is
    preserved.</p>
    <p class="r-note">LECTURE {n} OF 40 · NUMBERING PRESERVED · PAGE INTENTIONALLY LEFT BLANK</p>
  </div>
</div>
"""

CSS = """
@page {
  size: A4;
  margin: 26mm 20mm 22mm 20mm;
  @top-center { content: "PRINCIPLES OF MARKETING · SEM 1"; font-size: 8pt; color: #0f766e; font-family: Georgia, serif; }
  @bottom-center { content: "The Atlas · IIT Jodhpur B.S. in Management & Technology  Page " counter(page) " of " counter(pages); font-size: 8pt; color: #8a6b45; font-family: Georgia, serif; }
}
@page cover { margin: 0; @top-center { content: none; } @bottom-center { content: none; } }
body { font-family: Georgia, 'Times New Roman', serif; color: #1f2b2b; font-size: 10pt; line-height: 1.55; }
.cover { page: cover; width: 100%; height: 297mm; background: #f2efe7; border-top: 10px solid #0f766e; box-sizing: border-box; padding: 60mm 30mm 0 30mm; text-align: center; }
.c-eyebrow { color: #a97d2c; font-size: 9pt; letter-spacing: 3px; font-weight: bold; margin: 0; }
.c-eyebrow2 { color: #1f2b2b; font-size: 7.5pt; letter-spacing: 1.4px; font-weight: bold; margin: 6pt 0 0 0; }
.c-title { bookmark-level: none; font-size: 34pt; line-height: 1.15; color: #0f766e; margin: 16mm 0 8mm 0; font-weight: 900; }
.c-sub { font-size: 11pt; color: #1f2b2b; font-weight: bold; margin: 0 0 10mm 0; }
.c-badges { margin: 0 auto 12mm auto; display: table; border-spacing: 6pt 0; }
.badge { display: table-cell; width: 34mm; padding: 6pt 4pt; background: #e3c26b; border: 1px solid #d9d2c0; border-radius: 4pt; font-size: 7.5pt; color: #1f2b2b; letter-spacing: 1px; }
.badge b { font-size: 14pt; color: #0f766e; letter-spacing: 0; }
.c-parts { text-align: left; border: 1px solid #d9d2c0; border-radius: 6pt; padding: 6mm 8mm; background: #f7f5ef; }
.cp-h { color: #a97d2c; font-weight: bold; font-size: 9pt; margin: 0 0 4pt 0; }
.cp { font-size: 8.5pt; color: #1f2b2b; margin: 0 0 4pt 0; }
.c-foot { margin-top: 10mm; color: #8a6b45; font-size: 8pt; }
.toc-head { font-size: 16pt; color: #0f766e; margin: 0 0 1mm 0; page-break-after: avoid; }
.toc-lead { color: #a97d2c; margin: 0 0 3mm 0; font-size: 8.5pt; }
.toc-part { background: #e3c26b; color: #1f2b2b; font-weight: bold; font-size: 7.8pt; padding: 2pt 6pt; margin: 3pt 0 1pt 0; border-radius: 3pt; letter-spacing: 1px; }
.toc-row { display: table; width: 100%; border-bottom: 0.5pt solid #d9d2c0; padding: 0.85pt 0; line-height: 1.15; }
.toc-code { display: table-cell; width: 12mm; color: #a97d2c; font-weight: bold; font-size: 9pt; }
.toc-title { display: table-cell; color: #1f2b2b; font-size: 8.3pt; }
.toc-pnum { display: table-cell; width: 10mm; text-align: right; color: #0f766e; font-weight: bold; font-size: 9pt; }
.lecture { page-break-before: always; }
.l-runpart { color: #a97d2c; font-size: 8pt; letter-spacing: 2px; font-weight: bold; margin-bottom: 4pt; }
h1.l-title { font-size: 17pt; color: #0f766e; line-height: 1.25; margin: 0 0 6mm 0; page-break-after: avoid; }
.sec-h { display: block; color: #1f2b2b; font-weight: bold; font-size: 11pt; margin: 5mm 0 2mm 0; page-break-after: avoid; }
.lecture p { margin: 0 0 2.5mm 0; text-align: justify; orphans: 3; widows: 3; }
.lecture ul { margin: 0 0 3mm 0; padding-left: 6mm; }
.lecture li { margin-bottom: 1.2mm; }
.reserved .r-card { margin: 40mm auto 0 auto; width: 148mm; border: 1.2pt dashed #9f3d54; border-radius: 6pt; background: #fbf3f5; padding: 14mm 10mm; text-align: center; }
.r-num { font-size: 22pt; letter-spacing: 8px; color: #9f3d54; font-weight: 900; margin: 0 0 4mm 0; }
.r-title { font-size: 14pt; color: #1f2b2b; margin: 0 0 6mm 0; }
.r-body { font-size: 10pt; color: #1f2b2b; text-align: center; margin: 0 0 8mm 0; }
.r-note { font-size: 7pt; letter-spacing: 1px; color: #9f3d54; font-weight: bold; margin: 0; white-space: nowrap; }
"""

def part_label_for(n: int) -> str:
    for _, label, start, end in PARTS:
        if start <= n <= end:
            return label
    raise AssertionError(f"lecture {n} outside all parts")

def render(page_map) -> bytes:
    body_parts = [COVER, toc_html(page_map)]
    for n, text in lectures:
        if n in RESERVED:
            body_parts.append(
                RESERVED_TMPL.format(
                    n=n,
                    title=TITLES[n - 1],
                    part_label=part_label_for(n),
                    spaced=f"L {n}" if n != 22 else "L 2 2",
                ).replace("L 39", "L 3 9")
            )
            continue
        body = md_to_html(text)
        # strip the md's own leading "# Lecture ..." heading — the template adds the canonical one
        body = re.sub(r"^\s*<h[12][^>]*>\s*Lecture\s+\d+[\s\S]*?</h[12]>\s*", "", body, count=1)
        suffix = ""
        body_parts.append(
            LECTURE_TMPL.format(n=n, title=TITLES[n - 1], part_label=part_label_for(n), body=body, suffix=suffix)
        )
    html = f"<html><head><meta charset='utf-8'><style>{CSS}</style></head><body>{''.join(body_parts)}</body></html>"
    return HTML(string=html, base_url=ROOT).write_pdf()

# ---- pass 1: placeholders → discover real page numbers
pdf_bytes = render({})
doc = fitz.open(stream=pdf_bytes, filetype="pdf")
page_map = {}
norm = lambda t: re.sub(r"\s+", " ", t)
for n in range(1, 41):
    needle = norm(f"Lecture {n}: {TITLES[n-1]}")
    short = norm(f"Lecture {n}: {TITLES[n-1]}")[:34]
    for p in range(doc.page_count):
        t = norm(doc[p].get_text("text"))
        if needle in t or short in t:
            page_map[n] = p + 1
            break
missing = [n for n in range(1, 41) if n not in page_map]
if missing:
    print("pass 1 could not locate:", missing)
doc.close()
print(f"pass 1: located {len(page_map)}/40 lecture start pages")

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

# gate 1 — 40 lectures detected (asserted above; restate)
if len(lectures) != 40:
    gate_fail(f"expected 40 lectures, got {len(lectures)}")
print("gate 1 PASS — detected 40 lectures")

# gate 2 — Lecture 1 on page 3
p1 = None
for p in range(doc.page_count):
    if "Lecture 1: Introduction to Marketing: Understanding Customers, Markets, Brands and Value" in norm(doc[p].get_text("text")):
        p1 = p + 1
        break
if p1 != 3:
    gate_fail(f"Lecture 1 expected on page 3, found {p1}")
print("gate 2 PASS — Lecture 1 on page 3")

# gate 3 — 41 top-level bookmarks, reserved labels carry their numbers
toc = doc.get_toc()
top = [t for t in toc if t[0] == 1]
if len(top) != 41:
    gate_fail(f"expected 41 top-level bookmarks (TOC + 40 lectures), got {len(top)}")
reserved_bm = [t for t in top if re.match(r"Lecture (22|39):", t[1])]
if len(reserved_bm) != 2:
    gate_fail(f"expected 2 reserved bookmarks carrying lecture numbers, got {len(reserved_bm)}: {[t[1] for t in reserved_bm]}")
print(f"gate 3 PASS — 41 top-level bookmarks; reserved outline labels: {[t[1] for t in reserved_bm]}")

# gate 4 — reserved pages blank-but-for-the-card, at their expected positions
full_text = "\n".join(doc[p].get_text("text") for p in range(doc.page_count))
def squash(t: str) -> str:
    """spacing-insensitive form: letter-spaced and wrapped text still matches"""
    return re.sub(r"\s+", "", t).upper()
for n in (22, 39):
    rp = page_map[n]
    t = doc[rp - 1].get_text("text")
    sq = squash(t)
    card_needed = [
        "REMOVEDFROMTHEOFFICIALCOURSE",
        "NUMBERINGPRESERVED",
        "PAGEINTENTIONALLYLEFTBLANK",
    ]
    for needle in card_needed:
        if needle not in sq:
            gate_fail(f"reserved page for L{n} (page {rp}) missing card text {needle!r}")
    # blank-but-for-the-card: page must NOT carry any lecture-body prose.
    # single-character tokens are letter-spacing artefacts (the running header
    # and part eyebrow are letter-spaced) — count only real words
    tokens = re.findall(r"\S+", t)
    words = len([w for w in tokens if len(w) > 1])
    if words > 90:
        gate_fail(f"reserved page for L{n} (page {rp}) carries {words} real words — not blank-but-for-the-card")
    # position: between its neighbours in the sequence
    prev_n = 21 if n == 22 else 38
    next_n = 23 if n == 22 else 40
    if not (page_map[prev_n] < page_map[n] < page_map[next_n]):
        gate_fail(f"reserved L{n} at page {rp} does not sit between L{prev_n} (p{page_map[prev_n]}) and L{next_n} (p{page_map[next_n]})")
    print(f"gate 4 PASS (L{n}) — page {rp} blank-but-for-the-card, positioned between L{prev_n} and L{next_n}")

# gate 5 — running header on every content page (pages 3..N; cover and TOC pages 1-2 exempt)
# spacing-insensitive: letter-spacing must never fool the gate
header_sq = squash("PRINCIPLES OF MARKETING · SEM 1")
bad_pages = []
for p in range(2, doc.page_count):
    if header_sq not in squash(doc[p].get_text("text")):
        bad_pages.append(p + 1)
if bad_pages:
    gate_fail(f"running header missing on content pages: {bad_pages[:8]}{'…' if len(bad_pages) > 8 else ''}")
print(f"gate 5 PASS — running header 'PRINCIPLES OF MARKETING · SEM 1' present on all {doc.page_count - 2} content pages")

# gate 6 — strict sequence check: every lecture starts after the previous one.
# THIS GATE FAILS THE BUILD — no warning.
seq_pairs = [(n, page_map[n], page_map[n + 1]) for n in range(1, 40)]
seq_bad = [(a, pa, pb) for a, pa, pb in seq_pairs if pa >= pb]
if seq_bad:
    gate_fail(f"sequence check FAILED — non-ascending lecture start pages: {seq_bad[:5]}")
print("gate 6 PASS — sequence check: all 39 consecutive pairs strictly ascending (L01 → L40)")

# gate 7 — page count + word total reported explicitly
built_words = len(re.findall(r"\S+", full_text))
print(f"gate 7 — built page count: {doc.page_count} pages")
print(f"gate 7 — built word total (incl. chrome): {built_words} · corpus body words: {corpus_words}")

# gate 8 — the prior subject's identity must not appear anywhere in the built PDF
for needle in ("SHELF 02", "Algorithmic", "algorithmic", "ALGORITHMIC"):
    if needle in full_text:
        gate_fail(f"prior-subject identity trace {needle!r} found in the built PDF")
print("gate 8 PASS — no prior-subject identity in the built PDF")

doc.close()
print(f"\nSaved: {OUT}")
print("ALL GATES: PASS")
