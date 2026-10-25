"use client";

import { PartBoundary } from "@/components/notes/PartBoundary";
import { useDialogA11y } from "@/components/notes/exam-runtime";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  BookOpenText,
  Hourglass,
  Map,
  Menu,
  PenLine,
  Printer,
  Route,
  X,
} from "lucide-react";
import { useSectionProgress } from "@/lib/use-section-progress";
import { jumpTo, useOpenSection } from "@/lib/use-open-section";
import { loadProgress } from "@/lib/progress";
import { AtbHero, AtbIntroSection, AtbFlowchartsSection, AtbAtmSection, AtbCodeSection, AtbAverageSection } from "@/components/atb/AtbParts1";
import { AtbPropsSection, AtbAlgoTypesSection } from "@/components/atb/AtbParts2";
import { AtbArraysSection, AtbListSection } from "@/components/atb/AtbParts3";
import { AtbStacksSection, AtbQueuesSection, AtbQTypesSection } from "@/components/atb/AtbParts4";
import { AtbTreesSection, AtbTraversalsSection, AtbGraphsSection, AtbGraphPropsSection, AtbDfsBfsSection } from "@/components/atb/AtbParts5";
import { AtbTreeTypesSection, AtbHashingSection, AtbBlockchainSection } from "@/components/atb/AtbParts6";
import { AtbRecap8Section, AtbRecap13Section, AtbRecap18Section, AtbRecap23Section } from "@/components/atb/AtbParts7";
import { AtbComplexitySection, AtbSearchSection } from "@/components/atb/AtbParts8";
import { AtbDijkstraSection, AtbSortingSection } from "@/components/atb/AtbParts9";
import { AtbExamWindow } from "@/components/atb/AtbExamWindow";
import { ATB_EXAM_BANKS, ATB_EXAM_GROUPS, ATB_TOTAL_QUESTIONS, type AtbExamGroup } from "@/components/atb/questions";
import { ATB_LECTURES, ATB_ALL_CHAPTER_IDS, ATB_DEFAULT_LECTURE, lectureById, lectureOfChapter, type AtbLecture } from "@/components/atb/lectures";

/* ============================================================
   AtbApp — the complete "Algorithmic Thinking in Business"
   revision companion, registered as shelf 02 of THE ATLAS.

   A NO-CODE course: every concept is traced by hand — tea
   recipes, ATM decisions, memory boxes — and every chapter
   carries its own in-page machines. Mounted by the Atlas
   router (src/app/page.tsx) when the reader enters the subject;
   `onExitAtlas` returns the reader to the Atlas landing page.

   The page is a LECTURE READER: the hero holds a searchable
   lecture sequence (Lecture 1, 2, 3 … sent lecture by lecture
   by the course), and the page below renders exactly the
   chosen lecture's chapters. All pen-paper practice lives
   behind the "Test my knowledge" hub so the reading surface
   stays clean.
   ============================================================ */

/* ============================================================
   Structured chapter map — the top bar is organised into six
   groups. Each group owns a "Test my knowledge" exam window
   (see questions.ts).
   ============================================================ */
