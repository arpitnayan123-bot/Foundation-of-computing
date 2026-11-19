"use client";

/* ============================================================
   MktgApp — "Principles of Marketing", shelf 06 of THE ATLAS.

   Mounted by the Atlas router (src/app/page.tsx); `onExitAtlas`
   returns the reader to the Atlas landing page. A LECTURE
   READER: the hero holds the 40-lecture sequence, the top nav
   groups it into the six teaching arcs, and all pen-paper
   practice lives behind the "Test my knowledge" hub so the
   reading surface stays clean.

   Sequence: official L01–L40 · six arcs · L22 and L39 render
   removal cards (numbering preserved). Palette: teal #0f766e ·
   brass #a97d2c · gold #e3c26b · ink #1f2b2b · paper #f2efe7 ·
   wine #9f3d54 (reserved lectures & authoring notes only).
   ============================================================ */

import { PartBoundary } from "@/components/notes/PartBoundary";
import { useDialogA11y } from "@/components/notes/exam-runtime";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  BookOpenText,
  Check,
  ChevronDown,
  Map,
  Megaphone,
  Menu,
  PenLine,
  Printer,
  X,
} from "lucide-react";
import { scrollToId } from "@/lib/utils";
import { useSectionProgress } from "@/lib/use-section-progress";
import { jumpTo, useOpenSection } from "@/lib/use-open-section";
import { loadProgress } from "@/lib/progress";
import { MktgHero } from "@/components/mktg/MktgHero";
import {
  MktgWhySection, MktgAnticipationSection, MktgToplineSection, MktgVsSellingSection,
  MktgDefinitionsSection, MktgSystemSection, MktgMarketableSection, MktgNwdSection,
  MktgDemandStatesSection, MktgClosedSystemSection, MktgBizValueSection, MktgChaiSection,
  MktgCpvSection,
} from "@/components/mktg/MktgParts1";
import {
  MktgEnvironmentSection, MktgExchangeSection, MktgValuePriceSection, MktgLuxurySection,
  MktgEsDsSection, MktgChainSection, MktgContextSection, MktgLoyaltyEconSection,
  MktgCampaignsSection, MktgBeyondSection, MktgHeteroSection, MktgBasesSection,
  MktgBehavioralSection,
} from "@/components/mktg/MktgParts2";
import {
  MktgTupoSection, MktgSafeSection, MktgPos3qSection, MktgAccorSection, MktgFrameSection,
  MktgLevelsSection, MktgEvolutionSection, MktgCirclesSection, MktgPopPodCasesSection,
  MktgWhyBuySection, MktgErasSection, MktgStagesSection, MktgMessySection,
} from "@/components/mktg/MktgParts3";
import {
  MktgVariationsSection, MktgAutopsySection, MktgTouchpointsSection,
  MktgMotivationSection, MktgTheoryMatchSection, MktgBrandPerceptionSection, MktgAlmondsSection,
  MktgSensorySection, MktgGestaltSection, MktgBucketsSection, MktgRetentionSection,
  MktgAbcSection, MktgBiasSection, MktgReserved22Section,
} from "@/components/mktg/MktgParts4";
import {
  MktgProductValueSection, MktgProductLevelsSection, MktgNetflixLevelsSection,
  MktgProductMixSection, MktgPortfolioBasicsSection, MktgWdlSection, MktgPortfolioPruningSection,
} from "@/components/mktg/MktgParts5";
import {
  MktgLineExtensionsSection, MktgStretchingSection, MktgStretchConsistencySection,
  MktgThreeStrategiesSection, MktgNarrativeBucketsSection, MktgAbcNarrativesSection,
} from "@/components/mktg/MktgParts6";
import {
  MktgTriadSection, MktgCoBrandSection, MktgPricing3cSection, MktgPricingStepsSection,
  MktgPricingTypesSection, MktgPricingEffectivenessSection, MktgAttentionSection,
  MktgThreeCsSection, MktgDualProcessSection,
} from "@/components/mktg/MktgParts7";
import { MktgReserved39Section, MktgThreeCsFinalSection, MktgExamGuidelinesSection } from "@/components/mktg/MktgParts8";
import { MktgExamWindow } from "@/components/mktg/MktgExamWindow";
import { MKTG_EXAM_BANKS, MKTG_EXAM_GROUPS, MKTG_TOTAL_QUESTIONS, type MktgExamGroup } from "@/components/mktg/questions";
import { ShelfQuickNav } from "@/components/atlas/ShelfQuickNav";
import {
  MKTG_LECTURES, MKTG_ALL_CHAPTER_IDS, MKTG_DEFAULT_LECTURE, MKTG_PARTS, MKTG_PART_BANKS,
  lectureById, lectureOfChapter, lecturesOfPart, partOfLecture, type MktgLecture,
} from "@/components/mktg/lectures";

