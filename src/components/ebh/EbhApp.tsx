"use client";

/* ============================================================
   EbhApp — "Economic & Business History", shelf 04 of THE ATLAS.

   Mounted by the Atlas router (src/app/page.tsx); `onExitAtlas`
   returns the reader to the Atlas landing page. A LECTURE
   READER: the hero holds the full 34-lecture sequence (mapped
   1:1 to the official deck), each lecture opens with an
   "Economic & Business History Lecture N" band plus a
   clear/not-clear tracker, and all pen-paper practice lives
   behind the "Test my knowledge" hub so the reading surface
   stays clean.

   The sidebar GROUPS derive from the registry (EBH_MODULES +
   EBH_LECTURES) — five modules, ordered by ascending lecture
   number, fifty chapters. There is no sixth module anywhere.
   ============================================================ */

import { PartBoundary } from "@/components/notes/PartBoundary";
import { useDialogA11y } from "@/components/notes/exam-runtime";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenText,
  Check,
  ChevronDown,
  Landmark,
  Map,
  Menu,
  PenLine,
  Printer,
  X,
} from "lucide-react";
import { scrollToId } from "@/lib/utils";
import { useSectionProgress } from "@/lib/use-section-progress";
import { jumpTo, useOpenSection } from "@/lib/use-open-section";
import { loadProgress } from "@/lib/progress";
import { clarityFor, setClarity, type ClarityStatus } from "@/lib/clarity";
import { EbhHero } from "@/components/ebh/EbhHero";
import { EbhCourseMapSection, EbhCourseObjectivesSection, EbhScarcityBranchesSection, EbhFirmProfitMotiveSection } from "@/components/ebh/EbhParts1";
import { EbhCourseArchitectureSection, EbhLensDefinitionsSection, EbhEvidenceSourcesSection, EbhLicenseRajBajajSection, EbhSocietyBusinessSection, EbhBusinessSocietyWeekendSection } from "@/components/ebh/EbhParts2";
import { EbhAgrarianBasicsSection, EbhEconTechRecapSection, EbhFeudalZamindariSection, EbhGuildLadderSection, EbhLifeBeforeMachinesSection } from "@/components/ebh/EbhParts3";
import { EbhShuttleJennySection, EbhQuizOneSchemeSection, EbhAgrarianGuildsSection, EbhTradeRoadsIndustrySection, EbhWaterFrameFactorySection, EbhSteamCottonopolisSection, EbhLaborPhaseOneSection } from "@/components/ebh/EbhParts4";
import { EbhLaborPhaseTwoSection, EbhMachinesRecapLiveSection, EbhEmpireMercantilismSection, EbhLaborPhasesRecapSection, EbhLaborPhaseThreeSection, EbhEconomicSystemsSection, EbhSystemsComparedSection, EbhSocialCulturalImpactSection } from "@/components/ebh/EbhParts5";
import { EbhTaylorScientificSection, EbhIrImpactRecapSection, EbhTaylorismReviewSection, EbhFayolFrameworkSection, EbhLargeCorporationsSection } from "@/components/ebh/EbhParts6";
import { EbhWarsContextSection, EbhWarIndustriesSection, EbhIndiaSuperpowerSection, EbhEicChartersSection, EbhIndianIntermediariesSection, EbhTurningPoint1813Section, EbhManagementEvolutionRecapSection, EbhWarsIndiaRecapSection, EbhColonialCommoditiesSection, EbhAgencyEntrepreneursSection } from "@/components/ebh/EbhParts7";
import { EbhWwiSwadeshiSection, EbhWwiiFamineSection, EbhModule5ReviewColonialSection, EbhAgencyBombayPlanSection, EbhCourseReviewMajorExamSection } from "@/components/ebh/EbhParts8";
import { EbhExamWindow } from "@/components/ebh/EbhExamWindow";
import { EBH_EXAM_BANKS, EBH_EXAM_GROUPS, EBH_TOTAL_QUESTIONS, type EbhExamGroup } from "@/components/ebh/questions";
import { ShelfQuickNav } from "@/components/atlas/ShelfQuickNav";
import {
  EBH_LECTURES, EBH_ALL_CHAPTER_IDS, EBH_DEFAULT_LECTURE, EBH_MODULES,
  lectureById, lectureOfChapter, type EbhLecture,
} from "@/components/ebh/lectures";

