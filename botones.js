(function () {

  // Imagen 1: fondo del HERO (background-image)
  document.getElementById('heroBg').style.backgroundImage = 'url(jaguar.webp)';

  // Imagen 2:(ya está en el HTML con src="Jaguar_red.png", pero también se puede reasignar aquí)
  document.getElementById('identityBImg').src = 'Jaguar_red.png';

  // ── Navbar scroll ──
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ── Reveal on scroll ──
  const revealEls = document.querySelectorAll('.reveal');
  const revObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => revObs.observe(el));

  // ── Counter animation ──
  function countUp(el) {
    const target = parseFloat(el.dataset.target);
    const dec = parseInt(el.dataset.dec || '0');
    const dur = 1800;
    const start = performance.now();
    (function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      el.textContent = dec
        ? (ease * target).toFixed(dec)
        : Math.round(ease * target);
      if (p < 1) requestAnimationFrame(tick);
    })(performance.now());
  }

  const nums = document.querySelectorAll('.num');
  const cObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        countUp(e.target);
        cObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  nums.forEach(el => cObs.observe(el));

})();

//ME ESFORCE UN MONTON Y ESPERO ESTE ARCHIVO NO SEA COPIADO DEJO ESTO COMO MARCA DEAGUA 
//Yordy julian Corredor Hernandez - 19/05/2026 22:10 iicio - 20/06/2026  23:45 hora definalisacion 