"use client";

/* ============================================================
   CorpusBlocks — renders the VERBATIM lecture text generated
   into corpus.ts (from scripts/mktg_lectures/L*.md). The text
   is never altered by this renderer: block types only decide
   styling. sh = subhead · p = paragraph · def = "X: Y" row ·
   li = list item.
   ============================================================ */

import React from "react";
import { MKTG_CORPUS, type CorpusBlock } from "./corpus";
import { MK } from "./diagrams/kit";

function DefRow({ s }: { s: string }) {
  const c = s.indexOf(":");
  if (c <= 0 || c > 52) {
    return (
      <p className="max-w-3xl text-[.95rem] leading-relaxed text-[#3a4a48]">{s}</p>
    );
  }
  return (
    <div className="flex flex-col gap-1 rounded-xl border px-3.5 py-2.5 sm:flex-row sm:items-baseline sm:gap-3" style={{ borderColor: MK.line, background: "#fdfcfa" }}>
      <span className="shrink-0 font-mono text-[.72rem] font-bold uppercase tracking-wider" style={{ color: MK.teal }}>
        {s.slice(0, c)}:
      </span>
      <span className="text-[.9rem] leading-relaxed text-[#33423f]">{s.slice(c + 1).trim()}</span>
    </div>
  );
}

export function CorpusBlocks({ id }: { id: string }) {
  const blocks = MKTG_CORPUS[id];
  if (!blocks) return null;
  const out: React.ReactNode[] = [];
  let li: CorpusBlock[] = [];
  const flushLi = (key: string) => {
    if (li.length === 0) return;
    out.push(
      <ul key={key} className="ml-1 max-w-3xl space-y-1.5">
        {li.map((b, i) => (
          <li key={i} className="flex items-start gap-2.5 text-[.92rem] leading-relaxed text-[#3a4a48]">
            <span aria-hidden className="mt-[.55rem] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: MK.brass }} />
            <span>{b.s}</span>
          </li>
        ))}
      </ul>
    );
    li = [];
  };
  blocks.forEach((b, i) => {
    if (b.t === "li") {
      li.push(b);
      return;
    }
    flushLi(`li-${i}`);
    if (b.t === "sh") {
      out.push(
        <h3 key={i} className="mt-7 flex items-center gap-2.5 text-lg font-extrabold" style={{ color: MK.teal }}>
          <span aria-hidden className="h-4 w-1 rounded-full" style={{ background: MK.gold }} />
          {b.s}
        </h3>
      );
    } else if (b.t === "def") {
      out.push(<DefRow key={i} s={b.s} />);
    } else {
      out.push(
        <p key={i} className="max-w-3xl text-[.95rem] leading-relaxed text-[#3a4a48]">
          {b.s}
        </p>
      );
    }
  });
  flushLi("li-end");
  return (
    <div className="space-y-3.5">
      {out.map((node, i) => (
        <div key={`wrap-${i}`}>{node}</div>
      ))}
    </div>
  );
}
