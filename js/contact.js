(() => {
  const form = document.querySelector('form');
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const sent = document.createElement('div');
    sent.className = 'sent';
    sent.innerHTML = '<div aria-hidden="true" style="font-size:3rem;color:var(--cyan)">✓</div><h3>Message ready to send</h3><p>This recreated site includes front-end validation only; connect an email or form service to deliver messages.</p><button type="button">Write another message</button>';
    form.replaceWith(sent);
    sent.querySelector('button').addEventListener('click', () => location.reload());
  });
})();
