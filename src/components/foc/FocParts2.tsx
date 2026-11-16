"use client";

/* ============================================================
   FocParts2 — the FoC rebuild, file 2 of 9.

   #case-files  (Lecture 9 — Overview of Computing Models and
                 Data Classification)

   The full Lecture 9 lap: the IPO model recapped at two
   scales (weather forecasting + Uber), Knight Capital's
   $440M bug, Zara's six-month head start, AgroStar and the
   ECG machine — then the recap wall: the four pillars, the
   DIKW pyramid with the Netflix pause case, the bank that
   learned why redlining is illegal, and the complete data-
   classification wall (storage format, time structure,
   quant vs qual). The interactive Netflix walkthrough still
   lives in Lecture 2's notes chapter; this section carries
   the Lecture 9 recap version.
   ============================================================ */

import React from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  AppWindow,
  BadgeCheck,
  Brain,
  Camera,
  ChartColumnBig,
  Clock,
  Cog,
  Cpu,
  Database,
  FileText,
  Landmark,
  Layers,
  Lightbulb,
  MapPin,
  MessageSquare,
  Ruler,
  Search,
  Shirt,
  Sprout,
  Stethoscope,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  Callout,
  CodeBlock,
  Quiz,
  ReadStep,
  Reveal,
  Section,
  SectionHead,
  StepsFlow,
  Takeaways,
} from "@/components/notes/ui";

/* ---------- the Uber pipeline, compressed (full table: Lecture 4 chapter) ---------- */
const UBER_IPO = [
  {
    label: "Input",
    sub: "live GPS signals, rider location requests, local traffic data, weather conditions, historical demand patterns",
    icon: <MapPin className="h-5 w-5 shrink-0" style={{ color: "#e4674a" }} />,
  },
  {
    label: "Process",
    sub: "matching algorithms determine optimal pricing and driver allocation",
    icon: <Cog className="h-5 w-5 shrink-0" style={{ color: "#f5c889" }} />,
  },
  {
    label: "Output",
    sub: "driver pickup confirmation, estimated arrival time, final payment amount",
    icon: <BadgeCheck className="h-5 w-5 shrink-0" style={{ color: "#a3c76d" }} />,
  },
];

/* ---------- the four pillars ---------- */
const PILLARS = [
  {
    name: "Data",
    role: "The raw material for processing.",
    example: "a raw log line, a soil reading, a sales figure",
    icon: <Database className="h-5 w-5" style={{ color: "#a3c76d" }} />,
  },
  {
    name: "Algorithm",
    role: "The processing logic and decision-making rules.",
    example: "the threshold rule splitting Zara's fast sellers from slow ones",
    icon: <Brain className="h-5 w-5" style={{ color: "#f5c889" }} />,
  },
  {
    name: "Hardware",
    role: "The physical infrastructure for computation.",
    example: "the servers that executed Knight Capital's 4 million trades",
    icon: <Cpu className="h-5 w-5" style={{ color: "#e4674a" }} />,
  },
  {
    name: "Software",
    role: "The programs and applications.",
    example: "the recommendation engine behind AgroStar's advice",
    icon: <AppWindow className="h-5 w-5" style={{ color: "#d9a468" }} />,
  },
];

/* ---------- the DIKW layers, per Lecture 9 ---------- */
const DIKW_LAYERS = [
  {
    tag: "Layer 1 · Data",
    body: "Raw, unprocessed facts and figures — numbers, coordinates, observations without any context.",
    q: "no question yet — context comes later",
    ex: "“42” or “Mumbai”",
  },
  {
    tag: "Layer 2 · Information",
    body: "Data organized with context and structure. It needs three elements: a question to answer, data processing, and relationship identification.",
    q: "who · what · where · when",
    ex: "“Your age is 42” · “Your place of birth is Mumbai”",
  },
  {
    tag: "Layer 3 · Knowledge",
    body: "The accumulation of information over time — pattern recognition and understanding relationships. It allows confident action on information.",
    q: "why",
    ex: "seeing why the pattern exists",
  },
  {
    tag: "Layer 4 · Wisdom",
    body: "The strategic decision-making application of knowledge — it considers uncertainty and risk and guides organizational actions.",
    q: "what should we do — and what is the cost",
    ex: "the decision, priced for risk",
  },
];

