"use client";

/* ============================================================
   Financial Accounting — PART 13 (shelf 03 of The Atlas)
   Lecture 31 in two sections: liquidity & the operating cycle
   (ratio-liquidity), solvency & the capital market
   (ratio-solvency-market) — with the supplier-payment paradox
   and Dr. Reddy's 2016 verdict.
   ============================================================ */

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BadgePercent,
  Banknote,
  Clock,
  Coins,
  Factory,
  HandCoins,
  Landmark,
  LineChart,
  Package,
  RefreshCcw,
  Scale,
  ShieldAlert,
  Store,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { Reveal, Section, SectionHead, StepsFlow, Takeaways } from "@/components/notes/ui";
import { FA_BTN_GRAD, FA_G, FaCallout, FaEq, FaQuiz, FaReadStep } from "./FaParts1";
import { eyebrowOf } from "./faLectures";

/* ============================================================
   CHAPTER — LIQUIDITY & THE OPERATING CYCLE (Lecture 31 · part 1)
   ============================================================ */

const LIQUIDITY_RATIOS = [
  {
    t: "Current ratio",
    f: "Current Assets ÷ Current Liabilities",
    d: "Thumb rule 2:1 — ₹2 of current assets for every ₹1 of short-term debt. Anything above 1 means the firm could cover its obligations; the exact standard varies by industry and firm policy.",
    icon: Wallet,
  },
  {
    t: "Quick ratio (acid test)",
    f: "(Current Assets − Inventory) ÷ Current Liabilities",
    d: "Inventory is excluded because turning it into cash needs a sale AND a collection. Thumb rule 1:1 — a 0.8:1 quick ratio confesses the firm must sell inventory to pay its bills.",
    icon: Package,
  },
  {
    t: "Receivable turnover",
    f: "Revenue ÷ Average Trade Receivables",
    d: "How many times a year customer dues convert to cash. Collection period = 360 ÷ turnover — a turnover of 6 means 60 days to collect, on average.",
    icon: RefreshCcw,
  },
  {
    t: "Inventory turnover",
    f: "COGS ÷ Average Inventory",
    d: "Holding period = 360 ÷ turnover — a turnover of 6 means stock sits 60 days before selling. Faster is preferred: less storage, less insurance, less cash locked up.",
    icon: Clock,
  },
];

