# Prashanth Karanam — Spatial AI Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live%20Site-GitHub%20Pages-38bdf8?style=for-the-badge&logo=github)](https://prashanth-karanam.github.io/portfolio/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-10b981?style=for-the-badge&logo=github)](https://github.com/prashanth-karanam/portfolio)

> 🌐 **Live Website**: [https://prashanth-karanam.github.io/portfolio/](https://prashanth-karanam.github.io/portfolio/)  
> ℹ️ **Hosting & Infrastructure**: This portfolio is hosted using **GitHub Pages (GitHub Sites)** for ultra-fast, zero-latency static web delivery.

---

## 🌟 Spotlight Flagship AI Systems

### 1. 🧠 Luna 3B — Local OS Intelligence & Dataset Autonomy
- **Description**: Fine-tuned 3B parameter local language model (Qwen 3B backbone) co-located with a Python execution engine (`main.py` & FastAPI). Runs 100% locally on GPU with **0 API calls**, translating natural voice and text commands into direct operating system actions (RAM cleanup, process control, Playwright CDP browser automation, network switching).
- **Execution Pipeline**:
  - **Level 0 (Fast Cache PSPool ~5ms, 0 Tokens)**: Instant pattern matcher bypasses LLM inference for cached system templates.
  - **Level 1 (Local Ollama / Qwen 3B)**: Fine-tuned SFT dataset logic emitting clean JSON action arrays `[{"action": "..."}]`.
  - **Level 2 (Multi-Step Automation)**: Playwright CDP browser driving and Win32 system call execution.
  - **Level 3 (Security Gate & Circuit Breakers)**: AST allowlist sanitization and execution failure recovery.
- ⚡ **Download Status**: *Download links of both the Luna 3B LLM model weights and its Python tools backend will be released soon.*

### 2. 💻 CodeCanvas — Next-Gen Agentic AI-Native Browser IDE
- **Description**: Zero-install agentic AI-native IDE co-built with GPT-5.6 featuring real-time auto-debugging, hot-reloading browser preview, and CyberBoard visual whiteboard planning.
- **Features**: Agentic AI auto-debugging wand, Monaco editor, visual architecture sketchpad, client-side compilation engine.

---

## 🛠️ Technology Stack & Architecture

- **Core**: HTML5, Modern ES6+ JavaScript, Vanilla CSS Design System
- **Graphics & Motion**: Canvas 3D Particle System, Glassmorphism UI, Responsive 3D Spatial Grid Stage
- **Hosting**: GitHub Pages (GitHub Sites Static Hosting)

---

## 📂 Repository Structure

```text
portfolio/
├── index.html               # Main spatial portfolio interface & hero section
├── app.js                   # Spatial portfolio app engine & dynamic modal renderer
├── style.css                # Custom CSS design system, tokens & glassmorphism
├── projects.json            # Structured dataset for portfolio projects
├── codecanvas_thumbnail.jpg # Aesthetic thumbnail for CodeCanvas
├── luna_thumbnail.jpg       # Aesthetic thumbnail for Luna 3B
├── .gitignore               # Git ignore rules for media assets and temporary files
└── README.md                # Project documentation & GitHub Pages deployment link
```

---

## 🚀 Deployment

Hosted directly on **GitHub Pages** from the `main` branch.  
To view the live spatial portfolio, visit: [https://prashanth-karanam.github.io/portfolio/](https://prashanth-karanam.github.io/portfolio/)
