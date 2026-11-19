"use client";

/* ============================================================
   MKTG reserved lectures — L22 and L39.

   Both lectures are deliberately removed from the official
   course sequence. Their numbers and positions are preserved
   in the registry, the sidebar, the TOC and the PDF outline,
   but their pages render BLANK except for the removal card.
   Wine #9f3d54 is reserved for exactly this marker + the
   authoring notes; surrounding lectures never close the gap.

   The two <Section> wrappers live PHYSICALLY between their
   neighbours (MktgParts4 after touchpoints-framework; MktgParts8
   before the L40 chapters) so the rendered source order equals
   the registry reading order. This file carries only the card.
   ============================================================ */

import React from "react";
import { Ban } from "lucide-react";
import { Reveal } from "@/components/notes/ui";
import { MK } from "@/components/mktg/diagrams/kit";

export function RemovalCard({ spaced, title }: { spaced: string; title: string }) {
  return (
    <Reveal>
      <div
        className="mx-auto max-w-3xl rounded-3xl border-2 border-dashed p-8 text-center md:p-12"
        style={{ background: "#fbf3f5", borderColor: MK.wine }}
        role="note"
        aria-label={`Lecture removed — ${title}`}
      >
        <span
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl"
          style={{ background: MK.wine, color: "#fdf5f7" }}
          aria-hidden
        >
          <Ban className="h-6 w-6" />
        </span>
        <p
          className="mt-5 font-mono text-[1.6rem] font-black tracking-[.42em]"
          style={{ color: MK.wine }}
          aria-hidden
        >
          {spaced}
        </p>
        <h3 className="mt-3 text-2xl font-extrabold" style={{ color: MK.ink }}>
          {title}
        </h3>
        <p className="mx-auto mt-4 max-w-md text-[.95rem] leading-relaxed text-[#5f4a50]">
          This lecture has been removed from the official course sequence. The
          page is intentionally blank so that lecture numbering is preserved.
        </p>
        <p
          className="mx-auto mt-5 inline-block rounded-full px-4 py-1.5 text-[.64rem] font-extrabold uppercase tracking-[.2em]"
          style={{ background: MK.wineSoft, color: MK.wine }}
        >
          Numbering preserved · page intentionally left blank
        </p>
      </div>
    </Reveal>
  );
}


