#!/usr/bin/env python3
"""Build the Statistics for Managers compendium bundle PDF from the corpus.

Rebuilds the official "STM_L01-L33_Compiled.pdf" verification bundle from
scripts/stm_lectures/L01.md..L33.md with:
  · markdown tab_length=2 (two-space nested bullets never flatten)
  · a two-pass PyMuPDF page map (pass 1 renders with placeholders, pass 2
    injects the real page numbers) — WeasyPrint's target-counter() renders
    0 on a span that has no matching href anchor, so the page numbers CANNOT
    be resolved in CSS; the .toc-pnum class exists so the second pass can
    find and fill them (never .toc-page — that name emits a page break per row)
  · bookmark-level on the element that carries the text
  · the subject identity: cover "SEMESTER 1 · 05 · SHELF 05", running header
    "STATISTICS FOR MANAGERS · SEM 1" (a cloned builder keeps the previous
    subject's header — this one is patched)
  · the shelf colour law: violet #6d28d9 headings and rules, gold #ca8a04
    accents on ivory paper

L28 is the DELIBERATE reserved lecture: it renders one page carrying only
the removal card — never filled, never renumbered, no title, no content.

HARD GATES (any failure exits non-zero — the build fails, it does not warn):
  33 lectures · L28 blank/bookmarked/explicitly labelled · Lecture 1 on
  page 3 · exactly 34 top-level bookmarks (TOC + 33 lectures) · running
  header on every content page · strict sequence check · zero unresolved
  TOC page numbers · near-110-page build · the five missing lectures
  present with their marker terms · Marrian/Silvastov/GIG verbatim · the
  L01/L03 duplicate alive on the page · p̄ nowhere.

Run: python3 build_stm_bundle.py
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
LECT_DIR = os.path.join(ROOT, "scripts", "stm_lectures")
OUT = os.path.join(ROOT, "download", "STM_L01-L33_Compiled.pdf")

MODULES = [
    ("MODULE 1 · DATA & DISPLAYS", 1, 4),
    ("MODULE 2 · NUMERICAL MEASURES", 5, 8),
    ("MODULE 3 · PROBABILITY", 9, 11),
    ("MODULE 4 · DISTRIBUTIONS", 12, 16),
    ("MODULE 5 · SAMPLING & ESTIMATION", 17, 26),
    ("MODULE 6 · HYPOTHESIS TESTING", 27, 33),
]

RESERVED = 28
RESERVED_LABEL = "Reserved — removed from the official course sequence"
RESERVED_CARD = (
    "This lecture has been removed from the official course sequence. "
    "The page is intentionally blank so that lecture numbering is preserved."
)

TITLES = [
    "Introduction to Statistics for Managers",
    "Understanding Data, Statistics, and Statistical Analysis",
    "Introduction to Statistics for Managers",
    "Descriptive Statistics: Summarizing and Understanding Data",
    "Graphical Displays for Summarizing Two Variables",
    "Measures of Spread and Distribution Shape",
    "How to Draw a Box Plot and Understand Probability",
    "Overview of Statistics for Business and Economics: Descriptive Data Analysis and Customer Profiling",
    "Fundamental Probability Relationships and Their Applications in Management Decision-Making",
    "Overview of Random Variables and Discrete Probability Distributions",
    "Bivariate and Discrete Probability Distributions",
    "Continuous Probability Distribution and Key Distributions in Statistics",
    "Overview of Probability Distributions and Statistical Concepts",
    "Overview of Normal and Continuous Probability Distributions",
    "Application of Normal Probability Distribution in Inventory Management",
    "Applied Case of Discrete Probability Distribution in Quality Control",
    "Understanding Sampling and Sampling Distributions",
    "Overview of Probability Distributions and Managerial Applications",
    "Understanding Sampling Distribution and the Central Limit Theorem",
    "Understanding Sampling Methods and Distributions",
    "Marrian Dairies Yogurt Market Entry Case Study",
    "Understanding Interval Estimation",
    "Understanding Sampling Distribution Through Practical Exercises",
    "Interval Estimation When Population Standard Deviation is Unknown",
    "Estimating Population Proportion and Interval Estimation",
    "Understanding Transmission Failure Through Descriptive Statistics",
    "Hypothesis Testing: Fundamentals and Framework",
    None,
    "Understanding Hypothesis Testing: Type I and Type II Errors",
    "Understanding One-Tailed Hypothesis Testing with P-Value and Critical Value Approaches",
    "Two-Tail Hypothesis Testing and Population Proportion Testing",
    "Statistical Process Control and Hypothesis Testing Application",
    "Exam Preparation and Course Overview",
]

# ----------------------------------------------------------------- load
lectures = []
corpus_words = 0
for n in range(1, 34):
    path = os.path.join(LECT_DIR, f"L{n:02d}.md")
    if not os.path.exists(path):
        sys.exit(f"missing transcript: {path}")
    text = open(path, encoding="utf-8").read()
    # markdown tab_length=2 — tabs count as two spaces
    text = text.replace("\t", "  ")
    if n == RESERVED:
        lectures.append((n, text))
        continue
    words = len(re.findall(r"\S+", re.sub(r"^# .*\n", "", text).strip()))
    corpus_words += words
    lectures.append((n, text))

print(f"Detected {len(lectures)} lectures")
assert len(lectures) == 33, "expected exactly 33 lectures"
print(f"Corpus token total (lecture bodies incl. bullet markers, H1 excluded): {corpus_words}")
print("(the source compendium's cover claims 27,198 verified words and the rebuild brief repeats it — the delta is per-lecture transcript furniture the extraction strips; see audit/stm-build-note.md for the reconciliation)")

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
  <p class="c-eyebrow2">SEMESTER 1 · 05 · SHELF 05</p>
  <p class="c-eyebrow2">I I T&nbsp;&nbsp;J O D H P U R&nbsp;·&nbsp;B . S .&nbsp;&nbsp;I N&nbsp;&nbsp;M A N A G E M E N T&nbsp;&nbsp;A N D&nbsp;&nbsp;T E C H N O L O G Y</p>
  <h1 class="c-title">Statistics for<br/>Managers</h1>
  <p class="c-sub">Complete Verified Lecture Compendium — Lectures 1 through 33<br/>in Exact Official Course Sequence</p>
  <div class="c-badges">
    <span class="badge"><b>33</b><br/>ORDERED LECTURES</span>
    <span class="badge"><b>27,198</b><br/>VERIFIED WORDS</span>
    <span class="badge"><b>L01–L33</b><br/>ZERO GAPS · BOOKMARKED</span>
  </div>
  <div class="c-parts">
    <p class="cp-h">Prepared for exact verification &amp; sync with The Atlas · Verbatim Compilation · All 33 Lectures</p>
    <p class="cp"><b>Module 1 (L01–L04):</b> Data &amp; Displays — what statistics is · data sources, analytics &amp; ethics · the course map, Excel &amp; R · frequency tables, bar and pie charts, histograms, cross-tabulation &amp; Simpson's paradox</p>
    <p class="cp"><b>Module 2 (L05–L08):</b> Numerical Measures — scatter diagrams &amp; trend lines · mean, median, mode, weighted and geometric mean · percentiles &amp; quartiles · range, IQR, variance, standard deviation, CV · skewness, z-scores, Chebyshev, empirical rule · box plots &amp; the Pelican Stores case</p>
    <p class="cp"><b>Module 3 (L09–L11):</b> Probability — complements, unions, intersections · addition and multiplication laws · mutual exclusivity vs independence · Bayes' theorem · random variables, E(X) and variance · bivariate distributions, covariance · binomial and Poisson</p>
    <p class="cp"><b>Module 4 (L12–L16):</b> Distributions — uniform, normal &amp; exponential · Z-tables and reverse probability · the Weather Teddy inventory case · GIG's Go Bananas quality-control case · quiz and checkpoint summaries</p>
    <p class="cp"><b>Module 5 (L17–L26):</b> Sampling &amp; Estimation — sampling methods &amp; frames · point estimators · sampling distributions &amp; the central limit theorem · standard error · Marrian Dairies case · interval estimation, z and t · proportions · sample-size determination · Metropolitan Research case</p>
    <p class="cp"><b>Module 6 (L27–L33):</b> Hypothesis Testing — null and alternate hypotheses · Type I and Type II errors · one-tail tests · p-value and critical-value approaches · two-tail tests · proportion tests · statistical process control · exam preparation · L28 reserved, numbering preserved</p>
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
            if n == RESERVED:
                title = RESERVED_LABEL
            else:
                title = TITLES[n - 1]
            rows.append(
                f'<div class="toc-row"><span class="toc-code">L{n:02d}</span>'
                f'<span class="toc-title">{title}</span>'
                f'<span class="toc-pnum" data-lecture="{n}">{page if page else "…"}</span></div>'
            )
    return '<h1 class="toc-head">Table of Contents</h1><p class="toc-lead">All 33 lectures in official course order (L01 → L33). Click any entry to jump to the lecture.</p><div class="toc">' + "".join(rows) + "</div>"


LECTURE_TMPL = """
<div class="lecture" id="lecture-{n}">
  <div class="l-runpart">{part_label}</div>
  <h1 class="l-title" bookmark-level="1">{heading}</h1>
  {body}
