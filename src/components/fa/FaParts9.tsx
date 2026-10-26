"use client";

/* ============================================================
   Financial Accounting — PART 9 (shelf 03 of The Atlas)
   The cash flow statement opens: why the fourth pillar exists,
   Cathay Pacific's paradox, cash & equivalents, and the three
   activity families (L23). Then the structure and the two
   calculation methods — the Jaws Photo Plus ladder (L25).
   ============================================================ */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Banknote,
  Building2,
  Check,
  ChevronDown,
  CircleDollarSign,
  Equal,
  HandCoins,
  Landmark,
  Minus,
  Plane,
  Plus,
  Scale,
  Store,
  TrendingDown,
  TrendingUp,
  X,
} from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { FA_BTN_GRAD, FA_G, FaCallout, FaEq, FaQuiz, FaReadStep } from "./FaParts1";

/* ============================================================
   CHAPTER — THE FOURTH PILLAR (Lecture 23)
   ============================================================ */

const CASH_EQUIV_TEST = [
  { t: "A fixed deposit with 2-month maturity", ok: true, d: "Highly liquid, readily convertible, minimal risk — yes." },
  { t: "Equity shares of another company", ok: false, d: "Too volatile — the risk of value change is significant." },
  { t: "A 1-year fixed deposit", ok: false, d: "Maturity exceeds the short-term threshold." },
  { t: "A 1-year FD with 2 months remaining", ok: false, d: "Trick: maturity counts from ACQUISITION date, not from today. Still no." },
  { t: "Preference shares shortly before redemption", ok: true, d: "Near-certain conversion at a known value — yes." },
];

const ACTIVITY_ITEMS = [
  { t: "Cash from selling goods", a: "Operating" },
  { t: "Wages & salaries paid", a: "Operating" },
  { t: "Taxes paid to the government", a: "Operating" },
  { t: "Interest paid to lenders", a: "Operating" },
  { t: "Buying a photocopier for the shop", a: "Investing" },
  { t: "Buying shares of another company", a: "Investing" },
  { t: "Selling an old machine", a: "Investing" },
  { t: "Interest & dividends RECEIVED", a: "Investing" },
  { t: "Issuing equity shares", a: "Financing" },
  { t: "Taking a bank loan", a: "Financing" },
  { t: "Repaying a loan", a: "Financing" },
  { t: "Interest & dividends PAID", a: "Financing" },
];

