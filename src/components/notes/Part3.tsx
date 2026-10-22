"use client";

import React from "react";
import {
  Workflow,
  Coffee,
  Code2,
  Cpu,
  Zap,
  Keyboard,
  Mouse,
  Hand,
  Mic,
  Camera,
  Radar,
  HardDrive,
  MemoryStick,
  Lock,
  Printer,
  Volume2,
  Vibrate,
  Cog,
  Gauge,
  Layers3,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Reveal, Section, SectionHead, Callout, Quiz, CodeBlock } from "./ui";

/* ============================================================
   PILLAR 2 — ALGORITHM
   ============================================================ */
const PROPS = [
  {
    n: "1",
    name: "Finiteness",
    def: "The algorithm must terminate after a finite number of steps. It cannot run forever.",
    yes: "Start N=100 → divide by 2 → stop when N < 1. 100 → 50 → 25 → 12.5 → 6.25 → 3.125 → 1.5625 → 0.78… Stop.",
    no: "Read N, divide by 2, stop when N is exactly 0. From 8: 4 → 2 → 1 → 0.5 → 0.25… it never hits exactly 0 — an infinite loop.",
  },
  {
    n: "2",
    name: "Definiteness (Unambiguity)",
    def: "Every step must be precisely defined — no room for interpretation. The same step must produce the same result every time.",
    yes: "“Add exactly 5 grams of salt.” Precise, repeatable, unambiguous.",
    no: "“Add a little bit of salt.” How much is ‘a little’? People guess differently — computers cannot guess at all.",
  },
  {
    n: "3",
    name: "Input",
    def: "An algorithm takes zero or more inputs — values given to it before or during execution. Inputs define what the algorithm acts on.",
    yes: "Max of two numbers → the two numbers (A, B) · factorial of N → N · sort a list → the list · display ‘Hello World’ → zero inputs.",
    no: "An algorithm that silently invents its own data isn’t an algorithm — it’s a guess.",
  },
  {
    n: "4",
    name: "Output",
    def: "It must produce at least one output — the result of the computation. An algorithm with no output is pointless.",
    yes: "Max-of-two → the larger number · factorial → N! (5! = 120) · sorting → the sorted list · navigation → the step-by-step route.",
    no: "Steps that compute and discard, touching nothing in the world.",
  },
  {
    n: "5",
    name: "Effectiveness",
    def: "Every step must be basic enough to be carried out, in principle, by a person using pen and paper. No infinite resources, no physically impossible steps.",
    yes: "“Compare A with B. If A > B, output A; else output B.” Each step is a basic, executable operation.",
    no: "“Find the largest prime number” — there is none, so it can’t complete. “Ask 1 billion users simultaneously” — no single computer can do that in one step.",
  },
];