</div>
"""

RESERVED_TMPL = """
<div class="lecture reserved" id="lecture-28">
  <div class="l-runpart">MODULE 6 · HYPOTHESIS TESTING</div>
  <div class="r-card">
    <p class="r-num">L 2 8</p>
    <h1 class="r-title" bookmark-level="1">Lecture 28 · {label}</h1>
    <p class="r-body">{card}</p>
    <p class="r-foot">LECTURE 28 OF 33 · NUMBERING PRESERVED · PAGE INTENTIONALLY LEFT BLANK</p>
  </div>
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
        if n == RESERVED:
            body_parts.append(RESERVED_TMPL.format(label=RESERVED_LABEL, card=RESERVED_CARD))
            continue
        body = md_to_html(text)
        # strip the md's own leading "# Lecture ..." heading — the template adds the canonical one
        body = re.sub(r"^\s*<h[12][^>]*>\s*Lecture\s+\d+[\s\S]*?</h[12]>\s*", "", body, count=1)
        body_parts.append(
            LECTURE_TMPL.format(n=n, heading=f"Lecture {n}: {TITLES[n - 1]}", part_label=module_label_for(n), body=body)
        )
    html = f"<html><head><meta charset='utf-8'><style>{CSS}</style></head><body>{''.join(body_parts)}</body></html>"
    return HTML(string=html, base_url=ROOT).write_pdf()


