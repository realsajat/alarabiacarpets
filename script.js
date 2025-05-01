// Mobile menu toggle with notification
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');
const notification = document.querySelector('.notification');

// Show notification for 7 seconds then hide it
setTimeout(() => {
    if (notification) {
        notification.style.display = 'none';
    }
}, 7000);

mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');

    // Remove notification when menu is clicked
    if (notification) {
        notification.style.display = 'none';
    }
});

// WhatsApp click handler
const whatsappLinks = document.querySelectorAll('.btn, .whatsapp-floating');

whatsappLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Replace with your actual WhatsApp number
        window.open('https://wa.me/+97455512858', '_blank');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
            }
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (
        window.innerWidth <= 768 &&
        !e.target.closest('nav') &&
        !e.target.closest('.mobile-menu-btn') &&
        nav.classList.contains('active')
    ) {
        nav.classList.remove('active');
    }
});
