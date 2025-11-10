const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return; // kalau cuma '#' abaikan
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // offset biar gak ketutup header
                behavior: 'smooth' // animasi smooth scroll
            });
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah berhasil dikirim.');
    this.reset();
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.backgroundColor = 'white';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

const productCards = document.querySelectorAll('.product-card');
const steps = document.querySelectorAll('.step');

function checkScroll() {
    const triggerBottom = window.innerHeight * 0.8;
    
    productCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
    
    steps.forEach(step => {
        const stepTop = step.getBoundingClientRect().top;
        if (stepTop < triggerBottom) {
            step.style.opacity = '1';
            step.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    steps.forEach(step => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(20px)';
        step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
});

window.addEventListener('scroll', checkScroll);

document.querySelector('.subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(`Terima kasih! Email ${email} telah berhasil didaftarkan untuk newsletter.`);
    this.reset();
});
