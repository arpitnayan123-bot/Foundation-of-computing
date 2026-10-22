"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Cpu,
  Database,
  Workflow,
  MonitorSmartphone,
  Quote,
  Search,
  Smartphone,
  MapPin,
  PlayCircle,
  Cloud,
  Banknote,
  HeartPulse,
  ShoppingBag,
  Landmark,
  Server,
  Scale,
  BrainCircuit,
  TriangleAlert,
  BookOpenCheck,
  Blocks,
  FlaskConical,
  Timer,
} from "lucide-react";
import { Reveal, Section, SectionHead, Callout, Quiz, StepsFlow, Pill } from "./ui";

/* ============================================================
   HERO
   ============================================================ */
const HERO_BITS = [
  { t: "0101", top: "12%", left: "6%", s: "1.4rem", d: "0s" },
  { t: "1100", top: "26%", left: "88%", s: "1.1rem", d: "1.2s" },
  { t: "10", top: "68%", left: "4%", s: "1.2rem", d: "0.6s" },
  { t: "0110", top: "80%", left: "78%", s: "1.5rem", d: "1.8s" },
  { t: "101", top: "42%", left: "94%", s: "0.9rem", d: "2.4s" },
  { t: "0011", top: "8%", left: "48%", s: "1rem", d: "3s" },
  { t: "01", top: "58%", left: "16%", s: "1rem", d: "2s" },
];

