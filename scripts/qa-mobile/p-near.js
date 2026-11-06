(() => {
  const out = [];
  for (const el of document.querySelectorAll("body *")) {
    const r = el.getBoundingClientRect();
    if (r.right > window.innerWidth + 1 && r.right < window.innerWidth + 60 && r.width > 0) {
      out.push({ tag: el.tagName, cls: String(el.className).slice(0, 80), right: Math.round(r.right), w: Math.round(r.width) });
    }
  }
  return JSON.stringify({ w: innerWidth, sw: document.documentElement.scrollWidth, near: out.slice(0, 10) });
})()
