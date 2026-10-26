"use client";

/* ============================================================
   Statistics for Managers — PART 13 (shelf 05). The first case
   file and the one-shot inventory order, restored to their own
   lectures after the PDF re-map:
   · Lecture 8  → #case-file-1  Pelican Stores (moved out of the
     old case-file-2) + the Excel laboratory + the chapters 1–2
     recap. One data correction: American Express = 3 of 100
     (the old table showed 2, which broke the 100-transaction
     total; the case data sums to 70+10+14+3+3).
   · Lecture 15 → #toy-order    Weather Teddy (moved out of the
     old case-file-2) with a new service-level dial that prices
     every order quantity live.
   Every figure is from the lecture notes, hand-checked.
   ============================================================ */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck, PackageSearch, ShoppingCart, Sigma, TrendingDown, TrendingUp } from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { STM_G, STM_BTN_GRAD, StmCallout, StmPanel, StmQuiz, StmReadStep } from "@/components/stm/StmParts1";

/* ============================================================
   CASE FILE I — PELICAN STORES (lecture 8)
   ============================================================ */

/* Payment method, 100 transactions — corrected: Amex = 3 */
const PELICAN_PAY = [
  ["Proprietary card", 70],
  ["Visa", 10],
  ["MasterCard", 14],
  ["Discover", 3],
  ["American Express", 3],
] as const;

