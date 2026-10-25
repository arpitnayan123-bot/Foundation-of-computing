"use client";

/* ============================================================
   Economic & Business History — PART 1 of 4 (shelf 04 of The
   Atlas). The hero + Module 1, "The Lens": what economics is,
   what business is, what history is — and the rules-vs-players
   frame that names the whole course.

   Also hosts the EBH gold micro-kit (EbhReadStep, EbhCallout,
   EbhPanel, EbhQuiz) shared by parts 2–4: same mould as the
   FoC/ATB/FA pages, shelf 04's gold sigil.
   ============================================================ */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Building2,
  Check,
  Clock,
  FileSearch,
  GraduationCap,
  Hourglass,
  Landmark,
  Lightbulb,
  Package,
  PenLine,
  Scissors,
  ScrollText,
  Sparkles,
  Store,
  User,
  Wallet,
  X,
  Zap,
} from "lucide-react";
import {
  Reveal,
  Section,
  SectionHead,
  Takeaways,
} from "@/components/notes/ui";

/* ============================================================
   EBH gold micro-kit — the shared vocabulary of shelf 04
   ============================================================ */
export const EBH_G = {
  400: "#facc15",
  500: "#eab308",
  600: "#ca8a04",
  700: "#a16207",
  800: "#854d0e",
  soft: "#fefce8",
  border: "#e0cb84",
  wash: "#faf6e7",
  sepia: "#7c6248",
};

export const EBH_BTN_GRAD = "linear-gradient(135deg,#eab308,#a16207)";
export const EBH_BTN_SHADOW = "0 14px 30px -12px rgba(161,98,7,.55)";

