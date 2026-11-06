#!/usr/bin/env python3
"""Touch-target hardening for the atlas chrome.

Bumps the TopNav / Ledger / quick-nav controls to a 44px hit
floor: 36-40px visual buttons get an invisible ::after halo
(absolutely positioned, inherits the radius) that extends the
pointer area without changing the visual design. Pill-style
text buttons get an explicit min-height.

Idempotent: patterns no longer match once applied."""
import pathlib

ROOT = pathlib.Path("/home/z/my-project")

# icon buttons: h-9 w-9 -> relative h-10 w-10 + 44px halo
ICON = (
    "flex h-9 w-9 items-center justify-center rounded-xl",
    "relative flex h-10 w-10 items-center justify-center rounded-xl "
    "after:absolute after:-inset-1 after:rounded-xl after:content-['']",
)

# back-to-atlas pills in the six subject TopNavs
BACK = (
    "flex h-9 shrink-0 items-center gap-1.5 rounded-full",
    "relative flex h-10 shrink-0 items-center gap-1.5 rounded-full "
    "after:absolute after:-inset-y-0.5 after:-inset-x-1 after:rounded-full after:content-['']",
)

# brand chips (converted from <a href="#top">): py-1.5 -> h-10 + halo
BRAND = (
    "flex shrink-0 items-center gap-2 rounded-full border border-white/70 bg-white/60 py-1.5 pl-2 pr-3.5",
    "relative flex h-10 shrink-0 items-center gap-2 rounded-full border border-white/70 bg-white/60 pl-2 pr-3.5 "
    "after:absolute after:-inset-y-0.5 after:-inset-x-1 after:rounded-full after:content-['']",
)

APPS = [
    "src/components/notes/FocApp.tsx",
    "src/components/atb/AtbApp.tsx",
    "src/components/fa/FaApp.tsx",
    "src/components/ebh/EbhApp.tsx",
    "src/components/stm/StmApp.tsx",
    "src/components/mktg/MktgApp.tsx",
    "src/components/atlas/ShelfQuickNav.tsx",
]


def apply(rel: str, *pairs) -> None:
    p = ROOT / rel
    s = p.read_text()
    total = 0
    for old, new in pairs:
        n = s.count(old)
        if n:
            s = s.replace(old, new)
            total += n
    if total:
        p.write_text(s)
    print(f"{rel}: {total} bumps")


for rel in APPS:
    apply(rel, ICON, BACK, BRAND)

# ledger top bar — 32px back pill + 32px due chip
apply(
    "src/components/atlas/LedgerView.tsx",
    (
        "className=\"flex h-8 items-center gap-1.5 rounded-full border border-white/10 bg-white/[.05] px-3 text-[.68rem] font-black uppercase tracking-[.16em] text-[#e9d7bf] transition hover:bg-white/[.12]\"",
        "className=\"relative flex min-h-[44px] items-center gap-1.5 rounded-full border border-white/10 bg-white/[.05] px-3 text-[.68rem] font-black uppercase tracking-[.16em] text-[#e9d7bf] transition hover:bg-white/[.12]\"",
    ),
    (
        "className=\"ml-auto flex cursor-pointer items-center gap-1.5 rounded-full border border-[#f59e0b40] bg-[#f59e0b14] px-3 py-1 font-mono text-[.58rem] font-bold uppercase tracking-[.16em] text-[#f5c889] transition hover:bg-[#f59e0b2a]\"",
        "className=\"relative ml-auto flex min-h-[44px] cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full border border-[#f59e0b40] bg-[#f59e0b14] px-3 font-mono text-[.58rem] font-bold uppercase tracking-[.16em] text-[#f5c889] transition hover:bg-[#f59e0b2a]\"",
    ),
)

print("done")
