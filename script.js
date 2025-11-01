// ambil elemen hamburger dan nav-link utama
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// klik hamburger → toggle menu aktif/nonaktif
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// klik salah satu link di menu → tutup menu
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// efek scroll halus ke section tujuan
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

// form kontak → munculkan alert saat dikirim, lalu reset form
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah berhasil dikirim.');
    this.reset();
});

// ubah gaya header saat scroll (efek transparan jadi solid)
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

// ambil semua elemen kartu produk & langkah (animasi muncul saat discroll)
const productCards = document.querySelectorAll('.product-card');
const steps = document.querySelectorAll('.step');

// fungsi cek posisi scroll untuk animasi fade-in
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

// set awal semua elemen belum terlihat + transisi halus
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

// jalankan animasi saat scroll
window.addEventListener('scroll', checkScroll);

// form subscribe newsletter → alert + reset form
document.querySelector('.subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(`Terima kasih! Email ${email} telah berhasil didaftarkan untuk newsletter.`);
    this.reset();
});
