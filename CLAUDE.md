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

- **`src/pages/index.astro`** — the whole site, themed as a dim exhibition room: fixed nav, entrance (name, tagline, CV/email, "Disponible", portrait with its label), Proyectos (one `ProjectCard` "work" per project listed in the `featured` id array, in that order; other entries in `projects.json` are not shown), Sobre mí, Stack, and the contact footer. The inline `<script>` is the room lighting: an `IntersectionObserver` toggles `.lit` on each `.work` as it reaches the middle of the viewport (all lit under reduced motion).
- **`src/components/ProjectCard.astro`** — one project as a work plus wall label: year in the left margin, screenshot, then title, year, stack as plain text, description, and link.
- **`src/lib/dates.ts`** — `isoDate()` normalizes the free-form dates in `projects.json` (`"Oct 06, 2026"`, `"Ago 09, 2026"`) to `YYYY-MM-DD`; the card shows the year.
- **`src/layouts/Layout.astro`** — the only layout; imports global CSS and provides the `<html>`/`<body>` shell.
- **`src/content.config.ts`** — defines the `projects` content collection using Astro's `file()` loader against `src/data/projects.json`, validated by a Zod schema (`title`, `description`, `technologies[]`, `date`, `link` (URL), `image`).

### Adding a project

Append an object to **`src/data/projects.json`** matching the Zod schema, then add its `id` to the `featured` array in `index.astro` (that array decides which projects show and in what order). `image` is a path under `public/` (e.g. `/images/foo.png`) — drop the screenshot in `public/images/`. `technologies` strings are shown as written, as a comma-separated list. `date` should follow `"Mon DD, YYYY"` (English or Spanish month abbreviation) so `isoDate()` can parse it.

## Styling

- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin (no `tailwind.config.js`). Theme is defined in CSS.
- **`src/styles/global.css`** holds the design tokens in an `@theme` block (`wall`, `wall-2`, `ink`, `dim`, `lamp`, `rule`) used as Tailwind utilities (`bg-wall`, `text-dim`), plus the lighting helpers (`.work`, `.work-image`, `.lit`).
- One font family, self-hosted via Fontsource: Hanken Grotesk (variable). Light weight for display, regular/medium for text.
- `lamp` (warm amber) is the only accent and marks only what is active (lit work, hover, "Disponible"). Background stays dark; no cards, no radius, no icons beyond arrows.
- `DESIGN.md` and `PRODUCT.md` at the root record the design system and product context.

## Path aliases

Defined in `tsconfig.json` (extends `astro/tsconfigs/strict`):

- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`

## Notes

- `astro.config.mjs` has the dev toolbar disabled and an ngrok host allowlisted under `vite.server.allowedHosts` — update that host if tunneling for external preview.
