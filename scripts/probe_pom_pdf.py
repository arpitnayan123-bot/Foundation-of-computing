#!/usr/bin/env python3
"""Probe the POM compendium: bookmarks, page furniture, reserved pages."""
import re
import fitz

PDF = "/home/z/my-project/upload/POM_L01-L40_Compiled.pdf"
doc = fitz.open(PDF)
print(f"pages: {doc.page_count}")
toc = doc.get_toc()
top = [t for t in toc if t[0] == 1]
print(f"top-level bookmarks: {len(top)}")
for lvl, title, page in top[:8]:
    print(f"  p{page}  {title[:80]}")
print("  ...")
for lvl, title, page in top[-6:]:
    print(f"  p{page}  {title[:80]}")

# lecture spans
starts = []
for lvl, title, page in top:
    m = re.search(r"\bL(?:ecture\s*)?(\d+)\b", title)
    if m:
        starts.append((int(m.group(1)), title, page - 1))
starts.sort(key=lambda x: x[0])
print(f"lecture bookmarks: {len(starts)}")

def norm(s):
    return re.sub(r"\s+", " ", s).strip()

# reserved pages: L22 -> page 69, L39 -> page 125 per the printed TOC
for probe in (69, 125):
    print(f"\n--- page {probe} raw (first 500 chars) ---")
    print(doc[probe - 1].get_text("text")[:500])

# page furniture sample: one mid-lecture page
print("\n--- page 10 raw (first 700 chars) ---")
print(doc[9].get_text("text")[:700])
doc.close()