const GROUPS: {
  id: AtbExamGroup;
  label: string;
  items: { id: string; label: string; desc: string }[];
}[] = [
  {
    id: "intro",
    label: "Intro",
    items: [
      { id: "intro", label: "Why algorithms?", desc: "From making tea to running an ATM" },
      { id: "flowcharts", label: "Flowcharts", desc: "The five symbols every algorithm is drawn with" },
      { id: "atm", label: "Decisions", desc: "The ATM machine — branching in action" },
      { id: "pseudocode", label: "Pseudocode", desc: "Functions, pseudocode and real code" },
      { id: "average", label: "Average, step-by-step", desc: "Memory boxes, data types & FIRST CLASS" },
    ],
  },
  {
    id: "props",
    label: "Properties",
    items: [
      { id: "properties", label: "9 properties", desc: "What makes an algorithm a *good* algorithm" },
      { id: "algotypes", label: "Algorithm types", desc: "Divide & conquer · greedy · dynamic programming" },
    ],
  },
  {
    id: "linear",
    label: "Linear DS",
    items: [
      { id: "arrays", label: "Arrays", desc: "Indexed, contiguous, direct access" },
      { id: "linkedlists", label: "Linked lists", desc: "Lecture 7 · flexible chains of songs" },
      { id: "recap8", label: "LIVE recap · properties & linear DS", desc: "Lecture 8 · the 9 properties + arrays-vs-lists Venn" },
    ],
  },
  {
    id: "stackq",
    label: "Stacks & Queues",
    items: [
      { id: "stacks", label: "Stacks", desc: "Lecture 9 · LIFO — the undo machine" },
      { id: "queues", label: "Queues", desc: "Lecture 10 · FIFO — first come, first served" },
      { id: "qtypes", label: "Queue types", desc: "Lecture 11 · linear · circular · priority · deque" },
      { id: "recap13", label: "LIVE recap · stacks & queues", desc: "Lecture 13 · the stack-vs-queue Venn" },
    ],
  },
  {
    id: "trees",
    label: "Trees & Graphs",
    items: [
      { id: "trees", label: "Trees", desc: "Lecture 12 · hierarchy: roots, parents & leaves" },
      { id: "traversals", label: "Traversals", desc: "Lecture 12 · pre · in · post · level order" },
      { id: "graphs", label: "Graphs", desc: "Lecture 15 · G = (V, E) — relationships" },
      { id: "graphprops", label: "Graph properties", desc: "Lecture 16 · direction · weight · connectivity · cycles" },
      { id: "dfsbfs", label: "DFS & BFS", desc: "Lecture 17 · stack vs queue traversal" },
      { id: "recap18", label: "LIVE recap · trees & graphs", desc: "Lecture 18 · every tree is a graph — the nested Venn" },
    ],
  },
  {
    id: "hash",
    label: "Hash & Chain",
    items: [
      { id: "treetypes", label: "Tree types", desc: "Lecture 14 · general → binary → complete → BST → AVL → heaps" },
      { id: "hashing", label: "Hashing", desc: "Lecture 19 · mod, tables, collisions, passwords" },
      { id: "blockchain", label: "Blockchain", desc: "Lecture 20 · tamper-evident chains of blocks" },
      { id: "recap23", label: "LIVE recap · trees, hashing & blockchain", desc: "Lecture 23 · the three-circle Venn finale" },
    ],
  },
  {
    id: "search",
    label: "Search & Complexity",
    items: [
      { id: "complexity", label: "Complexity", desc: "Lecture 21 · Big O · best/avg/worst · DS costs" },
      { id: "search", label: "Search", desc: "Lecture 22 · linear · binary · jump · exponential · hash" },
    ],
  },
  {
    id: "algo",
    label: "Paths & Sorting",
    items: [
      { id: "dijkstra", label: "Shortest paths", desc: "Lecture 24 · Dijkstra · A* · the variant family" },
      { id: "sorting", label: "Sorting", desc: "Lecture 25 · bubble sort · passes · O(n²)" },
    ],
  },
];

const FLAT_ITEMS = GROUPS.flatMap((g) => g.items);

function groupOf(id: string): string | null {
  for (const g of GROUPS) if (g.items.some((i) => i.id === id)) return g.id;
  return null;
}

/* ============================================================
   The chapter components, keyed by section id — the lecture
   reader renders exactly the slice the chosen lecture owns.
   ============================================================ */
const SECTION_COMPONENTS: Record<string, React.ReactNode> = {
  intro: <AtbIntroSection />,
  flowcharts: <AtbFlowchartsSection />,
  atm: <AtbAtmSection />,
  pseudocode: <AtbCodeSection />,
  average: <AtbAverageSection />,
  properties: <AtbPropsSection />,
  algotypes: <AtbAlgoTypesSection />,
  arrays: <AtbArraysSection />,
  linkedlists: <AtbListSection />,
  stacks: <AtbStacksSection />,
  queues: <AtbQueuesSection />,
  qtypes: <AtbQTypesSection />,
  trees: <AtbTreesSection />,
  traversals: <AtbTraversalsSection />,
  graphs: <AtbGraphsSection />,
  dfsbfs: <AtbDfsBfsSection />,
  treetypes: <AtbTreeTypesSection />,
  hashing: <AtbHashingSection />,
  blockchain: <AtbBlockchainSection />,
  recap8: <AtbRecap8Section />,
  recap13: <AtbRecap13Section />,
  recap18: <AtbRecap18Section />,
  recap23: <AtbRecap23Section />,
  graphprops: <AtbGraphPropsSection />,
  complexity: <AtbComplexitySection />,
  search: <AtbSearchSection />,
  dijkstra: <AtbDijkstraSection />,
  sorting: <AtbSortingSection />,
};

