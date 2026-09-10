const brandReveal = document.querySelector('[data-brand-reveal]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (brandReveal) {
  const brandLogo = brandReveal.querySelector('.brand-reveal-logo');
  const brandLogoSource = brandReveal.dataset.brandLogoSrc;

  if (brandLogo && brandLogoSource) {
    brandLogo.src = brandLogoSource;
    brandReveal.hidden = false;

    if (!reduceMotion.matches) {
      document.documentElement.classList.add('brand-reveal-active');
      requestAnimationFrame(() => brandReveal.classList.add('brand-reveal-visible'));
      window.setTimeout(() => {
        brandReveal.classList.add('brand-reveal-complete');
        document.documentElement.classList.remove('brand-reveal-active');
      }, 850);
    }
  }
}

const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

const closeMenu = () => {
  menuButton.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
};

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  document.body.classList.toggle('menu-open', !isOpen);
});

siteNav.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});
