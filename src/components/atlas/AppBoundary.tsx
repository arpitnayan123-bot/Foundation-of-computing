"use client";

/* ============================================================
   THE ATLAS — client shell boundary.

   app/error.tsx (the App Router boundary) only catches crashes
   that reach the route segment; render errors inside the hash
   router's client tree (landing, ⌘K palette, ledger, a shelf
   app's own shell) would otherwise blank the whole tab. This
   class boundary wraps that tree (see src/app/page.tsx) and
   shows the warm recovery view instead. Per-section crashes
   inside a shelf stay the job of the finer-grained PartBoundary.

   The recovery view is exported so app/error.tsx and this
   boundary always look and behave identically.
   ============================================================ */

import React, { useEffect, useRef } from "react";
import { Compass } from "lucide-react";

/**
 * Full-screen, on-brand recovery view. Focused on mount so screen
 * readers announce the failure instead of meeting silence; the two
 * actions cover the realistic recoveries (re-render, or full reload).
 */
export function AtlasRecovery({ onReset }: { onReset: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.focus({ preventScroll: true });
  }, []);

  return (
    <div
      ref={ref}
      tabIndex={-1}
      role="alert"
      className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 py-16 text-center outline-none"
      style={{ background: "linear-gradient(165deg,#070509 0%,#160d06 55%,#241608 100%)" }}
    >
      <span
        aria-hidden
        className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#f59e0b]/25 bg-[#f59e0b]/10"
      >
        <Compass className="h-7 w-7" style={{ color: "#f59e0b" }} />
      </span>
      <h1 className="font-display text-3xl font-black text-[#f7ecdd] md:text-5xl">
        The atlas hit a snag.
      </h1>
      <p className="max-w-md text-[.95rem] leading-relaxed text-[#a89a86]">
        Something broke while drawing this view — but not your work: notes, progress and
        drafts all live safely on this device.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex h-11 items-center rounded-full px-6 text-[.74rem] font-black uppercase tracking-[.16em] text-[#160d06] transition-[filter] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f59e0b]"
          style={{ background: "linear-gradient(135deg,#fbbf24,#ea580c)" }}
        >
          Try again
        </button>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="inline-flex h-11 items-center rounded-full border border-white/15 bg-white/[.05] px-6 text-[.74rem] font-black uppercase tracking-[.16em] text-[#e9d7bf] transition-colors hover:bg-white/[.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f59e0b]"
        >
          Reload the atlas
        </button>
      </div>
    </div>
  );
}

interface AppBoundaryProps {
  children: React.ReactNode;
}

interface AppBoundaryState {
  error: Error | null;
}

export class AppBoundary extends React.Component<AppBoundaryProps, AppBoundaryState> {
  state: AppBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): Partial<AppBoundaryState> {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // surface the failure for dev debugging; the UI stays warm either way
    if (process.env.NODE_ENV !== "production") {
      console.error("[AppBoundary]", error, info.componentStack);
    }
  }

  private retry = () => {
    this.setState({ error: null });
  };

  render() {
    if (this.state.error) {
      return <AtlasRecovery onReset={this.retry} />;
    }
    return this.props.children;
  }
}
