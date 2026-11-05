/* ============================================================
   API GUARD — one small wall in front of every model/tts route.

   sameOrigin(req)
     Browser calls carry an Origin header; if one is present and it
     matches none of the hosts this request chain claims (Host,
     x-forwarded-host, the request URL), the call is a cross-site
     ride on the studio's quota — 403. Behind the preview gateway
     the two names differ by design, so the gateway's own domain
     is honoured too. Non-browser clients (curl, health checks)
     send no Origin and pass untouched.

   rateLimit(req, key, max, windowMs)
     Sliding-window per-IP counter, in-memory, self-evicting.
     Right-sized for a single-instance study app: it can't stop a
     distributed flood, but it stops a runaway tab or a scripted
     hammer from burning the synthesis quota in one minute.

   Both return null on success, or a NextResponse ready to return.
   ============================================================ */

import { NextResponse } from "next/server";

export function sameOrigin(req: Request): NextResponse | null {
  const origin = req.headers.get("origin");
  if (!origin) return null; // not a browser call — curl, health checks
  let originHost = "";
  try {
    originHost = new URL(origin).host.toLowerCase();
  } catch {
    return reject();
  }
  /* Behind the preview gateway the server's own Host is the internal
     name (e.g. localhost:3000) while the browser's Origin is the public
     preview domain — a naive Host===Origin compare 403s every in-app
     call (the radio's "could not compose the briefing" bug). So accept
     the Origin when it matches ANY host the request chain claims:
     the Host header, x-forwarded-host (proxies may send a chain), or
     the request URL's own host — plus the platform's preview gateway
     domain, which is where this app is actually served. */
  const candidates = new Set<string>();
  const add = (h: string | null | undefined) => {
    const v = (h ?? "").split(",")[0].trim().toLowerCase();
    if (v) candidates.add(v);
  };
  add(req.headers.get("host"));
  add(req.headers.get("x-forwarded-host"));
  try {
    add(new URL(req.url).host);
  } catch {
    /* req.url is always absolute in Next route handlers — belt and braces */
  }
  if (candidates.has(originHost)) return null;
  if (originHost.endsWith(".space-z.ai")) return null; // the preview gateway itself
  return reject();
}

function reject() {
  return NextResponse.json(
    { error: "Cross-origin calls are not allowed on the studio routes." },
    { status: 403 },
  );
}

const buckets = new Map<string, number[]>();
const BUCKET_EVICT = 5000;

export function rateLimit(
  req: Request,
  key: string,
  max: number,
  windowMs: number,
): NextResponse | null {
  const fwd = req.headers.get("x-forwarded-for") ?? "";
  const ip = fwd.split(",")[0].trim() || "local";
  const now = Date.now();
  const id = `${key}:${ip}`;
  const hits = (buckets.get(id) ?? []).filter((t) => now - t < windowMs);
  hits.push(now);
  buckets.set(id, hits);
  if (buckets.size > BUCKET_EVICT) {
    /* shed cold entries — the guard must never leak memory */
    for (const [k, v] of buckets) {
      if (v.every((t) => now - t >= windowMs)) buckets.delete(k);
      if (buckets.size <= BUCKET_EVICT / 2) break;
    }
  }
  if (hits.length > max) {
    const retry = Math.ceil((hits[0] + windowMs - now) / 1000);
    return NextResponse.json(
      { error: `Too many requests — the studio needs ${retry}s to breathe.` },
      { status: 429, headers: { "Retry-After": String(retry) } },
    );
  }
  return null;
}
