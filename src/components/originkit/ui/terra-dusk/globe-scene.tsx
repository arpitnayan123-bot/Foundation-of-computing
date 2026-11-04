// @ts-nocheck
"use client"

/**
 * GlobeScene — the Atlas pour of Originkit's TerraDusk.
 *
 * Takes the raw globe and seats it in the hero: measures the band it is
 * given (so the disc always fits the screen — phone to desktop), and pours
 * the Atlas light through it — ember-copper atmosphere instead of the
 * stock blue, so the limb burns the same dusk orange as the wordmark.
 *
 * Interaction survives intact: drag to spin with momentum, hover turns
 * the disc toward the pointer, and the sun rides the cursor — sweeping
 * the pointer drags daylight across the planet and the cities light up
 * behind it.
 */

import { useEffect, useRef, useState } from "react"
import TerraDusk from "@/components/originkit/ui/terra-dusk/terra-dusk"

export default function GlobeScene() {
    const bandRef = useRef<HTMLDivElement>(null)
    const [size, setSize] = useState(480)

    // The globe is a fixed-diameter disc; the band it lives in is fluid.
    // Measure the band and keep the disc just inside it — width-bound on
    // phones, height-bound on desktop — so it never clips or crowds.
    useEffect(() => {
        const band = bandRef.current
        if (!band) return
        const measure = () => {
            const w = band.clientWidth
            const h = band.clientHeight
            if (w < 2 || h < 2) return
            const next = Math.round(Math.min(w, h) * 0.96)
            setSize((prev) => (Math.abs(prev - next) > 1 ? next : prev))
        }
        measure()
        const ro = new ResizeObserver(measure)
        ro.observe(band)
        return () => ro.disconnect()
    }, [])

    return (
        <div ref={bandRef} className="hero-globe-band">
            <TerraDusk
                background="transparent"
                stars={5}
                size={size}
                look={{
                    clouds: 5,
                    lights: 5.5,
                    atmosphere: "#E8874A",
                }}
                drag
                hover={6.8}
                sun="cursor"
                sunAngle={168}
                daylight={76}
                speed={7.5}
            />
        </div>
    )
}
