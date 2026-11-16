"use client";

import React, { useState } from "react";
import {
  Braces,
  Cloud,
  Code2,
  Cpu,
  Database,
  Gamepad2,
  Globe,
  Mail,
  MonitorSmartphone,
  PlayCircle,
  Rocket,
  Sparkles,
  Terminal,
  Users,
  Workflow,
} from "lucide-react";
import { Reveal, Section, SectionHead, Callout, Quiz, StepsFlow, Takeaways } from "./ui";

/* ---------- Application software groups (L07) ---------- */
type AppGroup = { icon: React.ReactNode; k: string; points: string[] };

const APP_GROUPS: AppGroup[] = [
  {
    icon: <Mail className="h-5 w-5" />,
    k: "Communication software",
    points: [
      "Email clients — Gmail, Outlook: asynchronous communication using SMTP (Simple Mail Transfer Protocol) and IMAP (Internet Message Access Protocol)",
      "Instant messaging — WhatsApp, Telegram, Slack: real-time messaging with end-to-end encryption; Slack runs corporate collaboration",
      "Video conferencing — Zoom, Google Meet: real-time audio and video, powered by compression and synchronization algorithms",
    ],
  },
  {
    icon: <Globe className="h-5 w-5" />,
    k: "Web browsers",
    points: [
      "Parse and render HTML, CSS and JavaScript",
      "Manage multiple simultaneous network connections",
      "Provide developer tools for programmers",
      "Google Chrome, Mozilla Firefox, Safari",
    ],
  },
  {
    icon: <Gamepad2 className="h-5 w-5" />,
    k: "Entertainment software",
    points: [
      "Media players — VLC decodes and plays compressed audio and video formats in real time",
      "Audio streaming — Spotify streams compressed audio files",
      "Gaming — physics simulation, 3D rendering, AI for non-player characters, network synchronization",
      "Streaming platforms — YouTube, Netflix, Prime Video deliver video content on demand",
    ],
  },
];

const PRO_TABLE = [
  { domain: "Data science", sw: "Jupyter Notebook", alg: "Statistics, machine learning models", py: "Pandas, NumPy, scikit-learn" },
  { domain: "Design / CAD", sw: "AutoCAD, Figma, Photoshop", alg: "Vector mathematics, rendering", py: "PIL (Pillow), Cairo" },
  { domain: "Healthcare", sw: "Hospital information systems, PACS imaging", alg: "Signal processing, classification", py: "scikit-learn, OpenCV" },
  { domain: "Finance", sw: "Bloomberg Terminal, trading platforms", alg: "Time-series analysis, risk models", py: "Pandas, statsmodels" },
  { domain: "Engineering", sw: "MATLAB, SolidWorks — physical design and 3D printing", alg: "Numerical methods, simulation", py: "NumPy, SciPy" },
];

/* ---------- Interpreter vs compiler (L07 table) ---------- */
const INTERP_ASPECTS: [string, string][] = [
  ["Languages", "Python, JavaScript"],
  ["Translation process", "Translates source code line by line at runtime"],
  ["Error reporting", "Errors displayed as the program runs — partial output available even with errors"],
  ["Execution speed", "Slower execution — each line is translated every time it runs"],
  ["Debugging", "Easier to test and debug interactively, with immediate feedback"],
];

const COMP_ASPECTS: [string, string][] = [
  ["Languages", "C, C++, Java"],
  ["Translation process", "Translates the entire source code to machine code before execution"],
  ["Error reporting", "Errors found at compile time, before execution — no output if errors exist"],
  ["Execution speed", "Faster execution — compiled machine code runs directly on the CPU"],
  ["Debugging", "Harder to debug — an all-or-nothing execution model"],
];

