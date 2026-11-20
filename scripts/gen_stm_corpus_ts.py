#!/usr/bin/env python3
"""Generate src/components/stm/corpus.ts — the verbatim corpus for the
rebuilt STM shelf (67 chapters across 33 lectures, L28 reserved and empty).

The transcripts in scripts/stm_lectures/L01.md..L33.md are the sole content
authority and are reproduced WORD FOR WORD: every line of every chapter slice
appears in corpus.ts with its exact characters. Only mechanical transforms
are applied, none of which touch words:
  · lines are classified as subhead / paragraph / definition / bullet /
    sub-bullet for rendering; the text itself is never altered
  · the H1 line and bullet markers ("- ") are structure, not content
  · maths tokens (σ_x̄, z(α/2), √[·], p̂) stay byte-identical in the data;
    the renderer's display layer maps them to real markup at render time

Chapter map — 67 chapters; L03 (the course-administration session that the
deployed shelf replaced with L01's scales material) is built first among the
split lectures and carries three chapters; L28 carries none — its slot
renders only the removal card, never filled, never renumbered:

  L03 ×3  L04 ×3  L05 ×3   every other content lecture ×2   L28 ×0

Run: python3 scripts/gen_stm_corpus_ts.py
Verify: python3 scripts/gen_stm_corpus_ts.py --verify
"""
import json
import os
import re
import sys

ROOT = "/home/z/my-project"
SRC = os.path.join(ROOT, "scripts", "stm_lectures")
OUT = os.path.join(ROOT, "src", "components", "stm", "corpus.ts")

# chapter splits: lecture → [(chapter_id, split_marker_or_None), ...]
# None = chapter starts at the top of the lecture body
SPLITS = {
    1: [("what-statistics", None), ("data-anatomy-scales", "Understanding Data and Datasets")],
    2: [("data-sources", None), ("analytics-ethics", "Descriptive Statistics")],
    3: [("course-administration", None), ("ai-policy", "AI Policy and Academic Integrity"), ("course-concepts-tools", "Fundamental Statistical Concepts")],
    4: [("categorical-displays", None), ("quantitative-displays", "Summarizing Quantitative Data"), ("crosstab-simpson", "Analyzing Relationships Between Two Variables")],
    5: [("scatter-trend", None), ("location-measures", "Data Types and Summarization Methods"), ("percentiles-quartiles", "Percentiles")],
    6: [("spread-measures", None), ("shape-boxplot", "Measures of Distribution Shape")],
    7: [("boxplot-association", None), ("probability-foundations", "Introduction to Probability")],
    8: [("pelican-case", None), ("tendency-selection", "Central Tendency Applications and Selection Criteria")],
    9: [("probability-laws", None), ("conditional-bayes", "Conditional Probability")],
    10: [("random-variables", None), ("tv-distribution", "Empirical Discrete Probability Distribution")],
    11: [("bivariate-covariance", None), ("binomial-poisson", "Binomial Probability Distribution")],
    12: [("continuous-uniform", None), ("normal-standard", "Normal Probability Distribution")],
    13: [("quiz-checkpoint", None), ("demand-mix", "Discrete Probability Distributions")],
    14: [("z-forward", None), ("z-reverse", "Reverse Probability: Finding Values Given Probabilities")],
    15: [("teddy-sigma", None), ("service-level", "Probability of Stockout Analysis")],
    16: [("gig-case", None), ("shutdown-levers", "Analysis of Different Threshold Levels:")],
    17: [("sampling-vocabulary", None), ("point-estimators", "Point Estimation")],
    18: [("poisson-staffing", None), ("pmf-cdf-lab", "Case Study: MBA Graduate Starting Salaries")],
    19: [("sampling-distribution", None), ("clt-standard-error", "Central Limit Theorem")],
    20: [("probability-designs", None), ("nonprobability-designs", "Convenience Sampling")],
    21: [("marrian-setup", None), ("sample-size-power", "Sampling Distribution Analysis")],
    22: [("interval-known", None), ("confidence-dial", "Margin of Error Concept")],
    23: [("randbetween-lab", None), ("se-shrink", "Standard Error and Sample Size Relationship")],
    24: [("t-distribution", None), ("interval-planner", "Practical Example: Off-Campus Housing Costs")],
    25: [("proportion-interval", None), ("planning-value", "Determining Sample Size for Proportion Estimation")],
    26: [("metropolitan-descriptives", None), ("metropolitan-interval", "Confidence Interval Estimation")],
    27: [("hypothesis-framework", None), ("tails-errors", "Forms of Null and Alternate Hypotheses")],
    29: [("error-control", None), ("alpha-decision", "The Trade-off Between Type I and Type II Errors")],
    30: [("one-tail-pvalue", None), ("critical-value-metro", "Critical Value Approach")],
    31: [("two-tail-tests", None), ("proportion-test", "Case Study: Toothpaste Filling Process")],
    32: [("quality-associates", None), ("control-limits", "Control Limits Establishment")],
    33: [("exam-brief", None), ("course-recap", "Study Recommendations")],
}

