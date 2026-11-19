#!/usr/bin/env python3
"""Generate src/components/mktg/corpus.ts — the verbatim corpus data for the
11 newly authored lectures (L29–L38, L40, minus reserved L39).

The lecture transcripts in scripts/mktg_lectures/L*.md are the sole content
authority and are reproduced WORD FOR WORD: every line of every chapter slice
appears in corpus.ts with its exact characters. Only three mechanical
transforms are applied, none of which touches words:
  · PDF line-wrap continuations are joined (a trailing hyphen joins without a
    space — "one-" + "unit difference" → "one-unit difference")
  · the PDF's stray title-continuation line under the H1 is dropped (it
    duplicates the lecture title: "Fundamentals", "Execution", …) — logged
  · lines are classified as subhead / paragraph / definition / bullet for
    rendering; the text itself is never altered

Run: python3 scripts/gen_pom_corpus_ts.py
Verify: python3 scripts/gen_pom_corpus_ts.py --verify  (diffs corpus.ts text
against the md files word-for-word)
"""
import json
import os
import re
import sys

ROOT = "/home/z/my-project"
SRC = os.path.join(ROOT, "scripts", "mktg_lectures")
OUT = os.path.join(ROOT, "src", "components", "mktg", "corpus.ts")

TITLES = {
    29: "Product and Product Strategy",
    30: "Overview of Product Concepts and Portfolio Management",
    31: "Product Portfolio, Mix, and Strategy Fundamentals",
    32: "Deepening into Product Strategy: Line Extensions and Market Stretching",
    33: "Market Stretch and Product Portfolio Strategy",
    34: "Understanding Product Narratives and Brand Humanization",
    35: "Overview of Product Strategy and Co-Branding",
    36: "Pricing Strategy: Frameworks, Psychology, and Implementation",
    37: "Common Pricing Strategies and Their Execution",
    38: "Principles of Marketing and Marketing Communications",
    40: "Final Class: Three C's in Marketing Communication and Examination Guidelines",
}

# chapter splits: lecture → [(chapter_id, split_marker_or_None), ...]
# None = chapter starts at the top of the lecture body
SPLITS = {
    29: [("product-value-experience", None), ("product-levels", "Product Levels and Customer Value Hierarchy")],
    30: [("netflix-product-levels", None), ("product-mix-wdl", "Product Mix Definition and Components")],
    31: [("portfolio-basics", None), ("width-depth-length", "Three Core Concepts of Product Portfolio"), ("portfolio-pruning", "Product Portfolio Growth and Management Strategy")],
    32: [("line-extensions", None), ("market-stretching", "Line Stretching")],
    33: [("stretch-consistency", None), ("three-strategies", "Strategic Framework: Business, Brand, and Marketing Strategy")],
    34: [("narrative-buckets", None), ("abc-narratives", "Key Concept: The ABC Framework")],
    35: [("product-strategy-triad", None), ("co-branding", "Co-Branding: Strategic Partnership Strategy")],
    36: [("pricing-3c", None), ("pricing-steps", "Pricing Objectives")],
    37: [("pricing-strategy-types", None), ("pricing-effectiveness", "Characteristics of Effective Pricing")],
    38: [("attention-filter", None), ("three-cs-marcom", "The Three Cs Framework for Effective Marketing Communications"), ("dual-process", "Dual Process Theory: System 1 and System 2")],
    40: [("three-cs-final", None), ("exam-guidelines", "Examination Format and Expectations")],
}

TERMINAL = re.compile(r"[.!?:;,]$")
DEF_RE = re.compile(r"^[A-Z0-9][A-Za-z0-9 '&/()\u2019\-\+]{1,48}:\s*\S")
EMPTY_DEF_RE = re.compile(r"^[A-Z0-9][A-Za-z0-9 '&/()\u2019\-\+]{1,48}:\s*$")
NUMHEAD_RE = re.compile(r"^\d{1,2}\.\s+\S")


def is_subhead(line: str) -> bool:
    if len(line) > 64:
        return False
    if TERMINAL.search(line):
        return False
    if DEF_RE.match(line) or EMPTY_DEF_RE.match(line):
        return False
    return True


def classify(lines):
    """lines → blocks. Joins wrapped continuations; text preserved verbatim."""
    blocks = []  # [type, text]
    i = 0
    n = len(lines)
    while i < n:
        raw = lines[i].rstrip()
        if not raw.strip():
            i += 1
            continue
        bullet = raw.startswith("- ")
        text = raw[2:] if bullet else raw
        # join wrapped continuations
        while i + 1 < n:
            nxt = lines[i + 1].strip()
            if not nxt:
                break
            starts_lower = bool(re.match(r"^[a-z0-9(₹$\u2018\u201c]", nxt))
            if text.endswith("-") and starts_lower:
                text += nxt  # hyphen wrap: keep the hyphen, no space
                i += 1
                continue
            if not TERMINAL.search(text) and starts_lower:
                text += " " + nxt
                i += 1
                continue
            break
        if bullet:
            blocks.append(["li", text])
        elif EMPTY_DEF_RE.match(text):
            blocks.append(["sh", text])
        elif DEF_RE.match(text):
            blocks.append(["def", text])
        elif is_subhead(text) or NUMHEAD_RE.match(text):
            blocks.append(["sh", text])
        else:
            blocks.append(["p", text])
        i += 1
    return blocks


