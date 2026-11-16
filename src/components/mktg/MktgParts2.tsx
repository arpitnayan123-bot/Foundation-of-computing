"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, animate, motion } from "framer-motion";
import {
  AlertTriangle, ArrowDown, ArrowUp, BadgeCheck, Bike, Brain, CloudRainWind, CloudSun, Coins, Cpu,
  Dumbbell, Droplets, Eye, Gem, Gift, GraduationCap, IndianRupee, Landmark, MapPin, MoveVertical,
  Package, PenTool, Percent, Repeat, RotateCcw, Smartphone, Sparkles, Star, Swords, Target,
  ThumbsDown, ThumbsUp, Timer, Truck, Users, UsersRound, UtensilsCrossed, WashingMachine,
} from "lucide-react";
import {
  Callout, KV, Quiz, ReadStep, Reveal, Section, SectionHead, StepsFlow, Takeaways,
} from "@/components/notes/ui";

/* ============================================================
   MKTG · Principles of Marketing — Parts 2
   Lectures 6–12 — shelf 06 of THE ATLAS.
   Chapters: environment · exchange-system · value-price-features ·
   luxury-lever · es-ds · purchase-chain · context-matters ·
   loyalty-econ · campaigns-esds · beyond-purchase · heterogeneity ·
   bases · behavioral-benefit
   ============================================================ */

/* ---------- shared machine helpers (teal & champagne system) ---------- */

const TEAL = "#0f766e";
const TEAL_BRIGHT = "#14b8a6";
const GOLD = "#a97d2c";
const GOLD_L = "#e3c26b";
const INK = "#1f2b2b";
const MUTED = "#5f7472";
const ROSE = "#9f3d54";
const CREAM_BG = "#f2efe7";
const CREAM_BORDER = "#e3ddcf";
const LAGOON = "linear-gradient(165deg,#0c2124 0%,#12302f 60%,#143236 100%)";
const PROSE = "max-w-3xl text-[.95rem] leading-relaxed text-[#3a4a48]";

function MButton({ onClick, children, tone = "ghost", label, disabled = false }: {
  onClick: () => void; children: React.ReactNode; tone?: "primary" | "gold" | "ghost" | "rose"; label?: string; disabled?: boolean;
}) {
  const styles: Record<string, React.CSSProperties> = {
    primary: { background: "linear-gradient(135deg,#14b8a6,#0f766e)", color: "#f2fbf8" },
    gold: { background: "linear-gradient(135deg,#e3c26b,#a97d2c)", color: "#231a08" },
    ghost: { background: "#fffdf9", color: TEAL, border: `1px solid ${CREAM_BORDER}` },
    rose: { background: "#fdf1f4", color: ROSE, border: "1px solid #ecd2d9" },
  };
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      disabled={disabled}
      style={disabled ? { ...styles[tone], opacity: 0.45 } : styles[tone]}
      className="rounded-xl px-3.5 py-2 text-[.8rem] font-bold shadow-sm transition-transform duration-200 hover:-translate-y-0.5 disabled:hover:translate-y-0"
    >
      {children}
    </button>
  );
}

function MStatus({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      aria-live="polite"
      className="mt-4 min-h-[2.6rem] rounded-xl px-3.5 py-2.5 font-mono-warm text-[.85rem] font-bold"
      style={
        dark
          ? { background: "rgba(227,194,107,.08)", border: "1px dashed rgba(227,194,107,.35)", color: GOLD_L }
          : { background: "#f4faf8", border: "1px dashed #bfe0d8", color: TEAL }
      }
    >
      {children}
    </p>
  );
}

function MachineCard({ title, chip, children, dark = false }: {
  title: string; chip?: string; children: React.ReactNode; dark?: boolean;
}) {
  return (
    <div
      className="p-6 md:p-8"
      style={
        dark
          ? { background: LAGOON, borderRadius: "1.5rem", color: "#e9f2ee" }
          : { background: "var(--card-warm,#fffdf9)", borderRadius: "1.5rem", border: `1px solid ${CREAM_BORDER}`, color: INK }
      }
    >
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-xl font-bold md:text-2xl" style={{ color: dark ? "#e9f2ee" : INK }}>{title}</h3>
        {chip ? (
          <span
            className="rounded-full px-2.5 py-1 text-[.68rem] font-extrabold uppercase tracking-[.12em]"
            style={dark
              ? { background: "rgba(227,194,107,.14)", color: GOLD_L }
              : { background: "#e7f3ef", color: TEAL }}
          >
            {chip}
          </span>
        ) : null}
      </div>
      {children}
    </div>
  );
}

/* ES/DS twin bars — shared by es-ds and campaigns-esds machines */
function GaugeBar({ label, v, grad, note }: { label: string; v: number; grad: string; note: string }) {
  return (
    <div>
      <div className="mb-1 flex flex-wrap items-baseline justify-between gap-1">
        <span className="text-[.72rem] font-extrabold uppercase tracking-[.12em]" style={{ color: MUTED }}>{label}</span>
        <span className="text-[.78rem] font-semibold" style={{ color: MUTED }}>{note}</span>
      </div>
      <div className="h-5 w-full overflow-hidden rounded-full" style={{ background: "#efe9db" }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: grad }}
          initial={false}
          animate={{ width: `${v}%` }}
          transition={{ type: "spring", stiffness: 110, damping: 20 }}
        />
      </div>
    </div>
  );
}

function GapBars({ es, ds, esNote, dsNote }: { es: number; ds: number; esNote: string; dsNote: string }) {
  return (
    <div className="grid gap-4">
      <GaugeBar label="DS · Desired State" v={ds} grad="linear-gradient(90deg,#e3c26b,#a97d2c)" note={dsNote} />
      <GaugeBar label="ES · Existing State" v={es} grad="linear-gradient(90deg,#14b8a6,#0f766e)" note={esNote} />
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full px-3 py-1 font-mono-warm text-[.78rem] font-extrabold"
          style={{ background: "#f6efe0", color: GOLD }}>
          gap = {Math.max(0, ds - es)} pts
        </span>
        {ds - es <= 0 ? (
          <span className="rounded-full px-3 py-1 text-[.72rem] font-extrabold"
            style={{ background: "#f7ecee", color: ROSE }}>no gap · no felt need · mind stays closed</span>
        ) : (
          <span className="rounded-full px-3 py-1 text-[.72rem] font-extrabold"
            style={{ background: "#e7f3ef", color: TEAL }}>gap open · inertia breaks</span>
        )}
      </div>
    </div>
  );
}

/* step-player hook: Play auto-advances, Next steps manually, Reset rewinds */
function usePlayer(len: number, ms = 1600) {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    if (!playing) return;
    const t = window.setInterval(() => setI((p) => Math.min(p + 1, len - 1)), ms);
    return () => window.clearInterval(t);
  }, [playing, len, ms]);
  useEffect(() => {
    if (!playing || i < len - 1) return;
    const t = window.setTimeout(() => setPlaying(false), 0);
    return () => window.clearTimeout(t);
  }, [playing, i, len]);
  return {
    i,
    playing,
    next: () => setI((p) => Math.min(p + 1, len - 1)),
    reset: () => { setPlaying(false); setI(0); },
    toggle: () => setPlaying((p) => !p),
  };
}

/* animated number — nonce > 0 (re)starts the count from `from` up to `to` */
function CountUp({ from, to, nonce, decimals = 0, duration = 1.5 }: {
  from: number; to: number; nonce: number; decimals?: number; duration?: number;
}) {
  const [v, setV] = useState(from);
  useEffect(() => {
    if (nonce === 0) {
      const t = window.setTimeout(() => setV(from), 0);
      return () => window.clearTimeout(t);
    }
    const c = animate(from, to, { duration, ease: "easeOut", onUpdate: (x) => setV(x) });
    return () => c.stop();
  }, [from, to, nonce, duration]);
  return <>{v.toFixed(decimals)}</>;
}

function arcWedge(cx: number, cy: number, r1: number, r2: number, a0: number, a1: number): string {
  const p = (r: number, a: number) => {
    const rad = ((a - 90) * Math.PI) / 180;
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
  };
  const [x0, y0] = p(r2, a0);
  const [x1, y1] = p(r2, a1);
  const [x2, y2] = p(r1, a1);
  const [x3, y3] = p(r1, a0);
  return `M ${x0} ${y0} A ${r2} ${r2} 0 0 1 ${x1} ${y1} L ${x2} ${y2} A ${r1} ${r1} 0 0 0 ${x3} ${y3} Z`;
}

/* ============================================================
   LECTURE 6 · CHAPTER 1 — environment
   ============================================================ */

const TASK_ENV = [
  { key: "Suppliers", icon: "truck", d: "Provide resources needed for operations — the immediate entities the firm interacts with to produce at all." },
  { key: "Customers", icon: "users", d: "The target market for products and services — the people the whole system exists to serve." },
  { key: "Competitors", icon: "swords", d: "Other organizations offering similar products or services — fighting for the same customers." },
] as const;

const MACRO_ENV = [
  { key: "Demographic", icon: "usersround", d: "Age groups, socio-economic status, income levels, and population characteristics." },
  { key: "Political-Legal", icon: "landmark", d: "Government policies, regulations, minimum wage laws, and food safety standards." },
  { key: "Economic", icon: "rupee", d: "GST reforms, recessions, inflation, and market conditions." },
  { key: "Socio-Cultural", icon: "food", d: "Consumption patterns, dietary preferences, and cultural backgrounds that influence consumer behavior." },
  { key: "Physical", icon: "cloud", d: "Climate, environmental conditions, and natural factors affecting operations." },
  { key: "Technological", icon: "cpu", d: "Innovations such as the transitions from floppy disks to cloud storage, UPI payments, and digital platforms." },
] as const;

type EnvPick = { ring: "task" | "macro"; i: number } | null;

function EnvIcon({ name, className }: { name: string; className?: string }) {
  const cls = className ?? "h-4 w-4";
  if (name === "truck") return <Truck className={cls} />;
  if (name === "users") return <Users className={cls} />;
  if (name === "swords") return <Swords className={cls} />;
  if (name === "usersround") return <UsersRound className={cls} />;
  if (name === "landmark") return <Landmark className={cls} />;
  if (name === "rupee") return <IndianRupee className={cls} />;
  if (name === "food") return <UtensilsCrossed className={cls} />;
  if (name === "cloud") return <CloudSun className={cls} />;
  return <Cpu className={cls} />;
}

