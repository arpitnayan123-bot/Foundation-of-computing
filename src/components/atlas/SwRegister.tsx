"use client";

/* ============================================================
   Registers the Atlas service worker after load.
   Dev registers /sw.js?dev=1 (shell-only, HMR-safe); production
   registers /sw.js (full offline caching). Fails silently —
   the site works fine without the SW.
   ============================================================ */

import { useEffect } from "react";

export function SwRegister() {
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;
    const isDev = process.env.NODE_ENV !== "production";
    const url = isDev ? "/sw.js?dev=1" : "/sw.js";
    const register = () => {
      navigator.serviceWorker.register(url).catch(() => {
        /* SW is an enhancement — never surface registration failures */
      });
    };
    if (document.readyState === "complete") {
      register();
      return;
    }
    window.addEventListener("load", register, { once: true });
    return () => window.removeEventListener("load", register);
  }, []);

  return null;
}
