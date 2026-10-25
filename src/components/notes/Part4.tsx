"use client";

import React, { useState } from "react";
import {
  MonitorSmartphone,
  Server,
  Wrench,
  AppWindow,
  Code2,
  ShieldCheck,
  FileArchive,
  FolderTree,
  HardDrive,
  Mail,
  MessageCircle,
  Video,
  Globe,
  Gamepad2,
  PlayCircle,
  Table2,
  Presentation,
  Database,
  Terminal,
  Braces,
  ArrowRight,
  Cloud,
  Workflow,
  Sparkles,
} from "lucide-react";
import { Reveal, Section, SectionHead, Callout, Quiz, CodeBlock, StepsFlow, Takeaways } from "./ui";

/* ---------- OS responsibilities ---------- */
const OS_JOBS = [
  {
    icon: <Server className="h-5 w-5" />,
    k: "Process management",
    v: "Decides which programs run and for how long on the CPU. Your phone runs dozens of processes simultaneously — the OS schedules them in milliseconds.",
  },
  {
    icon: <HardDrive className="h-5 w-5" />,
    k: "Memory management",
    v: "Allocates RAM to programs, ensures they don’t interfere with each other, and reclaims memory when programs close.",
  },
  {
    icon: <FolderTree className="h-5 w-5" />,
    k: "File system",
    v: "Organizes storage into files and folders — a consistent way to save and load data regardless of the underlying hardware.",
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    k: "Device drivers",
    v: "Translate generic OS instructions into specific commands for specific hardware (printer, Wi-Fi chip, touchscreen). Drivers are why our phone works with thousands of devices.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    k: "Security",
    v: "Controls which programs and users can access which resources — prevents one app from reading another app’s private data.",
  },
  {
    icon: <AppWindow className="h-5 w-5" />,
    k: "User interface",
    v: "Provides the shell — command-line (terminal) or graphical (icons, windows, touch) — through which users and programs interact.",
  },
];

const OS_TABLE = [
  { os: "Windows 11", use: "Personal computers", kernel: "NT kernel", key: "Most widely used desktop OS; dominates enterprise" },
  { os: "macOS", use: "Apple desktops & laptops", kernel: "Unix-based (Darwin)", key: "Seamless Apple hardware–software integration" },
  { os: "Linux", use: "Servers, developer PCs, IoT", kernel: "Linux kernel", key: "Open source; runs ~96% of the world’s web servers" },
  { os: "Android", use: "Most of the world’s phones", kernel: "Linux kernel", key: "Open, customizable mobile ecosystem" },
  { os: "iOS", use: "Apple phones & tablets", kernel: "XNU (Unix)", key: "Closed ecosystem; known for security and performance" },
];

/* ---------- Utility software ---------- */
const UTILITIES = [
  {
    icon: <FolderTree className="h-5 w-5" />,
    k: "File management",
    v: "Windows Explorer & macOS Finder create, copy, move, rename and delete files and folders. Command-line twins do the same without graphics: ls, cp, mv, rm (Linux/macOS) and dir, copy, move (Windows).",
  },
  {
    icon: <HardDrive className="h-5 w-5" />,
    k: "Disk management",
    v: "Disk Cleanup removes temporary files, browser caches and unused installers. Defragmentation reorganizes fragmented files on an HDD to improve access speed (not needed for SSDs). Partitioning divides storage into logical sections — one for the OS, one for data. Disk checking scans for bad sectors and file-system errors.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    k: "Security",
    v: "Antivirus / antimalware scans for and removes malicious software using signature databases (known patterns) and heuristics (suspicious behavior). Firewalls monitor incoming and outgoing network traffic and block unauthorized connections. Encryption tools — BitLocker (Windows), FileVault (macOS) — make entire drives unreadable without the correct key. VPNs shield your identity and traffic on public networks.",
  },
  {
    icon: <FileArchive className="h-5 w-5" />,
    k: "Compression & archiving",
    v: "ZIP, 7-Zip and WinRAR reduce file sizes using lossless compression — identical data can be restored. Lossy compression (JPEG for images, MP3 for audio) permanently discards some data — inaudible frequencies, invisible pixels — that humans barely notice.",
  },
];

