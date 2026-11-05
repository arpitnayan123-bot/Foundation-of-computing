import type { NextConfig } from "next";

/* ============================================================
   THE SECURITY LAYER — quiet walls around every route.

   · nosniff            → no MIME-sniffing tricks on studio audio
   · Referrer-Policy    → the atlas never leaks full URLs outward
   · Permissions-Policy → the browser's mic, camera and GPS stay
                          off; the radio only ever speaks, it
                          never listens
   · COOP same-origin   → cross-window handles can't touch the tab

   Deliberately ABSENT: X-Frame-Options / frame-ancestors. The
   live preview window rides a cross-origin gateway (space-z.ai),
   and a frame wall here would blank it for the author.

   Key hygiene (the "no fallback" rule): the studio's synth and
   model credentials live ONLY inside the server process — they
   are never referenced in client bundles (no NEXT_PUBLIC_*
   secrets exist), never echoed in error payloads, and the
   narrate routes fail closed through api-guard's same-origin +
   rate-limit walls. If the studio key is missing or dead, the
   routes answer 502/503 honestly — they never fall back to any
   client-embedded key path, because none exists.
   ============================================================ */

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  output: "standalone",
  /* the route-change / dev badges hover over the app chrome — the
     atlas has its own visual language, keep the corner clean */
  devIndicators: false,
  reactStrictMode: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
