"use client";

/* ============================================================
   Shelf03Parts — the STAGING sections for reserved shelf 03.

   SCAFFOLD BUILD: these three sections exist to prove the
   subject shell is fully armed before the syllabus drops.
   When the real subject arrives, this file is replaced by the
   actual chapter parts (AtbParts1..6 style) — the hero keeps
   its structure, the recipe/kit sections retire.

   Every widget below is LIVE and pulled from the shared
   revision kit (src/components/notes/ui.tsx) — the same soul
   as shelves 01 and 02, wearing shelf 03's lime sigil.
   ============================================================ */

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BookOpenCheck,
  BookOpenText,
  Check,
  ClipboardList,
  Hourglass,
  Layers,
  ListChecks,
  MousePointerClick,
  PackageOpen,
  PenLine,
  Workflow,
} from "lucide-react";
import {
  Callout,
  Practice,
  Quiz,
  Reveal,
  Section,
  SectionHead,
  StepsFlow,
  Takeaways,
} from "@/components/notes/ui";

/* shelf 03's sigil — lime, matching its box on the Atlas shelf */
const LIME = {
  grad: "linear-gradient(135deg,#65a30d,#3f6212)",
  gradText: "linear-gradient(120deg,#4d7c0f,#84cc16 55%,#3f6212)",
  soft: "rgba(132,204,22,.16)",
  soft2: "rgba(101,163,13,.12)",
  soft3: "rgba(63,98,18,.10)",
  ink: "#3f6212",
};

/* ============================================================
   HERO — the staged shelf. Honest about what it is: the full
   revision engine, mounted and verified, waiting for a PDF.
   ============================================================ */
