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

const vCard = `BEGIN:VCARD\r\nVERSION:3.0\r\nN:Miranda Alhuay;Luis;;;\r\nFN:Luis Miranda Alhuay\r\nORG:LAYOUTM\r\nTITLE:Coordinador de Proyectos\r\nTEL;TYPE=CELL:+51908819044\r\nEMAIL;TYPE=WORK:layout.mobiliarios@gmail.com\r\nNOTE:Carpintería inteligente - Detalles que conectan\r\nEND:VCARD\r\n`;

document.getElementById('saveContact').addEventListener('click', () => {
  const blob = new Blob([vCard], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Luis-Miranda-LAYOUTM.vcf';
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
