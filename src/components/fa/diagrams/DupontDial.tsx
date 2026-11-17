"use client";

/* ============================================================
   FA DIAGRAM 6 — the DuPont ROA dial (section dupont-exam, L34).

   Two sliders — margin and turnover — with ROA reading live as
   the product; a stacked bar splits ROA into its two exact
   contributions (m + m·(t−1) = m·t). Four presets: the two
   business models that land on the same 20% by opposite roads,
   and Dr. Reddy's 2015 → 2016 in the L34 DuPont canon (Trap C:
   15% × 0.87 = 13.05% → 13.71% × 0.81 = 11.11%), rendered as a
   two-step bridge with the rounding disclosure in the footer.

   Stretch (task §2): a leverage toggle adds ROE = ROA × Leverage
   with L30's condition — the sword amplifies only while ROA
   exceeds the interest rate. Slider inputs are the learner's own
   illustration; no slider value is attributed to the lecture.
   ============================================================ */

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Scale, Swords } from "lucide-react";
import {
  FA_DARK_GRADIENT,
  FA_RED,
  FaBadge,
  FaDiagramShell,
  FaSeg,
  FaSourceNote,
  fmtINR,
  useFaStatic,
} from "./kit";
import { REDDY, contributionSplit, reddyBridge, roa } from "./calcs";

type PresetId = "luxury" | "market" | "reddy15" | "reddy16";

const PRESETS: { id: PresetId; label: string; m: number; t: number }[] = [
  { id: "luxury", label: "Luxury 10% × 2×", m: 10, t: 2 },
  { id: "market", label: "Market 4% × 5×", m: 4, t: 5 },
  { id: "reddy15", label: "Reddy's 2015", m: REDDY.m15, t: REDDY.t15 },
  { id: "reddy16", label: "Reddy's 2016", m: REDDY.m16, t: REDDY.t16 },
];

