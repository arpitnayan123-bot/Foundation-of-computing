"use client";

/* ============================================================
   Financial Accounting — PART 16 (shelf 03 of The Atlas)
   Lecture 34 in two sections: the four techniques of analysis
   with their formulas (analysis-techniques) and DuPont plus the
   exam brief (dupont-exam) — Nalesh and the banker, the simple-
   calculator rule, and the homework brief.
   ============================================================ */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  Calculator,
  Factory,
  PenLine,
  Percent,
  Scale,
  Target,
  TrendingUp,
} from "lucide-react";
import { Reveal, Section, SectionHead, StepsFlow, Takeaways } from "@/components/notes/ui";
import { FA_BTN_GRAD, FA_G, FaCallout, FaEq, FaQuiz, FaReadStep } from "./FaParts1";
import { eyebrowOf } from "./faLectures";
import { FaDupontDial } from "./diagrams/DupontDial";

/* ============================================================
   CHAPTER — TECHNIQUES OF ANALYSIS (Lecture 34 · part 1)
   ============================================================ */

function ReddyHorizontal() {
  const rows = [
    { k: "Revenue", v: "+4.49%", tone: FA_G[700] },
    { k: "Total expenses", v: "+3.49%", tone: FA_G[700] },
    { k: "Profit before tax", v: "−7.74%", tone: "#b3402c" },
  ];
  return (
    <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
      <div className="flex flex-wrap items-center gap-2 border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3">
        <TrendingUp className="h-4 w-4" style={{ color: FA_G[700] }} />
        <span className="font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
          Horizontal analysis — Dr. Reddy&apos;s 2015 → 2016
        </span>
        <span className="text-[.7rem] font-semibold text-muted-warm">(CY − PY) ÷ PY × 100</span>
      </div>
      <div className="grid grid-cols-3 gap-2 px-4 py-4">
        {rows.map((r) => (
          <div key={r.k} className="rounded-xl border border-[#e4f1ea] bg-white p-3 text-center">
            <p className="font-mono text-[1.1rem] font-black" style={{ color: r.tone }}>{r.v}</p>
            <p className="mt-1 text-[.66rem] font-bold leading-tight text-muted-warm">{r.k}</p>
          </div>
        ))}
      </div>
      <div className="border-t border-[#e4f1ea] px-4 py-3 text-[.82rem] leading-relaxed text-[#2b2014]">
        Revenue grew faster than expenses — operations <b>expanded</b> — yet profit before tax fell 7.74%, swallowed by
        a <b>$461 million exceptional forex loss</b> in the Venezuela operations. Horizontal analysis plus one question
        — <i>what is the source of this number?</i> — separates the operating story from the extraordinary one.
      </div>
    </div>
  );
}

