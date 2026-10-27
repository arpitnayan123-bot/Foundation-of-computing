"use client";

/* ============================================================
   THE ATLAS — route shell.

   The sandbox preview exposes a single route (/), so the whole
   atlas lives here behind a tiny hash router:

     #/atlas          → the dark landing (subject shelf)
     #/subject/<id>   → a subject's revision app
     #<anchor>        → in-page anchors inside a subject (ignored)

   Adding a new subject: register it in
   src/components/atlas/subjects.ts, then add a case below.
   ============================================================ */

import React, { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { AppBoundary } from "@/components/atlas/AppBoundary";
import { AtlasLanding } from "@/components/atlas/AtlasLanding";
import { CommandPalette } from "@/components/atlas/CommandPalette";
import { SUBJECT_IDS } from "@/components/atlas/subjects";

/* ============================================================
   Code-split shelves — each subject app is a heavy, self-contained
   world (chapters, question banks, animated machines). Only the
   landing ships with the first paint; a shelf's chunk is fetched
   the first time it is entered, behind a themed loader.
   ============================================================ */
function ShelfLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#070509]">
      <div className="flex flex-col items-center gap-4">
        <span
          aria-hidden
          className="h-8 w-8 animate-spin rounded-full border-2 border-[#3e2c1d] border-t-[#f59e0b]"
        />
        <p className="text-[.7rem] font-black uppercase tracking-[.22em] text-[#a89a86]">
          Opening the shelf…
        </p>
      </div>
    </div>
  );
}

const FocApp = dynamic(() => import("@/components/notes/FocApp").then((m) => m.FocApp), {
  ssr: false,
  loading: () => <ShelfLoader />,
});
const AtbApp = dynamic(() => import("@/components/atb/AtbApp").then((m) => m.AtbApp), {
  ssr: false,
  loading: () => <ShelfLoader />,
});
const FaApp = dynamic(() => import("@/components/fa/FaApp").then((m) => m.FaApp), {
  ssr: false,
  loading: () => <ShelfLoader />,
});
const EbhApp = dynamic(() => import("@/components/ebh/EbhApp").then((m) => m.EbhApp), {
  ssr: false,
  loading: () => <ShelfLoader />,
});
const StmApp = dynamic(() => import("@/components/stm/StmApp").then((m) => m.StmApp), {
  ssr: false,
  loading: () => <ShelfLoader />,
});
const MktgApp = dynamic(() => import("@/components/mktg/MktgApp").then((m) => m.MktgApp), {
  ssr: false,
  loading: () => <ShelfLoader />,
});
const LedgerView = dynamic(() => import("@/components/atlas/LedgerView").then((m) => m.LedgerView), {
  ssr: false,
  loading: () => <ShelfLoader />,
});
const CockpitView = dynamic(() => import("@/components/atlas/CockpitView").then((m) => m.CockpitView), {
  ssr: false,
  loading: () => <ShelfLoader />,
});
const Quiz2App = dynamic(() => import("@/components/quiz2/Quiz2App").then((m) => m.Quiz2App), {
  ssr: false,
  loading: () => <ShelfLoader />,
});

type View =
  | { name: "atlas" }
  | { name: "ledger" }
  | { name: "cockpit" }
  | { name: "quiz2"; id?: string }
  | { name: "subject"; id: string };

const SUBJECT_ROUTE = "#/subject/";

function parseRouteHash(hash: string): View | null {
  // only route-style hashes (#/…) drive the view; bare anchors (#why)
  // belong to the subject's own scroll navigation and are ignored.
  if (!hash.startsWith("#/")) return null;
  if (hash === "#/atlas") return { name: "atlas" };
  if (hash === "#/ledger") return { name: "ledger" };
  if (hash === "#/cockpit") return { name: "cockpit" };
  if (hash === "#/quiz2") return { name: "quiz2" };
  if (hash.startsWith("#/quiz2/")) {
    // deep link straight into one subject's prep room
    return { name: "quiz2", id: hash.slice("#/quiz2/".length) };
  }
  if (hash.startsWith(SUBJECT_ROUTE)) {
    const id = hash.slice(SUBJECT_ROUTE.length);
    if (SUBJECT_IDS.includes(id)) return { name: "subject", id };
  }
  return { name: "atlas" }; // unknown route → the shelf
}

