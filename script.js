(() => {
  const btn = document.getElementById('themeBtn');
  const root = document.documentElement;
  // initialize from localStorage
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') root.classList.add('dark');
  btn.addEventListener('click', () => {
    root.classList.toggle('dark');
    const isDark = root.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    btn.textContent = isDark ? 'Light' : 'Dark';
  });
  // smooth scroll for internal links
  document.querySelectorAll('[data-scroll]').forEach(n => n.addEventListener('click', (e) => {
    const id = e.currentTarget.getAttribute('data-scroll');
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
  }));
})();