"use client";

/* ============================================================
   CARD FORGE — AI drafts flashcards from any chapter.

   Pick a shelf, a chapter and a batch size; the chapter's notes
   (the same bodies the ⌘K search indexes) go to
   /api/generate-cards and come back as draft cards. Tick the
   keepers and save — accepted cards land in lib/custom-cards.ts
   and join the SM-2 schedule, Quick Drill, spaced review and
   the backup file. Rejected drafts are discarded; mock exams
   stay bank-only.

   The dialog follows the mock-exam composer's shell: warm paper
   surfaces, focus trap + Escape, honest error states.
   ============================================================ */

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronLeft, WandSparkles, X } from "lucide-react";
import { CHAPTER_INDEX, type ChapterEntry } from "@/lib/chapter-index";
import { addCustomCards } from "@/lib/custom-cards";
import { useToast } from "@/hooks/use-toast";
import { useDialogA11y } from "@/components/notes/exam-runtime";
import { LIVE_SUBJECTS, type Subject } from "./subjects";

interface DraftCard {
  q: string;
  a: string;
}

const COUNTS = [4, 8, 12] as const;
const FORGE_UNREACHABLE = "The forge is unreachable — try again later.";

export function CardForge({ onClose }: { onClose: () => void }) {
  const shellRef = useDialogA11y<HTMLDivElement>(true);
  const { toast } = useToast();

  /* stage 1 — compose; stage 2 — review the drafts */
  const [shelfId, setShelfId] = useState<string>(LIVE_SUBJECTS[0]?.id ?? "foc");
  const [chapterKey, setChapterKey] = useState<string>(CHAPTER_INDEX[0]?.section ?? "");
  const [count, setCount] = useState<number>(8);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [drafts, setDrafts] = useState<DraftCard[] | null>(null);
  const [picked, setPicked] = useState<boolean[]>([]);

  const shelf = useMemo(() => LIVE_SUBJECTS.find((s: Subject) => s.id === shelfId), [shelfId]);
  const chapters = useMemo(() => CHAPTER_INDEX.filter((c) => c.subject === shelfId), [shelfId]);
  const chapter = useMemo(
    () => chapters.find((c) => c.section === chapterKey) ?? chapters[0],
    [chapters, chapterKey]
  );

  /* chapters grouped in catalog order — one optgroup per chapter group */
  const groups = useMemo(() => {
    const out: { group: string; groupLabel: string; chapters: ChapterEntry[] }[] = [];
    for (const c of chapters) {
      const last = out[out.length - 1];
      if (last && last.group === c.group) last.chapters.push(c);
      else out.push({ group: c.group, groupLabel: c.groupLabel, chapters: [c] });
    }
    return out;
  }, [chapters]);

  /* Escape closes — same contract as the exam windows */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape" || e.isComposing || e.metaKey || e.ctrlKey || e.altKey) return;
      onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const pickShelf = (id: string) => {
    setShelfId(id);
    const first = CHAPTER_INDEX.find((c) => c.subject === id);
    if (first) setChapterKey(first.section);
  };

  const generate = async () => {
    if (!chapter || busy) return;
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/generate-cards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ shelfId, chapterKey: chapter.section, count }),
      });
      const data = (await res.json().catch(() => null)) as { cards?: DraftCard[]; error?: string } | null;
      if (!res.ok || !data || !Array.isArray(data.cards) || data.cards.length === 0) {
        setError(data?.error ?? FORGE_UNREACHABLE);
        return;
      }
      setDrafts(data.cards);
      setPicked(data.cards.map(() => true));
    } catch {
      setError(FORGE_UNREACHABLE);
    } finally {
      setBusy(false);
    }
  };

  const save = () => {
    if (!drafts || !chapter) return;
    const kept = drafts.filter((_, i) => picked[i]);
    if (kept.length === 0) return;
    addCustomCards(kept.map((c) => ({ shelfId, chapterKey: chapter.section, q: c.q, a: c.a })));
    toast({
      title: `${kept.length} card${kept.length === 1 ? "" : "s"} forged`,
      description: `Saved to ${shelf?.short ?? shelfId} — they're in the drill deck, the review schedule and your backups.`,
    });
    onClose(); // drafts are discarded — the saved cards live in the store
  };

  const keptCount = drafts ? picked.filter(Boolean).length : 0;

  return (
    <motion.div
      ref={shellRef}
      tabIndex={-1}
      initial={{ opacity: 0, scale: 0.99 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="fixed inset-0 z-[80] flex flex-col bg-[linear-gradient(180deg,#f7eedf_0%,#f3e7d3_100%)] outline-none"
      role="dialog"
      aria-modal="true"
      aria-label="Card Forge — generate AI flashcards from any chapter"
    >
      <div className="shrink-0 border-b border-black/20 bg-[linear-gradient(160deg,#1f1207,#3a2413)]">
        <div className="mx-auto flex max-w-3xl items-center gap-x-4 px-4 py-3 sm:px-6">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#fbbf24,#b45309)]">
            <WandSparkles className="h-4 w-4 text-white" />
          </span>
          <div className="min-w-0">
            <p className="text-[.95rem] font-black leading-tight text-[#ffe9c9]">Card Forge</p>
            <p className="text-[.68rem] leading-tight text-[#c9a97e]">any chapter → draft cards → your deck</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close the card forge"
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/[.06] text-[#ffe9c9] transition hover:bg-white/[.14]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-1 items-start justify-center overflow-y-auto">
        <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
          {drafts === null ? (
            /* ---------------- stage 1 — compose ---------------- */
            <div className="rounded-2xl border border-[#e8dcc0] bg-[#fffdf9] p-5 sm:p-6">
              <p className="exam-eyebrow">
                <WandSparkles className="h-3.5 w-3.5" />
                Forge new cards
              </p>
              <h3 className="font-display mt-1 text-xl font-bold text-[#2b1d10]">The AI reads a chapter, you keep the best cards</h3>
              <p className="mt-1.5 text-[.85rem] leading-relaxed text-[#6f5438]">
                Drafts are plain recall &amp; application cards. Accept the good ones — they join your SM-2 schedule,
                Quick Drill, spaced review and the backup file. Mock exams stay bank-only.
              </p>

              {/* shelf */}
              <div className="mt-5">
                <p className="text-[.72rem] font-black uppercase tracking-[.16em] text-[#8a6d4f]">Shelf</p>
                <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Pick the shelf to forge cards for">
                  {LIVE_SUBJECTS.map((s: Subject) => {
                    const on = s.id === shelfId;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => pickShelf(s.id)}
                        aria-pressed={on}
                        className="flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[.72rem] font-extrabold transition"
                        style={
                          on
                            ? { borderColor: `${s.accent}88`, background: `${s.accent}1a`, color: "#2b1d10" }
                            : { borderColor: "#e0d2b8", background: "#fffdf9", color: "#8a6d4f" }
                        }
                      >
                        <s.icon className="h-3.5 w-3.5" style={{ color: on ? s.accent : "#a08a68" }} />
                        {s.short}
                        {on ? <Check className="h-3 w-3" style={{ color: s.accent }} /> : null}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* chapter */}
              <div className="mt-5">
                <label htmlFor="forge-chapter" className="text-[.72rem] font-black uppercase tracking-[.16em] text-[#8a6d4f]">
                  Chapter
                </label>
                <select
                  id="forge-chapter"
                  value={chapter?.section ?? ""}
                  onChange={(e) => setChapterKey(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-[#e0d2b8] bg-white px-3 py-2.5 text-[.86rem] font-semibold text-[#2b1d10] outline-none transition focus:border-[#b45309]"
                >
                  {groups.map((g) => (
                    <optgroup key={g.group} label={g.groupLabel}>
                      {g.chapters.map((c) => (
                        <option key={c.section} value={c.section}>
                          {c.label} — {c.desc}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              {/* batch size */}
              <div className="mt-5">
                <p className="text-[.72rem] font-black uppercase tracking-[.16em] text-[#8a6d4f]">How many cards</p>
                <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Pick how many cards to draft">
                  {COUNTS.map((n) => {
                    const on = n === count;
                    return (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setCount(n)}
                        aria-pressed={on}
                        className="rounded-full border px-4 py-2 text-[.72rem] font-extrabold transition"
                        style={
                          on
                            ? { borderColor: "#b4530988", background: "#f9e8d2", color: "#2b1d10" }
                            : { borderColor: "#e0d2b8", background: "#fffdf9", color: "#8a6d4f" }
                        }
                      >
                        {n} cards
                      </button>
                    );
                  })}
                </div>
              </div>

              {error ? (
                <p className="mt-4 rounded-xl border border-[#e4b8b8] bg-[#fdecec] px-4 py-3 text-[.82rem] font-semibold text-[#8c2f2f]" role="alert">
                  {error}
                </p>
              ) : null}

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button type="button" onClick={() => void generate()} disabled={busy} className="exam-btn exam-btn-primary">
                  {busy ? (
                    <span aria-hidden className="h-4 w-4 animate-spin rounded-full border-2 border-[#e0cdb0] border-t-[#b45309]" />
                  ) : (
                    <WandSparkles className="h-4 w-4" />
                  )}
                  {busy ? "Forging…" : "Generate with AI"}
                </button>
                <span className="font-mono text-[.62rem] uppercase tracking-[.14em] text-[#8a6d4f]" role="status">
                  {busy ? `reading “${chapter?.label ?? "the chapter"}” and drafting cards…` : "nothing is saved until you accept the drafts"}
                </span>
              </div>
            </div>
          ) : (
            /* ---------------- stage 2 — review the drafts ---------------- */
            <div>
              <div className="rounded-2xl border border-[#e8dcc0] bg-[#fffdf9] p-5 sm:p-6">
                <p className="exam-eyebrow">
                  <WandSparkles className="h-3.5 w-3.5" />
                  Draft cards
                </p>
                <h3 className="font-display mt-1 text-xl font-bold text-[#2b1d10]">
                  {drafts.length} drafted from “{chapter?.label ?? "the chapter"}”
                </h3>
                <p className="mt-1.5 text-[.85rem] leading-relaxed text-[#6f5438]">
                  Untick anything not worth remembering — unticked drafts are discarded. Saved cards grade on the same
                  SM-2 schedule as every bank question.
                </p>

                <div className="mt-4 grid gap-2">
                  {drafts.map((card, i) => (
                    <label
                      key={i}
                      className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#e8dcc0] bg-[#fffdf9] px-4 py-3 transition hover:border-[#d9c6a4]"
                    >
                      <input
                        type="checkbox"
                        checked={picked[i] ?? false}
                        onChange={(e) =>
                          setPicked((prev) => {
                            const next = [...prev];
                            next[i] = e.target.checked;
                            return next;
                          })
                        }
                        aria-label={`Keep card ${i + 1}`}
                        className="mt-1 h-4 w-4 shrink-0 accent-[#b45309]"
                      />
                      <span className="min-w-0">
                        <span className="block text-[.9rem] font-bold leading-snug text-[#2b1d10]">{card.q}</span>
                        <span className="mt-1 block whitespace-pre-wrap font-mono text-[.78rem] leading-relaxed text-[#6f5438]">
                          {card.a}
                        </span>
                      </span>
                    </label>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button type="button" onClick={save} disabled={keptCount === 0} className="exam-btn exam-btn-primary">
                    <Check className="h-4 w-4" />
                    Save {keptCount} card{keptCount === 1 ? "" : "s"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setDrafts(null);
                      setPicked([]);
                      setError(null);
                    }}
                    className="exam-btn"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Discard drafts
                  </button>
                  <span className="font-mono text-[.62rem] uppercase tracking-[.14em] text-[#8a6d4f]">
                    {keptCount} of {drafts.length} ticked
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* a quiet way back — nothing is saved until the drafts are accepted */}
      <div className="shrink-0 border-t border-[#e5d3b6] bg-[rgba(250,243,230,0.9)]">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
          <p className="hidden text-[.68rem] font-semibold text-[#8a6d4f] sm:block">
            Drafts never touch your schedule — only saved cards do.
          </p>
          <button type="button" onClick={onClose} className="exam-btn ml-auto">
            <ChevronLeft className="h-4 w-4" />
            Back to the ledger
          </button>
        </div>
      </div>
    </motion.div>
  );
}
