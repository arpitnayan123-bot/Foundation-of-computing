"use client";

import React, { useState } from "react";
import {
  Database,
  Layers,
  Thermometer,
  FileSpreadsheet,
  Braces,
  FileImage,
  Clock,
  Camera,
  Ruler,
  Tags,
  FlaskConical,
  BookMarked,
  Info,
} from "lucide-react";
import { Reveal, Section, SectionHead, Callout, Quiz, Practice, Takeaways, KV } from "./ui";

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

/* ---------- Netflix 4-layer walkthrough ---------- */
const NETFLIX_LAYERS = [
  {
    tag: "Layer 1 · Data",
    title: "Raw facts & figures",
    body: "One log line, meaningless alone: timestamp 2026-08-21T21:04:12Z · USER_ID 98124 · EVENT pause · CONTENT_ID 8019823 · TIMECODE 00:42:15. Raw signals — that’s all.",
  },
  {
    tag: "Layer 2 · Information",
    title: "Data + context & structure",
    body: "Aggregate millions of those log lines and a pattern appears: 3.2 million viewers paused Content #8019823 at the exact same timecode — 00:42:15. Now it means something.",
  },
  {
    tag: "Layer 3 · Knowledge",
    title: "Information + synthesis & understanding",
    body: "Cross-reference viewer behaviour with script analytics: the scene at 00:42:15 introduces a complex subplot without clear background context — that confusion causes the mass pause and drop-off.",
  },
  {
    tag: "Layer 4 · Wisdom",
    title: "Knowledge + strategic action",
    body: "Act wisely: production teams re-edit pacing for future releases, and the recommendation engine shows contextual recaps to viewers re-engaging with the show. Data became a business decision.",
  },
];

function NetflixCase() {
  const [step, setStep] = useState(0);
  return (
    <div className="card-warm p-6 md:p-8">
      <p className="eyebrow">Case study · Netflix</p>
      <h3 className="mt-2 text-2xl font-bold">
        How one pause at 42:15 became a strategic decision
      </h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {NETFLIX_LAYERS.map((l, i) => (
          <button
            key={l.tag}
            onClick={() => setStep(i)}
            className={`rounded-full px-4 py-2 text-[.78rem] font-bold transition ${
              step === i
                ? "text-white shadow-md"
                : "bg-[#fbf3e3] text-[#7c4a12] hover:bg-[#f6e7cd]"
            }`}
            style={step === i ? { background: "linear-gradient(135deg,#ea580c,#c2410c)" } : undefined}
            aria-pressed={step === i}
          >
            {l.tag}
          </button>
        ))}
      </div>
      <div className="anim-pop mt-5 rounded-2xl border border-[#ecd9bd] bg-[#fffdf9] p-5">
        <p className="text-[.72rem] font-extrabold uppercase tracking-[.2em] text-[#8a5a10]">
          {NETFLIX_LAYERS[step].title}
        </p>
        <p className="mt-2 text-[.95rem] leading-relaxed text-[#2b2014]">
          {NETFLIX_LAYERS[step].body}
        </p>
      </div>
      <p className="mt-4 text-center text-[.8rem] text-muted-warm">
        Same event, four levels of meaning — that is the DIKW ladder in action.
      </p>
    </div>
  );
}

