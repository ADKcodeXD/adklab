# AGENTS.md — ADK lab Engineering & AI Collaboration Guide

## Primary Goal

Work efficiently on this repository. Maintain the high-performance Glacier glassmorphism design system, keep all cloud service links and GitHub project records in sync, and ensure lightning-fast CI/CD execution without consuming unnecessary server resources.

---

## 1. Repository Overview

- **Project Name:** ADK lab (`adklab`)
- **Owner:** ADK ([@ADKcodeXD](https://github.com/ADKcodeXD))
- **Design System:** Glacier Glassmorphism (Dark Navy `#070a12`, Cyan `#7dd3fc`, Lavender `#c8a0f0`, Secondary Teal `#88b4cc`)
- **Key Deliverables:**
  - `index.html`: Main interactive portal (Responsive: Desktop, Tablet, Mobile)
  - `mobile.html`: Standalone lightweight mobile edition
  - `scripts/test.js`: Sub-second CI validation suite
  - `scripts/lint.js`: Fast syntax and formatting validator
  - `.github/workflows/`: GitHub Actions CI and GitHub Pages deployment

---

## 2. Server Resource & Execution Policy

This repository resides on a production Linux server hosting active services.

1. **Zero Bloat Testing:** Never install heavy browser testing frameworks (Playwright, Puppeteer, Selenium) unless explicitly asked. Use `npm run test` (pure Node.js, runs in < 100ms).
2. **Minimal Dependencies:** The runtime relies on zero production dependencies. Do not casually install arbitrary NPM packages into `node_modules`.
3. **No Heavy Builds:** Do not run production build bundlers or docker image rebuilds for trivial static modifications.
4. **Targeted Validation Only:**
   - Syntax & Lint check: `npm run lint`
   - Test suite: `npm run test`
   - Local preview (if requested): `npm run dev`

---

## 3. Project Architecture & Data Model

### A. Spotlight Projects (Homepage View)
The 4 featured hero projects on `index.html` correspond to key domains:
1. `project-01`: **ADK Quant** (Port 8931, `quant.adkfintech.com`)
2. `project-02`: **Vue3-Emoji** (56★, `github.com/ADKcodeXD/Vue3-Emoji`)
3. `project-03`: **ADK Daily News** (Port 8932, `dailynews.adkfintech.com`)
4. `project-04`: **ADK VPS Traffic & Zero-Trust** (Ports 8927/8934, `traffic.adkfintech.com`)

### B. All Projects Gallery & Project Data Dictionary
All 12 projects are registered in the `projectData` object within `index.html`:
- **6 Active Cloud Services:**
  - `quant`: ADK Quant (Port 8931)
  - `dailynews`: ADK Daily News (Port 8932)
  - `notify`: Notification Hub (Port 8933)
  - `traffic`: VPS Traffic Panel (Port 8927)
  - `auth`: Authelia Zero-Trust SSO (Port 8934)
  - `substore`: Sub-Store & Proxy Hub (Port 3001)
- **6 GitHub Open Source Projects:**
  - `myblog`: Myblog-Vue3viteTs (128★)
  - `vue3-emoji`: Vue3-Emoji (56★)
  - `mmgc`: MMGC Nuxt3 Portal (20★)
  - `adkblog-backend`: ADKblog-backend (17★)
  - `anime-audio`: Anime-Audio-Dataset-Maker (6★)
  - `easynote`: EasyNote (Nuxt 3)

### C. Modifying or Adding Projects
When updating or adding a project:
1. Ensure the card in `#projects-grid` contains `data-category="cloud"` or `data-category="opensource"`.
2. Ensure the trigger button has `data-project="<project-id>"`.
3. Register corresponding specifications and release changelogs in `projectData['<project-id>']`.
4. Update `scripts/test.js` to assert the project key is verified in CI.

---

## 4. Testing & Validation Checklist

Before committing or pushing any change:
```bash
npm run lint
npm run test
```
All tests must pass cleanly.

---

## 5. Git & Deployment Policy

- Main branch: `main`
- Commits should be atomic and descriptive.
- Pushing to `main` automatically triggers `.github/workflows/ci.yml` and `.github/workflows/deploy-pages.yml`.
