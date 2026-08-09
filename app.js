/**
 * PRISM // SPATIAL PORTFOLIO ENGINE (LUNA 3B & CODECANVAS EDITION)
 * Spotlight Projects: Luna 3B Local Intelligence & CodeCanvas AI IDE
 */

// ==========================================================================
// 1. DEFAULT DATASET (SPOTLIGHT PROJECTS: LUNA 3B & CODECANVAS)
// ==========================================================================
const DEFAULT_PROJECTS = [
  {
    id: "proj-luna-brain",
    title: "Luna Pure Brain — Fine-Tuned 3B Parameter Command SLM Engine",
    subtitle: "100% local 3B parameter command model fine-tuned on Graph-of-Thought dataset, outputting JSON action vectors in <35ms.",
    summary: "Flagship Fine-Tuned Model: 3B parameter model fine-tuned on Graph-of-Thought dataset (luna_v4_got_master_dataset.jsonl), emitting deterministic system command JSON action vectors with zero cloud latency.",
    about: "Luna Pure Brain is a specialized 3B Small Language Model (SLM) trained exclusively on system command graphs. Instead of relying on brittle Python regex matchers or expensive 70B cloud APIs, Luna Pure Brain is fine-tuned on a 1.6MB+ Graph-of-Thought (GoT) SFT dataset. It acts as a stateless, zero-fluff JSON action emitter operating alongside a 1KB dynamic telemetry loop for native on-device operating system control.",
    usecase: "Deterministic OS action emission, sub-35ms tool call execution, local GPU GGUF inference, and zero-cloud privacy automation.",
    chronologyStep: "Flagship Fine-Tuned Model",
    date: "2026-08-09",
    lastCommitDate: "2026-08-09",
    lastCommitMsg: "feat(brain): luna_v4_got_master_dataset 3B SLM release with sub-35ms JSON action vector emission",
    category: "Fine-Tuned SLM Engine",
    image: "luna_brain_yt_thumbnail.png",
    engineeringMethod: "SFT Fine-Tuning & Graph-of-Thought Synthesis",
    engineeringLabel: "🧠 Fine-Tuned 3B SLM Engine",
    hackathon: "Flagship Fine-Tuned Model",
    youtubeUrl: "https://youtube.com/shorts/M71009mYntE?feature=share",
    youtubeId: "M71009mYntE",
    tags: ["3B SLM Fine-Tune", "Graph-of-Thought (GoT)", "PyTorch / SFT", "JSON Action Vectors", "Local GPU GGUF", "AST Allowlist Security", "Dataset Autonomy"],
    demoUrl: "https://drive.google.com/drive/folders/1e02x7nnwuwPKhCK4KgFcKylzdeuMaAmV?usp=drive_link",
    repoUrl: "https://github.com/prashanth-karanam/Luna-V3",
    downloadNotice: "Download fine-tuned Luna v4 GGUF model weights & master dataset directly from Google Drive."
  },
  {
    id: "proj-codecanvas",
    title: "CodeCanvas — Agentic AI-Native Browser IDE",
    subtitle: "Zero-install agentic AI-native IDE co-built with GPT-5.6 featuring real-time auto-debugging and CyberBoard visual planning.",
    summary: "OpenAI Build Week 2026 (7-Day Sprint Build): A zero-latency, browser-native AI IDE unifying intelligent code generation, automatic error diagnostics, visual architectural whiteboard planning, and instant hot-reloading rendering.",
    about: "CodeCanvas unifies intelligent code generation, real-time visual architectural planning, and zero-latency browser rendering into a single, cohesive AI-Native Workspace. Built in 7 days for OpenAI Build Week 2026 and powered by GPT-5.6 & Codex, CodeCanvas acts as an agentic partner that auto-diagnoses console errors and constructs web applications directly inside the browser.",
    usecase: "Instant browser-native software prototyping, agentic AI auto-debugging, visual architecture sketchpad, and zero-setup web application development.",
    chronologyStep: "OpenAI Build Week (7-Day Build)",
    date: "2026-07-21",
    lastCommitDate: "2026-07-21",
    lastCommitMsg: "docs: update README for OpenAI Build Week with GPT-5.6, Antigravity & zero-download highlights",
    category: "OpenAI Build Week",
    image: "codecanvas_thumbnail.jpg",
    engineeringMethod: "Agentic AI Engineering & GPT-5.6 Co-Creation",
    engineeringLabel: "🚀 OpenAI Build Week (7-Day Build)",
    hackathon: "OpenAI Build Week 2026 Submission",
    youtubeUrl: "https://youtu.be/U5va0qWt1Dc?si=3xpzYX8EiTl4M-EZ",
    youtubeId: "U5va0qWt1Dc",
    tags: ["React 19", "GPT-5.6", "Vite", "Monaco Editor", "TailwindCSS", "TypeScript", "WebAssembly"],
    demoUrl: "https://prashanth-karanam.github.io/CodeCanvas/",
    repoUrl: "https://github.com/prashanth-karanam/CodeCanvas"
  },
  {
    id: "proj-srm-unblocker",
    title: "SRM Wi-Fi Unblocker — MASQUE TLS-443 Stealth Tunnel Engine",
    subtitle: "1-click automated network firewall bypass engine for university Wi-Fi game blocks and port restrictions.",
    summary: "First Stealth Systems & Networking Project: A specialized low-latency networking utility engineered to bypass institutional Deep Packet Inspection (DPI) and university firewall blocks via MASQUE HTTP/3 stealth tunneling over TLS Port 443.",
    about: "SRM Wi-Fi Unblocker is a specialized network utility engineered to solve institutional network blocking across university campus networks. Conventional VPN handshakes (WireGuard/OpenVPN) fail on SRMIST campus firewalls because non-standard UDP ports and VPN handshakes are actively dropped. This engine encapsulates game packets inside MASQUE (HTTP/3 over TLS Port 443) stealth tunnels, disguising game server traffic as standard HTTPS web browsing with sub-15ms latency.",
    usecase: "Bypassing university Wi-Fi gaming blocks (Free Fire, Genshin, Steam), unblocking restricted developer resources, and zero-latency campus stealth networking.",
    chronologyStep: "First Stealth Networking Project",
    date: "2026-08-07",
    lastCommitDate: "2026-08-07",
    lastCommitMsg: "feat: add SRM Wi-Fi Game & Site Unblocker engine with MASQUE HTTP/3 stealth tunneling",
    category: "Stealth Systems & Networking",
    image: "srm_unblocker_yt_thumbnail.png",
    engineeringMethod: "Hand-Crafted Core Networking Architecture",
    engineeringLabel: "⚡ Stealth Systems & Networking",
    hackathon: "Open-Source Stealth Tool",
    youtubeUrl: "",
    youtubeId: "",
    tags: ["PowerShell", "Batch / CMD", "MASQUE Protocol", "TLS 443 Tunneling", "Cloudflare WARP", "Stealth Networking", "DPI Circumvention"],
    demoUrl: "https://github.com/prashanth-karanam/srm-wifi-unblocker",
    repoUrl: "https://github.com/prashanth-karanam/srm-wifi-unblocker"
  },
  {
    id: "proj-eclipse-stream",
    title: "Eclipse Stream — First Public Working Media Streaming Platform",
    subtitle: "Self-hosted personal cinema streaming interface with AI recommendations & real-time tracker.",
    summary: "First Public Working Media Streaming Project: An ultra-responsive self-hosted personal cinema platform uniting fluid video delivery, intelligent movie metadata curation, ambient player cinematics, and real-time watch tracking.",
    about: "Eclipse Stream (eclipse-stream & CinePulse) represents my first fully deployed, public working media streaming project. Built to deliver a personal cinema experience, it features instant movie metadata aggregation, custom watchlist management, ambient backlight synchronization, and responsive multi-device video delivery.",
    usecase: "Self-hosted cinema streaming, automated movie metadata tracking, ambient player cinematics, and multi-device video delivery.",
    chronologyStep: "First Public Working Project",
    date: "2026-08-08",
    lastCommitDate: "2026-08-09",
    lastCommitMsg: "feat: release CinePulse master tracker & Eclipse Stream media engine",
    category: "Public Media Platforms",
    image: "eclipse_stream_yt_thumbnail.png",
    engineeringMethod: "Hand-Crafted Core Web Architecture",
    engineeringLabel: "🎬 Public Working Project",
    hackathon: "Public Media Platform",
    youtubeUrl: "",
    youtubeId: "",
    tags: ["JavaScript", "HTML5 Video", "Metadata API", "CSS Glassmorphism", "Responsive Web", "CinePulse Tracker"],
    demoUrl: "https://github.com/prashanth-karanam/eclipse-stream",
    repoUrl: "https://github.com/prashanth-karanam/eclipse-stream"
  },
  {
    id: "proj-public-ide",
    title: "Public-IDE — Gen-Z Python Learning IDE & Prompt System",
    subtitle: "Beginner-friendly Python learning site with built-in ChatGPT prompts and gamified leveling.",
    summary: "Pioneer Learning IDE Project: A beginner-friendly interactive website designed to train new Python learners with built-in ChatGPT prompts and a crispy Gen-Z leveling system.",
    about: "Public-IDE was created to bridge the gap between beginner programmers and AI copilots. It features a curated prompt bank for ChatGPT, structured Python tutorials, interactive code execution snippets, and a gamified level-up system tailored for Gen-Z learners.",
    usecase: "Interactive Python learning, AI prompt engineering education, and gamified coding progression.",
    chronologyStep: "Pioneer Learning IDE",
    date: "2026-04-15",
    lastCommitDate: "2026-04-16",
    lastCommitMsg: "feat: beginner friendly python prompt system and leveling engine",
    category: "Pioneer IDE Projects",
    image: "public_ide_yt_thumbnail.png",
    engineeringMethod: "Hand-Crafted Interactive Web Tool",
    engineeringLabel: "🛠️ Pioneer Project",
    hackathon: "Educational AI Tool",
    youtubeUrl: "",
    youtubeId: "",
    tags: ["Python Learning", "ChatGPT Prompts", "Gamified Coding", "Gen-Z UI", "JavaScript"],
    demoUrl: "https://github.com/prashanth-karanam/Public-IDE",
    repoUrl: "https://github.com/prashanth-karanam/Public-IDE"
  }
];

