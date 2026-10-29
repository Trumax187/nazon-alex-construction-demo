document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Working Form Handler (Sends to WhatsApp)
    const demoForm = document.getElementById('quote-form');
    if (demoForm) {
        demoForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            // Get the form values
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;

            // Alex's phone number (from the business card)
            const lexmatNumber = "260976530604"; 
            
            // Construct the WhatsApp message
            const whatsappText = `Hello Lexmat Construction!%0A%0AMy name is ${name}.%0AI am interested in: ${service}.%0A%0AMessage: ${message}%0A%0AMy phone number is: ${phone}`;
            
            // Open WhatsApp in a new tab
            window.open(`https://wa.me/${lexmatNumber}?text=${whatsappText}`, '_blank');
            
            demoForm.reset();
        });
    }
});
