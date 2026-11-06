(() => [...document.querySelectorAll('button')].some(b => (b.getAttribute('aria-label') || '').includes('Print')) ? 1 : 0)()
