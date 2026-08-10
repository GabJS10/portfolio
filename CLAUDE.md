# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Uses **pnpm** (see `pnpm-workspace.yaml`) and **Astro 5**.

- `pnpm dev` — dev server at `localhost:4321`
- `pnpm build` — production build to `./dist/`
- `pnpm preview` — serve the build locally
- `pnpm astro check` — type-check `.astro` files
- `pnpm astro add <integration>` — add an Astro integration

There is no test suite, linter, or formatter configured.

## Architecture

Single-page personal portfolio (Spanish content). Everything renders statically from one page.

- **`src/pages/index.astro`** — the whole site: fixed nav, hero, projects section, footer. It loads projects via `getCollection("projects")` and maps them to `ProjectCard`, alternating layout direction with `reverse={index % 2 !== 0}`. The inline `<script>` sets up an `IntersectionObserver` that adds `.visible` to `.reveal-on-scroll` elements for scroll-triggered animations.
- **`src/layouts/Layout.astro`** — the only layout; imports global CSS and provides the `<html>`/`<body>` shell with the radial-gradient background.
- **`src/content.config.ts`** — defines the `projects` content collection using Astro's `file()` loader against `src/data/projects.json`, validated by a Zod schema (`title`, `description`, `technologies[]`, `date`, `link` (URL), `image`).

### Adding a project

Append an object to **`src/data/projects.json`** matching the Zod schema. `image` is a path under `public/` (e.g. `/images/foo.png`) — drop the screenshot in `public/images/`. Each string in `technologies` must map (lowercased) to a key in the tech-icon dictionary; unknown techs fall back to `techIcons.default`.

### Tech icons

**`src/constants/icons.ts`** is a `Record<string, string>` of raw inline SVG markup keyed by lowercased technology name (react, astro, typescript, python, nodejs, fastapi, docker, redis, etc., plus `default`). `ProjectCard.astro` looks up each technology and injects the SVG via `<Fragment set:html={...} />`. To support a new technology, add its SVG string here.

## Styling

- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin (no `tailwind.config.js`). Theme is defined in CSS.
- **`src/styles/global.css`** holds the design tokens in an `@theme` block: `--color-background` (`#000714`), `--color-accent`, the `fade-up` / `reveal` keyframes, and the Manrope font import. Reference these as Tailwind utilities (`bg-background`, `animate-fade-up`).

## Path aliases

Defined in `tsconfig.json` (extends `astro/tsconfigs/strict`):

- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`

## Notes

- `astro.config.mjs` has the dev toolbar disabled and an ngrok host allowlisted under `vite.server.allowedHosts` — update that host if tunneling for external preview.
