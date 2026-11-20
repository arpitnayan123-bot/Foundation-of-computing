"use client";

/* ============================================================
   STM maths markup — real maths rendering for shelf 05.

   The corpus strings stay byte-identical (the transcripts are
   the sole authority); this DISPLAY layer maps maths tokens to
   real markup at render time:

     σ_x̄, σ_p̂, σ_{p̂}, σₓ      →  σ<sub>…</sub>
     z(α/2), Z_(α/2), Z(0.025) →  z<sub>…</sub>   (z of alpha over two)
     t_{0.05}                  →  t<sub>…</sub>
     √[p̂(1−p̂)/n], √(variance) →  a radical with an overline
     x̄, p̂, H₀, Hₐ, μ₀, p₀, Σ  →  serif-math spans

   THE LAW: p̂ (p-hat) is the sample proportion — it renders as
   p̂, never as p̄ (p-bar). The corpus carries no p̄ and this
   renderer would never produce one. Variables render in a serif
   italic maths face; digits and operators stay upright.
   ============================================================ */

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { StmFigure as StmFigureNoExport, VIOLET, VIOLET_BRIGHT, GOLD, GREY, EDGE, PAPER } from "./diagrams/kit";

/* ---------- the maths span ---------- */
export function Mv({ children }: { children: React.ReactNode }) {
  return <span className="stm-m">{children}</span>;
}

/* ---------- subscript helper ---------- */
function Sub({ children }: { children: React.ReactNode }) {
  return <sub className="stm-sub">{children}</sub>;
}

/* ---------- radical with a true overline ---------- */
export function Sqrt({ children }: { children: React.ReactNode }) {
  return (
    <span className="stm-sqrt" aria-label="square root">
      <span aria-hidden className="stm-sqrt-sign">√</span>
      <span className="stm-sqrt-body">{children}</span>
    </span>
  );
}

/* ============================================================
   inlineMaths — the single code path every prose string, table
   cell, callout and CalcFlow frame renders through.
   ============================================================ */

type Tok = { k: "sub"; base: string; sub: string } | { k: "sqrt"; body: string } | { k: "m"; s: string } | { k: "t"; s: string };

const SUB_BRACE = /([A-Za-zσμ])_\{([^}]+)\}/;
const SUB_PAREN = /([A-Za-z])_\(([^)]+)\)/;
const SUB_PLAIN = /([σμ])(_[A-Za-z0-9āīūēōȳ\u0300-\u036f]+)/;
const ZPAREN = /\b([zZt])\((α\/2|β\/2|0?\.\d+|α|[^)]*\/[^)]+)\)/;
const SQRT = /√\[([^\]]+)\]|√\(([^)]+)\)/;
const MATH_TOKEN =
  /[A-Za-z][\u0304\u0302]|H₀|Hₐ|μ₀|p₀|μₙ|xᵢ|x₁|x₂|x₃|xₙ|ₓ|σₓ|Σ|√|±|≤|≥|≠|≈|²|³|µ|[σμβαΔθλ]|p̂|x̄/;

/** testable view of the tokenizer — exports the token stream so the
 *  gate battery can assert the maths markup without a DOM */
export function mathTokens(s: string): Tok[] {
  return tokenize(s);
}

export type MathToken = Tok;

export function tokenize(s: string): Tok[] {  const toks: Tok[] = [];
  let i = 0;
  let plain = "";
  const flush = () => {
    if (plain) {
      toks.push({ k: "t", s: plain });
      plain = "";
    }
  };
  while (i < s.length) {
    const rest = s.slice(i);
    let m: RegExpMatchArray | null;
    if ((m = rest.match(SQRT)) && m.index === 0) {
      flush();
      toks.push({ k: "sqrt", body: m[1] ?? m[2] ?? "" });
      i += m[0].length;
      continue;
    }
    if ((m = rest.match(SUB_BRACE)) && m.index === 0) {
      flush();
      toks.push({ k: "sub", base: m[1], sub: m[2] });
      i += m[0].length;
      continue;
    }
    if ((m = rest.match(SUB_PAREN)) && m.index === 0) {
      flush();
      toks.push({ k: "sub", base: m[1], sub: m[2] });
      i += m[0].length;
      continue;
    }
    if ((m = rest.match(SUB_PLAIN)) && m.index === 0) {
      flush();
      toks.push({ k: "sub", base: m[1], sub: m[2].slice(1) });
      i += m[0].length;
      continue;
    }
    if ((m = rest.match(ZPAREN)) && m.index === 0) {
      flush();
      toks.push({ k: "sub", base: m[1], sub: m[2] });
      i += m[0].length;
      continue;
    }
    if ((m = rest.match(MATH_TOKEN)) && m.index === 0) {
      flush();
      toks.push({ k: "m", s: m[0] });
      i += m[0].length;
      continue;
    }
    plain += s[i];
    i += 1;
  }
  flush();
  return toks;
}