def load_lecture(num):
    path = os.path.join(SRC, f"L{num:02d}.md")
    lines = open(path, encoding="utf-8").read().splitlines()
    assert lines[0] == f"# Lecture {num}: {TITLES[num]}", f"H1 mismatch in {path}"
    body = lines[1:]
    # drop the PDF's stray title-continuation line (duplicates the H1 tail)
    dropped = []
    if body and body[0].strip():
        first = body[0].strip()
        if TITLES[num].endswith(first) and first != TITLES[num]:
            dropped.append(first)
            body = body[1:]
    return body, dropped


def slice_chapter(lines, marker, until):
    """Return the line slice for a chapter [marker, until)."""
    out = []
    started = marker is None
    for ln in lines:
        if not started:
            if ln.strip() == marker:
                started = True
            continue
        if until is not None and ln.strip() == until:
            break
        out.append(ln)
    if not started:
        raise SystemExit(f"split marker not found: {marker!r}")
    return out


def build():
    corpus = {}
    word_total = 0
    log = []
    for num in sorted(SPLITS):
        body, dropped = load_lecture(num)
        for d in dropped:
            log.append(f"L{num:02d}: dropped stray title-continuation line {d!r}")
        chapters = SPLITS[num]
        for ci, (ch, marker) in enumerate(chapters):
            until = chapters[ci + 1][1] if ci + 1 < len(chapters) else None
            sl = slice_chapter(body, marker, until)
            blocks = classify(sl)
            corpus[ch] = blocks
            words = sum(len(re.findall(r"\S+", b[1])) for b in blocks)
            word_total += words
            log.append(f"L{num:02d} {ch:24s} {len(blocks):3d} blocks {words:5d} words")
    return corpus, word_total, log


def emit(corpus, word_total):
    parts = [
        "/* ==========================================================",
        "   MKTG corpus — VERBATIM lecture text for the 11 newly",
        "   authored lectures (L29–L38, L40), generated word-for-word",
        f"   from scripts/mktg_lectures/L*.md ({word_total} words).",
        "",
        "   GENERATED by scripts/gen_pom_corpus_ts.py — do not hand-edit.",
        "   Block types: sh = subhead · p = paragraph · def = 'X: Y' row ·",
        "   li = list item. Text is never altered by the renderer.",
        "   ========================================================== */",
        "",
        'export type CorpusBlock = { t: "sh" | "p" | "def" | "li"; s: string };',
        "",
        "export const MKTG_CORPUS: Record<string, CorpusBlock[]> = {",
    ]
    for ch, blocks in corpus.items():
        parts.append(f"  {json.dumps(ch)}: [")
        for t, s in blocks:
            parts.append(f"    {{ t: {json.dumps(t)}, s: {json.dumps(s)} }},")
        parts.append("  ],")
    parts.append("};")
    parts.append("")
    open(OUT, "w", encoding="utf-8").write("\n".join(parts))
    return OUT


def extract_text(ts_path):
    """Pull every block string back out of the generated TS for verification."""
    out = []
    for ln in open(ts_path, encoding="utf-8").read().splitlines():
        if not ln.startswith('    { t: "'):
            continue
        m = re.match(r'^    \{ t: "([a-z]{1,3})", s: ', ln)
        if not m:
            raise SystemExit(f"unparseable block line: {ln[:80]!r}")
        t = m.group(1)
        # walk the JSON string literal safely (quotes may appear escaped inside)
        i = m.end()  # at the opening quote
        assert ln[i] == '"'
        i += 1
        esc = False
        while i < len(ln):
            c = ln[i]
            if esc:
                esc = False
            elif c == "\\":
                esc = True
            elif c == '"':
                break
            i += 1
        s = json.loads(ln[m.end(): i + 1])
        out.append((t, s))
    return out


def verify(corpus):
    flat = [(t, s) for ch in corpus for (t, s) in corpus[ch]]
    got = extract_text(OUT)
    if len(flat) != len(got):
        print(f"VERIFY FAIL: {len(flat)} blocks in source vs {len(got)} in TS")
        return False
    for (t, s), (t2, s2) in zip(flat, got):
        if t != t2 or s != s2:
            print(f"VERIFY FAIL:\n  src: {s[:90]!r}\n  ts : {s2[:90]!r}")
            return False
    print(f"VERIFY OK: {len(got)} blocks byte-identical between md corpus and corpus.ts")
    return True


if __name__ == "__main__":
    corpus, word_total, log = build()
    for line in log:
        print(line)
    print(f"TOTAL corpus words: {word_total}")
    out = emit(corpus, word_total)
    print(f"wrote {out}")
    ok = verify(corpus)
    sys.exit(0 if ok else 1)