export function FaDupontDial() {
  const [margin, setMargin] = useState(10);
  const [turnover, setTurnover] = useState(2);
  const [leverage, setLeverage] = useState(2);
  const [rate, setRate] = useState(8);
  const [stretch, setStretch] = useState(false);
  const statik = useFaStatic();

  const product = roa(margin, turnover);
  const split = contributionSplit(margin, turnover);
  const activePreset = PRESETS.find((p) => p.m === margin && p.t === turnover)?.id;
  const bridge = useMemo(() => reddyBridge(), []);

  const roe = product * leverage;
  const swordCuts = product < rate;

  const slider = (id: string, label: string, val: number, min: number, max: number, step: number, set: (n: number) => void, unit: string) => (
    <div>
      <div className="flex items-baseline justify-between gap-2">
        <label htmlFor={id} className="text-[.8rem] font-bold text-[#3e2c1d]">
          {label}
        </label>
        <span className="font-mono text-[.92rem] font-black" style={{ color: "#065f46" }} aria-hidden>
          {fmtINR(val, 2)}{unit}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={val}
        onChange={(e) => set(Number(e.target.value))}
        className="mt-2 w-full accent-[#047857]"
        aria-valuetext={`${fmtINR(val, 2)} ${unit}`}
      />
    </div>
  );

  return (
    <FaDiagramShell
      icon={<Scale className="h-4 w-4" style={{ color: "#047857" }} />}
      title="ROA = Profit Margin × Asset Turnover"
      sub="drag the two drivers — or pick a business"
    >
      <div className="px-4 py-5 sm:px-6">
        {/* presets */}
        <div className="rounded-xl border border-[#e4f1ea] bg-white p-1">
          <FaSeg
            ariaLabel="Business model presets"
            options={PRESETS.map((p) => ({ id: p.id, label: p.label }))}
            value={activePreset ?? ("" as PresetId)}
            onChange={(id) => {
              const p = PRESETS.find((x) => x.id === id);
              if (p) {
                setMargin(p.m);
                setTurnover(p.t);
              }
            }}
          />
        </div>

        {/* the two drivers */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {slider("fa-dupont-margin", "Profit margin", margin, 2, 25, 0.01, setMargin, "%")}
          {slider("fa-dupont-turnover", "Asset turnover", turnover, 0.2, 6, 0.01, setTurnover, "×")}
        </div>

        {/* live product */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-center font-mono">
          <span className="rounded-xl border border-[#e4f1ea] bg-white px-4 py-2 text-[1.05rem] font-black" style={{ color: "#047857" }}>
            {fmtINR(margin, 2)}%
          </span>
          <span className="text-lg font-black text-[#8a6b45]">×</span>
          <span className="rounded-xl border border-[#e4f1ea] bg-white px-4 py-2 text-[1.05rem] font-black" style={{ color: "#047857" }}>
            {fmtINR(turnover, 2)}×
          </span>
          <span className="text-lg font-black text-[#8a6b45]">=</span>
          <span className="rounded-xl px-4 py-2 text-[1.05rem] font-black text-white" style={{ background: "linear-gradient(135deg,#10b981,#047857)" }}>
            {fmtINR(product, 2)}% ROA
          </span>
        </div>

        {/* stacked contribution bar: m + m·(t−1) = m·t — exact algebra */}
        <div className="mt-5">
          <p className="text-[.7rem] font-black uppercase tracking-[.16em] text-[#8a6b45]">
            The two contributions — margin at one turn, plus what extra turns add
          </p>
          <div
            className="mt-2 flex h-9 w-full overflow-hidden rounded-xl border border-[#e4f1ea] bg-[#eef6f1]"
            role="img"
            aria-label={`ROA ${fmtINR(product, 2)} percent splits into ${fmtINR(split.base, 2)} from margin at one turn and ${fmtINR(split.extra, 2)} from turnover beyond one turn`}
          >
            <motion.div
              initial={statik ? false : { width: 0 }}
              animate={{ width: `${(Math.abs(split.base) / Math.max(Math.abs(split.base) + Math.abs(split.extra), product, 1)) * 100}%` }}
              transition={statik ? { duration: 0 } : { duration: 0.45, ease: "easeOut" }}
              className="flex items-center justify-center whitespace-nowrap px-1 font-mono text-[.68rem] font-black text-white"
              style={{ background: "linear-gradient(90deg,#10b981,#047857)" }}
            >
              margin {fmtINR(split.base, 2)}
            </motion.div>
            {Math.abs(split.extra) > 0.005 ? (
              <motion.div
                initial={statik ? false : { width: 0 }}
                animate={{ width: `${(Math.abs(split.extra) / Math.max(Math.abs(split.base) + Math.abs(split.extra), product, 1)) * 100}%` }}
                transition={statik ? { duration: 0 } : { duration: 0.45, ease: "easeOut", delay: 0.12 }}
                className="flex items-center justify-center whitespace-nowrap px-1 font-mono text-[.68rem] font-black text-white"
                style={{ background: split.extra >= 0 ? "#059669" : FA_RED }}
              >
                {split.extra >= 0 ? "turns +" : "turns −"} {fmtINR(Math.abs(split.extra), 2)}
              </motion.div>
            ) : null}
          </div>
          <p className="mt-2 text-[.72rem] leading-snug text-muted-warm">
            m × t = <b>m + m·(t−1)</b> — the algebra never lies: below 1× turnover, the second term turns red and drags ROA under the margin.
          </p>
        </div>

        {/* the prompt — both answers defensible */}
        <div className="mt-5 rounded-2xl p-5" style={{ background: FA_DARK_GRADIENT }}>
          <p className="text-[.62rem] font-extrabold uppercase tracking-[.22em] text-[#8fd4b4]">Which would you rather run?</p>
          <p className="mt-2 text-[.88rem] leading-relaxed text-[#dff3e8]">
            Luxury earns 10% on every sale but turns assets twice; the market turns them five times at 4%. Both land at{" "}
            <b className="text-[#a7d7b8]">20% ROA</b> — margin is the cushion, turnover is the velocity. Both answers are
            defensible; the strategy, not the arithmetic, decides.
          </p>
        </div>

        {/* Dr. Reddy's two-step bridge — the L34 DuPont canon */}
        <div className="mt-5 rounded-2xl border border-[#e4f1ea] bg-white p-4 sm:p-5">
          <p className="text-[.8rem] font-extrabold text-[#3e2c1d]">
            Dr. Reddy&apos;s Laboratories — the 2015 → 2016 bridge
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-1.5 font-mono text-[.78rem] font-black">
            <span className="rounded-lg border border-[#c7e5d6] bg-[#f4faf7] px-2.5 py-1.5" style={{ color: "#065f46" }}>
              13.05%
            </span>
            {bridge.steps.map((s) => (
              <React.Fragment key={s.label}>
                <span className="flex items-center gap-1 rounded-lg border px-2.5 py-1.5" style={{ borderColor: "#e8a896", background: "#fbeae5", color: FA_RED }}>
                  <span className="normal-case tracking-normal">↓ {fmtINR(Math.abs(s.delta), 2)}pp</span>
                  <span className="text-[.6rem] font-bold uppercase tracking-[.08em]">{s.label}</span>
                </span>
              </React.Fragment>
            ))}
            <span className="rounded-lg px-2.5 py-1.5 text-white" style={{ background: "linear-gradient(135deg,#10b981,#047857)" }}>
              11.11%
            </span>
          </div>
          <ul className="mt-3 grid gap-1.5 text-[.78rem] leading-relaxed text-[#2b2014]" role="list">
            <li className="flex items-start gap-2" role="listitem">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: FA_RED }} />
              <span>
                <b>Margin 15% → 13.71%</b> — the $461 million exceptional foreign-exchange loss (Venezuela operations).
              </span>
            </li>
            <li className="flex items-start gap-2" role="listitem">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: FA_RED }} />
              <span>
                <b>Turnover 0.87× → 0.81×</b> — assets grew 11.5% while revenue grew only 4.5%.
              </span>
            </li>
            <li className="flex items-start gap-2" role="listitem">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "#047857" }} />
              <span>Both drivers fell — deterioration on the operational and the asset-utilization front at once.</span>
            </li>
          </ul>
        </div>

        {/* stretch — leverage, the two-edged sword (L30) */}
        <div className="mt-5 rounded-2xl border border-[#e4f1ea] bg-[#f4faf7] p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <p className="flex items-center gap-2 text-[.8rem] font-extrabold text-[#3e2c1d]">
              <Swords className="h-4 w-4" style={{ color: "#047857" }} />
              Stretch — add leverage: ROE = ROA × Leverage
            </p>
            <button
              type="button"
              onClick={() => setStretch((v) => !v)}
              aria-pressed={stretch}
              className={`rounded-full px-3 py-1.5 text-[.7rem] font-extrabold uppercase tracking-[.1em] transition-colors ${
                stretch ? "bg-[#ecfdf5] text-[#065f46]" : "bg-white text-[#9db8a9] hover:text-[#5c7a6b]"
              } border border-[#e4f1ea]`}
            >
              {stretch ? "on" : "off"}
            </button>
          </div>
          {stretch ? (
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {slider("fa-dupont-lev", "Leverage (assets ÷ equity)", leverage, 1, 3, 0.05, setLeverage, "×")}
              {slider("fa-dupont-rate", "Interest rate on debt", rate, 2, 15, 0.5, setRate, "%")}
              <div className="sm:col-span-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[.95rem] font-black" style={{ color: swordCuts ? FA_RED : "#065f46" }}>
                    ROE = {fmtINR(product, 2)}% × {fmtINR(leverage, 2)} = {fmtINR(roe, 2)}%
                  </span>
                  {swordCuts ? (
                    <FaBadge tone="bad">
                      the sword cuts — ROA {fmtINR(product, 2)}% &lt; interest {fmtINR(rate, 2)}%
                    </FaBadge>
                  ) : (
                    <FaBadge tone="ok">amplifies — ROA {fmtINR(product, 2)}% &gt; interest {fmtINR(rate, 2)}%</FaBadge>
                  )}
                </div>
                <p className="mt-2 text-[.74rem] leading-relaxed text-muted-warm">
                  L30&apos;s point, verbatim in spirit: debt magnifies returns <b>only when ROA exceeds the interest
                  rate</b> — otherwise shareholders lose money. Debt is a two-edged sword. Your own inputs — the
                  condition is the lesson, not any one number.
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Trap C disclosure */}
      <footer>
        <FaSourceNote>
          <b>Note.</b> L30 reports direct ROA of 13.49% and 11.14%. DuPont gives 13.05% and 11.11% because the margin
          used here is rounded to 15%. The two decompositions tell the same story — both drivers fell.
        </FaSourceNote>
      </footer>
    </FaDiagramShell>
  );
}
