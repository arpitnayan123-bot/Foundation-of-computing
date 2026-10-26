"use client";

/* ============================================================
   Financial Accounting — PART 1 of 4 (shelf 03 of The Atlas)
   The hero + Module 1: why accounting exists (the five
   openings), the four measurement assumptions, reporting
   entity & going concern, periodicity & matching.

   Also hosts the FA emerald micro-kit (FaReadStep, FaCallout,
   FaEq, FaQuiz) shared by parts 2–4: same mould as the FoC/ATB
   pages, shelf 03\u2019s emerald sigil.
   ============================================================ */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  BookOpenCheck,
  Building2,
  Check,
  Coins,
  FileWarning,
  GraduationCap,
  HandCoins,
  Landmark,
  Lightbulb,
  PenLine,
  Repeat,
  Scale,
  ScrollText,
  Sparkles,
  Timer,
  User,
  Users,
  Wallet,
  X,
} from "lucide-react";
import {
  Practice,
  Reveal,
  Section,
  SectionHead,
  Takeaways,
} from "@/components/notes/ui";

/* ============================================================
   FA emerald micro-kit — the shared vocabulary of shelf 03
   ============================================================ */
export const FA_G = {
  500: "#10b981",
  600: "#059669",
  700: "#047857",
  800: "#065f46",
  soft: "#ecfdf5",
  border: "#c7e5d6",
  wash: "#f4faf7",
  gold: "#b45309",
};

export const FA_BTN_GRAD = "linear-gradient(135deg,#10b981,#047857)";
export const FA_BTN_SHADOW = "0 14px 30px -12px rgba(4,120,87,.55)";

export function FaReadStep({ n, title, sub }: { n: string; title: string; sub?: string }) {
  return (
    <Reveal className="mb-5 mt-12 first:mt-0">
      <div className="flex items-center gap-3">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-extrabold text-white shadow-md"
          style={{ background: FA_BTN_GRAD, boxShadow: "0 4px 12px -3px rgba(4,120,87,.55)" }}
          aria-hidden
        >
          {n}
        </span>
        <div>
          <h3 className="text-xl font-bold leading-snug md:text-2xl text-[#3e2c1d]">{title}</h3>
          {sub ? <p className="text-[.82rem] text-muted-warm">{sub}</p> : null}
        </div>
      </div>
    </Reveal>
  );
}

const FA_CALLOUT_STYLES: Record<string, { bg: string; border: string; icon: React.ReactNode; label: string }> = {
  insight: { bg: "#f2faf6", border: "#a9dcc4", icon: <Sparkles className="h-4 w-4" style={{ color: FA_G[700] }} />, label: FA_G[700] },
  why: { bg: "#fbf4e4", border: "#e3c98f", icon: <Lightbulb className="h-4 w-4" style={{ color: FA_G.gold }} />, label: FA_G.gold },
  warn: { bg: "#fbeae5", border: "#e8a896", icon: <AlertTriangle className="h-4 w-4" style={{ color: "#b3402c" }} />, label: "#b3402c" },
  story: { bg: "#f5f1e8", border: "#cec2a4", icon: <ScrollText className="h-4 w-4" style={{ color: "#7c6248" }} />, label: "#7c6248" },
};

export function FaCallout({
  kind = "insight",
  title,
  children,
}: {
  kind?: "insight" | "why" | "warn" | "story";
  title: string;
  children: React.ReactNode;
}) {
  const s = FA_CALLOUT_STYLES[kind];
  return (
    <div className="rounded-2xl p-5" style={{ background: s.bg, border: `1px solid ${s.border}` }}>
      <div className="flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.14em]" style={{ color: s.label }}>
        {s.icon}
        <span>{title}</span>
      </div>
      <div className="mt-2 text-[.92rem] leading-relaxed text-[#2b2014]">{children}</div>
    </div>
  );
}

/** mono equation panel — the ledger-ruled workhorse of the shelf */
export function FaEq({ children, label, tone = "emerald" }: { children: string; label?: string; tone?: "emerald" | "gold" }) {
  const line = tone === "emerald" ? FA_G.border : "#e8d3ac";
  const head = tone === "emerald" ? "#e7f5ee" : "#faf0da";
  const ink = tone === "emerald" ? FA_G[700] : FA_G.gold;
  return (
    <div className="overflow-hidden rounded-2xl border" style={{ borderColor: line }}>
      {label ? (
        <p className="border-b px-4 py-2 font-mono text-[.66rem] font-bold uppercase tracking-[.2em]" style={{ borderColor: line, background: head, color: ink }}>
          {label}
        </p>
      ) : null}
      <pre className="overflow-x-auto px-5 py-4 font-mono text-[.84rem] leading-relaxed text-[#1d4433]">{children}</pre>
    </div>
  );
}