/* ---------- Applications ---------- */
const APPS = [
  {
    icon: <Table2 className="h-5 w-5" />,
    k: "Productivity",
    v: "Word processors (Microsoft Word, Google Docs) create, edit and format text documents. Spreadsheets (Excel, Google Sheets) organize, calculate and visualize tabular data — remember, every formula is an algorithm. Presentation tools (PowerPoint, Google Slides). Database tools (MySQL Workbench; even Excel tables create, store and manage structured data).",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    k: "Communication",
    v: "Email clients (Gmail, Outlook) communicate asynchronously over the internet using SMTP/IMAP protocols. Instant messaging (WhatsApp, Telegram, Slack) delivers real-time messages with end-to-end encryption. Video conferencing (Zoom, Google Meet) needs sophisticated compression and synchronization algorithms for real-time audio/video.",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    k: "Web browsers",
    v: "Chrome, Firefox, Safari — a browser parses HTML (document structure), CSS (visual styling) and JavaScript (behavior), manages dozens of simultaneous network connections, and provides developer tools for programmers.",
  },
  {
    icon: <Gamepad2 className="h-5 w-5" />,
    k: "Entertainment",
    v: "Media players (VLC, Spotify) decode compressed audio/video formats — MP3, AAC, H.264, H.265 — in real time. Games are among the most computationally intensive applications: physics simulation, 3D rendering, AI for non-player characters, network synchronization across players. Streaming platforms: Netflix, YouTube.",
  },
];

const PRO_TABLE = [
  { domain: "Data science", sw: "Jupyter Notebook, Tableau", alg: "Statistics, ML models", py: "pandas, numpy, matplotlib" },
  { domain: "Design / CAD", sw: "AutoCAD, Figma, Photoshop", alg: "Vector maths, rendering", py: "PIL/Pillow, cairo" },
  { domain: "Healthcare", sw: "Hospital info systems, PACS imaging", alg: "Signal processing, classification", py: "scikit-learn, OpenCV" },
  { domain: "Finance", sw: "Bloomberg Terminal, trading platforms", alg: "Time series, risk models", py: "pandas, statsmodels" },
  { domain: "Engineering", sw: "MATLAB, SolidWorks", alg: "Numerical methods, simulation", py: "NumPy, SciPy" },
];