function PelicanBars() {
  const max = 70;
  return (
    <div className="flex flex-col gap-2">
      {PELICAN_PAY.map(([label, count], i) => (
        <div key={label} className="flex items-center gap-2">
          <span className="w-32 shrink-0 text-right text-[.72rem] font-semibold text-[#5c4a2f]">{label}</span>
          <div className="h-4 flex-1 overflow-hidden rounded-full bg-[#f1ecfd]">
            <motion.div
              className="h-full rounded-full"
              style={{ background: STM_BTN_GRAD }}
              initial={{ width: 0 }}
              whileInView={{ width: `${(count / max) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }}
            />
          </div>
          <span className="w-8 shrink-0 font-mono text-[.74rem] font-bold" style={{ color: STM_G[800] }}>{count}</span>
        </div>
      ))}
      <p className="mt-1 text-[.7rem] text-muted-warm">Payment method — 100 transactions, Pelican Stores promotion</p>
    </div>
  );
}

/* frequency → relative → percentage, one toggle, one table */
function PelicanFreqToggle() {
  const modes = ["frequency", "relative", "percentage"] as const;
  const [mode, setMode] = useState<(typeof modes)[number]>("frequency");
  const show = (n: number) =>
    mode === "frequency" ? String(n) : mode === "relative" ? (n / 100).toFixed(2) : `${n}%`;
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
      <div className="flex flex-wrap items-center gap-2">
        {modes.map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            aria-pressed={mode === m}
            className={`rounded-full border px-3 py-1 text-[.72rem] font-bold capitalize transition-all duration-200 ${
              mode === m ? "border-transparent text-white shadow-md" : "border-[#d9cdf8] bg-white text-[#5b21b6] hover:bg-[#f6f3fe]"
            }`}
            style={mode === m ? { background: STM_BTN_GRAD } : undefined}
          >
            {m}
          </button>
        ))}
        <span className="ml-auto text-[.66rem] font-bold text-muted-warm">
          {mode === "relative" ? "Σ = 1.00" : mode === "percentage" ? "Σ = 100%" : "Σ = 100"}
        </span>
      </div>
      <table className="mt-3 w-full text-[.8rem]">
        <thead>
          <tr className="text-left text-[.64rem] font-black uppercase tracking-[.12em] text-muted-warm">
            <th className="pb-1">Payment method</th>
            <th className="pb-1 text-right capitalize">{mode}</th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence mode="wait">
            <motion.tr key={mode} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.16 }}>
              <td className="py-0.5 font-semibold text-[#2b1d42]" colSpan={2}>
                <div className="flex flex-col gap-1">
                  {PELICAN_PAY.map(([label, count]) => (
                    <div key={label} className="flex items-center justify-between gap-3 border-b border-[#eee7fb] py-1 last:border-0">
                      <span className="text-[.8rem] font-semibold text-[#3d2f52]">{label}</span>
                      <span className="font-mono font-bold" style={{ color: STM_G[800] }}>{show(count)}</span>
                    </div>
                  ))}
                </div>
              </td>
            </motion.tr>
          </AnimatePresence>
        </tbody>
      </table>
      <p className="mt-2 text-[.72rem] leading-snug text-muted-warm">
        Same data, three readings: counts for the audit trail, proportions for the maths, percentages for the
        boardroom. Decimals are hard to present — multiply by 100 and the meeting moves faster.
      </p>
    </div>
  );
}

function PelicanCase() {
  return (
    <Reveal>
      <div className="card-warm overflow-hidden">
        <div className="p-5" style={{ background: "linear-gradient(135deg,#14311f,#1d4a2e)" }}>
          <p className="flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.16em] text-[#b7e4c7]">
            <ShoppingCart className="h-4 w-4" /> Case 1 · Lecture 8 — descriptive profiling
          </p>
          <p className="mt-2 font-display text-2xl font-black text-[#f0fff4]">
            Pelican Stores — did the coupon campaign bring incremental business?
          </p>
          <p className="mt-1 text-[.85rem] leading-relaxed text-[#cfe8d6]">
            A division of a national clothing chain ran a <b>discount-coupon promotion</b> and
            sampled <b>100 transactions</b> during the period, on the assumption that
            coupon-customer sales were incremental. Seven variables per customer: type, items,
            net sales, gender, marital status, payment method, age. The manager&apos;s questions:
            who is the promotional customer, and is the strategy working?
          </p>
        </div>
        <div className="grid gap-4 p-5 md:grid-cols-2">
          <div>
            <p className="text-[.8rem] font-extrabold uppercase tracking-[.12em]" style={{ color: STM_G[700] }}>
              The profile the data draws
            </p>
            <ul className="mt-2 space-y-1.5 text-[.84rem] leading-relaxed text-muted-warm">
              <li>· <b>70%</b> of transactions were promotional — strong coupon response</li>
              <li>· Promotional customers bought <b>266 items (~4 each)</b> vs regulars&apos; <b>56 (~2 each)</b></li>
              <li>· Promotional spend per transaction ≈ <b>double</b> the regular rate</li>
              <li>· Age vs per-item spend and items purchased both trend <b>positive</b> on the scatter — older customers buy more, and dearer</li>
              <li>· Derived metric: <b>net sales ÷ items</b> normalises spend so big baskets don&apos;t disguise small baskets</li>
              <li>· The proprietary card dominates (70 of 100) — Pelican sees <b>its own customers&apos; full baskets</b>, a data advantage competitors can&apos;t buy</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <div className="rounded-2xl border border-[#d9cdf8] bg-white p-4">
              <PelicanBars />
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* the chapters 1–2 recap strip — lecture 8 opens with it */
const MARADA_RATINGS = [
  ["Poor", 2],
  ["Below average", 3],
  ["Average", 5],
  ["Above average", 9],
  ["Excellent", 1],
] as const;

function MaradaRecap() {
  return (
    <Reveal>
      <div className="card-warm p-5">
        <p className="flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.14em]" style={{ color: STM_G[700] }}>
          <CalendarCheck className="h-4 w-4" /> The recap warm-up — Marada Inn, again
        </p>
        <p className="mt-2 text-[.85rem] leading-relaxed text-muted-warm">
          Lecture 8 opens by re-running the chapters 1–2 engine on the <b>Marada Inn</b> quality ratings
          (n = 20 guests, each rating exactly one category — mutually exclusive). Every display below was
          built live in chapters 1–2; here it becomes the <b>checklist</b> a manager runs before any
          profiling study: frequency, relative frequency, percentage, bar, pie.
        </p>
        <div className="mt-3 flex flex-col gap-1.5">
          {MARADA_RATINGS.map(([label, count], i) => (
            <div key={label} className="flex items-center gap-2">
              <span className="w-28 shrink-0 text-right text-[.72rem] font-semibold text-[#5c4a2f]">{label}</span>
              <div className="h-3.5 flex-1 overflow-hidden rounded-full bg-[#f1ecfd]">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: i === 3 ? "linear-gradient(90deg,#ca8a04,#e6cd7f)" : STM_BTN_GRAD }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(count / 9) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: "easeOut" }}
                />
              </div>
              <span className="w-14 shrink-0 font-mono text-[.72rem] font-bold" style={{ color: STM_G[800] }}>
                {count} · {(count / 20).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-2 text-[.72rem] text-muted-warm">
          Above average leads: f = 9, relative frequency = 9/20 = <b>.45</b>, percentage = <b>45%</b> — and the
          angles of the pie slice: .45 × 360° = <b>162°</b>.
        </p>
      </div>
    </Reveal>
  );
}

export function StmCaseFile1Section() {
  return (
    <Section id="case-file-1">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 8 — the descriptive case file"
          title={
            <>
              Pelican Stores <span className="grad-violet">& the Excel laboratory</span>
            </>
          }
          lead="Chapters 1–2 close the only way they can: on real receipts. Pelican Stores profiles 100 promotional transactions with the full descriptive toolkit — and every number is produced by an Excel formula you already know, not by a statistician's incantation."
        />

        <StmReadStep n="01" title="Case — Pelican Stores" sub="Descriptive profiling decides if the coupons worked" />
        <PelicanCase />

        <StmReadStep n="02" title="The Excel laboratory" sub="COUNTIF, pivot tables and the three readings of one table" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmPanel label="The COUNTIF recipe">{`=COUNTIF(D2:D101, "Proprietary card")
      → 70

The $ trick when copying down:
=COUNTIF($D$2:$D$101, G4)
   G4 holds the category name — lock the
   DATA range with $ so only the criteria
   cell moves as the formula is filled.`}</StmPanel>
          </Reveal>
          <Reveal delay={60}>
            <StmPanel label="The pivot-table recipe">{`Insert → PivotTable → drag the fields:

Rows    : Customer Type
Columns : Payment Method
Values  : Count of transaction

One drag each = a full cross-tabulation
of two categorical variables. Row and
column totals give the marginals; the
cells give the interaction.`}</StmPanel>
          </Reveal>
        </div>
        <Reveal className="mt-3">
          <PelicanFreqToggle />
        </Reveal>
        <Reveal className="mt-3">
          <StmCallout kind="insight" title="Why the manager stops at descriptive statistics">
            <p>
              The campaign question — <i>did the coupons bring incremental business?</i> — is answered with{" "}
              <b>no inference at all</b>: 70% promotional participation, baskets twice the size, the
              proprietary card carrying almost three-quarters of payments. Cross-tabs (rows: customer type;
              columns: payment method) and the age-vs-spend scatter finish the profile. The inference
              machinery of chapters 7–8 exists for the days when the sample <i>can&apos;t</i> be the answer —
              profiling a captured campaign is not that day.
            </p>
          </StmCallout>
        </Reveal>

        <StmReadStep n="03" title="The recap warm-up" sub="Lecture 8 re-runs chapters 1–2 on the Marada Inn ratings" />
        <MaradaRecap />

        <StmReadStep n="04" title="Check yourself" sub="Two questions, two instincts" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmQuiz
              source="Case file I · check"
              q="Pelican's sample shows 266 items bought by 70 promotional customers and 56 items by 30 regulars. The per-customer comparison the manager should quote is…"
              options={["≈ 3.8 vs ≈ 1.9 items — promotional customers buy about double", "266 vs 56 items, as-is", "70% vs 30%", "the means cannot be compared — different group sizes"]}
              answer={0}
              explain="Normalise by group size: 266/70 ≈ 3.8 items per promotional customer vs 56/30 ≈ 1.9 for regulars — roughly double. Raw totals mislead when the groups differ in size; per-customer rates (or net sales ÷ items) are the honest comparison."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Case file I · check"
              q="You copy =COUNTIF(D$2:D$101, G4) down a summary column as G4 moves through the payment methods. What breaks if the $ signs on the data range are removed?"
              options={[
                "the data range shifts as the formula fills — later rows count the wrong cells",
                "the criteria cell stops updating",
                "nothing — relative and absolute references behave identically here",
                "COUNTIF returns percentages instead of counts",
              ]}
              answer={0}
              explain="Without $ locks, filling the formula down also slides the data range (D2:D101 becomes D3:D102, …), so later criteria count mis-aligned cells. Lock the range: =COUNTIF($D$2:$D$101, G4) — only the criteria cell should travel."
            />
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <Takeaways
            items={[
              <>
                <b>Pelican Stores</b>: 70% promotional, ≈3.8 vs ≈1.9 items per customer, proprietary card
                on 70 of 100 receipts — <b>COUNTIF + pivot tables are the campaign evaluation</b>.
              </>,
              <>
                One table, three readings: <b>frequency → relative (Σ = 1) → percentage (Σ = 100%)</b> —
                decimals for maths, percentages for people.
              </>,
              <>
                The lecture 8 warm-up re-runs <b>Marada Inn</b> (n = 20, above average = .45 = 45% =
                162° of pie) — the chapters 1–2 engine, now a checklist.
              </>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   WEATHER TEDDY — SPECIALTY TOYS (lecture 15)
   ============================================================ */

/* Stockout = P(D > Q) = 1 − NORM.DIST(Q, 20000, 5102, TRUE); the "fill"
   column is P(D ≤ Q) — the lecture quotes 16.35% for Q = 15,000, which is
   the fill probability (Z = −0.98), not the stockout. Corrected here. */
const TEDDY_ORDERS = [
  { q: 15000, z: -0.98, fill: "16.35%", stockout: "83.65%", profits: ["+$25,000", "+$120,000", "+$120,000"] },
  { q: 18000, z: -0.39, fill: "34.83%", stockout: "65.17%", profits: ["−$8,000", "+$168,000", "+$168,000"] },
  { q: 24000, z: 0.78, fill: "78.23%", stockout: "21.77%", profits: ["−$74,000", "+$116,000", "+$192,000"] },
  { q: 28000, z: 1.57, fill: "94.18%", stockout: "5.82%", profits: ["−$100,000", "+$72,000", "+$200,000"] },
] as const;

/* z for the service-level dial — the table values the course uses */
const Z_STEPS: { p: number; z: number }[] = [
  { p: 0.5, z: 0 },
  { p: 0.55, z: 0.125 },
  { p: 0.6, z: 0.253 },
  { p: 0.65, z: 0.385 },
  { p: 0.7, z: 0.524 },
  { p: 0.75, z: 0.674 },
  { p: 0.8, z: 0.842 },
  { p: 0.85, z: 1.036 },
  { p: 0.9, z: 1.282 },
  { p: 0.95, z: 1.645 },
];

function TeddyServiceDial() {
  const [p, setP] = useState(0.7);
  const step = Z_STEPS.reduce((best, s) => (Math.abs(s.p - p) < Math.abs(best.p - p) ? s : best), Z_STEPS[0]);
  const q = Math.round(20000 + step.z * 5102);
  const stockout = Math.round((1 - p) * 1000) / 10;
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
      <p className="text-[.74rem] font-black uppercase tracking-[.14em]" style={{ color: STM_G[700] }}>
        The service-level dial — price your own risk
      </p>
      <label htmlFor="teddy-service" className="mt-3 block text-[.78rem] font-semibold text-muted-warm">
        Service level (probability demand ≤ Q): <span className="font-mono font-black" style={{ color: STM_G[800] }}>{Math.round(p * 100)}%</span>
      </label>
      <input
        id="teddy-service"
        type="range"
        min={0}
        max={9}
        step={1}
        value={Z_STEPS.findIndex((s) => s.p === p)}
        onChange={(e) => setP(Z_STEPS[Number(e.target.value)].p)}
        className="mt-2 w-full accent-[#6d28d9]"
      />
      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        <div className="rounded-xl bg-white p-3 text-center" style={{ border: `1px solid ${STM_G.border}` }}>
          <p className="text-[.6rem] font-black uppercase tracking-[.12em] text-muted-warm">z = NORM.S.INV(p)</p>
          <p className="font-mono text-xl font-black" style={{ color: STM_G[800] }}>{step.z.toFixed(3)}</p>
        </div>
        <div className="rounded-xl bg-white p-3 text-center" style={{ border: `1px solid ${STM_G.border}` }}>
          <p className="text-[.6rem] font-black uppercase tracking-[.12em] text-muted-warm">Q = 20,000 + z·5,102</p>
          <motion.p key={q} initial={{ scale: 1.12, color: "#6d28d9" }} animate={{ scale: 1, color: STM_G[800] }} className="font-mono text-xl font-black">
            {q.toLocaleString()}
          </motion.p>
        </div>
        <div className="rounded-xl bg-white p-3 text-center" style={{ border: `1px solid ${STM_G.border}` }}>
          <p className="text-[.6rem] font-black uppercase tracking-[.12em] text-muted-warm">Stockout risk</p>
          <motion.p key={stockout} initial={{ scale: 1.12, color: "#6d28d9" }} animate={{ scale: 1, color: "#8c2f2f" }} className="font-mono text-xl font-black">
            {stockout.toFixed(1)}%
          </motion.p>
        </div>
      </div>
      <p className="mt-2 text-[.74rem] leading-snug text-muted-warm">
        Every service level prices a different order: 50% gambles on the mean (Q = 20,000), the lecture&apos;s
        70% lands at <b>Q = 22,673 ≈ 22,653</b> (z = 0.52), and 95% hoards at Q ≈ 28,383 — buying near-zero
        stockout risk with near-certain overstock. There is no free z.
      </p>
    </div>
  );
}

function TeddyOrderTable() {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        {TEDDY_ORDERS.map((o, i) => (
          <button
            key={o.q}
            onClick={() => setActive(i)}
            aria-pressed={active === i}
            className={`rounded-full border px-3.5 py-1.5 text-[.76rem] font-bold transition-all duration-200 ${
              active === i ? "border-transparent text-white shadow-md" : "border-[#d9cdf8] bg-white text-[#5b21b6] hover:bg-[#f6f3fe]"
            }`}
            style={active === i ? { background: STM_BTN_GRAD } : undefined}
          >
            Q = {o.q.toLocaleString()}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="grid gap-2 sm:grid-cols-3"
        >
          {[
            { label: "Demand 10,000", tone: "bad" as const },
            { label: "Demand 20,000", tone: "good" as const },
            { label: "Demand 30,000", tone: "good" as const },
          ].map((s, i) => {
            const val = TEDDY_ORDERS[active].profits[i];
            const neg = val.startsWith("−");
            return (
              <div key={s.label} className="rounded-2xl border p-3" style={{ borderColor: neg ? "#e8b4a0" : STM_G.border, background: neg ? "#fdf0ea" : STM_G.wash }}>
                <p className="text-[.64rem] font-black uppercase tracking-[.12em]" style={{ color: neg ? "#b3402c" : STM_G[700] }}>
                  {s.label} {neg ? <TrendingDown className="ml-1 inline h-3 w-3" /> : <TrendingUp className="ml-1 inline h-3 w-3" />}
                </p>
                <p className="font-mono text-lg font-black" style={{ color: neg ? "#8c2f2f" : STM_G[800] }}>{val}</p>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
      <p className="text-[.78rem] leading-relaxed text-muted-warm">
        At Q = {TEDDY_ORDERS[active].q.toLocaleString()}: fill probability P(D ≤ Q) = <b>{TEDDY_ORDERS[active].fill}</b>,
        stockout risk = <b>{TEDDY_ORDERS[active].stockout}</b> — higher orders buy more upside at 30,000 demand
        but bleed harder at 10,000. The 15,000-order row never loses money (it cannot be left with unsold
        stock), while 28,000 swings between −$100,000 and +$200,000.
      </p>
    </div>
  );
}

function TeddyCase() {
  return (
    <Reveal>
      <div className="card-warm overflow-hidden">
        <div className="p-5" style={{ background: "linear-gradient(135deg,#3d2f06,#5c4408)" }}>
          <p className="flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.16em] text-[#fde68a]">
            <PackageSearch className="h-4 w-4" /> Case · Lecture 15 — the normal distribution prices inventory
          </p>
          <p className="mt-2 font-display text-2xl font-black text-[#fffbeb]">
            Weather Teddy — one order, one season, no second chance
          </p>
          <p className="mt-1 text-[.85rem] leading-relaxed text-[#e8d9a8]">
            Specialty Toys buys holiday stock <b>once</b>, in June/July, for October delivery.
            The new star: a talking teddy whose barometer forecasts the weather. Economics: sell
            at <b>$24</b> (cost <b>$16</b> → +$8 in season) or clear at <b>$5</b> (−$11 off
            season). Demand is normal with mean <b>20,000</b>, and the team expects{" "}
            <b>10,000–30,000 with 95% probability</b>. How many should management order?
          </p>
        </div>
        <div className="grid gap-4 p-5 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <StmPanel label="Step 1 — recover σ from the 95% band">{`95% band 10,000 – 30,000, symmetric
around μ = 20,000 → 2.5% per tail.

Z at the 97.5th percentile = 1.96

1.96 = (30,000 − 20,000)/σ
σ = 10,000/1.96 ≈ 5,102 units

Step 2 — stockout risk of any order Q:
Z = (Q − 20,000)/5,102
stockout = 1 − NORM.DIST(Q, 20000, 5102, TRUE)`}</StmPanel>
            <StmPanel label="Step 3 — the 70% service-level order">{`Management accepts a 30% stockout chance:

z = NORM.S.INV(0.70) = 0.52

Q = μ + z·σ = 20,000 + 0.52 × 5,102
  = 22,653 units

Profit check at Q = 22,653:
  demand 10,000 → −$59,083
  demand 20,000 → +$130,000
  demand 30,000 → +$181,000`}</StmPanel>
          </div>
          <div className="flex flex-col gap-3">
            <div className="rounded-2xl border border-[#d9cdf8] bg-white p-4">
              <TeddyOrderTable />
            </div>
            <StmCallout kind="why" title="The managerial moral">
              <p>
                There is <b>no single right answer</b> — only risk appetite. Aggressive buyers
                ride the 28,000-order swing; cautious buyers accept the capped upside of 15,000.
                What the normal distribution adds is <b>prices on every option</b>: a stockout
                probability, a loss bound, an expected upside. Statistics turns a hunch into a
                priced decision.
              </p>
            </StmCallout>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function StmToyOrderSection() {
  return (
    <Section id="toy-order">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 15 — the normal distribution in inventory management"
          title={
            <>
              Weather Teddy, <span className="grad-violet">priced by the curve</span>
            </>
          }
          lead="The normal distribution leaves the textbook here and signs a purchase order. From a 95% demand band, recover σ; from σ, price every order quantity's stockout risk; from a chosen service level, read the order straight off the z-table."
        />

        <StmReadStep n="01" title="The case" sub="One order, one season, four candidate quantities" />
        <TeddyCase />

        <StmReadStep n="02" title="The service-level dial" sub="Pick your stockout tolerance — the curve picks your order" />
        <Reveal>
          <TeddyServiceDial />
        </Reveal>

        <StmReadStep n="03" title="Check yourself" sub="Two computations the exam loves" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmQuiz
              source="Weather Teddy · check"
              q="Specialty Toys recovers σ = 5,102 from the 95% demand band 10,000–30,000. Which computation produced it?"
              options={[
                "σ = (30,000 − 20,000)/1.96 — the 97.5th-percentile z",
                "σ = (30,000 − 10,000)/4",
                "σ = 20,000 × 0.05",
                "σ = (30,000 − 10,000)/1.96",
              ]}
              answer={0}
              explain="The band is symmetric around μ = 20,000 with 2.5% per tail, so the upper edge sits at z = 1.96: 1.96σ = 30,000 − 20,000 → σ ≈ 5,102. From there every order quantity gets its own stockout probability."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Weather Teddy · check"
              q="Management settles on a 70% service level. The order quantity the z-table returns is…"
              options={["Q = 20,000 + 0.52 × 5,102 ≈ 22,653", "Q = 20,000 + 1.645 × 5,102", "Q = 20,000 × 0.70", "Q = 30,000 × 0.70"]}
              answer={0}
              explain="z = NORM.S.INV(0.70) ≈ 0.52, so Q = μ + zσ = 20,000 + 0.52 × 5,102 ≈ 22,653 units. The 1.645 z belongs to a 95% service level — moving it here orders ≈ 28,400 and nearly eliminates stockouts at the cost of guaranteed overstock."
            />
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <Takeaways
            items={[
              <>
                <b>σ from the band</b>: a symmetric 95% band puts 2.5% in each tail — σ = (30,000 − 20,000)/1.96 ≈ <b>5,102</b>.
              </>,
              <>
                <b>Price any order</b>: Z = (Q − 20,000)/5,102 → stockout = 1 − NORM.DIST(Q, 20000, 5102, TRUE).
              </>,
              <>
                <b>The 70% answer</b>: Q = 20,000 + 0.52 × 5,102 ≈ <b>22,653 units</b> — service level is a
                business choice, the z-table only prices it.
              </>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}
