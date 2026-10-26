"use client";

/* ============================================================
   Economic & Business History — PART 7 (shelf 04 of The Atlas).
   The 28-lecture deck's new chapters: Lecture 23 (division of
   labour & Taylor), Lecture 24 (the live-session recap),
   Lecture 25 (Fayol's administrative frame) and Lecture 26
   (the rise of large corporations).
   ============================================================ */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  Building2,
  Check,
  Clock,
  Coins,
  Factory,
  Landmark,
  ListChecks,
  Network,
  Timer,
  TrendingUp,
  Users,
  X,
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
   CHAPTER — L23 · TAYLOR  (#management-taylor)
   with Machine — the Pin Factory & the Pig-Iron gauge
   ============================================================ */
function PinFactory() {
  const [mode, setMode] = useState(0); // 0 = one artisan, 1 = divided
  const modes = [
    { label: "One artisan, every step", out: "1 pin / day", note: "One worker producing an entire pin alone could make only one pin per day." },
    { label: "18 distinct operations", out: "thousands / day", note: "The job divided into 18 distinct operations, each person assigned one task — productivity exploded." },
  ];
  return (
    <div className="card-warm p-5 sm:p-6">
      <p className="text-center font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>
        Machine — the pin factory · Adam Smith, 1776
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {modes.map((m, i) => (
          <button
            key={m.label}
            type="button"
            onClick={() => setMode(i)}
            aria-pressed={i === mode}
            className="rounded-2xl border px-3 py-2.5 text-[.8rem] font-extrabold transition-all duration-200"
            style={
              i === mode
                ? { borderColor: "transparent", background: EBH_BTN_GRAD, color: "#fff", boxShadow: "0 10px 22px -10px rgba(161,98,7,.5)" }
                : { borderColor: "#e0cb84", background: "#fffdf6", color: "#8a6d4f" }
            }
          >
            {m.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22 }}
          className="mt-4 rounded-2xl border p-5 text-center"
          style={{ borderColor: EBH_G.border, background: EBH_G.wash }}
        >
          {mode === 1 ? (
            <div className="flex flex-wrap justify-center gap-1.5">
              {Array.from({ length: 18 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.035, duration: 0.25 }}
                  className="flex h-6 w-6 items-center justify-center rounded-md text-[.58rem] font-black text-white"
                  style={{ background: EBH_BTN_GRAD }}
                >
                  {i + 1}
                </motion.span>
              ))}
            </div>
          ) : (
            <div className="flex justify-center">
              <motion.span
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl text-[.6rem] font-black leading-tight text-white"
                style={{ background: "#8a6d4f" }}
              >
                1 worker
                <br />18 steps
              </motion.span>
            </div>
          )}
          <p className="mt-3 font-display text-3xl font-black" style={{ color: EBH_G[800] }}>{modes[mode].out}</p>
          <p className="mx-auto mt-2 max-w-md text-[.84rem] leading-relaxed text-muted-warm">{modes[mode].note}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function PigIronGauge() {
  return (
    <div className="card-warm p-5 sm:p-6">
      <p className="text-center font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>
        Machine — the pig-iron gauge · Bethlehem Steel, 1898–1901
      </p>
      <div className="mt-5 space-y-4">
        {[
          { label: "Before — the average worker", tons: 12.5, w: "26%", tone: "#8a6d4f" },
          { label: "Schmidt, after time & motion direction", tons: 47.5, w: "96%", tone: EBH_G[700] },
        ].map((row, i) => (
          <div key={row.label}>
            <div className="flex items-baseline justify-between">
              <p className="text-[.82rem] font-bold text-[#3e2c1d]">{row.label}</p>
              <p className="font-mono text-[1.05rem] font-black" style={{ color: row.tone }}>{row.tons} tons/day</p>
            </div>
            <div className="mt-1.5 h-3.5 overflow-hidden rounded-full bg-[#efe6cd]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: row.w }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full"
                style={{ background: `linear-gradient(90deg,#eab308,${row.tone})` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 rounded-xl border border-[#e0cb84] bg-[#fdfae9] p-3 text-[.82rem] leading-relaxed text-[#2b2014]">
        Taylor selected a physically fit, highly motivated worker — <b>Schmidt</b> — and directed
        him through precise movements and rest periods: <i>&ldquo;pick up the pig, walk, sit down
        and rest, walk.&rdquo;</i> Result: <b>12.5 → 47.5 tons loaded — roughly a 400% increase</b>.
      </p>
    </div>
  );
}

export function EbhManagementTaylorSection() {
  return (
    <Section id="management-taylor">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 4 · Lecture 23 — management becomes a science"
          title={
            <>
              Division of labour &amp; <span className="grad-gold">Taylor&rsquo;s scientific management</span>
            </>
          }
          lead="Factories with thousands of unskilled workers needed methods that small workshops never had. Adam Smith split the task; Frederick Taylor timed it — and both raised a human cost."
        />

        <EbhReadStep n="01" title="Before the science — rule of thumb" sub="Intuition in a workshop of five to ten" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-5">
              <p className="text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>Pre-industrial management</p>
              <ul className="mt-2 space-y-1.5 text-[.84rem] leading-relaxed text-muted-warm">
                <li>· Skilled artisans in small workshops — <b>5–10 workers</b></li>
                <li>· Management ran on <b>&ldquo;rule of thumb&rdquo;</b> — intuition and personal experience</li>
                <li>· No standardized rules for hiring, firing, or measuring productivity</li>
                <li>· Metrics <b>subjective and inconsistent</b> across workplaces</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm lift h-full p-5">
              <p className="text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>The post-Industrial challenge</p>
              <ul className="mt-2 space-y-1.5 text-[.84rem] leading-relaxed text-muted-warm">
                <li>· Factories packed <b>thousands of unskilled workers</b> into single facilities — one company employed <b>17,000</b> across sites</li>
                <li>· Managing <b>400–500 workers at a single site</b> was unprecedented</li>
                <li>· Owners lacked any standard for a <b>&ldquo;fair day&rsquo;s work&rdquo;</b> — the minimum acceptable output under proper conditions</li>
              </ul>
            </div>
          </Reveal>
        </div>

        <EbhReadStep n="02" title="Division of labour — Adam Smith, 1776" sub="Break the job into eighteen pieces" />
        <Reveal>
          <PinFactory />
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {[
              { t: "Specialization", d: "Workers focused on single tasks become skilled at them — learning each machine's peculiarities. Unskilled workers become task-specific skilled workers." },
              { t: "Efficiency", d: "No more wasted time switching between tools, machines or workstations — time saved, focus on task completion increased." },
              { t: "Mass production", d: "Combined with machinery, division of labour lets factories produce goods far faster and significantly cheaper." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <div className="card-warm lift h-full p-5">
                  <p className="text-[.9rem] font-extrabold" style={{ color: EBH_G[700] }}>{c.t}</p>
                  <p className="mt-1 text-[.8rem] leading-relaxed text-muted-warm">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <EbhReadStep n="03" title="Frederick Taylor — the stopwatch era" sub="&ldquo;Father of Scientific Management&rdquo;" />
        <Reveal>
          <EbhPanel label="Taylor's core principles">
{`1. RULE OF SCIENCE FOR EACH TASK — develop scientific rules for
   every job aspect from objective data, not intuition: which
   tools, how performed, time required, body motions needed
2. SCIENTIFIC WORKER SELECTION — hire on job requirements and
   abilities, not favoritism or nepotism; fitness and skills
   must match job demands
3. TIME & MOTION STUDIES — stopwatches break movements into
   seconds and minutes; unnecessary motions eliminated;
   time benchmarks set; objective performance standards
   based on research, not manager judgment`}
        </EbhPanel>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-4">
            <PigIronGauge />
          </div>
        </Reveal>

        <EbhReadStep n="04" title="The critical limitations" sub="What the stopwatch couldn't measure" />
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { t: "Mechanistic view of humans", d: "Workers treated as extensions of machines; social needs, workplace relationships and emotional well-being ignored; motivation assumed to be money alone (piece-rate incentives)." },
            { t: "Monotony & alienation", d: "Repeating one standardized task across an 8–10-hour day created psychological boredom; workers lost engagement." },
            { t: "Worker exploitation", d: "Time studies raised production quotas without proportionally raising wages — more output, lower relative compensation." },
            { t: "Loss of autonomy", d: "Workers could not innovate or modify methods; planning separated from doing — managers decided, workers executed. No control over how to improve their own work." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 70}>
              <div className="h-full rounded-2xl border p-4" style={{ borderColor: "#e8a896", background: "#fbeae5" }}>
                <p className="text-[.88rem] font-extrabold" style={{ color: "#b3402c" }}>{c.t}</p>
                <p className="mt-1 text-[.8rem] leading-relaxed text-[#5a2a24]">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={80}>
          <EbhCallout kind="warn" title="The labour-management fallout">
            Scientific management increased efficiency and productivity — and <b>deteriorated
            relationships</b> between management and workers. The mechanistic treatment and the
            exploitation that followed produced significant workplace tensions and, in some cases,
            <b> labour unrest</b>.
          </EbhCallout>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Lecture 23"
              q="The Pig Iron Experiment: what did Taylor's direction of Schmidt achieve at Bethlehem Steel?"
              options={[
                "Productivity fell as workers resisted",
                "Iron loading rose from an average of 12.5 tons to 47.5 tons per day — roughly a 400% increase — through precise movements and rest periods",
                "Wages doubled while output stayed flat",
                "The factory switched from iron to steel production",
              ]}
              answer={1}
              explain="1898–1901, Bethlehem Steel Plant: Taylor selected a physically fit, highly motivated worker (Schmidt) and directed him through precise movements and rest periods — 'pick up the pig, walk, sit down and rest, walk.' Productivity rose from an average of 12.5 tons to 47.5 tons of iron loaded — approximately a 400% increase. The cost: mechanistic treatment, monotony, exploitation and loss of autonomy."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>Adam Smith <b>1776</b>: one pin-maker made <b>1 pin/day</b>; 18 operations made <b>thousands</b> — specialization, efficiency, mass production.</>,
              <>Taylor: <b>rule of science per task, scientific selection, time &amp; motion studies</b> — pig iron 12.5 → 47.5 tons (<b>+400%</b>).</>,
              <>The human cost: <b>mechanistic treatment, monotony, exploitation, loss of autonomy</b> — tensions that fed the labour unrest.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER — L24 · RECAP: THE REVOLUTION'S IMPACT  (#ir-impact)
   ============================================================ */
export function EbhIrImpactSection() {
  return (
    <Section id="ir-impact">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 4 · Lecture 24 — the live-session sweep"
          title={
            <>
              Recap: the Revolution&rsquo;s impact on{" "}
              <span className="grad-gold">labour, economics &amp; society</span>
            </>
          }
          lead="One connecting thread through the last stretch of Module 3: the classes the factories created, the unions that answered, the laws that followed, and the mixed systems we still live inside."
        />

        <EbhReadStep n="01" title="The class context" sub="Why a labour movement had to exist" />
        <EbhCallout kind="insight" title="From the 1700s onward">
          The Industrial Revolution created distinct social classes: the <b>bourgeoisie</b> (owners
          of the means of production), the <b>proletariat</b> (working class), and a{" "}
          <b>managerial middle class</b>. The labour movement emerged as a <b>direct response</b> to
          those class divisions and industrial working conditions.
        </EbhCallout>

        <EbhReadStep n="02" title="National unionization — the attempts and the realization" sub="NAPL, GNCTU, and the lesson in between" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { t: "NAPL — July 1830", d: "John Doherty's first national trade-union centre. Failed within two years: high membership fees and deep differences between sectors (mining, textile, steel, shipbuilding) with distinct working conditions." },
            { t: "GNCTU — 1834", d: "Robert Owen's experimental union seeking cordial relations between factory owners and workers. Failed on the fundamental conflict of interest between workers and employers." },
            { t: "The realization", d: "Workers could not negotiate individually or with individual employers — they required collective organization through trade unions to advocate effectively." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <div className="card-warm lift h-full p-5">
                <p className="text-[.9rem] font-extrabold" style={{ color: EBH_G[700] }}>{c.t}</p>
                <p className="mt-1 text-[.8rem] leading-relaxed text-muted-warm">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <EbhReadStep n="03" title="The legislative wins — including the one with drawings" sub="Sadler's report · Ashley's evidence · the ten-hour fight" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { y: "1833", t: "Factory Act", d: "Banned children under nine from textile mills; limited hours for older children. Built on the Sadler Report (1832–33) — MP Michael Sadler's committee documented children's conditions through testimonies. The first major workplace regulation: child labour could be illegal." },
            { y: "1842", t: "Mines & Collieries Act", d: "Lord Ashley commissioned detailed artistic drawings of women and children in coal mines — visual evidence beating written testimony against Victorian morality. Women and girls completely prohibited underground; boys under 10 banned." },
            { y: "1847", t: "Ten Hours Act", d: "Ten hours for women and teenagers across all industrial sectors — a broad legislative win. Political pressure followed the Corn Laws repeal, which had protected domestic grain prices and agricultural wages." },
          ].map((c, i) => (
            <Reveal key={c.y} delay={i * 80}>
              <div className="card-warm lift h-full p-5">
                <p className="font-mono text-[.8rem] font-black" style={{ color: EBH_G[700] }}>{c.y}</p>
                <p className="mt-1 text-[.95rem] font-extrabold text-[#3e2c1d]">{c.t}</p>
                <p className="mt-1 text-[.8rem] leading-relaxed text-muted-warm">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={80}>
          <div className="mt-4">
            <EbhCallout kind="story" title="The global backdrop behind the reforms">
              The Industrial Revolution ran inside <b>British Empire expansion</b> — particularly in
              India. India was a major raw-material source: <b>15–20% of cotton exports were raw
              cotton sent to Britain</b>, processed by textile mills in Manchester and Liverpool.
              The global trade network supported industrial capitalism in Britain — the profits and
              pressures that shaped every one of those parliamentary fights.
            </EbhCallout>
          </div>
        </Reveal>

        <EbhReadStep n="04" title="The systems, restated" sub="Capitalism · socialism · communism · the China variant" />
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { t: "Capitalism", d: "Private ownership; market-driven; profit-oriented. Advantages: innovation, consumer choice, individual freedom, high growth. Disadvantages: wealth inequality, environmental degradation, market failures (2008), innovation gated by purchasing power." },
            { t: "Socialism", d: "Government/state owns and regulates major means of production; centralized planning of quotas and prices. Advantages: collective welfare, reduced inequality. Disadvantages: slower growth and decision-making, reduced adaptability." },
            { t: "Communism", d: "Ideal: classless, stateless society with collective ownership; decentralised in theory. In practice: tends toward centralised control; individual innovation incentives suffer; implementation is hard." },
            { t: "State-led capitalism (China)", d: "Government maintains control while following capitalist principles to generate wealth — combining state ownership with profit mechanisms, and experiencing the issues of both simultaneously." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 70}>
              <div className="card-warm lift h-full p-5">
                <p className="text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>{c.t}</p>
                <p className="mt-1 text-[.8rem] leading-relaxed text-muted-warm">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <EbhReadStep n="05" title="Culture, faith, and the vote" sub="The wider ripples" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { t: "Individualism & science", d: "Capitalism emphasised individual ownership, understanding and effort — a contrast with communal or feudal systems. The scientific revolution built faith in solving problems through knowledge and invention." },
            { t: "Challenges to religious authority", d: "In Western Europe, scientific thinking challenged basic tenets of Christianity; church authority came under scrutiny as religious certainty met scientific methodology." },
            { t: "Political action & the vote", d: "Unions published journals as evidence for parliamentary debates; sympathetic MPs like Michael Sadler carried the case. Labour movements fought for voting rights — initially restricted to property owners; women's suffrage came much later." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 90}>
              <div className="card-warm lift h-full p-5">
                <p className="text-[.9rem] font-extrabold" style={{ color: EBH_G[700] }}>{c.t}</p>
                <p className="mt-1 text-[.8rem] leading-relaxed text-muted-warm">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={80}>
          <EbhCallout kind="why" title="The conclusion — mixed systems in practice">
            No country operates under pure capitalism, socialism or communism. Different sectors
            employ different systems: healthcare often leans socialist with government
            intervention; other sectors run on capitalist principles with varying regulation. Most
            modern economies are <b>combinations — with government intervention addressing market
            failures and capitalism's limitations</b>.
          </EbhCallout>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Lecture 24"
              q="The Mines and Collieries Act of 1842 broke new ground in HOW evidence was gathered. What did Lord Ashley commission?"
              options={[
                "A statistical census of mine output",
                "Detailed artistic drawings of women and children working in coal mines — visual evidence that challenged Victorian morality more than written testimony",
                "A survey of mine owners' profits",
                "Maps of every coal seam in Britain",
              ]}
              answer={1}
              explain="Lord Ashley's innovative documentation approach used visual evidence — detailed artistic drawings of women and children working underground. The Act then completely prohibited women and girls from underground work and banned boys under age 10, highlighting the physical exploitation of workers in harsh, damp, low-height mine conditions."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>The classes came first (<b>bourgeoisie · proletariat · middle class</b>); the movement answered; the realization: <b>only collective organization works</b>.</>,
              <>The laws followed: <b>Factory Act 1833 (Sadler)</b> → <b>Mines Act 1842 (Ashley's drawings)</b> → <b>Ten Hours Act 1847</b> — with India's raw cotton (15–20%) funding the backdrop.</>,
              <>End state: <b>mixed systems</b> — no pure capitalism, socialism or communism anywhere; government intervention fills what markets fail.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER — L25 · FAYOL  (#management-fayol)
   with Machine — the 14-principles grid
   ============================================================ */
const FAYOL_ACTIVITIES = [
  { n: 1, t: "Technical", d: "Production, manufacturing, adaptation — factory layout and processes. Taylor's shop-floor efficiency lives here." },
  { n: 2, t: "Commercial", d: "Buying, selling, exchange — procurement of raw materials, sales of finished products, advertising, marketing, supplier relations." },
  { n: 3, t: "Financial", d: "Finding and using capital optimally — securing funds from banks, investors, partners; managing resources efficiently." },
  { n: 4, t: "Security", d: "Protecting property and personnel — security staff, infrastructure, safety measures for assets and humans alike." },
  { n: 5, t: "Accounting", d: "Stock taking, balance sheets, cost analysis, record-keeping — inventory, transactions, revenue, costs, profit margins." },
  { n: 6, t: "Managerial", d: "Overseeing and coordinating all other five — overall direction and integration across every operational domain." },
];

const FAYOL_FUNCTIONS = [
  { t: "Planning", d: "Chart courses of action for future periods (six months, one, two years); resource needs; financial requirements for new projects." },
  { t: "Organizing", d: "Provide material and human resources; arrange them and define roles; establish the implementation framework." },
  { t: "Commanding", d: "Supervise and lead staff; guide through policies; define KPIs; establish HR policies and operational guidelines." },
  { t: "Coordinating", d: "Bring activities and departments into harmony; align business units on common objectives; integrate sub-activities." },
  { t: "Controlling", d: "Verify everything conforms to plans, policies and regulations; monitor compliance; keep operations aligned with direction." },
];

const FAYOL_PRINCIPLES = [
  "Division of work", "Authority & responsibility", "Discipline", "Unity of command",
  "Unity of direction", "Subordination of individual interest", "Remuneration", "Centralization",
  "Scalar chain", "Order", "Equity", "Stability of tenure", "Initiative", "Teamwork",
];

const TAYLOR_VS_FAYOL = [
  { k: "Perspective", t: "Bottom-up — from the factory floor", f: "Top-down — from the executive/administrative level" },
  { k: "Focus", t: "Worker & task efficiency at the shop floor", f: "Overall business administration & organisational management" },
  { k: "Scope", t: "Limited to production & task optimisation", f: "All organisational activities & types of businesses" },
  { k: "Command structure", t: "Multiple supervisors (8 foremen) per worker", f: "Single supervisor per employee — unity of command" },
  { k: "Approach", t: "Specialised focus on productivity increase", f: "Systematic principles for comprehensive management" },
  { k: "Applicability", t: "Primarily manufacturing & production", f: "Universal — every organisational type & function" },
];

function PrinciplesGrid() {
  const [open, setOpen] = useState<number | null>(null);
  const notes: Record<number, string> = {
    0: "Specialisation of tasks increases efficiency and expertise.",
    1: "Managers must have authority to give orders — and accountability for results.",
    2: "Employees must obey and respect organisational rules and regulations.",
    3: "Each employee receives orders from only ONE supervisor — the direct contrast with Taylor's multi-foreman approach.",
    4: "The organisation follows a single plan of action guiding all workers.",
    5: "Personal goals align with organisational objectives — the organisation takes precedence.",
    6: "Workers must be paid fairly for their services.",
    7: "The degree of centralised decision-making depends on the specific business context.",
    8: "A clear hierarchical line of authority exists from top to bottom.",
    9: "A place for everything and everything in its place — systematic organisation.",
    10: "Fair and equal treatment of all staff members.",
    11: "Low employee turnover is essential for organisational efficiency.",
    12: "Employees should be encouraged to take action and make decisions supporting goals.",
    13: "Collaboration and unity among team members are essential for objectives.",
  };
  return (
    <div className="card-warm p-5 sm:p-6">
      <p className="text-center font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>
        Machine — the fourteen principles · tap to read each
      </p>
      <div className="mt-4 grid grid-cols-2 gap-1.5 sm:grid-cols-7">
        {FAYOL_PRINCIPLES.map((p, i) => (
          <motion.button
            key={p}
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            aria-pressed={open === i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03, duration: 0.3 }}
            className="flex min-h-[4.4rem] flex-col items-center justify-center gap-1 rounded-xl border p-2 text-center transition-all duration-200"
            style={
              open === i
                ? { borderColor: "transparent", background: EBH_BTN_GRAD, color: "#fff", boxShadow: "0 8px 18px -8px rgba(161,98,7,.5)" }
                : { borderColor: "#e0cb84", background: "#fffdf6", color: "#6b563d" }
            }
          >
            <span className="font-mono text-[.6rem] font-black opacity-70">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-[.68rem] font-extrabold leading-tight">{p}</span>
          </motion.button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {open !== null ? (
          <motion.p
            key={open}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="mt-3 rounded-xl border p-3 text-[.84rem] leading-relaxed text-[#2b2014]"
            style={{ borderColor: EBH_G.border, background: EBH_G.wash }}
          >
            <b style={{ color: EBH_G[700] }}>{String(open + 1).padStart(2, "0")} · {FAYOL_PRINCIPLES[open]}: </b>
            {notes[open]}
          </motion.p>
        ) : (
          <motion.p
            key="hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-3 text-center text-[.78rem] font-semibold text-[#a1876a]"
          >
            Thematic organisation: these principles centre on achieving organisational goals and
            unity of purpose — individual interests subordinate to collective objectives.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export function EbhManagementFayolSection() {
  return (
    <Section id="management-fayol">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 4 · Lecture 25 — the view from the executive desk"
          title={
            <>
              From Taylor to <span className="grad-gold">Fayol</span>: the administrative frame
            </>
          }
          lead="Taylor timed the shop floor. Henry Fayol — French engineer, mining-firm CEO from the 1880s — asked a bigger question: how do you run the entire organisation? Same era, different altitudes, complementary answers."
        />

        <EbhReadStep n="01" title="Taylor, reviewed" sub="Four principles — and their blind spot" />
        <Reveal>
          <EbhPanel label="Taylorism — the four principles">
{`1. A rule of science for each aspect of a job —
   via time and motion studies
2. Scientifically select and train workers on job
   requirements, not favoritism or nepotism
3. Management and workforce work together
   collaboratively
4. Divide work and responsibility equally between
   management and workers`}
        </EbhPanel>
        </Reveal>
        <Reveal delay={80}>
          <EbhCallout kind="warn" title="The critique the lecture repeats">
            Focused exclusively on <b>factory-floor efficiency</b>; treated workers as mechanised
            objects without considering their emotions, thoughts and personal needs; worker
            involvement limited to <b>execution only</b> — planning stayed with management.
          </EbhCallout>
        </Reveal>

        <EbhReadStep n="02" title="Fayol's frame — six business activities" sub="Everything a firm does, sorted into six" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FAYOL_ACTIVITIES.map((a, i) => (
            <Reveal key={a.t} delay={i * 70}>
              <div className="card-warm lift h-full p-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg font-mono text-[.68rem] font-black text-white" style={{ background: EBH_BTN_GRAD }}>
                    {a.n}
                  </span>
                  <p className="text-[.92rem] font-extrabold text-[#3e2c1d]">{a.t} activity</p>
                </div>
                <p className="mt-1.5 text-[.78rem] leading-relaxed text-muted-warm">{a.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={80}>
          <EbhCallout kind="insight" title="Important note">
            These activities are <b>interconnected and interdependent, not mutually exclusive</b> —
            certain aspects may receive emphasis in multiple categories simultaneously.
          </EbhCallout>
        </Reveal>

        <EbhReadStep n="03" title="Five functions of management — POTCC" sub="What management must execute across all six activities" />
        <div className="grid gap-3 md:grid-cols-5">
          {FAYOL_FUNCTIONS.map((f, i) => (
            <Reveal key={f.t} delay={i * 70}>
              <div className="card-warm lift h-full p-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full text-white" style={{ background: EBH_BTN_GRAD }}>
                  <ListChecks className="h-3.5 w-3.5" />
                </span>
                <p className="mt-2 text-[.9rem] font-extrabold" style={{ color: EBH_G[700] }}>{f.t}</p>
                <p className="mt-1 text-[.74rem] leading-relaxed text-muted-warm">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <EbhReadStep n="04" title="Fourteen principles of management" sub="Fayol's guide to organisational management" />
        <Reveal>
          <PrinciplesGrid />
        </Reveal>

        <EbhReadStep n="05" title="Taylorism vs Fayolism" sub="Two altitudes, one discipline" />
        <Reveal>
          <div className="card-warm overflow-hidden">
            <div className="grid grid-cols-[1fr_1.4fr_1.4fr] rounded-t-2xl border-b text-[.7rem] font-black uppercase tracking-[.1em]" style={{ borderColor: EBH_G.border, background: "#faf3d9", color: EBH_G[700] }}>
              <div className="px-3 py-2.5">Aspect</div>
              <div className="border-l px-3 py-2.5" style={{ borderColor: EBH_G.border }}>Taylor (Taylorism)</div>
              <div className="border-l px-3 py-2.5" style={{ borderColor: EBH_G.border }}>Fayol (Fayolism)</div>
            </div>
            {TAYLOR_VS_FAYOL.map((r, i) => (
              <motion.div
                key={r.k}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className={`grid grid-cols-[1fr_1.4fr_1.4fr] text-[.8rem] leading-snug ${i < TAYLOR_VS_FAYOL.length - 1 ? "border-b" : ""}`}
                style={{ borderColor: "#efe6cd" }}
              >
                <div className="px-3 py-2.5 font-extrabold text-[#3e2c1d]">{r.k}</div>
                <div className="border-l px-3 py-2.5 text-muted-warm" style={{ borderColor: "#efe6cd" }}>{r.t}</div>
                <div className="border-l px-3 py-2.5 text-muted-warm" style={{ borderColor: "#efe6cd" }}>{r.f}</div>
              </motion.div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={80}>
          <EbhCallout kind="why" title="Key differentiation — and why both matter">
            While Taylor examined efficiency at the <b>worker level</b>, Fayol addressed the broader
            question of how to <b>organise and manage an entire organisation</b> from the
            administrative perspective. Taylor&rsquo;s shop-floor work is the technical/operational
            dimension — it falls under Fayol&rsquo;s <b>technical activity</b> — while Fayol&rsquo;s
            framework spans everything a complete organisation needs, from technical operations to
            financial management to human-resources coordination.
          </EbhCallout>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Lecture 25"
              q="Fayol's 'unity of command' directly contradicts which feature of Taylor's system?"
              options={[
                "Time and motion studies",
                "The multi-supervisor structure — Taylor assigned 8 foremen per worker, while Fayol insisted each employee receive orders from only one supervisor",
                "Scientific worker selection",
                "The equal division of responsibility",
              ]}
              answer={1}
              explain="Taylor's shop floor used multiple supervisors — 8 foremen per worker — while Fayol's fourth principle, unity of command, insists each employee should receive orders from only one supervisor. It's the clearest marker of the two men's different altitudes: task-level specialisation versus whole-organisation administration."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>Fayol = <b>top-down administration</b>: 6 business activities, 5 functions (Planning · Organizing · Commanding · Coordinating · Controlling), 14 principles.</>,
              <>The clash: <b>8 foremen per worker (Taylor)</b> vs <b>unity of command (Fayol)</b> — task efficiency vs organisational management.</>,
              <>Together: <b>complementary perspectives</b> — Taylor's shop floor nests inside Fayol's technical activity; both still anchor management curricula.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER — L26 · LARGE CORPORATIONS  (#corporations)
   with Machine — the integration switch
   ============================================================ */
const CORP_FACTORS = [
  {
    n: "01",
    t: "Railroad & telegraph networks",
    d: "Railroads, ships and telegraph collapsed geographical distances. Raw materials reached factories faster; finished goods reached international markets. Coordinated train schedules forced standardized time zones (from 1883) — synchronised operations across regions and countries. Companies like the East India Company could now run efficiently across continents, headquarters in the UK, operations in India.",
  },
  {
    n: "02",
    t: "Rise of mass production",
    d: "Steam engines, water frames, iron and steel production enabled large-scale manufacturing. Labour was broken into small, repetitive, standardized tasks any worker could perform — the Ford assembly line (1910s–1920s) split automobile manufacturing into 84 distinct steps, producing 50–60 cars daily instead of one. Standardized tasks made workers interchangeable; higher volumes became capital for more factories.",
  },
  {
    n: "03",
    t: "Invention of the modern corporation",
    d: "Building railroads and massive factories needed capital no single family could provide. The joint-stock corporation answered: share-based ownership (1,000 shares at ₹50 each — selling 800 publicly raises ₹40,000 for growth), perpetual existence beyond any founder's death, limited liability protecting investors' personal assets, and the managerial revolution — specialised professional managers for HR, marketing, purchasing, sales and production, straight from Taylor's and Fayol's principles.",
  },
  {
    n: "04",
    t: "Consolidation & monopolies",
    d: "Companies grew larger through strategic acquisitions: horizontal integration (purchasing competitors in the same industry — Jio and Hotstar combining in the OTT market) and vertical integration (acquiring suppliers, distributors or retailers to control the whole lifecycle — Netflix potentially buying film production houses). Both crushed rivals, reduced competition and enabled rapid growth.",
  },
];

function IntegrationSwitch() {
  const [side, setSide] = useState(0);
  const sides = [
    {
      t: "Horizontal integration",
      d: "Purchasing competing companies in the same industry.",
      chain: ["Competitor A", "Your company", "Competitor B"],
      merged: "One entity — two competitors combined",
      ex: "Jio purchases Hotstar — two OTT rivals become one platform.",
    },
    {
      t: "Vertical integration",
      d: "Acquiring suppliers, distributors or retailers — controlling the entire product lifecycle from raw material to retail.",
      chain: ["Raw materials", "Production", "Distribution", "Retail"],
      merged: "The whole chain under one owner",
      ex: "Netflix potentially purchasing film production companies alongside its distribution operations.",
    },
  ];
  const s = sides[side];
  return (
    <div className="card-warm p-5 sm:p-6">
      <p className="text-center font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>
        Machine — the integration switch · two ways to swallow a market
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {sides.map((ss, i) => (
          <button
            key={ss.t}
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
            {ss.t}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={s.t}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.24 }}
          className="mt-4 rounded-2xl border p-4"
          style={{ borderColor: EBH_G.border, background: EBH_G.wash }}
        >
          <p className="text-[.88rem] leading-relaxed text-[#2b2014]"><b style={{ color: EBH_G[800] }}>{s.t}: </b>{s.d}</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
            {s.chain.map((c, i) => (
              <React.Fragment key={c}>
                <span className="rounded-lg border border-[#e0cb84] bg-white px-2.5 py-1.5 text-[.72rem] font-bold text-[#3e2c1d]">{c}</span>
                {i < s.chain.length - 1 ? <ArrowRight className="h-3.5 w-3.5" style={{ color: EBH_G[700] }} /> : null}
              </React.Fragment>
            ))}
          </div>
          <p className="mt-3 rounded-xl border p-3 text-center text-[.8rem] font-extrabold" style={{ borderColor: EBH_G[600], background: "linear-gradient(135deg,#fdf6dc,#faf0cd)", color: EBH_G[800] }}>
            → {s.merged}
          </p>
          <p className="mt-2 text-center text-[.78rem] leading-relaxed text-muted-warm">{s.ex}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function EbhCorporationsSection() {
  return (
    <Section id="corporations">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 4 · Lecture 26 — from workshop to corporation"
          title={
            <>
              The rise of <span className="grad-gold">large corporations</span>
            </>
          }
          lead="How did small family-owned shops and artisan workshops become the corporation? Four interlocking forces — infrastructure, mass production, a new legal machine, and consolidation."
        />

        <EbhReadStep n="01" title="The four factors" sub="Read them as one system" />
        <div className="space-y-3">
          {CORP_FACTORS.map((f, i) => (
            <Reveal key={f.n} delay={i * 60}>
              <div className="card-warm lift flex gap-4 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-[.72rem] font-black text-white" style={{ background: EBH_BTN_GRAD }}>
                  {f.n}
                </span>
                <div className="min-w-0">
                  <p className="text-[.98rem] font-extrabold text-[#3e2c1d]">{f.t}</p>
                  <p className="mt-1 text-[.84rem] leading-relaxed text-muted-warm">{f.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <EbhReadStep n="02" title="The share mathematics" sub="Why joint-stock changed everything — one example from the lecture" />
        <Reveal>
          <div className="card-warm overflow-hidden p-4 sm:p-6">
            <div className="flex flex-wrap items-center justify-center gap-2 text-center">
              {[
                { k: "1,000 shares × ₹50", v: "₹50,000 potential" },
                { k: "Sell 800 publicly", v: "₹40,000 raised" },
                { k: "Perpetual + limited liability", v: "risk contained" },
              ].map((b, i, arr) => (
                <React.Fragment key={b.k}>
                  <div className="rounded-2xl border p-4" style={{ borderColor: i === 2 ? EBH_G[600] : "#e0cb84", background: i === 2 ? "linear-gradient(135deg,#fdf6dc,#faf0cd)" : "#fffdf6" }}>
                    <p className="text-[.88rem] font-extrabold text-[#3e2c1d]">{b.k}</p>
                    <p className="mt-0.5 text-[.72rem] font-bold" style={{ color: EBH_G[700] }}>{b.v}</p>
                  </div>
                  {i < arr.length - 1 ? <ArrowRight className="h-4 w-4 rotate-90 sm:rotate-0" style={{ color: EBH_G[700] }} /> : null}
                </React.Fragment>
              ))}
            </div>
            <p className="mt-3 rounded-xl border border-[#e0cb84] bg-white p-3 text-[.82rem] leading-relaxed text-muted-warm">
              <b style={{ color: EBH_G[700] }}>Limited liability: </b>a crucial investor protection —
              personal assets could not be seized if the corporation failed to pay debts. Liability
              was limited to the investment amount, making corporate investment far less risky than
              earlier partnership models. And unlike family businesses that ended with their owners,
              corporations continued indefinitely through transferred shares.
            </p>
          </div>
        </Reveal>

        <EbhReadStep n="03" title="Two ways to grow enormous" sub="Horizontal vs vertical integration" />
        <Reveal>
          <IntegrationSwitch />
        </Reveal>

        <EbhReadStep n="04" title="Back to management thought — the connection" sub="Every lecture of Module 4 plugs in here" />
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Division of labour", d: "Smith, Taylor and Fayol's standardized-task concepts enabled mass-production efficiency." },
            { t: "Scientific management", d: "Taylor's standardisation and time-motion studies shaped how large factories organised production — Ford's assembly line is the exhibit." },
            { t: "Administrative management", d: "Fayol's hierarchy, specialised functions and top-level oversight became essential for managing large corporations." },
            { t: "Bureaucratic management", d: "Systematic, rule-based management of large organisations — structured managerial hierarchies and professional administration." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 70}>
              <div className="card-warm lift h-full p-4">
                <p className="text-[.88rem] font-extrabold" style={{ color: EBH_G[700] }}>{c.t}</p>
                <p className="mt-1 text-[.76rem] leading-relaxed text-muted-warm">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={80}>
          <EbhCallout kind="story" title="And the map changed too">
            Large corporations contributed to <b>urban planning</b>: towns and cities organised
            around major factories and industries — the Indian industrial cities of{" "}
            <b>Bhilai, Raurkela and Bokaro</b> (steel plants) and <b>Tata Nagar</b> (Tata
            industries). Corporate growth shaped society well beyond business operations.
          </EbhCallout>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Lecture 26"
              q="A company issues 1,000 shares at ₹50 each and sells 800 publicly. What does the lecture use this example to show?"
              options={[
                "That shares are a risky investment",
                "Share-based ownership mobilising capital: 800 shares sold raises ₹40,000 for company growth — capital no single family could provide, with limited liability protecting investors",
                "That only the government can issue shares",
                "That the stock market always crashes",
              ]}
              answer={1}
              explain="The joint-stock corporation solved the capital problem: building railroads and massive factories needed more than any single individual or family could provide. Dividing ownership into purchasable, tradable shares raised ₹40,000 from 800 of 1,000 ₹50 shares — while perpetual existence and limited liability made the structure durable and investment safe. The managerial revolution then ran it professionally."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>Four forces: <b>railroads &amp; telegraph (time zones 1883)</b> · <b>mass production (Ford: 84 steps, 50–60 cars/day)</b> · <b>the joint-stock corporation</b> · <b>consolidation</b>.</>,
              <>The corporate trinity: <b>share-based capital, perpetual existence, limited liability</b> — plus professional managers from Taylor &amp; Fayol.</>,
              <>Integration: <b>horizontal</b> buys rivals (Jio–Hotstar); <b>vertical</b> buys the chain (Netflix–production) — market dominance follows.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}