/* shelf 06 palette — teal · brass · gold · ink · paper · wine */
const TEAL = "#0f766e";
const TEAL_TINT = "rgba(15,118,110,.8)"; // the "bright" end — a tint of the anchor teal
const BRASS = "#a97d2c";
const GOLD = "#e3c26b";
const INK = "#1f2b2b";
const PAPER = "#f2efe7";
const WINE = "#9f3d54";
const LAGOON = "linear-gradient(165deg,#171f1e 0%,#1f2b2b 58%,#17211f 100%)";
const TEAL_GRAD = "linear-gradient(135deg,rgba(15,118,110,.82),#0f766e)";
const GOLD_GRAD = "linear-gradient(135deg,#e3c26b,#a97d2c)";

const FLAT_ITEMS = MKTG_ALL_CHAPTER_IDS;

function partIdOfChapter(chapterId: string): string | null {
  const lecture = lectureOfChapter(chapterId);
  if (!lecture) return null;
  return partOfLecture(lecture.n)?.id ?? null;
}

/* ============================================================
   The chapter components, keyed by section id — the lecture
   reader renders exactly the slice the chosen lecture owns.
   76 entries: L01–L21 (30) + reserved-22 + L23–L28 (11) +
   L29–L38 authored (22) + reserved-39 + L40 (2).
   ============================================================ */