/* ============================================================
   useSeenDisplay — the read-checkmark data for every menu.

   Marking is per-lecture (only the rendered chapters can be
   swept — the Kindle-style furthest-read sweep must never
   sweep chapters that aren't on the page), but DISPLAY spans
   the whole shelf: whatever the reader marked in earlier
   sessions/lectures stays visible via the persisted record.
   ============================================================ */
function useSeenDisplay(lecture: AtbLecture): ReadonlySet<string> {
  const ids = useMemo(() => lecture.chapters.map((c) => c.id), [lecture]);
  const live = useSectionProgress("atb", ids);
  const persisted = useMemo(() => {
    try {
      return new Set(Object.keys(loadProgress().atb ?? {}));
    } catch {
      return new Set<string>();
    }
  }, []);
  return useMemo(() => new Set<string>([...persisted, ...live]), [persisted, live]);
}

/* ============================================================
   TopNav — structured chapter menu + a "Test my knowledge"
   launcher inside every chapter group.

   PERF (kept from FocApp): the progress bar is written straight
   to the DOM through a ref inside a requestAnimationFrame, and
   React state updates only when the active section CHANGES —
   the nav never re-renders per scroll tick.

   Chapters live inside the lecture reader, so a menu click on a
   chapter of a DIFFERENT lecture first switches the lecture and
   then scrolls (goToChapter in AtbApp) — a plain anchor would
   aim at a section that isn't rendered.
   ============================================================ */
