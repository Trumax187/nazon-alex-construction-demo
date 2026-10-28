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

    // 2. Demo Form Handler
    const demoForm = document.getElementById('quote-form');
    if (demoForm) {
        demoForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop page reload
            alert("This is a demonstration form. In the final version, this will send an email or WhatsApp message to Alex Construction Limited.");
            demoForm.reset();
        });
    }
});