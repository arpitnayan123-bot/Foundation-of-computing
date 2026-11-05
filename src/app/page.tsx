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

import React, { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { AppBoundary } from "@/components/atlas/AppBoundary";
import { AtlasLanding } from "@/components/atlas/AtlasLanding";
import { CommandPalette } from "@/components/atlas/CommandPalette";
import { RevisionRadio } from "@/components/atlas/RevisionRadio";
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

type View =
  | { name: "atlas" }
  | { name: "ledger" }
  | { name: "cockpit" }
  | { name: "subject"; id: string }
  | { name: "reserved"; id: string };

const SUBJECT_ROUTE = "#/subject/";

function parseRouteHash(hash: string): View | null {
  // only route-style hashes (#/…) drive the view; bare anchors (#why)
  // belong to the subject's own scroll navigation and are ignored.
  if (!hash.startsWith("#/")) return null;
  if (hash === "#/atlas") return { name: "atlas" };
  if (hash === "#/ledger") return { name: "ledger" };
  if (hash === "#/cockpit") return { name: "cockpit" };
  if (hash.startsWith(SUBJECT_ROUTE)) {
    const id = hash.slice(SUBJECT_ROUTE.length);
    if (SUBJECT_IDS.includes(id)) return { name: "subject", id };
    // a shelf deep-linked before its syllabus drops — show the honest
    // reserved bay (with a way back) instead of silently bouncing home
    return { name: "reserved", id };
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
    view.name === "subject" || view.name === "reserved" ? `${view.name}-${view.id}` : view.name;

  /* ---- the in-app trail + edge-swipe back (mobile) ----
     A right-edge swipe walks the trail backwards — previous window,
     exactly one gesture — and never exits the site. The trail only
     records in-app hashes; a direct deep link falls home to the map. */
  const trailRef = useRef<string[]>([]);
  const swallowRef = useRef(false);

  useEffect(() => {
    trailRef.current.push(window.location.hash || "#/atlas");
    const onHash = () => {
      if (swallowRef.current) {
        swallowRef.current = false;
        return;
      }
      trailRef.current.push(window.location.hash || "#/atlas");
      if (trailRef.current.length > 30) trailRef.current.shift();
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    let sx = 0;
    let sy = 0;
    let t0 = 0;
    let armed = false;
    const onStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) {
        armed = false;
        return;
      }
      const t = e.touches[0];
      sx = t.clientX;
      sy = t.clientY;
      t0 = Date.now();
      armed = sx <= 28; // the left edge arms the gesture
    };
    const onEnd = (e: TouchEvent) => {
      if (!armed || e.changedTouches.length !== 1) return;
      armed = false;
      const t = e.changedTouches[0];
      const dx = t.clientX - sx;
      const dy = t.clientY - sy;
      if (dx < 90 || Math.abs(dy) > 80 || Date.now() - t0 > 800) return;
      const trail = trailRef.current;
      let target: string;
      if (trail.length >= 2) {
        trail.pop(); // the window we're leaving
        const candidate = trail[trail.length - 1];
        target = candidate === window.location.hash ? "#/atlas" : candidate;
      } else {
        target = "#/atlas"; // deep-linked straight in — the map is home
      }
      swallowRef.current = true; // the back-step must not re-enter the trail
      window.location.hash = target;
      window.scrollTo(0, 0);
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
  }, []);

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
        {/* the revision radio — the atlas reads the current window aloud */}
        <RevisionRadio />
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
            ) : view.name === "reserved" ? (
              // a shelf deep-linked before its syllabus dropped — honest bay
              <AtlasFallback id={view.id} onBack={exitToAtlas} />
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
              // truly unroutable — send the reader back to the map
              <AtlasFallback id={view.name} onBack={exitToAtlas} />
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
        Shelf <span className="atlas-sheen">{id.toUpperCase()}</span> is still reserved.
      </p>
      <p className="max-w-md text-[.92rem] leading-relaxed text-[#a89a86]">
        This subject hasn&apos;t been rebuilt for the atlas yet — its PDF hasn&apos;t dropped.
        The bay is poured and waiting.
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
