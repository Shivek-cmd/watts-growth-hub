# watts-growth-hub — CLAUDE.md

## What This Project Is

Personal brand website for **Ritesh Watts** — an Indian-Canadian Author, Entrepreneur, Investor, and Speaker. This is a marketing/portfolio site, not a SaaS product. It showcases his brand, content, and drives three primary business actions: book him to speak, work with him, and subscribe to his newsletter.

## Business Model & Brand

**Ritesh Watts** operates across three pillars:
- **Build** — Founder mindset, systems, AI leverage for smarter businesses
- **Move** — Cross-border opportunity (India ↔ Canada), career migration, reverse migration
- **Grow** — Wealth-building via business, real estate, personal growth

**Revenue / conversion points:**
1. Speaking bookings (`/speaking`)
2. Consulting / "Work With Ritesh" (`/contact`)
3. Newsletter subscriptions
4. Podcast guest applications (`/media/apply`) and invite Ritesh to appear (`/media/invite`)

**Business entities (Brands & Ventures page):**
- **Watts Group Ltd. Canada** — parent company, Ritesh is President
- **Watts Immigration** — licensed RCIC immigration consulting
- **Aifyze** — AI-driven growth/automation platform
- **Watts Technologies** — specialized AI division (healthcare, finance, manufacturing, education)

**Credentials:** Member of College of Immigration and Citizenship Consultants (CICC), Commissionaire of Oaths (Alberta), Author of *The DOER Mindset* (Amazon Bestseller).

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Routing | React Router v6 |
| Styling | Tailwind CSS v3 + CSS custom properties |
| Components | shadcn/ui (Radix UI primitives) |
| Forms | react-hook-form + zod |
| Data fetching | TanStack Query v5 |
| Charts | Recharts |
| Testing | Vitest + Testing Library |
| Package manager | bun (bun.lock present) |
| Scaffolded via | Lovable (lovable-tagger in devDeps) |

## Project Structure

```
src/
  pages/          # One file per route
  components/     # Shared components
    ui/           # shadcn/ui primitives (don't edit directly)
  hooks/          # Custom hooks (use-reveal, use-parallax, etc.)
  lib/            # Utilities
  assets/         # Images (hero, blog covers, bg photos)
```

**Pages:**
- `/` — Index (homepage, all sections)
- `/about` — About Ritesh
- `/speaking` — Speaking topics + booking
- `/media` — Podcast & media hub
- `/media/invite` — Invite Ritesh to a podcast
- `/media/apply` — Apply to be a guest
- `/blog` — Blog listing
- `/blog/:slug` — Individual blog post
- `/brands-ventures` — Companies, partners, press
- `/contact` — Contact / work with Ritesh
- `/privacy`, `/terms` — Legal

## Design System

**Dark theme only.** Background is near-black (`hsl(0 0% 4%)`), foreground near-white (`hsl(0 0% 94%)`).

**Brand accent:** Gold — `--gold: 42 50% 59%` (used as `text-gold`, `bg-gold`, `border-gold`).

**Typography:**
- Display/headings: `Playfair Display` (serif, class: `font-display`)
- Body: `DM Sans` (sans-serif)
- Fluid type vars: `--text-hero`, `--text-h1`, `--text-h2`

**Key design patterns:**
- `card-glow` — glassmorphism card with hover glow
- `reveal`, `reveal-left`, `reveal-scale` — scroll-triggered entrance animations (via `useRevealOnScroll` hook)
- `parallax-bg` — parallax image containers (via `useParallaxScroll` hook)
- `section-label` — small uppercase eyebrow labels above headings
- `ambient-glow` — large blurred background accent orbs
- `btn-magnetic` — magnetic hover effect on buttons
- `text-shimmer`, `text-gradient-gold` — animated/gradient text effects
- `snap-section` — scroll snap sections on homepage
- `grain` — film grain texture overlay on Layout

**Surfaces:** `--surface` (4%), `--surface-secondary` (7%), `--surface-tertiary` (10%), `--surface-elevated` (13%)

**Spacing:** `--section-py: clamp(4rem, 8vw, 8rem)` for consistent vertical padding.

## Component Conventions

- `<Layout>` wraps every page — includes Header + Footer + scroll/reveal setup
- `<Section>` (`SectionWrapper`) — standard padded section with container
- `<Card3D>` — 3D tilt card with perspective effect
- `<NewsletterBlock>` — reusable newsletter signup CTA
- `<NavLink>` — animated nav link component

## Running the Project

```bash
bun run dev       # dev server
bun run build     # production build
bun run test      # run tests
bun run lint      # eslint
```

## Key Constraints

- **No backend / no database** — this is a purely static frontend site. Forms likely use a third-party service (Formspree, etc.) or are not yet wired up.
- **No auth** — public marketing site only.
- **Images are local assets** in `src/assets/` — not CDN-hosted.
- **Partner brand slots** on BrandsVentures page are placeholder (`Partner Brand 1-6` with `href="#"`) — not real integrations yet.
- **Blog posts** appear to be static/hardcoded — no CMS integration visible.
- Prefer editing existing files over creating new ones. The UI component library (`src/components/ui/`) comes from shadcn — don't modify those directly unless necessary.
