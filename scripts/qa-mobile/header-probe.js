/* Mobile header probe — run via agent-browser eval.
   Reports, for the first nav/header landmark on the page:
   - nav width vs viewport (horizontal overflow)
   - controls that stick out of the viewport
   - controls smaller than the 44px touch-target floor */
(function () {
  var n = document.querySelector('nav') || document.querySelector('header');
  if (!n) return JSON.stringify({ nav: null });
  var r = n.getBoundingClientRect();
  var ctrls = Array.prototype.slice.call(n.querySelectorAll('button, a, [role="button"]'));
  var over = ctrls.filter(function (el) {
    var b = el.getBoundingClientRect();
    return b.right > window.innerWidth + 1 || b.left < -1;
  }).map(function (el) {
    return (el.getAttribute('aria-label') || el.textContent.trim().slice(0, 14));
  });
  var small = ctrls.filter(function (el) {
    var b = el.getBoundingClientRect();
    return b.width < 44 || b.height < 44;
  }).map(function (el) {
    var b = el.getBoundingClientRect();
    return (el.getAttribute('aria-label') || el.textContent.trim().slice(0, 12)) + ':' + Math.round(b.width) + 'x' + Math.round(b.height);
  });
  return JSON.stringify({
    nav: n.getAttribute('aria-label') || n.tagName,
    navW: Math.round(r.width),
    viewport: window.innerWidth,
    overflow: over,
    smallTargets: small
  });
})()