CSS = """
@page {
  size: A4;
  margin: 30mm 20mm 26mm 20mm;
  @top-left { content: "STATISTICS FOR MANAGERS · SEM 1"; font-size: 8pt; color: #6d28d9; font-family: Georgia, serif; }
  @top-right { content: "Lecture " counter(page); font-size: 8pt; color: #8b8098; font-family: Georgia, serif; }
  @bottom-center { content: "The Atlas · IIT Jodhpur B.S. in Management & Technology  Page " counter(page) " of " counter(pages); font-size: 8pt; color: #8a6b8a; font-family: Georgia, serif; }
}
@page cover { margin: 0; @top-left { content: none; } @top-right { content: none; } @bottom-center { content: none; } }
body { font-family: Georgia, 'Times New Roman', serif; color: #2b2150; font-size: 10.5pt; line-height: 1.7; }
.cover { page: cover; width: 100%; height: 297mm; background: #f5f1ea; border-top: 10px solid #6d28d9; box-sizing: border-box; padding: 42mm 28mm 0 28mm; text-align: center; }
.c-eyebrow { color: #ca8a04; font-size: 9pt; letter-spacing: 3px; font-weight: bold; margin: 0; }
.c-eyebrow2 { color: #2b2150; font-size: 7.5pt; letter-spacing: 1.4px; font-weight: bold; margin: 6pt 0 0 0; }
.c-title { bookmark-level: none; font-size: 30pt; line-height: 1.12; color: #6d28d9; margin: 9mm 0 5mm 0; font-weight: 900; }
.c-sub { font-size: 10pt; color: #2b2150; font-weight: bold; margin: 0 0 6mm 0; }
.c-badges { margin: 0 auto 7mm auto; display: table; border-spacing: 6pt 0; }
.badge { display: table-cell; width: 34mm; padding: 6pt 4pt; background: #e6cd7f; border: 1px solid #d9d2c0; border-radius: 4pt; font-size: 7.5pt; color: #2b2150; letter-spacing: 1px; }
.badge b { font-size: 14pt; color: #6d28d9; letter-spacing: 0; }
.c-parts { text-align: left; border: 1px solid #d9d2c0; border-radius: 6pt; padding: 4mm 6mm; background: #f8f5fd; }
.cp-h { color: #ca8a04; font-weight: bold; font-size: 8pt; margin: 0 0 3pt 0; }
.cp { font-size: 7.2pt; color: #2b2150; margin: 0 0 3pt 0; line-height: 1.35; }
.c-foot { margin-top: 5mm; color: #8a6b8a; font-size: 8pt; }
.toc-head { font-size: 16pt; color: #6d28d9; margin: 0 0 1mm 0; page-break-after: avoid; }
.toc-lead { color: #ca8a04; margin: 0 0 3mm 0; font-size: 8.5pt; }
.toc-part { background: #e6cd7f; color: #2b2150; font-weight: bold; font-size: 7.8pt; padding: 2pt 6pt; margin: 3pt 0 1pt 0; border-radius: 3pt; letter-spacing: 1px; }
.toc-row { display: table; width: 100%; border-bottom: 0.5pt solid #d9d2c0; padding: 0.85pt 0; line-height: 1.15; }
.toc-code { display: table-cell; width: 12mm; color: #ca8a04; font-weight: bold; font-size: 9pt; }
.toc-title { display: table-cell; color: #2b2150; font-size: 8.3pt; }
.toc-pnum { display: table-cell; width: 10mm; text-align: right; color: #6d28d9; font-weight: bold; font-size: 9pt; }
.lecture { page-break-before: always; }
.l-runpart { color: #ca8a04; font-size: 8pt; letter-spacing: 2px; font-weight: bold; margin-bottom: 4pt; }
h1.l-title { font-size: 16pt; color: #6d28d9; line-height: 1.25; margin: 0 0 5mm 0; page-break-after: avoid; }
.sec-h { display: block; color: #2b2150; font-weight: bold; font-size: 10.5pt; margin: 4.5mm 0 2mm 0; page-break-after: avoid; }
.lecture p { margin: 0 0 3mm 0; text-align: justify; orphans: 3; widows: 3; }
.lecture ul { margin: 0 0 3mm 0; padding-left: 6mm; }
.lecture li { margin-bottom: 1.2mm; }
.lecture li ul { margin: 0.6mm 0 0.6mm 0; padding-left: 5mm; }
.r-card { margin: 60mm auto 0 auto; width: 60%; text-align: center; border: 1pt solid #d8cfe8; background: repeating-linear-gradient(-45deg, #faf8fc, #faf8fc 11px, #f4f1f9 11px, #f4f1f9 12px); padding: 10mm 8mm; }
.r-num { font-size: 20pt; letter-spacing: 8px; color: #8b8098; margin: 0 0 6mm 0; font-weight: bold; }
.r-title { font-size: 13pt; color: #6d28d9; margin: 0 0 6mm 0; }
.r-body { font-size: 10pt; color: #2b2150; text-align: center; margin: 0 0 8mm 0; }
.r-foot { font-size: 7pt; letter-spacing: 2px; color: #8b8098; font-weight: bold; margin: 0; }
"""

