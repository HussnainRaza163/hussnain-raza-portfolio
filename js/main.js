/* =============================================
   HUSSNAIN RAZA PORTFOLIO — MAIN SCRIPT
   ============================================= */

// ===== TRANSLATIONS =====
const i18n = {
    en: {
        'nav.home':    'Home',
        'nav.about':   'About',
        'nav.skills':  'Skills',
        'nav.projects':'Projects',
        'nav.contact': 'Contact',

        'hero.greeting':    "Hello, I'm",
        'hero.rolePrefix':  "I'm a ",
        'hero.desc':        'Passionate web developer crafting modern, responsive & interactive web experiences with cutting-edge technologies.',
        'hero.viewWork':    'View My Work',
        'hero.contactBtn':  'Contact Me',

        'about.tag':         'Get To Know',
        'about.title':       'About Me',
        'about.subtitle':    'Web Developer & Laravel Specialist',
        'about.desc1':       "I'm Hussnain Raza, a passionate and dedicated web developer with expertise in building modern, responsive, and dynamic web applications. I specialize in both frontend and backend development.",
        'about.desc2':       'From crafting pixel-perfect UIs with HTML, CSS, and JavaScript to building robust backend systems with PHP and Laravel — I love turning ideas into reality through clean, efficient code.',
        'about.years':       'Years\nExperience',
        'about.statProjects':'Projects',
        'about.statTech':    'Technologies',
        'about.statCommit':  'Commitment',
        'about.downloadCV':  'Download CV',

        'skills.tag':   'What I Know',
        'skills.title': 'My Skills',

        'projects.tag':          "What I've Built",
        'projects.title':        'My Projects',
        'projects.featuredBadge':'Featured',
        'projects.netflix.title':    'Netflix Clone',
        'projects.netflix.desc':     'A pixel-perfect responsive clone of Netflix\'s streaming interface with dynamic content, smooth hover effects, and modern UI design.',
        'projects.skillverse.title': 'SkillVerse Institute Clone',
        'projects.skillverse.desc':  'A full-featured educational institute website clone with course listings, enrollment forms, and fully responsive design across all devices.',
        'projects.charity.title':    'Charity Website',
        'projects.charity.desc':     'A compassionate charity platform designed to inspire donations, showcase causes, and connect volunteers with meaningful opportunities worldwide.',
        'projects.building.title':   'Building Project (Laravel)',
        'projects.building.desc':    'A comprehensive building & property management system featuring tenant management, rent tracking, payment history, and detailed reporting dashboards.',
        'projects.plaza.title':      'Plaza Management System',
        'projects.plaza.desc':       'A full-stack plaza management system with shop allocation, billing management, visitor tracking, and an admin dashboard — built with Laravel MVC architecture.',

        'contact.tag':             'Get In Touch',
        'contact.title':           'Contact Me',
        'contact.letsWork':        "Let's Work Together",
        'contact.desc':            "Have a project in mind or want to collaborate? Feel free to reach out — I'm always open to discussing new opportunities.",
        'contact.emailLabel':      'Email',
        'contact.locationLabel':   'Location',
        'contact.namePlaceholder': 'Your Name',
        'contact.emailPlaceholder':'Your Email',
        'contact.subjectPlaceholder':'Subject',
        'contact.messagePlaceholder':'Your Message',
        'contact.sendBtn':         'Send Message',
        'contact.successMsg':      "Message sent successfully! I'll get back to you soon.",

        'footer.copy': '© 2024 Hussnain Raza. All Rights Reserved.',
    },

    ur: {
        'nav.home':    'ہوم',
        'nav.about':   'میرے بارے میں',
        'nav.skills':  'مہارتیں',
        'nav.projects':'پروجیکٹس',
        'nav.contact': 'رابطہ',

        'hero.greeting':   'السلام علیکم، میں ہوں',
        'hero.rolePrefix': 'میں ایک ',
        'hero.desc':       'جدید، ریسپانسیو اور انٹرایکٹو ویب تجربات بنانے والا پرجوش ویب ڈویلپر۔',
        'hero.viewWork':   'میرا کام دیکھیں',
        'hero.contactBtn': 'رابطہ کریں',

        'about.tag':         'جانیں مجھے',
        'about.title':       'میرے بارے میں',
        'about.subtitle':    'ویب ڈویلپر اور لاراویل ماہر',
        'about.desc1':       'میں حسنین رضا ہوں، ایک پرجوش اور محنتی ویب ڈویلپر جو جدید، ریسپانسیو اور ڈائنامک ویب ایپلیکیشنز بنانے میں ماہر ہے۔',
        'about.desc2':       'HTML, CSS اور JavaScript سے خوبصورت UI بنانے سے لے کر PHP اور Laravel سے مضبوط بیک اینڈ سسٹمز بنانے تک — میں صاف اور موثر کوڈ کے ذریعے خیالات کو حقیقت میں بدلنا پسند کرتا ہوں۔',
        'about.years':       'سال\nتجربہ',
        'about.statProjects':'پروجیکٹس',
        'about.statTech':    'ٹیکنالوجیز',
        'about.statCommit':  'لگن',
        'about.downloadCV':  'سی وی ڈاؤنلوڈ کریں',

        'skills.tag':   'جو میں جانتا ہوں',
        'skills.title': 'میری مہارتیں',

        'projects.tag':           'جو میں نے بنایا',
        'projects.title':         'میرے پروجیکٹس',
        'projects.featuredBadge': 'نمایاں',
        'projects.netflix.title':     'نیٹ فلکس کلون',
        'projects.netflix.desc':      'نیٹ فلکس کی اسٹریمنگ پلیٹ فارم کا ریسپانسیو کلون جدید UI، ڈائنامک کنٹینٹ لوڈنگ اور ہموار انیمیشنز کے ساتھ۔',
        'projects.skillverse.title':  'اسکل ورس انسٹیٹیوٹ کلون',
        'projects.skillverse.desc':   'کورس لسٹنگ، انرولمنٹ فارمز اور تمام ڈیوائسز پر ریسپانسیو ڈیزائن کے ساتھ مکمل تعلیمی ادارے کی ویب سائٹ کلون۔',
        'projects.charity.title':     'چیریٹی ویب سائٹ',
        'projects.charity.desc':      'ایک دلکش چیریٹی پلیٹ فارم جو عطیات کی ترغیب دینے اور رضاکاروں کو بامعنی مواقع سے جوڑنے کے لیے ڈیزائن کیا گیا۔',
        'projects.building.title':    'بلڈنگ پروجیکٹ (لاراویل)',
        'projects.building.desc':     'Laravel کے ساتھ بنایا گیا ایک جامع عمارت/پراپرٹی مینجمنٹ سسٹم جس میں ٹیننٹ مینجمنٹ، کرایہ ٹریکنگ اور تفصیلی ڈیش بورڈز شامل ہیں۔',
        'projects.plaza.title':       'پلازہ مینجمنٹ سسٹم',
        'projects.plaza.desc':        'Laravel MVC آرکیٹیکچر کا استعمال کرتے ہوئے بنایا گیا فل اسٹیک پلازہ مینجمنٹ سسٹم جس میں دکان الاٹمنٹ، بلنگ اور ایڈمن ڈیش بورڈ شامل ہے۔',

        'contact.tag':             'رابطہ کریں',
        'contact.title':           'مجھ سے رابطہ کریں',
        'contact.letsWork':        'مل کر کام کریں',
        'contact.desc':            'کوئی پروجیکٹ ذہن میں ہے؟ بے جھجھک رابطہ کریں — میں ہمیشہ نئے مواقع پر گفتگو کرنے کے لیے تیار ہوں۔',
        'contact.emailLabel':      'ای میل',
        'contact.locationLabel':   'مقام',
        'contact.namePlaceholder': 'آپ کا نام',
        'contact.emailPlaceholder':'آپ کی ای میل',
        'contact.subjectPlaceholder':'موضوع',
        'contact.messagePlaceholder':'آپ کا پیغام',
        'contact.sendBtn':         'پیغام بھیجیں',
        'contact.successMsg':      'پیغام کامیابی سے بھیج دیا گیا! میں جلد جواب دوں گا۔',

        'footer.copy': '© 2024 حسنین رضا۔ جملہ حقوق محفوظ ہیں۔',
    },

    zh: {
        'nav.home':    '主页',
        'nav.about':   '关于我',
        'nav.skills':  '技能',
        'nav.projects':'项目',
        'nav.contact': '联系',

        'hero.greeting':   '你好，我是',
        'hero.rolePrefix': '我是一名',
        'hero.desc':       '热情的网页开发者，致力于打造现代化、响应式和交互式的网页体验。',
        'hero.viewWork':   '查看我的作品',
        'hero.contactBtn': '联系我',

        'about.tag':         '了解我',
        'about.title':       '关于我',
        'about.subtitle':    '网页开发者 & Laravel 专家',
        'about.desc1':       '我是 Hussnain Raza，一位热情而专注的网页开发者，擅长构建现代化、响应式和动态的网页应用程序。',
        'about.desc2':       '从使用 HTML、CSS 和 JavaScript 打造像素完美的界面，到使用 PHP 和 Laravel 构建强大的后端系统——我热爱通过简洁高效的代码将创意变为现实。',
        'about.years':       '年\n经验',
        'about.statProjects':'项目',
        'about.statTech':    '技术',
        'about.statCommit':  '专注度',
        'about.downloadCV':  '下载简历',

        'skills.tag':   '我的专长',
        'skills.title': '我的技能',

        'projects.tag':           '我的作品',
        'projects.title':         '我的项目',
        'projects.featuredBadge': '精选',
        'projects.netflix.title':     'Netflix 克隆',
        'projects.netflix.desc':      '一个像素完美的 Netflix 流媒体平台响应式克隆，具有现代 UI、动态内容加载和流畅动画效果。',
        'projects.skillverse.title':  'SkillVerse 学院克隆',
        'projects.skillverse.desc':   '一个功能完整的教育机构网站克隆，包含课程列表、报名表单以及在所有设备上的响应式设计。',
        'projects.charity.title':     '慈善网站',
        'projects.charity.desc':      '一个充满爱心的慈善平台，旨在激励捐款、展示公益事业，并将志愿者与有意义的机会联系起来。',
        'projects.building.title':    '建筑项目 (Laravel)',
        'projects.building.desc':     '使用 Laravel 构建的综合楼宇管理系统，包含租户管理、租金跟踪、付款记录和详细报告仪表板。',
        'projects.plaza.title':       '广场管理系统',
        'projects.plaza.desc':        '使用 Laravel MVC 架构构建的全栈广场管理系统，包含商铺分配、账单管理、访客跟踪和管理员仪表板。',

        'contact.tag':             '联系方式',
        'contact.title':           '联系我',
        'contact.letsWork':        '让我们合作',
        'contact.desc':            '有项目想法或想要合作？随时联系我——我一直欢迎讨论新机会。',
        'contact.emailLabel':      '邮箱',
        'contact.locationLabel':   '位置',
        'contact.namePlaceholder': '您的姓名',
        'contact.emailPlaceholder':'您的邮箱',
        'contact.subjectPlaceholder':'主题',
        'contact.messagePlaceholder':'您的留言',
        'contact.sendBtn':         '发送消息',
        'contact.successMsg':      '消息发送成功！我会尽快回复您。',

        'footer.copy': '© 2024 Hussnain Raza。版权所有。',
    }
};

