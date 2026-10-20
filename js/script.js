const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

const currentPage = window.location.pathname.split('/').pop();
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach((item) => {
    if (item.getAttribute('href') === currentPage) {
        item.classList.add('active');
    }
});

document.getElementById('year').textContent = new Date().getFullYear();
