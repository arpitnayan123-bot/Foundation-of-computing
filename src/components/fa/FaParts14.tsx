"use client";

/* ============================================================
   Financial Accounting — PART 14 (shelf 03 of The Atlas)
   Lecture 32: Overview of Inventory Valuation Methods and
   Accounting Standards — AS 2's scope, lower of cost & NRV,
   cost inclusions/exclusions, FIFO vs weighted average vs the
   prohibited LIFO, the Clear View worked comparison
   ($4,140 vs $3,057) and the three NRV rules.
   ============================================================ */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Boxes,
  Check,
  Factory,
  PackageSearch,
  Scale,
  TrendingDown,
  TrendingUp,
  Truck,
  X,
} from "lucide-react";
import { Reveal, Section, SectionHead, StepsFlow, Takeaways } from "@/components/notes/ui";
import { FA_BTN_GRAD, FA_G, FaCallout, FaEq, FaQuiz, FaReadStep } from "./FaParts1";
import { eyebrowOf } from "./faLectures";

/* ============================================================
   FifoWaWidget — the Clear View comparison with a price-trend
   toggle. "Rising" shows the source's exact figures; "falling"
   states the inverted direction (the source prints no falling-
   price numbers, and none are invented here).
   ============================================================ */
function FifoWaWidget() {
  const [rising, setRising] = useState(true);
  return (
    <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]">
      <div className="flex flex-wrap items-center gap-2 border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3">
        {rising ? <TrendingUp className="h-4 w-4" style={{ color: FA_G[700] }} /> : <TrendingDown className="h-4 w-4" style={{ color: "#b3402c" }} />}
        <span className="font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
          Clear View company — FIFO vs weighted average
        </span>
        <span className="text-[.7rem] font-semibold text-muted-warm">same business, same units — different profit</span>
      </div>
      <div className="grid grid-cols-2 border-b border-[#e4f1ea]">
        {[
          { k: true, label: "Prices rising", icon: <TrendingUp className="h-4 w-4" /> },
          { k: false, label: "Prices falling", icon: <TrendingDown className="h-4 w-4" /> },
        ].map((b) => (
          <button
            key={String(b.k)}
            type="button"
            onClick={() => setRising(b.k)}
            aria-pressed={rising === b.k}
            className={`flex items-center justify-center gap-2 px-4 py-3 text-[.8rem] font-extrabold uppercase tracking-[.12em] transition-colors ${
              rising === b.k ? "bg-[#ecfdf5] text-[#065f46]" : "text-[#9db8a9] hover:text-[#5c7a6b]"
            }`}
          >
            {b.icon}
            {b.label}
          </button>
        ))}
      </div>
      <div className="px-4 py-5 sm:px-6">
        <AnimatePresence mode="wait">
          {rising ? (
            <motion.div key="rising" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border p-4" style={{ borderColor: FA_G.border, background: "#f2faf6" }}>
                  <p className="text-[.7rem] font-black uppercase tracking-[.14em]" style={{ color: FA_G[700] }}>FIFO — oldest sold first</p>
                  <p className="mt-1 text-[.78rem] leading-snug text-[#1d4433]">Closing inventory: 285 units at the most recent (higher) prices.</p>
                  <p className="mt-2 font-mono text-[1.02rem] font-black" style={{ color: FA_G[800] }}>COGS $7,200</p>
                  <p className="font-mono text-[1.02rem] font-black" style={{ color: FA_G[800] }}>Gross margin $4,140</p>
                </div>
                <div className="rounded-2xl border border-[#e3c98f] bg-[#fbf4e4] p-4">
                  <p className="text-[.7rem] font-black uppercase tracking-[.14em] text-[#8a5a10]">Weighted average</p>
                  <p className="mt-1 text-[.78rem] leading-snug text-[#5c4a22]">Average unit cost $27.62 → closing 285 × 27.62 = $7,872.</p>
                  <p className="mt-2 font-mono text-[1.02rem] font-black text-[#7c2d12]">COGS $8,283</p>
                  <p className="font-mono text-[1.02rem] font-black text-[#7c2d12]">Gross margin $3,057</p>
                </div>
              </div>
              <p className="mt-3 rounded-xl px-3 py-2 text-center text-[.84rem] font-bold leading-relaxed" style={{ background: FA_G.wash, color: FA_G[800] }}>
                Same business, same units sold — <b>$1,083 of margin</b> turns on the method alone. In rising costs,
                FIFO charges older, cheaper units to COGS: lower COGS, higher closing inventory, higher gross margin.
              </p>
            </motion.div>
          ) : (
            <motion.div key="falling" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#e8a896] bg-[#fbeae5] p-4">
                  <p className="text-[.7rem] font-black uppercase tracking-[.14em] text-[#b3402c]">FIFO — oldest sold first</p>
                  <p className="mt-1 text-[.78rem] leading-snug text-[#7c2d12]">Closing inventory now carries the most recent (lower) prices; COGS carries the older, higher ones.</p>
                  <p className="mt-2 font-mono text-[.95rem] font-black text-[#7c2d12]">COGS: higher ↑</p>
                  <p className="font-mono text-[.95rem] font-black text-[#7c2d12]">Gross margin: lower ↓</p>
                </div>
                <div className="rounded-2xl border p-4" style={{ borderColor: FA_G.border, background: "#f2faf6" }}>
                  <p className="text-[.7rem] font-black uppercase tracking-[.14em]" style={{ color: FA_G[700] }}>Weighted average</p>
                  <p className="mt-1 text-[.78rem] leading-snug text-[#1d4433]">The average drags old and new prices together, so the FIFO/WA gap narrows.</p>
                  <p className="mt-2 font-mono text-[.95rem] font-black" style={{ color: FA_G[800] }}>COGS: moderate</p>
                  <p className="font-mono text-[.95rem] font-black" style={{ color: FA_G[800] }}>Gross margin: moderate</p>
                </div>
              </div>
              <p className="mt-3 rounded-xl border border-[#cec2a4] bg-[#f5f1e8] px-3 py-2 text-[.76rem] leading-relaxed text-[#7c6248]">
                The compendium works the comparison at rising prices only — no falling-price figures are printed, and
                none are invented here. The examinable fact is the <b>direction</b>: the profit effect inverts.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const COST_IN = [
  "Purchase price, net of recoverable taxes",
  "Transportation & freight inward",
  "Direct labour for handling & processing",
  "Conversion costs & production overheads",
];
const COST_OUT = [
  "Abnormal waste or loss",
  "Storage & warehouse costs",
  "Selling & distribution costs",
  "Administrative overheads not tied to production",
  "Sales commissions",
];

export function FaInventoryValuationSection() {
  return (
    <Section id="inventory-valuation">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow={eyebrowOf("inventory-valuation")}
          title={
            <>
              Same business, same units — <span style={{ color: FA_G[700] }}>different profit</span>.
            </>
          }
          lead="XYZ Limited sells GPS tracking systems. Identical operations, identical revenue, identical units sold — yet FIFO lands a gross margin of $4,140 and weighted average $3,057. The choice of inventory valuation method is a profit decision, which is exactly why AS 2 regulates it."
        />

        <FaReadStep n="01" title="What counts as inventory — AS 2's scope" sub="Assets held in three distinct forms" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { icon: PackageSearch, t: "Goods held for sale", d: "Assets acquired by traders and retailers for resale to customers." },
            { icon: Factory, t: "Work in progress", d: "Assets currently undergoing production or processing." },
            { icon: Boxes, t: "Raw materials", d: "Assets consumed during the production process." },
          ].map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.t} delay={i * 0.05}>
                <div className="card-warm h-full p-5">
                  <Icon className="h-5 w-5" style={{ color: FA_G[700] }} />
                  <p className="mt-2 text-[.92rem] font-extrabold text-[#3e2c1d]">{c.t}</p>
                  <p className="mt-1 text-[.8rem] leading-relaxed text-muted-warm">{c.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <FaReadStep n="02" title="The measurement rule" sub="Lower of cost and net realizable value — conservatism at work" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full items-start gap-3 rounded-2xl border border-[#a9dcc4] bg-[#f2faf6] p-5">
              <Scale className="mt-0.5 h-5 w-5 shrink-0" style={{ color: FA_G[700] }} />
              <div>
                <p className="text-[.95rem] font-extrabold" style={{ color: FA_G[800] }}>Cost — what went into getting it here</p>
                <ul className="mt-2 space-y-1">
                  {COST_IN.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-[.8rem] leading-snug text-[#1d4433]">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: FA_G[700] }} />
                      {c}
                    </li>
                  ))}
                  <li className="flex items-start gap-2 text-[.8rem] leading-snug text-[#1d4433]">
                    <X className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: "#b3402c" }} />
                    <span><b>Minus</b> trade discounts and rebates</span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex h-full items-start gap-3 rounded-2xl border border-[#e3c98f] bg-[#fbf4e4] p-5">
              <Truck className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#8a5a10" }} />
              <div>
                <p className="text-[.95rem] font-extrabold text-[#8a5a10]">Net realizable value — what it will fetch</p>
                <p className="mt-2 text-[.8rem] leading-relaxed text-[#5c4a22]">
                  The estimated selling price <b>minus all indirect selling and administrative expenses</b> still to
                  come. And the conservative principle underneath: <b>anticipate no profit, but provide for all
                  possible losses</b> — profits are never overestimated.
                </p>
                <p className="mt-2 text-[.78rem] leading-snug text-[#5c4a22]">
                  <b>Never in cost:</b> {COST_OUT.join(" · ")}.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <FaReadStep n="03" title="The inventory flow" sub="Closing inventory decides COGS — and COGS decides margin" />
        <Reveal>
          <StepsFlow
            steps={[
              { label: "Opening inventory", sub: "brought forward" },
              { label: "+ Purchases", sub: "goods available for sale" },
              { label: "− Closing inventory", sub: "the valuation decision" },
              { label: "= COGS", sub: "then margin = revenue − COGS" },
            ]}
          />
        </Reveal>
        <Reveal className="mt-3">
          <FaEq label="The flow, as formulas">{`Goods Available for Sale = Opening Inventory + Purchases
Goods Available for Sale = COGS + Closing Inventory

COGS        = Opening + Purchases − Closing
Gross Margin = Revenue − COGS

∴ Higher closing inventory ⇒ lower COGS ⇒ higher margin.
The valuation method is a margin decision — every time.`}</FaEq>
        </Reveal>

        <FaReadStep n="04" title="FIFO vs weighted average — live" sub="The Clear View comparison; flip the price trend" />
        <FifoWaWidget />

        <FaReadStep n="05" title="LIFO is prohibited" sub="Discussed in textbooks — banned by the standard" />
        <Reveal>
          <FaCallout kind="warn" title="Accounting Standard 2 explicitly prohibits LIFO">
            LIFO (Last In, First Out) appears in textbooks and even in other jurisdictions&apos; practice — but AS 2{" "}
            <b>does not permit it</b> for inventory valuation. Only <b>FIFO</b> and <b>weighted average</b> are
            allowed. An exam answer valuing inventory under LIFO is wrong before the arithmetic even starts.
          </FaCallout>
        </Reveal>

        <FaReadStep n="06" title="The three NRV rules" sub="How the lower-of-cost-and-NRV test is actually applied" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { n: "01", t: "Item by item", d: "Each inventory item is assessed independently — never written up or down in blocks." },
            { n: "02", t: "Raw-material exception", d: "Raw materials are NOT written down if the finished goods made from them are expected to sell at or above cost." },
            { n: "03", t: "Annual reassessment", d: "NRV is evaluated at the end of each reporting period — last year's estimate doesn't carry forward." },
          ].map((r, i) => (
            <Reveal key={r.n} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-[#e0ece6] bg-[#fffdf9] p-4">
                <span className="font-mono text-[.6rem] font-black uppercase tracking-[.2em]" style={{ color: FA_G[700] }}>
                  Rule {r.n}
                </span>
                <p className="mt-1 text-[.9rem] font-extrabold text-[#3e2c1d]">{r.t}</p>
                <p className="mt-1 text-[.78rem] leading-snug text-muted-warm">{r.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FaQuiz
            source="Lecture 32 · check yourself"
            q="Clear View values closing inventory under FIFO vs weighted average. The gross margin difference is…"
            options={[
              "$0 — the method cannot change the margin",
              "$1,083 — $4,140 under FIFO vs $3,057 under weighted average",
              "$27.62 — the average unit cost",
              "$7,872 — the weighted-average closing inventory",
            ]}
            answer={1}
            explain="FIFO: COGS $7,200 → margin $4,140. Weighted average: unit cost $27.62, closing 285 × 27.62 = $7,872, COGS $8,283 → margin $3,057. Same business, same units — $1,083 of margin turns on the method."
          />
          <FaQuiz
            source="Lecture 32 · check yourself"
            q="Under AS 2, which method may a company use to value inventory?"
            options={[
              "FIFO, weighted average, or LIFO — management's choice",
              "Only FIFO and weighted average; LIFO is explicitly prohibited",
              "Only LIFO during inflation",
              "Whichever produces the higher profit",
            ]}
            answer={1}
            explain="AS 2 permits exactly two methods — FIFO and weighted average. LIFO is named in the standard only to be prohibited. 'Whichever produces the higher profit' is not a method; it's the conservatism violation the standard exists to prevent."
          />
        </div>

        <div className="mt-10">
          <Takeaways
            items={[
              <>Inventory = <b>goods for sale · WIP · raw materials</b> — measured at the <b>lower of cost and NRV</b>.</>,
              <>Cost includes purchase price (net of recoverable taxes), freight inward, direct labour, conversion & production overheads — <b>less</b> discounts; excludes storage, selling, admin, commissions.</>,
              <><b>COGS = Opening + Purchases − Closing</b>; higher closing ⇒ lower COGS ⇒ higher margin.</>,
              <>Only <b>FIFO</b> and <b>weighted average</b> are permitted; <b>LIFO is prohibited</b> under AS 2.</>,
              <>Clear View: FIFO <b>$4,140</b> vs weighted average <b>$3,057</b> — $1,083 of margin from the method alone.</>,
              <>NRV rules: <b>item-by-item</b>, the <b>raw-material exception</b>, and <b>annual reassessment</b>.</>,
            ]}
          />
        </div>
      </div>
    </Section>
  );
}
