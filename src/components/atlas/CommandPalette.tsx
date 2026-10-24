"use client";

/* ============================================================
   THE ATLAS — ⌘K command palette.

   A global launcher that works on every view: the dark landing
   and inside any subject. ⌘K / Ctrl+K toggles it, the "⌘K" chip
   in the landing nav opens it (via the atlas:cmdk event), and it
   can jump to any shelf, any CHAPTER, or straight into the
   Python Lab.

   Chapters come from lib/chapter-index.ts (a static 86-entry
   catalog — no subject chunk is imported here) and only appear
   once the reader types, so an idle palette stays a launcher.

   Once the query is 3+ characters, two deeper groups join in —
   "From the notes" (lib/search.ts full-text over every chapter
   body, lazily built on first use) and "In the question banks"
   (the five exam banks). Both land through the same chapter
   flash-jump as the title matches.

   Cross-view handoffs use tiny sessionStorage flags so the
   command survives the target app's mount; once the target is
   already on stage a live window event is broadcast instead.
   ============================================================ */

import { useCallback, useEffect, useState } from "react";
import { Command } from "cmdk";
import * as Dialog from "@radix-ui/react-dialog";
import { BookOpenText, FlaskConical, Home, Layers, ListChecks, NotebookPen, ScrollText, Sparkles, Zap, type LucideIcon } from "lucide-react";
import { LIVE_SUBJECTS, SUBJECTS, type Subject } from "./subjects";
import { CHAPTER_INDEX } from "@/lib/chapter-index";
import { dueCounts } from "@/lib/sm2";
import type { NoteHit, QuestionHit } from "@/lib/search";

const OPEN_EVENT = "atlas:cmdk";
const LAB_EVENT = "atlas:open-lab";
const LAB_FLAG = "atlas:open-lab";
const SECTION_EVENT = "atlas:open-section";
const SECTION_FLAG = "atlas:open-section";

const SUBJECT_BY_ID = new Map(SUBJECTS.map((s) => [s.id, s]));

interface ItemProps {
  onSelect: () => void;
  icon: LucideIcon;
  tint: string;
  kicker: string;
  title: string;
  sub: string;
  keywords?: string;
  /** prepended to the match value — full-text results arrive
   *  pre-filtered by lib/search.ts and may not contain the raw
   *  query in their title, so the query rides along to keep
   *  cmdk's own filter from hiding them */
  match?: string;
}

function Item({ onSelect, icon: Icon, tint, kicker, title, sub, keywords, match }: ItemProps) {
  return (
    <Command.Item
      onSelect={onSelect}
      value={[match, title, sub, kicker, keywords].filter(Boolean).join(" ")}
      className="cmdk-item"
    >
      <span className="cmdk-item-icon" style={{ background: `${tint}1f`, color: tint }}>
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <span className="min-w-0">
        <span className="cmdk-item-title">{title}</span>
        <span className="cmdk-item-sub">{sub}</span>
      </span>
      <span className="cmdk-item-kicker">{kicker}</span>
    </Command.Item>
  );
}

/* the deep groups: idle → nothing rendered; loading → the
   "searching the notes…" whisper; ready → note + question hits */
type DeepState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "ready"; notes: NoteHit[]; questions: QuestionHit[] };

