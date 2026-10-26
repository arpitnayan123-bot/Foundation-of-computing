"use client";

/* ============================================================
   Financial Accounting — PART 10 (shelf 03 of The Atlas)
   The indirect method at work: the three adjustment
   categories, Compass Company and Ajay Company (L26). Then
   the six diagnostic questions and the Pioneer Limited build
   (L27).
   ============================================================ */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgePercent,
  Building2,
  Check,
  ChevronDown,
  Coins,
  Compass as CompassIcon,
  HandHeart,
  Handshake,
  HeartPulse,
  Landmark,
  Minus,
  Percent,
  Plus,
  Search,
  ShieldAlert,
  Stethoscope,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { FA_BTN_GRAD, FA_G, FaCallout, FaEq, FaQuiz, FaReadStep } from "./FaParts1";

/* ============================================================
   CHAPTER — THE INDIRECT BUILD (Lecture 26)
   ============================================================ */

const AJAY_MOVES = [
  { d: "Depreciation expense", sign: "+" as const, why: "non-cash — add back" },
  { d: "Investment gain", sign: "-" as const, why: "non-operating — remove" },
  { d: "Inventory decrease", sign: "+" as const, why: "stock turned into cash" },
  { d: "Trade receivables increase", sign: "-" as const, why: "credit sales, cash not collected" },
  { d: "Prepaid expenses increase", sign: "-" as const, why: "cash paid in advance" },
  { d: "Trade payables increase", sign: "+" as const, why: "expenses booked, cash kept" },
  { d: "Income tax paid", sign: "-" as const, why: "actual cash out" },
];

