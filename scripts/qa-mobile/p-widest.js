(() => {
  const out = [];
  for (const el of document.querySelectorAll("body *")) {
    const r = el.getBoundingClientRect();
    if (r.right > window.innerWidth + 1 && r.width > 0) {
      const cs = getComputedStyle(el);
      out.push({ tag: el.tagName, cls: String(el.className).slice(0, 70), right: Math.round(r.right), w: Math.round(r.width), ovx: cs.overflowX, pos: cs.position });
    }
  }
  out.sort((a, b) => b.right - a.right);
  return JSON.stringify({ w: innerWidth, sw: document.documentElement.scrollWidth, top: out.slice(0, 8) });
})()
