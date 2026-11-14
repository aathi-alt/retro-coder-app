(() => {
  const progress = document.querySelector('.progress');
  const updateProgress = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const percent = height > 0 ? (window.scrollY / height) * 100 : 0;
    if (progress) progress.style.width = `${percent}%`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  const revealTargets = document.querySelectorAll('.section, .terminal-section');
  if (!('IntersectionObserver' in window)) return;
  revealTargets.forEach((section) => section.classList.add('will-reveal'));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealTargets.forEach((section) => observer.observe(section));
})();