function AjayLadder() {
  const [step, setStep] = useState(0);
  const steps = AJAY_MOVES.length;
  return (
    <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
      <div className="flex flex-wrap items-center gap-2 border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3">
        <TrendingDown className="h-4 w-4" style={{ color: FA_G[700] }} />
        <span className="font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
          Ajay Company — profit before tax ₹4,32,000
        </span>
        <span className="text-[.7rem] font-semibold text-muted-warm">step through the adjustment moves</span>
      </div>
      <div className="px-4 py-5 sm:px-6">
        <div className="grid gap-1.5">
          <div className="flex items-center gap-3 rounded-xl border border-[#c7e5d6] bg-white px-4 py-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#5c7a6b] text-white">
              <Coins className="h-3.5 w-3.5" />
            </span>
            <span className="flex-1 text-[.88rem] font-extrabold text-[#3e2c1d]">Profit before tax</span>
            <span className="font-mono text-[.92rem] font-black text-[#3e2c1d]">₹4,32,000</span>
          </div>
          {AJAY_MOVES.slice(0, step).map((m) => (
            <motion.div
              key={m.d}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 rounded-xl border border-[#e4f1ea] bg-white px-4 py-2"
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md font-mono text-[.85rem] font-black text-white`}
                style={{ background: m.sign === "+" ? FA_G[600] : "#b3402c" }}
              >
                {m.sign === "+" ? <Plus className="h-3 w-3" /> : <Minus className="h-3 w-3" />}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[.84rem] font-bold text-[#3e2c1d]">{m.d}</span>
                <span className="block text-[.66rem] text-muted-warm">{m.why}</span>
              </span>
            </motion.div>
          ))}
          {step >= steps ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 rounded-xl border-2 px-4 py-3"
              style={{ borderColor: FA_G[500], background: "#ecfdf5" }}
            >
              <Check className="h-5 w-5" style={{ color: FA_G[600] }} />
              <span className="flex-1 text-[.95rem] font-black" style={{ color: FA_G[800] }}>
                Net cash flow from operating activities
              </span>
              <span className="font-mono text-[1.05rem] font-black" style={{ color: FA_G[800] }}>₹3,48,000</span>
            </motion.div>
          ) : null}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-mono text-[.7rem] font-bold text-[#9db8a9]">{step} / {steps} adjustments applied</span>
          {step < steps ? (
            <button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              className="rounded-lg px-3 py-1.5 text-[.74rem] font-bold text-white"
              style={{ background: FA_BTN_GRAD }}
            >
              Apply next adjustment →
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setStep(0)}
              className="rounded-lg border border-[#e4f1ea] bg-white px-3 py-1.5 text-[.74rem] font-bold text-[#3e2c1d]"
            >
              Replay
            </button>
          )}
        </div>
        <p className="mt-3 text-[.76rem] leading-snug text-muted-warm">
          The lecture gives the moves and the verified landing figure — ₹4,32,000 of accrual profit becomes ₹3,48,000
          of operating cash. Note how the same profit can fall by ₹84,000 purely on timing, with no change in the
          business&apos;s health.
        </p>
      </div>
    </div>
  );
}

export function FaCashflowBuildSection() {
  return (
    <Section id="cashflow-build">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 26 · The indirect method at work"
          title={
            <>
              Three adjustment families — <span style={{ color: FA_G[700] }}>then the numbers land</span>.
            </>
          }
          lead="The indirect method converts accrual profit into cash-based profit. Everything fits three categories: non-cash items, non-operating items, and working-capital changes — then tax paid, computed properly, and the statement is done."
        />

        <FaReadStep n="01" title="The formula ladder" sub="Memorize the sequence — every problem is this ladder" />
        <Reveal>
          <FaEq label="The indirect method, top to bottom">{`Net Profit (or Profit Before Tax)
−  non-cash expenditures   (depreciation, bad debts)
−  non-operating gains     (added back if losses)
−  non-operating income    (interest income…)
−  non-cash interest expenses
= Operating profit before working-capital changes
±  working-capital adjustments
= Cash generated from operations
−  income tax PAID
= Net cash flow from operating activities

Tax paid = Tax expense + Opening tax payable − Closing tax payable`}</FaEq>
        </Reveal>

        <FaReadStep n="02" title="Category by category" sub="What moves, and which way" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            {
              t: "1 · Non-cash items",
              items: ["Depreciation — added back", "Bad debts / provisions — added back", "Goodwill write-offs — added back"],
              d: "They reduced profit without moving cash.",
            },
            {
              t: "2 · Non-operating items",
              items: ["Gain on sale of equipment — subtract", "Loss on sale — add back", "Interest income — subtract (investing)", "Interest expense — add back (financing)"],
              d: "Only operating activity belongs here.",
            },
            {
              t: "3 · Working capital",
              items: ["Inventory ↑ subtract · ↓ add", "Receivables ↑ subtract · ↓ add", "Prepaids ↑ subtract · ↓ add", "Payables ↑ add · ↓ subtract"],
              d: "Timing gaps between booking and cash.",
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.06}>
              <div className="card-warm h-full p-5">
                <p className="text-[.92rem] font-extrabold text-[#3e2c1d]">{c.t}</p>
                <ul className="mt-2 grid gap-1.5">
                  {c.items.map((x) => (
                    <li key={x} className="flex items-start gap-2 text-[.78rem] leading-relaxed text-[#2b2014]">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: FA_G[500] }} />
                      {x}
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-[.74rem] italic text-muted-warm">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <FaReadStep n="03" title="Case study — Compass Company" sub="Two years of statements (2004, 2005), all three categories applied" />
        <Reveal>
          <FaEq label="Compass Company — the verified result">{`Profit before tax
  + depreciation & bad debts (non-cash)
  − gains on asset sales, investment income
  ± inventory, receivables, payables changes
  − income tax actually paid
  ──────────────────────────
  Net cash flow from operating activities = ₹72,000

The full three-section statement then follows:
investing (asset purchases & disposals) and
financing (capital raised & returned).`}</FaEq>
        </Reveal>

        <FaReadStep n="04" title="Exercise — Ajay Company" sub="₹4,32,000 of profit, adjusted move by move" />
        <AjayLadder />

        <Reveal className="mt-6">
          <FaCallout kind="warn" title="Two traps the lecture warns about">
            <b>Not everything touches cash</b> — equipment bought on credit never appears on the statement.{" "}
            <b>Gains and losses on disposals</b> are adjusted in operating, but the cash itself sits in investing —
            miss that and you count it twice.
          </FaCallout>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FaQuiz
            source="Lecture 26 · check yourself"
            q="Interest income received on advances given to suppliers belongs to…"
            options={[
              "Operating — it is income",
              "Investing — returns on amounts lent",
              "Financing — it involves cash",
              "It is excluded entirely",
            ]}
            answer={1}
            explain="Interest and dividends RECEIVED are returns on investments made — investing inflows. Interest and dividends PAID are the cost of financing — financing outflows. Income the business exists to earn (sales, service fees) is what operating captures."
          />
          <FaQuiz
            source="Lecture 26 · check yourself"
            q="Tax expense for the year is ₹50,000; opening tax payable ₹30,000; closing ₹50,000. Cash paid for tax is…"
            options={[
              "₹50,000 — the expense itself",
              "₹30,000 — 50,000 + 30,000 − 50,000",
              "₹70,000 — 50,000 + 30,000 − 10,000",
              "₹20,000 — the increase in the payable",
            ]}
            answer={1}
            explain="Tax paid = expense + opening payable − closing payable = 50,000 + 30,000 − 50,000 = ₹30,000. The ₹20,000 that accrued but was unpaid stays as a liability — and appears as a working-capital addition, not as tax paid."
          />
        </div>

        <div className="mt-10">
          <Takeaways
            items={[
              <>Ladder: PBT → <b>non-cash</b> → <b>non-operating</b> → <b>working capital</b> → cash generated → <b>tax paid</b>.</>,
              <>Compass lands at <b>₹72,000</b>; Ajay walks ₹4,32,000 down to <b>₹3,48,000</b>.</>,
              <>Interest/dividends <b>received → investing</b>; <b>paid → financing</b>.</>,
              <>Tax paid = expense + opening payable − closing payable.</>,
              <>Credit purchases of assets never touch the statement — no cash, no entry.</>,
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER — SIX QUESTIONS & PIONEER (Lecture 27)
   ============================================================ */

const SIX_Q = [
  {
    t: "Why did cash fall despite profits?",
    a: "Quality of earnings. Compass shows ₹11,41,000 of net profit but only ₹72,000 of operating cash — the profit never became cash. Inventory tied up ₹58,000, receivables another ₹44,000; sales of ₹8,081,000 out of ₹9,025,000 (≈90%) converted to cash; and equipment purchases of ₹11,73,000 drained the rest.",
  },
  {
    t: "How were equipment acquisitions financed?",
    a: "From everywhere at once: operating cash ₹72,000, share capital raised ₹1,00,000, disposal proceeds (equipment ₹22,000 + investments ₹16,000 = ₹45,000), interest received ₹5,000 — and existing cash balances. Equipment bought on credit (₹49,000) never appears: no cash moved.",
  },
  {
    t: "How were the equity proceeds used?",
    a: "₹1,00,000 raised: ₹28,000 repaid existing loans; of the ₹72,000 remaining, ₹25,000 went to dividends and ₹22,000 to interest — leaving ₹25,000, which is why financing cash flow is still positive. The debenture-to-equity conversion, again, moved no cash.",
  },
  {
    t: "Is capacity expansion straining cash?",
    a: "Yes — investing shows a net outflow of ₹11,28,000, financed only partly from long-term sources. Rapid supplier payments, loose inventory control (+₹58,000) and rising receivables (+₹44,000) added pressure. Expansion is being paid for out of operations and existing reserves.",
  },
  {
    t: "Does the company have financial flexibility?",
    a: "Fair flexibility: current investments could be liquidated without disrupting operations; debt-to-equity of 0.54:1 leaves borrowing capacity; supplier terms and bank lines are open; and operating cash flow of ₹72,000 is a buffer against adverse conditions.",
  },
  {
    t: "What about creditors and shareholders?",
    a: "Creditors sleep well: operating cash covers interest 3.3× (72,000 ÷ 22,000). Shareholders should worry: the ₹25,000 dividend is 12.5% of share capital, and after interest only ₹50,000 remains — a 50% payout of available cash. Maintaining 12.5% on the enlarged base would demand ≈₹43,750 a year against thin cash.",
  },
];

const PIONEER = [
  { sec: "Operating", rows: [
    ["Net profit before taxation", "+2,70,000"],
    ["Depreciation (furniture + equipment)", "+45,000"],
    ["Patent amortization", "+5,000"],
    ["Loss on sale of equipment", "+5,000"],
    ["Provision for taxation (increase)", "+20,000"],
    ["Working-capital adjustments", "…"],
    ["Cash generated from operations", "1,82,000"],
    ["Less: tax paid", "−30,000"],
    ["Net cash from operating activities", "+1,52,000"],
  ] },
  { sec: "Investing", rows: [
    ["Sale proceeds of equipment", "+30,000"],
    ["Purchase of equipment", "−80,000"],
    ["Purchase of investments", "−1,00,000"],
    ["Net cash used in investing", "−1,50,000"],
  ] },
  { sec: "Financing", rows: [
    ["Share capital issued", "+50,000"],
    ["Loan repaid", "−50,000"],
    ["Dividend paid", "−50,000"],
    ["Interest paid", "−10,000"],
    ["Net cash used in financing", "−60,000"],
  ] },
];

function PioneerBuild() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {PIONEER.map((p, i) => {
        const isOpen = open === i;
        return (
          <div key={p.sec} className={`overflow-hidden rounded-2xl border ${isOpen ? "border-[#059669]" : "border-[#e0ece6]"} bg-[#fffdf9]`}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between px-4 py-3"
            >
              <span className="text-[.9rem] font-extrabold text-[#3e2c1d]">{p.sec}</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} style={{ color: FA_G[700] }} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-[#e4f1ea]">
                    {p.rows.map(([k, v], j) => {
                      const strong = !v.startsWith("…") && (j === p.rows.length - 1 || k.startsWith("Net cash") || k.startsWith("Cash generated"));
                      return (
                        <div
                          key={k}
                          className={`flex items-center justify-between gap-2 px-4 py-1.5 text-[.78rem] ${
                            strong ? "font-black" : "font-semibold"
                          }`}
                          style={{ background: strong ? FA_G.wash : "transparent", color: strong ? FA_G[800] : "#2b2014" }}
                        >
                          <span>{k}</span>
                          <span className="font-mono whitespace-nowrap">{v}</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export function FaCashflowHealthSection() {
  return (
    <Section id="cashflow-health">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 27 · The diagnosis"
          title={
            <>
              Six questions turn a statement into a <span style={{ color: FA_G[700] }}>verdict</span>.
            </>
          }
          lead="The three sections are the anatomy; analysis is the medicine. Compass Company&apos;s statement answers six questions about earnings quality, financing, expansion strain, flexibility — and whether the dividend can survive."
        />

        <FaReadStep n="01" title="The six questions" sub="Compass Company, interrogated" />
        <div className="grid gap-3 md:grid-cols-2">
          {SIX_Q.map((q, i) => (
            <Reveal key={q.t} delay={i * 0.04}>
              <div className="card-warm h-full p-5">
                <span className="font-mono text-[.62rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
                  Question {i + 1}
                </span>
                <p className="mt-1 text-[.95rem] font-extrabold leading-snug text-[#3e2c1d]">{q.t}</p>
                <p className="mt-2 text-[.82rem] leading-relaxed text-[#2b2014]">{q.a}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            { icon: Percent, k: "3.3×", d: "interest cover — 72,000 ÷ 22,000", tone: FA_G[700] },
            { icon: TrendingDown, k: "₹11,41,000 → ₹72,000", d: "profit vs operating cash — the quality gap", tone: "#b3402c" },
            { icon: BadgePercent, k: "12.5% → 50%", d: "dividend rate vs payout of available cash", tone: FA_G.gold },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.k}>
                <div className="rounded-2xl border border-[#e0ece6] bg-[#fffdf9] p-4 text-center">
                  <Icon className="mx-auto h-5 w-5" style={{ color: s.tone }} />
                  <p className="mt-1.5 font-mono text-[1.02rem] font-black text-[#3e2c1d]">{s.k}</p>
                  <p className="mt-0.5 text-[.72rem] leading-snug text-muted-warm">{s.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <FaReadStep n="02" title="Worked example — Pioneer Limited" sub="A full statement, built from working notes" />
        <Reveal>
          <FaEq label="The working notes — where the numbers come from">{`Net profit: change in reserves & surplus        = 1,70,000
  + tax provision                    +50,000
  + proposed dividend                +50,000
  = Net profit before taxation       = 2,70,000

Depreciation: furniture 30,000 + equipment 15,000 = 45,000
Amortization: patent 1,00,000 → 95,000            =  5,000
Equipment: opening 2,00,000 + bought 80,000
           − depreciation 15,000 − closing 2,30,000 = 35,000
           sold at a 5,000 loss → proceeds          = 30,000
Tax: opening provision 30,000 PAID this year;
     closing 50,000; the 20,000 increase is added back`}</FaEq>
        </Reveal>
        <div className="mt-4">
          <PioneerBuild />
        </div>
        <Reveal className="mt-4">
          <FaEq label="The closing check">{`Operating  +1,52,000
Investing  −1,50,000
Financing   −60,000
            ────────
Net change  −58,000

Opening cash  2,00,000 − 58,000 = Closing cash 1,42,000
↳ verified against the balance sheet. The statement closes.`}</FaEq>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FaQuiz
            source="Lecture 27 · check yourself"
            q="Compass earned ₹11,41,000 of profit but generated ₹72,000 of operating cash. The FIRST question an analyst asks is…"
            options={[
              "Is the auditor independent?",
              "What is the quality of earnings — did profit become cash, or is it trapped in receivables and inventory?",
              "Should the dividend be raised?",
              "Is the depreciation method too aggressive?",
            ]}
            answer={1}
            explain="A ₹10,69,000 gap between profit and operating cash is a quality-of-earnings question: inventory +58,000 and receivables +44,000 locked cash in working capital. Profit is an opinion; the statement reveals how much of it became cash."
          />
          <FaQuiz
            source="Lecture 27 · check yourself"
            q="Pioneer's equipment account: opening ₹2,00,000, purchases ₹80,000, depreciation ₹15,000, closing ₹2,30,000. Sold at a ₹5,000 loss. Sale proceeds were…"
            options={[
              "₹35,000 — the book value",
              "₹30,000 — book value minus the loss",
              "₹40,000 — book value plus the loss",
              "₹50,000 — cost minus depreciation",
            ]}
            answer={1}
            explain="Book value at disposal = 2,00,000 + 80,000 − 15,000 − 2,30,000 = 35,000. Sold at a 5,000 loss means cash received = 35,000 − 5,000 = 30,000 — the investing inflow. The 5,000 loss is added back in operating."
          />
        </div>

        <div className="mt-10">
          <Takeaways
            items={[
              <>Six questions: cash decline, financing sources, equity use, expansion strain, <b>flexibility</b>, creditor &amp; shareholder outlook.</>,
              <>Profit of ₹11,41,000 vs cash of ₹72,000 = a <b>quality of earnings</b> flag, not necessarily fraud.</>,
              <>Creditors read <b>interest cover</b> (3.3×); shareholders read the <b>dividend&apos;s sustainability</b>.</>,
              <>Pioneer: 2,70,000 → <b>+1,52,000</b> / −1,50,000 / −60,000 → net −58,000 → closing cash <b>1,42,000</b>, verified.</>,
              <>Working notes first, statement second: depreciation, disposal book values and tax paid must be derived.</>,
            ]}
          />
        </div>
      </div>
    </Section>
  );
}