export function Shelf03Hero() {
  return (
    <header id="top" className="relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden px-4 pb-24 pt-16 sm:pb-16">
      {/* ambient washes — lime instead of the ember family */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full blur-3xl" style={{ background: LIME.soft }} />
        <div className="absolute -right-16 bottom-24 h-96 w-96 rounded-full blur-3xl" style={{ background: LIME.soft2 }} />
        <div className="absolute left-1/3 top-1/2 h-64 w-64 rounded-full blur-3xl" style={{ background: LIME.soft3 }} />
      </div>

      {/* animated backdrop — the drop path: a dashed route falling
          from the sky onto a shelf line, pulsing arrival nodes */}
      <svg aria-hidden viewBox="0 0 1200 620" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full">
        <motion.path
          d="M 180 -30 C 320 160 220 320 460 430 C 640 512 820 500 1010 560"
          fill="none" stroke="#a3b18a" strokeWidth="2" strokeDasharray="3 10" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.55 }}
          transition={{ duration: 2.6, ease: "easeInOut", delay: 0.4 }}
        />
        {[
          { x: 296, y: 210 },
          { x: 460, y: 430 },
          { x: 1010, y: 560 },
        ].map((p, i) => (
          <motion.circle
            key={i} cx={p.x} cy={p.y} r={6} fill="none" stroke={LIME.ink} strokeWidth={2}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
            animate={{ opacity: [0.2, 0.85, 0.2], scale: [1, 1.4, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.7 }}
          />
        ))}
        {/* the shelf line the subject will land on */}
        <motion.line
          x1="880" y1="560" x2="1140" y2="560"
          stroke={LIME.ink} strokeWidth="3" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1.6 }}
        />
      </svg>

      {/* the incoming parcel — bobbing gently above the shelf */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[16%] z-0 hidden md:block"
        animate={{ y: [0, -10, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span
          className="flex h-14 w-14 items-center justify-center rounded-2xl text-white"
          style={{ background: LIME.grad, boxShadow: "0 18px 40px -14px rgba(63,98,18,.55)" }}
        >
          <PackageOpen className="h-7 w-7" />
        </span>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="chip mx-auto">
            <BookOpenCheck className="h-3.5 w-3.5" />
            Shelf 03 · B.S. in Management and Technology · IIT Jodhpur
          </span>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            Reserved shelf — <br className="hidden sm:block" />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: LIME.gradText }}
            >
              armed &amp; staging
            </span>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-warm">
            Every Atlas subject starts exactly here: the whole revision engine — grouped
            navigation, reading path, quiz drills, pen-paper exam windows — mounted and
            verified <b>before</b> a single chapter exists. The syllabus drops, the chapters
            pour in, and the reserved box on the shelf unlocks.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#recipe"
              className="rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:scale-[1.03]"
              style={{ background: LIME.grad, boxShadow: "0 14px 30px -12px rgba(63,98,18,.55)" }}
            >
              See the pour recipe <ArrowRight className="ml-1 inline h-4 w-4" />
            </a>
            <a
              href="#practice"
              title="Two seed windows — the pen-paper engine is fully playable"
              className="group inline-flex items-center gap-2 rounded-full border border-[#d9e3c3] bg-[#fffdf9] px-7 py-3.5 text-sm font-bold transition hover:bg-[#f6faec]"
              style={{ color: LIME.ink }}
            >
              <PenLine className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" style={{ color: LIME.ink }} />
              Try a seed exam
            </a>
          </div>
        </Reveal>

        {/* staging meta — status / already armed */}
        <div className="mx-auto mt-12 grid max-w-3xl gap-4 md:grid-cols-2">
          <Reveal delay={360}>
            <div className="card-warm lift h-full p-5 text-left">
              <span className="chip"><Hourglass className="h-3.5 w-3.5" /> Status</span>
              <p className="mt-3 text-lg font-extrabold text-[#3e2c1d]">Staging — awaiting the syllabus</p>
              <p className="mt-1 text-[.82rem] leading-relaxed text-muted-warm">
                The subject name, chapters and question bank have not dropped yet.
                Nothing here is filler — the shell is real, the seeds are playable.
              </p>
              <p className="mt-2 text-[.78rem] font-semibold" style={{ color: LIME.ink }}>
                the moment the PDF lands, pouring begins
              </p>
            </div>
          </Reveal>
          <Reveal delay={430}>
            <div className="card-warm lift h-full p-5 text-left">
              <span className="chip"><ListChecks className="h-3.5 w-3.5" /> Already armed</span>
              <p className="mt-3 text-lg font-extrabold leading-snug text-[#3e2c1d]">
                The complete shelf engine
              </p>
              <p className="mt-2 text-[.82rem] leading-relaxed text-muted-warm">
                Grouped chapter nav · scroll-spy · progress rail · quiz drills · practice
                accordions · 2 seed exam windows · signature footer — shared with shelves 01 &amp; 02.
              </p>
              <p className="mt-2 text-[.78rem] leading-relaxed text-[#8a6b45]">
                Same design system, shelf 03&rsquo;s lime sigil.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={560}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {[
              ["0", "chapters — for now"],
              ["6", "seed questions"],
              ["2", "exam windows"],
            ].map(([n, l]) => (
              <div key={l} className="text-center">
                <p
                  className="bg-clip-text text-3xl font-black text-transparent"
                  style={{ backgroundImage: LIME.gradText }}
                >
                  {n}
                </p>
                <p className="text-[.72rem] font-bold uppercase tracking-[.18em] text-[#8a6b45]">{l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <a href="#recipe" aria-label="Scroll to the pour recipe" className="anim-bob rounded-full border border-[#ecd9bd] bg-[#fffdf9]/80 p-3" style={{ color: LIME.ink }}>
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </header>
  );
}

/* ============================================================
   THE POUR RECIPE (id="recipe") — what happens when the
   syllabus drops, and exactly which files get touched.
   ============================================================ */
const POUR_STEPS = [
  { label: "PDF drops", sub: "the syllabus lands", icon: <PackageOpen className="h-5 w-5" style={{ color: LIME.ink }} /> },
  { label: "Chapters mapped", sub: "numbered reading path", icon: <ClipboardList className="h-5 w-5" style={{ color: LIME.ink }} /> },
  { label: "Machines built", sub: "one pokeable diagram per concept", icon: <Workflow className="h-5 w-5" style={{ color: LIME.ink }} /> },
  { label: "Bank written", sub: "pen-paper questions per cluster", icon: <PenLine className="h-5 w-5" style={{ color: LIME.ink }} /> },
  { label: "Shelf flips live", sub: "the reserved box unlocks", icon: <Check className="h-5 w-5" style={{ color: LIME.ink }} /> },
];

const POUR_FILES = [
  { file: "shelf03/questions.ts", what: "seed banks → the real pen-paper question sets" },
  { file: "shelf03/Shelf03Parts.tsx", what: "staging sections → the real chapter parts" },
  { file: "shelf03/Shelf03App.tsx", what: "2 staging groups → the real chapter map" },
  { file: "atlas/subjects.ts", what: "status: soon → live — the box opens on the shelf" },
];

export function Shelf03RecipeSection() {
  return (
    <Section id="recipe">
      <SectionHead
        eyebrow="Staging build · shelf 03"
        title="The pour recipe"
        lead="Every shelf follows the same four-step pour. This page is step zero — the armed, verified mould that makes the rest fast."
      />

      <Reveal>
        <StepsFlow steps={POUR_STEPS} />
      </Reveal>

      <Reveal>
        <div className="mt-10">
          <Callout kind="insight" title="Why stage before the drop?">
            Because a shelf poured on a finished engine is <b>only</b> content work: no routing
            to wire, no design system to match, no exam engine to debug under deadline. Shelves
            01 and 02 proved the pattern — 17 and 19 chapters, 150 live questions between them.
            Shelf 03 starts from &ldquo;done&rdquo; instead of from zero.
          </Callout>
        </div>
      </Reveal>

      <Reveal>
        <div className="card-warm mt-8 p-6">
          <p className="eyebrow mb-4">The diff, in advance — what changes when the subject arrives</p>
          <ul className="grid gap-3">
            {POUR_FILES.map((f) => (
              <li key={f.file} className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                <code className="shrink-0 rounded-lg border border-[#e8dcc0] bg-[#fbf3e3] px-2.5 py-1 font-mono text-[.78rem] font-bold text-[#3f6212]">
                  {f.file}
                </code>
                <span className="text-[.86rem] leading-relaxed text-[#2b2014]">{f.what}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}

/* ============================================================
   THE ARMED KIT (id="kit") — everything that already works,
   demonstrated live: kit cards, a pokeable quiz, a drill.
   ============================================================ */
const KIT_CARDS = [
  {
    icon: Layers,
    title: "Grouped chapter navigation",
    desc: "Hover groups with per-cluster exam launchers, a scrolling chip strip on small screens, a full-screen index on mobile — scroll-spy tracks the active chapter with zero per-frame re-renders.",
  },
  {
    icon: PenLine,
    title: "Pen-paper exam engine",
    desc: "MCQ · write-the-output · short answer, with instant checking, model answers, a question navigator, a timer and a results report — the exact lineage that wrote 150 real questions for shelves 01 & 02.",
  },
  {
    icon: BookOpenText,
    title: "Reading-path kit",
    desc: "Numbered read-steps, section heads, callouts, takeaways, code panels and flows — the shared kit every chapter composes from, so new sections snap together like bricks.",
  },
  {
    icon: MousePointerClick,
    title: "Machines & drills",
    desc: "Interactive widgets and practice accordions per concept — the “poke it until it makes sense” layer that makes an Atlas page different from a PDF.",
  },
];

export function Shelf03KitSection() {
  return (
    <Section id="kit">
      <SectionHead
        eyebrow="Already live — poke it"
        title="The armed kit"
        lead="Everything below works right now, verified and shared with the other shelves. Only the subject content is waiting for its PDF."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {KIT_CARDS.map((c, i) => (
          <Reveal key={c.title} delay={i * 90}>
            <div className="card-warm lift h-full p-6">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-md"
                style={{ background: LIME.grad }}
              >
                <c.icon className="h-5 w-5" />
              </span>
              <p className="mt-3 text-[1.02rem] font-extrabold leading-tight text-[#3e2c1d]">{c.title}</p>
              <p className="mt-1.5 text-[.86rem] leading-relaxed text-muted-warm">{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Quiz
            q="Quick check — this staging page belongs to which shelf of The Atlas?"
            options={[
              "Shelf 01 — Foundations of Computing",
              "Shelf 02 — Algorithmic Thinking in Business",
              "Shelf 03 — the reserved one, waiting for its syllabus",
              "Shelf 06 — the last reserved box",
            ]}
            answer={2}
            explain="Shelf 03. The two live shelves are Foundations of Computing (amber, 17 chapters) and Algorithmic Thinking in Business (rose, 19 chapters); this lime staging build is reserved shelf 03 — engine armed, content pending."
            source="seed drill · the atlas"
          />
          <Practice
            title="Staging drills — answer before you peek"
            items={[
              {
                q: "Name the five steps of the pour recipe, in order.",
                hint: "a PDF, chapters, machines, a bank, and a flip",
              },
              {
                q: "Which single field in subjects.ts turns a reserved box into a clickable shelf?",
                hint: "it is currently the string \"soon\"",
              },
              {
                q: "Why are the exam windows seeded before the real questions exist?",
                hint: "engines are proven with seeds so the drop day is content-only",
              },
            ]}
          />
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-8">
          <Takeaways
            items={[
              "The shell, exam engine and design system are shared with shelves 01 & 02 — nothing is bespoke to throw away.",
              "Both seed windows are fully playable: timer, navigator, self-checking, model answers.",
              "Opening the shelf later is a one-line flip in subjects.ts — the box unlocks itself.",
            ]}
          />
        </div>
      </Reveal>
    </Section>
  );
}