/* ---------- Structure tabs ---------- */
const STRUCT_TABS = [
  {
    id: "structured",
    icon: <FileSpreadsheet className="h-5 w-5" />,
    label: "Structured",
    color: "#c2410c",
    headline: "Neat rows and columns — a spreadsheet’s dream",
    points: [
      "Organized into rows (records) and columns (fields)",
      "Each field has a defined data type — number, text, date, yes/no",
      "Easy to search, sort, filter and analyze",
      "Lives in relational databases: MySQL, PostgreSQL, Oracle",
    ],
    examples: "Bank transaction records · student mark sheets · hospital patient registers · e-commerce order tables",
    demo: (
      <table className="warm-table mt-4">
        <thead>
          <tr>
            <th>Student ID</th><th>Name</th><th>Marks (out of 100)</th><th>Pass / Fail</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>S001</td><td>Aanya Sharma</td><td>87</td><td>Pass</td></tr>
          <tr><td>S002</td><td>Rohan Verma</td><td>43</td><td>Fail</td></tr>
          <tr><td>S003</td><td>Priya Nair</td><td>91</td><td>Pass</td></tr>
          <tr><td>S004</td><td>Kiran Mehta</td><td>72</td><td>Pass</td></tr>
        </tbody>
      </table>
    ),
    files: [".csv", ".xlsx", ".db", "SQL tables"],
  },
  {
    id: "semi",
    icon: <Braces className="h-5 w-5" />,
    label: "Semi-structured",
    color: "#d97706",
    headline: "Some organization, but no rigid rows-and-columns",
    points: [
      "Self-describing: tags or keys mark where data begins and ends",
      "Fields can vary record to record",
      "The workhorse of the web — APIs exchange this format constantly",
    ],
    examples: "JSON files (web APIs) · XML · HTML pages · email (To/From/Subject headers + a free-form body)",
    demo: (
      <pre className="code-body mt-4 rounded-xl" style={{ background: "#2b1b10", border: "1px solid #4a3020" }}>
{`{
  "order_id": "ORD4521",
  "customer": "Rohit",
  "items": ["Butter Naan", "Dal Makhani"],
  "total": 320,
  "time": "19:45"
}`}
      </pre>
    ),
    files: [".json", ".xml", ".html", ".eml"],
  },
  {
    id: "unstructured",
    icon: <FileImage className="h-5 w-5" />,
    label: "Unstructured",
    color: "#be4a4a",
    headline: "No predefined shape — and ~80% of all data on Earth",
    points: [
      "Text: emails, WhatsApp chats, news articles, reviews, social posts",
      "Images: photos, medical X-rays, satellite imagery, ID-card scans",
      "Audio: voice calls, podcasts, music files, voice notes",
      "Video: CCTV footage, YouTube videos, recorded lectures",
      "Sensor data streams: raw IoT device readings without labels",
    ],
    examples: "A PDF essay · a selfie · a podcast · a CCTV clip",
    demo: (
      <div className="mt-4 flex flex-wrap gap-2">
        {[".pdf", ".jpg", ".png", ".mp3", ".wav", ".mp4"].map((f) => (
          <span key={f} className="chip" style={{ background: "#fbe9e4", color: "#9c3a3a", borderColor: "#eec0b3" }}>
            {f}
          </span>
        ))}
      </div>
    ),
    files: ["PDF", "JPG", "MP3", "MP4", "WAV"],
  },
];