/** first line of a long question prompt — titles stay one line */
function clampPrompt(text: string, max = 110): string {
  return text.length > max ? `${text.slice(0, text.lastIndexOf(" ", max) > 0 ? text.lastIndexOf(" ", max) : max)}…` : text;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [due, setDue] = useState<Record<string, number>>({});
  const [search, setSearch] = useState("");
  const [deep, setDeep] = useState<DeepState>({ status: "idle" });
  const dueTotal = Object.values(due).reduce((n, x) => n + x, 0);
  const query = search.trim();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_EVENT, onOpen);
    };
  }, []);

  /* due counts are read from the local SM-2 store each time the
     palette opens — no question banks needed for the numbers */
  useEffect(() => {
    if (!open) return;
    const raf = requestAnimationFrame(() => setDue(dueCounts()));
    return () => cancelAnimationFrame(raf);
  }, [open]);

  /* a closed palette forgets its search — rAF-deferred so the
     reset never runs synchronously inside the effect */
  useEffect(() => {
    if (open) return;
    const raf = requestAnimationFrame(() => setSearch(""));
    return () => cancelAnimationFrame(raf);
  }, [open]);

  /* the deep search — debounced, non-blocking, and loaded lazily:
     the first 3+ char query imports lib/search, builds the
     MiniSearch indexes (corpus chunk + question banks) and only
     then fills the two groups. A stale response never lands. */
  useEffect(() => {
    if (query.length < 3) {
      const raf = requestAnimationFrame(() => setDeep({ status: "idle" }));
      return () => cancelAnimationFrame(raf);
    }
    let alive = true;
    const raf = requestAnimationFrame(() => setDeep({ status: "loading" }));
    const timer = window.setTimeout(() => {
      void (async () => {
        try {
          const { searchNotes, searchQuestions } = await import("@/lib/search");
          const [notes, questions] = await Promise.all([searchNotes(query), searchQuestions(query)]);
          if (alive) setDeep({ status: "ready", notes, questions });
        } catch {
          if (alive) setDeep({ status: "idle" }); // search stays optional — title matches still work
        }
      })();
    }, 180);
    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
    };
  }, [query]);

  const go = useCallback((hash: string) => {
    setOpen(false);
    if (window.location.hash === hash) return; // already there — keep the view as-is
    window.location.hash = hash;
    window.scrollTo(0, 0);
  }, []);

  const openLab = useCallback(() => {
    setOpen(false);
    if (window.location.hash === "#/subject/foc") {
      // FoC is on stage — ask it to open the lab directly
      window.dispatchEvent(new CustomEvent(LAB_EVENT));
    } else {
      // leave a flag so the lab opens once FocApp mounts
      try {
        sessionStorage.setItem(LAB_FLAG, "1");
      } catch {
        /* private mode — navigation still works, the lab just needs one click */
      }
      window.location.hash = "#/subject/foc";
      window.scrollTo(0, 0);
    }
  }, []);

  const openSection = useCallback((subject: string, section: string) => {
    setOpen(false);
    if (window.location.hash === `#/subject/${subject}`) {
      // the shelf is on stage — scroll straight to the chapter
      window.dispatchEvent(new CustomEvent(SECTION_EVENT, { detail: section }));
    } else {
      // leave a flag so the chapter scrolls once the shelf mounts
      try {
        sessionStorage.setItem(SECTION_FLAG, JSON.stringify({ subject, section }));
      } catch {
        /* private mode — navigation still lands on the shelf */
      }
      window.location.hash = `#/subject/${subject}`;
      window.scrollTo(0, 0);
    }
  }, []);

  /* a question-bank hit: the banks are grouped by chapter group,
     so the honest landing is the group's opening chapter — the
     same flash-jump as a chapter result, with the bank's own
     "Test my knowledge" window one menu click away */
  const openQuestionBank = useCallback(
    (subject: string, group: string) => {
      const first = CHAPTER_INDEX.find((c) => c.subject === subject && c.group === group);
      if (first) openSection(first.subject, first.section);
      else go(`#/subject/${subject}`);
    },
    [openSection, go]
  );

  const openReview = useCallback((subject: string) => {
    setOpen(false);
    try {
      sessionStorage.setItem("atlas:review-subject", subject);
    } catch {
      /* private mode — navigation still lands on the ledger */
    }
    if (window.location.hash === "#/ledger") {
      // the ledger is on stage — ask it to open the review directly
      window.dispatchEvent(new CustomEvent("atlas:review-subject", { detail: subject }));
    } else {
      window.location.hash = "#/ledger";
      window.scrollTo(0, 0);
    }
  }, []);

  /* the drill lives on the ledger too — same handoff contract */
  const openDrill = useCallback((subject: string) => {
    setOpen(false);
    try {
      sessionStorage.setItem("atlas:drill-subject", subject);
    } catch {
      /* private mode — navigation still lands on the ledger */
    }
    if (window.location.hash === "#/ledger") {
      window.dispatchEvent(new CustomEvent("atlas:drill-subject", { detail: subject }));
    } else {
      window.location.hash = "#/ledger";
      window.scrollTo(0, 0);
    }
  }, []);

  /* the mock-exam composer lives on the ledger — same contract, no subject */
  const openMock = useCallback(() => {
    setOpen(false);
    try {
      sessionStorage.setItem("atlas:mock-open", "1");
    } catch {
      /* private mode — navigation still lands on the ledger */
    }
    if (window.location.hash === "#/ledger") {
      window.dispatchEvent(new CustomEvent("atlas:mock-open"));
    } else {
      window.location.hash = "#/ledger";
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="cmdk-overlay" />
        <Dialog.Content className="cmdk-dialog" aria-describedby={undefined}>
          {/* radix a11y contract — the visible combobox is labelled below */}
          <Dialog.Title className="sr-only">The Atlas — command palette</Dialog.Title>
          <Command label="The Atlas — command palette" loop>
            <div className="cmdk-head">
              <Command.Input
                value={search}
                onValueChange={setSearch}
                placeholder="Jump to a shelf, a chapter — or search the notes…"
              />
            </div>
            {deep.status === "loading" ? (
              <div
                role="status"
                className="px-4 py-2 font-mono text-[.56rem] font-bold uppercase tracking-[.2em] text-[#8d7b63]"
              >
                Searching the notes…
              </div>
            ) : null}
            <Command.List className="cmdk-list">
              {deep.status === "loading" ? null : (
                <Command.Empty className="cmdk-empty">
                  No match — try “statistics”, “python” or any word from the notes.
                </Command.Empty>
              )}

              <Command.Group heading="Shelves" className="cmdk-group">
                <Item
                  onSelect={() => go("#/atlas")}
                  icon={Home}
                  tint="#f5c889"
                  kicker="the map"
                  title="The Atlas"
                  sub="Back to the landing — every subject shelf"
                  keywords="home landing start"
                />
                {LIVE_SUBJECTS.map((s: Subject) => (
                  <Item
                    key={s.id}
                    onSelect={() => go(`#/subject/${s.id}`)}
                    icon={s.icon}
                    tint={s.accent}
                    kicker={`shelf ${s.shelf}`}
                    title={s.title}
                    sub={s.tagline}
                    keywords={s.topics.join(" ")}
                  />
                ))}
              </Command.Group>

              {/* chapters appear once the reader types — 86 entries are
                  too many for an idle launcher, perfect while searching */}
              {search.trim() ? (
                <Command.Group heading="Chapters" className="cmdk-group">
                  {CHAPTER_INDEX.map((c) => {
                    const s = SUBJECT_BY_ID.get(c.subject);
                    if (!s) return null;
                    return (
                      <Item
                        key={`${c.subject}:${c.section}`}
                        onSelect={() => openSection(c.subject, c.section)}
                        icon={s.icon}
                        tint={s.accent}
                        kicker={`${s.short} · ${c.groupLabel}`}
                        title={c.label}
                        sub={c.desc}
                        keywords={`${c.group} ${s.title}`}
                      />
                    );
                  })}
                </Command.Group>
              ) : null}

              <Command.Group heading="Progress" className="cmdk-group">
                <Item
                  onSelect={() => go("#/ledger")}
                  icon={NotebookPen}
                  tint="#a9c977"
                  kicker="#/ledger"
                  title="Open my ledger"
                  sub="Accuracy, mastery and the review schedule"
                  keywords="progress mastery stats streak attempts ledger"
                />
                <Item
                  onSelect={() => openDrill("all")}
                  icon={Zap}
                  tint="#f5c889"
                  kicker="no schedule needed"
                  title="Quick drill — everything"
                  sub="A mixed dozen from every shelf, instant answers"
                  keywords="drill practice quick quiz mixed cards zap all shelves"
                />
                <Item
                  onSelect={openMock}
                  icon={ScrollText}
                  tint="#f5c889"
                  kicker="your rules, exam conditions"
                  title="Compose a mock exam"
                  sub="Pick shelves, length and the clock — one custom paper"
                  keywords="mock exam custom paper timed test compose practice sitting bell"
                />
                {dueTotal > 0 ? (
                  <Item
                    onSelect={() => openReview("all")}
                    icon={Layers}
                    tint="#f5c889"
                    kicker={`${dueTotal} due`}
                    title="Spaced review — everything"
                    sub="Due cards from every shelf, one sitting"
                    keywords="review sm2 spaced repetition everything all shelves due cards mixed"
                  />
                ) : null}
                {LIVE_SUBJECTS.filter((s: Subject) => (due[s.id] ?? 0) > 0).map((s: Subject) => (
                  <Item
                    key={`review-${s.id}`}
                    onSelect={() => openReview(s.id)}
                    icon={Sparkles}
                    tint={s.accent}
                    kicker={`${due[s.id]} due`}
                    title={`Spaced review — ${s.short}`}
                    sub="Answer today's due cards before they slip"
                    keywords="review sm2 spaced repetition due cards"
                  />
                ))}
                {/* per-shelf drills appear while searching — the idle launcher stays small */}
                {search.trim()
                  ? LIVE_SUBJECTS.map((s: Subject) => (
                      <Item
                        key={`drill-${s.id}`}
                        onSelect={() => openDrill(s.id)}
                        icon={Zap}
                        tint={s.accent}
                        kicker={`shelf ${s.shelf}`}
                        title={`Quick drill — ${s.short}`}
                        sub="A mixed dozen, instant answers, no schedule needed"
                        keywords={`drill practice quick quiz ${s.topics.join(" ")}`}
                      />
                    ))
                  : null}
              </Command.Group>

              <Command.Group heading="Quick actions" className="cmdk-group">
                <Item
                  onSelect={openLab}
                  icon={FlaskConical}
                  tint="#ea580c"
                  kicker="FoC · Colab mode"
                  title="Open the Python Lab"
                  sub="Real CPython 3.12 running in your browser"
                  keywords="python run code notebook pyodide repl"
                />
              </Command.Group>

              {/* full-text hits inside the note bodies — 3+ char queries
                  only, pre-filtered by lib/search.ts (the query rides in
                  the match value so cmdk's filter keeps them visible) */}
              {deep.status === "ready" && deep.notes.length > 0 ? (
                <Command.Group heading="From the notes" className="cmdk-group">
                  {deep.notes.map((n) => {
                    const s = SUBJECT_BY_ID.get(n.shelfId);
                    if (!s) return null;
                    return (
                      <Item
                        key={`note-${n.shelfId}:${n.chapterKey}`}
                        onSelect={() => openSection(n.shelfId, n.chapterKey)}
                        icon={BookOpenText}
                        tint={s.accent}
                        kicker={`${s.short} · ${n.groupLabel}`}
                        title={n.label}
                        sub={n.snippet}
                        match={query}
                      />
                    );
                  })}
                </Command.Group>
              ) : null}

              {/* question-bank hits — selecting lands on the bank's
                  chapter group via the same flash-jump */}
              {deep.status === "ready" && deep.questions.length > 0 ? (
                <Command.Group heading="In the question banks" className="cmdk-group">
                  {deep.questions.map((q) => {
                    const s = SUBJECT_BY_ID.get(q.shelfId);
                    if (!s) return null;
                    return (
                      <Item
                        key={`q-${q.shelfId}:${q.questionId}`}
                        onSelect={() => openQuestionBank(q.shelfId, q.group)}
                        icon={ListChecks}
                        tint={s.accent}
                        kicker={`${s.short} · ${q.bankTitle}`}
                        title={clampPrompt(q.prompt)}
                        sub="question bank — opens the matching chapter group"
                        match={query}
                      />
                    );
                  })}
                </Command.Group>
              ) : null}
            </Command.List>
            <div className="cmdk-foot" aria-hidden>
              <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
              <span><kbd>↵</kbd> open</span>
              <span><kbd>esc</kbd> close</span>
            </div>
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
