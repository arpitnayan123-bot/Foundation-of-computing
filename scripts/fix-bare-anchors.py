#!/usr/bin/env python3
"""Convert the atlas' bare-anchor <a href="#..."> scrollers into
route-preserving <button> scrollers that call scrollToId().

Bare anchors used to rewrite location.hash and destroy the
#/subject/<id> route — one refresh later the reader was back on
the landing. See scripts/route-battery.sh section H.

Idempotent: skips files already converted."""
import re
import pathlib

ROOT = pathlib.Path("/home/z/my-project")

FILES = {
    # hero scroll-down links
    "src/components/foc/FocHero.tsx": ("notes-top", "Scroll to the lecture notes"),
    "src/components/fa/FaHero.tsx": ("notes-top", "Scroll to the lecture notes"),
    "src/components/ebh/EbhHero.tsx": ("notes-top", "Scroll to the lecture notes"),
    "src/components/mktg/MktgHero.tsx": ("notes-top", "Scroll to the lecture notes"),
    "src/components/atb/AtbParts1.tsx": ("notes-top", "Scroll to the lecture notes"),
    # brand chips — scroll back to the top of the subject
    "src/components/fa/FaApp.tsx": ("top", "Scroll back to the top of these notes"),
    "src/components/ebh/EbhApp.tsx": ("top", "Scroll back to the top of these notes"),
    "src/components/mktg/MktgApp.tsx": ("top", "Scroll back to the top of these notes"),
    "src/components/atb/AtbApp.tsx": ("top", "Scroll back to the top of these notes"),
    "src/components/stm/StmApp.tsx": ("top", "Scroll back to the top of these notes"),
    "src/components/notes/FocApp.tsx": ("top", "Scroll back to the top of these notes"),
}


def convert(rel: str, anchor: str, label: str) -> None:
    p = ROOT / rel
    s = p.read_text()
    if f'href="#{anchor}"' not in s:
        print(f"skip (already converted): {rel}")
        return

    pat = re.compile(r'<a\b([^>]*href="#' + anchor + r'"[^>]*)>(.*?)</a>', re.DOTALL)
    m = pat.search(s)
    assert m, f"anchor element not found in {rel}"
    attrs, inner = m.group(1), m.group(2)

    # drop the href, collapse whitespace, keep className etc.
    attrs = re.sub(r'\s*href="#' + anchor + r'"', "", attrs)
    attrs = re.sub(r"\s+", " ", attrs).strip()

    opening = (
        '<button type="button" aria-label="' + label + '"'
        + ' onClick={() => scrollToId("' + anchor + '")}'
        + ((" " + attrs) if attrs else "")
        + " cursor-pointer>"
    )
    replacement = opening + inner + "</button>"
    s = s[: m.start()] + replacement + s[m.end():]

    # ensure the scrollToId import
    if 'from "@/lib/utils"' in s:
        head = s.split('from "@/lib/utils"')[0]
        if "scrollToId" not in head.rsplit("import", 1)[-1]:
            s = re.sub(
                r'import \{([^}]*)\} from "@/lib/utils"',
                lambda mm: 'import {' + mm.group(1).rstrip() + ', scrollToId } from "@/lib/utils"',
                s,
                count=1,
            )
    else:
        new_s, n = re.subn(
            r'(\} from "lucide-react";\n)',
            r'\1import { scrollToId } from "@/lib/utils";\n',
            s,
            count=1,
        )
        assert n == 1, f"lucide import not found in {rel}"
        s = new_s

    p.write_text(s)
    print(f"converted: {rel} (#{anchor})")


for rel, (anchor, label) in FILES.items():
    convert(rel, anchor, label)

print("done")
