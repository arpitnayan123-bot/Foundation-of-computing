
// @ts-nocheck
"use client";
import type { ReactNode } from "react";
import SunsetVelocity from "@/components/originkit/ui/hero-57/sunset-velocity";

/**
 * Originkit Hero 57 — "Sunset Velocity" — re-poured for THE ATLAS.
 *
 * DESIGN ONLY: the animated midnight-ember highway (canvas), the
 * light melts, the sun promoted to key light and the breathing bloom.
 * The section ships ZERO texts of its own. The app slots exactly one
 * thing over the scene — the THE ATLAS wordmark — through `children`;
 * every other line of copy lives BELOW the design, on the midnight
 * canvas, lit by the afterglow.
 */
export default function SunsetHero({ children }: { children?: ReactNode }) {
  return (
    <section className="hero">
      {/* the living scene — ember dusk, gold sun, silhouetted turbines,
          an Atlas-orange car running the amber lane into the dark.
          Seated HIGH: the design rides the top of the page, horizon
          burning just under the wordmark, machine owning the asphalt */}
      <div className="hero-scene">
        <SunsetVelocity
          background="#070509"
          skyTop="#150a06"
          skyHorizon="#b34912"
          sunColor="#ffd9a0"
          carColor="#ea580c"
          speed={55}
          turbines={55}
          advanced={{
            sunX: 74,
            sunY: 56,
            sunSize: 105,
            sunGlow: 60,
            cloudColor: "#57200e",
            cloudOpacity: 55,
            rimColor: "#f5c889",
            hazeColor: "#f6b48e",
            hazeOpacity: 46,
            turbineFar: "#6b2d12",
            turbineMid: "#200b06",
            turbineNear: "#0d0503",
            fieldColor: "#150809",
            roadColor: "#090306",
            laneColor: "#f59e0b",
            carRim: "#ffd9a0",
            wheelBlur: 60,
            seed: 7,
            grain: 14,
            vignette: 40,
            hover: 45,
          }}
          style={{ minWidth: 0, minHeight: 0 }}
        />
      </div>

      {/* seats the floating nav up top, melts the asphalt into the
          midnight canvas the rest of the atlas lives on */}
      <div className="hero-fade" />

      {/* the sun, promoted to the scene's key light — a tight gold halo
          plus a wide ember wash, screen-blended over the dusk */}
      <div className="hero-sunlight" aria-hidden />

      {/* soft ink seat behind the wordmark — THE ATLAS stays ink-clean
          even where the dusk sky burns brightest */}
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
