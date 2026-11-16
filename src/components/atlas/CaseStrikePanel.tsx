"use client";

/* ============================================================
   CASE STRIKE — the HBS cold call as a cockpit instrument.

   A decision-forcing case is dealt from the reader's own
   chapter notes — incomplete by design, ending in "What do
   you do?". The reader answers as the protagonist; the
   debrief grades the reasoning, never the wording, and every
   strike logs one attempt row to the ledger (streak, goal,
   heatmap all count it). The debrief can be forged straight
   into flashcards.

   Endpoint: app/api/case-strike (brief + grade, corpus-grounded).
   ============================================================ */

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Eye, Gavel, Hammer, ScrollText } from "lucide-react";
import { CHAPTER_INDEX } from "@/lib/chapter-index";
import { SUBJECTS } from "./subjects";
import { addCustomCards } from "@/lib/custom-cards";
import { logAttempt } from "@/lib/ledger";

interface Rubric {
  verdict: "sharp" | "solid" | "rough";
  score: number | null;
  strong: string[];
  grow: string[];
}

const VERDICT_META: Record<Rubric["verdict"], { label: string; color: string; line: string }> = {
  sharp: { label: "sharp call", color: "#a9c977", line: "The professor stops writing. That was the answer." },
  solid: { label: "solid", color: "#f5c889", line: "You'd survive the cold call — sharpen the trade-offs." },
  rough: { label: "rough", color: "#e4674a", line: "The case did its job — it showed you exactly where to dig." },
};