/* ---------- the Netflix case, layer by layer ---------- */
const NETFLIX_RECAP = [
  {
    tag: "Layer 1 · Data",
    title: "Raw user logs",
    body: "Every pause is one log line: user ID, event type (pause/play), content ID, timestamp, timecode. Meaningless alone.",
    icon: <FileText className="h-5 w-5 shrink-0" style={{ color: "#b99a75" }} />,
  },
  {
    tag: "Layer 2 · Information",
    title: "The pattern appears",
    body: "Aggregation reveals 3.2 million viewers paused the content at 42 minutes 15 seconds — a significant pattern.",
    icon: <ChartColumnBig className="h-5 w-5 shrink-0" style={{ color: "#f5c889" }} />,
  },
  {
    tag: "Layer 3 · Knowledge",
    title: "The root cause",
    body: "Cross-referencing behavior with script analysis shows viewers paused on a confusing subplot lacking proper context — the root cause of user dropout.",
    icon: <Search className="h-5 w-5 shrink-0" style={{ color: "#a3c76d" }} />,
  },
  {
    tag: "Layer 4 · Wisdom",
    title: "The executive decision",
    body: "Edit production quality and add recap features to improve viewer retention. Data became strategy.",
    icon: <Lightbulb className="h-5 w-5 shrink-0" style={{ color: "#e4674a" }} />,
  },
];

/* ---------- time-based classification ---------- */
const TIME_TYPES = [
  {
    name: "Cross-sectional",
    sub: "one moment, many variables",
    body: "A single survey or measurement point in time — multiple variables captured at one period. Example: a customer survey in June 2025 about phone brands, screen time and app usage.",
    noteLabel: "Limitation:",
    note: "cannot show changes over time.",
    icon: <Camera className="h-5 w-5 shrink-0" style={{ color: "#f5c889" }} />,
  },
  {
    name: "Panel (longitudinal)",
    sub: "same respondents, measured again and again",
    body: "Multiple measurements from the same respondents over time, tracking change across periods. Example: monthly marks of students tracked over six months.",
    noteLabel: "Advantage:",
    note: "can identify improvement, decline or consistency.",
    icon: <Users className="h-5 w-5 shrink-0" style={{ color: "#a3c76d" }} />,
  },
  {
    name: "Time series",
    sub: "one variable, regular intervals",
    body: "A single variable measured at regular time intervals — stock price, solar power consumption. Zara's sales trends live here.",
    noteLabel: "Remember:",
    note: "recent data has more predictive value — and one time-series variable cannot be used to predict another.",
    icon: <TrendingUp className="h-5 w-5 shrink-0" style={{ color: "#e4674a" }} />,
  },
];

/* ---------- quant vs qual ---------- */
const NATURE_TYPES = [
  {
    name: "Quantitative — quant",
    body: "Numerical and measurable data, captured on measurement scales.",
    ex: "height · weight · temperature · age",
    icon: <Ruler className="h-5 w-5 shrink-0" style={{ color: "#a3c76d" }} />,
  },
  {
    name: "Qualitative — qual",
    body: "Descriptive and categorical data — opinions, text and other non-numerical information.",
    ex: "customer feedback · natural language text · survey responses",
    icon: <MessageSquare className="h-5 w-5 shrink-0" style={{ color: "#f5c889" }} />,
  },
];

