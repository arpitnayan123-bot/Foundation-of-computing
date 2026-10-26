"use client";

/* ============================================================
   Financial Accounting — PART 7 (shelf 03 of The Atlas)
   Suspense & the error taxonomy (L15), cash vs accrual basis
   and the matching principle (L16), and the adjusting lab —
   Vogue's six adjusting entries + Tech Mahindra (L19).
   ============================================================ */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Calendar,
  Check,
  CircleDollarSign,
  Clock,
  EyeOff,
  FileWarning,
  Hourglass,
  Landmark,
  Package,
  Search,
  Sigma,
  Split,
  TrendingDown,
  TrendingUp,
  Warehouse,
} from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { FA_BTN_GRAD, FA_G, FaCallout, FaEq, FaQuiz, FaReadStep } from "./FaParts1";

/* ============================================================
   CHAPTER — SUSPENSE & ERRORS (Lecture 15)
   ============================================================ */

const ERRORS = [
  {
    t: "Error of principle",
    ex: "An executive desk (₹40,000) debited to office repairs instead of furniture — capital expenditure treated as revenue expense.",
    ok: true,
    d: "Violates a classification principle, but debit equals credit — the trial balance still agrees.",
    icon: FileWarning,
  },
  {
    t: "Error of omission",
    ex: "A ₹25,000 cloud-server invoice paid but never recorded in the journal at all.",
    ok: true,
    d: "Both debit and credit are missing together — nothing moves. Completely invisible to the trial balance.",
    icon: EyeOff,
  },
  {
    t: "Error of commission",
    ex: "A cash sale of ₹85,000 correctly credited to sales — but debited to bank as ₹35,000.",
    ok: false,
    d: "Only ONE side is wrong, so the columns fall apart — this is what the ₹50,000 suspense gap catches.",
    icon: Search,
  },
  {
    t: "Compensating error",
    ex: "One account understated by ₹2,000; another overstated by exactly ₹2,000.",
    ok: true,
    d: "Two wrongs cancel — the trial balance agrees despite two mistakes existing.",
    icon: Split,
  },
];

