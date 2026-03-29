const sdgData = [
    { id: 1,  title: "1. No Poverty", icon: "01", desc: "End poverty in all its forms everywhere. By 2030, eradicate extreme poverty for all people everywhere, currently measured as people living on less than $1.25 a day.", link: "https://sdgs.un.org/goals/goal1" },
    { id: 2,  title: "2. Zero Hunger", icon: "02", desc: "End hunger, achieve food security and improved nutrition and promote sustainable agriculture.", link: "https://sdgs.un.org/goals/goal2" },
    { id: 3,  title: "3. Good Health and Well-being", icon: "03", desc: "Ensure healthy lives and promote well-being for all at all ages. Target: reduce global maternal mortality, end preventable deaths of newborns and children under 5.", link: "https://sdgs.un.org/goals/goal3" },
    { id: 4,  title: "4. Quality Education", icon: "04", desc: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.", link: "https://sdgs.un.org/goals/goal4" },
    { id: 5,  title: "5. Gender Equality", icon: "05", desc: "Achieve gender equality and empower all women and girls. Target: End all forms of discrimination against all women and girls everywhere.", link: "https://sdgs.un.org/goals/goal5" },
    { id: 6,  title: "6. Clean Water and Sanitation", icon: "06", desc: "Ensure availability and sustainable management of water and sanitation for all.", link: "https://sdgs.un.org/goals/goal6" },
    { id: 7,  title: "7. Affordable and Clean Energy", icon: "07", desc: "Ensure access to affordable, reliable, sustainable and modern energy for all.", link: "https://sdgs.un.org/goals/goal7" },
    { id: 8,  title: "8. Decent Work and Economic Growth", icon: "08", desc: "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.", link: "https://sdgs.un.org/goals/goal8" },
    { id: 9,  title: "9. Industry, Innovation and Infrastructure", icon: "09", desc: "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.", link: "https://sdgs.un.org/goals/goal9" },
    { id: 10, title: "10. Reduced Inequality", icon: "10", desc: "Reduce inequality within and among countries. Empower and promote the social, economic and political inclusion of all.", link: "https://sdgs.un.org/goals/goal10" },
    { id: 11, title: "11. Sustainable Cities and Communities", icon: "11", desc: "Make cities and human settlements inclusive, safe, resilient and sustainable.", link: "https://sdgs.un.org/goals/goal11" },
    { id: 12, title: "12. Responsible Consumption and Production", icon: "12", desc: "Ensure sustainable consumption and production patterns.", link: "https://sdgs.un.org/goals/goal12" },
    { id: 13, title: "13. Climate Action", icon: "13", desc: "Take urgent action to combat climate change and its impacts. Integrate climate change measures into national policies, strategies and planning.", link: "https://sdgs.un.org/goals/goal13" },
    { id: 14, title: "14. Life Below Water", icon: "14", desc: "Conserve and sustainably use the oceans, seas and marine resources for sustainable development.", link: "https://sdgs.un.org/goals/goal14" },
    { id: 15, title: "15. Life on Land", icon: "15", desc: "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.", link: "https://sdgs.un.org/goals/goal15" },
    { id: 16, title: "16. Peace and Justice Strong Institutions", icon: "16", desc: "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.", link: "https://sdgs.un.org/goals/goal16" },
    { id: 17, title: "17. Partnerships to achieve the Goal", icon: "17", desc: "Strengthen the means of implementation and revitalize the global partnership for sustainable development.", link: "https://sdgs.un.org/goals/goal17" }
];

// Handle Login Form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (name && email && password) {
            localStorage.setItem('hackerName', name);
            window.location.href = 'briefing-1.html';
        }
    });
}

// Handle Logout
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('hackerName');
        window.location.href = 'index.html';
    });
}

// Initialize Dashboard
function initDashboard() {
    const hackerName = localStorage.getItem('hackerName') || 'Guest Hacker';
    const userInfo = document.getElementById('userInfo');
    if (userInfo) userInfo.textContent = `Welcome, ${hackerName}`;

    const goalsGrid = document.getElementById('goalsGrid');
    if (goalsGrid) {
        sdgData.forEach((goal, index) => {
            const card = document.createElement('div');
            card.className = `goal-card color-${index}`;
            card.innerHTML = `
                <img src="https://open-sdg.github.io/sdg-translations/assets/img/goals/en/${goal.id}.png" alt="${goal.title}" style="width: 100px; height: 100px; margin-bottom: 1rem; border-radius: 8px; box-shadow: 0 0 10px rgba(255,255,255,0.2); z-index: 2; position: relative;" />
                <h3 class="card-title">${goal.title}</h3>
            `;
            card.addEventListener('click', () => {
                window.location.href = `goal.html?id=${goal.id}`;
            });
            goalsGrid.appendChild(card);
        });
    }
}

