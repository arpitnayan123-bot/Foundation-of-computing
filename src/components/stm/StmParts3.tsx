"use client";

/* ============================================================
   Statistics for Managers — PART 3 of 7 (shelf 05). Chapter 2's
   quantitative displays (Hudson Auto's 50 parts costs: frequency
   distribution, histogram, dot plot, skewness, cumulative
   distributions, stem-and-leaf) and its two-variable displays
   (crosstabulation with row/column percentages, Simpson's
   paradox, scatter diagrams & trendlines, side-by-side and
   stacked bar charts, data visualization best practices and
   data dashboards).
   ============================================================ */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  Circle,
  Gauge,
  Grid3X3,
  LayoutDashboard,
  Move3d,
  Scissors,
  TrendingUp,
} from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { STM_G, STM_BTN_GRAD, StmCallout, StmPanel, StmQuiz, StmReadStep } from "@/components/stm/StmParts1";

/* ============================================================
   CHAPTER 2 · MOVEMENT 2 — SUMMARIZING QUANTITATIVE DATA
   ============================================================ */
const HUDSON_CLASSES = [
  { cls: "50–59", f: 2, rel: 0.04, pct: 4, cumF: 2, cumRel: 0.04, cumPct: 4 },
  { cls: "60–69", f: 13, rel: 0.26, pct: 26, cumF: 15, cumRel: 0.3, cumPct: 30 },
  { cls: "70–79", f: 16, rel: 0.32, pct: 32, cumF: 31, cumRel: 0.62, cumPct: 62 },
  { cls: "80–89", f: 7, rel: 0.14, pct: 14, cumF: 38, cumRel: 0.76, cumPct: 76 },
  { cls: "90–99", f: 7, rel: 0.14, pct: 14, cumF: 45, cumRel: 0.9, cumPct: 90 },
  { cls: "100–109", f: 5, rel: 0.1, pct: 10, cumF: 50, cumRel: 1.0, cumPct: 100 },
];

