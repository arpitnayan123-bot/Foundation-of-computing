"use client";

/* ============================================================
   Economic & Business History — PART 5 (shelf 04 of The Atlas).
   The 28-lecture deck's new chapters: Lecture 1 (the course
   map), Lecture 10 (feudal Europe vs the zamindari, side by
   side) and Lecture 15 (the water frame and the birth of the
   factory).
   ============================================================ */

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Factory,
  Gavel,
  Landmark,
  Lightbulb,
  ScrollText,
  Shield,
  Users,
  Wallet,
  Wheat,
} from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import {
  EBH_BTN_GRAD,
  EBH_G,
  EbhCallout,
  EbhPanel,
  EbhQuiz,
  EbhReadStep,
} from "@/components/ebh/EbhParts1";

/* ============================================================
   CHAPTER — L1 · THE COURSE MAP  (#course-intro)
   with Machine — the Module Chain
   ============================================================ */
const MODULE_CHAIN = [
  { n: "M1", t: "The Lens", d: "Economics · business · history — and how each shapes the others (L1–L9)", weeks: "Lectures 1–9" },
  { n: "M2", t: "Early Systems", d: "Agrarian economies, guilds, and the world before machines (L8–L14)", weeks: "Lectures 8–14" },
  { n: "M3", t: "The Machine Age", d: "The Industrial Revolution: machines, cities, labour, systems (L12–L22)", weeks: "Lectures 12–22" },
  { n: "M4", t: "The Corporation", d: "Management thought, large corporations, the world wars (L23–L27)", weeks: "Lectures 23–27" },
  { n: "M5", t: "Indian Business", d: "Indian business history under colonial rule (L28 →)", weeks: "Lectures 28+" },
];

function ModuleChain() {
  const [open, setOpen] = useState(0);
  return (
    <div className="card-warm p-5 sm:p-6">
      <p className="text-center font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>
        The five modules — tap one to open its brief
      </p>
      {/* the chain */}
      <div className="mt-5 flex flex-col items-stretch gap-1.5 sm:flex-row sm:items-center sm:justify-between">
        {MODULE_CHAIN.map((m, i) => (
          <React.Fragment key={m.n}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-pressed={i === open}
              className="flex items-center gap-2 rounded-2xl border px-3 py-2.5 text-left transition-all duration-200"
              style={
                i === open
                  ? { borderColor: "transparent", background: EBH_BTN_GRAD, color: "#fff", boxShadow: "0 10px 22px -10px rgba(161,98,7,.55)" }
                  : { borderColor: "#e0cb84", background: "#fffdf6", color: "#8a6d4f" }
              }
            >
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-mono text-[.66rem] font-black"
                style={i === open ? { background: "rgba(255,255,255,.22)" } : { background: "#f2ecd9", color: EBH_G[700] }}
              >
                {m.n}
              </span>
              <span className="text-[.8rem] font-extrabold leading-tight">{m.t}</span>
            </button>
            {i < MODULE_CHAIN.length - 1 ? (
              <ArrowRight className="mx-auto h-4 w-4 shrink-0 rotate-90 sm:rotate-0" style={{ color: EBH_G[700] }} />
            ) : null}
          </React.Fragment>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={open}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.24 }}
          className="mt-4 rounded-2xl border p-4"
          style={{ borderColor: EBH_G.border, background: EBH_G.wash }}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-[1.02rem] font-black" style={{ color: EBH_G[800] }}>
              {MODULE_CHAIN[open].n} · {MODULE_CHAIN[open].t}
            </p>
            <span className="rounded-full border border-[#e0cb84] bg-white px-3 py-1 text-[.68rem] font-black" style={{ color: EBH_G[700] }}>
              {MODULE_CHAIN[open].weeks}
            </span>
          </div>
          <p className="mt-2 text-[.88rem] leading-relaxed text-[#2b2014]">{MODULE_CHAIN[open].d}</p>
        </motion.div>
      </AnimatePresence>
      {/* the animated baseline */}
      <svg aria-hidden viewBox="0 0 600 30" preserveAspectRatio="none" className="mt-3 h-6 w-full">
        <line x1="10" y1="15" x2="590" y2="15" stroke="#e0cb84" strokeWidth="2" />
        {[10, 155, 300, 445, 590].map((x, i) => (
          <motion.circle
            key={x} cx={x} cy={15} r={4.5} fill={i <= open ? "#a16207" : "#e0cb84"}
            initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.12, type: "spring", stiffness: 260, damping: 16 }}
          />
        ))}
      </svg>
    </div>
  );
}

