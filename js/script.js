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



const contactForm = document.getElementById('contactForm');

if (contactForm) {
    const nameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const formMsg = document.getElementById('formMsg');

    function showMessage(text, type) {
        formMsg.textContent = text;
        formMsg.className = 'form-msg ' + type;
    }

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (nameInput.value.trim().length < 3) {
            showMessage('Please enter your full name (at least 3 characters).', 'error');
            return;
        }
        if (!emailPattern.test(emailInput.value.trim())) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        if (messageInput.value.trim().length < 10) {
            showMessage('Please write a message of at least 10 characters.', 'error');
            return;
        }

        showMessage('Thank you! Your message has been sent. We will reply within 24 hours.', 'success');
        contactForm.reset();
    });
}