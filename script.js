/* ============================================================
   SAUD AHMED MEMON — PORTFOLIO JAVASCRIPT
   Particles | Typewriter | Scroll Effects | Form
   ============================================================ */

// ===== CURSOR GLOW =====
const cursorGlow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});

// ===== PARTICLE CANVAS =====
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
let animationId;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? '139, 92, 246' : '6, 182, 212';
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
            this.reset();
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 100);
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }
}

function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(139, 92, 246, ${0.06 * (1 - dist / 120)})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    connectParticles();
    animationId = requestAnimationFrame(animateParticles);
}

resizeCanvas();
initParticles();
animateParticles();

window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
});

// ===== TYPEWRITER =====
const typewriterEl = document.getElementById('typewriter');
const phrases = [
    'Full-Stack Developer',
    'MERN Stack Engineer',
    'React.js Developer',
    'Cloud Enthusiast',
    'CS Student @ SZABIST',
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterTimeout;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting) {
        typewriterEl.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentPhrase.length) {
            isDeleting = true;
            typewriterTimeout = setTimeout(typeWriter, 2000);
            return;
        }
    } else {
        typewriterEl.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }
    }

    const speed = isDeleting ? 60 : 90;
    typewriterTimeout = setTimeout(typeWriter, speed);
}

// Add blinking cursor via CSS class
typewriterEl.style.borderRight = '3px solid #8b5cf6';
typewriterEl.style.paddingRight = '4px';
typewriterEl.style.animation = 'blink 1s step-end infinite';

// Add blink keyframe
const blinkStyle = document.createElement('style');
blinkStyle.textContent = `
  @keyframes blink {
    0%, 100% { border-color: #8b5cf6; }
    50% { border-color: transparent; }
  }
`;
document.head.appendChild(blinkStyle);

setTimeout(typeWriter, 500);

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Back to top
    if (scrollY > 400) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }

    // Active nav link
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===== BACK TO TOP =====
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
    }
});

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll(
    '.skill-category, .timeline-item, .project-card, .edu-card, .cert-card, .contact-card-item, .about-grid > *, .section-header'
);

revealElements.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 80);
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ===== CONTACT FORM =====
function handleFormSubmit(e) {
    e.preventDefault();

    const btn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const formSuccess = document.getElementById('formSuccess');

    // Animate button
    btnText.textContent = 'Sending...';
    btn.disabled = true;
    btn.style.opacity = '0.7';

    // Simulate sending (replace with actual EmailJS or backend call)
    setTimeout(() => {
        btnText.textContent = 'Send Message';
        btn.disabled = false;
        btn.style.opacity = '1';
        formSuccess.classList.add('show');
        document.getElementById('contactForm').reset();

        setTimeout(() => {
            formSuccess.classList.remove('show');
        }, 5000);
    }, 1500);
}

// ===== SMOOTH HOVER TILT ON PROJECT CARDS =====
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;
        card.style.transform = `translateY(-6px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        card.style.transition = 'transform 0.1s ease';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// ===== SKILL TAG HOVER RIPPLE =====
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('click', () => {
        tag.style.transform = 'scale(0.95)';
        setTimeout(() => { tag.style.transform = ''; }, 150);
    });
});

// ===== COUNTER ANIMATION =====
function animateCounter(el, target, duration = 1500) {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
        start += step;
        if (start >= target) {
            el.textContent = target + '+';
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(num => {
                const value = parseInt(num.textContent);
                if (!isNaN(value)) animateCounter(num, value);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

// ===== MARQUEE PAUSE ON HOVER =====
const marqueeTrack = document.querySelector('.marquee-track');
if (marqueeTrack) {
    marqueeTrack.addEventListener('mouseenter', () => {
        marqueeTrack.style.animationPlayState = 'paused';
    });
    marqueeTrack.addEventListener('mouseleave', () => {
        marqueeTrack.style.animationPlayState = 'running';
    });
}

// ===== PRELOADER =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

console.log('%c👋 Hey there! Built with ❤️ by Saud Ahmed Memon', 'color: #8b5cf6; font-size: 14px; font-weight: bold;');
console.log('%c🚀 Check out my GitHub: https://github.com/saudmemon', 'color: #06b6d4; font-size: 12px;');
