import { ImageResponse } from "next/og";

/* ============================================================
   THE ATLAS — social preview card (1200×630 PNG).

   Rendered at request time by next/og with system fonts only —
   no network font downloads, so the route stays fast and works
   in every environment. The dusk gradient mirrors the landing
   hero: deep browns sinking into burnt orange and gold.
   ============================================================ */

export const alt =
  "The Atlas — an open shelf of visual revision notes at dusk: deep browns sinking into burnt orange and gold";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "system-ui, -apple-system, 'Segoe UI', sans-serif";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(160deg, #140d08 0%, #241608 34%, #4a2410 62%, #7c2d12 84%, #b45309 100%)",
        }}
      >
        {/* dusk glow — a low sun rising from the bottom edge */}
        <div
          style={{
            position: "absolute",
            left: 330,
            top: 360,
            width: 540,
            height: 540,
            borderRadius: 9999,
            background: "rgba(251, 191, 36, 0.16)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 460,
            top: 470,
            width: 280,
            height: 280,
            borderRadius: 9999,
            background: "rgba(245, 158, 11, 0.22)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -160,
            top: -220,
            width: 460,
            height: 460,
            borderRadius: 9999,
            background: "rgba(251, 146, 60, 0.08)",
          }}
        />

        {/* top hairline + wordmark eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            color: "rgba(233, 215, 191, 0.72)",
            fontSize: 22,
            letterSpacing: 10,
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 64, height: 1, background: "rgba(233, 215, 191, 0.4)" }} />
          visual revision notes
          <div style={{ width: 64, height: 1, background: "rgba(233, 215, 191, 0.4)" }} />
        </div>

        {/* the wordmark */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 34,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 156,
              fontWeight: 700,
              color: "#f7ecdd",
              fontFamily: SERIF,
              letterSpacing: 6,
              textShadow: "0 6px 40px rgba(0, 0, 0, 0.45)",
            }}
          >
            THE ATLAS
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "14px 30px",
              borderRadius: 9999,
              border: "1px solid rgba(233, 215, 191, 0.35)",
              background: "rgba(20, 13, 8, 0.45)",
              color: "#e9d7bf",
              fontFamily: SANS,
              fontSize: 24,
              letterSpacing: 5,
              textTransform: "uppercase",
            }}
          >
            IIT Jodhpur — B.S. in Management and Technology
          </div>
        </div>
      </div>
    ),
    size
  );
}