function generateProceduralGraphic(title, color1, color2) {
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
        <defs>
            <linearGradient id="grad-${title.replace(/\s+/g, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="${color1}" stop-opacity="0.95"/>
                <stop offset="100%" stop-color="${color2}" stop-opacity="0.95"/>
            </linearGradient>
            <pattern id="gridPattern" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
            </pattern>
        </defs>
        <rect width="600" height="400" fill="#0d0f14"/>
        <rect width="600" height="400" fill="url(#gridPattern)"/>
        <circle cx="300" cy="200" r="140" fill="url(#grad-${title.replace(/\s+/g, '')})" filter="blur(30px)" opacity="0.5"/>
        <circle cx="300" cy="200" r="80" fill="none" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="6 4"/>
        <circle cx="300" cy="200" r="115" fill="none" stroke="#64748b" stroke-width="1"/>
        <text x="300" y="195" fill="#f8fafc" font-family="Space Grotesk, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" letter-spacing="3">${title.toUpperCase()}</text>
        <text x="300" y="225" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="12" text-anchor="middle" letter-spacing="2">AI OS SYSTEM</text>
    </svg>`;
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

class ProjectStore {
    constructor() {
        this.STORAGE_KEY = 'PRISM_PORTFOLIO_PROJECTS_V700';
        try {
            localStorage.clear();
        } catch(e) {}
        this.projects = DEFAULT_PROJECTS;
        this.initStore();
    }

    async initStore() {
        try {
            const res = await fetch('projects.json?v=' + Date.now());
            if (res.ok) {
                const jsonProjects = await res.json();
                if (Array.isArray(jsonProjects) && jsonProjects.length > 0) {
                    this.projects = jsonProjects;
                    this.enforceDateFix();
                    if (window.prismApp) {
                        window.prismApp.renderSkillMatrix();
                        window.prismApp.renderProjects();
                        window.prismApp.updateStats();
                    }
                    return;
                }
            }
        } catch (e) {
            console.log("Using default projects dataset", e);
        }

        this.enforceDateFix();
        this.saveProjects(this.projects);
    }

    enforceDateFix() {
        this.projects.forEach(p => {
            if (p.id === 'proj-luna-brain') p.date = '2026-08-09';
            if (p.id === 'proj-codecanvas') p.date = '2026-07-21';
        });
    }

    saveProjects(projectsList) {
        this.projects = projectsList;
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(projectsList));
    }

    addProject(newProject) {
        this.projects.unshift(newProject);
        this.saveProjects(this.projects);
    }

    getById(id) {
        return this.projects.find(p => p.id === id);
    }
}

// ==========================================================================
// 2. AUDIO SYNTHESIZER SOUND EFFECTS
// ==========================================================================
class SoundFX {
    constructor() {
        this.audioCtx = null;
        this.enabled = localStorage.getItem('PRISM_SOUND') !== 'false';
    }

    init() {
        if (!this.audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.audioCtx = new AudioContext();
            }
        }
    }

    toggle() {
        this.enabled = !this.enabled;
        localStorage.setItem('PRISM_SOUND', this.enabled ? 'true' : 'false');
        return this.enabled;
    }

    playClick() {
        if (!this.enabled) return;
        this.init();
        if (!this.audioCtx) return;

        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, this.audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(250, this.audioCtx.currentTime + 0.04);

        gain.gain.setValueAtTime(0.06, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.04);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start();
        osc.stop(this.audioCtx.currentTime + 0.04);
    }

    playHover() {
        if (!this.enabled) return;
        this.init();
        if (!this.audioCtx) return;

        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(350, this.audioCtx.currentTime);
        osc.frequency.linearRampToValueAtTime(500, this.audioCtx.currentTime + 0.02);

        gain.gain.setValueAtTime(0.015, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.02);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start();
        osc.stop(this.audioCtx.currentTime + 0.02);
    }

    playSuccess() {
        if (!this.enabled) return;
        this.init();
        if (!this.audioCtx) return;

        const now = this.audioCtx.currentTime;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.setValueAtTime(554.37, now + 0.08);
        osc.frequency.setValueAtTime(659.25, now + 0.16);

        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start();
        osc.stop(now + 0.3);
    }
}

// ==========================================================================
// 3. BACKGROUND CANVAS 3D PARTICLE ENGINE
// ==========================================================================
class Canvas3D {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 50;
        this.mouseX = 0;
        this.mouseY = 0;
        this.targetMouseX = 0;
        this.targetMouseY = 0;

        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            this.targetMouseX = (e.clientX - window.innerWidth / 2);
            this.targetMouseY = (e.clientY - window.innerHeight / 2);
        });

        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                z: Math.random() * 800 + 1,
                radius: Math.random() * 2 + 1,
                color: i % 2 === 0 ? '#38bdf8' : '#6366f1'
            });
        }

        this.animate();
    }

    resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
    }

    animate() {
        this.mouseX += (this.targetMouseX - this.mouseX) * 0.04;
        this.mouseY += (this.targetMouseY - this.mouseY) * 0.04;

        this.ctx.clearRect(0, 0, this.width, this.height);

        for (let i = 0; i < this.particles.length; i++) {
            const p1 = this.particles[i];
            p1.z -= 0.5;
            if (p1.z <= 0) p1.z = 800;

            const scale = 400 / p1.z;
            const px = (p1.x - this.width / 2 + this.mouseX * 0.15) * scale + this.width / 2;
            const py = (p1.y - this.height / 2 + this.mouseY * 0.15) * scale + this.height / 2;

            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                const scale2 = 400 / p2.z;
                const px2 = (p2.x - this.width / 2 + this.mouseX * 0.15) * scale2 + this.width / 2;
                const py2 = (p2.y - this.height / 2 + this.mouseY * 0.15) * scale2 + this.height / 2;

                const dx = px - px2;
                const dy = py - py2;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(px, py);
                    this.ctx.lineTo(px2, py2);
                    this.ctx.strokeStyle = `rgba(56, 189, 248, ${0.12 * (1 - dist / 120)})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            }

            this.ctx.beginPath();
            this.ctx.arc(px, py, Math.max(0.5, p1.radius * scale * 0.6), 0, Math.PI * 2);
            this.ctx.fillStyle = p1.color;
            this.ctx.fill();
        }

        requestAnimationFrame(() => this.animate());
    }
}

