 
// @ts-nocheck
"use client";
import type { ReactNode } from "react";
import SunsetVelocity from "@/components/originkit/ui/hero-57/sunset-velocity";

/**
 * Originkit Hero 57 — "Sunset Velocity" — re-poured for THE ATLAS.
 *
 * DESIGN ONLY: the animated midnight-ember highway (canvas), the
 * light melts and the copy window. The section ships ZERO texts of
 * its own — everything readable on screen (badge, wordmark, copy,
 * CTAs, stats) arrives through the `children` slot from the app.
 */
export default function SunsetHero({ children }: { children?: ReactNode }) {
  return (
    <section className="hero">
      {/* the living scene — ember dusk, gold sun, silhouetted turbines,
          an Atlas-orange car running the amber lane into the dark */}
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
            sunGlow: 55,
            cloudColor: "#57200e",
            cloudOpacity: 55,
            rimColor: "#f5c889",
            hazeColor: "#f6b48e",
            hazeOpacity: 42,
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

      {/* soft ink bloom behind the copy — keeps the type clean over the sky */}
      <div className="hero-scrim" aria-hidden />

      {/* the app's own hero content lands here (THE ATLAS wordmark et al.) */}
      <div className="hero-overlay">
        <div className="hero-overlay-inner">{children}</div>
      </div>
    </section>
  );
}
