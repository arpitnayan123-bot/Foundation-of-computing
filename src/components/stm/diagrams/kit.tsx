"use client";

/* ============================================================
   STM diagram kit — the shared drawing vocabulary of shelf 05.

   Colour law of the shelf (never deviate):
     · violet  #8b5cf6 / #6d28d9 — the POPULATION: curves, the
       population side of every bridge, module chrome
     · gold    #ca8a04 / #e6cd7f — the DECISION: rejection
       regions, verdicts, the highlighted band, the drawing hand
     · muted grey #8b8098        — the SAMPLE: sample statistics,
       sample-side marks, superseded branches
     · red NEVER marks a rejected hypothesis — the rejection
       region is gold, the decision is gold, always

   Every figure sits inside <figure> (break-inside: avoid — it
   must not straddle a PDF page break), carries an aria-label and
   a figcaption. Every table carries a thead. Marker ids are
   unique per figure — never reuse one across two figures.

   Distribution curves are drawn TO SCALE IN SIGMA UNITS: the
   x-axis is measured in standard deviations, the mean is marked,
   and every shaded region carries its probability label.
   ============================================================ */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const VIOLET = "#6d28d9"; // population
export const VIOLET_BRIGHT = "#8b5cf6"; // population, light hand
export const GOLD = "#ca8a04"; // decision / rejection / highlighted result
export const GOLD_LITE = "#e6cd7f"; // decision, light hand
export const GREY = "#8b8098"; // sample / superseded
export const INK = "#3d2f55"; // neutral body ink in figures
export const PAPER = "#fcfaf8";
export const EDGE = "#ddd3ee"; // violet-tinted edge

/* ------------------------------------------------------------
   StmFigure — the only way prose meets a drawing on this shelf.
   figure > (children + figcaption), break-inside avoided.
   ------------------------------------------------------------ */