// ==========================================================================
// 4. MAIN APPLICATION CONTROLLER
// ==========================================================================
class PrismApp {
    constructor() {
        this.store = new ProjectStore();
        this.sound = new SoundFX();
        this.canvas3D = new Canvas3D('bg-canvas');

        this.currentViewMode = 'spatial';
        this.searchQuery = '';
        this.activeSkillTag = null;
        this.activeEngineeringMethod = 'all';

        this.initUI();
        this.initTheme();
        this.initCopilot();
        this.renderSkillMatrix();
        this.renderProjects();
        this.updateStats();
    }

    initTheme() {
        const themeSelect = document.getElementById('theme-select');
        const savedTheme = localStorage.getItem('PRISM_THEME') || 'theme-titanium';

        document.body.className = savedTheme;
        themeSelect.value = savedTheme;

        themeSelect.onchange = (e) => {
            const newTheme = e.target.value;
            document.body.className = newTheme;
            localStorage.setItem('PRISM_THEME', newTheme);
            this.sound.playClick();
        };
    }

    initCopilot() {
        const cmdModal = document.getElementById('cmd-modal');
        const cmdInput = document.getElementById('cmd-input');
        const cmdOutput = document.getElementById('cmd-output-box');

        const openCopilot = () => {
            this.sound.playClick();
            cmdModal.classList.remove('hidden');
            setTimeout(() => cmdInput.focus(), 100);
        };

        const closeCopilot = () => {
            cmdModal.classList.add('hidden');
        };

        document.getElementById('open-cmd-btn').onclick = openCopilot;
        document.getElementById('close-cmd-btn').onclick = closeCopilot;

        window.onkeydown = (e) => {
            if (e.ctrlKey && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                if (cmdModal.classList.contains('hidden')) openCopilot();
                else closeCopilot();
            }
        };

        document.querySelectorAll('.cmd-chip').forEach(chip => {
            chip.onclick = () => {
                cmdInput.value = chip.dataset.cmd;
                this.executeCopilotCommand(chip.dataset.cmd);
            };
        });

        cmdInput.onkeydown = (e) => {
            if (e.key === 'Enter') {
                const query = cmdInput.value.trim();
                this.executeCopilotCommand(query);
            }
        };
    }

