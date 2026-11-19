#!/usr/bin/env python3
"""Generate src/components/ebh/corpus.ts — the verbatim corpus for the
rebuilt EBH shelf (49 chapters across 34 lectures).

The transcripts in scripts/ebh_lectures/L01.md..L34.md are the sole content
authority and are reproduced WORD FOR WORD: every line of every chapter slice
appears in corpus.ts with its exact characters. Only mechanical transforms
are applied, none of which touch words:
  · lines are classified as subhead / paragraph / definition / bullet /
    sub-bullet for rendering; the text itself is never altered
  · the H1 line and bullet markers ("- ") are structure, not content

Chapter map — 49 chapters; the ten lectures the rebuild brief names
(L01, L04, L14, L19, L22, L25, L27, L28, L29, L34) carry 2-3 chapters each,
so no lecture can ever be merged away again:

  L01 ×2  L04 ×3  L14 ×3  L19 ×3  L22 ×2
  L25 ×2  L27 ×3  L28 ×3  L29 ×2  L34 ×3
  every other lecture ships exactly one chapter.

Run: python3 scripts/gen_ebh_corpus_ts.py
Verify: python3 scripts/gen_ebh_corpus_ts.py --verify
"""
import json
import os
import re
import sys

ROOT = "/home/z/my-project"
SRC = os.path.join(ROOT, "scripts", "ebh_lectures")
OUT = os.path.join(ROOT, "src", "components", "ebh", "corpus.ts")

# chapter splits: lecture → [(chapter_id, split_marker_or_None), ...]
# None = chapter starts at the top of the lecture body
SPLITS = {
    1: [("course-map", None), ("course-objectives", "Relationship Between Economics and Business")],
    4: [("course-architecture", None), ("lens-definitions", "Key Conceptual Definitions"), ("evidence-sources", "Sources for Historical Study")],
    14: [("quiz-one-scheme", None), ("agrarian-guilds", "Agrarian Economy: Foundational Concepts"), ("trade-roads-industry", "Trade Routes and Commercial Development")],
    19: [("machines-recap-live", None), ("empire-mercantilism", "Globalization of Industrial Revolution"), ("labor-phases-recap", "Labor Movement and Working Class Resistance")],
    22: [("systems-compared", None), ("social-cultural-impact", "Part 3: Social and Cultural Impact of Industrial Revolution")],
    25: [("taylorism-review", None), ("fayol-framework", "Henry Fayol's Contributions to Management Theory (Fayolism)")],
    27: [("wars-context", None), ("war-industries", "Emergence of State Capitalism"), ("india-superpower", "Rise of Indian Businesses")],
    28: [("eic-charters", None), ("indian-intermediaries", "Roles of Indian Entrepreneurs During Colonial Rule (1600s-1813)"), ("turning-point-1813", "Key Historical Turning Point: 1813")],
    29: [("management-evolution-recap", None), ("wars-india-recap", "Impact of World Wars on Business")],
    34: [("module5-review-colonial", None), ("agency-bombay-plan", "Indian Business Houses in Agency Trade (Post-1813)"), ("course-review-major-exam", "Course Overview and Exam Pattern")],
}

SINGLE = {
    2: "scarcity-branches", 3: "firm-profit-motive", 5: "license-raj-bajaj",
    6: "society-business", 7: "business-society-weekend", 8: "agrarian-basics",
    9: "econ-tech-recap", 10: "feudal-zamindari", 11: "guild-ladder",
    12: "life-before-machines", 13: "shuttle-jenny", 15: "water-frame-factory",
    16: "steam-cottonopolis", 17: "labor-phase-one", 18: "labor-phase-two",
    20: "labor-phase-three", 21: "economic-systems", 23: "taylor-scientific",
    24: "ir-impact-recap", 26: "large-corporations", 30: "colonial-commodities",
    31: "agency-entrepreneurs", 32: "wwi-swadeshi", 33: "wwii-famine",
}

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
    for num in sorted(set(SPLITS) | set(SINGLE)):
        body = load_lecture(num)
        if num in SPLITS:
            chs = SPLITS[num]
            for ci, (ch, marker) in enumerate(chs):
                until = chs[ci + 1][1] if ci + 1 < len(chs) else None
                sl = slice_chapter(body, marker, until)
                blocks = classify(sl)
                chapters[ch] = blocks
                words = sum(len(re.findall(r"\S+", b[1])) for b in blocks)
                word_total += words
                log.append(f"L{num:02d} {ch:26s} {len(blocks):3d} blocks {words:5d} tokens")
        else:
            ch = SINGLE[num]
            blocks = classify(body)
            chapters[ch] = blocks
            words = sum(len(re.findall(r"\S+", b[1])) for b in blocks)
            word_total += words
            log.append(f"L{num:02d} {ch:26s} {len(blocks):3d} blocks {words:5d} tokens")
    return chapters, word_total, log


def emit(chapters, word_total):
    parts = [
        "/* ==========================================================",
        "   EBH corpus — VERBATIM lecture text for the rebuilt shelf 04,",
        "   generated word-for-word from scripts/ebh_lectures/L01-L34.md",
        f"   ({word_total} content tokens across 49 chapters).",
        "",
        "   GENERATED by scripts/gen_ebh_corpus_ts.py — do not hand-edit.",
        "   Block types: sh = subhead · p = paragraph · def = 'X: Y' row ·",
        "   li = list item · li2 = sub-item. Text is never altered by the",
        "   renderer; the transcripts are the sole content authority.",
        "   ========================================================== */",
        "",
        'export type CorpusBlock = { t: "sh" | "p" | "def" | "li" | "li2"; s: string };',
        "",
        "export const EBH_CORPUS: Record<string, CorpusBlock[]> = {",
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