function StructureTabs() {
  const [tab, setTab] = useState(0);
  const t = STRUCT_TABS[tab];
  return (
    <div className="card-warm p-6 md:p-8">
      <div className="flex flex-wrap gap-2">
        {STRUCT_TABS.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setTab(i)}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-[.8rem] font-bold transition ${
              tab === i ? "text-white shadow-md" : "bg-[#fbf3e3] text-[#7c4a12] hover:bg-[#f6e7cd]"
            }`}
            style={tab === i ? { background: `linear-gradient(135deg, ${s.color}, #ea580c)` } : undefined}
            aria-pressed={tab === i}
          >
            {s.icon}
            {s.label}
          </button>
        ))}
      </div>

      <div className="anim-pop mt-6">
        <h4 className="text-xl font-bold" style={{ color: t.color }}>
          {t.headline}
        </h4>
        <ul className="mt-3 grid gap-1.5 text-[.9rem] text-[#2b2014] md:grid-cols-2">
          {t.points.map((p) => (
            <li key={p}>• {p}</li>
          ))}
        </ul>
        <p className="mt-3 text-[.85rem] text-muted-warm">
          <strong>Examples:</strong> {t.examples}
        </p>
        <div className="overflow-x-auto">{t.demo}</div>
        <p className="mt-3 text-[.8rem] text-muted-warm">
          <strong>Typical formats:</strong>{" "}
          {t.files.map((f) => (
            <span key={f} className="mr-1.5 inline-block rounded-md bg-[#fbf3e3] px-2 py-0.5 font-mono-warm text-[.74rem] text-[#7c4a12]">
              {f}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

/* ---------- Time-based data visual minis ---------- */
function CrossSectionalViz() {
  return (
    <svg viewBox="0 0 200 90" className="h-24 w-full" aria-label="One snapshot in time">
      <line x1="10" y1="78" x2="190" y2="78" stroke="#d9b96a" strokeWidth="1.5" />
      <text x="100" y="88" textAnchor="middle" fontSize="8" fill="#7a5b39">TIME</text>
      {Array.from({ length: 24 }).map((_, i) => (
        <circle key={i} cx={52 + (i % 8) * 12} cy={26 + Math.floor(i / 8) * 12} r="4" fill={i % 3 === 0 ? "#c2410c" : "#e8924a"} />
      ))}
      <g>
        <line x1="100" y1="74" x2="100" y2="62" stroke="#7c9a3e" strokeWidth="1.5" markerEnd="url(#a1)" />
        <defs>
          <marker id="a1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#7c9a3e" />
          </marker>
        </defs>
      </g>
    </svg>
  );
}
function TimeSeriesViz() {
  return (
    <svg viewBox="0 0 200 90" className="h-24 w-full" aria-label="One subject over many time points">
      <line x1="10" y1="78" x2="190" y2="78" stroke="#d9b96a" strokeWidth="1.5" />
      <text x="100" y="88" textAnchor="middle" fontSize="8" fill="#7a5b39">TIME</text>
      <path d="M15 60 L45 40 L75 52 L105 22 L135 34 L165 14 L188 24" stroke="#c2410c" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="15" cy="60" r="3" fill="#c2410c" /><circle cx="105" cy="22" r="3" fill="#c2410c" /><circle cx="188" cy="24" r="3" fill="#c2410c" />
    </svg>
  );
}
function PanelViz() {
  return (
    <svg viewBox="0 0 200 90" className="h-24 w-full" aria-label="Many subjects, many time points">
      <line x1="10" y1="78" x2="190" y2="78" stroke="#d9b96a" strokeWidth="1.5" />
      <text x="100" y="88" textAnchor="middle" fontSize="8" fill="#7a5b39">TIME</text>
      {[0, 1, 2].map((g) =>
        Array.from({ length: 9 }).map((_, i) => (
          <circle key={`${g}-${i}`} cx={40 + g * 55 + (i % 3) * 11} cy={26 + Math.floor(i / 3) * 12} r="4" fill={g === 1 ? "#e8924a" : "#c2410c"} opacity={g === 1 ? 0.85 : 1} />
        ))
      )}
    </svg>
  );
}

const TIME_CARDS = [
  {
    icon: <Camera className="h-5 w-5" />,
    name: "Cross-sectional",
    sub: "One subject many? No — many subjects, ONE moment",
    viz: <CrossSectionalViz />,
    def: "Data collected at a single point in time — a snapshot of many units.",
    story:
      "A survey of 500 students in Delhi on 1st June 2025: name · age · monthly data usage (GB) · phone brand · hours on social media per day. All 500 observations are from the same moment. You can compare across students, but you cannot track how any one student changes over time.",
    uses: "Election polls · consumer surveys · census data · medical studies comparing different patients",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    name: "Time series",
    sub: "ONE subject, MANY time points — order matters",
    viz: <TimeSeriesViz />,
    def: "The same variable recorded repeatedly over time; the sequence itself carries meaning.",
    story:
      "Daily closing price of Reliance Industries, Jan 2024 → Dec 2024: ₹2,450 · ₹2,461 · ₹2,438 · … · ₹2,790. One subject, thousands of days. Sequence matters — you can see trends, cycles and sudden changes. The Dow Jones chart on any finance site is exactly this.",
    uses: "Weather forecasting · stock-price prediction · ECG heartbeat readings · website traffic over time · epidemic spread (COVID case counts)",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    name: "Panel (longitudinal)",
    sub: "MANY subjects × MANY time points — the richest",
    viz: <PanelViz />,
    def: "Multiple units tracked across multiple time periods — cross-sectional and time-series combined.",
    story:
      "Monthly marks of 5 students tracked over 6 months — Aanya 72→88, Rohan 55→65, Priya 90→94, Kiran 65→80, Dev 40→65. You can compare students AND watch each one improve. NREGA Rajasthan dashboards (district × financial-year employment tables) and IMF country-year data are real panel data.",
    uses: "NREGA employment records · IMF macroeconomic data across countries over years · clinical drug trials · school performance tracking",
  },
];

/* ---------- Quant vs Qual ---------- */
const QNQ = [
  {
    icon: <Ruler className="h-5 w-5" />,
    name: "Quantitative",
    sub: "Numerical · measurable · asks what / how many / how much",
    rows: [
      {
        k: "Discrete",
        v: "Countable whole numbers — students in a class (30), goals in a match (3), apps on a phone (47)",
      },
      {
        k: "Continuous",
        v: "Any value within a range, decimals included — height (172.4 cm), body temperature (36.8 °C), 100 m sprint (9.58 s)",
      },
      {
        k: "Valid operations",
        v: "Addition, subtraction, mean, median, standard deviation",
      },
    ],
    note: "In a housing dataset: Num_Bedrooms and Num_Floors are discrete; Square_Feet and Price are continuous.",
  },
  {
    icon: <Tags className="h-5 w-5" />,
    name: "Qualitative",
    sub: "Categorical · descriptive · asks how and why",
    rows: [
      {
        k: "Nominal",
        v: "Categories with NO natural order — blood group (A, B, AB, O), city of birth (Delhi, Mumbai, Chennai)",
      },
      {
        k: "Ordinal",
        v: "Categories WITH a meaningful order but unequal gaps — movie rating (1★ to 5★), education level (Class 10 < Class 12 < Graduate), satisfaction (Poor / Fair / Good / Excellent)",
      },
      {
        k: "Valid operations",
        v: "Mode, frequency counts, chi-square test",
      },
    ],
    note: "Amazon’s one-click star ratings and customer-satisfaction surveys are ordinal qualitative data — even opinions become data.",
  },
];

/* ---------- Primary vs Secondary ---------- */
const PRIM_SEC = [
  {
    icon: <FlaskConical className="h-5 w-5" />,
    name: "Primary data",
    def: "Data we collect ourselves, first-hand, for a specific purpose. Original — not previously published.",
    ex: [
      "Conducting a survey of students in a school about screen time",
      "Running an experiment and recording observations",
      "Collecting sensor readings from a device we deployed (Arduino MKR IoT Carrier + Wi-Fi module → Weather Station web service → Snowflake data repository)",
    ],
    pros: "Tailored to the exact question · reliable source · we know how it was collected",
    cons: "Time-consuming · expensive · may have a small sample size",
  },
  {
    icon: <BookMarked className="h-5 w-5" />,
    name: "Secondary data",
    def: "Data collected by someone else for a different purpose, which we reuse for our own analysis.",
    ex: [
      "NSSO (National Sample Survey Office) household-income data — collected by the government",
      "SEBI stock-exchange transaction records (e.g. daily FPI investment trends) · IRDAI insurance-regulator filings",
      "WHO global health statistics · IMF macroeconomic data across countries",
      "World Bank development indicators — the deck's credibility benchmark: far more reliable than an unknown private source",
      "Bloomberg and Prolific databases · government census tables",
      "Wikipedia’s structured data (Wikidata) · AIDIS 2019 household-wealth tables",
    ],
    pros: "Large scale · already available · often free and authoritative",
    cons: "May not perfectly match our question · quality depends on the original collector",
  },
];

/* ---------- Master summary ---------- */
const MASTER_ROWS = [
  {
    dim: "By format",
    types: "Structured / Unstructured / Semi-structured",
    ex: "DB table / Emails / JSON",
    key: "Structure determines storage and processing tools",
  },
  {
    dim: "By time",
    types: "Cross-sectional / Time series / Panel",
    ex: "Survey / Stock price / Student marks over months",
    key: "The time dimension enables trends and forecasting",
  },
  {
    dim: "By nature",
    types: "Quantitative / Qualitative",
    ex: "Height, marks / Blood group, rating",
    key: "Data type determines the valid operations",
  },
  {
    dim: "By origin",
    types: "Primary / Secondary / Metadata",
    ex: "Survey / Census / File properties",
    key: "Source affects reliability and relevance",
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
        lead="Without data there is nothing to process, nothing to store, nothing to output. Understanding what data is, how it is classified and how it is organized is the first step in understanding computing."
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

      {/* Netflix + Bank cases */}
      <Reveal className="mt-10">
        <NetflixCase />
      </Reveal>

      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8" style={{ borderColor: "#eec0b3" }}>
          <p className="eyebrow">Case study · a bank — when wisdom must overrule the model</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {[
              { k: "Data", v: "Loan-application records, postal codes, repayment histories — millions of rows." },
              { k: "Information", v: "Applicants from postal codes X, Y, Z default at 3.4× the rate of applicants from other areas. Confirmed on data." },
              { k: "Knowledge", v: "Those postal codes correspond to areas with lower income, poorer infrastructure and less access to formal employment. The high default rate is a consequence of structural economic disadvantage." },
            ].map((r) => (
              <div key={r.k} className="rounded-xl bg-[#fffdf9] p-4" style={{ border: "1px dashed #e5c79d" }}>
                <p className="font-bold text-[#7c4a12]">{r.k}</p>
                <p className="mt-1 text-[.88rem] leading-relaxed text-[#2b2014]">{r.v}</p>
              </div>
            ))}
            <div className="rounded-xl p-4" style={{ background: "#fbe9e4", border: "1px solid #e6a08c" }}>
              <p className="font-bold" style={{ color: "#9c3a3a" }}>Wisdom question</p>
              <p className="mt-1 text-[.88rem] leading-relaxed text-[#2b2014]">
                Should the bank deny loans to those postal codes? The model says{" "}
                <strong>yes</strong> — it would reduce defaults. <strong>But</strong> that
                systematically denies an entire geographic community access to credit:{" "}
                <em>redlining</em>, illegal in many countries and deeply unethical. The
                wise decision is <strong>not to use this variable</strong> — no matter
                what the numbers say.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Structure */}
      <Reveal className="mt-12">
        <h3 className="text-2xl font-bold">
          Classifying data <span className="grad-text">by format</span>
        </h3>
        <p className="mt-2 max-w-3xl text-[.92rem] text-muted-warm">
          The single most practical classification — it decides where data lives and
          which tools can touch it.
        </p>
      </Reveal>
      <Reveal className="mt-6">
        <StructureTabs />
      </Reveal>

      <Reveal className="mt-8">
        <div className="grid gap-5 md:grid-cols-2">
          <Callout kind="insight" title="The business consequence">
            <strong>Analysis cost:</strong> structured data &lt; unstructured data.{" "}
            <strong>Capability required:</strong> structured data &lt; unstructured data.
            The messier the data, the more money and skill it demands — which is exactly
            why data scientists exist.
          </Callout>
          <Callout kind="story" title="A DBMS table in the wild">
            Every row of an orders table (Customer Name · Order Date · Order ID · Line
            Items) is a structured record — the raw material that reporting tools, SQL
            queries and Python’s pandas later transform into insight.
          </Callout>
        </div>
      </Reveal>

      {/* Time */}
      <Reveal className="mt-12">
        <h3 className="text-2xl font-bold">
          Classifying data <span className="grad-text">by time</span>
        </h3>
      </Reveal>
      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {TIME_CARDS.map((c, i) => (
          <Reveal key={c.name} delay={i * 100}>
            <div className="card-warm lift flex h-full flex-col p-6">
              <div className="flex items-center gap-2">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg,#fde8cf,#fbcf9f)", color: "#8a3d10" }}
                >
                  {c.icon}
                </span>
                <h4 className="text-lg font-bold">{c.name}</h4>
              </div>
              <p className="mt-1 text-[.72rem] font-bold uppercase tracking-[.14em] text-[#8a5a10]">
                {c.sub}
              </p>
              {c.viz}
              <p className="text-[.88rem] leading-relaxed text-[#2b2014]">{c.def}</p>
              <p className="mt-2 text-[.84rem] leading-relaxed text-muted-warm">{c.story}</p>
              <p className="mt-auto pt-3 text-[.78rem] font-semibold text-[#7c4a12]">
                Real-world uses: {c.uses}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Nature */}
      <Reveal className="mt-12">
        <h3 className="text-2xl font-bold">
          Classifying data <span className="grad-text">by nature</span>
        </h3>
      </Reveal>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {QNQ.map((q, i) => (
          <Reveal key={q.name} delay={i * 100}>
            <div className="card-warm h-full p-6">
              <div className="flex items-center gap-2">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg,#fde8cf,#fbcf9f)", color: "#8a3d10" }}
                >
                  {q.icon}
                </span>
                <div>
                  <h4 className="text-lg font-bold">{q.name}</h4>
                  <p className="text-[.74rem] font-semibold text-muted-warm">{q.sub}</p>
                </div>
              </div>
              <div className="mt-4">
                {q.rows.map((r) => (
                  <KV key={r.k} k={r.k} v={r.v} />
                ))}
              </div>
              <p className="mt-3 text-[.82rem] italic leading-relaxed text-[#8c2f2f]">{q.note}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <div className="overflow-x-auto">
            <table className="warm-table min-w-[560px]">
              <thead>
                <tr><th>Quantitative</th><th>Qualitative</th></tr>
              </thead>
              <tbody>
                <tr><td>Numerical answers — can be counted and quantified</td><td>Feedback, opinions, attitudes, perceptions — cannot be counted</td></tr>
                <tr><td>Answers the ‘what’, ‘how often’, ‘how many / how much’</td><td>Answers the ‘how’ and the ‘why’</td></tr>
                <tr><td>Collected through surveys</td><td>Collected through interviews, observations, focus-group discussions</td></tr>
                <tr><td>Identifies trends and patterns; generalizable with a representative sample</td><td>Provides in-depth insight and context; cannot be generalized</td></tr>
                <tr><td>Quick and easy to analyse; reported as figures, averages, percentages</td><td>Interpretation-based; more prone to (researcher’s) bias</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>

      {/* Origin */}
      <Reveal className="mt-12">
        <h3 className="text-2xl font-bold">
          Classifying data <span className="grad-text">by origin</span>
        </h3>
      </Reveal>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {PRIM_SEC.map((p, i) => (
          <Reveal key={p.name} delay={i * 100}>
            <div className="card-warm flex h-full flex-col p-6">
              <div className="flex items-center gap-2">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg,#fde8cf,#fbcf9f)", color: "#8a3d10" }}
                >
                  {p.icon}
                </span>
                <h4 className="text-lg font-bold">{p.name}</h4>
              </div>
              <p className="mt-3 text-[.9rem] leading-relaxed text-[#2b2014]">{p.def}</p>
              <ul className="mt-3 space-y-1.5 text-[.86rem] text-muted-warm">
                {p.ex.map((e) => (
                  <li key={e}>• {e}</li>
                ))}
              </ul>
              <div className="mt-4 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[.84rem]">
                <span className="font-bold" style={{ color: "#5f7a33" }}>Advantages</span>
                <span className="text-[#2b2014]">{p.pros}</span>
                <span className="font-bold" style={{ color: "#be4a4a" }}>Disadvantages</span>
                <span className="text-[#2b2014]">{p.cons}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Metadata */}
      <Reveal className="mt-12">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Info className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">
              Metadata: <span className="grad-text">data about data</span>
            </h3>
          </div>
          <p className="mt-3 max-w-3xl text-[.92rem] leading-relaxed text-[#2b2014]">
            Metadata describes data without being the data itself. A photo file contains{" "}
            <strong>the actual data</strong> (the image pixels — what we see) plus{" "}
            <strong>metadata</strong>: filename, file size, date taken, GPS location,
            camera model, resolution. A library catalogue is metadata about books.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-[#fffdf9] p-4" style={{ border: "1px dashed #e5c79d" }}>
              <p className="font-bold text-[#7c4a12]">WhatsApp message metadata</p>
              <p className="mt-1 text-[.88rem] leading-relaxed text-[#2b2014]">
                sender ID · recipient ID · timestamp · read receipt · device type. Even
                without the message content, it reveals a great deal — who talks to whom,
                when, how often.
              </p>
            </div>
            <div className="rounded-xl bg-[#fffdf9] p-4" style={{ border: "1px dashed #e5c79d" }}>
              <p className="font-bold text-[#7c4a12]">Why it matters</p>
              <p className="mt-1 text-[.88rem] leading-relaxed text-[#2b2014]">
                In large systems, metadata is critical for <strong>finding, organizing
                and governing</strong> data — it’s the index card system of the digital world.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Master table */}
      <Reveal className="mt-12">
        <div className="card-warm overflow-hidden">
          <div className="px-6 pt-6 md:px-8">
            <p className="eyebrow">Pillar 1 · one-glance revision map</p>
            <h3 className="mt-2 text-2xl font-bold">All four classifications, one table</h3>
          </div>
          <div className="mt-5 overflow-x-auto px-4 pb-6 md:px-8">
            <table className="warm-table min-w-[760px]">
              <thead>
                <tr><th>Classification</th><th>Types</th><th>Examples</th><th>Key concept</th></tr>
              </thead>
              <tbody>
                {MASTER_ROWS.map((r) => (
                  <tr key={r.dim}>
                    <td className="font-bold text-[#7c4a12]">{r.dim}</td>
                    <td>{r.types}</td>
                    <td>{r.ex}</td>
                    <td>{r.key}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>

      {/* Quizzes */}
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Course quiz"
            q="Which of the following is an example of structured data?"
            options={["A WhatsApp voice note", "A student mark sheet stored in a database table", "A collection of customer complaint emails", "A CCTV surveillance video"]}
            answer={1}
            explain="A mark sheet in a database table has fixed rows (students) and columns (fields like marks, pass/fail) — the textbook definition of structured data. Voice notes, emails and CCTV are unstructured."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Course quiz"
            q="Approximately what percentage of all data generated globally is unstructured?"
            options={["20%", "40%", "60%", "80%"]}
            answer={3}
            explain="Around 80% of the world’s data is unstructured — videos, images, chats, sensor streams. That’s why techniques to process unstructured data (AI, NLP, computer vision) are so valuable."
          />
        </Reveal>
        <Reveal delay={150}>
          <Quiz
            source="Course quiz"
            q="A JSON file with fixed fields like 'order_id' but a variable-length 'items' list is classified as:"
            options={["Structured data", "Unstructured data", "Semi-structured data", "Primary data"]}
            answer={2}
            explain="JSON is semi-structured: it has self-describing tags/keys (some organization) but no rigid rows-and-columns schema — fields can vary in size and shape between records."
          />
        </Reveal>
        <Reveal delay={200}>
          <Quiz
            source="Course quiz"
            q="A survey of 500 students conducted on a single day — with no follow-up across time — is an example of:"
            options={["Time series data", "Panel data", "Cross-sectional data", "Longitudinal data"]}
            answer={2}
            explain="Many subjects, one moment in time = cross-sectional. Longitudinal/panel requires tracking the same subjects across multiple time points."
          />
        </Reveal>
        <Reveal delay={250}>
          <Quiz
            source="Course quiz"
            q="Daily closing prices of a stock recorded from January to December of a single year represent:"
            options={["Time series data", "Panel data", "Cross-sectional data", "Longitudinal data"]}
            answer={0}
            explain="One subject (the stock), many ordered time points — sequence matters, trends and cycles become visible. That is time series data."
          />
        </Reveal>
        <Reveal delay={300}>
          <Quiz
            source="Course quiz"
            q="Monthly marks of 30 students tracked over 6 months, allowing analysis of who improved most over time, is an example of:"
            options={["Time series data", "Structured qualitative data", "Cross-sectional data", "Panel (longitudinal) data"]}
            answer={3}
            explain="Many students × many months = panel data. It lets you compare across students AND track each student through time."
          />
        </Reveal>
        <Reveal delay={350}>
          <Quiz
            source="Course quiz"
            q="Which of the following is an example of continuous quantitative data?"
            options={["Number of students in a class", "Blood group of a patient", "A patient's body temperature (36.8 °C)", "Customer satisfaction rating (1 to 5 stars)"]}
            answer={2}
            explain="Temperature can take any value within a range — 36.8, 36.81, 36.802… — making it continuous. Student counts are discrete, blood groups nominal, star ratings ordinal."
          />
        </Reveal>
        <Reveal delay={400}>
          <Quiz
            source="Course quiz"
            q="Which data type has a natural order between categories, but the gaps between them are not necessarily equal?"
            options={["Nominal", "Continuous", "Discrete", "Ordinal"]}
            answer={3}
            explain="Ordinal categories have meaningful order (Poor < Fair < Good < Excellent) but the distance between consecutive categories is not measurable or equal."
          />
        </Reveal>
      </div>
      <Reveal className="mt-5">
        <Quiz
          source="Course quiz"
          q="City of birth (Delhi, Mumbai, Chennai) is an example of which type of data?"
          options={["Time series data", "Structured qualitative data", "Cross-sectional data", "Panel (longitudinal) data"]}
          answer={1}
          explain="City of birth is a nominal category with no natural order — and when stored in a table with rows and columns, it is structured qualitative data."
        />
      </Reveal>

      <Reveal className="mt-10">
        <Takeaways
          items={[
            <>Data is raw and meaningless alone; <strong>computing transforms data into information</strong>.</>,
            <>The <strong>DIKW ladder</strong> (Data → Information → Knowledge → Wisdom) is how raw facts become strategic decisions — in Netflix and in banks.</>,
            <>Data by <strong>format</strong>: structured (rows/columns), semi-structured (JSON/email), unstructured (~80% of everything).</>,
            <>Data by <strong>time</strong>: cross-sectional (one snapshot), time series (one subject over time), panel (many subjects × many times).</>,
            <>Data by <strong>nature</strong>: quantitative (discrete/continuous) supports means and medians; qualitative (nominal/ordinal) supports modes and counts.</>,
            <>Data by <strong>origin</strong>: primary (you collected it) vs secondary (someone else did); metadata describes data and governs large systems.</>,
            <>Wisdom sometimes means <strong>refusing</strong> to use a variable — redlining is what happens when models outrun ethics.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
