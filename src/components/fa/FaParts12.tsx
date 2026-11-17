"use client";

/* ============================================================
   Financial Accounting — PART 12 (shelf 03 of The Atlas)
   Lecture 30: Understanding Financial Statement Analysis
   Through Ratio Analysis — the six profitability ratios,
   Dr. Reddy's 2015→2016, the two-business-model ROA identity,
   the Lipstick Index, and the gross-margin trap.
   ============================================================ */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  Building2,
  ChevronsDownUp,
  Coins,
  Factory,
  HeartPulse,
  Percent,
  Sparkles,
  Store,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { FA_BTN_GRAD, FA_G, FaCallout, FaEq, FaQuiz, FaReadStep } from "./FaParts1";
import { eyebrowOf } from "./faLectures";

/* ============================================================
   RatioCard — formula + interpretation + Dr. Reddy's walk
   ============================================================ */
const PROFITABILITY = [
  {
    t: "1 · Profit margin (return on sales)",
    f: "Net Profit ÷ Revenue × 100",
    d: "Profit earned per ₹100 of sales. A stationery shop with ₹5,00,000 of sales and ₹40,000 of profit runs an 8% margin (40,000 ÷ 500,000 × 100).",
    r: "15.55% → 13.71%",
    rn: "Employee salary costs rose and an extraordinary forex loss landed — every ₹100 of sales kept less profit.",
    icon: Percent,
  },
  {
    t: "2 · Gross profit margin",
    f: "Gross Profit ÷ Revenue × 100 · (GP = Sales − COGS)",
    d: "Only direct costs sit above this line — not salaries, rent or interest. It isolates the making-and-selling engine.",
    r: "Rose ↑",
    rn: "Gross margin INCREASED 2015→2016 while net margin fell — the diagnostic tension: the product engine improved while indirect costs grew.",
    icon: Boxes,
  },
  {
    t: "3 · Asset turnover",
    f: "Revenue ÷ Average Total Assets",
    d: "Sales generated per rupee of assets. Fast-food outlets turn 10–20×; mining and refinery projects sit below 1×. Assets of ₹5 lakh generating ₹10 lakh of sales turn 2×.",
    r: "0.87 → 0.81",
    rn: "Assets grew 11.5% while revenue grew only 4.5% — capacity built ahead of demand.",
    icon: ArrowRight,
  },
  {
    t: "4 · Return on assets (ROA / ROI)",
    f: "Net Profit ÷ Average Total Assets × 100  =  Margin × Turnover",
    d: "Profit per rupee of assets invested. Net profit 1,000 on average assets 5,000 yields 20%. High-margin luxury and high-turnover mass production can land at the same ROA.",
    r: "13.49% → 11.14%",
    rn: "Both drivers declined together — margin AND turnover — so ROA fell faster than either.",
    icon: Building2,
  },
  {
    t: "5 · Return on equity (ROE)",
    f: "Net Profit ÷ Average Equity × 100  =  ROA × Leverage",
    d: "Profit per rupee of shareholder capital — and it must beat the cost of equity, or shareholders invest elsewhere. Debt magnifies returns ONLY when ROA exceeds the interest rate.",
    r: "26.37% → 19.96%",
    rn: "The ROA fall cascaded through leverage into shareholder returns.",
    icon: Users,
  },
  {
    t: "6 · Earnings per share (EPS)",
    f: "(Net Profit − Preference Dividends) ÷ Number of Equity Shares",
    d: "Net profit ₹50,00,000 − preference dividend ₹5,00,000, spread over 9,00,000 shares = ₹5 EPS. Never compare EPS across companies — the share count differs; track one company over time.",
    r: "₹137.18 → ₹126.15",
    rn: "Profitability per share shrank with the profit itself.",
    icon: Coins,
  },
];

