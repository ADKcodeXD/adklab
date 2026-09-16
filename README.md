# ADK lab — 极简工具集与实验室

<p align="center">
  <img src="https://avatars.githubusercontent.com/u/88375547?v=4" width="120" height="120" alt="ADK Logo" style="border-radius: 28px; box-shadow: 0 20px 40px rgba(0,0,0,0.5);" />
</p>

<p align="center">
  <b>探索发现更多有趣 | Develop By ADK</b>
</p>

<p align="center">
  <a href="https://github.com/ADKcodeXD/adklab/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/ADKcodeXD/adklab/ci.yml?branch=main&label=CI&logo=github&style=flat-square" alt="CI Status" /></a>
  <a href="https://github.com/ADKcodeXD/adklab/actions/workflows/deploy-pages.yml"><img src="https://img.shields.io/github/actions/workflow/status/ADKcodeXD/adklab/deploy-pages.yml?branch=main&label=GitHub%20Pages&logo=github&style=flat-square" alt="Pages Status" /></a>
  <a href="https://github.com/ADKcodeXD"><img src="https://img.shields.io/badge/Author-ADKcodeXD-7dd3fc?style=flat-square&logo=github" alt="Author" /></a>
  <a href="https://github.com/ADKcodeXD/adklab/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-c8a0f0?style=flat-square" alt="License" /></a>
</p>

---

## 🌟 项目简介 / Overview

**ADK lab** 是一个极具美感与极客质感的开发者综合门户与微服务枢纽。基于 **Glacier（冰川）玻璃拟态设计系统** 纯净打造，整合了本机正在 7×24 小时稳定运行的云端量化、AI 资讯与运维微服务，并精选展示了在 GitHub 上获得广泛关注的高质量开源项目。

