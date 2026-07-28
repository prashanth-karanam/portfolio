/**
 * PRISM // SPATIAL PORTFOLIO ENGINE (ULTRA-CLEAN EDITION)
 * Spotlight Project: CodeCanvas AI IDE
 */

// ==========================================================================
// 1. DEFAULT DATASET (SPOTLIGHT PROJECT: CODECANVAS)
// ==========================================================================
const DEFAULT_PROJECTS = [
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
        tags: ["React 19", "GPT-5.6", "Vite", "Monaco Editor", "TailwindCSS", "TypeScript", "WebAssembly"],
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
        <text x="300" y="195" fill="#f8fafc" font-family="Space Grotesk, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" letter-spacing="3">CODECANVAS</text>
        <text x="300" y="225" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="12" text-anchor="middle" letter-spacing="2">GPT-5.6 AGENTIC IDE</text>
    </svg>`;
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

class ProjectStore {
    constructor() {
        this.STORAGE_KEY = 'PRISM_PORTFOLIO_PROJECTS_V10';
        this.projects = DEFAULT_PROJECTS;
        this.initStore();
    }

    async initStore() {
        // Try fetching projects.json from server / GitHub Pages root first
        try {
            const res = await fetch('projects.json');
            if (res.ok) {
                const jsonProjects = await res.json();
                if (Array.isArray(jsonProjects) && jsonProjects.length > 0) {
                    this.projects = jsonProjects;
                    if (window.prismApp) {
                        window.prismApp.renderSkillMatrix();
                        window.prismApp.renderProjects();
                        window.prismApp.updateStats();
                    }
                    return;
                }
            }
        } catch (e) {
            console.log("Using cached/default projects dataset", e);
        }

        const stored = localStorage.getItem(this.STORAGE_KEY);
        if (stored) {
            try {
                this.projects = JSON.parse(stored);
                return;
            } catch (e) {
                console.error("Failed to parse local projects store", e);
            }
        }
        this.saveProjects(DEFAULT_PROJECTS);
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
                color: i % 2 === 0 ? '#94a3b8' : '#475569'
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
                    this.ctx.strokeStyle = `rgba(148, 163, 184, ${0.1 * (1 - dist / 120)})`;
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

        if (q.includes('codecanvas')) {
            this.openDetailModal('proj-codecanvas');
            document.getElementById('cmd-modal').classList.add('hidden');
            reply = "Opened CodeCanvas Detail Modal.";
        } else if (q.includes('demo') || q.includes('github')) {
            window.open('https://prashanth-karanam.github.io/CodeCanvas/', '_blank');
            reply = "Launched GitHub Pages Live Site in new tab.";
        } else if (q.includes('add') || q.includes('deploy')) {
            document.getElementById('cmd-modal').classList.add('hidden');
            document.getElementById('add-modal').classList.remove('hidden');
            reply = "Opened Deploy Project CMS Modal.";
        } else {
            this.searchQuery = q;
            document.getElementById('search-input').value = query;
            this.renderProjects();
            reply = `Searching for '${query}' across project telemetries...`;
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

        document.querySelectorAll('.modal-tabs .tab-btn').forEach(tabBtn => {
            tabBtn.onclick = () => {
                this.sound.playClick();
                document.querySelectorAll('.modal-tabs .tab-btn').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.modal-body-scroll .tab-content').forEach(c => c.classList.remove('active'));

                tabBtn.classList.add('active');
                const targetTab = document.getElementById(tabBtn.dataset.tab);
                if (targetTab) targetTab.classList.add('active');
            };
        });
    }

    getFilteredProjects() {
        return this.store.projects.filter(p => {
            if (this.activeSkillTag && !p.tags.includes(this.activeSkillTag)) {
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
        document.getElementById('modal-img').src = p.image;
        document.getElementById('modal-usecase').textContent = p.usecase;
        document.getElementById('modal-about').textContent = p.about;

        const demoBtn = document.getElementById('modal-link-demo');
        const repoBtn = document.getElementById('modal-link-repo');

        if (p.demoUrl && p.demoUrl.trim() !== '') {
            demoBtn.style.display = 'inline-flex';
            demoBtn.href = p.demoUrl;
        } else {
            demoBtn.style.display = 'none';
        }

        if (p.repoUrl && p.repoUrl.trim() !== '') {
            repoBtn.style.display = 'inline-flex';
            repoBtn.href = p.repoUrl;
        } else {
            repoBtn.style.display = 'none';
        }

        document.getElementById('modal-tags').innerHTML = p.tags.map(t => `<span class="tech-tag">${t}</span>`).join('');

        // GITHUB PAGES LIVE IFRAME OR EMPTY STATE FALLBACK
        const ghPagesContainer = document.getElementById('ghpages-container');
        if (p.demoUrl && p.demoUrl.trim() !== '') {
            ghPagesContainer.innerHTML = `
                <div style="background:#1e293b; padding:0.5rem 1rem; color:#f8fafc; font-family:var(--font-mono); font-size:0.75rem; display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.08);">
                    <span>🌐 Live GitHub Pages Deployment</span>
                    <a href="${p.demoUrl}" target="_blank" style="color:#38bdf8; text-decoration:none; display:inline-flex; align-items:center; gap:0.3rem;">
                        Open Full Window
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                </div>
                <iframe src="${p.demoUrl}" style="width:100%; height:380px; border:none; background:#ffffff;" title="${p.title} Live Preview"></iframe>
            `;
        } else {
            ghPagesContainer.innerHTML = `
                <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding:3rem 1.5rem; text-align:center; color:var(--text-muted); background:rgba(255,255,255,0.02);">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom:1rem; opacity:0.5;"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
                    <h3 style="color:var(--text-main); font-size:1.1rem; margin-bottom:0.5rem;">No Live GitHub Pages Deployment Available</h3>
                    <p style="font-size:0.85rem; max-width:400px; line-height:1.4;">This project has not been deployed to GitHub Pages yet. You can inspect its source code or check back later.</p>
                </div>
            `;
        }

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