// Load Goal Data on goal.html
function loadGoalData() {
    const urlParams = new URLSearchParams(window.location.search);
    const goalId = parseInt(urlParams.get('id'));

    const goalTitle = document.getElementById('goalTitle');
    const goalDesc = document.getElementById('goalDesc');
    const goalLink = document.getElementById('goalLink');
    const goalImage = document.getElementById('goalImage');

    if (!goalId || goalId < 1 || goalId > 17) {
        if(goalTitle) goalTitle.textContent = "Error: Invalid Goal Identity";
        if(goalDesc) goalDesc.textContent = "The requested sector matrix could not be found or decryption failed.";
        if(goalLink) goalLink.style.display = 'none';
        return;
    }

    const goal = sdgData.find(g => g.id === goalId);
    if (goal && goalTitle && goalDesc && goalLink) {
        goalTitle.textContent = goal.title;
        goalDesc.textContent = goal.desc;
        goalLink.href = goal.link;
        if(goalImage) {
            goalImage.src = `https://open-sdg.github.io/sdg-translations/assets/img/goals/en/${goal.id}.png`;
            goalImage.style.display = 'block';
        }
    }
}

// ==========================================
// NEONS AI Agent Logic
// ==========================================
const toggleAiBtn = document.getElementById('toggleAiBtn');
const closeAiBtn = document.getElementById('closeAiBtn');
const aiChatWindow = document.getElementById('aiChatWindow');
const aiInput = document.getElementById('aiInput');
const sendAiBtn = document.getElementById('sendAiBtn');
const aiChatBody = document.getElementById('aiChatBody');

if (toggleAiBtn && aiChatWindow) {
    toggleAiBtn.addEventListener('click', () => {
        const isHidden = aiChatWindow.style.display === 'none';
        aiChatWindow.style.display = isHidden ? 'flex' : 'none';
        toggleAiBtn.style.display = isHidden ? 'none' : 'block';
    });
}
if (closeAiBtn && aiChatWindow) {
    closeAiBtn.addEventListener('click', () => {
        aiChatWindow.style.display = 'none';
        toggleAiBtn.style.display = 'block';
    });
}

function generateNeonsResponse(query) {
    const q = query.toLowerCase();
    if (q.includes('hello') || q.includes('hi')) return "Greetings, Hacker. The system is operating seamlessly.";
    if (q.includes('sdg') || q.includes('goal')) return "There are 17 global nodes in our matrix. Explore them all to decrypt their solutions.";
    if (q.includes('team') || q.includes('neon')) return "NEONS CORE is the supreme collective. S R M HARINNETHRAN and T.GOKUL architected this digital framework.";
    if (q.includes('poverty')) return "Goal 1: No Poverty is an active protocol to eradicate extreme scarcity by 2030.";
    if (q.includes('hunger')) return "Goal 2: Zero Hunger focuses on achieving food security globally.";
    if (q.includes('hackathon')) return "Hackathon mode active. All 17 goals are loaded and ready for deployment.";
    return "Data fragmented. I am NEONS, an interactive node built for this system. Please specify your query regarding the SDGs or our team.";
}

function processAiQuery() {
    if (!aiInput || !aiInput.value.trim() || !aiChatBody) return;
    const query = aiInput.value.trim();
    
    // Append User Message
    const userMsg = document.createElement('div');
    userMsg.className = 'ai-msg user';
    userMsg.innerHTML = `<span class="glow-magenta">You:</span> ${query}`;
    aiChatBody.appendChild(userMsg);
    aiInput.value = '';
    aiChatBody.scrollTop = aiChatBody.scrollHeight;

    // Simulate Processing Delay
    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'ai-msg bot';
        botMsg.innerHTML = `<span class="glow-cyan">NEONS:</span> ${generateNeonsResponse(query)}`;
        aiChatBody.appendChild(botMsg);
        aiChatBody.scrollTop = aiChatBody.scrollHeight;
    }, 1000);
}

if (sendAiBtn) sendAiBtn.addEventListener('click', processAiQuery);
if (aiInput) {
    aiInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') processAiQuery();
    });
}

// ==========================================
// Moving Technology Background (Canvas)
// ==========================================
const techCanvas = document.getElementById('techCanvas');
if (techCanvas) {
    const ctx = techCanvas.getContext('2d');
    let width, height;
    let particles = [];

    function initCanvas() {
        width = techCanvas.width = window.innerWidth;
        height = techCanvas.height = window.innerHeight;
        particles = [];
        const particleCount = Math.floor((width * height) / 12000); 
        const neonColors = ['#00ffff', '#ff00ff', '#39ff14', '#fefe33']; // Cyan, Magenta, Green, Yellow
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 0.5) * 0.8,
                size: Math.random() * 1.5 + 0.5,
                color: neonColors[Math.floor(Math.random() * neonColors.length)]
            });
        }
    }

    function animateCanvas() {
        ctx.clearRect(0, 0, width, height);
        
        for (let i = 0; i < particles.length; i++) {
            let p = particles[i];
            p.x += p.vx;
            p.y += p.vy;

            // Bounce off edges
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            // Draw particle
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();

            // Connect nearby particles
            for (let j = i + 1; j < particles.length; j++) {
                let p2 = particles[j];
                let dist = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
                if (dist < 100) {
                    ctx.beginPath();
                    ctx.globalAlpha = 0.2 - dist/500;
                    ctx.strokeStyle = p.color;
                    ctx.lineWidth = 1;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                    ctx.globalAlpha = 1.0;
                }
            }
        }
        requestAnimationFrame(animateCanvas);
    }

    window.addEventListener('resize', initCanvas);
    initCanvas();
    animateCanvas();
}