function RatioExplorer() {
  const [open, setOpen] = useState(0);
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {PROFITABILITY.map((r, i) => {
        const Icon = r.icon;
        const on = open === i;
        return (
          <Reveal key={r.t} delay={i * 0.04}>
            <button
              type="button"
              onClick={() => setOpen(on ? -1 : i)}
              aria-expanded={on}
              className={`h-full w-full rounded-2xl border p-5 text-left transition-all duration-300 ${
                on
                  ? "border-[#059669] bg-[#ecfdf5] shadow-[0_16px_36px_-18px_rgba(5,150,105,.55)]"
                  : "border-[#e0ece6] bg-[#fffdf9] hover:border-[#a9dcc4]"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2">
                  <Icon className="h-[18px] w-[18px]" style={{ color: FA_G[700] }} />
                  <span className="text-[.95rem] font-extrabold text-[#3e2c1d]">{r.t}</span>
                </span>
                <ChevronsDownUp className={`h-4 w-4 shrink-0 text-[#9db8a9] transition-transform duration-300 ${on ? "rotate-180" : ""}`} />
              </div>
              <p className="mt-2 rounded-lg px-2 py-1.5 font-mono text-[.7rem] leading-snug" style={{ background: FA_G.wash, color: FA_G[800] }}>
                {r.f}
              </p>
              <p className="mt-2 text-[.82rem] leading-relaxed text-muted-warm">{r.d}</p>
              <AnimatePresence initial={false}>
                {on ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <div className="rounded-xl border border-[#e4f1ea] bg-white p-3 text-center">
                        <p className="text-[.6rem] font-black uppercase tracking-[.14em] text-[#8a6b45]">2015</p>
                        <p className="mt-1 font-mono text-[.95rem] font-black" style={{ color: FA_G[700] }}>{r.r.split("→")[0].trim()}</p>
                      </div>
                      <div className="rounded-xl border border-[#e4f1ea] bg-white p-3 text-center">
                        <p className="text-[.6rem] font-black uppercase tracking-[.14em] text-[#8a6b45]">2016</p>
                        <p className="mt-1 font-mono text-[.95rem] font-black" style={{ color: "#b3402c" }}>→ {r.r.split("→")[1]?.trim() ?? ""}</p>
                      </div>
                    </div>
                    <p className="mt-2 text-[.78rem] leading-relaxed text-[#2b2014]">
                      <b style={{ color: FA_G[700] }}>Dr. Reddy&apos;s:</b> {r.rn}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </button>
          </Reveal>
        );
      })}
    </div>
  );
}

/* ============================================================
   The two business models — same 20% ROA, opposite roads
   ============================================================ */
function RoaIdentity() {
  const [model, setModel] = useState<"luxury" | "market">("luxury");
  const luxury = { margin: "10%", turn: "2×", story: "Few sales, fat per-unit profits — the asset turns slowly but each turn is rich." };
  const market = { margin: "4%", turn: "5×", story: "Thin per-unit margins, relentless velocity — every rupee of stock sells five times a year." };
  const m = model === "luxury" ? luxury : market;
  return (
    <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
      <div className="flex flex-wrap items-center gap-2 border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3">
        <Sparkles className="h-4 w-4" style={{ color: FA_G[700] }} />
        <span className="font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
          ROA = Profit Margin × Asset Turnover
        </span>
        <span className="text-[.7rem] font-semibold text-muted-warm">two roads, one destination</span>
      </div>
      <div className="grid grid-cols-2 border-b border-[#e4f1ea]">
        {(["luxury", "market"] as const).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setModel(k)}
            aria-pressed={model === k}
            className={`flex items-center justify-center gap-2 px-4 py-3 text-[.8rem] font-extrabold uppercase tracking-[.12em] transition-colors ${
              model === k ? "bg-[#ecfdf5] text-[#065f46]" : "text-[#9db8a9] hover:text-[#5c7a6b]"
            }`}
          >
            {k === "luxury" ? <Store className="h-4 w-4" /> : <Factory className="h-4 w-4" />}
            {k === "luxury" ? "Luxury goods" : "Supermarket"}
          </button>
        ))}
      </div>
      <div className="px-4 py-5 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-2 text-center font-mono">
          <span className="rounded-xl border border-[#e4f1ea] bg-white px-4 py-2 text-[1.05rem] font-black" style={{ color: FA_G[700] }}>
            {m.margin}
          </span>
          <span className="text-lg font-black text-[#8a6b45]">×</span>
          <span className="rounded-xl border border-[#e4f1ea] bg-white px-4 py-2 text-[1.05rem] font-black" style={{ color: FA_G[700] }}>
            {m.turn}
          </span>
          <span className="text-lg font-black text-[#8a6b45]">=</span>
          <span className="rounded-xl px-4 py-2 text-[1.05rem] font-black text-white" style={{ background: FA_BTN_GRAD }}>
            20% ROA
          </span>
        </div>
        <p className="mt-3 text-center text-[.82rem] leading-relaxed text-[#2b2014]">{m.story}</p>
        <p className="mt-2 text-center text-[.76rem] leading-relaxed text-muted-warm">
          Same 20% ROA, two completely different businesses — which is why a ratio is a{" "}
          <b>strategy fingerprint</b>, not a scoreboard.
        </p>
      </div>
    </div>
  );
}