function ActivitySorter() {
  const [idx, setIdx] = useState(0);
  const [flash, setFlash] = useState<{ cat: string; ok: boolean } | null>(null);
  const done = idx >= ACTIVITY_ITEMS.length;
  const item = done ? null : ACTIVITY_ITEMS[idx];

  function pick(cat: string) {
    if (!item) return;
    const ok = item.a === cat;
    setFlash({ cat, ok });
    if (ok) {
      setTimeout(() => {
        setFlash(null);
        setIdx((i) => i + 1);
      }, 420);
    } else {
      setTimeout(() => setFlash(null), 420);
    }
  }

  const buckets = [
    { t: "Operating", icon: Store, d: "principal revenue-generating activities", tone: FA_G[700] },
    { t: "Investing", icon: Building2, d: "buying & selling long-term assets", tone: FA_G.gold },
    { t: "Financing", icon: HandCoins, d: "raising & repaying capital", tone: "#7c2d12" },
  ] as const;

  return (
    <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
      <div className="flex flex-wrap items-center gap-2 border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3">
        <Scale className="h-4 w-4" style={{ color: FA_G[700] }} />
        <span className="font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
          The three-activity sorter
        </span>
        <span className="text-[.7rem] font-semibold text-muted-warm">{Math.min(idx, ACTIVITY_ITEMS.length)} / {ACTIVITY_ITEMS.length} classified</span>
      </div>
      <div className="px-4 py-5 sm:px-6">
        {!done ? (
          <>
            <AnimatePresence mode="wait">
              <motion.p
                key={item!.t}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                className="rounded-xl border border-[#e4f1ea] bg-white px-4 py-3 text-center text-[1rem] font-extrabold text-[#3e2c1d]"
              >
                {item!.t}
              </motion.p>
            </AnimatePresence>
            <div className="mt-3 grid gap-2 md:grid-cols-3">
              {buckets.map((b) => {
                const Icon = b.icon;
                const state = flash?.cat === b.t ? (flash.ok ? "ok" : "no") : null;
                return (
                  <button
                    key={b.t}
                    type="button"
                    onClick={() => pick(b.t)}
                    className={`rounded-xl border px-3 py-3 text-left transition-all duration-200 ${
                      state === "ok"
                        ? "border-[#059669] bg-[#ecfdf5]"
                        : state === "no"
                        ? "border-[#e8a896] bg-[#fbeae5]"
                        : "border-[#e0ece6] bg-white hover:border-[#059669] hover:bg-[#ecfdf5]"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="h-4 w-4" style={{ color: b.tone }} />
                      <span className="text-[.88rem] font-extrabold text-[#3e2c1d]">{b.t}</span>
                      {state === "ok" ? <Check className="ml-auto h-4 w-4 text-[#059669]" /> : null}
                      {state === "no" ? <X className="ml-auto h-4 w-4 text-[#b3402c]" /> : null}
                    </span>
                    <span className="mt-1 block text-[.7rem] leading-snug text-muted-warm">{b.d}</span>
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <div className="rounded-xl border p-4 text-center" style={{ borderColor: FA_G.border, background: FA_G.wash }}>
            <Check className="mx-auto h-6 w-6" style={{ color: FA_G[600] }} />
            <p className="mt-1 text-[.9rem] font-extrabold" style={{ color: FA_G[800] }}>
              All {ACTIVITY_ITEMS.length} sorted. Interest & dividends: received → investing; paid → financing.
            </p>
            <button
              type="button"
              onClick={() => setIdx(0)}
              className="mt-3 rounded-lg px-3 py-1.5 text-[.74rem] font-bold text-white"
              style={{ background: FA_BTN_GRAD }}
            >
              Run it again
            </button>
          </div>
        )}
        <p className="mt-3 text-[.72rem] leading-snug text-muted-warm">
          Industry twist: for a bank, lending is an <b>operating</b> activity — lending is the business. For everyone
          else, lending is investing.
        </p>
      </div>
    </div>
  );
}

export function FaCashflowIntroSection() {
  const [openTest, setOpenTest] = useState<number | null>(null);
  return (
    <Section id="cashflow-intro">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 23 · The fourth pillar"
          title={
            <>
              Where did the cash <span style={{ color: FA_G[700] }}>actually</span> come from — and where did it go?
            </>
          }
          lead="The income statement, balance sheet and retained earnings statement each leave the same question unanswered. The cash flow statement exists to answer it — and of all the statements, it is the most honest."
        />

        <FaReadStep n="01" title="What the other three cannot say" sub="Each statement has a blind spot" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { t: "Balance sheet", d: "Shows that equipment changed — not whether it was bought with cash or credit, nor where the cash came from." },
            { t: "Income statement", d: "Shows net income — computed on accrual, not cash. The actual cash generated by operations stays invisible." },
            { t: "Retained earnings", d: "Shows dividends declared — not whether they were actually PAID in cash during the period." },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-[#e8a896] bg-[#fbeae5] p-4">
                <p className="text-[.9rem] font-extrabold text-[#7c2d12]">{b.t}</p>
                <p className="mt-1.5 text-[.8rem] leading-relaxed text-[#5c2a14]">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-4">
          <FaCallout kind="story" title="Cathay Pacific — the paradox in one sentence">
            The airline purchased assets worth <b>HK$9.2 billion</b> while reporting an <b>HK$8.6 billion loss</b>.
            Neither the loss nor the balance sheet can explain how such purchases were financed. Only the cash flow
            statement can. (And remember Soleris from Lecture 4: 40% sales growth, and still unable to pay suppliers.)
          </FaCallout>
        </Reveal>

        <FaReadStep n="02" title="What counts as 'cash'?" sub="Cash in hand + demand deposits — and the equivalents test" />
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="card-warm h-full p-5">
              <p className="text-[.95rem] font-extrabold text-[#3e2c1d]">Cash & cash equivalents</p>
              <p className="mt-2 text-[.84rem] leading-relaxed text-[#2b2014]">
                Cash in hand and demand deposits are cash. <b>Cash equivalents</b> are short-term, highly liquid
                investments readily convertible into cash with minimal risk of value change — think maturities around
                <b> three months</b>. Firms deploy idle cash into such instruments, staying able to pull it back for
                operations.
              </p>
              <p className="mt-3 text-[.8rem] leading-relaxed text-muted-warm">
                Click each candidate — does it pass the test?
              </p>
              <div className="mt-2 grid gap-1.5">
                {CASH_EQUIV_TEST.map((c, i) => {
                  const isOpen = openTest === i;
                  return (
                    <button
                      key={c.t}
                      type="button"
                      onClick={() => setOpenTest(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className={`flex items-center justify-between gap-2 rounded-xl border px-3 py-2 text-left transition-colors ${
                        isOpen
                          ? c.ok
                            ? "border-[#059669] bg-[#ecfdf5]"
                            : "border-[#e8a896] bg-[#fbeae5]"
                          : "border-[#e4f1ea] bg-white hover:border-[#a9dcc4]"
                      }`}
                    >
                      <span className="text-[.8rem] font-bold text-[#3e2c1d]">{c.t}</span>
                      {isOpen ? (
                        c.ok ? <Check className="h-4 w-4 shrink-0 text-[#059669]" /> : <X className="h-4 w-4 shrink-0 text-[#b3402c]" />
                      ) : (
                        <span className="text-[.62rem] font-black uppercase tracking-wider text-[#9db8a9]">judge</span>
                      )}
                    </button>
                  );
                })}
              </div>
              <AnimatePresence mode="wait">
                {openTest !== null ? (
                  <motion.p
                    key={openTest}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 rounded-lg px-3 py-2 text-[.76rem] leading-snug"
                    style={{ background: FA_G.wash, color: CASH_EQUIV_TEST[openTest].ok ? FA_G[800] : "#7c2d12" }}
                  >
                    {CASH_EQUIV_TEST[openTest].d}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col gap-3">
              <div className="rounded-2xl border p-5" style={{ borderColor: FA_G.border, background: "#f2faf6" }}>
                <p className="text-[.9rem] font-extrabold" style={{ color: FA_G[800] }}>The three activity families</p>
                <div className="mt-2 grid gap-2 text-[.8rem] leading-relaxed text-[#1d4433]">
                  <p><b>Operating</b> — the principal revenue-generating activities: receipts from sales, interest and dividends received; payments to suppliers, employees, government (tax) and lenders (interest), insurers.</p>
                  <p><b>Investing</b> — acquiring and disposing of long-term assets: fixed assets, shares and debt instruments of other companies, advances and loans given; proceeds from their disposal, repayments, interest and dividends received.</p>
                  <p><b>Financing</b> — changes in the size and composition of capital: proceeds from issuing shares, debentures, loans; repayments, interest paid, dividends paid.</p>
                </div>
              </div>
              <div className="card-warm p-5">
                <p className="text-[.9rem] font-extrabold text-[#3e2c1d]">The non-cash trap</p>
                <p className="mt-1.5 text-[.82rem] leading-relaxed text-[#2b2014]">
                  Converting debt into equity reshapes the balance sheet — and moves no cash at all. Non-cash
                  transactions never appear on the cash flow statement.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <FaReadStep n="03" title="Sort the flows" sub="The lecture's own transactions — click the family" />
        <ActivitySorter />

        <FaReadStep n="04" title="Why net income ≠ operating cash" sub="Four reasons the two numbers part ways" />
        <div className="grid gap-3 md:grid-cols-2">
          {[
            { t: "Different bases", d: "Net income is accrual: revenue when earned, expenses when incurred. Operating cash counts only actual cash moving." },
            { t: "Non-cash expenses", d: "Depreciation and amortization cut profit but spend nothing — added back when converting to cash." },
            { t: "Working capital", d: "Receivables up: sales booked, cash not collected → cash flow falls. Payables up: expenses booked, cash not paid → cash flow rises." },
            { t: "Non-operating items", d: "Gains/losses on asset sales sit in profit, but the sale proceeds belong to investing — removed from operating." },
          ].map((r, i) => (
            <Reveal key={r.t} delay={i * 0.05}>
              <div className="card-warm h-full p-4">
                <p className="text-[.9rem] font-extrabold text-[#3e2c1d]">{r.t}</p>
                <p className="mt-1 text-[.82rem] leading-relaxed text-muted-warm">{r.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <FaCallout kind="insight" title="Who reads it, and why">
            Investors and creditors assess future cash flows and their timing; employees and creditors check whether
            salaries, debts and declared dividends can actually be paid; every user judges the <b>reliability of
            reported net income</b> by comparing accrual earnings with cash generation — and investing/financing lines
            explain why assets, liabilities and equity changed.
          </FaCallout>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FaQuiz
            source="Lecture 23 · check yourself"
            q="A company converts ₹50 lakh of debentures into equity shares. How does this appear on the cash flow statement?"
            options={[
              "As a financing inflow of ₹50 lakh",
              "As both an inflow and an outflow of ₹50 lakh",
              "It does not appear — no cash moved",
              "As an investing outflow",
            ]}
            answer={2}
            explain="Debt-to-equity conversion changes the capital structure entirely on paper — a balance-sheet transaction with zero cash movement. Only transactions involving actual cash appear on the statement."
          />
          <FaQuiz
            source="Lecture 23 · check yourself"
            q="Interest RECEIVED on investments and interest PAID on loans — where does each belong?"
            options={[
              "Both operating",
              "Received → investing; paid → financing",
              "Received → financing; paid → investing",
              "Both financing",
            ]}
            answer={1}
            explain="Returns on investments made (interest and dividends received) are investing inflows. The cost of financing (interest and dividends paid) belongs to financing. Memorize the pair — it recurs in every statement you will build."
          />
        </div>

        <div className="mt-10">
          <Takeaways
            items={[
              <>The fourth pillar answers what the other three cannot: <b>where cash came from, where it went</b>.</>,
              <>Cash = in hand + demand deposits; equivalents = short-term, liquid, <b>minimal risk</b> (~3-month maturity, counted from acquisition).</>,
              <>Three families: <b>operating</b> (the business), <b>investing</b> (the assets), <b>financing</b> (the capital).</>,
              <>NI ≠ operating cash: <b>accrual basis, non-cash items, working capital, non-operating items</b>.</>,
              <>Non-cash transactions — like debt-to-equity swaps — never appear.</>,
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER — STRUCTURE & THE TWO METHODS (Lecture 25)
   ============================================================ */

const JAWS_STEPS: { label: string; note: string; amt: number; sign: "+" | "-" | "=" }[] = [
  { label: "Net income", note: "the accrual starting point", amt: 73000, sign: "=" },
  { label: "Depreciation expense", note: "non-cash — add back", amt: 7000, sign: "+" },
  { label: "Gain on disposal of plant assets", note: "non-operating — remove (the ₹2,500 proceeds are investing)", amt: 2500, sign: "-" },
  { label: "Increase in accounts receivable", note: "sales booked, cash not collected — deduct", amt: 4000, sign: "-" },
  { label: "Decrease in accounts payable", note: "suppliers were paid down — cash left — deduct", amt: 3800, sign: "-" },
];

function JawsLadder() {
  const [shown, setShown] = useState(1);
  const last = JAWS_STEPS.length - 1;
  const running = JAWS_STEPS.slice(0, shown + 1).reduce((n, s) => (s.sign === "+" ? n + s.amt : s.sign === "-" ? n - s.amt : s.amt), 0);
  const complete = shown === last;
  return (
    <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
      <div className="flex flex-wrap items-center gap-2 border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3">
        <Banknote className="h-4 w-4" style={{ color: FA_G[700] }} />
        <span className="font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
          Jaws Photo Plus — the reconciliation ladder
        </span>
        <span className="text-[.7rem] font-semibold text-muted-warm">reveal the adjustments one by one</span>
      </div>
      <div className="px-4 py-5 sm:px-6">
        <div className="grid gap-2">
          {JAWS_STEPS.map((s, i) => {
            if (i > shown) return null;
            const isStart = s.sign === "=";
            const isResult = i === last;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.32 }}
                className={`flex items-center gap-3 rounded-xl border px-4 py-2.5 ${
                  isResult
                    ? "border-[#059669] bg-[#ecfdf5]"
                    : isStart
                    ? "border-[#c7e5d6] bg-white"
                    : "border-[#e4f1ea] bg-white"
                }`}
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-mono text-[.9rem] font-black text-white ${
                    s.sign === "-" ? "bg-[#b3402c]" : isResult ? "" : ""
                  }`}
                  style={isResult ? { background: FA_BTN_GRAD } : { background: isStart ? "#5c7a6b" : s.sign === "-" ? "#b3402c" : FA_G[600] }}
                >
                  {s.sign === "=" ? <Equal className="h-3.5 w-3.5" /> : s.sign === "+" ? <Plus className="h-3.5 w-3.5" /> : <Minus className="h-3.5 w-3.5" />}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[.86rem] font-extrabold text-[#3e2c1d]">{s.label}</span>
                  <span className="block text-[.68rem] leading-snug text-muted-warm">{s.note}</span>
                </span>
                <span className={`font-mono text-[.9rem] font-black ${isResult ? "text-[#065f46]" : "text-[#3e2c1d]"}`}>
                  ₹{s.amt.toLocaleString("en-IN")}
                </span>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="font-mono text-[.92rem] font-black" style={{ color: complete ? FA_G[800] : "#7d9a8b" }}>
            {complete ? (
              <>Net cash from operating activities = ₹{running.toLocaleString("en-IN")} ✓</>
            ) : (
              <>Running total: ₹{running.toLocaleString("en-IN")}</>
            )}
          </p>
          {shown < last ? (
            <button
              type="button"
              onClick={() => setShown((s) => Math.min(s + 1, last))}
              className="rounded-lg px-3 py-1.5 text-[.74rem] font-bold text-white"
              style={{ background: FA_BTN_GRAD }}
            >
              Reveal next adjustment →
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShown(0)}
              className="rounded-lg border border-[#e4f1ea] bg-white px-3 py-1.5 text-[.74rem] font-bold text-[#3e2c1d]"
            >
              Replay
            </button>
          )}
        </div>
        <p className="mt-3 text-[.78rem] leading-relaxed text-muted-warm">
          Read the fourth step twice: an <b>increase</b> in receivables means sales were booked but cash never arrived —
          profit up, cash down. A <b>decrease</b> in payables means old bills were settled — cash left, profit untouched.
          (Some summaries mislabel the payables line as an addition; the arithmetic that reaches ₹69,700 requires the
          deduction shown here.)
        </p>
      </div>
    </div>
  );
}

export function FaCashflowMethodsSection() {
  return (
    <Section id="cashflow-methods">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 25 · Building the statement"
          title={
            <>
              Two roads to <span style={{ color: FA_G[700] }}>operating cash</span>.
            </>
          }
          lead="The statement has a fixed skeleton — three activity sections that sum to a net change, which must reconcile with the balance sheet's cash. Operating cash can be built directly from receipts and payments, or indirectly, by walking net income back to cash."
        />

        <FaReadStep n="01" title="The skeleton" sub="Header → three sections → net change → the check" />
        <div className="grid gap-3 md:grid-cols-4">
          {[
            { t: "Operating", d: "daily business: receipts from customers, payments to suppliers, employees, tax" },
            { t: "Investing", d: "long-term assets: purchases and sales of PPE and investments" },
            { t: "Financing", d: "capital: shares issued, loans taken, repaid, interest & dividends paid" },
            { t: "The check", d: "beginning cash + net change = ending cash — which must equal the balance sheet's cash & cash equivalents" },
          ].map((s, i) => (
            <Reveal key={s.t} delay={i * 0.05}>
              <div className={`h-full rounded-2xl border p-4 ${i === 3 ? "border-[#e3c98f] bg-[#fbf4e4]" : "border-[#e0ece6] bg-[#fffdf9]"}`}>
                <p className={`text-[.9rem] font-extrabold ${i === 3 ? "text-[#8a5a10]" : "text-[#3e2c1d]"}`}>{s.t}</p>
                <p className="mt-1 text-[.76rem] leading-relaxed text-muted-warm">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <FaReadStep n="02" title="Direct vs indirect" sub="Follow the cash — or walk profit back to it" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border p-5" style={{ borderColor: FA_G.border, background: "#f2faf6" }}>
              <p className="text-[.98rem] font-extrabold" style={{ color: FA_G[800] }}>Direct method</p>
              <p className="mt-2 text-[.84rem] leading-relaxed text-[#1d4433]">
                Record every actual cash receipt and payment: cash from customers, less cash to suppliers, employees
                and operating expenses, less taxes — equals net operating cash. Sourced straight from the accounting
                records and cash-book analysis.
              </p>
              <p className="mt-3 rounded-xl px-3 py-2 text-[.78rem] font-semibold" style={{ background: "#e7f5ee", color: FA_G[800] }}>
                Advantage: the received amounts help estimate FUTURE cash flows. Less common in practice.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-[#e3c98f] bg-[#fbf4e4] p-5">
              <p className="text-[.98rem] font-extrabold text-[#8a5a10]">Indirect method</p>
              <p className="mt-2 text-[.84rem] leading-relaxed text-[#5c4a22]">
                Start with net income and adjust: add back non-cash expenses (depreciation, amortization, goodwill
                write-offs), deduct non-cash income (gains on disposal), then apply the working-capital rules.
              </p>
              <p className="mt-3 rounded-xl bg-white px-3 py-2 text-[.78rem] font-semibold text-[#8a5a10]">
                The one annual reports actually use — it reconciles profit to cash.
              </p>
            </div>
          </Reveal>
        </div>

        <FaReadStep n="03" title="The working-capital rules" sub="Four moves — current assets and current liabilities" />
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            { t: "Current asset ↑", d: "deduct", why: "cash is locked in (receivables, inventory grew)", tone: "#b3402c", icon: TrendingUp },
            { t: "Current asset ↓", d: "add", why: "assets turned into cash", tone: FA_G[700], icon: TrendingDown },
            { t: "Current liability ↑", d: "add", why: "expenses booked, cash kept (payables grew)", tone: FA_G[700], icon: TrendingUp },
            { t: "Current liability ↓", d: "deduct", why: "old bills were paid down", tone: "#b3402c", icon: TrendingDown },
          ].map((r) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.t}>
                <div className="flex items-center gap-3 rounded-2xl border border-[#e0ece6] bg-[#fffdf9] p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white" style={{ background: r.tone }}>
                    <Icon className="h-4.5 w-4.5 h-[18px] w-[18px]" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[.86rem] font-extrabold text-[#3e2c1d]">
                      {r.t} → <span style={{ color: r.tone }}>{r.d}</span>
                    </p>
                    <p className="text-[.74rem] leading-snug text-muted-warm">{r.why}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <FaReadStep n="04" title="The ladder, run for real" sub="Jaws Photo Plus — ₹73,000 of profit becomes ₹69,700 of cash" />
        <JawsLadder />

        <Reveal className="mt-6">
          <FaEq label="The full format, condensed">{`                        Cash Flow Statement
                        Jaws Photo Plus · FY…

OPERATING   Net cash from operating activities      69,700
INVESTING   Purchases (PPE) / sales / interest rec.    …
FINANCING   Shares, loans, interest & dividends paid   …
            ─────────────────────────────
            Net increase / decrease in cash            …
            Beginning cash & equivalents               …
            Ending cash & equivalents                  …
            ↳ must match the balance sheet exactly`}</FaEq>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FaQuiz
            source="Lecture 25 · check yourself"
            q="Inventory increased by ₹12,000 during the year. In the indirect method, this is…"
            options={[
              "Added — inventory is an asset",
              "Deducted — cash was spent buying stock that has not sold yet",
              "Ignored — inventory is not cash",
              "Added only if sales also increased",
            ]}
            answer={1}
            explain="An increase in a current asset means cash was locked into it — purchases exceeded cost of goods sold. Deduct. Mirror rule: a decrease in inventory is added back. For current liabilities the signs flip."
          />
          <FaQuiz
            source="Lecture 25 · check yourself"
            q="Why is the gain on disposal of plant assets DEDUCTED in the operating section?"
            options={[
              "Because gains are never real",
              "Because the sale proceeds belong to investing — leaving the gain in operating would double-count",
              "Because gains are taxed separately",
              "Because the asset was bought in an earlier year",
            ]}
            answer={1}
            explain="The profit already includes the gain, but the cash from selling the asset is an investing inflow. Deducting the gain from operating prevents counting it twice — the full proceeds (not just the gain) show under investing."
          />
        </div>

        <div className="mt-10">
          <Takeaways
            items={[
              <>Ending cash must <b>reconcile exactly</b> with the balance sheet's cash &amp; cash equivalents.</>,
              <>Direct = follow actual receipts &amp; payments; <b>indirect = net income walked back to cash</b> (the standard).</>,
              <>Adjustments: add non-cash expenses, remove non-operating gains/losses, apply the <b>working-capital rules</b>.</>,
              <>Jaws Photo Plus: 73,000 + 7,000 − 2,500 − 4,000 − 3,800 = <b>₹69,700</b>.</>,
              <>Negative operating cash flow = the core is spending more cash than it generates — investigate.</>,
            ]}
          />
        </div>
      </div>
    </Section>
  );
}
