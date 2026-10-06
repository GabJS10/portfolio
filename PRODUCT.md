# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences weighted equally:

- **Recruiters and hiring companies** looking for a backend / full-stack engineer. They skim, check real projects, then open the CV or write an email.
- **Freelance clients**: small organizations (e.g. Corprecam E.S.P.) that need a website, internal tool, or automation built. They want to see shipped, working things and a direct way to get in touch.

## Product Purpose

Personal portfolio of Gabriel Ballesteros (alias GabJS10), systems engineer based in Colombia. It exists to prove, through real shipped projects, that he builds efficient, well-structured backend and full-stack software ready for production, and to turn a visit into contact (email, LinkedIn, GitHub) or a CV read.

## Positioning

A backend-first engineer who also ships complete products end to end: queues and background processing (RQ, Redis), APIs (FastAPI, NestJS, Express), scraping/automation (Playwright), RAG systems, plus real deployed websites for a real organization (Corprecam). The proof is the project list, not adjectives.

## Operating Context

- Single static page, Spanish content.
- Visitors arrive from LinkedIn, GitHub, or a CV link; many on mobile.
- Projects are maintained in `src/data/projects.json` and grow over time (new entries get appended); the design must absorb a growing list with mixed screenshot quality and aspect ratios.

## Capabilities and Constraints

- Astro 5 + Tailwind v4, static output. Content collection validated by Zod (`title`, `description`, `technologies[]`, `date`, `link`, `image`).
- Technologies are stored as lowercase ids in `projects.json` and shown by display name (`src/lib/tech.ts`).
- Contact: `jgabis65@gmail.com`, GitHub `GabJS10`, LinkedIn, CV on Google Docs.
- Availability status is shown as "Disponible".

## Brand Commitments

- Keep the personal photo (`src/assets/foto.jpeg`).
- Dark base: a light background is explicitly unwanted.
- Must not look generic (the "dark + neon + glass cards" portfolio is the anti-reference).
- The user asked for a total redesign, keeping some elements: existing copy and project data are product truth; the visual world is open.

## Evidence on Hand

- 9 real projects with screenshots in `public/images/` and live/GitHub links (`src/data/projects.json`).
- Personal photo `src/assets/foto.jpeg`.
- No testimonials, client logos, metrics, or employment history in the repo: do not fabricate any.

## Product Principles

1. Proof over claims: the shipped projects carry the argument.
2. Fast path to contact: email and CV are always one step away.
3. Engineer's precision: structure, data, and clarity read as backend craft.
4. Scales with the list: adding a project should never break the composition.
