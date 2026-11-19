"use client";

/* ============================================================
   EBH diagram kit — the shared drawing vocabulary of shelf 04.

   Colour law of the shelf:
     · gold   #a16207 / #d9b168  — the drawing itself, and the
       SURVIVING line in every chronological figure
     · oxblood #7a2230           — headings, rules, callout edges,
       and the INSTITUTIONAL or LEGAL line in figures
     · neutral grey               — the SUPERSEDED branch
     · red never means wrong — no figure uses red as a verdict

   Every figure sits inside <figure> (break-inside: avoid — it
   must not straddle a PDF page break), carries an aria-label and
   a figcaption. Every table carries a thead. Marker ids are
   unique per figure — never reuse one across two figures.
   ============================================================ */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const OX = "#7a2230"; // oxblood — headings, rules, callout edges, legal line
export const GOLD = "#a16207"; // the drawing itself; the surviving line
export const GOLD_LITE = "#d9b168"; // the drawing's light hand
export const GREY = "#9a8f7d"; // the superseded branch
export const INK = "#5c4a33"; // neutral body ink in figures
export const PAPER = "#fffdf6";
export const EDGE = "#e0cb84";

export type EbhFlowState = "surviving" | "legal" | "superseded" | "neutral";

export const EBH_STATE_COLOR: Record<EbhFlowState, string> = {
  surviving: GOLD,
  legal: OX,
  superseded: GREY,
  neutral: INK,
};

export const EBH_STATE_NAME: Record<EbhFlowState, string> = {
  surviving: "surviving line",
  legal: "legal / institutional line",
  superseded: "superseded",
  neutral: "context",
};

/* ------------------------------------------------------------
   EbhFigure — the only way prose meets a drawing on this shelf.
   figure > (children + figcaption), break-inside avoided.
   ------------------------------------------------------------ */
