(() => {
  // walk up from the widest element: an element only contributes to
  // document scroll overflow if NO ancestor clips it
  function clipped(el) {
    let p = el.parentElement;
    while (p && p !== document.body) {
      const s = getComputedStyle(p);
      if (["hidden", "auto", "scroll", "clip"].includes(s.overflowX) || ["hidden", "auto", "scroll", "clip"].includes(s.overflow)) return true;
      p = p.parentElement;
    }
    return false;
  }
  const out = [];
  for (const el of document.querySelectorAll("body *")) {
    const r = el.getBoundingClientRect();
    if (r.width > 0 && r.right > window.innerWidth + 1 && !clipped(el)) {
      out.push({ tag: el.tagName, cls: String(el.className).slice(0, 70), right: Math.round(r.right), pos: getComputedStyle(el).position });
    }
  }
  out.sort((a, b) => b.right - a.right);
  return JSON.stringify({ w: innerWidth, sw: document.documentElement.scrollWidth, contrib: out.slice(0, 6) });
})()