export function StmFigure({
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
    <figure role="figure" aria-label={aria} className={`stm-figure break-inside-avoid ${className}`}>
      {children}
      <figcaption className="mt-2 text-[.8rem] leading-relaxed text-muted-warm">{caption}</figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------
   StmDataTable — every table carries a thead; never a bare row.
   ------------------------------------------------------------ */
export function StmDataTable({
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
    <StmFigure aria={aria} caption={caption}>
      <div className="card-warm overflow-x-auto p-1">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr>
              {head.map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="px-3 py-2 font-mono text-[.64rem] font-bold uppercase tracking-[.14em]"
                  style={{ color: VIOLET, borderBottom: `2px solid ${EDGE}`, background: "#f3effc" }}
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
                      j === 0 ? "font-bold text-[#2b2150]" : "text-[#4a4066]"
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
    </StmFigure>
  );
}

/* ------------------------------------------------------------
   StmRule — the animated baseline migrated intact (decorative,
   aria-hidden, not a figure).
   ------------------------------------------------------------ */
export function StmRule({ open = 4 }: { open?: number }) {
  return (
    <svg aria-hidden viewBox="0 0 600 30" preserveAspectRatio="none" className="mt-3 h-6 w-full">
      <line x1="10" y1="15" x2="590" y2="15" stroke={EDGE} strokeWidth="2" />
      {[10, 155, 300, 445, 590].map((x, i) => (
        <motion.circle
          key={x} cx={x} cy={15} r={4.5} fill={i <= open ? VIOLET_BRIGHT : EDGE}
          initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.15 + i * 0.12, type: "spring", stiffness: 260, damping: 16 }}
        />
      ))}
    </svg>
  );
}

/* ============================================================
   THE SIGMA-SCALE CURVE ENGINE

   Every distribution curve on this shelf is drawn by CurveSvg
   below — the x-axis is measured in SIGMA UNITS (one sigma = one
   grid step), the mean carries its own marked line, and every
   shaded region is labelled with its probability. Nothing is
   hand-waved: the bell path is the true normal pdf.
   ============================================================ */

const PDF = (z: number) => Math.exp(-0.5 * z * z) / Math.sqrt(2 * Math.PI); // σ = 1

export interface ShadeRegion {
  /** region bounds in SIGMA units from the mean */
  from: number;
  to: number;
  /** the probability this region carries — printed in the label */
  prob: string;
  /** short label placed inside/above the region */
  label: string;
  tone?: "gold" | "violet" | "grey";
}

export interface CurveSpec {
  /** axis title, e.g. "x — demand in units (σ units marked)" */
  axisLabel?: string;
  /** sigma span each side of the mean (default 3.4) */
  span?: number;
  /** regions shaded under the curve, labelled with probabilities */
  regions?: ShadeRegion[];
  /** extra point marks on the axis in sigma units: z score marks */
  points?: { at: number; label: string; tone?: "gold" | "violet" | "grey" }[];
  /** mean label under the centre tick (default "μ") */
  meanLabel?: string;
  /** draw sigma ticks with labels −3σ … +3σ (default true) */
  sigmaTicks?: boolean;
  /** curve stroke overrides */
  strokeTone?: "violet" | "gold" | "grey";
  /** flat-top mode for uniform-style curves */
  flatTop?: boolean;
  /** unique svg marker/gradient id seed (MUST be unique per figure) */
  id: string;
}

const W = 640;
const H = 230;
const PAD_L = 18;
const PAD_R = 18;
const PAD_T = 26;
const PAD_B = 44;

export function CurveSvg({ spec }: { spec: CurveSpec }) {
  const span = spec.span ?? 3.4;
  const x2px = (sigma: number) => PAD_L + ((sigma + span) / (2 * span)) * (W - PAD_L - PAD_R);
  const maxY = PDF(0);
  const y2px = (y: number) => PAD_T + (1 - y / maxY) * (H - PAD_T - PAD_B);

  const curvePts: string[] = [];
  for (let i = 0; i <= 160; i++) {
    const z = -span + (2 * span * i) / 160;
    const y = spec.flatTop
      ? PDF(0) * 0.82 * (Math.abs(z) <= span * 0.82 ? 1 : Math.max(0, 1 - (Math.abs(z) - span * 0.82) / (span * 0.18)))
      : PDF(z);
    curvePts.push(`${i === 0 ? "M" : "L"}${x2px(z).toFixed(2)},${y2px(y).toFixed(2)}`);
  }
  const curvePath = curvePts.join(" ");
  const baseY = y2px(0);
  const closePath = `${curvePath} L${x2px(span)},${baseY} L${x2px(-span)},${baseY} Z`;

  const regionPath = (r: ShadeRegion) => {
    const pts: string[] = [];
    const steps = 48;
    for (let i = 0; i <= steps; i++) {
      const z = r.from + ((r.to - r.from) * i) / steps;
      const y = spec.flatTop ? PDF(0) * 0.82 : PDF(z);
      pts.push(`${i === 0 ? "M" : "L"}${x2px(z).toFixed(2)},${y2px(y).toFixed(2)}`);
    }
    return `${pts.join(" ")} L${x2px(r.to)},${baseY} L${x2px(r.from)},${baseY} Z`;
  };

  const TONE_FILL: Record<string, string> = { gold: GOLD, violet: VIOLET_BRIGHT, grey: GREY };
  const stroke = spec.strokeTone === "gold" ? GOLD : spec.strokeTone === "grey" ? GREY : VIOLET;

  const ticks = spec.sigmaTicks === false ? [] : [-3, -2, -1, 0, 1, 2, 3].filter((t) => Math.abs(t) <= span);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={`Distribution curve drawn to scale in sigma units${spec.axisLabel ? ` — ${spec.axisLabel}` : ""}`}>
      <defs>
        <linearGradient id={`stm-fill-${spec.id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={VIOLET_BRIGHT} stopOpacity="0.14" />
          <stop offset="100%" stopColor={VIOLET_BRIGHT} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      {/* axis */}
      <line x1={PAD_L} y1={baseY} x2={W - PAD_R} y2={baseY} stroke={INK} strokeWidth="1.4" />
      {/* sigma grid ticks */}
      {ticks.map((t) => (
        <g key={t}>
          <line x1={x2px(t)} y1={baseY} x2={x2px(t)} y2={baseY + 5} stroke={INK} strokeWidth="1" />
          <text x={x2px(t)} y={baseY + 16} textAnchor="middle" fontSize="10.5" fill={t === 0 ? INK : GREY} fontWeight={t === 0 ? 700 : 400} fontFamily="ui-monospace, monospace">
            {t === 0 ? spec.meanLabel ?? "μ" : `${t > 0 ? "+" : ""}${t}σ`}
          </text>
        </g>
      ))}
      {/* full curve body */}
      <path d={closePath} fill={`url(#stm-fill-${spec.id})`} stroke="none" />
      {/* shaded regions */}
      {(spec.regions ?? []).map((r, i) => {
        const mid = (r.from + r.to) / 2;
        const inside = Math.abs(mid) < span * 0.72;
        const labelY = inside ? baseY - 34 : y2px(PDF(Math.min(Math.abs(r.from), Math.abs(r.to))) * 0.6);
        return (
          <g key={i}>
            <path d={regionPath(r)} fill={TONE_FILL[r.tone ?? "gold"]} fillOpacity="0.32" stroke="none" />
            <text x={x2px(mid)} y={labelY} textAnchor="middle" fontSize="11.5" fontWeight="700" fill={TONE_FILL[r.tone ?? "gold"]}>
              {r.prob}
            </text>
            <text x={x2px(mid)} y={labelY + 13} textAnchor="middle" fontSize="9.5" fill={INK}>
              {r.label}
            </text>
          </g>
        );
      })}
      {/* the curve itself */}
      <path d={curvePath} fill="none" stroke={stroke} strokeWidth="2.4" strokeLinejoin="round" />
      {/* mean line */}
      <line x1={x2px(0)} y1={baseY} x2={x2px(0)} y2={PAD_T + 4} stroke={INK} strokeWidth="1.2" strokeDasharray="3 3" />
      {/* point marks (z statistics) */}
      {(spec.points ?? []).map((p, i) => (
        <g key={i}>
          <circle cx={x2px(p.at)} cy={baseY - 3} r="5" fill={TONE_FILL[p.tone ?? "grey"]} stroke="#fff" strokeWidth="1.5" />
          <text x={x2px(p.at)} y={baseY - 12} textAnchor="middle" fontSize="10.5" fontWeight="700" fill={TONE_FILL[p.tone ?? "grey"]} fontFamily="ui-monospace, monospace">
            {p.label}
          </text>
        </g>
      ))}
      {spec.axisLabel ? (
        <text x={W - PAD_R} y={H - 6} textAnchor="end" fontSize="10" fill={GREY} fontStyle="italic">
          {spec.axisLabel}
        </text>
      ) : null}
    </svg>
  );
}

/* ------------------------------------------------------------
   StmCurve — the figure wrapper around CurveSvg.
   ------------------------------------------------------------ */
export function StmCurve({ aria, caption, spec }: { aria: string; caption: React.ReactNode; spec: CurveSpec }) {
  return (
    <StmFigure aria={aria} caption={caption}>
      <div className="card-warm p-3 sm:p-4">
        <CurveSvg spec={spec} />
      </div>
    </StmFigure>
  );
}

/* ------------------------------------------------------------
   StmSteps — the stateful process stepper (the shelf's generic
   workflow; CalcFlow is the calculation-specific one). The final
   frame always lands on the outcome the prose states.
   ------------------------------------------------------------ */
export interface StmStep {
  chip: string;
  label: string;
  detail: string;
  tone?: "violet" | "gold" | "grey";
}

export function StmSteps({
  aria,
  caption,
  steps,
  stepper = true,
}: {
  aria: string;
  caption: React.ReactNode;
  steps: StmStep[];
  stepper?: boolean;
}) {
  const [at, setAt] = useState(steps.length - 1);
  const shown = stepper ? steps.slice(0, at + 1) : steps;
  const TONE: Record<string, string> = { violet: VIOLET, gold: GOLD, grey: GREY };

  return (
    <StmFigure aria={aria} caption={caption}>
      <div className="card-warm overflow-hidden p-4 sm:p-5">
        <ol className="flex flex-col gap-2 md:flex-row md:items-stretch" aria-label={aria}>
          {shown.map((s, i) => {
            const color = TONE[s.tone ?? "violet"];
            return (
              <li key={`${s.chip}-${i}`} className="min-w-0 flex-1">
                <div className="flex h-full items-stretch gap-2 md:flex-col md:gap-0">
                  <div
                    className="flex-1 rounded-xl border-t-4 p-3"
                    style={{ borderColor: color, background: PAPER, boxShadow: "inset 0 1px 0 rgba(255,255,255,.8)" }}
                  >
                    <p className="font-mono text-[.62rem] font-bold uppercase tracking-[.14em]" style={{ color }}>
                      <span
                        className="mr-1.5 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full align-[-2px] text-[.52rem] font-black text-white"
                        style={{ background: color }}
                        aria-hidden
                      >
                        {i + 1}
                      </span>
                      {s.chip}
                    </p>
                    <p className="mt-1 text-[.86rem] font-extrabold leading-snug text-[#2b2150]">{s.label}</p>
                    <p className="mt-0.5 text-[.76rem] leading-snug text-muted-warm">{s.detail}</p>
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
          <div className="mt-3 flex items-center justify-between gap-2 rounded-xl border px-3 py-2" style={{ borderColor: EDGE, background: "#f8f5fd" }}>
            <p className="text-[.72rem] font-bold text-[#4a4066]">
              Frame {at + 1} of {steps.length}
            </p>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setAt((v) => Math.max(0, v - 1))}
                disabled={at === 0}
                aria-label="Step one frame back"
                className="flex h-7 w-7 items-center justify-center rounded-lg border text-[#4a4066] transition-colors hover:bg-white/70 disabled:opacity-35"
                style={{ borderColor: EDGE }}
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setAt((v) => Math.min(steps.length - 1, v + 1))}
                disabled={at === steps.length - 1}
                aria-label="Step one frame forward"
                className="flex h-7 items-center gap-1 rounded-lg px-2 text-[.68rem] font-extrabold uppercase tracking-[.1em] text-white disabled:opacity-35"
                style={{ background: `linear-gradient(135deg,${VIOLET_BRIGHT},${VIOLET})` }}
              >
                Next frame
                <ChevronRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </StmFigure>
  );
}
