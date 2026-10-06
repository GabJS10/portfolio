---
name: Gabriel Ballesteros | Portfolio
description: A dim exhibition room where each shipped project hangs under its own light with a precise wall label.
colors:
  wall: "#0d0d0e"
  wall-2: "#141415"
  ink: "#ecebe6"
  dim: "#8b8a85"
  lamp: "#e2b65c"
  rule: "rgb(236 235 230 / 0.12)"
typography:
  display:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 8.5vw, 7rem)"
    fontWeight: 300
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  display-closing:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6.5vw, 5.5rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  headline-md:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 300
    lineHeight: 1.11
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.33
    letterSpacing: "-0.01em"
  body-lead:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.625
  body-label:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
    fontFeature: "tnum"
rounded:
  none: "0"
spacing:
  gutter-sm: "20px"
  gutter: "32px"
  column-gap: "32px"
  section-sm: "96px"
  section: "128px"
  work-gap-sm: "112px"
  work-gap: "160px"
  nav-height: "64px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.wall}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.lamp}"
    textColor: "{colors.wall}"
  link-underlined:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  link-underlined-hover:
    textColor: "{colors.lamp}"
  nav-link:
    textColor: "{colors.dim}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.ink}"
  nav-bar:
    backgroundColor: "{colors.wall}"
    height: "{spacing.nav-height}"
  wall-label-title:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
  wall-label-meta:
    textColor: "{colors.dim}"
    typography: "{typography.label}"
  work-frame:
    backgroundColor: "{colors.wall-2}"
    rounded: "{rounded.none}"
  skip-link:
    backgroundColor: "{colors.lamp}"
    textColor: "{colors.wall}"
    padding: "8px 16px"
---

# Design System: Gabriel Ballesteros | Portfolio

## Overview

**Creative North Star: "Sala de exposición"**

The site is a dimly lit exhibition room. Each shipped project hangs on a matte near-black wall as a single work, with a small, exact wall label beside it: title, year, technique (the stack), a short description, one link. The interface recedes; the work and its label carry everything. There is one light in the room, and it falls only on what is active.

The system is deliberately minimalist. There are no containers around content, no cards, no rounded corners, no ornament, no stencil or display-novelty type, and no icons other than a single diagonal arrow. Structure comes from a shared twelve-column grid, generous empty wall, and hairline rules. Hierarchy comes from scale and weight inside one grotesk family, light at display size.

The dark base is permanent. The "dark + neon + glass cards" developer portfolio is the confirmed anti-reference: this room is matte, warm-gray, and lit by one warm lamp, not glowing.

**Key Characteristics:**
- Matte near-black wall, off-white label ink, warm gray secondary text, one warm lamp tone.
- One family, Hanken Grotesk: light (300) at display and headline scale, medium (500) for work titles, regular for labels and body.
- Hairlines only; zero radius; no cards or boxes around text.
- Room lighting is the single signature motion: the work in the viewport's centre band is lit, the rest wait in half-light.
- A margin year rule ticks only where the year changes; works hang newest first.

## Colors

A near-monochrome warm-neutral room with a single warm light.

### Primary
- **Gallery Lamp** (`lamp`): the only chromatic color, reserved for what is active: the lamp pool above a lit work, link and button hover, the Disponible point, the focus outline, text selection, the caret, and the focused skip link. Never a resting fill for decoration, never a heading color.

### Neutral
- **Matte Wall** (`wall`): the page background everywhere, including the fixed nav (at 90% opacity), `theme-color`, and the text color on ink and lamp fills.
- **Adjoining Room Wall** (`wall-2`): one step lighter; used for the "Sobre mí" band (the room next door) and as the placeholder behind a work's screenshot.
- **Label Ink** (`ink`): primary text, names, titles, link text, and the filled CV action. Long body copy runs at 80% ink to soften the field.
- **Warm Gray** (`dim`): secondary text: taglines, technique lines, nav at rest, `dt` labels, the year tick and year numerals, the footer line. Holds about 5.3:1 on both walls.
- **Hairline** (`rule`): ink at 12% opacity. Section dividers, the margin year rule, and the resting underline of text links.

