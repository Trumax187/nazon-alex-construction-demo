document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const contactForm = document.getElementById('quote-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;

            const phoneNumber = "260976530604"; 
            const whatsappText = `Hello Lexmat Construction,%0A%0AMy name is ${name}.%0AI am interested in: ${service}.%0A%0AMessage: ${message}%0A%0AMy phone number is: ${phone}`;
            
            window.open(`https://wa.me/${phoneNumber}?text=${whatsappText}`, '_blank');
            contactForm.reset();
        });
    }
});