export function FaSuspenseSection() {
  const [picked, setPicked] = useState<number | null>(null);
  return (
    <Section id="suspense">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 15 · Trial balance, continued"
          title={
            <>
              A balanced trial balance is <span style={{ color: FA_G[700] }}>not a clean chit</span>.
            </>
          }
          lead="Murali's books totalled ₹1,62,250 on both sides — arithmetic accuracy. But errors of principle, omission and compensation can all hide behind agreeing columns. When the columns refuse to meet, the suspense account buys time."
        />

        <FaReadStep n="01" title="The suspense account" sub="A temporary holding bay that lets reporting deadlines survive" />
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <FaEq label="When the columns disagree">{`Debit total  >  Credit total  by ₹X
  → Credit the difference:
     "Suspense A/c                Cr.  X"

Credit total > Debit total by ₹X
  → Debit the difference:
     "Suspense A/c            Dr.  X"

The cycle continues. When the errors are
found and rectified, suspense closes to zero
and leaves the books.`}</FaEq>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col gap-3">
              <div className="card-warm p-5">
                <p className="text-[.9rem] font-extrabold text-[#3e2c1d]">Why it exists</p>
                <p className="mt-2 text-[.84rem] leading-relaxed text-[#2b2014]">
                  Reporting cannot wait for a forensic hunt. The suspense account bridges the gap between unequal
                  totals while the errors are being found — a temporary account, never a home. Once the errors are
                  located and rectified, it is closed and removed.
                </p>
              </div>
              <div className="card-warm p-5">
                <p className="text-[.9rem] font-extrabold text-[#3e2c1d]">The baseline proof</p>
                <p className="mt-2 text-[.84rem] leading-relaxed text-[#2b2014]">
                  Prepared from Murali&apos;s ledger balances, both sides agreed at <b>₹1,62,250</b> — revenue (credit:
                  sales), expenses (debit: interest paid, office rent, audit fees), assets (debit: land), liabilities
                  (credit: bank overdraft, creditors). Classification is everything.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <FaReadStep n="02" title="Four errors the columns cannot see" sub="Click each — learn whether the trial balance would catch it" />
        <div className="grid gap-3 md:grid-cols-2">
          {ERRORS.map((e, i) => {
            const Icon = e.icon;
            const on = picked === i;
            return (
              <Reveal key={e.t} delay={i * 0.05}>
                <button
                  type="button"
                  onClick={() => setPicked(on ? null : i)}
                  aria-pressed={on}
                  className={`h-full w-full rounded-2xl border p-5 text-left transition-all duration-300 ${
                    on
                      ? "border-[#059669] bg-[#ecfdf5] shadow-[0_16px_36px_-18px_rgba(5,150,105,.55)]"
                      : "border-[#e0ece6] bg-[#fffdf9] hover:border-[#a9dcc4]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-2">
                      <Icon className="h-4.5 w-4.5 h-[18px] w-[18px]" style={{ color: e.ok ? FA_G[700] : "#b3402c" }} />
                      <span className="text-[.95rem] font-extrabold text-[#3e2c1d]">{e.t}</span>
                    </span>
                    <span
                      className="rounded-full px-2 py-0.5 text-[.6rem] font-black uppercase tracking-[.12em]"
                      style={{ background: e.ok ? "#dbeafe00" : "#fbeae5", color: e.ok ? FA_G[700] : "#b3402c", border: e.ok ? `1px solid ${FA_G.border}` : "1px solid #e8a896" }}
                    >
                      {e.ok ? "TB still agrees" : "TB breaks"}
                    </span>
                  </div>
                  <p className="mt-2 text-[.84rem] leading-relaxed text-[#2b2014]">{e.ex}</p>
                  <AnimatePresence initial={false}>
                    {on ? (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 overflow-hidden text-[.8rem] font-semibold leading-relaxed"
                        style={{ color: e.ok ? FA_G[700] : "#b3402c" }}
                      >
                        {e.d}
                      </motion.p>
                    ) : null}
                  </AnimatePresence>
                </button>
              </Reveal>
            );
          })}
        </div>

        <FaReadStep n="03" title="Case file — ABC Startup" sub="A ₹50,000 gap, three errors, one closure" />
        <Reveal>
          <FaEq label="The diagnosis">{`Trial balance refuses to agree — a ₹50,000 gap,
parked in suspense to meet the deadline.

① Omission      ₹25,000 cloud-server invoice paid,
                never recorded      → NO effect on TB
                                    (both sides missing)

② Principle     ₹40,000 executive desk debited to
                office repairs      → NO effect on TB
                                    (debit still recorded)

③ Commission    cash sale ₹85,000 credited to sales
                correctly — but bank debited ₹35,000
                                    → ₹50,000 gap ✓ FOUND

The fix: record ①, reclassify ② (debit furniture,
credit repairs), and ③ already explains suspense.
Suspense closes. Books move on.`}</FaEq>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FaQuiz
            source="Lecture 15 · check yourself"
            q="Capital expenditure recorded as revenue expense — what happens to the trial balance?"
            options={[
              "It breaks by the amount involved",
              "It still agrees — this error of principle hits both sides equally",
              "It breaks by double the amount",
              "It depends on the depreciation method",
            ]}
            answer={1}
            explain="An error of principle misclassifies but still records a debit and an equal credit — so the columns agree. That is precisely why a balanced trial balance is arithmetic assurance only, never proof of principle."
          />
          <FaQuiz
            source="Lecture 15 · check yourself"
            q="Debit total ₹X, credit total ₹X − 50,000. Where does suspense go?"
            options={[
              "Debited with ₹50,000",
              "Credited with ₹50,000",
              "Split ₹25,000 each side",
              "Nowhere — omit the difference",
            ]}
            answer={1}
            explain="The SHORT side receives the suspense entry. If credit is lower by ₹50,000, suspense is credited with ₹50,000 to equalize. (Debit total lesser → suspense debited.) When the errors are found, the account closes and leaves the books."
          />
        </div>

        <div className="mt-10">
          <Takeaways
            items={[
              <>Trial balance = the third step: <b>journal → ledger → trial balance</b>; the bridge to final statements.</>,
              <>Agreement proves <b>arithmetic</b> accuracy only — principle, omission and compensating errors slip through.</>,
              <>The <b>suspense account</b> parks the difference on the shorter side until errors are found, then closes.</>,
              <>Error of <b>commission</b> (one side wrong) is the kind the gap actually catches — like ABC&apos;s ₹50,000.</>,
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER — BASIS OF ACCOUNTING (Lecture 16)
   ============================================================ */

function UpfrontSlider() {
  const [months, setMonths] = useState(1);
  const earned = Math.round((1000 * months) / 12);
  return (
    <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
      <div className="flex flex-wrap items-center gap-2 border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3">
        <Calendar className="h-4 w-4" style={{ color: FA_G[700] }} />
        <span className="font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
          The ₹1,000 question
        </span>
        <span className="text-[.7rem] font-semibold text-muted-warm">cash received Jan 1 · service runs 12 months</span>
      </div>
      <div className="px-4 py-5 sm:px-6">
        <div className="flex items-baseline justify-between">
          <label htmlFor="fa-months-earned" className="text-[.8rem] font-bold text-[#3e2c1d]">
            Months of service delivered
          </label>
          <span className="font-mono text-[.9rem] font-black" style={{ color: FA_G[800] }}>{months} / 12</span>
        </div>
        <input
          id="fa-months-earned"
          type="range"
          min={0}
          max={12}
          step={1}
          value={months}
          onChange={(e) => setMonths(Number(e.target.value))}
          className="mt-2 w-full accent-[#047857]"
          aria-valuetext={`${months} months delivered`}
        />
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          <div className="rounded-xl border border-[#e8a896] bg-[#fbeae5] p-3">
            <p className="text-[.66rem] font-black uppercase tracking-[.16em] text-[#b3402c]">Cash basis says</p>
            <p className="mt-1 font-mono text-[1.15rem] font-black text-[#7c2d12]">₹1,000</p>
            <p className="mt-1 text-[.72rem] leading-snug text-[#7c2d12]">profit on January 1 — the moment cash arrived. All of it.</p>
          </div>
          <div className="rounded-xl border p-3" style={{ borderColor: FA_G.border, background: FA_G.wash }}>
            <p className="text-[.66rem] font-black uppercase tracking-[.16em]" style={{ color: FA_G[700] }}>Accrual basis says</p>
            <p className="mt-1 font-mono text-[1.15rem] font-black" style={{ color: FA_G[800] }}>₹{earned.toLocaleString("en-IN")}</p>
            <p className="mt-1 text-[.72rem] leading-snug text-[#2b2014]">
              earned so far — ₹{earned.toLocaleString("en-IN")} of revenue matched against the cost of delivering it. The rest is a liability (unearned).
            </p>
          </div>
        </div>
        <p className="mt-3 text-[.78rem] leading-relaxed text-muted-warm">
          Is this ₹1,000 of profit on January 1? <b>No</b> — the revenue must be matched with the expenses of delivering
          twelve months of service. That single sentence is the whole lecture.
        </p>
      </div>
    </div>
  );
}

function ReplacementCost() {
  const [price, setPrice] = useState(30);
  const hist = 20;
  const repl = 25;
  const operating = Math.max(price - repl, 0);
  const holding = Math.max(repl - hist, 0);
  return (
    <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
      <div className="flex flex-wrap items-center gap-2 border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3">
        <Sigma className="h-4 w-4" style={{ color: FA_G[700] }} />
        <span className="font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
          Operating skill vs market luck
        </span>
        <span className="text-[.7rem] font-semibold text-muted-warm">cost ₹20/kg · replacement ₹25/kg · drag the selling price</span>
      </div>
      <div className="px-4 py-5 sm:px-6">
        <div className="flex items-baseline justify-between">
          <label htmlFor="fa-sell" className="text-[.8rem] font-bold text-[#3e2c1d]">
            Selling price per kg
          </label>
          <span className="font-mono text-[.95rem] font-black" style={{ color: FA_G[800] }}>₹{price}</span>
        </div>
        <input
          id="fa-sell"
          type="range"
          min={20}
          max={40}
          step={1}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="mt-2 w-full accent-[#047857]"
          aria-valuetext={`selling price ${price} rupees`}
        />
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          <div className="rounded-xl border p-3" style={{ borderColor: FA_G.border, background: "#f2faf6" }}>
            <p className="text-[.68rem] font-black uppercase tracking-[.14em]" style={{ color: FA_G[700] }}>Traditional lens</p>
            <p className="mt-1 font-mono text-[1.05rem] font-black text-[#1d4433]">₹{price - hist} profit</p>
            <p className="mt-1 text-[.72rem] leading-snug text-[#2b2014]">₹{price} − ₹{hist} historical cost. Simple, auditable — all profit treated as operating performance.</p>
          </div>
          <div className="rounded-xl border border-[#e3c98f] bg-[#fbf4e4] p-3">
            <p className="text-[.68rem] font-black uppercase tracking-[.14em] text-[#8a5a10]">Replacement lens</p>
            <p className="mt-1 font-mono text-[1.05rem] font-black text-[#7c2d12]">
              ₹{operating} operating + ₹{holding} holding
            </p>
            <p className="mt-1 text-[.72rem] leading-snug text-[#5c4a22]">
              ₹{price} − ₹{repl} replacement = operating skill; ₹{repl} − ₹{hist} = holding gain from inflation. Same total, honest sources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FaBasisSection() {
  return (
    <Section id="basis">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 16 · Basis of accounting"
          title={
            <>
              Cash received is not <span style={{ color: FA_G[700] }}>profit earned</span>.
            </>
          }
          lead="Two ways to keep books: record cash as it moves, or record what is earned and incurred. One of them is honest about performance — and the matching principle decides which period owns which cost."
        />

        <FaReadStep n="01" title="The opening case" sub="A software company, ₹1,000 upfront, twelve months of service" />
        <UpfrontSlider />

        <FaReadStep n="02" title="The two bases, face to face" sub="Where each one lives and what it costs you" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-[#e8a896] bg-[#fbeae5] p-5">
              <p className="flex items-center gap-2 text-[.98rem] font-extrabold text-[#7c2d12]">
                <CircleDollarSign className="h-4.5 w-4.5 h-[18px] w-[18px]" /> Cash basis
              </p>
              <p className="mt-2 text-[.84rem] leading-relaxed text-[#5c2a14]">
                Record revenue when cash is received; record expenses when cash is paid. Profit = cash revenues − cash
                payments. Accrued income, prepaid expenses, outstanding costs — none of it exists here.
              </p>
              <div className="mt-3 grid gap-1.5 text-[.78rem]">
                <p className="font-bold text-[#7c2d12]">Where it lives</p>
                <p className="text-[#5c2a14]">Small personal businesses, non-trading entities (clubs, charitable trusts), receipt-and-payment accounts.</p>
                <p className="font-bold text-[#7c2d12]">For</p>
                <p className="text-[#5c2a14]">Simple, objective, no adjusting entries, suits cash-heavy shops.</p>
                <p className="font-bold text-[#7c2d12]">Against</p>
                <p className="text-[#5c2a14]">No fair picture of performance; ignores matching; no capital/revenue distinction; profit can be manipulated by timing cash — and reporting turns inconsistent.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border p-5" style={{ borderColor: FA_G.border, background: "#f2faf6" }}>
              <p className="flex items-center gap-2 text-[.98rem] font-extrabold" style={{ color: FA_G[800] }}>
                <Clock className="h-4.5 w-4.5 h-[18px] w-[18px]" /> Accrual basis
              </p>
              <p className="mt-2 text-[.84rem] leading-relaxed text-[#1d4433]">
                Record revenues and expenses in the period they become due — irrespective of cash. Credit sales count
                in the period of sale; expenses count when the service is used. Outstanding costs, prepaid expenses,
                accrued earnings and advance income are all recorded.
              </p>
              <div className="mt-3 grid gap-1.5 text-[.78rem]">
                <p className="font-bold" style={{ color: FA_G[800] }}>Where it lives</p>
                <p className="text-[#1d4433]">Commercial institutions everywhere — the most widely accepted basis.</p>
                <p className="font-bold" style={{ color: FA_G[800] }}>For</p>
                <p className="text-[#1d4433]">Accurate period profit; true financial position; reflects all relevant transactions.</p>
                <p className="font-bold" style={{ color: FA_G[800] }}>Against</p>
                <p className="text-[#1d4433]">Lengthy, complex procedures; many adjustments through the year; quick profit checks are hard.</p>
              </div>
            </div>
          </Reveal>
        </div>

        <FaReadStep n="03" title="The matching principle" sub="When to match, and what to match" />
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="card-warm h-full p-5">
              <p className="text-[.9rem] font-extrabold text-[#3e2c1d]">When — regular intervals, not the end of life</p>
              <p className="mt-2 text-[.84rem] leading-relaxed text-[#2b2014]">
                Waiting until the business closes would make every number obsolete — and tax demands profit year by
                year. So business life is chopped into intervals, typically twelve months, and each period must carry
                its own matched result.
              </p>
              <p className="mt-3 rounded-xl px-3 py-2 text-[.78rem] leading-relaxed" style={{ background: FA_G.wash, color: FA_G[800] }}>
                Realization: a machine built in December, shipped in March, paid for in May — revenue is recognized in
                <b> March</b>, when ownership transfers. Not December, not May.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card-warm h-full p-5">
              <p className="text-[.9rem] font-extrabold text-[#3e2c1d]">What — three buckets of expense</p>
              <div className="mt-2 grid gap-2">
                {[
                  ["Direct (product costs)", "Raw materials, direct wages, machinery — matched to the specific revenue they create."],
                  ["Indirect (period costs)", "Rent, administrative salaries — matched to the period in which they are incurred."],
                  ["Losses", "Warehouse fire, theft — no product, no period, no future revenue. Recognized immediately."],
                ].map(([t, d]) => (
                  <div key={t} className="rounded-xl border border-[#e4f1ea] bg-white px-3 py-2">
                    <p className="text-[.8rem] font-extrabold text-[#3e2c1d]">{t}</p>
                    <p className="text-[.74rem] leading-snug text-muted-warm">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-4">
          <FaCallout kind="insight" title="Two distinctions worth keeping">
            <b>Expenditure vs expense:</b> expenditure is any disbursement; only the portion consumed this period to
            generate revenue is an expense. <b>Revenue vs cash:</b> credit sales create receivables, not receipts —
            and manufacturing creates inventory, not revenue. Exceptions exist where a market is settled (gold is
            recognized when mined) and where contracts span years (revenue as work is certified).
          </FaCallout>
        </Reveal>

        <FaReadStep n="04" title="Operating skill vs market luck" sub="The replacement-cost lens on the same ₹10" />
        <ReplacementCost />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FaQuiz
            source="Lecture 16 · check yourself"
            q="Under the accrual basis, a machine built in December, shipped in March and paid for in May earns revenue in…"
            options={[
              "December — when production happened",
              "March — when ownership transferred",
              "May — when cash arrived",
              "Split across all three months",
            ]}
            answer={1}
            explain="Realization: revenue is recognized when the goods are furnished and ownership passes — March. Manufacturing creates inventory, not revenue; cash collection is a separate event entirely."
          />
          <FaQuiz
            source="Lecture 16 · check yourself"
            q="You buy stock at ₹20/kg, replace it today at ₹25/kg, and sell at ₹30/kg. Under the replacement-cost approach, how much of the ₹10 is holding gain?"
            options={[
              "₹10 — all of it",
              "₹5 — replacement cost minus historical cost",
              "₹2 — one fifth of the profit",
              "₹0 — holding gains are never recognized",
            ]}
            answer={1}
            explain="Replacement lens: ₹30 − ₹25 = ₹5 operating profit (skill); ₹25 − ₹20 = ₹5 holding gain (inflation while you held the stock). The traditional lens shows the same ₹10 but calls it all operating — which flatters the manager and hides the market's contribution."
          />
        </div>

        <div className="mt-10">
          <Takeaways
            items={[
              <>Cash basis: simple but <b>blind to performance</b> — profit moves with cash timing.</>,
              <>Accrual basis: record when <b>due</b>, not when paid — the basis commercial institutions use.</>,
              <>Matching: revenue is matched with the expenses of <b>the same period</b> — realization decides when.</>,
              <>Expense buckets: <b>direct</b> (product), <b>indirect</b> (period), <b>losses</b> (immediately).</>,
              <>Replacement-cost thinking splits <b>operating skill</b> from <b>holding gain</b> — both sum to the same profit.</>,
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER — THE ADJUSTING LAB (Lecture 19)
   ============================================================ */

const VOGUE_ENTRIES = [
  {
    n: "01",
    t: "Prepaid insurance consumed",
    story: "On June 6 the company paid ₹720 for twelve months of insurance.",
    calc: "720 ÷ 12 = 60 for one month",
    entry: "Insurance Expense A/c        Dr.      60\n    To Prepaid Insurance A/c            60",
    why: "One month of protection is consumed — shift it from the balance sheet to the income statement.",
  },
  {
    n: "02",
    t: "Office supplies used",
    story: "The supplies account shows ₹3,700. The June 30 physical count finds only ₹2,900.",
    calc: "3,700 − 2,900 = 800 consumed",
    entry: "Office Supplies Expense A/c  Dr.     800\n    To Office Supplies A/c              800",
    why: "The used ₹800 stopped being an asset the day it was consumed.",
  },
  {
    n: "03",
    t: "Depreciation on equipment",
    story: "Equipment bought June 4 for ₹3,000, useful life 5 years (60 months).",
    calc: "3,000 ÷ 60 = 50 per month",
    entry: "Depreciation Expense A/c     Dr.      50\n    To Accumulated Depreciation A/c      50",
    why: "Accumulated depreciation — a contra-asset — preserves the original cost while the value used shows up as expense.",
  },
  {
    n: "04",
    t: "Unearned revenue earned",
    story: "A customer's advance sat in unearned revenue. Design work worth ₹900 is now complete.",
    calc: "obligation fulfilled → revenue",
    entry: "Unearned Revenue A/c         Dr.     900\n    To Revenue from Services A/c        900",
    why: "The liability dies the moment the performance obligation is satisfied.",
  },
  {
    n: "05",
    t: "Salaries accrued",
    story: "An employee hired June 21 has worked 10 days by June 30, at ₹1,500 a month.",
    calc: "1,500 ÷ 30 × 10 = 500",
    entry: "Salaries Expense A/c         Dr.     500\n    To Salaries Payable A/c             500",
    why: "The services are received; the cash is not yet paid. Both expense and liability exist on June 30.",
  },
  {
    n: "06",
    t: "Unbilled revenue",
    story: "A design was completed and delivered — but the client has not yet been billed. Fee: ₹700.",
    calc: "earned, not billed → an asset",
    entry: "Unbilled Revenue A/c         Dr.     700\n    To Revenue from Services A/c        700",
    why: "Revenue is recognized when earned, not when invoiced — the right to bill is an asset.",
  },
];

export function FaAdjustingLabSection() {
  const [step, setStep] = useState(0);
  const e = VOGUE_ENTRIES[step];
  return (
    <Section id="adjusting-lab">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 19 · The cycle, in one case"
          title={
            <>
              Six adjusting entries — <span style={{ color: FA_G[700] }}>the whole cycle in one sitting</span>.
            </>
          }
          lead="Journal → ledger → trial balance → adjusting entries → adjusted trial balance → statements. The Vogue Company case runs the full pipeline: before any statement may speak, six adjustments catch the books up with reality."
        />

        <FaReadStep n="01" title="The pipeline" sub="Where adjusting entries sit — between the trial balance and the statements" />
        <div className="flex flex-wrap items-center justify-center gap-1.5 rounded-2xl border border-[#c7e5d6] bg-[#fffdf9] p-4">
          {["Journal", "Ledger", "Trial balance", "Adjusting entries", "Adjusted TB", "Statements"].map((s, i) => (
            <React.Fragment key={s}>
              <span
                className={`rounded-xl px-3 py-2 text-[.74rem] font-extrabold ${
                  i === 3 ? "text-white" : "border border-[#e4f1ea] bg-white text-[#3e2c1d]"
                }`}
                style={i === 3 ? { background: FA_BTN_GRAD, boxShadow: "0 8px 20px -8px rgba(4,120,87,.5)" } : undefined}
              >
                {s}
              </span>
              {i < 5 ? <ArrowRight className="h-3.5 w-3.5 text-[#9db8a9]" /> : null}
            </React.Fragment>
          ))}
        </div>

        <FaReadStep n="02" title="Vogue's six adjustments" sub="Step through each — story, computation, entry, reason" />
        <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
          <div className="grid grid-cols-6 border-b border-[#e4f1ea]">
            {VOGUE_ENTRIES.map((v, i) => (
              <button
                key={v.n}
                type="button"
                onClick={() => setStep(i)}
                aria-pressed={step === i}
                aria-label={`Adjustment ${v.n}: ${v.t}`}
                className={`flex h-11 items-center justify-center font-mono text-[.78rem] font-black transition-colors ${
                  step === i ? "text-white" : "text-[#7d9a8b] hover:bg-[#f4faf7]"
                }`}
                style={step === i ? { background: FA_BTN_GRAD } : undefined}
              >
                {v.n}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-[1fr_1.15fr]">
            <div className="border-b border-[#e4f1ea] p-5 md:border-b-0 md:border-r">
              <p className="font-mono text-[.62rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
                Adjustment {e.n} — the story
              </p>
              <p className="mt-2 text-[1.05rem] font-extrabold leading-snug text-[#3e2c1d]">{e.t}</p>
              <p className="mt-2 text-[.86rem] leading-relaxed text-[#2b2014]">{e.story}</p>
              <p className="mt-3 rounded-xl px-3 py-2 font-mono text-[.8rem] font-bold" style={{ background: FA_G.wash, color: FA_G[800] }}>
                {e.calc}
              </p>
              <p className="mt-3 text-[.78rem] leading-relaxed text-muted-warm">{e.why}</p>
            </div>
            <div className="p-5">
              <p className="font-mono text-[.62rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G.gold }}>
                The adjusting entry
              </p>
              <AnimatePresence mode="wait">
                <motion.pre
                  key={e.n}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -14 }}
                  transition={{ duration: 0.28 }}
                  className="mt-2 overflow-x-auto rounded-xl border border-[#e8d3ac] bg-[#faf0da] px-4 py-3 font-mono text-[.8rem] leading-relaxed text-[#5c4a22]"
                >
                  {e.entry}
                </motion.pre>
              </AnimatePresence>
              <div className="mt-3 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep((step + VOGUE_ENTRIES.length - 1) % VOGUE_ENTRIES.length)}
                  className="rounded-lg border border-[#e4f1ea] bg-white px-3 py-1.5 text-[.74rem] font-bold text-[#3e2c1d] hover:border-[#a9dcc4]"
                >
                  ← Previous
                </button>
                <span className="font-mono text-[.66rem] font-bold text-[#9db8a9]">{step + 1} / {VOGUE_ENTRIES.length}</span>
                <button
                  type="button"
                  onClick={() => setStep((step + 1) % VOGUE_ENTRIES.length)}
                  className="rounded-lg px-3 py-1.5 text-[.74rem] font-bold text-white"
                  style={{ background: FA_BTN_GRAD }}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>

        <Reveal className="mt-4">
          <FaCallout kind="why" title="Why adjusting entries cannot be skipped">
            Three reasons: <b>efficiency</b> — nobody journals a supplies count every day; <b>expiration</b> — prepaid
            rent, insurance and depreciation burn down quietly over time; <b>the unrecorded</b> — utility bills and
            earned-but-unbilled fees exist even when the paperwork has not arrived. Skipping the adjustments
            overstates assets, understates expenses and revenues, and lies to every statement downstream.
          </FaCallout>
        </Reveal>

        <FaReadStep n="03" title="The real-world scale" sub="Tech Mahindra — deferral at ₹9,682 crore" />
        <Reveal>
          <div className="card-warm p-5">
            <p className="text-[.88rem] leading-relaxed text-[#2b2014]">
              A customer paid <b>₹9,682 million</b> for a long-term contract — but the company recognized only{" "}
              <b>₹2,005 million</b> as revenue that year, because that was the value of services actually provided.
              The remaining ₹7,677 million sat as deferred revenue: a liability, waiting to be earned. The same logic
              as Vogue&apos;s ₹900, at industrial scale.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FaQuiz
            source="Lecture 19 · check yourself"
            q="Supplies account ₹3,700; the physical count finds ₹2,900. The adjusting entry is…"
            options={[
              "Debit Office Supplies Expense ₹2,900; credit Office Supplies ₹2,900",
              "Debit Office Supplies Expense ₹800; credit Office Supplies ₹800",
              "Debit Office Supplies ₹800; credit Supplies Expense ₹800",
              "No entry — supplies are only adjusted at year-end",
            ]}
            answer={1}
            explain="Only what was CONSUMED becomes expense: 3,700 − 2,900 = 800. The entry shifts the used portion from asset to expense — leaving ₹2,900 as the correct asset on the balance sheet."
          />
          <FaQuiz
            source="Lecture 19 · check yourself"
            q="An employee hired June 21 works 10 days by June 30 at ₹1,500/month. Why does the company credit Salaries Payable ₹500?"
            options={[
              "Because the salary will be paid in cash next month",
              "Because services were received but not yet paid — an accrued expense",
              "To reduce next month's salary expense",
              "Because the payroll system requires it",
            ]}
            answer={1}
            explain="1,500 ÷ 30 × 10 = 500 accrued by June 30. The expense belongs to June (matching) even though cash leaves in July — so a liability, salaries payable, is booked. Before the adjustment, liabilities AND expenses were both understated."
          />
        </div>

        <div className="mt-10">
          <Takeaways
            items={[
              <>Adjusted TB = <b>unadjusted TB + adjusting entries</b> — the direct basis for the final statements.</>,
              <>Deferrals (cash first): <b>prepaid expenses</b>, <b>unearned revenues</b>. Accruals (cash later): <b>accrued revenues</b>, <b>accrued expenses</b>.</>,
              <>Accumulated depreciation is a <b>contra-asset</b> — it keeps the original cost visible.</>,
              <>Unbilled revenue is an <b>asset</b>; unearned revenue is a <b>liability</b> — earned vs received decides.</>,
              <>Tech Mahindra: ₹9,682 million in, <b>₹2,005 million</b> recognized — deferral at industrial scale.</>,
            ]}
          />
        </div>
      </div>
    </Section>
  );
}