export function EbhReadStep({ n, title, sub }: { n: string; title: string; sub?: string }) {
  return (
    <Reveal className="mb-5 mt-12 first:mt-0">
      <div className="flex items-center gap-3">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-extrabold text-white shadow-md"
          style={{ background: EBH_BTN_GRAD, boxShadow: "0 4px 12px -3px rgba(161,98,7,.55)" }}
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

const EBH_CALLOUT_STYLES: Record<string, { bg: string; border: string; icon: React.ReactNode; label: string }> = {
  insight: { bg: "#fdfae9", border: "#e0cb84", icon: <Sparkles className="h-4 w-4" style={{ color: EBH_G[700] }} />, label: EBH_G[700] },
  why: { bg: "#fbf4e4", border: "#e3c98f", icon: <Lightbulb className="h-4 w-4" style={{ color: "#92400e" }} />, label: "#92400e" },
  warn: { bg: "#fbeae5", border: "#e8a896", icon: <AlertTriangle className="h-4 w-4" style={{ color: "#b3402c" }} />, label: "#b3402c" },
  story: { bg: "#f5f1e8", border: "#cec2a4", icon: <ScrollText className="h-4 w-4" style={{ color: EBH_G.sepia }} />, label: EBH_G.sepia },
};

export function EbhCallout({
  kind = "insight",
  title,
  children,
}: {
  kind?: "insight" | "why" | "warn" | "story";
  title: string;
  children: React.ReactNode;
}) {
  const s = EBH_CALLOUT_STYLES[kind];
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

/** mono panel — the archive-ruled workhorse of the shelf
 *  (timelines, definitions, ledgers of dates) */
export function EbhPanel({ children, label, tone = "gold" }: { children: string; label?: string; tone?: "gold" | "sepia" }) {
  const line = tone === "gold" ? EBH_G.border : "#cec2a4";
  const head = tone === "gold" ? "#faf3d9" : "#f5f1e8";
  const ink = tone === "gold" ? EBH_G[700] : EBH_G.sepia;
  return (
    <div className="overflow-hidden rounded-2xl border" style={{ borderColor: line }}>
      {label ? (
        <p className="border-b px-4 py-2 font-mono text-[.66rem] font-bold uppercase tracking-[.2em]" style={{ borderColor: line, background: head, color: ink }}>
          {label}
        </p>
      ) : null}
      <pre className="overflow-x-auto px-5 py-4 font-mono text-[.84rem] leading-relaxed text-[#54430f]">{children}</pre>
    </div>
  );
}

/** interactive single-choice — the EBH quiz, gold jacket */
export function EbhQuiz({
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
        <GraduationCap className="mt-0.5 h-5 w-5 shrink-0" style={{ color: EBH_G[700] }} />
        <div>
          <p className="quiz-q font-semibold leading-snug text-[#3e2c1d]">{q}</p>
          {source ? (
            <p className="quiz-src mt-1 text-[.7rem] font-bold uppercase tracking-[.16em]" style={{ color: EBH_G[700] }}>
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
            style={{ borderColor: EBH_G.border, background: EBH_G.wash }}
          >
            <strong style={{ color: chosen === answer ? EBH_G[700] : "#b3402c" }}>
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
   CHAPTER 1 — WHAT IS ECONOMICS?  (#economics)
   ============================================================ */
export function EbhEconomicsSection() {
  return (
    <Section id="economics">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 1 · Lecture 1 — the first lens"
          title={
            <>
              What is <span className="grad-gold">economics</span>?
            </>
          }
          lead="Before we can watch economies change over five centuries, we need to agree on what an economy even is — and why the subject exists at all. The lecture opens not with a definition, but with a student."
        />

        {/* 1 · the first-year student */}
        <EbhReadStep n="01" title="The first-year student" sub="Unlimited wants, limited resources — the birth of the subject" />
        <EbhCallout kind="story" title="The example">
          Imagine a first-year student. The <b>resources</b> she has: <b>Time</b> — 24 hours,{" "}
          <b>Money</b> — limited pocket money and/or income, <b>Energy</b> — limited. What she{" "}
          <b>wants</b>: good grades (books, fees, tuition), entertainment (OTT subscriptions,
          movie tickets, stand-up shows), sports (equipment, memberships), friends (fun
          activities). Everything cannot be had at once.
        </EbhCallout>
        <div className="mt-4">
          <EbhCallout kind="insight" title="Why economics exists">
            The problem: <b>unlimited wants, but resources are limited</b>. Because resources must
            be allocated, <b>choices become necessary</b> — and that is why economics exists. It
            holds for a family, for states, for a country/nation: the Government of India has a
            limited budget — should it spend more on education, defence, healthcare, or
            infrastructure? Same student, bigger scale.
          </EbhCallout>
        </div>

        <Reveal delay={80}>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              { icon: Clock, t: "Time", d: "24 hours — the same for everyone, never enough" },
              { icon: Wallet, t: "Money", d: "Limited pocket money and/or income" },
              { icon: Zap, t: "Energy", d: "Limited — attention is a resource too" },
            ].map((r, i) => (
              <Reveal key={r.t} delay={i * 90}>
                <div className="card-warm lift h-full p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md" style={{ background: EBH_BTN_GRAD }}>
                    <r.icon className="h-4.5 w-4.5" />
                  </span>
                  <p className="mt-3 text-[.95rem] font-extrabold text-[#3e2c1d]">{r.t}</p>
                  <p className="mt-1 text-[.8rem] leading-relaxed text-muted-warm">{r.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* 2 · three definitions */}
        <EbhReadStep n="02" title="Three definitions, one subject" sub="Production · scarcity · decision-making" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { n: "A", t: "The flow", d: "The study of the production, distribution, and consumption of goods and services." },
            { n: "B", t: "The gap", d: "The study of scarcity — how people use resources and respond to incentives." },
            { n: "C", t: "The choice", d: "The study of decision-making." },
          ].map((d, i) => (
            <Reveal key={d.n} delay={i * 90}>
              <div className="card-warm lift h-full p-5">
                <p className="font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>
                  Definition {d.n} — {d.t}
                </p>
                <p className="mt-2 text-[.9rem] leading-relaxed text-[#2b2014]">{d.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 3 · macro vs micro */}
        <EbhReadStep n="03" title="Two branches" sub="Macro means large — micro means small" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-5">
              <p className="font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>1 · Macro economics — Set B</p>
              <p className="mt-2 text-[.9rem] font-semibold text-[#3e2c1d]">&ldquo;Macro&rdquo; means large. Studies the economy as a whole.</p>
              <ul className="mt-3 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm">
                <li>· Why does unemployment rise?</li>
                <li>· What causes inflation?</li>
                <li>· Why do economies grow?</li>
                <li>· What creates economic crises?</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm lift h-full p-5">
              <p className="font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>2 · Micro economics — Set A</p>
              <p className="mt-2 text-[.9rem] font-semibold text-[#3e2c1d]">&ldquo;Micro&rdquo; means small. Studies consumers, households, firms/businesses.</p>
              <ul className="mt-3 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm">
                <li>· Why does the price of tomatoes increase?</li>
                <li>· Why &amp; how do firms hire workers?</li>
                <li>· How do consumers make choices?</li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* the circular flow — the lecture's one diagram */}
        <EbhReadStep n="04" title="Economics and business, wired together" sub="The circular flow — businesses, households, and the two rivers between them" />
        <Reveal>
          <div className="card-warm overflow-hidden p-4 sm:p-6">
            <svg viewBox="0 0 760 340" className="h-auto w-full" role="img" aria-label="Circular flow: businesses produce and sell products to households; households provide labour, capital, land and entrepreneurship back to businesses">
              <defs>
                <marker id="ebh-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#a16207" />
                </marker>
              </defs>
              {/* businesses node */}
              <rect x="30" y="120" width="200" height="110" rx="18" fill="#fffdf6" stroke="#e0cb84" strokeWidth="2" />
              <text x="130" y="162" textAnchor="middle" fontSize="17" fontWeight="800" fill="#3e2c1d">Businesses</text>
              <text x="130" y="188" textAnchor="middle" fontSize="11.5" fill="#7c6248">· produce and sell products</text>
              <text x="130" y="206" textAnchor="middle" fontSize="11.5" fill="#7c6248">· hire inputs from households</text>
              {/* households node */}
              <rect x="530" y="120" width="200" height="110" rx="18" fill="#fffdf6" stroke="#e0cb84" strokeWidth="2" />
              <text x="630" y="162" textAnchor="middle" fontSize="17" fontWeight="800" fill="#3e2c1d">Households</text>
              <text x="630" y="188" textAnchor="middle" fontSize="11.5" fill="#7c6248">· buy products from firms</text>
              <text x="630" y="206" textAnchor="middle" fontSize="11.5" fill="#7c6248">· provide inputs to firms</text>
              {/* top arc — outputs */}
              <motion.path
                d="M 230 130 C 330 40, 430 40, 530 130"
                fill="none" stroke="#a16207" strokeWidth="2.5" markerEnd="url(#ebh-arrow)"
                strokeDasharray="6 7" strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeInOut", delay: 0.3 }}
              />
              <text x="380" y="42" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#854d0e">OUTPUTS — goods and services (products)</text>
              {/* bottom arc — inputs */}
              <motion.path
                d="M 530 220 C 430 316, 330 316, 230 220"
                fill="none" stroke="#7c6248" strokeWidth="2.5" markerEnd="url(#ebh-arrow)"
                strokeDasharray="6 7" strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeInOut", delay: 0.8 }}
              />
              <text x="380" y="316" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#7c6248">INPUTS — labour · capital · land · entrepreneurship</text>
            </svg>
          </div>
        </Reveal>
        <div className="mt-4">
          <EbhCallout kind="why" title="Why this diagram matters for a history course">
            Economics frames the <b>rules and logic of the economies</b> — how (&amp; why) societies
            organize economic activity and determine the production and distribution of goods and
            services. Business is one of the <b>main actors</b> playing a role within those
            economies. Rules on one side, actors on the other — hold that pairing; the whole
            course is about how both of them change.
          </EbhCallout>
        </div>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Lecture 1"
              q="The Government of India has a limited budget and must choose between education, defence, healthcare and infrastructure. At the country level, this is the same problem as…"
              options={[
                "A firm deciding which factory to shut",
                "The first-year student allocating 24 hours, limited money and limited energy",
                "A guild setting the price of hats",
                "A merchant choosing between sea and land routes",
              ]}
              answer={1}
              explain="Same skeleton at every scale: unlimited wants, limited resources, forced choices. The student, the family, the state and the nation all live inside that gap — which is exactly where economics lives."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>Economics = the study of <b>scarcity, incentives and decision-making</b> — production, distribution, consumption.</>,
              <>Macro studies the <b>economy as a whole</b>; micro studies <b>consumers, households, firms</b>.</>,
              <>Business is one of the <b>main actors</b> inside economies; economics frames the <b>rules and logic</b> they play by.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 2 — WHAT IS BUSINESS?  (#business)
   ============================================================ */
export function EbhBusinessSection() {
  return (
    <Section id="business">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 1 · Lecture 2 — the second lens"
          title={
            <>
              What is <span className="grad-gold">business</span>?
            </>
          }
          lead="One sentence in the lecture carries the whole definition — and then quietly redefines business as something society does, not just something firms do."
        />

        <EbhReadStep n="01" title="The definition, word for word" sub="Four parts hiding inside one sentence" />
        <EbhCallout kind="insight" title="The lecture's definition">
          Business is defined as an <b>economic activity</b> involving the{" "}
          <b>production and sale of goods and services</b>, undertaken with a{" "}
          <b>motive of earning profit</b> by <b>satisfying human needs</b>.
        </EbhCallout>
        <Reveal delay={60}>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Economic activity", d: "It belongs to the economy — not to hobby or charity" },
              { t: "Production & sale", d: "It makes (or arranges) and sells — both halves" },
              { t: "Profit motive", d: "Profit = Revenue − Cost; the engine that keeps it alive" },
              { t: "Satisfying needs", d: "Profit earned by a satisfied customer — needs first" },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <div className="card-warm lift h-full p-4">
                  <p className="text-[.9rem] font-extrabold" style={{ color: EBH_G[700] }}>{c.t}</p>
                  <p className="mt-1 text-[.8rem] leading-relaxed text-muted-warm">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <EbhReadStep n="02" title="Goods and services" sub="Tangible products and intangible activities" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md" style={{ background: EBH_BTN_GRAD }}>
                <Package className="h-4.5 w-4.5" />
              </span>
              <p className="mt-3 text-[.95rem] font-extrabold text-[#3e2c1d]">Goods — tangible products</p>
              <p className="mt-1 text-[.85rem] leading-relaxed text-muted-warm">
                Things you can drop on your foot: mobile phones, FMCG — fast-moving consumer
                goods on a supermarket shelf.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm lift h-full p-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md" style={{ background: EBH_BTN_GRAD }}>
                <Scissors className="h-4.5 w-4.5" />
              </span>
              <p className="mt-3 text-[.95rem] font-extrabold text-[#3e2c1d]">Services — intangible activities</p>
              <p className="mt-1 text-[.85rem] leading-relaxed text-muted-warm">
                Things done for you: healthcare, a hair salon — you cannot stack them in a
                warehouse, but you pay for them all the same.
              </p>
            </div>
          </Reveal>
        </div>

        <EbhReadStep n="03" title="From the corner shop to the multinational" sub="Same definition, wildly different scale" />
        <Reveal>
          <div className="card-warm p-5">
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center gap-3 rounded-2xl border border-[#e0cb84] bg-[#fdfae9] p-4">
                <Store className="h-5 w-5 shrink-0" style={{ color: EBH_G[700] }} />
                <p className="text-[.85rem] leading-snug text-[#2b2014]">
                  <b>Small / local shops</b> — retail shops, hair salon shops
                </p>
              </div>
              <ArrowRight className="mx-auto h-4 w-4 shrink-0 rotate-90 sm:rotate-0" style={{ color: EBH_G[700] }} />
              <div className="flex flex-1 items-center gap-3 rounded-2xl border border-[#e0cb84] bg-[#fdfae9] p-4">
                <Building2 className="h-5 w-5 shrink-0" style={{ color: EBH_G[700] }} />
                <p className="text-[.85rem] leading-snug text-[#2b2014]">
                  <b>Big corporations, MNCs</b> — Infosys, Apple
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <EbhReadStep n="04" title="Why do businesses exist?" sub="Start from the individual — then watch the answer flip" />
        <EbhCallout kind="story" title="The counterfactual">
          Could each individual satisfy their own needs? <b>Grow their own food? Make their own
          clothes? Build their own houses? Manufacture their own smartphones?</b> Every one of
          those is possible in principle and impossible in practice — nobody would ever own a
          smartphone if each of us had to smelt, etch and assemble our own.
        </EbhCallout>
        <div className="mt-4">
          <EbhCallout kind="insight" title="The answer">
            Businesses exist <b>to satisfy human needs efficiently</b>, and <b>to earn profits</b>.
            The bridge between the two is <b>specialisation</b> — businesses specialise, and
            specialised producers are efficient producers. Hence the lecture&rsquo;s widest
            sentence: <b>business is a mechanism through which societies organize production and
            exchange.</b>
          </EbhCallout>
        </div>

        <EbhReadStep n="05" title="Studying decision-making in business" sub="Forms, domains, and ownership" />
        <Reveal>
          <EbhPanel label="What business studies decide">
{`Forms opted     → Partnership · Limited Liability · LLP · LLC
Domains         → Marketing · Finance · HR · Information Systems
                  · Strategy · Entrepreneurship
Ownership       → Family-owned companies  ·  Big corporations`}
          </EbhPanel>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Lecture 2"
              q="A barber earns ₹800 a day cutting hair; a salon owner earns ₹800 a day in profit from three chair-renters. Which line from the lecture separates the two situations?"
              options={[
                "Goods are tangible; services are intangible",
                "Profit = Revenue − Cost — the owner's number is what remains after costs",
                "Businesses must be incorporated to count",
                "Specialisation requires machinery",
              ]}
              answer={1}
              explain="Both earn money; only one operates through Profit = Revenue − Cost. The barber's ₹800 is revenue (and wages); the owner's ₹800 is what survives after every cost is paid — the profit motive, the lecture's third definitional part."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>Business = <b>economic activity</b> + <b>production &amp; sale</b> + <b>profit motive</b> + <b>satisfying human needs</b>.</>,
              <>Goods are <b>tangible</b> (phones, FMCG); services are <b>intangible</b> (healthcare, salons).</>,
              <>Businesses exist to satisfy needs <b>efficiently</b> — through specialisation — and to earn profit; they are society&rsquo;s <b>mechanism for production and exchange</b>.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 3 — WHAT IS HISTORY?  (#history)
   ============================================================ */
export function EbhHistorySection() {
  return (
    <Section id="history">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 1 — the third lens"
          title={
            <>
              What is <span className="grad-gold">history</span>?
            </>
          }
          lead="Not a stack of dates. The lecture defines history as a method: change, over time, through evidence — and then shows you what that method does to real questions."
        />

        <EbhReadStep n="01" title="Not just memorizing dates" sub="The study of change over time, through evidence" />
        <EbhCallout kind="insight" title="The definition">
          History is the <b>study of change over time through evidence</b>. Not just memorizing
          dates. The real questions are: <b>why (&amp; how) did events happen?</b> And{" "}
          <b>why did some institutions rise or fall?</b>
        </EbhCallout>
        <Reveal delay={60}>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {[
              { t: "Why did the Industrial Revolution happen in the UK?", d: "In the 17–18th century — and not elsewhere? The question this course spends Module 3 on.", tag: "Event" },
              { t: "Why did LPG policies emerge in India in 1991?", d: "Liberalisation, Privatisation, Globalisation — a rule change with a history.", tag: "Policy" },
              { t: "Why (& how) did guilds fall?", d: "An institution that ruled medieval cities — gone. Module 2 watches it break.", tag: "Institution" },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 90}>
                <div className="card-warm lift h-full p-5">
                  <p className="font-mono text-[.62rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>{c.tag}</p>
                  <p className="mt-2 text-[.92rem] font-extrabold leading-snug text-[#3e2c1d]">{c.t}</p>
                  <p className="mt-1.5 text-[.8rem] leading-relaxed text-muted-warm">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <EbhReadStep n="02" title="The three habits of the historian" sub="Context · time · complex causes" />
        <Reveal>
          <EbhPanel label="How history thinks">
{`Context matters            → nothing happens in a vacuum
Change happens over time   → today is someone's tomorrow
Cause and effect are complex
                           → one event, many reasons

= the Science/Study of Context, Time, and Change`}
          </EbhPanel>
        </Reveal>

        <EbhReadStep n="03" title="The evidence shelf" sub="Sources from the period — and analyses written later" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-5">
              <p className="flex items-center gap-2 text-[.95rem] font-extrabold text-[#3e2c1d]">
                <FileSearch className="h-4 w-4" style={{ color: EBH_G[700] }} />
                From the actual time period
              </p>
              <ul className="mt-3 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm">
                <li>· Policy documents <i>(Industrial Policies)</i>, parliamentary debates</li>
                <li>· Annual reports</li>
                <li>· Court case verdicts</li>
                <li>· Letters, business ledgers, old advertisements, contracts</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm lift h-full p-5">
              <p className="flex items-center gap-2 text-[.95rem] font-extrabold text-[#3e2c1d]">
                <Hourglass className="h-4 w-4" style={{ color: EBH_G[700] }} />
                Written later
              </p>
              <ul className="mt-3 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm">
                <li>· Textbooks</li>
                <li>· Articles</li>
                <li>· Analyses — scholarship standing back from the period</li>
              </ul>
              <p className="mt-3 text-[.78rem] leading-relaxed text-[#8a6b45]">
                Both piles matter — but the exam question &ldquo;which is a primary source?&rdquo;
                is asking which pile the document sits in.
              </p>
            </div>
          </Reveal>
        </div>

        <EbhReadStep n="04" title="Why bother? To understand the present" sub="Patterns above, sectors below" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-5">
              <p className="text-[.95rem] font-extrabold" style={{ color: EBH_G[700] }}>Economic</p>
              <p className="mt-1 text-[.85rem] leading-relaxed text-muted-warm">
                Recognize <b>patterns</b> — economic policies and economic crashes rhyme across
                centuries.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm lift h-full p-5">
              <p className="text-[.95rem] font-extrabold" style={{ color: EBH_G[700] }}>Businesses</p>
              <p className="mt-1 text-[.85rem] leading-relaxed text-muted-warm">
                The <b>rise of big corporations</b> — and the <b>rise (&amp; fall) of different
                sectors</b>. Today&rsquo;s headlines have ancestors.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Module 1"
              q="A researcher compares a 1962 factory licence file with a 2015 journal article about India's License Raj. Which of the two is the primary source — and why does the distinction matter?"
              options={[
                "The 2015 article — it is peer-reviewed and therefore more reliable",
                "The 1962 licence file — it is evidence from the actual period; the article is an analysis written later",
                "Neither — history only uses books",
                "Both are primary because both are old",
              ]}
              answer={1}
              explain="Primary = from the actual time period: policy files, parliamentary debates, ledgers, advertisements, contracts. Later textbooks and analyses interpret that evidence — valuable, but a different pile. Knowing which pile you are standing on is the historian's first habit."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>History = the study of <b>change over time through evidence</b> — context matters, causes are complex.</>,
              <>Sources split into <b>from the period</b> (ledgers, policies, ads, verdicts) and <b>written later</b> (textbooks, analyses).</>,
              <>The payoff is the <b>present</b>: patterns in policies and crashes, the rise of corporations, sectors rising and falling.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 4 — RULES & PLAYERS  (#rules-players)
   with the shelf's first living machine — the Rules Grid
   ============================================================ */
const GRID_CELLS = [
  {
    title: "Economics",
    axis: "the rules · snapshot",
    def: "Studies the rules and logic of economies.",
    ask: "How (& why) do societies organize economic activity — and determine the production and distribution of goods and services?",
  },
  {
    title: "Economic History",
    axis: "the rules · over time",
    def: "Studies how the rules and logic of economies changed over time.",
    ask: "How do revolutions (industrial), crises, and government policies rewrite the economic system? Why do some societies grow faster than others?",
  },
  {
    title: "Business",
    axis: "the players · snapshot",
    def: "Studies the players — firms, entrepreneurs, organizations — that operate within those economies.",
    ask: "How (& why) do companies organize resources to create goods and services and earn profit by satisfying needs of society?",
  },
  {
    title: "Business History",
    axis: "the players · over time",
    def: "Studies how the players — firms, entrepreneurs, organizations — changed over time.",
    ask: "How did the modern corporation emerge? How did management structures evolve? Why did some firms grow into multinational enterprises?",
  },
];

function RulesGrid() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <div className="card-warm p-5 sm:p-6">
      <p className="text-center font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>
        Machine 01 — the two-by-two · tap a cell
      </p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {GRID_CELLS.map((cell, i) => {
          const isActive = active === i;
          return (
            <button
              key={cell.title}
              type="button"
              onClick={() => setActive(isActive ? null : i)}
              aria-pressed={isActive}
              className="rounded-2xl border p-4 text-left transition-all duration-200"
              style={{
                borderColor: isActive ? EBH_G[600] : "#e0cb84",
                background: isActive ? "linear-gradient(135deg,#fdf6dc,#faf0cd)" : "#fffdf6",
                boxShadow: isActive ? "0 10px 24px -12px rgba(161,98,7,.45)" : "none",
              }}
            >
              <p className="font-mono text-[.6rem] font-bold uppercase tracking-[.18em]" style={{ color: isActive ? EBH_G[700] : "#a08a5a" }}>
                {cell.axis}
              </p>
              <p className={`mt-1 text-[1.02rem] font-black ${isActive ? "" : "text-[#3e2c1d]"}`} style={isActive ? { color: EBH_G[800] } : undefined}>
                {cell.title}
              </p>
            </button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        {active !== null ? (
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="mt-4 rounded-2xl border p-4"
            style={{ borderColor: EBH_G.border, background: EBH_G.wash }}
          >
            <p className="text-[.9rem] font-extrabold leading-snug" style={{ color: EBH_G[800] }}>
              {GRID_CELLS[active].def}
            </p>
            <p className="mt-2 text-[.85rem] leading-relaxed text-[#2b2014]">
              <b>Its questions:</b> {GRID_CELLS[active].ask}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function EbhRulesPlayersSection() {
  return (
    <Section id="rules-players">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 1 — the frame of the whole course"
          title={
            <>
              The <span className="grad-gold">rules</span> and the{" "}
              <span className="grad-gold">players</span>
            </>
          }
          lead="Economic & Business History is the timeline and analysis of how (& why) the Rules and the Players changed over time. One sentence — four fields hiding inside it."
        />

        <EbhReadStep n="01" title="Four fields in two rows" sub="Rules or players — snapshot or over time" />
        <Reveal>
          <RulesGrid />
        </Reveal>

        <EbhReadStep n="02" title="Two histories, one sentence apart" sub="Economic history follows the rules; business history follows the players" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-5">
              <p className="text-[.95rem] font-extrabold" style={{ color: EBH_G[700] }}>Economic History</p>
              <p className="mt-1 text-[.85rem] leading-relaxed text-muted-warm">
                Explains how (&amp; why) the <b>rules and logic of the economies changed over
                time</b> — how revolutions (industrial), crises, and government policies rewrite
                the economic system; how policies changed economic outcomes; why some societies
                became wealthy while others remained poor.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm lift h-full p-5">
              <p className="text-[.95rem] font-extrabold" style={{ color: EBH_G[700] }}>Business History</p>
              <p className="mt-1 text-[.85rem] leading-relaxed text-muted-warm">
                Explains how (&amp; why) the <b>players — firms, entrepreneurs, businesses —
                changed over time</b> — how did the modern corporation emerge; how did management
                structures evolve; why did some firms grow into multinational enterprises; how
                have technology and innovation transformed business organizations?
              </p>
            </div>
          </Reveal>
        </div>

        <EbhReadStep n="03" title="The shelf behind the course" sub="Three books the lecture puts on your desk" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { t: "Global Economic History: A Very Short Introduction", a: "Robert Allen (2011) · Oxford", d: "The whole divergence debate — why some countries rich, some poor — in one slim volume." },
            { t: "The Shortest History of Economics", a: "Andrew Leigh (2024)", d: "Economic history at sprint pace — exactly the lens this course trains." },
            { t: "The Economic History of India 1857–2010", a: "Tirthankar Roy (2020) · Oxford University Press", d: "The India spine — colonial rule to liberalisation, the long arc behind the License Raj." },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 90}>
              <div className="card-warm lift h-full p-5">
                <BookOpen className="h-5 w-5" style={{ color: EBH_G[700] }} />
                <p className="mt-2 text-[.92rem] font-extrabold leading-snug text-[#3e2c1d]">{b.t}</p>
                <p className="mt-1 text-[.78rem] font-semibold" style={{ color: EBH_G[700] }}>{b.a}</p>
                <p className="mt-2 text-[.8rem] leading-relaxed text-muted-warm">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Module 1"
              q="A historian asks: \u201CHow did government policies rewrite the economic system after 1947?\u201D Another asks: \u201CHow did Bajaj Auto grow from a licence-holder into a multinational?\u201D Which fields are these two questions?"
              options={[
                "Both are Business History",
                "Economic History — then Business History",
                "Business History — then Economic History",
                "Both are Economics",
              ]}
              answer={1}
              explain="Policies rewriting the system = the rules changing = Economic History. A firm's own rise = the players changing = Business History. The course runs both lenses at once — that is why the title has both words."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>The course = how (&amp; why) the <b>Rules</b> and the <b>Players</b> changed over time.</>,
              <>Economics → rules now · Economic History → rules over time · Business → players now · Business History → players over time.</>,
              <>The reading shelf: <b>Allen</b>, <b>Leigh</b>, <b>Roy</b> — global lens, sprint history, India&rsquo;s long arc.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}