export function CaseFilesSection() {
  return (
    <Section id="case-files" dark>
      <SectionHead
        dark
        eyebrow="Lecture 09 · the case files"
        title={
          <>
            When computing meets <span className="grad-text">the world</span>
          </>
        }
        lead="The IPO model looks innocent on a whiteboard. In production it moves billions of data points at machine speed — and when the process stage is wrong, speed amplifies the damage. The case files plus the foundations recap: five cases, then the four pillars, the DIKW pyramid with Netflix, and the full data-classification wall."
      />

      {/* ---------- RECAP 1 — the IPO model at two scales ---------- */}
      <ReadStep
        dark
        n="1"
        title="The IPO model, recapped"
        sub="Weather forecasting and Uber — billions of data points an hour, the same three stages"
      />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow">Lecture 9 · opening recap</p>
          <h3 className="mt-2 text-2xl font-bold text-[#f5e6cd]">Input &rarr; process &rarr; output, at two scales</h3>
          <p className="mt-3 max-w-3xl text-[.9rem] leading-relaxed text-[#e9d7bf]">
            <strong>Weather forecasting</strong> collects <strong>billions of live data points every hour</strong> from
            global networks; applied models process those inputs to generate forecasts — the basic IPO model
            functioning at planetary scale. <strong>Uber</strong> runs the identical pipeline on your street corner.
            The full walkthrough of the Uber case lives in the Lecture 4 chapter — here is the compressed recap.
          </p>
          <div className="mt-5">
            <StepsFlow steps={UBER_IPO} />
          </div>
        </div>
      </Reveal>

      {/* ---------- CASE 1 — Knight Capital ---------- */}
      <Reveal className="mt-8">
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
                <strong>Correctness of transactions is more important than speed.</strong> Proper testing and
                verification are essential before deployment — the process stage of the IPO model is where
                quality lives.
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

          <div className="mt-5 rounded-2xl p-5" style={{ background: "rgba(255,236,210,.06)", border: "1px solid rgba(255,214,160,.18)" }}>
            <p className="eyebrow">Implications for business</p>
            <div className="mt-3 grid gap-3 text-[.88rem] leading-relaxed text-[#e9d7bf] md:grid-cols-3">
              <p>
                <strong className="text-[#f5c889]">Speed amplifies errors catastrophically.</strong> Computing
                executes at machine pace — a bug scales with it.
              </p>
              <p>
                <strong className="text-[#f5c889]">Without guardrails, exponential risk.</strong> Automation
                without verification does not fail politely — it compounds.
              </p>
              <p>
                <strong className="text-[#f5c889]">Process quality is critical.</strong> Algorithm correctness
                is the IPO model's make-or-break stage.
              </p>
            </div>
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
                (each design), many periods, sequence matters — exactly the lecture-3 taxonomy in action,
                recapped in full at the foot of this section.
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

      {/* ---------- CASE 3 & 4 — the quiet revolutions ---------- */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow">Case files 03 &amp; 04 · the quiet revolutions</p>
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
            The <strong>Netflix pause mystery</strong> — 3.2 million viewers stopping at 42:15 — is the DIKW
            pyramid in full flight. It gets its full recap a few blocks down; hold it in mind as you climb
            the layers.
          </Callout>
        </div>
      </Reveal>

      {/* ---------- RECAP 2 — the four pillars ---------- */}
      <ReadStep
        dark
        n="2"
        title="The four pillars, recapped"
        sub="Data · algorithm · hardware · software — remove any one and the system fails"
      />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow">Lecture 9 · foundations recap</p>
          <h3 className="mt-2 text-2xl font-bold text-[#f5e6cd]">Every computing system stands on the same four pillars</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <div key={p.name} className="rounded-2xl p-5" style={{ background: "rgba(255,236,210,.06)", border: "1px solid rgba(255,214,160,.18)" }}>
                <div className="flex items-center gap-2">
                  {p.icon}
                  <p className="font-bold text-[#f5e6cd]">{p.name}</p>
                </div>
                <p className="mt-2 text-[.86rem] leading-relaxed text-[#e9d7bf]">{p.role}</p>
                <p className="mt-3 text-[.78rem] leading-relaxed text-[#b99a75]">{p.example}</p>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <Callout dark kind="warn" title="The binding rule">
              <strong>Removal of any pillar causes the system to fail.</strong> No data leaves the algorithm
              idle; no algorithm runs without hardware; no hardware does anything without software — and
              software with nothing to process is an empty shell.
            </Callout>
          </div>
        </div>
      </Reveal>

      {/* ---------- RECAP 3 — the DIKW pyramid + Netflix ---------- */}
      <ReadStep
        dark
        n="3"
        title="The DIKW pyramid, recapped — with the Netflix case"
        sub="Four layers between a raw log line and a boardroom decision"
      />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow">Lecture 9 · the pyramid</p>
          <h3 className="mt-2 text-2xl font-bold text-[#f5e6cd]">From raw facts to strategic decisions — the four layers</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DIKW_LAYERS.map((l) => (
              <div key={l.tag} className="rounded-2xl p-5" style={{ background: "rgba(255,236,210,.06)", border: "1px solid rgba(255,214,160,.18)" }}>
                <p className="font-mono text-[.7rem] font-bold uppercase tracking-[.18em] text-[#f5c889]">{l.tag}</p>
                <p className="mt-2 text-[.86rem] leading-relaxed text-[#e9d7bf]">{l.body}</p>
                <p className="mt-3 rounded-lg px-3 py-2 text-[.78rem] font-semibold text-[#f5c889]" style={{ background: "rgba(245,158,11,.12)" }}>
                  answers {l.q}
                </p>
                <p className="mt-2 text-[.76rem] leading-relaxed text-[#b99a75]">e.g. {l.ex}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-6">
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow">Case study · Netflix — the pyramid in full flight</p>
          <h3 className="mt-2 text-2xl font-bold text-[#f5e6cd]">How one pause at 42:15 became a strategic decision</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {NETFLIX_RECAP.map((l) => (
              <div key={l.tag} className="rounded-2xl p-5" style={{ background: "rgba(255,236,210,.06)", border: "1px solid rgba(255,214,160,.18)" }}>
                <div className="flex items-center gap-2">
                  {l.icon}
                  <p className="font-mono text-[.7rem] font-bold uppercase tracking-[.18em]" style={{ color: "#f5c889" }}>{l.tag}</p>
                </div>
                <p className="mt-2 font-bold text-[#f5e6cd]">{l.title}</p>
                <p className="mt-1 text-[.84rem] leading-relaxed text-[#e9d7bf]">{l.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[.82rem] text-[#b99a75]">
            The interactive, click-through walkthrough of this case lives in Lecture 2's Data &amp; DIKW
            chapter — climb back up and step through it layer by layer.
          </p>
        </div>
      </Reveal>

      {/* ---------- CASE 5 — the bank / redlining ---------- */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "rgba(190,74,74,.16)" }}>
              <Landmark className="h-6 w-6" style={{ color: "#e4674a" }} />
            </span>
            <div>
              <p className="eyebrow">Case file 05 · banking · ethics</p>
              <h3 className="text-2xl font-bold text-[#f5e6cd]">The bank that stopped at &ldquo;information&rdquo;</h3>
            </div>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div className="grid content-start gap-3 text-[.9rem] leading-relaxed text-[#e9d7bf]">
              <p>
                Bank data showed applicants from certain PIN codes defaulted{" "}
                <strong>3.4&times; more frequently</strong>. The incorrect interpretation: deny loans to
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

      {/* ---------- RECAP 4 — data classification ---------- */}
      <ReadStep
        dark
        n="4"
        title="Data classification, recapped"
        sub="Three lenses: storage format · time structure · nature of the values"
      />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow">Lens 1 · by storage format</p>
          <h3 className="mt-2 text-2xl font-bold text-[#f5e6cd]">Structured, unstructured, semi-structured — and where each one lives</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="warm-table min-w-[720px]">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Format</th>
                  <th>Storage</th>
                  <th>Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold text-[#3e2c1d]">Structured</td>
                  <td>Rows and columns with defined data types</td>
                  <td>DBMS / RDBMS (MySQL, PostgreSQL, Oracle)</td>
                  <td>Bank transactions, student marksheets, e-commerce orders</td>
                </tr>
                <tr>
                  <td className="font-bold text-[#3e2c1d]">Unstructured</td>
                  <td>No defined structure or fixed format</td>
                  <td>Specialized databases</td>
                  <td>PDFs, emails, images (JPG), audio (MP3), video (MP4), sensor streams</td>
                </tr>
                <tr>
                  <td className="font-bold text-[#3e2c1d]">Semi-structured</td>
                  <td>Partial organization with key-value pairs</td>
                  <td>NoSQL databases</td>
                  <td>JSON files, XML files, email (EML) files</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl p-5" style={{ background: "rgba(255,236,210,.06)", border: "1px solid rgba(255,214,160,.18)" }}>
              <p className="font-bold text-[#f5e6cd]">Structured data &rarr; cheaper to process</p>
              <p className="mt-1 text-[.86rem] leading-relaxed text-[#e9d7bf]">
                Lower processing cost and simpler analysis tools — the rows-and-columns shape is exactly
                what databases and spreadsheets are built for.
              </p>
            </div>
            <div className="rounded-2xl p-5" style={{ background: "rgba(255,236,210,.06)", border: "1px solid rgba(255,214,160,.18)" }}>
              <p className="font-bold text-[#f5e6cd]">Unstructured data &rarr; costlier, and it needs specialists</p>
              <p className="mt-1 text-[.86rem] leading-relaxed text-[#e9d7bf]">
                Higher processing cost and specialized skills — natural language processing for text,
                computer vision for images and video.
              </p>
            </div>
          </div>
          <p className="mt-3 text-[.82rem] text-[#b99a75]">
            Different techniques and expertise are needed for each type — which is why classification
            comes before analysis.
          </p>
        </div>
      </Reveal>
      <Reveal className="mt-6">
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow">Lens 2 · across time</p>
          <h3 className="mt-2 text-2xl font-bold text-[#f5e6cd]">Cross-sectional, panel, time series — what each can and cannot tell you</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {TIME_TYPES.map((t) => (
              <div key={t.name} className="rounded-2xl p-5" style={{ background: "rgba(255,236,210,.06)", border: "1px solid rgba(255,214,160,.18)" }}>
                <div className="flex items-center gap-2">
                  {t.icon}
                  <p className="font-bold text-[#f5e6cd]">{t.name}</p>
                </div>
                <p className="mt-1 text-[.76rem] text-[#b99a75]">{t.sub}</p>
                <p className="mt-2 text-[.85rem] leading-relaxed text-[#e9d7bf]">{t.body}</p>
                <p className="mt-3 text-[.82rem] leading-relaxed text-[#e9d7bf]">
                  <strong className="text-[#f5c889]">{t.noteLabel}</strong> {t.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-6">
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow">Lens 3 · by nature</p>
          <h3 className="mt-2 text-2xl font-bold text-[#f5e6cd]">Quantitative versus qualitative — numbers against words</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {NATURE_TYPES.map((n) => (
              <div key={n.name} className="rounded-2xl p-5" style={{ background: "rgba(255,236,210,.06)", border: "1px solid rgba(255,214,160,.18)" }}>
                <div className="flex items-center gap-2">
                  {n.icon}
                  <p className="font-bold text-[#f5e6cd]">{n.name}</p>
                </div>
                <p className="mt-2 text-[.86rem] leading-relaxed text-[#e9d7bf]">{n.body}</p>
                <p className="mt-3 rounded-lg px-3 py-2 text-[.8rem] font-semibold text-[#f5c889]" style={{ background: "rgba(245,158,11,.12)" }}>
                  {n.ex}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[.82rem] text-[#b99a75]">
            The click-through interactive version of all three lenses lives in Lecture 3's data chapter of
            this shelf.
          </p>
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <Clock className="h-5 w-5" style={{ color: "#e4674a" }} />, k: "45 minutes", v: "what a buggy algorithm needed to end a 17-year-old firm" },
            { icon: <Shirt className="h-5 w-5" style={{ color: "#f5c889" }} />, k: "6 months", v: "how far ahead Zara plans with time-series sales data" },
            { icon: <Landmark className="h-5 w-5" style={{ color: "#a3c76d" }} />, k: "3.4×", v: "the default correlation that was never a cause" },
            { icon: <Layers className="h-5 w-5" style={{ color: "#d9a468" }} />, k: "4 layers", v: "from a raw pause log to a boardroom call — the DIKW pyramid, climbed end to end" },
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
        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q="Which storage home fits semi-structured JSON files?"
            options={[
              "DBMS/RDBMS such as MySQL, PostgreSQL or Oracle",
              "NoSQL databases",
              "Specialized databases built for fixed-format media",
              "Plain spreadsheets with typed columns",
            ]}
            answer={1}
            explain="Semi-structured data is partially organized with key-value pairs — JSON, XML and EML files live in NoSQL databases. Fully structured rows-and-columns data goes to a DBMS/RDBMS; unstructured media needs specialized databases."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q="Netflix aggregated raw pause logs, found 3.2 million viewers stopping at 42:15, then traced the cause to a confusing subplot lacking context. Which DIKW layer is that root-cause hunt?"
            options={[
              "Data — the raw log lines",
              "Information — the aggregated pattern",
              "Knowledge — pattern recognition that answers why",
              "Wisdom — the executive decision",
            ]}
            answer={2}
            explain="Aggregating logs into a pattern is information; identifying WHY the pattern exists — the root cause of dropout — is knowledge. Wisdom is the step after: the decision to re-edit and add recap features, weighing cost and risk."
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
            <>Four pillars — <strong>data, algorithm, hardware, software</strong>: removal of any one causes the system to fail.</>,
            <>Data alone is insufficient — the <strong>DIKW pyramid</strong>: information answers who/what/where/when, knowledge answers why, wisdom decides what to do and at what cost.</>,
            <>Correlation at the information level is <strong>not a decision</strong> — climb to knowledge and wisdom, and stay inside the regulator's lines.</>,
            <>Classification drives cost and technique: <strong>structured data is cheap to process</strong>, unstructured needs NLP and computer vision — and cross-sectional, panel and time-series data answer different questions.</>,
            <>Computing now runs farms (<strong>AgroStar</strong>) and hospitals (<strong>ECG at 100 readings/second</strong>) — every industry is a computing industry.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