function EnvRingMachine() {
  const [pick, setPick] = useState<EnvPick>(null);
  const [auto, setAuto] = useState(false);
  const all: NonNullable<EnvPick>[] = useMemo(
    () => [
      ...TASK_ENV.map((_, i) => ({ ring: "task" as const, i })),
      ...MACRO_ENV.map((_, i) => ({ ring: "macro" as const, i })),
    ],
    []
  );
  useEffect(() => {
    if (!auto) return;
    const t = window.setInterval(() => {
      setPick((p) => {
        const idx = p ? all.findIndex((a) => p.ring === a.ring && p.i === a.i) : -1;
        return all[(idx + 1) % all.length];
      });
    }, 1700);
    return () => window.clearInterval(t);
  }, [auto, all]);

  const detail = pick
    ? pick.ring === "task" ? TASK_ENV[pick.i] : MACRO_ENV[pick.i]
    : null;
  const macroFill = (i: number) =>
    pick && pick.ring === "macro" && pick.i === i ? "rgba(227,194,107,.55)" : "rgba(169,125,44,.16)";
  const taskFill = (i: number) =>
    pick && pick.ring === "task" && pick.i === i ? "rgba(20,184,166,.5)" : "rgba(15,118,110,.14)";

  return (
    <MachineCard title="The environment ring" chip="tap a layer — or let it tour">
      <div className="grid gap-6 lg:grid-cols-[1fr,1fr] lg:items-center">
        <svg viewBox="0 0 460 460" className="mx-auto h-auto w-full max-w-[420px]" role="img"
          aria-label="Two rings around an organisation: the inner task environment of suppliers, customers and competitors, and the outer macro environment of demographic, political-legal, economic, socio-cultural, physical and technological forces">
          {/* outer macro ring — 6 wedges */}
          {MACRO_ENV.map((m, i) => {
            const a0 = i * 60 + 3;
            const a1 = (i + 1) * 60 - 3;
            const mid = (a0 + a1) / 2;
            const rad = ((mid - 90) * Math.PI) / 180;
            const lx = 230 + 196 * Math.cos(rad);
            const ly = 230 + 196 * Math.sin(rad);
            const on = pick?.ring === "macro" && pick.i === i;
            return (
              <g key={m.key}>
                <motion.path
                  d={arcWedge(230, 230, 150, 216, a0, a1)}
                  fill={macroFill(i)}
                  stroke={on ? GOLD : "#cbb98f"}
                  strokeWidth={on ? 2.6 : 1.4}
                  opacity={1}
                  style={{ transformBox: "fill-box", transformOrigin: "center", cursor: "pointer" }}
                  animate={{ scale: on ? 1.035 : 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  onClick={() => { setAuto(false); setPick({ ring: "macro", i }); }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Macro environment: ${m.key}`}
                />
                <text x={lx} y={ly} textAnchor="middle" fontSize="11.5" fontWeight="800"
                  fill={on ? GOLD : "#8a6d33"} style={{ pointerEvents: "none" }}>
                  {m.key.split("-")[0]}
                </text>
                <text x={lx} y={ly + 13} textAnchor="middle" fontSize="10" fontWeight="700"
                  fill={on ? GOLD : "#a08a55"} style={{ pointerEvents: "none" }}>
                  {m.key.includes("-") ? m.key.split("-")[1] : ""}
                </text>
              </g>
            );
          })}
          {/* inner task ring — 3 nodes */}
          {TASK_ENV.map((t, i) => {
            const a = i * 120 - 90;
            const rad = (a * Math.PI) / 180;
            const nx = 230 + 102 * Math.cos(rad);
            const ny = 230 + 102 * Math.sin(rad);
            const on = pick?.ring === "task" && pick.i === i;
            return (
              <g key={t.key}>
                <motion.circle
                  cx={nx} cy={ny} r={40}
                  fill={taskFill(i)}
                  stroke={on ? TEAL_BRIGHT : "#7fb5aa"}
                  strokeWidth={on ? 3 : 1.6}
                  opacity={1}
                  style={{ cursor: "pointer", transformBox: "fill-box", transformOrigin: "center" }}
                  animate={{ scale: on ? 1.08 : 1 }}
                  transition={{ type: "spring", stiffness: 220, damping: 16 }}
                  onClick={() => { setAuto(false); setPick({ ring: "task", i }); }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Task environment: ${t.key}`}
                />
                <text x={nx} y={ny - 4} textAnchor="middle" fontSize="11.5" fontWeight="800"
                  fill={on ? TEAL : "#39655d"} style={{ pointerEvents: "none" }}>{t.key}</text>
                <text x={nx} y={ny + 12} textAnchor="middle" fontSize="8.5" fontWeight="700"
                  fill={on ? TEAL : "#5c8d84"} style={{ pointerEvents: "none" }}>task · micro</text>
              </g>
            );
          })}
          {/* spokes from org to task nodes */}
          {TASK_ENV.map((t, i) => {
            const a = i * 120 - 90;
            const rad = (a * Math.PI) / 180;
            const x1 = 230 + 46 * Math.cos(rad);
            const y1 = 230 + 46 * Math.sin(rad);
            const x2 = 230 + 62 * Math.cos(rad);
            const y2 = 230 + 62 * Math.sin(rad);
            return <line key={t.key} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#9dc4bb" strokeWidth={1.6} />;
          })}
          {/* the organisation */}
          <circle cx={230} cy={230} r={44} fill="url(#envOrgGrad)" />
          <defs>
            <linearGradient id="envOrgGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#0f766e" />
            </linearGradient>
          </defs>
          <text x={230} y={226} textAnchor="middle" fontSize="12" fontWeight="800" fill="#f2fbf8">the</text>
          <text x={230} y={242} textAnchor="middle" fontSize="12" fontWeight="800" fill="#f2fbf8">organisation</text>
        </svg>
        <div>
          <div className="flex flex-wrap gap-1.5">
            {TASK_ENV.map((t, i) => (
              <button key={t.key} type="button"
                onClick={() => { setAuto(false); setPick({ ring: "task", i }); }}
                className="rounded-lg px-2.5 py-1.5 text-[.72rem] font-bold transition-transform hover:-translate-y-0.5"
                style={{
                  background: pick?.ring === "task" && pick.i === i ? "linear-gradient(135deg,#14b8a6,#0f766e)" : "#eef5f2",
                  color: pick?.ring === "task" && pick.i === i ? "#f2fbf8" : TEAL,
                }}
                aria-label={`Show task environment layer: ${t.key}`}>
                {t.key}
              </button>
            ))}
          </div>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {MACRO_ENV.map((m, i) => (
              <button key={m.key} type="button"
                onClick={() => { setAuto(false); setPick({ ring: "macro", i }); }}
                className="rounded-lg px-2.5 py-1.5 text-[.72rem] font-bold transition-transform hover:-translate-y-0.5"
                style={{
                  background: pick?.ring === "macro" && pick.i === i ? "linear-gradient(135deg,#e3c26b,#a97d2c)" : "#f6efe0",
                  color: pick?.ring === "macro" && pick.i === i ? "#231a08" : GOLD,
                }}
                aria-label={`Show broad environment layer: ${m.key}`}>
                {m.key}
              </button>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <MButton tone={auto ? "gold" : "primary"} onClick={() => setAuto((a) => !a)} label={auto ? "Pause the tour" : "Play the tour"}>
              {auto ? "Pause tour" : "Play tour"}
            </MButton>
            <MButton onClick={() => { setAuto(false); setPick(null); }} label="Reset the ring machine">
              <RotateCcw className="mr-1 inline h-3.5 w-3.5" />Reset
            </MButton>
          </div>
          <AnimatePresence mode="wait">
            {detail ? (
              <motion.div key={detail.key} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="mt-4 rounded-2xl p-4" style={{ background: CREAM_BG, border: `1px solid ${CREAM_BORDER}` }}>
                <div className="flex items-center gap-2">
                  <EnvIcon name={detail.icon} className="h-5 w-5" />
                  <p className="font-extrabold" style={{ color: pick?.ring === "macro" ? GOLD : TEAL }}>{detail.key}</p>
                  <span className="rounded-full px-2 py-0.5 text-[.62rem] font-extrabold uppercase tracking-[.12em]"
                    style={{ background: pick?.ring === "macro" ? "#f6efe0" : "#e7f3ef", color: pick?.ring === "macro" ? GOLD : TEAL }}>
                    {pick?.ring === "macro" ? "broad · macro" : "task · micro"}
                  </span>
                </div>
                <p className="mt-2 text-[.88rem] leading-relaxed" style={{ color: "#3a4a48" }}>{detail.d}</p>
              </motion.div>
            ) : (
              <motion.p key="hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-[.85rem]" style={{ color: MUTED }}>
                Pick any layer — the inner three touch the firm daily; the outer six shift slowly and indirectly.
              </motion.p>
            )}
          </AnimatePresence>
          <MStatus>
            {detail
              ? `${detail.key} — ${detail.d}`
              : "9 layers loaded · 3 task + 6 macro. Nothing sells in a vacuum."}
          </MStatus>
        </div>
      </div>
    </MachineCard>
  );
}

export function MktgEnvironmentSection() {
  return (
    <Section id="environment">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 6"
        title={<>The environment <span style={{ background: "linear-gradient(135deg,#14b8a6,#a97d2c)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>around every sale</span></>}
        lead="No organisation sells into a vacuum. Around every transaction sits a task environment the firm touches daily — suppliers, customers, competitors — wrapped in a broad macro environment that shifts underneath it: demographics, law, the economy, culture, climate and technology."
      />
      <Reveal><EnvRingMachine /></Reveal>

      <ReadStep n="1" title="The task environment — the entities you actually touch" sub="Immediate, direct, daily" />
      <Reveal>
        <p className={PROSE}>
          The <strong style={{ color: TEAL }}>task (micro) environment</strong> consists of the immediate entities with
          which marketing directly interacts. Three of them matter most. <strong>Suppliers</strong> provide the
          resources needed for operations. <strong>Customers</strong> are the target market for products and services.
          And <strong>competitors</strong> are the other organizations offering similar products or services. These are
          the players a marketer negotiates with, prices against and pitches to — today, this week, this quarter.
        </p>
      </Reveal>
      <Reveal><Callout kind="insight" title="Why the ring matters">
        Marketing operates within two distinct environments at once. The task environment reacts to you; the
        broad environment simply moves — and every player inside the inner ring stands on the same shifting
        macro ground.
      </Callout></Reveal>

      <ReadStep n="2" title="The broad (macro) environment — six forces you navigate, not control" sub="Indirect factors every organisation must consider" />
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {MACRO_ENV.map((m) => (
            <div key={m.key} className="card-warm lift p-5">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: "#f6efe0" }}>
                  <EnvIcon name={m.icon} className="h-5 w-5" />
                </span>
                <p className="font-extrabold" style={{ color: GOLD }}>{m.key}</p>
              </div>
              <p className="mt-2 text-[.86rem] leading-relaxed" style={{ color: "#3a4a48" }}>{m.d}</p>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal>
        <p className={`${PROSE} mt-5`}>
          Notice how concrete each force is. A minimum wage law (political-legal) changes what a delivery
          platform pays. GST reforms and recessions (economic) change what a family spends. Dietary
          preferences (socio-cultural) decide whether a new snack lands at all. The floppy-disk-to-cloud and
          UPI stories (technological) show entire industries rebuilt from the outside in. Climate and natural
          factors (physical) reshape logistics and demand by season.
        </p>
      </Reveal>

      <Reveal>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          <KV k="Task / micro" v="Immediate entities marketing directly interacts with: suppliers, customers, competitors." />
          <KV k="Broad / macro" v="Indirect forces to consider: demographic, political-legal, economic, socio-cultural, physical, technological." />
        </div>
      </Reveal>

      <div className="mt-10"><Reveal>
        <Takeaways items={[
          <>Marketing operates within <strong>two distinct environments</strong>: the task (micro) and the broad (macro).</>,
          <>The task environment is the set of <strong>immediate entities</strong> — suppliers, customers, competitors — that marketing directly interacts with.</>,
          <>The broad environment is <strong>indirect but decisive</strong>: demographic, political-legal, economic, socio-cultural, physical and technological elements.</>,
          <>Macro forces are <strong>navigated, not controlled</strong> — GST reforms, minimum wage laws, dietary shifts and UPI arrive whether or not the firm is ready.</>,
        ]} />
      </Reveal></div>
    </Section>
  );
}

/* ============================================================
   LECTURE 6 · CHAPTER 2 — exchange-system
   ============================================================ */

const EXCH_STEPS = [
  { side: "give", label: "Money", detail: "payment for the meal" },
  { side: "give", label: "Personal information", detail: "address, contact details, location, preferences, and dietary choices" },
  { side: "give", label: "Time", detail: "searching through menus and restaurants" },
  { side: "give", label: "Ratings & reviews", detail: "feedback on the experience" },
  { side: "get", label: "The meal itself", detail: "the physical product" },
  { side: "get", label: "Convenience", detail: "access to multiple restaurants and cuisines in one platform" },
  { side: "get", label: "Information", detail: "restaurant ratings, reviews, and delivery tracking" },
  { side: "get", label: "Multiple choices", detail: "access to diverse dining options" },
  { side: "get", label: "Transparency", detail: "real-time order tracking and delivery status" },
] as const;

function ExchangeFlowMachine() {
  const { i, playing, next, reset, toggle } = usePlayer(EXCH_STEPS.length, 1900);
  const step = EXCH_STEPS[i];
  const givePct = 78;
  const getPct = 8;
  return (
    <MachineCard title="What a Zomato order really trades" chip="9 flows, 1 tap each">
      <div className="mt-5">
        <div className="flex items-center justify-between text-[.7rem] font-extrabold uppercase tracking-[.14em]" style={{ color: MUTED }}>
          <span style={{ color: TEAL }}>You (consumer)</span>
          <span style={{ color: GOLD }}>Zomato (platform)</span>
        </div>
        <div className="relative mt-2 h-14 rounded-full" style={{ background: CREAM_BG, border: `1px solid ${CREAM_BORDER}` }}>
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[.66rem] font-extrabold" style={{ color: TEAL }}>GIVE →</span>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[.66rem] font-extrabold" style={{ color: GOLD }}>← GET</span>
          <motion.div
            className="absolute top-1/2 flex h-9 min-w-[5.5rem] -translate-y-1/2 items-center justify-center rounded-full px-3 text-[.72rem] font-extrabold shadow-md"
            style={{ background: step.side === "give" ? "linear-gradient(135deg,#14b8a6,#0f766e)" : "linear-gradient(135deg,#e3c26b,#a97d2c)", color: step.side === "give" ? "#f2fbf8" : "#231a08" }}
            initial={false}
            animate={{ left: `${step.side === "give" ? givePct : getPct}%` }}
            transition={{ type: "spring", stiffness: 90, damping: 16 }}
          >
            {step.label}
          </motion.div>
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5" role="list">
          {EXCH_STEPS.map((s, idx) => {
            const on = idx === i;
            return (
              <button key={s.label} type="button" role="listitem"
                onClick={() => { reset(); }}
                className="rounded-lg px-2.5 py-1.5 text-[.7rem] font-bold transition-transform hover:-translate-y-0.5"
                style={{
                  background: on ? (s.side === "give" ? "linear-gradient(135deg,#14b8a6,#0f766e)" : "linear-gradient(135deg,#e3c26b,#a97d2c)") : s.side === "give" ? "#eef5f2" : "#f6efe0",
                  color: on ? (s.side === "give" ? "#f2fbf8" : "#231a08") : s.side === "give" ? TEAL : GOLD,
                  opacity: idx < i ? 0.55 : 1,
                }}
                aria-label={`Jump to exchange: ${s.side === "give" ? "you give" : "you receive"} ${s.label}`}>
                {s.side === "give" ? "↑ " : "↓ "}{s.label}
              </button>
            );
          })}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <MButton tone={playing ? "gold" : "primary"} onClick={toggle} label={playing ? "Pause the exchange flow" : "Play the exchange flow"}>
            {playing ? "Pause" : "Play"}
          </MButton>
          <MButton onClick={next} label="Next exchange element">Next</MButton>
          <MButton onClick={reset} label="Reset the exchange flow"><RotateCcw className="mr-1 inline h-3.5 w-3.5" />Reset</MButton>
        </div>
        <MStatus>
          Step {i + 1} of {EXCH_STEPS.length} · {step.side === "give" ? "You give" : "You receive"}: {step.label} — {step.detail}.
        </MStatus>
      </div>
    </MachineCard>
  );
}

function ExchangeEconomySvg() {
  const draw = (d: string, delay: number, color = TEAL_BRIGHT, dash = false) => (
    <motion.path d={d} fill="none" stroke={color} strokeWidth={2.2} strokeDasharray={dash ? "6 5" : "0"}
      markerEnd={dash ? "url(#ex-ah-g)" : "url(#ex-ah)"}
      initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }}
      transition={{ duration: 0.7, delay }} />
  );
  return (
    <svg viewBox="0 0 760 330" className="h-auto w-full" role="img"
      aria-label="The modern exchange economy: resource, manufacturing, intermediary and consumer markets linked by continuous exchanges, with the government market sitting centrally exchanging taxes and services with all">
      <defs>
        <marker id="ex-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill={TEAL_BRIGHT} /></marker>
        <marker id="ex-ah-g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill={GOLD} /></marker>
      </defs>
      {[
        { x: 30, label: "Resource", sub: "market", fill: "#e7f3ef", stroke: "#7fb5aa", tc: TEAL },
        { x: 210, label: "Manufacturing", sub: "market", fill: "#e7f3ef", stroke: "#7fb5aa", tc: TEAL },
        { x: 400, label: "Intermediary", sub: "market", fill: "#e7f3ef", stroke: "#7fb5aa", tc: TEAL },
        { x: 590, label: "Consumer", sub: "market", fill: "#e7f3ef", stroke: "#7fb5aa", tc: TEAL },
      ].map((m) => (
        <g key={m.label}>
          <rect x={m.x} y={110} width={140} height={72} rx={14} fill={m.fill} stroke={m.stroke} strokeWidth={1.8} />
          <text x={m.x + 70} y={142} textAnchor="middle" fontSize="14" fontWeight="800" fill={m.tc}>{m.label}</text>
          <text x={m.x + 70} y={160} textAnchor="middle" fontSize="11" fontWeight="700" fill={MUTED}>{m.sub}</text>
        </g>
      ))}
      {draw("M 172 128 H 206", 0.1)}
      {draw("M 352 128 H 396", 0.35)}
      {draw("M 542 128 H 586", 0.6)}
      {draw("M 586 168 H 546", 0.85, GOLD)}
      {draw("M 396 168 H 356", 1.0, GOLD)}
      {draw("M 206 168 H 176", 1.15, GOLD)}
      {draw("M 30 200 C 120 268, 620 268, 712 196", 1.3, "#8fb6ad", true)}
      <text x={140} y={122} fontSize="10.5" fontWeight="800" fill={TEAL}>resources ↔ money</text>
      <text x={330} y={122} fontSize="10.5" fontWeight="800" fill={TEAL}>finished goods ↔ money</text>
      <text x={508} y={122} fontSize="10.5" fontWeight="800" fill={TEAL}>products &amp; services ↔ money</text>
      <text x={560} y={192} fontSize="10.5" fontWeight="800" fill={GOLD}>money flows back</text>
      <text x={380} y={290} textAnchor="middle" fontSize="11" fontWeight="800" fill="#6f8a83">consumer market → resource market: money exchanged for resources and labor</text>
      {/* government sits centrally */}
      <rect x={310} y={14} width={150} height={54} rx={13} fill="#f6efe0" stroke={GOLD} strokeWidth={1.8} />
      <text x={385} y={37} textAnchor="middle" fontSize="12.5" fontWeight="800" fill={GOLD}>Government</text>
      <text x={385} y={54} textAnchor="middle" fontSize="10.5" fontWeight="700" fill={MUTED}>market — taxes ↔ services</text>
      {draw("M 320 68 C 250 84, 200 92, 160 108", 1.45, GOLD, true)}
      {draw("M 450 68 C 520 84, 570 92, 610 108", 1.6, GOLD, true)}
      <text x={168} y={76} fontSize="10" fontWeight="700" fill={GOLD}>exchanges with all markets</text>
    </svg>
  );
}

const JOURNEY_PARTIES = [
  { name: "Student", icon: GraduationCap, gives: ["Payment", "Time", "Attention", "Personal data", "Trust"], gets: ["Meal", "Convenience", "Tracking information"] },
  { name: "Restaurant", icon: UtensilsCrossed, gives: ["Food", "Menu information", "Packaging"], gets: ["Orders", "Revenue", "Visibility"] },
  { name: "Delivery Partner", icon: Bike, gives: ["Pickup", "Delivery", "Reliability"], gets: ["Earnings", "Access to orders"] },
  { name: "Platform", icon: Smartphone, gives: ["App interface", "Restaurant matching", "Payment processing", "Tracking"], gets: ["Commission", "Data", "Loyalty", "Ratings"] },
] as const;

export function MktgExchangeSection() {
  return (
    <Section id="exchange-system">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 6"
        title={<>Marketing is an <span style={{ background: "linear-gradient(135deg,#14b8a6,#a97d2c)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>exchange system</span></>}
        lead="A food order looks like money for a meal. It isn't. Every Zomato order trades information, time, attention and trust — and returns convenience, choices and transparency. Exchange is far bigger than the transaction."
      />

      <ReadStep n="1" title="Beyond money-for-product" sub="Multiple elements move in every marketing transaction" />
      <Reveal>
        <p className={PROSE}>
          Marketing exchanges involve far more than the simple transfer of money for a product. Every
          transaction also moves <strong>benefits and convenience</strong>, <strong>costs and efforts</strong>,{" "}
          <strong>information and personal data</strong>, <strong>time and attention</strong>, and{" "}
          <strong>risk and trust</strong>. Watch a single Zomato order run through all of them:
        </p>
      </Reveal>
      <Reveal><ExchangeFlowMachine /></Reveal>

      <ReadStep n="2" title="The modern exchange economy" sub="Interconnected markets with continuous exchanges and transactions" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <ExchangeEconomySvg />
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <KV k="Resource → Manufacturing" v="Resources exchanged for money." />
            <KV k="Manufacturing → Intermediary" v="Finished goods exchanged for money." />
            <KV k="Intermediary → Consumer" v="Products and services exchanged for money." />
            <KV k="Consumer → Resource" v="Money exchanged for resources and labor." />
          </div>
          <p className="mt-3 text-[.85rem] font-semibold" style={{ color: GOLD }}>
            The government market sits centrally, exchanging taxes and services with all other markets.
          </p>
        </div>
      </Reveal>

      <ReadStep n="3" title="Exchange · transaction · relationship" sub="Three concepts, three scopes" />
      <Reveal>
        <div className="grid gap-3">
          <KV k="Exchange" v="Offering and receiving something of value in return. Not limited to money — can involve information, convenience, effort, time, or any element of value. Broader than buying and selling; the foundation of all marketing systems." />
          <KV k="Transaction" v="An agreed-upon exchange where terms are clearly defined and performance is expected. Always involves money or monetary value, between two parties, on agreed terms — capturing value at a particular moment in time." />
          <KV k="Relationship" v="An ongoing series of exchanges and transactions that build value over time. Built on mutual satisfaction; when both parties consistently receive value it leads to loyalty, repeat business, and advocacy." />
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {[
            { t: "Exchange", d: "All types of value", o: "Foundation of marketing", c: TEAL },
            { t: "Transaction", d: "Money, one moment in time", o: "Completed sale or service delivery", c: GOLD },
            { t: "Relationship", d: "Series over an extended period", o: "Customer loyalty and advocacy", c: ROSE },
          ].map((x) => (
            <div key={x.t} className="card-warm lift p-5">
              <p className="font-extrabold" style={{ color: x.c }}>{x.t}</p>
              <p className="mt-1 text-[.82rem] leading-relaxed" style={{ color: "#3a4a48" }}>{x.d}</p>
              <p className="mt-2 text-[.72rem] font-extrabold uppercase tracking-[.12em]" style={{ color: MUTED }}>→ {x.o}</p>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <KV k="Simple marketing system" v="Industry (set of sellers/producers) + market (set of buyers/consumers), connected by four flows." />
          <KV k="The four flows" v="Communication (information, both ways), goods & services (industry → market), money (market → industry), information/feedback (market → industry)." />
        </div>
        <p className={`${PROSE} mt-3`}>
          The system is <strong>dynamic and continuous</strong>, with all elements constantly interacting.
        </p>
      </Reveal>

      <ReadStep n="4" title="Customer journey mapping — four parties, eight ledgers" sub="The food delivery exercise, mapped" />
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {JOURNEY_PARTIES.map((p) => (
            <div key={p.name} className="card-warm lift p-5">
              <div className="flex items-center gap-2">
                <p.icon className="h-5 w-5" aria-hidden />
                <p className="font-extrabold" style={{ color: INK }}>{p.name}</p>
              </div>
              <p className="mt-3 text-[.68rem] font-extrabold uppercase tracking-[.14em]" style={{ color: TEAL }}>Gives</p>
              <ul className="mt-1 grid gap-1 text-[.82rem] leading-snug" style={{ color: "#3a4a48" }}>
                {p.gives.map((g) => <li key={g}>· {g}</li>)}
              </ul>
              <p className="mt-3 text-[.68rem] font-extrabold uppercase tracking-[.14em]" style={{ color: GOLD }}>Receives</p>
              <ul className="mt-1 grid gap-1 text-[.82rem] leading-snug" style={{ color: "#3a4a48" }}>
                {p.gets.map((g) => <li key={g}>· {g}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <Callout kind="story" title="Spotting exchanges inside the journey">
          Most activities throughout the customer journey are <strong>exchanges</strong> of various values —
          information, convenience, trust. The specific moment when payment is processed and confirmed is the{" "}
          <strong>transaction</strong>. And <strong>relationships</strong> develop when repeat orders occur and
          customers become advocates for the platform.
        </Callout>
      </Reveal>

      <div className="mt-10"><Reveal>
        <Takeaways items={[
          <>Marketing functions fundamentally as an <strong>exchange system</strong> — money is only one of many things traded.</>,
          <>A Zomato order exchanges <strong>money, personal information, time and ratings</strong> for <strong>the meal, convenience, information, choices and transparency</strong>.</>,
          <>The modern exchange economy links <strong>resource → manufacturing → intermediary → consumer</strong> markets, with the <strong>government market</strong> exchanging taxes and services with all.</>,
          <><strong>Exchange</strong> is any value offered and received; a <strong>transaction</strong> is a money-based moment in time; a <strong>relationship</strong> is the series that builds loyalty and advocacy.</>,
          <>In the journey map, every party — student, restaurant, delivery partner, platform — runs its own <strong>gives-and-receives ledger</strong>.</>,
        ]} />
      </Reveal></div>
    </Section>
  );
}

/* ============================================================
   LECTURE 7 · CHAPTER 1 — value-price-features
   ============================================================ */

const BENEFIT_CHIPS = [
  { k: "Functional", d: "Direct utility and performance of the product" },
  { k: "Psychological", d: "Emotional satisfaction and confidence" },
  { k: "Economic", d: "Price-related advantages and discounts" },
  { k: "Personal", d: "Individual satisfaction" },
  { k: "Image", d: "How the product affects one's social perception" },
] as const;

const SACRIFICE_CHIPS = [
  { k: "Money paid", d: "The direct monetary cost" },
  { k: "Time searching", d: "Hours spent hunting for the right product" },
  { k: "Effort comparing", d: "Mental work of comparing products" },
  { k: "Travel to stores", d: "Physical trips to evaluate and buy" },
  { k: "Psychological & opportunity", d: "Stress of choosing — and the chance to use that money elsewhere" },
] as const;

function PenValueMachine() {
  const [ctx, setCtx] = useState<"exam" | "docs">("exam");
  const [bens, setBens] = useState<number[]>([0]);
  const [sacs, setSacs] = useState<number[]>([0]);
  const value = bens.length - sacs.length;
  const toggle = (arr: number[], set: (x: number[]) => void, i: number) =>
    set(arr.includes(i) ? arr.filter((x) => x !== i) : [...arr, i]);

  return (
    <MachineCard title="The pen machine — value ≠ price" chip="same ink, different value">
      {/* context toggle */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-[.78rem] font-extrabold uppercase tracking-[.12em]" style={{ color: MUTED }}>Scene:</span>
        {(["exam", "docs"] as const).map((c) => (
          <button key={c} type="button" onClick={() => setCtx(c)}
            className="rounded-lg px-3 py-1.5 text-[.74rem] font-bold transition-transform hover:-translate-y-0.5"
            style={{
              background: ctx === c ? "linear-gradient(135deg,#14b8a6,#0f766e)" : "#eef5f2",
              color: ctx === c ? "#f2fbf8" : TEAL,
            }}
            aria-label={c === "exam" ? "Scene: writing an exam" : "Scene: signing important documents"}>
            {c === "exam" ? "Writing an exam" : "Signing important documents"}
          </button>
        ))}
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl p-4" style={{ background: "#eef5f2", border: "1px solid #cfe6df" }}>
          <div className="flex items-center gap-2">
            <PenTool className="h-5 w-5" aria-hidden />
            <p className="font-extrabold" style={{ color: TEAL }}>₹5 pen</p>
          </div>
          <p className="mt-2 text-[.85rem] leading-relaxed" style={{ color: "#3a4a48" }}>
            {ctx === "exam"
              ? "Provides the same functional value as the ₹5,000 pen — the answers on paper are identical."
              : "Still writes. But next to the ₹5,000 pen, it carries none of the extra psychological weight in the room."}
          </p>
        </div>
        <div className="rounded-2xl p-4" style={{ background: "#f6efe0", border: "1px solid #e0c88f" }}>
          <div className="flex items-center gap-2">
            <Gem className="h-5 w-5" aria-hidden />
            <p className="font-extrabold" style={{ color: GOLD }}>₹5,000 pen</p>
          </div>
          <p className="mt-2 text-[.85rem] leading-relaxed" style={{ color: "#3a4a48" }}>
            {ctx === "exam"
              ? "Writes the same exam. Its higher price buys nothing functional here — value depends on context."
              : "Gains additional value from extended psychological benefits — status and confidence the moment you sign."}
          </p>
        </div>
      </div>

      {/* value = benefits - sacrifices meter */}
      <div className="mt-6">
        <p className="text-[.78rem] font-extrabold uppercase tracking-[.12em]" style={{ color: MUTED }}>
          Value = Benefits − Sacrifices · toggle the chips
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {BENEFIT_CHIPS.map((b, i) => {
            const on = bens.includes(i);
            return (
              <button key={b.k} type="button" onClick={() => toggle(bens, setBens, i)}
                className="rounded-lg px-2.5 py-1.5 text-[.72rem] font-bold transition-transform hover:-translate-y-0.5"
                style={{ background: on ? "linear-gradient(135deg,#14b8a6,#0f766e)" : "#eef5f2", color: on ? "#f2fbf8" : TEAL }}
                aria-label={`Toggle benefit: ${b.k} — ${b.d}`}>
                + {b.k}
              </button>
            );
          })}
        </div>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {SACRIFICE_CHIPS.map((s, i) => {
            const on = sacs.includes(i);
            return (
              <button key={s.k} type="button" onClick={() => toggle(sacs, setSacs, i)}
                className="rounded-lg px-2.5 py-1.5 text-[.72rem] font-bold transition-transform hover:-translate-y-0.5"
                style={{ background: on ? "linear-gradient(135deg,#e3c26b,#a97d2c)" : "#f6efe0", color: on ? "#231a08" : GOLD }}
                aria-label={`Toggle sacrifice: ${s.k} — ${s.d}`}>
                − {s.k}
              </button>
            );
          })}
        </div>
        <div className="mt-4 flex items-center gap-4">
          <div className="h-6 flex-1 overflow-hidden rounded-full" style={{ background: "#efe9db" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: value >= 0 ? "linear-gradient(90deg,#14b8a6,#0f766e)" : "linear-gradient(90deg,#d98ba0,#9f3d54)" }}
              initial={false}
              animate={{ width: `${Math.round(((value + 4) / 9) * 100)}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            />
          </div>
          <span className="font-mono-warm text-[1.05rem] font-extrabold" style={{ color: value >= 0 ? TEAL : ROSE }}>
            {value >= 0 ? `+${value}` : value}
          </span>
        </div>
        <MStatus>
          {value > 0
            ? "Value is perceived — benefits outweigh sacrifices. This is the only moment value exists."
            : value === 0
            ? "Borderline — benefits merely match sacrifices. The consumer is unconvinced."
            : "No value perceived — sacrifices outweigh benefits, no matter how good the product is."}
        </MStatus>
      </div>
    </MachineCard>
  );
}

export function MktgValuePriceSection() {
  return (
    <Section id="value-price-features">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 7"
        title={<>Value, price &amp; the <span style={{ background: "linear-gradient(135deg,#14b8a6,#a97d2c)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>feature trap</span></>}
        lead="A ₹5 pen and a ₹5,000 pen can write the same exam. This session untangles the three distinctions most marketers blur: value vs price, features vs benefits, and benefits vs value."
      />

      <ReadStep n="1" title="Value is not price" sub="An expensive product does not necessarily provide higher value" />
      <Reveal>
        <p className={PROSE}>
          <strong style={{ color: TEAL }}>Value is subjective</strong> — it depends on the individual consumer&apos;s
          perception. A low-priced item can be more valuable than a high-priced item depending on the context
          and the benefits derived. The lecture&apos;s example: a <strong>₹5 pen for exam writing provides the same
          functional value as a ₹5,000 pen</strong> — but the expensive pen gains additional value from extended
          psychological benefits when signing important documents. Switch the scene in the machine above and
          watch which pen wins.
        </p>
      </Reveal>

      <ReadStep n="2" title="Features are not benefits" sub="Product characteristics vs the value derived from them" />
      <Reveal>
        <p className={PROSE}>
          <strong>Features</strong> are product characteristics; <strong>benefits</strong> are the value derived
          from those features. Not every feature generates a benefit for every consumer, and features do not
          directly translate to benefits. A pen with a <strong>fine nib</strong> (feature) may provide{" "}
          <strong>smooth writing without ink spillage</strong> (benefit) — but that benefit is not universal to
          all users. A spec sheet is not a value proposition.
        </p>
      </Reveal>

      <ReadStep n="3" title="Benefits become value only against sacrifices" sub="Value = Benefits − Sacrifices" />
      <Reveal><PenValueMachine /></Reveal>
      <Reveal>
        <p className={`${PROSE} mt-5`}>
          A consumer perceives value when they believe the benefits they gain outweigh the sacrifices they
          make. And sacrifices extend well beyond the price tag. Buying a laptop involves not just the purchase
          price but also <strong>time invested in research</strong>, <strong>effort to visit physical stores</strong>,
          and the <strong>opportunity to use that money elsewhere</strong>.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <KV k="Direct costs" v="The monetary amount paid for the product." />
          <KV k="Abstract / indirect costs" v="Time spent searching, effort to compare products, physical travel to stores, psychological costs, and opportunity costs." />
        </div>
      </Reveal>

      <ReadStep n="4" title="The benefit dimensions" sub="Components of customer perceived benefit" />
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[...BENEFIT_CHIPS, { k: "Extended psychological", d: "Social status, social acceptability, and how others perceive the consumer using the product — the uncapped one." }].map((b, i) => (
            <div key={b.k} className="card-warm lift p-5">
              <div className="flex items-center justify-between">
                <p className="font-extrabold" style={{ color: i === 5 ? GOLD : TEAL }}>{b.k}</p>
                {i === 5 ? <span className="rounded-full px-2 py-0.5 text-[.62rem] font-extrabold" style={{ background: "#f6efe0", color: GOLD }}>uncapped → next chapter</span> : null}
              </div>
              <p className="mt-2 text-[.85rem] leading-relaxed" style={{ color: "#3a4a48" }}>{b.d}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-10"><Reveal>
        <Takeaways items={[
          <><strong>Never confuse value with price</strong> — lower-priced items can be more valuable depending on context.</>,
          <><strong>Features and benefits are distinct</strong> — a fine nib is a feature; smooth writing without spillage is a benefit, and not for every user.</>,
          <><strong>Benefits become value only when compared against sacrifices</strong> — Value = Benefits − Sacrifices.</>,
          <>Sacrifices include <strong>both direct monetary costs and abstract costs</strong> — search time, comparison effort, travel, psychology, opportunity.</>,
        ]} />
      </Reveal></div>
    </Section>
  );
}

/* ============================================================
   LECTURE 7 · CHAPTER 2 — luxury-lever
   ============================================================ */

const CAPS = [
  { k: "Functional", cap: 42, step: 14 },
  { k: "Psychological", cap: 48, step: 16 },
  { k: "Economic", cap: 39, step: 13 },
] as const;

function CapMachine() {
  const [presses, setPresses] = useState(0);
  const maxPresses = 8;
  const ext = presses * 13; // uncapped bar (clamps visually at 100)
  const price = 100 + Math.min(presses, 8) * 612.5;
  const capped = CAPS.map((c) => ({ ...c, v: Math.min(presses * c.step, c.cap) }));
  const allCapped = capped.every((c) => presses * c.step >= c.cap);

  return (
    <MachineCard dark title="The cap machine" chip="3 benefits hit ceilings · 1 never does">
      <p className="mt-2 max-w-3xl text-[.9rem] leading-relaxed" style={{ color: "#9fbcb4" }}>
        Press &ldquo;invest&rdquo; to pour money into branding and perception. Watch the three ordinary benefit
        bars slam into their caps — and the extended psychological bar keep climbing, taking the pen&apos;s price
        from <strong style={{ color: GOLD_L }}>₹100</strong> toward{" "}
        <strong style={{ color: GOLD_L }}>₹5,000 and beyond</strong>.
      </p>
      <div className="mt-5 grid gap-4">
        {capped.map((c) => {
          const hit = presses * c.step >= c.cap;
          return (
            <div key={c.k}>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-[.72rem] font-extrabold uppercase tracking-[.12em]" style={{ color: "#9fbcb4" }}>
                  {c.k} benefit
                </span>
                {hit ? (
                  <span className="rounded-full px-2 py-0.5 text-[.62rem] font-extrabold" style={{ background: "rgba(159,61,84,.25)", color: "#e8a7b6" }}>
                    CAP — can&apos;t grow without more cost
                  </span>
                ) : <span className="text-[.68rem] font-bold" style={{ color: "#57756f" }}>growing…</span>}
              </div>
              <div className="relative h-5 w-full overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,.07)" }}>
                <motion.div className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg,#3f8f85,#0f766e)" }}
                  initial={false}
                  animate={{ width: `${(c.v / 60) * 100}%` }}
                  transition={{ type: "spring", stiffness: 110, damping: 20 }} />
                <div className="absolute inset-y-0" style={{ left: `${(c.cap / 60) * 100}%`, borderLeft: "2px dashed rgba(232,167,182,.7)" }} aria-hidden />
              </div>
            </div>
          );
        })}
        <div>
          <div className="mb-1 flex items-center justify-between">
            <span className="text-[.72rem] font-extrabold uppercase tracking-[.12em]" style={{ color: GOLD_L }}>
              Extended psychological benefit
            </span>
            <span className="text-[.68rem] font-extrabold" style={{ color: GOLD_L }}>NO LIMITATIONS — entirely subjective</span>
          </div>
          <div className="h-5 w-full overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,.07)" }}>
            <motion.div className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg,#e3c26b,#a97d2c)" }}
              initial={false}
              animate={{ width: `${Math.min(100, (ext / 104) * 100)}%` }}
              transition={{ type: "spring", stiffness: 110, damping: 20 }} />
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <MButton tone="gold" onClick={() => setPresses((p) => Math.min(p + 1, maxPresses))}
          label="Invest further in branding and perception" disabled={presses >= maxPresses}>
          Invest in branding &amp; perception
        </MButton>
        <MButton onClick={() => setPresses(0)} label="Reset the cap machine">
          <RotateCcw className="mr-1 inline h-3.5 w-3.5" />Reset
        </MButton>
        <span className="rounded-2xl px-4 py-2 font-mono-warm text-[1.05rem] font-extrabold"
          style={{ background: "rgba(227,194,107,.12)", color: GOLD_L, border: "1px solid rgba(227,194,107,.3)" }}>
          the ₹100 pen now sells for ₹{price.toLocaleString("en-IN")}{presses >= 8 ? "+" : ""}
        </span>
      </div>
      <MStatus dark>
        {presses === 0
          ? "A plain ₹100 pen. Every benefit dimension starts near the floor."
          : allCapped
          ? `Press ${presses}: all three ordinary benefits have hit their caps — functional, psychological and economic cannot be increased indefinitely without increasing costs. The extended psychological bar is still climbing.`
          : `Press ${presses}: the ordinary benefits are climbing toward their caps. Extended psychological benefit — status, social acceptability, how others see you — keeps rising with no ceiling.`}
      </MStatus>
    </MachineCard>
  );
}

export function MktgLuxurySection() {
  return (
    <Section id="luxury-lever">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 7"
        title={<>The <span style={{ background: "linear-gradient(135deg,#e3c26b,#a97d2c)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>luxury lever</span></>}
        lead="Functional, psychological and economic benefits all have caps. Extended psychological benefits — status, acceptability, how others see you — have none. That single fact explains a ₹100 pen selling at ₹5,000 and a ₹100 crore apartment."
      />

      <ReadStep n="1" title="Ordinary benefits have limits" sub="Upper and lower caps on the capped dimensions" />
      <Reveal>
        <p className={PROSE}>
          <strong>Functional, psychological, and economic benefits have upper and lower caps</strong> — they
          cannot be increased indefinitely without increasing costs. Every extra unit of function, comfort or
          discount costs the firm more to deliver, so the value curve flattens. Push as hard as you like: the
          ceiling holds.
        </p>
      </Reveal>
      <Reveal>
        <Callout kind="insight" title="The uncapped dimension">
          <strong>Extended psychological benefits have no limitations</strong> — these are entirely subjective
          and can create significant value differences. The same ₹100 pen can be sold for ₹5,000 or even higher
          based solely on the extended psychological benefit created through branding and perception.
        </Callout>
      </Reveal>
      <Reveal><CapMachine /></Reveal>

      <ReadStep n="2" title="How the luxury sector operates" sub="Manipulating extended psychological benefits" />
      <Reveal>
        <p className={PROSE}>
          Luxury brands <strong>primarily operate by manipulating extended psychological benefits</strong>. They
          emphasize exclusivity, premiumness, social status, and belonging to elite circles. The
          &ldquo;overcharging&rdquo; in luxury sectors is justified through enhanced psychological benefits rather
          than superior functional attributes.
        </p>
        <Callout kind="story" title="Camellias — a ₹100 crore apartment">
          A ₹100 crore apartment in an exclusive society like <strong>Camellias</strong> derives its value from{" "}
          <strong>social status and association with prominent individuals</strong> — not from superior
          functional features. The walls are walls; the address is the product.
        </Callout>
      </Reveal>

      <ReadStep n="3" title="Marketing without physical products" sub="Information, attention, data and concepts" />
      <Reveal>
        <p className={PROSE}>
          Marketing can exist without physical products or services. Marketing involves the{" "}
          <strong>exchange of information, attention, data, and concepts</strong> — not solely monetary
          transactions. Concepts are marketed for <strong>social causes</strong> and{" "}
          <strong>religious beliefs</strong>, and the attention-based economy runs on it —{" "}
          <strong>free apps that collect user data</strong> are marketing without a price tag at all.
        </p>
      </Reveal>

      <ReadStep n="4" title="The consumer's perspective" sub="Value is subjective — and aspiration counts" />
      <Reveal>
        <div className="grid gap-3">
          <KV k="Subjective" v="Value assessment is entirely subjective and individual-driven — different consumers derive different values from the same product." />
          <KV k="Target audience" v="Comprises individuals with similar value perceptions — not necessarily those with the most purchasing power." />
          <KV k="Aspirational consumers" v="Also constitute target audiences — people who don't own it yet but perceive its value." />
        </div>
      </Reveal>

      <div className="mt-10"><Reveal>
        <Takeaways items={[
          <>Functional, psychological and economic benefits <strong>have caps</strong> — they cannot grow indefinitely without growing costs.</>,
          <><strong>Extended psychological benefits are uncapped</strong> — the most powerful lever for increasing perceived value.</>,
          <>Luxury brands live on this lever: <strong>exclusivity, premiumness, social status, elite belonging</strong> — a ₹100 crore Camellias apartment sells status, not function.</>,
          <>Marketing works <strong>without physical products</strong> — information, attention, data and concepts are marketable.</>,
          <>A target audience is a group with <strong>similar value perceptions</strong> — aspirational consumers included.</>,
        ]} />
      </Reveal></div>
    </Section>
  );
}

/* ============================================================
   LECTURE 8 · CHAPTER 1 — es-ds
   ============================================================ */

const ES_DS_STATES = {
  none: { es: 62, ds: 62, label: "No campaign" },
  itch: { es: 30, ds: 62, label: "Itch Guard — lower the ES" },
  kohler: { es: 62, ds: 92, label: "Kohler — raise the DS" },
  dual: { es: 34, ds: 90, label: "Clean & Clear — dual" },
} as const;

type GapKey = keyof typeof ES_DS_STATES;

function GapMachine() {
  const [k, setK] = useState<GapKey>("none");
  const s = ES_DS_STATES[k];
  const msgs: Record<GapKey, string> = {
    none: "ES = DS. The consumer is satisfied and perceives no need for a new product — the mind remains closed because there is no gap to fill.",
    itch: `Itch Guard highlights the negative aspects of the current situation — the embarrassment of scratching in public. ES pulled down to ${s.es}, DS held at ${s.ds} → gap ${s.ds - s.es}.`,
    kohler: `Kohler keeps the existing state positive but raises the desired state — premium quality, higher social status. DS pulled up to ${s.ds} → gap ${s.ds - s.es}.`,
    dual: `Clean & Clear does both at once — highlighting oily skin and acne (lower ES) while promoting clean, confident skin (raise DS). Gap ${s.ds - s.es} — the most effective strategy.`,
  };
  return (
    <MachineCard title="Manufacture the gap" chip="three strategies, one lever each">
      <div className="mt-5 flex flex-wrap gap-2">
        <MButton tone={k === "itch" ? "primary" : "ghost"} onClick={() => setK("itch")} label="Strategy: Itch Guard lowers the existing state">
          <ArrowDown className="mr-1 inline h-4 w-4" />Itch Guard · lower ES
        </MButton>
        <MButton tone={k === "kohler" ? "gold" : "ghost"} onClick={() => setK("kohler")} label="Strategy: Kohler raises the desired state">
          <ArrowUp className="mr-1 inline h-4 w-4" />Kohler · raise DS
        </MButton>
        <MButton tone={k === "dual" ? "rose" : "ghost"} onClick={() => setK("dual")} label="Strategy: Clean and Clear does both">
          <MoveVertical className="mr-1 inline h-4 w-4" />Clean &amp; Clear · dual
        </MButton>
        <MButton onClick={() => setK("none")} label="Reset to no campaign">
          <RotateCcw className="mr-1 inline h-3.5 w-3.5" />No campaign
        </MButton>
      </div>
      <div className="mt-5"><GapBars es={s.es} ds={s.ds} esNote="where the consumer is now" dsNote="where they believe they deserve to be" /></div>
      <MStatus>{msgs[k]}</MStatus>
    </MachineCard>
  );
}

export function MktgEsDsSection() {
  return (
    <Section id="es-ds">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 8"
        title={<>Existing &amp; desired state — <span style={{ background: "linear-gradient(135deg,#14b8a6,#a97d2c)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>manufacturing the gap</span></>}
        lead="Every consumer lives in two states: the one they're in and the one they believe they deserve. When the two align, minds close. Marketing's oldest lever is pulling them apart."
      />

      <ReadStep n="1" title="Two states drive every purchase" sub="ES — where I am · DS — where I believe I deserve to be" />
      <Reveal>
        <div className="grid gap-3 md:grid-cols-2">
          <KV k="Existing State (ES)" v="The current situation or condition a consumer is in." />
          <KV k="Desired State (DS)" v="The ideal situation a consumer wants to achieve — or the state they believe they deserve." />
        </div>
        <p className={`${PROSE} mt-4`}>
          Organizations create value in consumers&apos; minds by <strong>manipulating these states</strong>. When
          ES and DS sit at the same level, consumers are satisfied and have no need for a new product — the mind
          stays closed because there is no gap to fill.
        </p>
      </Reveal>

      <ReadStep n="2" title="Three ways to open the gap" sub="Lower ES · raise DS · or both at once" />
      <Reveal><GapMachine /></Reveal>

      <ReadStep n="3" title="The expectation gap and inertia" sub="Why the gap must exist before any purchase" />
      <Reveal>
        <p className={PROSE}>
          The gap between existing and desired states creates an <strong>&ldquo;inertia&rdquo; that motivates
          consumers to take action</strong>. When ES and DS are aligned, consumers perceive no need for a
          product. By creating a gap between these states, marketers <strong>instigate the desire to purchase</strong> —
          and <strong>the larger the gap, the stronger the motivation</strong> to bridge it through product
          consumption. Breaking this inertia is essential for marketers to demonstrate product value.
        </p>
        <Callout kind="why" title="The dual approach is the strongest">
          Pulling down the existing state and pulling up the desired state simultaneously generates stronger
          consumer desperation to purchase and restore balance — that is why Clean &amp; Clear&apos;s dual play
          works, and why it raises an ethical eyebrow (more on that in Lecture 10).
        </Callout>
      </Reveal>
      <Reveal>
        <div className="mt-2">
          <Quiz
            q="Kohler keeps the existing state positive but pulls the desired state significantly higher — 'your current state is great, but you deserve something better'. Which strategy is that?"
            options={["Reducing the existing state (Itch Guard style)", "Elevating the desired state", "The dual approach", "No-gap positioning"]}
            answer={1}
            explain="Kohler's entire play is elevating the desired state — premium quality and higher social status for affluent consumers — while leaving the existing state intact."
            source="Lecture 8 · ES/DS strategies"
          />
        </div>
      </Reveal>

      <div className="mt-10"><Reveal>
        <Takeaways items={[
          <>Every consumer holds an <strong>Existing State</strong> (current condition) and a <strong>Desired State</strong> (the state they believe they deserve).</>,
          <><strong>ES = DS means no need</strong> — satisfied consumers keep their minds closed; there is no gap to fill.</>,
          <>Marketers manufacture the gap by <strong>lowering ES (Itch Guard)</strong>, <strong>raising DS (Kohler)</strong>, or <strong>both (Clean &amp; Clear)</strong>.</>,
          <>The larger the gap, the stronger the motivation to bridge it — <strong>breaking the inertia</strong> is essential to demonstrating product value.</>,
        ]} />
      </Reveal></div>
    </Section>
  );
}

/* ============================================================
   LECTURE 8 · CHAPTER 2 — purchase-chain
   ============================================================ */

const CHAIN = [
  { t: "Value creation", d: "Emerges from the gap between existing and desired states." },
  { t: "Purchase intention", d: "Consumers develop the intention to buy when value is perceived." },
  { t: "Actual purchase", d: "Consumers follow through with the transaction — though impulsive purchases may skip the intention phase." },
  { t: "Experience", d: "Consumers use the product and form either positive or negative experiences." },
  { t: "Satisfaction", d: "Based on how well the product meets expectations." },
  { t: "Loyalty", d: "Repeated satisfaction over time leads to repeated purchases and brand loyalty." },
] as const;

function ChainMachine() {
  const { i, playing, next, reset, toggle } = usePlayer(CHAIN.length, 2000);
  const bw = 104, gap = 14;
  return (
    <MachineCard title="Walk the value purchase chain" chip="6 links · gap → loyalty">
      <svg viewBox="0 0 740 120" className="mt-4 h-auto w-full" role="img"
        aria-label="Six linked stages: value creation, purchase intention, actual purchase, experience, satisfaction, loyalty — with a token advancing stage by stage">
        <defs>
          <marker id="ch-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#7fb5aa" /></marker>
          <linearGradient id="ch-on" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#14b8a6" /><stop offset="100%" stopColor="#0f766e" />
          </linearGradient>
        </defs>
        {CHAIN.map((c, idx) => {
          const x = 8 + idx * (bw + gap);
          const on = idx === i;
          const done = idx < i;
          return (
            <g key={c.t}>
              <rect x={x} y={34} width={bw} height={52} rx={12}
                fill={on ? "url(#ch-on)" : done ? "#dff0eb" : "#f2efe7"}
                stroke={on ? TEAL_BRIGHT : done ? "#9dc4bb" : CREAM_BORDER} strokeWidth={on ? 2.4 : 1.5} />
              <text x={x + bw / 2} y={56} textAnchor="middle" fontSize="10.5" fontWeight="800"
                fill={on ? "#f2fbf8" : done ? TEAL : MUTED}>
                {c.t.split(" ")[0]}
              </text>
              <text x={x + bw / 2} y={72} textAnchor="middle" fontSize="9" fontWeight="700"
                fill={on ? "#d7efe9" : done ? "#5c8d84" : "#9aa8a4"}>
                {c.t.split(" ").slice(1).join(" ") || "·"}
              </text>
              <text x={x + bw / 2} y={24} textAnchor="middle" fontSize="9.5" fontWeight="800" fill={on ? TEAL : "#a9b8b4"}>
                {idx + 1}
              </text>
              {idx < CHAIN.length - 1 ? (
                <motion.line
                  x1={x + bw + 2} y1={60} x2={x + bw + gap - 4} y2={60}
                  stroke="#7fb5aa" strokeWidth={2} opacity={1} markerEnd="url(#ch-ah)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + idx * 0.08 }}
                />
              ) : null}
            </g>
          );
        })}
      </svg>
      <div className="mt-3 flex flex-wrap gap-2">
        <MButton tone={playing ? "gold" : "primary"} onClick={toggle} label={playing ? "Pause the chain player" : "Play the chain player"}>
          {playing ? "Pause" : "Play"}
        </MButton>
        <MButton onClick={next} label="Advance to the next chain stage">Next</MButton>
        <MButton onClick={reset} label="Reset the chain player"><RotateCcw className="mr-1 inline h-3.5 w-3.5" />Reset</MButton>
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}
          className="mt-4 rounded-2xl p-4" style={{ background: CREAM_BG, border: `1px solid ${CREAM_BORDER}` }}>
          <p className="font-extrabold" style={{ color: TEAL }}>Stage {i + 1} · {CHAIN[i].t}</p>
          <p className="mt-1 text-[.88rem] leading-relaxed" style={{ color: "#3a4a48" }}>{CHAIN[i].d}</p>
        </motion.div>
      </AnimatePresence>
      <MStatus>
        Stage {i + 1} of {CHAIN.length} · {CHAIN[i].t} — {CHAIN[i].d}
      </MStatus>
    </MachineCard>
  );
}

function AsymmetrySvg() {
  return (
    <svg viewBox="0 0 620 190" className="h-auto w-full" role="img"
      aria-label="Asymmetric impact: falling short of expectations weighs far more than exceeding them">
      <motion.path d="M 90 150 C 150 140, 210 136, 280 134" fill="none" stroke={TEAL_BRIGHT} strokeWidth={3}
        initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} />
      <motion.circle cx={280} cy={134} r={7} fill={TEAL_BRIGHT}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }} />
      <text x={90} y={172} fontSize="11.5" fontWeight="800" fill={TEAL}>exceeded expectations — a small, pleasant lift</text>
      <motion.path d="M 340 40 C 400 52, 450 84, 520 132" fill="none" stroke={ROSE} strokeWidth={7}
        initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} />
      <motion.circle cx={520} cy={132} r={10} fill={ROSE}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9 }} />
      <text x={340} y={26} fontSize="11.5" fontWeight="800" fill={ROSE}>fell short of expectations — a heavy, lasting drop</text>
      <text x={310} y={112} textAnchor="middle" fontSize="12" fontWeight="800" fill={MUTED}>the negative effect is significantly stronger</text>
    </svg>
  );
}

export function MktgChainSection() {
  return (
    <Section id="purchase-chain">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 8"
        title={<>The value <span style={{ background: "linear-gradient(135deg,#14b8a6,#a97d2c)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>purchase chain</span></>}
        lead="Value creation → purchase intention → actual purchase → experience → satisfaction → loyalty. Six links, one asymmetric rule: falling short hurts far more than exceeding delights."
      />

      <ReadStep n="1" title="Six links from gap to loyalty" sub="The journey from consumer awareness to loyalty" />
      <Reveal><ChainMachine /></Reveal>

      <ReadStep n="2" title="The satisfaction formula" sub="Transaction-based — expectation vs perceived performance" />
      <Reveal>
        <p className={PROSE}>
          Customer satisfaction is <strong>transaction-based</strong> and depends on comparing{" "}
          <strong>expectation with perceived performance</strong>. Satisfaction is high when perceived
          performance closely matches or exceeds expectations; the <strong>expectation gap</strong> — the
          difference between what consumers expect and what they actually receive — determines satisfaction
          levels.
        </p>
        <div className="card-warm mt-5 p-6 md:p-8">
          <AsymmetrySvg />
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl p-4" style={{ background: "#f7ecee", border: "1px solid #ecd2d9" }}>
              <p className="font-extrabold" style={{ color: ROSE }}>Critical threshold — both directions</p>
              <p className="mt-2 text-[.85rem] leading-relaxed" style={{ color: "#3a4a48" }}>
                There is an upper <em>and</em> lower limit to expectations. Delivering far below them fails —
                but delivering <strong>unexpectedly above</strong> them backfires too: pizza arriving in
                10 minutes creates <strong>doubt about the product&apos;s authenticity</strong>.
              </p>
            </div>
            <div className="rounded-2xl p-4" style={{ background: "#eef5f2", border: "1px solid #cfe6df" }}>
              <p className="font-extrabold" style={{ color: TEAL }}>Asymmetric impact</p>
              <p className="mt-2 text-[.85rem] leading-relaxed" style={{ color: "#3a4a48" }}>
                The negative effect of <strong>failing to meet expectations is significantly stronger</strong>{" "}
                than the positive effect of exceeding them. One bad delivery outweighs three good ones.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <ReadStep n="3" title="Loyalty ≠ satisfaction" sub="Repeated satisfaction over multiple transactions" />
      <Reveal>
        <div className="grid gap-3 md:grid-cols-2">
          <KV k="Satisfaction" v="Based on a single transaction or experience." />
          <KV k="Loyalty" v="Built on repeated positive experiences over an extended period." />
        </div>
        <p className={`${PROSE} mt-4`}>
          Loyalty is built on <strong>consistent satisfaction across multiple purchases over time</strong>. Loyal
          consumers keep purchasing because they consistently derive value. And the direction matters:{" "}
          <strong>loyalty cannot be created through rewards alone</strong> — it requires consistent product
          performance that meets or exceeds expectations. If consumers are not satisfied, they will not become
          loyal, regardless of reward programs.
        </p>
      </Reveal>

      <ReadStep n="4" title="Case: Apple AirPods vs Bose" sub="Superior audio quality lost to superior expectation management" />
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Ecosystem integration", d: "Seamless pairing with Apple devices created higher perceived value." },
            { t: "Design", d: "Sleek, modern design appealed to consumers and communicated status." },
            { t: "Functionality", d: "Using a single earbud provided flexibility Bose couldn't match." },
            { t: "Value perception", d: "Greater perceived value from integration and design — despite Bose's technical superiority." },
          ].map((c) => (
            <div key={c.t} className="card-warm lift p-5">
              <p className="font-extrabold" style={{ color: TEAL }}>{c.t}</p>
              <p className="mt-2 text-[.85rem] leading-relaxed" style={{ color: "#3a4a48" }}>{c.d}</p>
            </div>
          ))}
        </div>
        <Callout kind="story" title="The verdict">
          Apple <strong>exceeded consumer expectations</strong>; Bose failed to deliver on perceived
          performance. Satisfied Apple consumers became loyal — purchasing <strong>successive generations at
          higher prices</strong> — while Bose consumers switched to competitors. Satisfaction depends on meeting
          expectations relative to perceived performance, <strong>not solely on product quality</strong>.
        </Callout>
      </Reveal>

      <div className="mt-10"><Reveal>
        <Takeaways items={[
          <>The chain runs <strong>value → intention → purchase → experience → satisfaction → loyalty</strong> — and impulse purchases may skip the intention phase.</>,
          <>Satisfaction is <strong>transaction-based</strong>: perceived performance compared against expectations.</>,
          <>Impact is <strong>asymmetric</strong> — failing expectations hurts significantly more than exceeding them delights.</>,
          <>There are <strong>upper and lower thresholds</strong> — pizza in 10 minutes triggers doubt, not delight.</>,
          <><strong>Loyalty cannot be bought with rewards alone</strong> — it is repeated satisfaction over time; AirPods beat Bose on expectation management, not audio quality.</>,
        ]} />
      </Reveal></div>
    </Section>
  );
}

/* ============================================================
   LECTURE 9 · CHAPTER 1 — context-matters
   ============================================================ */

function StarRow({ filled, tone }: { filled: number; tone: string }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${filled} of 5 stars`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <motion.span key={s}
          initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15 + s * 0.1, type: "spring", stiffness: 300, damping: 15 }}>
          <Star
            className="h-5 w-5"
            style={{ color: tone }}
            fill={s <= filled ? tone : "none"}
          />
        </motion.span>
      ))}
    </div>
  );
}

function AnchorMachine() {
  const [phase, setPhase] = useState<0 | 1 | 2>(0);
  useEffect(() => {
    if (phase === 1) {
      const t = window.setTimeout(() => setPhase(2), 1100);
      return () => window.clearTimeout(t);
    }
  }, [phase]);
  const delivered = phase >= 1;
  const rated = phase >= 2;

  return (
    <MachineCard title="One delivery, two ratings" chip="the anchor decides">
      <div className="mt-4 rounded-2xl p-4" style={{ background: CREAM_BG, border: `1px solid ${CREAM_BORDER}` }}>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[.78rem] font-bold" style={{ color: INK }}>
          <span className="flex items-center gap-1"><UtensilsCrossed className="h-4 w-4" aria-hidden /> same meal, same restaurant</span>
          <span className="flex items-center gap-1"><Timer className="h-4 w-4" aria-hidden /> estimate 30–35 min · actual 34 min</span>
          <span>warm food · intact packaging</span>
          <span>cutlery missing for both</span>
        </div>
        <div className="relative mt-3 h-10">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full px-4 py-1.5 text-[.8rem] font-extrabold shadow"
            style={{ background: "linear-gradient(135deg,#14b8a6,#0f766e)", color: "#f2fbf8" }}>
            the identical 34-minute delivery
          </div>
          {delivered ? (
            <>
              <motion.span className="absolute left-1/2 top-1/2 -translate-y-1/2" aria-hidden
                initial={{ x: 0, opacity: 1 }} animate={{ x: "-16vw", opacity: 0 }} transition={{ duration: 0.9, ease: "easeOut" }}>
                <Bike className="h-6 w-6" />
              </motion.span>
              <motion.span className="absolute left-1/2 top-1/2 -translate-y-1/2" aria-hidden
                initial={{ x: 0, opacity: 1 }} animate={{ x: "16vw", opacity: 0 }} transition={{ duration: 0.9, ease: "easeOut" }}>
                <Bike className="h-6 w-6 -scale-x-100" />
              </motion.span>
            </>
          ) : null}
        </div>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <MktgPanel side="a" delivered={delivered} rated={rated} />
        <MktgPanel side="b" delivered={delivered} rated={rated} />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <MButton tone="primary" onClick={() => setPhase(1)} disabled={delivered} label="Deliver the order to both students">
          Deliver the order
        </MButton>
        <MButton onClick={() => setPhase(0)} label="Reset the perception machine">
          <RotateCcw className="mr-1 inline h-3.5 w-3.5" />Reset
        </MButton>
      </div>
      <MStatus>
        {phase === 0
          ? "Two students. Identical order conditions. Only their anchors differ — 25 minutes of fast history vs 45–50 minutes of rain."
          : phase === 1
          ? "Both orders just arrived — 34 minutes, warm, intact, no cutlery. Watch each anchor do its work…"
          : "Same objective performance → 2★ vs 5★. Satisfaction is performance judged against the anchor, plus context."}
      </MStatus>
    </MachineCard>
  );
}

export function MktgContextSection() {
  return (
    <Section id="context-matters">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 9"
        title={<>One delivery, <span style={{ background: "linear-gradient(135deg,#14b8a6,#a97d2c)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>two ratings</span></>}
        lead="Two students. Same restaurant, same meal, same 34-minute delivery — warm food, intact packaging, missing cutlery. One gives 2 stars, the other 5. The difference was never the service; it was the anchor."
      />

      <ReadStep n="1" title="The food delivery example" sub="Identical conditions, opposite verdicts" />
      <Reveal>
        <p className={PROSE}>
          Two students ordered the same meal from the same restaurant through a food delivery app with
          identical delivery conditions: <strong>estimated time 30–35 minutes</strong>,{" "}
          <strong>actual delivery 34 minutes for both</strong>, food <strong>warm with intact packaging</strong>,
          and <strong>cutlery missing for both</strong>. Yet one rated 2 stars and the other 5. Run the machine —
          the delivery is the same; the anchors are not.
        </p>
      </Reveal>
      <Reveal><AnchorMachine /></Reveal>

      <ReadStep n="2" title="Expectations and context" sub="Customers evaluate performance against an internal standard" />
      <Reveal>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="card-warm p-5">
            <p className="flex items-center gap-2 font-extrabold" style={{ color: ROSE }}>
              <Timer className="h-4 w-4" aria-hidden /> Student A — fast history
            </p>
            <p className="mt-2 text-[.86rem] leading-relaxed" style={{ color: "#3a4a48" }}>
              Previous fast deliveries created an expectation of a <strong>25-minute delivery</strong>. At 34
              minutes the service felt disappointing — and the missing cutlery became evidence for the
              prosecution. Likely to switch to another app.
            </p>
          </div>
          <div className="card-warm p-5">
            <p className="flex items-center gap-2 font-extrabold" style={{ color: GOLD }}>
              <CloudRainWind className="h-4 w-4" aria-hidden /> Student B — rainy evening
            </p>
            <p className="mt-2 text-[.86rem] leading-relaxed" style={{ color: "#3a4a48" }}>
              Heavy rain set realistic expectations of <strong>45–50 minutes</strong>. The order arrived in 34
              minutes with warm food and reliable tracking — ahead of the anchor. Highly satisfied, likely
              loyal.
            </p>
          </div>
        </div>
        <Callout kind="insight" title="Key insight">
          Satisfaction is not determined by objective performance alone, but by <strong>how performance
          compares to customer expectations and contextual factors</strong>. The gap between expected service
          and perceived service determines satisfaction — same 34 minutes, two completely different satisfaction
          levels.
        </Callout>
      </Reveal>

      <ReadStep n="3" title="Satisfaction vs loyalty — again, sharper" sub="A satisfied customer may not be loyal" />
      <Reveal>
        <div className="grid gap-3 md:grid-cols-2">
          <KV k="Satisfaction" v="Transaction-specific — an evaluation of a single purchase or service interaction. A satisfied customer may not be loyal." />
          <KV k="Loyalty" v="Willingness to continue choosing, preferring, and supporting a brand when alternatives are available — developed across multiple transactions over time." />
        </div>
        <Callout kind="story" title="The Swiggy switch">
          A customer <strong>highly satisfied with Zomato</strong> might still switch to Swiggy for a{" "}
          <strong>50% discount offer</strong>. True loyalty means <strong>continuing to choose a brand despite
          better alternatives being available</strong>.
        </Callout>
      </Reveal>
      <Reveal>
        <div className="mt-2">
          <Quiz
            q="A customer rates their Zomato order 5 stars — then switches to Swiggy next week for a 50% discount. What does this prove?"
            options={["They were never actually satisfied", "Satisfaction and loyalty are the same thing", "Satisfaction is transaction-specific; loyalty means staying despite alternatives", "Discounts create loyalty better than satisfaction does"]}
            answer={2}
            explain="Satisfaction is a transaction-specific evaluation. Loyalty is the willingness to keep choosing a brand when alternatives are available — which the 50% offer just tested, and the customer failed."
            source="Lecture 9 · satisfaction vs loyalty"
          />
        </div>
      </Reveal>

      <div className="mt-10"><Reveal>
        <Takeaways items={[
          <><strong>Context shapes perception</strong> — expectations and contextual factors matter as much as objective performance metrics.</>,
          <>Customers judge service against an <strong>internal anchor</strong>: 25 minutes of fast history vs 45–50 minutes of rain produced 2★ and 5★ from the same 34-minute delivery.</>,
          <><strong>Satisfaction is transaction-based</strong>; each interaction is evaluated independently.</>,
          <><strong>Loyalty develops over time</strong> — and is proven only when a customer keeps choosing you despite alternatives (the Swiggy 50% test).</>,
        ]} />
      </Reveal></div>
    </Section>
  );
}

/* ============================================================
   LECTURE 9 · CHAPTER 2 — loyalty-econ
   ============================================================ */

function EconCounters() {
  const [nonce, setNonce] = useState(0);
  return (
    <MachineCard title="The retention scoreboard" chip="press play — every number counts up">
      <div className="mt-4 flex flex-wrap gap-2">
        <MButton tone="primary" onClick={() => setNonce((n) => n + 1)} label="Animate the loyalty economics counters">
          <Repeat className="mr-1 inline h-4 w-4" />{nonce === 0 ? "Play the numbers" : "Replay"}
        </MButton>
        <MButton onClick={() => setNonce(0)} label="Reset the counters"><RotateCcw className="mr-1 inline h-3.5 w-3.5" />Reset</MButton>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl p-5" style={{ background: "#e7f3ef", border: "1px solid #cfe6df" }}>
          <p className="text-[.72rem] font-extrabold uppercase tracking-[.12em]" style={{ color: MUTED }}>Retention +5% → profit</p>
          <div className="mt-2 flex items-baseline gap-2">
            <MktgBigNum nonce={nonce} from={0} to={20} suffix="%" tone={TEAL} />
            <span className="font-extrabold" style={{ color: MUTED }}>–</span>
            <MktgBigNum nonce={nonce} from={0} to={90} suffix="%" tone={TEAL} />
          </div>
          <p className="mt-2 text-[.82rem] leading-relaxed" style={{ color: "#3a4a48" }}>
            Increasing the retention rate by just <strong>5%</strong> can increase business profit by{" "}
            <strong>20–90%</strong>.
          </p>
        </div>
        <div className="rounded-2xl p-5" style={{ background: "#f6efe0", border: "1px solid #e0c88f" }}>
          <p className="text-[.72rem] font-extrabold uppercase tracking-[.12em]" style={{ color: MUTED }}>Acquire vs retain</p>
          <div className="mt-2 flex items-baseline gap-3">
            <span className="flex items-baseline gap-1">
              <Coins className="h-5 w-5 self-center" aria-hidden />
              <MktgBigNum nonce={nonce} from={0} to={100} suffix="" tone={ROSE} />
            </span>
            <span className="text-[1.4rem] font-extrabold" style={{ color: MUTED }}>vs</span>
            <MktgBigNum nonce={nonce} from={0} to={20} suffix="" tone={GOLD} />
          </div>
          <p className="mt-2 text-[.82rem] leading-relaxed" style={{ color: "#3a4a48" }}>
            Acquiring a new customer costs <strong>5 times more</strong> than retaining a loyal one —{" "}
            <strong>$100 to acquire</strong> vs <strong>≈ $20 to retain</strong>.
          </p>
        </div>
        <div className="rounded-2xl p-5" style={{ background: "#e7f3ef", border: "1px solid #cfe6df" }}>
          <p className="text-[.72rem] font-extrabold uppercase tracking-[.12em]" style={{ color: MUTED }}>Conversion rates</p>
          <div className="mt-2 space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-32 text-[.72rem] font-extrabold" style={{ color: TEAL }}>loyal</span>
              <div className="h-3.5 flex-1 overflow-hidden rounded-full" style={{ background: "#f2efe7" }}>
                <motion.div className="h-full rounded-full" style={{ background: "linear-gradient(90deg,#14b8a6,#0f766e)" }}
                  initial={false} animate={{ width: nonce === 0 ? "0%" : "65%" }} transition={{ duration: 1.4, ease: "easeOut" }} />
              </div>
              <MktgBigNum nonce={nonce} from={0} to={65} suffix="%" tone={TEAL} />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-32 text-[.72rem] font-extrabold" style={{ color: GOLD }}>new</span>
              <div className="h-3.5 flex-1 overflow-hidden rounded-full" style={{ background: "#f2efe7" }}>
                <motion.div className="h-full rounded-full" style={{ background: "linear-gradient(90deg,#e3c26b,#a97d2c)" }}
                  initial={false} animate={{ width: nonce === 0 ? "0%" : "6.5%" }} transition={{ duration: 1.4, ease: "easeOut" }} />
              </div>
              <MktgBigNum nonce={nonce} from={0} to={6.5} suffix="%" tone={GOLD} decimals={1} />
            </div>
          </div>
          <p className="mt-2 text-[.82rem] leading-relaxed" style={{ color: "#3a4a48" }}>
            Loyal customers convert at <strong>60–70%</strong>; new customers at only <strong>5–8%</strong> —
            conversion being the percentage of items in a shopping cart that are actually purchased.
          </p>
        </div>
        <div className="rounded-2xl p-5" style={{ background: "#f6efe0", border: "1px solid #e0c88f" }}>
          <p className="text-[.72rem] font-extrabold uppercase tracking-[.12em]" style={{ color: MUTED }}>Repeat spending</p>
          <div className="mt-2 flex items-baseline gap-2">
            <MktgBigNum nonce={nonce} from={1} to={2} suffix="×+" tone={GOLD} decimals={1} />
            <span className="text-[.82rem] font-bold" style={{ color: MUTED }}>within 2 years</span>
          </div>
          <p className="mt-2 text-[.82rem] leading-relaxed" style={{ color: "#3a4a48" }}>
            Repeat customers <strong>spend more than twice their original expenditure</strong> within two years
            post-purchase — order values rise over time.
          </p>
        </div>
      </div>
      <MStatus>
        {nonce === 0
          ? "Press play — watch why organizations prioritize loyalty programs: loyalty directly impacts profitability."
          : "5% retention → 20–90% profit · $100 vs $20 · 60–70% vs 5–8% conversion · 2× spend in two years."}
      </MStatus>
    </MachineCard>
  );
}

function ChainCycleSvg({ tone, down = false }: { tone: string; down?: boolean }) {
  const nodes = down
    ? ["Gap is negative", "Value not recognized", "Low intention", "Low purchase", "Low satisfaction", "Minimal loyalty", "Purchases fall"]
    : ["Expected vs perceived service", "Value recognized", "Intention to purchase", "Actual purchase", "Satisfaction", "Increased brand value", "Loyalty development", "Increased purchases"];
  const R = 128, C = 175, N = nodes.length;
  return (
    <svg viewBox="0 0 350 350" className="h-auto w-full" role="img"
      aria-label={down
        ? "The reverse cycle: a negative gap leads to low value recognition, low intention, low purchase, low satisfaction, minimal loyalty and falling purchase frequency"
        : "The value purchase chain process: expected vs perceived service, value recognition, intention, purchase, satisfaction, increased brand value, loyalty development, increased purchases — a reinforcing loop"}>
      <motion.circle cx={C} cy={C} r={R} fill="none" stroke={tone} strokeWidth={2.2} strokeDasharray={down ? "6 5" : "0"} opacity={0.9}
        initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 0.9 }} viewport={{ once: true }} transition={{ duration: 1.4 }} />
      {nodes.map((n, idx) => {
        const a = (idx / N) * 360 - 90;
        const rad = (a * Math.PI) / 180;
        const x = C + (R + 30) * Math.cos(rad);
        const y = C + (R + 30) * Math.sin(rad);
        const anchor = Math.cos(rad) > 0.35 ? "start" : Math.cos(rad) < -0.35 ? "end" : "middle";
        return (
          <g key={idx}>
            <circle cx={C + R * Math.cos(rad)} cy={C + R * Math.sin(rad)} r={10}
              fill={down ? "#f7ecee" : "#e7f3ef"} stroke={tone} strokeWidth={1.8} />
            <text x={C + R * Math.cos(rad)} y={C + R * Math.sin(rad) + 3.5} textAnchor="middle" fontSize="8.5" fontWeight="800" fill={tone}>
              {idx + 1}
            </text>
            <text x={x} y={y} textAnchor={anchor} fontSize="9.5" fontWeight="700" fill="#3a4a48">
              {n}
            </text>
          </g>
        );
      })}
      <text x={C} y={C - 4} textAnchor="middle" fontSize="11" fontWeight="800" fill={tone}>
        {down ? "the reverse cycle" : "the up-cycle"}
      </text>
      <text x={C} y={C + 14} textAnchor="middle" fontSize="8.5" fontWeight="700" fill={MUTED}>
        {down ? "each link drains the next" : "each link feeds the next"}
      </text>
    </svg>
  );
}

export function MktgLoyaltyEconSection() {
  return (
    <Section id="loyalty-econ">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 9"
        title={<>The economics of <span style={{ background: "linear-gradient(135deg,#14b8a6,#a97d2c)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>coming back</span></>}
        lead="Loyalty isn't a soft metric. 5% more retention lifts profit 20–90%. A new customer costs $100 to acquire; a loyal one costs about $20 to keep. And the chain from expected service to repeat purchase runs in both directions."
      />

      <ReadStep n="1" title="The numbers that make retention the strategy" sub="Why organizations prioritize loyalty programs" />
      <Reveal><EconCounters /></Reveal>

      <ReadStep n="2" title="The value purchase chain — as a process" sub="Expected service vs perceived service, looping" />
      <Reveal>
        <p className={PROSE}>
          The gap between what customers <strong>expect</strong> and what they <strong>perceive</strong> determines
          the value delivered. If perceived service meets or exceeds expected service, <strong>value is
          recognized</strong> — which drives intention to purchase, then actual purchase, then satisfaction.
          Satisfied customers place <strong>higher value on the brand, product, or platform</strong>; higher
          perceived value raises the chances of loyalty; and loyal customers make{" "}
          <strong>more frequent and larger purchases</strong> — which feeds the loop again.
        </p>
      </Reveal>
      <Reveal>
        <div className="mt-2 grid gap-4 md:grid-cols-2">
          <div className="card-warm p-5">
            <ChainCycleSvg tone={TEAL} />
          </div>
          <div className="card-warm p-5">
            <ChainCycleSvg tone={ROSE} down />
            <p className="mt-2 text-[.82rem] leading-relaxed" style={{ color: "#3a4a48" }}>
              If the gap between expected and perceived service is <strong>negative</strong>, value is not
              recognized → low intention → low actual purchase → low satisfaction → minimal loyalty → which
              further reduces purchase frequency. The same loop, running backwards.
            </p>
          </div>
        </div>
        <Callout kind="insight" title="The indirect relationship">
          There is also an <strong>indirect relationship between satisfaction and loyalty</strong> — higher
          satisfaction increases the <em>likelihood</em> of loyalty development. Satisfaction is the seed;
          repeated satisfaction over time is the soil.
        </Callout>
      </Reveal>

      <div className="mt-10"><Reveal>
        <Takeaways items={[
          <><strong>Retention pays:</strong> +5% retention → +20–90% profit; $100 acquisition vs ≈$20 retention (5×).</>,
          <><strong>Loyal customers convert at 60–70%</strong> vs 5–8% for new customers — and spend more than 2× their original expenditure within two years.</>,
          <>The chain process loops: <strong>expected vs perceived service → value → intention → purchase → satisfaction → brand value → loyalty → increased purchases</strong>.</>,
          <>The <strong>reverse cycle</strong> is just as systematic: a negative gap drains every link that follows.</>,
          <><strong>Customer retention is cost-effective</strong> — the value purchase chain is cyclical, and positive experiences reinforce it.</>,
        ]} />
      </Reveal></div>
    </Section>
  );
}

/* ============================================================
   LECTURE 10 · CHAPTER 1 — campaigns-esds
   ============================================================ */

const CAMPAIGNS = {
  itch: { es: 30, ds: 62, name: "Itch Guard", move: "lower ES", note: "Highlighting the negative aspects of the current situation — embarrassment from scratching in public." },
  kohler: { es: 62, ds: 92, name: "Kohler", move: "raise DS", note: "Keeps the existing state positive but raises the desired state significantly higher. 'Your current state is great, but you deserve something better.' Target: affluent consumers who can afford premium products." },
  dual: { es: 34, ds: 90, name: "Clean & Clear", move: "dual", note: "Simultaneously lowers the existing state (acne, blackheads as a problem) and raises the desired state (clean, confident skin). Creating a gap on both levels generates stronger desperation to purchase and restore balance." },
  samsung: { es: 38, ds: 88, name: "Samsung", move: "dual · volume", note: "Operates on volume — targeting the masses with products at various price points (₹17,000 to ₹5,00,000). Pulls down the existing state and raises the desired state across mass markets." },
  sony: { es: 62, ds: 90, name: "Sony", move: "raise DS · premium", note: "Focuses on value — positioning as a premium brand for select audiences. Relies more on raising the desired state for aspirational consumers." },
} as const;

type CampaignKey = keyof typeof CAMPAIGNS;

function CampaignMachine() {
  const [k, setK] = useState<CampaignKey>("itch");
  const c = CAMPAIGNS[k];
  return (
    <MachineCard title="The campaign bench" chip="five brands, five gap strategies">
      <div className="mt-4 flex flex-wrap gap-2">
        {(Object.keys(CAMPAIGNS) as CampaignKey[]).map((key) => (
          <button key={key} type="button" onClick={() => setK(key)}
            className="rounded-xl px-3 py-2 text-[.78rem] font-bold transition-transform hover:-translate-y-0.5"
            style={{
              background: k === key ? "linear-gradient(135deg,#14b8a6,#0f766e)" : "#fffdf9",
              color: k === key ? "#f2fbf8" : TEAL,
              border: `1px solid ${k === key ? "#0f766e" : CREAM_BORDER}`,
            }}
            aria-label={`Show ${CAMPAIGNS[key].name} strategy: ${CAMPAIGNS[key].move}`}>
            {CAMPAIGNS[key].name}
          </button>
        ))}
      </div>
      <div className="mt-5"><GapBars es={c.es} ds={c.ds} esNote="existing state" dsNote="desired state" /></div>
      <div className="mt-4 rounded-2xl p-4" style={{ background: CREAM_BG, border: `1px solid ${CREAM_BORDER}` }}>
        <p className="font-extrabold" style={{ color: TEAL }}>{c.name} · {c.move}</p>
        <p className="mt-1 text-[.88rem] leading-relaxed" style={{ color: "#3a4a48" }}>{c.note}</p>
      </div>
      <MStatus>
        {c.name}: gap = {Math.max(0, c.ds - c.es)} pts. {c.name === "Samsung" || c.name === "Sony"
          ? "Same television market — two different ES/DS strategies."
          : "The gap is the campaign."}
      </MStatus>
    </MachineCard>
  );
}

function CostAnatomyMachine() {
  const [c, setC] = useState<"apps" | "pets">("apps");
  const data = {
    apps: {
      title: "Free mobile applications",
      direct: 4, abstract: 88,
      directNote: "Negligible — the app is free to download.",
      abstractNote: "High — personal data collection, notifications, advertisements, difficulty in uninstalling.",
      extra: "Users open themselves to the app despite the low direct cost because they accept the abstract costs — the closed system opens.",
    },
    pets: {
      title: "Gifts (e.g., pets)",
      direct: 0, abstract: 96,
      directNote: "Zero — you received it as a gift.",
      abstractNote: "Very high — feeding, care, eventual disposal.",
      extra: "The gap between ES and DS widens as the responsibility becomes clear.",
    },
  } as const;
  const d = data[c];
  return (
    <MachineCard title="Direct vs abstract cost" chip="where the real price hides">
      <div className="mt-4 flex flex-wrap gap-2">
        <MButton tone={c === "apps" ? "primary" : "ghost"} onClick={() => setC("apps")} label="Case: free mobile applications">
          <Smartphone className="mr-1 inline h-4 w-4" />Free mobile applications
        </MButton>
        <MButton tone={c === "pets" ? "gold" : "ghost"} onClick={() => setC("pets")} label="Case: gifts such as pets">
          <Gift className="mr-1 inline h-4 w-4" />Gifts (pets)
        </MButton>
      </div>
      <div className="mt-5 grid gap-4">
        <GaugeBar label="Direct cost" v={d.direct} grad="linear-gradient(90deg,#14b8a6,#0f766e)" note={d.directNote} />
        <GaugeBar label="Abstract cost" v={d.abstract} grad="linear-gradient(90deg,#e3c26b,#a97d2c)" note={d.abstractNote} />
      </div>
      <MStatus>{d.title} — {d.extra}</MStatus>
    </MachineCard>
  );
}

function InterestOpennessSvg() {
  return (
    <svg viewBox="0 0 620 150" className="h-auto w-full" role="img"
      aria-label="A linear relationship: the more interest in a product, the more open the mind is to receiving information about it">
      <line x1="46" y1="118" x2="580" y2="118" stroke="#c9b998" strokeWidth={1.6} />
      <line x1="46" y1="118" x2="46" y2="22" stroke="#c9b998" strokeWidth={1.6} />
      <text x={520} y={140} fontSize="10.5" fontWeight="800" fill={MUTED}>interest in the product →</text>
      <text x={30} y={16} fontSize="10.5" fontWeight="800" fill={MUTED}>openness</text>
      <motion.path d="M 46 118 C 200 112, 420 70, 560 30" fill="none" stroke={TEAL_BRIGHT} strokeWidth={3.4}
        initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.1 }} />
      <circle cx={110} cy={115} r={6} fill="#f2efe7" stroke={TEAL} strokeWidth={2} />
      <text x={110} y={100} textAnchor="middle" fontSize="9.5" fontWeight="700" fill={MUTED}>no interest</text>
      <text x={110} y={89} textAnchor="middle" fontSize="9" fontWeight="700" fill={ROSE}>mind closed</text>
      <circle cx={470} cy={52} r={6} fill="#f2efe7" stroke={TEAL} strokeWidth={2} />
      <text x={470} y={38} textAnchor="middle" fontSize="9.5" fontWeight="700" fill={MUTED}>curious &amp; interested</text>
      <text x={470} y={27} textAnchor="middle" fontSize="9" fontWeight="700" fill={TEAL}>system opens</text>
    </svg>
  );
}

export function MktgCampaignsSection() {
  return (
    <Section id="campaigns-esds">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 10"
        title={<>The gap, <span style={{ background: "linear-gradient(135deg,#14b8a6,#a97d2c)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>in the wild</span></>}
        lead="Itch Guard pulls the existing state down. Kohler pulls the desired state up. Clean & Clear does both — and Samsung and Sony split a television market between volume and premium value. First, the recap that makes it all work."
      />

      <ReadStep n="1" title="Recap: closed by default, opened by interest" sub="The open vs closed system, and ES = DS" />
      <Reveal>
        <p className={PROSE}>
          <strong>By design, the human mind is naturally closed</strong> and resistant to new information — the
          closed system is the default. It becomes open when consumers develop <strong>curiosity and interest</strong>{" "}
          in a product. The relationship is <strong>linear</strong>: the more interested you are, the more open you
          become to learning about that product. The marketer&apos;s job is to open this closed system — through
          advertisements, celebrity endorsements, packaging, color combinations, pricing, and discounts.
        </p>
        <div className="card-warm mt-5 p-6 md:p-8"><InterestOpennessSvg /></div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <KV k="ES = DS" v="Consumers are satisfied and have no need for a new product — the mind remains closed because there is no gap to fill." />
          <KV k="Creating the gap" v="Pull down the existing state (current situation feels inadequate), pull up the desired state (you deserve better), or do both simultaneously — the most effective strategy." />
        </div>
      </Reveal>

      <ReadStep n="2" title="The campaign bench" sub="Itch Guard · Kohler · Clean & Clear · Samsung · Sony" />
      <Reveal><CampaignMachine /></Reveal>

      <ReadStep n="3" title="When the direct cost is zero" sub="Free apps and gifts — the abstract cost does the charging" />
      <Reveal><CostAnatomyMachine /></Reveal>
      <Reveal>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <KV k="Free mobile applications" v="Direct cost: negligible (free to download). Abstract cost: high — personal data collection, notifications, advertisements, difficulty in uninstalling." />
          <KV k="Gifts (e.g., pets)" v="Direct cost: zero (received as a gift). Abstract cost: very high — feeding, care, eventual disposal. The ES–DS gap widens as the responsibility becomes clear." />
        </div>
      </Reveal>

      <ReadStep n="4" title="The ethical consideration" sub="Shades of gray" />
      <Reveal>
        <div className="card-warm p-5" style={{ borderColor: "#ecd2d9", background: "#fdf3f6" }}>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" style={{ color: ROSE }} aria-hidden />
            <p className="font-extrabold" style={{ color: ROSE }}>Marketing operates in &ldquo;shades of gray&rdquo;</p>
          </div>
          <p className="mt-2 text-[.9rem] leading-relaxed" style={{ color: "#3a4a48" }}>
            Clean &amp; Clear&apos;s dual strategy — lowering the existing state by highlighting acne and
            blackheads — <strong>makes consumers vulnerable by highlighting insecurities</strong>. Nothing in
            marketing is purely black or white; a full ethical examination of marketing practices is essential,
            and the lecture reserves it for a dedicated ethics module.
          </p>
        </div>
      </Reveal>

      <div className="mt-10"><Reveal>
        <Takeaways items={[
          <>The mind is <strong>closed by default</strong>; interest opens it — and interest↔openness is linear.</>,
          <>Samsung plays <strong>volume</strong> (masses, ₹17,000–₹5,00,000, dual gap strategy); Sony plays <strong>premium value</strong> (select audiences, raise DS for aspirational consumers).</>,
          <>Free apps and gift pets prove the point: <strong>direct cost ~0, abstract cost huge</strong> — data, notifications, care, responsibility.</>,
          <>Dual campaigns (Clean &amp; Clear) create the strongest desperation — and the sharpest <strong>ethical questions</strong>: highlighting insecurities makes consumers vulnerable.</>,
        ]} />
      </Reveal></div>
    </Section>
  );
}

/* ============================================================
   LECTURE 10 · CHAPTER 2 — beyond-purchase
   ============================================================ */

const ATTRS = ["Price", "Design", "Quality", "Social status", "Utility"] as const;
const PRODUCT_A = [5, 2, 3, 1, 5]; // strong on price + utility
const PRODUCT_B = [2, 5, 5, 5, 3]; // strong on design, quality, status

function AttributeLab() {
  const [w, setW] = useState<number[]>([3, 3, 3, 3, 3]);
  const wSum = w.reduce((a, b) => a + b, 0);
  const sA = wSum === 0 ? 0 : w.reduce((acc, wi, i) => acc + wi * PRODUCT_A[i], 0) / wSum;
  const sB = wSum === 0 ? 0 : w.reduce((acc, wi, i) => acc + wi * PRODUCT_B[i], 0) / wSum;
  const winner = sA === sB ? null : sA > sB ? "A" : "B";
  return (
    <MachineCard title="The attribute weights lab" chip="same products, different pain points">
      <p className="mt-2 max-w-3xl text-[.88rem] leading-relaxed" style={{ color: "#3a4a48" }}>
        Every product has multiple attributes. Move the sliders to prioritize what <em>this</em> consumer cares
        about — and watch which product wins. A product may follow all marketing principles and{" "}
        <strong>still fail if it doesn&apos;t address the specific pain point that matters most</strong> to a
        particular consumer segment.
      </p>
      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr,260px] lg:items-start">
        <div className="grid gap-3">
          {ATTRS.map((a, i) => (
            <div key={a} className="flex items-center gap-3">
              <span className="w-24 shrink-0 text-[.74rem] font-extrabold uppercase tracking-[.08em]" style={{ color: MUTED }}>{a}</span>
              <input
                type="range" min={0} max={5} step={1} value={w[i]}
                onChange={(e) => setW((p) => p.map((x, j) => (j === i ? Number(e.target.value) : x)))}
                aria-label={`Weight for attribute ${a}: ${w[i]} of 5`}
                className="h-2 w-full cursor-pointer appearance-none rounded-full"
                style={{ background: `linear-gradient(90deg,#14b8a6 ${(w[i] / 5) * 100}%,#efe9db ${(w[i] / 5) * 100}%)` }}
              />
              <span className="w-6 text-right font-mono-warm text-[.78rem] font-extrabold" style={{ color: TEAL }}>{w[i]}</span>
            </div>
          ))}
        </div>
        <div className="grid gap-3">
          {([["A", sA, TEAL], ["B", sB, GOLD]] as const).map(([nm, sc, tone]) => (
            <div key={nm} className="rounded-2xl p-4 transition-transform"
              style={{
                background: winner === nm ? (nm === "A" ? "#e7f3ef" : "#f6efe0") : CREAM_BG,
                border: `2px solid ${winner === nm ? tone : CREAM_BORDER}`,
                transform: winner === nm ? "scale(1.02)" : "scale(1)",
              }}>
              <div className="flex items-center justify-between">
                <p className="font-extrabold" style={{ color: tone }}>Product {nm}</p>
                {winner === nm ? <BadgeCheck className="h-5 w-5" style={{ color: tone }} aria-label="winner" /> : null}
              </div>
              <p className="mt-1 font-mono-warm text-[1.5rem] font-extrabold" style={{ color: tone }}>{sc.toFixed(1)}</p>
              <p className="text-[.68rem] font-bold" style={{ color: MUTED }}>
                {nm === "A" ? "budget-strong: price + utility" : "premium-strong: design, quality, status"}
              </p>
            </div>
          ))}
        </div>
      </div>
      <MStatus>
        {winner === null
          ? "It's a tie — with no priorities, no product wins. Consumers always prioritize."
          : `With these priorities, Product ${winner} wins. Same market, different weights — different winner. That is why attribute fit beats principle-following.`}
      </MStatus>
    </MachineCard>
  );
}

const MEASURE = {
  actual: {
    t: "Actual purchase", realism: 100, practical: 20,
    d: "Difficult and expensive to measure directly — the gold standard nobody can afford at scale.",
  },
  proxy: {
    t: "Intention to purchase (proxy)", realism: 45, practical: 92,
    d: "Used by most marketers as a reasonable indicator of purchase behavior.",
  },
  neuro: {
    t: "Neurometric tools", realism: 98, practical: 30,
    d: "Advanced research methods that measure actual brain responses and actual purchases — used by large organizations like Nielsen, Coca-Cola, and Google.",
  },
} as const;

type MeasureKey = keyof typeof MEASURE;

function MeasureTiers() {
  const [k, setK] = useState<MeasureKey>("proxy");
  const m = MEASURE[k];
  return (
    <MachineCard title="How purchase behavior gets measured" chip="actual vs proxy vs neurometrics">
      <div className="mt-4 flex flex-wrap gap-2">
        {(Object.keys(MEASURE) as MeasureKey[]).map((key) => (
          <button key={key} type="button" onClick={() => setK(key)}
            className="rounded-xl px-3 py-2 text-[.76rem] font-bold transition-transform hover:-translate-y-0.5"
            style={{
              background: k === key ? "linear-gradient(135deg,#14b8a6,#0f766e)" : "#fffdf9",
              color: k === key ? "#f2fbf8" : TEAL,
              border: `1px solid ${k === key ? "#0f766e" : CREAM_BORDER}`,
            }}
            aria-label={`Show measurement tier: ${MEASURE[key].t}`}>
            {MEASURE[key].t}
          </button>
        ))}
      </div>
      <div className="mt-5 grid gap-4">
        <GaugeBar label="Signal realism" v={m.realism} grad="linear-gradient(90deg,#14b8a6,#0f766e)" note="how close to the real purchase" />
        <GaugeBar label="Practicality" v={m.practical} grad="linear-gradient(90deg,#e3c26b,#a97d2c)" note="how usable at scale" />
      </div>
      <div className="mt-4 rounded-2xl p-4" style={{ background: CREAM_BG, border: `1px solid ${CREAM_BORDER}` }}>
        <p className="font-extrabold" style={{ color: TEAL }}>{m.t}</p>
        <p className="mt-1 text-[.88rem] leading-relaxed" style={{ color: "#3a4a48" }}>{m.d}</p>
      </div>
      <MStatus>{m.t}: realism {m.realism} / practicality {m.practical}. Most marketers live on the proxy; Nielsen, Coca-Cola and Google can afford neurometrics.</MStatus>
    </MachineCard>
  );
}

export function MktgBeyondSection() {
  return (
    <Section id="beyond-purchase">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 10"
        title={<>Decisions <span style={{ background: "linear-gradient(135deg,#14b8a6,#a97d2c)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>beyond the receipt</span></>}
        lead="Purchase is only one decision consumers make. They avoid, they advocate, they dissuade, they stay loyal without repeat purchases — and most of what marketers actually measure is a proxy."
      />

      <ReadStep n="1" title="Impulse buying" sub="Unplanned — but not triggerless" />
      <Reveal>
        <p className={PROSE}>
          <strong>Impulse buying</strong> is the unplanned purchase made intuitively, without deliberate thinking
          about need or want. But even impulse buying has <strong>triggers</strong> — advertisements, discounts,
          limited-time offers — and involves some <strong>unconscious rational assessment</strong>. Its ES/DS
          connection: impulse purchases may not involve traditional changes in existing and desired states, but
          are driven by <strong>immediate situational factors</strong>.
        </p>
      </Reveal>

      <ReadStep n="2" title="Decisions beyond purchase" sub="Purchase decisions aren't limited to buying" />
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Eye, t: "Avoiding a product", d: "The decision to stay away — a decision the marketer loses silently." },
            { icon: ThumbsUp, t: "Positive word of mouth", d: "Speaking positively about a product without buying it." },
            { icon: ThumbsDown, t: "Negative word of mouth", d: "Speaking negatively about a product — advocacy in reverse." },
            { icon: Repeat, t: "Loyalty without repeat", d: "Building loyalty without repeated purchases — supporting a brand you rarely buy." },
          ].map((c) => (
            <div key={c.t} className="card-warm lift p-5">
              <c.icon className="h-5 w-5" style={{ color: TEAL }} aria-hidden />
              <p className="mt-2 font-extrabold" style={{ color: INK }}>{c.t}</p>
              <p className="mt-1 text-[.82rem] leading-relaxed" style={{ color: "#3a4a48" }}>{c.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <KV k="Satisfaction" v="Being happy with a product you purchased." />
          <KV k="Loyalty" v="Continuing to choose a brand even when competitors are available — the same brand, chosen repeatedly." />
        </div>
      </Reveal>

      <ReadStep n="3" title="Attribute-based consumer decisions" sub="Priorities differ; principles don't close deals alone" />
      <Reveal><AttributeLab /></Reveal>

      <ReadStep n="4" title="Measuring purchase behavior" sub="Actual is expensive — so most marketers proxy" />
      <Reveal><MeasureTiers /></Reveal>

      <ReadStep n="5" title="The shades of gray" sub="Ethics, again — because the tools are powerful" />
      <Reveal>
        <p className={PROSE}>
          Strategies like lowering the existing state can be seen as <strong>making consumers vulnerable by
          highlighting insecurities</strong>. Marketing operates in <strong>&ldquo;shades of gray&rdquo;</strong> —
          nothing is purely black or white — and a full ethical examination of marketing practices is essential
          (the lecture defers it to a dedicated ethics module).
        </p>
      </Reveal>

      <div className="mt-10"><Reveal>
        <Takeaways items={[
          <><strong>Impulse buying is unplanned but not uncaused</strong> — ads, discounts and limited-time offers trigger it, with unconscious rational assessment inside.</>,
          <>Purchase decisions include <strong>avoiding, positive talk without buying, negative talk, and loyalty without repeat purchases</strong>.</>,
          <>Consumers prioritize <strong>different attributes</strong> (price, design, quality, social status, utility) — a principle-perfect product can still lose to a pain-point fit.</>,
          <><strong>Actual purchase is difficult and expensive to measure</strong>; intention is the everyday proxy; neurometrics (Nielsen, Coca-Cola, Google) read real responses.</>,
        ]} />
      </Reveal></div>
    </Section>
  );
}

/* ============================================================
   LECTURE 11 · CHAPTER 1 — heterogeneity
   ============================================================ */

const NETFLIX_SEGMENTS = [
  { name: "K-drama", color: "#14b8a6", msg: "Emotional messaging." },
  { name: "True crime", color: "#0f766e", msg: "Mystery, twists, investigation focus." },
  { name: "Anime", color: "#e3c26b", msg: "" },
  { name: "Sitcoms", color: "#a97d2c", msg: "Newer episodes, feel-good, familiar content." },
  { name: "Documentaries", color: "#5f7472", msg: "" },
  { name: "Scrollers", color: "#9f3d54", msg: "" },
] as const;

function prand(i: number, salt: number): number {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

function ZoomScatter() {
  const [apart, setApart] = useState(false);
  const dots = useMemo(() => {
    const centers = [
      { x: 105, y: 88 }, { x: 250, y: 78 }, { x: 395, y: 92 },
      { x: 115, y: 232 }, { x: 258, y: 240 }, { x: 392, y: 226 },
    ];
    return Array.from({ length: 100 }, (_, i) => {
      const c = i % 6;
      const together = {
        x: 58 + prand(i, 1) * 396,
        y: 46 + prand(i, 2) * 238,
      };
      const spread = {
        x: centers[c].x + (prand(i, 3) - 0.5) * 62,
        y: centers[c].y + (prand(i, 4) - 0.5) * 62,
      };
      return { i, c, together, spread, color: NETFLIX_SEGMENTS[c].color };
    });
  }, []);
  return (
    <MachineCard dark title="The zoom machine" chip="100 users · 6 audiences">
      <p className="mt-2 max-w-3xl text-[.88rem] leading-relaxed" style={{ color: "#9fbcb4" }}>
        100 Netflix users may seem similar. Zoom in and the diversity appears: vastly different viewing
        preferences — K-dramas, true crime, anime, documentaries and more.
      </p>
      <svg viewBox="0 0 512 320" className="mt-4 h-auto w-full" role="img"
        aria-label="100 dots representing Netflix users: scattered together when seen from a distance, separating into six labelled content segments when zoomed in">
        <rect x="8" y="8" width="496" height="304" rx="18" fill="rgba(255,255,255,.045)" stroke="rgba(227,194,107,.25)" strokeDasharray="7 5" />
        <AnimatePresence>
          {apart
            ? NETFLIX_SEGMENTS.map((s, idx) => {
                const cx = [105, 250, 395, 115, 258, 392][idx];
                const cy = idx < 3 ? 40 : 288;
                return (
                  <motion.text key={s.name} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    x={cx} y={cy} textAnchor="middle" fontSize="12" fontWeight="800" fill={s.color} opacity={1}>
                    {s.name}
                  </motion.text>
                );
              })
            : (
              <motion.text key="blob" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                x={256} y={300} textAnchor="middle" fontSize="12" fontWeight="800" fill="#9fbcb4">
                100 users — homogeneous from a distance
              </motion.text>
            )}
        </AnimatePresence>
        {dots.map((d) => (
          <motion.circle
            key={d.i}
            cx={0} cy={0} r={6.5}
            fill={d.color}
            stroke="#0c2124"
            strokeWidth={1}
            opacity={apart ? 0.95 : 0.6}
            initial={false}
            animate={apart ? { x: d.spread.x, y: d.spread.y, opacity: 0.95 } : { x: d.together.x, y: d.together.y, opacity: 0.6 }}
            transition={{ type: "spring", stiffness: 46, damping: 16, delay: (d.i % 10) * 0.02 }}
          />
        ))}
      </svg>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <MButton tone={apart ? "gold" : "primary"} onClick={() => setApart((a) => !a)}
          label={apart ? "Zoom back out to the homogeneous blob" : "Zoom in to reveal the segments"}>
          {apart ? "Zoom out" : "Zoom in"}
        </MButton>
        <div className="flex flex-wrap gap-2">
          {NETFLIX_SEGMENTS.map((s) => (
            <span key={s.name} className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[.7rem] font-extrabold"
              style={{ background: "rgba(255,255,255,.06)", color: s.color, border: "1px solid rgba(255,255,255,.12)" }}>
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: s.color }} aria-hidden />
              {s.name}
            </span>
          ))}
        </div>
      </div>
      <MStatus dark>
        {apart
          ? "Zoomed in: six distinct content preference segments — each needs different marketing messaging. Within a segment, similar; between segments, distinctly different."
          : "From a distance the market looks homogeneous. Press zoom in — this is market heterogeneity."}
      </MStatus>
    </MachineCard>
  );
}

export function MktgHeteroSection() {
  return (
    <Section id="heterogeneity">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 11"
        title={<>Zoom in and the <span style={{ background: "linear-gradient(135deg,#14b8a6,#a97d2c)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>market splits</span></>}
        lead="100 Netflix users look identical from a distance. Zoom in and six content tribes appear. That zoom — from a homogeneous blob to meaningful segments — is where STP begins."
      />

      <ReadStep n="1" title="Market heterogeneity" sub="The reality that creates the need for segmentation" />
      <Reveal><ZoomScatter /></Reveal>
      <Reveal>
        <p className={`${PROSE} mt-5`}>
          Consumers differ in meaningful ways that affect their purchase and consumption decisions. A market
          appears <strong>homogeneous from a distance</strong> but reveals significant diversity when examined
          closely. Consumers differ in <strong>who they are, what they want, why they buy, and how they buy</strong> —
          and different consumer groups value different product attributes. Understanding this diversity is what
          lets marketers identify meaningful differences worth addressing.
        </p>
      </Reveal>

      <ReadStep n="2" title="Defining segmentation" sub="Meaningful groups — not just any groups" />
      <Reveal>
        <p className={PROSE}>
          Segmentation is the process of <strong>finding meaningful groups within a market whose members are
          similar enough to be marketed to differently</strong>. The key distinction: segmentation is{" "}
          <strong>not simply dividing consumers into groups</strong> — divisions must be{" "}
          <strong>meaningful and usable</strong> to create differentiated marketing strategies, and the
          differences must be <strong>actionable and relevant</strong> for marketing purposes.
        </p>
        <Callout kind="insight" title="Within vs between">
          Members <strong>within</strong> a segment share similar characteristics, needs, and desires; segments
          are <strong>distinctly different</strong> from each other — so different that each justifies its own
          marketing strategy, messaging, and product positioning.
        </Callout>
      </Reveal>

      <ReadStep n="3" title="The face serum market" sub="Four segments, four formulations" />
      <Reveal>
        <p className={PROSE}>
          Without segmentation, a generic <em>&ldquo;daily serum for all skin types&rdquo;</em> may be{" "}
          <strong>acceptable to many but relevant to few</strong>. With segmentation, companies create targeted
          solutions — and each segment requires different product formulations, ingredient focus, and messaging
          strategies.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {["Acne control", "Barrier repair", "Hydration and glow", "Pigmentation and marks"].map((s, i) => (
            <div key={s} className="card-warm lift p-5">
              <p className="font-mono-warm text-[.7rem] font-extrabold" style={{ color: GOLD }}>SEGMENT {i + 1}</p>
              <p className="mt-1 font-extrabold" style={{ color: TEAL }}>{s}</p>
              <p className="mt-2 text-[.8rem] leading-relaxed" style={{ color: "#3a4a48" }}>
                Different formulation · different ingredient focus · different messaging.
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <ReadStep n="4" title="The problem with no segmentation" sub="One-size-fits-all fails heterogeneity" />
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Products become acceptable but not relevant to most consumers",
            "Marketing messages lack resonance with specific audiences",
            "Consumer problems remain incompletely solved",
            "Competitive disadvantage in heterogeneous markets",
          ].map((x) => (
            <div key={x} className="rounded-2xl p-4 font-semibold" style={{ background: "#f7ecee", border: "1px solid #ecd2d9", color: "#7a3548" }}>
              ✗ {x}
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-10"><Reveal>
        <Takeaways items={[
          <><strong>Market heterogeneity</strong> is the fundamental reality: consumers differ in who they are, what they want, why and how they buy.</>,
          <><strong>Segmentation = meaningful groups</strong> marketed to differently — not arbitrary divisions; differences must be actionable.</>,
          <>The face serum market splits into <strong>acne control, barrier repair, hydration &amp; glow, pigmentation</strong> — each with its own formulation, ingredients and messaging.</>,
          <>Without segmentation: <strong>acceptable but not relevant</strong>, no resonance, incompletely solved problems, competitive disadvantage.</>,
        ]} />
      </Reveal></div>
    </Section>
  );
}

/* ============================================================
   LECTURE 11 · CHAPTER 2 — bases
   ============================================================ */

const PSYCH_15 = [
  "Fitness Oriented", "Sustainability Conscious", "Tech Enthusiasts", "Game Oriented",
  "Beauty and Self-Expression", "Minimalists", "Status Conscious", "Experience Seekers",
  "Food Explorers", "Convenience Seekers", "Value-Conscious", "Entertainment Driven",
  "Socially Connected", "Adventure Oriented", "Productivity Focused",
] as const;

const NIKE_SEGS = [
  { name: "Fitness Focused", who: "Gym enthusiasts who push limits daily", product: "Performance shoes", why: "High performance for training" },
  { name: "Sport Aspirers", who: "Basketball and football players", product: "Sport-specific shoes", why: "Sports performance" },
  { name: "Style & Status Seekers", who: "Trend-conscious consumers", product: "Air Jordan series", why: "Style and status symbol" },
  { name: "Sustainability Conscious", who: "Environmentally aware consumers", product: "Nike Move to Zero", why: "Eco-friendly products with sustainability focus" },
] as const;

const LOREAL = {
  "20+": { benefit: "Anti-imperfection + Whitening", for: "Glow and skin perfection for young adults" },
  "30+": { benefit: "Fine Lines + Whitening", for: "Anti-aging and brightness for mature skin" },
  "40+": { benefit: "Anti-aging + Whitening", for: "Comprehensive anti-aging and glow" },
} as const;
type LorealBand = keyof typeof LOREAL;

function BasesLab() {
  const [tab, setTab] = useState<"geo" | "demo" | "psy">("geo");
  const [age, setAge] = useState(21);
  const band: LorealBand = age < 30 ? "20+" : age < 40 ? "30+" : "40+";
  const [nike, setNike] = useState(0);
  const n = NIKE_SEGS[nike];

  return (
    <MachineCard title="The bases lab" chip="geographic · demographic · psychographic">
      <div className="mt-4 flex flex-wrap gap-2">
        <MktgTabBtn id="geo" label="Geographic" icon={<MapPin className="h-4 w-4" aria-hidden />} tab={tab} onTab={setTab} />
        <MktgTabBtn id="demo" label="Demographic" icon={<UsersRound className="h-4 w-4" aria-hidden />} tab={tab} onTab={setTab} />
        <MktgTabBtn id="psy" label="Psychographic" icon={<Brain className="h-4 w-4" aria-hidden />} tab={tab} onTab={setTab} />
      </div>

      <AnimatePresence mode="wait">
        {tab === "geo" ? (
          <motion.div key="geo" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22 }} className="mt-5">
            <p className="text-[.85rem] leading-relaxed" style={{ color: "#3a4a48" }}>
              <strong>Geographic segmentation</strong> divides consumers by location and climate conditions.
              Zudio (Tata) stocks the same fashion chain city by city:
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {[
                { city: "Delhi", note: "Heavy focus on winter jackets and layers", when: "cold weather, October–December" },
                { city: "Mumbai", note: "Lightweight, monsoon-friendly clothing", when: "rainy season" },
                { city: "Bangalore", note: "Casual streetwear", when: "mild, consistent weather year-round" },
              ].map((c) => (
                <div key={c.city} className="rounded-2xl p-4" style={{ background: CREAM_BG, border: `1px solid ${CREAM_BORDER}` }}>
                  <p className="flex items-center gap-1.5 font-extrabold" style={{ color: TEAL }}>
                    <MapPin className="h-4 w-4" aria-hidden />{c.city}
                  </p>
                  <p className="mt-1.5 text-[.82rem] leading-relaxed" style={{ color: "#3a4a48" }}>{c.note}</p>
                  <p className="mt-1 text-[.7rem] font-bold uppercase tracking-[.1em]" style={{ color: GOLD }}>{c.when}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[.82rem] leading-relaxed" style={{ color: MUTED }}>
              Application areas: climate and weather patterns · regional consumption preferences (rice vs wheat
              across India) · geographic-specific campaigns and product availability.
            </p>
          </motion.div>
        ) : tab === "demo" ? (
          <motion.div key="demo" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22 }} className="mt-5">
            <p className="text-[.85rem] leading-relaxed" style={{ color: "#3a4a48" }}>
              <strong>Demographic segmentation</strong> divides consumers by measurable characteristics — age,
              gender, income, education. Drag the age and watch L&apos;Oréal swap the benefit story on the{" "}
              <em>same</em> face cream:
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <input type="range" min={18} max={48} step={1} value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                aria-label={`Consumer age: ${age} years`}
                className="h-2 max-w-sm flex-1 cursor-pointer appearance-none rounded-full"
                style={{ background: "linear-gradient(90deg,#e3c26b 0%,#a97d2c 100%)" }} />
              <span className="font-mono-warm text-[1.1rem] font-extrabold" style={{ color: GOLD }}>{age} yrs</span>
              <AnimatePresence mode="wait">
                <motion.span key={band} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                  className="rounded-xl px-4 py-2 text-[.9rem] font-extrabold"
                  style={{ background: "linear-gradient(135deg,#e3c26b,#a97d2c)", color: "#231a08" }}>
                  L&apos;Oréal {band} · {LOREAL[band].benefit}
                </motion.span>
              </AnimatePresence>
            </div>
            <p className="mt-2 text-[.82rem] leading-relaxed" style={{ color: "#3a4a48" }}>{LOREAL[band].for}</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl p-4" style={{ background: "#eef5f2", border: "1px solid #cfe6df" }}>
                <p className="font-extrabold" style={{ color: TEAL }}>Bajaj Pulsar — &ldquo;Definitely Male&rdquo;</p>
                <p className="mt-1.5 text-[.82rem] leading-relaxed" style={{ color: "#3a4a48" }}>
                  Target: <strong>males aged 17–24</strong> (college-going students). Masculine, energetic
                  branding — energy and excitement for young male consumers. Clear demographic targeting created
                  a strong brand association.
                </p>
              </div>
              <div className="rounded-2xl p-4" style={{ background: "#f6efe0", border: "1px solid #e0c88f" }}>
                <p className="font-extrabold" style={{ color: GOLD }}>Why the L&apos;Oréal strategy works</p>
                <ul className="mt-1.5 grid gap-1 text-[.8rem] leading-snug" style={{ color: "#3a4a48" }}>
                  <li>· Same base product with <strong>70–80% identical ingredients</strong></li>
                  <li>· Different benefits communicated for each age segment</li>
                  <li>· Brand ambassador changes over time to stay relatable</li>
                  <li>· Consumers identify with the product suited to their life phase</li>
                </ul>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div key="psy" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22 }} className="mt-5">
            <p className="text-[.85rem] leading-relaxed" style={{ color: "#3a4a48" }}>
              <strong>Psychographic segmentation</strong> divides consumers by how they think — lifestyle, values,
              attitudes, consumption patterns — psychological characteristics rather than demographic facts.
              Nike&apos;s shoes, four minds:
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {NIKE_SEGS.map((s, i) => (
                <button key={s.name} type="button" onClick={() => setNike(i)}
                  className="rounded-xl px-3 py-2 text-[.76rem] font-bold transition-transform hover:-translate-y-0.5"
                  style={{
                    background: nike === i ? "linear-gradient(135deg,#14b8a6,#0f766e)" : "#eef5f2",
                    color: nike === i ? "#f2fbf8" : TEAL,
                  }}
                  aria-label={`Nike segment: ${s.name}`}>
                  {s.name}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={n.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}
                className="mt-3 rounded-2xl p-4" style={{ background: CREAM_BG, border: `1px solid ${CREAM_BORDER}` }}>
                <p className="font-extrabold" style={{ color: TEAL }}>{n.name}</p>
                <p className="mt-1 text-[.84rem] leading-relaxed" style={{ color: "#3a4a48" }}>
                  {n.who} → <strong>{n.product}</strong> · {n.why}
                </p>
              </motion.div>
            </AnimatePresence>
            <p className="mt-4 text-[.72rem] font-extrabold uppercase tracking-[.12em]" style={{ color: MUTED }}>
              The 15 major psychographic segments
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {PSYCH_15.map((p) => (
                <span key={p} className="rounded-lg px-2.5 py-1 text-[.7rem] font-bold"
                  style={{ background: "#f6efe0", color: GOLD }}>{p}</span>
              ))}
            </div>
            <p className="mt-2 text-[.8rem] leading-relaxed" style={{ color: MUTED }}>
              Nike tailors product launches and brand ambassador selections to specific psychographic segments;
              messaging aligns with how each segment thinks and lives. Multiple profiles can exist beyond these
              15 based on specific market contexts.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <MStatus>
        {tab === "geo"
          ? "One Zudio rack, three climates: Delhi layers, Mumbai monsoon, Bangalore streetwear."
          : tab === "demo"
          ? `Age ${age} → L'Oréal ${band}: ${LOREAL[band].benefit}. Same cream, different promise — plus Pulsar's 17–24 males.`
          : `${n.name}: ${n.who} → ${n.product}. Nike speaks to how the segment thinks, not just who they are.`}
      </MStatus>
    </MachineCard>
  );
}

export function MktgBasesSection() {
  return (
    <Section id="bases">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 11"
        title={<>Three classic <span style={{ background: "linear-gradient(135deg,#14b8a6,#a97d2c)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>bases</span></>}
        lead="Where you are (Zudio's city-by-city racks), who you are (Pulsar's 'Definitely Male', L'Oréal's age ladder), and how you think (Nike's four tribes) — the geographic, demographic and psychographic bases of segmentation."
      />

      <ReadStep n="1" title="The bases lab" sub="Three windows into the same market" />
      <Reveal><BasesLab /></Reveal>

      <ReadStep n="2" title="Netflix's messaging map" sub="Same platform, six segment scripts" />
      <Reveal>
        <p className={PROSE}>
          100 students watching Netflix appear homogeneous from a distance; zooming in reveals{" "}
          <strong>six distinct content preference segments</strong> — and each requires different marketing
          messaging: <strong>K-drama fans get emotional messaging</strong>;{" "}
          <strong>true crime fans get mystery, twists and investigation focus</strong>;{" "}
          <strong>sitcom fans get newer-episodes, feel-good, familiar-content messaging</strong>.
        </p>
      </Reveal>

      <ReadStep n="3" title="Common questions, straight answers" sub="The three questions every segmenter asks" />
      <Reveal>
        <div className="grid gap-3">
          <KV k="What creates the need for segmentation?" v="Market heterogeneity — the fundamental reality that consumers are different from one another." />
          <KV k="Why isn't age (18–25) automatically useful?" v="Age alone is insufficient. Within an age group, consumers have vastly different needs and preferences — 18–25 year-old Netflix users have completely different content tastes. Age works only combined with other variables: gender, benefits sought, psychographic profiles." />
          <KV k="Can two firms segment the same market differently?" v="Yes, absolutely. Different organizations can segment identical markets using different criteria — the strategy depends on company objectives, resources, and positioning goals." />
        </div>
      </Reveal>

      <ReadStep n="4" title="Why segmentation matters — and when it didn't" sub="Strategic importance + the mass-era exception" />
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Targeted product development addressing specific needs",
            "Relevant marketing communications",
            "Justifies differentiated strategies across segments",
            "Improves marketing efficiency and ROI",
            "Competitive advantage through relevance, not just acceptance",
          ].map((x) => (
            <div key={x} className="card-warm p-4 text-[.84rem] font-semibold" style={{ color: "#3a4a48" }}>
              ✓ {x}
            </div>
          ))}
        </div>
        <Callout kind="story" title="Historical context — the Pond's era">
          In the mass production eras (<strong>1980s–1990s</strong>), one-size-fits-all products were viable —
          think <strong>Pond&apos;s cold cream</strong>. With increasing competition and product variety,
          segmentation became essential; modern markets require targeted approaches to succeed.
        </Callout>
      </Reveal>

      <div className="mt-10"><Reveal>
        <Takeaways items={[
          <><strong>Geographic:</strong> Zudio sells winter layers in Delhi, monsoon-weight clothing in Mumbai, streetwear in Bangalore.</>,
          <><strong>Demographic:</strong> Pulsar's &ldquo;Definitely Male&rdquo; owns 17–24 males; L'Oréal runs 20+/30+/40+ variants on a 70–80% shared base with age-matched ambassadors.</>,
          <><strong>Psychographic:</strong> Nike serves Fitness Focused, Sport Aspirers, Style &amp; Status Seekers, and the Sustainability Conscious — inside 15 major psychographic segments.</>,
          <><strong>Age alone fails</strong> — it must be linked to benefits and aspirations; two firms can legitimately segment the same market differently.</>,
          <>Mass eras made one-size-fits-all viable (Pond&apos;s); competition made segmentation essential.</>,
        ]} />
      </Reveal></div>
    </Section>
  );
}

/* ============================================================
   LECTURE 12 · CHAPTER 1 — behavioral-benefit
   ============================================================ */

const SURF_SEGS = [
  { name: "Heavy Users", icon: Package, d: "Require value packs offering more washes at economical prices." },
  { name: "Machine-Wash Users", icon: WashingMachine, d: "Need liquid detergents with superior stain removal and machine-friendly formulations." },
  { name: "Occasional Users", icon: Droplets, d: "Purchase small sachets that prevent product waste." },
  { name: "Value Seekers", icon: Percent, d: "Respond to promotional offers like 'buy one get one' deals with mega packs." },
] as const;

const COLGATE = [
  { name: "Strong Teeth", tag: "with Amino Shakti", d: "Stronger teeth and better enamel protection." },
  { name: "Max Fresh", tag: "freshness", d: "Long-lasting freshness and bad breath prevention." },
  { name: "Visible White", tag: "whitening", d: "Whiter teeth for improved confidence and social acceptability." },
  { name: "Sensitive", tag: "relief", d: "Instant relief and pain-free solutions for tooth sensitivity." },
  { name: "Total", tag: "12-hour protection", d: "Comprehensive protection covering enamel care, gum health, and breath freshness." },
] as const;

const FITNESS_SEGS = [
  { name: "Convenience Seekers", who: "Rea, Mohit", need: "Easy and short workouts", targets: "Busy professionals and easily-bored users" },
  { name: "Performance Seekers", who: "Neha, Karan", need: "Metrics and improvement tracking", targets: "Serious fitness enthusiasts monitoring progress" },
  { name: "Supported Fitness Seekers", who: "Mr. Mehta", need: "Guidance and safety", targets: "Older or health-conscious users requiring expert direction" },
  { name: "Social Exercisers", who: "Simran", need: "Interaction and motivation", targets: "Users seeking community engagement and social validation" },
] as const;

function PenetrationMachine() {
  const [revealed, setRevealed] = useState(false);
  const [seg, setSeg] = useState(0);
  const s = SURF_SEGS[seg];
  return (
    <MachineCard title="The 25 → 75 machine" chip="Surf Excel's behavioral segments">
      <div className="mt-5">
        <div className="mb-1.5 flex items-baseline justify-between">
          <span className="text-[.72rem] font-extrabold uppercase tracking-[.12em]" style={{ color: MUTED }}>market penetration</span>
          <span className="font-mono-warm text-[1.3rem] font-extrabold" style={{ color: TEAL }}>
            <CountUp from={25} to={revealed ? 75 : 25} nonce={revealed ? 1 : 0} />%
          </span>
        </div>
        <div className="h-8 w-full overflow-hidden rounded-full" style={{ background: "#efe9db" }}>
          <motion.div className="flex h-full items-center justify-end rounded-full pr-3"
            style={{ background: "linear-gradient(90deg,#14b8a6,#0f766e)" }}
            initial={false}
            animate={{ width: revealed ? "75%" : "25%" }}
            transition={{ type: "spring", stiffness: 60, damping: 18 }}>
            <span className="text-[.7rem] font-extrabold" style={{ color: "#f2fbf8" }}>
              {revealed ? "with behavioral segmentation" : "no segmentation"}
            </span>
          </motion.div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <MButton tone="primary" onClick={() => setRevealed((r) => !r)} label={revealed ? "Replay: revert to 25 percent" : "Reveal the 75 percent market"}>
            {revealed ? "Back to 25%" : "Segment the market → 75%"}
          </MButton>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {SURF_SEGS.map((x, i) => (
          <button key={x.name} type="button" onClick={() => setSeg(i)}
            className="rounded-xl px-3 py-2 text-[.76rem] font-bold transition-transform hover:-translate-y-0.5"
            style={{
              background: seg === i ? "linear-gradient(135deg,#14b8a6,#0f766e)" : "#fffdf9",
              color: seg === i ? "#f2fbf8" : TEAL,
              border: `1px solid ${seg === i ? "#0f766e" : CREAM_BORDER}`,
            }}
            aria-label={`Surf Excel segment: ${x.name}`}>
            {x.name}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={s.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}
          className="mt-3 flex items-start gap-3 rounded-2xl p-4" style={{ background: CREAM_BG, border: `1px solid ${CREAM_BORDER}` }}>
          <s.icon className="mt-0.5 h-5 w-5 shrink-0" style={{ color: TEAL }} aria-hidden />
          <div>
            <p className="font-extrabold" style={{ color: TEAL }}>{s.name}</p>
            <p className="mt-1 text-[.86rem] leading-relaxed" style={{ color: "#3a4a48" }}>{s.d}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <MStatus>
        {revealed
          ? "With behavioral segmentation, Surf Excel effectively targets up to 75% of the market — four behaviors, four products."
          : "Without this segmentation, only 25% of potential consumers would purchase the detergent."}
      </MStatus>
    </MachineCard>
  );
}

function ColgatePicker() {
  const [i, setI] = useState(0);
  const c = COLGATE[i];
  return (
    <MachineCard title="The benefit shelf" chip="Colgate's five variants">
      <div className="mt-4 flex flex-wrap gap-2">
        {COLGATE.map((x, idx) => (
          <button key={x.name} type="button" onClick={() => setI(idx)}
            className="rounded-xl px-3 py-2 text-[.76rem] font-bold transition-transform hover:-translate-y-0.5"
            style={{
              background: i === idx ? "linear-gradient(135deg,#e3c26b,#a97d2c)" : "#fffdf9",
              color: i === idx ? "#231a08" : GOLD,
              border: `1px solid ${i === idx ? "#a97d2c" : CREAM_BORDER}`,
            }}
            aria-label={`Colgate variant: ${x.name}`}>
            {x.name}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={c.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}
          className="mt-4 rounded-2xl p-4" style={{ background: "#f6efe0", border: "1px solid #e0c88f" }}>
          <p className="font-extrabold" style={{ color: GOLD }}>Colgate {c.name} <span className="text-[.72rem] font-bold uppercase tracking-[.1em]">· {c.tag}</span></p>
          <p className="mt-1 text-[.86rem] leading-relaxed" style={{ color: "#3a4a48" }}>{c.d}</p>
        </motion.div>
      </AnimatePresence>
      <MStatus>
        All five are toothpastes — each communicates a distinct benefit to a different consumer segment. That is
        how Colgate captures broader market share in one category.
      </MStatus>
    </MachineCard>
  );
}

export function MktgBehavioralSection() {
  return (
    <Section id="behavioral-benefit">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 12"
        title={<>How they act, <span style={{ background: "linear-gradient(135deg,#14b8a6,#a97d2c)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>what they seek</span></>}
        lead="Behavioral segmentation reads what consumers do — usage rate, mode, frequency, pack size, promotional sensitivity. Benefit segmentation reads what they want. Surf Excel turned 25% penetration into 75% by doing both."
      />

      <ReadStep n="1" title="The five behavioral metrics" sub="Dividing consumers by how they act and consume" />
      <Reveal>
        <div className="grid gap-3">
          <KV k="Usage rate" v="How frequently and intensively consumers use a product — heavy users who wash clothes frequently need products offering more washes and value for money." />
          <KV k="Mode of usage" v="How consumers use the product — machine-wash users prefer convenience and need better stain removal, making liquid detergents ideal for them." />
          <KV k="Frequency of purchase" v="How often consumers buy — distinct from usage rate; helps identify occasional users who may prefer smaller pack sizes." />
          <KV k="Pack size" v="Occasional users prefer small sachets, while heavy users benefit from larger, value-oriented bulk packs." />
          <KV k="Promotional sensitivity" v="Responsiveness to offers and discounts — value seekers actively switch brands based on promotional incentives and special offers." />
        </div>
      </Reveal>

      <ReadStep n="2" title="Surf Excel: four behaviors, four products" sub="25% → 75% market penetration" />
      <Reveal><PenetrationMachine /></Reveal>
      <Reveal>
        <p className={`${PROSE} mt-5`}>
          By segmenting their market behaviorally, Surf Excel created <strong>different products for each
          segment</strong>, significantly increasing market penetration. Without this segmentation, only{" "}
          <strong>25% of potential consumers would purchase</strong>; behavioral segmentation enables the company
          to effectively target <strong>up to 75% of the market</strong>.
        </p>
      </Reveal>

      <ReadStep n="3" title="Colgate: benefit-based segmentation" sub="The final method — what consumers seek from products" />
      <Reveal><ColgatePicker /></Reveal>
      <Reveal>
        <Callout kind="insight" title="The benefit-based principle">
          <strong>Within each segment, consumers are similar; between segments, distinctly different.</strong>{" "}
          That lets organizations communicate specific product benefits to targeted audiences, address diverse
          consumer needs within the same product category, and expand market coverage by serving multiple
          benefit-seeking segments.
        </Callout>
      </Reveal>

      <ReadStep n="4" title="Exercise: segmenting a fitness app" sub="Four segments emerge from one user base" />
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {FITNESS_SEGS.map((f) => (
            <div key={f.name} className="card-warm lift p-5">
              <p className="flex items-center gap-1.5 font-extrabold" style={{ color: TEAL }}>
                <Dumbbell className="h-4 w-4" aria-hidden />{f.name}
              </p>
              <p className="mt-1 text-[.72rem] font-extrabold uppercase tracking-[.1em]" style={{ color: GOLD }}>{f.who}</p>
              <p className="mt-2 text-[.84rem] font-semibold leading-relaxed" style={{ color: "#3a4a48" }}>Need: {f.need}</p>
              <p className="mt-1 text-[.8rem] leading-relaxed" style={{ color: MUTED }}>{f.targets}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <ReadStep n="5" title="Why segmentation matters — and where it leads" sub="Organizing chaos, feeding STP" />
      <Reveal>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { t: "Organizing chaos", d: "Converting a large, complex consumer base into meaningful, manageable groups." },
            { t: "Simplifying strategy", d: "Enabling marketers to cater specifically to each segment's unique requirements." },
            { t: "Reducing complexity", d: "Transforming a 10-lakh consumer base into smaller, focused segments with specific characteristics." },
          ].map((x) => (
            <div key={x.t} className="card-warm p-5">
              <p className="font-extrabold" style={{ color: TEAL }}>{x.t}</p>
              <p className="mt-1.5 text-[.84rem] leading-relaxed" style={{ color: "#3a4a48" }}>{x.d}</p>
            </div>
          ))}
        </div>
        <p className={`${PROSE} mt-4`}>
          Segmentation is <strong>not merely a classification tool</strong> — it is the marketer&apos;s systematic
          approach to organizing and managing market heterogeneity. Without it, organizations risk{" "}
          <strong>appealing to no one effectively</strong>, wasting resources on misaligned products, and missing
          significant market opportunities.
        </p>
        <div className="mt-5">
          <StepsFlow
            steps={[
              { label: "S · Segmentation", sub: "Divide the market — geographic, demographic, psychographic, behavioral, or benefit-based", icon: <Sparkles className="h-5 w-5 shrink-0" style={{ color: TEAL }} aria-hidden /> },
              { label: "T · Targeting", sub: "Select which segments to prioritize and pursue (subsequent lectures)", icon: <Target className="h-5 w-5 shrink-0" style={{ color: GOLD }} aria-hidden /> },
              { label: "P · Positioning", sub: "Communicate distinct value propositions to target segments", icon: <BadgeCheck className="h-5 w-5 shrink-0" style={{ color: TEAL }} aria-hidden /> },
            ]}
          />
        </div>
      </Reveal>
      <Reveal>
        <div className="mt-6">
          <Quiz
            q="Surf Excel segmented its detergent market behaviorally. What did that do to its market penetration?"
            options={["From 75% down to 25% — focus costs reach", "From 25% of potential consumers up to 75% of the market", "No change — penetration is set by pack size", "From 50% to 100% of Indian households"]}
            answer={1}
            explain="Without behavioral segmentation only 25% of potential consumers would purchase; with four behavior-matched products (value packs, liquids, sachets, BOGO mega packs) Surf Excel effectively targets up to 75%."
            source="Lecture 12 · Surf Excel case"
          />
        </div>
      </Reveal>

      <div className="mt-10"><Reveal>
        <Takeaways items={[
          <><strong>Behavioral metrics:</strong> usage rate, mode of usage, frequency of purchase, pack size, promotional sensitivity.</>,
          <><strong>Surf Excel:</strong> heavy users → value packs; machine-wash users → liquids; occasional users → sachets; value seekers → BOGO mega packs. Penetration 25% → 75%.</>,
          <><strong>Colgate&apos;s five benefit variants</strong> — Strong Teeth, Max Fresh, Visible White, Sensitive, Total — each speaks one benefit language to one segment.</>,
          <>The fitness app exercise shows segmentation in action: <strong>Rea &amp; Mohit, Neha &amp; Karan, Mr. Mehta, Simran</strong> want four different apps.</>,
          <>Segmentation <strong>organizes chaos</strong> — a 10-lakh consumer base becomes focused groups — and is the &ldquo;S&rdquo; that feeds Targeting and Positioning.</>,
        ]} />
      </Reveal></div>
    </Section>
  );
}

/* ============================================================
   Hoisted machine sub-components (module scope — never created
   during render; react-hooks/static-components).
   ============================================================ */

function MktgPanel({ side, delivered, rated }: { side: "a" | "b"; delivered: boolean; rated: boolean }) {
  const isA = side === "a";
  const anchor = isA ? "25 min" : "45–50 min";
  const anchorWhy = isA ? "previous fast deliveries" : "heavy rain outside";
  const gapTxt = isA ? "34 − 25 = 9 min slower than the anchor" : "34 vs 45–50 — well before the anchor";
  return (
    <div className="rounded-2xl p-4"
      style={{ background: isA ? "#f7ecee" : "#f6efe0", border: `1px solid ${isA ? "#ecd2d9" : "#e0c88f"}` }}>
      <div className="flex items-center justify-between">
        <p className="font-extrabold" style={{ color: isA ? ROSE : GOLD }}>
          Student {isA ? "A" : "B"}
        </p>
        <span className="rounded-full px-2 py-0.5 text-[.64rem] font-extrabold uppercase tracking-[.1em]"
          style={{ background: "#fffdf9", color: MUTED }}>
          anchor · {anchor}
        </span>
      </div>
      <p className="mt-1 text-[.75rem] font-semibold" style={{ color: MUTED }}>
        expectation set by {anchorWhy}
      </p>
      {/* anchor scale */}
      <div className="relative mt-4 h-9">
        <div className="absolute inset-x-0 top-4 h-1.5 rounded-full" style={{ background: isA ? "#eed4da" : "#eadfc2" }} />
        {[0, 15, 30, 45, 60].map((m) => (
          <span key={m} className="absolute top-7 -translate-x-1/2 text-[.6rem] font-bold" style={{ left: `${(m / 60) * 100}%`, color: "#9aa8a4" }}>{m}</span>
        ))}
        <span className="absolute top-1 -translate-x-1/2 rounded-md px-1.5 py-0.5 text-[.62rem] font-extrabold"
          style={{ left: `${((isA ? 25 : 47.5) / 60) * 100}%`, background: "#fffdf9", color: isA ? ROSE : GOLD, border: `1px solid ${isA ? "#ecd2d9" : "#e0c88f"}` }}>
          anchor {anchor}
        </span>
        {delivered ? (
          <motion.span className="absolute top-1 -translate-x-1/2 rounded-md px-1.5 py-0.5 text-[.62rem] font-extrabold shadow-sm"
            style={{ left: `${(34 / 60) * 100}%`, background: "linear-gradient(135deg,#14b8a6,#0f766e)", color: "#f2fbf8" }}
            initial={{ y: -8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 18 }}>
            34 min
          </motion.span>
        ) : null}
      </div>
      {rated ? (
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-3">
          <StarRow filled={isA ? 2 : 5} tone={isA ? ROSE : GOLD} />
          <p className="mt-2 text-[.8rem] leading-relaxed" style={{ color: "#3a4a48" }}>
            {isA
              ? "34 minutes felt disappointing. The missing cutlery stung. Likely to switch to another app."
              : "Warm food, reliable tracking, delivered well inside the rain estimate. Highly satisfied — likely to become a loyal customer."}
          </p>
          <p className="mt-1 font-mono-warm text-[.7rem] font-bold" style={{ color: isA ? ROSE : GOLD }}>{gapTxt}</p>
        </motion.div>
      ) : (
        <p className="mt-3 text-[.78rem]" style={{ color: MUTED }}>
          {delivered ? "Rating incoming…" : "Waiting for the delivery…"}
        </p>
      )}
    </div>
  );
}

function MktgBigNum({ from, to, suffix, tone, nonce, decimals = 0 }: { from: number; to: number; suffix: string; tone: string; nonce: number; decimals?: number }) {
  return (
    <span className="font-mono-warm text-[1.9rem] font-extrabold leading-none" style={{ color: tone }}>
      <CountUp from={from} to={to} nonce={nonce} />{suffix}
    </span>
  );
}

function MktgTabBtn({ id, label, icon, tab, onTab }: { id: "geo" | "demo" | "psy"; label: string; icon: React.ReactNode; tab: string; onTab: (id: "geo" | "demo" | "psy") => void }) {
  return (
    <button type="button" onClick={() => onTab(id)}
      className="flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-[.8rem] font-bold transition-transform hover:-translate-y-0.5"
      style={{
        background: tab === id ? "linear-gradient(135deg,#14b8a6,#0f766e)" : "#fffdf9",
        color: tab === id ? "#f2fbf8" : TEAL,
        border: `1px solid ${tab === id ? "#0f766e" : CREAM_BORDER}`,
      }}
      aria-label={`Basis: ${label}`} aria-pressed={tab === id}>
      {icon}{label}
    </button>
  );
}