function HudsonHistogram() {
  const [mode, setMode] = useState<"f" | "pct">("f");
  const max = mode === "f" ? 16 : 32;
  return (
    <div className="card-warm p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[.9rem] font-bold text-[#3e2c1d]">Tune-up parts cost — histogram</p>
        <div className="flex overflow-hidden rounded-full border border-[#d9cdf8]">
          {(
            [
              { k: "f", label: "Frequency" },
              { k: "pct", label: "Percent" },
            ] as const
          ).map((b) => (
            <button
              key={b.k}
              type="button"
              onClick={() => setMode(b.k)}
              aria-pressed={mode === b.k}
              className={`px-3.5 py-1.5 text-[.7rem] font-bold transition-colors ${
                mode === b.k ? "text-white" : "bg-white text-[#6d28d9] hover:bg-[#f6f3fe]"
              }`}
              style={mode === b.k ? { background: STM_BTN_GRAD } : undefined}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 flex h-48 items-end gap-1 rounded-xl border border-[#e6e0f8] bg-[#fdfcff] p-3">
        {HUDSON_CLASSES.map((c, i) => {
          const v = mode === "f" ? c.f : c.pct;
          return (
            <div key={c.cls} className="flex h-full flex-1 flex-col items-center justify-end">
              <span className="mb-1 text-[.68rem] font-black text-[#5b21b6]">{v}</span>
              <motion.div
                className="w-full rounded-t-md"
                style={{ background: "linear-gradient(180deg,#8b5cf6,#5b21b6)" }}
                initial={{ height: 0 }}
                whileInView={{ height: `${(v / max) * 82}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }}
              />
            </div>
          );
        })}
      </div>
      <div className="mt-1.5 flex gap-1">
        {HUDSON_CLASSES.map((c) => (
          <span key={c.cls} className="flex-1 text-center font-mono text-[.62rem] font-bold text-[#8a7fae]">
            {c.cls}
          </span>
        ))}
      </div>
      <p className="mt-3 text-[.8rem] leading-relaxed text-muted-warm">
        The variable of interest goes on the <b>horizontal axis</b>; a rectangle is drawn above
        each class interval with its height corresponding to the interval&rsquo;s frequency,
        relative frequency, or percent frequency. <b>Unlike a bar graph, a histogram has no
        natural separation</b> between rectangles of adjacent classes — the rectangles touch
        because the scale is continuous.
      </p>
    </div>
  );
}

const DOT_X: Record<number, number> = { 50: 0, 60: 1, 70: 2, 80: 3, 90: 4, 100: 5, 110: 6 };
const DOT_VALUES = [
  91, 78, 93, 57, 75, 52, 99, 80, 97, 62, 71, 69, 72, 89, 66, 75, 79, 75, 72, 76,
  104, 74, 62, 68, 97, 105, 77, 65, 80, 109, 85, 97, 88, 68, 83, 68, 71, 69, 67, 74,
  62, 82, 98, 101, 79, 105, 79, 69, 62, 73,
];

function HudsonDots() {
  // group values into columns (one dot per value, stacked)
  const cols: Record<number, number[]> = {};
  for (const v of DOT_VALUES) {
    const col = DOT_X[Math.floor(v / 10) * 10] ?? (v >= 100 ? 5.4 : 0);
    const key = Math.round(col * 10) / 10;
    (cols[key] ??= []).push(v);
  }
  return (
    <svg viewBox="0 0 560 150" className="h-auto w-full" role="img" aria-label="Dot plot of the 50 tune-up parts costs: dots stacked above the axis between 50 and 110 dollars, densest around 62 to 79 dollars">
      <line x1="30" y1="118" x2="540" y2="118" stroke="#b3a6d9" strokeWidth="1.6" />
      {[50, 60, 70, 80, 90, 100, 110].map((t, i) => (
        <g key={t}>
          <line x1={30 + i * 85} y1="113" x2={30 + i * 85} y2="123" stroke="#b3a6d9" strokeWidth="1.4" />
          <text x={30 + i * 85} y="140" textAnchor="middle" fontSize="12" fill="#8a7fae">{t}</text>
        </g>
      ))}
      {Object.entries(cols).map(([k, vals]) =>
        vals.map((v, j) => (
          <motion.circle
            key={`${k}-${j}`}
            cx={30 + parseFloat(k) * 85}
            cy={112 - j * 9 - 5}
            r="3.4"
            fill="#6d28d9"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.85, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: j * 0.03 + parseFloat(k) * 0.05 }}
          />
        ))
      )}
      <text x="285" y="148" textAnchor="middle" fontSize="10.5" fill="#8a7fae">Tune-up parts cost ($)</text>
    </svg>
  );
}

export function StmQuantitativeSection() {
  return (
    <Section id="quantitative">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Chapter 2 · section 2.2"
          title={
            <>
              Summarizing <span className="grad-violet">quantitative</span> data
            </>
          }
          lead="Back to Hudson Auto's 50 parts costs — now with class widths, rectangles that touch, dots in columns, cumulative counters, and a stem-and-leaf that shows every single value."
        />

        <StmReadStep n="01" title="Choosing classes" sub="Six classes, width (109 − 50)/6 = 9.83 ≈ 10" />
        <Reveal>
          <StmPanel label="Sample of parts cost ($) for 50 tune-ups — Hudson Auto Repair">{`91  78  93  57  75  52  99  80  97  62
71  69  72  89  66  75  79  75  72  76
104 74  62  68  97  105 77  65  80  109
85  97  88  68  83  68  71  69  67  74
62  82  98  101 79  105 79  69  62  73

Width = (109 − 50) / 6 = 9.83 ≈ 10`}</StmPanel>
        </Reveal>

        <StmReadStep n="02" title="The frequency table + histogram" sub="2, 13, 16, 7, 7, 5 — flip between counts and percents" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            <div className="overflow-x-auto rounded-2xl">
              <table className="warm-table">
                <thead>
                  <tr>
                    <th>Parts cost ($)</th>
                    <th>Freq.</th>
                    <th>Rel. freq.</th>
                    <th>Percent</th>
                  </tr>
                </thead>
                <tbody>
                  {HUDSON_CLASSES.map((c) => (
                    <tr key={c.cls}>
                      <td className="font-bold">{c.cls}</td>
                      <td className="font-mono">{c.f}</td>
                      <td className="font-mono">{c.rel.toFixed(2)}</td>
                      <td className="font-mono">{c.pct}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="font-black">Total</td>
                    <td className="font-black font-mono">50</td>
                    <td className="font-black font-mono">1.00</td>
                    <td className="font-black font-mono">100</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <HudsonHistogram />
          </div>
        </Reveal>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmCallout kind="insight" title="Insights from the table">
              Only <b>4%</b> of the parts costs are in the $50–59 class · <b>30%</b> are under
              $70 · the greatest percentage (<b>32%</b>, almost one-third) are in the $70–79
              class · <b>10%</b> are $100 or more.
            </StmCallout>
          </Reveal>
          <Reveal delay={100}>
            <StmCallout kind="why" title="Why percents matter">
              Relative frequency converts counts into comparisons that survive a change of sample
              size — the histogram above flips between the two views without changing its shape.
            </StmCallout>
          </Reveal>
        </div>

        <StmReadStep n="03" title="Dot plot" sub="The simplest graphical summary — one dot per data value" />
        <Reveal>
          <div className="card-warm p-4 sm:p-5">
            <p className="text-[.9rem] font-bold text-[#3e2c1d]">Hudson Auto — dot plot of the 50 costs</p>
            <div className="mt-2">
              <HudsonDots />
            </div>
            <p className="text-[.8rem] leading-relaxed text-muted-warm">
              A horizontal axis shows the <b>range of data values</b>; then each data value is
              represented by a <b>dot placed above the axis</b> — stack the dots and the
              distribution&rsquo;s shape appears for free.
            </p>
          </div>
        </Reveal>

        <StmReadStep n="04" title="Skewness — reading the histogram's tail" sub="Exam scores · heights · housing values" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { t: "Moderately skewed left", d: "A longer tail to the left.", ex: "Ex: exam scores" },
            { t: "Symmetric", d: "Left tail is the mirror image of the right tail.", ex: "Ex: heights of people" },
            { t: "Moderately right skewed", d: "A longer tail to the right.", ex: "Ex: housing values" },
          ].map((s, i) => (
            <Reveal key={s.t} delay={i * 90}>
              <div className="card-warm lift h-full p-4">
                <p className="text-[.9rem] font-extrabold text-[#3e2c1d]">{s.t}</p>
                <p className="mt-1 text-[.78rem] text-muted-warm">{s.d} <b>{s.ex}</b></p>
                <svg viewBox="0 0 200 70" className="mt-2 h-auto w-full" aria-hidden>
                  {s.t.includes("left") ? (
                    <path d="M8 62 C 40 60, 60 52, 84 30 C 100 16, 112 16, 128 30 C 152 52, 172 60, 192 62" fill="none" stroke="#7c3aed" strokeWidth="2.4" />
                  ) : s.t.includes("Symmetric") ? (
                    <path d="M8 62 C 60 60, 76 46, 100 18 C 124 46, 140 60, 192 62" fill="none" stroke="#7c3aed" strokeWidth="2.4" />
                  ) : (
                    <path d="M8 62 C 28 60, 48 52, 72 30 C 88 16, 100 16, 116 30 C 140 52, 160 60, 192 62" fill="none" stroke="#7c3aed" strokeWidth="2.4" />
                  )}
                  <line x1="4" y1="63" x2="196" y2="63" stroke="#c9bbee" strokeWidth="1.2" />
                </svg>
              </div>
            </Reveal>
          ))}
        </div>

        <StmReadStep n="05" title="Cumulative distributions" sub="How many items at or below each upper limit?" />
        <Reveal>
          <div className="grid items-start gap-4 md:grid-cols-2">
            <div className="overflow-x-auto rounded-2xl">
              <table className="warm-table">
                <thead>
                  <tr>
                    <th>Cost ($)</th>
                    <th>Cumulative freq.</th>
                    <th>Cum. rel. freq.</th>
                    <th>Cum. percent</th>
                  </tr>
                </thead>
                <tbody>
                  {HUDSON_CLASSES.map((c) => (
                    <tr key={`c-${c.cls}`}>
                      <td className="font-bold">≤ {c.cls.split("–")[1]}</td>
                      <td className="font-mono">{c.cumF}</td>
                      <td className="font-mono">{c.cumRel.toFixed(2)}</td>
                      <td className="font-mono">{c.cumPct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <StmPanel label="The three cumulative readings">{`Cumulative FREQUENCY distribution:
 the NUMBER of items with values less than
 or equal to the upper limit of each class.

Cumulative RELATIVE frequency distribution:
 the PROPORTION of items ≤ the upper limit.

Cumulative PERCENT frequency distribution:
 the PERCENTAGE of items ≤ the upper limit.`}</StmPanel>
              <p className="mt-2 text-[.78rem] leading-relaxed text-muted-warm">
                E.g. ≤ 69: 15 = 2 + 13 · .30 = 15/50 · 30 = .30(100).
              </p>
            </div>
          </div>
        </Reveal>

        <StmReadStep n="06" title="Stem-and-leaf display" sub="A histogram on its side — that keeps the actual data values" />
        <Reveal>
          <div className="grid items-start gap-4 md:grid-cols-2">
            <div className="card-warm p-4">
              <p className="text-[.9rem] font-bold text-[#3e2c1d]">Hudson costs — stem-and-leaf</p>
              <pre className="mt-3 overflow-x-auto rounded-xl p-4 font-mono text-[.8rem] leading-relaxed text-[#3a2d63]" style={{ background: STM_G.wash, border: `1px solid ${STM_G.border}` }}>{` 5 | 2 7
 6 | 2 2 2 2 5 6 7 8 8 8 9 9 9
 7 | 1 1 2 2 3 4 4 5 5 5 6 7 8 9 9 9
 8 | 0 0 2 3 5 8 9
 9 | 1 3 7 7 7 8 9
10 | 1 4 5 5 9

Stems = leading digits (rows)
Leaves = last digit of each item, in rank order`}</pre>
              <p className="mt-2 text-[.78rem] leading-relaxed text-muted-warm">
                Shows both the <b>rank order and the shape</b> of a distribution — similar to a
                histogram on its side, but with the advantage of showing the <b>actual data
                values</b>.
              </p>
            </div>
            <div className="space-y-3">
              <StmCallout kind="insight" title="Stretched stems">
                If the display condenses the data too much, <b>stretch it vertically</b> by using
                two stems per leading digit — the first takes leaf values 0–4, the second 5–9.
              </StmCallout>
              <StmCallout kind="why" title="Leaf units">
                A single digit defines each leaf; leaf units may be 100, 10, 1, 0.1, … If not
                shown, the leaf unit is assumed to equal <b>1</b>. Data 8.6, 11.7, 9.4, 9.1, 10.2,
                11.0, 8.8 with <b>leaf unit = 0.1</b> → stems 8|68, 9|14, 10|2, 11|07. Data
                1806, 1717, 1974, 1791, 1682, 1910, 1838 with <b>leaf unit = 10</b> → the 82 in
                1682 rounds down to 80, shown as an 8.
              </StmCallout>
            </div>
          </div>
        </Reveal>

        <StmReadStep n="07" title="Concept check — quantitative displays" sub="The deck's checks, answered" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmQuiz
              source="Concept check 2 · Q1 — answer key: a"
              q="The most common graphical presentation of quantitative data is a…"
              options={["histogram", "bar chart", "dot plot", "pie chart"]}
              answer={0}
              explain="The histogram — rectangles over class intervals of a quantitative variable."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Concept check 2 · Q2+Q3 — answer key: c / c"
              q="The total number of data items with a value less than the upper limit for the class is given by the ______ distribution; and in a cumulative frequency distribution, the last class will always have a cumulative frequency equal to…"
              options={["relative frequency · 100%", "cumulative relative frequency · one", "cumulative frequency · the total number of elements in the data set", "frequency · the class width"]}
              answer={2}
              explain="Cumulative frequency counts everything at or below each upper limit — so the last class must hold all n elements (50 for Hudson)."
            />
          </Reveal>
        </div>

        <Takeaways
          items={[
            <>Class width = <b>(largest − smallest)/classes</b> → 9.83 ≈ 10; classes 50–59 … 100–109.</>,
            <>Histogram rectangles <b>touch</b> (continuous scale); bar-chart bars are <b>separated</b> (categories).</>,
            <>Cumulative columns answer &ldquo;≤ upper limit&rdquo; questions; stem-and-leaf keeps <b>every actual value</b> while showing shape.</>,
          ]}
        />
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 2 · MOVEMENT 3 — TWO VARIABLES: TABLES & DISPLAYS
   ============================================================ */
const HOMES = {
  styles: ["Colonial", "Log", "Split", "A-Frame"],
  rows: [
    { price: "< $250,000", counts: [18, 6, 19, 12], total: 55 },
    { price: "≥ $250,000", counts: [12, 14, 16, 3], total: 45 },
  ],
  colTotals: [30, 20, 35, 15],
  grand: 100,
};

type CrossView = "counts" | "row" | "col";

function CrossTabMachine() {
  const [view, setView] = useState<CrossView>("counts");
  return (
    <div className="card-warm overflow-hidden p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[.9rem] font-bold text-[#3e2c1d]">Finger Lakes Homes — homes sold by style and price, past two years</p>
        <div className="flex overflow-hidden rounded-full border border-[#d9cdf8]">
          {(
            [
              { k: "counts", label: "Counts" },
              { k: "row", label: "Row %" },
              { k: "col", label: "Column %" },
            ] as const
          ).map((b) => (
            <button
              key={b.k}
              type="button"
              onClick={() => setView(b.k)}
              aria-pressed={view === b.k}
              className={`px-3.5 py-1.5 text-[.7rem] font-bold transition-colors ${
                view === b.k ? "text-white" : "bg-white text-[#6d28d9] hover:bg-[#f6f3fe]"
              }`}
              style={view === b.k ? { background: STM_BTN_GRAD } : undefined}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="warm-table min-w-[520px]">
          <thead>
            <tr>
              <th>Price range</th>
              {HOMES.styles.map((s) => (
                <th key={s} className="text-center">{s}</th>
              ))}
              <th className="text-center">Total</th>
            </tr>
          </thead>
          <tbody>
            {HOMES.rows.map((row) => (
              <tr key={row.price}>
                <td className="font-bold">{row.price}</td>
                {row.counts.map((c, ci) => {
                  const text =
                    view === "counts"
                      ? String(c)
                      : view === "row"
                      ? ((c / row.total) * 100).toFixed(2)
                      : ((c / HOMES.colTotals[ci]) * 100).toFixed(2);
                  return (
                    <td key={ci} className="text-center font-mono">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={`${view}-${text}`}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.16 }}
                          className="inline-block"
                        >
                          {text}
                        </motion.span>
                      </AnimatePresence>
                    </td>
                  );
                })}
                <td className="text-center font-mono font-bold">{view === "counts" ? row.total : 100}</td>
              </tr>
            ))}
            <tr>
              <td className="font-black">Total</td>
              {HOMES.colTotals.map((t, i) => (
                <td key={i} className="text-center font-mono font-bold">{view === "counts" ? t : 100}</td>
              ))}
              <td className="text-center font-mono font-black">{view === "counts" ? HOMES.grand : ""}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={view}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="mt-3 text-[.84rem] leading-relaxed text-muted-warm"
        >
          {view === "counts" && (
            <>
              The raw <b>crosstabulation</b>. Converting entries into row or column percentages
              provides additional insight about the relationship between the two variables.
            </>
          )}
          {view === "row" && (
            <>
              <b>Row percentages</b> — (Colonial and ≥ $250K) / (All ≥ $250K) × 100 = (12/45) ×
              100 = 26.67. Row totals are actually 100.01 due to rounding.
            </>
          )}
          {view === "col" && (
            <>
              <b>Column percentages</b> — (Colonial and ≥ $250K) / (All Colonial) × 100 = (12/30)
              × 100 = 40.00. Each column now sums to 100.
            </>
          )}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

const PANTHERS = [
  { x: 1, y: 14 },
  { x: 3, y: 24 },
  { x: 2, y: 18 },
  { x: 1, y: 17 },
  { x: 3, y: 30 },
];

function PanthersScatter() {
  const sx = (x: number) => 60 + (x - 0.4) * 130;
  const sy = (y: number) => 190 - (y - 8) * 5.2;
  return (
    <svg viewBox="0 0 420 230" className="h-auto w-full" role="img" aria-label="Scatter diagram of the Panthers data: points at interceptions 1, 3, 2, 1, 3 against points 14, 24, 18, 17, 30, with an upward trendline suggesting a positive relationship">
      <line x1="46" y1="196" x2="400" y2="196" stroke="#b3a6d9" strokeWidth="1.4" />
      <line x1="46" y1="20" x2="46" y2="196" stroke="#b3a6d9" strokeWidth="1.4" />
      {[1, 2, 3, 4].map((t) => (
        <g key={t}>
          <line x1={sx(t)} y1="192" x2={sx(t)} y2="200" stroke="#b3a6d9" />
          <text x={sx(t)} y="214" textAnchor="middle" fontSize="11" fill="#8a7fae">{t}</text>
        </g>
      ))}
      {[10, 20, 30].map((t) => (
        <g key={t}>
          <line x1="42" y1={sy(t)} x2="50" y2={sy(t)} stroke="#b3a6d9" />
          <text x="36" y={sy(t) + 4} textAnchor="end" fontSize="11" fill="#8a7fae">{t}</text>
        </g>
      ))}
      <text x="240" y="228" textAnchor="middle" fontSize="10.5" fill="#8a7fae">Number of interceptions (x)</text>
      <text x="14" y="108" fontSize="10.5" fill="#8a7fae" transform="rotate(-90 14 108)" textAnchor="middle">Points scored (y)</text>
      <motion.line
        x1={sx(0.7)} y1={sy(10)} x2={sx(3.4)} y2={sy(31)}
        stroke="#b3402c" strokeWidth="2.4" strokeDasharray="5 5" strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.85 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.5, ease: "easeInOut" }}
      />
      {PANTHERS.map((p, i) => (
        <motion.circle
          key={i}
          cx={sx(p.x)} cy={sy(p.y)} r="7"
          fill="#fffdf9" stroke="#6d28d9" strokeWidth="2.6"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: i * 0.12, type: "spring", stiffness: 260 }}
        />
      ))}
    </svg>
  );
}

export function StmTwoVarsSection() {
  return (
    <Section id="twovars">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Chapter 2 · sections 2.3–2.5"
          title={
            <>
              Two variables at <span className="grad-violet">once</span>
            </>
          }
          lead="Crosstabulations with their row and column percentages, the paradox hiding inside aggregated tables, scatter diagrams with trendlines, side-by-side and stacked bars — and the craft rules for every chart you will ever show a manager."
        />

        <StmReadStep n="01" title="Crosstabulation" sub="One variable categorical and the other quantitative — or both of either" />
        <Reveal>
          <CrossTabMachine />
        </Reveal>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmCallout kind="insight" title="Insights from the counts">
              The greatest number of homes in the sample (<b>19</b>) are a <b>split-level</b>{" "}
              style priced at less than $250,000 · only <b>three</b> homes are an A-Frame style
              priced at $250,000 or more. The left and top margin labels define the classes for
              the two variables.
            </StmCallout>
          </Reveal>
          <Reveal delay={100}>
            <StmCallout kind="warn" title="Simpson's paradox">
              Data in two or more crosstabulations are often <b>aggregated</b> to produce a
              summary crosstabulation — but be careful: conclusions based upon an aggregated
              crosstabulation can be <b>completely reversed</b> when we look at the unaggregated
              data. That reversal is called <b>Simpson&rsquo;s paradox</b>.
            </StmCallout>
          </Reveal>
        </div>

        <StmReadStep n="02" title="Scatter diagram & trendline" sub="Do interceptions buy points? The Panthers say yes — mostly" />
        <Reveal>
          <div className="grid items-start gap-4 md:grid-cols-[minmax(0,3fr)_minmax(0,4fr)]">
            <div className="overflow-x-auto rounded-2xl">
              <table className="warm-table">
                <thead>
                  <tr>
                    <th>x — interceptions</th>
                    <th>y — points scored</th>
                  </tr>
                </thead>
                <tbody>
                  {PANTHERS.map((p, i) => (
                    <tr key={i}>
                      <td className="font-mono">{p.x}</td>
                      <td className="font-mono">{p.y}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card-warm p-4">
              <PanthersScatter />
            </div>
          </div>
        </Reveal>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {[
            "A scatter diagram is a graphical presentation of the relationship between two QUANTITATIVE variables — one on each axis.",
            "The general pattern of the plotted points suggests the overall relationship; a trendline provides an approximation of it.",
            "Panthers verdict: a positive relationship — higher points scored are associated with more interceptions — but NOT perfect; the points do not all sit on a straight line.",
          ].map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="card-warm lift h-full p-4 text-[.82rem] leading-relaxed text-muted-warm">{t}</div>
            </Reveal>
          ))}
        </div>

        <StmReadStep n="03" title="Side-by-side & stacked bars" sub="Comparing two variables on one display" />
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="card-warm h-full p-5">
              <p className="text-[.9rem] font-bold text-[#3e2c1d]">Side-by-side bar chart</p>
              <div className="mt-4 flex h-40 items-end justify-around gap-3 border-b border-[#e6e0f8]">
                {HOMES.styles.map((s, si) => (
                  <div key={s} className="flex h-full items-end gap-1">
                    <motion.div
                      className="w-5 rounded-t-md bg-[#e9e2fa]"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(HOMES.rows[0].counts[si] / 20) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: si * 0.08 }}
                      title={`< $250,000: ${HOMES.rows[0].counts[si]}`}
                    />
                    <motion.div
                      className="w-5 rounded-t-md bg-[#6d28d9]"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(HOMES.rows[1].counts[si] / 20) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: si * 0.08 + 0.15 }}
                      title={`≥ $250,000: ${HOMES.rows[1].counts[si]}`}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-2 flex justify-around gap-2">
                {HOMES.styles.map((s) => (
                  <span key={s} className="text-[.62rem] font-bold text-[#6f5c8f]">{s}</span>
                ))}
              </div>
              <p className="mt-3 text-[.8rem] leading-relaxed text-muted-warm">
                Each <b>cluster</b> represents one value of the first variable; each bar within a
                cluster represents one value of the second (light = &lt; $250K, dark = ≥ $250K).
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm h-full p-5">
              <p className="text-[.9rem] font-bold text-[#3e2c1d]">Stacked bar chart — percent frequencies</p>
              <div className="mt-4 flex h-40 items-end justify-around gap-3 border-b border-[#e6e0f8]">
                {HOMES.styles.map((s, si) => {
                  const lo = (HOMES.rows[0].counts[si] / HOMES.colTotals[si]) * 100;
                  const hi = 100 - lo;
                  return (
                    <div key={s} className="flex h-full w-10 flex-col justify-end overflow-hidden rounded-t-md">
                      <motion.div
                        className="w-full bg-[#6d28d9]"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${hi}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: si * 0.1 }}
                        title={`≥ $250K: ${hi.toFixed(0)}%`}
                      />
                      <motion.div
                        className="w-full bg-[#e9e2fa]"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${lo}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: si * 0.1 }}
                        title={`< $250K: ${lo.toFixed(0)}%`}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="mt-2 flex justify-around gap-2">
                {HOMES.styles.map((s) => (
                  <span key={s} className="text-[.62rem] font-bold text-[#6f5c8f]">{s}</span>
                ))}
              </div>
              <p className="mt-3 text-[.8rem] leading-relaxed text-muted-warm">
                Each bar is <b>broken into rectangular segments</b> of a different color — and if
                percentage frequencies are displayed, all bars have the <b>same height</b>,
                extending to the 100% mark.
              </p>
            </div>
          </Reveal>
        </div>

        <StmReadStep n="04" title="Data visualization — best practices" sub="Creating effective graphical displays is as much art as it is science" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm h-full p-5">
              <p className="text-[.92rem] font-extrabold text-[#3e2c1d]">Five guidelines</p>
              <ol className="mt-3 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm">
                <li><b>1.</b> Give the display a clear and concise title.</li>
                <li><b>2.</b> Keep the display simple.</li>
                <li><b>3.</b> Clearly label each axis and provide the units of measure.</li>
                <li><b>4.</b> If colors are used, make sure they are distinct.</li>
                <li><b>5.</b> If multiple colors or line types are used, provide a legend.</li>
              </ol>
              <p className="mt-3 text-[.8rem] leading-relaxed text-muted-warm">
                <b>Data visualization</b> is the use of graphical displays to summarize and
                present information about a data set — the goal is to communicate as effectively
                and clearly as possible the key information about the data.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm h-full p-5">
              <p className="flex items-center gap-2 text-[.92rem] font-extrabold text-[#3e2c1d]">
                <LayoutDashboard className="h-4 w-4" style={{ color: STM_G[700] }} /> Data dashboards
              </p>
              <p className="mt-3 text-[.85rem] leading-relaxed text-muted-warm">
                A widely used data visualization tool: it organizes and presents{" "}
                <b>key performance indicators (KPIs)</b> used to monitor an organization or
                process — timely summary information that is easy to read, understand, and
                interpret (like Groupon&rsquo;s call-center dashboard: call volume, time
                breakdown, unresolved cases &gt; 15 minutes, volumes by office, time to resolve a
                case).
              </p>
              <ul className="mt-3 space-y-1.5 text-[.84rem] leading-relaxed text-muted-warm">
                <li>· Minimize the need for screen scrolling</li>
                <li>· Avoid unnecessary use of color or 3D displays</li>
                <li>· Use borders between charts to improve readability</li>
              </ul>
              <p className="mt-3 text-[.8rem] leading-relaxed text-muted-warm">
                Choosing the display: <b>show distribution</b> — bar, pie, dot plot, histogram,
                stem-and-leaf · <b>make comparisons</b> — side-by-side, stacked ·{" "}
                <b>show relationships</b> — scatter diagram, trendline.
              </p>
            </div>
          </Reveal>
        </div>

        <StmReadStep n="05" title="Concept checks — two variables & visualization" sub="The deck's checks, answered" />
        <div className="grid gap-3 md:grid-cols-3">
          <Reveal>
            <StmQuiz
              source="Concept check 4 · Q1 — answer key: b"
              q="In a scatter diagram, a line that provides an approximation of the relationship between the variables is known as a ______ line."
              options={["determination", "trend", "control", "zero-bias"]}
              answer={1}
              explain="The trendline."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Concept check 3 · Q4 — answer key: a"
              q="Before drawing any conclusions about the relationship between two variables shown in a crosstabulation, you should…"
              options={["investigate whether any hidden variables could affect the conclusions", "construct a scatter diagram and find the trendline", "develop a relative frequency distribution", "construct a dot plot and look for significant gaps"]}
              answer={0}
              explain="Hidden variables first — that is the habit that catches Simpson's paradox before it catches you."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Concept check 5 · Q3 + Q4 — answer key: c / d"
              q="In quality control applications, a bar chart arranged in descending order of height with the most frequently occurring cause first is called a ______; and the graphical tool typically associated with the display of key performance indicators is a ______."
              options={["cause-and-effect diagram · stacked bar chart", "ogive · stem-and-leaf display", "Pareto diagram · data dashboard", "stacked bar chart · crosstabulation"]}
              answer={2}
              explain="Pareto diagram; data dashboard."
            />
          </Reveal>
        </div>

        <Takeaways
          items={[
            <>Crosstabulations work for <b>any mix</b> of categorical/quantitative variables — the margins define the classes.</>,
            <>Row % answers &ldquo;within this price band…&rdquo;, column % answers &ldquo;within this style…&rdquo; — and <b>aggregation can reverse the story</b> (Simpson&rsquo;s paradox).</>,
            <>Dashboards: KPIs up front, <b>no scrolling</b>, no 3D, borders between charts.</>,
          ]}
        />
      </div>
    </Section>
  );
}
