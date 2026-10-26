"use client";

/* ============================================================
   FocParts2 — the FoC rebuild, file 2 of 9.

   #case-files  (Lecture 9 — When Computing Meets the World)

   The deck's cautionary-tale lecture: Knight Capital's
   $440M bug, Zara's six-month head start, the bank that
   learned why redlining is illegal — plus AgroStar and the
   ECG machine. Netflix's DIKW case lives in #data; this
   section points at it instead of duplicating it.
   ============================================================ */

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Clock,
  Layers,
  Shirt,
  Sprout,
  Stethoscope,
  Landmark,
} from "lucide-react";
import {
  Callout,
  CodeBlock,
  Quiz,
  Reveal,
  Section,
  SectionHead,
  Takeaways,
} from "@/components/notes/ui";

export function CaseFilesSection() {
  return (
    <Section id="case-files" dark>
      <SectionHead
        dark
        eyebrow="Lecture 9 · the case files"
        title={
          <>
            When computing meets <span className="grad-text">the world</span>
          </>
        }
        lead="The IPO model looks innocent on a whiteboard. In production it moves billions of data points at machine speed — and when the process stage is wrong, speed amplifies the damage. Four cases, one lesson each."
      />

      {/* ---------- CASE 1 — Knight Capital ---------- */}
      <Reveal>
        <div className="card-warm p-6 md:p-8" style={{ borderColor: "rgba(190,74,74,.4)" }}>
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "rgba(190,74,74,.16)" }}>
              <AlertTriangle className="h-6 w-6" style={{ color: "#e4674a" }} />
            </span>
            <div>
              <p className="eyebrow">Case file 01 · 2012 · New York</p>
              <h3 className="text-2xl font-bold text-[#f5e6cd]">Knight Capital — $440,000,000 in 45 minutes</h3>
            </div>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div className="grid content-start gap-3 text-[.9rem] leading-relaxed text-[#e9d7bf]">
              <p>
                A newly deployed <strong>autonomous trading algorithm</strong> contained a critical bug.
                In just <strong>45 minutes</strong> it executed <strong>4 million trades</strong> —
                automatically, with no human in the loop.
              </p>
              <p>
                Result: the company lost <strong>$440 million</strong> and went bankrupt. The root cause was
                not the hardware, not the market — the <strong>algorithm was incorrectly coded</strong> and
                lacked adequate security measures and human oversight.
              </p>
              <Callout dark kind="warn" title="The lesson">
                <strong>Correctness beats speed.</strong> Without proper testing and verification
                before deployment, automation creates exponential risk — the process stage of the
                IPO model is where quality lives.
              </Callout>
            </div>
            <CodeBlock
              dark
              title="knight_capital.py — the arithmetic of disaster"
              code={`trades    = 4_000_000          # executed in 45 minutes
minutes   = 45
loss      = 440_000_000        # dollars, gone

per_minute = trades / minutes
per_second = per_minute / 60
loss_per_second = loss / (minutes * 60)

print(f"trades per second : {per_second:,.0f}")
print(f"loss per second   : \${loss_per_second:,.0f}")
print(f"loss per trade    : \${loss / trades:.2f}")`}
              output={"trades per second : 1,481\nloss per second   : $162,963\nloss per trade    : $110.00"}
              note="Run it: one bad algorithm burned ~$163k EVERY second. This is why the deck hammers process quality — the IPO pipeline executes whatever you wrote, at machine speed, including your mistakes."
            />
          </div>
        </div>
      </Reveal>

      {/* ---------- CASE 2 — Zara ---------- */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "rgba(245,200,137,.14)" }}>
              <Shirt className="h-6 w-6" style={{ color: "#f5c889" }} />
            </span>
            <div>
              <p className="eyebrow">Case file 02 · fashion retail</p>
              <h3 className="text-2xl font-bold text-[#f5e6cd]">Zara — planning six months ahead</h3>
            </div>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div className="grid content-start gap-3 text-[.9rem] leading-relaxed text-[#e9d7bf]">
              <p>
                Zara uses computing to decide <strong>which garments to produce, and in what
                quantities</strong>. Global sales data is collected across 24-hour cycles from every
                store location.
              </p>
              <p>
                Algorithms detect <strong>fast-selling and slow-selling designs</strong> — the competitive
                advantage is being able to plan production <strong>six months ahead</strong>. And the
                critical step? The <strong>process phase</strong> — the algorithmic analysis — is where the
                advantage lives.
              </p>
              <Callout dark kind="insight" title="The data type">
                Sales trends tracked over time = <strong>time-series data</strong>. Single subject
                (each design), many periods, sequence matters — exactly the lecture-3 taxonomy in action.
              </Callout>
            </div>
            <CodeBlock
              dark
              title="zara_movers.py — fast vs slow sellers"
              code={`sales = {          # units sold per design, this week
    "blazer":    4120,
    "knit_top":   880,
    "midi_dress": 2610,
    "cargo_pant":  640,
}

THRESHOLD = 2000
for design, units in sorted(sales.items(), key=lambda kv: -kv[1]):
    verdict = "FAST  → restock & expand" if units >= THRESHOLD else "slow  → plan less"
    print(f"{design:12} {units:>5} units  {verdict}")`}
              output={"blazer        4120 units  FAST  → restock & expand\nmidi_dress    2610 units  FAST  → restock & expand\nknit_top       880 units  slow  → plan less\ncargo_pant     640 units  slow  → plan less"}
              note="This is the process stage in miniature: one threshold rule over time-series sales, rerun daily across every store — scaled up with real data, it becomes a six-month production plan."
            />
          </div>
        </div>
      </Reveal>

      {/* ---------- CASE 3 — the bank / redlining ---------- */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "rgba(190,74,74,.16)" }}>
              <Landmark className="h-6 w-6" style={{ color: "#e4674a" }} />
            </span>
            <div>
              <p className="eyebrow">Case file 03 · banking · ethics</p>
              <h3 className="text-2xl font-bold text-[#f5e6cd]">The bank that stopped at &ldquo;information&rdquo;</h3>
            </div>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div className="grid content-start gap-3 text-[.9rem] leading-relaxed text-[#e9d7bf]">
              <p>
                Bank data showed applicants from certain PIN codes defaulted{" "}
                <strong>3.4× more frequently</strong>. The incorrect interpretation: deny loans to
                <em> everyone</em> from those areas — <strong>redlining</strong>. Geographic discrimination,
                built on incomplete analysis.
              </p>
              <p>
                The correct approach climbs the DIKW ladder: <strong>investigate why</strong> (lower income
                areas, informal employment, uneven income patterns), <strong>add variables</strong> (income
                level, occupation, age, dependents), and build comprehensive models that respect{" "}
                <strong>RBI guidelines</strong> — balancing risk management with ethical lending.
              </p>
              <Callout dark kind="warn" title="The lesson">
                Operating only at the <strong>information level</strong> — without climbing to knowledge
                and wisdom — leads to unethical and illegal practices.
              </Callout>
            </div>
            <CodeBlock
              dark
              title="loan_decision.py — information vs knowledge"
              code={`pin_defaults = {"110001": 3.4, "400001": 1.1, "560001": 0.9}
applicant = {"pin": "110001", "income": 820000, "job": "salaried"}

# LEVEL: information — the redlining reflex (WRONG)
print("information view:", "deny" if pin_defaults[applicant["pin"]] > 3 else "approve")

# LEVEL: knowledge — richer variables, fairer model (RIGHT)
income_ok = applicant["income"] >= 600_000
stable    = applicant["job"] in ("salaried", "business")
risk      = pin_defaults[applicant["pin"]]
decision  = "approve" if income_ok and stable and risk < 5 else "review manually"
print("knowledge view  :", decision)`}
              output={"information view: deny\nknowledge view  : approve"}
              note="Same applicant, two levels of the pyramid. The information level sees only the PIN code; the knowledge level asks why — and lands on a legal, ethical decision."
            />
          </div>
        </div>
      </Reveal>

      {/* ---------- CASE 4 — the quiet revolutions ---------- */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow">Case files 04 &amp; 05 · the quiet revolutions</p>
          <h3 className="mt-2 text-2xl font-bold text-[#f5e6cd]">Computing in non-traditional industries</h3>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl p-5" style={{ background: "rgba(255,236,210,.06)", border: "1px solid rgba(255,214,160,.18)" }}>
              <div className="flex items-center gap-2">
                <Sprout className="h-5 w-5" style={{ color: "#a3c76d" }} />
                <p className="font-bold text-[#f5e6cd]">Agriculture — AgroStar</p>
              </div>
              <p className="mt-2 text-[.88rem] leading-relaxed text-[#e9d7bf]">
                Soil sensors, satellite imagery and weather-pattern data feed a recommendation engine
                adapted for farming decisions: <strong>what to plant, when to plant it, how much water
                to use</strong>. The YouTube-recommendation idea, pointed at a field.
              </p>
            </div>
            <div className="rounded-2xl p-5" style={{ background: "rgba(255,236,210,.06)", border: "1px solid rgba(255,214,160,.18)" }}>
              <div className="flex items-center gap-2">
                <Stethoscope className="h-5 w-5" style={{ color: "#e4674a" }} />
                <p className="font-bold text-[#f5e6cd]">Healthcare — the ECG machine</p>
              </div>
              <p className="mt-2 text-[.88rem] leading-relaxed text-[#e9d7bf]">
                An ECG generates electrical-activity data at <strong>100 measurements per second</strong>.
                Classification algorithms process heart parameters, arterial fibrillation indicators and
                blockage detection — and output a <strong>health diagnosis</strong>. IPO, wearing a stethoscope.
              </p>
            </div>
          </div>
          <Callout dark kind="story" title="And the one you've already met">
            The <strong>Netflix pause mystery</strong> — 3.2 million viewers pausing at 42:15, traced to a
            confusing subplot, fixed by recap features — is the DIKW pyramid in full flight.{" "}
            <strong>It lives in the Data &amp; DIKW chapter of Lecture 2</strong> — climb back up and run it again.
          </Callout>
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { icon: <Clock className="h-5 w-5" style={{ color: "#e4674a" }} />, k: "45 minutes", v: "what a buggy algorithm needed to end a 17-year-old firm" },
            { icon: <Shirt className="h-5 w-5" style={{ color: "#f5c889" }} />, k: "6 months", v: "how far ahead Zara plans with time-series sales data" },
            { icon: <Layers className="h-5 w-5" style={{ color: "#a3c76d" }} />, k: "3.4×", v: "the default correlation that was never a cause" },
          ].map((s) => (
            <motion.div
              key={s.k}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-5"
              style={{ background: "rgba(255,236,210,.06)", border: "1px solid rgba(255,214,160,.18)" }}
            >
              {s.icon}
              <p className="mt-2 text-2xl font-black text-[#f5c889]">{s.k}</p>
              <p className="mt-1 text-[.85rem] text-[#e9d7bf]">{s.v}</p>
            </motion.div>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Concept check"
            q="Knight Capital's algorithm executed 4 million trades in 45 minutes and lost $440M. What was the root cause?"
            options={[
              "The market crashed that day",
              "A correctly coded algorithm running too fast",
              "An incorrectly coded algorithm with no security measures or human oversight",
              "Too few trades per second",
            ]}
            answer={2}
            explain="The algorithm was incorrectly coded and lacked adequate security measures and human oversight. Speed amplified the bug: ~$163,000 every second."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q="A bank denies ALL applicants from certain PIN codes because defaults there are 3.4× higher. What went wrong?"
            options={[
              "Nothing — correlation is proof",
              "It operated at the information level only, instead of climbing to knowledge and wisdom",
              "The PIN codes were stored as strings",
              "The bank used too many variables",
            ]}
            answer={1}
            explain="Geographic discrimination (redlining) comes from stopping at raw correlation. The fix: investigate why, add variables like income and occupation, and respect RBI guidelines."
          />
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <Takeaways
          dark
          items={[
            <>Speed <strong>amplifies errors</strong> — process quality (algorithm correctness) is critical in the IPO model.</>,
            <>Test and verify <strong>before deployment</strong>: Knight Capital had no guardrails, and it cost $440M.</>,
            <>Time-series sales data + threshold analysis = <strong>Zara's six-month planning advantage</strong>.</>,
            <>Correlation at the information level is <strong>not a decision</strong> — climb to knowledge and wisdom, and stay inside the regulator's lines.</>,
            <>Computing now runs farms (<strong>AgroStar</strong>) and hospitals (<strong>ECG at 100 readings/second</strong>) — every industry is a computing industry.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
