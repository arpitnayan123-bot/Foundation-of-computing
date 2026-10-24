/* ============================================================
   THE ATLAS — service worker (hand-rolled, no next-pwa).

   Strategy
   ─ navigations            network-first, cached shell fallback
   ─ /_next/static/* + icons  cache-first (immutable, prod only)
   ─ everything else        pass through (API, Pyodide CDN, …)

   Dev safety: the app registers /sw.js?dev=1 while developing.
   In that mode static chunks are NEVER cached (HMR stays live);
   only the "/" shell is kept as an offline fallback. Production
   registers /sw.js and gets the full offline story: every shelf
   you have visited keeps working with no network.
   ============================================================ */

const VERSION = "atlas-v1";
const SHELL = ["/", "/atlas-logo.svg", "/icon.svg"];
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
  /* cross-origin (Pyodide CDN, fonts) — let the browser handle it */
  if (url.origin !== self.location.origin) return;

  if (req.mode === "navigate") {
    event.respondWith(networkFirst(event));
    return;
  }

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