- 🚀 **官方主站 (生产环境):** [https://adkfintech.com](https://adkfintech.com)
- 🌐 **备用镜像 (GitHub Pages):** [https://adkcodexd.github.io/adklab/](https://adkcodexd.github.io/adklab/)
- 📱 **移动端专属版:** [https://adkfintech.com/mobile.html](https://adkfintech.com/mobile.html)
- 🎨 **设计系统:** Glacier Glassmorphism (`#070a12` 深海夜黑、`#7dd3fc` 冰蓝、`#c8a0f0` 薰衣草紫)
- ⚡ **无外部重依赖:** 采用纯原生 HTML5 Canvas 动态星空、CSS 视差微交互与响应式栅格

---

## 🚀 项目与服务全览 / Featured Services & Projects

### ☁️ 本机云端运行服务 (Cloud Services)

| 服务名称 | 运行端口 / 架构 | 线上访问地址 | 核心功能简介 |
| :--- | :--- | :--- | :--- |
| **ADK Quant** | Port 8931 · Python FastAPI | [`quant.adkfintech.com`](https://quant.adkfintech.com) | 个人量化资产与持仓监控服务，多账户净值归集、策略盈亏跟踪与自动化风控告警。 |
| **ADK Daily News** | Port 8932 · Python Webhook | [`dailynews.adkfintech.com`](https://dailynews.adkfintech.com) | 基于 LLM 的自动化 AI 资讯早报平台，聚合全球科技与财经动态，多渠道分发。 |
| **Notification Hub** | Port 8933 · Python Async | [`notify.adkfintech.com`](https://notify.adkfintech.com) | 统一通知推送与告警中心，纳管 Telegram Bot、企业微信、飞书与邮件通道。 |
| **VPS Traffic Panel** | Port 8927 · Python / SQLite | [`traffic.adkfintech.com`](https://traffic.adkfintech.com) | VPS 节点与网络流量实时监控看板，对接 Xray 内核，提供高精度时序统计。 |
| **Authelia SSO** | Port 8934 · Go Zero-Trust | [`auth.adkfintech.com`](https://auth.adkfintech.com) | 企业级单点登录与零信任网关，提供双因素认证 (2FA) 与 Nginx Forward-Auth 鉴权。 |
| **Sub-Store Hub** | Port 3001 · Docker | [`sub.adkproxy.top`](https://sub.adkproxy.top) | 高级订阅转换与规则管理中枢，支持多协议节点自动测速、清洗与分流编排。 |

---

### 💻 GitHub 精选开源代表作 (Featured Open Source)

| 开源项目 | 技术栈 | GitHub 仓库 | 简介与特色 |
| :--- | :--- | :--- | :--- |
| **Myblog-Vue3viteTs** | `Vue 3` · `Vite` · `TypeScript` | [ADKcodeXD/Myblog-Vue3viteTs](https://github.com/ADKcodeXD/Myblog-Vue3viteTs) | **★ 128 Stars** 全功能现代化个人博客平台，深度 Markdown 解析、暗色模式与极致流畅动效。 |
| **Vue3-Emoji** | `Vue 3` · `TypeScript` · `NPM` | [ADKcodeXD/Vue3-Emoji](https://github.com/ADKcodeXD/Vue3-Emoji) | **★ 56 Stars** 轻量级高复用 Vue 3 表情选择器，支持多肤色快速切换与拼音模糊搜索。 |
| **MMGC-frontend** | `Nuxt 3` · `Element Plus` · `SSR` | [ADKcodeXD/MMGC-frontend](https://github.com/ADKcodeXD/MMGC-frontend) | **★ 20 Stars** 黄金祭 MMGC 官方网站系统，Nitro 服务端同构渲染与全站国际化 (i18n)。 |
| **ADKblog-backend** | `Spring Boot` · `Redis` · `JWT` | [ADKcodeXD/ADKblog-backend](https://github.com/ADKcodeXD/ADKblog-backend) | **★ 17 Stars** 企业级个人博客后端系统，RBAC 细粒度权限控制与基于 Redis 的高频缓存层。 |
| **Anime-Audio-Dataset-Maker** | `Python` · `VITS` · `VAD` | [ADKcodeXD/Anime-Audio-Dataset-Maker](https://github.com/ADKcodeXD/Anime-Audio-Dataset-Maker) | **★ 6 Stars** 动漫语音识别与训练切片自动化流水线，专为语音合成模型数据集制作打磨。 |
| **EasyNote** | `Nuxt 3` · `Local-First` | [ADKcodeXD/EasyNote](https://github.com/ADKcodeXD/EasyNote) | 基于 Nuxt 3 的极简云端通用笔记应用，分屏 Markdown 书写、离线持久化与极简排版。 |

---

## 🛠️ 项目结构 / Directory Structure

```text
adklab/
├── index.html                  # 主门户入口 (响应式桌面/平板/手机 + 冰川设计系统)
├── mobile.html                 # 独立轻量级移动端门户
├── package.json                # 项目元数据与验证脚本
├── .gitignore                  # Git 忽略配置
├── AGENTS.md                   # AI 协作与服务器低资源维护规范
├── README.md                   # 项目中英文双语文档与导航指南
├── scripts/
│   ├── test.js                 # 轻量化自动化 CI 测试脚本 (< 100ms)
│   └── lint.js                 # 快速语法与格式校验脚本
└── .github/
    └── workflows/
        ├── ci.yml              # GitHub Actions CI 流水线 (Lint + Test)
        └── deploy-pages.yml    # GitHub Actions 自动化部署至 GitHub Pages
```

---

## 💻 本地运行与开发 / Quickstart

### 1. 克隆仓库
```bash
git clone https://github.com/ADKcodeXD/adklab.git
cd adklab
```

### 2. 运行快速语法与自动化测试
遵循低能耗规范，测试无需下载庞大浏览器驱动，毫秒级出具报告：
```bash
npm run lint
npm run test
```

### 3. 本地预览
```bash
# 启动本地开发服务 (支持 3000 端口预览)
npm run dev
# 或直接使用 Python 启动：
python3 -m http.server 3000
```
在浏览器中访问 `http://localhost:3000` 即可查看完整门户。

---

## 🤖 CI/CD 流水线 / Automated Workflows

1. **持续集成 (`ci.yml`):**
   - 监听 `main` 分支的 Push 与 Pull Request 事件。
   - 自动执行 `npm run lint` 和 `npm run test`。
   - 严格断言所有数据字典完整性、超链接可用性与 HTML 结构合规性。

2. **持续部署 (`deploy-pages.yml`):**
   - 当代码合入 `main` 分支时，自动触发 GitHub Pages 构建与发布。
   - 实时生成公网可访问的静态网站。

---

## 📄 开源许可证 / License

本项目基于 [MIT License](LICENSE) 许可开源。
Copyright (c) 2026 ADK ([@ADKcodeXD](https://github.com/ADKcodeXD)).
