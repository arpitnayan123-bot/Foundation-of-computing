"use client";

/* ============================================================
   PartBoundary — a render shield around every animated Part
   section of a subject app. One throwing diagram (a bad math
   edge case, a framer-motion regression, a corrupt SVG path)
   used to unmount the ENTIRE subject to a white screen; now it
   trips only its own boundary and the reader keeps everything
   else on the page. "Try again" remounts the section fresh.
   ============================================================ */

import React from "react";

interface PartBoundaryProps {
  children: React.ReactNode;
  /** short human label shown in the fallback (e.g. "The DIKW pyramid") */
  label?: string;
}

interface PartBoundaryState {
  error: Error | null;
  /** bumped on retry to force a clean remount of the subtree */
  attempt: number;
}

export class PartBoundary extends React.Component<PartBoundaryProps, PartBoundaryState> {
  state: PartBoundaryState = { error: null, attempt: 0 };

  static getDerivedStateFromError(error: Error): Partial<PartBoundaryState> {
    return { error };
  }

  componentDidCatch(error: Error) {
    // Keep the page alive; surface the failure for dev debugging.
    if (process.env.NODE_ENV !== "production") {
      console.error("[PartBoundary]", this.props.label ?? "section", error);
    }
  }

  private retry = () => {
    this.setState((s) => ({ error: null, attempt: s.attempt + 1 }));
  };

  render() {
    if (this.state.error) {
      return (
        <section className="page-section" aria-live="polite">
          <div className="mx-auto my-8 max-w-xl rounded-2xl border border-[#e8dcc0] bg-[#fffaf1] p-6 text-center shadow-sm">
            <p className="font-display text-lg font-bold text-[#2b1d10]">
              This diagram hit a snag{this.props.label ? ` — ${this.props.label}` : ""}.
            </p>
            <p className="mt-1 text-[.85rem] leading-relaxed text-[#8a6d4f]">
              The rest of the chapter is unaffected — keep reading, or give the machine another chance.
            </p>
            <button
              type="button"
              onClick={this.retry}
              className="mt-4 rounded-full border border-[#e8dcc0] bg-white px-5 py-2 text-[.68rem] font-black uppercase tracking-[.14em] text-[#8a4508] transition-colors hover:bg-[#f9e8d2]"
            >
              Try again
            </button>
          </div>
        </section>
      );
    }
    return <React.Fragment key={this.state.attempt}>{this.props.children}</React.Fragment>;
  }
}
