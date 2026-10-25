"use client";

/* ============================================================
   Financial Accounting — PART 3 of 4 (shelf 03 of The Atlas)
   Module 3: the accounting cycle, the journal (Vogue Company),
   the ledger (the Cash T-account, posted for real), the five
   financial statements (Softomation), and the trial balance
   (Pearl's books) — with the Trial Balance Sorter machine.
   ============================================================ */

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  BookOpenText,
  Check,
  FileSpreadsheet,
  Landmark,
  NotebookPen,
  RotateCcw,
  Scale,
  X,
} from "lucide-react";
import {
  Reveal,
  Section,
  SectionHead,
  StepsFlow,
  Takeaways,
} from "@/components/notes/ui";
import { FA_BTN_GRAD, FA_BTN_SHADOW, FaCallout, FaEq, FaQuiz, FaReadStep, FA_G } from "./FaParts1";

/* ============================================================
   CHAPTER 9 — THE JOURNAL (Vogue Company)
   ============================================================ */

const CYCLE_NODES = [
  { t: "Transactions", s: "value moves" },
  { t: "Journal", s: "the day book" },
  { t: "Ledger", s: "T-accounts" },
  { t: "Trial balance", s: "Dr = Cr check" },
  { t: "Adjusted TB", s: "deferrals · accruals" },
  { t: "Final accounts", s: "P&L + balance sheet" },
];

function AccountingCycle() {
  return (
    <div className="card-warm overflow-hidden p-5 sm:p-7">
      <svg viewBox="0 0 960 200" className="h-auto w-full" role="img" aria-label="The accounting cycle: transactions to journal to ledger to trial balance to adjusted trial balance to final accounts">
        <defs>
          <marker id="faCycArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#8a6b45" />
          </marker>
          <linearGradient id="faCycGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#10b981" />
            <stop offset="1" stopColor="#047857" />
          </linearGradient>
        </defs>
        {CYCLE_NODES.map((n, i) => {
          const cx = 80 + i * 160;
          return (
            <motion.g key={n.t} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.45 }}>
              <rect x={cx - 62} y="52" width="124" height="64" rx="14" fill="#f2faf6" stroke="#a9dcc4" strokeWidth="2" />
              <text x={cx} y="80" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="#1d4433">{n.t}</text>
              <text x={cx} y="100" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#6f5438">{n.s}</text>
              <text x={cx} y="42" textAnchor="middle" fontSize="10" fontWeight="800" fill="#047857">{String(i + 1).padStart(2, "0")}</text>
              {i < CYCLE_NODES.length - 1 ? (
                <motion.path
                  d={`M ${cx + 66} 84 H ${cx + 94}`}
                  fill="none" stroke="#8a6b45" strokeWidth="2" markerEnd="url(#faCycArrow)"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.25, duration: 0.3 }}
                />
              ) : null}
            </motion.g>
          );
        })}
        <motion.text x="480" y="160" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#8a6b45" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9 }}>
          every rupee travels this pipeline — this module walks steps 2 and 3, chapter 12 checks step 4
        </motion.text>
        <motion.circle cx="480" cy="184" r="4" fill="url(#faCycGrad)" style={{ transformBox: "fill-box", transformOrigin: "center" }} animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }} transition={{ duration: 2.6, repeat: Infinity }} />
      </svg>
    </div>
  );
}

interface JLine { acc: string; amt: number; side: "dr" | "cr" }
interface JEntry { date: string; lines: JLine[]; narration: string }

const VOGUE_JOURNAL: JEntry[] = [
  { date: "Jun 1", lines: [{ acc: "Cash A/c", amt: 50000, side: "dr" }, { acc: "To Share Capital", amt: 50000, side: "cr" }], narration: "Being capital invested in cash" },
  { date: "Jun 2", lines: [{ acc: "Office Supplies A/c", amt: 2000, side: "dr" }, { acc: "To Cash", amt: 2000, side: "cr" }], narration: "Being office supplies bought" },
  { date: "Jun 3", lines: [{ acc: "Rent Expense A/c", amt: 1500, side: "dr" }, { acc: "To Cash", amt: 1500, side: "cr" }], narration: "Being office rent paid for June" },
  { date: "Jun 4", lines: [{ acc: "Equipment A/c", amt: 3000, side: "dr" }, { acc: "To Cash", amt: 3000, side: "cr" }], narration: "Being equipment bought from Agrawal Company" },
  { date: "Jun 6", lines: [{ acc: "Prepaid Insurance A/c", amt: 720, side: "dr" }, { acc: "To Cash", amt: 720, side: "cr" }], narration: "Being one-year fire policy paid in advance" },
  { date: "Jun 7", lines: [{ acc: "Cash A/c", amt: 2000, side: "dr" }, { acc: "To Revenue from Services", amt: 2000, side: "cr" }], narration: "Being a design sold for cash" },
  { date: "Jun 8", lines: [{ acc: "Cash A/c", amt: 1500, side: "dr" }, { acc: "To Unearned Revenue", amt: 1500, side: "cr" }], narration: "Being Kidswear's advance for services to be provided later" },
  { date: "Jun 9", lines: [{ acc: "Office Supplies A/c", amt: 3500, side: "dr" }, { acc: "To Trade Payables", amt: 3500, side: "cr" }], narration: "Being supplies bought on credit from Mohan Company" },
  { date: "Jun 10", lines: [{ acc: "Trade Receivables A/c", amt: 9000, side: "dr" }, { acc: "To Revenue from Services", amt: 9000, side: "cr" }], narration: "Being Shah Company billed for designs completed" },
  { date: "Jun 25", lines: [{ acc: "Cash A/c", amt: 1000, side: "dr" }, { acc: "Trade Receivables A/c", amt: 2000, side: "dr" }, { acc: "To Revenue from Services", amt: 3000, side: "cr" }], narration: "Being designs completed for Gupta Company; ₹1,000 received in part payment" },
];

function JournalTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#c7e5d6]">
      <p className="border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-2.5 text-center font-mono text-[.7rem] font-black uppercase tracking-[.18em]" style={{ color: FA_G[700] }}>
        Vogue Company — journal (selected entries) · amounts in ₹
      </p>
      <div className="overflow-x-auto bg-[#fffdf9]">
        <table className="warm-table min-w-[620px]">
          <thead>
            <tr>
              <th className="w-20">Date</th>
              <th>Particulars</th>
              <th className="w-24 text-right">Dr (₹)</th>
              <th className="w-24 text-right">Cr (₹)</th>
            </tr>
          </thead>
          <tbody>
            {VOGUE_JOURNAL.map((e) => (
              <React.Fragment key={e.date}>
                {e.lines.map((l, li) => (
                  <tr key={e.date + li}>
                    <td className="align-top font-mono text-[.72rem] font-bold text-[#6f5438]">{li === 0 ? e.date : ""}</td>
                    <td className={l.side === "cr" ? "pl-8 text-[.84rem] text-[#2f2013]" : "text-[.84rem] font-semibold text-[#2f2013]"}>
                      {l.acc}
                      {l.side === "dr" ? <span className="ml-2 font-mono text-[.62rem] font-black" style={{ color: FA_G[700] }}>Dr</span> : null}
                    </td>
                    <td className="text-right font-mono text-[.8rem]">{l.side === "dr" ? l.amt.toLocaleString("en-IN") : ""}</td>
                    <td className="text-right font-mono text-[.8rem]">{l.side === "cr" ? l.amt.toLocaleString("en-IN") : ""}</td>
                  </tr>
                ))}
                <tr>
                  <td />
                  <td className="pb-3 pl-2 text-[.72rem] italic text-[#8a6b45]" colSpan={3}>({e.narration})</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function FaJournalSection() {
  return (
    <Section id="journal">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHead
          eyebrow="Module 3 · Recording — the journal"
          title={
            <>
              The pipeline, and <span className="grad-emerald">the day book</span>
            </>
          }
          lead="Two approaches exist for recording transactions — the accounting equation approach and the traditional approach. Both land in the same place: a journal where every event is written with its two effects, the day it happens."
        />

        <Reveal>
          <AccountingCycle />
        </Reveal>

        <FaReadStep n="01" title="The Vogue Company" sub="A business that supplies new designs for dresses — June, transaction by transaction" />
        <FaCallout kind="story" title="The set-up">
          Vogue is a business supplying new designs for dresses. The lecture records its June
          transactions in terms of debits and credits — and warns early:{" "}
          <b>not every item below is an accounting transaction</b>. If an item does not qualify,
          the correct answer is to say <b>why</b> it does not.
        </FaCallout>

        <FaReadStep n="02" title="The three-line ritual" sub="ANALYSIS → RULES → ENTRY — the same three moves, every single time" />
        <StepsFlow
          steps={[
            { label: "ANALYSIS", sub: "Which accounts are affected, and which way?", icon: <NotebookPen className="h-5 w-5 shrink-0" style={{ color: FA_G[700] }} /> },
            { label: "RULES", sub: "Debit assets/expenses to increase — credit liabilities/capital/revenues to increase.", icon: <Scale className="h-5 w-5 shrink-0" style={{ color: FA_G[700] }} /> },
            { label: "ENTRY", sub: "Write the debits, the credits, and a narration that says why.", icon: <BookOpenText className="h-5 w-5 shrink-0" style={{ color: FA_G[700] }} /> },
          ]}
        />

        <FaReadStep n="03" title="The journal, ruled like paper" sub="Ten entries from Vogue's June — including one compound entry" />
        <Reveal>
          <JournalTable />
        </Reveal>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <FaCallout kind="warn" title="June 5 — the agreement that books nothing">
            Vogue signs with EthniWear: a special design, fee ₹2,000 payable{" "}
            <b>on completion</b>. No entry. Signing transfers no value — no asset moves, no
            obligation is born. Accounting records <b>transactions</b>, not intentions.
          </FaCallout>
          <FaCallout kind="warn" title="June 21 — the appointment that books nothing">
            An office manager is appointed on a monthly salary of ₹1,500. No entry. Hiring
            changes no asset, liability or equity — the salary becomes an expense{" "}
            <b>period by period</b>, as the work is actually received and paid.
          </FaCallout>
        </div>

        <div className="mt-8">
          <FaQuiz
            source="Compound entries"
            q="On June 25, Vogue completes ₹3,000 of designs for Gupta Company and receives ₹1,000 in part payment. The entry touches\u2026"
            options={[
              "Cash only — revenue is recorded when fully collected",
              "Cash Dr 1,000 + Trade receivables Dr 2,000 / To Revenue 3,000",
              "Revenue Dr 3,000 / To Cash 3,000",
              "Nothing until the final ₹2,000 arrives",
            ]}
            answer={1}
            explain="Revenue is earned in full the moment the designs are delivered — 3,000. Of that, 1,000 arrived (cash up), and 2,000 is now a claim on Gupta (trade receivables up). One event, three accounts — that is a compound entry, and the equation still closes: +3,000 assets = +3,000 equity."
          />
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 10 — THE LEDGER (T-accounts)
   ============================================================ */

const CASH_DR = [
  { d: "Jun 1", label: "To Share Capital", amt: 50000 },
  { d: "Jun 7", label: "To Revenue from Services", amt: 2000 },
  { d: "Jun 8", label: "To Unearned Revenue", amt: 1500 },
  { d: "Jun 18", label: "To Trade Receivables", amt: 4000 },
  { d: "Jun 25", label: "To Revenue from Services", amt: 1000 },
];
const CASH_CR = [
  { d: "Jun 2", label: "By Office Supplies", amt: 2000 },
  { d: "Jun 3", label: "By Rent Expense", amt: 1500 },
  { d: "Jun 4", label: "By Equipment", amt: 3000 },
  { d: "Jun 6", label: "By Prepaid Insurance", amt: 720 },
  { d: "Jun 14", label: "By Trade Payables", amt: 1000 },
  { d: "Jun 27", label: "By Telephone Expense", amt: 200 },
  { d: "Jun 28", label: "By Salaries Expense", amt: 800 },
  { d: "Jun 29", label: "By Electricity Expense", amt: 150 },
  { d: "Jun 30", label: "By Dividends", amt: 2200 },
];
const DR_TOTAL = CASH_DR.reduce((n, r) => n + r.amt, 0);
const CR_TOTAL = CASH_CR.reduce((n, r) => n + r.amt, 0);
const CASH_BALANCE = DR_TOTAL - CR_TOTAL;

function CashTAccount() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
      <p className="border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-2.5 text-center font-mono text-[.7rem] font-black uppercase tracking-[.18em]" style={{ color: FA_G[700] }}>
        Vogue Company — Cash account · for June · amounts in ₹
      </p>
      <div className="grid grid-cols-2 divide-x divide-[#e4f1ea]">
        {/* debit side */}
        <div>
          <p className="border-b border-[#e4f1ea] bg-white/60 px-3 py-2 text-center font-mono text-[.62rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
            Dr · money in
          </p>
          {CASH_DR.map((r) => (
            <div key={r.d} className="flex items-baseline gap-2 border-b border-[#f0f7f2] px-3 py-1.5 text-[.78rem]">
              <span className="w-11 shrink-0 font-mono text-[.66rem] text-[#8a6b45]">{r.d}</span>
              <span className="min-w-0 flex-1 truncate text-[#2f2013]">{r.label}</span>
              <span className="shrink-0 font-mono font-semibold" style={{ color: FA_G[800] }}>{r.amt.toLocaleString("en-IN")}</span>
            </div>
          ))}
          <div className="flex items-baseline gap-2 bg-[#f4faf7] px-3 py-1.5 text-[.78rem] font-extrabold" style={{ color: FA_G[800] }}>
            <span className="w-11 shrink-0" />
            <span className="min-w-0 flex-1">Total — {DR_TOTAL.toLocaleString("en-IN")}</span>
          </div>
        </div>
        {/* credit side */}
        <div>
          <p className="border-b border-[#e4f1ea] bg-white/60 px-3 py-2 text-center font-mono text-[.62rem] font-black uppercase tracking-[.2em] text-[#b45309]">
            Cr · money out
          </p>
          {CASH_CR.map((r) => (
            <div key={r.d} className="flex items-baseline gap-2 border-b border-[#f0f7f2] px-3 py-1.5 text-[.78rem]">
              <span className="w-11 shrink-0 font-mono text-[.66rem] text-[#8a6b45]">{r.d}</span>
              <span className="min-w-0 flex-1 truncate text-[#2f2013]">{r.label}</span>
              <span className="shrink-0 font-mono font-semibold text-[#7a3a10]">{r.amt.toLocaleString("en-IN")}</span>
            </div>
          ))}
          <div className="flex items-baseline gap-2 bg-[#faf4e6] px-3 py-1.5 text-[.78rem] font-extrabold text-[#7a3a10]">
            <span className="w-11 shrink-0" />
            <span className="min-w-0 flex-1">Total — {CR_TOTAL.toLocaleString("en-IN")}</span>
          </div>
        </div>
      </div>
      {/* balance strip */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-t border-[#e4f1ea] bg-[#f4faf7] px-4 py-3">
        <motion.span
          initial={{ scale: 0.92, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[.8rem] font-black text-white"
          style={{ background: FA_BTN_GRAD, boxShadow: FA_BTN_SHADOW }}
        >
          <Scale className="h-3.5 w-3.5" />
          Balance c/d — ₹{CASH_BALANCE.toLocaleString("en-IN")} Dr
        </motion.span>
        <p className="text-[.74rem] font-semibold text-muted-warm">
          {DR_TOTAL.toLocaleString("en-IN")} in − {CR_TOTAL.toLocaleString("en-IN")} out = {CASH_BALANCE.toLocaleString("en-IN")} · carried down to July 1
        </p>
      </div>
    </div>
  );
}

export function FaLedgerSection() {
  return (
    <Section id="ledger">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHead
          eyebrow="Module 3 · Recording — the ledger"
          title={
            <>
              Posting — where the journal{" "}
              <span className="grad-emerald">grows accounts</span>
            </>
          }
          lead="The journal records events in time order; the ledger regroups them by account. Open one page per account, post every debit and every credit to its page, and each page ends with a balance that speaks."
        />

        <FaReadStep n="01" title="One account to rule them all: Cash" sub="Every rupee that entered or left Vogue in June, on one T-shaped page" />
        <Reveal>
          <CashTAccount />
        </Reveal>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <FaCallout kind="insight" title="Read the T like a story">
            The debit side is the cash <b>coming in</b> (capital, service revenue, collections,
            an advance); the credit side is cash <b>going out</b> (supplies, rent, equipment,
            insurance, settling suppliers, phone, salaries, electricity, dividends). Nine
            outflows against five inflows — and the account still closes at ₹46,930.
          </FaCallout>
          <FaCallout kind="why" title="The pipeline clicks shut">
            That ₹46,930 debit balance is <b>exactly the Cash line in Vogue&rsquo;s June 30
            trial balance</b>. The ledger balance is not near the trial-balance figure — it{" "}
            <b>is</b> the trial-balance figure. Same numbers, next station.
          </FaCallout>
        </div>

        <FaReadStep n="02" title="The ledger, grouped" sub="Exhibit 3.3 groups Vogue's June accounts into asset, liability and equity categories" />
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { t: "Asset accounts", d: "Cash · Equipment · Office supplies · Trade receivables · Prepaid insurance", tone: FA_G[700] },
            { t: "Liability accounts", d: "Trade payables · Unearned revenue", tone: FA_G.gold },
            { t: "Equity accounts", d: "Share capital · Dividends · Revenue · all expense accounts", tone: "#7c6248" },
          ].map((g, i) => (
            <Reveal key={g.t} delay={i * 90}>
              <div className="card-warm h-full p-5">
                <p className="font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: g.tone }}>{g.t}</p>
                <p className="mt-2 text-[.82rem] leading-relaxed text-muted-warm">{g.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8">
          <FaQuiz
            source="Ledger mechanics"
            q="Why does Vogue's Cash account end with a DEBIT balance of \u20B946,930?"
            options={[
              "Because cash is revenue, and revenue carries debit balances",
              "Because total debits (58,500) exceed total credits (11,570) — and cash, an asset, keeps its balance on the debit side",
              "Because dividends were paid in cash",
              "Because the ledger always balances at zero",
            ]}
            answer={1}
            explain="Post everything, total both sides, subtract: 58,500 − 11,570 = 46,930. The side the balance sits on follows the account's nature — assets carry debit balances, liabilities and equity carry credit balances. Cash is an asset, so its balance is a debit."
          />
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 11 — THE FIVE FINANCIAL STATEMENTS (Softomation)
   ============================================================ */
export function FaStatementsSection() {
  return (
    <Section id="statements">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHead
          eyebrow="Module 3 · Reporting — the five statements"
          title={
            <>
              One month of transactions,{" "}
              <span className="grad-emerald">five statements</span>
            </>
          }
          lead="Five major statements work together to give a full picture of an enterprise's financial story. Meet Softomation — one small company, five transactions — and watch them ripple through every statement."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { n: "01", t: "Statement of Profit & Loss", d: "Reports financial performance over a period." },
            { n: "02", t: "Statement of Retained Earnings", d: "Shows how earnings were distributed or retained." },
            { n: "03", t: "Balance Sheet", d: "Shows financial position at a point in time." },
            { n: "04", t: "Cash Flow Statement", d: "Summarises cash inflows and outflows." },
            { n: "05", t: "Statement of Changes in Equity", d: "Explains how equity changed during the period." },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 70} className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <div className="card-warm lift h-full p-5">
                <p className="font-mono text-[.68rem] font-black tracking-[.24em]" style={{ color: FA_G[700] }}>{s.n}</p>
                <div className="mt-1.5 h-px w-10" style={{ background: FA_G.border }} />
                <p className="mt-2.5 text-[.94rem] font-extrabold leading-snug text-[#3e2c1d]">{s.t}</p>
                <p className="mt-1.5 text-[.8rem] leading-relaxed text-muted-warm">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <FaReadStep n="01" title="Meet Softomation" sub="One small company, five transactions — March" />
        <FaCallout kind="story" title="The five transactions">
          <b>01</b> — Founders invest ₹50,000 cash as share capital.{" "}
          <b>02</b> — ₹20,000 in software services billed and collected in cash.{" "}
          <b>03</b> — ₹5,200 paid for salaries (4,000), rent (1,200) and other operating costs.{" "}
          <b>04</b> — ₹3,500 distributed to shareholders as a cash dividend.{" "}
          <b>05</b> — Net result: profit of ₹14,800; the statements below carry these five
          events into five different shapes.
        </FaCallout>

        <FaReadStep n="02" title="Statement of Profit & Loss" sub="Also called the income statement — performance over the period" />
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-[#c7e5d6]">
            <p className="border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-2 text-center font-mono text-[.66rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
              Softomation · statement of profit and loss · month ended March 31 · ₹
            </p>
            <table className="warm-table">
              <tbody>
                <tr><td className="font-semibold">Revenue from services</td><td className="w-32 text-right font-mono font-bold">20,000</td></tr>
                <tr><td className="pl-6 text-[.82rem]">Salaries expense</td><td className="text-right font-mono">4,000</td></tr>
                <tr><td className="pl-6 text-[.82rem]">Rent expense</td><td className="text-right font-mono">1,200</td></tr>
                <tr><td className="pl-6 font-bold italic">Total expenses</td><td className="text-right font-mono font-bold">5,200</td></tr>
                <tr>
                  <td className="font-extrabold" style={{ color: FA_G[800] }}>Net profit</td>
                  <td className="text-right font-mono text-[1rem] font-black" style={{ color: FA_G[800] }}>14,800</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>

        <FaReadStep n="03" title="Statement of Retained Earnings" sub="The bridge between the P&L and the equity section of the balance sheet" />
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-[#c7e5d6]">
            <p className="border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-2 text-center font-mono text-[.66rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
              Softomation · statement of retained earnings · month ended March 31 · ₹
            </p>
            <table className="warm-table">
              <tbody>
                <tr><td>Beginning balance</td><td className="w-32 text-right font-mono">0</td></tr>
                <tr><td>Add — net profit</td><td className="text-right font-mono font-semibold">14,800</td></tr>
                <tr><td className="font-semibold">Available for distribution</td><td className="text-right font-mono font-bold">14,800</td></tr>
                <tr><td>Deduct — drawings (dividend)</td><td className="text-right font-mono text-[#b3402c]">(3,500)</td></tr>
                <tr>
                  <td className="font-extrabold" style={{ color: FA_G[800] }}>Ending balance</td>
                  <td className="text-right font-mono text-[1rem] font-black" style={{ color: FA_G[800] }}>11,300</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>
        <div className="mt-3">
          <FaCallout kind="why" title="Dividends are not expenses">
            Profit distributions appear <b>&ldquo;below the line&rdquo;</b> — in this statement,
            not in the profit and loss. They are a <b>return of the owners&rsquo; money</b>, not
            a cost of operations. Retaining earnings signals the owner is reinvesting in the
            business.
          </FaCallout>
        </div>

        <FaReadStep n="04" title="Statement of Changes in Equity" sub="Capital and retained earnings, side by side" />
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
            <table className="warm-table min-w-[560px]">
              <thead>
                <tr>
                  <th></th>
                  <th className="text-right">Capital (₹)</th>
                  <th className="text-right">Retained earnings (₹)</th>
                  <th className="text-right">Total (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Beginning balance</td><td className="text-right font-mono">0</td><td className="text-right font-mono">0</td><td className="text-right font-mono">0</td></tr>
                <tr><td>Capital introduced</td><td className="text-right font-mono font-semibold">50,000</td><td className="text-right font-mono">—</td><td className="text-right font-mono font-semibold">50,000</td></tr>
                <tr><td>Net profit</td><td className="text-right font-mono">—</td><td className="text-right font-mono font-semibold">14,800</td><td className="text-right font-mono font-semibold">14,800</td></tr>
                <tr><td>Withdrawn</td><td className="text-right font-mono">—</td><td className="text-right font-mono text-[#b3402c]">(3,500)</td><td className="text-right font-mono text-[#b3402c]">(3,500)</td></tr>
                <tr>
                  <td className="font-extrabold" style={{ color: FA_G[800] }}>Ending balance</td>
                  <td className="text-right font-mono font-black" style={{ color: FA_G[800] }}>50,000</td>
                  <td className="text-right font-mono font-black" style={{ color: FA_G[800] }}>11,300</td>
                  <td className="text-right font-mono text-[.95rem] font-black" style={{ color: FA_G[800] }}>61,300</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>

        <FaReadStep n="05" title="The balance sheet — position at a point" sub="Softomation closes March at ₹85,300 — claimed by outsiders and owners" />
        <Reveal>
          <div className="card-warm p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-center gap-3 text-center">
              <span className="rounded-xl border px-4 py-2 font-mono text-[.82rem] font-black" style={{ borderColor: FA_G.border, background: FA_G.wash, color: FA_G[800] }}>
                Assets ₹85,300
              </span>
              <span className="font-mono text-lg font-black" style={{ color: FA_G[700] }}>=</span>
              <span className="rounded-xl border px-4 py-2 font-mono text-[.82rem] font-black" style={{ borderColor: "#e8d3ac", background: "#faf4e4", color: "#8a5a10" }}>
                Liabilities ₹24,000
              </span>
              <span className="font-mono text-lg font-black" style={{ color: FA_G[700] }}>+</span>
              <span className="rounded-xl border px-4 py-2 font-mono text-[.82rem] font-black" style={{ borderColor: FA_G.border, background: FA_G.wash, color: FA_G[800] }}>
                Equity ₹61,300
              </span>
            </div>
            <p className="mt-3 text-center text-[.8rem] leading-relaxed text-muted-warm">
              Equity ₹61,300 = share capital ₹50,000 + retained earnings ₹11,300 — the two
              statements above, folded into the balance sheet&rsquo;s last line.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="mt-3 overflow-hidden rounded-2xl border border-[#ecd9bd] bg-[#fffdf9]">
            <p className="border-b border-[#f0e2c8] px-4 py-2 text-center font-mono text-[.66rem] font-black uppercase tracking-[.2em] text-[#8a5a10]">
              A full balance sheet to keep — Abraham Company · September 30 · ₹
            </p>
            <div className="grid md:grid-cols-2 md:divide-x md:divide-[#f0e2c8]">
              <table className="warm-table">
                <thead><tr><th colSpan={2}>Assets</th></tr></thead>
                <tbody>
                  <tr><td>Cash</td><td className="w-24 text-right font-mono">5,000</td></tr>
                  <tr><td>Trade receivables</td><td className="text-right font-mono">17,000</td></tr>
                  <tr><td>Supplies</td><td className="text-right font-mono">9,000</td></tr>
                  <tr><td>Equipment</td><td className="text-right font-mono">19,000</td></tr>
                  <tr><td>Building</td><td className="text-right font-mono">21,800</td></tr>
                  <tr><td>Land</td><td className="text-right font-mono">21,000</td></tr>
                  <tr><td className="font-extrabold" style={{ color: FA_G[800] }}>Total assets</td><td className="text-right font-mono font-black" style={{ color: FA_G[800] }}>92,800</td></tr>
                </tbody>
              </table>
              <table className="warm-table">
                <thead><tr><th colSpan={2}>Liabilities & equity</th></tr></thead>
                <tbody>
                  <tr><td>Loan payable</td><td className="w-24 text-right font-mono">12,000</td></tr>
                  <tr><td>Expenses payable</td><td className="text-right font-mono">3,500</td></tr>
                  <tr><td>Equity — Abraham</td><td className="text-right font-mono">77,300</td></tr>
                  <tr><td className="font-extrabold" style={{ color: FA_G[800] }}>Total claims</td><td className="text-right font-mono font-black" style={{ color: FA_G[800] }}>92,800</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <FaReadStep n="06" title="Cash flow — the third mirror" sub="The same month, told strictly in cash" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { t: "Operating", d: "Cash from customers (₹20,000 billed & collected) minus cash to suppliers and employees. The engine room of the business.", icon: Landmark },
            { t: "Investing", d: "Cash spent on long-lived resources — Softomation's equipment purchases live here.", icon: FileSpreadsheet },
            { t: "Financing", d: "Capital introduced (₹50,000) and dividends paid (₹3,500) — the owners' channel in and out.", icon: BookOpenText },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 90}>
              <div className="card-warm h-full p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md" style={{ background: FA_BTN_GRAD }}>
                  <b.icon className="h-4.5 w-4.5" />
                </span>
                <p className="mt-3 text-[.95rem] font-extrabold text-[#3e2c1d]">{b.t} activities</p>
                <p className="mt-1.5 text-[.8rem] leading-relaxed text-muted-warm">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-3">
          <FaCallout kind="insight" title="Why a profitable company needs this statement">
            The P&L says ₹14,800 of profit; the cash statement tells you what actually{" "}
            <b>landed in the bank</b> — and which bucket each rupee travelled through. Solaris
            (chapter 1) died in the gap between those two mirrors.
          </FaCallout>
        </div>

        <div className="mt-8">
          <Takeaways
            items={[
              <>Five statements, one story: <b>performance · retention · position · cash · equity</b>.</>,
              <>The P&amp;L measures the <b>period</b>; the balance sheet photographs the <b>point</b>.</>,
              <>Dividends are <b>below the line</b> — a return to owners, never an expense.</>,
              <>The balance sheet&rsquo;s equity line is the <b>changes-in-equity statement&rsquo;s ending balance</b>.</>,
              <>The cash flow statement&rsquo;s three buckets — <b>operating, investing, financing</b> — are the same month, told strictly in cash.</>,
            ]}
          />
        </div>

        <div className="mt-8">
          <FaQuiz
            source="The bridge statement"
            q="Softomation earned ₹14,800 and distributed ₹3,500. Which figure links the P&L to the balance sheet?"
            options={[
              "₹20,000 — the revenue line",
              "₹11,300 — retained earnings, the P&L's profit minus what was distributed",
              "₹50,000 — the share capital",
              "₹61,300 — total equity including capital",
            ]}
            answer={1}
            explain="The retained-earnings statement is the bridge: beginning 0 + profit 14,800 − drawings 3,500 = 11,300, which is exactly the retained-earnings line inside the balance sheet's equity. The full equity of 61,300 also includes the 50,000 the owners put in — but the P&L's contribution alone is the 11,300."
          />
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 12 — THE TRIAL BALANCE (+ the sorter)
   ============================================================ */

interface TbAccount { name: string; amt: number; side: "dr" | "cr"; why: string }
const PEARL_TB: TbAccount[] = [
  { name: "Capital", amt: 44000, side: "cr", why: "Owners' claim — equity family carries credit balances" },
  { name: "Bills receivable", amt: 5000, side: "dr", why: "An asset — a claim Pearl holds" },
  { name: "Wages", amt: 800, side: "dr", why: "An expense — expenses carry debit balances" },
  { name: "Drawings", amt: 4000, side: "dr", why: "Owner's withdrawals — debit family" },
  { name: "Purchases", amt: 75000, side: "dr", why: "Goods bought — debit by nature" },
  { name: "Interest on investment", amt: 2000, side: "cr", why: "Income earned — incomes carry credit balances" },
  { name: "Customs duty", amt: 3000, side: "dr", why: "A cost of bringing goods in — debit family" },
  { name: "Computer", amt: 20000, side: "dr", why: "An asset — equipment owned" },
  { name: "Sales", amt: 72000, side: "cr", why: "Revenue — the credit family" },
  { name: "Opening stock", amt: 10200, side: "dr", why: "Unsold goods at start — an asset" },
];

function TrialBalanceSorter() {
  const [picks, setPicks] = useState<Record<string, "dr" | "cr" | null>>(() =>
    Object.fromEntries(PEARL_TB.map((a) => [a.name, null]))
  );
  const [checked, setChecked] = useState(false);

  const score = PEARL_TB.filter((a) => picks[a.name] === a.side).length;
  const done = PEARL_TB.every((a) => picks[a.name] !== null);

  const pick = (name: string, side: "dr" | "cr") => {
    if (checked) return;
    setPicks((p) => ({ ...p, [name]: p[name] === side ? null : side }));
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
      <div className="flex flex-wrap items-center gap-2 border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3">
        <span className="mr-1 font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
          Trial balance sorter
        </span>
        <span className="text-[.7rem] font-semibold text-muted-warm">Pearl&rsquo;s books · tap Dr or Cr for each account</span>
        <button
          type="button"
          onClick={() => { setPicks(Object.fromEntries(PEARL_TB.map((a) => [a.name, null]))); setChecked(false); }}
          className="ml-auto inline-flex items-center gap-1.5 rounded-lg border border-[#c7e5d6] bg-white px-2.5 py-1.5 text-[.7rem] font-bold text-[#6f5438] transition hover:border-[#10b981] hover:text-[#047857]"
        >
          <RotateCcw className="h-3 w-3" /> Reset
        </button>
      </div>
      <div className="grid gap-2 p-3 sm:grid-cols-2">
        {PEARL_TB.map((a) => {
          const picked = picks[a.name];
          const right = checked && picked === a.side;
          const wrong = checked && picked !== null && picked !== a.side;
          return (
            <div
              key={a.name}
              className={`flex items-center gap-2 rounded-xl border px-3 py-2 transition-colors ${
                right ? "border-[#9ab86b] bg-[#eef4dd]" : wrong ? "border-[#e2a1a1] bg-[#fdecec]" : picked ? "border-[#a9dcc4] bg-[#f2faf6]" : "border-[#eadfc8] bg-white"
              }`}
            >
              <div className="min-w-0 flex-1">
                <p className="truncate text-[.8rem] font-bold text-[#3e2c1d]">{a.name}</p>
                <p className="font-mono text-[.68rem] text-[#8a6b45]">₹{a.amt.toLocaleString("en-IN")}</p>
                {checked && wrong ? <p className="mt-0.5 text-[.66rem] font-semibold text-[#b3402c]">{a.why}</p> : null}
              </div>
              {(["dr", "cr"] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => pick(a.name, s)}
                  aria-pressed={picked === s}
                  className={`h-7 w-9 rounded-lg border font-mono text-[.66rem] font-black transition-all ${
                    picked === s
                      ? s === "dr"
                        ? "border-transparent text-white shadow"
                        : "border-transparent text-white shadow"
                      : "border-[#d8cdb4] bg-white text-[#8a6b45] hover:border-[#10b981]"
                  }`}
                  style={picked === s ? { background: s === "dr" ? FA_BTN_GRAD : "linear-gradient(135deg,#b45309,#8a5a10)" } : undefined}
                >
                  {s.toUpperCase()}
                </button>
              ))}
              {checked ? right ? <Check className="h-4 w-4 shrink-0 text-[#44621d]" /> : wrong ? <X className="h-4 w-4 shrink-0 text-[#b3402c]" /> : null : null}
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap items-center gap-3 border-t border-[#e4f1ea] bg-[#f4faf7] px-4 py-3">
        {!checked ? (
          <button
            type="button"
            disabled={!done}
            onClick={() => setChecked(true)}
            className="rounded-full px-5 py-2 text-[.78rem] font-bold text-white transition disabled:opacity-40"
            style={{ background: FA_BTN_GRAD, boxShadow: FA_BTN_SHADOW }}
          >
            Check my trial balance
          </button>
        ) : (
          <motion.span initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[.78rem] font-black text-white" style={{ background: FA_BTN_GRAD }}>
            <Scale className="h-3.5 w-3.5" /> {score} / {PEARL_TB.length} sides correct
          </motion.span>
        )}
        <p className="text-[.72rem] font-semibold text-muted-warm">
          Rule of thumb: assets, drawings, purchases, expenses → Dr · liabilities, capital, incomes, sales → Cr
        </p>
      </div>
    </div>
  );
}

export function FaTrialBalanceSection() {
  return (
    <Section id="trial-balance">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHead
          eyebrow="Module 3 · Checking — the trial balance"
          title={
            <>
              Do the columns <span className="grad-emerald">agree?</span>
            </>
          }
          lead="The third phase of the accounting process: after posting the ledger, a statement lists the debit and credit balances of every account at a specific point in time. If double entry has been honoured, the two totals must meet."
        />

        <FaReadStep n="01" title="What the agreement proves — and what it doesn't" />
        <div className="grid gap-3 md:grid-cols-2">
          <FaCallout kind="insight" title="Why it must balance">
            Under the double entry system, amounts on the debit sides of various accounts are
            always equal to amounts entered on the credit sides of other accounts — so the{" "}
            <b>totals of the debit sides must equal the totals of the credit sides</b>. An
            agreeing trial balance gives reasonable confidence the work is free of{" "}
            <b>clerical errors</b>.
          </FaCallout>
          <FaCallout kind="warn" title="What can still hide">
            Agreement is <b>not proof of cent-per-cent accuracy</b>. Errors of{" "}
            <b>principle</b> (wrong class of account), <b>compensating errors</b> (two mistakes
            cancelling out), wholly <b>omitted transactions</b> and postings to the{" "}
            <b>wrong account at the right amount</b> can all survive a perfect trial balance.
          </FaCallout>
        </div>

        <FaReadStep n="02" title="Accounts keep their favourite side" sub="Some accounts carry only debit balances; others only credit" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm h-full p-5">
              <p className="font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>Only debit balances</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["Assets (cash, debtors, buildings, furniture)", "Drawings", "Purchases", "Sales returns", "Expenses", "Losses"].map((t) => (
                  <span key={t} className="rounded-lg border px-2.5 py-1 text-[.74rem] font-semibold" style={{ borderColor: FA_G.border, background: FA_G.wash, color: FA_G[800] }}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={110}>
            <div className="card-warm h-full p-5">
              <p className="font-mono text-[.64rem] font-black uppercase tracking-[.2em] text-[#b45309]">Only credit balances</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["Liabilities (creditors, bank overdraft, provisions)", "Reserves", "Incomes", "Sales", "Purchases returns", "Gains"].map((t) => (
                  <span key={t} className="rounded-lg border px-2.5 py-1 text-[.74rem] font-semibold" style={{ borderColor: "#e8d3ac", background: "#faf4e4", color: "#8a5a10" }}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <FaReadStep n="03" title="Pearl's books, balanced" sub="From the balances extracted from Pearl, a trader — as on 31st March 2017" />
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
            <table className="warm-table min-w-[520px]">
              <thead>
                <tr>
                  <th className="w-14">S.No</th>
                  <th>Name of account</th>
                  <th className="w-28 text-right">Debit (₹)</th>
                  <th className="w-28 text-right">Credit (₹)</th>
                </tr>
              </thead>
              <tbody>
                {PEARL_TB.map((a, i) => (
                  <tr key={a.name}>
                    <td className="font-mono text-[.74rem] text-[#8a6b45]">{i + 1}</td>
                    <td className="text-[.85rem]">{a.name}</td>
                    <td className="text-right font-mono text-[.8rem]">{a.side === "dr" ? a.amt.toLocaleString("en-IN") : ""}</td>
                    <td className="text-right font-mono text-[.8rem]">{a.side === "cr" ? a.amt.toLocaleString("en-IN") : ""}</td>
                  </tr>
                ))}
                <tr>
                  <td />
                  <td className="font-extrabold" style={{ color: FA_G[800] }}>Total</td>
                  <td className="text-right font-mono font-black" style={{ color: FA_G[800] }}>1,18,000</td>
                  <td className="text-right font-mono font-black" style={{ color: FA_G[800] }}>1,18,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>
        <div className="mt-3">
          <FaCallout kind="insight" title="Read the totals like an auditor">
            5,000 + 800 + 4,000 + 75,000 + 3,000 + 20,000 + 10,200 = <b>1,18,000</b> of debits;
            44,000 + 2,000 + 72,000 = <b>1,18,000</b> of credits. The columns agree — Pearl&rsquo;s
            postings are arithmetically sound.
          </FaCallout>
        </div>

        <FaReadStep n="04" title="Two ways to draw it up" sub="Vogue's June 30 trial balance, both methods" />
        <FaEq label="Vogue Company — trial balance, June 30">{`Balance method                    Total method
(net figure per account)         (both gross sides of every account)

Cash .................... 46,930 Dr    Cash ......... 58,500 Dr | 11,570 Cr
Trade payables ........... 2,500 Cr    Trade payables 1,000 Dr |  3,500 Cr
Revenue from services ... 14,000 Cr    Revenue ......      —    | 14,000 Cr

TOTALS ........... 68,000 = 68,000    TOTALS ... 86,370 = 86,370`}</FaEq>
        <div className="mt-3">
          <FaCallout kind="why" title="Why the total method is bigger — and equally true">
            The total method lists <b>both</b> sides of every account before netting, so the
            grand total rises (86,370 vs 68,000). The proof is identical: both columns agree.
            Ledger balances on a specified date — that is all a trial balance is; a basic check
            on bookkeeping.
          </FaCallout>
        </div>

        <FaReadStep n="05" title="Now sort it yourself" sub="Ten accounts from Pearl's extraction — which column does each belong in?" />
        <Reveal>
          <TrialBalanceSorter />
        </Reveal>

        <div className="mt-8">
          <Takeaways
            items={[
              <>The trial balance is the <b>third phase</b>: journal → ledger → trial balance.</>,
              <>It proves <b>arithmetic consistency</b>, not accuracy — principle and compensating errors survive.</>,
              <>Assets, drawings, purchases, expenses, losses → <b>debit</b> balances; liabilities, capital, reserves, incomes, sales, gains → <b>credit</b>.</>,
              <>Balance method nets each account (<b>68,000</b>); total method lists both gross sides (<b>86,370</b>) — same proof.</>,
              <>The Cash ledger balance <b>is</b> the Cash trial-balance line — the pipeline has no gaps.</>,
            ]}
          />
        </div>

        <div className="mt-8">
          <FaQuiz
            source="The honesty of the check"
            q="Pearl's trial balance agrees at \u20B91,18,000. Which error could STILL be sitting in her books?"
            options={[
              "A debit of 5,000 posted without a matching credit",
              "A purchase of machinery debited to Purchases (an error of principle)",
              "Debit totals of 1,19,000 against credit totals of 1,18,000",
              "A cash payment entered twice on the credit side only",
            ]}
            answer={1}
            explain="Option A and D break the equality — the trial balance would disagree, so they are caught. Option C is impossible here. But debiting the WRONG CLASS of account (machinery into purchases) keeps both sides equal: the entry is complete and balanced — only its meaning is wrong. Errors of principle sail straight past the trial balance."
          />
        </div>
      </div>
    </Section>
  );
}
