#!/usr/bin/env python3
"""Extract per-lecture topic headings from scripts/foc-pdf.txt.

Heading heuristics for a PDF text dump: short line, no trailing
punctuation, not a bullet continuation, letters-dominant.
"""
import re
from pathlib import Path

src = Path("/home/z/my-project/scripts/foc-pdf.txt").read_text()
lines = src.split("\n")

# locate lecture starts
starts = []
for i, ln in enumerate(lines):
    m = re.match(r"^Lecture\s+(\d+)", ln.strip())
    if m and len(ln.strip()) < 70:
        starts.append((int(m.group(1)), i))

starts.sort(key=lambda t: t[1])

# dedupe: keep first occurrence of each lecture number as a boundary
seen = {}
bounds = []
for n, i in starts:
    if n not in seen:
        seen[n] = i
        bounds.append((n, i))
bounds.sort(key=lambda t: t[1])

def is_heading(ln: str) -> bool:
    s = ln.strip()
    if not (3 <= len(s) <= 70):
        return False
    if s.endswith((".", ",", ";", ":")):
        return False
    if re.match(r"^[-•*·▪]", s):
        return False
    letters = sum(c.isalpha() for c in s)
    if letters < max(3, len(s) * 0.45):
        return False
    # reject sentence-like lines (contain " the ", " is " mid-line with lowercase start)
    if s[0].islower():
        return False
    return True

out = []
for bi, (n, i) in enumerate(bounds):
    end = bounds[bi + 1][1] if bi + 1 < len(bounds) else len(lines)
    block = lines[i:end]
    title = block[1].strip() if len(block) > 1 and block[1].strip() else "(no title line)"
    heads = []
    for ln in block[2:]:
        if is_heading(ln):
            s = ln.strip()
            if s not in heads:
                heads.append(s)
    out.append((n, title, heads, end - i))

print(f"Lectures found: {len(bounds)} -> {[b[0] for b in bounds]}")
for n, title, heads, size in out:
    print(f"\n===== L{n}: {title}  ({size} lines) =====")
    for h in heads:
        print(f"  - {h}")
