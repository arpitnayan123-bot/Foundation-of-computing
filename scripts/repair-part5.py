#!/usr/bin/env python3
"""Repair Part5: move the guest_list block out of BasicsSection into
ListsSection, restoring the quiz-grid opening div the first pass ate."""
from pathlib import Path

P = Path("/home/z/my-project/src/components/notes/Part5.tsx")
src = P.read_text()

# ------------------------------------------------------------------
# 1) excise the GUEST block (currently sitting before Basics' quiz grid)
# ------------------------------------------------------------------
start = src.find('            <Reveal className="mt-8">\n        <div className="card-warm p-6 md:p-8">\n          <p className="eyebrow">The deck&rsquo;s dinner-party drill')
assert start != -1, "guest block start not found"
end_marker = '<div className="mt-8 grid gap-5 md:grid-cols-2">'
end = src.find(end_marker, start)
assert end != -1, "basics quiz grid not found after guest block"
guest_block = src[start:end]
src = src[:start] + src[end:]

# ------------------------------------------------------------------
# 2) re-insert it in ListsSection, restoring the quiz-grid opening div
# ------------------------------------------------------------------
quiz_anchor = '        <Reveal>\n          <Quiz\n            source="Concept check"\n            q="What does bicycles[1] return'
i = src.find(quiz_anchor)
assert i != -1, "bicycles quiz not found"
# guest_block currently ends with the grid div opening — split it
grid_idx = guest_block.rfind(end_marker)
guest_only = guest_block[:grid_idx]
assert "guest_list.py" in guest_only
src = src[:i] + guest_only + end_marker + "\n" + src[i:]

# ------------------------------------------------------------------
# 3) tidy the practice-drill indentation
# ------------------------------------------------------------------
src = src.replace(
    "                      { q: <>Guest list: three invites",
    "            { q: <>Guest list: three invites",
)
src = src.replace(
    "negative index.</> },\n]}",
    "negative index.</> },\n          ]}",
)

P.write_text(src)
print("Part5 repaired:", len(src.splitlines()), "lines")
