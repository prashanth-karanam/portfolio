/**
 * PRISM // SPATIAL PORTFOLIO ENGINE (LUNA 3B & CODECANVAS EDITION)
 * Spotlight Projects: Luna 3B Local Intelligence & CodeCanvas AI IDE
 */

// ==========================================================================
// 1. DEFAULT DATASET (SPOTLIGHT PROJECTS: LUNA 3B & CODECANVAS)
// ==========================================================================
const DEFAULT_PROJECTS = [
    {
        id: "proj-luna",
        title: "Luna 3B — Local OS Intelligence & Dataset Autonomy",
        subtitle: "100% local 3B parameter AI OS brain stem fine-tuned for system commands with zero cloud latency.",
        summary: "Luna 3B is a fine-tuned 3B parameter model and co-located Python execution engine built to translate natural voice and text commands into real-time system actions (RAM cleanup, process control, Playwright CDP browser automation, network switching) with 0 API calls and 100% local GPU execution.",
        about: "Luna 3B is not another voice wrapper around ChatGPT or a conversational chatbot. It is a 3B parameter language model fine-tuned specifically to output structured JSON system action arrays. Coupled with a co-located Python backend (FastAPI, SecureExecutor, and FastPSPool), Luna acts directly on operating system calls. Its Dataset Autonomy Architecture features a 4-level execution cascade: Level 0 fast cache (PSPool ~5ms, 0 tokens), Level 1 local Ollama/Qwen 3B inference, Level 2 multi-step CDP automation, and Level 3 Circuit Breaker error recovery. Built on a dataset of 500+ SFT entries with zero numeric hallucination, strict schema consistency, and zero cloud dependency.",
        usecase: "Autonomous local system control, voice-triggered RAM & process optimization, Playwright CDP browser automation, and offline privacy-first computing.",
        date: "2026-07-29",
        category: "AI / ML",
        image: "luna_thumbnail.jpg",
        tags: [
            "Qwen 3B",
            "PyTorch / SFT",
            "FastAPI",
            "Playwright CDP",
            "PowerShell",
            "Local GPU",
            "Python",
            "JSONL Dataset"
        ],
        demoUrl: "",
        repoUrl: "https://github.com/prashanth-karanam/Luna-V3",
        downloadNotice: "Download links of both the Luna 3B LLM model weights and its Python tools backend will be released soon."
    },
    {
        id: "proj-codecanvas",
        title: "CodeCanvas — Next-Gen Agentic AI-Native Browser IDE",
        subtitle: "Zero-install agentic AI-native IDE co-built with GPT-5.6 featuring real-time auto-debugging and CyberBoard visual planning.",
        summary: "A zero-latency, browser-native AI IDE unifying intelligent code generation, automatic error diagnostics, visual architectural whiteboard planning, and instant hot-reloading rendering.",
        about: "CodeCanvas unifies intelligent code generation, real-time visual architectural planning, and zero-latency browser rendering into a single, cohesive AI-Native Workspace. Built for OpenAI Build Week 2026 and powered by GPT-5.6 & Codex, CodeCanvas acts as an agentic partner that doesn't just suggest code—it understands, auto-diagnoses runtime console errors, and directly constructs full-stack web applications straight inside the browser with zero heavy downloads or local server dependencies.",
        usecase: "Instant browser-native software prototyping, agentic AI auto-debugging, visual architecture sketchpad, and zero-setup web application development.",
        date: "2026-07-21",
        category: "AI / ML",
        image: "codecanvas_thumbnail.jpg",
        tags: [
            "React 19",
            "GPT-5.6",
            "Vite",
            "Monaco Editor",
            "TailwindCSS",
            "TypeScript",
            "WebAssembly"
        ],
        demoUrl: "https://prashanth-karanam.github.io/CodeCanvas/",
        repoUrl: "https://github.com/prashanth-karanam/CodeCanvas"
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
        this.STORAGE_KEY = 'PRISM_PORTFOLIO_PROJECTS_V100';
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
            if (p.id === 'proj-luna') p.date = '2026-07-29';
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
                    <span class="card-category-badge">${p.category}</span>
                    <span class="card-eng-badge">${p.engineeringLabel || '🛠️ Hand-Crafted Core'}</span>
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
                    <div class="card-footer">
                        <div class="tag-cloud">
                            ${p.tags.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('')}
                        </div>
                        <span class="card-action-icon">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                        </span>
                    </div>
                </div>
            </div>
        `).join('');

        container.querySelectorAll('.spatial-card').forEach(card => {
            card.onmouseenter = () => this.sound.playHover();
            card.onmousemove = (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                card.style.transform = `perspective(1000px) rotateX(${-y / 25}deg) rotateY(${x / 25}deg) translateY(-6px)`;
            };
            card.onmouseleave = () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
            };
            card.onclick = () => {
                this.sound.playClick();
                this.openDetailModal(card.dataset.id);
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

        if (p.id === 'proj-luna') {
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
        document.getElementById('stat-total-tech').textContent = allTags.size;
    }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    window.prismApp = new PrismApp();
});
