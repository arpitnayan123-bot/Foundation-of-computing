/* ============================================================
   Runaway-code guard for the main-thread Pyodide runtime.

   Pyodide executes on the UI thread, so a beginner classic like
   `while True: pass` (or a print flood) would otherwise freeze
   the tab forever with no way back but a reload.

   The guard is cooperative: a sys.settrace hook counts line
   events while user code runs, and raises KeyboardInterrupt once
   a generous budget is exhausted. Pure-Python runaway loops (the
   realistic case for this course) emit line events, so they are
   stopped and reported as a normal traceback; the page never
   loses its UI. Legit course snippets use a few thousand line
   events — the 5M budget is ~1000x headroom.

   Install/remove runs inside a throwaway globals dict so the
   notebook namespace stays clean, and a depth counter keeps the
   hook alive while nested runs (lab + code block) overlap.
   ============================================================ */

import type { PyodideLike } from "./pyruntime";

/** Line-event budget before a cell is force-stopped. */
const STEP_LIMIT = 5_000_000;

export const INSTALL_STEP_GUARD = `
import sys as _sys
class _FoCGuard:
    __slots__ = ("_n",)
    def __init__(self):
        self._n = 0
    def __call__(self, _frame, event, _arg):
        if event == "line":
            self._n += 1
            if self._n > ${STEP_LIMIT}:
                raise KeyboardInterrupt(
                    "cell stopped — it ran far too long (check for an infinite loop)"
                )
        return self
_sys.settrace(_FoCGuard())
del _sys, _FoCGuard
`;

export const REMOVE_STEP_GUARD = `
import sys as _sys
_sys.settrace(None)
del _sys
`;

let guardDepth = 0;

/**
 * Run `fn` with the step-guard installed. Nests safely: the tracer
 * is only removed when the outermost guarded run finishes.
 */
export async function withStepGuard<T>(py: PyodideLike, fn: () => Promise<T>): Promise<T> {
  guardDepth += 1;
  const tmp = py.globals.get("dict")() as { destroy?: () => void };
  try {
    if (guardDepth === 1) {
      await py.runPythonAsync(INSTALL_STEP_GUARD, { globals: tmp });
    }
    return await fn();
  } finally {
    guardDepth -= 1;
    if (guardDepth === 0) {
      try {
        await py.runPythonAsync(REMOVE_STEP_GUARD, { globals: tmp });
      } catch {
        /* tracer already gone — nothing to do */
      }
    }
    tmp.destroy?.();
  }
}

/** Cap for captured stdout/stderr so a print flood can't OOM the tab. */
export const OUTPUT_CAP = 200_000;

/**
 * Build a stateful push() for stdout/stderr batched handlers that
 * stops buffering once OUTPUT_CAP is reached.
 */
export function makeCappedPush(onLine: (buf: string) => void): (s: string) => void {
  let buf = "";
  let truncated = false;
  return (s: string) => {
    if (truncated) return; // keep the interpreter alive, just stop buffering
    buf += s + "\n";
    if (buf.length > OUTPUT_CAP) {
      buf += "… output truncated — too many characters (infinite print loop?)";
      truncated = true;
    }
    onLine(buf);
  };
}
