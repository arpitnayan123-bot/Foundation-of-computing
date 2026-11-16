"use client";

/* ============================================================
   Financial Accounting — PART 8 (shelf 03 of The Atlas)
   The P&L account, closing entries, the retained earnings
   statement and the statement chain (L21). The balance sheet:
   current vs fixed, liquidity vs permanency (L22).
   ============================================================ */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Banknote,
  Camera,
  Check,
  ChevronsDown,
  Coins,
  Eye,
  Link2,
  Package,
  Shield,
  Sparkles,
  TrendingUp,
  Video,
  X,
} from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { FA_BTN_GRAD, FA_G, FaCallout, FaEq, FaQuiz, FaReadStep } from "./FaParts1";

/* ============================================================
   CHAPTER — P&L, CLOSING ENTRIES & THE CHAIN (Lecture 21)
   ============================================================ */

const PL_EXPENSES = ["Salaries", "Discounts given", "Bad debts", "Depreciation", "Legal charges", "Consultancy", "Audit fees", "Electricity", "Telephone", "Stationery", "Interest on loans"];
const PL_INCOME = ["Discounts received", "Commission received", "Rent received", "Interest received", "Dividend received", "Bad debts recovered"];

const CLOSING_ENTRIES = [
  { t: "Expenses in", entry: "Profit & Loss A/c      Dr.  …\n    To Salaries / Rent / … A/c  …", d: "Every expense account hands its balance to the P&L." },
  { t: "Income in", entry: "Discount Received A/c  Dr.  …\n    To Profit & Loss A/c        …", d: "Every income and gain account hands its balance to the P&L." },
  { t: "Gross profit in", entry: "Trading A/c (GP leg)   Dr.  …\n    To Profit & Loss A/c        …", d: "The trading account's gross profit crosses into the P&L." },
  { t: "Net profit out", entry: "Profit & Loss A/c      Dr.  …\n    To Capital A/c              …", d: "The balancing figure — net profit — lands in capital. A net loss travels the opposite way." },
];

function ReLadder() {
  const [dividend, setDividend] = useState(50);
  const opening = 500;
  const netIncome = 100;
  const ending = opening + netIncome - dividend;
  return (
    <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
      <div className="flex flex-wrap items-center gap-2 border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3">
        <TrendingUp className="h-4 w-4" style={{ color: FA_G[700] }} />
        <span className="font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
          The retained earnings statement
        </span>
        <span className="text-[.7rem] font-semibold text-muted-warm">$ thousands · drag the dividend</span>
      </div>
      <div className="px-4 py-5 sm:px-6">
        <div className="flex items-baseline justify-between">
          <label htmlFor="fa-div" className="text-[.8rem] font-bold text-[#3e2c1d]">
            Dividends paid to shareholders
          </label>
          <span className="font-mono text-[.95rem] font-black" style={{ color: FA_G[800] }}>${dividend}</span>
        </div>
        <input
          id="fa-div"
          type="range"
          min={0}
          max={150}
          step={10}
          value={dividend}
          onChange={(e) => setDividend(Number(e.target.value))}
          className="mt-2 w-full accent-[#047857]"
          aria-valuetext={`dividends ${dividend} thousand`}
        />
        <FaEq label="Beginning + net income − dividends = ending">{`Beginning retained earnings        $${opening.toLocaleString("en-IN")}
  Add: Net income for the period    +$${netIncome}
  Less: Dividends paid              −$${dividend.toLocaleString("en-IN")}
                                    ─────────
  Ending retained earnings          $${ending.toLocaleString("en-IN")}`}</FaEq>
        <p className="mt-3 text-[.78rem] leading-relaxed text-muted-warm">
          Also called retained surplus or accumulated earnings. The ending balance walks straight into the{" "}
          <b>equity section of the balance sheet</b>, beside share capital. The lecture&apos;s own figures: 500 + 100 − 50
          = <b>$550,000</b>.
        </p>
      </div>
    </div>
  );
}