export function EbhFigure({
  aria,
  caption,
  children,
  className = "",
}: {
  aria: string;
  caption: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <figure role="figure" aria-label={aria} className={`ebh-figure break-inside-avoid ${className}`}>
      {children}
      <figcaption className="mt-2 text-[.8rem] leading-relaxed text-muted-warm">{caption}</figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------
   EbhFlow — the dated chronology chain, shelf 04's dominant
   pattern (from the EIC charter arc to the 1799-1825 labour
   statutes). Steps run left to right; time never runs backwards.
   Each step: a date/ordinal chip, a one-line label, a one-line
   consequence, and a state that colours the line. With
   `stepper`, the chain becomes a stateful walk through time —
   the final frame always lands on the dated outcome the prose
   states. Added alongside InlineSVG, never instead of it.
   ------------------------------------------------------------ */
export interface EbhFlowStep {
  date: string;
  label: string;
  consequence: string;
  state?: EbhFlowState;
}

export function EbhFlow({
  aria,
  caption,
  steps,
  stepper = false,
}: {
  aria: string;
  caption: React.ReactNode;
  steps: EbhFlowStep[];
  /** interactive walk-through — the final frame is the last step */
  stepper?: boolean;
}) {
  const [at, setAt] = useState(steps.length - 1);
  const shown = stepper ? steps.slice(0, at + 1) : steps;

  return (
    <EbhFigure aria={aria} caption={caption}>
      <div className="card-warm overflow-hidden p-4 sm:p-5">
        <ol className="flex flex-col gap-2 md:flex-row md:items-stretch" aria-label={aria}>
          {shown.map((s, i) => {
            const state = s.state ?? "neutral";
            const color = EBH_STATE_COLOR[state];
            return (
              <li key={`${s.date}-${i}`} className="min-w-0 flex-1">
                <div className="flex h-full items-stretch gap-2 md:flex-col md:gap-0">
                  <div
                    className="flex-1 rounded-xl border-t-4 p-3"
                    style={{ borderColor: color, background: PAPER, boxShadow: `inset 0 1px 0 rgba(255,255,255,.8)` }}
                  >
                    <p className="font-mono text-[.62rem] font-bold uppercase tracking-[.14em]" style={{ color }}>
                      <span
                        className="mr-1.5 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full align-[-2px] text-[.52rem] font-black text-white"
                        style={{ background: color }}
                        aria-hidden
                      >
                        {i + 1}
                      </span>
                      {s.date}
                    </p>
                    <p className="mt-1 text-[.86rem] font-extrabold leading-snug text-[#3e2c1d]">{s.label}</p>
                    <p className="mt-0.5 text-[.76rem] leading-snug text-muted-warm">{s.consequence}</p>
                  </div>
                  {i < shown.length - 1 ? (
                    <span aria-hidden className="flex shrink-0 items-center justify-center px-0.5 md:px-0 md:py-1">
                      <ChevronRight className="h-4 w-4 rotate-90 md:rotate-0" style={{ color }} />
                    </span>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>
        {stepper ? (
          <div className="mt-3 flex items-center justify-between gap-2 rounded-xl border px-3 py-2" style={{ borderColor: EDGE, background: "#fdfae9" }}>
            <p className="text-[.72rem] font-bold text-[#6b563d]">
              Frame {at + 1} of {steps.length} — {EBH_STATE_NAME[steps[at].state ?? "neutral"]}
            </p>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setAt((v) => Math.max(0, v - 1))}
                disabled={at === 0}
                aria-label="Step one frame back in time"
                className="flex h-7 w-7 items-center justify-center rounded-lg border text-[#5c4a33] transition-colors hover:bg-white/70 disabled:opacity-35"
                style={{ borderColor: EDGE }}
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setAt((v) => Math.min(steps.length - 1, v + 1))}
                disabled={at === steps.length - 1}
                aria-label="Step one frame forward in time"
                className="flex h-7 items-center gap-1 rounded-lg px-2 text-[.68rem] font-extrabold uppercase tracking-[.1em] text-white disabled:opacity-35"
                style={{ background: `linear-gradient(135deg,${GOLD},${OX})` }}
              >
                Next frame
                <ChevronRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </EbhFigure>
  );
}

/* ------------------------------------------------------------
   EbhDataTable — every table carries a thead; never a bare row.
   ------------------------------------------------------------ */
export function EbhDataTable({
  aria,
  caption,
  head,
  rows,
}: {
  aria: string;
  caption: React.ReactNode;
  head: string[];
  rows: (string | React.ReactNode)[][];
}) {
  return (
    <EbhFigure aria={aria} caption={caption}>
      <div className="card-warm overflow-x-auto p-1">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr>
              {head.map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="px-3 py-2 font-mono text-[.64rem] font-bold uppercase tracking-[.14em]"
                  style={{ color: OX, borderBottom: `2px solid ${EDGE}`, background: "#faf3d9" }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} style={{ borderBottom: `1px solid ${EDGE}` }}>
                {r.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-3 py-2 text-[.82rem] leading-relaxed ${
                      j === 0 ? "font-bold text-[#3e2c1d]" : "text-[#4a3a26]"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </EbhFigure>
  );
}

/* ------------------------------------------------------------
   EbhRule — the animated baseline migrated intact from the
   module chain (decorative, aria-hidden, not a figure).
   ------------------------------------------------------------ */
export function EbhRule({ open = 4 }: { open?: number }) {
  return (
    <svg aria-hidden viewBox="0 0 600 30" preserveAspectRatio="none" className="mt-3 h-6 w-full">
      <line x1="10" y1="15" x2="590" y2="15" stroke={EDGE} strokeWidth="2" />
      {[10, 155, 300, 445, 590].map((x, i) => (
        <motion.circle
          key={x} cx={x} cy={15} r={4.5} fill={i <= open ? GOLD : EDGE}
          initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.15 + i * 0.12, type: "spring", stiffness: 260, damping: 16 }}
        />
      ))}
    </svg>
  );
}