### Named Rules
**The One Light Rule.** `lamp` marks only the active: lit work, hover, the Disponible point, focus, selection. If an element is at rest and not a state, it is not lamp-colored.

**The Always-Dark Rule.** The wall is always dark. There is no light theme and no light section; the lightest surface in the system is `wall-2`.

## Typography

**Display Font:** Hanken Grotesk Variable (with system-ui, sans-serif)
**Body Font:** Hanken Grotesk Variable (same family)

**Character:** A single quiet grotesk. Light and tightly tracked at display size so the name reads like lettering on a gallery wall; regular and plain at label size so the cartels read like museum labels.

### Hierarchy
- **Display** (300, clamp 3.25rem to 7rem, line-height 0.95, -0.035em): the name in the entrance, set over two lines.
- **Display, closing** (300, clamp 2.75rem to 5.5rem, line-height 1, -0.035em): the contact invitation "¿Construimos algo?". The email beneath it runs light at clamp 1.35rem to 2.25rem.
- **Headline** (300, 1.875rem rising to 2.25rem at md, -0.02em): section titles ("Trabajo seleccionado", "Herramientas de trabajo").
- **Title** (500, 1.5rem, -0.01em, balanced wrap): a work's title on its wall label. The only medium-weight heading.
- **Body** (400, 17px on the about wall, 15px on wall labels, line-height 1.625, max 46 to 62ch): descriptions at 80% ink. Lead lines run 1.125 to 1.25rem.
- **Label** (400, 0.875rem): nav, technique lines, metadata, link text, captions. Years use tabular numerals.

### Named Rules
**The One Family Rule.** Hanken Grotesk is the only typeface. Hierarchy is made by size and weight (300 / 400 / 500), never by a second family, a stencil, or a novelty display face.

**The Light Display Rule.** Anything at headline size or larger is weight 300 with negative tracking. Weight 500 is reserved for work titles and the short nav/CTA strings.

**The Display Name Rule.** Technologies appear by their display name ("Node.js", "Tailwind CSS", "PostgreSQL"), joined with commas in warm gray. Never raw lowercase ids, never badges or logos.

## Layout

A fixed shared grid for every room: max width 72rem, centred, with 20px side gutters (32px from 640px up). From 768px, content sits on a twelve-column grid with a 32px column gap; on mobile everything stacks in one column.

- **Entrance:** name and actions span 8 columns; the portrait hangs in columns 10 to 12, capped at 220px wide (176px on mobile). Top padding clears the 64px fixed nav.
- **The room (projects):** each work takes 1 margin column (year rule), 7 columns of image, and 4 columns of wall label bottom-aligned to the image. Works are separated by 160px (112px on mobile). Section headings start at column 2, leaving column 1 as margin.
- **About wall:** a full-bleed `wall-2` band with a 68rem inner grid; heading in columns 2 to 5, text in columns 7 to 12.
- **Rhythm:** sections breathe at 128px vertical padding (96px on mobile). Empty wall is part of the composition; do not fill it.

**The Year Rule.** Works hang newest first. A 1px `rule` hairline runs down the left margin of the room (desktop only), and a 12px `dim` tick with the year in tabular numerals appears only where the year changes. On mobile the rule is hidden and each label shows its year under the title.

## Elevation & Depth

The room is flat; depth comes from light, not layering. Text never sits on a raised surface. Works carry one soft hang shadow that falls below them, as a framed piece casts on a wall, and the lit work receives a warm pool of lamp light from above.

### Shadow Vocabulary
- **Hang shadow** (`box-shadow: 0 40px 60px -40px rgb(0 0 0 / 0.9)`): under every work image and the portrait. Never on text, buttons, or nav.
- **Lamp pool** (radial gradient of `lamp` at 17% opacity, elliptical, sitting above the work): fades in when a work is lit.

