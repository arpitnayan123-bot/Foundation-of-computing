"use client";

import { PartBoundary } from "@/components/notes/PartBoundary";
import { useDialogA11y } from "@/components/notes/exam-runtime";

/* ============================================================
   EbhApp — the complete "Economic & Business History" revision
   companion, registered as shelf 04 of THE ATLAS.

   Every date is argued, not memorised: rules and players,
   licence files and guild charters, mobs and mills — and every
   chapter carries its own living pieces (the rules grid, the
   guild ladder, the Silk Road speedway, the thread race, the
   Cottonopolis counter). Mounted by the Atlas router
   (src/app/page.tsx) when the reader enters the subject;
   `onExitAtlas` returns the reader to the Atlas landing page.
   ============================================================ */

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  BookOpenText,
  Landmark,
  ListChecks,
  Map,
  Menu,
  MousePointerClick,
  PenLine,
  X,
  ChevronDown,
  GraduationCap,
  Check,
} from "lucide-react";
import { useSectionProgress } from "@/lib/use-section-progress";
import { EbhHero, EbhEconomicsSection, EbhBusinessSection, EbhHistorySection, EbhRulesPlayersSection } from "@/components/ebh/EbhParts1";
import { EbhLicenseRajSection, EbhBajajSection, EbhSocietySection, EbhWeekendSection, EbhBizEconTechSection } from "@/components/ebh/EbhParts2";
import { EbhAgrarianSection, EbhGuildsSection, EbhTradeSection, EbhLifeBeforeSection } from "@/components/ebh/EbhParts3";
import { EbhWhyMachinesSection, EbhTextileSection, EbhSteamSection, EbhLaborSection, EbhEmpireSection } from "@/components/ebh/EbhParts4";
import { EbhExamWindow } from "@/components/ebh/EbhExamWindow";
import { EBH_EXAM_BANKS, EBH_EXAM_GROUPS, EBH_TOTAL_QUESTIONS, type EbhExamGroup } from "@/components/ebh/questions";

/* ============================================================
   Structured chapter map — the top bar is organised into four
   groups instead of a flat 18-chip strip. Each group owns a
   "Test my knowledge" pen-paper window (see questions.ts).
   ============================================================ */
const GROUPS: {
  id: EbhExamGroup;
  label: string;
  items: { id: string; label: string; desc: string }[];
}[] = [
  {
    id: "lens",
    label: "The Lens",
    items: [
      { id: "economics", label: "What is economics?", desc: "Scarcity, choices, and the two branches" },
      { id: "business", label: "What is business?", desc: "Economic activity, profit, and why firms exist" },
      { id: "history", label: "What is history?", desc: "Change over time — through evidence" },
      { id: "rules-players", label: "Rules & players", desc: "The two-by-two that names this course" },
    ],
  },
  {
    id: "currents",
    label: "Three Currents",
    items: [
      { id: "license-raj", label: "Economy → business", desc: "The License Raj and IPR 1956" },
      { id: "bajaj", label: "Case: Bajaj Auto", desc: "Two tracks — the economy and the scooter" },
      { id: "society-business", label: "Society → business", desc: "McAloo Tikki and the Cadbury ads" },
      { id: "weekend", label: "Business → society", desc: "The story of the weekend, 1886–1938" },
      { id: "business-econ-tech", label: "Economies & technology", desc: "Ford, 2008, Netflix, PESTLE" },
    ],
  },
  {
    id: "before",
    label: "Before the Machines",
    items: [
      { id: "agrarian", label: "Agrarian economies", desc: "Seasons, land, lords and zamindars" },
      { id: "guilds", label: "Guild systems", desc: "Apprentice, journeyman, master" },
      { id: "trade-routes", label: "Trade routes", desc: "Silk Road speeds, the Commercial Revolution" },
      { id: "life-before", label: "Life before machines", desc: "Enclosures, seed drills, putting-out" },
    ],
  },
  {
    id: "machines",
    label: "The Machine Age",
    items: [
      { id: "why-machines", label: "Why machines?", desc: "Population, trade, and the thread bottleneck" },
      { id: "textile-machines", label: "Textile machines", desc: "Shuttle, jenny, water frame — and the mobs" },
      { id: "steam-cottonopolis", label: "Steam & Cottonopolis", desc: "Watt's liberation, Manchester's mills" },
      { id: "labor-movement", label: "The labor movement", desc: "Luddites, Peterloo, and the 1825 Act" },
      { id: "empire", label: "Empire & mercantilism", desc: "Companies, colonies, British ships" },
    ],
  },
];

const FLAT_ITEMS = GROUPS.flatMap((g) => g.items);
const SECTION_IDS = FLAT_ITEMS.map((i) => i.id);

