"use client";

/* ============================================================
   THE ATLAS — App Router error boundary.
   Any crash that escapes every finer boundary (PartBoundary per
   diagram, AppBoundary around the hash-router shell) lands here:
   a warm, on-brand recovery screen instead of a blank tab.
   ============================================================ */

import { useEffect } from "react";
import { AtlasRecovery } from "@/components/atlas/AppBoundary";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // keep the terminal / monitoring as the source of truth for debugging
    console.error("[atlas] route error:", error);
  }, [error]);

  return <AtlasRecovery onReset={reset} />;
}