function EvenOddFlow() {
  const box = "rx";
  return (
    <svg viewBox="0 0 560 430" className="mx-auto w-full max-w-xl" role="img" aria-label="Even or odd algorithm flowchart">
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#c99a5b" />
        </marker>
      </defs>
      {/* start */}
      <ellipse cx="280" cy="34" rx="58" ry="22" fill="#c2410c" />
      <text x="280" y="39" textAnchor="middle" fill="#fff7ec" fontSize="13" fontWeight="700">START</text>
      <line x1="280" y1="56" x2="280" y2="84" stroke="#c99a5b" strokeWidth="2" markerEnd="url(#ah)" />
      {/* input */}
      <path d="M190 88 L370 88 L346 128 L166 128 Z" fill="#f0a04b" stroke="#c2410c" />
      <text x="268" y="112" textAnchor="middle" fill="#3e2c1d" fontSize="12" fontWeight="700">Read number N</text>
      <line x1="280" y1="128" x2="280" y2="160" stroke="#c99a5b" strokeWidth="2" markerEnd="url(#ah)" />
      {/* decision */}
      <path d="M280 162 L390 205 L280 248 L170 205 Z" fill="#b45309" />
      <text x="280" y="200" textAnchor="middle" fill="#fff7ec" fontSize="12" fontWeight="700">N mod 2 = 0?</text>
      <text x="280" y="216" textAnchor="middle" fill="#fde8cf" fontSize="9">is the remainder zero?</text>
      {/* yes branch */}
      <line x1="170" y1="205" x2="105" y2="205" stroke="#c99a5b" strokeWidth="2" />
      <line x1="105" y1="205" x2="105" y2="268" stroke="#c99a5b" strokeWidth="2" markerEnd="url(#ah)" />
      <text x="128" y="196" fill="#f5c889" fontSize="11" fontWeight="700">YES</text>
      <path d="M40 272 L170 272 L154 312 L24 312 Z" fill="#7c9a3e" />
      <text x="97" y="296" textAnchor="middle" fill="#fff7ec" fontSize="12" fontWeight="700">Print “Even”</text>
      {/* no branch */}
      <line x1="390" y1="205" x2="455" y2="205" stroke="#c99a5b" strokeWidth="2" />
      <line x1="455" y1="205" x2="455" y2="268" stroke="#c99a5b" strokeWidth="2" markerEnd="url(#ah)" />
      <text x="412" y="196" fill="#f5c889" fontSize="11" fontWeight="700">NO</text>
      <path d="M390 272 L520 272 L504 312 L374 312 Z" fill="#be4a4a" />
      <text x="447" y="296" textAnchor="middle" fill="#fff7ec" fontSize="12" fontWeight="700">Print “Odd”</text>
      {/* merge */}
      <line x1="97" y1="312" x2="97" y2="352" stroke="#c99a5b" strokeWidth="2" />
      <line x1="447" y1="312" x2="447" y2="352" stroke="#c99a5b" strokeWidth="2" />
      <line x1="97" y1="352" x2="447" y2="352" stroke="#c99a5b" strokeWidth="2" />
      <line x1="280" y1="352" x2="280" y2="372" stroke="#c99a5b" strokeWidth="2" markerEnd="url(#ah)" />
      <text x="272" y="345" textAnchor="end" fill="#c9a97e" fontSize="9">both paths meet here</text>
      {/* stop */}
      <ellipse cx="280" cy="396" rx="58" ry="22" fill="#3e2c1d" />
      <text x="280" y="401" textAnchor="middle" fill="#fff7ec" fontSize="13" fontWeight="700">STOP</text>
    </svg>
  );
}

