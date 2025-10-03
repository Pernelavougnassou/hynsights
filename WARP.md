# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project overview
- Framework: Next.js 15 (App Router, TypeScript)
- Styling: Tailwind CSS v4 via PostCSS plugin
- Package manager: npm (lockfile present)
- Build engine: Turbopack (enabled in scripts)

Core commands
- Install deps: npm install
- Dev server (hot reload): npm run dev
- Production build: npm run build
- Start production server (after build): npm run start

Testing and linting
- No test tooling or scripts are configured in package.json.
- No lint script or ESLint config is present.

Repository structure and architecture
- App Router (app/)
  - app/layout.tsx defines the root layout and registers next/font (Geist Sans and Geist Mono). It wraps all routes and applies font CSS variables.
  - app/page.tsx is the home route. It demonstrates client-side components and Tailwind utility classes.
  - app/globals.css imports Tailwind and defines CSS variables and an inline @theme block used by Tailwind v4.
- Configuration
  - next.config.ts: currently default settings (empty object). Next.js’s defaults apply.
  - tsconfig.json: strict TypeScript; moduleResolution "bundler"; path alias "@/*" -> "./*". You can import from the project root using aliases like import x from "@/app/...".
  - postcss.config.mjs: enables the @tailwindcss/postcss plugin (Tailwind v4).
- Assets
  - public/ serves static files at the site root (e.g., /logo.png → public/logo.png).

Notes for working in this codebase
- Start development from app/page.tsx; changes hot-reload on npm run dev.
- Tailwind v4: utility classes are available globally via app/globals.css with the inline theme tokens set in :root. Prefer utility-first styling.
- If adding additional routes, create new segment folders under app/ (e.g., app/about/page.tsx). Layouts can be nested via layout.tsx in segments.
- If you introduce testing, expose scripts in package.json (e.g., "test", "test:watch") and include the chosen config (Vitest/Jest). Until then, there is no single-test command.
