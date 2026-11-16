"use client";

import React, { useState } from "react";
import { Brain, Thermometer } from "lucide-react";
import { Reveal, Section, SectionHead, Quiz, Takeaways, KV } from "./ui";

/* ---------- DIKW interactive pyramid ---------- */
const DIKW = [
  {
    k: "W",
    name: "Wisdom",
    def: "Knowledge + strategic action — the judgement to act well.",
    ex: "Strategic board decisions",
    hue: "linear-gradient(135deg,#8a3d10,#c2410c)",
  },
  {
    k: "K",
    name: "Knowledge",
    def: "Information + synthesis & understanding — patterns put in context.",
    ex: "Contextual patterns & synthesis",
    hue: "linear-gradient(135deg,#b45309,#d97706)",
  },
  {
    k: "I",
    name: "Information",
    def: "Data + context & structure — raw numbers given meaning.",
    ex: "Structured, contextualized data",
    hue: "linear-gradient(135deg,#ea580c,#f59e0b)",
  },
  {
    k: "D",
    name: "Data",
    def: "Raw, unprocessed facts & observations that can be recorded and stored.",
    ex: "Raw telemetry & unfiltered logs",
    hue: "linear-gradient(135deg,#f59e0b,#fbbf24)",
  },
];

function DikwPyramid() {
  const [active, setActive] = useState(0);
  const widths = ["42%", "58%", "76%", "94%"];
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="flex flex-col items-center gap-2">
        {DIKW.map((d, i) => (
          <button
            key={d.k}
            onClick={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
            className={`dikw-layer flex w-full items-center justify-center rounded-lg py-3 text-sm font-black text-white transition ${
              active === i ? "active" : ""
            }`}
            style={{ width: widths[i], background: d.hue }}
            aria-pressed={active === i}
          >
            {d.k} · {d.name}
          </button>
        ))}
        <p className="mt-2 text-center text-[.74rem] uppercase tracking-[.2em] text-[#8a5a10]">
          tap a layer ↑
        </p>
      </div>
      <div className="card-warm flex flex-col justify-center p-6">
        <p className="text-[.72rem] font-extrabold uppercase tracking-[.22em] text-[#c2410c]">
          Layer {DIKW[active].k}
        </p>
        <h4 className="mt-1 text-2xl font-bold">{DIKW[active].name}</h4>
        <p className="mt-2 text-[.92rem] leading-relaxed text-[#2b2014]">{DIKW[active].def}</p>
        <p className="mt-3 rounded-lg bg-[#fbf3e3] px-3 py-2 text-[.82rem] font-semibold text-[#7c4a12]">
          e.g. {DIKW[active].ex}
        </p>
      </div>
    </div>
  );
}

/* ---------- The clinical case, rung by rung ---------- */
const CLINICAL_STEPS = [
  {
    k: "D",
    name: "Data",
    body: "38.5 — a raw number on a chart. On its own, it means nothing at all.",
    hue: "linear-gradient(135deg,#f59e0b,#fbbf24)",
  },
  {
    k: "I",
    name: "Information",
    body: "The patient's temperature is 38.5 °C, recorded over four days — an upward trend, peaking on day four.",
    hue: "linear-gradient(135deg,#ea580c,#f59e0b)",
  },
  {
    k: "K",
    name: "Knowledge",
    body: "This fever pattern is consistent with a viral infection, likely to resolve in 3–5 days.",
    hue: "linear-gradient(135deg,#b45309,#d97706)",
  },
  {
    k: "W",
    name: "Wisdom",
    body: "The doctor prescribes a specific treatment, based on pattern recognition from thousands of similar cases.",
    hue: "linear-gradient(135deg,#8a3d10,#c2410c)",
  },
];

/* ---------- Data in modern AI systems ---------- */
const AI_PRINCIPLES = [
  {
    k: "Scale",
    v: "More advanced models require significantly more training data than traditional machine learning.",
  },
  {
    k: "Purpose",
    v: "Data is what enables systems to learn, adapt and predict.",
  },
  {
    k: "Patterns",
    v: "Machine-learning models use training data to identify patterns.",
  },
  {
    k: "Quality × Quantity",
    v: "Better quality AND quantity of training data lead to better predictions.",
  },
];