/* shelf 04 palette — archive gold & ivory, oxblood for the law */
const BRASS = "#a16207";
const BRASS_BRIGHT = "#eab308";
const UMBER = "#854d0e";
const GOLD_LITE = "#ca8a4a";
const BRONZE = "linear-gradient(165deg,#241708,#33200e 60%,#3a2410)";

/* ============================================================
   Structured chapter map — derived from the registry, so the
   sidebar can never drift from the reading order. Each group
   owns a "Test my knowledge" pen-paper window (questions.ts).
   ============================================================ */
const GROUPS: {
  id: EbhExamGroup;
  label: string;
  items: { id: string; label: string; desc: string }[];
}[] = EBH_MODULES.map((m) => ({
  id: m.id as EbhExamGroup,
  label: m.label,
  items: EBH_LECTURES.filter((l) => l.group === m.id).flatMap((l) =>
    l.chapters.map((c) => ({ id: c.id, label: c.label, desc: c.desc }))
  ),
}));

const FLAT_ITEMS = GROUPS.flatMap((g) => g.items);

function groupOf(id: string): string | null {
  for (const g of GROUPS) if (g.items.some((i) => i.id === id)) return g.id;
  return null;
}

/* ============================================================
   The chapter components, keyed by section id — the lecture
   reader renders exactly the slice the chosen lecture owns.
   Fifty chapters; an unknown id renders nothing and the audit
   gate fails the build rather than emitting a fallback.
   ============================================================ */
const SECTION_COMPONENTS: Record<string, React.ReactNode> = {
  "course-map": <EbhCourseMapSection />,
  "course-objectives": <EbhCourseObjectivesSection />,
  "scarcity-branches": <EbhScarcityBranchesSection />,
  "firm-profit-motive": <EbhFirmProfitMotiveSection />,
  "course-architecture": <EbhCourseArchitectureSection />,
  "lens-definitions": <EbhLensDefinitionsSection />,
  "evidence-sources": <EbhEvidenceSourcesSection />,
  "license-raj-bajaj": <EbhLicenseRajBajajSection />,
  "society-business": <EbhSocietyBusinessSection />,
  "business-society-weekend": <EbhBusinessSocietyWeekendSection />,
  "agrarian-basics": <EbhAgrarianBasicsSection />,
  "econ-tech-recap": <EbhEconTechRecapSection />,
  "feudal-zamindari": <EbhFeudalZamindariSection />,
  "guild-ladder": <EbhGuildLadderSection />,
  "life-before-machines": <EbhLifeBeforeMachinesSection />,
  "shuttle-jenny": <EbhShuttleJennySection />,
  "quiz-one-scheme": <EbhQuizOneSchemeSection />,
  "agrarian-guilds": <EbhAgrarianGuildsSection />,
  "trade-roads-industry": <EbhTradeRoadsIndustrySection />,
  "water-frame-factory": <EbhWaterFrameFactorySection />,
  "steam-cottonopolis": <EbhSteamCottonopolisSection />,
  "labor-phase-one": <EbhLaborPhaseOneSection />,
  "labor-phase-two": <EbhLaborPhaseTwoSection />,
  "machines-recap-live": <EbhMachinesRecapLiveSection />,
  "empire-mercantilism": <EbhEmpireMercantilismSection />,
  "labor-phases-recap": <EbhLaborPhasesRecapSection />,
  "labor-phase-three": <EbhLaborPhaseThreeSection />,
  "economic-systems": <EbhEconomicSystemsSection />,
  "systems-compared": <EbhSystemsComparedSection />,
  "social-cultural-impact": <EbhSocialCulturalImpactSection />,
  "taylor-scientific": <EbhTaylorScientificSection />,
  "ir-impact-recap": <EbhIrImpactRecapSection />,
  "taylorism-review": <EbhTaylorismReviewSection />,
  "fayol-framework": <EbhFayolFrameworkSection />,
  "large-corporations": <EbhLargeCorporationsSection />,
  "wars-context": <EbhWarsContextSection />,
  "war-industries": <EbhWarIndustriesSection />,
  "india-superpower": <EbhIndiaSuperpowerSection />,
  "eic-charters": <EbhEicChartersSection />,
  "indian-intermediaries": <EbhIndianIntermediariesSection />,
  "turning-point-1813": <EbhTurningPoint1813Section />,
  "management-evolution-recap": <EbhManagementEvolutionRecapSection />,
  "wars-india-recap": <EbhWarsIndiaRecapSection />,
  "colonial-commodities": <EbhColonialCommoditiesSection />,
  "agency-entrepreneurs": <EbhAgencyEntrepreneursSection />,
  "wwi-swadeshi": <EbhWwiSwadeshiSection />,
  "wwii-famine": <EbhWwiiFamineSection />,
  "module5-review-colonial": <EbhModule5ReviewColonialSection />,
  "agency-bombay-plan": <EbhAgencyBombayPlanSection />,
  "course-review-major-exam": <EbhCourseReviewMajorExamSection />,
};

