"use client";

/* ============================================================
   Financial Accounting — PART 15 (shelf 03 of The Atlas)
   Lecture 33 in two sections: PPE & depreciation
   (ppe-depreciation — the ₹57,000 build-up, straight line vs
   diminishing balance, disposal gains/losses) and intangibles
   & amortization (intangible-amortization — AS 26, the 10-year
   presumption, the ₹8,000/yr patent).
   ============================================================ */

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  CalendarClock,
  Cog,
  FileWarning,
  Scale,
  Wrench,
} from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { FA_BTN_GRAD, FA_G, FaCallout, FaEq, FaQuiz, FaReadStep } from "./FaParts1";
import { eyebrowOf } from "./faLectures";

/* ============================================================
   CHAPTER — PPE & DEPRECIATION (Lecture 33 · part 1)
   ============================================================ */

interface RaceRow {
  yr: number;
  dep: number;
  acc: number;
  carrying: number;
  note?: string;
}

const SL_SCHEDULE: RaceRow[] = [
  { yr: 1, dep: 9400, acc: 9400, carrying: 47600 },
  { yr: 2, dep: 9400, acc: 18800, carrying: 38200 },
  { yr: 3, dep: 9400, acc: 28200, carrying: 28800 },
  { yr: 4, dep: 9400, acc: 37600, carrying: 19400 },
  { yr: 5, dep: 9400, acc: 47000, carrying: 10000 },
];

const DB_SCHEDULE: RaceRow[] = [
  { yr: 1, dep: 22800, acc: 22800, carrying: 34200, note: "40% × ₹57,000" },
  { yr: 2, dep: 13680, acc: 36480, carrying: 20520, note: "40% × ₹34,200" },
  { yr: 3, dep: 8208, acc: 44688, carrying: 12312, note: "40% × ₹20,520" },
  { yr: 4, dep: 2312, acc: 47000, carrying: 10000, note: "capped at the ₹10,000 residual" },
];