export function EbhCourseIntroSection() {
  return (
    <Section id="course-intro">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 1 · Lecture 1 — the course map"
          title={
            <>
              Introduction to{" "}
              <span className="grad-gold">Economic &amp; Business History</span>
            </>
          }
          lead="Prof. Manu Kanchan, School of Management & Entrepreneurship, IIT Jodhpur. One course, one promise: by the end, the headlines of today's economy will read as history repeating — and you'll know why."
        />

        <EbhReadStep n="01" title="What the course covers" sub="Three main areas, one continuous story" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { icon: BookOpen, t: "Definition", d: "What economics and business mean in a historical context — the foundational terms and concepts." },
            { icon: ScrollText, t: "Evolution over time", d: "How economic ideas and business practices changed — and how those changes reshaped society's socio-cultural context." },
            { icon: Landmark, t: "Interconnection", d: "How economics and business influenced each other: economic developments shaping business practice, business innovations shaping economic thinking." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 90}>
              <div className="card-warm lift h-full p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md" style={{ background: EBH_BTN_GRAD }}>
                  <c.icon className="h-4.5 w-4.5" />
                </span>
                <p className="mt-3 text-[.95rem] font-extrabold text-[#3e2c1d]">{c.t}</p>
                <p className="mt-1 text-[.8rem] leading-relaxed text-muted-warm">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={80}>
          <div className="mt-4">
            <EbhCallout kind="insight" title="The broad topics on the syllabus">
              Agrarian economies · ancient trade routes · colonialism · the Industrial Revolution ·
              labour movements · business families · entrepreneurship history · modern corporations.
              Every one of them is a station on the same line — the story of how humans organised
              production, distribution and consumption.
            </EbhCallout>
          </div>
        </Reveal>

        <EbhReadStep n="02" title="The five modules" sub="The course is organised into two halves — a global story, then an Indian one" />
        <Reveal>
          <ModuleChain />
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="card-warm lift h-full p-5">
              <p className="text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>Economic History — global lens</p>
              <p className="mt-1.5 text-[.82rem] leading-relaxed text-muted-warm">
                How economic systems, rules and logic evolved — from Western Europe outward. The
                first three modules live here.
              </p>
            </div>
            <div className="card-warm lift h-full p-5">
              <p className="text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>Business History — Indian focus</p>
              <p className="mt-1.5 text-[.82rem] leading-relaxed text-muted-warm">
                How business organisations, strategies and structures developed — Indian examples
                and context from Module 4 onward. (India's own economic story spans 300–400 years.)
              </p>
            </div>
          </div>
        </Reveal>

        <EbhReadStep n="03" title="History is about why, not when" sub="Context · time · change — the three critical dimensions" />
        <EbhCallout kind="why" title="The method of the whole course">
          Historical change happens over <b>extended periods</b>, not overnight. LPG —
          Liberalisation, Privatisation, Globalisation — was initiated in the mid-1980s but fully
          implemented in 1990–1995 and beyond. The Industrial Revolution took <b>centuries</b> to
          manifest its effects. And the evidence lives in sources: policy documents, parliamentary
          debates, annual reports, court verdicts, advertisements, personal correspondence.{" "}
          <b>No mandatory textbook</b> — &ldquo;Global Economic History: A Very Short
          Introduction&rdquo; is recommended, nothing more.
        </EbhCallout>
        <Reveal delay={60}>
          <EbhPanel label="The why-questions this course answers" tone="sepia">
{`• Why did the Industrial Revolution happen in the UK, 17–18th century?
• Why did LPG policies emerge in India in 1991?
• Why did the guild system decline?
• Why do economic policies — and economic crashes — repeat in shape?`}
          </EbhPanel>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Lecture 1"
              q="The course has five modules. What is the split between the two halves of the course?"
              options={[
                "Five equal modules, all global",
                "First three modules: Western European and global economic development — modules four and five bring in Indian examples and context",
                "All five modules focus only on India",
                "The course has no modules — one continuous timeline",
              ]}
              answer={1}
              explain="Modules one to three hold the global lens — Western European and global economic development. Modules four and five incorporate Indian examples and context: business history with an Indian focus. Even a post-industrial sector like Indian pharma shows patterns influenced by early economic principles."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>The course covers <b>definition, evolution over time, and the economics–business interconnection</b> — across agrarian economies to modern corporations.</>,
              <>Five modules: <b>global story first (M1–M3), Indian business history second (M4–M5)</b>.</>,
              <>History = <b>context, time and change</b> — argued from evidence, never memorised.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER — L10 · FEUDAL EUROPE vs THE ZAMINDARI  (#feudal-zamindari)
   with Machine 03 — the two-ladders comparison
   ============================================================ */
const TWO_CHAINS = [
  {
    id: "feudal",
    title: "Feudal model — Western Europe",
    origin: "Internal, organic development",
    steps: [
      { t: "The Crown / King", d: "owns all land — ultimate authority", icon: CrownIcon },
      { t: "Lords & Nobles", d: "granted land — owe military protection & produce", icon: Shield },
      { t: "Knights (vassals)", d: "granted land by lords — owe service", icon: Gavel },
      { t: "Peasants & Serfs", d: "bound to the land — cannot leave, marry or move without permission", icon: Wheat },
    ],
    decisions: "Decentralised and local — lords decide crops and labour; production follows survival needs and tradition.",
  },
  {
    id: "zamindari",
    title: "Zamindari / colonial — India, 1700s–1947",
    origin: "Externally imposed by the British government",
    steps: [
      { t: "The British Government", d: "owns the land — decides from thousands of miles away", icon: CrownIcon },
      { t: "Zamindars", d: "intermediaries — collect revenue, extract rents", icon: Wallet },
      { t: "Cultivators & Tenants", d: "controlled — pushed toward cash crops (indigo, opium, cotton)", icon: Wheat },
    ],
    decisions: "Centralised and external — the British government decides what is produced, for a global market serving British industrial needs.",
  },
];

function CrownIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return <Landmark className={className} style={style} />;
}

function TwoChains() {
  const [side, setSide] = useState(0);
  const chain = TWO_CHAINS[side];
  return (
    <div className="card-warm p-5 sm:p-6">
      <p className="text-center font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>
        Machine 03 — two land systems, side by side
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {TWO_CHAINS.map((c, i) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setSide(i)}
            aria-pressed={i === side}
            className="rounded-2xl border px-3 py-2.5 text-[.82rem] font-extrabold transition-all duration-200"
            style={
              i === side
                ? { borderColor: "transparent", background: EBH_BTN_GRAD, color: "#fff", boxShadow: "0 10px 22px -10px rgba(161,98,7,.5)" }
                : { borderColor: "#e0cb84", background: "#fffdf6", color: "#8a6d4f" }
            }
          >
            {c.title.split("—")[0].trim()}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={chain.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.24 }}
          className="mt-4"
        >
          <div className="rounded-2xl border p-4" style={{ borderColor: EBH_G.border, background: EBH_G.wash }}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-[.98rem] font-black" style={{ color: EBH_G[800] }}>{chain.title}</p>
              <span className="rounded-full px-3 py-1 text-[.66rem] font-black" style={{ color: "#5a2a24", background: "#fbeae5" }}>
                {chain.origin}
              </span>
            </div>
            <div className="mt-3 space-y-2">
              {chain.steps.map((s, i) => (
                <motion.div
                  key={s.t}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.09, duration: 0.35 }}
                  className="flex items-center gap-3 rounded-xl border border-[#e0cb84] bg-white p-3"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white" style={{ background: EBH_BTN_GRAD }}>
                    <s.icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[.88rem] font-extrabold text-[#3e2c1d]">{s.t}</p>
                    <p className="text-[.76rem] leading-snug text-muted-warm">{s.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="mt-3 rounded-xl border border-[#e0cb84] bg-white p-3 text-[.82rem] leading-relaxed text-[#2b2014]">
              <b style={{ color: EBH_G[700] }}>Who decided what to produce: </b>
              {chain.decisions}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const LEDGER_ROWS: { k: string; f: string; z: string }[] = [
  { k: "Land ownership", f: "King grants land to nobles", z: "British government grants to zamindars" },
  { k: "Decision-making", f: "Decentralised — local lords", z: "Centralised, externally imposed" },
  { k: "Production basis", f: "Survival needs & tradition", z: "Global market demand (for Britain)" },
  { k: "Distribution", f: "Local, limited", z: "Extractive, global" },
  { k: "System origin", f: "Internal, organic development", z: "Externally imposed" },
  { k: "Labour status", f: "Serfs bound to the land", z: "Cultivators & tenants controlled" },
];

export function EbhFeudalZamindariSection() {
  return (
    <Section id="feudal-zamindari">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 2 · Lecture 10 — land ownership zoomed in"
          title={
            <>
              Feudal Europe &amp; the <span className="grad-gold">Zamindari</span>, side by side
            </>
          }
          lead="Lecture 8 asked who owned the land. Lecture 10 puts the two answers on one table — and reads the human cost printed in the margins: low life expectancy, high infant mortality, and a world that could not innovate."
        />

        <EbhReadStep n="01" title="The two ladders" sub="One grew from inside; one was bolted on from outside" />
        <Reveal>
          <TwoChains />
        </Reveal>

        <EbhReadStep n="02" title="The comparison ledger" sub="Six aspects — read them row by row" />
        <Reveal>
          <div className="card-warm overflow-hidden">
            <div className="grid grid-cols-[1.1fr_1.3fr_1.3fr] rounded-t-2xl border-b text-[.7rem] font-black uppercase tracking-[.1em]" style={{ borderColor: EBH_G.border, background: "#faf3d9", color: EBH_G[700] }}>
              <div className="px-3 py-2.5">Aspect</div>
              <div className="border-l px-3 py-2.5" style={{ borderColor: EBH_G.border }}>Feudal model</div>
              <div className="border-l px-3 py-2.5" style={{ borderColor: EBH_G.border }}>Colonial / zamindari</div>
            </div>
            {LEDGER_ROWS.map((r, i) => (
              <motion.div
                key={r.k}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className={`grid grid-cols-[1.1fr_1.3fr_1.3fr] text-[.8rem] leading-snug ${i < LEDGER_ROWS.length - 1 ? "border-b" : ""}`}
                style={{ borderColor: "#efe6cd" }}
              >
                <div className="px-3 py-2.5 font-extrabold text-[#3e2c1d]">{r.k}</div>
                <div className="border-l px-3 py-2.5 text-muted-warm" style={{ borderColor: "#efe6cd" }}>{r.f}</div>
                <div className="border-l px-3 py-2.5 text-muted-warm" style={{ borderColor: "#efe6cd" }}>{r.z}</div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <EbhReadStep n="03" title="The cost ledger — life inside both systems" sub="No incentive, no income, no mobility" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "No incentive to innovate", d: "No competition, no need to improve production methods or efficiency — innovation had no buyer." },
            { t: "Low life expectancy", d: "30–35 years, the direct arithmetic of harsh working conditions and limited resources." },
            { t: "High infant mortality", d: "Lack of resources for the majority population — families could not afford to raise children." },
            { t: "Labour immobility", d: "Workers could not move to pursue better opportunities — industrialisation needs mobile labour." },
            { t: "No disposable income", d: "All surplus went to elites; peasants had nothing extra to invest or spend." },
            { t: "Wealth stored in land only", d: "People invested in acquiring more land — not banking, commerce, or business." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 70}>
              <div className="h-full rounded-2xl border p-4" style={{ borderColor: "#e8a896", background: "#fbeae5" }}>
                <p className="text-[.88rem] font-extrabold" style={{ color: "#b3402c" }}>{c.t}</p>
                <p className="mt-1 text-[.8rem] leading-relaxed text-[#5a2a24]">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <EbhReadStep n="04" title="The six critical insights" sub="What to carry into every later lecture" />
        <Reveal>
          <EbhPanel label="Lecture 10 — the six insights" tone="sepia">
{`1. LAND AS CORE ASSET — wealth, status and power all grew from it
2. SOCIO-ECONOMIC INTEGRATION — land ownership decided social
   relationships, freedoms, entire life trajectories
3. LACK OF INNOVATION — no competition, no incentives, no
   disposable income → no new technologies
4. IMMOBILE LABOUR — bound labour made industrialisation impossible
5. EXTREME INEQUALITY — tiny elite held the surplus; the vast
   majority lived at subsistence
6. EXTERNAL CONTROL — the colonial system was imposed from
   outside, restructuring economies to serve distant powers`}
          </EbhPanel>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-4">
            <EbhCallout kind="story" title="Individual life, and the society it built">
              <b>The individual:</b> lives revolved around agricultural seasons; social
              relationships were dictated by land ownership; <b>freedom was restricted</b> —
              movement, marriage and livelihood controlled by lords; survival depended entirely on
              agricultural success and the lord&rsquo;s decisions.{" "}
              <b>The society:</b> a self-perpetuating hierarchy with clear class distinctions,
              social life intertwined with economic obligations, and little opportunity for upward
              mobility — until the guilds and craftsmen opened the next chapter.
            </EbhCallout>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Lecture 10"
              q="One sentence separates the two systems. Which is it?"
              options={[
                "The feudal system used money; the zamindari used barter",
                "The feudal system was decentralised, traditional and survival-based; the colonial system was centralised, externally imposed and market-oriented — but for foreign benefit",
                "The feudal system had no hierarchy; the zamindari had kings",
                "Both systems were identical in every respect",
              ]}
              answer={1}
              explain="The lecture's key difference: feudal — decentralised, traditional, survival-based production, an organic internal development. Colonial/zamindari — centralised, externally imposed, market-oriented production serving a global system and, ultimately, British industrial needs."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>Feudal = <b>organic and decentralised</b> (King → lords → knights → serfs). Zamindari = <b>imposed and centralised</b> (British state → zamindars → cultivators).</>,
              <>The cost ledger: <b>life expectancy 30–35, high infant mortality, no disposable income, immobile labour</b>, wealth buried in land.</>,
              <>Six insights — lead with <b>land as core asset</b> and close with <b>external control</b>; they explain why this world could not industrialise.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER — L15 · THE WATER FRAME & THE FACTORY  (#water-frame)
   with Machine 06 — the Power Ladder
   ============================================================ */
const POWER_STEPS = [
  {
    id: "muscle",
    label: "Phase 1 · Human muscle",
    years: "→ 1769",
    title: "The ceiling",
    body: "Spinning relied strictly on human muscle — limited in strength and speed. Even the Spinning Jenny was foot-powered: one worker, but still one worker's energy.",
    tone: "#5a2a24",
    bg: "#fbeae5",
  },
  {
    id: "water",
    label: "Phase 2 · Water power",
    years: "1769 →",
    title: "The liberation (with a catch)",
    body: "Arkwright's water frame shifts the power source to nature: more energy than muscle, machines run continuously without fatigue, heavier and more numerous machines at once — but the mill must sit beside a constant, perennial stream that doesn't freeze in winter.",
    tone: EBH_G[800],
    bg: "#fdf6dc",
  },
  {
    id: "steam",
    label: "Phase 3 · Steam",
    years: "→ next chapter",
    title: "The preview",
    body: "Steam power arrives next — and with it a new dependency: coal. The fossil-fuel era of production begins where the water era ends.",
    tone: "#3e2c1d",
    bg: "#f5f1e8",
  },
];

function PowerLadder() {
  const [stage, setStage] = useState(1);
  const s = POWER_STEPS[stage];
  return (
    <div className="card-warm p-5 sm:p-6">
      <p className="text-center font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>
        Machine 06 — the power ladder · three phases of energy
      </p>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {POWER_STEPS.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setStage(i)}
            aria-pressed={i === stage}
            className="rounded-2xl border px-2 py-3 text-center transition-all duration-200"
            style={
              i === stage
                ? { borderColor: "transparent", background: EBH_BTN_GRAD, color: "#fff", boxShadow: "0 10px 22px -10px rgba(161,98,7,.5)" }
                : { borderColor: "#e0cb84", background: "#fffdf6", color: "#8a6d4f" }
            }
          >
            <p className="text-[.78rem] font-black leading-tight">{p.label.split("· ")[1]}</p>
            <p className="mt-0.5 font-mono text-[.62rem] opacity-80">{p.years}</p>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={s.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.24 }}
          className="mt-4 rounded-2xl border p-5"
          style={{ borderColor: EBH_G.border, background: EBH_G.wash }}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-[1.02rem] font-black" style={{ color: s.tone }}>{s.title}</p>
            <span className="rounded-full px-3 py-1 text-[.68rem] font-black" style={{ color: s.tone, background: s.bg }}>
              {s.label}
            </span>
          </div>
          <p className="mt-2.5 text-[.88rem] leading-relaxed text-[#2b2014]">{s.body}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function useMillCount(target: number, duration = 700) {
  const [val, setVal] = useState(target);
  const fromRef = useRef(target);
  useEffect(() => {
    const from = fromRef.current;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(from + (target - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
      else fromRef.current = target;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return val;
}

function MillCascade() {
  const [idx, setIdx] = useState(2);
  const milestones = [
    { y: "1769", n: 1, label: "1 patent", note: "Arkwright patents the water frame — a monopoly on the machine itself." },
    { y: "1771", n: 1, label: "Cromford Mill opens", note: "The world's first water-powered cotton spinning mill, Derbyshire." },
    { y: "1788", n: 143, label: "143 Arkwright-type mills", note: "One year after the courts invalidated the patents, the floodgates open." },
    { y: "1800", n: 300, label: "300 massive factories", note: "Centralised complexes of 300–400 workers each — the factory system at scale." },
  ];
  const m = milestones[idx];
  const count = useMillCount(m.n);
  return (
    <div className="card-warm p-5 sm:p-6">
      <p className="text-center font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>
        Machine 07 — the mill cascade · from one patent to 300 factories
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {milestones.map((mm, i) => (
          <button
            key={mm.y}
            type="button"
            onClick={() => setIdx(i)}
            aria-pressed={i === idx}
            className="rounded-full border px-4 py-2 font-mono text-[.78rem] font-black transition-all duration-200"
            style={
              i === idx
                ? { borderColor: "transparent", background: EBH_BTN_GRAD, color: "#fff", boxShadow: "0 8px 18px -8px rgba(161,98,7,.55)" }
                : { borderColor: "#e0cb84", background: "#fffdf6", color: "#8a6d4f" }
            }
          >
            {mm.y}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={m.y}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22 }}
          className="mt-4 rounded-2xl border p-5 text-center"
          style={{ borderColor: EBH_G.border, background: EBH_G.wash }}
        >
          <p className="font-display text-5xl font-black" style={{ color: EBH_G[800] }}>{count}</p>
          <p className="mt-1 text-[.92rem] font-extrabold text-[#3e2c1d]">{m.label}</p>
          <p className="mx-auto mt-2 max-w-md text-[.82rem] leading-relaxed text-muted-warm">{m.note}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function EbhWaterFrameSection() {
  return (
    <Section id="water-frame">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 3 · Lecture 15 — the factory is born"
          title={
            <>
              The <span className="grad-gold">Water Frame</span> &amp; the birth of the factory
            </>
          }
          lead="The shuttle doubled weaving and the Jenny eightfold-ed spinning — but both still ran on human muscle. Richard Arkwright's water frame moved the power source to nature, and moved the worker out of the home."
        />

        <EbhReadStep n="01" title="Where we stand — and why machines were adopted" sub="Demand up, resistance loud, muscle still the engine" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { t: "Growing global demand", d: "Textile goods and rising populations needed more cloth than human hands could spin." },
            { t: "The putting-out ceiling", d: "Home-based production depended on human labour with restricted productivity." },
            { t: "Worker resistance", d: "Spinners and weavers protested against machines — grievances that would later feed the labour movement." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <div className="card-warm lift h-full p-5">
                <p className="text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>{c.t}</p>
                <p className="mt-1 text-[.82rem] leading-relaxed text-muted-warm">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <EbhReadStep n="02" title="1769 — Richard Arkwright patents the water frame" sub="Barber and wigmaker by trade; industrialist by instinct" />
        <EbhCallout kind="insight" title="The key transformation">
          The water frame <b>shifted the power source from human beings to natural resources</b> —
          the first water-powered cotton spinning machine. It represented a{" "}
          <b>fundamental change in production organisation</b>: machines could run continuously
          without fatigue, drive heavier and more numerous machines at once, and hold productivity
          steady all day — roughly <b>ten metres of cloth per hour</b>, with any drop below that
          signalling a machine problem to repair.
        </EbhCallout>
        <Reveal delay={60}>
          <div className="mt-4">
            <PowerLadder />
          </div>
        </Reveal>

        <EbhReadStep n="03" title="Production concentrates" sub="Mills follow the water — and workers follow the mills" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-5">
              <p className="text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>The location constraint</p>
              <ul className="mt-2 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm">
                <li>· Mills needed <b>constant, perennial water sources</b></li>
                <li>· Streams that <b>didn&rsquo;t freeze in winter</b> — for year-round, 24/7 operation</li>
                <li>· Machines too heavy for homes → <b>dedicated industrial spaces</b></li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm lift h-full p-5">
              <p className="text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>The factory, specified</p>
              <ul className="mt-2 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm">
                <li>· <b>300–400 workers</b> per facility</li>
                <li>· <b>25–40+ machines</b> powered by water</li>
                <li>· Continuous operation for extended periods — <b>mass production at unprecedented scale</b></li>
              </ul>
            </div>
          </Reveal>
        </div>

        <EbhReadStep n="04" title="Arkwright's business model" sub="Patents, mills, courts — and a cascade" />
        <Reveal>
          <MillCascade />
        </Reveal>
        <Reveal delay={60}>
          <div className="mt-4">
            <EbhPanel label="The patent ledger, 1769–1785">
{`1769   Initial patent — the water frame machine
1775   GRAND PATENT — covers the preparatory
       carding process too
↑      Other mill owners copy the technology;
       court cases fly both ways
1785   Patents INVALIDATED — the monopoly breaks
       Removal of restrictions → rapid expansion
       1788: 143 large-scale water mills
       1800: 300 massive centralised factories`}
            </EbhPanel>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="card-warm lift h-full p-5">
              <p className="text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>Cromford Mill — 1771</p>
              <p className="mt-1.5 text-[.82rem] leading-relaxed text-muted-warm">
                Derbyshire — the world&rsquo;s first water-powered cotton spinning mill, strategically
                placed in the <b>Derwent Valley</b>. Today a <b>UNESCO World Heritage Site</b>.
              </p>
            </div>
            <div className="card-warm lift h-full p-5">
              <p className="text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>Birkacre Mill — 1777</p>
              <p className="mt-1.5 text-[.82rem] leading-relaxed text-muted-warm">
                Lancashire — and in <b>1779 the machine-breaking riots</b> arrived: workers burned
                and destroyed mills (Arkwright&rsquo;s included), seeing machines as symbols of their
                exploitation.
              </p>
            </div>
          </div>
        </Reveal>

        <EbhReadStep n="05" title="What the factory made — and what it cost" sub="Mass production up; the working class forms" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-5">
              <p className="flex items-center gap-2 text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>
                <Factory className="h-4 w-4" /> Achieved
              </p>
              <ul className="mt-2 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm">
                <li>· Energy source moved from <b>human power to renewable natural resources</b></li>
                <li>· Factory system development; <b>mass production capabilities</b></li>
                <li>· New social divisions — <b>factory owners vs working class</b>; wealth concentrating among industrialists</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm lift h-full p-5">
              <p className="flex items-center gap-2 text-[.92rem] font-extrabold" style={{ color: "#b3402c" }}>
                <Users className="h-4 w-4" /> Endured
              </p>
              <ul className="mt-2 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm">
                <li>· Long working hours — <b>10–14 hours daily</b>; low wages despite rising productivity</li>
                <li>· Widespread employment of <b>children in harsh conditions</b></li>
                <li>· A distinct <b>working class</b> emerges — demanding shorter hours, higher wages, better conditions</li>
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Lecture 15"
              q="Why exactly did the water frame — not the shuttle or the Jenny — give birth to the factory system?"
              options={[
                "It wove cloth instead of spinning yarn",
                "Water-powered machines were too heavy for homes — production had to move to dedicated industrial spaces with constant water, concentrating 300–400 workers per mill",
                "The government required all spinners to register",
                "It was cheaper than the Spinning Jenny",
              ]}
              answer={1}
              explain="Before the water frame, machines were light enough to operate in homes as small-scale production facilities. Water power demanded heavier machinery and a perennial stream — so production moved into large, centralised factories employing 300–400 workers with 25–40+ machines. The worker moved to the machine; the factory system was born."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>Arkwright <b>1769</b>: power shifts from <b>muscle to water</b> — continuous, tireless, heavier machines; ~10 metres of cloth an hour.</>,
              <>Cromford <b>1771</b> opens the factory era; patents (1769 + Grand Patent 1775) break in <b>1785</b> → <b>143 mills by 1788, 300 by 1800</b>.</>,
              <>The trade: <b>mass production and a new industrial class</b> gained; <b>10–14-hour days, child labour, and the working class's birth</b> paid for it.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}
