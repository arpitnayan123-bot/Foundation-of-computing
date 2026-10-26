/* ============================================================
   THE COCKPIT (#/cockpit) — the atlas flight plan + the tutor.

   One surface that answers the question the ledger leaves
   open: "what should I study right now?" — then lets the
   reader interrogate their own notes.

   Two instruments:

   1. TODAY'S FLIGHT PLAN — three moves (READ · RECHARGE ·
      STRIKE) computed deterministically from the ledger's own
      data (lib/cockpit.ts): reading progress, the SM-2 due
      queue, trouble spots, per-shelf mastery. Every move
      deep-links through the same handoff contracts the ⌘K
      palette uses, so one tap opens the real chapter, review
      or drill. No AI picks the targets — the data does.

   2. ASK THE ATLAS — a tutor grounded in the committed corpus
      (app/api/ask). Answers arrive with the chapters they
      drew on as clickable citation chips, and any answer can
      be forged into flashcards on the spot (the same store
      Card Forge writes — the cards ride the next drill and
      the SM-2 schedule).

   Aesthetic: the flight deck — the landing's midnight chrome
   with instrument amber, mono telemetry and the shelf accents
   carried through to the plan steps.
   ============================================================ */

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  Crosshair,
  Flame,
  Hammer,
  Layers,
  LocateFixed,
  RefreshCw,
  Send,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import {
  buildFlightPlan,
  enterSection,
  runFlightAction,
  type FlightAction,
  type FlightPlan,
  type FlightStep,
} from "@/lib/cockpit";
import { addCustomCards } from "@/lib/custom-cards";
import { SUBJECTS, type Subject } from "@/components/atlas/subjects";
import { DefendPanel } from "./DefendPanel";
import { CaseStrikePanel } from "./CaseStrikePanel";
import { ConceptCheck } from "./ConceptCheck";
import { YonaoshiPanel } from "./YonaoshiPanel";

/* ---------------- data shapes ---------------- */

interface AskSource {
  shelfId: string;
  chapterKey: string;
  label: string;
  groupLabel: string;
}

interface ChatMessage {
  id: number;
  role: "user" | "atlas";
  text: string;
  sources?: AskSource[];
  forge?: "idle" | "loading" | "done" | "error";
  forgedCount?: number;
}

const SUBJECT_BY_ID = new Map<string, Subject>(SUBJECTS.map((s) => [s.id, s]));

const SUGGESTIONS = [
  "Explain the eight demand states",
  "Stacks vs queues — when does each win?",
  "Why does Bayes' theorem matter?",
  "Walk me through the accounting equation",
];

const STEP_ICONS: Record<FlightStep["kind"], LucideIcon> = {
  read: BookOpen,
  recharge: Layers,
  strike: Crosshair,
};

function actionLabel(action: FlightAction): string {
  switch (action.type) {
    case "section":
      return "Open the chapter";
    case "review":
      return "Open spaced review";
    case "drill":
      return "Run the drill";
    case "mock":
      return "Compose the mock";
    case "forge":
      return "Open the forge";
    case "mistakes":
      return "Open the 错题本";
  }
}

/* ---------------- view ---------------- */

type AskMode = "answer" | "socratic";