const SECTION_COMPONENTS: Record<string, React.ReactNode> = {
  "why-mktg": <MktgWhySection />,
  anticipation: <MktgAnticipationSection />,
  topline: <MktgToplineSection />,
  "mktg-vs-selling": <MktgVsSellingSection />,
  definitions: <MktgDefinitionsSection />,
  "mktg-system": <MktgSystemSection />,
  marketable: <MktgMarketableSection />,
  "need-want-demand": <MktgNwdSection />,
  "demand-states": <MktgDemandStatesSection />,
  "closed-system": <MktgClosedSystemSection />,
  "biz-value": <MktgBizValueSection />,
  "chai-value": <MktgChaiSection />,
  "cpv-formula": <MktgCpvSection />,
  environment: <MktgEnvironmentSection />,
  "exchange-system": <MktgExchangeSection />,
  "value-price-features": <MktgValuePriceSection />,
  "luxury-lever": <MktgLuxurySection />,
  "es-ds": <MktgEsDsSection />,
  "purchase-chain": <MktgChainSection />,
  "context-matters": <MktgContextSection />,
  "loyalty-econ": <MktgLoyaltyEconSection />,
  "campaigns-esds": <MktgCampaignsSection />,
  "beyond-purchase": <MktgBeyondSection />,
  heterogeneity: <MktgHeteroSection />,
  bases: <MktgBasesSection />,
  "behavioral-benefit": <MktgBehavioralSection />,
  "tupo-case": <MktgTupoSection />,
  "safe-targeting": <MktgSafeSection />,
  "pos-3q": <MktgPos3qSection />,
  "accor-map": <MktgAccorSection />,
  "frame-podspops": <MktgFrameSection />,
  "four-levels": <MktgLevelsSection />,
  "pop-pod-evolution": <MktgEvolutionSection />,
  "three-circles": <MktgCirclesSection />,
  "pod-pop-cases": <MktgPopPodCasesSection />,
  "why-buy": <MktgWhyBuySection />,
  "eras-nudges": <MktgErasSection />,
  "five-stages": <MktgStagesSection />,
  "messy-middle": <MktgMessySection />,
  "journey-variations": <MktgVariationsSection />,
  "autopsy-purchase": <MktgAutopsySection />,
  "touchpoints-framework": <MktgTouchpointsSection />,
  "reserved-22": <MktgReserved22Section />,
  "motivation-theories": <MktgMotivationSection />,
  "theory-match": <MktgTheoryMatchSection />,
  "brand-perception": <MktgBrandPerceptionSection />,
  "almonds-price": <MktgAlmondsSection />,
  "sensory-stages": <MktgSensorySection />,
  "gestalt-lab": <MktgGestaltSection />,
  "attitude-buckets": <MktgBucketsSection />,
  "retention-acquisition": <MktgRetentionSection />,
  "abc-humanization": <MktgAbcSection />,
  "bias-lab": <MktgBiasSection />,
  "product-value-experience": <MktgProductValueSection />,
  "product-levels": <MktgProductLevelsSection />,
  "netflix-product-levels": <MktgNetflixLevelsSection />,
  "product-mix-wdl": <MktgProductMixSection />,
  "portfolio-basics": <MktgPortfolioBasicsSection />,
  "width-depth-length": <MktgWdlSection />,
  "portfolio-pruning": <MktgPortfolioPruningSection />,
  "line-extensions": <MktgLineExtensionsSection />,
  "market-stretching": <MktgStretchingSection />,
  "stretch-consistency": <MktgStretchConsistencySection />,
  "three-strategies": <MktgThreeStrategiesSection />,
  "narrative-buckets": <MktgNarrativeBucketsSection />,
  "abc-narratives": <MktgAbcNarrativesSection />,
  "product-strategy-triad": <MktgTriadSection />,
  "co-branding": <MktgCoBrandSection />,
  "pricing-3c": <MktgPricing3cSection />,
  "pricing-steps": <MktgPricingStepsSection />,
  "pricing-strategy-types": <MktgPricingTypesSection />,
  "pricing-effectiveness": <MktgPricingEffectivenessSection />,
  "attention-filter": <MktgAttentionSection />,
  "three-cs-marcom": <MktgThreeCsSection />,
  "dual-process": <MktgDualProcessSection />,
  "reserved-39": <MktgReserved39Section />,
  "three-cs-final": <MktgThreeCsFinalSection />,
  "exam-guidelines": <MktgExamGuidelinesSection />,
};

/* ============================================================
   useSeenDisplay — the read-checkmark data for every menu.
   Marking is per-lecture; display spans the whole shelf.
   ============================================================ */
function useSeenDisplay(lecture: MktgLecture): ReadonlySet<string> {
  const ids = useMemo(() => lecture.chapters.map((c) => c.id), [lecture]);
  const live = useSectionProgress("mktg", ids);
  const persisted = useMemo(() => {
    try {
      return new Set(Object.keys(loadProgress().mktg ?? {}));
    } catch {
      return new Set<string>();
    }
  }, []);
  return useMemo(() => new Set<string>([...persisted, ...live]), [persisted, live]);
}

/* ============================================================
   TopNav — the six teaching arcs + a "Test my knowledge"
   bank row inside every arc.
   ============================================================ */
