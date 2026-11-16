
// @ts-nocheck
"use client";
import type { ReactNode } from "react";
import GlobeScene from "@/components/originkit/ui/terra-dusk/globe-scene";

/**
 * Originkit Hero 57 — "Terra Dusk" — re-poured for THE ATLAS.
 *
 * DESIGN ONLY: the living Earth (WebGL) — real satellite imagery, a low
 * ember sun, city lights waking on the night side, stars behind — plus
 * the light melts and the breathing bloom. The section ships ZERO texts
 * of its own. The app slots exactly one thing over the scene — the
 * THE ATLAS wordmark — through `children`; every other line of copy
 * lives BELOW the design, on the midnight canvas, lit by the afterglow.
 */
export default function SunsetHero({ children }: { children?: ReactNode }) {
  return (
    <section className="hero">
      {/* the living scene — the Earth at dusk, hung just under the
          wordmark: the sigil + wordmark own the sky, the planet owns
          the horizon below, and it melts into the midnight canvas */}
      <div className="hero-scene">
        <GlobeScene />
      </div>

      {/* seats the floating nav up top, melts the planet's underside into
          the midnight canvas (#070509) the rest of the atlas lives on */}
      <div className="hero-fade" />

      {/* the sun, promoted to the scene's key light — a soft ember wash
          cradling the globe, screen-blended over the dusk */}
      <div className="hero-sunlight" aria-hidden />

      {/* soft ink seat behind the wordmark — THE ATLAS stays ink-clean
          even where the planet's limb burns brightest */}
      <div className="hero-scrim" aria-hidden />

      {/* golden halo breathing behind the wordmark — the sun's light
          bleeding through the letters */}
      <div className="atlas-bloom" aria-hidden />

      {/* the app's wordmark lands here — nothing else rides the scene */}
      <div className="hero-overlay">
        <div className="hero-overlay-inner">{children}</div>
      </div>
    </section>
  );
}
