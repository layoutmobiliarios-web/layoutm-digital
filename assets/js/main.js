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

const vCard = `BEGIN:VCARD\r\nVERSION:3.0\r\nN:;LAYOUTM;;;\r\nFN:LAYOUTM\r\nORG:LAYOUTM\r\nTEL;TYPE=CELL,WORK:+51908819044\r\nEMAIL;TYPE=WORK:layout.mobiliarios@gmail.com\r\nNOTE:Carpintería inteligente - Detalles que conectan\r\nEND:VCARD\r\n`;

document.getElementById('saveContact').addEventListener('click', () => {
  const blob = new Blob([vCard], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'LAYOUTM.vcf';
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
