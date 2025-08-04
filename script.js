document.addEventListener('DOMContentLoaded', () => {
    // Initialize Typed.js
    if (document.querySelector('#im-a')) {
        new Typed('#im-a', {
            strings: [
                 "I build intelligent systems with machine learning.",
                 "I code things that actually work.",
                 "I make the web faster and smarter.",
                 "I bring ideas to life with code.",
                 "I turn data into insights with Python.",
                // "I craft full-stack web apps using the MERN stack.",
                 "I automate creativity with AI and deep learning.",
                 "I design user-friendly, responsive websites.",
                 "I predict the future one dataset at a time.",
                 "I create AI models that solve real-world problems."
                
            ],
            typeSpeed: window.matchMedia("(max-width: 768px)").matches ? 75 : 100,
            backSpeed: window.matchMedia("(max-width: 768px)").matches ? 40 : 50,
            loop: true,
            showCursor: true,
            cursorChar: '',
            smartBackspace: true,
            contentType: 'html'
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add a class to the body for touch/non-touch devices
    document.body.classList.add(('ontouchstart' in window || navigator.maxTouchPoints) ? 'touch-device' : 'non-touch-device');

    // Navbar scroll effect
    const navbar = document.querySelector('header');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
});

