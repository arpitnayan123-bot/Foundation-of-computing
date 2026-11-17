#!/usr/bin/env python3
"""Phase 2 — re-home every hard-coded FA eyebrow to the derived eyebrowOf().

For each `<Section id="X">` the next `eyebrow="…"` literal (within the
section head) becomes `eyebrow={eyebrowOf("X")}` — derived from
faLectures.ts as `Lecture N · theme`, so it can never drift again.
Also adds the `eyebrowOf` import to each file. Idempotent.
"""
import re
from pathlib import Path

FA = Path("/home/z/my-project/src/components/fa")
FILES = [f"FaParts{i}.tsx" for i in range(1, 12)]

total = 0
for fname in FILES:
    p = FA / fname
    src = p.read_text()

    if 'from "./faLectures"' not in src:
        m = re.search(r'import \{[^}]*\} from "\./FaParts1";\n', src)
        if m:
            at = m.end()
        else:
            m2 = re.search(r'import \{[^}]*\} from "@/components/notes/ui";\n', src)
            if not m2:
                raise SystemExit(f"{fname}: no anchor import found")
            at = m2.end()
        src = src[:at] + 'import { eyebrowOf } from "./faLectures";\n' + src[at:]

    out = []
    pos = 0
    count = 0
    for m in re.finditer(r'<Section id="([\w-]+)">', src):
        em = re.compile(r'eyebrow="([^"]+)"').search(src, m.end(), m.end() + 1200)
        if not em:
            continue
        out.append(src[pos : em.start()])
        out.append(f'eyebrow={{eyebrowOf("{m.group(1)}")}} /* derived — was: {em.group(1)} */')
        pos = em.end()
        count += 1
    out.append(src[pos:])
    if count:
        (p).write_text("".join(out))
    total += count
    print(f"{fname}: {count} eyebrows derived")

print(f"TOTAL: {total}")