// Typewriter roles per language
const typewriterRoles = {
    en: ['Web Developer', 'Laravel Developer', 'PHP Developer', 'Frontend Developer', 'GSAP Animator'],
    ur: ['ویب ڈویلپر', 'لاراویل ڈویلپر', 'پی ایچ پی ڈویلپر', 'فرنٹ اینڈ ڈویلپر'],
    zh: ['网页开发者', 'Laravel开发者', 'PHP开发者', '前端开发者', '全栈开发者'],
};

// ===== STATE =====
let currentLang    = localStorage.getItem('hr-lang')  || 'en';
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
    initLanguage();
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

// ===== LANGUAGE =====
function initLanguage() {
    applyLanguage(currentLang);

    const langBtn  = document.getElementById('langBtn');
    const langMenu = document.getElementById('langMenu');
    const dropdown = document.getElementById('langDropdown');

    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = langMenu.classList.contains('open');
        langMenu.classList.toggle('open', !isOpen);
        dropdown.classList.toggle('open', !isOpen);
    });

    document.addEventListener('click', () => {
        langMenu.classList.remove('open');
        dropdown.classList.remove('open');
    });

    document.querySelectorAll('.lang-item').forEach(item => {
        item.addEventListener('click', () => {
            applyLanguage(item.dataset.lang);
            langMenu.classList.remove('open');
            dropdown.classList.remove('open');
        });
    });
}

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('hr-lang', lang);

    // Direction
    const isRtl = lang === 'ur';
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);

    // Label
    const labels = { en: 'EN', ur: 'اردو', zh: '中文' };
    const labelEl = document.getElementById('currentLangLabel');
    if (labelEl) labelEl.textContent = labels[lang] || 'EN';

    // Active item
    document.querySelectorAll('.lang-item').forEach(item => {
        item.classList.toggle('active', item.dataset.lang === lang);
    });

    // Translate all data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = i18n[lang]?.[key];
        if (val !== undefined) el.textContent = val;
    });

    // Reset typewriter
    clearTimeout(twTimer);
    twIndex    = 0;
    twCharIdx  = 0;
    twDeleting = false;
    const twEl = document.getElementById('typewriter');
    if (twEl) twEl.textContent = '';
    typewrite();
}

