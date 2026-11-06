(() => {
  const d = document.documentElement;
  const over = d.scrollWidth - window.innerWidth;
  const bad = [];
  if (over > 1) {
    for (const el of document.querySelectorAll("body *")) {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.right > window.innerWidth + 1) {
        let p = el.parentElement, contained = false;
        while (p) {
          const s = getComputedStyle(p);
          if (/(auto|scroll|hidden)/.test(s.overflowX + s.overflow)) { contained = true; break; }
          p = p.parentElement;
        }
        if (!contained) bad.push(el.tagName + "." + String(el.className).slice(0, 60) + "@r" + Math.round(r.right));
        if (bad.length > 6) break;
      }
    }
  }
  return JSON.stringify({ w: window.innerWidth, sw: d.scrollWidth, over, bad });
})()