export function FaAnalysisTechniquesSection() {
  return (
    <Section id="analysis-techniques">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow={eyebrowOf("analysis-techniques")}
          title={
            <>
              A single number is <span style={{ color: FA_G[700] }}>neither good nor bad</span>.
            </>
          }
          lead="₹100 crores of profit means nothing on its own — it becomes information only against a base: the rule of thumb, the company's own past, management's internal targets, or the industry's peers. Then four techniques turn comparison into computation."
        />

        <FaReadStep n="01" title="Four standards of comparison — and how each fails" sub="Lecture 28 introduced them; Lecture 34 shows the failure modes" />
        <div className="grid gap-3 md:grid-cols-2">
          {[
            {
              t: "Rule of thumb",
              d: "The 2:1 current ratio is 'healthy'. Simple and useful across firms — but blind to quality: it ignores inventory turnover and receivables aging, so a 2.2:1 firm with dead stock can look better than a 1.6:1 firm that turns stock fast.",
              icon: Target,
            },
            {
              t: "Past performance",
              d: "Trend projection against history. Kodak: peak sales $16bn (1996), $2.5bn profit (1999) — and bankruptcy in 2012. Regulation, technology and policy changes (depreciation, inventory valuation) break comparability, and one-time gains distort. Growing while the industry grows faster is the illusion of growth.",
              icon: TrendingUp,
            },
            {
              t: "Internal standards",
              d: "Management's own benchmarks: target ROA/ROI, sales growth, market share, budgets for profit centres, predetermined product costs. The operational-control lens — designed for monitoring, not for outsiders.",
              icon: Briefcase,
            },
            {
              t: "Industry standards",
              d: "A 7% gross margin looks weak — until the industry's 12% turns out to include firms with different mixes: HUL spans soaps, detergents, toothpaste and food, so P&G, ITC and Colgate overlap only partially. And policies differ — FIFO vs weighted average, different asset-life estimates — even within one industry.",
              icon: Factory,
            },
          ].map((s, i) => {
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

        <FaReadStep n="02" title="Technique 1 — horizontal" sub="(CY − PY) ÷ PY × 100 — with Dr. Reddy's, worked" />
        <ReddyHorizontal />

        <FaReadStep n="03" title="Technique 2 — trend" sub="Base year = 100; index everything after it" />
        <Reveal>
          <FaEq label="Trend analysis — the lecture's own numbers">{`Base year: sales 100 → indexed 100
Year 4:    sales 1,400 → 1,400 ÷ 1,000 × 100 = 140   (+40%)
Year 4:    profit 150  → 150 ÷ 100 × 100    = 150   (+50%)

Profit is growing FASTER than sales — margin is
expanding. A single-year view never shows that;
multi-year trends reveal whether management is
controlling costs and improving efficiency.`}</FaEq>
        </Reveal>

        <FaReadStep n="04" title="Technique 3 — vertical (common-size)" sub="Every line as a % of revenue — or of total assets" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm h-full p-5">
              <p className="font-extrabold text-[#3e2c1d]">The mechanics</p>
              <p className="mt-2 text-[.84rem] leading-relaxed text-[#2b2014]">
                Income statement: every line ÷ <b>total revenue</b>. Balance sheet: every line ÷ <b>total assets</b>.
                Formula: (line item ÷ base figure) × 100.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card-warm h-full p-5">
              <p className="font-extrabold text-[#3e2c1d]">What 13.47% means</p>
              <p className="mt-2 text-[.84rem] leading-relaxed text-[#2b2014]">
                If profit is 13.47% of revenue, then <b>₹13.47 of every ₹100 of sales</b> becomes profit — and a
                two-person firm can stand next to a billion-rupee corporation on the same page. That is why it is
                called <b>common-size</b>.
              </p>
            </div>
          </Reveal>
        </div>

        <FaReadStep n="05" title="Technique 4 — ratio" sub="The relationship itself — and the base decides the verdict" />
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
            <div className="flex flex-wrap items-center gap-2 border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3">
              <Percent className="h-4 w-4" style={{ color: FA_G[700] }} />
              <span className="font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
                Identical ₹10 lakh profits — two companies
              </span>
            </div>
            <div className="grid gap-px bg-[#e4f1ea] sm:grid-cols-2">
              <div className="bg-white p-4 text-center">
                <p className="text-[.66rem] font-black uppercase tracking-[.16em] text-[#8a6b45]">Company A · ₹50 lakh sales</p>
                <p className="mt-1 font-mono text-[1.15rem] font-black" style={{ color: FA_G[700] }}>20% margin</p>
                <p className="mt-1 text-[.72rem] text-muted-warm">₹20 kept per ₹100 of sales</p>
              </div>
              <div className="bg-white p-4 text-center">
                <p className="text-[.66rem] font-black uppercase tracking-[.16em] text-[#8a6b45]">Company B · ₹200 lakh sales</p>
                <p className="mt-1 font-mono text-[1.15rem] font-black" style={{ color: "#b3402c" }}>5% margin</p>
                <p className="mt-1 text-[.72rem] text-muted-warm">₹5 kept per ₹100 of sales</p>
              </div>
            </div>
            <div className="border-t border-[#e4f1ea] bg-white px-4 py-3 text-[.82rem] leading-relaxed text-[#2b2014]">
              Same ₹10 lakh — Company A is <b>significantly more profitable per rupee of sales</b>. The ratio, not the
              absolute number, carries the judgment.
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FaQuiz
            source="Lecture 34 · check yourself"
            q="Trend analysis: sales rise from a 1,000 base to 1,400 while profit rises from a 100 base to 150. What does this reveal?"
            options={[
              "Sales are growing faster than profit — worry",
              "Profit is growing faster than sales — margin expansion",
              "Nothing — the bases differ so the indices cannot compare",
              "Both grew exactly 40%",
            ]}
            answer={1}
            explain="Sales index 140 (+40%), profit index 150 (+50%). Profit outpacing sales means costs are being controlled and margins are widening — the trend, not any single year, carries the insight."
          />
          <FaQuiz
            source="Lecture 34 · check yourself"
            q="Dr. Reddy's: revenue +4.49%, expenses +3.49%, PBT −7.74%. The single reconciling item is…"
            options={[
              "A change in the depreciation method",
              "A $461 million exceptional forex loss in the Venezuela operations",
              "A collapse in unit sales",
              "A tax-rate hike",
            ]}
            answer={1}
            explain="Operations were strong — revenue outgrew expenses. The PBT fall is the exceptional, non-recurring $461m forex loss. Horizontal analysis exists to expose exactly this kind of divergence."
          />
        </div>

        <div className="mt-10">
          <Takeaways
            items={[
              <>A single number is <b>neither good nor bad</b> — meaning arrives only through comparison.</>,
              <>Four standards: <b>rule of thumb, past performance (Kodak&apos;s trap), internal, industry</b> — each with a known failure mode.</>,
              <>Horizontal: <b>(CY − PY) ÷ PY × 100</b> — Reddy&apos;s +4.49% revenue vs −7.74% PBT on a $461m forex loss.</>,
              <>Trend: <b>base year = 100</b> — sales 140 vs profit 150 index = margin expansion.</>,
              <>Vertical/common-size: every line as <b>% of revenue or total assets</b> — 13.47% = ₹13.47 per ₹100.</>,
              <>Ratio: the <b>same ₹10 lakh</b> is 20% of ₹50 lakh sales but 5% of ₹200 lakh.</>,
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER — DUPONT & THE EXAM (Lecture 34 · part 2)
   ============================================================ */

function ExamCard() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl p-6"
      style={{ background: "linear-gradient(165deg,#06281e,#0a3527 60%,#0d3a2c)", boxShadow: "0 24px 60px -26px rgba(6,40,30,.6)" }}
    >
      <div className="relative">
        <p className="flex items-center gap-2 text-[.6rem] font-extrabold uppercase tracking-[.24em] text-[#8fd4b4]">
          <Calculator className="h-3.5 w-3.5" style={{ color: "#34d399" }} />
          Examination guidance — from the final lecture
        </p>
        <div className="mt-3 grid gap-2.5 md:grid-cols-2">
          {[
            { t: "Format", d: "A mix of numerical and theoretical questions — with numericals EMPHASISED. Practice the worked examples until the arithmetic is automatic." },
            { t: "Pattern source", d: "Questions follow the patterns and concepts covered in the lectures and videos — nothing lands from outside the course." },
            { t: "Calculator", d: "Simple calculator ONLY. No scientific calculators, no financial calculators. Bring the basic one." },
            { t: "Style", d: "Write concise, focused answers — lengthy responses signal lack of clarity. Say the thing, stop talking." },
          ].map((r) => (
            <div key={r.t} className="rounded-xl border border-white/10 bg-white/[.06] p-4">
              <p className="text-[.64rem] font-black uppercase tracking-[.16em] text-[#8fd4b4]">{r.t}</p>
              <p className="mt-1 text-[.84rem] leading-relaxed text-[#dff3e8]">{r.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-[#e3c98f]/40 bg-[#fbf4e4]/10 p-4">
          <p className="flex items-center gap-2 text-[.64rem] font-black uppercase tracking-[.16em] text-[#e3c98f]">
            <PenLine className="h-3.5 w-3.5" />
            The homework brief
          </p>
          <p className="mt-1 text-[.84rem] leading-relaxed text-[#dff3e8]">
            Pick a company that interests you, obtain its recent financial statements, and apply all four techniques —
            horizontal, vertical, trend and ratio. Then compare your understanding before and after the course. Real
            statements are where fluency is built.
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaDupontExamSection() {
  return (
    <Section id="dupont-exam">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow={eyebrowOf("dupont-exam")}
          title={
            <>
              Decompose the return — then <span style={{ color: FA_G[700] }}>sit the exam</span>.
            </>
          }
          lead="DuPont breaks ROA into its two drivers — margin and turnover — so 'profitability fell' becomes 'margin fell AND assets slowed'. Then the final lecture hands over the exam brief: numericals emphasised, simple calculator only, concise answers."
        />

        <FaReadStep n="01" title="The DuPont decomposition" sub="Two presets land on 20%; two land on Dr. Reddy's decline" />
        <FaDupontDial />

        <FaReadStep n="02" title="Dr. Reddy's decomposition, 2015 → 2016" sub="Both drivers deteriorated — that is the finding" />
        <Reveal>
          <FaEq label="The DuPont walk, verbatim figures">{`2015:  15.00% margin × 0.87 turnover = 13.05% ROA
2016:  13.71% margin × 0.81 turnover = 11.11% ROA

Margin fell  — the foreign-exchange losses
Turnover fell — assets grew faster than revenue

Performance deteriorated on BOTH fronts:
operational and asset-utilization. A single
ROA number would have hidden which lever
moved; the decomposition names both.`}</FaEq>
        </Reveal>

        <FaReadStep n="03" title="Nalesh and the banker" sub="A ₹25-lakh FMCG loan, answered in statements" />
        <Reveal>
          <StepsFlow
            steps={[
              { label: "Nalesh asks", sub: "₹25 lakh for his FMCG distribution" },
              { label: "The bank responds", sub: "common-size · comparative · trend" },
              { label: "Plus three lenses", sub: "liquidity · profitability · solvency" },
              { label: "The decision", sub: "will profit continue? can debt be serviced?" },
            ]}
          />
        </Reveal>
        <Reveal className="mt-3">
          <FaCallout kind="story" title="What the banker actually reads">
            Statements alone are raw data; analysis turns them into evidence. The banker reads <b>trends</b> — common-size,
            comparative and trend statements — to judge whether the profit pattern will <b>continue</b> and whether the
            borrower can <b>service the debt</b>. Nalesh&apos;s loan is decided by the techniques, not by the profit figure
            alone.
          </FaCallout>
        </Reveal>

        <FaReadStep n="04" title="The exam brief" sub="Read this twice before you prepare" />
        <Reveal>
          <ExamCard />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FaQuiz
            source="Lecture 34 · check yourself"
            q="DuPont 2016: margin 13.71% × turnover 0.81 = ?"
            options={[
              "13.05% — that was 2015",
              "11.11% — and both drivers fell from 2015",
              "13.49% — the reported ROA",
              "0.87 — the 2015 turnover",
            ]}
            answer={1}
            explain="13.71% × 0.81 = 11.11%. The margin fell (forex losses) and turnover fell (assets grew faster than revenue) — deterioration on both fronts, which is exactly what DuPont is built to expose."
          />
          <FaQuiz
            source="Lecture 34 · check yourself"
            q="Which calculator may you bring into the Financial Accounting final?"
            options={[
              "Any calculator you own",
              "A financial calculator — it handles annuities",
              "A scientific calculator — it handles logs",
              "A SIMPLE calculator only — scientific and financial calculators are barred",
            ]}
            answer={3}
            explain="The exam brief is explicit: simple calculator only — no scientific or financial calculators — and concise answers, because lengthy responses indicate lack of clarity."
          />
        </div>

        <div className="mt-10">
          <Takeaways
            items={[
              <>DuPont: <b>ROA = Margin × Turnover</b> — luxury 10% × 2× and supermarket 4% × 5× both land at 20%.</>,
              <>Dr. Reddy&apos;s: 15% × 0.87 = <b>13.05%</b> → 13.71% × 0.81 = <b>11.11%</b> — both drivers fell.</>,
              <>Nalesh&apos;s ₹25-lakh loan is decided on <b>common-size, comparative and trend statements</b> — bankers read trends.</>,
              <>Exam: <b>numericals emphasised</b>; questions follow lecture patterns; <b>simple calculator only</b>; write concise answers.</>,
              <>Homework: one company, real statements, <b>all four techniques</b> — before-and-after understanding.</>,
            ]}
          />
        </div>
      </div>
    </Section>
  );
}