export function DataSection() {
  return (
    <Section id="data">
      <SectionHead
        eyebrow="Pillar 1 · The raw material"
        title={
          <>
            <span className="grad-text">Data</span> — the raw material of computing
          </>
        }
        lead="Without data there is nothing to process, nothing to store, nothing to output. Understanding what data is — and how a raw number climbs the ladder into meaning — is the first step in understanding computing."
      />

      {/* Hook */}
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-7">
            <div className="flex items-center gap-3">
              <Thermometer className="h-6 w-6" style={{ color: "#c2410c" }} />
              <h3 className="text-xl font-bold">“38.5” — is that data?</h3>
            </div>
            <p className="mt-4 text-[.95rem] leading-relaxed text-[#2b2014]">
              <strong>38.5</strong> is data. But{" "}
              <em>“The patient’s temperature is 38.5 °C, which means the patient has a
              mild fever”</em> is <strong>information</strong>.
            </p>
            <p className="mt-3 rounded-xl bg-[#fdf1e0] p-4 text-center text-[.95rem] font-bold text-[#7c4a12]">
              Computing transforms data into information.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card-warm h-full p-7">
            <h3 className="text-xl font-bold">What data actually is</h3>
            <div className="mt-3">
              <KV k="raw" v="Any unprocessed fact or observation that can be recorded and stored" />
              <KV k="meaning" v="By itself, data has no meaning — 42 is just a number, ‘Mumbai’ is just a word" />
              <KV k="context" v="Only when we give data context — process and interpret it — does it become information" />
            </div>
          </div>
        </Reveal>
      </div>

      {/* DIKW */}
      <Reveal className="mt-12">
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow">The ladder of meaning</p>
          <h3 className="mt-2 text-2xl font-bold">
            Data → Information → Knowledge → <span className="grad-text">Wisdom</span>
          </h3>
          <p className="mt-2 max-w-3xl text-[.92rem] text-muted-warm">
            Each rung adds something the rung below lacks — structure, then synthesis,
            then judgement.
          </p>
          <div className="mt-6">
            <DikwPyramid />
          </div>
        </div>
      </Reveal>

      {/* Clinical case — the DIKW ladder at work */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow">Case study · a clinic ward</p>
          <h3 className="mt-2 text-2xl font-bold">
            One temperature reading, four rungs of the ladder
          </h3>
          <p className="mt-2 max-w-3xl text-[.92rem] text-muted-warm">
            The same 38.5 climbs the whole pyramid — watch what each rung adds.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {CLINICAL_STEPS.map((s) => (
              <div key={s.k} className="rounded-xl bg-[#fffdf9] p-4" style={{ border: "1px dashed #e5c79d" }}>
                <span
                  className="inline-flex items-center rounded-full px-3 py-1 text-[.7rem] font-black text-white"
                  style={{ background: s.hue }}
                >
                  {s.k} · {s.name}
                </span>
                <p className="mt-2 text-[.86rem] leading-relaxed text-[#2b2014]">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-[.8rem] text-muted-warm">
            Raw number → trend → diagnosis → prescription. That is the whole ladder — and computing
            builds every rung below wisdom.
          </p>
        </div>
      </Reveal>

      {/* Data in modern AI systems */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Brain className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">
              Data in <span className="grad-text">modern AI systems</span>
            </h3>
          </div>
          <p className="mt-3 max-w-3xl text-[.92rem] leading-relaxed text-[#2b2014]">
            Data is the <strong>lifeblood of AI</strong>. Advanced models require significantly
            larger datasets than traditional machine learning — the principles never change:
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {AI_PRINCIPLES.map((p) => (
              <div key={p.k} className="rounded-xl bg-[#fffdf9] p-4" style={{ border: "1px dashed #e5c79d" }}>
                <p className="font-bold text-[#7c4a12]">{p.k}</p>
                <p className="mt-1 text-[.88rem] leading-relaxed text-[#2b2014]">{p.v}</p>
              </div>
            ))}
            <div className="rounded-xl p-4" style={{ background: "#fbe9e4", border: "1px solid #e6a08c" }}>
              <p className="font-bold" style={{ color: "#9c3a3a" }}>
                The hard limit
              </p>
              <p className="mt-1 text-[.88rem] leading-relaxed text-[#2b2014]">
                Without data, even the <strong>most sophisticated algorithms are completely
                useless</strong> — no model outlearns what it was fed.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Quizzes */}
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Course quiz"
            q="A nurse writes 38.5 on a chart. The ward screen later shows “Temperature: 38.5 °C — above the fever threshold”. At what exact moment did the data become information?"
            options={["When the nurse wrote the number down", "When the number was given context — a reading, a scale and a fever threshold", "When the doctor prescribed treatment", "Never — 38.5 is always information"]}
            answer={1}
            explain="38.5 alone is raw data. It becomes information the moment context and structure give it meaning — a temperature reading, on a scale, compared against a threshold. The prescription comes later, at the wisdom rung."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Course quiz"
            q="Which sequence shows the correct DIKW ladder?"
            options={["Data → Knowledge → Information → Wisdom", "Data → Information → Knowledge → Wisdom", "Information → Data → Knowledge → Wisdom", "Data → Wisdom → Knowledge → Information"]}
            answer={1}
            explain="Data gains context to become information; information is synthesized into knowledge; knowledge plus judgement becomes wisdom. Each rung adds what the one below lacks."
          />
        </Reveal>
        <Reveal delay={150}>
          <Quiz
            source="Course quiz"
            q="“The doctor prescribes a specific treatment based on patterns recognized from thousands of similar cases.” Which DIKW level is this?"
            options={["Data", "Information", "Knowledge", "Wisdom"]}
            answer={3}
            explain="Acting on patterns with judgement — applying what was learned to make the right call — is the top of the pyramid: wisdom. The recognized pattern itself was knowledge; the number was data."
          />
        </Reveal>
      </div>

      <Reveal className="mt-10">
        <Takeaways
          items={[
            <>Data is raw and meaningless alone — <strong>computing transforms data into information</strong>. 38.5 is data; “the patient has a fever” is information.</>,
            <>Context is everything: the same number becomes information only once a scale, a threshold and a purpose surround it.</>,
            <>The <strong>DIKW ladder</strong> — Data → Information → Knowledge → Wisdom — adds structure, then synthesis, then judgement, one rung at a time, from a fever chart to a prescription.</>,
            <>Data is the <strong>lifeblood of AI</strong>: more advanced models need more training data, and better quality plus quantity means better predictions — without data, even the most sophisticated algorithms are completely useless.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