function InterpCompiler() {
  const [side, setSide] = useState<"interp" | "comp">("interp");
  return (
    <div className="card-warm p-6 md:p-8">
      <p className="eyebrow">Two translators, two philosophies</p>
      <h3 className="mt-2 text-2xl font-bold text-[#f5e6cd]">Interpreter vs Compiler</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        <button
          onClick={() => setSide("interp")}
          className={`rounded-full px-5 py-2 text-[.82rem] font-bold transition ${side === "interp" ? "text-white shadow-md" : "bg-[#fbf3e3] text-[#7c4a12] hover:bg-[#f6e7cd]"}`}
          style={side === "interp" ? { background: "linear-gradient(135deg,#ea580c,#c2410c)" } : undefined}
          aria-pressed={side === "interp"}
        >
          Interpreter · Python, JavaScript
        </button>
        <button
          onClick={() => setSide("comp")}
          className={`rounded-full px-5 py-2 text-[.82rem] font-bold transition ${side === "comp" ? "text-white shadow-md" : "bg-[#fbf3e3] text-[#7c4a12] hover:bg-[#f6e7cd]"}`}
          style={side === "comp" ? { background: "linear-gradient(135deg,#ea580c,#c2410c)" } : undefined}
          aria-pressed={side === "comp"}
        >
          Compiler · C, C++, Java
        </button>
      </div>

      <div className="anim-pop mt-5 grid gap-3 md:grid-cols-2">
        {(side === "interp" ? INTERP_ASPECTS : COMP_ASPECTS).map(([k, v]) => (
          <div key={k} className="rounded-xl p-4" style={{ background: "#fffdf9", border: "1px dashed #e5c79d" }}>
            <p className="font-bold text-[#7c4a12]">{k}</p>
            <p className="mt-1 text-[.88rem] text-[#2b2014]">{v}</p>
          </div>
        ))}
      </div>

      <Callout dark kind="insight" title="The key difference">
        Python uses an <strong>interpreter</strong>, allowing line-by-line execution with
        immediate results — making it ideal for learning and interactive development.
      </Callout>
    </div>
  );
}