export function AlgorithmSection() {
  return (
    <Section id="algorithm" dark>
      <SectionHead
        dark
        eyebrow="Pillar 2 · The intellectual core"
        title={
          <>
            <span className="grad-text">Algorithm</span> — the method for solving a problem
          </>
        }
        lead="An algorithm is the intellectual core of computing. Understanding algorithms deeply is the foundation of becoming a good programmer — the hardware just runs them fast."
      />

      {/* tea */}
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-7">
            <div className="flex items-center gap-3">
              <Coffee className="h-6 w-6" style={{ color: "#f5c889" }} />
              <h3 className="text-xl font-bold">Your first algorithm: making tea</h3>
            </div>
            <ol className="mt-4 grid gap-2">
              {["Boil water", "Add tea leaves", "Wait 3 minutes", "Add milk and sugar", "Pour and serve"].map(
                (s, i) => (
                  <li key={s} className="flex items-center gap-3">
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full text-[.72rem] font-bold"
                      style={{ background: "rgba(245,158,11,.18)", color: "#f5c889" }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-[.92rem] text-[#e9d7bf]">{s}</span>
                  </li>
                )
              )}
            </ol>
            <p className="mt-4 text-[.85rem] leading-relaxed text-[#cbb392]">
              Everyday life is full of algorithms — you’ve been writing them all along.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card-warm h-full p-7">
            <p className="eyebrow" style={{ color: "#f5c889" }}>Formal definition</p>
            <p className="mt-3 text-[1.05rem] leading-relaxed text-[#e9d7bf]">
              An algorithm is a <strong>finite, unambiguous, step-by-step procedure</strong>{" "}
              for solving a well-defined problem. It takes an <strong>input</strong>,
              processes it through a <strong>series of defined steps</strong>, and produces
              a <strong>correct output every time</strong> it is executed.
            </p>
            <div className="mt-4 grid gap-2 text-[.86rem] text-[#cbb392]">
              <p>• Algorithms <strong>exist independent of computers</strong> — a recipe, a dance routine, a long-division method.</p>
              <p>• A computer just executes them <strong>fast</strong> — billions of steps per second.</p>
              <p>• The quality of computing depends on the <strong>quality of the algorithm</strong>.</p>
              <p>• A bad algorithm gives a wrong or slow result <strong>no matter how powerful the hardware</strong>.</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* history */}
      <Reveal className="mt-10">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5" style={{ color: "#f5c889" }} />
            <h3 className="text-xl font-bold">A 9th-century Persian word on your Instagram feed</h3>
          </div>
          <p className="mt-3 max-w-4xl text-[.95rem] leading-relaxed text-[#e9d7bf]">
            The word <strong>algorithm</strong> comes from{" "}
            <strong>Muhammad ibn Musa al-Khwarizmi</strong>, a 9th-century Persian
            mathematician whose work on arithmetic and algebra introduced systematic
            problem-solving methods to the world. The word <strong>algebra</strong> also
            comes from the title of his book. His methods are the reason your feed is
            sorted at all.
          </p>
        </div>
      </Reveal>

      {/* flowchart */}
      <Reveal className="mt-10">
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow" style={{ color: "#f5c889" }}>Flowchart anatomy</p>
          <h3 className="mt-2 text-2xl font-bold">The Even / Odd algorithm</h3>
          <p className="mt-2 text-[.9rem] text-[#cbb392]">
            Four shapes cover almost every flowchart you will ever draw:
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              ["Oval", "start / stop"],
              ["Parallelogram", "input / output"],
              ["Rectangle", "process"],
              ["Diamond", "decision"],
            ].map(([a, b]) => (
              <span key={a} className="chip">
                <strong>{a}</strong> = {b}
              </span>
            ))}
          </div>
          <div className="mt-6 rounded-2xl p-4" style={{ background: "rgba(255,236,210,.05)" }}>
            <EvenOddFlow />
          </div>
        </div>
      </Reveal>

      {/* 5 properties */}
      <Reveal className="mt-12">
        <h3 className="text-2xl font-bold">
          The five essential properties — <span className="grad-text">F·D·I·O·E</span>
        </h3>
        <p className="mt-2 max-w-3xl text-[.92rem] text-[#cbb392]">
          Miss any one of these and it is not an algorithm — it is a hope.
        </p>
      </Reveal>
      <div className="mt-6 grid gap-5">
        {PROPS.map((p, i) => (
          <Reveal key={p.n} delay={i * 60}>
            <div className="card-warm p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-lg font-black"
                  style={{ background: "linear-gradient(135deg,#f59e0b,#c2410c)", color: "#fff7ec" }}
                >
                  {p.n}
                </span>
                <h4 className="text-xl font-bold">{p.name}</h4>
              </div>
              <p className="mt-2 text-[.92rem] leading-relaxed text-[#e9d7bf]">{p.def}</p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="rounded-xl p-3.5 text-[.85rem] leading-relaxed" style={{ background: "rgba(124,154,62,.12)", border: "1px solid rgba(124,154,62,.3)" }}>
                  <strong style={{ color: "#c3dd97" }}>Works:</strong> <span className="text-[#e9d7bf]">{p.yes}</span>
                </div>
                <div className="rounded-xl p-3.5 text-[.85rem] leading-relaxed" style={{ background: "rgba(190,74,74,.12)", border: "1px solid rgba(190,74,74,.3)" }}>
                  <strong style={{ color: "#f0a8a8" }}>Fails:</strong> <span className="text-[#e9d7bf]">{p.no}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <CodeBlock
          title="finiteness_trap.py — the infinite loop"
          dark
          runnable={false}
          code={`# A supposedly "finite" algorithm...
n = 8
while n != 0:      # stop when N is EXACTLY zero?
    n = n / 2      # 8 → 4 → 2 → 1 → 0.5 → 0.25 → ...
    print(n)       # never equals exactly 0!

# Violates Finiteness: Stop is never reached.`}
          output={"4.0\n2.0\n1.0\n0.5\n0.25\n0.125\n... (runs forever)"}
          note="Floating-point halving asymptotically approaches zero but never equals it. Contrast: stop when N < 1 — a condition that is guaranteed to become true. Termination conditions must be reachable."
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   PILLAR 3 — HARDWARE
   ============================================================ */
const SENSORS = [
  { name: "Accelerometer", what: "Detects movement and orientation", use: "screen rotation, step counting" },
  { name: "GPS", what: "Receives satellite signals to determine precise location", use: "Maps, Ola, Swiggy" },
  { name: "Gyroscope", what: "Detects rotational movement", use: "gaming, navigation, camera stabilization" },
  { name: "Fingerprint", what: "Captures biometric data", use: "authentication" },
  { name: "Barometer", what: "Measures air pressure", use: "altitude, weather apps" },
  { name: "Temperature", what: "Monitors device temperature", use: "prevents overheating" },
  { name: "Light sensor", what: "Measures ambient light", use: "auto screen brightness" },
  { name: "Proximity", what: "Detects when the phone is near your ear", use: "turns screen off during calls" },
];

const INPUT_DEVICES = [
  { icon: <Keyboard className="h-5 w-5" />, n: "Keyboard" },
  { icon: <Mouse className="h-5 w-5" />, n: "Mouse / Touchpad" },
  { icon: <Hand className="h-5 w-5" />, n: "Touchscreen" },
  { icon: <Mic className="h-5 w-5" />, n: "Microphone" },
  { icon: <Camera className="h-5 w-5" />, n: "Camera" },
  { icon: <Radar className="h-5 w-5" />, n: "Sensors" },
];

function CpuViz() {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-2 gap-3">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="cpu-core flex h-16 w-16 items-center justify-center rounded-xl border text-[.68rem] font-bold"
            style={{ borderColor: "#d8b284", animationDelay: `${i * 0.55}s`, color: "#7c4a12" }}
          >
            CORE {i + 1}
          </div>
        ))}
      </div>
      <p className="mt-3 text-[.78rem] font-bold uppercase tracking-[.18em] text-[#d9b88c]">
        CPU · few powerful cores, one complex task at a time
      </p>
    </div>
  );
}
function GpuViz() {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-10 gap-1.5">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className={`gpu-core h-4 w-4 rounded-[4px] ${i % 3 === 0 ? "gpu-core-on" : ""}`}
            style={{ animationDelay: `${(i % 17) * 0.18}s` }}
          />
        ))}
      </div>
      <p className="mt-3 text-[.78rem] font-bold uppercase tracking-[.18em] text-[#d9b88c]">
        GPU · thousands of small cores, one operation on millions of values at once
      </p>
    </div>
  );
}

