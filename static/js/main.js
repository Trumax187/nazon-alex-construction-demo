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

<<<<<<< HEAD
    // 2. Working Form Handler (Sends to WhatsApp)
    const demoForm = document.getElementById('quote-form');
    if (demoForm) {
        demoForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            // Get the form values
=======
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
>>>>>>> 07663d1 (feat: integrated Lexmat branding, logo, and WhatsApp form integration)
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;

<<<<<<< HEAD
            // Alex's phone number (from the business card)
            const lexmatNumber = "260976530604"; 
            
            // Construct the WhatsApp message
            const whatsappText = `Hello Lexmat Construction!%0A%0AMy name is ${name}.%0AI am interested in: ${service}.%0A%0AMessage: ${message}%0A%0AMy phone number is: ${phone}`;
            
            // Open WhatsApp in a new tab
            window.open(`https://wa.me/${lexmatNumber}?text=${whatsappText}`, '_blank');
            
            demoForm.reset();
=======
            const phoneNumber = "260976530604"; 
            const whatsappText = `Hello Lexmat Construction,%0A%0AMy name is ${name}.%0AI am interested in: ${service}.%0A%0AMessage: ${message}%0A%0AMy phone number is: ${phone}`;
            
            window.open(`https://wa.me/${phoneNumber}?text=${whatsappText}`, '_blank');
            contactForm.reset();
>>>>>>> 07663d1 (feat: integrated Lexmat branding, logo, and WhatsApp form integration)
        });
    }
});
