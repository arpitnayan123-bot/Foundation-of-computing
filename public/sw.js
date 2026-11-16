/* ============================================================
   THE ATLAS — service worker (hand-rolled, no next-pwa).

   Strategy
   ─ navigations            network-first, cached shell fallback
   ─ /_next/static/* + icons  cache-first (immutable, prod only)
   ─ Pyodide CDN (cdn.jsdelivr.net)
                            stale-while-revalidate — the Python
                            Lab keeps working offline once a
                            session has loaded the runtime
   ─ everything else        pass through (API, fonts, …)

   Dev safety: the app registers /sw.js?dev=1 while developing.
   In that mode static chunks are NEVER cached (HMR stays live);
   only the "/" shell is kept as an offline fallback. Production
   registers /sw.js and gets the full offline story: every shelf
   you have visited keeps working with no network. (The Pyodide
   runtime cache is safe in dev too — CDN files are versioned and
   immutable, nothing to do with HMR.)

   Bumping VERSION: any change to this file's caching behaviour
   should also bump the cache name so stale entries are swept on
   activate. v2 — adds the Pyodide stale-while-revalidate tier.
   ============================================================ */

const VERSION = "atlas-v2";
const SHELL = ["/", "/atlas-logo.svg", "/icon.svg"];
/* the Python runtime origin — see src/lib/pyruntime.ts, which loads
   pyodide.js + pyodide.asm.wasm + the stdlib package from here */
const PYODIDE_HOST = "cdn.jsdelivr.net";
/* the dev flag rides on the script URL the page registered */
const DEV = String(self.serviceWorker?.scriptURL || "").includes("dev=1");

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(VERSION)
      .then((cache) => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  let url;
  try {
    url = new URL(req.url);
  } catch {
    return;
  }

  /* Pyodide runtime — cache-first for the reader, refreshed behind
     the answer, so the Python Lab works offline after one visit.
     Runs in dev too: versioned CDN files, no HMR involvement. */
  if (url.hostname === PYODIDE_HOST) {
    event.respondWith(staleWhileRevalidate(req));
    return;
  }

  /* other cross-origin (fonts, analytics) — let the browser handle it */
  if (url.origin !== self.location.origin) return;

  if (req.mode === "navigate") {
    event.respondWith(networkFirst(event));
    return;
  }

  /* every immutable build asset — code-split shelf chunks, question
     banks, the search corpus — rides this tier automatically */
  if (!DEV && (url.pathname.startsWith("/_next/static/") || url.pathname === "/icon.svg" || url.pathname === "/atlas-logo.svg")) {
    event.respondWith(cacheFirst(req));
  }
});

async function networkFirst(event) {
  const req = event.request;
  const cache = await caches.open(VERSION);
  try {
    const fresh = await fetch(req);
    if (fresh && fresh.ok) {
      // keep the shell warm for offline reloads
      cache.put("/", fresh.clone()).catch(() => {});
    }
    return fresh;
  } catch {
    const shell = (await cache.match("/")) || (await cache.match(req));
    if (shell) return shell;
    return new Response(
      "<!doctype html><title>The Atlas — offline</title><body style=\"background:#070509;color:#c9b99f;font-family:system-ui;display:grid;place-items:center;height:100vh;margin:0\"><p>You are offline, and this page has not been cached yet. Reconnect once, visit the shelf, and it will keep working offline.</p></body>",
      { status: 503, headers: { "Content-Type": "text/html" } }
    );
  }
}

async function cacheFirst(req) {
  const cache = await caches.open(VERSION);
  const hit = await cache.match(req);
  if (hit) return hit;
  const fresh = await fetch(req);
  if (fresh && fresh.ok) cache.put(req, fresh.clone()).catch(() => {});
  return fresh;
}

/* answer from the cache instantly, refresh the copy in the
   background. A cache miss waits on the network — if that fails
   (offline, cold cache) the rejection surfaces as a normal
   request failure, which pyruntime.ts already reports kindly. */
async function staleWhileRevalidate(req) {
  const cache = await caches.open(VERSION);
  const hit = await cache.match(req);
  const network = fetch(req)
    .then((fresh) => {
      if (fresh && (fresh.ok || fresh.type === "opaque")) {
        cache.put(req, fresh.clone()).catch(() => {});
      }
      return fresh;
    });
  return hit || network;
}
