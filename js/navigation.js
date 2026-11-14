(() => {
  const menuButton = document.querySelector('.menu');
  const nav = document.querySelector('.nav-links');

  if (!menuButton || !nav) return;
  menuButton.setAttribute('aria-expanded', 'false');

  const closeMenu = () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  };

  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMenu();
  });
})();