function LiquidityTable() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {LIQUIDITY_RATIOS.map((r, i) => {
        const Icon = r.icon;
        return (
          <Reveal key={r.t} delay={i * 0.05}>
            <div className="card-warm h-full p-5">
              <div className="flex items-center gap-2">
                <Icon className="h-4.5 w-4.5 h-[18px] w-[18px]" style={{ color: FA_G[700] }} />
                <p className="text-[.95rem] font-extrabold text-[#3e2c1d]">{r.t}</p>
              </div>
              <p className="mt-2 rounded-lg px-2 py-1.5 font-mono text-[.7rem] leading-snug" style={{ background: FA_G.wash, color: FA_G[800] }}>
                {r.f}
              </p>
              <p className="mt-2 text-[.82rem] leading-relaxed text-muted-warm">{r.d}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

/* ============================================================
   SupplierPaymentParadox — pay a supplier, watch the ratio RISE
   ============================================================ */
function SupplierPaymentParadox() {
  const [paid, setPaid] = useState(false);
  const ca = paid ? 250 : 300;
  const cl = paid ? 100 : 150;
  const ratio = (ca / cl).toFixed(2);
  return (
    <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
      <div className="flex flex-wrap items-center gap-2 border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3">
        <ShieldAlert className="h-4 w-4" style={{ color: FA_G[700] }} />
        <span className="font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
          The supplier-payment paradox
        </span>
        <span className="text-[.7rem] font-semibold text-muted-warm">illustrative figures — a favourite exam trick</span>
      </div>
      <div className="px-4 py-5 sm:px-6">
        <div className="grid grid-cols-3 items-center gap-2 text-center font-mono">
          <div className="rounded-xl border border-[#e4f1ea] bg-white p-3">
            <p className="text-[.6rem] font-black uppercase tracking-[.14em] text-[#8a6b45]">Current assets</p>
            <p className="mt-1 text-[1.05rem] font-black text-[#3e2c1d]">₹{ca}</p>
          </div>
          <div className="rounded-xl border border-[#e4f1ea] bg-white p-3">
            <p className="text-[.6rem] font-black uppercase tracking-[.14em] text-[#8a6b45]">Current liabilities</p>
            <p className="mt-1 text-[1.05rem] font-black text-[#3e2c1d]">₹{cl}</p>
          </div>
          <div className="rounded-xl p-3 text-white" style={{ background: FA_BTN_GRAD }}>
            <p className="text-[.6rem] font-black uppercase tracking-[.14em] opacity-80">Current ratio</p>
            <p className="mt-1 text-[1.05rem] font-black">{ratio} : 1</p>
          </div>
        </div>
        <div className="mt-4 flex flex-col items-center gap-2">
          <button
            type="button"
            onClick={() => setPaid((p) => !p)}
            className="rounded-full px-6 py-2.5 text-[.82rem] font-bold text-white shadow-sm transition hover:opacity-90"
            style={{ background: FA_BTN_GRAD }}
            aria-pressed={paid}
          >
            {paid ? "Undo the payment" : "Pay a supplier ₹50 in cash"}
          </button>
          <p className="text-center text-[.8rem] leading-relaxed text-[#2b2014]">
            {paid ? (
              <>
                Cash out cut current assets <b>and</b> the liability together (₹300→₹250, ₹150→₹100). The ratio{" "}
                <b>improved</b> from 2.00 to 2.50 — because the liability fell proportionally more. A{" "}
                <b>low</b> current ratio can improve by paying suppliers; a <b>high</b> one can worsen. Never judge the
                ratio without asking what just moved.
              </>
            ) : (
              <>
                A healthy 2:1 firm owes suppliers ₹150. Now watch what one ordinary payment does to the ratio —
                nothing has changed about the business.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaRatioLiquiditySection() {
  return (
    <Section id="ratio-liquidity">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow={eyebrowOf("ratio-liquidity")}
          title={
            <>
              Can the firm pay <span style={{ color: FA_G[700] }}>tomorrow?</span>
            </>
          }
          lead="Liquidity is the ability to pay short-term obligations on time out of current assets — how quickly assets become cash. The people who care: suppliers of raw material, banks and short-term lenders, and creditors seeking assurance of payment."
        />

        <FaReadStep n="01" title="The four liquidity ratios" sub="Formulas, thumb rules — and what each one quietly assumes" />
        <LiquidityTable />

        <FaReadStep n="02" title="The operating cycle" sub="Cash → inventory → sale → cash — 140 + 90 = 230 days" />
        <Reveal>
          <StepsFlow
            steps={[
              { label: "Buy raw material", sub: "cash becomes stock" },
              { label: "Hold inventory", sub: "holding period — 140 days" },
              { label: "Sell", sub: "stock becomes a receivable" },
              { label: "Collect", sub: "collection period — 90 days" },
            ]}
          />
        </Reveal>
        <Reveal className="mt-3">
          <FaCallout kind="insight" title="230 days — and every one of them costs money">
            The operating cycle runs from purchasing raw material to collecting cash from customers:{" "}
            <b>holding period + collection period = 140 + 90 = 230 days</b>. Shorter is better — a longer cycle
            inflates working-capital needs and the storage and insurance costs of stock that just sits.
          </FaCallout>
        </Reveal>

        <FaReadStep n="03" title="The supplier-payment paradox" sub="Paying a bill can make the current ratio look BETTER" />
        <SupplierPaymentParadox />

        <FaReadStep n="04" title="Evaluating receivables properly" sub="A shorter collection period is not automatically good" />
        <div className="grid gap-3 md:grid-cols-4">
          {[
            { t: "Credit terms", d: "What payment period did the firm actually OFFER its customers?" },
            { t: "Aging", d: "Break the receivables down by how overdue each account is." },
            { t: "Bad-debt allowance", d: "What provision exists for the amounts that will never pay?" },
            { t: "Customer mix", d: "Retail and corporate customers pay at different speeds." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-[#e0ece6] bg-[#fffdf9] p-4">
                <p className="text-[.88rem] font-extrabold text-[#3e2c1d]">{c.t}</p>
                <p className="mt-1 text-[.76rem] leading-snug text-muted-warm">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-3">
          <FaCallout kind="why" title="The comparison rule">
            A shorter collection period is only favorable if it <b>aligns with or beats the credit terms the firm
            offered</b>. Collecting in 45 days when you gave customers 60 is excellent; collecting in 45 when you
            demanded 15 is a failure — even though the raw number looks small.
          </FaCallout>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FaQuiz
            source="Lecture 31 · check yourself"
            q="Current assets ₹300, current liabilities ₹150 — ratio 2:1. The firm pays one supplier ₹50 cash. The current ratio now is…"
            options={[
              "Lower — cash left the business",
              "Higher — ₹250 ÷ ₹100 = 2.5:1, the liability fell proportionally more",
              "Unchanged — one payment cannot move a ratio",
              "Zero — current assets fell",
            ]}
            answer={1}
            explain="Paying cash cuts current assets AND current liabilities together. Because the denominator fell proportionally more, the ratio RISES. That is the supplier-payment paradox — a low ratio can improve by paying, which is why examiners love it."
          />
          <FaQuiz
            source="Lecture 31 · check yourself"
            q="Inventory turnover is 6. How long does stock sit before it sells?"
            options={[
              "6 days",
              "60 days — 360 ÷ turnover",
              "180 days",
              "Cannot be computed without sales",
            ]}
            answer={1}
            explain="Holding period = 360 ÷ turnover = 360 ÷ 6 = 60 days. The same arithmetic turns a receivable turnover of 6 into a 60-day collection period — and holding + collection is the operating cycle."
          />
        </div>

        <div className="mt-10">
          <Takeaways
            items={[
              <>Liquidity = paying <b>short-term obligations on time</b>; suppliers, banks and creditors read it first.</>,
              <>Current ratio thumb rule <b>2:1</b>; quick ratio <b>1:1</b> — inventory out because it needs a sale AND a collection.</>,
              <>Turnover ↔ days: <b>360 ÷ turnover</b>; holding 60 + collecting 60 — and Reddy&apos;s-style cycles run 230+ days.</>,
              <>Operating cycle = <b>holding + collection</b>; shorter cycles free working capital.</>,
              <>A shorter collection period is only good if it <b>beats the terms you offered</b>.</>,
              <>The <b>supplier-payment paradox</b>: paying cash cuts CA and CL — a low ratio can improve.</>,
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER — SOLVENCY & THE CAPITAL MARKET (Lecture 31 · part 2)
   ============================================================ */

function ReddyVerdict() {
  const rows = [
    { k: "Collection period", v: "89 → 95 days", verdict: "worse", d: "Customers are paying slower — cash conversion is slowing down." },
    { k: "Operating cycle", v: "232 → 243 days", verdict: "worse", d: "The whole cash loop lengthened; working capital needs grow." },
    { k: "Debt-to-equity", v: "decreased", verdict: "better", d: "Less reliance on borrowed money — lenders sleep better." },
    { k: "Interest coverage", v: "27.8 → 33", verdict: "better", d: "Profit covers interest 33 times over — exceptionally strong." },
    { k: "PE & PB", v: "softer", verdict: "softer", d: "Market valuations eased modestly from 2015 — sentiment, not crisis." },
  ];
  return (
    <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
      <div className="flex flex-wrap items-center gap-2 border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3">
        <LineChart className="h-4 w-4" style={{ color: FA_G[700] }} />
        <span className="font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
          Dr. Reddy&apos;s Laboratories — the 2016 verdict
        </span>
      </div>
      <div>
        {rows.map((r, i) => (
          <motion.div
            key={r.k}
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            className="flex items-start gap-3 border-b border-[#e4f1ea] px-4 py-3 last:border-b-0"
          >
            <span
              className="mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-[.58rem] font-black uppercase tracking-[.12em]"
              style={{
                background: r.verdict === "better" ? "#ecfdf5" : r.verdict === "worse" ? "#fbeae5" : "#fbf4e4",
                color: r.verdict === "better" ? FA_G[700] : r.verdict === "worse" ? "#b3402c" : "#8a5a10",
              }}
            >
              {r.verdict}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[.86rem] font-extrabold text-[#3e2c1d]">
                {r.k} <span className="font-mono font-black" style={{ color: FA_G[800] }}>{r.v}</span>
              </span>
              <span className="block text-[.74rem] leading-snug text-muted-warm">{r.d}</span>
            </span>
          </motion.div>
        ))}
      </div>
      <div className="border-t border-[#e4f1ea] bg-white px-4 py-3 text-[.82rem] leading-relaxed text-[#2b2014]">
        <b style={{ color: FA_G[700] }}>The verdict:</b> liquidity deteriorating (slower cash conversion), solvency
        strong and improving, market sentiment modestly softer. Three lenses, three different headlines — from the same
        statements.
      </div>
    </div>
  );
}

export function FaRatioSolvencyMarketSection() {
  return (
    <Section id="ratio-solvency-market">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow={eyebrowOf("ratio-solvency-market")}
          title={
            <>
              Can it survive a decade — and <span style={{ color: FA_G[700] }}>what does the market think?</span>
            </>
          }
          lead="Solvency examines long-term survival based on debt levels; capital-market ratios link the share price to earnings, dividends and book value. Suppliers read liquidity, lenders read solvency, investors read the market."
        />

        <FaReadStep n="01" title="Why firms borrow — and what it risks" sub="Interest is tax-deductible; dividends are not" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm h-full p-5">
              <div className="flex items-center gap-2">
                <HandCoins className="h-[18px] w-[18px]" style={{ color: FA_G[700] }} />
                <p className="font-extrabold text-[#3e2c1d]">The case for debt</p>
              </div>
              <p className="mt-2 text-[.84rem] leading-relaxed text-[#2b2014]">
                Debt is <b>cheaper than equity</b> because interest payments are <b>tax-deductible</b> — they reduce
                taxable income and lower the effective cost of borrowing. Dividends carry no such shield.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card-warm h-full p-5">
              <div className="flex items-center gap-2">
                <ShieldAlert className="h-[18px] w-[18px]" style={{ color: "#b3402c" }} />
                <p className="font-extrabold text-[#3e2c1d]">The price of debt</p>
              </div>
              <p className="mt-2 text-[.84rem] leading-relaxed text-[#2b2014]">
                Interest is a <b>fixed obligation regardless of performance</b> — and non-payment can force lenders to{" "}
                <b>liquidate</b> the company. Debt raises financial risk and vulnerability.
              </p>
            </div>
          </Reveal>
        </div>

        <FaReadStep n="02" title="The solvency ratios" sub="Debt-to-equity and interest coverage, decoded" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm h-full p-5">
              <div className="flex items-center gap-2">
                <Scale className="h-[18px] w-[18px]" style={{ color: FA_G[700] }} />
                <p className="text-[.95rem] font-extrabold text-[#3e2c1d]">Debt-to-equity</p>
              </div>
              <p className="mt-2 rounded-lg px-2 py-1.5 font-mono text-[.7rem]" style={{ background: FA_G.wash, color: FA_G[800] }}>
                Total Debt ÷ Shareholders&apos; Equity
              </p>
              <p className="mt-2 text-[.82rem] leading-relaxed text-muted-warm">
                A ratio of <b>0.5:1</b> means lenders have contributed <b>50 paise for every rupee of owner equity</b>.
                Higher = greater risk for lenders and for the firm itself.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card-warm h-full p-5">
              <div className="flex items-center gap-2">
                <BadgePercent className="h-[18px] w-[18px]" style={{ color: FA_G[700] }} />
                <p className="text-[.95rem] font-extrabold text-[#3e2c1d]">Interest Coverage Ratio</p>
              </div>
              <p className="mt-2 rounded-lg px-2 py-1.5 font-mono text-[.7rem]" style={{ background: FA_G.wash, color: FA_G[800] }}>
                EBIT ÷ Interest Expense
              </p>
              <p className="mt-2 text-[.82rem] leading-relaxed text-muted-warm">
                A coverage of <b>4×</b> means profit can fall <b>75%</b> and interest is still paid. Higher is safer —
                it measures the cushion before a missed payment.
              </p>
            </div>
          </Reveal>
        </div>

        <FaReadStep n="03" title="The capital-market ratios" sub="What the share price says about all of it" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { t: "PE ratio", f: "Price ÷ EPS", d: "₹300 price ÷ ₹20 EPS = 15. A high PE signals the market's optimism about future growth.", icon: TrendingUp },
            { t: "Earnings yield", f: "EPS ÷ Price", d: "The PE's reciprocal — earnings as a percentage of what you pay for them.", icon: Banknote },
            { t: "Dividend Yield", f: "Dividend per share ÷ Price × 100", d: "The percentage return coming from dividends alone.", icon: Coins },
            { t: "Stock return", f: "(Dividend + Price change) ÷ Opening price × 100", d: "Buy at 100, collect ₹5 of dividend, sell at 110 → (5 + 10) ÷ 100 = a 15% return.", icon: LineChart },
            { t: "PB ratio", f: "Price ÷ Book value per share · (Book = Equity ÷ Shares)", d: "Above 1 means the market expects returns above the required rate — expectations of future profitability.", icon: Landmark },
            { t: "Beta", f: "Sensitivity vs the overall market", d: "Lower beta = lower volatility and risk; higher beta = bigger swings, both ways.", icon: Activity },
          ].map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.t} delay={i * 0.04}>
                <div className="h-full rounded-2xl border border-[#e0ece6] bg-[#fffdf9] p-4">
                  <Icon className="h-5 w-5" style={{ color: FA_G[700] }} />
                  <p className="mt-2 text-[.9rem] font-extrabold text-[#3e2c1d]">{r.t}</p>
                  <p className="mt-1 rounded-lg px-2 py-1.5 font-mono text-[.66rem] leading-snug" style={{ background: FA_G.wash, color: FA_G[800] }}>
                    {r.f}
                  </p>
                  <p className="mt-1.5 text-[.76rem] leading-snug text-muted-warm">{r.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <FaReadStep n="04" title="Choosing investments by risk profile" sub="Same ratios, opposite shopping lists" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full items-start gap-3 rounded-2xl border border-[#a9dcc4] bg-[#f2faf6] p-4">
              <Store className="mt-0.5 h-5 w-5 shrink-0" style={{ color: FA_G[700] }} />
              <div>
                <p className="text-[.9rem] font-extrabold" style={{ color: FA_G[800] }}>Risk-averse</p>
                <p className="mt-0.5 text-[.8rem] leading-relaxed text-[#1d4433]">
                  Choose <b>higher PE</b> and <b>lower beta</b> — market confidence plus lower volatility. Pay up for
                  predictability.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex h-full items-start gap-3 rounded-2xl border border-[#e8a896] bg-[#fbeae5] p-4">
              <Factory className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#b3402c" }} />
              <div>
                <p className="text-[.9rem] font-extrabold text-[#b3402c]">Risk-tolerant</p>
                <p className="mt-0.5 text-[.8rem] leading-relaxed text-[#7c2d12]">
                  A <b>lower PE</b> may be an underpriced opportunity, and <b>higher beta</b> promises greater potential
                  returns — with the increased risk that comes first.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <FaReadStep n="05" title="Dr. Reddy's 2016 verdict" sub="Three lenses, three different headlines" />
        <ReddyVerdict />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FaQuiz
            source="Lecture 31 · check yourself"
            q="Interest coverage is 4×. How far can profit fall before interest payments are missed?"
            options={[
              "4%",
              "25%",
              "75% — profit can fall to a quarter and still cover",
              "400%",
            ]}
            answer={2}
            explain="Coverage 4× means EBIT is 4 times the interest bill. Profit can decline by 3 of those 4 units — 75% — and interest is still covered. The cushion, not the ratio itself, is the point."
          />
          <FaQuiz
            source="Lecture 31 · check yourself"
            q="Buy a share at ₹100, collect a ₹5 dividend, sell at ₹110. The stock return is…"
            options={[
              "5% — dividends are the only return",
              "10% — the price gain",
              "15% — (5 + 10) ÷ 100: dividend income plus capital gain",
              "110% — the selling price",
            ]}
            answer={2}
            explain="Stock return = (dividend + price change) ÷ opening price × 100 = (5 + 10) ÷ 100 = 15%. Total return has two components — income and appreciation — and both count."
          />
        </div>

        <div className="mt-10">
          <Takeaways
            items={[
              <>Debt is <b>cheaper but riskier</b> — interest is tax-deductible, but it is a fixed obligation that can force liquidation.</>,
              <>Debt-to-equity <b>0.5:1</b> = 50 paise of lender money per rupee of owner equity.</>,
              <>Interest coverage <b>4×</b> = profit can fall <b>75%</b> before a missed payment.</>,
              <>PE <b>15</b> (₹300/₹20) = market optimism; earnings yield is its reciprocal; PB &gt; 1 = above-required returns expected.</>,
              <>Stock return = <b>dividend + price change</b> over the opening price — 100 / 5 / 110 = 15%.</>,
              <>Dr. Reddy&apos;s 2016: liquidity <b>worse</b>, solvency <b>better</b>, valuations <b>softer</b> — read all three lenses.</>,
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

/* Activity icon is stable across lucide versions under this name */
function Activity(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}
