"use client";

/* ============================================================
   FocParts1 — the FoC rebuild, file 1 of 9.

   #course-map  (Lecture 1 — Welcome to Foundations of Computing)
   #data-types  (Lecture 3 — Data, Classified)

   The deck's lecture 1 is a map, not a machine: four learning
   objectives, why Python, and the sentiment-analysis finale.
   Lecture 3 is the data taxonomy the whole course leans on:
   format (structured/semi/unstructured), time (cross-sectional/
   panel/time-series) and nature (quantitative vs qualitative).
   ============================================================ */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Braces,
  Check,
  Database,
  FileJson,
  FileText,
  Image as ImageIcon,
  LineChart,
  MessageSquareText,
  Music,
  Table2,
  Video,
  Workflow,
} from "lucide-react";
import {
  Callout,
  CodeBlock,
  Pill,
  Quiz,
  ReadStep,
  Reveal,
  Section,
  SectionHead,
  StepsFlow,
  Takeaways,
} from "@/components/notes/ui";

/* ============================================================
   LECTURE 1 — #course-map
   ============================================================ */

const OBJECTIVES = [
  {
    icon: <Brain className="h-6 w-6" style={{ color: "#c2410c" }} />,
    title: "Computing Fundamentals",
    sub: "What computing is, how it thinks, what it is made of",
    detail:
      "The IPO model, the four pillars — data, algorithm, hardware, software — and the DIKW ladder from raw 38.5 to a doctor's decision.",
  },
  {
    icon: <Workflow className="h-6 w-6" style={{ color: "#c2410c" }} />,
    title: "Programming with Python",
    sub: "Real, functional code — not pseudocode",
    detail:
      "Variables, strings, lists, dictionaries, loops, functions — every snippet on this page runs in a real CPython 3.12, right here, no setup.",
  },
  {
    icon: <LineChart className="h-6 w-6" style={{ color: "#c2410c" }} />,
    title: "Data Visualization",
    sub: "Raw numbers → meaningful charts → visual stories",
    detail:
      "Transform tables into pictures a manager can read in five seconds — the skill that turns analysis into decisions.",
  },
  {
    icon: <MessageSquareText className="h-6 w-6" style={{ color: "#c2410c" }} />,
    title: "Real-World Project — Sentiment Analysis",
    sub: "A machine-learning application, built by you",
    detail:
      "Feed it customer reviews; it decides whether the sentiment is positive or negative — the same class of tool businesses run on real feedback.",
  },
];