/* ---------- Interpreter vs compiler ---------- */
function InterpCompiler() {
  const [side, setSide] = useState<"interp" | "comp">("interp");
  return (
    <div className="card-warm p-6 md:p-8">
      <p className="eyebrow">Two translators, two philosophies</p>
      <h3 className="mt-2 text-2xl font-bold">Interpreter vs Compiler</h3>
      <div className="mt-5 flex gap-2">
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

      {side === "interp" ? (
        <div className="anim-pop mt-5 grid gap-3 md:grid-cols-2">
          {[
            ["Translation", "Translates source code line by line at runtime"],
            ["Errors", "Found as the program runs"],
            ["Speed", "Slower execution — each line is translated every time it runs"],
            ["Debugging", "Easier to test and debug interactively"],
            ["Feel", "Run a line, see the result immediately — perfect for learning"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl p-4" style={{ background: "#fffdf9", border: "1px dashed #e5c79d" }}>
              <p className="font-bold text-[#7c4a12]">{k}</p>
              <p className="mt-1 text-[.88rem] text-[#2b2014]">{v}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="anim-pop mt-5 grid gap-3 md:grid-cols-2">
          {[
            ["Translation", "Translates the entire source code to machine code before running"],
            ["Errors", "Found at compile time — before the program ever runs"],
            ["Speed", "Faster execution — machine code runs directly on the CPU"],
            ["Debugging", "Harder to debug, but much faster"],
            ["Feel", "Compile first, then run — all-or-nothing"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl p-4" style={{ background: "#fffdf9", border: "1px dashed #e5c79d" }}>
              <p className="font-bold text-[#7c4a12]">{k}</p>
              <p className="mt-1 text-[.88rem] text-[#2b2014]">{v}</p>
            </div>
          ))}
        </div>
      )}
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
            <span className="grad-text">Software</span> — telling the hardware what to do
          </>
        }
        lead="Software is the set of instructions that tells hardware what to do. Without software, a computer is an inert collection of components. Software is what turns a general-purpose machine into a word processor, a navigation system, a video game — or an AI assistant."
      />

      {/* taxonomy */}
      <Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: <Server className="h-6 w-6" />, n: "System software", d: "Manages hardware resources and provides the platform on which all other software runs. The Operating System is the master program — it starts first, runs always, and never stops until you shut down.", hue: "#f59e0b" },
            { icon: <Wrench className="h-6 w-6" />, n: "Utility software", d: "Exists to maintain, optimize and protect the computing system itself. You interact with utilities directly when something needs managing.", hue: "#ea580c" },
            { icon: <AppWindow className="h-6 w-6" />, n: "Application software", d: "Built to help users accomplish specific tasks. Every app on our phone, every program on our laptop, every website we use.", hue: "#c2410c" },
          ].map((c, i) => (
            <div key={c.n} className="card-warm h-full p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: `rgba(245,158,11,.15)`, color: c.hue }}>
                {c.icon}
              </span>
              <h3 className="mt-3 text-lg font-bold">{c.n}</h3>
              <p className="mt-2 text-[.88rem] leading-relaxed text-[#cbb392]">{c.d}</p>
              {i === 0 ? (
                <p className="mt-3 text-[.74rem] font-bold uppercase tracking-[.16em] text-[#e8b878]">
                  + programming-language software: turns source code into running programs
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </Reveal>

      {/* OS */}
      <Reveal className="mt-12">
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow" style={{ color: "#f5c889" }}>System software</p>
          <h3 className="mt-2 text-2xl font-bold">What an operating system does</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {OS_JOBS.map((j) => (
              <div key={j.k} className="flex gap-3 rounded-xl p-4" style={{ background: "rgba(255,236,210,.05)", border: "1px solid rgba(255,214,160,.14)" }}>
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: "rgba(245,158,11,.15)", color: "#f5c889" }}>
                  {j.icon}
                </span>
                <div>
                  <p className="font-bold">{j.k}</p>
                  <p className="mt-1 text-[.86rem] leading-relaxed text-[#cbb392]">{j.v}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="warm-table min-w-[680px]">
              <thead>
                <tr><th>OS</th><th>Primary use</th><th>Kernel</th><th>Key feature</th></tr>
              </thead>
              <tbody>
                {OS_TABLE.map((r) => (
                  <tr key={r.os}>
                    <td className="font-bold text-[#7c4a12]">{r.os}</td>
                    <td>{r.use}</td>
                    <td>{r.kernel}</td>
                    <td>{r.key}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Callout dark kind="why" title="Python and the OS — an important connection">
            When we write a Python program, <strong>Python itself is a program running on
            the OS</strong>. When our program reads a file or prints to the screen, it{" "}
            <strong>asks the OS to do it</strong>. The OS is the intermediary between our
            code and the hardware.
          </Callout>
        </div>
      </Reveal>

      {/* utilities */}
      <Reveal className="mt-10">
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow" style={{ color: "#f5c889" }}>Utility software</p>
          <h3 className="mt-2 text-2xl font-bold">The maintenance crew</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {UTILITIES.map((u) => (
              <div key={u.k} className="flex gap-3 rounded-xl p-4" style={{ background: "rgba(255,236,210,.05)", border: "1px solid rgba(255,214,160,.14)" }}>
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: "rgba(245,158,11,.15)", color: "#f5c889" }}>
                  {u.icon}
                </span>
                <div>
                  <p className="font-bold">{u.k}</p>
                  <p className="mt-1 text-[.85rem] leading-relaxed text-[#cbb392]">{u.v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* applications */}
      <Reveal className="mt-10">
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow" style={{ color: "#f5c889" }}>Application software</p>
          <h3 className="mt-2 text-2xl font-bold">What you actually touch every day</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {APPS.map((a) => (
              <div key={a.k} className="flex gap-3 rounded-xl p-4" style={{ background: "rgba(255,236,210,.05)", border: "1px solid rgba(255,214,160,.14)" }}>
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ background: "rgba(245,158,11,.15)", color: "#f5c889" }}>
                  {a.icon}
                </span>
                <div>
                  <p className="font-bold">{a.k}</p>
                  <p className="mt-1 text-[.85rem] leading-relaxed text-[#cbb392]">{a.v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* professional */}
      <Reveal className="mt-10">
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow" style={{ color: "#f5c889" }}>Specialized / professional software</p>
          <h3 className="mt-2 text-2xl font-bold">Where domains meet algorithms meet Python</h3>
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
              <h3 className="text-lg font-bold">Source code editor</h3>
            </div>
            <p className="mt-2 text-[.9rem] leading-relaxed text-[#cbb392]">
              A text editor specialized for writing code. Examples: <strong>VS Code,
              Sublime Text, Notepad++</strong>. Fast, light, gets out of your way.
            </p>
          </div>
          <div className="card-warm p-6">
            <div className="flex items-center gap-2">
              <Terminal className="h-5 w-5" style={{ color: "#f5c889" }} />
              <h3 className="text-lg font-bold">IDE — Integrated Development Environment</h3>
            </div>
            <p className="mt-2 text-[.9rem] leading-relaxed text-[#cbb392]">
              An all-in-one tool combining a code editor, a way to run code, a debugger,
              and often version control. Examples: <strong>PyCharm</strong> (Python-specific),
              <strong> VS Code with extensions</strong>.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-10">
        <InterpCompiler />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   FROM COMPUTING TO PROGRAMMING
   ============================================================ */
const COLAB = [
  {
    icon: <Cloud className="h-5 w-5" />,
    k: "1 · Zero setup & installation",
    v: "Traditionally, learning Python meant navigating command lines, installing the right version, setting environment variables and downloading an IDE. Colab runs entirely in your web browser — nothing to download, install or configure. Google account + internet = writing Python.",
  },
  {
    icon: <Braces className="h-5 w-5" />,
    k: "2 · Cell-by-cell execution",
    v: "Traditional coding runs a massive block at once — one error hides in the whole. In Colab we write code in small, isolated blocks called cells. Run one at a time and see the output directly underneath. If a single line breaks, we fix that specific cell. Debugging becomes easy.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    k: "3 · Integrated AI assistant (Gemini)",
    v: "Google integrated its Gemini AI directly into the Colab interface — help is one prompt away.",
  },
  {
    icon: <Database className="h-5 w-5" />,
    k: "4 · Pre-installed libraries",
    v: "Colab comes pre-loaded with the most popular Python libraries — pandas, NumPy and Matplotlib. Just import and start using them immediately.",
  },
  {
    icon: <ArrowRight className="h-5 w-5" />,
    k: "5 · Easy sharing & collaboration",
    v: "Colab saves directly to Google Drive. Click Share, send a link, and a teacher, mentor or friend opens your exact environment — sees your code and even edits with you in real time.",
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
            { label: "PROBLEM", sub: "a well-defined question", icon: <span className="text-lg font-black text-[#c2410c]">?</span> },
            { label: "ALGORITHM", sub: "the method, in plain steps", icon: <Workflow className="h-5 w-5" style={{ color: "#c2410c" }} /> },
            { label: "PYTHON CODE", sub: "the method, made precise", icon: <Code2 className="h-5 w-5" style={{ color: "#c2410c" }} /> },
            { label: "SOLUTION", sub: "the useful result", icon: <MonitorSmartphone className="h-5 w-5" style={{ color: "#c2410c" }} /> },
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
              <li>• <strong>Readable</strong> — Python reads like English; clean syntax close to how we think</li>
              <li>• <strong>Fast to start</strong> — no complex setup; write a line, run it, see the result immediately</li>
              <li>• <strong>Universal</strong> — used in web, AI, data science, automation and scientific research</li>
              <li>• <strong>Cross-platform</strong> — runs seamlessly on Windows, macOS and Linux</li>
              <li>• <strong>Huge community</strong> — millions of learners and professionals; help is always available</li>
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
            Google Colab is a <strong>free, cloud-based IDE platform</strong>. It lets us
            write and execute Python code directly in the web browser, requires no setup,
            and provides free access to powerful hardware like <strong>GPUs and TPUs</strong>{" "}
            — which is why it’s incredibly popular for machine learning and data science.
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
            <>Software has four families: <strong>system</strong> (the OS), <strong>utility</strong> (maintenance crew), <strong>application</strong> (what users touch) and <strong>programming-language tooling</strong> (editors & IDEs).</>,
            <>The <strong>OS is the intermediary</strong> between your code and the hardware — every file read and every print goes through it.</>,
            <>Python is an <strong>interpreted</strong> language: line-by-line, run-and-see; C/C++ are <strong>compiled</strong>: all-or-nothing but faster.</>,
            <>Colab removes every barrier to starting Python: zero setup, cells, Gemini, pre-installed libraries and one-click sharing.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