RESERVED = 28  # ships empty — no chapter, no content, never filled

TERMINAL = re.compile(r"[.!?:;,]$")
DEF_RE = re.compile(r"^[A-Z0-9][A-Za-z0-9 '&/()\u2019\-\+\.]{1,60}:\s*\S")
SUBHEAD_MAX = 68


def classify(lines):
    """lines → blocks. Text preserved verbatim; markers only decide types."""
    blocks = []  # [type, text]
    for raw in lines:
        if not raw.strip():
            continue
        stripped = raw.lstrip()
        if stripped.startswith("- "):
            level = 2 if raw.startswith("  - ") else 1
            blocks.append(["li2" if level == 2 else "li", stripped[2:]])
        elif DEF_RE.match(stripped) and len(stripped) > 68:
            blocks.append(["def", stripped])
        elif len(stripped) <= SUBHEAD_MAX and not TERMINAL.search(stripped) and not re.match(r"^\d+\.\s", stripped):
            blocks.append(["sh", stripped])
        else:
            blocks.append(["p", stripped])
    return blocks


def slice_chapter(lines, marker, until):
    """Return the line slice for a chapter [marker, until) — H1 excluded.
    The split marker line itself opens the chapter (it is the chapter's
    own heading), so no transcript heading is ever lost to slicing."""
    out = []
    started = marker is None
    for ln in lines:
        s = ln.strip()
        if not started:
            if s == marker:
                started = True
                out.append(ln)
            continue
        if until is not None and s == until and out and out[-1].strip() != s:
            break
        out.append(ln)
    if not started:
        raise SystemExit(f"split marker not found: {marker!r}")
    return out


def load_lecture(num):
    path = os.path.join(SRC, f"L{num:02d}.md")
    lines = open(path, encoding="utf-8").read().splitlines()
    if not lines or not lines[0].startswith(f"# Lecture {num}:"):
        raise SystemExit(f"H1 missing in {path}")
    return lines[1:]


def build():
    chapters = {}  # id → blocks
    log = []
    word_total = 0
    for num in sorted(SPLITS):
        body = load_lecture(num)
        chs = SPLITS[num]
        for ci, (ch, marker) in enumerate(chs):
            until = chs[ci + 1][1] if ci + 1 < len(chs) else None
            sl = slice_chapter(body, marker, until)
            blocks = classify(sl)
            chapters[ch] = blocks
            words = sum(len(re.findall(r"\S+", b[1])) for b in blocks)
            word_total += words
            log.append(f"L{num:02d} {ch:26s} {len(blocks):3d} blocks {words:5d} tokens")
    return chapters, word_total, log


def emit(chapters, word_total):
    parts = [
        "/* ==========================================================",
        "   STM corpus — VERBATIM lecture text for the rebuilt shelf 05,",
        "   generated word-for-word from scripts/stm_lectures/L01-L33.md",
        f"   ({word_total} content tokens across {len(chapters)} chapters;",
        "   L28 is the reserved lecture and carries no corpus).",
        "",
        "   GENERATED by scripts/gen_stm_corpus_ts.py — do not hand-edit.",
        "   Block types: sh = subhead · p = paragraph · def = 'X: Y' row ·",
        "   li = list item · li2 = sub-item. Text is never altered by the",
        "   renderer; the transcripts are the sole content authority.",
        "   ========================================================== */",
        "",
        'export type CorpusBlock = { t: "sh" | "p" | "def" | "li" | "li2"; s: string };',
        "",
        "export const STM_CORPUS: Record<string, CorpusBlock[]> = {",
    ]
    for ch, blocks in chapters.items():
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
        m = re.match(r'^    \{ t: "([a-z2]{1,3})", s: ', ln)
        if not m:
            raise SystemExit(f"unparseable block line: {ln[:80]!r}")
        i = m.end()
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
        out.append((m.group(1), s))
    return out


def verify(chapters):
    flat = [(t, s) for ch in chapters for (t, s) in chapters[ch]]
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
    chapters, word_total, log = build()
    for line in log:
        print(line)
    print(f"TOTAL corpus content tokens: {word_total} across {len(chapters)} chapters")
    out = emit(chapters, word_total)
    print(f"wrote {out}")
    ok = verify(chapters)
    sys.exit(0 if ok else 1)
