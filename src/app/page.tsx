"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Compass, Menu, X, ChevronDown, BookOpenText, FlaskConical, PenLine } from "lucide-react";
import { PyReadyToast } from "@/components/notes/ui";
import { PythonLab } from "@/components/notes/Playground";
import { ExamWindow } from "@/components/notes/ExamWindow";
import { EXAM_BANKS, EXAM_GROUPS, TOTAL_QUESTIONS, type ExamGroup } from "@/components/notes/questions";
import { Hero, WhySection, ComputingSection, PillarsSection } from "@/components/notes/Part1";
import { DataSection } from "@/components/notes/Part2";
import { AlgorithmSection, HardwareSection } from "@/components/notes/Part3";
import { SoftwareSection, ProgrammingSection } from "@/components/notes/Part4";
import { BasicsSection, ListsSection } from "@/components/notes/Part5";
import { IfSection, DictsSection } from "@/components/notes/Part6";
import { WhileSection, FunctionsSection, Footer } from "@/components/notes/Part7";
import { ArgsSection } from "@/components/notes/Part8";
import { FuncsScaleSection } from "@/components/notes/Part9";
import { ClassesSection } from "@/components/notes/Part10";

/* ============================================================
   Structured chapter map — the top bar is organised into
   four groups instead of a flat 17-chip strip. Each group owns
   a "Test my knowledge" exam window (see questions.ts).
   ============================================================ */
const GROUPS: {
  id: ExamGroup;
  label: string;
  items: { id: string; label: string; desc: string }[];
}[] = [
  {
    id: "foundations",
    label: "Foundations",
    items: [
      { id: "why", label: "Why code?", desc: "What programming actually unlocks" },
      { id: "computing", label: "Computing", desc: "Input → process → output, everywhere" },
      { id: "pillars", label: "4 Pillars", desc: "Decompose · patterns · abstraction · algorithms" },
      { id: "data", label: "Data", desc: "Data → information → knowledge → wisdom" },
    ],
  },
  {
    id: "machines",
    label: "Machines",
    items: [
      { id: "algorithm", label: "Algorithms", desc: "Recipes a machine can follow" },
      { id: "hardware", label: "Hardware", desc: "CPU, memory, sensors & I/O" },
      { id: "software", label: "Software", desc: "OS, apps, compilers & interpreters" },
    ],
  },
  {
    id: "pycore",
    label: "Python Core",
    items: [
      { id: "python", label: "Python", desc: "Meet the language" },
      { id: "basics", label: "Basics", desc: "Variables, strings, numbers, input" },
      { id: "lists", label: "Lists", desc: "Ordered collections, slices, tuples" },
      { id: "if", label: "If / Else", desc: "Decisions, comparisons, logic" },
      { id: "dicts", label: "Dictionaries", desc: "Key–value pairs & nesting" },
      { id: "while", label: "While Loops", desc: "Repeat until the job is done" },
    ],
  },
  {
    id: "pro",
    label: "Functions & OOP",
    items: [
      { id: "functions", label: "Functions", desc: "Define, call, reuse — first steps" },
      { id: "args", label: "Args & Return", desc: "Positional, keyword, defaults, return" },
      { id: "funcs2", label: "Funcs × Lists", desc: "Passing lists, *args, **kwargs, modules" },
      { id: "classes", label: "Classes", desc: "Objects, __init__, inheritance" },
    ],
  },
];

const FLAT_ITEMS = GROUPS.flatMap((g) => g.items);

function groupOf(id: string): string | null {
  for (const g of GROUPS) if (g.items.some((i) => i.id === id)) return g.id;
  return null;
}

/* ============================================================
   TopNav — structured chapter menu + Python Lab button +
   a "Test my knowledge" launcher inside every chapter group.

   PERF: the old version called setProgress()/setActive() on
   EVERY scroll event, re-rendering the nav dozens of times per
   second. Now the progress bar is written straight to the DOM
   through a ref inside a requestAnimationFrame, and React state
   updates only when the value actually CHANGES.
   ============================================================ */
