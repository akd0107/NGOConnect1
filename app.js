// Basic interactivity for NGOConnect

document.addEventListener('DOMContentLoaded', () => {
    // Newsletter subscription handler
    const newsletterForm = document.querySelector('.newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            
            if (emailInput.value) {
                alert(`Thank you for subscribing with ${emailInput.value}!`);
                emailInput.value = '';
            }
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Donate button interactions
    const donateButtons = document.querySelectorAll('.btn[href*="donate"]');
    donateButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Thank you for your interest in donating! Our secure donation page is coming soon.');
        });
    });
});
