import type { MetadataRoute } from "next";

/* ============================================================
   PWA manifest — The Atlas installs to a home screen with its
   own dark chrome. The service worker (public/sw.js) makes
   visited shelves work offline; see its header for the policy.
   ============================================================ */

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Atlas — Visual Revision Notes for Everything",
    short_name: "The Atlas",
    description:
      "Animated revision notes, pen-paper exam simulators, spaced review and a real CPython 3.12 lab — one shelf per subject.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#070509",
    theme_color: "#140d08",
    icons: [
      {
        src: "/atlas-logo.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon.svg",
        sizes: "64x64",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
