"use client";

/* ============================================================
   Financial Accounting — PART 5 (shelf 03 of The Atlas)
   The orientation block: the course map (L1), the four verbs
   and three branches (L2), and the users + regulatory
   environment (L3) — ICAI drafts, MCA legislates, SEBI polices.
   ============================================================ */

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  Building2,
  Check,
  ClipboardList,
  Coins,
  Compass,
  Factory,
  FileText,
  Gavel,
  Globe2,
  GraduationCap,
  Landmark,
  LineChart,
  Megaphone,
  Repeat,
  Scale,
  ScrollText,
  ShieldCheck,
  Sigma,
  Users,
  Wallet,
} from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { FA_BTN_GRAD, FA_G, FaCallout, FaEq, FaQuiz, FaReadStep } from "./FaParts1";

/* ============================================================
   CHAPTER — THE COURSE MAP (Lecture 1)
   ============================================================ */

const MODULES = [
  { n: "01", title: "Introduction", desc: "Concepts, conventions, terminology — and a first look at the balance sheet and income statement.", icon: Compass },
  { n: "02", title: "Records & Systems", desc: "The mechanics: journal entries, T-accounts, ledger accounts, trial balances.", icon: ClipboardList },
  { n: "03", title: "Statement Preparation", desc: "Balance sheet and P&L structure — accrual accounting, revenue recognition.", icon: FileText },
  { n: "04", title: "Cash Flow Statement", desc: "The most honest statement — its preparation, plus inventory valuation and depreciation.", icon: Wallet },
  { n: "05", title: "Assets & Analysis", desc: "Long-lived assets, depreciation methods — and reading annual reports for managerial insight.", icon: LineChart },
];

const CYCLE = [
  { step: "Transaction", note: "source document" },
  { step: "Journal", note: "day book, in time order" },
  { step: "Ledger", note: "T-accounts, by account" },
  { step: "Trial balance", note: "do the columns agree?" },
  { step: "Adjustments", note: "deferrals & accruals" },
  { step: "Statements", note: "P&L · balance sheet · cash flow" },
];