export function Hero({ onOpenLab }: { onOpenLab: () => void }) {
  const typed = '>>> print("Hello, Foundations of Computing")';
  return (
    <header
      id="top"
      className="relative flex min-h-[94vh] flex-col items-center justify-center overflow-hidden px-4 pb-28 sm:pb-16"
    >
      {/* ambient blobs — kept STATIC on purpose: animating huge blur-3xl
          surfaces repaints giant areas every frame and was the main lag source */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-24 top-16 h-80 w-80 rounded-full blur-3xl"
          style={{ background: "rgba(245,158,11,.18)" }}
        />
        <div
          className="absolute -right-16 bottom-24 h-96 w-96 rounded-full blur-3xl"
          style={{ background: "rgba(194,65,12,.14)" }}
        />
        <div
          className="absolute left-1/3 top-1/2 h-64 w-64 rounded-full blur-3xl"
          style={{ background: "rgba(217,119,6,.12)" }}
        />
        {HERO_BITS.map((b, i) => (
          <span
            key={i}
            className="binary-bit"
            style={{ top: b.top, left: b.left, fontSize: b.s, opacity: 0.9 }}
          >
            {b.t}
          </span>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="chip mx-auto">
            <BookOpenCheck className="h-3.5 w-3.5" />
            Complete Visual Revision Companion
          </span>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            <span className="grad-text">Foundations of</span>
            <br />
            <span className="grad-text">Computing</span>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-warm">
            Every concept of the course — the IPO model, the Four Pillars, data in all
            its forms, algorithms, hardware, software — and the full Python journey,
            distilled into one warm, living page with animated diagrams and interactive
            quizzes.
          </p>
        </Reveal>

        {/* Python Lab — premium glass CTA under the headline. Clicking it
            opens the Colab-style lab overlay (real CPython, run from the
            hero) — the very first thing a learner can touch. */}
        <Reveal delay={300}>
          <div className="mt-7 flex justify-center">
            <button
              type="button"
              onClick={onOpenLab}
              title="Open the Python Lab — a Colab-style notebook where you can run your own code"
              className="glass-cta group"
            >
              <span className="glass-cta-icon">
                <FlaskConical className="h-3.5 w-3.5" strokeWidth={2.4} />
              </span>
              Python Lab
              <ArrowRight
                className="h-4 w-4 text-[#c2410c] transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2.4}
              />
            </button>
          </div>
        </Reveal>

        {/* terminal */}
        <Reveal delay={360}>
          <div className="code-shell mx-auto mt-10 max-w-xl text-left">
            <div className="code-bar">
              <span className="code-dot" style={{ background: "#e4674a" }} />
              <span className="code-dot" style={{ background: "#e8a13c" }} />
              <span className="code-dot" style={{ background: "#8fae5d" }} />
              <span className="code-title ml-2">python — first_steps.py</span>
            </div>
            <pre className="code-body">
              <span className="text-[#efe0cb]">
                <span className="type-line" style={{ width: `${typed.length}ch`, animation: "none", borderRight: "2px solid #f5a623" }}>
                  {typed}
                </span>
              </span>
            </pre>
            <div className="code-out">
              <span className="out-label">OUTPUT</span>
              Hello, Foundations of Computing
            </div>
          </div>
        </Reveal>

        <Reveal delay={480}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#why"
              className="rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:scale-[1.03]"
              style={{
                background: "linear-gradient(135deg,#ea580c,#c2410c)",
                boxShadow: "0 14px 30px -12px rgba(194,65,12,.55)",
              }}
            >
              Start the journey
            </a>
            <a
              href="#pillars"
              className="rounded-full border border-[#e5c79d] bg-[#fffdf9] px-7 py-3.5 text-sm font-bold text-[#7c4a12] transition hover:bg-[#fdf1e0]"
            >
              Jump to the Four Pillars
            </a>
          </div>
        </Reveal>

        <Reveal delay={560}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-[.72rem]">
            <span className="chip">IPO · Data · Algorithms · Hardware · Software · Python</span>
          </div>
        </Reveal>
      </div>

      {/* scroll hint — full-width flex wrapper guarantees true horizontal
          centering at every viewport (a bare `absolute` anchor drifted into
          the CTA buttons once they wrapped on small screens; and the bob
          keyframes own the transform, so -translate-x-1/2 can't live here) */}
      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <a
          href="#why"
          aria-label="Scroll to content"
          className="anim-bob rounded-full border border-[#ecd9bd] bg-[#fffdf9]/80 p-3 text-[#c2410c]"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </header>
  );
}

/* ============================================================
   WHY LEARN PROGRAMMING — the vibe-coding reality check
   ============================================================ */
const VIBE_DANGERS = [
  "No auth",
  "Tech debt",
  "Token limits",
  "Spaghetti code",
  "Bugs everywhere",
  "Exposed API keys",
];

const PROD_STACK = [
  "Kubernetes", "Docker", "CI/CD", "Databases", "Encryption", "Firewalls",
  "WebSockets", "Caching", "Load balancers", "Rate limiting", "Sharding",
  "Queues (Kafka/RabbitMQ)", "Logging", "Auth & identity", "Monitoring",
  "Backups", "Deployments", "Testing", "Version control", "Availability",
];

export function WhySection() {
  return (
    <Section id="why">
      <SectionHead
        eyebrow="The honest question"
        title={
          <>
            Why learn programming when I can{" "}
            <span className="grad-text">vibe code</span> everything with LLMs?
          </>
        }
        lead="A fair question for 2025 — and the course answers it head-on. AI coding assistants like Codex (OpenAI), Claude Code and Gemini Code Assist can write impressive code from plain English. But what happens on Day 30?"
      />

      {/* Karpathy quote */}
      <Reveal>
        <div className="card-warm relative mx-auto max-w-3xl p-7">
          <Quote className="absolute -top-4 left-6 h-8 w-8" style={{ color: "#e8b878" }} />
          <p className="text-lg italic leading-relaxed text-[#2b2014]">
            “There’s a new kind of coding I call ‘vibe coding’, where you fully give in
            to the vibes, embrace exponentials, and forget that the code even exists.
            It’s possible because the LLMs are getting too good.”
          </p>
          <p className="mt-4 text-sm font-bold text-[#8a4508]">
            — Andrej Karpathy, Feb 2025 · former AI Director at Tesla & co-founder of
            OpenAI, who coined the term: prompting AI with plain-language instructions
            instead of traditional programming syntax.
          </p>
        </div>
      </Reveal>

      {/* Day 1 vs Day 30 */}
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="card-warm lift h-full p-6">
            <span className="chip">Day 1 of vibe coding</span>
            <h3 className="mt-3 text-xl font-bold">Feels amazing</h3>
            <ul className="mt-3 space-y-2 text-[.92rem] text-[#2b2014]">
              <li>• Ship fast, build ideas, look good, feel productive</li>
              <li>• Happy path only, minimal setup, just enough code</li>
              <li>• No overthinking — a demo is ready in hours</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card-warm lift h-full p-6">
            <span className="chip" style={{ background: "#fbe9e4", color: "#9c3a3a", borderColor: "#eec0b3" }}>
              Day 30 of vibe coding
            </span>
            <h3 className="mt-3 text-xl font-bold">The tower crumbles</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {VIBE_DANGERS.map((d, i) => (
                <span
                  key={d}
                  className="ice-tag rounded-lg px-2.5 py-1 text-[.74rem] font-bold"
                  style={{
                    background: "#fbe9e4",
                    color: "#9c3a3a",
                    border: "1px solid #eec0b3",
                    animationDelay: `${i * 0.4}s`,
                  }}
                >
                  {d}
                </span>
              ))}
            </div>
            <p className="mt-3 text-[.9rem] leading-relaxed text-muted-warm">
              Vibe coding is fun. <strong>Vibe debugging</strong> is the horror story —
              when you don’t understand the code, you can’t fix it either.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Iceberg */}
      <Reveal className="mt-10">
        <div className="card-warm overflow-hidden p-6 md:p-8">
          <h3 className="text-center text-2xl font-bold">
            The iceberg: vibe coding vs <span className="grad-text">production reality</span>
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-[.92rem] text-muted-warm">
            The gap between a prototype and a production-ready app is enormous — and it
            is filled with <strong>structural programming knowledge</strong>. The waterline below is where real engineers live.
          </p>

          {/* waterline above */}
          <div className="mt-8 rounded-2xl border border-[#f3e2c8] bg-gradient-to-b from-[#fff8ec] to-[#fdeed6] p-6">
            <p className="text-center text-[.74rem] font-extrabold uppercase tracking-[.2em] text-[#8a5a10]">
              above the surface — what the demo shows
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {["Working demo", "Looks good", "Happy path", "Quick prototype"].map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>
          </div>

          {/* waterline */}
          <div className="h-2 w-full rounded-full" style={{ background: "linear-gradient(90deg,#f6d7a8,#c2410c,#f6d7a8)" }} />

          {/* below */}
          <div className="rounded-b-2xl p-6" style={{ background: "linear-gradient(180deg,#f9e9d2,#f3dcbc)" }}>
            <p className="text-center text-[.74rem] font-extrabold uppercase tracking-[.2em] text-[#8a5a22]">
              below the surface — what production demands
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {PROD_STACK.map((t, i) => (
                <span
                  key={t}
                  className="ice-tag rounded-lg bg-[#fffdf9] px-2.5 py-1 text-[.74rem] font-semibold text-[#7c4a12] shadow-sm"
                  style={{ border: "1px solid #ecd9bd", animationDelay: `${(i % 8) * 0.5}s` }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Architect principle */}
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <Reveal>
          <div className="card-warm lift h-full p-6 text-center">
            <div
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl"
              style={{ background: "linear-gradient(135deg,#fde8cf,#fbcf9f)" }}
            >
              <Blocks className="h-6 w-6" style={{ color: "#c2410c" }} />
            </div>
            <h3 className="mt-3 font-bold">The LLM is the junior builder</h3>
            <p className="mt-1 text-[.88rem] text-muted-warm">
              You are the architect. AI writes code, but you must design, judge and own it.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="card-warm lift h-full p-6 text-center">
            <div
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl"
              style={{ background: "linear-gradient(135deg,#fde8cf,#fbcf9f)" }}
            >
              <Scale className="h-6 w-6" style={{ color: "#c2410c" }} />
            </div>
            <h3 className="mt-3 font-bold">Accountability stops with you</h3>
            <p className="mt-1 text-[.88rem] text-muted-warm">
              A broken age-checker or leaked API key in production is your failure, not the model’s.
            </p>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="card-warm lift h-full p-6 text-center">
            <div
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl"
              style={{ background: "linear-gradient(135deg,#fde8cf,#fbcf9f)" }}
            >
              <Timer className="h-6 w-6" style={{ color: "#c2410c" }} />
            </div>
            <h3 className="mt-3 font-bold">Use LLMs to speed up execution</h3>
            <p className="mt-1 text-[.88rem] text-muted-warm">
              Engineers who understand code ship the “vibe-coded slop” properly — clean
              logic, not thousands of nested-ifs.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Industry proof */}
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Callout kind="story" title="Proof from industry">
            <strong>Forbes:</strong> Ford hired 350 engineers after its AI-first attempt
            failed — human engineering value is rising, not falling, in the AI era.
          </Callout>
        </Reveal>
        <Reveal delay={120}>
          <Callout kind="story" title="The AI talent war">
            <strong>Business Standard:</strong> Google is re-hiring former engineers amid
            the global AI talent war, while rivals poach DeepMind staff with $100M offers.
            Deep understanding is the scarcest skill.
          </Callout>
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   WHAT IS COMPUTING
   ============================================================ */
const TIMELINE = [
  {
    era: "Long before machines",
    icon: <Landmark className="h-5 w-5" />,
    text: "Humans computed with abacuses, tables and mental arithmetic. The idea of computing is older than the machine itself.",
  },
  {
    era: "World War II",
    icon: <Server className="h-5 w-5" />,
    text: "Teams of people — mostly women — sat at desks doing complex arithmetic to calculate artillery trajectories. They were literally called ‘computers’. The job title came before the machine.",
  },
  {
    era: "The machine era",
    icon: <Cpu className="h-5 w-5" />,
    text: "Room-sized electronic computers took over the arithmetic — same human idea of step-by-step calculation, executed at machine speed.",
  },
  {
    era: "The cloud era",
    icon: <Cloud className="h-5 w-5" />,
    text: "Today, computing is rented by the second from AWS, Microsoft Azure and Google Cloud — computation as a utility, like electricity.",
  },
];

const EVERYDAY = [
  {
    icon: <Search className="h-5 w-5" />,
    name: "Search engines",
    flow: "Query → rank millions of pages → show results",
    detail: "In the fraction of a second after you press Enter, an algorithm scores the entire indexed web and orders it by relevance.",
  },
  {
    icon: <Banknote className="h-5 w-5" />,
    name: "UPI payments",
    flow: "Verify identity → debit → credit → confirm",
    detail: "Your app talks to the payer PSP, which forwards to the NPCI UPI switch, which routes to banks — debiting the remitter and crediting the payee, all in seconds.",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    name: "Google Maps",
    flow: "Location data → routing algorithm → directions",
    detail: "Live traffic from millions of devices is crunched into the fastest route, re-computed continuously as you drive.",
  },
  {
    icon: <PlayCircle className="h-5 w-5" />,
    name: "YouTube recommendations",
    flow: "What you watched & skipped → compare with millions of users → predict your next video",
    detail: "Your watch-time signals are matched against massive behavioural datasets to forecast what will hold your attention next.",
  },
];

export function ComputingSection() {
  return (
    <Section id="computing">
      <SectionHead
        eyebrow="Introduction to computing"
        title={
          <>
            What exactly <span className="grad-text">is</span> computing?
          </>
        }
        lead="Before touching a single line of code, we build the mental model that everything else in this course sits on top of."
      />

      {/* Definitions */}
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-7">
            <p className="eyebrow">Working definition</p>
            <p className="mt-3 text-lg leading-relaxed">
              <strong className="term">Computing</strong> is the process of using{" "}
              <strong>well-defined steps</strong> to solve problems by{" "}
              <strong>collecting information</strong>, <strong>processing it</strong>, and
              producing a <strong>useful result</strong>.
            </p>
            <p className="mt-4 text-[.92rem] leading-relaxed text-muted-warm">
              Notice: no mention of screens, keyboards or silicon. Computing is a{" "}
              <em>process</em> — the machine is just its fastest executor.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card-warm h-full p-7" style={{ background: "linear-gradient(150deg,#fffaf0,#fdeed6)" }}>
            <p className="eyebrow">The formal definition</p>
            <p className="mt-3 text-lg italic leading-relaxed text-[#2b2014]">
              “Computing is any goal-oriented activity requiring, benefiting from, or
              creating computers.”
            </p>
            <p className="mt-4 text-sm font-bold text-[#8a4508]">
              — ACM (Association for Computing Machinery)
            </p>
            <p className="mt-3 text-[.9rem] leading-relaxed text-muted-warm">
              Every example you’ll meet in this course obeys one deep pattern:
            </p>
            <p className="mt-2 rounded-xl bg-[#fffdf9] p-3 text-center text-[.95rem] font-bold text-[#7c4a12]" style={{ border: "1px dashed #e5c79d" }}>
              a defined set of instructions → acting on data → to produce a result
            </p>
          </div>
        </Reveal>
      </div>

      {/* Timeline */}
      <Reveal className="mt-12">
        <h3 className="text-2xl font-bold">Computing did not start with computers</h3>
      </Reveal>
      <div className="relative mt-6">
        <div
          aria-hidden
          className="absolute left-6 top-0 h-full w-[2px] md:left-1/2"
          style={{ background: "linear-gradient(180deg,#f3dcbc,#c2410c,#f3dcbc)" }}
        />
        <div className="grid gap-6">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.era} delay={i * 90}>
              <div
                className={`relative flex flex-col gap-3 pl-16 md:w-1/2 ${
                  i % 2 === 0 ? "md:pl-0 md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                <span
                  className={`absolute top-5 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#fdf6ee] text-white shadow-lg ${
                    i % 2 === 0 ? "left-0 md:-right-6 md:left-auto" : "left-0"
                  }`}
                  style={{ background: "linear-gradient(135deg,#ea580c,#c2410c)" }}
                >
                  {t.icon}
                </span>
                <div className="card-warm lift p-5">
                  <h4 className="font-bold text-[#7c4a12]">{t.era}</h4>
                  <p className="mt-1 text-[.92rem] leading-relaxed text-[#2b2014]">{t.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* IPO model */}
      <Reveal className="mt-14">
        <div className="card-warm p-7 md:p-9">
          <p className="eyebrow">The enterprise IPO model</p>
          <h3 className="mt-2 text-2xl font-bold md:text-3xl">
            Input → Process → Output
          </h3>
          <p className="mt-2 max-w-3xl text-[.95rem] text-muted-warm">
            The simplest — and most powerful — mental model in this course. Every
            computing system, from a calculator to Uber, is an IPO pipeline.
          </p>

          <div className="mt-8">
            <StepsFlow
              steps={[
                {
                  label: "INPUT",
                  sub: "Collect raw data from the world",
                  icon: <Database className="h-5 w-5" style={{ color: "#c2410c" }} />,
                },
                {
                  label: "PROCESS",
                  sub: "Run it through well-defined steps / algorithms",
                  icon: <Workflow className="h-5 w-5" style={{ color: "#c2410c" }} />,
                },
                {
                  label: "OUTPUT",
                  sub: "Produce a useful, human-relevant result",
                  icon: <MonitorSmartphone className="h-5 w-5" style={{ color: "#c2410c" }} />,
                },
              ]}
            />
          </div>

          <Callout kind="why" title="Walkthrough — a weather forecast">
            <strong>Input:</strong> billions of live data points every hour from global
            networks — satellites, ground stations, sensors.{" "}
            <strong>Process:</strong> that data runs through massive physics and AI
            models. <strong>Output:</strong> a local forecast on your phone — “41°,
            partly sunny, Wednesday”. Same IPO skeleton as everything else.
          </Callout>
        </div>
      </Reveal>

      {/* Everyday computing */}
      <Reveal className="mt-12">
        <h3 className="text-2xl font-bold">
          Computing is everywhere — <span className="grad-text">everyday computing</span>
        </h3>
      </Reveal>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {EVERYDAY.map((e, i) => (
          <Reveal key={e.name} delay={i * 90}>
            <div className="card-warm lift h-full p-6">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg,#fde8cf,#fbcf9f)" }}
                >
                  {e.icon}
                </span>
                <h4 className="text-lg font-bold">{e.name}</h4>
              </div>
              <p className="mt-3 rounded-lg bg-[#fbf3e3] px-3 py-2 text-[.85rem] font-semibold text-[#7c4a12]">
                {e.flow}
              </p>
              <p className="mt-3 text-[.88rem] leading-relaxed text-[#2b2014]">{e.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Uber table */}
      <Reveal className="mt-12">
        <div className="card-warm overflow-hidden">
          <div className="px-6 pt-6 md:px-8">
            <p className="eyebrow">Case study</p>
            <h3 className="mt-2 text-2xl font-bold">Computing @ Uber — IPO at city scale</h3>
            <p className="mt-2 max-w-3xl text-[.92rem] text-muted-warm">
              A single ride request sets off a full IPO cycle — in under half a second.
            </p>
          </div>
          <div className="mt-5 overflow-x-auto px-4 pb-6 md:px-8">
            <table className="warm-table min-w-[720px]">
              <thead>
                <tr>
                  <th>IPO stage</th>
                  <th>Raw technical component</th>
                  <th>Business value realized</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold text-[#7c4a12]">Input</td>
                  <td>Driver GPS, rider requests, local traffic API, weather data, historical demand</td>
                  <td>Captures live market conditions across a city</td>
                </tr>
                <tr>
                  <td className="font-bold text-[#7c4a12]">Process</td>
                  <td>Dynamic pricing algorithm, route optimization, matching engine</td>
                  <td>Balances supply and demand in under 500 ms</td>
                </tr>
                <tr>
                  <td className="font-bold text-[#7c4a12]">Output</td>
                  <td>Driver dispatch, precise ETA, dynamic price quote on the rider’s screen</td>
                  <td>Executes the transaction, maximizes platform yield</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>

      {/* Knight Capital */}
      <Reveal className="mt-12">
        <div
          className="card-warm p-7 md:p-9"
          style={{ background: "linear-gradient(150deg,#fff7f0,#fdeade)", borderColor: "#eec0b3" }}
        >
          <div className="flex items-center gap-3">
            <TriangleAlert className="h-6 w-6" style={{ color: "#be4a4a" }} />
            <h3 className="text-2xl font-bold">The cost of bad computing — Knight Capital, 2012</h3>
          </div>
          <p className="mt-3 max-w-3xl text-[.95rem] leading-relaxed text-[#2b2014]">
            A major American trading firm deployed a new algorithm to trade stocks.
            The algorithm was flawed. In <strong>45 minutes</strong>, it lost{" "}
            <strong className="term">$440 million</strong> — almost destroying the company.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-[#fffdf9] p-4" style={{ border: "1px dashed #e5c79d" }}>
              <p className="text-[.78rem] font-extrabold uppercase tracking-[.16em] text-[#8a5a10]">
                Think deeper — from the course
              </p>
              <p className="mt-2 text-[.9rem] text-[#2b2014]">
                If you were the manager explaining to the CEO how $440M vanished in 45
                minutes, <em>what would you say caused it?</em> Flawed logic left live,
                no kill-switch, untested deployment, no safeguards.
              </p>
            </div>
            <div className="rounded-xl bg-[#fffdf9] p-4" style={{ border: "1px dashed #e5c79d" }}>
              <p className="text-[.78rem] font-extrabold uppercase tracking-[.16em] text-[#8a5a10]">
                The lesson
              </p>
              <p className="mt-2 text-[.9rem] text-[#2b2014]">
                Computing is not just “making it run” — it must be{" "}
                <strong>tested, verified and controlled</strong>. Bad computing has a
                price, and sometimes that price is the company itself.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Non tech */}
      <Reveal className="mt-12">
        <h3 className="text-2xl font-bold">
          Computing in <span className="grad-text">non-tech</span> industries
        </h3>
      </Reveal>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: <Landmark className="h-5 w-5" />,
            name: "AgroStar & DeHaat",
            text: "Agritech — soil sensor data, satellite imagery and historical weather patterns drive farming advice. Seeds to market, powered by computing.",
          },
          {
            icon: <HeartPulse className="h-5 w-5" />,
            name: "Pisces 12-channel ECG",
            text: "Healthcare — the heart’s electrical activity is measured hundreds of times per second to detect atrial fibrillation and heart block.",
          },
          {
            icon: <ShoppingBag className="h-5 w-5" />,
            name: "Zara",
            text: "Fashion retail — tracks which designs are selling fast and which are not. Its competitive advantage is literally built on computing.",
          },
          {
            icon: <Banknote className="h-5 w-5" />,
            name: "Banking",
            text: "Every account, transaction, credit check and fraud alert is a computing pipeline running the IPO model on financial data.",
          },
        ].map((c, i) => (
          <Reveal key={c.name} delay={i * 80}>
            <div className="card-warm lift h-full p-5">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg,#fde8cf,#fbcf9f)" }}
              >
                {c.icon}
              </span>
              <h4 className="mt-3 font-bold">{c.name}</h4>
              <p className="mt-1 text-[.85rem] leading-relaxed text-muted-warm">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <Quiz
          source="From the course discussion"
          q="In Zara’s approach, which step of the IPO model is most critical for their competitive advantage — and what type of data are they using?"
          options={[
            "Input — customer photos from Instagram",
            "Process — analysing which designs are selling fast vs. not",
            "Output — printing price tags faster",
            "Input — employee attendance records",
          ]}
          answer={1}
          explain="Zara’s edge lives in the PROCESS step — rapidly analysing sales data to decide what to produce next. The data is sales/behavioural data captured in real time, feeding the decision engine that keeps them ahead of trends."
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   FOUR PILLARS OVERVIEW
   ============================================================ */
const PILLARS = [
  {
    id: "data",
    icon: <Database className="h-7 w-7" />,
    n: "Pillar 1",
    name: "Data",
    line: "The raw material — facts and figures that everything acts upon.",
    hue: "linear-gradient(135deg,#fde8cf,#fbcf9f)",
  },
  {
    id: "algorithm",
    icon: <Workflow className="h-7 w-7" />,
    n: "Pillar 2",
    name: "Algorithm",
    line: "The intellectual core — the method for solving a problem.",
    hue: "linear-gradient(135deg,#fce7d4,#f9c79a)",
  },
  {
    id: "hardware",
    icon: <Cpu className="h-7 w-7" />,
    n: "Pillar 3",
    name: "Hardware",
    line: "The physical foundation — silicon that actually runs the steps.",
    hue: "linear-gradient(135deg,#f9e4d0,#f6bd8e)",
  },
  {
    id: "software",
    icon: <MonitorSmartphone className="h-7 w-7" />,
    n: "Pillar 4",
    name: "Software",
    line: "The instructions — what tells the hardware what to do.",
    hue: "linear-gradient(135deg,#f7dfc8,#f2b283)",
  },
];

export function PillarsSection() {
  return (
    <Section id="pillars" dark>
      <SectionHead
        dark
        eyebrow="The big picture"
        title={
          <>
            What constitutes computing?{" "}
            <span className="grad-text">The Four Pillars</span>
          </>
        }
        lead="Everything in this course — and everything in computing — rests on four pillars. Each pillar gets its own deep-dive section in these notes."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((p, i) => (
          <Reveal key={p.id} delay={i * 100}>
            <a href={`#${p.id}`} className="block h-full">
              <div className="card-warm lift h-full p-6 text-center">
                <span
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ background: p.hue, color: "#8a3d10" }}
                >
                  {p.icon}
                </span>
                <p className="mt-4 text-[.7rem] font-extrabold uppercase tracking-[.22em] text-[#e8b878]">
                  {p.n}
                </p>
                <h3 className="mt-1 text-2xl font-bold">{p.name}</h3>
                <p className="mt-2 text-[.86rem] leading-relaxed text-[#cbb392]">{p.line}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10">
        <Callout dark kind="insight" title="How the pillars connect">
          Data flows <strong>into</strong> algorithms, algorithms are executed{" "}
          <strong>by</strong> hardware, and software <strong>orchestrates</strong> the
          whole dance. Remove any pillar and computing collapses. In Python later on,
          you’ll write all four: data in variables, algorithms in your logic, hardware
          executing it, and your program as the software.
        </Callout>
      </Reveal>
    </Section>
  );
}