export function FaRatioProfitabilitySection() {
  return (
    <Section id="ratio-profitability">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow={eyebrowOf("ratio-profitability")}
          title={
            <>
              The same profit, <span style={{ color: FA_G[700] }}>six different stories</span>.
            </>
          }
          lead="A ratio relates one financial figure to a base — assets, sales revenue, or shareholder value. Two firms can both earn ₹10 lakh: Firm A keeps ₹20 per ₹100 of sales, Firm B keeps ₹5. Same profit, utterly different businesses. Ratio analysis is how the story gets told."
        />

        <FaReadStep n="01" title="Four categories — the map" sub="Profitability now; liquidity, solvency and the market next lecture" />
        <div className="grid gap-3 md:grid-cols-4">
          {[
            { t: "Profitability", d: "How well sales, assets or equity convert into profit.", icon: TrendingUp },
            { t: "Liquidity", d: "Can the firm pay its short-term obligations on time?", icon: HeartPulse },
            { t: "Solvency", d: "Can the firm survive its long-term obligations?", icon: Building2 },
            { t: "Capital market", d: "What does the stock price say about all of it?", icon: TrendingDown },
          ].map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.t} delay={i * 0.05}>
                <div className={`h-full rounded-2xl border p-4 ${i === 0 ? "border-[#059669] bg-[#ecfdf5]" : "border-[#e0ece6] bg-[#fffdf9]"}`}>
                  <Icon className="h-5 w-5" style={{ color: i === 0 ? FA_G[700] : "#9db8a9" }} />
                  <p className="mt-2 text-[.92rem] font-extrabold text-[#3e2c1d]">{c.t}</p>
                  <p className="mt-1 text-[.76rem] leading-snug text-muted-warm">{c.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <FaReadStep n="02" title="The six profitability ratios" sub="Click each — formula, meaning, and Dr. Reddy's 2015→2016 walk" />
        <RatioExplorer />

        <FaReadStep n="03" title="The two business models" sub="ROA = Margin × Turnover — the identity that explains strategy" />
        <RoaIdentity />

        <FaReadStep n="04" title="The Lipstick Index" sub="Ratios are read in context — even the recession's" />
        <Reveal>
          <FaCallout kind="story" title="Lipstick sales rose 11% during the 2001 recession">
            While most demand collapsed, lipstick — an <b>affordable luxury</b> — sold 11% more. Demand for cosmetic
            surgeons, psychiatrists and priests also rises in downturns. The lesson the lecture draws: a profitability
            ratio is never read in a vacuum — smart analysts link firm performance to the wider socioeconomic weather.
            Ratios without context are meaningless.
          </FaCallout>
        </Reveal>

        <FaReadStep n="05" title="The gross-margin trap" sub="What moves the line — and what cannot" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm h-full p-5">
              <p className="font-extrabold text-[#3e2c1d]">Gross margin = (Sales − COGS) ÷ Sales</p>
              <p className="mt-2 text-[.84rem] leading-relaxed text-[#2b2014]">
                <b style={{ color: "#b3402c" }}>Pulls it down:</b> raw-material costs rising without matching price
                increases; selling prices cut to match competitors.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card-warm h-full p-5">
              <p className="font-extrabold text-[#3e2c1d]">Below the line — invisible to gross margin</p>
              <p className="mt-2 text-[.84rem] leading-relaxed text-[#2b2014]">
                <b style={{ color: FA_G[700] }}>Never touches it:</b> interest expense and advertising sit{" "}
                <b>below</b> the gross-margin line as indirect expenses. A stable gross margin can hide a borrowing
                bill quietly eating the net margin — Dr. Reddy&apos;s 2016 tension exactly.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-4">
          <FaEq label="Dr. Reddy's 2015→2016 — the full walk, in one balance">{`Gross margin      ↑ rose       (the making-and-selling engine improved)
Net margin        15.55% → 13.71%   employee costs + one-time forex loss
Asset turnover    0.87  → 0.81      assets +11.5% vs revenue +4.5%
ROA               13.49% → 11.14%   both drivers fell together
ROE               26.37% → 19.96%   the ROA fall, amplified by leverage
EPS               ₹137.18 → ₹126.15  profitability per share, down

Root causes: rising salary costs · an extraordinary forex
loss (₹46–61 million, one-time) · assets outgrowing revenue.`}</FaEq>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FaQuiz
            source="Lecture 30 · check yourself"
            q="Dr. Reddy's gross margin rose in 2016 while its net margin fell. What does that tension reveal?"
            options={[
              "The product engine improved while indirect costs grew",
              "Cost of goods sold must have collapsed",
              "Revenue must have fallen",
              "The forex loss raised the gross margin",
            ]}
            answer={0}
            explain="Gross margin only sees COGS — and it improved. The net-margin fall came from below the line: rising employee (indirect) costs and the one-time forex loss. That is exactly why both margins are read together."
          />
          <FaQuiz
            source="Lecture 30 · check yourself"
            q="A luxury house earns a 10% margin turning assets 2×; a supermarket earns 4% turning 5×. Compare their ROAs."
            options={[
              "The supermarket's is higher — 20% vs 10%",
              "Identical at 20% — margin × turnover, two roads to one ROA",
              "The luxury house's is higher — 40% vs 20%",
              "Impossible to compare without EPS",
            ]}
            answer={1}
            explain="10% × 2× = 20% and 4% × 5× = 20%. ROA is a strategy fingerprint: high-margin/slow-turning vs low-margin/fast-turning can land on the same number."
          />
        </div>

        <div className="mt-10">
          <Takeaways
            items={[
              <>Ratios need a <b>base</b> — the same profit means different things per ₹100 of sales, assets or equity.</>,
              <>Six profitability ratios: <b>profit margin, gross margin, asset turnover, ROA, ROE, EPS</b>.</>,
              <><b>ROA = Margin × Turnover</b> — luxury (10% × 2×) and supermarket (4% × 5×) both land at 20%.</>,
              <>Leverage amplifies ROE only while <b>ROA &gt; interest rate</b> — debt is a two-edged sword.</>,
              <>EPS is for <b>tracking one company over time</b> — never cross-company comparison.</>,
              <>Read ratios in context: one-time events, industry norms, even the <b>Lipstick Index</b>.</>,
            ]}
          />
        </div>
      </div>
    </Section>
  );
}
