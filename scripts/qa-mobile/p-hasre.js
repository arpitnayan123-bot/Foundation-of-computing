(() => { const r = new RegExp(window.__pat || 'zzz', 'i'); return r.test(document.body.innerText) ? 1 : 0; })()
