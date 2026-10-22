"use client";

/* ============================================================
   Shelf03App — the STAGING shell for reserved shelf 03 of
   THE ATLAS.

   This is the same poured mould as FocApp / AtbApp — grouped
   chapter navigation with scroll-spy, a practice band, the
   pen-paper exam windows and the signature footer — mounted
   and verified BEFORE the syllabus drops, so pour day is
   content-only work.

   SCAFFOLD: the chapter map below holds the staging sections;
   it is replaced by the real chapter clusters on pour day.
   The exam groups already match ./questions.ts seed banks.
   ============================================================ */

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Boxes,
  ChevronDown,
  GraduationCap,
  ListChecks,
  Map,
  Menu,
  MousePointerClick,
  PenLine,
  X,
} from "lucide-react";
import {
  Shelf03Hero,
  Shelf03KitSection,
  Shelf03RecipeSection,
} from "@/components/shelf03/Shelf03Parts";
import { Shelf03ExamWindow } from "@/components/shelf03/Shelf03ExamWindow";
import {
  SHELF03_EXAM_BANKS,
  SHELF03_EXAM_GROUPS,
  SHELF03_TOTAL_QUESTIONS,
  type Shelf03ExamGroup,
} from "@/components/shelf03/questions";

/* ============================================================
   Structured chapter map — staging edition. Group ids match
   the seed exam groups in ./questions.ts so every group owns
   its "Test my knowledge" window.
   ============================================================ */
const GROUPS: {
  id: Shelf03ExamGroup;
  label: string;
  items: { id: string; label: string; desc: string }[];
}[] = [
  {
    id: "core",
    label: "The method",
    items: [
      { id: "recipe", label: "The pour recipe", desc: "PDF → chapters → machines → bank → live" },
    ],
  },
  {
    id: "kit",
    label: "The kit",
    items: [
      { id: "kit", label: "What's armed", desc: "Nav, scroll-spy, drills, exam engine" },
      { id: "practice", label: "Seed windows", desc: "Play the pen-paper engine right now" },
    ],
  },
];

const FLAT_ITEMS = GROUPS.flatMap((g) => g.items);

function groupOf(id: string): Shelf03ExamGroup | null {
  for (const g of GROUPS) if (g.items.some((i) => i.id === id)) return g.id;
  return null;
}

/* lime sigil of shelf 03 */
const LIME_GRAD = "linear-gradient(135deg,#65a30d,#3f6212)";
const LIME_INK = "#3f6212";
const PROGRESS_GRAD = "linear-gradient(90deg,#84cc16,#65a30d,#3f6212)";

/* ============================================================
   TopNav — same architecture as the AtbApp nav: grouped menus
   with exam launchers, chip strip below lg, full-screen mobile
   index, and a progress bar written straight to the DOM via a
   ref (React state only when the active section changes).
   ============================================================ */