    executeCopilotCommand(query) {
        const q = query.toLowerCase();
        const cmdOutput = document.getElementById('cmd-output-box');
        let reply = '';

        if (q.includes('luna')) {
            this.openDetailModal('proj-luna');
            document.getElementById('cmd-modal').classList.add('hidden');
            reply = "Opened Luna 3B Local Intelligence Detail Modal.";
        } else if (q.includes('codecanvas')) {
            this.openDetailModal('proj-codecanvas');
            document.getElementById('cmd-modal').classList.add('hidden');
            reply = "Opened CodeCanvas Detail Modal.";
        } else if (q.includes('autonomy') || q.includes('dataset')) {
            this.openDetailModal('proj-luna');
            document.getElementById('cmd-modal').classList.add('hidden');
            reply = "Opened Luna 3B Dataset Autonomy Breakdown.";
        } else if (q.includes('github') || q.includes('repo')) {
            window.open('https://github.com/prashanth-karanam', '_blank');
            reply = "Opened Prashanth Karanam's GitHub profile.";
        } else if (q.includes('add') || q.includes('deploy')) {
            document.getElementById('cmd-modal').classList.add('hidden');
            document.getElementById('add-modal').classList.remove('hidden');
            reply = "Opened Deploy Project CMS Modal.";
        } else {
            this.searchQuery = q;
            document.getElementById('search-input').value = query;
            this.renderProjects();
            reply = `Searching portfolio for '${query}'...`;
        }

        cmdOutput.innerHTML = `<div class="cmd-response-text">> ${reply}</div>`;
        this.sound.playSuccess();
    }

    renderSkillMatrix() {
        const container = document.getElementById('skill-pills-matrix');
        const allSkills = new Set();
        this.store.projects.forEach(p => p.tags.forEach(t => allSkills.add(t)));

        container.innerHTML = Array.from(allSkills).map(tag => `
            <button class="skill-matrix-tag ${this.activeSkillTag === tag ? 'active' : ''}" data-tag="${tag}">
                #${tag}
            </button>
        `).join('');

        container.querySelectorAll('.skill-matrix-tag').forEach(btn => {
            btn.onclick = () => {
                this.sound.playClick();
                const tag = btn.dataset.tag;
                if (this.activeSkillTag === tag) {
                    this.activeSkillTag = null;
                    btn.classList.remove('active');
                } else {
                    this.activeSkillTag = tag;
                    container.querySelectorAll('.skill-matrix-tag').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                }
                this.renderProjects();
            };
        });
    }

