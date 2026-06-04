// Active nav link follows the section nearest the viewport top.
const navLinks = document.querySelectorAll('#navMenu a[href^="#"]');

let activeId = null;
function setActive(id) {
  if (id === activeId) return;
  activeId = id;
  navLinks.forEach(link => {
    const isActive = link.getAttribute('href') === '#' + id;
    link.classList.toggle('text-accent', isActive);
    link.classList.toggle('text-zinc-400', !isActive);
  });
}

const navObserver = new IntersectionObserver(
  entries => {
    const visible = entries.filter(e => e.isIntersecting);
    if (visible.length === 0) return;
    const top = visible.reduce((best, e) =>
      e.boundingClientRect.top < best.boundingClientRect.top ? e : best
    );
    setActive(top.target.id);
  },
  { rootMargin: '-40% 0px -55% 0px' }
);
document.querySelectorAll('section[id]').forEach(s => navObserver.observe(s));

// Reveal-on-scroll for elements opted in via class="reveal".
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.08 }
);
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