function currentView(): View {
  if (typeof window === "undefined") return { name: "atlas" };
  return parseRouteHash(window.location.hash) ?? { name: "atlas" };
}

export default function Page() {
  const [view, setView] = useState<View>({ name: "atlas" });
  const viewKey =
    view.name === "subject"
      ? `subject-${view.id}`
      : view.name === "quiz2"
        ? `quiz2-${view.id ?? "all"}` // a deep link into another subject's prep room remounts
        : view.name;

  useEffect(() => {
    // initial route sync — async so the first paint stays hydration-stable
    const raf = requestAnimationFrame(() => setView(currentView()));
    const onHash = () => {
      const next = parseRouteHash(window.location.hash);
      if (next) setView(next); // null = bare anchor → leave the view alone
    };
    window.addEventListener("hashchange", onHash);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  // dark chrome (scrollbar etc.) while the Atlas landing or the
  // cockpit is on stage — both live on the midnight chrome
  useEffect(() => {
    const el = document.documentElement;
    el.classList.toggle("atlas-active", view.name === "atlas" || view.name === "cockpit");
    return () => el.classList.remove("atlas-active");
  }, [view.name]);

  const enterSubject = useCallback((id: string) => {
    window.location.hash = `#/subject/${id}`;
    window.scrollTo(0, 0);
  }, []);

  const exitToAtlas = useCallback(() => {
    window.location.hash = "#/atlas";
    window.scrollTo(0, 0);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      {/* shell boundary — a crash in the landing / palette / ledger /
          shelf chrome shows the recovery view, never a blank tab */}
      <AppBoundary>
        {/* ⌘K palette — global, works on the landing and inside every shelf */}
        <CommandPalette />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={viewKey}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {view.name === "atlas" ? (
              <AtlasLanding onEnter={enterSubject} />
            ) : view.name === "ledger" ? (
              // the ledger — local-first progress, mastery and spaced review
              <LedgerView onExitAtlas={exitToAtlas} />
            ) : view.name === "cockpit" ? (
              // the cockpit — today's flight plan + ask the atlas
              <CockpitView onExitAtlas={exitToAtlas} />
            ) : view.name === "quiz2" ? (
              // quiz 2 — the war room (a separate wing, not a shelf)
              <Quiz2App initialSubject={view.id} onExitAtlas={exitToAtlas} />
            ) : view.id === "foc" ? (
              <FocApp onExitAtlas={exitToAtlas} />
            ) : view.id === "atb" ? (
              <AtbApp onExitAtlas={exitToAtlas} />
            ) : view.id === "fa" ? (
              // shelf 03 — Financial Accounting, the third live subject
              <FaApp onExitAtlas={exitToAtlas} />
            ) : view.id === "ebh" ? (
              // shelf 04 — Economic & Business History, the fourth live subject
              <EbhApp onExitAtlas={exitToAtlas} />
            ) : view.id === "stm" ? (
              // shelf 05 — Statistics for Managers, the fifth live subject
              <StmApp onExitAtlas={exitToAtlas} />
            ) : view.id === "mktg" ? (
              // shelf 06 — Principles of Marketing, the sixth live subject
              <MktgApp onExitAtlas={exitToAtlas} />
            ) : (
              // reserved shelf reached by URL — send the reader back to the map
              <AtlasFallback id={view.id} onBack={exitToAtlas} />
            )}
          </motion.div>
        </AnimatePresence>
      </AppBoundary>
    </MotionConfig>
  );
}

function AtlasFallback({ id, onBack }: { id: string; onBack: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-[#070509] px-6 text-center">
      <p className="font-display text-2xl font-black text-[#f7ecdd] md:text-4xl">
        Shelf <span className="atlas-sheen">{id.replace("shelf-", "")}</span> is still reserved.
      </p>
      <p className="max-w-md text-[.92rem] leading-relaxed text-[#a89a86]">
        This subject hasn&apos;t been rebuilt for the atlas yet — its PDF hasn&apos;t dropped.
      </p>
      <button
        type="button"
        onClick={onBack}
        className="h-11 rounded-full border border-white/15 bg-white/[.05] px-6 text-[.74rem] font-black uppercase tracking-[.16em] text-[#e9d7bf] transition-colors hover:bg-white/[.1]"
      >
        ← Back to the atlas
      </button>
    </div>
  );
}
