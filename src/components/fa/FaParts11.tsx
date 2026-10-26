"use client";

/* ============================================================
   Financial Accounting — PART 11 (shelf 03 of The Atlas)
   Financial statement analysis: four standards, four
   techniques, Kodak and Dr. Reddy's (L28). And the closing
   argument: Mira's shop, the student analogy, profit is an
   opinion — cash is a fact (L29).
   ============================================================ */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Banknote,
  BookOpenText,
  Briefcase,
  Camera,
  Check,
  Cpu,
  Factory,
  GraduationCap,
  Landmark,
  Laptop,
  LineChart,
  Store,
  Target,
  TrendingDown,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { FA_BTN_GRAD, FA_G, FaCallout, FaEq, FaQuiz, FaReadStep } from "./FaParts1";

/* ============================================================
   CHAPTER — FINANCIAL STATEMENT ANALYSIS (Lecture 28)
   ============================================================ */

const STANDARDS = [
  {
    t: "Rule of thumb",
    d: "Broad benchmarks applied across firms — the current ratio of 2:1. Quick and easy, but blind to quality: a 2.2:1 firm may hold slow-moving inventory while a 1.6:1 firm turns stock fast and manages liquidity better.",
    icon: Target,
  },
  {
    t: "Past performance",
    d: "Compare this year with previous years; extrapolate the trend. But regulation, competition and technology can break the trend; policy changes (depreciation, inventory valuation) break comparability; non-operating items distort — and growing 10% while the industry grows 30% is an illusion of growth.",
    icon: TrendingUp,
  },
  {
    t: "Internal standards",
    d: "The company's own benchmarks: profit targets, ROI/ROA expectations, budgets, predetermined costs, material-consumption and labor-efficiency controls. The management-control lens.",
    icon: Briefcase,
  },
  {
    t: "Industry standards",
    d: "Compare with peers. But firms span multiple businesses — HUL runs soaps, detergents, toothpaste and food, so P&G, ITC and Colgate only partly overlap — and accounting policies differ across companies. No perfect peer exists.",
    icon: Factory,
  },
];

const TECHNIQUES = [
  { t: "Horizontal", f: "(Current − Previous) / Previous × 100", d: "Two years side by side — absolute change and percentage change." },
  { t: "Trend", f: "Base year = 100 → index each year", d: "Horizontal extended over 5, 10, 15 years — the long trajectory." },
  { t: "Vertical", f: "Each line item as % of a base", d: "Gross profit as % of sales — composition and proportions." },
  { t: "Ratio", f: "The relationships themselves", d: "The most popular technique — detailed in later sessions." },
];

const REDDY = [
  { k: "Revenue from operations", v: "+4.49%", tone: FA_G[700] },
  { k: "Total revenue", v: "+4.38%", tone: FA_G[700] },
  { k: "Total expenses", v: "+3.49%", tone: FA_G[700] },
  { k: "Tax expense", v: "−7.01%", tone: FA_G[700] },
  { k: "Net profit", v: "−7.92%", tone: "#b3402c" },
];

