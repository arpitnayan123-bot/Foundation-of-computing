"use client";

/* ============================================================
   DEFEND IT — the Oxford tutorial as a cockpit instrument.

   The reader picks a chapter, explains it in their own words,
   and the Atlas dons the Oxford robe: one pointed probing
   question per turn, grounded ONLY in the committed chapter
   notes. When the reader calls for the verdict, the whole
   defense is graded against the notes — green / amber / red,
   a score, and the specific gaps. Gaps can be forged straight
   into flashcards (the same store Card Forge writes), so a
   shaky tutorial becomes tomorrow's drill automatically.

   Endpoint: app/api/defend (probe + grade, corpus-grounded).
   ============================================================ */

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Hammer, Send, ShieldQuestion, Swords } from "lucide-react";
import { CHAPTER_INDEX } from "@/lib/chapter-index";
import { SUBJECTS } from "./subjects";
import { addCustomCards } from "@/lib/custom-cards";

interface DefendMsg {
  id: number;
  role: "tutor" | "you";
  text: string;
}

interface Verdict {
  grade: "green" | "amber" | "red";
  score: number | null;
  gaps: string[];
}

const GRADE_META: Record<Verdict["grade"], { label: string; color: string; line: string }> = {
  green: { label: "defense holds", color: "#a9c977", line: "You carried the room." },
  amber: { label: "mostly there", color: "#f5c889", line: "Good bones — the gaps are real but fixable." },
  red: { label: "shaky ground", color: "#e4674a", line: "The tutorial did its job — now you know exactly where to dig." },
};

const MAX_TURNS = 6;