export function FaCourseMapSection() {
  const [active, setActive] = useState(0);
  return (
    <Section id="course-map">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 1 · Orientation"
          title={
            <>
              Accounting is the <span style={{ color: FA_G[700] }}>language of business</span> — and this course
              teaches you to read it.
            </>
          }
          lead="Every organization depends on accounting information: to record transactions, communicate performance, and support decisions. Before any vocabulary arrives, here is the whole journey — five modules, one cycle, three outcomes."
        />

        <FaReadStep n="01" title="The five modules" sub="From first concepts to reading annual reports like a manager" />
        <div className="grid gap-3 md:grid-cols-5" role="list">
          {MODULES.map((m, i) => {
            const Icon = m.icon;
            const on = active === i;
            return (
              <Reveal key={m.n} delay={i * 0.06}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={on}
                  className={`group h-full w-full rounded-2xl border p-4 text-left transition-all duration-300 ${
                    on
                      ? "border-[#059669] bg-white shadow-[0_16px_36px_-18px_rgba(5,150,105,.55)] ring-2 ring-[#10b981]/25"
                      : "border-[#e0ece6] bg-[#fffdf9] hover:border-[#a9dcc4] hover:bg-white"
                  }`}
                >
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-xl text-white"
                    style={{ background: on ? FA_BTN_GRAD : "#d6e8de" }}
                  >
                    <Icon className="h-4.5 w-4.5 h-[18px] w-[18px]" />
                  </span>
                  <p className="mt-3 font-mono text-[.6rem] font-black uppercase tracking-[.2em] text-[#7d9a8b]">
                    Module {m.n}
                  </p>
                  <p className="mt-1 text-[.95rem] font-extrabold leading-snug text-[#3e2c1d]">{m.title}</p>
                  <p className="mt-1.5 text-[.78rem] leading-relaxed text-muted-warm">{m.desc}</p>
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8">
          <FaCallout kind="story" title="No prior background required">
            The course is core for the BS in Management and Technology programme at IIT Jodhpur, taught by Dr.
            Manisha of the School of Management and Entrepreneurship. It assumes nothing — but it does demand
            practice: accounting is a skill, and fluency comes from repetition across many transactions.
          </FaCallout>
        </Reveal>

        <FaReadStep n="02" title="The accounting cycle" sub="How raw data becomes a financial statement — click a station" />
        <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
          <div className="flex flex-wrap items-center gap-2 border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3">
            <Repeat className="h-4 w-4" style={{ color: FA_G[700] }} />
            <span className="font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
              The cycle — six stations
            </span>
          </div>
          <div className="grid gap-px bg-[#e4f1ea] md:grid-cols-6">
            {CYCLE.map((c, i) => {
              const on = active === i;
              return (
                <button
                  key={c.step}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`group relative flex min-h-[112px] flex-col justify-between p-4 text-left transition-colors duration-300 ${
                    on ? "bg-[#ecfdf5]" : "bg-[#fffdf9] hover:bg-[#f7fbf9]"
                  }`}
                  aria-pressed={on}
                >
                  <span className="font-mono text-[.6rem] font-black uppercase tracking-[.18em]" style={{ color: on ? FA_G[700] : "#9db8a9" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block text-[.9rem] font-extrabold leading-tight text-[#3e2c1d]">{c.step}</span>
                    <span className="mt-1 block text-[.7rem] leading-snug text-muted-warm">{c.note}</span>
                  </span>
                  {i < CYCLE.length - 1 ? (
                    <ArrowRight className="absolute -right-2 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-[#9db8a9] md:block" aria-hidden />
                  ) : null}
                </button>
              );
            })}
          </div>
          <div className="border-t border-[#e4f1ea] bg-white px-4 py-3 text-[.8rem] leading-relaxed text-[#2b2014]">
            <b style={{ color: FA_G[700] }}>{CYCLE[active]?.step}.</b>{" "}
            {active === 0 && "Every story starts with a source document — a cash receipt, an invoice, a salary bill. No document, no entry."}
            {active === 1 && "The journal records events the day they happen, each with its two effects: a debit and an equal credit."}
            {active === 2 && "The ledger regroups the same entries by account — one page per account, ending in a balance."}
            {active === 3 && "A statement of every ledger balance at a point in time. If double entry has been honoured, the columns must meet."}
            {active === 4 && "Deferrals and accruals catch the books up with reality before any statement is allowed to speak."}
            {active === 5 && "The profit & loss account, the balance sheet and the cash flow statement — the reports the whole machine exists to produce."}
          </div>
        </div>

        <FaReadStep n="03" title="Three outcomes" sub="What you should be able to do when the course ends" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { icon: Sigma, t: "Understand the role", d: "Grasp the nature of accounting and its critical role in business decision-making." },
            { icon: FileText, t: "Prepare & comprehend", d: "Prepare and comprehend the financial statements of real firms." },
            { icon: BadgeCheck, t: "Analyze & extract", d: "Draw useful managerial information for managers, investors and other decision-makers." },
          ].map((o, i) => {
            const Icon = o.icon;
            return (
              <Reveal key={o.t} delay={i * 0.06}>
                <div className="card-warm h-full p-5">
                  <Icon className="h-5 w-5" style={{ color: FA_G[700] }} />
                  <p className="mt-2 font-extrabold text-[#3e2c1d]">{o.t}</p>
                  <p className="mt-1 text-[.84rem] leading-relaxed text-muted-warm">{o.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10">
          <Takeaways
            items={[
              <>Accounting is the <b>language of business</b> — recording, communicating and deciding run on it.</>,
              <>The course walks the full <b>accounting cycle</b>: journal → ledger → trial balance → adjustments → statements.</>,
              <>Specific areas — receivables, inventories, long-lived assets, depreciation, amortization — get dedicated depth.</>,
              <>The end goal is <b>financial analysis</b>: reading annual reports and extracting managerial insight.</>,
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER — WHAT ACCOUNTING IS (Lecture 2)
   ============================================================ */

const VERBS = [
  { v: "Identifying", d: "Recognize events with a financial impact — and filter out the rest. A machine breakdown that stops production? Financial. A star employee's dedication? Not recordable.", icon: Filterish },
  { v: "Recording", d: "Document the filtered events systematically, in writing — the journal's day book. Memory is not an accounting system.", icon: BookOpenText },
  { v: "Measuring", d: "Express everything in monetary terms — the common currency that lets cash, raw materials, equipment and property be added into one total.", icon: Coins },
  { v: "Communicating", d: "Report and publish to the stakeholders who must judge and decide — investors, lenders, regulators, managers.", icon: Megaphone },
];

function Filterish(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 5h18l-7 8v5l-4 2v-7L3 5z" />
    </svg>
  );
}

const BRANCHES = [
  {
    t: "Financial Accounting",
    who: "External users",
    d: "Reports overall performance and position to investors, creditors, lenders and regulators. Standardized formats, regulatory rules (Ind AS in India, IFRS globally) — and the information is public.",
    tags: ["Standardized", "Public", "Rules-bound"],
    icon: Landmark,
  },
  {
    t: "Management Accounting",
    who: "Internal users",
    d: "Detailed, forward-looking information for planning, budgeting and internal decisions. No standardized format — it never leaves the organization.",
    tags: ["Forward-looking", "Internal", "Free format"],
    icon: Factory,
  },
  {
    t: "Cost Accounting",
    who: "A branch of management",
    d: "Tracks and analyzes the costs of producing goods or services — pricing decisions, cost control, operational efficiency.",
    tags: ["Costs", "Pricing", "Efficiency"],
    icon: Scale,
  },
];

export function FaLanguageSection() {
  const [verb, setVerb] = useState(0);
  return (
    <Section id="language">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 2 · Foundations"
          title={
            <>
              Four verbs, three branches, <span style={{ color: FA_G[700] }}>one equation</span> that must always balance.
            </>
          }
          lead="The textbook definition: accounting is the process of identifying, recording, measuring and communicating financial information about an economic entity to permit judgments and decisions by its users. Run the pipeline."
        />

        <FaReadStep n="01" title="The four-step pipeline" sub="Click a verb — see what passes and what is filtered out" />
        <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
          <div className="grid md:grid-cols-4">
            {VERBS.map((b, i) => {
              const Icon = b.icon;
              const on = verb === i;
              return (
                <button
                  key={b.v}
                  type="button"
                  onClick={() => setVerb(i)}
                  aria-pressed={on}
                  className={`relative flex flex-col items-start gap-2 p-5 text-left transition-colors duration-300 md:border-r md:border-[#e4f1ea] md:last:border-r-0 ${
                    on ? "bg-[#ecfdf5]" : "bg-[#fffdf9] hover:bg-[#f7fbf9]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-white"
                      style={{ background: on ? FA_BTN_GRAD : "#d6e8de" }}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className={`text-[.95rem] font-extrabold ${on ? "text-[#065f46]" : "text-[#3e2c1d]"}`}>{b.v}</span>
                  </span>
                  {i < VERBS.length - 1 ? (
                    <ArrowRight className="absolute -right-2.5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-[#9db8a9] md:block" aria-hidden />
                  ) : null}
                  <span className="text-[.7rem] font-bold uppercase tracking-[.16em] text-[#9db8a9]">Verb {i + 1}</span>
                </button>
              );
            })}
          </div>
          <motion.div
            key={verb}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="border-t border-[#e4f1ea] bg-white px-5 py-4"
          >
            <p className="text-[.92rem] leading-relaxed text-[#2b2014]">{VERBS[verb].d}</p>
          </motion.div>
        </div>

        <Reveal className="mt-6">
          <FaCallout kind="why" title="Why the filter matters">
            Employee dedication and company reputation matter enormously to a business — but accounting cannot record
            them, because they cannot be expressed in monetary terms. The measurement step is where accounting&apos;s
            greatest strength (one comparable number-language) and greatest limitation (important things left out) come
            from the same source.
          </FaCallout>
        </Reveal>

        <FaReadStep n="02" title="The umbrella — three branches" sub="One word, three audiences, three rulebooks" />
        <div className="grid gap-3 md:grid-cols-3">
          {BRANCHES.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.t} delay={i * 0.06}>
                <div className="card-warm h-full p-5">
                  <div className="flex items-center justify-between">
                    <Icon className="h-5 w-5" style={{ color: FA_G[700] }} />
                    <span className="rounded-full bg-[#ecfdf5] px-2.5 py-1 text-[.62rem] font-black uppercase tracking-[.14em]" style={{ color: FA_G[700] }}>
                      {b.who}
                    </span>
                  </div>
                  <p className="mt-3 text-[1.02rem] font-extrabold text-[#3e2c1d]">{b.t}</p>
                  <p className="mt-1.5 text-[.84rem] leading-relaxed text-muted-warm">{b.d}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {b.tags.map((t) => (
                      <span key={t} className="rounded-full border border-[#dcebe2] bg-white px-2 py-0.5 text-[.66rem] font-bold text-[#5c7a6b]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <FaReadStep n="03" title="The entity concept & the equation" sub="The business is a separate unit — and its story always balances" />
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="card-warm h-full p-5">
              <p className="text-[.95rem] font-extrabold text-[#3e2c1d]">The entity concept</p>
              <ul className="mt-2 grid gap-2 text-[.86rem] leading-relaxed text-[#2b2014]">
                {[
                  "The business is treated as separate and distinct from its owner.",
                  "Personal assets, liabilities and expenditures stay out of the books.",
                  "An owner's investment is recorded as equity — the business's obligation to its owner.",
                  "Only then can business performance be measured meaningfully on its own.",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: FA_G[600] }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full">
              <FaEq label="The foundation of everything that follows">{`Assets = Liabilities + Equity

Assets      — what the business owns
              (cash, furniture, machinery, vehicles)
Liabilities — what the business owes to others
Equity      — the owner's capital; the residual claim
              (also called shareholders' equity)

Friend lends the business money?
  Assets  ↑ (cash received)
  Liabilities ↑ (debt owed to the friend)
  …and the equation stays balanced.`}</FaEq>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FaQuiz
            source="Lecture 2 · check yourself"
            q="A proprietor pays for his family's vacation from his personal account and wants it recorded as a business expense. Which foundation does this break?"
            options={[
              "Money measurement — a vacation has no monetary value",
              "The entity concept — personal affairs do not belong in the business's books",
              "The dual aspect concept — only one side of the entry exists",
              "The communication step — the information was never published",
            ]}
            answer={1}
            explain="The entity concept draws a boundary: the business is a separate unit from its owner. Personal expenses — vacations, entertainment, the owner's home electricity — never touch the business's records. (The owner's investment, however, does enter — recorded as equity.)"
          />
          <FaQuiz
            source="Lecture 2 · check yourself"
            q="Which branch of accounting is forward-looking, format-free, and never leaves the organization?"
            options={[
              "Financial accounting",
              "Cost accounting",
              "Management accounting",
              "Tax accounting",
            ]}
            answer={2}
            explain="Management accounting serves internal decision-makers — planning, budgeting, target-setting. It has no standardized format because it stays internal. Financial accounting is the rules-bound, public one; cost accounting is a specialized branch of management accounting focused on production costs."
          />
        </div>

        <div className="mt-10">
          <Takeaways
            items={[
              <>Accounting = <b>identify → record → measure → communicate</b> — and the filter is money measurement.</>,
              <>Three branches: <b>financial</b> (external, standardized, public), <b>management</b> (internal, free format), <b>cost</b> (production focus).</>,
              <>The <b>entity concept</b> separates the business from its owner; owner investment is recorded as equity.</>,
              <><b>Assets = Liabilities + Equity</b> must balance after every single transaction — the course's one invariant.</>,
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER — OBJECTIVES, USERS & REGULATION (Lecture 3)
   ============================================================ */

const OBJECTIVES = [
  { t: "Systematic recording", d: "Record all financial aspects of transactions methodically — bookkeeping, the foundation for everything else.", icon: ClipboardList },
  { t: "Classification & summarization", d: "Organize recorded transactions logically to prepare financial statements with meaningful insights.", icon: FileText },
  { t: "Ascertainment of results", d: "Profit if revenues exceed expenses; loss if expenses exceed revenues — determined through the profit & loss account.", icon: LineChart },
  { t: "Financial position", d: "The balance sheet presents assets and liabilities at a specific date — the overall health of the organization.", icon: Scale },
  { t: "Decision-making & solvency", d: "Reveal liquidity (short-term obligations) and solvency (long-term obligations) — the raw material of planning and strategy.", icon: ShieldCheck },
];

const INTERNAL_USERS = [
  { t: "Managers & directors", d: "Budgeting, targets, resource allocation, performance review — open a new factory or shut one down?" },
  { t: "Employees", d: "Company stability, job security, prospects for salary increases." },
  { t: "Internal auditors", d: "The company's financial watchdogs — verify recording, catch errors, test internal controls." },
];

const EXTERNAL_USERS = [
  { t: "Investors & shareholders", d: "Profitability and growth prospects — is this a home for my money?" },
  { t: "Banks & lenders", d: "Repayment ability and solvency before extending credit." },
  { t: "Government & tax authorities", d: "Correct tax payment; investigating avoidance schemes." },
  { t: "Suppliers & creditors", d: "Will invoices be paid on time? Payment trends and current position." },
  { t: "Customers", d: "Stability for long-term warranties and contract fulfilment." },
  { t: "General public", d: "Interest in the company's performance and its effect on the community." },
];

export function FaUsersRegulatorySection() {
  const [side, setSide] = useState<"internal" | "external">("internal");
  return (
    <Section id="users-regulatory">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 3 · Objectives, users & regulation"
          title={
            <>
              Who reads the numbers — and <span style={{ color: FA_G[700] }}>who writes the rules</span>.
            </>
          }
          lead="Five objectives give accounting its job description. Two families of users consume its output. And without uniform standards, comparison dies — so three Indian institutions police the language."
        />

        <FaReadStep n="01" title="Five objectives" sub="From the first ledger line to the solvency verdict" />
        <div className="grid gap-3 md:grid-cols-5">
          {OBJECTIVES.map((o, i) => {
            const Icon = o.icon;
            return (
              <Reveal key={o.t} delay={i * 0.05}>
                <div className="card-warm flex h-full flex-col p-4">
                  <span className="font-mono text-[.6rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
                    0{i + 1}
                  </span>
                  <Icon className="mt-2 h-5 w-5" style={{ color: FA_G[700] }} />
                  <p className="mt-2 text-[.86rem] font-extrabold leading-snug text-[#3e2c1d]">{o.t}</p>
                  <p className="mt-1.5 text-[.76rem] leading-relaxed text-muted-warm">{o.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <FaReadStep n="02" title="The two families of users" sub="Same statements, completely different questions — toggle the side" />
        <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
          <div className="grid grid-cols-2 border-b border-[#e4f1ea]">
            {(["internal", "external"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSide(s)}
                aria-pressed={side === s}
                className={`px-4 py-3.5 text-[.85rem] font-extrabold uppercase tracking-[.14em] transition-colors ${
                  side === s ? "bg-[#ecfdf5] text-[#065f46]" : "bg-[#fffdf9] text-[#9db8a9] hover:text-[#5c7a6b]"
                }`}
              >
                {s === "internal" ? "Internal users" : "External users"}
              </button>
            ))}
          </div>
          <div className="grid gap-px bg-[#e4f1ea] md:grid-cols-3">
            {(side === "internal" ? INTERNAL_USERS : EXTERNAL_USERS).map((u) => (
              <motion.div
                key={u.t}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#fffdf9] p-4"
              >
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" style={{ color: FA_G[700] }} />
                  <p className="text-[.88rem] font-extrabold text-[#3e2c1d]">{u.t}</p>
                </div>
                <p className="mt-1.5 text-[.78rem] leading-relaxed text-muted-warm">{u.d}</p>
              </motion.div>
            ))}
          </div>
          <div className="border-t border-[#e4f1ea] bg-white px-4 py-3 text-[.8rem] text-[#2b2014]">
            {side === "internal"
              ? "Internal users live inside the organization — they receive detail beyond the published statements."
              : "External users rely on the standardized, published statements — which is exactly why uniform standards exist."}
          </div>
        </div>

        <FaReadStep n="03" title="Why standards exist at all" sub="Without uniform rules, comparison is impossible" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            "Each company could invent its own system — stakeholders could not evaluate or compare performance.",
            "Different methods could produce vastly different profits for identical revenues — misleading comparisons.",
            "Lenders and investors would lack a reliable basis for comparing loans or opportunities.",
          ].map((t, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-[#e8d3ac] bg-[#fbf4e4] p-4">
                <p className="text-[.84rem] leading-relaxed text-[#5c4a22]">{t}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <FaReadStep n="04" title="India's three pillars" sub="The author, the legislator and the police" />
        <div className="overflow-hidden rounded-2xl border border-[#c7e5d6]">
          <div className="grid md:grid-cols-3">
            {[
              {
                icon: Gavel,
                abbr: "ICAI",
                full: "Institute of Chartered Accountants of India",
                role: "The author",
                pts: ["Apex professional body; drafts standards through its Accounting Standards Board", "Issues guidance notes and certifies chartered accountants"],
              },
              {
                icon: Landmark,
                abbr: "MCA",
                full: "Ministry of Corporate Affairs",
                role: "The legislator",
                pts: ["Prescribes standards under the Companies Act 2013", "Enforces compliance through registrars of companies; monitors firms"],
              },
              {
                icon: ShieldCheck,
                abbr: "SEBI",
                full: "Securities and Exchange Board of India",
                role: "The police",
                pts: ["Regulates listed companies; mandates disclosure norms and quarterly reporting", "Protects investors through stringent disclosure requirements"],
              },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.abbr} delay={i * 0.07}>
                  <div className="flex h-full flex-col border-b border-[#e4f1ea] bg-[#fffdf9] p-5 md:border-b-0 md:border-r md:last:border-r-0">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl text-white" style={{ background: FA_BTN_GRAD }}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-[1.05rem] font-black tracking-tight text-[#3e2c1d]">{p.abbr}</p>
                        <p className="text-[.66rem] font-bold uppercase tracking-[.14em]" style={{ color: FA_G[700] }}>{p.role}</p>
                      </div>
                    </div>
                    <p className="mt-2 text-[.72rem] font-semibold text-muted-warm">{p.full}</p>
                    <ul className="mt-3 grid gap-2">
                      {p.pts.map((t) => (
                        <li key={t} className="flex items-start gap-2 text-[.8rem] leading-relaxed text-[#2b2014]">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: FA_G[600] }} />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <FaReadStep n="05" title="The global layer — IFRS & Ind AS" sub="One language, localized for India" />
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="card-warm h-full p-5">
              <div className="flex items-center gap-2">
                <Globe2 className="h-5 w-5" style={{ color: FA_G[700] }} />
                <p className="text-[.98rem] font-extrabold text-[#3e2c1d]">IFRS</p>
              </div>
              <p className="mt-2 text-[.86rem] leading-relaxed text-[#2b2014]">
                Issued by the International Accounting Standards Board, headquartered in London — adopted by more than
                <b> 140 countries</b>. The objective: a single set of high-quality global standards, so financial
                statements are comparable across borders.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card-warm h-full p-5">
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5" style={{ color: FA_G[700] }} />
                <p className="text-[.98rem] font-extrabold text-[#3e2c1d]">Ind AS — India&apos;s converged IFRS</p>
              </div>
              <p className="mt-2 text-[.86rem] leading-relaxed text-[#2b2014]">
                Notified by the MCA under the Companies Act 2013. Mandatory for all listed companies and large
                unlisted companies with net worth exceeding <b>₹250 crore</b>. Indian statements become comparable
                with international ones — while accommodating country-specific deviations.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FaQuiz
            source="Lecture 3 · check yourself"
            q="Who drafts India's accounting standards, and who gives them the force of law?"
            options={[
              "SEBI drafts; ICAI enforces",
              "ICAI drafts; MCA notifies under the Companies Act 2013",
              "MCA drafts; SEBI notifies for listed companies",
              "The IASB drafts; India adopts directly",
            ]}
            answer={1}
            explain="ICAI is the author — its Accounting Standards Board drafts the standards. MCA is the legislator — it prescribes them under the Companies Act 2013 and enforces compliance. SEBI then polices listed companies with disclosure norms and quarterly reporting."
          />
          <FaQuiz
            source="Lecture 3 · check yourself"
            q="An unlisted company has a net worth of ₹310 crore. Are Ind AS mandatory for it?"
            options={[
              "No — Ind AS is only for listed companies",
              "Yes — large unlisted companies above ₹250 crore net worth must follow Ind AS",
              "Only if it borrows from a bank",
              "Only if it exports goods",
            ]}
            answer={1}
            explain="Ind AS is mandatory for all listed companies and for large unlisted companies with net worth exceeding ₹250 crore. It is India's converged version of IFRS — globally comparable, with Indian deviations."
          />
        </div>

        <div className="mt-10">
          <Takeaways
            items={[
              <>Five objectives: record, summarize, ascertain results, show position, enable <b>liquidity & solvency</b> decisions.</>,
              <>Internal users (managers, employees, internal auditors) want detail; external users (investors, lenders, government, suppliers, customers, public) rely on published statements.</>,
              <>ICAI <b>drafts</b> → MCA <b>legislates</b> → SEBI <b>polices</b> listed companies.</>,
              <>IFRS: 140+ countries. <b>Ind AS</b>: India's converged version — mandatory above ₹250 crore net worth.</>,
            ]}
          />
        </div>
      </div>
    </Section>
  );
}