function ReddyToggle() {
  const [view, setView] = useState<"headline" | "operating">("headline");
  return (
    <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
      <div className="flex flex-wrap items-center gap-2 border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3">
        <Cpu className="h-4 w-4" style={{ color: FA_G[700] }} />
        <span className="font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
          Dr. Reddy&apos;s Laboratories · FY 2015-16
        </span>
        <span className="text-[.7rem] font-semibold text-muted-warm">flip the lens</span>
      </div>
      <div className="grid grid-cols-2 border-b border-[#e4f1ea]">
        {(["headline", "operating"] as const).map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setView(v)}
            aria-pressed={view === v}
            className={`px-4 py-3 text-[.8rem] font-extrabold uppercase tracking-[.12em] transition-colors ${
              view === v ? "bg-[#ecfdf5] text-[#065f46]" : "text-[#9db8a9] hover:text-[#5c7a6b]"
            }`}
          >
            {v === "headline" ? "Headline view" : "Operating view"}
          </button>
        ))}
      </div>
      <div className="px-4 py-5 sm:px-6">
        {view === "headline" ? (
          <>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
              {REDDY.map((r) => (
                <motion.div key={r.k} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl border border-[#e4f1ea] bg-white p-3 text-center">
                  <p className="font-mono text-[1.05rem] font-black" style={{ color: r.tone }}>{r.v}</p>
                  <p className="mt-1 text-[.66rem] font-bold leading-tight text-muted-warm">{r.k}</p>
                </motion.div>
              ))}
            </div>
            <p className="mt-3 rounded-xl border border-[#e8a896] bg-[#fbeae5] px-3 py-2 text-[.82rem] leading-relaxed text-[#7c2d12]">
              Net profit <b>fell 7.92%</b> despite revenue growing faster than expenses. The headline says: core business weakening.
            </p>
          </>
        ) : (
          <>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="rounded-xl border p-3" style={{ borderColor: FA_G.border, background: "#f2faf6" }}>
                <p className="text-[.7rem] font-black uppercase tracking-[.14em]" style={{ color: FA_G[700] }}>The exceptional item</p>
                <p className="mt-1 font-mono text-[1.02rem] font-black" style={{ color: FA_G[800] }}>−₹4,621 thousand</p>
                <p className="mt-1 text-[.74rem] leading-snug text-[#1d4433]">A foreign-exchange loss — absent in 2015 — tied to Venezuela operations. One-time, non-recurring.</p>
              </div>
              <div className="rounded-xl border border-[#e3c98f] bg-[#fbf4e4] p-3">
                <p className="text-[.7rem] font-black uppercase tracking-[.14em] text-[#8a5a10]">Operating profit</p>
                <p className="mt-1 font-mono text-[1.02rem] font-black text-[#7c2d12]">+9.23%</p>
                <p className="mt-1 text-[.74rem] leading-snug text-[#5c4a22]">Core operations grew 9.23% on 4.49% revenue growth. The fundamentals never weakened.</p>
              </div>
            </div>
            <p className="mt-3 rounded-xl px-3 py-2 text-[.82rem] leading-relaxed" style={{ background: FA_G.wash, color: FA_G[800] }}>
              The reported 7.92% decline is entirely the extraordinary FX loss. Revenue grew faster than expenses; other
              income was insignificant; <b>the business is sound</b>. Quality of earnings analysis separates the two.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export function FaFsAnalysisSection() {
  return (
    <Section id="fs-analysis">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 28 · From preparing to interrogating"
          title={
            <>
              Raw data in — <span style={{ color: FA_G[700] }}>insight out</span>.
            </>
          }
          lead="Financial statement analysis converts statements into decisions: how did the business perform, where is it strong and weak, what are the prospects? It needs standards to compare against and techniques to compare with."
        />

        <FaReadStep n="01" title="Four standards of comparison" sub="Against what, exactly, are we judging?" />
        <div className="grid gap-3 md:grid-cols-2">
          {STANDARDS.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.t} delay={i * 0.05}>
                <div className="card-warm h-full p-5">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4.5 w-4.5 h-[18px] w-[18px]" style={{ color: FA_G[700] }} />
                    <p className="text-[.95rem] font-extrabold text-[#3e2c1d]">{s.t}</p>
                  </div>
                  <p className="mt-2 text-[.82rem] leading-relaxed text-muted-warm">{s.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-4">
          <FaCallout kind="story" title="Kodak — the past-performance trap">
            Peak sales of <b>$16 billion in 1996</b>, profits of <b>$2.5 billion in 1999</b> — and bankruptcy in{" "}
            <b>2012</b>. Dominating the camera market meant nothing once digital disruption redrew it. Relying solely on
            past performance masked the existential threat; the trend was accurate right up to the moment it stopped
            being the world it described.
          </FaCallout>
        </Reveal>

        <FaReadStep n="02" title="Four techniques" sub="The analytical toolkit" />
        <div className="grid gap-3 md:grid-cols-4">
          {TECHNIQUES.map((t, i) => (
            <Reveal key={t.t} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-[#e0ece6] bg-[#fffdf9] p-4">
                <span className="font-mono text-[.6rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
                  0{i + 1}
                </span>
                <p className="mt-1 text-[.92rem] font-extrabold text-[#3e2c1d]">{t.t}</p>
                <p className="mt-1.5 rounded-lg px-2 py-1.5 font-mono text-[.68rem] leading-snug" style={{ background: FA_G.wash, color: FA_G[800] }}>
                  {t.f}
                </p>
                <p className="mt-1.5 text-[.74rem] leading-snug text-muted-warm">{t.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <FaReadStep n="03" title="Case study — Dr. Reddy's 2015-16" sub="A profit decline that wasn't a decline" />
        <ReddyToggle />

        <Reveal className="mt-4">
          <FaCallout kind="warn" title="The distortion checklist">
            Non-recurring and exceptional items create misleading impressions; accounting policy changes (depreciation,
            inventory valuation) break year-to-year comparability; different fiscal year-ends block direct comparison;
            and different policies across an industry complicate peer analysis. Always ask: <b>what is the source of
            this number?</b>
          </FaCallout>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FaQuiz
            source="Lecture 28 · check yourself"
            q="A company's profit grew 10% last year. Its industry grew 30%. What is this called?"
            options={[
              "Quality of earnings",
              "The illusion of growth",
              "Horizontal analysis",
              "A favorable variance",
            ]}
            answer={1}
            explain="Growing 10% while the industry grows 30% masks relative underperformance — the illusion of growth. Past-performance comparison without an industry (or contextual) benchmark flatters the number."
          />
          <FaQuiz
            source="Lecture 28 · check yourself"
            q="Dr. Reddy's reported a 7.92% profit decline in 2015-16. What did the operating view reveal?"
            options={[
              "The core business had weakened badly",
              "A one-time ₹4,621 thousand FX loss (Venezuela) explained it all — operating profit actually grew 9.23%",
              "Expenses had grown faster than revenue",
              "Tax had risen sharply",
            ]}
            answer={1}
            explain="Revenue +4.49%, expenses only +3.49% — core operations grew 9.23%. The entire decline came from an exceptional, non-recurring foreign-exchange loss absent in 2015. Quality of earnings analysis separates the signal from the noise."
          />
        </div>

        <div className="mt-10">
          <Takeaways
            items={[
              <>Four standards: <b>rule of thumb</b>, <b>past performance</b> (Kodak's trap), <b>internal</b>, <b>industry</b> (no perfect peer).</>,
              <>Four techniques: <b>horizontal</b>, <b>trend</b>, <b>vertical</b>, <b>ratio</b>.</>,
              <>Watch for <b>exceptional items</b>, policy changes, fiscal-year mismatches.</>,
              <>Dr. Reddy&apos;s: headline −7.92% vs operating <b>+9.23%</b> — one FX loss, two completely different stories.</>,
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER — PROFIT IS AN OPINION (Lecture 29)
   ============================================================ */

function MiraTimeline() {
  const [t, setT] = useState(0);
  const moments = [
    { m: "March", e: "The sale happens", d: "Mira's stationery shop sells ₹1,00,000 of stock to a coaching centre on credit. The P&L immediately shows ₹1,00,000 of sales. The cash box shows nothing." },
    { m: "April", e: "The squeeze", d: "Rent and salaries are due. Profit looks fine on paper — but there is no cash in the box to pay them. This is the gap the cash flow statement exists to expose." },
    { m: "May", e: "The cash arrives", d: "The coaching centre finally pays. Operating cash flow catches up with the profit the P&L booked two months earlier. Timing — that is all it was." },
  ];
  return (
    <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
      <div className="grid grid-cols-3 border-b border-[#e4f1ea]">
        {moments.map((mo, i) => (
          <button
            key={mo.m}
            type="button"
            onClick={() => setT(i)}
            aria-pressed={t === i}
            className={`px-3 py-3 text-[.85rem] font-extrabold transition-colors ${
              t === i ? "bg-[#ecfdf5] text-[#065f46]" : "text-[#9db8a9] hover:text-[#5c7a6b]"
            }`}
          >
            {mo.m}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={t}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="p-5"
        >
          <p className="font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
            {moments[t].m} — {moments[t].e}
          </p>
          <p className="mt-2 text-[.92rem] leading-relaxed text-[#2b2014]">{moments[t].d}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function FaCashflowWrapSection() {
  return (
    <Section id="cashflow-wrap">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 29 · The closing argument"
          title={
            <>
              Profit is an <span style={{ color: FA_G[700] }}>opinion</span>. Cash is a{" "}
              <span style={{ color: "#b45309" }}>fact</span>.
            </>
          }
          lead="A company can be profitable on paper and still run out of cash — because accrual accounting records what is earned, not what arrived. One stationery shop explains the entire lecture series."
        />

        <FaReadStep n="01" title="Mira's stationery shop" sub="One credit sale, three months, the whole lesson" />
        <MiraTimeline />

        <FaReadStep n="02" title="The three statements, one line each" sub="What each one is for" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { icon: Camera, t: "Balance sheet", d: "A snapshot: what the company owns and owes at a specific point in time." },
            { icon: LineChart, t: "Profit & loss", d: "Performance over a period — revenue and expense, without tracking cash movement." },
            { icon: Wallet, t: "Cash flow", d: "The fundamental question: where did cash come from, and where did it go?" },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.t} delay={i * 0.06}>
                <div className="card-warm h-full p-5">
                  <Icon className="h-5 w-5" style={{ color: FA_G[700] }} />
                  <p className="mt-2 text-[.95rem] font-extrabold text-[#3e2c1d]">{s.t}</p>
                  <p className="mt-1 text-[.82rem] leading-relaxed text-muted-warm">{s.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <FaReadStep n="03" title="Why profit ≠ operating cash — three sources" sub="The lecture's own numbers" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { t: "Non-cash expenses", n: "₹24,000/yr", d: "A ₹1,00,000 photocopier depreciated at ₹24,000 a year cuts profit — but the cash left two years ago. Add it back." },
            { t: "Working capital", n: "₹1,00,000 / ₹30,000", d: "Mira's credit sale raises profit but not cash; her ₹30,000 credit purchase of paper cuts profit but keeps cash." },
            { t: "Non-operating items", n: "₹5,000 gain", d: "An old computer, book value ₹10,000, sold at ₹15,000: the ₹5,000 gain sits in profit, but the full ₹15,000 proceeds belong to investing." },
          ].map((r, i) => (
            <Reveal key={r.t} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-[#e0ece6] bg-[#fffdf9] p-4">
                <p className="text-[.9rem] font-extrabold text-[#3e2c1d]">{r.t}</p>
                <p className="mt-1 font-mono text-[1rem] font-black" style={{ color: FA_G[700] }}>{r.n}</p>
                <p className="mt-1.5 text-[.78rem] leading-relaxed text-muted-warm">{r.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <FaReadStep n="04" title="The student analogy" sub="You already run three cash flows" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { icon: GraduationCap, t: "Operating", d: "Monthly pocket money in; mess charges and daily living out." },
            { icon: Laptop, t: "Investing", d: "Buying a laptop — an asset with lasting value; parking savings in a fixed deposit." },
            { icon: Banknote, t: "Financing", d: "Taking an education loan, and repaying it (with interest) for years." },
          ].map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.t} delay={i * 0.06}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-[#e3c98f] bg-[#fbf4e4] p-4">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#8a5a10" }} />
                  <div>
                    <p className="text-[.9rem] font-extrabold text-[#5c4a22]">{r.t}</p>
                    <p className="mt-0.5 text-[.78rem] leading-relaxed text-[#5c4a22]">{r.d}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-6">
          <FaCallout kind="insight" title="The four-company reality check">
            Real statements from four different industries show net income and operating cash flow are <b>never
            equal</b>: for Lenovo and BP, operating cash ran below profit; for the others, above. The metrics are
            measured on different bases — accrual vs cash — and that is precisely why lenders scrutinize the cash
            flow statement first: <b>cash is fact, whatever the accounting policies say</b>.
          </FaCallout>
        </Reveal>

        <Reveal className="mt-4">
          <FaEq label="The course, in one balance">{`Concepts & conventions → the equation → journal & ledger
→ trial balance → adjustments → final accounts
→ the balance sheet → the cash flow statement
→ analysis that asks: can I trust this number?

Answer the last question with cash first.`}</FaEq>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FaQuiz
            source="Lecture 29 · check yourself"
            q="Mira sells ₹1,00,000 of stock on credit in March; the coaching centre pays in May. In March, Mira's books show…"
            options={[
              "₹1,00,000 profit and ₹1,00,000 cash",
              "₹1,00,000 profit and no cash — a receivable instead",
              "No profit until cash arrives",
              "A ₹1,00,000 liability",
            ]}
            answer={1}
            explain="Accrual basis: the sale is earned in March — profit and a trade receivable appear; the cash box stays empty while rent and salaries fall due. The cash flow statement is what exposes (and later explains) the gap."
          />
          <FaQuiz
            source="Lecture 29 · check yourself"
            q="Why do banks and lenders read the cash flow statement before anything else?"
            options={[
              "It is the shortest statement",
              "Because profit depends on accounting choices, but cash is objective — unaffected by policies",
              "Because it shows the highest profit",
              "Because tax law requires it",
            ]}
            answer={1}
            explain="Profit is an opinion — it moves with depreciation methods, valuation choices and accrual judgments. Cash is a fact. A lender's question ('can you actually pay me?') can only be answered in cash."
          />
        </div>

        <div className="mt-10">
          <Takeaways
            items={[
              <>Accrual profit and cash move on <b>different clocks</b> — Mira sells in March, gets paid in May.</>,
              <>NI ≠ operating cash for three reasons: <b>non-cash expenses, working capital, non-operating items</b>.</>,
              <>Cash equivalents: liquid, readily convertible, <b>minimal risk</b> — judged from acquisition date.</>,
              <>The student analogy: pocket money = operating, laptop = investing, education loan = <b>financing</b>.</>,
              <><b>Profit is an opinion; cash is a fact</b> — the sentence the whole course was building toward.</>,
            ]}
          />
        </div>
      </div>
    </Section>
  );
}