export function SoftwareSection() {
  return (
    <Section id="software" dark>
      <SectionHead
        dark
        eyebrow="Pillar 4 · The instructions"
        title={
          <>
            <span className="grad-text">Application software</span> — the programs you actually touch
          </>
        }
        lead="The software you actually touch: every app on our phone, every program on our laptop, every website we open is application software — built to help users accomplish specific tasks. From communication and browsers to professional tools, and the programming-language software that turns source code into running programs."
      />

      {/* application families */}
      <Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {APP_GROUPS.map((a) => (
            <div key={a.k} className="card-warm h-full p-6">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: "rgba(245,158,11,.15)", color: "#f5c889" }}>
                  {a.icon}
                </span>
                <h3 className="text-lg font-bold text-[#f5e6cd]">{a.k}</h3>
              </div>
              <ul className="mt-3 grid gap-1.5 text-[.85rem] leading-relaxed text-[#cbb392]">
                {a.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>

      {/* professional */}
      <Reveal className="mt-10">
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow" style={{ color: "#f5c889" }}>Specialized / professional software</p>
          <h3 className="mt-2 text-2xl font-bold text-[#f5e6cd]">Where domains meet algorithms meet Python</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="warm-table min-w-[720px]">
              <thead>
                <tr><th>Domain</th><th>Software examples</th><th>Key algorithms used</th><th>Python connection</th></tr>
              </thead>
              <tbody>
                {PRO_TABLE.map((r) => (
                  <tr key={r.domain}>
                    <td className="font-bold text-[#7c4a12]">{r.domain}</td>
                    <td>{r.sw}</td>
                    <td>{r.alg}</td>
                    <td className="font-mono-warm text-[.8rem]">{r.py}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[.85rem] text-[#cbb392]">
            Notice the last column: whatever field you enter, <strong>Python follows you in</strong>.
          </p>
        </div>
      </Reveal>

      {/* language tooling */}
      <Reveal className="mt-10">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="card-warm p-6">
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5" style={{ color: "#f5c889" }} />
              <h3 className="text-lg font-bold text-[#f5e6cd]">Source code editor</h3>
            </div>
            <p className="mt-2 text-[.9rem] leading-relaxed text-[#cbb392]">
              Simple tools for <strong>writing and editing code</strong> — but they need separate
              programs for execution and debugging. Examples: <strong>Notepad, Sublime Text,
              VS Code</strong>.
            </p>
          </div>
          <div className="card-warm p-6">
            <div className="flex items-center gap-2">
              <Terminal className="h-5 w-5" style={{ color: "#f5c889" }} />
              <h3 className="text-lg font-bold text-[#f5e6cd]">IDE — Integrated Development Environment</h3>
            </div>
            <p className="mt-2 text-[.9rem] leading-relaxed text-[#cbb392]">
              The all-in-one tool: a <strong>code editor</strong> for writing, a{" "}
              <strong>code runner</strong> for executing, a <strong>debugger</strong> that pinpoints
              errors, and <strong>version control</strong>. Examples: <strong>PyCharm, VS Code,
              Google Colab</strong> (cloud-based).
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-10">
        <InterpCompiler />
      </Reveal>

      {/* quizzes */}
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Concept check"
            q="Gmail sends mail with SMTP and fetches it with IMAP. What kind of communication is email?"
            options={["Real-time messaging", "Asynchronous communication", "Live video streaming", "Peer-to-peer file sharing"]}
            answer={1}
            explain="Email clients like Gmail and Outlook enable asynchronous communication — the message waits for the recipient — using SMTP to send and IMAP to receive."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q="Which of the following is a job of a web browser?"
            options={["Compiling source code to machine code", "Parsing and rendering HTML, CSS and JavaScript", "Defragmenting the disk", "Allocating RAM to other programs"]}
            answer={1}
            explain="A browser parses and renders HTML, CSS and JavaScript, manages multiple simultaneous network connections, and provides developer tools — Chrome, Firefox and Safari all do this."
          />
        </Reveal>
        <Reveal delay={150}>
          <Quiz
            source="Concept check"
            q="A C program contains a syntax error. What happens when you compile and run it?"
            options={["It runs and shows partial output", "The error is found at compile time — no output is produced", "It runs, just slower than usual", "The error appears line by line as the program executes"]}
            answer={1}
            explain="Compilers translate the entire source code before execution — errors surface at compile time and nothing runs until they are fixed. That all-or-nothing model is why compiled programs produce no output when errors exist."
          />
        </Reveal>
        <Reveal delay={200}>
          <Quiz
            source="Concept check"
            q="An IDE combines four tools in one. Which set is correct?"
            options={["Browser, firewall, antivirus, VPN", "Editor, code runner, debugger, version control", "Spreadsheet, presentation, database, word processor", "Disk cleanup, partitioning, encryption, compression"]}
            answer={1}
            explain="An IDE is the all-in-one: a code editor for writing, a runner for executing, a debugger that pinpoints errors, and version control — PyCharm, VS Code and Google Colab all qualify."
          />
        </Reveal>
      </div>

      <Reveal className="mt-8">
        <Takeaways
          dark
          items={[
            <>Application software is <strong>everything users touch</strong> — communication (SMTP/IMAP, end-to-end encryption, video compression), browsers that render HTML/CSS/JavaScript, and entertainment from VLC to Netflix.</>,
            <>Professional software pairs <strong>domains with algorithms</strong> — and the Python column follows you into every one of them, from Pandas in finance to OpenCV in healthcare.</>,
            <>A <strong>source code editor</strong> writes and edits code but needs separate runners; an <strong>IDE</strong> does it all — editor, runner, debugger, version control (PyCharm, VS Code, Google Colab).</>,
            <>Interpreter (Python): <strong>line-by-line at runtime, immediate feedback</strong>. Compiler (C/C++/Java): <strong>whole program first, faster, all-or-nothing</strong>.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   FROM COMPUTING TO PROGRAMMING (L07)
   ============================================================ */
const COLAB = [
  {
    icon: <Cloud className="h-5 w-5" />,
    k: "Zero setup",
    v: "No installation required — Colab runs entirely in a web browser, needing only a Google account and internet access.",
  },
  {
    icon: <Braces className="h-5 w-5" />,
    k: "Cell-by-cell execution",
    v: "Code is organized into cells that execute individually, with output displayed immediately below each cell — simplifying debugging by isolating errors to specific cells.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    k: "AI assistance",
    v: "Integrated Google Gemini AI assistant — help with your code using plain-English prompts.",
  },
  {
    icon: <Database className="h-5 w-5" />,
    k: "Pre-installed libraries",
    v: "Common libraries like Pandas, NumPy and Matplotlib come pre-loaded — import and use them immediately.",
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    k: "Free hardware access",
    v: "Free access to powerful computing resources — CPUs, GPUs and TPUs — for machine learning and data science tasks.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    k: "Easy collaboration",
    v: "Files save directly to Google Drive — share them for real-time collaborative editing and feedback.",
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    k: "Popular for ML and data science",
    v: "Widely used for machine learning and data science projects, with easy model export capabilities.",
  },
];

export function ProgrammingSection() {
  return (
    <Section id="python">
      <SectionHead
        eyebrow="The bridge"
        title={
          <>
            From computing <span className="grad-text">to programming</span>
          </>
        }
        lead="Computing provides the concepts — data, algorithms, input/output. Programming provides the tool to implement those concepts. And Python is the language we’ll use to express our algorithms and build software."
      />

      <Reveal>
        <StepsFlow
          steps={[
            { label: "PROBLEM STATEMENT", sub: "define the problem to be solved", icon: <span className="text-lg font-black text-[#c2410c]">?</span> },
            { label: "ALGORITHM", sub: "create the logic and instructions", icon: <Workflow className="h-5 w-5" style={{ color: "#c2410c" }} /> },
            { label: "PROGRAMMING", sub: "use Python to translate the algorithm into machine-readable code", icon: <Code2 className="h-5 w-5" style={{ color: "#c2410c" }} /> },
            { label: "EXECUTION", sub: "the computer processes the code and produces output", icon: <PlayCircle className="h-5 w-5" style={{ color: "#c2410c" }} /> },
            { label: "SOLUTION", sub: "the output solves the original problem", icon: <MonitorSmartphone className="h-5 w-5" style={{ color: "#c2410c" }} /> },
          ]}
        />
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-6">
            <p className="eyebrow">Two definitions to memorize</p>
            <ul className="mt-3 grid gap-2 text-[.92rem] leading-relaxed text-[#2b2014]">
              <li>
                • <strong>Programming</strong> is the <em>act of writing the instructions</em>.
              </li>
              <li>
                • A <strong>programming language</strong> is a formal, precise way to{" "}
                <em>communicate algorithms to a computer</em>.
              </li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card-warm h-full p-6">
            <p className="eyebrow">Why Python as our first language?</p>
            <ul className="mt-3 grid gap-2 text-[.9rem] leading-relaxed text-[#2b2014]">
              <li>• <strong>Readability</strong> — Python syntax reads like English and closely mirrors natural thinking patterns</li>
              <li>• <strong>Ease of learning</strong> — fast to start, with no complex setup required</li>
              <li>• <strong>Versatility</strong> — used for web development, AI, data science, automation and scientific research</li>
              <li>• <strong>Cross-platform</strong> — runs seamlessly on Windows, macOS and Linux systems</li>
              <li>• <strong>Large community</strong> — millions of learners and professionals provide abundant resources and support</li>
            </ul>
            <p className="mt-3 text-[.8rem] text-muted-warm">
              Designed by <strong>Guido van Rossum</strong>, first released in{" "}
              <strong>1991</strong> — a high-level, general-purpose language emphasizing
              code readability, simplicity and ease of writing.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Colab */}
      <Reveal className="mt-10">
        <div className="card-warm p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="flex h-11 w-11 items-center justify-center rounded-xl text-lg font-black text-white"
              style={{ background: "linear-gradient(135deg,#f59e0b,#e8924a)" }}
            >
              Co
            </span>
            <h3 className="text-2xl font-bold">
              Google Colaboratory — <span className="grad-text">our laboratory in the cloud</span>
            </h3>
          </div>
          <p className="mt-3 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]">
            Google Colab is a <strong>free, cloud-based IDE platform</strong>, chosen for this
            course because it offers the full feature set below.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {COLAB.map((c) => (
              <div key={c.k} className="flex gap-3 rounded-xl p-4" style={{ background: "#fffdf9", border: "1px dashed #e5c79d" }}>
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: "linear-gradient(135deg,#fde8cf,#fbcf9f)", color: "#8a3d10" }}>
                  {c.icon}
                </span>
                <div>
                  <p className="font-bold text-[#7c4a12]">{c.k}</p>
                  <p className="mt-1 text-[.85rem] leading-relaxed text-[#2b2014]">{c.v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways
          items={[
            <>The <strong>5-step transition</strong>: problem statement → algorithm → programming → execution → solution. Computing provides the concepts, programming provides the tools, and <strong>Python is the bridge between human logic and machine execution</strong>.</>,
            <>The full software stack: <strong>system software manages hardware, utility software maintains and protects it</strong> (the system-software chapter), and <strong>application software helps users accomplish tasks</strong> — the layer this chapter toured.</>,
            <>Python is <strong>interpreted</strong>: line-by-line, run-and-see; C/C++ are <strong>compiled</strong>: whole program first, all-or-nothing but faster.</>,
            <>Colab removes every barrier to starting Python: zero setup, cell-by-cell execution, Gemini AI, pre-installed libraries, free GPUs/TPUs and one-click collaboration.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