function ObjectiveDeck() {
  const [open, setOpen] = useState(0);
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {OBJECTIVES.map((o, i) => {
        const isOpen = open === i;
        return (
          <motion.div
            key={o.title}
            layout
            onClick={() => setOpen(isOpen ? -1 : i)}
            className={`cursor-pointer rounded-2xl p-5 transition-shadow ${
              isOpen ? "card-warm shadow-[0_18px_40px_-20px_rgba(194,65,12,.45)]" : "card-warm"
            }`}
            whileHover={{ y: -3 }}
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: "#f7ecdc" }}
              >
                {o.icon}
              </span>
              <div>
                <p className="font-bold leading-tight text-[#3e2c1d]">{o.title}</p>
                <p className="text-[.8rem] text-muted-warm">{o.sub}</p>
              </div>
              <span
                className="ml-auto rounded-full px-2.5 py-1 text-[.68rem] font-black uppercase tracking-[.14em]"
                style={{ background: "#f7ecdc", color: "#b45309" }}
              >
                {isOpen ? "hide" : `objective ${i + 1}`}
              </span>
            </div>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden pt-3 text-[.88rem] leading-relaxed text-[#2b2014]"
                >
                  {o.detail}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

const WHY_PYTHON = [
  { k: "Most popular", v: "the world's most-used programming language, year after year" },
  { k: "Powers AI", v: "data science, machine learning and automation projects run on it" },
  { k: "Reads like English", v: "syntax mirrors natural thinking — accessible to beginners" },
  { k: "No maths wall", v: "curiosity and willingness to learn are the only prerequisites" },
];

export function CourseMapSection() {
  return (
    <Section id="course-map">
      <SectionHead
        eyebrow="Lecture 1 · the course map"
        title={
          <>
            Welcome to <span className="grad-text">Foundations of Computing</span>
          </>
        }
        lead="This course transforms you from a passive technology user into an active developer. You already use Google Pay, YouTube and Google Maps — by the end, you'll write the kind of instructions that power applications like them."
      />

      <Reveal>
        <p className="mb-4 text-[.95rem] font-semibold text-[#3e2c1d]">
          Four core learning objectives — click each to unfold:
        </p>
        <ObjectiveDeck />
      </Reveal>

      <Reveal className="mt-10">
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow">The journey, station by station</p>
          <h3 className="mt-2 text-2xl font-bold">From &ldquo;what is computing?&rdquo; to a working ML app</h3>
          <div className="mt-6">
            <StepsFlow
              steps={[
                { label: "Fundamentals", sub: "IPO · pillars · data · hardware · software" },
                { label: "Python", sub: "variables → lists → dicts → loops → functions" },
                { label: "Visualization", sub: "numbers become charts, charts become stories" },
                { label: "Sentiment project", sub: "reviews in, positive/negative out" },
              ]}
            />
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow">Why Python?</p>
          <h3 className="mt-2 text-2xl font-bold">Four reasons this course speaks Python</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {WHY_PYTHON.map((r) => (
              <div key={r.k} className="rounded-xl p-4" style={{ background: "#fbf3e3", border: "1px dashed #e5c79d" }}>
                <p className="font-bold text-[#8a4508]">{r.k}</p>
                <p className="mt-1 text-[.86rem] text-[#2b2014]">{r.v}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <p className="eyebrow mb-3">A taste of the finale — sentiment analysis, in eight lines</p>
        <CodeBlock
          title="sentiment_teaser.py"
          code={`review = "the camera is amazing but the battery is terrible"

positive = ["amazing", "great", "love", "good"]
negative = ["terrible", "bad", "hate", "worst"]

score = sum(w in review for w in positive) - sum(w in review for w in negative)
verdict = "positive 😊" if score > 0 else "negative 😞" if score < 0 else "neutral"

print(f"score = {score:+d} → sentiment: {verdict}")`}
          output={"score = +0 → sentiment: neutral"}
          note="One amazing and one terrible cancel out — score 0, verdict neutral. Change the review text and run it again: this word-scoring idea, scaled up with real data, is exactly your end-of-course project."
        />
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Concept check"
            q="Which of the following is NOT one of the course's four learning objectives?"
            options={[
              "Understanding computing fundamentals",
              "Writing real code in Python",
              "Designing computer hardware chips",
              "Building a sentiment-analysis project",
            ]}
            answer={2}
            explain="The four objectives are: computing fundamentals, programming with Python, data visualization, and the real-world sentiment-analysis project. Chip design belongs to electrical engineering, not this course."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q="Why is Python this course's primary language?"
            options={[
              "It is the fastest language for hardware",
              "It reads almost like English and powers AI and data science",
              "It was designed for banking regulation",
              "It never produces errors",
            ]}
            answer={1}
            explain="Python is the world's most popular language, powers AI/data-science/automation, and reads almost like English — with no advanced maths required, just curiosity."
          />
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <Takeaways
          items={[
            <>The course moves you <strong>from user to developer</strong> — understanding what happens behind every app you touch.</>,
            <>Four objectives: <strong>fundamentals · Python · visualization · the sentiment-analysis project</strong>.</>,
            <>Python wins because it is <strong>popular, AI-ready, readable</strong>, and needs <strong>no maths beyond curiosity</strong>.</>,
            <>You leave with skills companies actually hire for — <strong>practical, in-demand, career-opening</strong>.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   LECTURE 3 — #data-types
   ============================================================ */

/* Machine 1 — the format switcher: structured / semi / unstructured */
const FORMATS = [
  {
    key: "structured",
    label: "Structured",
    icon: <Table2 className="h-5 w-5" />,
    tagline: "Rows and columns, typed fields",
    color: "#c2410c",
    points: [
      "Organized into rows (records) and columns (fields) in tabular format",
      "Each field has a defined type — number, text, date, yes/no",
      "Easy to search, sort, filter and analyze",
      "Examples: CSV, Excel, Google Sheets, bank transactions, marksheets, e-commerce order tables",
    ],
    store: "DBMS / RDBMS — MySQL, PostgreSQL, Oracle",
    cost: "Lower processing cost, simpler analysis tools",
  },
  {
    key: "semi",
    label: "Semi-structured",
    icon: <FileJson className="h-5 w-5" />,
    tagline: "Markers, but no rigid table",
    color: "#d97706",
    points: [
      "Falls between the two extremes — some organization, not rows-and-columns",
      "Key-value pairs and tags give just enough structure",
      "Examples: JSON (web APIs), XML, HTML pages, emails (fixed headers, free-form body)",
    ],
    store: "NoSQL databases",
    cost: "Flexible — but needs parsing before analysis",
  },
  {
    key: "unstructured",
    label: "Unstructured",
    icon: <FileText className="h-5 w-5" />,
    tagline: "≈80% of all data generated globally",
    color: "#8c2f2f",
    points: [
      "No predefined format — cannot sit neatly in rows and columns",
      "Text: emails, chats, news, customer reviews, social posts",
      "Images: photos, X-rays, satellite imagery · Audio: calls, podcasts · Video: CCTV, lectures",
      "Sensor streams: raw IoT readings without labels",
    ],
    store: "Specialized databases + NLP / computer vision pipelines",
    cost: "Higher processing cost — needs transformers for text, vision models for images",
  },
];

function FormatSwitcher() {
  const [active, setActive] = useState(0);
  const f = FORMATS[active];
  return (
    <div className="rounded-2xl p-5" style={{ background: "#fbf3e3", border: "1px dashed #e5c79d" }}>
      <div className="flex flex-wrap gap-2">
        {FORMATS.map((fr, i) => (
          <button
            key={fr.key}
            onClick={() => setActive(i)}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[.82rem] font-bold transition-all"
            style={
              active === i
                ? { background: fr.color, color: "#fff7ec", boxShadow: "0 8px 18px -8px rgba(194,65,12,.55)" }
                : { background: "#fff", color: "#8a4508", border: "1px solid #e5c79d" }
            }
          >
            {fr.icon}
            {fr.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={f.key}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22 }}
          className="mt-4"
        >
          <p className="text-[.95rem] font-bold" style={{ color: f.color }}>
            {f.tagline}
          </p>
          <ul className="mt-3 grid gap-2 text-[.88rem] leading-relaxed text-[#2b2014]">
            {f.points.map((p) => (
              <li key={p} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: f.color }} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2 text-[.78rem]">
            <Pill>
              <Database className="mr-1 inline h-3.5 w-3.5" /> stored in: {f.store}
            </Pill>
            <Pill>{f.cost}</Pill>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* Machine 2 — the time machine: cross-sectional vs panel vs time-series */
type TimeCell = { subject: string; periods: (number | null)[] };
const TIME_MODES = [
  {
    key: "cross",
    label: "Cross-sectional",
    tagline: "Many subjects · ONE point in time — a snapshot",
    example: "A survey of 500 students in Delhi on June 1, 2025",
    limit: "Compare across subjects, but cannot track change over time",
  },
  {
    key: "panel",
    label: "Panel (longitudinal)",
    tagline: "Many subjects · MANY periods — breadth + trend",
    example: "Monthly marks of students tracked over six months · NREGA records · IMF data across countries and years",
    limit: "The most information-rich: compare subjects AND watch them improve or decline",
  },
  {
    key: "series",
    label: "Time series",
    tagline: "ONE subject · MANY periods — sequence matters",
    example: "Daily closing stock prices · ECG heartbeats · step counts · electricity meter readings",
    limit: "Reveals trends, cycles and sudden shocks for a single entity",
  },
];

function TimeMachine() {
  const [mode, setMode] = useState<string>("panel");
  const subjects = ["Asha", "Bilal", "Chen", "Divya"];
  const periods = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const cells: Record<string, TimeCell[]> = {
    cross: subjects.map((s) => ({ subject: s, periods: [72 + Math.floor(Math.random() * 20), null, null, null, null, null] })),
    panel: subjects.map((s, si) => ({
      subject: s,
      periods: periods.map((_, pi) => 60 + si * 5 + pi * 3),
    })),
    series: subjects.slice(0, 1).map((s) => ({
      subject: s,
      periods: periods.map((_, pi) => 50 + pi * 6),
    })),
  };
  const shown = subjects.map((s, si) => ({
    subject: s,
    periods:
      mode === "cross"
        ? cells.cross[si].periods
        : mode === "panel"
        ? cells.panel[si].periods
        : si === 0
        ? cells.series[0].periods
        : periods.map(() => null),
  }));
  const m = TIME_MODES.find((t) => t.key === mode) ?? TIME_MODES[1];
  return (
    <div className="rounded-2xl p-5" style={{ background: "#fbf3e3", border: "1px dashed #e5c79d" }}>
      <div className="flex flex-wrap gap-2">
        {TIME_MODES.map((tm) => (
          <button
            key={tm.key}
            onClick={() => setMode(tm.key)}
            className="rounded-full px-4 py-2 text-[.82rem] font-bold transition-all"
            style={
              mode === tm.key
                ? { background: "#c2410c", color: "#fff7ec", boxShadow: "0 8px 18px -8px rgba(194,65,12,.55)" }
                : { background: "#fff", color: "#8a4508", border: "1px solid #e5c79d" }
            }
          >
            {tm.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-[.9rem] font-bold text-[#8a4508]">{m.tagline}</p>

      {/* the grid */}
      <div className="mt-4 overflow-x-auto">
        <table className="warm-table min-w-[520px]">
          <thead>
            <tr>
              <th>student</th>
              {periods.map((p) => (
                <th key={p}>{p}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shown.map((row) => (
              <tr key={row.subject}>
                <td className="font-bold text-[#8a4508]">{row.subject}</td>
                {row.periods.map((v, i) => (
                  <td key={i} className="text-center font-mono-warm text-[.8rem]">
                    {v === null ? <span className="text-[#c9ab84]">—</span> : v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 grid gap-2 text-[.85rem] text-[#2b2014] sm:grid-cols-2">
        <Callout kind="story" title={`Example`}>
          {m.example}
        </Callout>
        <Callout kind="insight" title="What it can & can't do">
          {m.limit}
        </Callout>
      </div>
    </div>
  );
}

export function DataTypesSection() {
  return (
    <Section id="data-types">
      <SectionHead
        eyebrow="Lecture 3 · data, classified"
        title={
          <>
            Data, <span className="grad-text">classified</span> — the taxonomy that decides everything
          </>
        }
        lead="Before any processing, you must know what KIND of data you hold — because the type determines which operations are valid, which tools you need, and what the analysis will cost."
      />

      <Reveal>
        <Callout kind="why" title="Why classification comes first">
          You cannot compute a <strong>mean</strong> of blood groups, and averaging a
          &ldquo;city of birth&rdquo; yields nothing meaningful. Type of data determines which
          operations are meaningful and valid — proper classification ensures appropriate
          analysis methods and reliable conclusions.
        </Callout>
      </Reveal>

      <ReadStep n="1" title="Classification 1 — by format" sub="Structured · semi-structured · unstructured" />
      <Reveal>
        <FormatSwitcher />
      </Reveal>

      <Reveal className="mt-6">
        <div className="rounded-2xl p-5" style={{ background: "#3e2c1d" }}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[.9rem] font-bold text-[#f5e6cd]">The 80% problem</p>
            <div className="flex flex-wrap gap-2 text-[.75rem] text-[#e9d7bf]">
              <span className="inline-flex items-center gap-1.5"><FileText className="h-3.5 w-3.5" /> text</span>
              <span className="inline-flex items-center gap-1.5"><ImageIcon className="h-3.5 w-3.5" /> images</span>
              <span className="inline-flex items-center gap-1.5"><Music className="h-3.5 w-3.5" /> audio</span>
              <span className="inline-flex items-center gap-1.5"><Video className="h-3.5 w-3.5" /> video</span>
              <span className="inline-flex items-center gap-1.5"><Braces className="h-3.5 w-3.5" /> sensor streams</span>
            </div>
          </div>
          <div className="mt-3 h-8 w-full overflow-hidden rounded-full" style={{ background: "rgba(255,236,210,.12)" }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="flex h-full items-center justify-end pr-3 text-[.72rem] font-black text-white"
              style={{ background: "linear-gradient(90deg,#c2410c,#ea580c)" }}
            >
              ≈80% of all data generated globally is UNSTRUCTURED
            </motion.div>
          </div>
        </div>
      </Reveal>

      <ReadStep n="2" title="Classification 2 — across time" sub="Cross-sectional · panel · time series — click each and watch the grid change" />
      <Reveal>
        <TimeMachine />
      </Reveal>

      <ReadStep n="3" title="Classification 3 — by nature" sub="Quantitative (measurable) vs qualitative (categorical)" />
      <Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="card-warm p-6">
            <p className="font-black uppercase tracking-[.14em] text-[#c2410c]">Quantitative — quant</p>
            <p className="mt-1 text-[.86rem] text-muted-warm">Numerical and measurable. You can count it or measure it.</p>
            <div className="mt-4 grid gap-3">
              <div className="rounded-xl p-4" style={{ background: "#fbf3e3", border: "1px dashed #e5c79d" }}>
                <p className="font-bold text-[#8a4508]">Discrete</p>
                <p className="text-[.85rem] text-[#2b2014]">Countable whole numbers — 30 students, 3 goals, 47 apps</p>
              </div>
              <div className="rounded-xl p-4" style={{ background: "#fbf3e3", border: "1px dashed #e5c79d" }}>
                <p className="font-bold text-[#8a4508]">Continuous</p>
                <p className="text-[.85rem] text-[#2b2014]">Any value in a range, decimals allowed — height 172.4 cm, temperature 36.8°C, time 9.5 s</p>
              </div>
            </div>
            <p className="mt-4 text-[.85rem] text-[#2b2014]">
              Operations: mean, median, standard deviation, correlation. Collected via surveys; answers{" "}
              <em>what · how often · how many · how much</em>. Quick to analyze, generalizable with representative samples.
            </p>
          </div>
          <div className="card-warm p-6">
            <p className="font-black uppercase tracking-[.14em] text-[#8a4508]">Qualitative — qual</p>
            <p className="mt-1 text-[.86rem] text-muted-warm">Categorical and non-numerical — labels, qualities, opinions.</p>
            <div className="mt-4 grid gap-3">
              <div className="rounded-xl p-4" style={{ background: "#fbf3e3", border: "1px dashed #e5c79d" }}>
                <p className="font-bold text-[#8a4508]">Nominal — no natural order</p>
                <p className="text-[.85rem] text-[#2b2014]">Blood group A/B/AB/O, city of birth, phone brand. Operations: mode, frequency count, chi-square</p>
              </div>
              <div className="rounded-xl p-4" style={{ background: "#fbf3e3", border: "1px dashed #e5c79d" }}>
                <p className="font-bold text-[#8a4508]">Ordinal — meaningful order, unequal gaps</p>
                <p className="text-[.85rem] text-[#2b2014]">Amazon stars 1–5, education level, satisfaction: poor/fair/good/excellent</p>
              </div>
            </div>
            <p className="mt-4 text-[.85rem] text-[#2b2014]">
              Deep contextual insight, collected via interviews; answers <em>how · why</em>. Costs: prone to researcher
              bias, needs thematic/content analysis, interpretation is subjective.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <p className="eyebrow mb-3">The taxonomy, in runnable Python</p>
        <CodeBlock
          title="data_shapes.py"
          code={`# The three formats, living in one program:
structured = [                      # rows × columns — a table
    {"roll": 1, "name": "Asha",    "marks": 88},
    {"roll": 2, "name": "Bilal",   "marks": 91},
]
semi = {"course": "FoC", "quiz": 2, "weightage": 0.30}   # JSON-shaped
unstructured = "the lecture was brilliant but the quiz was tough"  # free text

print(len(structured), "rows ·", len(structured[0]), "fields per row")
print(type(semi).__name__, "→ keys:", list(semi.keys()))
print("words in the review:", len(unstructured.split()))`}
          output={"2 rows · 3 fields per row\ndict → keys: ['course', 'quiz', 'weightage']\nwords in the review: 10"}
          note="Same course, three shapes: a table you can sort and aggregate, a JSON payload an API would return, and free text that needs word-counting — each shape invites different processing."
        />
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Concept check"
            q="Amazon star ratings (1–5) are qualitative data. Which subtype — and why can't you take a strict mean of 'experiences'?"
            options={["Nominal — no order exists", "Ordinal — order is meaningful but the gaps between stars are unequal", "Discrete quantitative", "Continuous quantitative"]}
            answer={1}
            explain="Stars rank (order is meaningful) but the distance between 3★ and 4★ isn't a fixed quantity — that's ordinal. It's still qualitative: no true measurement scale."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q="Monthly marks of the SAME 500 students tracked over six months is…"
            options={["Cross-sectional data", "Time-series data", "Panel (longitudinal) data", "Unstructured data"]}
            answer={2}
            explain="Panel data tracks multiple subjects over multiple time periods — combining cross-sectional breadth with trend analysis. Time series would follow ONE subject only."
          />
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <Takeaways
          items={[
            <>By <strong>format</strong>: structured (rows/columns), semi-structured (JSON/XML), unstructured — <strong>≈80% of global data</strong>.</>,
            <>By <strong>time</strong>: cross-sectional (one moment), panel (many subjects × many periods), time series (one subject over time).</>,
            <>By <strong>nature</strong>: quantitative (discrete/continuous — means and medians are legal) vs qualitative (nominal/ordinal — mode only).</>,
            <>The type of data <strong>determines the valid operations</strong> — classify first, analyze second.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