export function DefendPanel() {
  const [shelfId, setShelfId] = useState("mktg");
  const [chapterKey, setChapterKey] = useState("");
  const [thread, setThread] = useState<DefendMsg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState<"probe" | "grade" | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [verdict, setVerdict] = useState<Verdict | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [forge, setForge] = useState<"idle" | "loading" | "done" | "error">("idle");

  const idRef = useRef(0);
  const nextId = useCallback(() => {
    idRef.current += 1;
    return idRef.current;
  }, []);
  const threadRef = useRef<DefendMsg[]>([]);
  threadRef.current = thread;
  const logRef = useRef<HTMLDivElement>(null);

  const liveShelves = SUBJECTS.filter((s) => s.status === "live");
  const chaptersOf = (sid: string) => CHAPTER_INDEX.filter((c) => c.subject === sid);
  const chapter =
    chapterKey && chaptersOf(shelfId).some((c) => c.section === chapterKey)
      ? chaptersOf(shelfId).find((c) => c.section === chapterKey)!
      : null;

  /* default chapter per shelf */
  useEffect(() => {
    const first = chaptersOf(shelfId)[0];
    setChapterKey(first?.section ?? "");
  }, [shelfId]);

  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [thread, busy]);

  const reset = () => {
    setThread([]);
    setVerdict(null);
    setFeedback(null);
    setError(null);
    setForge("idle");
  };

  const userTurns = thread.filter((m) => m.role === "you").length;

  const explain = useCallback(
    async (raw: string) => {
      const text = raw.trim();
      if (!text || busy || !chapter) return;
      const history = threadRef.current.map((m) => ({ role: m.role === "tutor" ? "assistant" : "user", content: m.text }));
      setThread((prev) => [...prev, { id: nextId(), role: "you", text }]);
      setInput("");
      setError(null);
      setBusy("probe");
      try {
        const res = await fetch("/api/defend", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "probe", shelfId, chapterKey, history }),
        });
        const data = (await res.json().catch(() => null)) as { reply?: string; error?: string } | null;
        if (!res.ok || !data?.reply) {
          setError(data?.error ?? "The tutor is unreachable — try again in a moment.");
        } else {
          setThread((prev) => [...prev, { id: nextId(), role: "tutor", text: data.reply! }]);
        }
      } catch {
        setError("The tutor is unreachable — check the connection and try again.");
      } finally {
        setBusy(null);
      }
    },
    [busy, chapter, chapterKey, nextId, shelfId]
  );

  const grade = useCallback(async () => {
    if (busy || !chapter || userTurns < 2) return;
    const history = threadRef.current.map((m) => ({ role: m.role === "tutor" ? "assistant" : "user", content: m.text }));
    setError(null);
    setBusy("grade");
    try {
      const res = await fetch("/api/defend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "grade", shelfId, chapterKey, history }),
      });
      const data = (await res.json().catch(() => null)) as
        | { feedback?: string; verdict?: Verdict | null; error?: string }
        | null;
      if (!res.ok || !data?.feedback) {
        setError(data?.error ?? "The verdict is unreachable — try again in a moment.");
      } else {
        setFeedback(data.feedback);
        setVerdict(data.verdict ?? null);
      }
    } catch {
      setError("The verdict is unreachable — check the connection and try again.");
    } finally {
      setBusy(null);
    }
  }, [busy, chapter, chapterKey, shelfId, userTurns]);

  const forgeGaps = useCallback(async () => {
    if (!chapter || !feedback || forge === "loading" || forge === "done") return;
    setForge("loading");
    try {
      const gaps = verdict?.gaps?.length ? `\n\nGaps to cover:\n${verdict.gaps.map((g) => `- ${g}`).join("\n")}` : "";
      const res = await fetch("/api/generate-cards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          shelfId,
          chapterKey,
          count: 8,
          text: `${feedback}${gaps}`,
          label: `Defend gaps · ${chapter.label}`,
        }),
      });
      const data = (await res.json().catch(() => null)) as
        | { cards?: Array<{ q?: unknown; a?: unknown }>; error?: string }
        | null;
      const cards = Array.isArray(data?.cards) ? data!.cards : [];
      const drafts = cards
        .filter((c) => typeof c?.q === "string" && typeof c?.a === "string")
        .map((c) => ({ shelfId, chapterKey, q: c.q as string, a: c.a as string }));
      const accepted = drafts.length > 0 ? addCustomCards(drafts) : [];
      setForge(accepted.length > 0 ? "done" : "error");
    } catch {
      setForge("error");
    }
  }, [chapter, chapterKey, feedback, forge, shelfId, verdict]);

  return (
    <section aria-labelledby="defend-title" className="mt-12">
      <div className="mb-4">
        <p className="font-mono text-[.58rem] font-bold uppercase tracking-[.24em] text-[#f5c889]">
          Defend it · the Oxford tutorial
        </p>
        <h2 id="defend-title" className="font-display text-2xl font-black text-[#f7ecdd] sm:text-3xl">
          Explain it. Get probed. Hold the room.
        </h2>
        <p className="mt-1 text-[.84rem] text-[#a89a86]">
          Explain a chapter in your own words — the tutor answers only with pointed questions, then grades the
          defense against your actual notes.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[.03]">
        {/* chapter picker */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 p-3">
          <label htmlFor="defend-shelf" className="sr-only">
            Shelf
          </label>
          <select
            id="defend-shelf"
            value={shelfId}
            onChange={(e) => {
              setShelfId(e.target.value);
              reset();
            }}
            className="h-10 rounded-full border border-white/10 bg-white/[.05] px-3 font-mono text-[.64rem] font-bold uppercase tracking-[.12em] text-[#e9d7bf] outline-none transition focus:border-[#f59e0b66]"
          >
            {liveShelves.map((s) => (
              <option key={s.id} value={s.id} className="bg-[#12100c]">
                {s.title}
              </option>
            ))}
          </select>
          <label htmlFor="defend-chapter" className="sr-only">
            Chapter
          </label>
          <select
            id="defend-chapter"
            value={chapterKey}
            onChange={(e) => {
              setChapterKey(e.target.value);
              reset();
            }}
            className="h-10 min-w-0 flex-1 rounded-full border border-white/10 bg-white/[.05] px-3 font-mono text-[.64rem] font-bold uppercase tracking-[.12em] text-[#e9d7bf] outline-none transition focus:border-[#f59e0b66]"
          >
            {chaptersOf(shelfId).map((c) => (
              <option key={c.section} value={c.section} className="bg-[#12100c]">
                {c.label} · {c.groupLabel}
              </option>
            ))}
          </select>
          {thread.length > 0 ? (
            <button
              type="button"
              onClick={reset}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[.05] px-3 py-2 font-mono text-[.6rem] font-bold uppercase tracking-[.12em] text-[#cbb89a] transition hover:bg-white/[.12] hover:text-[#f5c889]"
            >
              new defense
            </button>
          ) : null}
        </div>

        {/* thread */}
        <div
          ref={logRef}
          role="log"
          aria-live="polite"
          aria-label="Defend-it tutorial conversation"
          className="cockpit-scroll max-h-[24rem] space-y-4 overflow-y-auto p-4 sm:p-5"
        >
          {thread.length === 0 && !busy ? (
            <div className="py-2">
              <p className="flex items-center gap-2 text-[.9rem] font-semibold text-[#f0e2c8]">
                <GraduationCap className="h-4 w-4" style={{ color: "#f5c889" }} aria-hidden />
                The tutorial begins with your voice.
              </p>
              <p className="mt-1.5 text-[.84rem] leading-relaxed text-[#a89a86]">
                Explain <strong className="text-[#e9d7bf]">{chapter?.label ?? "the chapter"}</strong> below — in your
                own words, as if teaching someone new. The tutor will probe; nothing is revealed back until the
                verdict.
              </p>
            </div>
          ) : null}

          {thread.map((m) =>
            m.role === "you" ? (
              <div key={m.id} className="flex justify-end">
                <p className="max-w-[85%] rounded-2xl rounded-br-md border border-[#f59e0b40] bg-[#f59e0b1a] px-4 py-2.5 text-[.88rem] leading-relaxed text-[#f5c889]">
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
                <p className="flex max-w-[92%] items-start gap-2 rounded-2xl rounded-bl-md border border-white/10 bg-white/[.05] px-4 py-3 text-[.88rem] leading-relaxed text-[#e9d7bf]">
                  <ShieldQuestion className="mt-0.5 h-4 w-4 shrink-0 text-[#f5c889]" aria-hidden />
                  {m.text}
                </p>
              </motion.div>
            )
          )}

          {/* the verdict card */}
          {feedback ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border p-4 sm:p-5"
              style={{
                borderColor: `${verdict ? GRADE_META[verdict.grade].color : "#f5c889"}55`,
                background: `${verdict ? GRADE_META[verdict.grade].color : "#f5c889"}0d`,
              }}
            >
              <div className="flex flex-wrap items-center gap-3">
                <Swords className="h-4 w-4" style={{ color: verdict ? GRADE_META[verdict.grade].color : "#f5c889" }} aria-hidden />
                <span className="font-mono text-[.66rem] font-bold uppercase tracking-[.16em] text-[#f0e2c8]">
                  the verdict{verdict ? ` · ${GRADE_META[verdict.grade].label}` : ""}
                </span>
                {verdict?.score !== null && verdict?.score !== undefined ? (
                  <span
                    className="ml-auto rounded-full border px-3 py-1 font-mono text-[.72rem] font-black"
                    style={{
                      borderColor: `${GRADE_META[verdict.grade].color}66`,
                      color: GRADE_META[verdict.grade].color,
                    }}
                  >
                    {verdict.score}/100
                  </span>
                ) : null}
              </div>
              <div className="mt-3 space-y-2.5 text-[.86rem] leading-relaxed text-[#e9d7bf]">
                {feedback.split(/\n{2,}/).map((block, i) => (
                  <p key={i}>{block}</p>
                ))}
              </div>
              {verdict?.gaps && verdict.gaps.length > 0 ? (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {verdict.gaps.map((g) => (
                    <span
                      key={g}
                      className="rounded-full border border-[#e4674a44] bg-[#e4674a12] px-2.5 py-1 text-[.68rem] font-semibold text-[#f3b8a8]"
                    >
                      gap · {g}
                    </span>
                  ))}
                </div>
              ) : null}
              {verdict ? (
                <>
                  <p className="mt-3 text-[.76rem] italic text-[#a89a86]">{GRADE_META[verdict.grade].line}</p>
                  <button
                    type="button"
                    onClick={forgeGaps}
                    disabled={forge === "loading" || forge === "done"}
                    className="mt-3 flex items-center gap-1.5 rounded-full border border-[#a9c97755] bg-[#a9c97714] px-3.5 py-2 text-[.66rem] font-black uppercase tracking-[.12em] text-[#a9c977] transition hover:bg-[#a9c97726] disabled:opacity-50"
                  >
                    <Hammer className="h-3.5 w-3.5" aria-hidden />
                    {forge === "loading"
                      ? "forging…"
                      : forge === "done"
                        ? "cards forged — they ride the next drill"
                        : forge === "error"
                          ? "forge came back empty — retry"
                          : "forge cards from the gaps"}
                  </button>
                </>
              ) : null}
            </motion.div>
          ) : null}

          {busy ? (
            <div className="flex justify-start">
              <p
                className="animate-pulse rounded-2xl rounded-bl-md border border-white/10 bg-white/[.05] px-4 py-2.5 font-mono text-[.7rem] uppercase tracking-[.16em] text-[#a89a86]"
                role="status"
              >
                {busy === "grade" ? "Reading your defense…" : "The tutor thinks…"}
              </p>
            </div>
          ) : null}
        </div>

        {error ? (
          <p role="alert" className="border-t border-[#e4674a33] bg-[#e4674a0f] px-4 py-2 text-[.76rem] font-semibold text-[#e4674a]">
            {error}
          </p>
        ) : null}

        {/* composer */}
        {feedback ? null : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              explain(input);
            }}
            className="flex items-center gap-2 border-t border-white/10 p-3"
          >
            <label htmlFor="defend-input" className="sr-only">
              Explain the chapter in your own words
            </label>
            <input
              id="defend-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={1500}
              autoComplete="off"
              disabled={!chapter}
              placeholder={chapter ? `Explain "${chapter.label}" in your own words…` : "Pick a chapter first…"}
              className="h-11 min-w-0 flex-1 rounded-full border border-white/10 bg-white/[.05] px-4 text-[.9rem] text-[#f7ecdd] outline-none transition placeholder:text-[#a89a86]/70 focus:border-[#f59e0b66] focus:bg-white/[.07] disabled:opacity-50"
            />
            {userTurns >= 2 ? (
              <button
                type="button"
                onClick={grade}
                disabled={!!busy}
                className="flex h-11 shrink-0 items-center gap-1.5 rounded-full border border-[#f5c88955] bg-[#f5c88914] px-4 font-mono text-[.62rem] font-black uppercase tracking-[.12em] text-[#f5c889] transition hover:bg-[#f5c88926] disabled:opacity-40"
              >
                <Swords className="h-3.5 w-3.5" aria-hidden />
                grade me
              </button>
            ) : null}
            <button
              type="submit"
              disabled={!!busy || !input.trim() || !chapter}
              aria-label="Send your explanation"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f59e0b] text-[#1a0f02] transition hover:bg-[#f5c889] disabled:opacity-40"
            >
              <Send aria-hidden className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