function groupOf(id: string): string | null {
  for (const g of GROUPS) if (g.items.some((i) => i.id === id)) return g.id;
  return null;
}

/* ============================================================
   TopNav — structured chapter menu + a "Test my knowledge"
   launcher inside every chapter group. Same engine as the
   FoC/ATB/FA shelves: progress bar written via ref inside rAF,
   React state only when the active section changes.
   ============================================================ */
function TopNav({
  onOpenExam,
  onExitAtlas,
}: {
  onOpenExam: (g: EbhExamGroup) => void;
  onExitAtlas: () => void;
}) {
  const [active, setActive] = useState<string>("");
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileRef = useDialogA11y<HTMLDivElement>(mobileOpen);
  const seen = useSectionProgress("ebh", SECTION_IDS);
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
          {/* back to The Atlas */}
          <button
            type="button"
            onClick={onExitAtlas}
            title="Back to The Atlas — the subject shelf"
            aria-label="Back to The Atlas"
            className="flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-white/70 bg-white/60 px-3 text-[.64rem] font-extrabold uppercase tracking-[.14em] text-[#8a7440] shadow-[0_4px_16px_-8px_rgba(70,42,15,.35)] backdrop-blur-md transition-colors duration-200 hover:bg-white/85 hover:text-[#a16207]"
          >
            <Map className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Atlas</span>
          </button>

          {/* brand — EBH's gold sigil on the quiet glass chip */}
          <a
            href="#top"
            className="flex shrink-0 items-center gap-2 rounded-full border border-white/70 bg-white/60 py-1.5 pl-2 pr-3.5 shadow-[0_4px_16px_-8px_rgba(70,42,15,.35)] backdrop-blur-md transition-colors duration-200 hover:bg-white/80"
          >
            <span
              className="flex h-6 w-6 items-center justify-center rounded-full text-white"
              style={{ background: "linear-gradient(135deg,#eab308,#a16207)", boxShadow: "0 4px 10px -3px rgba(161,98,7,.55)" }}
            >
              <Landmark className="h-3.5 w-3.5" />
            </span>
            <span className="text-sm font-black tracking-tight text-[#3e2c1d]">EBH Notes</span>
          </a>

          {/* desktop — grouped chapter menu */}
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
                        ? "bg-white/80 text-[#a16207] shadow-[0_4px_16px_-8px_rgba(70,42,15,.4),inset_0_1px_0_rgba(255,255,255,.9)]"
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
                          <p className="flex items-center gap-1.5 px-3 pb-1.5 pt-2 text-[.58rem] font-extrabold uppercase tracking-[.22em] text-[#a99758]">
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
                                onClick={() => setOpenGroup(null)}
                                className={`group flex items-start gap-3 rounded-xl px-3 py-2 transition-colors duration-150 ${
                                  isActiveItem ? "bg-[#eab308]/[.12]" : "hover:bg-[#3e2c1d]/[.05]"
                                }`}
                              >
                                <span
                                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[.58rem] font-black ${
                                    isActiveItem ? "text-white" : "border border-white/80 bg-white/70 text-[#a99758]"
                                  }`}
                                  style={isActiveItem ? { background: "linear-gradient(135deg,#eab308,#a16207)" } : undefined}
                                >
                                  {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="min-w-0">
                                  <span className={`block text-[.82rem] font-bold leading-tight ${isActiveItem ? "text-[#a16207]" : "text-[#3e2c1d]"}`}>
                                    {item.label}
                                  </span>
                                  <span className="mt-0.5 block text-[.7rem] leading-snug text-[#a08568]">{item.desc}</span>
                                </span>
                                {isActiveItem ? (
                                <span className="ml-auto mt-1 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "#a16207" }} />
                              ) : seen.has(item.id) ? (
                                <Check className="ml-auto mt-1 h-3.5 w-3.5 shrink-0" style={{ color: "#8fae5d" }} aria-label="Chapter read" />
                              ) : null}
                              </a>
                            );
                          })}

                          {/* Test my knowledge — opens the pen-paper window for this group */}
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
                                style={{ background: "linear-gradient(135deg,#eab308,#a16207)" }}
                              >
                                <PenLine className="h-3.5 w-3.5" />
                              </span>
                              <span className="min-w-0">
                                <span className="block text-[.84rem] font-extrabold leading-tight text-[#a16207]">
                                  Test my knowledge
                                </span>
                                <span className="mt-0.5 block text-[.68rem] leading-snug text-[#a08568]">
                                  {EBH_EXAM_BANKS[group.id].questions.length} exam-style questions · pen-paper mode
                                </span>
                              </span>
                              <span className="ml-auto shrink-0 text-[.58rem] font-black uppercase tracking-[.14em] text-[#a99758] transition-colors group-hover/exam:text-[#a16207]">
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
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/70 bg-white/60 text-[#6b563d] backdrop-blur-md transition-colors hover:bg-white/85 hover:text-[#a16207] lg:hidden"
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
          style={{ width: "0%", background: "linear-gradient(90deg,#facc15,#eab308,#a16207)" }}
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
            style={{ background: "linear-gradient(165deg,#1c1403 0%,#2a1e06 55%,#3a2a0a 100%)" }}
            role="dialog"
            aria-modal="true"
            aria-label="Chapter index"
          >
            <div className="flex h-14 shrink-0 items-center justify-between px-4">
              <span className="flex items-center gap-2 text-sm font-black tracking-tight text-[#f5ecd2]">
                <Landmark className="h-4 w-4" style={{ color: "#facc15" }} />
                Chapter index
              <span className="rounded-full bg-white/10 px-2 py-0.5 font-mono text-[.55rem] font-bold text-[#e9d7bf]">
                {seen.size}/{SECTION_IDS.length} read
              </span>
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close the chapter index"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#f5ecd2]"
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
                  <p className="mb-2 flex items-center gap-2 text-[.62rem] font-extrabold uppercase tracking-[.24em] text-[#d9bd6e]">
                    <span className="h-px w-5" style={{ background: "linear-gradient(90deg,#eab308,transparent)" }} />
                    {group.label}
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-[.55rem] text-[#e8d9ac]">{group.items.filter((it) => seen.has(it.id)).length}/{group.items.length}</span>
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
                                ? { background: "linear-gradient(135deg,#eab308,#a16207)", color: "#fffbf0" }
                                : { background: "rgba(240,220,150,.1)", color: "#d9bd6e" }
                            }
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className={`block text-[.9rem] font-bold leading-tight ${isActiveItem ? "text-[#efd98a]" : "text-[#f0e4c2]"}`}>
                              {item.label}
                            </span>
                            <span className="mt-0.5 block text-[.7rem] leading-snug text-[#c2a86e]">{item.desc}</span>
                          </span>
                          {isActiveItem ? (
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "#facc15" }} />
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
                        style={{ background: "linear-gradient(135deg,#eab308,#a16207)" }}
                      >
                        <PenLine className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-[.88rem] font-extrabold text-[#efd98a]">Test my knowledge</span>
                      <span className="ml-auto text-[.6rem] font-black uppercase tracking-[.14em] text-[#d9bd6e]">
                        {EBH_EXAM_BANKS[group.id].questions.length} Qs →
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
   Clicking opens that group's full pen-paper window.
   ============================================================ */
function PracticeBand({ onOpenExam }: { onOpenExam: (g: EbhExamGroup) => void }) {
  return (
    <section id="practice" aria-label="Test my knowledge — pen-paper practice" className="relative scroll-mt-20 border-y border-[#ecd9bd] bg-[#fffaf1]/70">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Pen-paper practice</span>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">Test my knowledge</h2>
            <p className="mt-2 max-w-xl text-[.9rem] leading-relaxed text-muted-warm">
              Every chapter group opens its own pen-paper window:{" "}
              <b>name the actor, recall the year, argue the cause</b> — write on
              real paper first, then check against the model answers with instant feedback.
            </p>
          </div>
          <p className="shrink-0 text-[.68rem] font-black uppercase tracking-[.18em] text-[#a16207]">
            {EBH_TOTAL_QUESTIONS} questions · {EBH_EXAM_GROUPS.length} windows
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {EBH_EXAM_GROUPS.map((g) => {
            const bank = EBH_EXAM_BANKS[g];
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
                  style={{ background: "linear-gradient(135deg,#eab308,#a16207)" }}
                >
                  <PenLine className="h-4 w-4" />
                </span>
                <span className="mt-3 text-[.98rem] font-extrabold leading-tight text-[#3e2c1d]">{bank.title}</span>
                <span className="mt-1 text-[.74rem] leading-snug text-muted-warm">{bank.topics}</span>
                <span className="mt-3 text-[.66rem] font-black uppercase tracking-[.16em] text-[#a16207]">
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
   EbhFooter — adapted from the FoC/ATB/FA signature footer, in
   shelf 04's gold.
   ============================================================ */
const EBH_SIG_CHIPS = [
  { icon: BookOpen, label: `${FLAT_ITEMS.length} chapters` },
  { icon: ListChecks, label: `${EBH_TOTAL_QUESTIONS} practice questions` },
  { icon: GraduationCap, label: `${EBH_EXAM_GROUPS.length} pen-paper windows` },
  { icon: MousePointerClick, label: "machines you can poke" },
];

export function EbhFooter() {
  return (
    <footer className="footer-stick relative overflow-hidden">
      {/* hairline that draws itself from the centre */}
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(170,135,60,.4), transparent)" }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* barely-there warm halo behind the signature */}
      <div aria-hidden className="sig-glow" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 py-8 text-center sm:py-10">
        <motion.p
          className="sig-eyebrow text-[.58rem] font-semibold uppercase text-[#a1876a]"
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
            <linearGradient id="ebhSigGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#ca8a04" stopOpacity="0" />
              <stop offset="0.5" stopColor="#ca8a04" />
              <stop offset="1" stopColor="#ca8a04" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M6 12 C 62 4, 118 19, 152 11 C 186 4, 236 17, 294 10"
            stroke="url(#ebhSigGrad)"
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
          <b>Economic &amp; Business History</b> — every lecture of the course, distilled into one
          warm, living page you can read, scrub and argue with.
          <span className="mt-1 block">
            Written for the late-night revision, the last-minute panic, and the quiet joy of a
            cause that finally makes sense.
          </span>
        </motion.p>

        {/* the course — instructor credit, quiet but explicit */}
        <motion.p
          className="mt-3 text-[.78rem] font-semibold text-[#6f5438]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 1.25 }}
        >
          Course: Economic &amp; Business History — Dr. Manu Kanchan · IIT Jodhpur
        </motion.p>

        {/* what's inside — a row of calm stat pills */}
        <div
          role="list"
          aria-label="What this project contains"
          className="mt-4 flex flex-wrap items-center justify-center gap-2"
        >
          {EBH_SIG_CHIPS.map((chip, i) => (
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
          shelf 04 · the atlas — crafted with next.js · react · tailwind — mmxxvi
        </motion.p>
      </div>
    </footer>
  );
}

/* ============================================================
   EbhApp — the composed subject page.
   ============================================================ */
export function EbhApp({ onExitAtlas }: { onExitAtlas: () => void }) {
  const [examGroup, setExamGroup] = useState<EbhExamGroup | null>(null);
  const openExam = (g: EbhExamGroup) => setExamGroup(g);

  return (
    // id="top" — the brand chip links to #top; without a real element here the
    // client-side router swallows the fragment and the page never scrolls back
    <div id="top" className="page-wrap warm-canvas ebh-app">
      <TopNav onOpenExam={openExam} onExitAtlas={onExitAtlas} />
      <main className="pt-14">
        <PartBoundary label="Hero">
          <EbhHero  />
        </PartBoundary>
        <PartBoundary label="PracticeBand">
          <PracticeBand onOpenExam={openExam}  />
        </PartBoundary>
        <PartBoundary label="Economics">
          <EbhEconomicsSection  />
        </PartBoundary>
        <PartBoundary label="Business">
          <EbhBusinessSection  />
        </PartBoundary>
        <PartBoundary label="History">
          <EbhHistorySection  />
        </PartBoundary>
        <PartBoundary label="RulesPlayers">
          <EbhRulesPlayersSection  />
        </PartBoundary>
        <PartBoundary label="LicenseRaj">
          <EbhLicenseRajSection  />
        </PartBoundary>
        <PartBoundary label="Bajaj">
          <EbhBajajSection  />
        </PartBoundary>
        <PartBoundary label="Society">
          <EbhSocietySection  />
        </PartBoundary>
        <PartBoundary label="Weekend">
          <EbhWeekendSection  />
        </PartBoundary>
        <PartBoundary label="BizEconTech">
          <EbhBizEconTechSection  />
        </PartBoundary>
        <PartBoundary label="Agrarian">
          <EbhAgrarianSection  />
        </PartBoundary>
        <PartBoundary label="Guilds">
          <EbhGuildsSection  />
        </PartBoundary>
        <PartBoundary label="Trade">
          <EbhTradeSection  />
        </PartBoundary>
        <PartBoundary label="LifeBefore">
          <EbhLifeBeforeSection  />
        </PartBoundary>
        <PartBoundary label="WhyMachines">
          <EbhWhyMachinesSection  />
        </PartBoundary>
        <PartBoundary label="Textile">
          <EbhTextileSection  />
        </PartBoundary>
        <PartBoundary label="Steam">
          <EbhSteamSection  />
        </PartBoundary>
        <PartBoundary label="Labor">
          <EbhLaborSection  />
        </PartBoundary>
        <PartBoundary label="Empire">
          <EbhEmpireSection  />
        </PartBoundary>
      </main>
      <EbhFooter />
      {examGroup ? <EbhExamWindow group={examGroup} onClose={() => setExamGroup(null)} /> : null}
    </div>
  );
}