export function HardwareSection() {
  return (
    <Section id="hardware">
      <SectionHead
        eyebrow="Pillar 3 · The physical foundation"
        title={
          <>
            <span className="grad-text">Hardware</span> — silicon that makes ideas run
          </>
        }
        lead="Hardware is the physical foundation of computing. Understanding it explains why memory management matters, why loops that run a billion times are slow, and why files persist after power-off — and it helps us write better software."
      />

      {/* AI + GPU intro */}
      <Reveal>
        <div
          className="card-warm p-7 md:p-9"
          style={{ background: "linear-gradient(150deg,#fffaf0,#fdeed6)" }}
        >
          <div className="flex items-center gap-3">
            <Zap className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">Why hardware decided the AI revolution</h3>
          </div>
          <p className="mt-3 max-w-4xl text-[.95rem] leading-relaxed text-[#2b2014]">
            The explosion of AI over the last decade wasn’t just a breakthrough in
            software — <strong>it was a triumph of hardware</strong>. At the absolute
            center sits the <strong className="term">Graphics Processing Unit (GPU)</strong>:
            designed for <strong>mass parallel processing</strong>, it breaks a complex
            task into thousands of smaller, simpler tasks and solves them all{" "}
            <strong>simultaneously</strong>. That raw parallel horsepower is what built
            the foundations of modern AI.
          </p>
        </div>
      </Reveal>

      {/* Input devices */}
      <Reveal className="mt-12">
        <h3 className="text-2xl font-bold">
          Input devices — <span className="grad-text">feeding data into the system</span>
        </h3>
        <p className="mt-2 max-w-3xl text-[.92rem] text-muted-warm">
          Input devices <strong>translate actions and information from the real world
          into digital signals</strong> the computer can process. Every interaction you
          have with a computing device starts at an input device.
        </p>
      </Reveal>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {INPUT_DEVICES.map((d, i) => (
          <Reveal key={d.n} delay={i * 60}>
            <div className="card-warm lift flex h-full flex-col items-center gap-2 p-4 text-center">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg,#fde8cf,#fbcf9f)", color: "#8a3d10" }}
              >
                {d.icon}
              </span>
              <p className="text-[.8rem] font-bold text-[#2b2014]">{d.n}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Sensors table */}
      <Reveal className="mt-8">
        <div className="card-warm overflow-hidden">
          <div className="px-6 pt-6 md:px-8">
            <h4 className="text-xl font-bold">Sensors — the invisible input devices in your pocket</h4>
          </div>
          <div className="mt-4 overflow-x-auto px-4 pb-6 md:px-8">
            <table className="warm-table min-w-[640px]">
              <thead>
                <tr><th>Sensor</th><th>What it does</th><th>Where you meet it</th></tr>
              </thead>
              <tbody>
                {SENSORS.map((s) => (
                  <tr key={s.name}>
                    <td className="font-bold text-[#7c4a12]">{s.name}</td>
                    <td>{s.what}</td>
                    <td>{s.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>

      {/* CPU anatomy */}
      <Reveal className="mt-12">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Cpu className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">The CPU — the general-purpose brain</h3>
          </div>
          <p className="mt-3 max-w-4xl text-[.95rem] leading-relaxed text-[#2b2014]">
            The CPU executes instructions <strong>one at a time</strong> (per core), and
            it only knows four families of moves:
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              { k: "Arithmetic", v: "addition, subtraction, multiplication, division — done by the ALU (Arithmetic Logic Unit)" },
              { k: "Logic", v: "AND, OR, NOT, comparisons (greater than, equal to) — also the ALU" },
              { k: "Data movement", v: "load data from memory, store data to memory" },
              { k: "Control", v: "decide which instruction to execute next — done by the Control Unit (CU)" },
            ].map((r) => (
              <div key={r.k} className="rounded-xl bg-[#fffdf9] p-4" style={{ border: "1px dashed #e5c79d" }}>
                <p className="font-bold text-[#7c4a12]">{r.k}</p>
                <p className="mt-1 text-[.87rem] leading-relaxed text-[#2b2014]">{r.v}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <Callout kind="insight" title="Speed">
              A modern CPU executes <strong>3–5 billion instructions per second</strong>{" "}
              (3–5 GHz clock). Modern chips carry <strong>4, 8, 16 or 24 cores</strong>,
              allowing multiple tasks simultaneously.
            </Callout>
            <Callout kind="why" title="Where Python fits">
              When we run a Python program, the <strong>Python interpreter translates
              our code into machine instructions</strong> that the CPU executes. Your
              elegant one-liner becomes billions of tiny hardware moves.
            </Callout>
          </div>
        </div>
      </Reveal>

      {/* CPU vs GPU */}
      <Reveal className="mt-10">
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow">Head to head</p>
          <h3 className="mt-2 text-2xl font-bold">CPU vs GPU — two philosophies of power</h3>
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl p-6" style={{ background: "#fffdf9", border: "1px solid #f0e2c8" }}>
              <CpuViz />
              <ul className="mt-5 grid gap-1.5 text-[.88rem] text-[#2b2014]">
                <li>• A few <strong>very powerful cores</strong> (4–24)</li>
                <li>• Optimized for <strong>complex sequential tasks</strong></li>
                <li>• Great at: running your operating system, your Python logic</li>
              </ul>
            </div>
            <div className="rounded-2xl p-6" style={{ background: "linear-gradient(160deg,#fff8ec,#fdeed6)", border: "1px solid #f0d9ba" }}>
              <GpuViz />
              <ul className="mt-5 grid gap-1.5 text-[.88rem] text-[#2b2014]">
                <li>• <strong>Thousands</strong> of small, simpler cores</li>
                <li>• Same operation on <strong>many data points simultaneously</strong></li>
                <li>• Original purpose: rendering millions of pixels at once. Modern AI: training neural networks — ChatGPT, image and video generators all train on GPUs</li>
              </ul>
            </div>
          </div>
          <Callout kind="insight" title="CUDA + Python = GPU power for everyone">
            NVIDIA’s CUDA platform and Python libraries like <strong>PyTorch</strong> and{" "}
            <strong>TensorFlow</strong> let programmers write GPU-accelerated code in
            Python — the same language you will learn in these notes.
          </Callout>
        </div>
      </Reveal>

      {/* Memory */}
      <Reveal className="mt-12">
        <h3 className="text-2xl font-bold">
          Memory — <span className="grad-text">where data lives while it’s being used</span>
        </h3>
      </Reveal>
      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <Reveal>
          <div className="card-warm flex h-full flex-col p-6">
            <div className="flex items-center gap-2">
              <MemoryStick className="h-5 w-5" style={{ color: "#c2410c" }} />
              <h4 className="text-lg font-bold">RAM — the working desk</h4>
            </div>
            <ul className="mt-3 grid flex-1 gap-2 text-[.87rem] text-[#2b2014]">
              <li>• <strong>Volatile:</strong> contents are lost when power is cut — when your phone dies, RAM is cleared</li>
              <li>• <strong>Fast:</strong> data can be read in nanoseconds — vastly faster than storage</li>
              <li>• <strong>Limited:</strong> phones ~6–12 GB, laptops ~8–32 GB</li>
              <li>• <strong>How it’s used:</strong> opening an app loads it from storage (slow) into RAM (fast) so the CPU can reach it quickly</li>
              <li>• <strong>For Python:</strong> your variables, lists and objects all live in RAM while the program runs</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="card-warm flex h-full flex-col p-6">
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5" style={{ color: "#c2410c" }} />
              <h4 className="text-lg font-bold">ROM — the permanent instructions</h4>
            </div>
            <ul className="mt-3 grid flex-1 gap-2 text-[.87rem] text-[#2b2014]">
              <li>• Contains <strong>firmware</strong> — permanent instructions burned in at the factory</li>
              <li>• Your phone’s <strong>bootloader</strong> (the code that runs before the OS starts) lives in ROM</li>
              <li>• <strong>Non-volatile</strong> — survives power loss</li>
              <li>• Cannot be modified during normal operation</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="card-warm flex h-full flex-col p-6">
            <div className="flex items-center gap-2">
              <HardDrive className="h-5 w-5" style={{ color: "#c2410c" }} />
              <h4 className="text-lg font-bold">Secondary storage — the long-term home</h4>
            </div>
            <ul className="mt-3 grid flex-1 gap-2 text-[.87rem] text-[#2b2014]">
              <li>• Where <strong>data lives permanently</strong>, even when the device is off</li>
              <li>• Your Python files, photos, music and databases are kept here</li>
              <li>• Types: <strong>HDD</strong> (spinning disks), <strong>SSD</strong> (flash, faster), <strong>cloud storage</strong>, USB drives / SD cards / optical discs</li>
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <div className="card-warm p-5 md:p-6">
          <p className="eyebrow">The journey of one file</p>
          <div className="mt-4 flex flex-col items-stretch gap-3 md:flex-row md:items-center">
            {[
              { t: "SSD / Cloud", s: "sleeping permanently", c: "#7a5b39" },
              { t: "RAM", s: "loaded when opened — nanosecond access", c: "#c2410c" },
              { t: "CPU + registers", s: "actively processed, billions/sec", c: "#d97706" },
              { t: "Output", s: "displayed to you", c: "#7c9a3e" },
            ].map((n, i, arr) => (
              <React.Fragment key={n.t}>
                <div className="flex-1 rounded-xl p-3 text-center" style={{ background: "#fffdf9", border: "1px solid #f0e2c8" }}>
                  <p className="font-bold" style={{ color: n.c }}>{n.t}</p>
                  <p className="text-[.74rem] text-muted-warm">{n.s}</p>
                </div>
                {i < arr.length - 1 ? <ArrowRight className="mx-auto hidden h-5 w-5 text-[#c2410c] md:block" /> : null}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Output devices */}
      <Reveal className="mt-12">
        <h3 className="text-2xl font-bold">
          Output devices — <span className="grad-text">results back to the world</span>
        </h3>
        <p className="mt-2 max-w-3xl text-[.92rem] text-muted-warm">
          Output devices take digital data <strong>from</strong> the computer and{" "}
          <strong>translate it into a form</strong> humans (or other machines) can use.
        </p>
      </Reveal>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {[
          { icon: <MonitorSmartphoneIcon />, n: "Monitor / Display" },
          { icon: <Printer className="h-5 w-5" />, n: "Printer" },
          { icon: <Volume2 className="h-5 w-5" />, n: "Speakers / Audio" },
          { icon: <Vibrate className="h-5 w-5" />, n: "Haptic feedback", note: "keyboard vibration is output too" },
          { icon: <Cog className="h-5 w-5" />, n: "Actuators & Motors" },
        ].map((d, i) => (
          <Reveal key={d.n} delay={i * 60}>
            <div className="card-warm lift flex h-full flex-col items-center gap-2 p-4 text-center">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg,#fde8cf,#fbcf9f)", color: "#8a3d10" }}
              >
                {d.icon}
              </span>
              <p className="text-[.8rem] font-bold text-[#2b2014]">{d.n}</p>
              {d.note ? <p className="text-[.68rem] text-muted-warm">{d.note}</p> : null}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <div className="grid gap-5 md:grid-cols-2">
          <Quiz
            source="Concept check"
            q="You lose unsaved work when the power cuts out. Which hardware property explains this?"
            options={["ROM is read-only", "RAM is volatile — contents vanish without power", "SSDs are too slow", "The CPU lacks cores"]}
            answer={1}
            explain="RAM is volatile: it holds your program, variables and open files only while powered. Save to secondary storage and the data persists in non-volatile memory."
          />
          <Quiz
            source="Concept check"
            q="Why do modern AI systems depend so heavily on GPUs?"
            options={[
              "GPUs have better marketing",
              "Training neural networks means doing the same math on billions of numbers simultaneously — GPU parallelism fits perfectly",
              "CPUs cannot do multiplication",
              "GPUs use less electricity overall",
            ]}
            answer={1}
            explain="A GPU’s thousands of small cores apply one operation to many data points at once — exactly the shape of neural-network training. CPUs have few powerful cores better suited to complex sequential logic."
          />
        </div>
      </Reveal>
    </Section>
  );
}

function MonitorSmartphoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="4" width="14" height="10" rx="1.5" />
      <path d="M6 18h6" />
      <path d="M9 14v4" />
      <rect x="17" y="8" width="5" height="11" rx="1.2" />
    </svg>
  );
}