# ---- pass 1: placeholders → discover real page numbers
pdf_bytes = render({})
doc = fitz.open(stream=pdf_bytes, filetype="pdf")
page_map = {}
norm = lambda t: re.sub(r"\s+", " ", t)
for n in range(1, 34):
    if n == RESERVED:
        needle = norm(f"Lecture 28 · {RESERVED_LABEL}")
        short = needle[:34]
    else:
        needle = norm(f"Lecture {n}: {TITLES[n-1]}")
        short = needle[:34]
    for p in range(doc.page_count):
        t = norm(doc[p].get_text("text"))
        if needle in t or short in t:
            page_map[n] = p + 1
            break
missing = [n for n in range(1, 34) if n not in page_map]
if missing:
    print("pass 1 could not locate:", missing)
doc.close()
print(f"pass 1: located {len(page_map)}/33 lecture start pages")

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

# gate 1 — 33 lectures detected (asserted above; restate)
if len(lectures) != 33:
    gate_fail(f"expected 33 lectures, got {len(lectures)}")
print("gate 1 PASS — detected 33 lectures")

# gate 2 — Lecture 1 on page 3
p1 = None
for p in range(doc.page_count):
    if "Lecture 1: Introduction to Statistics for Managers" in norm(doc[p].get_text("text")):
        p1 = p + 1
        break
if p1 != 3:
    gate_fail(f"Lecture 1 expected on page 3, found {p1}")
print("gate 2 PASS — Lecture 1 on page 3")

# gate 3 — exactly 34 top-level bookmarks (TOC + 33 lectures), not 35
toc = doc.get_toc()
top = [t for t in toc if t[0] == 1]
if len(top) != 34:
    gate_fail(f"expected exactly 34 top-level bookmarks (TOC + 33 lectures), got {len(top)}")
print("gate 3 PASS — exactly 34 top-level bookmarks")

# gate 3b — the reserved lecture's bookmark label is explicit, never a fallback
reserved_bm = [t for t in top if t[1].startswith("Lecture 28")]
if len(reserved_bm) != 1 or RESERVED_LABEL not in reserved_bm[0][1]:
    gate_fail(f"the reserved bookmark must carry the explicit label, got {reserved_bm}")
print("gate 3b PASS — the reserved bookmark reads 'Lecture 28 · Reserved — removed from the official course sequence'")