export function FaPandLSection() {
  const [entry, setEntry] = useState(0);
  return (
    <Section id="pandl">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 21 · Net result & the chain"
          title={
            <>
              Everything closes — <span style={{ color: FA_G[700] }}>and the statements hold hands</span>.
            </>
          }
          lead="The P&L account sweeps up every operating expense and income, opens with the trading account's gross profit, and balances into net profit — which closes into capital. Then the statements chain: income statement → retained earnings → balance sheet → cash flow."
        />

        <FaReadStep n="01" title="Inside the P&L account" sub="Gross profit arrives; operating items settle; net profit leaves" />
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-[#e8a896] bg-[#fbeae5] p-5">
              <p className="text-[.68rem] font-black uppercase tracking-[.16em] text-[#b3402c]">Debit side — expenses & losses</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {PL_EXPENSES.map((x) => (
                  <span key={x} className="rounded-full bg-white px-2.5 py-1 text-[.72rem] font-bold text-[#7c2d12]">{x}</span>
                ))}
              </div>
              <p className="mt-3 text-[.76rem] leading-snug text-[#5c2a14]">
                Indirect expenses — the costs of existing as a business, beyond the buying and selling of goods. (A
                gross loss, if any, also opens on this side.)
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border p-5" style={{ borderColor: FA_G.border, background: "#f2faf6" }}>
              <p className="text-[.68rem] font-black uppercase tracking-[.16em]" style={{ color: FA_G[700] }}>Credit side — incomes & gains</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {PL_INCOME.map((x) => (
                  <span key={x} className="rounded-full bg-white px-2.5 py-1 text-[.72rem] font-bold" style={{ color: FA_G[800] }}>{x}</span>
                ))}
                <span className="rounded-full px-2.5 py-1 text-[.72rem] font-black text-white" style={{ background: FA_BTN_GRAD }}>+ Gross profit (from trading)</span>
              </div>
              <p className="mt-3 text-[.76rem] leading-snug text-[#1d4433]">
                Credit bigger than debit → <b>net profit</b> (appears on the debit side, then closes to capital). Debit
                bigger → net loss.
              </p>
            </div>
          </Reveal>
        </div>

        <FaReadStep n="02" title="The four closing entries" sub="Click through the year-end ritual" />
        <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
          <div className="grid grid-cols-4 border-b border-[#e4f1ea]">
            {CLOSING_ENTRIES.map((c, i) => (
              <button
                key={c.t}
                type="button"
                onClick={() => setEntry(i)}
                aria-pressed={entry === i}
                className={`px-2 py-3 text-[.72rem] font-extrabold uppercase tracking-[.1em] transition-colors sm:text-[.78rem] ${
                  entry === i ? "bg-[#ecfdf5] text-[#065f46]" : "text-[#9db8a9] hover:bg-[#f4faf7]"
                }`}
              >
                {`0${i + 1} · ${c.t}`}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2">
            <div className="border-b border-[#e4f1ea] p-5 md:border-b-0 md:border-r">
              <AnimatePresence mode="wait">
                <motion.pre
                  key={entry}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -14 }}
                  transition={{ duration: 0.28 }}
                  className="overflow-x-auto rounded-xl border border-[#e8d3ac] bg-[#faf0da] px-4 py-3 font-mono text-[.8rem] leading-relaxed text-[#5c4a22]"
                >
                  {CLOSING_ENTRIES[entry].entry}
                </motion.pre>
              </AnimatePresence>
            </div>
            <div className="p-5">
              <p className="font-mono text-[.62rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
                What it does
              </p>
              <p className="mt-2 text-[.9rem] leading-relaxed text-[#2b2014]">{CLOSING_ENTRIES[entry].d}</p>
              <p className="mt-3 text-[.78rem] leading-relaxed text-muted-warm">
                Narrations follow each entry — &ldquo;transfer of balances of various expenses to profit and loss
                account&rdquo;, and so on. Nominal accounts end the year at zero.
              </p>
            </div>
          </div>
        </div>

        <FaReadStep n="03" title="The retained earnings statement" sub="The bridge between the income statement and the balance sheet" />
        <ReLadder />

        <FaReadStep n="04" title="The chain" sub="Each statement hands its bottom line to the next" />
        <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9] p-5">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { t: "Income statement", d: "bottom line: net income", icon: TrendingUp },
              { t: "Retained earnings", d: "net income − dividends", icon: Link2 },
              { t: "Balance sheet", d: "ending RE joins equity", icon: Shield },
              { t: "Cash flow", d: "cash must reconcile", icon: Banknote },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <React.Fragment key={s.t}>
                  <div className="min-w-[150px] rounded-xl border border-[#e4f1ea] bg-white px-3 py-3 text-center">
                    <Icon className="mx-auto h-4.5 w-4.5 h-[18px] w-[18px]" style={{ color: FA_G[700] }} />
                    <p className="mt-1.5 text-[.8rem] font-extrabold text-[#3e2c1d]">{s.t}</p>
                    <p className="mt-0.5 text-[.68rem] leading-snug text-muted-warm">{s.d}</p>
                  </div>
                  {i < 3 ? <ArrowRight className="h-4 w-4 text-[#9db8a9]" /> : null}
                </React.Fragment>
              );
            })}
          </div>
          <p className="mt-4 text-center text-[.8rem] leading-relaxed text-[#2b2014]">
            Each statement provides specific information <b>while building on data from the previous one</b> — the
            relationship that keeps financial reporting consistent.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FaQuiz
            source="Lecture 21 · check yourself"
            q="Where does the trading account's gross profit go at year-end?"
            options={[
              "Straight to the balance sheet as an asset",
              "Credited to the Profit & Loss account via a closing entry",
              "Debited to the capital account directly",
              "It stays in the trading account forever",
            ]}
            answer={1}
            explain="Closing entry: Debit the gross profit leg, Credit the Profit & Loss account. From there the P&L absorbs operating expenses and incomes, balances into net profit — and net profit is what finally closes into capital."
          />
          <FaQuiz
            source="Lecture 21 · check yourself"
            q="Beginning retained earnings $500k, net income $100k, dividends paid $50k. The balance sheet's equity section shows retained earnings of…"
            options={[
              "$500k — beginning balances carry forward",
              "$550k — 500 + 100 − 50",
              "$600k — 500 + 100, dividends are an expense",
              "$450k — 500 − 50, net income is not included",
            ]}
            answer={1}
            explain="The retained earnings statement: beginning balance + net income − dividends = ending balance = $550,000. Dividends are a distribution to owners, not an expense — they reduce retained earnings directly, and the ending figure joins equity on the balance sheet."
          />
        </div>

        <div className="mt-10">
          <Takeaways
            items={[
              <>P&amp;L credit side: <b>gross profit + incomes</b>; debit side: <b>operating expenses</b>; the balance is net profit/loss.</>,
              <>Four closing entries: expenses in, incomes in, gross profit in, <b>net profit to capital</b>.</>,
              <>Retained earnings statement: <b>beginning + net income − dividends = ending</b> → joins equity.</>,
              <>The chain: income statement → retained earnings → balance sheet → <b>cash flow</b>.</>,
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER — THE BALANCE SHEET (Lecture 22)
   ============================================================ */

const BS_ITEMS = [
  { t: "Cash in hand & at bank", cat: "Current asset" },
  { t: "Trade receivables", cat: "Current asset" },
  { t: "Inventory / stock", cat: "Current asset" },
  { t: "Machinery", cat: "Fixed asset" },
  { t: "Land & buildings", cat: "Fixed asset" },
  { t: "Long-term investments", cat: "Fixed asset" },
  { t: "Patents & copyrights", cat: "Intangible" },
  { t: "Trade rights", cat: "Intangible" },
  { t: "Bills payable", cat: "Current liability" },
  { t: "Trade creditors", cat: "Current liability" },
  { t: "Outstanding expenses", cat: "Current liability" },
  { t: "Bank overdraft", cat: "Current liability" },
  { t: "Advance payments received", cat: "Current liability" },
];

const BS_CATS = ["Current asset", "Fixed asset", "Intangible", "Current liability"] as const;

function BsSorter() {
  const [idx, setIdx] = useState(0);
  const [placed, setPlaced] = useState<Record<string, boolean>>({});
  const item = BS_ITEMS[idx];
  const done = idx >= BS_ITEMS.length;

  function place(cat: string) {
    if (!item) return;
    const correct = item.cat === cat;
    if (correct) {
      setPlaced((p) => ({ ...p, [item.t]: true }));
      setIdx((i) => i + 1);
    } else {
      setIdx((i) => i); // stay; wrong answers just shake via key change
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
      <div className="flex flex-wrap items-center gap-2 border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3">
        <Package className="h-4 w-4" style={{ color: FA_G[700] }} />
        <span className="font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
          The classification drill
        </span>
        <span className="text-[.7rem] font-semibold text-muted-warm">{Object.keys(placed).length} / {BS_ITEMS.length} sorted</span>
      </div>
      <div className="px-4 py-5 sm:px-6">
        {!done ? (
          <>
            <AnimatePresence mode="wait">
              <motion.p
                key={item.t}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="rounded-xl border border-[#e4f1ea] bg-white px-4 py-3 text-center text-[1rem] font-extrabold text-[#3e2c1d]"
              >
                {item.t}
              </motion.p>
            </AnimatePresence>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {BS_CATS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => place(c)}
                  className="rounded-xl border border-[#e0ece6] bg-white px-3 py-2.5 text-[.78rem] font-bold text-[#3e2c1d] transition-all hover:border-[#059669] hover:bg-[#ecfdf5]"
                >
                  {c}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="rounded-xl border p-4 text-center" style={{ borderColor: FA_G.border, background: FA_G.wash }}>
            <Check className="mx-auto h-6 w-6" style={{ color: FA_G[600] }} />
            <p className="mt-1 text-[.9rem] font-extrabold" style={{ color: FA_G[800] }}>
              All {BS_ITEMS.length} sorted — the whole balance sheet, classified.
            </p>
            <button
              type="button"
              onClick={() => { setPlaced({}); setIdx(0); }}
              className="mt-3 rounded-lg px-3 py-1.5 text-[.74rem] font-bold text-white"
              style={{ background: FA_BTN_GRAD }}
            >
              Run it again
            </button>
          </div>
        )}
        {done ? null : (
          <p className="mt-3 text-[.72rem] leading-snug text-muted-warm">
            Test: will it become cash within a year → current asset. Built to last → fixed asset. No physical form but
            exclusive rights → intangible. Owed within a year → current liability.
          </p>
        )}
      </div>
    </div>
  );
}

function OrderToggle() {
  const [order, setOrder] = useState<"liquidity" | "permanency">("liquidity");
  const assets =
    order === "liquidity"
      ? ["Cash in hand", "Cash at bank", "Trade receivables", "Inventory", "Machinery", "Land & buildings"]
      : ["Land & buildings", "Machinery", "Inventory", "Trade receivables", "Cash at bank", "Cash in hand"];
  const liabilities =
    order === "liquidity"
      ? ["Bank overdraft", "Trade creditors", "Bills payable", "Long-term loans", "Capital & reserves"]
      : ["Capital & reserves", "Long-term loans", "Bills payable", "Trade creditors", "Bank overdraft"];
  return (
    <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
      <div className="grid grid-cols-2 border-b border-[#e4f1ea]">
        {(["liquidity", "permanency"] as const).map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => setOrder(o)}
            aria-pressed={order === o}
            className={`px-4 py-3 text-[.8rem] font-extrabold uppercase tracking-[.12em] transition-colors ${
              order === o ? "bg-[#ecfdf5] text-[#065f46]" : "text-[#9db8a9] hover:text-[#5c7a6b]"
            }`}
          >
            {o} order
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2">
        <div className="border-b border-[#e4f1ea] p-4 md:border-b-0 md:border-r">
          <p className="text-[.68rem] font-black uppercase tracking-[.16em] text-[#7d9a8b]">Assets — {order}</p>
          <ol className="mt-2 grid gap-1">
            {assets.map((a, i) => (
              <motion.li
                key={a}
                layout
                className="flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-[.8rem] font-semibold text-[#3e2c1d]"
              >
                <span className="font-mono text-[.62rem] font-black" style={{ color: FA_G[700] }}>{i + 1}</span>
                {a}
              </motion.li>
            ))}
          </ol>
        </div>
        <div className="p-4">
          <p className="text-[.68rem] font-black uppercase tracking-[.16em] text-[#b08d4f]">Liabilities & capital — {order}</p>
          <ol className="mt-2 grid gap-1">
            {liabilities.map((a, i) => (
              <motion.li
                key={a}
                layout
                className="flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-[.8rem] font-semibold text-[#3e2c1d]"
              >
                <span className="font-mono text-[.62rem] font-black" style={{ color: FA_G.gold }}>{i + 1}</span>
                {a}
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
      <div className="border-t border-[#e4f1ea] bg-white px-4 py-3 text-[.8rem] leading-relaxed text-[#2b2014]">
        {order === "liquidity"
          ? "Most convertible first: cash leads, land trails. Current liabilities before long-term. Favourite of short-term lenders."
          : "Longest-lived first: land leads, cash trails. Capital and reserves before current liabilities. Favourite of going-concern readers."}
      </div>
    </div>
  );
}

export function FaBalanceSheetSection() {
  return (
    <Section id="balance-sheet">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 22 · The photograph"
          title={
            <>
              What the firm owns and owes — <span style={{ color: FA_G[700] }}>on one date</span>.
            </>
          }
          lead="The balance sheet is a snapshot, valid only for the date it names: a single transaction can change every figure. Prepared after the P&L — together they are the final accounts — and the two sides must always agree, because capital equals assets minus liabilities."
        />

        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm flex h-full items-start gap-3 p-5">
              <Video className="mt-0.5 h-5 w-5 shrink-0" style={{ color: FA_G[700] }} />
              <div>
                <p className="text-[.95rem] font-extrabold text-[#3e2c1d]">The P&L is a video</p>
                <p className="mt-1 text-[.84rem] leading-relaxed text-muted-warm">
                  Performance over a period — revenue and expense items, every account closed after transferring to the
                  P&L.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card-warm flex h-full items-start gap-3 p-5">
              <Camera className="mt-0.5 h-5 w-5 shrink-0" style={{ color: FA_G[700] }} />
              <div>
                <p className="text-[.95rem] font-extrabold text-[#3e2c1d]">The balance sheet is a photograph</p>
                <p className="mt-1 text-[.84rem] leading-relaxed text-muted-warm">
                  Position at a point in time — capital-nature items, balances that are <b>not closed</b> but carried
                  forward to the next year.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <FaReadStep n="01" title="Sort the balance sheet" sub="Every item the lecture names — click its family" />
        <BsSorter />

        <FaReadStep n="02" title="Two ways to arrange the same sheet" sub="Liquidity order or permanency order — toggle" />
        <OrderToggle />

        <FaReadStep n="03" title="The final step of the cycle" sub="Journal → ledger → trial balance → statements — and the sheet must agree" />
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <FaEq label="Why the two sides must always be equal">{`Assets = Liabilities + Capital
     ↓ always, by construction
Total of one side = Total of the other

If they do NOT match, it is not a mystery —
it is an error in preparation. The sheet is
a re-arrangement of double entry itself.`}</FaEq>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card-warm h-full p-5">
              <p className="text-[.9rem] font-extrabold text-[#3e2c1d]">P&L vs balance sheet — the audit table</p>
              <div className="mt-2 grid gap-1.5 text-[.78rem] leading-relaxed">
                {[
                  ["Purpose", "profit or loss for a period", "position at a date"],
                  ["Time", "an interval — usually one year", "a point in time"],
                  ["Items", "revenue & expense nature", "capital nature"],
                  ["Accounts", "all closed to the P&L", "not closed — carried forward"],
                  ["Source", "trial balance", "trial balance"],
                ].map(([k, a, b]) => (
                  <div key={k} className="grid grid-cols-[64px_1fr_1fr] items-start gap-2 rounded-lg bg-white px-3 py-1.5">
                    <span className="font-mono text-[.62rem] font-black uppercase tracking-wider text-[#9db8a9]">{k}</span>
                    <span className="text-[#7c2d12]">{a}</span>
                    <span style={{ color: FA_G[800] }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FaQuiz
            source="Lecture 22 · check yourself"
            q="A firm's trial balance shows assets ₹9,00,000 and liabilities ₹2,00,000. What must capital be — and what happens if the sheet shows otherwise?"
            options={[
              "₹7,00,000 — and a mismatch means an error in preparation",
              "₹11,00,000 — assets plus liabilities",
              "₹9,00,000 — capital equals assets",
              "It depends on the year's profit",
            ]}
            answer={0}
            explain="Capital = Assets − Liabilities = 9,00,000 − 2,00,000 = ₹7,00,000. Because the balance sheet simply re-arranges the accounting equation, unequal sides signal a preparation error — never a new accounting concept."
          />
          <FaQuiz
            source="Lecture 22 · check yourself"
            q="Which list is arranged in liquidity order?"
            options={[
              "Land → machinery → inventory → receivables → cash",
              "Cash → receivables → inventory → machinery → land",
              "Cash → land → machinery → inventory → receivables",
              "Receivables → cash → land → inventory → machinery",
            ]}
            answer={1}
            explain="Liquidity order puts the most convertible first — cash leads, land trails. Permanency order is its mirror image. On the liability side, liquidity order puts current liabilities before long-term; permanency order puts capital and reserves first."
          />
        </div>

        <div className="mt-10">
          <Takeaways
            items={[
              <>A <b>point-in-time</b> statement — valid only for the date it names.</>,
              <>Current liabilities: payable within a year (creditors, overdraft, outstanding expenses, advances). Fixed: not due within a year.</>,
              <>Assets: <b>current</b> (cash, receivables, stock) · <b>fixed</b> (machinery, buildings) · <b>intangible</b> (patents, trade rights).</>,
              <>Two arrangements: <b>liquidity</b> order vs <b>permanency</b> order — same items, different lens.</>,
              <>The balance sheet completes the accounting cycle — prepared <b>after</b> the P&amp;L, and its sides must always agree.</>,
            ]}
          />
        </div>
      </div>
    </Section>
  );
}
