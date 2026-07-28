#!/usr/bin/env node

/**
 * PRISM PORTFOLIO CLI HELPER
 * Usage:
 *   node scripts/add-project.js --title="Project Name" --summary="Summary..." --usecase="Use case..." --tags="React,TypeScript" --demo="https://..." --repo="https://..."
 */

const fs = require('fs');
const path = require('path');

const projectsFilePath = path.join(__dirname, '..', 'projects.json');

function parseArgs() {
    const args = {};
    process.argv.slice(2).forEach(arg => {
        if (arg.startsWith('--')) {
            const [key, ...valParts] = arg.slice(2).split('=');
            args[key] = valParts.join('=');
        }
    });
    return args;
}

function run() {
    const args = parseArgs();

    if (!args.title || !args.summary || !args.usecase) {
        console.log(`
❌ Missing required arguments!

Usage example:
  node scripts/add-project.js --title="CodeCanvas" --summary="Next-Gen AI IDE" --usecase="Browser prototyping" --tags="React,GPT-5.6" --demo="https://..." --repo="https://..."
        `);
        process.exit(1);
    }

    let currentProjects = [];
    if (fs.existsSync(projectsFilePath)) {
        try {
            currentProjects = JSON.parse(fs.readFileSync(projectsFilePath, 'utf8'));
        } catch (e) {
            console.error("Failed to parse projects.json:", e);
        }
    }

    const title = args.title.trim();
    const tags = args.tags ? args.tags.split(',').map(t => t.trim()) : ["JavaScript", "HTML5"];

    const newProject = {
        id: `proj-${Date.now()}`,
        title,
        subtitle: args.summary.trim(),
        summary: args.summary.trim(),
        about: args.about ? args.about.trim() : args.summary.trim(),
        usecase: args.usecase.trim(),
        date: args.date || new Date().toISOString().split('T')[0],
        category: args.category || "AI / ML",
        image: args.image || `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%230d0f14"/><text x="300" y="200" fill="%23f8fafc" font-family="sans-serif" font-size="22" font-weight="bold" text-anchor="middle">${encodeURIComponent(title)}</text></svg>`,
        tags,
        demoUrl: args.demo || "",
        repoUrl: args.repo || ""
    };

    currentProjects.unshift(newProject);
    fs.writeFileSync(projectsFilePath, JSON.stringify(currentProjects, null, 2), 'utf8');

    console.log(`
✅ SUCCESS: Project "${title}" added to projects.json!
📁 Total projects in store: ${currentProjects.length}
🚀 Run "git add . && git commit -m 'Add ${title}' && git push" to deploy!
    `);
}

run();