    initUI() {
        document.querySelectorAll('.header-nav .nav-link[data-view]').forEach(btn => {
            btn.onclick = () => {
                this.sound.playClick();
                document.querySelectorAll('.header-nav .nav-link[data-view]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                this.currentViewMode = btn.dataset.view;
                const stage = document.getElementById('stage-viewport');
                stage.className = `stage-viewport view-${this.currentViewMode}`;
                this.renderProjects();
            };
        });

        const searchInput = document.getElementById('search-input');
        const clearBtn = document.getElementById('clear-search-btn');

        searchInput.oninput = (e) => {
            this.searchQuery = e.target.value.toLowerCase().trim();
            clearBtn.classList.toggle('hidden', this.searchQuery === '');
            this.renderProjects();
        };

        clearBtn.onclick = () => {
            searchInput.value = '';
            this.searchQuery = '';
            clearBtn.classList.add('hidden');
            this.renderProjects();
        };

        document.getElementById('reset-filters-btn').onclick = () => {
            this.sound.playClick();
            searchInput.value = '';
            this.searchQuery = '';
            this.activeSkillTag = null;
            this.renderSkillMatrix();
            this.renderProjects();
        };

        const soundBtn = document.getElementById('sound-toggle');
        soundBtn.onclick = () => {
            const isEnabled = this.sound.toggle();
            soundBtn.innerHTML = isEnabled ? `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            ` : `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
            `;
            if (isEnabled) this.sound.playClick();
        };

        document.querySelectorAll('.eng-filter-pill').forEach(btn => {
            btn.onclick = () => {
                this.sound.playClick();
                document.querySelectorAll('.eng-filter-pill').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.activeEngineeringMethod = btn.dataset.method;
                this.renderProjects();
            };
        });

        const addModal = document.getElementById('add-modal');
        document.getElementById('add-project-btn').onclick = () => {
            this.sound.playClick();
            addModal.classList.remove('hidden');
        };
        document.getElementById('close-add-btn').onclick = () => addModal.classList.add('hidden');
        document.getElementById('cancel-add-btn').onclick = () => addModal.classList.add('hidden');

        document.getElementById('add-project-form').onsubmit = (e) => {
            e.preventDefault();
            this.handleCreateProject();
        };

        const detailModal = document.getElementById('detail-modal');
        document.getElementById('close-detail-btn').onclick = () => detailModal.classList.add('hidden');

        // YOUTUBE VIDEO MODAL HANDLERS
        const videoModal = document.getElementById('video-modal');
        const closeVideoBtn = document.getElementById('close-video-btn');
        const videoContainer = document.getElementById('video-iframe-container');

        const closeVideoModal = () => {
            if (videoModal) videoModal.classList.add('hidden');
            if (videoContainer) videoContainer.innerHTML = '';
        };

        if (closeVideoBtn) closeVideoBtn.onclick = closeVideoModal;
        if (videoModal) {
            videoModal.onclick = (e) => {
                if (e.target === videoModal) closeVideoModal();
            };
        }

        window.openVideoModal = (youtubeId, title) => {
            this.sound.playClick();
            if (videoModal && videoContainer) {
                document.getElementById('video-modal-title').textContent = title || 'OpenAI Build Week Demo Video';
                videoContainer.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1" style="position:absolute; top:0; left:0; width:100%; height:100%; border:none;" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
                videoModal.classList.remove('hidden');
            }
        };
    }

    getFilteredProjects() {
        return this.store.projects.filter(p => {
            if (this.activeSkillTag && !p.tags.includes(this.activeSkillTag)) {
                return false;
            }

            if (this.activeEngineeringMethod === 'handcrafted' && (!p.engineeringLabel || !p.engineeringLabel.includes('Hand-Crafted'))) {
                return false;
            }

            if (this.activeEngineeringMethod === 'agentic' && (!p.engineeringLabel || !p.engineeringLabel.includes('Agentic'))) {
                return false;
            }

            if (this.searchQuery !== '') {
                const matchTitle = p.title.toLowerCase().includes(this.searchQuery);
                const matchSummary = p.summary.toLowerCase().includes(this.searchQuery);
                const matchUsecase = p.usecase.toLowerCase().includes(this.searchQuery);
                const matchTag = p.tags.some(t => t.toLowerCase().includes(this.searchQuery));
                if (!matchTitle && !matchSummary && !matchUsecase && !matchTag) return false;
            }

            return true;
        });
    }

    renderProjects() {
        const container = document.getElementById('spatial-cards-container');
        const emptyState = document.getElementById('empty-state');
        const filtered = this.getFilteredProjects();

        if (filtered.length === 0) {
            container.innerHTML = '';
            emptyState.classList.remove('hidden');
            return;
        }

        emptyState.classList.add('hidden');
        container.innerHTML = filtered.map(p => `
            <div class="spatial-card" data-id="${p.id}">
                <div class="card-media-box">
                    <img src="${p.image}" alt="${p.title}" class="card-image" loading="lazy">
                    <span class="card-category-badge">${p.chronologyStep || p.category}</span>
                    <span class="card-eng-badge">${p.engineeringLabel || 'Hand-Crafted Core'}</span>
                    <span class="card-date-badge">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        ${p.date}
                    </span>
                </div>
                <div class="card-body">
                    <h3 class="card-title">${p.title}</h3>
                    <div class="card-usecase">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        ${p.usecase}
                    </div>
                    <p class="card-summary">${p.summary}</p>
                    ${p.lastCommitMsg ? `
                    <div class="card-commit-box">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2"><circle cx="12" cy="12" r="4"/><line x1="1.05" y1="12" x2="7" y2="12"/><line x1="17" y1="12" x2="22.95" y2="12"/></svg>
                        <span><strong>Last Commit (${p.lastCommitDate}):</strong> ${p.lastCommitMsg}</span>
                    </div>` : ''}
                    <div class="card-footer">
                        <div class="tag-cloud">
                            ${p.tags.slice(0, 3).map(t => `<span class="tech-tag">${t}</span>`).join('')}
                        </div>
                        <div class="card-actions-bar" onclick="event.stopPropagation()">
                            ${p.demoUrl ? `
                            <button class="card-btn primary" onclick="event.stopPropagation(); window.open('${p.demoUrl}', '_blank', 'noopener,noreferrer')">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                                <span>${p.demoUrl.includes('drive.google.com') ? 'Drive' : 'Live Demo'}</span>
                            </button>` : ''}
                            ${p.repoUrl ? `
                            <button class="card-btn secondary" onclick="event.stopPropagation(); window.open('${p.repoUrl}', '_blank', 'noopener,noreferrer')">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                                <span>GitHub</span>
                            </button>` : ''}
                            ${p.youtubeUrl ? `
                            <button class="card-btn yt" onclick="event.stopPropagation(); window.open('${p.youtubeUrl}', '_blank', 'noopener,noreferrer')">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                                <span>Watch</span>
                            </button>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        container.querySelectorAll('.spatial-card').forEach(card => {
            card.onmouseenter = () => this.sound.playHover();
            card.onclick = () => {
                this.sound.playClick();
                const id = card.dataset.id;
                this.openDetailModal(id);
            };
        });
    }

    openDetailModal(id) {
        const p = this.store.getById(id);
        if (!p) return;

        document.getElementById('modal-category').textContent = p.category;
        document.getElementById('modal-date').innerHTML = `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            ${p.date}
        `;
        document.getElementById('modal-title').textContent = p.title;
        document.getElementById('modal-subtitle').textContent = p.subtitle;

        // Render project-specific tabs and body content
        const modalTabsNav = document.querySelector('.modal-tabs');
        const modalBodyScroll = document.querySelector('.modal-body-scroll');

        if (p.id === 'proj-luna' || p.id === 'proj-luna-brain' || p.id === 'proj-luna-gui') {
            modalTabsNav.innerHTML = `
                <button class="tab-btn active" data-tab="tab-luna-overview">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    Overview & Notice
                </button>
                <button class="tab-btn" data-tab="tab-luna-autonomy">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                    Dataset Autonomy Architecture
                </button>
                <button class="tab-btn" data-tab="tab-luna-cascade">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                    4-Level Execution Cascade
                </button>
                <button class="tab-btn" data-tab="tab-luna-tools">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                    System Action Tools
                </button>
            `;

            modalBodyScroll.innerHTML = `
                <!-- TAB 1: LUNA OVERVIEW -->
                <div id="tab-luna-overview" class="tab-content active">
                    <div class="preview-hero-box">
                        <img src="${p.image}" alt="${p.title}" class="modal-preview-image">
                    </div>

                    <div class="info-section" style="background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 12px; padding: 1.25rem;">
                        <h4 style="color:#38bdf8; display:flex; align-items:center; gap:0.5rem; margin-bottom:0.5rem;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                            Download Status & Upcoming Release
                        </h4>
                        <p style="color:#f8fafc; font-size:0.92rem; line-height:1.5; font-weight:500;">
                            ⚡ <strong>Notice:</strong> Download links of both the <strong>Luna 3B LLM model weights</strong> and its <strong>Python tools backend</strong> will be released soon.
                        </p>
                        <div style="display:flex; gap:1rem; flex-wrap:wrap; margin-top:0.85rem;">
                            <a href="${p.repoUrl}" target="_blank" class="primary-btn glow-btn" style="text-decoration:none;">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                                Star on GitHub (Releases Coming Soon)
                            </a>
                        </div>
                    </div>

                    <div class="info-section">
                        <h4>🎯 Primary Usecase</h4>
                        <p class="highlight-text-box">${p.usecase}</p>
                    </div>

                    <div class="info-section">
                        <h4>🧠 Detailed Architecture & Purpose</h4>
                        <p class="prose-text">${p.about}</p>
                    </div>

                    <div class="info-section">
                        <h4>🛠️ Technology Stack</h4>
                        <div class="tag-cloud">${p.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
                    </div>
                </div>

                <!-- TAB 2: DATASET AUTONOMY -->
                <div id="tab-luna-autonomy" class="tab-content">
                    <div style="display:flex; flex-direction:column; gap:1rem;">
                        <h4 style="color:#f8fafc;">🔬 Fine-Tuning & Dataset Autonomy Architecture</h4>
                        <p style="color:#94a3b8; font-size:0.88rem; line-height:1.5;">
                            Rather than relying on vague conversation prompts, Luna 3B is fine-tuned on a targeted <strong>Supervised Fine-Tuning (SFT) dataset</strong> engineered specifically to solve small-model tool calling failure modes.
                        </p>

                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.85rem;">
                            <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:1rem;">
                                <h5 style="color:#38bdf8; margin-bottom:0.3rem;">1. 100% Schema Consistency</h5>
                                <p style="color:#94a3b8; font-size:0.82rem; line-height:1.4;">ALL tool outputs emit strict JSON action arrays <code>[{"action": "..."}]</code> without Markdown chatter or hallucinated syntax wrappers.</p>
                            </div>
                            <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:1rem;">
                                <h5 style="color:#38bdf8; margin-bottom:0.3rem;">2. Zero Numeric Hallucination</h5>
                                <p style="color:#94a3b8; font-size:0.82rem; line-height:1.4;">Telemetry data (CPU/GPU temps, memory bytes, PIDs) ONLY appear after verified environment telemetry injection, preventing fake hardware stats.</p>
                            </div>
                            <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:1rem;">
                                <h5 style="color:#38bdf8; margin-bottom:0.3rem;">3. Canonical System Prompt</h5>
                                <p style="color:#94a3b8; font-size:0.82rem; line-height:1.4;">Single unified system prompt across 500+ dataset rows grounds the 3B model's attention heads to maintain zero-drift focus.</p>
                            </div>
                            <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:1rem;">
                                <h5 style="color:#38bdf8; margin-bottom:0.3rem;">4. Rich Lexical Diversity</h5>
                                <p style="color:#94a3b8; font-size:0.82rem; line-height:1.4;">Varied natural speech, shorthand, typos, and negative/clarification samples prevent surface pattern overfitting.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- TAB 3: 4-LEVEL EXECUTION CASCADE -->
                <div id="tab-luna-cascade" class="tab-content">
                    <div style="display:flex; flex-direction:column; gap:0.85rem;">
                        <h4 style="color:#f8fafc;">⚡ Luna 4-Level Latency & Execution Pipeline</h4>
                        
                        <div style="background:rgba(16, 185, 129, 0.08); border:1px solid rgba(16, 185, 129, 0.25); border-radius:8px; padding:0.9rem; display:flex; gap:1rem; align-items:flex-start;">
                            <span style="background:rgba(16, 185, 129, 0.2); color:#10b981; font-family:var(--font-mono); font-weight:bold; font-size:0.85rem; padding:0.25rem 0.5rem; border-radius:6px;">Level 0</span>
                            <div>
                                <h5 style="color:#f8fafc; font-size:0.92rem; margin-bottom:0.2rem;">Fast Pattern Interceptor & FastPSPool (⚡ 5ms, 0 Tokens)</h5>
                                <p style="color:#94a3b8; font-size:0.82rem; line-height:1.4;">Instant pattern matcher bypasses LLM inference for cached system templates using a pre-warmed PowerShell pool.</p>
                            </div>
                        </div>

                        <div style="background:rgba(56, 189, 248, 0.08); border:1px solid rgba(56, 189, 248, 0.25); border-radius:8px; padding:0.9rem; display:flex; gap:1rem; align-items:flex-start;">
                            <span style="background:rgba(56, 189, 248, 0.2); color:#38bdf8; font-family:var(--font-mono); font-weight:bold; font-size:0.85rem; padding:0.25rem 0.5rem; border-radius:6px;">Level 1</span>
                            <div>
                                <h5 style="color:#f8fafc; font-size:0.92rem; margin-bottom:0.2rem;">Local Ollama / Qwen 3B Action Parser (~40ms Inference)</h5>
                                <p style="color:#94a3b8; font-size:0.82rem; line-height:1.4;">Runs fine-tuned 3B model locally on user's GPU. Emits clean JSON action objects for complex un-cached queries.</p>
                            </div>
                        </div>

                        <div style="background:rgba(168, 85, 247, 0.08); border:1px solid rgba(168, 85, 247, 0.25); border-radius:8px; padding:0.9rem; display:flex; gap:1rem; align-items:flex-start;">
                            <span style="background:rgba(168, 85, 247, 0.2); color:#a855f7; font-family:var(--font-mono); font-weight:bold; font-size:0.85rem; padding:0.25rem 0.5rem; border-radius:6px;">Level 2</span>
                            <div>
                                <h5 style="color:#f8fafc; font-size:0.92rem; margin-bottom:0.2rem;">Multi-Step Playwright CDP Browser & OS Automation</h5>
                                <p style="color:#94a3b8; font-size:0.82rem; line-height:1.4;">Executes browser driving, YouTube search & playback, network socket diagnostics, and file system management.</p>
                            </div>
                        </div>

                        <div style="background:rgba(239, 68, 68, 0.08); border:1px solid rgba(239, 68, 68, 0.25); border-radius:8px; padding:0.9rem; display:flex; gap:1rem; align-items:flex-start;">
                            <span style="background:rgba(239, 68, 68, 0.2); color:#ef4444; font-family:var(--font-mono); font-weight:bold; font-size:0.85rem; padding:0.25rem 0.5rem; border-radius:6px;">Level 3</span>
                            <div>
                                <h5 style="color:#f8fafc; font-size:0.92rem; margin-bottom:0.2rem;">Security Gate & Circuit Breaker Recovery</h5>
                                <p style="color:#94a3b8; font-size:0.82rem; line-height:1.4;">AST security parser blocks unsafe commands while CircuitBreaker prevents infinite execution loops on command failure.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- TAB 4: SYSTEM TOOLS -->
                <div id="tab-luna-tools" class="tab-content">
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.85rem;">
                        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:0.85rem;">
                            <h5 style="color:#38bdf8; margin-bottom:0.3rem;">🚀 RAM & Process Watchdog</h5>
                            <p style="color:#94a3b8; font-size:0.8rem; line-height:1.4;">Inspects thermal telemetry, terminates bloating background processes, and tunes ASUS ROG fan & power profiles.</p>
                        </div>
                        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:0.85rem;">
                            <h5 style="color:#38bdf8; margin-bottom:0.3rem;">🌐 Playwright CDP Automation</h5>
                            <p style="color:#94a3b8; font-size:0.8rem; line-height:1.4;">Drives web browser windows hands-free: searches YouTube, plays music, clicks links, and fetches web telemetry.</p>
                        </div>
                        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:0.85rem;">
                            <h5 style="color:#38bdf8; margin-bottom:0.3rem;">📶 Wireless & Network Diagnostics</h5>
                            <p style="color:#94a3b8; font-size:0.8rem; line-height:1.4;">Executes ICMP ping tests, scans active SSIDs, switches Wi-Fi bands (5GHz/6GHz), and manages adapters.</p>
                        </div>
                        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:0.85rem;">
                            <h5 style="color:#38bdf8; margin-bottom:0.3rem;">🔒 Workstation Vault & Security</h5>
                            <p style="color:#94a3b8; font-size:0.8rem; line-height:1.4;">Instant screen locking, local file backup to `%USERPROFILE%`, audio volume control, and zero cloud data leaks.</p>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // CODECANVAS & DEFAULT PROJECTS TABS
            modalTabsNav.innerHTML = `
                <button class="tab-btn active" data-tab="tab-overview">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    Overview & Links
                </button>
                <button class="tab-btn" data-tab="tab-workflow">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                    5-Step Workflow
                </button>
                <button class="tab-btn" data-tab="tab-features">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    Flagship Features
                </button>
                <button class="tab-btn" data-tab="tab-ghpages">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    Live GitHub Pages Site
                </button>
            `;

            modalBodyScroll.innerHTML = `
                <!-- TAB 1: OVERVIEW -->
                <div id="tab-overview" class="tab-content active">
                    <div class="preview-hero-box">
                        <img src="${p.image}" alt="${p.title}" class="modal-preview-image">
                    </div>

                    <div class="info-section">
                        <h4>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                            Live Workable Workspace & Repository
                        </h4>
                        <div style="display:flex; gap:1rem; flex-wrap:wrap; margin-top:0.75rem;">
                            ${p.demoUrl ? `<a href="${p.demoUrl}" target="_blank" class="primary-btn glow-btn" style="text-decoration:none;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>Launch Live GitHub Pages Site</a>` : ''}
                            ${p.repoUrl ? `<a href="${p.repoUrl}" target="_blank" class="secondary-btn" style="text-decoration:none; display:inline-flex; align-items:center; gap:0.5rem;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>GitHub Repository</a>` : ''}
                        </div>
                    </div>

                    <div class="info-section">
                        <h4>Primary Use Case</h4>
                        <p class="highlight-text-box">${p.usecase}</p>
                    </div>

                    <div class="info-section">
                        <h4>Detailed Description</h4>
                        <p class="prose-text">${p.about}</p>
                    </div>

                    <div class="info-section">
                        <h4>Tech Stack</h4>
                        <div class="tag-cloud">${p.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
                    </div>
                </div>

                <!-- TAB 2: WORKFLOW -->
                <div id="tab-workflow" class="tab-content">
                    <div style="display:flex; flex-direction:column; gap:0.75rem;">
                        <h4 style="color:var(--text-main); margin-bottom:0.25rem;">📖 CodeCanvas 5-Step Development Loop</h4>
                        <div style="display:grid; grid-template-columns:1fr; gap:0.75rem;">
                            <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:0.85rem; display:flex; gap:1rem; align-items:flex-start;">
                                <span style="background:rgba(56, 189, 248, 0.15); color:#38bdf8; font-family:var(--font-mono); font-weight:bold; font-size:0.9rem; padding:0.3rem 0.6rem; border-radius:6px;">01</span>
                                <div>
                                    <h5 style="color:#f8fafc; font-size:0.95rem; margin-bottom:0.2rem;">Write Code</h5>
                                    <p style="color:#94a3b8; font-size:0.82rem; line-height:1.4;">Select project files from the sidebar and write code directly inside the glowing editor.</p>
                                </div>
                            </div>
                            <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:0.85rem; display:flex; gap:1rem; align-items:flex-start;">
                                <span style="background:rgba(56, 189, 248, 0.15); color:#38bdf8; font-family:var(--font-mono); font-weight:bold; font-size:0.9rem; padding:0.3rem 0.6rem; border-radius:6px;">02</span>
                                <div>
                                    <h5 style="color:#f8fafc; font-size:0.95rem; margin-bottom:0.2rem;">Live Preview</h5>
                                    <p style="color:#94a3b8; font-size:0.82rem; line-height:1.4;">Watch your code render in real-time in the Live Preview panel with hot-reloading.</p>
                                </div>
                            </div>
                            <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:0.85rem; display:flex; gap:1rem; align-items:flex-start;">
                                <span style="background:rgba(236, 72, 153, 0.15); color:#ec4899; font-family:var(--font-mono); font-weight:bold; font-size:0.9rem; padding:0.3rem 0.6rem; border-radius:6px;">03</span>
                                <div>
                                    <h5 style="color:#f8fafc; font-size:0.95rem; margin-bottom:0.2rem;">AI Auto-Debug (⚡ Auto-Debug)</h5>
                                    <p style="color:#94a3b8; font-size:0.82rem; line-height:1.4;">Click <code>⚡ Auto-Debug</code> to let GPT-5.6 automatically fix runtime console errors.</p>
                                </div>
                            </div>
                            <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:0.85rem; display:flex; gap:1rem; align-items:flex-start;">
                                <span style="background:rgba(16, 185, 129, 0.15); color:#10b981; font-family:var(--font-mono); font-weight:bold; font-size:0.9rem; padding:0.3rem 0.6rem; border-radius:6px;">04</span>
                                <div>
                                    <h5 style="color:#f8fafc; font-size:0.95rem; margin-bottom:0.2rem;">Cyber Board (Visual Whiteboard)</h5>
                                    <p style="color:#94a3b8; font-size:0.82rem; line-height:1.4;">Draw full-screen architectural node diagrams and UI wireframes side-by-side with code.</p>
                                </div>
                            </div>
                            <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:0.85rem; display:flex; gap:1rem; align-items:flex-start;">
                                <span style="background:rgba(245, 158, 11, 0.15); color:#f59e0b; font-family:var(--font-mono); font-weight:bold; font-size:0.9rem; padding:0.3rem 0.6rem; border-radius:6px;">05</span>
                                <div>
                                    <h5 style="color:#f8fafc; font-size:0.95rem; margin-bottom:0.2rem;">Export</h5>
                                    <p style="color:#94a3b8; font-size:0.82rem; line-height:1.4;">Export your finished web app into a single standalone HTML bundle with one click.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- TAB 3: FEATURES -->
                <div id="tab-features" class="tab-content">
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.85rem;">
                        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:0.85rem;">
                            <h5 style="color:#38bdf8; margin-bottom:0.3rem;">🧠 Agentic AI Auto-Debug</h5>
                            <p style="color:#94a3b8; font-size:0.8rem; line-height:1.4;">Powered by GPT-5.6. Scans runtime console errors to issue automated fixes directly to active editor files.</p>
                        </div>
                        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:0.85rem;">
                            <h5 style="color:#38bdf8; margin-bottom:0.3rem;">🎨 CyberBoard Sketchpad</h5>
                            <p style="color:#94a3b8; font-size:0.8rem; line-height:1.4;">Integrated neon canvas with freehand brush, geometric shapes, and HD image export for wireframing.</p>
                        </div>
                        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:0.85rem;">
                            <h5 style="color:#38bdf8; margin-bottom:0.3rem;">🏆 Interactive Learning Path</h5>
                            <p style="color:#94a3b8; font-size:0.8rem; line-height:1.4;">Built-in coding lessons with task progress verification and real-time visual output feedback.</p>
                        </div>
                        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:0.85rem;">
                            <h5 style="color:#38bdf8; margin-bottom:0.3rem;">⚡ Zero-Install Instant Preview</h5>
                            <p style="color:#94a3b8; font-size:0.8rem; line-height:1.4;">100% in-browser client-side compilation engine. Zero heavy downloads or local server setup.</p>
                        </div>
                    </div>
                </div>

                <!-- TAB 4: GITHUB PAGES EMBED -->
                <div id="tab-ghpages" class="tab-content">
                    <div id="ghpages-container" style="min-height:350px; display:flex; flex-direction:column; border:1px solid var(--glass-border); border-radius:8px; overflow:hidden;">
                        ${p.demoUrl ? `
                            <div style="background:#1e293b; padding:0.5rem 1rem; color:#f8fafc; font-family:var(--font-mono); font-size:0.75rem; display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.08);">
                                <span>🌐 Live GitHub Pages Deployment</span>
                                <a href="${p.demoUrl}" target="_blank" style="color:#38bdf8; text-decoration:none; display:inline-flex; align-items:center; gap:0.3rem;">
                                    Open Full Window
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                                </a>
                            </div>
                            <iframe src="${p.demoUrl}" style="width:100%; height:380px; border:none; background:#ffffff;" title="${p.title} Live Preview"></iframe>
                        ` : `
                            <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding:3rem 1.5rem; text-align:center; color:var(--text-muted); background:rgba(255,255,255,0.02);">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom:1rem; opacity:0.5;"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
                                <h3 style="color:var(--text-main); font-size:1.1rem; margin-bottom:0.5rem;">No Live Web Page Deployment Available</h3>
                                <p style="font-size:0.85rem; max-width:400px; line-height:1.4;">This project runs as a local 100% offline GPU engine. You can inspect its source code or check back for upcoming model weight releases.</p>
                            </div>
                        `}
                    </div>
                </div>
            `;
        }

        // Attach click listeners to dynamically injected modal tab buttons
        modalTabsNav.querySelectorAll('.tab-btn').forEach(tabBtn => {
            tabBtn.onclick = () => {
                this.sound.playClick();
                modalTabsNav.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
                modalBodyScroll.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

                tabBtn.classList.add('active');
                const targetTab = modalBodyScroll.querySelector(`#${tabBtn.dataset.tab}`);
                if (targetTab) targetTab.classList.add('active');
            };
        });

        const detailModal = document.getElementById('detail-modal');
        detailModal.classList.remove('hidden');
    }

    handleCreateProject() {
        const title = document.getElementById('input-title').value.trim();
        const category = document.getElementById('input-category').value;
        const date = document.getElementById('input-date').value;
        const demoUrl = document.getElementById('input-demo').value.trim();
        const usecase = document.getElementById('input-usecase').value.trim();
        const summary = document.getElementById('input-summary').value.trim();
        const about = document.getElementById('input-about').value.trim();
        let image = document.getElementById('input-image').value.trim();
        const tagsInput = document.getElementById('input-tags').value.trim();

        if (!image) {
            image = generateProceduralGraphic(title, "#334155", "#64748b");
        }

        const tags = tagsInput.split(',').map(t => t.trim()).filter(t => t !== '');

        const newProj = {
            id: `proj-${Date.now()}`,
            title,
            subtitle: summary,
            summary,
            about,
            usecase,
            date: date || new Date().toISOString().split('T')[0],
            category,
            image,
            tags: tags.length > 0 ? tags : ["JavaScript", "HTML5"],
            demoUrl: demoUrl || "",
            repoUrl: ""
        };

        this.store.addProject(newProj);
        this.sound.playSuccess();

        document.getElementById('add-modal').classList.add('hidden');
        document.getElementById('add-project-form').reset();

        this.renderSkillMatrix();
        this.renderProjects();
        this.updateStats();
    }

    updateStats() {
        document.getElementById('stat-total-projects').textContent = this.store.projects.length;

        const allTags = new Set();
        this.store.projects.forEach(p => p.tags.forEach(t => allTags.add(t)));
        document.getElementById('stat-total-tech').textContent = allTags.size + '+';

        // Cloud APIs = 0 (always, Luna is local-first)
        const sandboxEl = document.getElementById('stat-sandbox-count');
        if (sandboxEl) sandboxEl.textContent = '0';
    }
}

/* ============================================================
   SCROLL REVEAL SYSTEM — IntersectionObserver based
   ============================================================ */
function initScrollReveal() {
    const reveals = document.querySelectorAll('[data-reveal]');
    const stagger = document.querySelectorAll('[data-reveal-stagger]');

    const revealObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    reveals.forEach(el => revealObs.observe(el));

    const staggerObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    stagger.forEach(el => staggerObs.observe(el));
}

/* ============================================================
   SCROLL PROGRESS BAR
   ============================================================ */
function initScrollProgress() {
    const bar = document.getElementById('scroll-progress-bar');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const scrollPct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        bar.style.transform = `scaleX(${Math.min(scrollPct, 1)})`;
    }, { passive: true });
}

/* ============================================================
   HEADER SCROLL CLASS
   ============================================================ */
function initHeaderScroll() {
    const header = document.querySelector('.app-header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
}

/* ============================================================
   KINETIC HERO TEXT — word-by-word glow on load
   ============================================================ */
function initKineticHero() {
    const desc = document.querySelector('.hero-description');
    if (!desc) return;
    // Already styled statically; just do a simple blur-in reveal on load
    setTimeout(() => {
        desc.style.opacity = '1';
        desc.style.transform = 'none';
    }, 600);
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    window.prismApp = new PrismApp();
    initScrollReveal();
    initScrollProgress();
    initHeaderScroll();
    initKineticHero();
});

