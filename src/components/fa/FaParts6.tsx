"use client";

/* ============================================================
   Financial Accounting — PART 6 (shelf 03 of The Atlas)
   The conventions (L7): conservatism, full disclosure,
   consistency, materiality. Classification of accounts and
   the journal (L10). Opening entries and balancing (L12).
   ============================================================ */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BookOpenText,
  Check,
  Eye,
  Feather,
  Layers,
  Lock,
  RotateCcw,
  Ruler,
  ScrollText,
  ShieldAlert,
  X,
} from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { FA_BTN_GRAD, FA_G, FaCallout, FaEq, FaQuiz, FaReadStep } from "./FaParts1";

/* ============================================================
   CHAPTER — THE FOUR CONVENTIONS (Lecture 7)
   ============================================================ */

function ConservatismDial() {
  const COST = 100000;
  const [market, setMarket] = useState(140000);
  const value = Math.min(COST, market);
  const verdict =
    market > COST
      ? "Market above cost — value at COST. The unrealized gain stays out of the books."
      : market === COST
      ? "Market equals cost — value at ₹1,00,000."
      : "Market below cost — value at MARKET. The loss is recognized immediately.";

  return (
    <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
      <div className="flex flex-wrap items-center gap-2 border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3">
        <Lock className="h-4 w-4" style={{ color: FA_G[700] }} />
        <span className="font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
          The conservatism dial
        </span>
        <span className="text-[.7rem] font-semibold text-muted-warm">goods costing ₹1,00,000 · drag the market price</span>
      </div>
      <div className="px-4 py-5 sm:px-6">
        <div className="flex items-baseline justify-between">
          <label htmlFor="fa-market" className="text-[.8rem] font-bold text-[#3e2c1d]">
            Current market price
          </label>
          <span className="font-mono text-[.95rem] font-black" style={{ color: FA_G[800] }}>
            ₹{market.toLocaleString("en-IN")}
          </span>
        </div>
        <input
          id="fa-market"
          type="range"
          min={60000}
          max={160000}
          step={5000}
          value={market}
          onChange={(e) => setMarket(Number(e.target.value))}
          className="mt-2 w-full accent-[#047857]"
          aria-valuetext={`market price ${market} rupees`}
        />
        <div className="mt-4 grid grid-cols-3 items-end gap-2" aria-hidden>
          {[
            { label: "Cost", v: COST, color: "#cbdcd2" },
            { label: "Valuation", v: value, color: value < COST ? "#e8a896" : FA_G[500] },
            { label: "Market", v: market, color: "#d9c9a8" },
          ].map((b) => (
            <div key={b.label} className="text-center">
              <div className="mx-auto flex h-32 w-full max-w-[120px] items-end">
                <motion.div
                  className="w-full rounded-t-lg border border-black/5"
                  animate={{ height: `${(b.v / 160000) * 100}%`, background: b.color }}
                  transition={{ type: "spring", stiffness: 160, damping: 22 }}
                />
              </div>
              <p className="mt-1 font-mono text-[.62rem] font-bold uppercase tracking-wider text-[#7d9a8b]">{b.label}</p>
              <p className="font-mono text-[.74rem] font-black text-[#3e2c1d]">₹{b.v.toLocaleString("en-IN")}</p>
            </div>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.p
            key={verdict}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-4 rounded-xl border p-3 text-[.85rem] leading-relaxed"
            style={{ borderColor: FA_G.border, background: FA_G.wash, color: "#2b2014" }}
          >
            <b style={{ color: FA_G[700] }}>Inventory valued at ₹{value.toLocaleString("en-IN")}.</b> {verdict}
          </motion.p>
        </AnimatePresence>
        <p className="mt-3 text-[.78rem] leading-relaxed text-muted-warm">
          Anticipate no profit — so a gain is never booked before it is realized. Provide for all possible losses — so
          the moment market slips below cost, the write-down hits the books. The same logic creates provisions for
          doubtful debts from this year&apos;s profits, without waiting for an actual default.
        </p>
      </div>
    </div>
  );
}

const CONVENTION_SCENARIOS = [
  {
    s: "A pending lawsuit is reported in the notes to accounts",
    a: "Full disclosure",
    why: "Contingent liabilities must be disclosed — all material information of interest to proprietors, creditors and investors is honestly presented.",
  },
  {
    s: "Rounded figures for top management; exact paise for individual debtor ledgers",
    a: "Materiality",
    why: "Significance is contextual: every rupee is material to a debtor's account, but management reports may round to hundreds. Permitted under the Companies Act.",
  },
  {
    s: "Switching inventory valuation methods to inflate this year's profit",
    a: "Consistency & conservatism",
    why: "Arbitrary changes violate both. Legitimate method changes must be disclosed with their profit impact — never smuggled in.",
  },
  {
    s: "Creating excess provisions for bad debts to hide profits for a rainy day",
    a: "Full disclosure (violated)",
    why: "Secret reserves — understated assets, overstated liabilities — break the true-and-fair requirement that disclosure protects.",
  },
];

export function FaConventionsSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Section id="conventions">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 7 · Conventions"
          title={
            <>
              Not rules — <span style={{ color: FA_G[700] }}>evolved customs</span> that keep statements fair.
            </>
          }
          lead="Concepts are the assumptions accounting stands on. Conventions are the customs and traditions accountants follow when preparing statements — developed over time to ensure consistency and fairness."
        />

        <FaReadStep n="01" title="Convention 1 — conservatism" sub="Anticipate no profit; provide for all possible losses" />
        <ConservatismDial />
        <Reveal className="mt-4">
          <FaCallout kind="warn" title="The cost of playing safe">
            Conservatism has critics: it can create <b>secret reserves</b>, understate assets, overstate liabilities and
            show artificially low net income — so the statements may not reflect the true and fair value of the
            business. That tension is exactly why the next three conventions exist.
          </FaCallout>
        </Reveal>

        <FaReadStep n="02" title="Conventions 2, 3, 4" sub="Disclosure · consistency · materiality" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            {
              icon: Eye,
              t: "Full disclosure",
              d: "Statements must fully and fairly disclose what they purport to represent. Born of joint-stock companies: owners separated from managers rely entirely on the statements. The Companies Act legally requires a true and fair view — notes to accounts (contingent liabilities, investment values) are part of the deal.",
            },
            {
              icon: RotateCcw,
              t: "Consistency",
              d: "Practices must stay consistent period to period, or year-on-year comparison collapses. But not rigid inflexibility: better techniques may be adopted — provided the change and its profit impact are explicitly disclosed. Switching depreciation methods? Say so, and quantify it.",
            },
            {
              icon: Ruler,
              t: "Materiality",
              d: "Attach importance to significant details; ignore insignificant ones. Highly context-dependent: a debtor's ledger needs exact paise, a board report may round to hundreds. Judgment, permitted under the Companies Act, keeps statements free of useless clutter.",
            },
          ].map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.t} delay={i * 0.06}>
                <div className="card-warm h-full p-5">
                  <Icon className="h-5 w-5" style={{ color: FA_G[700] }} />
                  <p className="mt-2 text-[.98rem] font-extrabold text-[#3e2c1d]">{c.t}</p>
                  <p className="mt-1.5 text-[.83rem] leading-relaxed text-muted-warm">{c.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <FaReadStep n="03" title="The sorting drill" sub="The lecture's four scenarios — pick the convention, then reveal" />
        <div className="grid gap-3">
          {CONVENTION_SCENARIOS.map((sc, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={sc.s}>
                <div className="overflow-hidden rounded-2xl border border-[#e0ece6] bg-[#fffdf9]">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
                  >
                    <span className="text-[.88rem] font-bold text-[#3e2c1d]">{sc.s}</span>
                    <span
                      className="shrink-0 rounded-full px-2.5 py-1 text-[.62rem] font-black uppercase tracking-[.12em] text-white"
                      style={{ background: isOpen ? FA_BTN_GRAD : "#d6e8de" }}
                    >
                      {isOpen ? sc.a : "Which convention?"}
                    </span>
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
                        <p className="border-t border-[#e4f1ea] bg-white px-4 py-3 text-[.84rem] leading-relaxed text-[#2b2014]">
                          {sc.why}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FaQuiz
            source="Lecture 7 · check yourself"
            q="Goods cost ₹1,00,000; market price has fallen to ₹80,000. At what value does inventory appear — and which convention says so?"
            options={[
              "₹1,00,000 — cost, because that is what was paid (consistency)",
              "₹80,000 — the lower of cost and market (conservatism)",
              "₹1,40,000 — replacement value (going concern)",
              "₹90,000 — an average of the two (materiality)",
            ]}
            answer={1}
            explain="Conservatism: anticipate no profit, provide for all possible losses. Had market risen to ₹1,40,000 the goods would stay at ₹1,00,000 — the unrealized gain is never booked. The loss, though, is recognized the moment it appears."
          />
          <FaQuiz
            source="Lecture 7 · check yourself"
            q="A company switches depreciation methods and says nothing. Even if the new method is genuinely better, what has it violated?"
            options={[
              "Materiality only — the amount is small",
              "Nothing — better techniques are always allowed",
              "Consistency and full disclosure — changes are allowed but must be disclosed with their profit impact",
              "Conservatism — the new method must be more pessimistic",
            ]}
            answer={2}
            explain="Consistency does not mean rigid inflexibility — improved techniques may be adopted. But stakeholders must see the change and its financial impact in explanatory notes. Silence breaks full disclosure; arbitrary switches that flatter profit also break conservatism."
          />
        </div>

        <div className="mt-10">
          <Takeaways
            items={[
              <><b>Conservatism:</b> value inventory at the lower of cost and market; provide for doubtful debts from current profits.</>,
              <><b>Full disclosure:</b> true and fair view is a legal requirement — contingent liabilities go in the notes.</>,
              <><b>Consistency:</b> same practices year to year; changes allowed, but disclosed and quantified.</>,
              <><b>Materiality:</b> significance is contextual — exact for debtor ledgers, rounded for management reports.</>,
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER — CLASSIFICATION OF ACCOUNTS & THE JOURNAL (Lecture 10)
   ============================================================ */

const RULES = [
  { type: "Personal", rule: "Debit the receiver, credit the giver", ex: "Sell goods to Ravi on credit → debit Ravi (receiver), credit sales (giver)", persons: "Natural (Ravi) · Artificial (Tata, banks) · Representative (outstanding wages)" },
  { type: "Real", rule: "Debit what comes in, credit what goes out", ex: "Buy machinery for cash → debit machinery (in), credit cash (out)", persons: "Tangible (cash, machinery, buildings) · Intangible (goodwill, patents)" },
  { type: "Nominal", rule: "Debit all expenses and losses; credit all income and gains", ex: "Pay salary ₹30,000 → debit salary (expense), credit cash (out)", persons: "Expenses & losses (rent, depreciation) · Income & gains (sales, interest) — closed to P&L at year-end" },
];

const JOURNAL_STEPS = [
  "Analyze the transaction — identify the accounts (minimum two)",
  "Classify each account: personal, real or nominal",
  "Apply the rule for each type",
  "Enter the date",
  "Write the debit account first (…Dr.), then the indented credit (To …)",
  "Enter the amounts in the debit and credit columns",
  "Write the narration",
];

const SIMPLE_ENTRIES = [
  { story: "Paid Anbu ₹10,000 by cheque", entry: "Anbu A/c                Dr.  10,000\n    To Bank A/c                  10,000\n(Anbu is the receiver — personal; bank is the giver)", tag: "Personal" },
  { story: "Purchased furniture for cash ₹5,000", entry: "Furniture A/c           Dr.   5,000\n    To Cash A/c                   5,000\n(What comes in is debited — real accounts both)", tag: "Real" },
  { story: "Paid rent ₹5,000 in cash", entry: "Rent A/c                Dr.   5,000\n    To Cash A/c                   5,000\n(Expense debited — nominal; cash goes out — real)", tag: "Nominal" },
  { story: "Somu commenced a printing business with cash ₹50,000", entry: "Cash A/c                Dr.  50,000\n    To Somu's Capital A/c        50,000\n(Cash comes in — real; Somu is the giver — personal)", tag: "Mixed" },
  { story: "Bought goods for cash ₹4,000", entry: "Purchases A/c           Dr.   4,000\n    To Cash A/c                   4,000\n(Purchases is an expense — nominal)", tag: "Mixed" },
];

export function FaClassificationSection() {
  const [rule, setRule] = useState(0);
  return (
    <Section id="classification">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 10 · The traditional approach"
          title={
            <>
              Personal, real, nominal — <span style={{ color: FA_G[700] }}>three families, three rules</span>.
            </>
          }
          lead="The equation approach feels the effect; the traditional approach knows the rule. Accounts split into personal and impersonal, impersonal into real and nominal — and each family carries its own debit-credit law."
        />

        <FaReadStep n="01" title="The classification tree" sub="Every account the business will ever open lives somewhere here" />
        <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
          <div className="border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3 text-center">
            <span className="font-mono text-[.7rem] font-black uppercase tracking-[.22em] text-[#3e2c1d]">Accounts</span>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="border-b border-[#e4f1ea] p-5 md:border-r md:border-b-0">
              <p className="flex items-center gap-2 text-[.95rem] font-extrabold text-[#3e2c1d]">
                <Feather className="h-4 w-4" style={{ color: FA_G[700] }} /> Personal — persons
              </p>
              <div className="mt-3 grid gap-2">
                {[
                  ["Natural persons", "human beings — Ravi's account"],
                  ["Artificial persons", "firms, companies, banks — Tata, Reliance"],
                  ["Representative persons", "accounts standing for groups — outstanding wages (the workers owed)"],
                ].map(([t, d]) => (
                  <div key={t} className="rounded-xl border border-[#e4f1ea] bg-white px-3 py-2">
                    <p className="text-[.8rem] font-extrabold text-[#3e2c1d]">{t}</p>
                    <p className="text-[.74rem] text-muted-warm">{d}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 rounded-xl px-3 py-2 text-center text-[.74rem] font-bold" style={{ background: FA_G.wash, color: FA_G[700] }}>
                Rule: debit the receiver, credit the giver
              </p>
            </div>
            <div className="p-5">
              <p className="flex items-center gap-2 text-[.95rem] font-extrabold text-[#3e2c1d]">
                <Layers className="h-4 w-4" style={{ color: FA_G.gold }} /> Impersonal — everything else
              </p>
              <div className="mt-3 grid gap-2">
                <div className="rounded-xl border border-[#e4f1ea] bg-white px-3 py-2">
                  <p className="text-[.8rem] font-extrabold text-[#3e2c1d]">Real — assets, tangible & intangible</p>
                  <p className="text-[.74rem] text-muted-warm">Cash, raw materials, machinery, buildings, furniture · goodwill, trademarks, copyrights, patents</p>
                  <p className="mt-1 text-[.72rem] font-bold" style={{ color: FA_G[700] }}>Rule: debit what comes in, credit what goes out</p>
                </div>
                <div className="rounded-xl border border-[#e4f1ea] bg-white px-3 py-2">
                  <p className="text-[.8rem] font-extrabold text-[#3e2c1d]">Nominal (fictitious) — events, not things</p>
                  <p className="text-[.74rem] text-muted-warm">Expenses & losses: salaries, rent, depreciation, bad debts · Income & gains: sales, interest, discounts</p>
                  <p className="mt-1 text-[.72rem] font-bold" style={{ color: FA_G.gold }}>Rule: debit expenses & losses, credit incomes & gains — closed to P&L at year-end</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FaReadStep n="02" title="The three rules, side by side" sub="Click a family — see its law in action" />
        <div className="grid gap-2 md:grid-cols-3">
          {RULES.map((r, i) => (
            <button
              key={r.type}
              type="button"
              onClick={() => setRule(i)}
              aria-pressed={rule === i}
              className={`rounded-2xl border p-4 text-left transition-all duration-300 ${
                rule === i
                  ? "border-[#059669] bg-[#ecfdf5] shadow-[0_16px_36px_-18px_rgba(5,150,105,.55)]"
                  : "border-[#e0ece6] bg-[#fffdf9] hover:border-[#a9dcc4]"
              }`}
            >
              <p className="font-mono text-[.62rem] font-black uppercase tracking-[.2em]" style={{ color: rule === i ? FA_G[700] : "#9db8a9" }}>
                {r.type} account
              </p>
              <p className="mt-1.5 text-[.92rem] font-extrabold leading-snug text-[#3e2c1d]">{r.rule}</p>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={rule}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-3 rounded-2xl border p-4"
            style={{ borderColor: FA_G.border, background: FA_G.wash }}
          >
            <p className="text-[.86rem] leading-relaxed text-[#2b2014]">
              <b style={{ color: FA_G[700] }}>In action:</b> {RULES[rule].ex}
            </p>
            <p className="mt-2 text-[.78rem] leading-relaxed text-muted-warm">{RULES[rule].persons}</p>
          </motion.div>
        </AnimatePresence>

        <FaReadStep n="03" title="The journal — book of original entry" sub="Five columns, chronological, straight from the source documents" />
        <div className="grid gap-4 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <FaEq label="Anatomy of a journal entry">{`Date | Particulars            | LF | Debit  | Credit
------------------------------------------------------
     | Cash A/c            Dr.     | 50,000 |
     |    To Somu's Capital A/c     |        | 50,000
     | (Being business commenced
     |  with cash — the narration)

Debit first, followed by "Dr."
Credit indented, preceded by "To"
LF = the ledger folio (page) the posting lands on`}</FaEq>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card-warm h-full p-5">
              <p className="text-[.9rem] font-extrabold text-[#3e2c1d]">Journalizing — seven steps</p>
              <ol className="mt-2 grid gap-1.5">
                {JOURNAL_STEPS.map((s, i) => (
                  <li key={s} className="flex items-start gap-2 text-[.8rem] leading-relaxed text-[#2b2014]">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[.62rem] font-black text-white"
                      style={{ background: FA_BTN_GRAD }}
                    >
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        <FaReadStep n="04" title="Simple entries — the lecture's five" sub="Each one names its rule" />
        <div className="grid gap-3">
          {SIMPLE_ENTRIES.map((e) => (
            <Reveal key={e.story}>
              <div className="overflow-hidden rounded-2xl border border-[#e0ece6] bg-[#fffdf9]">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e4f1ea] px-4 py-2.5">
                  <p className="text-[.86rem] font-bold text-[#3e2c1d]">{e.story}</p>
                  <span className="rounded-full bg-[#ecfdf5] px-2.5 py-0.5 text-[.62rem] font-black uppercase tracking-[.12em]" style={{ color: FA_G[700] }}>
                    {e.tag}
                  </span>
                </div>
                <pre className="overflow-x-auto px-4 py-3 font-mono text-[.78rem] leading-relaxed text-[#1d4433]">{e.entry}</pre>
              </div>
            </Reveal>
          ))}
        </div>

        <FaReadStep n="05" title="Compound entries — more than two accounts" sub="The settlement and the insolvency" />
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="h-full">
              <FaEq label="Full settlement — Kyrthana">{`Owe Kyrthana ₹5,000; pay ₹4,800
in full settlement (₹200 discount).

Kyrthana A/c            Dr.   5,000
    To Cash A/c                  4,800
    To Discount Received A/c       200

Kyrthana (personal) debited — the receiver.
Cash (real) credited — what goes out.
Discount received (nominal) credited — a gain.`}</FaEq>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full">
              <FaEq label="Insolvency — Dinesh, 40 paise in the rupee" tone="gold">{`Dinesh owes ₹10,000 and is declared
insolvent; his estate pays 40 paise/₹.

Cash A/c                Dr.   4,000   (40% of 10,000)
Bad Debts A/c           Dr.   6,000   (the loss — 60%)
    To Dinesh's A/c             10,000   (debtor settled)

The unrecoverable 60% is a nominal loss —
debited, then closed to the P&L.`}</FaEq>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FaQuiz
            source="Lecture 10 · check yourself"
            q="Outstanding wages account represents the workers a firm owes money to. What kind of account is it?"
            options={[
              "Real — it will be paid in cash",
              "Nominal — wages are an expense",
              "Personal — a representative personal account standing for a group of people",
              "Impersonal real — it is a liability",
            ]}
            answer={2}
            explain="Representative personal accounts stand in for a group of persons — outstanding wages represents the workers owed. That makes it personal, so the rule 'debit the receiver, credit the giver' applies when the wages are finally settled."
          />
          <FaQuiz
            source="Lecture 10 · check yourself"
            q="A customer owing ₹10,000 is declared insolvent and pays 40 paise in the rupee. How is the missing ₹6,000 treated?"
            options={[
              "Credited to bad debts recovered",
              "Debited to bad debts — a nominal loss, later closed to the P&L",
              "Carried forward as a receivable until the estate pays more",
              "Debited to the cash account at 60%",
            ]}
            answer={1}
            explain="Cash A/c Dr 4,000 (what came in), Bad Debts A/c Dr 6,000 (the loss), To Dinesh's A/c 10,000 (the debtor settled). Bad debts is a nominal account — debited as a loss and closed to the profit & loss account at year-end."
          />
        </div>

        <div className="mt-10">
          <Takeaways
            items={[
              <>Personal: <b>debit the receiver, credit the giver</b> — natural, artificial and representative persons.</>,
              <>Real: <b>debit what comes in, credit what goes out</b> — tangible and intangible assets.</>,
              <>Nominal: <b>debit expenses & losses, credit incomes & gains</b> — closed to P&L at year-end.</>,
              <>The journal is the book of original entry: date, particulars with Dr./To, LF, amounts, narration.</>,
              <>Compound entries handle three or more accounts — settlements with discounts, insolvencies at paise in the rupee.</>,
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER — OPENING ENTRIES & BALANCING (Lecture 12)
   ============================================================ */

const JOY_ASSETS = [
  { a: "Cash", v: 45000 },
  { a: "Stock", v: 50000 },
  { a: "Sohan (debtor)", v: 35000 },
  { a: "Furniture", v: 50000 },
];
const JOY_CLAIMS = [
  { a: "Ram (creditor)", v: 20000 },
  { a: "Joy's Capital", v: 160000 },
];

function JoyOpening() {
  const assets = JOY_ASSETS.reduce((n, x) => n + x.v, 0);
  const claims = JOY_CLAIMS.reduce((n, x) => n + x.v, 0);
  return (
    <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
      <div className="flex flex-wrap items-center gap-2 border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3">
        <BookOpenText className="h-4 w-4" style={{ color: FA_G[700] }} />
        <span className="font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
          Joy&apos;s business — the opening entry
        </span>
        <span className="text-[.7rem] font-semibold text-muted-warm">balances brought forward</span>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="border-b border-[#e4f1ea] p-4 md:border-r md:border-b-0">
          <p className="text-[.72rem] font-black uppercase tracking-[.16em] text-[#7d9a8b]">Debit — assets come in</p>
          <div className="mt-2 grid gap-1.5">
            {JOY_ASSETS.map((x) => (
              <div key={x.a} className="flex items-center justify-between rounded-lg bg-white px-3 py-1.5 text-[.82rem]">
                <span className="font-semibold text-[#3e2c1d]">{x.a}</span>
                <span className="font-mono font-bold" style={{ color: FA_G[700] }}>{x.v.toLocaleString("en-IN")}</span>
              </div>
            ))}
            <div className="flex items-center justify-between rounded-lg px-3 py-1.5 text-[.85rem] font-black" style={{ background: FA_G.wash }}>
              <span>Total assets</span>
              <span className="font-mono" style={{ color: FA_G[800] }}>{assets.toLocaleString("en-IN")}</span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <p className="text-[.72rem] font-black uppercase tracking-[.16em] text-[#b08d4f]">Credit — who has claims</p>
          <div className="mt-2 grid gap-1.5">
            {JOY_CLAIMS.map((x) => (
              <div key={x.a} className="flex items-center justify-between rounded-lg bg-white px-3 py-1.5 text-[.82rem]">
                <span className="font-semibold text-[#3e2c1d]">{x.a}</span>
                <span className="font-mono font-bold" style={{ color: FA_G.gold }}>{x.v.toLocaleString("en-IN")}</span>
              </div>
            ))}
            <div className="flex items-center justify-between rounded-lg px-3 py-1.5 text-[.85rem] font-black" style={{ background: "#fbf4e4" }}>
              <span>Total claims</span>
              <span className="font-mono" style={{ color: FA_G.gold }}>{claims.toLocaleString("en-IN")}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#e4f1ea] bg-white px-4 py-3">
        <p className="text-[.84rem] leading-relaxed text-[#2b2014]">
          <b style={{ color: assets === claims ? FA_G[700] : "#b3402c" }}>
            {assets.toLocaleString("en-IN")} = {claims.toLocaleString("en-IN")}</b>{" "}
          — balanced, as it must be. Narration: <i>&ldquo;Balances of assets and liabilities brought forward.&rdquo;</i> Nominal
          accounts never open here: their old balances went to the P&amp;L — only real accounts (assets, liabilities,
          capital) carry forward.
        </p>
      </div>
    </div>
  );
}

export function FaBalancingSection() {
  return (
    <Section id="balancing">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 12 · Ledger mechanics"
          title={
            <>
              Balances <span style={{ color: FA_G[700] }}>carried down</span>, balances{" "}
              <span style={{ color: FA_G[700] }}>brought down</span>.
            </>
          }
          lead="Ongoing businesses do not start from zero. The opening entry brings forward the accounts that never closed — and at period end every account earns its balance c/d, which becomes the next period's balance b/d."
        />

        <FaReadStep n="01" title="The opening entry" sub="Only real accounts carry forward — nominal ones went to the P&L" />
        <JoyOpening />

        <FaReadStep n="02" title="Balancing an account" sub="Total both sides; park the difference on the lower side as Balance c/d" />
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <FaEq label="Cash account — balanced">{`            Dr.                      |  Cr.
---------------------------------+---------------------------------
To Capital A/c       3,00,000    | By Bank A/c          2,00,000
To Sales A/c            5,000    | By Purchases A/c        10,000
                                 | By Balance c/d          95,000
                       3,05,000  |                        3,05,000

Debit total  3,05,000  >  Credit total 2,10,000
→ the difference ₹95,000 is parked on the
  CREDIT side as "By Balance c/d"
→ the account carries a DEBIT balance
→ next period it opens as "To Balance b/d  95,000"`}</FaEq>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col gap-3">
              <div className="card-warm p-5">
                <p className="text-[.9rem] font-extrabold text-[#3e2c1d]">The CD/BD handshake</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="rounded-lg px-2.5 py-1.5 text-[.72rem] font-black text-white" style={{ background: FA_BTN_GRAD }}>
                    Balance c/d
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#9db8a9]" />
                  <span className="rounded-lg border border-[#e3c98f] bg-[#fbf4e4] px-2.5 py-1.5 text-[.72rem] font-black text-[#8a5a10]">
                    Balance b/d
                  </span>
                </div>
                <p className="mt-3 text-[.82rem] leading-relaxed text-[#2b2014]">
                  The difference placed to equalize an account (c/d — carried down) becomes the opening figure of that
                  account in the next period (b/d — brought down). The side with the higher total decides the account&apos;s
                  nature: debit balance or credit balance.
                </p>
              </div>
              <div className="card-warm p-5">
                <p className="text-[.9rem] font-extrabold text-[#3e2c1d]">Conventions on the page</p>
                <ul className="mt-2 grid gap-1.5 text-[.82rem] leading-relaxed text-[#2b2014]">
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: FA_G[600] }} />Debit side entries read &ldquo;To …&rdquo;; credit side reads &ldquo;By …&rdquo;</li>
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: FA_G[600] }} />Every opening balance is marked b/d; every closing balance c/d</li>
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: FA_G[600] }} />A line rules off the account once both sides total</li>
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: FA_G[600] }} />Drawings (cash or goods taken by the owner) sit debited, and move to capital at year-end</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <FaCallout kind="insight" title="What each account says when balanced">
            Capital — the proprietor&apos;s stake, usually a single credit. Bank — deposits and withdrawals, balanced like
            cash. Personal accounts — the outstanding owed to or by each person. Purchases &amp; sales — the period&apos;s
            trading volume. Drawings — what the owner took for personal use, on its way to the capital account.
          </FaCallout>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FaQuiz
            source="Lecture 12 · check yourself"
            q="Joy's books open with cash ₹45,000, stock ₹50,000, debtor Sohan ₹35,000, furniture ₹50,000 — and creditor Ram ₹20,000. What is the capital?"
            options={[
              "₹1,80,000 — the total of all assets",
              "₹1,60,000 — assets ₹1,80,000 minus creditor Ram ₹20,000",
              "₹2,00,000 — assets plus the creditor",
              "₹1,50,000 — cash and stock only",
            ]}
            answer={1}
            explain="The opening entry debits the assets (₹1,80,000 total) and credits the claims: Ram ₹20,000 and Joy's Capital ₹1,60,000 — because Capital = Assets − Liabilities. The narration reads 'balances brought forward'."
          />
          <FaQuiz
            source="Lecture 12 · check yourself"
            q="A cash account shows debits of ₹3,05,000 and credits of ₹2,10,000. On which side does the balancing figure go, and what is the account's nature?"
            options={[
              "₹95,000 on the debit side — credit balance",
              "₹95,000 on the credit side as Balance c/d — debit balance",
              "₹95,000 on the credit side — credit balance",
              "₹5,15,000 — the two sides added",
            ]}
            answer={1}
            explain="Debits 3,05,000 exceed credits 2,10,000 by 95,000, so 'By Balance c/d 95,000' sits on the lower (credit) side to equalize — making the cash account a debit balance. Next period it opens as 'To Balance b/d 95,000'."
          />
        </div>

        <div className="mt-10">
          <Takeaways
            items={[
              <>The <b>opening entry</b> brings forward real accounts only — nominal balances died in the P&amp;L.</>,
              <>Balancing: total both sides, park the difference on the <b>lower side as Balance c/d</b>.</>,
              <>c/d this period = <b>b/d next period</b> — the handshake between periods.</>,
              <>Higher side decides nature: assets &amp; expenses carry debit balances; liabilities, capital, incomes carry credit balances.</>,
            ]}
          />
        </div>
      </div>
    </Section>
  );
}