export function CaseStrikePanel() {
  const [shelfId, setShelfId] = useState("mktg");
  const [chapterKey, setChapterKey] = useState("");
  const [caseText, setCaseText] = useState<string | null>(null);
  const [concepts, setConcepts] = useState<string[]>([]);
  const [answer, setAnswer] = useState("");
  const [busy, setBusy] = useState<"brief" | "grade" | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [debrief, setDebrief] = useState<string | null>(null);
  const [rubric, setRubric] = useState<Rubric | null>(null);
  const [forge, setForge] = useState<"idle" | "loading" | "done" | "error">("idle");
  const dealtAtRef = useRef<number>(0);

  const liveShelves = SUBJECTS.filter((s) => s.status === "live");
  const chaptersOf = (sid: string) => CHAPTER_INDEX.filter((c) => c.subject === sid);
  const chapter =
    chapterKey && chaptersOf(shelfId).some((c) => c.section === chapterKey)
      ? chaptersOf(shelfId).find((c) => c.section === chapterKey)!
      : null;

  useEffect(() => {
    const first = chaptersOf(shelfId)[0];
    setChapterKey(first?.section ?? "");
  }, [shelfId]);

  const reset = () => {
    setCaseText(null);
    setConcepts([]);
    setAnswer("");
    setDebrief(null);
    setRubric(null);
    setError(null);
    setForge("idle");
  };

  const deal = useCallback(async () => {
    if (busy || !chapter) return;
    setBusy("brief");
    setError(null);
    reset();
    try {
      const res = await fetch("/api/case-strike", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "brief", shelfId, chapterKey }),
      });
      const data = (await res.json().catch(() => null)) as
        | { caseText?: string; concepts?: string[]; error?: string }
        | null;
      if (!res.ok || !data?.caseText) {
        setError(data?.error ?? "The case room is unreachable — try again in a moment.");
      } else {
        setCaseText(data.caseText);
        setConcepts(Array.isArray(data.concepts) ? data.concepts : []);
        dealtAtRef.current = Date.now();
      }
    } catch {
      setError("The case room is unreachable — check the connection and try again.");
    } finally {
      setBusy(null);
    }
  }, [busy, chapter, chapterKey, shelfId]);

  const faceCall = useCallback(async () => {
    if (busy || !chapter || !caseText || answer.trim().length < 60) return;
    setBusy("grade");
    setError(null);
    try {
      const res = await fetch("/api/case-strike", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "grade", shelfId, chapterKey, caseText, answer: answer.trim() }),
      });
      const data = (await res.json().catch(() => null)) as
        | { debrief?: string; rubric?: Rubric | null; error?: string }
        | null;
      if (!res.ok || !data?.debrief) {
        setError(data?.error ?? "The debrief is unreachable — try again in a moment.");
      } else {
        setDebrief(data.debrief);
        setRubric(data.rubric ?? null);
        /* one honest attempt row — the streak, goal and heatmap count it */
        const score = data.rubric?.score ?? 60;
        logAttempt({
          subject: shelfId,
          group: "case-strike",
          title: `Case strike · ${chapter.label}`,
          correct: score >= 60 ? 1 : 0,
          total: 1,
          pct: score,
          seconds: Math.max(1, Math.round((Date.now() - dealtAtRef.current) / 1000)),
        });
      }
    } catch {
      setError("The debrief is unreachable — check the connection and try again.");
    } finally {
      setBusy(null);
    }
  }, [answer, busy, caseText, chapter, chapterKey, shelfId]);

  const forgeDebrief = useCallback(async () => {
    if (!chapter || !debrief || forge === "loading" || forge === "done") return;
    setForge("loading");
    try {
      const grow = rubric?.grow?.length ? `\n\nImprove by:\n${rubric.grow.map((g) => `- ${g}`).join("\n")}` : "";
      const res = await fetch("/api/generate-cards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          shelfId,
          chapterKey,
          count: 8,
          text: `${debrief}${grow}`,
          label: `Case debrief · ${chapter.label}`,
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
  }, [chapter, chapterKey, debrief, forge, rubric, shelfId]);

  return (
    <section aria-labelledby="case-title" className="mt-12">
      <div className="mb-4">
        <p className="font-mono text-[.58rem] font-bold uppercase tracking-[.24em] text-[#f5c889]">
          Case strike · the cold call
        </p>
        <h2 id="case-title" className="font-display text-2xl font-black text-[#f7ecdd] sm:text-3xl">
          500 cases at HBS. One is waiting for you.
        </h2>
        <p className="mt-1 text-[.84rem] text-[#a89a86]">
          A decision-forcing case, dealt from your own notes — no right answer, only reasoning. Answer as the
          protagonist; get debriefed like one.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[.03]">
        {/* picker */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 p-3">
          <label htmlFor="case-shelf" className="sr-only">
            Shelf
          </label>
          <select
            id="case-shelf"
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
          <label htmlFor="case-chapter" className="sr-only">
            Chapter
          </label>
          <select
            id="case-chapter"
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
          <button
            type="button"
            onClick={deal}
            disabled={!!busy || !chapter}
            className="flex items-center gap-1.5 rounded-full border border-[#f59e0b55] bg-[#f59e0b14] px-4 py-2 text-[.64rem] font-black uppercase tracking-[.12em] text-[#f5c889] transition hover:bg-[#f59e0b2a] disabled:opacity-40"
          >
            <Briefcase className="h-3.5 w-3.5" aria-hidden />
            {busy === "brief" ? "dealing…" : caseText ? "re-deal" : "deal the case"}
          </button>
        </div>

        {error ? (
          <p role="alert" className="border-b border-[#e4674a33] bg-[#e4674a0f] px-4 py-2 text-[.76rem] font-semibold text-[#e4674a]">
            {error}
          </p>
        ) : null}

        <div className="cockpit-scroll max-h-[30rem] space-y-4 overflow-y-auto p-4 sm:p-5" aria-live="polite">
          {!caseText && !busy ? (
            <div className="py-2">
              <p className="flex items-center gap-2 text-[.9rem] font-semibold text-[#f0e2c8]">
                <ScrollText className="h-4 w-4" style={{ color: "#f5c889" }} aria-hidden />
                Pick a chapter and deal the case.
              </p>
              <p className="mt-1.5 text-[.84rem] leading-relaxed text-[#a89a86]">
                The scenario will be built from that chapter&apos;s own ideas — the way the case method tests a
                reading, not the wording of it.
              </p>
            </div>
          ) : null}

          {caseText ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-[#f59e0b40] bg-[#f59e0b0d] p-4 sm:p-5"
            >
              <p className="font-mono text-[.6rem] font-bold uppercase tracking-[.18em] text-[#f5c889]">
                the case · {chapter?.label}
              </p>
              <div className="mt-2 space-y-2.5 text-[.9rem] leading-relaxed text-[#f0e2c8]">
                {caseText.split(/\n{2,}/).map((block, i) => (
                  <p key={i}>{block}</p>
                ))}
              </div>
              {concepts.length > 0 ? (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {concepts.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-white/12 bg-white/[.05] px-2.5 py-1 font-mono text-[.58rem] font-bold uppercase tracking-[.1em] text-[#cbb89a]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              ) : null}
            </motion.div>
          ) : null}

          {caseText && !debrief ? (
            <div>
              <label htmlFor="case-answer" className="sr-only">
                Your decision, as the protagonist
              </label>
              <textarea
                id="case-answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                rows={5}
                maxLength={4000}
                placeholder="You are the protagonist. State your decision, then defend it with the chapter's ideas — trade-offs included…"
                className="w-full resize-y rounded-2xl border border-white/10 bg-white/[.05] px-4 py-3 text-[.9rem] leading-relaxed text-[#f7ecdd] outline-none transition placeholder:text-[#a89a86]/70 focus:border-[#f59e0b66] focus:bg-white/[.07]"
              />
              <div className="mt-2 flex items-center justify-between gap-3">
                <span className="font-mono text-[.6rem] uppercase tracking-[.14em] text-[#8d7b63]">
                  {answer.trim().length < 60 ? `${60 - answer.trim().length} more characters` : "ready when you are"}
                </span>
                <button
                  type="button"
                  onClick={faceCall}
                  disabled={!!busy || answer.trim().length < 60}
                  className="flex items-center gap-1.5 rounded-full border border-[#f5c88955] bg-[#f5c88914] px-4 py-2 text-[.64rem] font-black uppercase tracking-[.12em] text-[#f5c889] transition hover:bg-[#f5c88926] disabled:opacity-40"
                >
                  <Gavel className="h-3.5 w-3.5" aria-hidden />
                  {busy === "grade" ? "the room listens…" : "face the cold call"}
                </button>
              </div>
            </div>
          ) : null}

          {debrief ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border p-4 sm:p-5"
              style={{
                borderColor: `${rubric ? VERDICT_META[rubric.verdict].color : "#f5c889"}55`,
                background: `${rubric ? VERDICT_META[rubric.verdict].color : "#f5c889"}0d`,
              }}
            >
              <div className="flex flex-wrap items-center gap-3">
                <Eye className="h-4 w-4" style={{ color: rubric ? VERDICT_META[rubric.verdict].color : "#f5c889" }} aria-hidden />
                <span className="font-mono text-[.66rem] font-bold uppercase tracking-[.16em] text-[#f0e2c8]">
                  the debrief{rubric ? ` · ${VERDICT_META[rubric.verdict].label}` : ""}
                </span>
                {rubric?.score !== null && rubric?.score !== undefined ? (
                  <span
                    className="ml-auto rounded-full border px-3 py-1 font-mono text-[.72rem] font-black"
                    style={{
                      borderColor: `${VERDICT_META[rubric.verdict].color}66`,
                      color: VERDICT_META[rubric.verdict].color,
                    }}
                  >
                    {rubric.score}/100
                  </span>
                ) : null}
              </div>
              <div className="mt-3 space-y-2.5 text-[.86rem] leading-relaxed text-[#e9d7bf]">
                {debrief.split(/\n{2,}/).map((block, i) => (
                  <p key={i}>{block}</p>
                ))}
              </div>
              {rubric ? (
                <>
                  {rubric.strong.length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {rubric.strong.map((s) => (
                        <span key={s} className="rounded-full border border-[#a9c97744] bg-[#a9c97712] px-2.5 py-1 text-[.68rem] font-semibold text-[#d9efb9]">
                          strong · {s}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  {rubric.grow.length > 0 ? (
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {rubric.grow.map((s) => (
                        <span key={s} className="rounded-full border border-[#f5c88944] bg-[#f5c88912] px-2.5 py-1 text-[.68rem] font-semibold text-[#f5dcae]">
                          grow · {s}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <p className="mt-3 text-[.76rem] italic text-[#a89a86]">{VERDICT_META[rubric.verdict].line}</p>
                  <button
                    type="button"
                    onClick={forgeDebrief}
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
                          : "forge cards from the debrief"}
                  </button>
                </>
              ) : null}
            </motion.div>
          ) : null}

          {busy === "grade" ? (
            <p
              className="animate-pulse rounded-2xl rounded-bl-md border border-white/10 bg-white/[.05] px-4 py-2.5 font-mono text-[.7rem] uppercase tracking-[.16em] text-[#a89a86]"
              role="status"
            >
              The professor reads your answer…
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
