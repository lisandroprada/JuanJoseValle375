(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Aparición al scroll, con escalonado corto entre hermanos que entran juntos.
  const reveals = [...document.querySelectorAll('.reveal')];
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      const batch = entries.filter((e) => e.isIntersecting);
      batch.forEach((entry, i) => {
        entry.target.style.setProperty('--d', `${Math.min(i, 4) * 60}ms`);
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-in'));
  }

  // Botón fijo en celular: aparece al salir el CTA del hero y se va al llegar al contacto.
  const dock = document.getElementById('dock');
  const heroCta = document.getElementById('hero-cta');
  const contact = document.getElementById('contacto');
  if (dock && heroCta && contact && 'IntersectionObserver' in window) {
    let heroSeen = true;
    let contactSeen = false;
    const setDock = () => {
      const on = !heroSeen && !contactSeen;
      dock.classList.toggle('is-on', on);
      dock.toggleAttribute('inert', !on);
      dock.setAttribute('aria-hidden', String(!on));
    };
    new IntersectionObserver(([e]) => { heroSeen = e.isIntersecting; setDock(); }).observe(heroCta);
    new IntersectionObserver(([e]) => { contactSeen = e.isIntersecting; setDock(); }, { threshold: 0.2 }).observe(contact);
    setDock();
  }

  // Galería: barra de progreso y flechas (en escritorio).
  const rail = document.getElementById('rail');
  const bar = document.getElementById('rail-progress');
  const prev = document.getElementById('rail-prev');
  const next = document.getElementById('rail-next');
  if (rail && bar) {
    let ticking = false;
    const update = () => {
      ticking = false;
      const max = rail.scrollWidth - rail.clientWidth;
      const p = max > 0 ? rail.scrollLeft / max : 1;
      const visible = rail.clientWidth / rail.scrollWidth;
      bar.style.transform = `scaleX(${Math.max(visible, 0.08) + (1 - Math.max(visible, 0.08)) * p})`;
      if (prev) prev.disabled = rail.scrollLeft <= 4;
      if (next) next.disabled = rail.scrollLeft >= max - 4;
    };
    rail.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener('resize', update);
    update();

    const step = () => {
      const first = rail.querySelector('figure');
      return first ? first.getBoundingClientRect().width + 12 : rail.clientWidth * 0.8;
    };
    const go = (dir) => rail.scrollBy({ left: dir * step(), behavior: reduce ? 'auto' : 'smooth' });
    if (prev) prev.addEventListener('click', () => go(-1));
    if (next) next.addEventListener('click', () => go(1));
    rail.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
    });
  }
})();