function TopNav({
  onOpenExam,
  onExitAtlas,
}: {
  onOpenExam: (g: Shelf03ExamGroup) => void;
  onExitAtlas: () => void;
}) {
  const [active, setActive] = useState<string>("");
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
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
            className="flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-white/70 bg-white/60 px-3 text-[.64rem] font-extrabold uppercase tracking-[.14em] text-[#5a6b33] shadow-[0_4px_16px_-8px_rgba(70,42,15,.35)] backdrop-blur-md transition-colors duration-200 hover:bg-white/85 hover:text-[#3f6212]"
          >
            <Map className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Atlas</span>
          </button>

          {/* brand — shelf 03's lime sigil on the quiet glass chip */}
          <a
            href="#top"
            className="flex shrink-0 items-center gap-2 rounded-full border border-white/70 bg-white/60 py-1.5 pl-2 pr-3.5 shadow-[0_4px_16px_-8px_rgba(70,42,15,.35)] backdrop-blur-md transition-colors duration-200 hover:bg-white/80"
          >
            <span
              className="flex h-6 w-6 items-center justify-center rounded-full text-white"
              style={{ background: LIME_GRAD, boxShadow: "0 4px 10px -3px rgba(63,98,18,.55)" }}
            >
              <Boxes className="h-3.5 w-3.5" />
            </span>
            <span className="text-sm font-black tracking-tight text-[#3e2c1d]">Shelf 03 · Staging</span>
          </a>

          {/* desktop — grouped menu with exam launchers */}
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
                        ? "bg-white/80 text-[#3f6212] shadow-[0_4px_16px_-8px_rgba(70,42,15,.4),inset_0_1px_0_rgba(255,255,255,.9)]"
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
                          <p className="flex items-center gap-1.5 px-3 pb-1.5 pt-2 text-[.58rem] font-extrabold uppercase tracking-[.22em] text-[#7a8a4d]">
                            <BookOpen className="h-3 w-3" />
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
                                  isActiveItem ? "bg-[#65a30d]/[.09]" : "hover:bg-[#3e2c1d]/[.05]"
                                }`}
                              >
                                <span
                                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[.58rem] font-black ${
                                    isActiveItem ? "text-white" : "border border-white/80 bg-white/70 text-[#7a8a4d]"
                                  }`}
                                  style={isActiveItem ? { background: LIME_GRAD } : undefined}
                                >
                                  {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="min-w-0">
                                  <span className={`block text-[.82rem] font-bold leading-tight ${isActiveItem ? "text-[#3f6212]" : "text-[#3e2c1d]"}`}>
                                    {item.label}
                                  </span>
                                  <span className="mt-0.5 block text-[.7rem] leading-snug text-[#a08568]">{item.desc}</span>
                                </span>
                                {isActiveItem ? <span className="ml-auto mt-1 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: LIME_INK }} /> : null}
                              </a>
                            );
                          })}

                          {/* Test my knowledge — opens this group's seed window */}
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
                                style={{ background: LIME_GRAD }}
                              >
                                <PenLine className="h-3.5 w-3.5" />
                              </span>
                              <span className="min-w-0">
                                <span className="block text-[.84rem] font-extrabold leading-tight text-[#3f6212]">
                                  Test my knowledge
                                </span>
                                <span className="mt-0.5 block text-[.68rem] leading-snug text-[#a08568]">
                                  {SHELF03_EXAM_BANKS[group.id].questions.length} seed questions · pen-paper mode
                                </span>
                              </span>
                              <span className="ml-auto shrink-0 text-[.58rem] font-black uppercase tracking-[.14em] text-[#7a8a4d] transition-colors group-hover/exam:text-[#3f6212]">
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

          {/* below lg — quick chips (horizontal scroll) */}
          <div className="scrollbar-thin flex flex-1 items-center gap-1 overflow-x-auto py-1 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {FLAT_ITEMS.map((item) => (
              <a key={item.id} href={`#${item.id}`} className={`nav-link ${active === item.id ? "active" : ""}`}>
                {item.label}
              </a>
            ))}
          </div>

          {/* right cluster — chapter index (small screens) */}
          <div className="ml-auto flex shrink-0 items-center gap-2 md:ml-2">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open the chapter index"
              aria-expanded={mobileOpen}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/70 bg-white/60 text-[#6b563d] backdrop-blur-md transition-colors hover:bg-white/85 hover:text-[#3f6212] lg:hidden"
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
          style={{ width: "0%", background: PROGRESS_GRAD }}
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
            style={{ background: "linear-gradient(165deg,#1a2408 0%,#25330d 55%,#2f4013 100%)" }}
            role="dialog"
            aria-modal="true"
            aria-label="Chapter index"
          >
            <div className="flex h-14 shrink-0 items-center justify-between px-4">
              <span className="flex items-center gap-2 text-sm font-black tracking-tight text-[#eef7d8]">
                <Boxes className="h-4 w-4" style={{ color: "#a3e635" }} />
                Chapter index
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close the chapter index"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#eef7d8]"
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
                  <p className="mb-2 flex items-center gap-2 text-[.62rem] font-extrabold uppercase tracking-[.24em] text-[#b5cc84]">
                    <span className="h-px w-5" style={{ background: "linear-gradient(90deg,#84cc16,transparent)" }} />
                    {group.label}
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-[.55rem] text-[#eef7d8]">{group.items.length}</span>
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
                                ? { background: LIME_GRAD, color: "#f4ffe3" }
                                : { background: "rgba(220,245,170,.1)", color: "#b5cc84" }
                            }
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className={`block text-[.9rem] font-bold leading-tight ${isActiveItem ? "text-[#cdeb92]" : "text-[#e6f2cd]"}`}>
                              {item.label}
                            </span>
                            <span className="mt-0.5 block text-[.7rem] leading-snug text-[#a9bd85]">{item.desc}</span>
                          </span>
                          {isActiveItem ? <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "#84cc16" }} /> : null}
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
                        style={{ background: LIME_GRAD }}
                      >
                        <PenLine className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-[.88rem] font-extrabold text-[#cdeb92]">Test my knowledge</span>
                      <span className="ml-auto text-[.6rem] font-black uppercase tracking-[.14em] text-[#b5cc84]">
                        {SHELF03_EXAM_BANKS[group.id].questions.length} Qs →
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
   PracticeBand — the seed exam launcher. Same card grid as the
   other shelves; the copy is honest that these are seeds.
   ============================================================ */
function PracticeBand({ onOpenExam }: { onOpenExam: (g: Shelf03ExamGroup) => void }) {
  return (
    <section id="practice" aria-label="Test my knowledge — seed windows" className="relative scroll-mt-20 border-y border-[#ecd9bd] bg-[#fffaf1]/70">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Pen-paper practice · seed windows</span>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">Test my knowledge</h2>
            <p className="mt-2 max-w-xl text-[.9rem] leading-relaxed text-muted-warm">
              The engine is live <b>before</b> the syllabus: two seed windows with MCQ,
              write-the-output and short-answer formats — instant checking, model answers,
              navigator, timer, results report. On pour day the seeds are swapped for the
              real bank.
            </p>
          </div>
          <p className="shrink-0 text-[.68rem] font-black uppercase tracking-[.18em] text-[#4d7c0f]">
            {SHELF03_TOTAL_QUESTIONS} seed questions · {SHELF03_EXAM_GROUPS.length} windows
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {SHELF03_EXAM_GROUPS.map((g) => {
            const bank = SHELF03_EXAM_BANKS[g];
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
                  style={{ background: LIME_GRAD }}
                >
                  <PenLine className="h-4 w-4" />
                </span>
                <span className="mt-3 text-[.98rem] font-extrabold leading-tight text-[#3e2c1d]">{bank.title}</span>
                <span className="mt-1 text-[.74rem] leading-snug text-muted-warm">{bank.topics}</span>
                <span className="mt-3 text-[.66rem] font-black uppercase tracking-[.16em] text-[#4d7c0f]">
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

/* ============================================================
   Shelf03Footer — the signature footer, staging edition.
   ============================================================ */
const SHELF03_SIG_CHIPS = [
  { icon: BookOpen, label: "0 chapters — for now" },
  { icon: ListChecks, label: "6 seed questions" },
  { icon: GraduationCap, label: "2 exam windows" },
  { icon: MousePointerClick, label: "engine you can poke" },
];

export function Shelf03Footer() {
  return (
    <footer className="footer-stick relative overflow-hidden">
      {/* hairline that draws itself from the centre */}
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(120,150,70,.35), transparent)" }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* barely-there lime halo behind the signature */}
      <div aria-hidden className="sig-glow" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 py-8 text-center sm:py-10">
        <motion.p
          className="sig-eyebrow text-[.58rem] font-semibold uppercase text-[#8a9a6a]"
          aria-label="created by"
          initial={{ opacity: 0, letterSpacing: "1.05em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.55em" }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          created by
        </motion.p>

        <motion.h2
          className="footer-name-wrap mt-2.5"
          aria-label="Arpit Nayan"
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
        >
          <span className="footer-name">Arpit&nbsp;Nayan</span>
        </motion.h2>

        {/* one delicate stroke under the name */}
        <svg viewBox="0 0 300 22" className="mt-2 h-3.5 w-44" aria-hidden fill="none">
          <defs>
            <linearGradient id="shelf03SigGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#84cc16" stopOpacity="0" />
              <stop offset="0.5" stopColor="#65a30d" />
              <stop offset="1" stopColor="#84cc16" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M6 12 C 62 4, 118 19, 152 11 C 186 4, 236 17, 294 10"
            stroke="url(#shelf03SigGrad)"
            strokeWidth="1.6"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeInOut", delay: 0.75 }}
          />
        </svg>

        {/* the project — a two-line epitaph about what this page is */}
        <motion.p
          className="sig-blurb mt-5"
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 1.0 }}
        >
          <b>Reserved shelf 03</b> — the whole revision engine mounted and verified before the
          syllabus arrives. When the PDF drops, this page becomes a full Atlas subject.
          <span className="mt-1 block">
            Built for the night before the drop and the night before the exam.
          </span>
        </motion.p>

        {/* the shelf — quiet institutional line */}
        <motion.p
          className="mt-3 text-[.78rem] font-semibold text-[#5f6b45]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 1.25 }}
        >
          Shelf 03 of The Atlas — staging build · B.S. in Management and Technology · IIT Jodhpur
        </motion.p>

        {/* what's inside — a row of calm stat pills */}
        <div
          role="list"
          aria-label="What this staging build contains"
          className="mt-4 flex flex-wrap items-center justify-center gap-2"
        >
          {SHELF03_SIG_CHIPS.map((chip, i) => (
            <motion.span
              key={chip.label}
              role="listitem"
              className="sig-chip"
              initial={{ opacity: 0, y: 10, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 1.2 + i * 0.1,
              }}
            >
              <chip.icon className="h-3 w-3" strokeWidth={2.2} />
              {chip.label}
            </motion.span>
          ))}
        </div>

        {/* colophon — what it's built with, in tiny type */}
        <motion.p
          className="sig-colo mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 1.7 }}
        >
          shelf 03 · the atlas — staging build — crafted with next.js · react · tailwind — mmxxvi
        </motion.p>
      </div>
    </footer>
  );
}

/* ============================================================
   Shelf03App — the composed staging page.
   ============================================================ */
export function Shelf03App({ onExitAtlas }: { onExitAtlas: () => void }) {
  const [examGroup, setExamGroup] = useState<Shelf03ExamGroup | null>(null);
  const openExam = (g: Shelf03ExamGroup) => setExamGroup(g);

  return (
    // id="top" — the brand chip links to #top; without a real element here the
    // client-side router swallows the fragment and the page never scrolls back
    <div id="top" className="page-wrap warm-canvas">
      <TopNav onOpenExam={openExam} onExitAtlas={onExitAtlas} />
      <main className="pt-14">
        <Shelf03Hero />
        <Shelf03RecipeSection />
        <Shelf03KitSection />
        <PracticeBand onOpenExam={openExam} />
      </main>
      <Shelf03Footer />
      {examGroup ? <Shelf03ExamWindow group={examGroup} onClose={() => setExamGroup(null)} /> : null}
    </div>
  );
}
