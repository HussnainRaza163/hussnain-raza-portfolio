/* =============================================
   HUSSNAIN RAZA PORTFOLIO — MAIN SCRIPT
   ============================================= */

// Typewriter roles per language
const typewriterRoles = {
    en: ['Web Developer', 'Laravel Developer', 'PHP Developer', 'Frontend Developer', 'GSAP Animator']
};

// ===== STATE =====
let currentTheme   = localStorage.getItem('hr-theme') || 'dark';
let twIndex        = 0;
let twCharIdx      = 0;
let twDeleting     = false;
let twTimer        = null;
let countersAnimated = false;
let skillsAnimated   = false;

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initTheme();
    initNavbar();
    initHamburger();
    initTypewriter();
    initScrollReveal();
    initSkillBars();
    initCounters();
    initContactForm();
    initBackToTop();
    initHeroAnimations();
});

// ===== PRELOADER =====
function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.pointerEvents = 'none';
            setTimeout(() => preloader.style.display = 'none', 500);
        }, 1000);
    });
}

// ===== THEME =====
function initTheme() {
    applyTheme(currentTheme);
    document.getElementById('themeToggle').addEventListener('click', () => {
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
}

function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('hr-theme', theme);
    const icon = document.getElementById('themeIcon');
    if (icon) icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

// ===== TYPEWRITER =====
function initTypewriter() {
    typewrite();
}

function typewrite() {
    const el = document.getElementById('typewriter');
    if (!el) return;
    const roles = typewriterRoles.en; // Default to English roles
    const role  = roles[twIndex % roles.length];

    if (twDeleting) {
        el.textContent = role.substring(0, twCharIdx - 1);
        twCharIdx--;
    } else {
        el.textContent = role.substring(0, twCharIdx + 1);
        twCharIdx++;
    }

    let speed = twDeleting ? 45 : 100;

    if (!twDeleting && twCharIdx === role.length) {
        speed      = 2200;
        twDeleting = true;
    } else if (twDeleting && twCharIdx === 0) {
        twDeleting = false;
        twIndex++;
        speed = 350;
    }

    twTimer = setTimeout(typewrite, speed);
}

// ===== NAVBAR =====
function initNavbar() {
    const navbar   = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    const onScroll = () => {
        // Scrolled state
        navbar.classList.toggle('scrolled', window.scrollY > 60);

        // Active link
        let active = '';
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 120) active = sec.id;
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${active}`);
        });
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // Smooth scroll on click
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu
                document.getElementById('navMenu').classList.remove('open');
                document.getElementById('hamburger').classList.remove('active');
            }
        });
    });
}

// ===== HAMBURGER =====
function initHamburger() {
    const btn  = document.getElementById('hamburger');
    const menu = document.getElementById('navMenu');
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        menu.classList.toggle('open');
    });
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.12 });

    // Add reveal classes to elements
    const reveals = [
        { sel: '.section-header', cls: 'reveal' },
        { sel: '.about-text',       cls: 'reveal-left' },
        { sel: '.about-image-wrap', cls: 'reveal-right' },
        { sel: '.skill-card',       cls: 'reveal' },
        { sel: '.project-card',     cls: 'reveal' },
        { sel: '.contact-info',     cls: 'reveal-left' },
        { sel: '.contact-form',     cls: 'reveal-right' },
    ];

    reveals.forEach(({ sel, cls }) => {
        document.querySelectorAll(sel).forEach((el, i) => {
            el.classList.add(cls);
            if (cls === 'reveal') el.style.transitionDelay = `${i * 0.08}s`;
            observer.observe(el);
        });
    });
}

// ===== SKILL BARS =====
function initSkillBars() {
    const bars = document.querySelectorAll('.skill-fill');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !skillsAnimated) {
                skillsAnimated = true;
                bars.forEach(bar => {
                    const w = bar.getAttribute('data-width');
                    setTimeout(() => { bar.style.width = w + '%'; }, 200);
                });
            }
        });
    }, { threshold: 0.3 });

    const skillsSection = document.getElementById('skills');
    if (skillsSection) observer.observe(skillsSection);
}

// ===== COUNTERS =====
function initCounters() {
    const counters = document.querySelectorAll('.stat-num');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                countersAnimated = true;
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'), 10);
                    let current  = 0;
                    const step   = target / 60;
                    const timer  = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        counter.textContent = Math.floor(current);
                    }, 25);
                });
            }
        });
    }, { threshold: 0.5 });

    const aboutSection = document.getElementById('about');
    if (aboutSection) observer.observe(aboutSection);
}

// ===== HERO ANIMATIONS =====
function initHeroAnimations() {
    if (typeof gsap === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // Force all hero text elements visible — skip entrance animations on mobile.
        // Without this, any GSAP `from()` leftover state could leave them at opacity:0.
        ['.hero-greeting', '.hero-name', '.hero-role', '.hero-desc',
         '.hero-btns', '.hero-socials'].forEach(sel => {
            document.querySelectorAll(sel).forEach(el => {
                el.style.opacity  = '1';
                el.style.transform = 'none';
            });
        });
        return;
    }

    // Desktop hero entrance
    const tl = gsap.timeline({ delay: 0.2 });
    tl.from('.hero-greeting', { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out' })
      .from('.hero-name',     { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out' }, '-=0.35')
      .from('.hero-role',     { opacity: 0, y: 20, duration: 0.5, ease: 'power3.out' }, '-=0.3')
      .from('.hero-desc',     { opacity: 0, y: 20, duration: 0.5, ease: 'power3.out' }, '-=0.3')
      .from('.hero-btns',     { opacity: 0, y: 20, duration: 0.5, ease: 'power3.out' }, '-=0.25')
      .from('.hero-socials',  { opacity: 0, y: 20, duration: 0.5, ease: 'power3.out' }, '-=0.25')
      .from('.code-window',   { opacity: 0, x: 60, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      ;

    // Orb parallax (desktop only — mobile is slower, skip for performance)
    gsap.to('.orb-1', {
        scrollTrigger: { trigger: '.hero', scrub: 1 },
        y: -100, ease: 'none'
    });
    gsap.to('.orb-2', {
        scrollTrigger: { trigger: '.hero', scrub: 1 },
        y: -60, ease: 'none'
    });
}

// ===== CONTACT FORM =====
function initContactForm() {
    const form       = document.getElementById('contactForm');
    const submitBtn  = document.getElementById('submitBtn');
    const successMsg = document.getElementById('formSuccess');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const btnSpan      = submitBtn.querySelector('span');
        const originalText = btnSpan.textContent;

        submitBtn.disabled = true; // Disable button immediately
        submitBtn.querySelector('i').className = 'fas fa-spinner fa-spin';
        btnSpan.textContent = 'Sending...';

        try {
            const response = await fetch('https://formspree.io/f/xbdeeroo', {
                method:  'POST',
                body:    new FormData(form),
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                submitBtn.querySelector('i').className = 'fas fa-check';
                btnSpan.textContent = 'Sent!';
                submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                successMsg.classList.add('show');
                form.reset();
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.querySelector('i').className = 'fas fa-paper-plane';
                    btnSpan.textContent = originalText;
                    submitBtn.style.background = '';
                    successMsg.classList.remove('show');
                }, 4000);
            } else {
                throw new Error('Failed');
            }
        } catch {
            submitBtn.querySelector('i').className = 'fas fa-exclamation-triangle';
            btnSpan.textContent = 'Try Again';
            submitBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.querySelector('i').className = 'fas fa-paper-plane';
                btnSpan.textContent = originalText;
                submitBtn.style.background = '';
            }, 3000);
        }
    });
}

// ===== BACK TO TOP =====
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        btn.classList.toggle('show', window.scrollY > 500);
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== SMOOTH SCROLL for hero anchor =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
