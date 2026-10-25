(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/use-section-progress.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSectionProgress",
    ()=>useSectionProgress
]);
/* ============================================================
   useSectionProgress — marks chapters as read while the reader
   scrolls, and returns the set of read section ids for the
   chapter menus to decorate.

   Semantics mirror the scroll-spy in each subject's top nav:
   a section counts as read once its top rises above ~1/3 of
   the viewport — and everything above the furthest-reached
   section is swept in too (furthest-read semantics, like a
   Kindle). Reaching the very bottom reads the last chapter,
   which plain probe logic would miss.

   Writes go to lib/progress.ts ("atlas:progress:v1"); state
   updates fire only when a NEW section becomes read, never
   per scroll tick.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/progress.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useSectionProgress(subject, orderedIds) {
    _s();
    const [seen, setSeen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useSectionProgress.useState": ()=>new Set()
    }["useSectionProgress.useState"]);
    const seenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    /* ids identity is stable per module (each app passes a module-scope
     constant) — but guard anyway so effect deps stay honest */ const idsKey = orderedIds.join("|");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSectionProgress.useEffect": ()=>{
            const ids = idsKey.split("|").filter(Boolean);
            if (ids.length === 0) return;
            let raf = 0;
            let maxIdx = -1; // furthest index already swept this visit
            let ticking = false;
            const restore = {
                "useSectionProgress.useEffect.restore": ()=>{
                    const saved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadProgress"])()[subject] ?? {};
                    const initial = new Set(ids.filter({
                        "useSectionProgress.useEffect.restore": (id)=>saved[id]
                    }["useSectionProgress.useEffect.restore"]));
                    seenRef.current = initial;
                    setSeen(initial);
                }
            }["useSectionProgress.useEffect.restore"];
            const sweep = {
                "useSectionProgress.useEffect.sweep": ()=>{
                    ticking = false;
                    const probe = window.innerHeight * 0.32;
                    const doc = document.documentElement;
                    const atBottom = doc.scrollHeight - doc.scrollTop - doc.clientHeight < 40;
                    let furthest = -1;
                    for(let i = 0; i < ids.length; i += 1){
                        const el = document.getElementById(ids[i]);
                        if (el && el.getBoundingClientRect().top <= probe) furthest = i;
                    }
                    if (atBottom) furthest = ids.length - 1;
                    if (furthest <= maxIdx) return;
                    maxIdx = furthest;
                    const fresh = [];
                    for(let i = 0; i <= furthest; i += 1){
                        if (!seenRef.current.has(ids[i])) fresh.push(ids[i]);
                    }
                    if (fresh.length === 0) return;
                    const next = new Set(seenRef.current);
                    for (const id of fresh)next.add(id);
                    seenRef.current = next;
                    setSeen(next);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markSectionsSeen"])(subject, fresh);
                }
            }["useSectionProgress.useEffect.sweep"];
            const onScroll = {
                "useSectionProgress.useEffect.onScroll": ()=>{
                    if (!ticking) {
                        ticking = true;
                        requestAnimationFrame(sweep);
                    }
                }
            }["useSectionProgress.useEffect.onScroll"];
            /* rAF-deferred restore + first sweep — keeps first paint
       hydration-stable and satisfies set-state-in-effect lint */ raf = requestAnimationFrame({
                "useSectionProgress.useEffect": ()=>{
                    restore();
                    sweep();
                }
            }["useSectionProgress.useEffect"]);
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            window.addEventListener("resize", onScroll);
            return ({
                "useSectionProgress.useEffect": ()=>{
                    cancelAnimationFrame(raf);
                    window.removeEventListener("scroll", onScroll);
                    window.removeEventListener("resize", onScroll);
                }
            })["useSectionProgress.useEffect"];
        }
    }["useSectionProgress.useEffect"], [
        subject,
        idsKey
    ]);
    return seen;
}
_s(useSectionProgress, "omuIDmhN1Ns8CKaNH7ai/N7gsoI=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/use-open-section.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "jumpTo",
    ()=>jumpTo,
    "useOpenSection",
    ()=>useOpenSection
]);
/* ============================================================
   Open-a-chapter handoff — the receiving end of the ⌘K palette's
   "Chapters" group.

   A chapter jump arrives in two ways:
   • cross-view — the palette leaves sessionStorage
     "atlas:open-section" = {"subject","section"} before switching
     the hash; the freshly-mounted subject app consumes it here.
   • same shelf — the palette dispatches the live
     "atlas:open-section" event and this hook scrolls right away.

   The mount path polls requestAnimationFrame until the section's
   DOM node exists (the shelf chunk may still be loading behind
   the view transition), capped at ~4s, then smooth-scrolls to it
   and flashes a soft amber ring so the reader sees where they
   landed. A short watchdog re-checks the arrival — very long
   smooth scrolls on a still-settling page can land a few pixels
   short or get interrupted — and nudges the window until the
   chapter sits under the fixed nav. Honors prefers-reduced-motion.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const FLAG = "atlas:open-section";
const EVENT = "atlas:open-section";
const FLASH_MS = 2400;
const MAX_FRAMES = 240; // ~4s at 60fps — chunk load + shelf transition
/** the section's own scroll-mt-20 — where "arrived" means */ const SCROLL_MARGIN = 80;
/** viewport-top band inside which the section counts as arrived */ const BAND = {
    min: 52,
    max: 116
};
const WATCHDOG_TICKS = 6;
const WATCHDOG_MS = 420;
let watchdogId = null;
function jumpTo(el) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start"
    });
    el.classList.remove("atlas-jump-flash");
    void el.offsetWidth; // restart the animation when the same section repeats
    el.classList.add("atlas-jump-flash");
    window.setTimeout(()=>el.classList.remove("atlas-jump-flash"), FLASH_MS);
    /* convergence watchdog — stop as soon as the chapter rests under
     the nav, the document clamps (can't scroll further), or the
     tick budget runs out; a newer jump always wins */ if (watchdogId !== null) window.clearInterval(watchdogId);
    let checks = 0;
    let lastY = -1;
    watchdogId = window.setInterval(()=>{
        checks += 1;
        if (checks > WATCHDOG_TICKS) {
            window.clearInterval(watchdogId ?? 0);
            watchdogId = null;
            return;
        }
        const top = el.getBoundingClientRect().top;
        if (top >= BAND.min && top <= BAND.max) return; // arrived
        const y = window.scrollY;
        const docTop = top + y;
        window.scrollTo({
            top: Math.max(0, docTop - SCROLL_MARGIN),
            behavior: "auto"
        });
        if (window.scrollY === y && y === lastY) {
            // clamped at the document edge — no further nudge will help
            window.clearInterval(watchdogId ?? 0);
            watchdogId = null;
            return;
        }
        lastY = window.scrollY;
    }, WATCHDOG_MS);
}
function useOpenSection(subject, onSection) {
    _s();
    /* keep the latest callback without re-subscribing the listeners */ const onSectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onSection);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useOpenSection.useEffect": ()=>{
            onSectionRef.current = onSection;
        }
    }["useOpenSection.useEffect"], [
        onSection
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useOpenSection.useEffect": ()=>{
            const route = {
                "useOpenSection.useEffect.route": (section)=>{
                    if (onSectionRef.current) {
                        onSectionRef.current(section);
                        return;
                    }
                    const el = document.getElementById(section);
                    if (el) jumpTo(el);
                }
            }["useOpenSection.useEffect.route"];
            /* queued handoff from another view (landing, ledger, another shelf) */ let queued = null;
            try {
                const raw = sessionStorage.getItem(FLAG);
                if (raw) {
                    const parsed = JSON.parse(raw);
                    if (parsed?.subject === subject && typeof parsed.section === "string") {
                        queued = parsed.section;
                    }
                    sessionStorage.removeItem(FLAG); // consumed or stale — either way it's spent
                }
            } catch  {
            /* private mode — live events still work */ }
            const onLive = {
                "useOpenSection.useEffect.onLive": (e)=>{
                    const section = e.detail;
                    if (typeof section !== "string" || !section) return;
                    route(section);
                }
            }["useOpenSection.useEffect.onLive"];
            window.addEventListener(EVENT, onLive);
            if (queued) {
                if (onSectionRef.current) {
                    onSectionRef.current(queued);
                } else {
                    let frames = 0;
                    const tick = {
                        "useOpenSection.useEffect.tick": ()=>{
                            const el = document.getElementById(queued);
                            if (el) {
                                jumpTo(el);
                                return;
                            }
                            if (++frames < MAX_FRAMES) requestAnimationFrame(tick);
                        }
                    }["useOpenSection.useEffect.tick"];
                    requestAnimationFrame(tick);
                }
            }
            return ({
                "useOpenSection.useEffect": ()=>window.removeEventListener(EVENT, onLive)
            })["useOpenSection.useEffect"];
        }
    }["useOpenSection.useEffect"], [
        subject
    ]);
}
_s(useOpenSection, "h36VezOI1lEddxTgZzgdPfe5qgA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/pyruntime.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ============================================================
   Shared in-browser Python runtime (Pyodide / CPython 3.12 WASM)
   Loaded lazily on the first ▶ Run click, then reused by every
   runnable CodeBlock on the page.
   ============================================================ */ __turbopack_context__.s([
    "PURGE_USER_MODULES",
    ()=>PURGE_USER_MODULES,
    "cleanTraceback",
    ()=>cleanTraceback,
    "getNotebookGlobals",
    ()=>getNotebookGlobals,
    "getPyodide",
    ()=>getPyodide,
    "normalizeOutput",
    ()=>normalizeOutput,
    "resetNotebookGlobals",
    ()=>resetNotebookGlobals,
    "withRunLock",
    ()=>withRunLock
]);
const PYODIDE_VERSION = "0.26.4"; // ships CPython 3.12 — matches the label shown in the terminal
const PYODIDE_BASE = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;
let pyPromise = null;
const CDN_ERROR = "Could not reach the Python runtime CDN. Check your internet connection and try again.";
function injectScript(src) {
    return new Promise((resolve, reject)=>{
        if (window.loadPyodide) {
            resolve();
            return;
        }
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
            // Another call is mid-load — piggyback on its events. If that earlier
            // attempt already errored, the tag will have been removed (see below),
            // so a stale, never-firing element can't wedge the retry forever.
            existing.addEventListener("load", ()=>resolve(), {
                once: true
            });
            existing.addEventListener("error", ()=>{
                existing.remove(); // dead tag out of the DOM so the next retry is clean
                reject(new Error(CDN_ERROR));
            }, {
                once: true
            });
            return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = ()=>resolve();
        script.onerror = ()=>{
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
   ============================================================ */ let runTail = Promise.resolve();
function withRunLock(fn) {
    const next = runTail.then(fn, fn);
    // keep the chain alive no matter how a run ends
    runTail = next.then(()=>undefined, ()=>undefined);
    return next;
}
function getPyodide(onProgress) {
    if (pyPromise) return pyPromise;
    pyPromise = (async ()=>{
        onProgress?.("Fetching the Python runtime · about 10 MB · first run only…");
        await injectScript(PYODIDE_BASE + "pyodide.js");
        if (!window.loadPyodide) {
            throw new Error("Python runtime failed to initialise — please try again.");
        }
        onProgress?.("Booting the interpreter…");
        const py = await window.loadPyodide({
            indexURL: PYODIDE_BASE
        });
        // Make sure plain `import my_module` resolves files written to the FS.
        try {
            await py.runPythonAsync("import sys, os\n" + "if '' not in sys.path:\n" + "    sys.path.insert(0, os.getcwd())\n");
        } catch  {
        /* non-fatal */ }
        window.dispatchEvent(new Event("foc-py-ready"));
        return py;
    })();
    // Allow a retry if the CDN fetch fails.
    pyPromise.catch(()=>{
        pyPromise = null;
    });
    return pyPromise;
}
const PURGE_USER_MODULES = "import sys\n" + "for _k, _m in list(sys.modules.items()):\n" + "    _f = getattr(_m, '__file__', None) or ''\n" + "    if _f and not _f.startswith('/lib/') and not _f.startswith('/opt/'):\n" + "        del sys.modules[_k]\n" + "del sys\n";
let notebookGlobals = null;
async function getNotebookGlobals() {
    const py = await getPyodide();
    if (!notebookGlobals) {
        notebookGlobals = py.globals.get("dict")();
    }
    return notebookGlobals;
}
function resetNotebookGlobals() {
    try {
        notebookGlobals?.destroy?.();
    } catch  {
    /* already torn down */ }
    notebookGlobals = null;
}
function cleanTraceback(raw) {
    const lines = raw.split("\n");
    const kept = [];
    let skippingLibAnnotations = false;
    for (const line of lines){
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
        kept.push(line.replace(/File "<exec>"/g, 'File "your code"').replace(/File "<string>"/g, 'File "your code"'));
    }
    return kept.join("\n").trim();
}
function normalizeOutput(s) {
    return s.split("\n").map((l)=>l.replace(/\s+$/, "")).filter((l)=>l.trim().length > 0).join("\n").trim();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/pyguard.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
   ============================================================ */ __turbopack_context__.s([
    "INSTALL_STEP_GUARD",
    ()=>INSTALL_STEP_GUARD,
    "OUTPUT_CAP",
    ()=>OUTPUT_CAP,
    "REMOVE_STEP_GUARD",
    ()=>REMOVE_STEP_GUARD,
    "makeCappedPush",
    ()=>makeCappedPush,
    "withStepGuard",
    ()=>withStepGuard
]);
/** Line-event budget before a cell is force-stopped. */ const STEP_LIMIT = 5_000_000;
const INSTALL_STEP_GUARD = `
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
const REMOVE_STEP_GUARD = `
import sys as _sys
_sys.settrace(None)
del _sys
`;
let guardDepth = 0;
async function withStepGuard(py, fn) {
    guardDepth += 1;
    const tmp = py.globals.get("dict")();
    try {
        if (guardDepth === 1) {
            await py.runPythonAsync(INSTALL_STEP_GUARD, {
                globals: tmp
            });
        }
        return await fn();
    } finally{
        guardDepth -= 1;
        if (guardDepth === 0) {
            try {
                await py.runPythonAsync(REMOVE_STEP_GUARD, {
                    globals: tmp
                });
            } catch  {
            /* tracer already gone — nothing to do */ }
        }
        tmp.destroy?.();
    }
}
const OUTPUT_CAP = 200_000;
function makeCappedPush(onLine) {
    let buf = "";
    let truncated = false;
    return (s)=>{
        if (truncated) return; // keep the interpreter alive, just stop buffering
        buf += s + "\n";
        if (buf.length > OUTPUT_CAP) {
            buf += "… output truncated — too many characters (infinite print loop?)";
            truncated = true;
        }
        onLine(buf);
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_lib_dbeb30eb._.js.map