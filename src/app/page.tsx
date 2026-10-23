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
import { AnimatePresence, motion } from "framer-motion";
import { AtlasLanding } from "@/components/atlas/AtlasLanding";
import { SUBJECT_IDS } from "@/components/atlas/subjects";
import { FocApp } from "@/components/notes/FocApp";
import { AtbApp } from "@/components/atb/AtbApp";
import { FaApp } from "@/components/fa/FaApp";
import { EbhApp } from "@/components/ebh/EbhApp";
import { StmApp } from "@/components/stm/StmApp";

type View = { name: "atlas" } | { name: "subject"; id: string };

const SUBJECT_ROUTE = "#/subject/";

function parseRouteHash(hash: string): View | null {
  // only route-style hashes (#/…) drive the view; bare anchors (#why)
  // belong to the subject's own scroll navigation and are ignored.
  if (!hash.startsWith("#/")) return null;
  if (hash === "#/atlas") return { name: "atlas" };
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
  const viewKey = view.name === "subject" ? `subject-${view.id}` : "atlas";

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

  // dark chrome (scrollbar etc.) while the Atlas landing is on stage
  useEffect(() => {
    const el = document.documentElement;
    el.classList.toggle("atlas-active", view.name === "atlas");
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
        ) : (
          // reserved shelf reached by URL — send the reader back to the map
          <AtlasFallback id={view.id} onBack={exitToAtlas} />
        )}
      </motion.div>
    </AnimatePresence>
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
