"use client";

/* ============================================================
   Financial Accounting — PART 2 of 4 (shelf 03 of The Atlas)
   Module 2: the dual aspect concept, the accounting equation,
   the three elements (assets / liabilities / equity), the
   equation worked three ways (Hot Chocolate · Abraham ·
   Coffee Corner), and the Equation Machine — Rani's four
   transactions applied to a living equation.
   ============================================================ */

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Banknote,
  Building2,
  Check,
  Copyright,
  HandCoins,
  RotateCcw,
  Scale,
  Wallet,
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
   CHAPTER 5 — THE DUAL ASPECT CONCEPT
   ============================================================ */
export function FaDualAspectSection() {
  return (
    <Section id="dual-aspect">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHead
          eyebrow="Module 2 · The dual aspect concept"
          title={
            <>
              Every rupee tells <span className="grad-emerald">two stories</span>
            </>
          }
          lead="Every business transaction has a DUAL effect — it touches two aspects simultaneously. One idea, and the whole of double-entry book-keeping falls out of it."
        />

        <FaReadStep n="01" title="A starts with ₹10,000 — and two things happen at once" />
        <div className="grid gap-3 md:grid-cols-2">
          <FaCallout kind="insight" title="Aspect one — the business has an asset">
            The business now holds cash of <b>&ldquo;10,000</b> — a resource it controls.
          </FaCallout>
          <FaCallout kind="why" title="Aspect two — the business owes it">
            The business must repay that sum to the proprietor: <b>&ldquo;10,000 of
            proprietor&rsquo;s capital</b>. Same number, other side of the coin.
          </FaCallout>
        </div>

        {/* seesaw diagram */}
        <Reveal>
          <div className="card-warm mt-6 overflow-hidden p-5 sm:p-7">
            <svg viewBox="0 0 900 260" className="h-auto w-full" role="img" aria-label="The dual aspect seesaw: Capital 10,000 on the equity side balanced against Cash 10,000 on the asset side">
              <defs>
                <linearGradient id="faPanGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#047857" />
                </linearGradient>
              </defs>
              {/* beam */}
              <motion.rect
                x="130" y="98" width="640" height="10" rx="5" fill="url(#faPanGrad)"
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "450px 103px" }}
              />
              {/* fulcrum */}
              <motion.path d="M 450 108 L 420 190 L 480 190 Z" fill="#8a6b45" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.4 }} />
              <motion.text x="450" y="222" textAnchor="middle" fontSize="12" fontWeight="700" fill="#8a6b45" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
                the same transaction, seen from both sides
              </motion.text>
              {/* left pan — equity */}
              <motion.g initial={{ opacity: 0, y: -18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.5 }}>
                <path d="M 150 108 L 210 108 L 240 168 L 120 168 Z" fill="#f2faf6" stroke="#a9dcc4" strokeWidth="2" />
                <text x="180" y="140" textAnchor="middle" fontSize="13" fontWeight="800" fill="#047857">CAPITAL</text>
                <text x="180" y="160" textAnchor="middle" fontSize="14" fontWeight="800" fill="#2b2014">{'\u20B9'}10,000</text>
              </motion.g>
              {/* right pan — asset */}
              <motion.g initial={{ opacity: 0, y: -18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.65, duration: 0.5 }}>
                <path d="M 690 108 L 750 108 L 780 168 L 660 168 Z" fill="#f2faf6" stroke="#a9dcc4" strokeWidth="2" />
                <text x="720" y="140" textAnchor="middle" fontSize="13" fontWeight="800" fill="#047857">CASH</text>
                <text x="720" y="160" textAnchor="middle" fontSize="14" fontWeight="800" fill="#2b2014">{'\u20B9'}10,000</text>
              </motion.g>
              {/* equals pulse */}
              <motion.circle cx="450" cy="66" r="26" fill="none" stroke="#10b981" strokeWidth="2" style={{ transformBox: "fill-box", transformOrigin: "center" }} animate={{ opacity: [0.15, 0.6, 0.15], scale: [1, 1.25, 1] }} transition={{ duration: 3, repeat: Infinity }} />
              <motion.text x="450" y="74" textAnchor="middle" fontSize="24" fontWeight="900" fill="#047857" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }}>
                =
              </motion.text>
              {/* captions */}
              <text x="180" y="196" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#6f5438">Equities (claims)</text>
              <text x="720" y="196" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#6f5438">Assets (resources)</text>
            </svg>
          </div>
        </Reveal>

        <div className="mt-6">
          <FaEq label="The expression, written as an equation">{`Capital (Equities) = Cash (Assets)

      \u20B910,000      =     \u20B910,000`}</FaEq>
        </div>

        <FaReadStep n="02" title="Three transactions — watch the two columns grow in lock-step" sub="Liabilities + Capital = Assets (or) Equities = Assets" />
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-[#ecd9bd] bg-[#fffdf9]">
            <table className="warm-table min-w-[640px]">
              <thead>
                <tr>
                  <th>Step</th>
                  <th>Transaction</th>
                  <th>Equities (claims)</th>
                  <th>Assets (resources)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-mono font-bold" style={{ color: FA_G[700] }}>1</td>
                  <td>A invests {'\u20B9'}10,000 capital</td>
                  <td>Capital {'\u20B9'}10,000</td>
                  <td>Cash {'\u20B9'}10,000</td>
                </tr>
                <tr>
                  <td className="font-mono font-bold" style={{ color: FA_G[700] }}>2</td>
                  <td>Buys furniture {'\u20B9'}5,000</td>
                  <td>Capital {'\u20B9'}10,000</td>
                  <td>Cash {'\u20B9'}5,000 + Furniture {'\u20B9'}5,000</td>
                </tr>
                <tr>
                  <td className="font-mono font-bold" style={{ color: FA_G[700] }}>3</td>
                  <td>Borrows {'\u20B9'}30,000 from bank</td>
                  <td>Capital {'\u20B9'}10,000 + Bank loan {'\u20B9'}30,000</td>
                  <td>Cash {'\u20B9'}35,000 + Furniture {'\u20B9'}5,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>
        <div className="mt-4">
          <FaCallout kind="insight" title="The foundation stone">
            &ldquo;For each debit, there is an equivalent credit&rdquo; — that sentence is the{" "}
            <b>foundation of double-entry book-keeping</b>. The two columns above move in
            lock-step not because accountants are careful, but because the arithmetic cannot
            do otherwise.
          </FaCallout>
        </div>

        <div className="mt-8">
          <FaEq label="Two names, one equation" tone="gold">{`Liabilities + Capital = Assets      (or)      Equities = Assets

rearranged with outsiders first:        Assets = Liabilities + Equity`}</FaEq>
        </div>

        <div className="mt-8">
          <FaQuiz
            source="Debit / credit directions"
            q="Under the accounting equation approach, which family of accounts INCREASES with a debit?"
            options={[
              "Liabilities, capital and revenues",
              "Assets, expenses and drawings",
              "Only capital",
              "Only liabilities",
            ]}
            answer={1}
            explain="Rewrite the equation as Assets + Expenses + Drawings = Liabilities + Capital + Revenue. The left-hand family grows with debits (and shrinks with credits); the right-hand family grows with credits. Every recording rule in the course is this line read aloud."
          />
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 6 — ASSETS, LIABILITIES & EQUITY (the three elements)
   ============================================================ */
export function FaElementsSection() {
  return (
    <Section id="elements">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHead
          eyebrow="Module 2 · The three elements"
          title={
            <>
              Assets, liabilities, equity —{" "}
              <span className="grad-emerald">the whole cast</span>
            </>
          }
          lead="Every account in every ledger belongs to one of three families. Learn what admits a resource into each family, and you can classify anything a business does."
        />

        <FaReadStep n="01" title="What is an asset?" sub="A resource controlled by the entity, from past events, with future benefit expected" />
        <div className="grid gap-3 md:grid-cols-2">
          <FaCallout kind="insight" title="Two conditions — both must hold">
            <b>Control</b> — the entity can restrict others from using the resource.{" "}
            <b>Future benefit</b> — the resource is expected to generate economic value going
            forward. If <em>either</em> condition is missing, it is <b>not an asset</b>.
          </FaCallout>
          <div className="overflow-hidden rounded-2xl border border-[#ecd9bd] bg-[#fffdf9]">
            <table className="warm-table">
              <thead>
                <tr>
                  <th>Candidate</th>
                  <th>Verdict</th>
                  <th>Why</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Public park</td>
                  <td className="font-bold text-[#b3402c]">Not an asset</td>
                  <td>You enjoy it — but you cannot control access</td>
                </tr>
                <tr>
                  <td>Broken iPod</td>
                  <td className="font-bold text-[#b3402c]">Not an asset</td>
                  <td>You control it — but no future benefit</td>
                </tr>
                <tr>
                  <td className="font-bold" style={{ color: FA_G[700] }}>Cash</td>
                  <td className="font-bold" style={{ color: FA_G[700] }}>The ideal asset</td>
                  <td>Controlled — and it buys every other asset</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <FaReadStep n="02" title="Types of assets" sub="Same quality — future economic benefit — classified by form and claim" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { icon: Building2, t: "Tangible assets", d: "Physical form you can see and touch.", items: ["Land & buildings", "Plant & equipment", "Inventories"] },
            { icon: Copyright, t: "Intangible assets", d: "Exclusive rights, no physical substance.", items: ["Patents", "Copyrights", "Trademarks"] },
            { icon: HandCoins, t: "Financial claims", d: "Legally enforceable claims on other parties.", items: ["Accounts receivable", "Investments in bonds", "Cash & equivalents"] },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 90}>
              <div className="card-warm lift h-full p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md" style={{ background: FA_BTN_GRAD }}>
                  <c.icon className="h-4.5 w-4.5" />
                </span>
                <p className="mt-3 text-[.98rem] font-extrabold text-[#3e2c1d]">{c.t}</p>
                <p className="mt-1 text-[.8rem] leading-relaxed text-muted-warm">{c.d}</p>
                <ul className="mt-3 space-y-1.5">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-[.82rem] font-semibold text-[#2b2014]">
                      <Check className="h-3.5 w-3.5 shrink-0" style={{ color: FA_G[700] }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <FaReadStep n="03" title="What is a liability?" sub="A present obligation, from past events, whose settlement is an outflow of resources" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm h-full p-5">
              <p className="text-[.95rem] font-extrabold text-[#3e2c1d]">Contractual liabilities</p>
              <p className="mt-2 text-[.85rem] leading-relaxed text-muted-warm">
                Most liabilities arise from <b>contracts</b> — amounts payable for electricity
                used, salaries owed to employees, loans payable. Typically{" "}
                <b>precise, known amounts</b>.
              </p>
            </div>
          </Reveal>
          <Reveal delay={110}>
            <div className="card-warm h-full p-5">
              <p className="text-[.95rem] font-extrabold text-[#3e2c1d]">Statutory liabilities</p>
              <p className="mt-2 text-[.85rem] leading-relaxed text-muted-warm">
                Some obligations arise from <b>law</b> — employer contributions to a provident
                fund, income tax payable. These may require <b>estimation</b> based on
                applicable rules.
              </p>
            </div>
          </Reveal>
        </div>

        <FaReadStep n="04" title="What is equity?" sub="The residual interest — what truly belongs to the owners" />
        <FaCallout kind="insight" title="The leftover, defined">
          Equity is the <b>residual interest in the assets after deducting all liabilities</b> —
          the &ldquo;leftover&rdquo; value once every debt is settled. It increases through{" "}
          <b>owner investments</b> and <b>profits from operations</b>; it decreases through{" "}
          <b>distributions to owners</b> (dividends) and <b>losses</b>. In a company, this is
          called <b>shareholders&rsquo; equity</b>.
        </FaCallout>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm h-full p-5">
              <p className="flex items-center gap-2 text-[.95rem] font-extrabold text-[#3e2c1d]">
                <Banknote className="h-4 w-4" style={{ color: FA_G[700] }} /> Share capital
              </p>
              <p className="mt-2 text-[.85rem] leading-relaxed text-muted-warm">
                The amount <b>contributed by shareholders</b> towards the company&rsquo;s capital,
                recorded in the share capital account — the foundational investment made when
                shares are issued.
              </p>
            </div>
          </Reveal>
          <Reveal delay={110}>
            <div className="card-warm h-full p-5">
              <p className="flex items-center gap-2 text-[.95rem] font-extrabold text-[#3e2c1d]">
                <Wallet className="h-4 w-4" style={{ color: FA_G[700] }} /> Retained earnings
              </p>
              <p className="mt-2 text-[.85rem] leading-relaxed text-muted-warm">
                The cumulative net profit <b>kept in the business</b> rather than distributed as
                dividends. It grows when the company earns profits and shrinks when it incurs
                losses or pays dividends.
              </p>
            </div>
          </Reveal>
        </div>

        <FaReadStep n="05" title="Apply your knowledge" sub="The lecture's own classification round — three tasks, no answers given" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { n: "1", t: "Identify assets", d: "List the chief assets of Biocon, Dell, ICICI Bank, Microsoft and Wipro — consider tangible, intangible and financial-claim assets for each." },
            { n: "2", t: "Identify liabilities", d: "List the chief liabilities of BHEL, Dr. Reddy's Laboratories, SBI and TCS." },
            { n: "3", t: "Revenues & expenses", d: "Name the chief revenues and expenses of Google, Jet Airways and SAIL — then judge whether each would report a net profit or a loss." },
          ].map((c, i) => (
            <Reveal key={c.n} delay={i * 90}>
              <div className="card-warm lift h-full p-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg font-mono text-sm font-black text-white shadow" style={{ background: FA_BTN_GRAD }}>
                  {c.n}
                </span>
                <p className="mt-3 text-[.95rem] font-extrabold text-[#3e2c1d]">{c.t}</p>
                <p className="mt-2 text-[.82rem] leading-relaxed text-muted-warm">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8">
          <FaQuiz
            source="Classification"
            q="A famous actor endorses a bakery for free for five years. The bakery wants to list 'celebrity goodwill' as an asset. Correct call?"
            options={[
              "Yes — it has enormous future benefit",
              "No — control over the actor's goodwill cannot be restricted, so it fails the asset test",
              "Yes — if the auditor agrees",
              "Only if it is recorded at fair value",
            ]}
            answer={1}
            explain="Both conditions must hold. Future benefit is clearly there — but the bakery cannot restrict others from using the actor's charm; the resource is not controlled by the entity. No control, no asset — however valuable the endorsement feels."
          />
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 7 — THE EQUATION, WORKED THREE WAYS
   ============================================================ */
export function FaEquationLabSection() {
  return (
    <Section id="equation-lab">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHead
          eyebrow="Module 2 · The equation, worked"
          title={
            <>
              Three balance sheets, <span className="grad-emerald">one equation</span>
            </>
          }
          lead="Find the missing figure, close the balance sheet, prove the totals — the equation is not decoration, it is a solving machine."
        />

        <FaReadStep n="01" title="(a) Hot Chocolate — find the equity" sub="Assets ₹87,000 · liabilities ₹53,000" />
        <FaEq label="Worked (a) — the residual">{`Equity = Assets \u2212 Liabilities
       = \u20B987,000 \u2212 \u20B953,000
       = \u20B934,000`}</FaEq>

        <FaReadStep n="02" title="(b) Abraham Company — find the missing liability" sub="Six asset figures, one unknown expenses payable" />
        <FaEq label="Worked (b) — substitute, then solve for x">{`Assets = Liabilities + Equity

Cash 5,000 + Trade receivables 17,000 + Supplies 9,000
+ Equipment 19,000 + Building 21,800 + Land 21,000
= Loan payable 12,000 + Expenses payable x + Equity 77,300

        92,800 = 89,300 + x
Expenses payable x = \u20B93,500`}</FaEq>

        <FaReadStep n="03" title="(c) Coffee Corner — close the balance sheet" sub="Equity is twice its liabilities · assets ₹81,000" />
        <FaEq label="Worked (c) — one unknown, two figures">{`Assets = Liabilities + Equity
81,000 = L + (2 \u00D7 L)      \u2192 equity is twice liabilities
81,000 = 3 \u00D7 L
L = \u20B927,000        Equity = \u20B954,000`}</FaEq>
        <Reveal>
          <div className="mt-3 overflow-hidden rounded-2xl border border-[#ecd9bd] bg-[#fffdf9]">
            <table className="warm-table">
              <thead>
                <tr>
                  <th>Coffee Corner — balance sheet</th>
                  <th className="text-right">{'\u20B9'}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Assets</td><td className="text-right font-mono font-bold">81,000</td></tr>
                <tr><td>Liabilities</td><td className="text-right font-mono font-bold">27,000</td></tr>
                <tr><td>Equity</td><td className="text-right font-mono font-bold">54,000</td></tr>
                <tr>
                  <td className="font-extrabold" style={{ color: FA_G[700] }}>Check — 27,000 + 54,000</td>
                  <td className="text-right font-mono font-extrabold" style={{ color: FA_G[700] }}>81,000 {'\u2713'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>

        <div className="mt-8">
          <Practice
            title="Complete the missing items — the lecture's six-row drill"
            items={[
              { q: "(a) Assets 30,000 · Liabilities 20,000 → Capital?", hint: "Capital = Assets \u2212 Liabilities = 10,000." },
              { q: "(b) Assets 60,000 · Liabilities 25,000 → Capital?", hint: "60,000 \u2212 25,000 = 35,000." },
              { q: "(c) Liabilities 25,000 · Capital 30,000 → Assets?", hint: "A = L + C = 55,000." },
              { q: "(d) Liabilities 10,000 · Capital 80,000 → Assets?", hint: "A = 90,000." },
              { q: "(e) Assets 25,000 · Capital 15,000 → Liabilities?", hint: "L = A \u2212 C = 10,000." },
              { q: "(f) Assets 40,000 · Capital 30,000 → Liabilities?", hint: "L = 10,000." },
            ]}
          />
        </div>

        <div className="mt-8">
          <FaQuiz
            source="Equation discipline"
            q="In Abraham's workout, why is it legal to write 'Expenses payable = 92,800 \u2212 89,300'?"
            options={[
              "Because expenses always equal assets minus equity",
              "Because the equation must balance — the unknown claim is whatever makes both sides equal",
              "Because expenses payable is an asset",
              "Because the lecturer said so",
            ]}
            answer={1}
            explain="The equation Assets = Liabilities + Equity must close on September 30. Total assets are 92,800; the known claims are 89,300. The missing liability is exactly the plug that makes both sides equal — 3,500. The equation is a solving machine, not a slogan."
          />
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 8 — HOW TRANSACTIONS MOVE THE EQUATION
   + THE EQUATION MACHINE (Rani)
   ============================================================ */

type Move = { col: "cash" | "stock" | "furniture" | "capital" | "creditors"; amt: number };
interface RaniStep {
  label: string;
  detail: string;
  effect: string;
  moves: Move[];
}

const RANI_STEPS: RaniStep[] = [
  {
    label: "Started business with cash",
    detail: "\u20B980,000 brought in",
    effect: "\u2191 Asset · \u2191 Capital",
    moves: [
      { col: "cash", amt: 80000 },
      { col: "capital", amt: 80000 },
    ],
  },
  {
    label: "Goods bought on credit from Ramesh",
    detail: "\u20B910,000 on credit",
    effect: "\u2191 Asset · \u2191 Liability",
    moves: [
      { col: "stock", amt: 10000 },
      { col: "creditors", amt: 10000 },
    ],
  },
  {
    label: "Purchased furniture for cash",
    detail: "\u20B96,000 paid",
    effect: "\u2191 Asset · \u2193 Asset",
    moves: [
      { col: "cash", amt: -6000 },
      { col: "furniture", amt: 6000 },
    ],
  },
  {
    label: "Paid creditors by cash",
    detail: "\u20B98,000 settled",
    effect: "\u2193 Asset · \u2193 Liability",
    moves: [
      { col: "cash", amt: -8000 },
      { col: "creditors", amt: -8000 },
    ],
  },
];

const RANI_COLS: { key: Move["col"]; label: string; side: "assets" | "claims" }[] = [
  { key: "cash", label: "Cash", side: "assets" },
  { key: "stock", label: "Stock", side: "assets" },
  { key: "furniture", label: "Furniture", side: "assets" },
  { key: "capital", label: "Capital", side: "claims" },
  { key: "creditors", label: "Creditors", side: "claims" },
];

const fmtINR = (n: number) =>
  n.toLocaleString("en-IN", { maximumFractionDigits: 0 });

function EquationMachine() {
  const [applied, setApplied] = useState(0);

  const totals: Record<Move["col"], number> = { cash: 0, stock: 0, furniture: 0, capital: 0, creditors: 0 };
  for (let i = 0; i < applied; i++) {
    for (const m of RANI_STEPS[i].moves) totals[m.col] += m.amt;
  }
  const assets = totals.cash + totals.stock + totals.furniture;
  const claims = totals.capital + totals.creditors;
  const holds = assets === claims;

  return (
    <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
      {/* controls */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3">
        <span className="mr-1 font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
          The equation machine
        </span>
        {RANI_STEPS.map((s, i) => (
          <button
            key={s.label}
            type="button"
            onClick={() => setApplied(i + 1)}
            aria-pressed={applied >= i + 1}
            className={`h-7 w-7 rounded-lg border font-mono text-[.7rem] font-black transition-all duration-200 ${
              applied >= i + 1
                ? "border-transparent text-white shadow"
                : "border-[#c7e5d6] bg-white text-[#6f5438] hover:border-[#10b981]"
            }`}
            style={applied >= i + 1 ? { background: FA_BTN_GRAD } : undefined}
          >
            {i + 1}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setApplied(0)}
          className="ml-auto inline-flex items-center gap-1.5 rounded-lg border border-[#c7e5d6] bg-white px-2.5 py-1.5 text-[.7rem] font-bold text-[#6f5438] transition hover:border-[#10b981] hover:text-[#047857]"
        >
          <RotateCcw className="h-3 w-3" />
          Reset
        </button>
      </div>

      {/* the running equation table */}
      <div className="overflow-x-auto">
        <table className="warm-table min-w-[680px]">
          <thead>
            <tr>
              <th>Transaction</th>
              <th className="text-center" colSpan={3}>Assets {'\u20B9'}</th>
              <th className="text-center" colSpan={2}>Claims {'\u20B9'}</th>
            </tr>
            <tr>
              <th className="text-[.62rem] opacity-60">applied: {applied} of 4</th>
              {RANI_COLS.map((c) => (
                <th key={c.key} className="text-[.68rem]" style={{ color: c.side === "assets" ? FA_G[700] : FA_G.gold }}>
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {RANI_STEPS.slice(0, applied).map((s, i) => (
              <motion.tr
                key={s.label}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i === applied - 1 ? 0.05 : 0 }}
              >
                <td>
                  <p className="text-[.8rem] font-bold leading-tight text-[#3e2c1d]">
                    ({String.fromCharCode(105 + i)}) {s.label}
                  </p>
                  <p className="text-[.68rem] text-muted-warm">
                    {s.detail} · <span className="font-semibold" style={{ color: FA_G[700] }}>{s.effect}</span>
                  </p>
                </td>
                {RANI_COLS.map((c) => {
                  const mv = s.moves.find((m) => m.col === c.key);
                  return (
                    <td key={c.key} className="text-center font-mono text-[.78rem]">
                      {mv ? (
                        <span className={mv.amt >= 0 ? "font-bold" : "font-bold text-[#b3402c]"}>
                          {mv.amt >= 0 ? "+" : "\u2212"}{fmtINR(Math.abs(mv.amt))}
                        </span>
                      ) : (
                        <span className="opacity-25">—</span>
                      )}
                    </td>
                  );
                })}
              </motion.tr>
            ))}
            {applied > 0 ? (
              <motion.tr initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <td className="font-extrabold" style={{ color: FA_G[800] }}>Equation</td>
                {RANI_COLS.map((c) => (
                  <td key={c.key} className="text-center font-mono text-[.8rem] font-extrabold" style={{ color: FA_G[800] }}>
                    {fmtINR(totals[c.key])}
                  </td>
                ))}
              </motion.tr>
            ) : (
              <tr>
                <td colSpan={6} className="py-6 text-center text-[.84rem] text-muted-warm">
                  Press a step number — each transaction lands on both sides at once.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* the holds badge */}
      <div className="flex flex-wrap items-center gap-3 border-t border-[#e4f1ea] bg-[#f4faf7] px-4 py-3">
        {applied > 0 ? (
          <>
            <motion.span
              key={holds ? "ok" : "no"}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[.78rem] font-black text-white"
              style={{ background: holds ? FA_BTN_GRAD : "linear-gradient(135deg,#e11d48,#9f1239)" }}
            >
              <Scale className="h-3.5 w-3.5" />
              {'\u20B9'}{fmtINR(assets)} = {'\u20B9'}{fmtINR(claims)} {holds ? "\u2713" : "\u2717"}
            </motion.span>
            <p className="text-[.76rem] font-semibold text-muted-warm">
              {holds
                ? "The equation holds after every single transaction — that is what the double-entry system guarantees."
                : "Out of balance — retrace the last transaction's two effects."}
            </p>
          </>
        ) : (
          <p className="text-[.76rem] font-semibold text-muted-warm">
            Rani deals in automobiles. Four transactions, two sides — watch them stay equal.
          </p>
        )}
      </div>
    </div>
  );
}

export function FaEffectsSection() {
  return (
    <Section id="effects">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHead
          eyebrow="Module 2 · Transactions in action"
          title={
            <>
              The four moves —{" "}
              <span className="grad-emerald">run them yourself</span>
            </>
          }
          lead="Every transaction the course will ever show you is one of a handful of patterns: two sides rise together, or one side reshuffles itself. Meet the patterns, then drive them."
        />

        <FaReadStep n="01" title="Pattern (a) — capital and asset rise together" sub="Commenced business with cash ₹1,00,000" />
        <FaEq label="Effects">{`(i)   Cash comes in                \u2192 increase in asset
(ii)  Capital provided by owner   \u2192 increase in capital

Capital = Assets        Capital = Cash
(+) 1,00,000  =  (+) 1,00,000`}</FaEq>

        <FaReadStep n="02" title="Pattern (b) — one asset in, another out" sub="Bought furniture costing ₹5,000 by paying cash" />
        <FaEq label="Effects">{`(i)   Furniture comes in   \u2192 increase in asset
(ii)  Cash goes out        \u2192 decrease in asset

Liabilities = Cash + Furniture
    (\u2212) 5,000   (+) 5,000        \u2190 total unchanged`}</FaEq>

        <FaReadStep n="03" title="Pattern (d) — liability and asset fall together" sub="Paid creditors ₹10,000" />
        <FaEq label="Effects">{`(i)   Cash goes out        \u2192 decrease in asset
(ii)  Creditors are paid   \u2192 decrease in liability

Creditors = Cash
(\u2212) 10,000 = (\u2212) 10,000`}</FaEq>

        <FaReadStep n="04" title="Now drive the machine" sub="Rani's automobile business — the lecture's own running example, transaction by transaction" />
        <Reveal>
          <EquationMachine />
        </Reveal>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <FaCallout kind="insight" title="What the machine is whispering">
            Step 3 changed <b>nothing</b> on the claims side; step 4 shrank{" "}
            <b>both sides by the same 8,000</b>. Two assets can trade places all day; only
            capital and liabilities move the size of the business.
          </FaCallout>
          <FaCallout kind="why" title="Exam instinct">
            For every transaction, ask exactly two questions: <b>which two families</b> are
            touched, and <b>which way</b> does each move? Write the two effects before touching
            any account — the entries then write themselves.
          </FaCallout>
        </div>

        <div className="mt-8">
          <Takeaways
            items={[
              <>Dual aspect: every transaction has <b>two effects</b> — the equation is book-keeping&rsquo;s law of gravity.</>,
              <>Debits grow the <b>asset / expense / drawings</b> family; credits grow <b>liability / capital / revenue</b>.</>,
              <>An asset needs <b>control + future benefit</b> — miss either and it is out.</>,
              <>Equity is the <b>residual</b>: investments and profits raise it, distributions and losses lower it.</>,
              <>The equation <b>holds after every single transaction</b> — Rani&rsquo;s four steps prove it.</>,
            ]}
          />
        </div>

        <div className="mt-8">
          <FaQuiz
            source="Pattern recognition"
            q="Rani pays ₹8,000 to her creditors. In the machine's language, that transaction is\u2026"
            options={[
              "\u2191 Asset · \u2191 Liability",
              "\u2193 Asset · \u2193 Liability — the equation shrinks on both sides equally",
              "\u2191 Asset · \u2193 Asset",
              "\u2193 Asset · \u2191 Capital",
            ]}
            answer={1}
            explain="Cash (asset) goes out; creditors (liability) are settled. Both sides of the equation fall by the same 8,000 — the equation shrinks but never breaks. Settling a debt is the only pattern that makes the business smaller without taking anything from the owner."
          />
        </div>
      </div>
    </Section>
  );
}
