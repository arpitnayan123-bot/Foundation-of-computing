#!/usr/bin/env python3
"""Inventory FoC sections + CodeBlocks across notes/Part1-10.

Prints, per file: each exported Section component (function name),
its <Section id="..."> if present, and every CodeBlock title + whether
runnable={false} appears within ~6 lines of the block opening.
"""
import re
from pathlib import Path

BASE = Path("/home/z/my-project/src/components/notes")

for n in range(1, 11):
    f = BASE / f"Part{n}.tsx"
    src = f.read_text()
    print(f"\n===== Part{n}.tsx ({len(src.splitlines())} lines) =====")
    # exported section components
    for m in re.finditer(r"export function (\w+Section)\(", src):
        line = src[: m.start()].count("\n") + 1
        # find the nearest Section id= after the export
        sec = re.search(r'<Section\s+id="([^"]+)"', src[m.start(): m.start() + 400])
        sid = sec.group(1) if sec else "?"
        print(f"  {m.group(1)}  (line {line}, section id='{sid}')")
    # CodeBlock titles
    for m in re.finditer(r"<CodeBlock", src):
        line = src[: m.start()].count("\n") + 1
        chunk = src[m.start(): m.start() + 600]
        t = re.search(r'title="([^"]+)"', chunk)
        runnable_off = 'runnable={false}' in chunk.split(">", 1)[0] or "runnable={false}" in chunk[:400]
        print(f"    L{line:<5} code: {t.group(1) if t else '(inline title?)'}" + ("  [static]" if runnable_off else ""))