### Named Rules
**The Room Light Rule.** The only signature motion. A work whose frame enters the centre half of the viewport is lit: lamp pool on, image at full brightness. Every other work sits in half-light at `brightness(0.72) saturate(0.8)`. Transitions run 1.2s on an expo-out curve. Under `prefers-reduced-motion` (or without IntersectionObserver) every work is lit and nothing transitions. The portrait is permanently lit.

**The No-Glow Rule.** Light is warm, low, and diffuse. No neon, no colored glows on edges, no glass panels.

## Shapes

Square everything: zero radius on images, buttons, the nav, and bands. Lines are 1px hairlines in `rule`. Images are cropped to fixed ratios (16:10 for works, 4:5 for the portrait), anchored to the top for screenshots. The single round form in the build is the 6px Disponible point, which is the lamp itself rather than a container.

## Components

### Buttons
Restrained and solid; there is exactly one.
- **Shape:** square (0 radius).
- **Primary (Ver CV):** `ink` fill, `wall` text, 0.875rem medium, 12px by 20px padding, trailing arrow.
- **Hover / Focus:** fill shifts to `lamp`; the arrow nudges 2px up and right over 0.3s. Focus shows the global 1px lamp outline at 4px offset.

### Text links
- **Underlined link:** `ink` text with a `rule` underline offset 6px (10px on the large contact email). On hover both text and underline turn `lamp`.
- **Arrow link:** external links carry the single diagonal arrow (11 to 12px, 2px stroke, `currentColor`), which nudges up and right on hover.

### Navigation
- Fixed top bar, 64px, `wall` at 90% opacity. Name at left in `ink` 0.875rem medium; items at right in `dim`, turning `ink` on hover. "CV" sits at rest in `ink` and turns `lamp` on hover. On mobile only "Proyectos", "Contacto", and "CV" remain.

### Wall label (cartela)
The signature text component, bottom-aligned beside its work: title (Title role, `ink`), year (mobile only, tabular `dim`), technique line (`dim`, display names, comma-joined), description (15px, 80% ink, max 46ch), and one underlined arrow link ("Ver código" for GitHub, "Visitar sitio" otherwise). No box, no border, no background.

### Work
The image is a link (removed from tab order; the label link is the accessible path) inside a 16:10 frame on `wall-2`, with the hang shadow and the room light behaviour above.

### Fact list
Definition pairs in a two-column grid under a top hairline: `dt` in `dim`, `dd` in `ink`, 0.875rem. Used for the about wall's facts.

### Availability point
A 6px `lamp` point before "Disponible" in `dim`. The only resting use of lamp, because availability is an active state.

## Do's and Don'ts

### Do:
- **Do** keep the wall dark (`wall`, with `wall-2` as the only step up).
- **Do** reserve `lamp` for active states: lit work, hover, Disponible, focus, selection.
- **Do** set every headline-scale line in Hanken Grotesk at weight 300 with negative tracking.
- **Do** hang new projects through the data file only; the room sorts newest first and ticks the year rule only where the year changes.
- **Do** show technologies by display name, comma-joined, in `dim`.
- **Do** give every work the 16:10 frame, hang shadow, and room light; keep everything lit under reduced motion.
- **Do** separate sections with 1px `rule` hairlines and empty wall.

### Don't:
- **Don't** put content in cards, boxes, panels, or bordered containers.
- **Don't** use any corner radius.
- **Don't** add icons, logos, or badges; the diagonal arrow is the only glyph.
- **Don't** introduce a second typeface, a stencil face, or ornament.
- **Don't** add a light theme or a light section.
- **Don't** use neon, glow edges, or glass panels (the "dark + neon + glass cards" portfolio is the anti-reference).
- **Don't** add motion beyond the room light and the arrow nudge.
