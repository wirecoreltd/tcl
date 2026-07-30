# Tropical Consulting Ltd — Site Rebrand (Home page)

Next.js 16 (App Router) + TypeScript + Tailwind CSS implementation of the new
TCL homepage, built from the rebranding brief: navy/electric-blue/cyan
palette, glassmorphism cards, 20px card radius, scroll reveals, hover states,
Lucide icons.

## What's included

This first pass covers the **Home** page end to end:

- `components/Nav.tsx` — sticky nav, mobile menu
- `components/Hero.tsx` — headline, CTAs, live status badges
- `components/OpsNetwork.tsx` — signature visual: an animated ops-network
  diagram radiating from Mauritius to London / New York / Manila / Sydney,
  each hub showing a **live local clock** (updates every 15s client-side).
  This replaces a generic "world map" hero graphic with something grounded
  in the actual subject: 24/7 global operations monitoring.
- `components/WhyTCL.tsx`, `Services.tsx`, `HowWeWork.tsx`, `LifeAtTCL.tsx`,
  `CareersCTA.tsx`, `Footer.tsx` — remaining Home sections per the brief.
- `components/Reveal.tsx` — small IntersectionObserver wrapper used for
  scroll-triggered fade-ups (respects `prefers-reduced-motion`).

The other pages (About, Services detail, Life at TCL, Careers, Contact)
follow the same design tokens and component patterns — let me know which one
to build next.

## Design tokens

| Token | Value |
|---|---|
| Background (navy) | `#081826` |
| Background (deep/alt sections) | `#050D16` |
| Electric blue | `#2F6FED` / light `#5B8DEF` |
| Cyan | `#22D3EE` |
| Text | `#F3F8FF` (offwhite) |
| Display font | Space Grotesk |
| Body font | Inter |
| Mono/data font | IBM Plex Mono (used for labels, badges, live clocks) |
| Card radius | 20px (`rounded-card`) |
| Card style | `.glass-card` utility in `app/globals.css` |

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Push to GitHub

```bash
git init
git add .
git commit -m "Home page rebrand"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## Deploy on Vercel

1. Import the GitHub repo at https://vercel.com/new
2. Framework preset: **Next.js** (auto-detected)
3. No environment variables are required for this page
4. Deploy — Vercel will run `next build` automatically

## Notes

- Fonts load via `next/font/google` (Space Grotesk, Inter, IBM Plex Mono) —
  this requires network access to Google Fonts at build time, which is
  available on Vercel and in normal dev environments.
- Real logo, exact address/phone, and social links in `Footer.tsx` are
  placeholders — swap in the real values before launch.
- Photo placeholders in `LifeAtTCL.tsx` are labeled blocks; swap for real
  photography (the brief calls for Team Building / Training /
  Celebrations / Office Life images).
