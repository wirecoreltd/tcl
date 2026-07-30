# Tropical Consulting Ltd — Site Rebrand (Home page)

Next.js 16 (App Router) + TypeScript + Tailwind CSS implementation of the new
TCL homepage, built from the rebranding brief: navy/electric-blue/cyan
palette, glassmorphism cards, 20px card radius, scroll reveals, hover states,
Lucide icons.

## What's included

All 6 pages from the brief are live:

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About — story, mission/vision, values, why Mauritius, journey timeline |
| `/services` | Services — all 7 services |
| `/life-at-tcl` | Life at TCL — culture, photo gallery, perks, testimonials |
| `/careers` | Careers — why join, open positions, recruitment process, FAQ |
| `/contact` | Contact — info cards, map, working contact form |

Key components:

- `components/Nav.tsx` — sticky nav with logo, mobile menu
- `components/Hero.tsx` — headline, CTAs, live status badges
- `components/OpsNetwork.tsx` — signature visual: an animated ops-network
  diagram radiating from Mauritius to London / New York / Manila / Sydney,
  each hub showing a **live local clock** (updates every 15s client-side).
- `components/PageHero.tsx` — shared hero for inner pages
- `components/Reveal.tsx` — IntersectionObserver wrapper for scroll-triggered
  fade-ups (respects `prefers-reduced-motion`)
- `components/PhotoGrid.tsx` + `lib/gallery.ts` — the photo system, see below
- `components/ContactForm.tsx` + `app/api/contact/route.ts` — working
  contact form (see "Contact form" below)

### Logo

`public/logo.svg` is a placeholder brand mark (used in the nav and footer).
Replace that one file with your real logo — same filename, same folder —
and it updates everywhere automatically. SVG is recommended for crispness,
but a PNG works too (just update the `src="/logo.svg"` references in
`components/Nav.tsx` and `components/Footer.tsx`).

### Adding photos (no code needed)

Photos live in `public/images/<category>/` — one folder per gallery
category (`team-building`, `training`, `celebrations`, `office-life`).
To add a photo:

1. Drop a `.jpg`, `.png`, or `.webp` file into the matching folder.
2. Commit and push (or upload directly via GitHub's web UI).
3. Vercel redeploys automatically and the photo appears — no component or
   config edits required.

Captions are generated from the filename by default (`team-offsite.jpg` →
"Team Offsite"). To set a custom caption, add a `captions.json` file in the
same folder — see `public/images/<category>/HOW-TO-ADD-PHOTOS.md` for the
exact format. Folders with no photos yet show a friendly "add your photos
here" placeholder instead of a broken image.

If you'd rather have an actual in-browser upload screen (drag-and-drop,
no GitHub needed) — that requires wiring up file storage, e.g. Vercel Blob
or Cloudinary. Happy to build that next if useful.

### Contact form

The form posts to `app/api/contact/route.ts`, which currently validates
the payload and logs it — enough to test the flow end to end, but it
doesn't send real emails yet. Wire in a provider like
[Resend](https://resend.com) or [Formspree](https://formspree.io) (a code
comment in that file shows exactly where), then add the API key as an
environment variable in Vercel.

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
