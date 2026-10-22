"use client";

/* ============================================================
   Financial Accounting — PART 4 of 4 (shelf 03 of The Atlas)
   Module 4: adjusting entries (deferrals vs accruals, the
   prepaid splitter), final accounts, the trading account and
   gross profit — with the Gross Profit Lab running the
   lecture's own worked examples.
   ============================================================ */

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Banknote,
  Calculator,
  Check,
  Clock,
  Hourglass,
  Landmark,
  RotateCcw,
  Scale,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Umbrella,
} from "lucide-react";
import {
  Practice,
  Reveal,
  Section,
  SectionHead,
  Takeaways,
} from "@/components/notes/ui";
import { FA_BTN_GRAD, FA_BTN_SHADOW, FaCallout, FaEq, FaQuiz, FaReadStep, FA_G } from "./FaParts1";

/* ============================================================
   CHAPTER 13 — ADJUSTING ENTRIES: DEFERRALS & ACCRUALS
   ============================================================ */

const PREPAID_TOTAL = 12000;

function PrepaidSplitter() {
  const [months, setMonths] = useState(3);
  const expense = Math.round((PREPAID_TOTAL * months) / 12);
  const asset = PREPAID_TOTAL - expense;
  const isLectureMoment = months === 3;

  return (
    <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
      <div className="flex flex-wrap items-center gap-2 border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg text-white" style={{ background: FA_BTN_GRAD }}>
          <Umbrella className="h-3.5 w-3.5" />
        </span>
        <span className="font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
          The prepaid splitter
        </span>
        <span className="text-[.7rem] font-semibold text-muted-warm">₹12,000 · one-year policy · paid October 1</span>
      </div>
      <div className="px-4 py-5 sm:px-6">
        <div className="flex items-baseline justify-between">
          <label htmlFor="fa-months" className="text-[.8rem] font-bold text-[#3e2c1d]">
            Months of protection consumed
          </label>
          <span className="font-mono text-[.9rem] font-black" style={{ color: FA_G[800] }}>{months} / 12</span>
        </div>
        <input
          id="fa-months"
          type="range"
          min={0}
          max={12}
          step={1}
          value={months}
          onChange={(e) => setMonths(Number(e.target.value))}
          className="mt-2 w-full accent-[#047857]"
          aria-valuetext={`${months} months consumed`}
        />
        {/* the split bar */}
        <div className="mt-4 h-9 w-full overflow-hidden rounded-xl border border-[#dcebe2] bg-white" role="img" aria-label={`Expense ${expense} rupees, prepaid asset ${asset} rupees`}>
          <div className="flex h-full">
            <motion.div
              className="flex items-center justify-center"
              style={{ background: FA_BTN_GRAD }}
              animate={{ width: `${(expense / PREPAID_TOTAL) * 100}%` }}
              transition={{ type: "spring", stiffness: 160, damping: 22 }}
            >
              {expense > 900 ? <span className="px-2 font-mono text-[.68rem] font-black text-white">₹{expense.toLocaleString("en-IN")}</span> : null}
            </motion.div>
            <motion.div
              className="flex flex-1 items-center justify-center"
              style={{ background: "#f6ead2" }}
            >
              {asset > 900 ? <span className="px-2 font-mono text-[.68rem] font-black text-[#8a5a10]">₹{asset.toLocaleString("en-IN")}</span> : null}
            </motion.div>
          </div>
        </div>
        <div className="mt-2 flex justify-between text-[.68rem] font-bold uppercase tracking-[.14em]">
          <span style={{ color: FA_G[700] }}>Insurance expense — this year</span>
          <span className="text-[#8a5a10]">Prepaid insurance — an asset</span>
        </div>
        <div className="mt-4">
          <FaEq label={isLectureMoment ? "The lecture moment — Dec 31 year-end" : "Live computation"}>
            {`Expense = 12,000 \u00D7 ${months}/12 = \u20B9${expense.toLocaleString("en-IN")}
Prepaid insurance (asset) = 12,000 \u2212 ${expense.toLocaleString("en-IN")} = \u20B9${asset.toLocaleString("en-IN")}`}
          </FaEq>
        </div>
        {isLectureMoment ? (
          <p className="mt-3 text-center text-[.76rem] font-semibold" style={{ color: FA_G[700] }}>
            Oct + Nov + Dec = 3 months — ₹3,000 becomes expense; ₹9,000 waits as a future benefit.
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function FaAdjustingSection() {
  return (
    <Section id="adjusting">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHead
          eyebrow="Module 4 · Adjusting entries"
          title={
            <>
              Cash is instant. <span className="grad-emerald">Recognition is not.</span>
            </>
          }
          lead="Cash transactions don't always happen in the same period as the related revenue or expense. Adjusting entries are how the books catch up with reality — before any statement is allowed to speak."
        />

        <FaReadStep n="01" title="Two families of mismatch" sub="Deferral — cash moved first · Accrual — recognition moved first" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm h-full p-5">
              <p className="flex items-center gap-2 text-[.95rem] font-extrabold text-[#3e2c1d]">
                <Hourglass className="h-4 w-4" style={{ color: FA_G[700] }} /> Deferral
              </p>
              <p className="mt-2 text-[.84rem] leading-relaxed text-muted-warm">
                A lag in recognising an expense already <b>paid</b> or a revenue already{" "}
                <b>received</b>. Relates to <b>past</b> cash movements, apportioned between two
                or more periods.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["Prepaid insurance", "Office supplies", "Unearned revenue"].map((t) => (
                  <span key={t} className="rounded-lg border px-2.5 py-1 text-[.72rem] font-semibold" style={{ borderColor: FA_G.border, background: FA_G.wash, color: FA_G[800] }}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={110}>
            <div className="card-warm h-full p-5">
              <p className="flex items-center gap-2 text-[.95rem] font-extrabold text-[#3e2c1d]">
                <Clock className="h-4 w-4" style={{ color: "#b45309" }} /> Accrual
              </p>
              <p className="mt-2 text-[.84rem] leading-relaxed text-muted-warm">
                Recognition of an expense <b>incurred</b> but not paid, or revenue{" "}
                <b>earned</b> but not received. Relates to <b>expected future</b> cash
                movements — previously unrecorded items.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["Salaries payable", "Accrued interest expense", "Accrued interest income", "Unbilled revenue"].map((t) => (
                  <span key={t} className="rounded-lg border px-2.5 py-1 text-[.72rem] font-semibold" style={{ borderColor: "#e8d3ac", background: "#faf4e4", color: "#8a5a10" }}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* timeline */}
        <Reveal>
          <div className="card-warm mt-4 overflow-hidden p-5 sm:p-7">
            <svg viewBox="0 0 900 240" className="h-auto w-full" role="img" aria-label="Deferral: cash first, recognition later. Accrual: recognition first, cash later.">
              <defs>
                <marker id="faTlArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#8a6b45" />
                </marker>
              </defs>
              {/* deferral row */}
              <motion.g initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <rect x="20" y="28" width="200" height="56" rx="12" fill="#f2faf6" stroke="#a9dcc4" strokeWidth="2" />
                <text x="120" y="52" textAnchor="middle" fontSize="13" fontWeight="800" fill="#047857">DEFERRAL — cash</text>
                <text x="120" y="72" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#2b2014">₹12,000 paid Oct 1</text>
                <path d="M 225 56 H 640" stroke="#8a6b45" strokeWidth="2" strokeDasharray="4 7" markerEnd="url(#faTlArrow)" fill="none" />
                <rect x="648" y="28" width="232" height="56" rx="12" fill="#f2faf6" stroke="#a9dcc4" strokeWidth="2" />
                <text x="764" y="52" textAnchor="middle" fontSize="13" fontWeight="800" fill="#047857">recognition — later</text>
                <text x="764" y="72" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#2b2014">₹3,000 expense by Dec 31</text>
              </motion.g>
              {/* accrual row */}
              <motion.g initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
                <rect x="20" y="132" width="200" height="56" rx="12" fill="#fbf4e4" stroke="#e3c98f" strokeWidth="2" />
                <text x="120" y="156" textAnchor="middle" fontSize="13" fontWeight="800" fill="#b45309">ACCRUAL — recognition</text>
                <text x="120" y="176" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#2b2014">salaries earned in December</text>
                <path d="M 225 160 H 640" stroke="#8a6b45" strokeWidth="2" strokeDasharray="4 7" markerEnd="url(#faTlArrow)" fill="none" />
                <rect x="648" y="132" width="232" height="56" rx="12" fill="#fbf4e4" stroke="#e3c98f" strokeWidth="2" />
                <text x="764" y="156" textAnchor="middle" fontSize="13" fontWeight="800" fill="#b45309">cash — later</text>
                <text x="764" y="176" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#2b2014">salaries payable, paid in January</text>
              </motion.g>
              <motion.text x="450" y="222" textAnchor="middle" fontSize="12" fontWeight="700" fill="#8a6b45" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                cash first or recognition first — the adjustment always forces them into the same period
              </motion.text>
            </svg>
          </div>
        </Reveal>

        <FaReadStep n="02" title="Example 1 — prepaid insurance, split live" sub="₹12,000 for one year, paid October 1 · year ends December 31" />
        <Reveal>
          <PrepaidSplitter />
        </Reveal>
        <div className="mt-3">
          <FaCallout kind="insight" title="Why the whole 12,000 is not an expense on October 1">
            Because the insurance provides protection for <b>12 months</b>. On December 31 you
            have consumed only October + November + December — 3 months. Cash happened first;
            expense recognition happens gradually afterward. The unused ₹9,000 is a future
            benefit, so it remains an <b>asset</b> called prepaid insurance.
          </FaCallout>
        </div>

        <FaReadStep n="03" title="Example 2 — unearned revenue, earned slowly" sub="₹60,000 received in advance for a six-month service contract" />
        <FaEq label="The two-step recognition">{`Initial receipt:
   Cash A/c .................. Dr  60,000
        To Unearned Revenue ........ 60,000

After 1 month of service:
   Revenue = 60,000 \u00D7 1/6  =  \u20B910,000
   Unearned revenue (liability) falls by \u20B910,000  \u2192  \u20B950,000 left`}</FaEq>
        <div className="mt-3">
          <FaCallout kind="why" title="Is your revenue ₹60,000? No.">
            You haven&rsquo;t provided the service yet. You hold the cash — but the obligation
            (a liability) is what you owe until the service is delivered. Cash received first →
            revenue recognised later.
          </FaCallout>
        </div>

        <FaReadStep n="04" title="The adjustment map" sub="Six mismatches, one destination: profit or loss" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Unearned revenue", d: "Cash received in a past period — work done in the current period", kind: "def" },
            { t: "Revenue receivable", d: "Cash to be received — work done in the current period", kind: "acc" },
            { t: "Prepaid expenses", d: "Cash paid in a past period — benefit used in the current period", kind: "def" },
            { t: "Expenses payable", d: "Cash to be paid — benefit used in the current period", kind: "acc" },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 70}>
              <div className="card-warm h-full p-4">
                <p className="font-mono text-[.6rem] font-black uppercase tracking-[.18em]" style={{ color: c.kind === "def" ? FA_G[700] : "#b45309" }}>
                  {c.kind === "def" ? "Deferral" : "Accrual"}
                </p>
                <p className="mt-1.5 text-[.88rem] font-extrabold leading-snug text-[#3e2c1d]">{c.t}</p>
                <p className="mt-1.5 text-[.76rem] leading-relaxed text-muted-warm">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-3 rounded-2xl border border-[#c7e5d6] bg-[#f4faf7] px-5 py-3 text-center font-mono text-[.86rem] font-black" style={{ color: FA_G[800] }}>
            Revenue (work done) − Expenses (benefit used) = Profit or Loss
          </div>
        </Reveal>

        <FaReadStep n="05" title="Deferred revenue in the wild" sub="Tech Mahindra's annual report, year ended March 31, 2010" />
        <FaCallout kind="story" title="The case">
          A customer paid Tech Mahindra <b>₹9,682 million</b> for changes to a long-term
          contract. The company recognised <b>₹2,005 million</b> as revenue that year for
          services provided, and treated the balance of <b>₹7,677 million</b> as deferred
          revenue. Deferred revenue is a <b>liability</b> — the amount must either be repaid to
          the customer or the services must be provided; in either case, cash is payable.
        </FaCallout>

        <div className="mt-6">
          <FaCallout kind="warn" title="What happens if prepaid expenses are NOT adjusted">
            Without the adjustment, the used-up portion never becomes an expense: the
            statements <b>understate expenses</b> and <b>overstate assets and equity</b> — both
            statements wrong, in opposite directions. The income statement and the balance
            sheet are both incorrect until the split is made.
          </FaCallout>
        </div>

        <div className="mt-8">
          <FaQuiz
            source="Deferral or accrual?"
            q="Vogue received ₹1,500 from Kidswear on June 8 for services to be provided later. At June 30, ₹500 of service has been delivered. The adjusting entry is\u2026"
            options={[
              "Dr Cash 500 / Cr Revenue 500",
              "Dr Unearned revenue 500 / Cr Revenue from services 500",
              "Dr Revenue 500 / Cr Unearned revenue 500",
              "No adjustment until all the service is delivered",
            ]}
            answer={1}
            explain="The liability shrinks as the service is delivered: debit unearned revenue 500 (less owed), credit revenue 500 (now earned). This is a deferral — cash came first, and recognition follows the work, month by month, until the liability is zero."
          />
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 14 — FINAL ACCOUNTS
   ============================================================ */
export function FaFinalAccountsSection() {
  return (
    <Section id="final-accounts">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHead
          eyebrow="Module 4 · Final accounts"
          title={
            <>
              Two questions, <span className="grad-emerald">two statements</span>
            </>
          }
          lead="Final accounts are prepared at the end of an accounting period to reveal the result of operations and the financial position. Everything the course has built — journal, ledger, trial balance, adjustments — now gets asked its purpose."
        />

        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-6">
              <p className="font-mono text-[.62rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>Question 1 — over the period</p>
              <p className="mt-3 font-display text-xl font-bold leading-snug text-[#3e2c1d]">
                &ldquo;Did the business earn a profit or suffer a loss over the period?&rdquo;
              </p>
              <p className="mt-3 text-[.85rem] leading-relaxed text-muted-warm">
                Answered by the <b>Trading &amp; Profit and Loss Account</b> — the statement of
                performance.
              </p>
            </div>
          </Reveal>
          <Reveal delay={110}>
            <div className="card-warm lift h-full p-6">
              <p className="font-mono text-[.62rem] font-black uppercase tracking-[.2em] text-[#b45309]">Question 2 — at a point in time</p>
              <p className="mt-3 font-display text-xl font-bold leading-snug text-[#3e2c1d]">
                &ldquo;What is the financial standing of the business at this specific point —
                what do we own, and what do we owe?&rdquo;
              </p>
              <p className="mt-3 text-[.85rem] leading-relaxed text-muted-warm">
                Answered by the <b>Balance Sheet</b> — the statement of position.
              </p>
            </div>
          </Reveal>
        </div>

        <FaReadStep n="01" title="From adjusted trial balance to final accounts" sub="Each adjusted trial balance item moves into one of the two statements" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm h-full p-5">
              <p className="text-[.95rem] font-extrabold text-[#3e2c1d]">Trading &amp; Profit and Loss Account</p>
              <p className="mt-2 text-[.84rem] leading-relaxed text-muted-warm">
                Revenue and expense balances: <b>sales, purchases, stock, wages, rent,
                interest</b>. Answers: <i>did we earn a profit or suffer a loss this period?</i>
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["Sales", "Purchases", "Stock", "Wages", "Rent", "Interest"].map((t) => (
                  <span key={t} className="rounded-lg border px-2.5 py-1 font-mono text-[.7rem] font-bold" style={{ borderColor: FA_G.border, background: FA_G.wash, color: FA_G[800] }}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={110}>
            <div className="card-warm h-full p-5">
              <p className="text-[.95rem] font-extrabold text-[#3e2c1d]">Balance Sheet</p>
              <p className="mt-2 text-[.84rem] leading-relaxed text-muted-warm">
                Asset, liability and capital balances: <b>cash, debtors, machinery, creditors,
                loans, capital</b>. Answers: <i>what do we own and owe at the year end?</i>
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["Cash", "Debtors", "Machinery", "Creditors", "Loans", "Capital"].map((t) => (
                  <span key={t} className="rounded-lg border px-2.5 py-1 font-mono text-[.7rem] font-bold" style={{ borderColor: "#e8d3ac", background: "#faf4e4", color: "#8a5a10" }}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-6">
          <FaCallout kind="insight" title="The sorting rule is the whole skill">
            Look at an adjusted trial balance item and ask one question: is it{" "}
            <b>a flow (revenue or expense)</b> or <b>a stock (asset, liability or capital)</b>?
            Flows go to the Trading &amp; P&amp;L account; stocks go to the balance sheet.
            Every exam question on &ldquo;prepare the final accounts&rdquo; is this sorting
            test, then arithmetic.
          </FaCallout>
        </div>

        <div className="mt-8">
          <FaQuiz
            source="Sorting round"
            q="From an adjusted trial balance: closing stock ₹15,000. Where does it go?"
            options={[
              "Trading account (credit side) AND balance sheet (current asset) — it does double duty",
              "Only the trading account — it is a flow",
              "Only the balance sheet — stock is an asset",
              "Nowhere — closing stock is never recorded",
            ]}
            answer={0}
            explain="Closing stock is the rare item that appears in BOTH statements: it credits the trading account (shrinking the cost of goods sold) and carries forward as an asset in the balance sheet. Opening stock, by contrast, appears only on the debit side of the trading account."
          />
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 15 — THE TRADING ACCOUNT & GROSS PROFIT
   ============================================================ */
export function FaTradingSection() {
  return (
    <Section id="trading">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHead
          eyebrow="Module 4 · The trading account"
          title={
            <>
              Did buying and selling <span className="grad-emerald">pay?</span>
            </>
          }
          lead="The trading account gives the overall result of trading — the purchasing and selling of goods. If the sales value exceeds the cost of goods sold, there is a gross profit; if it is less, a gross loss."
        />

        <FaReadStep n="01" title="Cost of goods sold — the ladder" sub="Adjust the cost of goods still on hand at year-end against the purchases" />
        <FaEq label="The COGS ladder">{`        Opening Stock                        ***
  Add:  Purchases (Net)                      **
  Add:  Direct Expenses                      **
                                             ---
Less:  Closing Stock                        (***)
                                             ---
        Cost of Goods Sold                   ***`}</FaEq>
        <div className="mt-3">
          <FaCallout kind="why" title="Direct expenses ride along">
            A trader incurs expenses to purchase goods and bring them to the shop:{" "}
            <b>brokerage or commission</b> paid to agents, <b>cartage or carriage</b> charges
            for bringing goods in, <b>wages</b> paid for transportation. All such expenses
            increase the cost of goods sold — they belong inside the ladder.
          </FaCallout>
        </div>

        <FaReadStep n="02" title="Opening stock, closing stock — and the valuation rule" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { t: "Closing stock", d: "Goods unsold at the end of the year. Shown on the credit side of the Trading Account and as an asset in the Balance Sheet.", tone: FA_G[700] },
            { t: "Opening stock", d: "Goods unsold at the beginning of the year — last year's closing stock. Shown on the debit side of the Trading Account.", tone: FA_G[700] },
            { t: "Valuation rule", d: "Closing stock is valued at cost or at net realisable value, whichever is LOWER — the convention of conservatism: never anticipate profit.", tone: "#b45309" },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 90}>
              <div className="card-warm lift h-full p-5">
                <p className="text-[.92rem] font-extrabold" style={{ color: c.tone }}>{c.t}</p>
                <p className="mt-2 text-[.8rem] leading-relaxed text-muted-warm">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <FaReadStep n="03" title="The equation, and the T-format" sub="Gross profit = (Sales + Closing stock) − (Opening stock + Purchases + Direct expenses)" />
        <FaEq label="Equation for preparing the trading account" tone="gold">{`Gross Profit  = Sales \u2212 Cost of Goods Sold
Cost of Goods Sold = Opening Stock + Purchases + Direct Expenses \u2212 Closing Stock

Therefore:  Gross Profit = Sales \u2212 (Opening Stock + Purchases + Direct Expenses \u2212 Closing Stock)
Or:         Gross Profit = (Sales + Closing Stock) \u2212 (Opening Stock + Purchases + Direct Expenses)`}</FaEq>

        <Reveal>
          <div className="mt-4 overflow-hidden rounded-2xl border border-[#c7e5d6]">
            <p className="border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-2 text-center font-mono text-[.66rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
              Trading account of &hellip; for the year ended &hellip; · the T-format
            </p>
            <div className="grid md:grid-cols-2 md:divide-x md:divide-[#e4f1ea]">
              <div className="bg-[#fffdf9] px-4 py-3">
                <p className="mb-2 font-mono text-[.62rem] font-black uppercase tracking-[.18em]" style={{ color: FA_G[700] }}>Dr — the cost side</p>
                {[
                  ["To Opening Stock", ""],
                  ["To Purchases", "(less: Returns outwards)"],
                  ["To Direct expenses:", ""],
                  ["   Freight & Carriage", ""],
                  ["   Customs & Insurance", ""],
                  ["   Wages", ""],
                  ["   Gas, Water & Fuel", ""],
                  ["   Factory Expenses", ""],
                  ["   Royalty on production", ""],
                  ["To Gross Profit c/d*", "← only one of the two appears"],
                ].map(([a, b]) => (
                  <div key={a} className="flex items-baseline justify-between border-b border-[#f0f7f2] py-1.5 text-[.8rem]">
                    <span className={a.startsWith("   ") ? "text-[#6f5438]" : "font-semibold text-[#2f2013]"}>{a}</span>
                    {b ? <span className="text-[.66rem] italic text-[#8a6b45]">{b}</span> : null}
                  </div>
                ))}
              </div>
              <div className="bg-[#fffdf9] px-4 py-3">
                <p className="mb-2 font-mono text-[.62rem] font-black uppercase tracking-[.18em] text-[#b45309]">Cr — the revenue side</p>
                {[
                  ["By Sales", "(less: Returns inwards)"],
                  ["By Closing Stock", "valued at cost or NRV, lower"],
                  ["By Gross Loss c/d*", "← only one of the two appears"],
                ].map(([a, b]) => (
                  <div key={a} className="flex items-baseline justify-between border-b border-[#f0f7f2] py-1.5 text-[.8rem]">
                    <span className="font-semibold text-[#2f2013]">{a}</span>
                    {b ? <span className="text-[.66rem] italic text-[#8a6b45]">{b}</span> : null}
                  </div>
                ))}
              </div>
            </div>
            <p className="border-t border-[#e4f1ea] bg-[#f4faf7] px-4 py-2 text-center text-[.72rem] font-semibold text-muted-warm">
              *Gross profit or gross loss — exactly one of them closes the account, balancing the two sides.
            </p>
          </div>
        </Reveal>

        <div className="mt-8">
          <Practice
            title="Quick gross-profit drills"
            items={[
              { q: "Net sales 35,000 · net purchases 25,000. Gross profit?", hint: "35,000 \u2212 25,000 = 10,000 — the lecture's Example 1." },
              { q: "Same trader, but closing stock of 5,000 remains. Gross profit now?", hint: "COGS = 25,000 \u2212 5,000 = 20,000; GP = 35,000 \u2212 20,000 = 15,000." },
              { q: "Where does that closing stock of 5,000 reappear?", hint: "As an asset in the balance sheet — it does double duty." },
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 16 — WORKED: SIX EXAMPLES & THE GROSS PROFIT LAB
   ============================================================ */

interface GpState { os: number; np: number; de: number; cs: number; sales: number }

const GP_PRESETS: { name: string; tag: string; v: GpState }[] = [
  { name: "Example 3", tag: "stock both ends", v: { os: 10000, np: 35000, de: 0, cs: 15000, sales: 50000 } },
  { name: "Example 4", tag: "+ carriage in", v: { os: 10000, np: 35000, de: 5000, cs: 15000, sales: 50000 } },
  { name: "Example 6", tag: "ABC Traders", v: { os: 100000, np: 600000, de: 80000, cs: 200000, sales: 1000000 } },
];

const inr = (n: number) => n.toLocaleString("en-IN");

function GrossProfitLab() {
  const [v, setV] = useState<GpState>(GP_PRESETS[0].v);
  const cogs = v.os + v.np + v.de - v.cs;
  const gp = v.sales - cogs;
  const loss = gp < 0;

  const fields: { key: keyof GpState; label: string }[] = [
    { key: "os", label: "Opening stock" },
    { key: "np", label: "Net purchases" },
    { key: "de", label: "Direct expenses" },
    { key: "cs", label: "Closing stock" },
    { key: "sales", label: "Net sales" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
      <div className="flex flex-wrap items-center gap-2 border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg text-white" style={{ background: FA_BTN_GRAD }}>
          <Calculator className="h-3.5 w-3.5" />
        </span>
        <span className="font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
          Gross profit lab
        </span>
        <span className="text-[.7rem] font-semibold text-muted-warm">edit any figure — the ladder recomputes</span>
        <button
          type="button"
          onClick={() => setV(GP_PRESETS[0].v)}
          className="ml-auto inline-flex items-center gap-1.5 rounded-lg border border-[#c7e5d6] bg-white px-2.5 py-1.5 text-[.7rem] font-bold text-[#6f5438] transition hover:border-[#10b981] hover:text-[#047857]"
        >
          <RotateCcw className="h-3 w-3" /> Reset
        </button>
      </div>

      <div className="grid gap-4 p-4 sm:p-6 lg:grid-cols-[1fr_1.1fr]">
        {/* inputs */}
        <div>
          <div className="flex flex-wrap gap-1.5">
            {GP_PRESETS.map((p) => (
              <button
                key={p.name}
                type="button"
                onClick={() => setV(p.v)}
                className="rounded-lg border border-[#c7e5d6] bg-white px-2.5 py-1.5 text-[.7rem] font-bold text-[#3e2c1d] transition hover:border-[#10b981] hover:bg-[#f2faf6]"
              >
                {p.name} <span className="font-normal text-[#8a6b45]">· {p.tag}</span>
              </button>
            ))}
          </div>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {fields.map((f) => (
              <label key={f.key} className="flex items-center justify-between gap-2 rounded-xl border border-[#eadfc8] bg-white px-3 py-2">
                <span className="text-[.74rem] font-bold text-[#6f5438]">{f.label}</span>
                <input
                  type="number"
                  min={0}
                  value={v[f.key]}
                  onChange={(e) => setV((s) => ({ ...s, [f.key]: Math.max(0, Number(e.target.value) || 0) }))}
                  className="w-24 rounded-lg border border-[#e4f1ea] bg-[#fbfdfc] px-2 py-1 text-right font-mono text-[.8rem] font-bold text-[#1d4433] outline-none focus:border-[#10b981]"
                  aria-label={f.label}
                />
              </label>
            ))}
          </div>
        </div>

        {/* live ladder */}
        <div className="rounded-2xl border border-[#e4f1ea] bg-[#f9fcfa] p-4">
          <p className="font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>The ladder, live</p>
          <div className="mt-2 space-y-1 font-mono text-[.8rem] text-[#1d4433]">
            <p className="flex justify-between"><span>Opening stock</span><span>{inr(v.os)}</span></p>
            <p className="flex justify-between"><span>+ Net purchases</span><span>{inr(v.np)}</span></p>
            <p className="flex justify-between"><span>+ Direct expenses</span><span>{inr(v.de)}</span></p>
            <p className="flex justify-between"><span>− Closing stock</span><span>({inr(v.cs)})</span></p>
            <p className="flex justify-between border-t border-[#e4f1ea] pt-1 font-bold" style={{ color: FA_G[800] }}>
              <span>= Cost of goods sold</span><span>{inr(cogs)}</span>
            </p>
            <p className="flex justify-between pt-1"><span>Net sales</span><span>{inr(v.sales)}</span></p>
            <motion.p
              key={gp}
              initial={{ scale: 0.96, opacity: 0.6 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mt-1 flex justify-between rounded-lg px-2 py-1.5 font-black text-white"
              style={{ background: loss ? "linear-gradient(135deg,#e11d48,#9f1239)" : FA_BTN_GRAD }}
            >
              <span>{loss ? "= Gross LOSS" : "= Gross PROFIT"}</span>
              <span>₹{inr(Math.abs(gp))}</span>
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FaGrossProfitLabSection() {
  return (
    <Section id="gp-lab">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHead
          eyebrow="Module 4 · Worked examples"
          title={
            <>
              Six examples — then{" "}
              <span className="grad-emerald">drive the lab</span>
            </>
          }
          lead="The lecture's own numbers, from the simplest trading result to a full T-format trading account — and a lab that recomputes the ladder as you type."
        />

        <div className="grid gap-3 md:grid-cols-2">
          <FaReadStep n="01" title="Examples 1 & 2 — returns, then stock" sub="Purchases 30,000 · returns 5,000 · sales 40,000 · returns 5,000" />
          <FaReadStep n="02" title="Examples 3 & 4 — the full ladder" sub="OS 10,000 · purchases 40,000 · returns 5,000 · sales 60,000 · SR 10,000 · CS 15,000" />
        </div>
        <FaEq label="Examples 1 → 4, compact">{`EX 1   Net sales 35,000 \u2212 Net purchases 25,000                    = GP \u20B910,000

EX 2   \u2026 with closing stock 5,000:  COGS = 25,000 \u2212 5,000 = 20,000
       GP = 35,000 \u2212 20,000                                        = GP \u20B915,000

EX 3   Net sales 50,000;  COGS = 10,000 + 35,000 \u2212 15,000 = 30,000
       GP = 50,000 \u2212 30,000                                        = GP \u20B920,000

EX 4   \u2026 plus wages/carriage of 5,000 to bring goods in:
       COGS = 30,000 + 5,000 = 35,000;  GP = 50,000 \u2212 35,000       = GP \u20B915,000`}</FaEq>
        <div className="mt-3">
          <FaCallout kind="why" title="The 'merchandise' footnote">
            The term <b>&ldquo;merchandise&rdquo;</b> is also used for the term{" "}
            <b>&ldquo;goods&rdquo;</b> — same thing, older word. And note what Example 4 taught:
            expenses incurred to bring goods to the shop are not operating expenses — they are{" "}
            <b>part of the cost of goods sold</b>.
          </FaCallout>
        </div>

        <FaReadStep n="03" title="Example 5 — working backwards to closing stock" sub="First year: 15,000 unsold · next year: purchases 1,50,000 · direct expenses 10,000 · COGS 1,45,000" />
        <FaEq label="Backward, then the full account">{`Cost of unsold goods at the beginning of the year      15,000
Purchases during the year                           1,50,000
Direct Expenses                                        10,000
                                                     \u2014\u2014\u2014\u2014\u2014\u2014
                                                     1,75,000
Less: Cost of sold goods during the year            1,45,000
Closing Stock                                          30,000

Trading account (net sales 2,00,000):
Dr: 15,000 + 1,50,000 + 10,000 + GP 55,000 = 2,30,000
Cr: Sales 2,00,000 + Closing stock 30,000  = 2,30,000  \u2713`}</FaEq>

        <FaReadStep n="04" title="Example 6 — a complete trading account" sub="M/s. ABC Traders · for the year ended 31st March 2022" />
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
            <p className="border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-2 text-center font-mono text-[.66rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
              In the books of M/s. ABC Traders · trading account · ₹
            </p>
            <table className="warm-table min-w-[600px]">
              <thead>
                <tr>
                  <th>Particulars (Dr)</th>
                  <th className="w-28 text-right">₹</th>
                  <th>Particulars (Cr)</th>
                  <th className="w-28 text-right">₹</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>To Opening inventory</td><td className="text-right font-mono">1,00,000</td>
                  <td>By Sales</td><td className="text-right font-mono">11,00,000</td>
                </tr>
                <tr>
                  <td>To Purchases <span className="text-[.7rem] text-[#8a6b45]">(6,72,000 − 72,000)</span></td><td className="text-right font-mono">6,00,000</td>
                  <td className="pl-6 text-[.78rem] italic">Less: Returns inward (1,00,000)</td><td className="text-right font-mono">10,00,000</td>
                </tr>
                <tr>
                  <td>To Carriage inwards</td><td className="text-right font-mono">30,000</td>
                  <td>By Closing inventory</td><td className="text-right font-mono">2,00,000</td>
                </tr>
                <tr>
                  <td>To Wages</td><td className="text-right font-mono">50,000</td>
                  <td /></tr>
                <tr>
                  <td className="font-extrabold" style={{ color: FA_G[800] }}>To Gross profit c/d</td>
                  <td className="text-right font-mono font-black" style={{ color: FA_G[800] }}>4,20,000</td>
                  <td />
                  <td />
                </tr>
                <tr>
                  <td className="font-extrabold" style={{ color: FA_G[800] }}>Total</td>
                  <td className="text-right font-mono font-black" style={{ color: FA_G[800] }}>12,00,000</td>
                  <td className="font-extrabold" style={{ color: FA_G[800] }}>Total</td>
                  <td className="text-right font-mono font-black" style={{ color: FA_G[800] }}>12,00,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>
        <div className="mt-3">
          <FaCallout kind="insight" title="Read the account like its author">
            Net sales 10,00,000; the cost side stacks 1,00,000 + 6,00,000 + 30,000 + 50,000 =
            7,80,000 minus the closing stock of 2,00,000 → COGS 5,80,000. Gross profit is the{" "}
            <b>balancing figure</b>: 10,00,000 + 2,00,000 − 7,80,000 = 4,20,000. The totals
            agreeing at 12,00,000 is the double-entry system signing its own work.
          </FaCallout>
        </div>

        <FaReadStep n="05" title="The gross profit lab" sub="Five figures, one ladder — try the lecture's presets or your own" />
        <Reveal>
          <GrossProfitLab />
        </Reveal>

        <div className="mt-8">
          <Takeaways
            items={[
              <>The trading account answers <b>did trading pay?</b> — its result is <b>gross</b> profit or gross loss.</>,
              <>COGS = opening stock + net purchases + <b>direct expenses</b> − closing stock.</>,
              <>Closing stock: valued at <b>cost or NRV, whichever is lower</b>; credit side of the trading account AND an asset in the balance sheet.</>,
              <>Gross profit is the <b>balancing figure</b> — Example 6&rsquo;s 4,20,000 closed both sides at 12,00,000.</>,
              <>The lab is the exam in miniature: two questions — <b>which figures enter the ladder</b>, and <b>can you close the account</b>?</>,
            ]}
          />
        </div>

        <div className="mt-8">
          <FaQuiz
            source="Capstone"
            q="ABC Traders: carriage inwards ₹30,000 and office rent ₹80,000. Which enters the trading account's cost side?"
            options={[
              "Both — all expenses are direct",
              "Only carriage inwards — it brought the goods to the shop; office rent waits for the P&L",
              "Only office rent — carriage is a selling cost",
              "Neither — both go to the balance sheet",
            ]}
            answer={1}
            explain="Expenses incurred to bring goods into the shop (carriage inwards, wages for transportation, brokerage on purchases) increase the cost of goods sold and belong in the trading account. Office rent has nothing to do with getting the goods there — it is an indirect expense, destined for the Profit & Loss account."
          />
        </div>

        <div className="mt-10">
          <FaCallout kind="story" title="The course, in one breath">
            Five openings asked what a business really earns. Four assumptions set the rules.
            The dual aspect gave every rupee two stories. The journal wrote them down, the
            ledger grouped them, the trial balance checked the arithmetic, the adjustments made
            the periods honest — and the final accounts turned the whole pipeline into two
            answers: <b>did we profit, and what do we own and owe?</b> That is Financial
            Accounting — one equation, kept true from the first ₹10,000 to the last ₹12,00,000.
          </FaCallout>
        </div>
      </div>
    </Section>
  );
}