function TopNav({
  onOpenExam,
  onExitAtlas,
  onJumpChapter,
  onSelectLecture,
  seen,
}: {
  onOpenExam: (g: MktgExamGroup) => void;
  onExitAtlas: () => void;
  onJumpChapter: (chapterId: string) => void;
  onSelectLecture: (lectureId: string) => void;
  seen: ReadonlySet<string>;
}) {
  const [active, setActive] = useState<string>("");
  const [openPart, setOpenPart] = useState<string | null>(null);
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
        const el = document.getElementById(item);
        if (el && el.getBoundingClientRect().top <= probe) current = item;
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
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenPart(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenPart(null);
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

  const activePart = active ? partIdOfChapter(active) : null;
  const lectureSeen = (l: MktgLecture) => l.chapters.length > 0 && l.chapters.every((c) => seen.has(c.id));

  return (
    <nav ref={navRef} aria-label="Teaching arcs" className="fixed inset-x-0 top-0 z-50">
      <div className="nav-shell">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-2 px-3 sm:px-5">
          {/* back to The Atlas */}
          <button
            type="button"
            onClick={onExitAtlas}
            title="Back to The Atlas — the subject shelf"
            aria-label="Back to The Atlas"
            className="relative flex h-10 shrink-0 items-center gap-1.5 rounded-full after:absolute after:-inset-y-0.5 after:-inset-x-1 after:rounded-full after:content-[''] border border-white/70 bg-white/60 px-3 text-[.64rem] font-extrabold uppercase tracking-[.14em] text-[#4d6b66] shadow-[0_4px_16px_-8px_rgba(15,50,48,.35)] backdrop-blur-md transition-colors duration-200 hover:bg-white/85 hover:text-[#0f766e]"
          >
            <Map className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Atlas</span>
          </button>

          {/* brand */}
          <button type="button" aria-label="Scroll back to the top of these notes" onClick={() => scrollToId("top")} className="relative flex h-10 shrink-0 items-center gap-2 rounded-full border border-white/70 bg-white/60 pl-2 pr-3.5 after:absolute after:-inset-y-0.5 after:-inset-x-1 after:rounded-full after:content-[''] shadow-[0_4px_16px_-8px_rgba(15,50,48,.35)] backdrop-blur-md transition-colors duration-200 hover:bg-white/80 cursor-pointer">
            <span
              className="flex h-6 w-6 items-center justify-center rounded-full text-white"
              style={{ background: TEAL_GRAD, boxShadow: "0 4px 10px -3px rgba(15,118,110,.55)" }}
            >
              <Megaphone className="h-3.5 w-3.5" />
            </span>
            <span className="hidden min-[380px]:inline text-sm font-black tracking-tight text-[#1f2b2b]">MKTG Notes</span>
          </button>

          {/* desktop — the six teaching arcs */}
          <div className="ml-2 hidden flex-1 items-center gap-1 lg:flex">
            {MKTG_PARTS.map((part) => {
              const isActive = activePart === part.id;
              const open = openPart === part.id;
              const lecs = lecturesOfPart(part);
              return (
                <div
                  key={part.id}
                  className="relative"
                  onMouseEnter={() => setOpenPart(part.id)}
                  onMouseLeave={() => setOpenPart((p) => (p === part.id ? null : p))}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-haspopup="true"
                    onClick={() => setOpenPart(part.id)}
                    onFocus={() => setOpenPart(part.id)}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[.76rem] font-semibold tracking-wide transition-all duration-200 xl:px-3.5 ${
                      isActive || open
                        ? "bg-white/80 text-[#0f766e] shadow-[0_4px_16px_-8px_rgba(15,50,48,.4),inset_0_1px_0_rgba(255,255,255,.9)]"
                        : "text-[#5f7472] hover:bg-white/55 hover:text-[#1f2b2b] hover:shadow-[inset_0_1px_0_rgba(255,255,255,.9)]"
                    }`}
                  >
                    {part.label.replace(/^Part [IVX]+ · /, "")}
                    <span className="text-[.58rem] font-extrabold opacity-45">{lecs.length}</span>
                    <ChevronDown className={`h-3 w-3 opacity-50 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {open ? (
                      <motion.div
                        key={`${part.id}-panel`}
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.16, ease: "easeOut" }}
                        className="absolute left-1/2 top-full z-50 w-[min(30rem,calc(100vw-2rem))] -translate-x-1/2 pt-2"
                      >
                        <div
                          className="overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-1.5 backdrop-blur-2xl"
                          style={{
                            WebkitBackdropFilter: "blur(28px) saturate(170%)",
                            backdropFilter: "blur(28px) saturate(170%)",
                            boxShadow: "0 24px 70px -18px rgba(15,50,48,.4), inset 0 1px 0 rgba(255,255,255,.85)",
                          }}
                        >
                          <p className="flex items-center gap-1.5 px-3 pb-1.5 pt-2 text-[.58rem] font-extrabold uppercase tracking-[.22em] text-[#a97d2c]">
                            <BookOpenText className="h-3 w-3" />
                            {part.label}
                          </p>
                          <div className="scrollbar-thin max-h-[17rem] overflow-y-auto">
                            {lecs.map((l) => {
                              const isRead = lectureSeen(l);
                              return (
                                <a
                                  key={l.id}
                                  href={`#l-${l.n}`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setOpenPart(null);
                                    onSelectLecture(l.id);
                                  }}
                                  className={`group flex items-start gap-3 rounded-xl px-3 py-2 transition-colors duration-150 ${
                                    l.reserved
                                      ? "bg-[#9f3d54]/[.06]"
                                      : "hover:bg-[#1f2b2b]/[.05]"
                                  }`}
                                >
                                  <span
                                    className={`mt-0.5 flex h-5 w-9 shrink-0 items-center justify-center rounded-md text-[.56rem] font-black ${
                                      l.reserved
                                        ? "text-white"
                                        : "border border-white/80 bg-white/70 text-[#a97d2c]"
                                    }`}
                                    style={l.reserved ? { background: WINE } : undefined}
                                  >
                                    {l.code}
                                  </span>
                                  <span className="min-w-0 flex-1">
                                    <span className={`block text-[.82rem] font-bold leading-tight ${l.reserved ? "text-[#9f3d54]" : "text-[#1f2b2b] group-hover:text-[#0f766e]"}`}>
                                      {l.title}
                                      {l.reserved ? " · removed" : ""}
                                    </span>
                                  </span>
                                  {isRead ? (
                                    <Check className="ml-auto mt-1 h-3.5 w-3.5 shrink-0" style={{ color: "#5f9e58" }} aria-label="Lecture read" />
                                  ) : null}
                                </a>
                              );
                            })}
                          </div>

                          {/* Test my knowledge — the arc's exam banks */}
                          <div className="mt-1 flex flex-wrap gap-1.5 border-t border-[#e3eadb] p-1.5">
                            {MKTG_PART_BANKS[part.id].map((bankId) => {
                              const bank = MKTG_EXAM_BANKS[bankId];
                              return (
                                <button
                                  key={bankId}
                                  type="button"
                                  onClick={() => {
                                    setOpenPart(null);
                                    onOpenExam(bankId);
                                  }}
                                  className="group/exam flex items-center gap-2 rounded-xl px-2.5 py-2 text-left transition-colors duration-150 hover:bg-[#1f2b2b]/[.05]"
                                >
                                  <span
                                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-white"
                                    style={{ background: TEAL_GRAD }}
                                  >
                                    <PenLine className="h-3.5 w-3.5" />
                                  </span>
                                  <span className="min-w-0">
                                    <span className="block text-[.8rem] font-extrabold leading-tight text-[#0f766e]">
                                      {bank.title}
                                    </span>
                                    <span className="block text-[.62rem] font-bold uppercase tracking-[.1em] text-[#8aa09b]">
                                      {bank.questions.length} Qs · pen-paper
                                    </span>
                                  </span>
                                </button>
                              );
                            })}
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
            {FLAT_ITEMS.map((item) => {
              const lecture = lectureOfChapter(item);
              const label = lecture ? lecture.chapters.find((c) => c.id === item)?.label ?? lecture.code : item;
              return (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onJumpChapter(item);
                  }}
                  className={`nav-link ${active === item ? "active" : ""}`}
                >
                  {label}
                </a>
              );
            })}
          </div>

          {/* right cluster */}
          <div className="ml-auto flex shrink-0 items-center gap-2 md:ml-2">
            <ShelfQuickNav variant="nav" />
            <button
              type="button"
              onClick={() => window.print()}
              title="Print these notes"
              aria-label="Print these notes"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl after:absolute after:-inset-1 after:rounded-xl after:content-[''] border border-white/70 bg-white/60 text-[#5f7472] backdrop-blur-md transition-colors hover:bg-white/85 hover:text-[#0f766e]"
            >
              <Printer className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open the chapter index"
              aria-expanded={mobileOpen}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl after:absolute after:-inset-1 after:rounded-xl after:content-[''] border border-white/70 bg-white/60 text-[#5f7472] backdrop-blur-md transition-colors hover:bg-white/85 hover:text-[#0f766e] lg:hidden"
            >
              <Menu className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>
      </div>

      {/* reading progress */}
      <div className="h-[3px] w-full bg-[#1f2b2b]/10">
        <div
          ref={progressRef}
          className="h-full"
          style={{ width: "0%", background: `linear-gradient(90deg,${TEAL_TINT},${TEAL},${GOLD})` }}
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
            style={{ background: LAGOON }}
            role="dialog"
            aria-modal="true"
            aria-label="Chapter index"
          >
            <div className="flex h-14 shrink-0 items-center justify-between px-4">
              <span className="flex items-center gap-2 text-sm font-black tracking-tight text-[#e9f2ee]">
                <Megaphone className="h-4 w-4" style={{ color: TEAL_TINT }} />
                Chapter index
                <span className="rounded-full bg-white/10 px-2 py-0.5 font-mono text-[.55rem] font-bold text-[#cfe6df]">
                  {seen.size}/{MKTG_ALL_CHAPTER_IDS.length} read
                </span>
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close the chapter index"
                className="relative flex h-10 w-10 items-center justify-center rounded-xl after:absolute after:-inset-1 after:rounded-xl after:content-[''] border border-white/15 bg-white/10 text-[#e9f2ee]"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>
            <ShelfQuickNav variant="menu" onAfter={() => setMobileOpen(false)} />
            <div className="flex-1 overflow-y-auto px-4 pb-10 pt-2">
              {MKTG_PARTS.map((part, pi) => {
                const lecs = lecturesOfPart(part);
                return (
                  <motion.div
                    key={part.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 + pi * 0.05, duration: 0.25 }}
                    className="mb-5"
                  >
                    <p className="mb-2 flex items-center gap-2 text-[.62rem] font-extrabold uppercase tracking-[.24em] text-[#9fc4ba]">
                      <span className="h-px w-5" style={{ background: `linear-gradient(90deg,${TEAL_TINT},transparent)` }} />
                      {part.label}
                    </p>
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[.04]">
                      {lecs.map((l) => {
                        const isRead = lectureSeen(l);
                        return (
                          <a
                            key={l.id}
                            href={`#l-${l.n}`}
                            onClick={(e) => {
                              e.preventDefault();
                              setMobileOpen(false);
                              onSelectLecture(l.id);
                            }}
                            className={`flex items-center gap-3 px-4 py-3 transition-colors active:bg-white/10 ${
                              l.reserved ? "bg-[#9f3d54]/[.12]" : ""
                            }`}
                          >
                            <span
                              className="flex h-7 w-10 shrink-0 items-center justify-center rounded-lg text-[.6rem] font-black"
                              style={
                                l.reserved
                                  ? { background: WINE, color: "#fdf5f7" }
                                  : { background: "rgba(227,194,107,.12)", color: GOLD }
                              }
                            >
                              {l.code}
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className={`block text-[.9rem] font-bold leading-tight ${l.reserved ? "text-[#e7b9c5]" : "text-[#e9f2ee]"}`}>
                                {l.title}
                                {l.reserved ? " · removed" : ""}
                              </span>
                            </span>
                            {isRead ? (
                              <Check className="h-4 w-4 shrink-0" style={{ color: "#5f9e58" }} aria-label="Lecture read" />
                            ) : null}
                          </a>
                        );
                      })}

                      {/* Test my knowledge — the arc's exam banks */}
                      <div className="flex flex-wrap gap-2 border-t border-white/[.08] px-4 py-3">
                        {MKTG_PART_BANKS[part.id].map((bankId) => {
                          const bank = MKTG_EXAM_BANKS[bankId];
                          return (
                            <button
                              key={bankId}
                              type="button"
                              onClick={() => {
                                setMobileOpen(false);
                                onOpenExam(bankId);
                              }}
                              className="flex items-center gap-2 rounded-xl px-2.5 py-2 text-left transition-colors active:bg-white/10"
                              style={{ background: "rgba(15,118,110,.14)" }}
                            >
                              <span
                                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-white"
                                style={{ background: TEAL_GRAD }}
                              >
                                <PenLine className="h-3 w-3" />
                              </span>
                              <span className="text-[.8rem] font-extrabold text-[#a7e8dc]">{bank.title}</span>
                              <span className="text-[.58rem] font-black uppercase tracking-[.12em] text-[#9fc4ba]">
                                {bank.questions.length} Qs →
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}

/* ============================================================
   PracticeHub — the ONE home of pen-paper practice: all ten
   exam windows, eight pre-existing keys + the two authored
   banks (product & portfolio · marketing in practice).
   ============================================================ */
function PracticeHub({
  open,
  onClose,
  onOpenExam,
}: {
  open: boolean;
  onClose: () => void;
  onOpenExam: (g: MktgExamGroup) => void;
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
            background: "rgba(12,18,17,.8)",
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
              background: LAGOON,
              boxShadow: "0 48px 140px -32px rgba(0,0,0,.65)",
            }}
          >
            {/* header */}
            <div className="flex items-start justify-between gap-4 px-6 pt-6 sm:px-8">
              <div>
                <p className="flex items-center gap-2 text-[.6rem] font-extrabold uppercase tracking-[.24em] text-[#9fc4ba]">
                  <span className="h-px w-5" style={{ background: `linear-gradient(90deg,${TEAL_TINT},transparent)` }} />
                  Pen-paper practice
                </p>
                <h2 className="mt-1.5 text-2xl font-black tracking-tight text-[#e9f2ee] sm:text-3xl">Test my knowledge</h2>
                <p className="mt-2 max-w-2xl text-[.88rem] leading-relaxed text-[#c3d8d0]">
                  Every exam window carries definitions, concept checks and case-numbers — write on real paper first,
                  then mark yourself against the model answers with instant checking. The eight original windows are
                  intact; two more cover the authored product and practice arcs.
                </p>
                <p className="mt-2 text-[.64rem] font-black uppercase tracking-[.18em] text-[#8aa89e]">
                  {MKTG_TOTAL_QUESTIONS} questions · {MKTG_EXAM_GROUPS.length} windows
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close the practice hub"
                className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#e9f2ee] transition-colors hover:bg-white/20"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* the ten exam windows */}
            <div className="grid gap-3 px-6 pb-7 pt-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
              {MKTG_EXAM_GROUPS.map((g) => {
                const bank = MKTG_EXAM_BANKS[g];
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
                      style={{ background: TEAL_GRAD }}
                    >
                      <PenLine className="h-4 w-4" />
                    </span>
                    <span className="mt-3 text-[.98rem] font-extrabold leading-tight text-[#a7e8dc]">{bank.title}</span>
                    <span className="mt-1 text-[.76rem] leading-snug text-[#c3d8d0]">{bank.topics}</span>
                    <span className="mt-3 text-[.66rem] font-black uppercase tracking-[.16em] text-[#9fc4ba] transition-colors group-hover:text-[#a7e8dc]">
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
   MktgLectureHead — the "Principles of Marketing Lecture N"
   hero band. Compact: the part, the number, the name, the
   chapter jumps — and the wine marker on reserved lectures.
   ============================================================ */
function MktgLectureHead({ lecture }: { lecture: MktgLecture }) {
  const part = partOfLecture(lecture.n);
  return (
    <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
      <div
        className="relative overflow-hidden rounded-2xl p-4 sm:p-5"
        style={{
          background: lecture.reserved ? "linear-gradient(165deg,#2a1a1e 0%,#1f2b2b 60%,#23191d 100%)" : LAGOON,
          boxShadow: "0 20px 50px -26px rgba(12,33,36,.5)",
          border: lecture.reserved ? "1px solid rgba(159,61,84,.4)" : undefined,
        }}
      >
        {/* ambient rings */}
        <svg aria-hidden viewBox="0 0 600 200" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full opacity-40">
          {[70, 120, 170].map((r, i) => (
            <motion.circle
              key={r} cx={540} cy={100} r={r} fill="none" stroke={i === 2 ? GOLD : TEAL_TINT} strokeWidth={1.4}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
              animate={{ opacity: [0.12, 0.4, 0.12], scale: [1, 1.05, 1] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: i * 0.8 }}
            />
          ))}
        </svg>

        <div className="relative">
          <p className="flex flex-wrap items-center gap-1.5 text-[.56rem] font-extrabold uppercase tracking-[.22em] text-[#9fc4ba]">
            <Megaphone className="h-3 w-3" style={{ color: lecture.reserved ? WINE : TEAL_TINT }} />
            {part ? part.label : "Principles of Marketing"}
            {lecture.reserved ? (
              <span
                className="rounded-full px-2 py-0.5 text-[.56rem]"
                style={{ background: WINE, color: "#fdf5f7" }}
              >
                removed from the course
              </span>
            ) : null}
          </p>
          <h2 className="mt-1 text-xl font-black leading-tight text-[#e9f2ee] sm:text-2xl">
            Lecture {lecture.n}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(120deg,${GOLD},${BRASS})` }}
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
                  className="rounded-full border border-white/15 bg-white/[.07] px-2.5 py-1 text-[.62rem] font-extrabold text-[#cfe6df] transition-colors hover:border-[rgba(15,118,110,.4)] hover:bg-white/[.12] hover:text-[#a7e8dc]"
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
function LecturePager({ current, onJump }: { current: MktgLecture; onJump: (id: string) => void }) {
  const idx = MKTG_LECTURES.findIndex((l) => l.id === current.id);
  const prev = idx > 0 ? MKTG_LECTURES[idx - 1] : null;
  const next = idx < MKTG_LECTURES.length - 1 ? MKTG_LECTURES[idx + 1] : null;

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
            <ArrowLeft className="h-4 w-4 shrink-0 text-[#0f766e] transition-transform duration-200 group-hover:-translate-x-1" />
            <span className="min-w-0">
              <span className="block text-[.6rem] font-extrabold uppercase tracking-[.18em] text-[#a97d2c]">
                Previous · {prev.code}
              </span>
              <span className="mt-0.5 block truncate text-[.92rem] font-extrabold text-[#1f2b2b]">{prev.title}</span>
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
              <span className="block text-[.6rem] font-extrabold uppercase tracking-[.18em] text-[#a97d2c]">
                Next · {next.code}
              </span>
              <span className="mt-0.5 block truncate text-[.92rem] font-extrabold text-[#1f2b2b]">{next.title}</span>
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 text-[#0f766e] transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        ) : (
          <span className="rounded-2xl border border-dashed border-[#dbeae5] p-4 text-center text-[.78rem] font-bold leading-snug text-[#8aa09b]">
            End of the sequence — Lecture 40 closes the course. Revise the three Cs, then retake the windows.
          </span>
        )}
      </div>
    </nav>
  );
}


/* ============================================================
   MktgApp — the composed subject page: a lecture reader.
   ============================================================ */
export function MktgApp({ onExitAtlas }: { onExitAtlas: () => void }) {
  const [lectureId, setLectureId] = useState<string>(MKTG_DEFAULT_LECTURE);
  const [examGroup, setExamGroup] = useState<MktgExamGroup | null>(null);
  const [hubOpen, setHubOpen] = useState(false);
  const lectureIdRef = useRef(lectureId);
  useEffect(() => {
    lectureIdRef.current = lectureId;
  }, [lectureId]);

  const lecture = lectureById(lectureId) ?? MKTG_LECTURES[0];
  const seen = useSeenDisplay(lecture);

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

  useOpenSection("mktg", goToChapter);

  const openExam = useCallback((g: MktgExamGroup) => setExamGroup(g), []);
  const openHub = useCallback(() => setHubOpen(true), []);

  return (
    <div id="top" className="page-wrap mktg-canvas">
      <TopNav onOpenExam={openExam} onExitAtlas={onExitAtlas} onJumpChapter={goToChapter} onSelectLecture={selectLecture} seen={seen} />
      <main className="pt-14">
        <PartBoundary label="Hero">
          <MktgHero
            activeId={lectureId}
            onSelect={selectLecture}
            onPractice={openHub}
            seen={seen}
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
            <MktgLectureHead lecture={lecture} />
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
      {examGroup ? <MktgExamWindow group={examGroup} onClose={() => setExamGroup(null)} /> : null}
    </div>
  );
}
