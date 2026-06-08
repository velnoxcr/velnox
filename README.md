# Velnox Clinical Research and Solutions — Portfolio Website

Public-facing portfolio for **Velnox Clinical Research and Solutions Pvt. Ltd.** (Velnox RSCRO) — an India-based CRO/SMO operating under ICH-GCP and the New Drugs & Clinical Trials Rules, 2019.

Built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide React**, in a clean, light, medical-premium visual language — deep navy (`ocean`) for brand, teal as secondary accent, amber strictly reserved for Pharmacovigilance signalling.

---

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (type-checks)
npm start        # serve the production build
```

Requires Node.js 18.17+ (or 20+).

---

## What's on the site

| Route | Purpose |
|---|---|
| `/` | Video hero with the official tagline "Advancing Healthcare Through Research Excellence", About + Vision/Mission, Services preview, Therapeutic Expertise marquee, Engagement Lifecycle, Why-Choose, Presence (Pollachi/Mysuru), Leadership, Training preview, Partnership tiles, animated stat band, CTA. |
| `/about` | Our Story, Vision & Mission, Our Presence (Pollachi & Mysuru), Founder & Managing Director (Mr. Gobinath R), Leadership team (CEO + COO), Partnership message. |
| `/services` | Thirteen services from the corporate document, filterable by group, plus Core Competencies (12) and Therapeutic Expertise (12 areas). |
| `/training` | CRC Training & Development — four GCP foundations, who can apply, training format, enrolment form (Formspree-wired). |
| `/contact` | Pollachi head office, Mysuru operational site, direct channels (phone / email / WhatsApp / website), intent-routed form. |

The primary CTA across the site is **"Request Feasibility" → `/contact?intent=feasibility`** (the intent param prefills the form).

---

## Adding your branded hero video

Drop a video at `public/videos/hero.mp4` and it picks up automatically. Constraints:

- **≤ 6 MB** compressed (you're loading this on every mobile device)
- **1080p H.264 MP4**, silent, **8–15 s loop**, no on-screen text
- Soft, slow motion — pipetting / microscope work / cold-storage door opens
- If filming people, prefer **Indian / South-Asian** investigators, CRCs, study nurses

If no video is supplied, the hero shows the poster image at `lib/content/assets.ts → HERO_VIDEO.poster` (currently a stock researcher photo). The hero looks intentional either way.

To swap the poster, edit `HERO_VIDEO.poster` to point to a `/images/` path under `public/` or any image URL.

---

## Section imagery

All section / capability imagery is centralised in **`lib/content/assets.ts`**. Edit one constant, the corresponding card updates.

- `SECTION_IMAGERY.*` — Who We Are, Process, Audiences, Compliance, Experience, Careers
- `CAPABILITY_IMAGERY[slug]` — one image per capability (Site Readiness, Feasibility, SIV, etc.)
- `THERAPEUTIC_IMAGERY[slug]` — for the Experience page TA tiles

Defaults are neutral lab / equipment / data-visualisation imagery from Unsplash. Swap to branded photography (drop files under `public/images/` and reference as `/images/<name>.jpg`) when ready.

---

## Things to swap before going live — `TODO: Velnox to supply`

Search the repo for the marker `TODO: Velnox to supply`. The list:

| File | What to swap |
|---|---|
| `lib/content/nav.ts` | `phoneMain`, `phonePv24x7`, `whatsappLink`, full head-office & branch addresses, CIN. |
| `lib/content/leadership.ts` | CEO and MD bios (names already correct: Suruthi Kanagaraj, Gobinath R) and the entire Advisory Committee roster. |
| `lib/content/careers.ts` | Active openings (defaults are the standing role catalogue). |
| `lib/content/assets.ts` | All imagery and the hero video reference — swap to branded assets when ready. |
| `components/site/Footer.tsx` | The `CIN: TODO` token in the bottom bar. |
| `lib/forms/submit.ts` | `FORMSPREE_ENDPOINT` — currently `mzdwlapy`. Swap to repoint every form on the site. |
| `app/sitemap.ts` & `app/layout.tsx` | The `https://velnoxcr.com` URL once the production domain is final. |
| `public/og.png`, `public/apple-icon.png` | Drop these in for richer social-share / iOS home-screen visuals. The favicon at `app/icon.svg` ships dynamically already. |