export function CockpitView({ onExitAtlas }: { onExitAtlas: () => void }) {
  const [plan, setPlan] = useState<FlightPlan | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [asking, setAsking] = useState(false);
  const [askError, setAskError] = useState<string | null>(null);
  /* the tutor's posture — straight answers, or the duck's "lead,
     don't leak" hint ladder */
  const [askMode, setAskMode] = useState<AskMode>("answer");

  const idRef = useRef(0);
  const nextId = useCallback(() => {
    idRef.current += 1;
    return idRef.current;
  }, []);
  const messagesRef = useRef<ChatMessage[]>([]);
  messagesRef.current = messages;
  const logRef = useRef<HTMLDivElement>(null);

  /* the plan is built from localStorage — read it after first paint */
  useEffect(() => {
    const raf = requestAnimationFrame(() => setPlan(buildFlightPlan()));
    return () => cancelAnimationFrame(raf);
  }, []);

  /* keep the transcript pinned to the newest line */
  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, asking]);

  const rebuildPlan = useCallback(() => {
    setPlan(buildFlightPlan());
  }, []);

  /* ---- ask the tutor ---- */
  const send = useCallback(
    async (raw: string) => {
      const q = raw.trim();
      if (!q || asking) return;
      const history = messagesRef.current
        .slice(-4)
        .map((m) => ({ role: m.role === "atlas" ? "assistant" : "user", content: m.text }));
      setMessages((prev) => [...prev, { id: nextId(), role: "user", text: q }]);
      setInput("");
      setAskError(null);
      setAsking(true);
      try {
        const res = await fetch("/api/ask", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: q, history, mode: askModeRef.current }),
        });
        const data = (await res.json().catch(() => null)) as
          | { answer?: string | null; sources?: AskSource[]; error?: string }
          | null;
        if (!res.ok) {
          setAskError(data?.error ?? "The tutor is unreachable — try again in a moment.");
        } else if (!data?.answer) {
          setMessages((prev) => [
            ...prev,
            {
              id: nextId(),
              role: "atlas",
              text:
                "That one isn't in the committed notes, so I won't invent it. Try keywords from the chapter you're reading — or open ⌘K and search the shelves directly.",
              sources: [],
            },
          ]);
        } else {
          setMessages((prev) => [
            ...prev,
            {
              id: nextId(),
              role: "atlas",
              text: String(data.answer),
              sources: Array.isArray(data.sources) ? data.sources : [],
              forge: Array.isArray(data.sources) && data.sources.length > 0 ? "idle" : undefined,
            },
          ]);
        }
      } catch {
        setAskError("The tutor is unreachable — check the connection and try again.");
      } finally {
        setAsking(false);
      }
    },
    [asking, nextId]
  );

  /* the send callback is memoised on `asking` only — mirror the
     mode through a ref so toggling never stales the closure */
  const askModeRef = useRef<AskMode>("answer");
  askModeRef.current = askMode;

  /* ---- forge the last answer into cards ---- */
  const forgeFrom = useCallback(
    async (msgId: number) => {
      const msg = messagesRef.current.find((m) => m.id === msgId);
      const source = msg?.sources?.[0];
      if (!msg || !source || msg.forge === "loading" || msg.forge === "done") return;
      const patch = (p: Partial<ChatMessage>) =>
        setMessages((prev) => prev.map((m) => (m.id === msgId ? { ...m, ...p } : m)));
      patch({ forge: "loading" });
      try {
        const res = await fetch("/api/generate-cards", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            shelfId: source.shelfId,
            chapterKey: source.chapterKey,
            count: 8,
            text: msg.text,
            label: source.label,
          }),
        });
        const data = (await res.json().catch(() => null)) as
          | { cards?: Array<{ q?: unknown; a?: unknown }>; error?: string }
          | null;
        const cards = Array.isArray(data?.cards) ? data!.cards : [];
        const drafts = cards
          .filter((c) => typeof c?.q === "string" && typeof c?.a === "string")
          .map((c) => ({ shelfId: source.shelfId, chapterKey: source.chapterKey, q: c.q as string, a: c.a as string }));
        if (!res.ok || drafts.length === 0) {
          patch({ forge: "error" });
          return;
        }
        const accepted = addCustomCards(drafts);
        if (accepted.length === 0) {
          patch({ forge: "error" });
          return;
        }
        patch({ forge: "done", forgedCount: accepted.length });
      } catch {
        patch({ forge: "error" });
      }
    },
    []
  );

  const dateLine = new Date().toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  return (
    <div className="relative flex min-h-screen flex-col bg-[#070509] text-[#f7ecdd]">
      {/* ambient instrument glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 h-72 opacity-60"
        style={{ background: "radial-gradient(60% 100% at 50% 0%, rgba(245,158,11,.12), transparent 70%)" }}
      />

      {/* ---------------- header ---------------- */}
      <header className="sticky top-0 z-10 border-b border-white/10 bg-[#070509]/90 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-3xl items-center gap-3 px-4 py-3 sm:px-6">
          <button
            type="button"
            onClick={onExitAtlas}
            aria-label="Back to the atlas"
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[.05] px-3 py-1.5 font-mono text-[.6rem] font-bold uppercase tracking-[.16em] text-[#cbb89a] transition hover:bg-white/[.12] hover:text-[#f5c889]"
          >
            <ArrowLeft aria-hidden className="h-3 w-3" />
            Atlas
          </button>
          <div className="min-w-0">
            <h1 className="font-display text-lg font-black leading-tight text-[#f7ecdd] sm:text-xl">The Cockpit</h1>
            <p className="font-mono text-[.56rem] uppercase tracking-[.22em] text-[#a89a86]">{dateLine}</p>
          </div>
          <div className="ml-auto flex items-center gap-1.5 font-mono text-[.58rem] font-bold uppercase tracking-[.1em]">
            <span
              className="flex items-center gap-1 rounded-full border border-[#e4674a40] bg-[#e4674a14] px-2.5 py-1 text-[#e4674a]"
              title="Practice streak"
            >
              <Flame aria-hidden className="h-3 w-3" />
              {plan ? `${plan.stats.streak}d` : "—"}
            </span>
            <span
              className="rounded-full border border-[#f59e0b40] bg-[#f59e0b14] px-2.5 py-1 text-[#f5c889]"
              title="Cards due for spaced review"
            >
              {plan ? `${plan.stats.due} due` : "— due"}
            </span>
            <span
              className="hidden rounded-full border border-white/10 bg-white/[.05] px-2.5 py-1 text-[#cbb89a] sm:inline"
              title="Today's daily goal"
            >
              {plan ? `${plan.stats.goalDone}/${plan.stats.goalTarget} today` : "goal —"}
            </span>
          </div>
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-3xl flex-1 px-4 pb-20 pt-7 sm:px-6">
        {/* ---------------- flight plan ---------------- */}
        <section aria-labelledby="cockpit-plan-title">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
            <div className="min-w-0">
              <p className="font-mono text-[.58rem] font-bold uppercase tracking-[.24em] text-[#f5c889]">
                Today&apos;s flight plan
              </p>
              <h2 id="cockpit-plan-title" className="font-display text-2xl font-black text-[#f7ecdd] sm:text-3xl">
                Three moves. One sitting.
              </h2>
              <p className="mt-1 text-[.84rem] text-[#a89a86]" aria-live="polite">
                {plan ? plan.brief : "Reading the ledger…"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="rounded-full border border-white/10 bg-white/[.05] px-3 py-1 font-mono text-[.6rem] font-bold uppercase tracking-[.14em] text-[#cbb89a]"
                title="Rough time for the whole plan"
              >
                ~{plan ? plan.totalMinutes : "–"} min
              </span>
              <button
                type="button"
                onClick={rebuildPlan}
                aria-label="Rebuild the plan from fresh ledger data"
                title="Rebuild the plan from fresh ledger data"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[.05] text-[#cbb89a] transition hover:bg-white/[.12] hover:text-[#f5c889]"
              >
                <RefreshCw aria-hidden className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <ol className="space-y-3">
            {plan
              ? plan.steps.map((step, i) => (
                  <PlanStep key={`${step.kind}-${i}`} step={step} index={i} />
                ))
              : [0, 1, 2].map((i) => (
                  <li
                    key={i}
                    className="h-[104px] animate-pulse rounded-2xl border border-white/[.07] bg-white/[.03]"
                    aria-hidden
                  />
                ))}
          </ol>

          <p className="mt-3 flex items-center gap-1.5 text-[.72rem] text-[#a89a86]/80">
            <ShieldCheck aria-hidden className="h-3.5 w-3.5 text-[#f5c889]/70" />
            The plan is computed from your own ledger — reading progress, due cards, mastery. It never leaves the browser.
          </p>
        </section>

        {/* ---------------- defend it · the oxford tutorial ---------------- */}
        <DefendPanel />

        {/* ---------------- case strike · the cold call ---------------- */}
        <CaseStrikePanel />

        {/* ---------------- ask the atlas ---------------- */}
        <section aria-labelledby="cockpit-ask-title" className="mt-12">
          <div className="mb-4">
            <p className="font-mono text-[.58rem] font-bold uppercase tracking-[.24em] text-[#f5c889]">
              Ask the Atlas
            </p>
            <h2 id="cockpit-ask-title" className="font-display text-2xl font-black text-[#f7ecdd] sm:text-3xl">
              Your notes, talking back.
            </h2>
            <p className="mt-1 text-[.84rem] text-[#a89a86]">
              Every answer is drawn only from your own notes — cited by chapter, never invented.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-1.5" role="group" aria-label="Tutor mode">
              {(
                [
                  { id: "answer" as AskMode, label: "straight answer" },
                  { id: "socratic" as AskMode, label: "lead me there" },
                ]
              ).map((m) => {
                const active = askMode === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setAskMode(m.id)}
                    title={
                      m.id === "answer"
                        ? "Full grounded answers, cited by chapter"
                        : "The duck posture — hints and guiding questions; the answer unlocks only when you say reveal"
                    }
                    className="flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-[.6rem] font-bold uppercase tracking-[.12em] transition"
                    style={
                      active
                        ? { borderColor: "#f59e0b66", background: "#f59e0b1f", color: "#f5c889" }
                        : { borderColor: "rgba(255,255,255,.1)", background: "rgba(255,255,255,.05)", color: "#8d7b63" }
                    }
                  >
                    {m.id === "socratic" ? <LocateFixed aria-hidden className="h-3 w-3" /> : <ShieldCheck aria-hidden className="h-3 w-3" />}
                    {m.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[.03]">
            <div
              ref={logRef}
              role="log"
              aria-live="polite"
              aria-label="Ask the Atlas conversation"
              className="cockpit-scroll max-h-[26rem] space-y-4 overflow-y-auto p-4 sm:p-5"
            >
              {messages.length === 0 && !asking ? (
                <div className="py-2">
                  <p className="text-[.9rem] leading-relaxed text-[#a89a86]">Try one —</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => send(s)}
                        className="rounded-full border border-[#f59e0b33] bg-[#f59e0b0f] px-3.5 py-2 text-left text-[.78rem] font-semibold text-[#f5c889] transition hover:bg-[#f59e0b1f]"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              {messages.map((m) =>
                m.role === "user" ? (
                  <div key={m.id} className="flex justify-end">
                    <p className="max-w-[85%] rounded-2xl rounded-br-md border border-[#f59e0b40] bg-[#f59e0b1a] px-4 py-2.5 text-[.9rem] leading-relaxed text-[#f5c889]">
                      {m.text}
                    </p>
                  </div>
                ) : (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="flex justify-start"
                  >
                    <div className="max-w-[92%] rounded-2xl rounded-bl-md border border-white/10 bg-white/[.05] px-4 py-3 sm:px-5">
                      <AnswerText text={m.text} />
                      {m.sources && m.sources.length > 0 ? (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          <span className="sr-only">Chapters used in this answer:</span>
                          {m.sources.map((src) => {
                            const shelf = SUBJECT_BY_ID.get(src.shelfId);
                            return (
                              <button
                                key={`${src.shelfId}:${src.chapterKey}`}
                                type="button"
                                onClick={() => enterSection(src.shelfId, src.chapterKey)}
                                title={`Open ${src.label} on the ${shelf?.title ?? src.shelfId} shelf`}
                                className="flex max-w-full items-center gap-1 truncate rounded-full border border-white/10 bg-white/[.05] px-2.5 py-1 font-mono text-[.6rem] font-bold uppercase tracking-[.08em] text-[#cbb89a] transition hover:bg-white/[.12] hover:text-[#f5c889]"
                              >
                                <LocateFixed aria-hidden className="h-3 w-3 shrink-0" />
                                <span className="truncate">
                                  {shelf?.short ?? src.shelfId} · {src.label}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      ) : null}
                      {m.forge && m.forge !== "idle" ? (
                        <p
                          className="mt-2.5 flex items-center gap-1.5 font-mono text-[.62rem] font-bold uppercase tracking-[.12em] text-[#a9c977]"
                          role="status"
                        >
                          <Hammer aria-hidden className="h-3 w-3" />
                          {m.forge === "loading"
                            ? "Forging cards…"
                            : m.forge === "done"
                              ? `${m.forgedCount ?? 0} cards forged — they ride the next drill`
                              : "The forge came back empty — try again."}
                        </p>
                      ) : null}
                      {m.forge === "idle" ? (
                        <button
                          type="button"
                          onClick={() => forgeFrom(m.id)}
                          className="mt-3 flex items-center gap-1.5 rounded-full border border-[#a9c97755] bg-[#a9c97714] px-3 py-1.5 text-[.66rem] font-black uppercase tracking-[.12em] text-[#a9c977] transition hover:bg-[#a9c97726]"
                        >
                          <Hammer aria-hidden className="h-3 w-3" />
                          Forge cards from this answer
                        </button>
                      ) : null}
                    </div>
                  </motion.div>
                )
              )}

              {asking ? (
                <div className="flex justify-start">
                  <p
                    className="animate-pulse rounded-2xl rounded-bl-md border border-white/10 bg-white/[.05] px-4 py-2.5 font-mono text-[.7rem] uppercase tracking-[.16em] text-[#a89a86]"
                    role="status"
                  >
                    Reading the shelf…
                  </p>
                </div>
              ) : null}
            </div>

            {askError ? (
              <p role="alert" className="border-t border-[#e4674a33] bg-[#e4674a0f] px-4 py-2 text-[.76rem] font-semibold text-[#e4674a]">
                {askError}
              </p>
            ) : null}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-white/10 p-3"
            >
              <label htmlFor="cockpit-ask" className="sr-only">
                Ask the Atlas
              </label>
              <input
                id="cockpit-ask"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                maxLength={500}
                autoComplete="off"
                placeholder="Ask your notes anything…"
                className="h-11 min-w-0 flex-1 rounded-full border border-white/10 bg-white/[.05] px-4 text-[.9rem] text-[#f7ecdd] outline-none transition placeholder:text-[#a89a86]/70 focus:border-[#f59e0b66] focus:bg-white/[.07]"
              />
              <button
                type="submit"
                disabled={asking || !input.trim()}
                aria-label="Send the question"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f59e0b] text-[#1a0f02] transition hover:bg-[#f5c889] disabled:opacity-40"
              >
                <Send aria-hidden className="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>
        {/* ---------------- yonaoshi · the evening debrief ---------------- */}
        <YonaoshiPanel />
      </main>
    </div>
  );
}

/* ---------------- pieces ---------------- */

function PlanStep({ step, index }: { step: FlightStep; index: number }) {
  const Icon = STEP_ICONS[step.kind];
  return (
    <motion.li
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.36, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-white/10 bg-white/[.04] transition-colors hover:bg-white/[.06]"
    >
      <div className="flex items-start gap-3 p-4 sm:gap-4 sm:p-5">
        <span
          aria-hidden
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
          style={{ borderColor: `${step.accent}55`, backgroundColor: `${step.accent}14`, color: step.accent }}
        >
          <Icon className="h-4.5 w-4.5" />
        </span>
        <div className="min-w-0 flex-1">
          <p
            className="font-mono text-[.56rem] font-bold uppercase tracking-[.2em]"
            style={{ color: step.accent }}
          >
            Step {index + 1} · {step.kicker} · ~{step.minutes} min
          </p>
          <p className="mt-0.5 font-display text-base font-black leading-snug text-[#f7ecdd] sm:text-lg">
            {step.title}
          </p>
          <p className="mt-1 text-[.82rem] leading-relaxed text-[#a89a86]">{step.note}</p>
        </div>
        <button
          type="button"
          onClick={() => runFlightAction(step.action)}
          className="shrink-0 self-center rounded-full border px-3.5 py-2 text-[.62rem] font-black uppercase tracking-[.12em] transition hover:bg-white/[.1] sm:px-4"
          style={{ borderColor: `${step.accent}55`, color: step.accent, backgroundColor: `${step.accent}10` }}
        >
          {actionLabel(step.action)}
        </button>
      </div>
      {/* the TEAL rule — no READ leaves the cockpit unchecked */}
      {step.kind === "read" && step.action.type === "section" ? (
        <div className="px-4 pb-4 sm:px-5 sm:pb-5">
          <ConceptCheck subject={step.action.subject} section={step.action.section} accent={step.accent} />
        </div>
      ) : null}
    </motion.li>
  );
}

/** plain-text answer renderer — the API contract is no-markdown
 *  prose with "-" bullets, so render paragraphs and keep line
 *  breaks honest instead of pulling a markdown parser in. */
function AnswerText({ text }: { text: string }) {
  const blocks = text.split(/\n{2,}/).filter((b) => b.trim());
  return (
    <div className="space-y-2.5 text-[.9rem] leading-relaxed text-[#e9d7bf]">
      {blocks.map((block, i) => {
        const lines = block.split("\n");
        return (
          <p key={i}>
            {lines.map((line, j) => (
              <span key={j}>
                {j > 0 ? <br /> : null}
                {line}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}