// ===== TYPEWRITER =====
function initTypewriter() {
    typewrite();
}

function typewrite() {
    const el    = document.getElementById('typewriter');
    if (!el) return;
    const roles = typewriterRoles[currentLang] || typewriterRoles.en;
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

    // Hero entrance
    const tl = gsap.timeline({ delay: 0.2 });
    tl.from('.hero-greeting', { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out' })
      .from('.hero-name',     { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out' }, '-=0.35')
      .from('.hero-role',     { opacity: 0, y: 20, duration: 0.5, ease: 'power3.out' }, '-=0.3')
      .from('.hero-desc',     { opacity: 0, y: 20, duration: 0.5, ease: 'power3.out' }, '-=0.3')
      .from('.hero-btns',     { opacity: 0, y: 20, duration: 0.5, ease: 'power3.out' }, '-=0.25')
      .from('.hero-socials',  { opacity: 0, y: 20, duration: 0.5, ease: 'power3.out' }, '-=0.25')
      .from('.code-window',   { opacity: 0, x: 80, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .from('.scroll-down',   { opacity: 0, duration: 0.5 }, '-=0.2');

    // Orb parallax
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

        submitBtn.disabled = true;
        submitBtn.querySelector('i').className = 'fas fa-spinner fa-spin';
        btnSpan.textContent = currentLang === 'ur' ? 'بھیجا جا رہا ہے...' :
                              currentLang === 'zh' ? '发送中...' : 'Sending...';

        try {
            const response = await fetch('https://formspree.io/hussnainrazajaat163@gmail.com', {
                method:  'POST',
                body:    new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                submitBtn.querySelector('i').className = 'fas fa-check';
                btnSpan.textContent = currentLang === 'ur' ? 'بھیج دیا!' :
                                      currentLang === 'zh' ? '已发送!' : 'Sent!';
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
            btnSpan.textContent = currentLang === 'ur' ? 'دوبارہ کوشش کریں' :
                                  currentLang === 'zh' ? '请重试' : 'Try Again';
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