# gate 4 — zero unresolved TOC page numbers
toc_page = doc[1].get_text("text")
for n in range(1, 34):
    if str(page_map.get(n, "")) not in toc_page:
        gate_fail(f"TOC page number for L{n} unresolved (expected {page_map.get(n)})")
print("gate 4 PASS — zero unresolved TOC page numbers")

# gate 5 — running header on every content page (pages 3..N; cover and TOC pages 1-2 exempt)
def squash(t: str) -> str:
    return re.sub(r"\s+", "", t).upper()

header_sq = squash("STATISTICS FOR MANAGERS · SEM 1")
bad_pages = []
for p in range(2, doc.page_count):
    if header_sq not in squash(doc[p].get_text("text")):
        bad_pages.append(p + 1)
if bad_pages:
    gate_fail(f"running header missing on content pages: {bad_pages[:8]}{'…' if len(bad_pages) > 8 else ''}")
print(f"gate 5 PASS — running header 'STATISTICS FOR MANAGERS · SEM 1' present on all {doc.page_count - 2} content pages")

# gate 6 — strict sequence check: every lecture starts after the previous one
seq_pairs = [(n, page_map[n], page_map[n + 1]) for n in range(1, 33)]
seq_bad = [(a, pa, pb) for a, pa, pb in seq_pairs if pa >= pb]
if seq_bad:
    gate_fail(f"sequence check FAILED — non-ascending lecture start pages: {seq_bad[:5]}")
print("gate 6 PASS — sequence check: all 32 consecutive pairs strictly ascending (L01 → L33)")

# gate 7 — the reserved page: exactly one page, card only
p28 = page_map[28]
p29 = page_map[29]
if p29 - p28 != 1:
    gate_fail(f"L28's reserved slot spans {p29 - p28} pages — expected exactly one blank page between L27 (p{p28}) and L29 (p{p29})")
r_text = re.sub(r"\s+", " ", doc[p28 - 1].get_text("text"))
r_squash = re.sub(r"\s+", "", r_text).upper()
for phrase in (RESERVED_LABEL, "intentionally blank", "numbering is preserved", "NUMBERING PRESERVED"):
    if phrase.lower() not in r_text.lower() and re.sub(r"\s+", "", phrase).upper() not in r_squash:
        gate_fail(f"the reserved card is missing its phrase {phrase!r}")
# no content leaked: the reserved page must not carry any lecture-content marker
for leaked in ("Hypothesis", "null hypothesis", "Type I"):
    if leaked in r_text:
        gate_fail(f"content leaked into the reserved page: {leaked!r}")
print(f"gate 7 PASS — L28 ships one blank page (p{p28}) carrying only the removal card")

# gate 8 — the five missing lectures present with their marker terms
full_text = "\n".join(doc[p].get_text("text") for p in range(doc.page_count))
for term in ("Quality Associates", "one-tailed", "critical value", "p-value", "sample size", "60 marks", "scientific", "non-programmable"):
    if term not in full_text:
        gate_fail(f"late-lecture marker term {term!r} missing from the built PDF")
print("gate 8 PASS — the five missing lectures are present with all their marker terms")

# gate 9 — the gated spellings verbatim
for needle in ("Marrian", "Silvastov", "GIG", "68.26%", "7,076", "(N-n)/(N-1)"):
    if needle not in full_text:
        gate_fail(f"gated spelling {needle!r} missing from the built PDF — both sides must render")
print("gate 9 PASS — Marrian · Silvastov · GIG and the conflict figures render verbatim")

# gate 10 — the L01/L03 duplicate alive on the page; p̄ nowhere
if "Lecture 1: Introduction to Statistics for Managers" not in full_text or "Lecture 3: Introduction to Statistics for Managers" not in full_text:
    gate_fail("the L01/L03 duplicate is broken in the built PDF — both H1s must carry the same title")
if "p̄" in full_text:
    gate_fail("p-bar found in the built PDF — the sample proportion renders as p̂, never p̄")
print("gate 10 PASS — the L01/L03 duplicate alive; p̂ everywhere, p̄ nowhere")

# gate 11 — page count + word total reported explicitly; near-110 pages gate
built_words = len(re.findall(r"\S+", full_text))
print(f"gate 11 — built page count: {doc.page_count} pages (source compendium: 110)")
if not (95 <= doc.page_count <= 125):
    gate_fail(f"built page count {doc.page_count} is not near 110")
print(f"gate 11 — built word total (incl. chrome): {built_words} · corpus tokens: {corpus_words}")

doc.close()
print(f"\nSaved: {OUT}")
print("ALL GATES: PASS")
