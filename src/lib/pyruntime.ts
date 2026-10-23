/* ============================================================
   Shared in-browser Python runtime (Pyodide / CPython 3.12 WASM)
   Loaded lazily on the first ▶ Run click, then reused by every
   runnable CodeBlock on the page.
   ============================================================ */

export interface PyodideLike {
  runPythonAsync(code: string, options?: { globals?: unknown }): Promise<unknown>;
  globals: { get(name: string): (...args: unknown[]) => unknown };
  setStdout(handler?: { batched?: (s: string) => void }): void;
  setStderr(handler?: { batched?: (s: string) => void }): void;
  setStdin(handler?: { stdin?: () => string | null }): void;
  FS: { writeFile(path: string, data: string): void };
}

declare global {
  interface Window {
    loadPyodide?: (options: { indexURL: string }) => Promise<PyodideLike>;
  }
}

const PYODIDE_VERSION = "0.26.4"; // ships CPython 3.12 — matches the label shown in the terminal
const PYODIDE_BASE = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;

let pyPromise: Promise<PyodideLike> | null = null;

const CDN_ERROR =
  "Could not reach the Python runtime CDN. Check your internet connection and try again.";

function injectScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.loadPyodide) {
      resolve();
      return;
    }
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
    if (existing) {
      // Another call is mid-load — piggyback on its events. If that earlier
      // attempt already errored, the tag will have been removed (see below),
      // so a stale, never-firing element can't wedge the retry forever.
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => {
          existing.remove(); // dead tag out of the DOM so the next retry is clean
          reject(new Error(CDN_ERROR));
        },
        { once: true }
      );
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      script.remove(); // CRITICAL: without this, a later retry would find the
      // failed element and attach listeners that can never fire again —
      // permanently bricking every Run button until a page reload.
      reject(new Error(CDN_ERROR));
    };
    document.head.appendChild(script);
  });
}

/* ============================================================
   Global run lock — Pyodide executes on the main thread and owns
   exactly ONE global stdout/stderr/stdin handler. Concurrent runs
   (two CodeBlocks, or a CodeBlock + the Lab) would clobber each
   other's stream capture. Serializing every user-code execution
   through this promise chain guarantees a single active runner:
   later runs simply queue until the earlier one finishes.
   ============================================================ */

let runTail: Promise<unknown> = Promise.resolve();

export function withRunLock<T>(fn: () => Promise<T>): Promise<T> {
  const next = runTail.then(fn, fn);
  // keep the chain alive no matter how a run ends
  runTail = next.then(
    () => undefined,
    () => undefined
  );
  return next;
}

/**
 * Boot the (single, shared) Python interpreter.
 * `onProgress` receives friendly loading messages for the terminal UI.
 */
export function getPyodide(onProgress?: (msg: string) => void): Promise<PyodideLike> {
  if (pyPromise) return pyPromise;
  pyPromise = (async () => {
    onProgress?.("Fetching the Python runtime · about 10 MB · first run only…");
    await injectScript(PYODIDE_BASE + "pyodide.js");
    if (!window.loadPyodide) {
      throw new Error("Python runtime failed to initialise — please try again.");
    }
    onProgress?.("Booting the interpreter…");
    const py = await window.loadPyodide({ indexURL: PYODIDE_BASE });
    // Make sure plain `import my_module` resolves files written to the FS.
    try {
      await py.runPythonAsync(
        "import sys, os\n" +
          "if '' not in sys.path:\n" +
          "    sys.path.insert(0, os.getcwd())\n"
      );
    } catch {
      /* non-fatal */
    }
    window.dispatchEvent(new Event("foc-py-ready"));
    return py;
  })();
  // Allow a retry if the CDN fetch fails.
  pyPromise.catch(() => {
    pyPromise = null;
  });
  return pyPromise;
}

/**
 * Run before every snippet so each block starts clean:
 * purge previously-imported user modules (pizza, car, electric_car…)
 * from sys.modules, otherwise a module cached by an earlier block
 * would shadow the freshly-written one.
 */
export const PURGE_USER_MODULES =
  "import sys\n" +
  "for _k, _m in list(sys.modules.items()):\n" +
  "    _f = getattr(_m, '__file__', None) or ''\n" +
  "    if _f and not _f.startswith('/lib/') and not _f.startswith('/opt/'):\n" +
  "        del sys.modules[_k]\n" +
  "del sys\n";

/* ============================================================
   Notebook-style persistent namespace (Python Lab)
   Unlike CodeBlock runs (fresh dict every time), the Lab keeps
   ONE global namespace so variables/functions defined in an
   earlier cell stay available in later cells — exactly like
   Colab / Jupyter.
   ============================================================ */
type NamespaceHandle = { destroy?: () => void };

let notebookGlobals: NamespaceHandle | null = null;

export async function getNotebookGlobals(): Promise<NamespaceHandle> {
  const py = await getPyodide();
  if (!notebookGlobals) {
    notebookGlobals = py.globals.get("dict")() as NamespaceHandle;
  }
  return notebookGlobals;
}

/** "Restart kernel" — wipes every variable the learner defined. */
export function resetNotebookGlobals(): void {
  try {
    notebookGlobals?.destroy?.();
  } catch {
    /* already torn down */
  }
  notebookGlobals = null;
}

/**
 * Pyodide tracebacks are noisy: they include frames from Pyodide's own
 * bootstrap files (/lib/python3.12/_pyodide/_base.py …). Keep only the
 * frames that belong to the learner's code and rename <exec> → your code.
 */
export function cleanTraceback(raw: string): string {
  const lines = raw.split("\n");
  const kept: string[] = [];
  let skippingLibAnnotations = false;
  for (const line of lines) {
    const isFrame = /^\s+File "/.test(line);
    const isLibFrame = isFrame && /\/lib\/python|_pyodide|\/pyodide\//.test(line);
    if (isLibFrame) {
      skippingLibAnnotations = true; // drop this frame AND every annotation line under it
      continue;
    }
    if (skippingLibAnnotations) {
      if (!isFrame) continue; // source line / caret line of the dropped frame
      skippingLibAnnotations = false; // reached the next real frame — keep it
    }
    kept.push(
      line.replace(/File "<exec>"/g, 'File "your code"').replace(/File "<string>"/g, 'File "your code"')
    );
  }
  return kept.join("\n").trim();
}

/** Normalise program output so a live run can be compared to the static OUTPUT panel. */
export function normalizeOutput(s: string): string {
  return s
    .split("\n")
    .map((l) => l.replace(/\s+$/, ""))
    .filter((l) => l.trim().length > 0)
    .join("\n")
    .trim();
}