export function inlineMaths(s: string): React.ReactNode {
  const toks = tokenize(s);
  return toks.map((t, i) => {
    if (t.k === "t") return <React.Fragment key={i}>{t.s}</React.Fragment>;
    if (t.k === "m") return <Mv key={i}>{t.s}</Mv>;
    if (t.k === "sqrt")
      return (
        <Sqrt key={i}>
          <>{inlineMaths(t.body)}</>
        </Sqrt>
      );
    return (
      <React.Fragment key={i}>
        <Mv>{t.base}</Mv>
        <Sub>{t.sub}</Sub>
      </React.Fragment>
    );
  });
}

/** display form of a maths string inside tables / callouts */
export function M({ s }: { s: string }) {
  return <>{inlineMaths(s)}</>;
}

/* ============================================================
   CalcFlow — shelf 05's calculation tracer. Every worked
   calculation runs formula → substitution → intermediate →
   result, and the FINAL frame matches the answer stated in the
   prose. Never arithmetic in prose alone; never ATB's AlgoFlow
   (algorithmic state traces) and never EBH's EbhFlow (dated
   legislation) — this chain is formula → substitution → result
   and carries z of alpha over two, radicals, sums, mu, sigma
   and superscripts cleanly through the maths layer above.
   ============================================================ */

export type CalcFrameKind = "formula" | "sub" | "value" | "result";

export interface CalcFrame {
  kind: CalcFrameKind;
  label: string;
  /** the maths string — rendered through inlineMaths */
  math: string;
  /** one-line note under the frame */
  note?: string;
}

const KIND_META: Record<CalcFrameKind, { chip: string; tone: string }> = {
  formula: { chip: "FORMULA — SYMBOLIC", tone: "violet" },
  sub: { chip: "SUBSTITUTION", tone: "violet" },
  value: { chip: "INTERMEDIATE VALUE", tone: "grey" },
  result: { chip: "RESULT — AS THE PROSE STATES", tone: "gold" },
};

export function CalcFlow({
  aria,
  caption,
  frames,
}: {
  aria: string;
  caption: React.ReactNode;
  frames: CalcFrame[];
}) {
  const [at, setAt] = useState(0);
  const n = frames.length;
  const frame = frames[Math.min(at, n - 1)];
  const meta = KIND_META[frame.kind];
  const toneColor = meta.tone === "gold" ? GOLD : meta.tone === "grey" ? GREY : VIOLET;

  return (
    <StmFigureNoExport aria={aria} caption={caption}>
      <div className="card-warm overflow-hidden">
        <div className="flex items-center justify-between gap-2 border-b px-4 py-2" style={{ borderColor: EDGE, background: "#f3effc" }}>
          <p className="font-mono text-[.62rem] font-bold uppercase tracking-[.16em]" style={{ color: VIOLET }}>
            CalcFlow
          </p>
          <p className="font-mono text-[.62rem] font-bold uppercase tracking-[.14em]" style={{ color: GREY }}>
            frame {at + 1} / {n}
          </p>
        </div>
        <div className="p-4 sm:p-5">
          <p className="font-mono text-[.62rem] font-bold uppercase tracking-[.16em]" style={{ color: toneColor }}>
            {meta.chip}
          </p>
          <p className="mt-1 text-[.9rem] font-extrabold text-[#2b2150]">{frame.label}</p>
          <div
            className="mt-3 rounded-xl border-2 px-4 py-4 text-center"
            style={{ borderColor: frame.kind === "result" ? GOLD : EDGE, background: frame.kind === "result" ? "#fdf8e9" : PAPER }}
          >
            <span className="stm-mathline text-[1.08rem] leading-relaxed text-[#2b2150]">{inlineMaths(frame.math)}</span>
          </div>
          {frame.note ? <p className="mt-2 text-center text-[.76rem] leading-snug text-muted-warm">{frame.note}</p> : null}
          <div className="mt-4 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              {frames.map((f, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show frame ${i + 1}: ${f.label}`}
                  onClick={() => setAt(i)}
                  className="h-2.5 w-2.5 rounded-full transition-colors"
                  style={{ background: i === at ? VIOLET : EDGE, transform: i === at ? "scale(1.25)" : undefined }}
                />
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setAt((v) => Math.max(0, v - 1))}
                disabled={at === 0}
                aria-label="Previous calculation frame"
                className="flex h-7 w-7 items-center justify-center rounded-lg border text-[#4a4066] transition-colors hover:bg-white/70 disabled:opacity-35"
                style={{ borderColor: EDGE }}
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setAt((v) => Math.min(n - 1, v + 1))}
                disabled={at === n - 1}
                aria-label="Next calculation frame"
                className="flex h-7 items-center gap-1 rounded-lg px-2 text-[.68rem] font-extrabold uppercase tracking-[.1em] text-white disabled:opacity-35"
                style={{ background: `linear-gradient(135deg,${VIOLET_BRIGHT},${VIOLET})` }}
              >
                {at === n - 1 ? "Final frame" : "Next frame"}
                <ChevronRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </StmFigureNoExport>
  );
}