function DepreciationRace() {
  const [method, setMethod] = useState<"sl" | "db">("sl");
  const rows = method === "sl" ? SL_SCHEDULE : DB_SCHEDULE;
  const max = 22800;
  return (
    <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
      <div className="flex flex-wrap items-center gap-2 border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3">
        <Cog className="h-4 w-4" style={{ color: FA_G[700] }} />
        <span className="font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
          The printing press — ₹57,000 cost · ₹10,000 residual · 5 years
        </span>
        <span className="text-[.7rem] font-semibold text-muted-warm">race the two methods</span>
      </div>
      <div className="grid grid-cols-2 border-b border-[#e4f1ea]">
        {(["sl", "db"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMethod(m)}
            aria-pressed={method === m}
            className={`px-4 py-3 text-[.8rem] font-extrabold uppercase tracking-[.12em] transition-colors ${
              method === m ? "bg-[#ecfdf5] text-[#065f46]" : "text-[#9db8a9] hover:text-[#5c7a6b]"
            }`}
          >
            {m === "sl" ? "Straight line — ₹9,400 flat" : "Diminishing balance — 40%"}
          </button>
        ))}
      </div>
      <div className="px-4 py-5 sm:px-6">
        <div className="grid gap-2">
          {rows.map((r) => (
            <motion.div
              key={r.yr}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: r.yr * 0.04 }}
              className="flex items-center gap-3"
            >
              <span className="w-14 shrink-0 font-mono text-[.7rem] font-black text-[#8a6b45]">Year {r.yr}</span>
              <div className="h-6 min-w-0 flex-1 overflow-hidden rounded-lg bg-[#eef6f1]">
                <div
                  className="h-full rounded-lg"
                  style={{
                    width: `${(r.dep / max) * 100}%`,
                    background: method === "sl" ? `linear-gradient(90deg,${FA_G[600]},${FA_G[700]})` : "linear-gradient(90deg,#f59e0b,#b45309)",
                  }}
                />
              </div>
              <span className="w-24 shrink-0 text-right font-mono text-[.82rem] font-black text-[#3e2c1d]">
                ₹{r.dep.toLocaleString("en-IN")}
              </span>
              <span className="hidden w-40 shrink-0 text-right font-mono text-[.7rem] leading-tight text-muted-warm sm:block">
                carrying ₹{r.carrying.toLocaleString("en-IN")}
                <br />
                {r.note ?? `acc. ₹${r.acc.toLocaleString("en-IN")}`}
              </span>
            </motion.div>
          ))}
        </div>
        <p className="mt-3 rounded-xl px-3 py-2 text-[.82rem] leading-relaxed" style={{ background: FA_G.wash, color: FA_G[800] }}>
          {method === "sl" ? (
            <>
              <b>Straight line</b> — (57,000 − 10,000) ÷ 5 = <b>₹9,400 every year</b>. The expense is flat; the
              carrying amount glides from ₹47,600 down to exactly the ₹10,000 residual.
            </>
          ) : (
            <>
              <b>Diminishing balance at 40%</b> — ₹22,800, then ₹13,680, then ₹8,208. A raw 40% would continue
              ₹4,925 → ₹2,955, but that crashes <b>through</b> the ₹10,000 residual floor — so real schedules cap the
              final charge at the residual (₹2,312 in year 4). <b>Total depreciation = ₹47,000, identical to straight
              line — only the timing differs.</b>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export function FaPpeDepreciationSection() {
  return (
    <Section id="ppe-depreciation">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow={eyebrowOf("ppe-depreciation")}
          title={
            <>
              The asset pays its bill <span style={{ color: FA_G[700] }}>every year</span>.
            </>
          }
          lead="Property, plant & equipment is not expensed on purchase day — its cost is allocated systematically across the years it serves. Depreciation is that allocation: the depreciable amount spread over useful life, by straight line or diminishing balance."
        />

        <FaReadStep n="01" title="What qualifies as PPE" sub="Four conditions, per AS 10" />
        <div className="grid gap-3 md:grid-cols-4">
          {[
            { t: "Held for the right purpose", d: "Production or supply of goods/services, rental or leasing to others, or administrative/office work." },
            { t: "More than 12 months", d: "The asset must be expected to serve beyond one year." },
            { t: "Identifiable benefits", d: "The future economic benefits the asset will provide can be identified." },
            { t: "Measurable cost", d: "The cost must be objectively measurable — and the item is classified per AS 10." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-[#e0ece6] bg-[#fffdf9] p-4">
                <BadgeCheck className="h-5 w-5" style={{ color: FA_G[700] }} />
                <p className="mt-2 text-[.86rem] font-extrabold leading-snug text-[#3e2c1d]">{c.t}</p>
                <p className="mt-1 text-[.74rem] leading-snug text-muted-warm">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <FaReadStep n="02" title="Capital vs revenue expenditure" sub="One-line test: last longer, work better, do more?" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full items-start gap-3 rounded-2xl border border-[#a9dcc4] bg-[#f2faf6] p-5">
              <Cog className="mt-0.5 h-5 w-5 shrink-0" style={{ color: FA_G[700] }} />
              <div>
                <p className="text-[.95rem] font-extrabold" style={{ color: FA_G[800] }}>Capital — becomes an asset</p>
                <p className="mt-2 text-[.82rem] leading-relaxed text-[#1d4433]">
                  New machinery; upgrades that <b>extend</b> existing life; major improvements that <b>enhance</b>{" "}
                  functionality — adding a <b>supercharger</b> to a vehicle. These capitalize onto the balance sheet.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex h-full items-start gap-3 rounded-2xl border border-[#e8a896] bg-[#fbeae5] p-5">
              <Wrench className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#b3402c" }} />
              <div>
                <p className="text-[.95rem] font-extrabold text-[#b3402c]">Revenue — goes to the P&L</p>
                <p className="mt-2 text-[.82rem] leading-relaxed text-[#7c2d12]">
                  Routine maintenance and repairs — the <b>six-monthly machine servicing</b>; ordinary repairs that
                  neither extend life nor improve quality; costs that merely keep machinery running.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal className="mt-3">
          <FaCallout kind="insight" title="The one-line test">
            Does the spending make the asset <b>last longer, work better, or do more</b>? Then it is capital
            expenditure. Does it merely <b>maintain</b> current functionality? Revenue expenditure. That single
            sentence sorts nearly every case the exam will pose.
          </FaCallout>
        </Reveal>

        <FaReadStep n="03" title="Building the cost" sub="Everything needed to get the asset ready to work" />
        <Reveal>
          <FaEq label="The printing press — cost build-up">{`Purchase price            ₹54,000
Shipping / delivery        ₹1,500
Setup / installation       ₹2,500
──────────────────────────────────
Total cost                 ₹57,000

(In a fuller case the estimated cost of
dismantling the asset at end of life
joins the build-up too.)`}</FaEq>
        </Reveal>

        <FaReadStep n="04" title="The four terms" sub="Learn these four and every depreciation question opens" />
        <div className="grid gap-3 md:grid-cols-4">
          {[
            { t: "Depreciable amount", d: "Cost − residual value: 57,000 − 10,000 = ₹47,000. The pool to be allocated." },
            { t: "Residual value", d: "The expected disposal price at the end — ₹10,000 after five years." },
            { t: "Useful life", d: "The period the company expects to use the asset — 5 years." },
            { t: "Carrying amount", d: "Cost − accumulated depreciation: the net book value on the balance sheet at any point." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-[#e0ece6] bg-[#fffdf9] p-4">
                <span className="font-mono text-[.6rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
                  0{i + 1}
                </span>
                <p className="mt-1 text-[.88rem] font-extrabold leading-snug text-[#3e2c1d]">{c.t}</p>
                <p className="mt-1 text-[.74rem] leading-snug text-muted-warm">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-3">
          <FaCallout kind="why" title="The definition to quote">
            Depreciation is the <b>systematic allocation of the depreciable amount over the useful life</b> of the
            asset. Not a valuation of the machine — an allocation of its cost.
          </FaCallout>
        </Reveal>

        <FaReadStep n="05" title="The race — straight line vs diminishing balance" sub="Flip between the methods and watch the timing move" />
        <DepreciationRace />

        <FaReadStep n="06" title="Disposal — selling before the end" sub="Selling price vs carrying amount decides gain or loss" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border p-5" style={{ borderColor: FA_G.border, background: "#f2faf6" }}>
              <p className="text-[.7rem] font-black uppercase tracking-[.14em]" style={{ color: FA_G[700] }}>Gain on disposal</p>
              <p className="mt-2 text-[.85rem] leading-relaxed text-[#1d4433]">
                Carrying amount <b>₹29,200</b>, sold for <b>₹31,000</b> → selling price exceeds carrying amount →{" "}
                <b style={{ color: FA_G[800] }}>+₹1,800 gain</b>.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-[#e8a896] bg-[#fbeae5] p-5">
              <p className="text-[.7rem] font-black uppercase tracking-[.14em] text-[#b3402c]">Loss on disposal</p>
              <p className="mt-2 text-[.85rem] leading-relaxed text-[#7c2d12]">
                The same press sold for <b>₹27,100</b> → below the ₹29,200 carrying amount →{" "}
                <b>−₹2,100 loss</b>.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FaQuiz
            source="Lecture 33 · check yourself"
            q="A printing press costs ₹57,000 with a ₹10,000 residual and a 5-year life. Straight-line depreciation per year is…"
            options={[
              "₹11,400 — ₹57,000 ÷ 5",
              "₹9,400 — (₹57,000 − ₹10,000) ÷ 5",
              "₹47,000 — the whole depreciable amount in year 1",
              "₹10,000 — the residual value",
            ]}
            answer={1}
            explain="Straight line spreads the DEPRECIABLE amount, not the cost: (57,000 − 10,000) ÷ 5 = ₹9,400/year. Forgetting the residual (option A) is the classic error — the asset must still be worth ₹10,000 at the end."
          />
          <FaQuiz
            source="Lecture 33 · check yourself"
            q="At 40% diminishing balance, year-2 depreciation on the ₹57,000 press is…"
            options={[
              "₹22,800 — same as year 1",
              "₹13,680 — 40% of the ₹34,200 opening carrying amount",
              "₹9,400 — methods must match after year 1",
              "₹4,925 — 40% of ₹12,312",
            ]}
            answer={1}
            explain="Year 1: 40% × 57,000 = 22,800 → carrying 34,200. Year 2: 40% × 34,200 = 13,680. Each year's charge is 40% of the OPENING carrying amount — the charge shrinks as the book value falls."
          />
        </div>

        <div className="mt-10">
          <Takeaways
            items={[
              <>PPE: production/supply, rental, or admin use; <b>&gt;12 months</b>; identifiable benefits; measurable cost (AS 10).</>,
              <>Capital = <b>last longer / work better / do more</b>; revenue = <b>merely maintains</b> (supercharger vs servicing).</>,
              <>Cost build-up: 54,000 + 1,500 + 2,500 = <b>₹57,000</b>; depreciable amount 57,000 − 10,000 = <b>₹47,000</b>.</>,
              <>Straight line <b>₹9,400/yr</b> (47,600 → 38,200 → 28,800 → 19,400 → 10,000); diminishing 40%: <b>22,800 / 13,680 / 8,208</b>, capped at the residual.</>,
              <>Total lifetime depreciation is <b>identical under both methods</b> — only the timing differs.</>,
              <>Disposal: 29,200 → 31,000 = <b>+₹1,800 gain</b>; → 27,100 = <b>−₹2,100 loss</b>.</>,
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER — INTANGIBLES & AMORTIZATION (Lecture 33 · part 2)
   ============================================================ */

export function FaIntangibleAmortizationSection() {
  return (
    <Section id="intangible-amortization">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow={eyebrowOf("intangible-amortization")}
          title={
            <>
              No physical form, <span style={{ color: FA_G[700] }}>same discipline</span>.
            </>
          }
          lead="Patents, copyrights, trademarks and goodwill are non-physical assets — and their cost is amortized under AS 26 with the same formula depreciation uses. The rules just get sharper about time."
        />

        <FaReadStep n="01" title="The three rules of AS 26" sub="Allocation, presumption, and the shorter life" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Systematic allocation",
              d: "Allocate the depreciable amount over the best estimate of useful life — starting when the asset is AVAILABLE FOR USE, not when payment is made.",
              icon: CalendarClock,
            },
            {
              n: "02",
              t: "The 10-year presumption",
              d: "Useful life is presumed NOT to exceed 10 years — rebuttable only with a documented justification for longer use.",
              icon: FileWarning,
            },
            {
              n: "03",
              t: "Shorter of two lives",
              d: "Always amortize over the shorter of the LEGAL life (set by law) and the ECONOMIC life (how long the firm will actually benefit).",
              icon: Scale,
            },
          ].map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.n} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-[#e0ece6] bg-[#fffdf9] p-5">
                  <Icon className="h-5 w-5" style={{ color: FA_G[700] }} />
                  <span className="mt-2 block font-mono text-[.6rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
                    Rule {r.n}
                  </span>
                  <p className="mt-1 text-[.92rem] font-extrabold text-[#3e2c1d]">{r.t}</p>
                  <p className="mt-1 text-[.78rem] leading-relaxed text-muted-warm">{r.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <FaReadStep n="02" title="The patent, worked" sub="₹48,000 · legal 12 years · expected 6 years" />
        <Reveal>
          <FaEq label="Amortization — the same formula depreciation uses">{`Patent cost           ₹48,000
Legal life            12 years
Expected useful life   6 years   ← the SHORTER one governs

Annual amortization   ₹48,000 ÷ 6  =  ₹8,000 per year

(An uncapped life of 12 years would also
 collide with the 10-year presumption —
 it would need documented justification,
 and it would still lose to the shorter
 expected life of 6 years.)`}</FaEq>
        </Reveal>

        <FaReadStep n="03" title="Why the timing rule matters" sub="Available for use — not paid for" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm h-full p-5">
              <p className="font-extrabold text-[#3e2c1d]">Amortization ≠ depreciation of goods</p>
              <p className="mt-2 text-[.84rem] leading-relaxed text-[#2b2014]">
                Amortization is simply <b>depreciation for intangibles</b>: (cost − residual value) ÷ useful life,
                under AS 26. What changes is the evidence around the life estimate — the law may grant 12 years of
                patent protection, but if the technology will be obsolete in 6, <b>6 years is the honest number</b>.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card-warm h-full p-5">
              <p className="font-extrabold text-[#3e2c1d]">Start the clock at availability</p>
              <p className="mt-2 text-[.84rem] leading-relaxed text-[#2b2014]">
                Allocation begins when the asset is <b>available for use</b> — not at the payment date. A licence
                bought in March but usable from January amortizes from January; payment timing is a cash-flow fact,
                not a benefit fact.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FaQuiz
            source="Lecture 33 · check yourself"
            q="A patent cost ₹48,000; its legal life is 12 years but the firm expects to benefit for 6. Annual amortization is…"
            options={[
              "₹4,000 — ₹48,000 ÷ 12 legal years",
              "₹8,000 — the shorter expected life governs",
              "₹10,000 — the maximum AS 26 allows per year",
              "₹6,000 — averaging the two lives",
            ]}
            answer={1}
            explain="AS 26: amortize over the SHORTER of legal and economic life — 6 years here — giving 48,000 ÷ 6 = ₹8,000/yr. The 12-year legal life never gets a vote when the economic benefit ends sooner."
          />
          <FaQuiz
            source="Lecture 33 · check yourself"
            q="Under AS 26, when does amortization of an intangible begin?"
            options={[
              "When the supplier is paid",
              "When the asset is available for use",
              "At the financial year-end",
              "When the asset is sold",
            ]}
            answer={1}
            explain="Systematic allocation starts from when the asset is available for use — not the payment date. The 10-year presumption is the second rule; the shorter-of-two-lives rule is the third."
          />
        </div>

        <div className="mt-10">
          <Takeaways
            items={[
              <>Intangibles: patents, copyrights, trademarks, goodwill — <b>no physical form</b>, real economic benefits.</>,
              <>Amortization = <b>AS 26&apos;s depreciation</b>: (cost − residual) ÷ useful life.</>,
              <>Rule 1: allocate from <b>available for use</b>, not payment date.</>,
              <>Rule 2: the <b>10-year rebuttable presumption</b> — longer needs documented justification.</>,
              <>Rule 3: <b>shorter of legal and economic life</b> — the ₹48,000 patent over 6 years = <b>₹8,000/yr</b>.</>,
            ]}
          />
        </div>
      </div>
    </Section>
  );
}