/** interactive single-choice — the FA quiz, emerald jacket */
export function FaQuiz({
  q,
  options,
  answer,
  explain,
  source,
}: {
  q: string;
  options: string[];
  answer: number;
  explain: string;
  source?: string;
}) {
  const [chosen, setChosen] = useState<number | null>(null);
  const revealed = chosen !== null;
  return (
    <div className="card-warm p-5">
      <div className="flex items-start gap-2">
        <GraduationCap className="mt-0.5 h-5 w-5 shrink-0" style={{ color: FA_G[700] }} />
        <div>
          <p className="quiz-q font-semibold leading-snug text-[#3e2c1d]">{q}</p>
          {source ? (
            <p className="quiz-src mt-1 text-[.7rem] font-bold uppercase tracking-[.16em]" style={{ color: FA_G[700] }}>
              {source}
            </p>
          ) : null}
        </div>
      </div>
      <div className="mt-3 grid gap-2">
        {options.map((opt, i) => {
          const isAnswer = i === answer;
          const cls = !revealed
            ? "quiz-opt"
            : isAnswer
            ? "quiz-opt correct"
            : i === chosen
            ? "quiz-opt wrong"
            : "quiz-opt";
          return (
            <button
              key={i}
              className={cls}
              disabled={revealed}
              onClick={() => setChosen(i)}
              aria-label={`Option ${i + 1}: ${opt}`}
            >
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-current text-[.65rem] font-bold">
                {revealed && isAnswer ? (
                  <Check className="h-3 w-3" />
                ) : revealed && i === chosen ? (
                  <X className="h-3 w-3" />
                ) : (
                  String.fromCharCode(65 + i)
                )}
              </span>
              {opt}
            </button>
          );
        })}
      </div>
      <AnimatePresence>
        {revealed ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 rounded-xl border p-3 text-[.85rem] leading-relaxed text-[#2b2014]"
            style={{ borderColor: FA_G.border, background: FA_G.wash }}
          >
            <strong style={{ color: chosen === answer ? FA_G[700] : "#b3402c" }}>
              {chosen === answer ? "Correct. " : "Not quite. "}
            </strong>
            {explain}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

/* ============================================================
   CHAPTER 1 — WHY ACCOUNTING EXISTS (the five openings)
   ============================================================ */
export function FaWhySection() {
  return (
    <Section id="why">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 1 · Why accounting exists"
          title={
            <>
              Five openings — every one ends at the{" "}
              <span className="grad-emerald">same question</span>
            </>
          }
          lead="No definitions yet. Five rooms, five arguments — and the same ghost in each: what did the business really earn, and who can trust the number?"
        />

        {/* 1 · the dinner table */}
        <FaReadStep n="01" title="The argument at the dinner table" sub="Same transactions, same year — opposite verdicts" />
        <FaCallout kind="story" title="The case">
          Priya and Rohan jointly inherited their father&rsquo;s small manufacturing business. At
          year end they sit down to figure out how it did. Priya says it{" "}
          <b>&ldquo;barely made anything&rdquo;</b> and wants to sell. Rohan says it{" "}
          <b>&ldquo;did great&rdquo;</b> and wants to expand. Same transactions, same year — but
          Priya counted the <b>full cost of a new machine</b> as this year&rsquo;s expense, while
          Rohan counted <b>no wear-and-tear</b> on the older equipment at all.
        </FaCallout>
        <div className="mt-4">
          <FaCallout kind="insight" title="Why both are wrong">
            &ldquo;Profit&rdquo; is not a fact lying around to be picked up — it is a{" "}
            <b>constructed number</b>. Until rules decide how the machine&rsquo;s cost is spread
            and how wear-and-tear is recognised every period, two honest people looking at the
            same year will build two different profits. That is what accounting conventions are
            for: one agreed way, so the argument ends.
          </FaCallout>
        </div>

        {/* 2 · the notebook and the investor */}
        <FaReadStep n="02" title="The notebook and the investor" sub="\u20B915 lakh is waiting — but on whose word?" />
        <FaCallout kind="story" title="The case">
          Ramesh runs a street-food business that grew from one stall to three. He tracks
          everything himself — cash in, cash out — in a personal notebook, in his own shorthand.
          A close friend offers to invest ₹15 lakh so Ramesh can open five more stalls — but
          asks to see <b>&ldquo;the financials&rdquo;</b> first. Ramesh says, &ldquo;It&rsquo;s all
          in my head, and in this notebook — ask me anything, I&rsquo;ll tell you.&rdquo; The
          friend trusts Ramesh personally — and is still hesitant to invest.
        </FaCallout>
        <div className="mt-4">
          <FaCallout kind="why" title="The gap the course fills">
            Personal trust does not scale into capital. The friend is not doubting Ramesh&rsquo;s
            honesty — he is doubting a system where one person&rsquo;s shorthand decides what
            counts as income. Financial statements exist to replace <b>&ldquo;ask me
            anything&rdquo;</b> with numbers prepared by agreed rules, so a stranger can check
            them too.
          </FaCallout>
        </div>

        {/* 3 · who reads this */}
        <FaReadStep n="03" title="Who reads this, and why" sub="One set of statements, three different conversations" />
        <FaCallout kind="story" title="The case">
          Vasudha runs a small chain of three gyms. One set of statements — a balance sheet and
          an income statement. On the same afternoon she shows them to a <b>bank</b> (a loan for
          a fourth location), to <b>Arjun</b> (a friend investing &ldquo;the company&rsquo;s
          profit&rdquo;). She assumed one set of numbers would mean one conversation. All three
          meetings went completely differently.
        </FaCallout>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {[
            { icon: Landmark, who: "The bank", want: "Can the business service a loan?", eye: "Stability, collateral, cash cover for interest." },
            { icon: HandCoins, who: "The investor", want: "What is my 10% stake worth?", eye: "Growth, quality of profit, future returns." },
            { icon: Users, who: "The managers", want: "Will the bonus plan pay out?", eye: "The profit line they are tied to — and how it is built." },
          ].map((c, i) => (
            <Reveal key={c.who} delay={i * 90}>
              <div className="card-warm lift h-full p-5">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md"
                  style={{ background: FA_BTN_GRAD }}
                >
                  <c.icon className="h-4.5 w-4.5" />
                </span>
                <p className="mt-3 text-[.95rem] font-extrabold text-[#3e2c1d]">{c.who}</p>
                <p className="mt-1 text-[.8rem] font-semibold" style={{ color: FA_G[700] }}>{c.want}</p>
                <p className="mt-2 text-[.8rem] leading-relaxed text-muted-warm">{c.eye}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-4">
          <FaCallout kind="insight" title="So what is financial accounting, really?">
            A common language for the money story of a business — prepared once, but read by
            lenders, investors, managers, the government. The statements are the same; the
            question each reader brings decides the conversation. Learning the language is
            learning all three meetings at once.
          </FaCallout>
        </div>

        {/* 4 · would you lend them money */}
        <FaReadStep n="04" title="Would you lend them money?" sub="\u20B950 crore of revenue each — very different profits" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-5">
              <p className="font-mono text-[.68rem] font-bold uppercase tracking-[.2em] text-[#b3402c]">Company X</p>
              <p className="mt-2 text-[.9rem] leading-relaxed text-[#2b2014]">
                Revenue ₹50 crore, profit ₹8 crore — but the ₹8 crore came almost entirely
                from <b>selling off a factory</b>: a one-time gain. The core, ongoing operations
                <b> lost money</b> this year.
              </p>
            </div>
          </Reveal>
          <Reveal delay={110}>
            <div className="card-warm lift h-full p-5">
              <p className="font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>Company Y</p>
              <p className="mt-2 text-[.9rem] leading-relaxed text-[#2b2014]">
                Same ₹50 crore revenue, only ₹2 crore profit — but every rupee of it from{" "}
                <b>normal day-to-day business</b>, grown steadily for <b>three years running</b>.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="mt-4">
          <FaQuiz
            source="The lending decision"
            q="Your \u20B910 crore loan application is on the desk of one of these two. Which profit figure would you rather be judged by — and why?"
            options={[
              "Company X's \u20B98 crore — bigger is better",
              "Company Y's \u20B92 crore — it repeats, X's does not",
              "Neither — profit is irrelevant to lending",
              "Whichever company has more factories",
            ]}
            answer={1}
            explain="Lending is repaid out of the business a company can repeat tomorrow. X's gain is a one-time event — sell the factory once and it is gone (the core actually lost money). Y's smaller profit is recurring and growing, which is exactly what services debt. One number is bigger; the other is better."
          />
        </div>

        {/* 5 · profitable, and out of cash */}
        <FaReadStep n="05" title="Profitable — and out of cash" sub="The gap between the income statement and the bank account" />
        <FaCallout kind="story" title="The case">
          Solaris Furnishings had a great year on paper: sales up 40%, the highest net income in
          five years. Four months into the next year it <b>could not pay its suppliers</b> and
          shut down two of its three factories. What happened? Nearly all sales were made to a
          handful of large retail chains — <b>on credit, 120-day terms</b> — and it bought a
          mountain of raw material upfront. By year-end, a large share of its &ldquo;sales&rdquo;
          existed only as <b>amounts owed to Solaris</b> — not as cash in the bank.
        </FaCallout>
        <div className="mt-4">
          <FaCallout kind="warn" title="Profit is an opinion about a period — cash is a fact at a moment">
            Accrual accounting recognises revenue when it is <b>earned</b>, not when cash lands.
            That is what makes profit comparable across periods — and it is also why a
            &ldquo;profitable&rdquo; company can die of thirst. The statement pair exists
            because of this gap: the income statement tells the story of the period, the cash
            (and balance-sheet) view tells you what is actually in the vault.
          </FaCallout>
        </div>

        <div className="mt-8">
          <Takeaways
            items={[
              <>Profit is <b>constructed</b> — conventions (not opinions) decide what counts, so the argument ends the same way every time.</>,
              <>Statements replace <b>&ldquo;trust me&rdquo;</b> with &ldquo;check me&rdquo; — that is what turns personal goodwill into investable capital.</>,
              <>One set of statements, many readers: <b>lenders, investors, managers</b> — each brings a different question to the same numbers.</>,
              <>A one-time gain is not a business model — <b>recurring</b> profit is what repays debt.</>,
              <>Profitable companies can still run out of <b>cash</b> — the income statement and the bank account tell different truths.</>,
            ]}
          />
        </div>

        <div className="mt-8">
          <Practice
            title="Seminar drills — argue it out"
            items={[
              {
                q: "How can two people looking at the same year of the same business reach opposite conclusions about performance?",
                hint: "Each privately chose a different measurement rule for the machine and the wear-and-tear — the number follows the rule.",
              },
              {
                q: "What would prevent this disagreement in a company with professionally prepared statements?",
                hint: "Agreed conventions + a measurement framework applied by someone other than the winner of the argument.",
              },
              {
                q: "Why does accounting rely on agreed-upon rules at all, instead of everyone calculating profit their own way?",
                hint: "Think of Ramesh's investor and Vasudha's three meetings — numbers only trade value when strangers can trust how they were built.",
              },
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 2 — THE FOUR MEASUREMENT ASSUMPTIONS
   ============================================================ */
export function FaAssumptionsSection() {
  return (
    <Section id="assumptions">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHead
          eyebrow="Module 1 · The measurement assumptions"
          title={
            <>
              Four quiet <span className="grad-emerald">assumptions</span> under every rupee
            </>
          }
          lead="The purpose of accounting is to measure and communicate an enterprise's economic activities. But it only measures events that affect the financial position — and it measures them on four assumptions."
        />

        <FaReadStep n="01" title="What counts as a transaction — and what gets measured" />
        <div className="grid gap-3 md:grid-cols-2">
          <FaCallout kind="insight" title="Transactions">
            Business transactions are events that result in the <b>transfer or exchange of
            value</b> between parties — monetary exchanges, non-monetary exchanges, or one-way
            transfers (a donation given, a theft suffered). If value moved, accounting is
            interested.
          </FaCallout>
          <FaCallout kind="why" title="The filter">
            Accounting <b>measures events only if they affect the financial position</b> of the
            enterprise. Signing a promise, hiring a star employee, losing a key customer to a
            competitor — real events, but until value moves, the books stay silent.
          </FaCallout>
        </div>

        <FaReadStep n="02" title="The four assumptions" sub="Reporting entity · Going concern · Periodicity · Money measurement" />
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { icon: Building2, n: "1", t: "Reporting Entity", d: "Business is distinct from its owners and from other firms — the books draw a boundary around one enterprise." },
            { icon: Repeat, n: "2", t: "Going Concern", d: "The business is assumed to continue operating — no liquidation on the horizon, so cost is meaningful." },
            { icon: Timer, n: "3", t: "Periodicity", d: "Activities are divided into artificial time periods — usually a year, sometimes a quarter." },
            { icon: Coins, n: "4", t: "Money Measurement", d: "All transactions are recorded in monetary terms — the rupee is the only common denominator." },
          ].map((a, i) => (
            <Reveal key={a.t} delay={i * 80}>
              <div className="card-warm lift flex h-full gap-4 p-5">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl font-mono text-base font-black text-white shadow-md"
                  style={{ background: FA_BTN_GRAD }}
                >
                  {a.n}
                </span>
                <div>
                  <p className="flex items-center gap-2 text-[1rem] font-extrabold text-[#3e2c1d]">
                    <a.icon className="h-4 w-4" style={{ color: FA_G[700] }} />
                    {a.t}
                  </p>
                  <p className="mt-1.5 text-[.86rem] leading-relaxed text-muted-warm">{a.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* the full eight — Lecture 5's complete concept list */}
        <FaReadStep n="03" title="The full eight — the lecture's complete concept list" sub="Four assumptions above, four more concepts, one invariant: Assets = Liabilities + Capital" />
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "5", t: "Cost", d: "Recorded at acquisition price — land bought for \u20B950,000 stays \u20B950,000 whether market later reads \u20B960,000 or \u20B940,000. Objective, auditable — blind to inflation." },
            { n: "6", t: "Dual aspect", d: "Every transaction has two equal effects — the foundation of double entry and of the equation itself." },
            { n: "7", t: "Accounting period", d: "Business life divided into segments (usually a year) so results can be studied at each stop." },
            { n: "8", t: "Realization", d: "Revenue recognized when the sale is made — property in goods passes to the buyer — not when cash arrives." },
          ].map((a, i) => (
            <Reveal key={a.t} delay={i * 80}>
              <div className="card-warm lift flex h-full flex-col p-4">
                <span className="font-mono text-[.62rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>Concept {a.n}</span>
                <p className="mt-1 text-[.92rem] font-extrabold text-[#3e2c1d]">{a.t}</p>
                <p className="mt-1.5 text-[.78rem] leading-relaxed text-muted-warm">{a.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-4">
          <FaCallout kind="why" title="The cost concept, argued both ways">
            Advantages: it <b>removes subjectivity</b> — a standardized measurement brings objectivity to the
            statements. Limitation: it <b>cannot account for inflation</b> — in high-inflation periods historical cost
            may not reflect the firm's true financial position. That trade-off is the price of the objectivity every
            other user relies on.
          </FaCallout>
        </div>

        <div className="mt-8">
          <FaCallout kind="story" title="Why the assumptions matter more than they look">
            Every controversy you will meet in this course — the dinner-table argument, the
            revalued car, the commission paid in the wrong month — is one of these four
            assumptions being bent. Name the assumption being violated, and you have named the
            error. That is the violation-spotting skill the lectures keep drilling.
          </FaCallout>
        </div>

        <div className="mt-8">
          <Practice
            title="Spot the assumption"
            items={[
              {
                q: "A firm values its brand loyalty at \u20B95 crore and lists it as an asset.",
                hint: "It is real advantage — but can it be measured in money with reasonable objectivity?",
              },
              {
                q: "A shop records its owner's personal wedding expenses as business promotion.",
                hint: "Whose affairs are these — the entity's, or the owner's?",
              },
              {
                q: "A company about to be liquidated keeps showing its land at ten-year-old purchase cost.",
                hint: "What does going concern justify — and what happens when it no longer holds?",
              },
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 3 — REPORTING ENTITY & GOING CONCERN
   ============================================================ */
export function FaEntityConcernSection() {
  return (
    <Section id="entity-concern">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHead
          eyebrow="Module 1 · Assumptions, deep-dive"
          title={
            <>
              The <span className="grad-emerald">boundary</span> — and the promise to continue
            </>
          }
          lead="Two of the four assumptions do the heaviest lifting: one draws the line around the business, the other justifies how everything inside the line is valued."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="card-warm h-full p-6">
              <span className="chip"><Building2 className="h-3.5 w-3.5" /> Reporting entity</span>
              <p className="mt-4 text-[.92rem] leading-relaxed text-[#2b2014]">
                Accountants treat a business as a <b>reporting entity</b> — distinct and separate
                from its owners and from every other firm. The entity defines the <b>scope</b> of
                activities included in the financial statements: the owner&rsquo;s personal
                affairs stay outside, permanently.
              </p>
              <div className="mt-4 space-y-2">
                {[
                  "Owner's home electricity \u2192 not a business expense",
                  "Owner's personal smartphone \u2192 not a business asset",
                  "Owner's wedding \u2192 not business promotion",
                ].map((s) => (
                  <p key={s} className="flex items-start gap-2 text-[.84rem] text-muted-warm">
                    <FileWarning className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: FA_G[700] }} />
                    {s}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={110}>
            <div className="card-warm h-full p-6">
              <span className="chip"><Repeat className="h-3.5 w-3.5" /> Going concern</span>
              <p className="mt-4 text-[.92rem] leading-relaxed text-[#2b2014]">
                Unless there is substantial evidence to the contrary, accountants assume the
                business is a <b>continuing enterprise</b>. This assumption is what justifies
                recording assets at <b>historical cost</b> — cost only makes sense if the
                business lives long enough to use the asset.
              </p>
              <div className="mt-4 rounded-xl border p-3" style={{ borderColor: FA_G.border, background: FA_G.wash }}>
                <p className="text-[.8rem] leading-relaxed text-[#2b2014]">
                  <b>Fair value</b> — &ldquo;the amount for which an asset could be exchanged, or
                  a liability settled, between knowledgeable, willing parties in an arm&rsquo;s
                  length transaction.&rdquo; If liquidation were imminent, cost would become
                  irrelevant — assets would move to likely sale prices.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <FaReadStep n="01" title="When the promise breaks: the Kingfisher file" sub="A going-concern case study, 2012–13" />
        <FaCallout kind="story" title="The case">
          In the wake of the 2008 financial crisis, bank auditors were faulted for{" "}
          <b>not issuing going-concern exceptions</b> for any of the major banks that collapsed
          or needed bailouts — Lehman Brothers, Citigroup, Bear Stearns, Countrywide. Auditors do
          not cause corporate collapses, but staying silent at the wrong moment means failing
          their role as a <b>watchdog</b>.
          <span className="mt-3 block">
            On Kingfisher Airlines&rsquo; 2012 and 2013 statements, the auditors observed that
            although the accounts were prepared on a going-concern basis, there were{" "}
            <b>doubts</b>: equity wiped out by losses, the air-operator permit lapsed, banks
            recalling loans. Management answered that it was confident of raising capital,
            renewing the permit and rescheduling debt. The company <b>ceased operations in late
            2012</b>.
          </span>
        </FaCallout>
        <div className="mt-4">
          <FaCallout kind="insight" title="The lesson that survives the case">
            Going concern is an <b>assumption with a duty attached</b>: when the evidence turns,
            someone must say so — on time. Timely going-concern warnings are how the statements
            protect the very readers (investors, lenders, employees) the whole apparatus exists
            for.
          </FaCallout>
        </div>

        <div className="mt-8">
          <FaQuiz
            source="Violation spotting"
            q="A car is bought at auction for \u20B940,000 and re-recorded at \u20B950,000 one week later \u2014 \u201Cbecause that is what it is worth now.\u201D Two assumptions are involved; what is the cleanest one-line verdict?"
            options={[
              "Money measurement violated — the car cannot be valued",
              "Historical cost violated — assets stay at original purchase price while the entity is a going concern",
              "Periodicity violated — one week is not a period",
              "No violation — fair value is always allowed",
            ]}
            answer={1}
            explain="Going concern is what makes historical cost the right basis: the business will keep and use the car, not flip it. Re-recording at a fluctuating market estimate breaks that basis. Fair value enters only when the going-concern assumption itself collapses."
          />
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 4 — PERIODICITY, PERIODIC MATCHING & MONEY MEASUREMENT
   ============================================================ */
export function FaPeriodicitySection() {
  return (
    <Section id="periodicity">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHead
          eyebrow="Module 1 · Assumptions, deep-dive"
          title={
            <>
              Time, cut into <span className="grad-emerald">periods</span> — and the match that follows
            </>
          }
          lead="Investors cannot wait a lifetime for results. So the business's long story is chopped into artificial years — and every chop creates a question: which period owns which cost?"
        />

        <FaReadStep n="01" title="Periodicity — the root of most accounting controversies" />
        <div className="grid gap-3 md:grid-cols-2">
          <FaCallout kind="insight" title="The chop">
            We assume a long life for a business — but investors, creditors and the government
            cannot wait indefinitely for information. Periodicity requires activities to be
            divided into <b>artificial time periods</b>: usually a year, sometimes as short as a
            quarter.
          </FaCallout>
          <FaCallout kind="warn" title="The crack">
            Artificial periods create real difficulties — the equipment bought today must serve
            for years, so <b>its useful life has to be estimated</b>. Those estimates ride on
            management&rsquo;s judgment and are often subjective. This assumption is the{" "}
            <b>root cause of many accounting controversies</b> — including the dinner-table one.
          </FaCallout>
        </div>

        <FaReadStep n="02" title="Periodic matching of costs and revenue" sub="Revenue of December 2010 · cost of the same December — payment date irrelevant" />

        {/* MATCH diagram */}
        <Reveal>
          <div className="card-warm overflow-hidden p-5 sm:p-7">
            <svg viewBox="0 0 900 300" className="h-auto w-full" role="img" aria-label="Revenue of December 2010 matched with the commission cost of the same December, though paid in January 2011">
              <defs>
                <linearGradient id="faMatchGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#10b981" />
                  <stop offset="1" stopColor="#047857" />
                </linearGradient>
                <marker id="faMatchArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#8a6b45" />
                </marker>
              </defs>
              {/* revenue box */}
              <motion.g initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <rect x="40" y="60" width="240" height="150" rx="16" fill="#f2faf6" stroke="#a9dcc4" strokeWidth="2" />
                <text x="160" y="100" textAnchor="middle" fontSize="17" fontWeight="800" fill="#047857" letterSpacing="2">REVENUE</text>
                <text x="160" y="132" textAnchor="middle" fontSize="14" fontWeight="600" fill="#2b2014">Sales made in</text>
                <text x="160" y="156" textAnchor="middle" fontSize="14" fontWeight="600" fill="#2b2014">December 2010</text>
                <text x="160" y="188" textAnchor="middle" fontSize="12" fontWeight="600" fill="#6f5438">earned in this period</text>
              </motion.g>
              {/* cost box */}
              <motion.g initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
                <rect x="620" y="40" width="250" height="190" rx="16" fill="#fbf4e4" stroke="#e3c98f" strokeWidth="2" />
                <text x="745" y="80" textAnchor="middle" fontSize="17" fontWeight="800" fill="#b45309" letterSpacing="2">COST</text>
                <text x="745" y="112" textAnchor="middle" fontSize="13" fontWeight="600" fill="#2b2014">Commission paid to salesman</text>
                <text x="745" y="134" textAnchor="middle" fontSize="13" fontWeight="600" fill="#2b2014">in January 2011</text>
                <text x="745" y="166" textAnchor="middle" fontSize="12.5" fontWeight="600" fill="#6f5438">— for December 2010 sales —</text>
                <text x="745" y="196" textAnchor="middle" fontSize="12" fontWeight="600" fill="#8a6b45">cost of earning THAT revenue</text>
              </motion.g>
              {/* match capsule */}
              <motion.g initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.35, type: "spring", stiffness: 120 }}>
                <rect x="375" y="95" width="150" height="80" rx="40" fill="url(#faMatchGrad)" />
                <text x="450" y="143" textAnchor="middle" fontSize="19" fontWeight="900" fill="#ffffff" letterSpacing="4">MATCH</text>
              </motion.g>
              {/* arrows */}
              <motion.path d="M 285 135 C 320 135, 340 135, 368 135" fill="none" stroke="#8a6b45" strokeWidth="2" markerEnd="url(#faMatchArrow)" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.5 }} />
              <motion.path d="M 615 135 C 580 135, 560 135, 532 135" fill="none" stroke="#8a6b45" strokeWidth="2" markerEnd="url(#faMatchArrow)" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.65 }} />
              {/* footer line */}
              <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }}>
                <rect x="40" y="238" width="830" height="46" rx="12" fill="#f5f1e8" stroke="#cec2a4" />
                <text x="455" y="266" textAnchor="middle" fontSize="13.5" fontWeight="700" fill="#4a3a26">
                  When payment was received or made is irrelevant — this is why year-end adjustments exist.
                </text>
              </motion.g>
            </svg>
          </div>
        </Reveal>
        <div className="mt-4">
          <FaCallout kind="why" title="Where the adjustments come from">
            On account of this one concept, year-end adjustments are made for{" "}
            <b>outstanding expenses, accrued incomes, prepaid expenses and unearned incomes</b>.
            Module 4 of this course builds every one of them — they are all this diagram wearing
            different clothes.
          </FaCallout>
        </div>

        <FaReadStep n="03" title="Realization — revenue waits for delivery, not cash" sub="Order in March, goods delivered in April → revenue belongs to April" />
        <div className="grid gap-3 md:grid-cols-2">
          <FaCallout kind="insight" title="The rule">
            Revenue is recognized <b>when a sale is made</b> — specifically when property in the
            goods passes to the buyer and the buyer becomes legally liable to pay. The moment of
            delivery, not the order and not the payment, owns the revenue.
          </FaCallout>
          <FaCallout kind="why" title="The two famous exceptions">
            <b>Hire purchase:</b> ownership passes only at the final installment — yet sellers
            record revenue progressively as installments fall due, because waiting would misstate
            every interim period. <b>Long-term construction:</b> profit is recorded yearly on
            work certified, not only at completion — a bridge billed over five years cannot hide
            four years of results. Both exceptions exist for one reason: waiting for legal
            completion gives a misleading picture of the period.
          </FaCallout>
        </div>

        <FaReadStep n="04" title="Money measurement — the rupee is the only common denominator" />
        <div className="grid gap-3 md:grid-cols-2">
          <FaCallout kind="insight" title="The rule">
            Under the money measurement assumption, <b>all business transactions are expressed
            and recorded in terms of money</b>. Money is the only common denominator that lets a
            factory, a bank loan and a cartage bill sit in one statement — in India, the rupee is
            the monetary unit.
          </FaCallout>
          <FaCallout kind="why" title="The cost of the rule">
            Anything that <b>cannot be measured monetarily has no place in accounting</b>: a
            loyal workforce, the owner&rsquo;s reputation, a perfect location. Real advantages —
            but not numbers, so not in the books. Every discipline buys its power with a
            boundary; this is accounting&rsquo;s.
          </FaCallout>
        </div>

        <FaReadStep n="05" title="What's wrong with these practices?" sub="Identify the assumption or principle violated — the lecture's own violation round" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            {
              tag: "(a)",
              t: "Owner's home electricity",
              d: "A business records an expense for the electricity charges of the owner's home.",
              v: "Reporting entity — personal expenses must stay out of the business's books.",
            },
            {
              tag: "(b)",
              t: "Car revalued after one week",
              d: "A car bought at auction for \u20B940,000 is re-recorded at \u20B950,000 a week later.",
              v: "Historical cost — assets stay at original purchase price, not fluctuating market values.",
            },
            {
              tag: "(c)",
              t: "Personal smartphone as business asset",
              d: "A smartphone bought for the owner's personal use is recorded as a business asset.",
              v: "Reporting entity again — only business-related items belong in the company's books.",
            },
          ].map((c, i) => (
            <Reveal key={c.tag} delay={i * 90}>
              <div className="card-warm lift flex h-full flex-col p-5">
                <p className="font-mono text-[.7rem] font-black tracking-[.2em]" style={{ color: FA_G[700] }}>{c.tag}</p>
                <p className="mt-1 text-[.95rem] font-extrabold leading-snug text-[#3e2c1d]">{c.t}</p>
                <p className="mt-2 text-[.84rem] leading-relaxed text-muted-warm">{c.d}</p>
                <p className="mt-3 rounded-xl border p-3 text-[.8rem] font-semibold leading-relaxed" style={{ borderColor: FA_G.border, background: FA_G.wash, color: FA_G[800] }}>
                  {c.v}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8">
          <Takeaways
            items={[
              <>Accounting measures only events that affect <b>financial position</b> — value must move.</>,
              <>The four assumptions: <b>reporting entity, going concern, periodicity, money measurement</b>.</>,
              <>Going concern justifies <b>historical cost</b>; when it breaks, fair value takes over — say so on time (Kingfisher).</>,
              <>Periodicity chops time into years — and every chop creates an <b>estimation</b> question.</>,
              <>Periodic matching owns the year-end adjustment family: <b>outstanding / accrued / prepaid / unearned</b>.</>,
              <>Money measurement is the price of one common language — the <b>unmeasurable stays out</b>.</>,
            ]}
          />
        </div>

        <div className="mt-8">
          <FaQuiz
            source="December sales, January commission"
            q="Commission is paid to a salesman in January 2011 for sales made in December 2010. The commission expense belongs to\u2026"
            options={[
              "January 2011 — that is when cash left",
              "December 2010 — the period whose sales it earned",
              "Split 50/50 across both months",
              "Whichever year the auditor prefers",
            ]}
            answer={1}
            explain="Periodic matching: revenues of a period must be matched with the costs incurred to earn those revenues — when payment was made is irrelevant. December's sales carry December's commission, paid or not. This single idea generates the entire year-end adjustment family."
          />
        </div>
      </div>
    </Section>
  );
}