---

## Visual & motion principles

- **Light, premium, medical.** White base, deep navy (`ocean-900` `#1E3A8A` → `ocean-700` `#1D4ED8`) for brand, teal `#0D9488` as a secondary CTA accent.
- **Amber is for safety only.** `#F59E0B` is reserved for Pharmacovigilance / SAE callouts (footer hotline badge, Contact page banner, Compliance SAE anchor). Do not introduce amber elsewhere.
- **Motion is subtle.** Scroll-reveal on transform + opacity, 600 ms ease, fires once. Marquee on therapeutic chips at 60 s loop, paused on hover. Animated count-up on stat band. No carousels. No parallax. No cursor effects.
- **Type.** Inter for body, **Plus Jakarta Sans** (display weights, tightened tracking) for headings, **Fraunces** loaded for occasional serif pulls. Tabular numerals on stats.
- **Hero video** is auto-played, muted, loops, falls back to a poster image. Always mobile-fits via `object-cover`.

---

## Project layout

```
velnoxcr/
├── app/                       # App Router pages
│   ├── layout.tsx             # root layout, fonts, SEO, header/footer/TrustStrip
│   ├── globals.css            # design tokens, scrollbar, motion utils
│   ├── page.tsx               # Home
│   ├── about/{page,advisory/page}.tsx
│   ├── capabilities/page.tsx
│   ├── experience/page.tsx
│   ├── services/page.tsx
│   ├── compliance/page.tsx
│   ├── careers/page.tsx
│   ├── contact/page.tsx
│   ├── sitemap.ts · robots.ts · icon.svg
├── components/
│   ├── site/                  # Header, Footer, TrustStrip, PageHero, Container, Logo
│   ├── motion/                # Reveal, Marquee, ParticleField
│   ├── ui/                    # Button, Card, Input, Badge, Icon
│   ├── home/                  # Hero (with video), WhoWeAre, CapabilityGrid, MarqueeChips,
│   │                          # ProcessStripe, AudienceTiles, StatBand (count-up), CtaBand
│   ├── about/LeadershipCard.tsx
│   ├── capabilities/CapabilityFilter.tsx
│   ├── compliance/TocRail.tsx
│   └── forms/                 # ContactForm + CareersForm (Formspree-wired)
├── lib/
│   ├── content/               # ALL the editable content lives here
│   │   ├── nav.ts             # nav, primary CTA, COMPANY constants
│   │   ├── capabilities.ts    # 12 capabilities, mapped to SOPs
│   │   ├── process.ts         # 6-step lifecycle
│   │   ├── experience.ts      # TAs, phases, products, marquee chips
│   │   ├── audiences.ts       # 8 audience segments
│   │   ├── compliance.ts      # 7 compliance anchor sections + standards
│   │   ├── leadership.ts      # CEO/MD + advisory committee
│   │   ├── careers.ts         # roles, eligibility, onboarding
│   │   ├── stats.ts           # 3-up trust stats
│   │   └── assets.ts          # ALL imagery + hero video — swap here, nowhere else
│   ├── forms/submit.ts        # FORMSPREE_ENDPOINT — one constant for every form
│   └── utils/cn.ts
├── public/
│   ├── videos/                # Drop hero.mp4 here
│   └── images/                # Drop branded photography here
├── tailwind.config.ts         # design tokens (ocean, teal, amber, ink, paper)
└── README.md
```

---

## Editing content

Almost everything you'd reasonably want to change is a one-line edit in `lib/content/*.ts`. No JSX changes needed for: company contact details, capability blurbs, process steps, therapeutic areas, audience segments, compliance bullets, roles, eligibility, leadership bios, imagery, or the Formspree endpoint.

If you change a route or rename a page, also update `lib/content/nav.ts` (used by the header, footer, mobile drawer, and sitemap).

---

## Deployment

This repo is configured to deploy to **GitHub Pages** on every push to `main` via `.github/workflows/deploy.yml`. Production URL: `https://velnoxcr.github.io/velnox/`.

One-time step in repo settings: **Settings → Pages → Source → GitHub Actions**.

When you have a custom domain, edit `app/sitemap.ts` and `app/layout.tsx` to update URLs, and drop a `CNAME` file in `public/`.

---

© Velnox Clinical Research and Solutions Pvt. Ltd.
