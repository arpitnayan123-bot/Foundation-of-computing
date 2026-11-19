#!/usr/bin/env python3
"""Recolour the mktg subject to the locked palette.

Anchors: teal #0f766e · brass #a97d2c · gold #e3c26b · ink #1f2b2b ·
paper #f2efe7 · wine #9f3d54 (reserved markers & authoring notes only).

The off-spec bright teal #14b8a6 becomes a tint of the anchor
(rgba(15,118,110,.82)); lagoon dark panels shift to ink-based gradients;
teal-tinted rgba(20,184,166,*) washes become rgba(15,118,110,*).
"""
import re

FILES = [
    "src/components/mktg/MktgParts1.tsx",
    "src/components/mktg/MktgParts2.tsx",
    "src/components/mktg/MktgParts3.tsx",
    "src/components/mktg/MktgParts4.tsx",
    "src/components/mktg/MktgParts5.tsx",
    "src/components/mktg/MktgParts6.tsx",
    "src/components/mktg/MktgParts7.tsx",
    "src/components/mktg/MktgParts8.tsx",
    "src/components/mktg/MktgReserved.tsx",
    "src/components/mktg/CorpusBlocks.tsx",
    "src/components/mktg/MktgExamWindow.tsx",
    "src/components/notes/exam-themes.ts",
    "src/components/atlas/subjects.ts",
    "src/app/globals.css",
]

LAGOON_OLD = "linear-gradient(165deg,#0c2124 0%,#12302f 60%,#143236 100%)"
LAGOON_NEW = "linear-gradient(165deg,#171f1e 0%,#1f2b2b 58%,#17211f 100%)"

for path in FILES:
    src = open(path, encoding="utf-8").read()
    orig = src
    src = src.replace("#14b8a6", "rgba(15,118,110,.82)")
    src = src.replace(LAGOON_OLD, LAGOON_NEW)
    src = re.sub(r"rgba\(20,\s*184,\s*166,", "rgba(15,118,110,", src)
    # gradient stacks where the tint sat beside #7ee3d4 (an off-spec aqua)
    src = src.replace("linear-gradient(135deg,rgba(15,118,110,.55),rgba(15,118,110,.85))",
                      "linear-gradient(135deg,rgba(15,118,110,.6),rgba(15,118,110,.9))")
    src = src.replace("#7ee3d4", "rgba(15,118,110,.55)")
    if src != orig:
        open(path, "w", encoding="utf-8").write(src)
        print(f"recoloured: {path}")
    else:
        print(f"unchanged : {path}")

# subjects.ts — the shelf card anchors: teal + brass (accent2 was the
# bright teal; brass is the palette's second anchor)
s = open("src/components/atlas/subjects.ts", encoding="utf-8").read()
s = s.replace('    accent: "rgba(15,118,110,.82)",\n    accent2: "#0f766e",', '    accent: "#0f766e",\n    accent2: "#a97d2c",')
open("src/components/atlas/subjects.ts", "w", encoding="utf-8").write(s)
print("subjects.ts anchors set to teal + brass")

# exam-themes — page background to paper
t = open("src/components/notes/exam-themes.ts", encoding="utf-8").read()
t = t.replace('pageBg: "linear-gradient(180deg,#f4f7f4 0%,#eef3ee 100%)"',
              'pageBg: "linear-gradient(180deg,#f2efe7 0%,#ece9df 100%)"')
open("src/components/notes/exam-themes.ts", "w", encoding="utf-8").write(t)
print("exam theme page → paper")

# globals.css — the mktg canvas washes to the palette
g = open("src/app/globals.css", encoding="utf-8").read()
g = g.replace("radial-gradient(900px 520px at 8% -4%, rgba(15,118,110,.10), transparent 60%)",
              "radial-gradient(900px 520px at 8% -4%, rgba(15,118,110,.12), transparent 60%)")
open("src/app/globals.css", "w", encoding="utf-8").write(g)
print("mktg-canvas washes aligned")