function TopNav({
  onOpenExam,
  onExitAtlas,
  onJumpChapter,
  seen,
}: {
  onOpenExam: (g: AtbExamGroup) => void;
  onExitAtlas: () => void;
  onJumpChapter: (chapterId: string) => void;
  seen: ReadonlySet<string>;
}) {
  const [active, setActive] = useState<string>("");
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileRef = useDialogA11y<HTMLDivElement>(mobileOpen);
  const navRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef("");

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const pct = total > 0 ? (doc.scrollTop / total) * 100 : 0;
      if (progressRef.current) progressRef.current.style.width = `${pct}%`;

      // scroll-spy: only touch React state when the section changes.
      // Sections of other lectures simply aren't in the DOM, so the
      // loop naturally spies on the rendered lecture only.
      const probe = window.innerHeight * 0.32;
      let current = "";
      for (const item of FLAT_ITEMS) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= probe) current = item.id;
      }
      if (current !== activeRef.current) {
        activeRef.current = current;
        setActive(current);
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // close dropdown on outside click / Escape
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenGroup(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenGroup(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // lock body scroll while the mobile index is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const activeGroup = active ? groupOf(active) : null;

  return (
    <nav ref={navRef} aria-label="Chapters" className="fixed inset-x-0 top-0 z-50">
      <div className="nav-shell">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-2 px-3 sm:px-5">
          {/* back to The Atlas — the shelf this subject lives on */}
          <button
            type="button"
            onClick={onExitAtlas}
            title="Back to The Atlas — the subject shelf"
            aria-label="Back to The Atlas"
            className="flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-white/70 bg-white/60 px-3 text-[.64rem] font-extrabold uppercase tracking-[.14em] text-[#8a5f30] shadow-[0_4px_16px_-8px_rgba(70,42,15,.35)] backdrop-blur-md transition-colors duration-200 hover:bg-white/85 hover:text-[#c2410c]"
          >
            <Map className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Atlas</span>
          </button>

          {/* brand — quiet glass chip, Apple-quiet rather than loud gradient */}
          <a
            href="#top"
            className="flex shrink-0 items-center gap-2 rounded-full border border-white/70 bg-white/60 py-1.5 pl-2 pr-3.5 shadow-[0_4px_16px_-8px_rgba(70,42,15,.35)] backdrop-blur-md transition-colors duration-200 hover:bg-white/80"
          >
            <span
              className="flex h-6 w-6 items-center justify-center rounded-full text-white"
              style={{ background: "linear-gradient(135deg,#ea580c,#c2410c)", boxShadow: "0 4px 10px -3px rgba(194,65,12,.55)" }}
            >
              <Route className="h-3.5 w-3.5" />
            </span>
            <span className="text-sm font-black tracking-tight text-[#3e2c1d]">ATB Notes</span>
          </a>

          {/* desktop — grouped chapter menu (all six groups). Opens at lg:
              below that the bar would overflow once every group is shown,
              so narrower screens get the scrolling chip strip + the
              full-screen index instead. */}
          <div className="ml-2 hidden flex-1 items-center gap-1 lg:flex">
            {GROUPS.map((group) => {
              const isActive = activeGroup === group.id;
              const open = openGroup === group.id;
              return (
                <div
                  key={group.id}
                  className="relative"
                  onMouseEnter={() => setOpenGroup(group.id)}
                  onMouseLeave={() => setOpenGroup((g) => (g === group.id ? null : g))}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-haspopup="true"
                    onClick={() => setOpenGroup(group.id)}
                    onFocus={() => setOpenGroup(group.id)}
                    className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[.78rem] font-semibold tracking-wide transition-all duration-200 ${
                      isActive || open
                        ? "bg-white/80 text-[#c2410c] shadow-[0_4px_16px_-8px_rgba(70,42,15,.4),inset_0_1px_0_rgba(255,255,255,.9)]"
                        : "text-[#6b563d] hover:bg-white/55 hover:text-[#3e2c1d] hover:shadow-[inset_0_1px_0_rgba(255,255,255,.9)]"
                    }`}
                  >
                    {group.label}
                    <span className="text-[.58rem] font-extrabold opacity-45">{String(group.items.length).padStart(2, "0")}</span>
                    <ChevronDown className={`h-3 w-3 opacity-50 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {open ? (
                      <motion.div
                        key={`${group.id}-panel`}
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.16, ease: "easeOut" }}
                        className="absolute left-1/2 top-full z-50 w-[min(26rem,calc(100vw-2rem))] -translate-x-1/2 pt-2"
                      >
                        <div
                          className="overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-1.5 backdrop-blur-2xl"
                          style={{
                            WebkitBackdropFilter: "blur(28px) saturate(170%)",
                            backdropFilter: "blur(28px) saturate(170%)",
                            boxShadow: "0 24px 70px -18px rgba(50,30,10,.4), inset 0 1px 0 rgba(255,255,255,.85)",
                          }}
                        >
                          <p className="flex items-center gap-1.5 px-3 pb-1.5 pt-2 text-[.58rem] font-extrabold uppercase tracking-[.22em] text-[#b08b5c]">
                            <BookOpenText className="h-3 w-3" />
                            {group.label}
                          <span className="ml-auto font-mono tracking-[.08em] opacity-90">
                            {group.items.filter((it) => seen.has(it.id)).length}/{group.items.length} read
                          </span>
                          </p>
                          {group.items.map((item, i) => {
                            const isActiveItem = active === item.id;
                            return (
                              <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setOpenGroup(null);
                                  onJumpChapter(item.id);
                                }}
                                className={`group flex items-start gap-3 rounded-xl px-3 py-2 transition-colors duration-150 ${
                                  isActiveItem ? "bg-[#ea580c]/[.08]" : "hover:bg-[#3e2c1d]/[.05]"
                                }`}
                              >
                                <span
                                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[.58rem] font-black ${
                                    isActiveItem ? "text-white" : "border border-white/80 bg-white/70 text-[#b08b5c]"
                                  }`}
                                  style={isActiveItem ? { background: "linear-gradient(135deg,#ea580c,#c2410c)" } : undefined}
                                >
                                  {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="min-w-0">
                                  <span className={`block text-[.82rem] font-bold leading-tight ${isActiveItem ? "text-[#c2410c]" : "text-[#3e2c1d]"}`}>
                                    {item.label}
                                  </span>
                                  <span className="mt-0.5 block text-[.7rem] leading-snug text-[#a08568]">{item.desc}</span>
                                </span>
                                {isActiveItem ? (
                                <span className="ml-auto mt-1 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "#c2410c" }} />
                              ) : seen.has(item.id) ? (
                                <Check className="ml-auto mt-1 h-3.5 w-3.5 shrink-0" style={{ color: "#8fae5d" }} aria-label="Chapter read" />
                              ) : null}
                              </a>
                            );
                          })}

                          {/* Test my knowledge — opens the exam window for this group */}
                          <div className="mt-1 border-t border-[#f0e2c8] p-1.5">
                            <button
                              type="button"
                              onClick={() => {
                                setOpenGroup(null);
                                onOpenExam(group.id);
                              }}
                              className="group/exam flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left transition-colors duration-150 hover:bg-[#3e2c1d]/[.05]"
                            >
                              <span
                                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-white"
                                style={{ background: "linear-gradient(135deg,#ea580c,#c2410c)" }}
                              >
                                <PenLine className="h-3.5 w-3.5" />
                              </span>
                              <span className="min-w-0">
                                <span className="block text-[.84rem] font-extrabold leading-tight text-[#c2410c]">
                                  Test my knowledge
                                </span>
                                <span className="mt-0.5 block text-[.68rem] leading-snug text-[#a08568]">
                                  {ATB_EXAM_BANKS[group.id].questions.length} exam-style questions · pen-paper mode
                                </span>
                              </span>
                              <span className="ml-auto shrink-0 text-[.58rem] font-black uppercase tracking-[.14em] text-[#b08b5c] transition-colors group-hover/exam:text-[#c2410c]">
                                open →
                              </span>
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* below lg — quick chips (horizontal scroll) covering every chapter */}
          <div className="scrollbar-thin flex flex-1 items-center gap-1 overflow-x-auto py-1 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {GROUPS.flatMap((g) => g.items).map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onJumpChapter(item.id);
                }}
                className={`nav-link ${active === item.id ? "active" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* right cluster — chapter index (small screens) */}
          <div className="ml-auto flex shrink-0 items-center gap-2 md:ml-2">
            <button
              type="button"
              onClick={() => window.print()}
              title="Print these notes"
              aria-label="Print these notes"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/70 bg-white/60 text-[#6b563d] backdrop-blur-md transition-colors hover:bg-white/85 hover:text-[#c2410c]"
            >
              <Printer className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open the chapter index"
              aria-expanded={mobileOpen}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/70 bg-white/60 text-[#6b563d] backdrop-blur-md transition-colors hover:bg-white/85 hover:text-[#c2410c] lg:hidden"
            >
              <Menu className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>
      </div>

      {/* reading progress — width written directly via ref (no re-renders) */}
      <div className="h-[3px] w-full bg-[#3e2c1d]/10">
        <div
          ref={progressRef}
          className="h-full"
          style={{ width: "0%", background: "linear-gradient(90deg,#f59e0b,#ea580c,#c2410c)" }}
        />
      </div>

      {/* mobile — full-screen structured index */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            ref={mobileRef}
            tabIndex={-1}
            key="mobile-index"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[60] flex flex-col outline-none"
            style={{ background: "linear-gradient(165deg,#241608 0%,#33200e 55%,#3e2c1d 100%)" }}
            role="dialog"
            aria-modal="true"
            aria-label="Chapter index"
          >
            <div className="flex h-14 shrink-0 items-center justify-between px-4">
              <span className="flex items-center gap-2 text-sm font-black tracking-tight text-[#ffe9c9]">
                <Route className="h-4 w-4" style={{ color: "#f59e0b" }} />
                Chapter index
              <span className="rounded-full bg-white/10 px-2 py-0.5 font-mono text-[.55rem] font-bold text-[#e9d7bf]">
                {seen.size}/{ATB_ALL_CHAPTER_IDS.length} read
              </span>
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close the chapter index"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#ffe9c9]"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 pb-10 pt-2">
              {GROUPS.map((group, gi) => (
                <motion.div
                  key={group.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + gi * 0.06, duration: 0.25 }}
                  className="mb-5"
                >
                  <p className="mb-2 flex items-center gap-2 text-[.62rem] font-extrabold uppercase tracking-[.24em] text-[#c99a63]">
                    <span className="h-px w-5" style={{ background: "linear-gradient(90deg,#ea580c,transparent)" }} />
                    {group.label}
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-[.55rem] text-[#e9d7bf]">{group.items.filter((it) => seen.has(it.id)).length}/{group.items.length}</span>
                  </p>
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[.04]">
                    {group.items.map((item, i) => {
                      const isActiveItem = active === item.id;
                      return (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setMobileOpen(false);
                            onJumpChapter(item.id);
                          }}
                          className={`flex items-center gap-3 px-4 py-3 transition-colors active:bg-white/10 ${
                            i < group.items.length - 1 ? "border-b border-white/[.06]" : ""
                          } ${isActiveItem ? "bg-white/[.08]" : ""}`}
                        >
                          <span
                            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[.6rem] font-black"
                            style={
                              isActiveItem
                                ? { background: "linear-gradient(135deg,#ea580c,#c2410c)", color: "#fff7ec" }
                                : { background: "rgba(255,220,170,.1)", color: "#c99a63" }
                            }
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className={`block text-[.9rem] font-bold leading-tight ${isActiveItem ? "text-[#f5c889]" : "text-[#f0e2c8]"}`}>
                              {item.label}
                            </span>
                            <span className="mt-0.5 block text-[.7rem] leading-snug text-[#b99a75]">{item.desc}</span>
                          </span>
                          {isActiveItem ? (
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "#f59e0b" }} />
                          ) : seen.has(item.id) ? (
                            <Check className="h-4 w-4 shrink-0" style={{ color: "#8fae5d" }} aria-label="Chapter read" />
                          ) : null}
                        </a>
                      );
                    })}

                    {/* Test my knowledge — per group */}
                    <button
                      type="button"
                      onClick={() => {
                        setMobileOpen(false);
                        onOpenExam(group.id);
                      }}
                      className="flex w-full items-center gap-2.5 border-t border-white/[.08] px-4 py-3 text-left transition-colors active:bg-white/10"
                    >
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-white"
                        style={{ background: "linear-gradient(135deg,#ea580c,#c2410c)" }}
                      >
                        <PenLine className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-[.88rem] font-extrabold text-[#f5c889]">Test my knowledge</span>
                      <span className="ml-auto text-[.6rem] font-black uppercase tracking-[.14em] text-[#c99a63]">
                        {ATB_EXAM_BANKS[group.id].questions.length} Qs →
                      </span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}

/* ============================================================
   PracticeHub — the ONE home of pen-paper practice. The hero's
   "Test my knowledge" button opens this dark studio: one card
   per chapter group, each launching that group's full exam
   window. Kept off the reading surface so the main page stays
   a clean lecture-by-lecture read.
   ============================================================ */
function PracticeHub({
  open,
  onClose,
  onOpenExam,
}: {
  open: boolean;
  onClose: () => void;
  onOpenExam: (g: AtbExamGroup) => void;
}) {
  const hubRef = useDialogA11y<HTMLDivElement>(open);

  // Escape closes + body scroll locks while the hub is up
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          ref={hubRef}
          tabIndex={-1}
          key="practice-hub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[65] overflow-y-auto outline-none"
          style={{
            background: "rgba(30,18,6,.78)",
            WebkitBackdropFilter: "blur(12px) saturate(140%)",
            backdropFilter: "blur(12px) saturate(140%)",
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Test my knowledge — pen-paper practice"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <div
            className="mx-auto my-6 w-[min(66rem,calc(100vw-1.5rem))] overflow-hidden rounded-3xl border border-white/10 sm:my-10"
            style={{
              background: "linear-gradient(165deg,#241608 0%,#33200e 55%,#3e2c1d 100%)",
              boxShadow: "0 48px 140px -32px rgba(0,0,0,.65)",
            }}
          >
            {/* header */}
            <div className="flex items-start justify-between gap-4 px-6 pt-6 sm:px-8">
              <div>
                <p className="flex items-center gap-2 text-[.6rem] font-extrabold uppercase tracking-[.24em] text-[#c99a63]">
                  <span className="h-px w-5" style={{ background: "linear-gradient(90deg,#ea580c,transparent)" }} />
                  Pen-paper practice
                </p>
                <h2 className="mt-1.5 text-2xl font-black tracking-tight text-[#ffe9c9] sm:text-3xl">Test my knowledge</h2>
                <p className="mt-2 max-w-2xl text-[.88rem] leading-relaxed text-[#d9c3a4]">
                  Every chapter group opens its own exam window: write-the-output, trace-the-pseudocode,
                  definitions and concept checks — write on real paper first, then mark yourself against
                  the model answers with instant checking.
                </p>
                <p className="mt-2 text-[.64rem] font-black uppercase tracking-[.18em] text-[#a1876a]">
                  {ATB_TOTAL_QUESTIONS} questions · {ATB_EXAM_GROUPS.length} windows
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close the practice hub"
                className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#ffe9c9] transition-colors hover:bg-white/20"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* the six exam windows */}
            <div className="grid gap-3 px-6 pb-7 pt-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
              {ATB_EXAM_GROUPS.map((g) => {
                const bank = ATB_EXAM_BANKS[g];
                return (
                  <button
                    key={g}
                    type="button"
                    onClick={() => onOpenExam(g)}
                    className="group flex flex-col items-start rounded-2xl border border-white/10 bg-white/[.05] p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[.09]"
                    aria-label={`Open the exam window — ${bank.title}`}
                  >
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md"
                      style={{ background: "linear-gradient(135deg,#ea580c,#c2410c)" }}
                    >
                      <PenLine className="h-4 w-4" />
                    </span>
                    <span className="mt-3 text-[.98rem] font-extrabold leading-tight text-[#f5c889]">{bank.title}</span>
                    <span className="mt-1 text-[.76rem] leading-snug text-[#cbb392]">{bank.topics}</span>
                    <span className="mt-3 text-[.66rem] font-black uppercase tracking-[.16em] text-[#c99a63] transition-colors group-hover:text-[#f5c889]">
                      Test my knowledge · {bank.questions.length} Qs →
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

/* ============================================================
   LecturePager — prev/next lecture cards closing every lecture,
   so the sequence reads like a book even without the picker.
   ============================================================ */
function LecturePager({ current, onJump }: { current: AtbLecture; onJump: (id: string) => void }) {
  const idx = ATB_LECTURES.findIndex((l) => l.id === current.id);
  const prev = idx > 0 ? ATB_LECTURES[idx - 1] : null;
  const next = idx < ATB_LECTURES.length - 1 ? ATB_LECTURES[idx + 1] : null;

  return (
    <nav aria-label="Lecture sequence" className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6">
      <div className="grid gap-3 sm:grid-cols-2">
        {prev ? (
          <button
            type="button"
            onClick={() => onJump(prev.id)}
            className="card-warm lift group flex min-w-0 items-center gap-3 p-4 text-left"
            aria-label={`Previous: ${prev.code} — ${prev.title}`}
          >
            <ArrowLeft className="h-4 w-4 shrink-0 text-[#c2410c] transition-transform duration-200 group-hover:-translate-x-1" />
            <span className="min-w-0">
              <span className="block text-[.6rem] font-extrabold uppercase tracking-[.18em] text-[#a16207]">
                Previous · {prev.code}
              </span>
              <span className="mt-0.5 block truncate text-[.92rem] font-extrabold text-[#3e2c1d]">{prev.title}</span>
            </span>
          </button>
        ) : (
          <span aria-hidden className="hidden sm:block" />
        )}
        {next ? (
          <button
            type="button"
            onClick={() => onJump(next.id)}
            className="card-warm lift group flex min-w-0 items-center justify-end gap-3 p-4 text-right"
            aria-label={`Next: ${next.code} — ${next.title}`}
          >
            <span className="min-w-0">
              <span className="block text-[.6rem] font-extrabold uppercase tracking-[.18em] text-[#a16207]">
                Next · {next.code}
              </span>
              <span className="mt-0.5 block truncate text-[.92rem] font-extrabold text-[#3e2c1d]">{next.title}</span>
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 text-[#c2410c] transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        ) : (
          <span className="rounded-2xl border border-dashed border-[#e5c79d] p-4 text-center text-[.78rem] font-bold leading-snug text-[#a08568]">
            End of the sequence — the next lecture lands here the moment the course sends it.
          </span>
        )}
      </div>
    </nav>
  );
}


/* ============================================================
   AtbApp — the composed subject page: a lecture reader.
   ============================================================ */
export function AtbApp({ onExitAtlas }: { onExitAtlas: () => void }) {
  const [lectureId, setLectureId] = useState<string>(ATB_DEFAULT_LECTURE);
  const [examGroup, setExamGroup] = useState<AtbExamGroup | null>(null);
  const [hubOpen, setHubOpen] = useState(false);
  const lectureIdRef = useRef(lectureId);
  useEffect(() => {
    lectureIdRef.current = lectureId;
  }, [lectureId]);

  const lecture = lectureById(lectureId) ?? ATB_LECTURES[0];
  const seen = useSeenDisplay(lecture);

  /* pick a lecture from the hero sequence (or the pager) and bring
     the notes into view — "the lecture number 1 notes will be
     available below", literally */
  const selectLecture = useCallback((id: string) => {
    setLectureId(id);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        const el = document.getElementById("notes-top");
        if (!el) return;
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      })
    );
  }, []);

  /* chapter jumps — from the nav menus or the ⌘K palette. If the
     chapter belongs to another lecture, switch first, wait for the
     render, then run the standard flash-jump */
  const goToChapter = useCallback((chapterId: string) => {
    const target = lectureOfChapter(chapterId);
    if (!target) return;
    const scrollWhenReady = () => {
      let frames = 0;
      const tick = () => {
        const el = document.getElementById(chapterId);
        if (el) {
          jumpTo(el);
          return;
        }
        if (++frames < 240) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    if (lectureIdRef.current === target.id) {
      scrollWhenReady();
      return;
    }
    setLectureId(target.id);
    requestAnimationFrame(() => requestAnimationFrame(scrollWhenReady));
  }, []);

  /* ⌘K handoffs (queued + live) route through the lecture-aware jumper */
  useOpenSection("atb", goToChapter);

  const openExam = useCallback((g: AtbExamGroup) => setExamGroup(g), []);
  const openHub = useCallback(() => setHubOpen(true), []);

  return (
    // id="top" — the brand chip links to #top; without a real element here the
    // client-side router swallows the fragment and the page never scrolls back
    <div id="top" className="page-wrap warm-canvas">
      <TopNav onOpenExam={openExam} onExitAtlas={onExitAtlas} onJumpChapter={goToChapter} seen={seen} />
      <main className="pt-14">
        <PartBoundary label="Hero">
          <AtbHero
            activeId={lectureId}
            onSelect={selectLecture}
            onPractice={openHub}
            seen={seen}
            totalQuestions={ATB_TOTAL_QUESTIONS}
          />
        </PartBoundary>

        {/* the notes start here — selecting a lecture lands the reader on this line */}
        <div id="notes-top" aria-hidden className="relative scroll-mt-16" />

        <PartBoundary key={lecture.id} label={`Lecture ${lecture.code} — ${lecture.title}`}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {lecture.chapters.length > 0 ? (
              lecture.chapters.map((c) => (
                <PartBoundary key={c.id} label={c.label}>
                  {SECTION_COMPONENTS[c.id]}
                </PartBoundary>
              ))
            ) : (
              <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
                <div className="card-warm p-8 text-center">
                  <span className="chip mx-auto">
                    <Hourglass className="h-3.5 w-3.5" /> Slot reserved
                  </span>
                  <h2 className="mt-4 text-2xl font-extrabold text-[#3e2c1d]">
                    Lecture {lecture.n} hasn&rsquo;t been summarised yet
                  </h2>
                  <p className="mx-auto mt-3 max-w-md text-[.92rem] leading-relaxed text-muted-warm">
                    This lecture&rsquo;s notes haven&rsquo;t been uploaded, so the shelf keeps the
                    slot open. The moment its summary arrives, the chapters fill in right here —
                    diagrams, machines and all.
                  </p>
                </div>
              </div>
            )}
            <LecturePager current={lecture} onJump={selectLecture} />
          </motion.div>
        </PartBoundary>
      </main>
      <PracticeHub open={hubOpen} onClose={() => setHubOpen(false)} onOpenExam={openExam} />
      {examGroup ? <AtbExamWindow group={examGroup} onClose={() => setExamGroup(null)} /> : null}
    </div>
  );
}
