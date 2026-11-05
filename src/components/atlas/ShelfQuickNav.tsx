"use client";

/* ============================================================
   THE SHELF QUICK NAV — the connective tissue of the atlas.

   Every window used to be an island: a shelf's TopNav could
   only take you back to the map, and on a phone (no keyboard)
   the ⌘K palette, the cockpit and the ledger were unreachable
   from inside a shelf. This pours the same three doors into
   every shelf — the ⌘K search, the cockpit's flight plan and
   the ledger — once in the TopNav (sm+), once atop the mobile
   chapter index. No window is an island anymore.
   ============================================================ */

import React from "react";
import { Command, NotebookText, Rocket } from "lucide-react";

/** open the global ⌘K palette — same channel the landing pill uses */
export function openCommandPalette() {
  window.dispatchEvent(new CustomEvent("atlas:cmdk"));
}

function go(hash: string) {
  window.location.hash = hash;
  window.scrollTo(0, 0);
}

/* light-glass icon buttons — the exact dialect the shelf TopNavs
   already speak (back · brand · print · lab · menu), so the new
   doors read as natives, not guests */
const NAV_BTN =
  "flex h-9 w-9 items-center justify-center rounded-xl border border-white/70 bg-white/60 text-[#6b563d] backdrop-blur-md transition-colors hover:bg-white/85 hover:text-[#c2410c]";

export function ShelfQuickNav({
  variant,
  onAfter,
}: {
  /** "nav" = icon doors for the TopNav right cluster · "menu" = the mobile index row */
  variant: "nav" | "menu";
  /** fired after any door is used — closes the mobile index first */
  onAfter?: () => void;
}) {
  const act = (fn: () => void) => () => {
    fn();
    onAfter?.();
  };

  if (variant === "nav") {
    return (
      <>
        <button
          type="button"
          onClick={act(openCommandPalette)}
          title="Search every chapter & question — ⌘K"
          aria-label="Open the command palette (Command K)"
          className={`${NAV_BTN} hidden sm:flex`}
        >
          <Command className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={act(() => go("#/cockpit"))}
          title="The Cockpit — today's flight plan"
          aria-label="Open the Cockpit"
          className={`${NAV_BTN} hidden sm:flex`}
        >
          <Rocket className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={act(() => go("#/ledger"))}
          title="The Ledger — progress, spaced review & the card forge"
          aria-label="Open the Ledger"
          className={`${NAV_BTN} hidden sm:flex`}
        >
          <NotebookText className="h-4 w-4" />
        </button>
      </>
    );
  }

  /* menu variant — three doors at the top of the mobile chapter
     index, before the chapter list starts */
  const ROW =
    "flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-white/[.05] px-2 py-2.5 text-[#f0e2c8] transition-colors active:bg-white/[.12]";

  return (
    <div className="mb-4 grid grid-cols-3 gap-2 px-4 pt-3">
      <button type="button" onClick={act(openCommandPalette)} className={ROW}>
        <Command className="h-4 w-4" style={{ color: "#f5c889" }} />
        <span className="text-[.58rem] font-extrabold uppercase tracking-[.14em]">Search ⌘K</span>
      </button>
      <button type="button" onClick={act(() => go("#/cockpit"))} className={ROW}>
        <Rocket className="h-4 w-4" style={{ color: "#f5c889" }} />
        <span className="text-[.58rem] font-extrabold uppercase tracking-[.14em]">Cockpit</span>
      </button>
      <button type="button" onClick={act(() => go("#/ledger"))} className={ROW}>
        <NotebookText className="h-4 w-4" style={{ color: "#f5c889" }} />
        <span className="text-[.58rem] font-extrabold uppercase tracking-[.14em]">Ledger</span>
      </button>
    </div>
  );
}