/* ============================================================
   useSeenDisplay — the read-checkmark data for every menu.
   Marking is per-lecture; display spans the whole shelf.
   ============================================================ */
function useSeenDisplay(lecture: EbhLecture): ReadonlySet<string> {
  const ids = useMemo(() => lecture.chapters.map((c) => c.id), [lecture]);
  const live = useSectionProgress("ebh", ids);
  const persisted = useMemo(() => {
    try {
      return new Set(Object.keys(loadProgress().ebh ?? {}));
    } catch {
      return new Set<string>();
    }
  }, []);
  return useMemo(() => new Set<string>([...persisted, ...live]), [persisted, live]);
}

/* ============================================================
   TopNav — structured chapter menu + a "Test my knowledge"
   launcher inside every chapter group. Same engine as the
   FoC/ATB/FA shelves: progress bar written via ref inside rAF,
   React state only when the active section changes. Every
   chapter link jumps through onJumpChapter so cross-lecture
   hops switch the lecture first.
   ============================================================ */
function TopNav({
  onOpenExam,
  onExitAtlas,
  onJumpChapter,
  seen,
}: {
  onOpenExam: (g: EbhExamGroup) => void;
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
            className="relative flex h-10 shrink-0 items-center gap-1.5 rounded-full after:absolute after:-inset-y-0.5 after:-inset-x-1 after:rounded-full after:content-[''] border border-white/70 bg-white/60 px-3 text-[.64rem] font-extrabold uppercase tracking-[.14em] text-[#8a7440] shadow-[0_4px_16px_-8px_rgba(70,42,15,.35)] backdrop-blur-md transition-colors duration-200 hover:bg-white/85 hover:text-[#a16207]"
          >
            <Map className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Atlas</span>
          </button>

          {/* brand — EBH's gold sigil on the quiet glass chip */}
          <button type="button" aria-label="Scroll back to the top of these notes" onClick={() => scrollToId("top")} className="relative flex h-10 shrink-0 items-center gap-2 rounded-full border border-white/70 bg-white/60 pl-2 pr-3.5 after:absolute after:-inset-y-0.5 after:-inset-x-1 after:rounded-full after:content-[''] shadow-[0_4px_16px_-8px_rgba(70,42,15,.35)] backdrop-blur-md transition-colors duration-200 hover:bg-white/80 cursor-pointer">
            <span
              className="flex h-6 w-6 items-center justify-center rounded-full text-white"
              style={{ background: `linear-gradient(135deg,${BRASS_BRIGHT},${BRASS})`, boxShadow: "0 4px 10px -3px rgba(161,98,7,.55)" }}
            >
              <Landmark className="h-3.5 w-3.5" />
            </span>
            <span className="hidden min-[380px]:inline text-sm font-black tracking-tight text-[#3e2c1d]">EBH Notes</span>
          </button>

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
                                onClick={(e) => {
                                  e.preventDefault();
                                  setOpenGroup(null);
                                  onJumpChapter(item.id);
                                }}
                                className={`flex items-start gap-2.5 rounded-xl px-3 py-2 transition-colors duration-150 ${
                                  isActiveItem ? "bg-[#eab308]/14 text-[#854d0e]" : "text-[#54432c] hover:bg-white/85"
                                }`}
                              >
                                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/70 text-[.55rem] font-black text-[#a16207] shadow-sm">
                                  {seen.has(item.id) ? <Check className="h-2.5 w-2.5 text-[#6f9b3f]" /> : i + 1}
                                </span>
                                <span className="min-w-0">
                                  <span className="block truncate text-[.82rem] font-bold leading-tight">{item.label}</span>
                                  <span className="mt-0.5 block truncate text-[.68rem] leading-snug text-[#8a7440]">{item.desc}</span>
                                </span>
                              </a>
                            );
                          })}
                          <button
                            type="button"
                            onClick={() => {
                              setOpenGroup(null);
                              onOpenExam(group.id as EbhExamGroup);
                            }}
                            className="mt-1 flex w-full items-center gap-2 rounded-xl px-3 py-2 text-[.72rem] font-extrabold uppercase tracking-[.14em] text-[#854d0e] transition-colors hover:bg-[#eab308]/14"
                          >
                            <PenLine className="h-3.5 w-3.5" />
                            Test my knowledge
                          </button>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* mobile — the full structured menu behind one button */}
          <button
            type="button"
            className="ml-auto flex h-10 items-center gap-1.5 rounded-full border border-white/70 bg-white/60 px-3 text-[#6b563d] shadow-sm backdrop-blur-md transition-colors hover:bg-white/85 lg:hidden"
            aria-label="Open the chapter menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-4 w-4" />
            <span className="text-[.66rem] font-extrabold uppercase tracking-[.14em]">Chapters</span>
          </button>
        </div>

        {/* reading progress */}
        <div className="h-[2px] w-full bg-transparent">
          <div ref={progressRef} className="h-full rounded-r-full" style={{ width: "0%", background: `linear-gradient(90deg,${BRASS_BRIGHT},${BRASS})` }} />
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            ref={mobileRef}
            tabIndex={-1}
            key="ebh-mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16 }}
            className="fixed inset-0 z-[70] overflow-y-auto bg-[#faf7ef]/97 outline-none backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label="Chapter menu"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#e8e0cd] bg-[#faf7ef]/95 px-4 py-3">
              <p className="text-[.62rem] font-extrabold uppercase tracking-[.22em] text-[#a99758]">Economic &amp; Business History — chapters</p>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close the chapter menu"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#e8e0cd] bg-white/70 text-[#6b563d]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mx-auto max-w-2xl px-4 pb-24 pt-4">
              {GROUPS.map((group) => (
                <div key={group.id} className="mt-5 first:mt-0">
                  <p className="flex items-center gap-2 text-[.6rem] font-extrabold uppercase tracking-[.2em] text-[#a99758]">
                    <BookOpenText className="h-3 w-3" />
                    {group.label}
                    <span className="ml-auto font-mono opacity-90">{group.items.length}</span>
                  </p>
                  <div className="mt-2 grid gap-1.5">
                    {group.items.map((item, i) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setMobileOpen(false);
                          onJumpChapter(item.id);
                        }}
                        className={`flex items-start gap-2.5 rounded-xl border px-3 py-2.5 transition-colors ${
                          active === item.id ? "border-[#a16207]/40 bg-[#eab308]/10" : "border-[#e8e0cd] bg-white/60"
                        }`}
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f2ecd9] text-[.6rem] font-black text-[#a16207]">
                          {seen.has(item.id) ? <Check className="h-3 w-3 text-[#6f9b3f]" /> : i + 1}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[.86rem] font-bold leading-tight text-[#3e2c1d]">{item.label}</span>
                          <span className="mt-0.5 block text-[.7rem] leading-snug text-[#8a7440]">{item.desc}</span>
                        </span>
                      </a>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileOpen(false);
                      onOpenExam(group.id as EbhExamGroup);
                    }}
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-[#e0cb84] bg-[#fdfae9] px-3 py-2.5 text-[.72rem] font-extrabold uppercase tracking-[.14em] text-[#854d0e]"
                  >
                    <PenLine className="h-3.5 w-3.5" />
                    Test my knowledge — {group.label}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}

/* ============================================================
   PracticeHub — the pen-paper practice launcher (migrated).
   ============================================================ */
function PracticeHub({
  open,
  onClose,
  onOpenExam,
}: {
  open: boolean;
  onClose: () => void;
  onOpenExam: (g: EbhExamGroup) => void;
}) {
  const hubRef = useDialogA11y<HTMLDivElement>(open);

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
            background: "rgba(24,15,4,.8)",
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
              background: BRONZE,
              boxShadow: "0 48px 140px -32px rgba(0,0,0,.65)",
            }}
          >
            {/* header */}
            <div className="flex items-start justify-between gap-4 px-6 pt-6 sm:px-8">
              <div>
                <p className="flex items-center gap-2 text-[.6rem] font-extrabold uppercase tracking-[.24em] text-[#d9bd6e]">
                  <span className="h-px w-5" style={{ background: `linear-gradient(90deg,${BRASS_BRIGHT},transparent)` }} />
                  Pen-paper practice
                </p>
                <h2 className="mt-1.5 text-2xl font-black tracking-tight text-[#f5ecd2] sm:text-3xl">Test my knowledge</h2>
                <p className="mt-2 max-w-2xl text-[.88rem] leading-relaxed text-[#d9c9a3]">
                  Every chapter group opens its own exam window: name the actor, recall the year,
                  argue the cause — write on real paper first, then mark yourself against the model
                  answers with instant checking.
                </p>
                <p className="mt-2 text-[.64rem] font-black uppercase tracking-[.18em] text-[#b39a6b]">
                  {EBH_TOTAL_QUESTIONS} questions · {EBH_EXAM_GROUPS.length} windows
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close the practice hub"
                className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#f5ecd2] transition-colors hover:bg-white/20"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* the five exam windows */}
            <div className="grid gap-3 px-6 pb-7 pt-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
              {EBH_EXAM_GROUPS.map((g) => {
                const bank = EBH_EXAM_BANKS[g];
                return (
                  <button
                    key={g}
                    type="button"
                    onClick={() => onOpenExam(g)}
                    className="group flex flex-col items-start rounded-2xl border border-white/10 bg-white/[.05] p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[.09]"
                    aria-label={`Open the exam window — ${bank.title}`}
                  >
                    <span
                      className="relative flex h-10 w-10 items-center justify-center rounded-xl after:absolute after:-inset-1 after:rounded-xl after:content-[''] text-white shadow-md"
                      style={{ background: `linear-gradient(135deg,${BRASS_BRIGHT},${BRASS})` }}
                    >
                      <PenLine className="h-4 w-4" />
                    </span>
                    <span className="mt-3 text-[.98rem] font-extrabold leading-tight text-[#efd98a]">{bank.title}</span>
                    <span className="mt-1 text-[.76rem] leading-snug text-[#d9c9a3]">{bank.topics}</span>
                    <span className="mt-3 text-[.66rem] font-black uppercase tracking-[.16em] text-[#d9bd6e] transition-colors group-hover:text-[#efd98a]">
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
   ClarityToggle — the per-lecture "is this clear?" instrument.
   Three states: unmarked → clear (✓) or not-clear-yet (still
   fuzzy). Persisted in localStorage via lib/clarity.
   ============================================================ */
function ClarityToggle({
  status,
  onChange,
}: {
  status: ClarityStatus | undefined;
  onChange: (next: ClarityStatus | undefined) => void;
}) {
  const isClear = status === "clear";
  const isUnclear = status === "unclear";
  const cycle = () => {
    if (!status) onChange("clear");
    else if (status === "clear") onChange("unclear");
    else onChange(undefined);
  };
  return (
    <button
      type="button"
      onClick={cycle}
      aria-pressed={isClear ? "true" : isUnclear ? "mixed" : "false"}
      title={
        isClear
          ? "Marked clear — tap to switch to “not clear yet”"
          : isUnclear
          ? "Marked not-clear-yet — tap to unmark"
          : "Is this lecture clear? Tap to mark it clear"
      }
      className="flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-1.5 text-[.64rem] font-extrabold uppercase tracking-[.12em] transition-all duration-200"
      style={
        isClear
          ? { borderColor: "rgba(143,174,93,.5)", background: "rgba(143,174,93,.16)", color: "#b6d98a" }
          : isUnclear
          ? { borderColor: "rgba(234,164,124,.5)", background: "rgba(234,164,124,.14)", color: "#f0bd94" }
          : { borderColor: "rgba(255,255,255,.18)", background: "rgba(255,255,255,.07)", color: "#e9d7bf" }
      }
    >
      <motion.span
        key={status ?? "none"}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 340, damping: 18 }}
        className="flex h-4 w-4 items-center justify-center rounded-full"
        style={{ background: isClear ? "#8fae5d" : isUnclear ? "#e0a274" : "rgba(255,255,255,.14)" }}
      >
        {isClear ? <Check className="h-2.5 w-2.5 text-[#1c1403]" /> : isUnclear ? <span className="text-[.55rem] font-black text-[#1c1403]">?</span> : null}
      </motion.span>
      {isClear ? "Lecture clear" : isUnclear ? "Not clear yet" : "Mark clear?"}
    </button>
  );
}

/* ============================================================
   EbhLectureHead — the "Economic & Business History Lecture N"
   hero band. Compact: the number, the name, the clarity
   tracker, the chapter jumps.
   ============================================================ */
function EbhLectureHead({
  lecture,
  clarity,
  onClarity,
}: {
  lecture: EbhLecture;
  clarity: ClarityStatus | undefined;
  onClarity: (next: ClarityStatus | undefined) => void;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
      <div
        className="relative overflow-hidden rounded-2xl p-4 sm:p-5"
        style={{ background: BRONZE, boxShadow: "0 20px 50px -26px rgba(36,23,8,.5)" }}
      >
        {/* ambient rings */}
        <svg aria-hidden viewBox="0 0 600 200" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full opacity-40">
          {[70, 120, 170].map((r, i) => (
            <motion.circle
              key={r} cx={540} cy={100} r={r} fill="none" stroke={i === 2 ? GOLD_LITE : BRASS_BRIGHT} strokeWidth={1.4}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
              animate={{ opacity: [0.12, 0.4, 0.12], scale: [1, 1.05, 1] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: i * 0.8 }}
            />
          ))}
        </svg>

        <div className="relative">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="flex flex-wrap items-center gap-1.5 text-[.56rem] font-extrabold uppercase tracking-[.22em] text-[#d9bd6e]">
              <Landmark className="h-3 w-3" style={{ color: BRASS_BRIGHT }} />
              Economic &amp; Business History · Lecture {lecture.n} of {EBH_LECTURES.length}
            </p>
            <ClarityToggle status={clarity} onChange={onClarity} />
          </div>
          <h2 className="mt-1 text-xl font-black leading-tight text-[#f5ecd2] sm:text-2xl">
            Lecture {lecture.n}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(120deg,#facc15,#ca8a4a)" }}
            >
              {" "}· {lecture.title}
            </span>
          </h2>
          {lecture.chapters.length > 0 ? (
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {lecture.chapters.map((c) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(c.id);
                    if (el) jumpTo(el);
                  }}
                  className="rounded-full border border-white/15 bg-white/[.07] px-2.5 py-1 text-[.62rem] font-extrabold text-[#e9d7bf] transition-colors hover:border-[#eab308]/40 hover:bg-white/[.12] hover:text-[#efd98a]"
                >
                  {c.label} ↓
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   LecturePager — prev/next lecture cards closing every lecture.
   ============================================================ */
function LecturePager({ current, onJump }: { current: EbhLecture; onJump: (id: string) => void }) {
  const idx = EBH_LECTURES.findIndex((l) => l.id === current.id);
  const prev = idx > 0 ? EBH_LECTURES[idx - 1] : null;
  const next = idx < EBH_LECTURES.length - 1 ? EBH_LECTURES[idx + 1] : null;

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
            <ArrowLeft className="h-4 w-4 shrink-0 text-[#a16207] transition-transform duration-200 group-hover:-translate-x-1" />
            <span className="min-w-0">
              <span className="block text-[.6rem] font-extrabold uppercase tracking-[.18em] text-[#a99758]">
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
              <span className="block text-[.6rem] font-extrabold uppercase tracking-[.18em] text-[#a99758]">
                Next · {next.code}
              </span>
              <span className="mt-0.5 block truncate text-[.92rem] font-extrabold text-[#3e2c1d]">{next.title}</span>
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 text-[#a16207] transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        ) : (
          <span className="rounded-2xl border border-dashed border-[#e0cb84] p-4 text-center text-[.78rem] font-bold leading-snug text-[#a1876a]">
            End of the sequence — Lecture {EBH_LECTURES.length} closes the deck. Revise the rules and the players,
            then retake the windows.
          </span>
        )}
      </div>
    </nav>
  );
}


/* ============================================================
   EbhApp — the composed subject page: a lecture reader.
   ============================================================ */
export function EbhApp({ onExitAtlas }: { onExitAtlas: () => void }) {
  const [lectureId, setLectureId] = useState<string>(EBH_DEFAULT_LECTURE);
  const [examGroup, setExamGroup] = useState<EbhExamGroup | null>(null);
  const [hubOpen, setHubOpen] = useState(false);
  const [clarityMap, setClarityMap] = useState<Record<string, ClarityStatus>>({});
  const lectureIdRef = useRef(lectureId);
  useEffect(() => {
    lectureIdRef.current = lectureId;
  }, [lectureId]);

  const lecture = lectureById(lectureId) ?? EBH_LECTURES[0];
  const seen = useSeenDisplay(lecture);

  /* clarity — per-lecture clear / not-clear marks (localStorage) */
  useEffect(() => {
    setClarityMap(clarityFor("ebh"));
  }, []);
  const lectureClarity = clarityMap[lecture.id];
  const changeClarity = useCallback((next: ClarityStatus | undefined) => {
    setClarity("ebh", lectureIdRef.current, next);
    setClarityMap(clarityFor("ebh"));
  }, []);

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

  useOpenSection("ebh", goToChapter);

  const openExam = useCallback((g: EbhExamGroup) => setExamGroup(g), []);
  const openHub = useCallback(() => setHubOpen(true), []);

  return (
    // id="top" — the brand chip links to #top; without a real element here the
    // client-side router swallows the fragment and the page never scrolls back
    <div id="top" className="page-wrap warm-canvas ebh-app">
      <TopNav onOpenExam={openExam} onExitAtlas={onExitAtlas} onJumpChapter={goToChapter} seen={seen} />
      <main className="pt-14">
        <PartBoundary label="Hero">
          <EbhHero
            activeId={lectureId}
            onSelect={selectLecture}
            onPractice={openHub}
            seen={seen}
            clarity={clarityMap}
          />
        </PartBoundary>

        {/* the notes start here */}
        <div id="notes-top" aria-hidden className="relative scroll-mt-16" />

        <PartBoundary key={lecture.id} label={`Lecture ${lecture.code} — ${lecture.title}`}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <EbhLectureHead lecture={lecture} clarity={lectureClarity} onClarity={changeClarity} />
            {lecture.chapters.map((c) => (
              <PartBoundary key={c.id} label={c.label}>
                {SECTION_COMPONENTS[c.id]}
              </PartBoundary>
            ))}
            <LecturePager current={lecture} onJump={selectLecture} />
          </motion.div>
        </PartBoundary>
      </main>
      <PracticeHub open={hubOpen} onClose={() => setHubOpen(false)} onOpenExam={openExam} />
      {examGroup ? <EbhExamWindow group={examGroup} onClose={() => setExamGroup(null)} /> : null}
    </div>
  );
}
