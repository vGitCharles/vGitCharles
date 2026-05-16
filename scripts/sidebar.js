const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', isOpen);
});