function TopNav({
  onOpenLab,
  onOpenExam,
}: {
  onOpenLab: () => void;
  onOpenExam: (g: ExamGroup) => void;
}) {
  const [active, setActive] = useState<string>("");
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pyReady, setPyReady] = useState(false);
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

      // scroll-spy: only touch React state when the section changes
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

  // shared Python runtime status
  useEffect(() => {
    const onReady = () => setPyReady(true);
    window.addEventListener("foc-py-ready", onReady);
    return () => window.removeEventListener("foc-py-ready", onReady);
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
          {/* brand — quiet glass chip, Apple-quiet rather than loud gradient */}
          <a
            href="#top"
            className="flex shrink-0 items-center gap-2 rounded-full border border-white/70 bg-white/60 py-1.5 pl-2 pr-3.5 shadow-[0_4px_16px_-8px_rgba(70,42,15,.35)] backdrop-blur-md transition-colors duration-200 hover:bg-white/80"
          >
            <span
              className="flex h-6 w-6 items-center justify-center rounded-full text-white"
              style={{ background: "linear-gradient(135deg,#ea580c,#c2410c)", boxShadow: "0 4px 10px -3px rgba(194,65,12,.55)" }}
            >
              <Compass className="h-3.5 w-3.5" />
            </span>
            <span className="text-sm font-black tracking-tight text-[#3e2c1d]">FoC Notes</span>
          </a>

          {/* desktop — grouped chapter menu (all four groups, Python Core
              included). Opens at lg: below that the bar would overflow once
              the Python Core group is shown, so narrower screens get the
              scrolling chip strip + the full-screen index instead. */}
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
                          </p>
                          {group.items.map((item, i) => {
                            const isActiveItem = active === item.id;
                            return (
                              <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={() => setOpenGroup(null)}
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
                                {isActiveItem ? <span className="ml-auto mt-1 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "#c2410c" }} /> : null}
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
                                  {EXAM_BANKS[group.id].questions.length} exam-style questions · pen-paper mode
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

          {/* below lg — quick chips (horizontal scroll) covering every
              chapter, Python Core included */}
          <div className="scrollbar-thin flex flex-1 items-center gap-1 overflow-x-auto py-1 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {GROUPS.flatMap((g) => g.items).map((item) => (
              <a key={item.id} href={`#${item.id}`} className={`nav-link ${active === item.id ? "active" : ""}`}>
                {item.label}
              </a>
            ))}
          </div>

          {/* right cluster — Python Lab (replaces the old LIVE PYTHON chip) */}
          <div className="ml-auto flex shrink-0 items-center gap-2 md:ml-2">
            <button
              type="button"
              onClick={onOpenLab}
              title="Open the Python Lab — a Colab-style notebook where you can run your own code"
              className="hidden items-center gap-1.5 rounded-full border border-white/70 bg-white/60 px-3.5 py-1.5 text-[.66rem] font-extrabold uppercase tracking-[.14em] text-[#8a5f30] shadow-[0_4px_16px_-8px_rgba(70,42,15,.35),inset_0_1px_0_rgba(255,255,255,.9)] backdrop-blur-md transition-all duration-200 hover:bg-white/85 hover:text-[#c2410c] sm:flex"
            >
              <FlaskConical className="h-3.5 w-3.5" />
              Python Lab
              <span
                className={`h-1.5 w-1.5 rounded-full ${pyReady ? "" : "opacity-60"}`}
                style={{
                  background: pyReady ? "#6f9e3f" : "#d6bd97",
                  boxShadow: pyReady ? "0 0 0 3px rgba(143,174,93,.25)" : undefined,
                }}
              />
            </button>
            <button
              type="button"
              onClick={onOpenLab}
              aria-label="Open the Python Lab"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/70 bg-white/60 text-[#8a5f30] backdrop-blur-md transition-colors hover:bg-white/85 hover:text-[#c2410c] lg:hidden"
            >
              <FlaskConical className="h-4 w-4" />
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
            key="mobile-index"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[60] flex flex-col"
            style={{ background: "linear-gradient(165deg,#241608 0%,#33200e 55%,#3e2c1d 100%)" }}
            role="dialog"
            aria-modal="true"
            aria-label="Chapter index"
          >
            <div className="flex h-14 shrink-0 items-center justify-between px-4">
              <span className="flex items-center gap-2 text-sm font-black tracking-tight text-[#ffe9c9]">
                <Compass className="h-4 w-4" style={{ color: "#f59e0b" }} />
                Chapter index
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
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-[.55rem] text-[#e9d7bf]">{group.items.length}</span>
                  </p>
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[.04]">
                    {group.items.map((item, i) => {
                      const isActiveItem = active === item.id;
                      return (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          onClick={() => setMobileOpen(false)}
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
                          {isActiveItem ? <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "#f59e0b" }} /> : null}
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
                        {EXAM_BANKS[group.id].questions.length} Qs →
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
   PracticeBand — the only place on the main page where
   "Test my knowledge" is written: one card per chapter group.
   Clicking opens that group's full exam window.
   ============================================================ */
function PracticeBand({ onOpenExam }: { onOpenExam: (g: ExamGroup) => void }) {
  return (
    <section aria-label="Test my knowledge — pen-paper practice" className="relative border-y border-[#ecd9bd] bg-[#fffaf1]/70">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Pen-paper practice</span>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">Test my knowledge</h2>
            <p className="mt-2 max-w-xl text-[.9rem] leading-relaxed text-muted-warm">
              The end term is written by hand — so every chapter group opens its own
              exam window: write-the-output, trace-the-code, definitions and small
              programs, with model answers and instant checking.
            </p>
          </div>
          <p className="shrink-0 text-[.68rem] font-black uppercase tracking-[.18em] text-[#a16207]">
            {TOTAL_QUESTIONS} questions · 4 windows
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {EXAM_GROUPS.map((g) => {
            const bank = EXAM_BANKS[g];
            return (
              <button
                key={g}
                type="button"
                onClick={() => onOpenExam(g)}
                className="card-warm lift group flex flex-col items-start p-5 text-left"
                aria-label={`Test my knowledge — ${bank.title}`}
              >
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md"
                  style={{ background: "linear-gradient(135deg,#ea580c,#c2410c)" }}
                >
                  <PenLine className="h-4 w-4" />
                </span>
                <span className="mt-3 text-[.98rem] font-extrabold leading-tight text-[#3e2c1d]">{bank.title}</span>
                <span className="mt-1 text-[.74rem] leading-snug text-muted-warm">{bank.topics}</span>
                <span className="mt-3 text-[.66rem] font-black uppercase tracking-[.16em] text-[#c2410c]">
                  Test my knowledge · {bank.questions.length} Qs →
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  const [labOpen, setLabOpen] = useState(false);
  const [examGroup, setExamGroup] = useState<ExamGroup | null>(null);
  const openExam = (g: ExamGroup) => setExamGroup(g);

  return (
    <div className="page-wrap warm-canvas">
      <TopNav onOpenLab={() => setLabOpen(true)} onOpenExam={openExam} />
      <main className="pt-14">
        <Hero onOpenLab={() => setLabOpen(true)} />
        <PracticeBand onOpenExam={openExam} />
        <WhySection />
        <ComputingSection />
        <PillarsSection />
        <DataSection />
        <AlgorithmSection />
        <HardwareSection />
        <SoftwareSection />
        <ProgrammingSection />
        <BasicsSection />
        <ListsSection />
        <IfSection />
        <DictsSection />
        <WhileSection />
        <FunctionsSection />
        <ArgsSection />
        <FuncsScaleSection />
        <ClassesSection />
      </main>
      <Footer />
      <PyReadyToast />
      <PythonLab open={labOpen} onClose={() => setLabOpen(false)} />
      {examGroup ? <ExamWindow group={examGroup} onClose={() => setExamGroup(null)} /> : null}
    </div>
  );
}
