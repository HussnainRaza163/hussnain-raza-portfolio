/* =============================================
   HUSSNAIN RAZA PORTFOLIO — CHATBOT
   ============================================= */

(function () {

    const FORMSPREE_URL = 'https://formspree.io/hussnainrazajaat163@gmail.com';

    // ===== STATE =====
    let chatState = 'idle';   // current conversation step
    let isTyping  = false;    // prevent overlapping bot messages
    let chatOpened = false;   // track first open

    const client = {
        name: '', email: '', phone: '',
        projectType: '', technology: '', budget: '', description: ''
    };

    // ===== DOM REFS =====
    let el = {};

    // ===== BOOT =====
    document.addEventListener('DOMContentLoaded', () => {
        el.wrapper      = document.getElementById('chatbotWrapper');
        el.toggle       = document.getElementById('chatToggle');
        el.toggleIcon   = document.getElementById('chatToggleIcon');
        el.badge        = document.getElementById('chatBadge');
        el.window       = document.getElementById('chatWindow');
        el.closeBtn     = document.getElementById('chatClose');
        el.leaveBtn     = document.getElementById('chatLeaveBtn');
        el.newBtn       = document.getElementById('chatNewBtn');
        el.overlay      = document.getElementById('chatOverlay');
        el.messages     = document.getElementById('chatMessages');
        el.quickReplies = document.getElementById('chatQuickReplies');
        el.inputArea    = document.getElementById('chatInputArea');
        el.input        = document.getElementById('chatInput');
        el.sendBtn      = document.getElementById('chatSend');

        el.toggle.addEventListener('click', toggleChat);
        el.closeBtn.addEventListener('click', closeChat);
        el.leaveBtn.addEventListener('click', leaveChat);
        el.newBtn.addEventListener('click', newChat);
        el.overlay.addEventListener('click', closeChat);
        el.sendBtn.addEventListener('click', handleTextInput);
        el.input.addEventListener('keydown', e => { if (e.key === 'Enter') handleTextInput(); });
    });

    // ===== OPEN / CLOSE =====
    function toggleChat() {
        el.window.classList.contains('open') ? closeChat() : openChat();
    }

    function openChat() {
        el.window.classList.add('open');
        el.toggle.classList.add('open');
        el.toggleIcon.className = 'fas fa-times';
        el.overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        hideBadge();
        if (!chatOpened) {
            chatOpened = true;
            setTimeout(startGreeting, 500);
        }
    }

    function closeChat() {
        el.window.classList.remove('open');
        el.toggle.classList.remove('open');
        el.toggleIcon.className = 'fas fa-comments';
        el.overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    function leaveChat() {
        closeChat();
    }

    function newChat() {
        // Reset all state
        chatState = 'idle';
        chatOpened = false;
        isTyping = false;
        Object.keys(client).forEach(k => client[k] = '');
        // Clear UI
        el.messages.innerHTML = '';
        clearReplies();
        hideInput();
        // Start fresh after brief pause
        chatOpened = true;
        setTimeout(startGreeting, 400);
    }

    function hideBadge() {
        if (el.badge) el.badge.style.display = 'none';
    }

    // ===== CONVERSATION START =====
    function startGreeting() {
        chatState = 'greeting';
        botSay("👋 Hi there! I'm the **HR Assistant** — here to tell you about **Hussnain Raza** and help you start your project.", () => {
            botSay("What would you like to do? 😊", () => {
                showReplies([
                    { label: '🧑‍💻  About Hussnain',   value: 'about'         },
                    { label: '🚀  Start a Project',    value: 'start_project' },
                    { label: '📬  Hire Hussnain',      value: 'start_project' }
                ]);
            });
        });
    }

    function showMainMenu() {
        botSay("Anything else I can help you with? 😊", () => {
            showReplies([
                { label: '🧑‍💻  About Hussnain',  value: 'about'         },
                { label: '🚀  Start a Project',   value: 'start_project' },
                { label: '📬  Hire Hussnain',     value: 'start_project' }
            ]);
        });
    }

    // ===== ABOUT PATHS =====
    function showAbout() {
        chatState = 'about';
        botSay("Here's a quick intro about **Hussnain Raza** 🌟");
        botSay(
            "📍 **Location:** Pakistan\n" +
            "💼 **Role:** Web Developer & Laravel Specialist\n" +
            "⏱ **Experience:** 2+ Years\n" +
            "📧 **Email:** hussnainrazajaat163@gmail.com",
        () => {
            showReplies([
                { label: '🛠  View Skills',     value: 'about_skills'   },
                { label: '📂  View Projects',   value: 'about_projects' },
                { label: '🚀  Start a Project', value: 'start_project'  },
                { label: '🏠  Main Menu',       value: 'main_menu'      }
            ]);
        });
    }

    function showSkills() {
        chatState = 'about_skills';
        botSay("Here are Hussnain's technical skills 🛠");
        botSay(
            "🌐 **HTML5** ━━━━━━━━━ 95%\n" +
            "🎨 **CSS3** ━━━━━━━━━━ 90%\n" +
            "⚡ **JavaScript** ━━━━ 80%\n" +
            "📦 **Bootstrap** ━━━━━ 90%\n" +
            "🐘 **PHP** ━━━━━━━━━━━ 78%\n" +
            "🔴 **Laravel** ━━━━━━━ 72%\n" +
            "✨ **GSAP** ━━━━━━━━━━ 75%\n" +
            "🔧 **Git / GitHub** ━━ 70%",
        () => {
            showReplies([
                { label: '📂  View Projects',   value: 'about_projects' },
                { label: '🚀  Start a Project', value: 'start_project'  },
                { label: '🏠  Main Menu',       value: 'main_menu'      }
            ]);
        });
    }

    function showProjects() {
        chatState = 'about_projects';
        botSay("Here are some of Hussnain's notable projects 📂");
        botSay(
            "🎬 **Netflix Clone**\n   HTML · CSS · JavaScript\n\n" +
            "🎓 **SkillVerse Institute Clone**\n   HTML · CSS · Bootstrap\n\n" +
            "❤️  **Charity Website**\n   HTML · CSS · JavaScript\n\n" +
            "🏢 **Building Management System**\n   Laravel · PHP · MySQL\n\n" +
            "🏪 **Plaza Management System**\n   Laravel · PHP · Bootstrap",
        () => {
            showReplies([
                { label: '🛠  View Skills',     value: 'about_skills'  },
                { label: '🚀  Start a Project', value: 'start_project' },
                { label: '🏠  Main Menu',       value: 'main_menu'     }
            ]);
        });
    }

    // ===== PROJECT FLOW =====
    function askProjectType() {
        chatState = 'project_type';
        botSay("Awesome! Let's build something great together. 🚀", () => {
            botSay("**What type of project** do you want to build?", () => {
                showReplies([
                    { label: '🌐  Website',          value: 'type_website'   },
                    { label: '⚙️   Web Application',  value: 'type_webapp'    },
                    { label: '🛒  E-commerce Store',  value: 'type_ecommerce' },
                    { label: '📊  Admin Dashboard',   value: 'type_dashboard' },
                    { label: '💡  Something Else',    value: 'type_other'     }
                ]);
            });
        });
    }

    function askProjectTech() {
        chatState = 'project_tech';
        botSay(`Great choice! A **${client.projectType}** — exciting! 💡`, () => {
            botSay("**Which technology / language** do you prefer?", () => {
                showReplies([
                    { label: '🔴  Laravel & PHP',       value: 'tech_laravel'   },
                    { label: '⚡  HTML · CSS · JS',      value: 'tech_html'      },
                    { label: '📦  Bootstrap Framework',  value: 'tech_bootstrap' },
                    { label: '🔀  Mix of Technologies',  value: 'tech_mix'       },
                    { label: '🤷  No Preference',        value: 'tech_nopref'    }
                ]);
            });
        });
    }

    function askProjectBudget() {
        chatState = 'project_budget';
        botSay("**What's your approximate budget?**", () => {
            showReplies([
                { label: '💵  Under $500',         value: 'budget_low'     },
                { label: '💰  $500 – $1,500',      value: 'budget_mid'     },
                { label: '💎  $1,500 – $3,000',    value: 'budget_high'    },
                { label: '🏆  $3,000+',            value: 'budget_premium' },
                { label: '🤝  Let\'s Discuss',     value: 'budget_discuss' }
            ]);
        });
    }

    // ===== CLIENT INFO =====
    function askClientName() {
        chatState = 'client_name';
        botSay("Perfect! Now I need a few details to connect you with Hussnain. 📋", () => {
            botSay("What is your **full name**?", () => {
                showInput("Your full name...");
            });
        });
    }

    function askClientEmail() {
        chatState = 'client_email';
        botSay(`Nice to meet you, **${client.name}**! 😊`, () => {
            botSay("What is your **email address**? Hussnain will reply here.", () => {
                showInput("your@email.com");
            });
        });
    }

    function askClientPhone() {
        chatState = 'client_phone';
        botSay("What is your **phone number**?", () => {
            botSay("You can also type **skip** if you prefer not to share.", () => {
                showInput("Phone number or 'skip'...");
            });
        });
    }

    function askClientDesc() {
        chatState = 'client_desc';
        botSay("Almost done! 🎉", () => {
            botSay("Please **describe your project** — what should it do, any special features?", () => {
                showInput("Describe your project idea...");
            });
        });
    }

    function showSummary() {
        chatState = 'summary';
        const projectSection =
            client.projectType
                ? `\n🔹 **Project Type:** ${client.projectType}` +
                  `\n🔹 **Technology:** ${client.technology}` +
                  `\n🔹 **Budget:** ${client.budget}`
                : '';

        botSay("Here's a summary before I send it to Hussnain 📋");
        botSay(
            `👤 **Name:** ${client.name}\n` +
            `📧 **Email:** ${client.email}\n` +
            `📞 **Phone:** ${client.phone || 'Not provided'}` +
            projectSection + `\n` +
            `📝 **Description:** ${client.description}`,
        () => {
            botSay("Shall I send this to **Hussnain**? He'll contact you soon! ✅", () => {
                showReplies([
                    { label: '✅  Yes, Send It!', value: 'confirm_send' },
                    { label: '✏️   Start Over',   value: 'start_project' }
                ]);
            });
        });
    }

    async function sendToEmail() {
        chatState = 'sending';
        clearReplies();
        botSay("Sending your details to Hussnain... ⏳");

        const body = new FormData();
        body.append('_subject', `New Project Inquiry — ${client.name}`);
        body.append('Client Name',    client.name);
        body.append('Client Email',   client.email);
        body.append('Client Phone',   client.phone || 'Not provided');
        body.append('Project Type',   client.projectType  || 'Not specified');
        body.append('Technology',     client.technology   || 'Not specified');
        body.append('Budget',         client.budget       || 'Not specified');
        body.append('Description',    client.description);
        body.append('Source',         'Portfolio Chatbot');

        try {
            const res = await fetch(FORMSPREE_URL, {
                method:  'POST',
                body,
                headers: { 'Accept': 'application/json' }
            });

            if (res.ok) {
                chatState = 'done';
                botSay("✅ **Message sent successfully!**", () => {
                    botSay(
                        `Hussnain will review your project and contact you at **${client.email}** very soon. Thank you for reaching out! 🙏`,
                    () => {
                        showMainMenu();
                    });
                });
            } else {
                throw new Error('formspree error');
            }
        } catch {
            chatState = 'done';
            botSay("❌ Something went wrong with the delivery.", () => {
                botSay(
                    "Please email Hussnain directly at:\n📧 **hussnainrazajaat163@gmail.com**",
                () => {
                    showReplies([{ label: '🏠  Main Menu', value: 'main_menu' }]);
                });
            });
        }
    }

    // ===== QUICK REPLY HANDLER =====
    function handleReplyClick(value, label) {
        addUserMsg(label);
        clearReplies();
        hideInput();

        switch (value) {
            // Navigation
            case 'main_menu':    showMainMenu();   break;
            case 'about':        showAbout();      break;
            case 'about_skills': showSkills();     break;
            case 'about_projects': showProjects(); break;
            case 'start_project':
                // Reset project data on restart
                client.projectType = '';
                client.technology  = '';
                client.budget      = '';
                askProjectType();
                break;

            // Project type
            case 'type_website':
            case 'type_webapp':
            case 'type_ecommerce':
            case 'type_dashboard':
            case 'type_other':
                client.projectType = label.replace(/^.{2}\s+/, ''); // strip emoji
                askProjectTech();
                break;

            // Technology
            case 'tech_laravel':
            case 'tech_html':
            case 'tech_bootstrap':
            case 'tech_mix':
            case 'tech_nopref':
                client.technology = label.replace(/^.{2}\s+/, '');
                askProjectBudget();
                break;

            // Budget
            case 'budget_low':
            case 'budget_mid':
            case 'budget_high':
            case 'budget_premium':
            case 'budget_discuss':
                client.budget = label.replace(/^.{2}\s+/, '');
                askClientName();
                break;

            // Confirmation
            case 'confirm_send':
                sendToEmail();
                break;
        }
    }

    // ===== TEXT INPUT HANDLER =====
    function handleTextInput() {
        const text = el.input.value.trim();
        if (!text) return;

        addUserMsg(text);
        el.input.value = '';
        hideInput();

        switch (chatState) {
            case 'client_name':
                if (text.length < 2) {
                    botSay("Please enter a valid name (at least 2 characters).", () => showInput("Your full name..."));
                    return;
                }
                client.name = text;
                askClientEmail();
                break;

            case 'client_email':
                if (!text.includes('@') || !text.includes('.')) {
                    botSay("That doesn't look like a valid email address. Please try again.", () => showInput("your@email.com"));
                    return;
                }
                client.email = text;
                askClientPhone();
                break;

            case 'client_phone':
                client.phone = text.toLowerCase() === 'skip' ? '' : text;
                askClientDesc();
                break;

            case 'client_desc':
                if (text.length < 5) {
                    botSay("Please add a bit more detail about your project.", () => showInput("Describe your project idea..."));
                    return;
                }
                client.description = text;
                showSummary();
                break;
        }
    }

    // ===== UI HELPERS =====

    function botSay(text, callback) {
        // Queue if another message is in progress
        if (isTyping) {
            setTimeout(() => botSay(text, callback), 150);
            return;
        }
        isTyping = true;

        // Typing indicator
        const typingEl = document.createElement('div');
        typingEl.className = 'msg bot';
        typingEl.innerHTML =
            `<div class="msg-avatar">HR</div>` +
            `<div class="typing-indicator">` +
            `<span class="typing-dot"></span>` +
            `<span class="typing-dot"></span>` +
            `<span class="typing-dot"></span>` +
            `</div>`;
        el.messages.appendChild(typingEl);
        scrollBottom();

        // Delay proportional to text length
        const delay = Math.min(500 + text.length * 10, 1800);

        setTimeout(() => {
            typingEl.remove();
            isTyping = false;
            addBotMsg(text);
            if (callback) setTimeout(callback, 250);
        }, delay);
    }

    function addBotMsg(text) {
        const div = document.createElement('div');
        div.className = 'msg bot';
        const html = text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>');
        div.innerHTML = `<div class="msg-avatar">HR</div><div class="msg-bubble">${html}</div>`;
        el.messages.appendChild(div);
        scrollBottom();
    }

    function addUserMsg(text) {
        const div = document.createElement('div');
        div.className = 'msg user';
        div.innerHTML = `<div class="msg-bubble">${text}</div>`;
        el.messages.appendChild(div);
        scrollBottom();
    }

    function showReplies(options) {
        el.quickReplies.innerHTML = '';
        el.quickReplies.style.display = 'flex';
        options.forEach(({ label, value }) => {
            const btn = document.createElement('button');
            btn.className = 'qr-btn';
            btn.textContent = label;
            btn.addEventListener('click', () => handleReplyClick(value, label));
            el.quickReplies.appendChild(btn);
        });
    }

    function clearReplies() {
        el.quickReplies.innerHTML = '';
        el.quickReplies.style.display = 'none';
    }

    function showInput(placeholder) {
        el.inputArea.style.display = 'flex';
        el.input.placeholder = placeholder || 'Type here...';
        setTimeout(() => el.input.focus(), 100);
    }

    function hideInput() {
        el.inputArea.style.display = 'none';
        el.input.value = '';
    }

    function scrollBottom() {
        setTimeout(() => {
            el.messages.scrollTop = el.messages.scrollHeight;
        }, 60);
    }

})();
