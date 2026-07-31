# Tropical Consulting Ltd — Full Site Rebrand

Next.js 16 (App Router) + TypeScript + Tailwind CSS. Glassmorphism cards,
20px card radius, scroll reveals, hover states, Lucide icons. Colors are
derived from the real TCL logo (blue / green / orange / red) on a neutral
charcoal base.

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About — story, mission/vision, values, why Mauritius, journey timeline |
| `/services` | Services — all 7 services |
| `/life-at-tcl` | Life at TCL — culture, photo gallery, perks, testimonials |
| `/careers` | Careers — why join, open positions, recruitment process, FAQ |
| `/contact` | Contact — info cards, map, working contact form |
| `/admin/login` | Admin sign-in (not linked from the public nav) |
| `/admin/photos` | Admin photo manager (protected) |

## Logo & colors

- `public/logo.png` is your real logo — swap this file (same name) to
  update it everywhere (nav + footer).
- Color tokens live in `tailwind.config.ts`: `electric` (blue), `cyan`
  (green, used for "live/online" indicators), `brandOrange` and `brandRed`
  (used sparingly — e.g. the Fraud & Risk icon is red). Change the hex
  values there to re-tune the palette; every component already uses these
  token names.

## Admin photo manager — setup required

Photos are no longer static files in the repo — they're uploaded through
`/admin/photos` and stored in **Vercel Blob**, because Vercel's filesystem
is read-only in production (a `public/` folder can't accept uploads there).
Three things need to be set up once:

### 1. Create a Blob store
In your Vercel project → **Storage** tab → **Create Database** → **Blob** →
connect it to this project. Vercel automatically adds the
`BLOB_READ_WRITE_TOKEN` environment variable for you — nothing to copy by
hand in production.

### 2. Set the admin login credentials
In Vercel → **Project Settings → Environment Variables**, add:

| Variable | Value |
|---|---|
| `ADMIN_USERNAME` | whatever you want to log in with |
| `ADMIN_PASSWORD` | a strong password |
| `ADMIN_SESSION_SECRET` | any long random string (used to sign the login session — not a password you type in) |

### 3. Redeploy
Push any commit (or click "Redeploy" in Vercel) so the new environment
variables take effect.

Once that's done, go to `https://your-site.com/admin/login`, sign in, and
you'll land on `/admin/photos` — pick a section (Team Building, Training,
Celebrations, Office Life), drag photos in, and they show up on the live
site immediately (no redeploy needed for new photos — only for env var
changes).

### Local development
Copy `.env.local.example` to `.env.local` and fill in the same three
values. For `BLOB_READ_WRITE_TOKEN` locally, copy it from Vercel → Storage
→ your Blob store → the `.env.local` tab there (or just develop against
production Blob storage — it's fine for a small internal tool like this).

## Contact form

Posts to `app/api/contact/route.ts`, which validates and logs the
submission but doesn't send real emails yet. Wire in
[Resend](https://resend.com) or [Formspree](https://formspree.io) — a
comment in that file shows exactly where — then add the API key as an
environment variable in Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Push to GitHub / deploy on Vercel

If this is a fresh repo:

```bash
git init
git add .
git commit -m "Full site rebrand"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

Then import the repo at https://vercel.com/new (framework auto-detected as
Next.js) and add the environment variables above before or after the first
deploy — just redeploy once they're set.

If you're replacing an existing repo's content, just overwrite the files
and push a commit as normal; Vercel redeploys automatically on every push
to the connected branch.
