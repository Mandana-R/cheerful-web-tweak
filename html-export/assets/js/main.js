// Standalone export — shared header/footer + interactivity
// No frameworks, no build tools.

(function () {
  const PAGES = [
    { href: 'index.html',          label: 'Home' },
    { href: 'shippers.html',       label: 'Shippers' },
    { href: 'carriers.html',       label: 'Carriers' },
    { href: 'services.html',       label: 'Services' },
    { href: 'rate-calculator.html',label: 'Rate Calculator' },
    { href: 'about.html',          label: 'About' },
    { href: 'blog.html',           label: 'Blog' },
    { href: 'contact.html',        label: 'Contact' },
    { href: 'account.html',        label: 'Account' },
  ];

  const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  function renderHeader() {
    const slot = document.getElementById('site-header');
    if (!slot) return;
    slot.innerHTML = `
      <header class="site-header">
        <div class="container inner">
          <a class="brand" href="index.html">
            <img src="assets/img/Logo.jpg" alt="Logo" />
            <span>Cheerful Logistics</span>
          </a>
          <button class="menu-toggle" aria-label="Menu" id="menuBtn">☰</button>
          <nav class="nav" id="mainNav">
            ${PAGES.map(p => `<a href="${p.href}" class="${here === p.href ? 'active' : ''}">${p.label}</a>`).join('')}
          </nav>
        </div>
      </header>`;
    document.getElementById('menuBtn').addEventListener('click', () => {
      document.getElementById('mainNav').classList.toggle('open');
    });
  }

  function renderFooter() {
    const slot = document.getElementById('site-footer');
    if (!slot) return;
    const year = new Date().getFullYear();
    slot.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="grid">
            <div>
              <div class="brand" style="margin-bottom:12px"><img src="assets/img/Logo.jpg" alt=""/><span>Cheerful Logistics</span></div>
              <p class="muted">Reliable expedited freight, fair pricing, transparent tracking — built for shippers and carriers.</p>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="contact.html">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4>For You</h4>
              <ul>
                <li><a href="shippers.html">Shippers</a></li>
                <li><a href="carriers.html">Carriers</a></li>
                <li><a href="rate-calculator.html">Rate Calculator</a></li>
                <li><a href="account.html">Account</a></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li><a href="contact.html">Contact Us</a></li>
                <li class="muted">Mon–Sun · 24/7 Dispatch</li>
              </ul>
            </div>
          </div>
          <div class="copyright">© ${year} Cheerful Logistics. All rights reserved.</div>
        </div>
      </footer>`;
  }

  function reveal() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('visible')); return; }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(e => io.observe(e));
  }

  function initSlider(root) {
    const slides = root.querySelector('.slides');
    const items = root.querySelectorAll('.slide');
    const dotsWrap = root.querySelector('.dots');
    if (!slides || !items.length || !dotsWrap) return;
    let i = 0;
    items.forEach((_, idx) => {
      const b = document.createElement('button');
      b.className = 'dot' + (idx === 0 ? ' active' : '');
      b.addEventListener('click', () => go(idx));
      dotsWrap.appendChild(b);
    });
    function go(n) {
      i = (n + items.length) % items.length;
      slides.style.transform = `translateX(-${i * 100}%)`;
      dotsWrap.querySelectorAll('.dot').forEach((d, idx) => d.classList.toggle('active', idx === i));
    }
    setInterval(() => go(i + 1), 5000);
  }

  function initRateCalculator() {
    const form = document.getElementById('rateForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const miles = Math.max(1, Number(fd.get('miles') || 0));
      const equipment = String(fd.get('equipment') || 'sprinter');
      const urgency = String(fd.get('urgency') || 'standard');
      const baseRates = { sprinter: 1.65, smallStraight: 2.10, largeStraight: 2.55, semi: 2.95 };
      const urgencyMult = { standard: 1.0, expedited: 1.25, hotshot: 1.45 };
      const fuel = 0.18;
      const rate = baseRates[equipment] || 1.8;
      const subtotal = miles * rate;
      const total = subtotal * (urgencyMult[urgency] || 1) * (1 + fuel);
      const out = document.getElementById('rateResult');
      out.style.display = 'block';
      out.innerHTML = `
        <div class="price">$${total.toFixed(2)}</div>
        <div class="muted">Estimated all-in rate · ${miles} mi · ${equipment} · ${urgency}</div>
        <ul class="checklist" style="margin-top:10px">
          <li>Base: $${subtotal.toFixed(2)} (${rate.toFixed(2)}/mi)</li>
          <li>Urgency multiplier: ×${urgencyMult[urgency]}</li>
          <li>Fuel surcharge: +${(fuel*100).toFixed(0)}%</li>
        </ul>`;
    });
  }

  function initContactForm() {
    const f = document.getElementById('contactForm');
    if (!f) return;
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      const m = document.getElementById('contactMsg');
      m.textContent = 'Thanks! Your message has been queued (demo · static export).';
      m.style.color = 'var(--primary-2)';
      f.reset();
    });
  }

  function initCarrierForm() {
    const f = document.getElementById('carrierForm');
    if (!f) return;
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      const m = document.getElementById('carrierMsg');
      m.textContent = 'Application received! A dispatcher will reach out shortly (demo).';
      m.style.color = 'var(--primary-2)';
      f.reset();
    });
  }

  function initTabs() {
    document.querySelectorAll('[data-tabs]').forEach(group => {
      const buttons = group.querySelectorAll('button[data-tab]');
      const panels = document.querySelectorAll(`[data-panel-group="${group.dataset.tabs}"] [data-panel]`);
      buttons.forEach(btn => btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.toggle('active', b === btn));
        panels.forEach(p => p.style.display = p.dataset.panel === btn.dataset.tab ? 'block' : 'none');
      }));
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();
    reveal();
    document.querySelectorAll('.slider').forEach(initSlider);
    initRateCalculator();
    initContactForm();
    initCarrierForm();
    initTabs();
  });
})();