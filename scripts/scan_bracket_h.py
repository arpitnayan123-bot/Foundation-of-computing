#!/usr/bin/env python3
"""Scan src/ for files containing the 2-char sequence '[' + 'h' (built via chr
   so this script itself survives the transport quirk). Prints file:count only."""
import os

LH = (chr(91) + chr(104)).encode()  # "[h"
root = "/home/z/my-project/src"
hits = []
for dirpath, _, files in os.walk(root):
    for fn in files:
        if not fn.endswith((".tsx", ".ts", ".css", ".js")):
            continue
        p = os.path.join(dirpath, fn)
        try:
            data = open(p, "rb").read()
        except Exception:
            continue
        c = data.count(LH)
        if c:
            hits.append((c, p))
hits.sort(reverse=True)
for c, p in hits:
    print(f"{c:4d}  {p}")
print("TOTAL files with [h]:", len(hits))
