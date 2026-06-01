# Velnox Clinical Research and Solutions — Portfolio Website

Public-facing portfolio for **Velnox Clinical Research and Solutions Pvt. Ltd.** (Velnox RSCRO) — an India-based CRO/SMO operating under ICH-GCP and the New Drugs & Clinical Trials Rules, 2019.

Built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide React**, in a dark "biotech-graphite" visual language with a precision-teal accent (and a strictly-reserved amber for Pharmacovigilance signalling).

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
| `/` | Hero, trust strip, 6-card capability grid, marquee of TAs/study types, lifecycle stripe, audience tiles, stat band, CTA. |
| `/about` | Story, vision, mission, four operating principles, leadership (CEO & MD). |
| `/about/advisory` | Scientific & Advisory Committee (placeholder roster — Velnox to supply). |
| `/capabilities` | Filterable 12-card capability grid, each mapped 1:1 to a Velnox SOP. |
| `/experience` | Therapeutic areas, study phases, product categories, anonymised case snapshots. |
| `/services` | "Who We Serve" — 4 primary audience cards + 4 adjacent + how engagements start. |
| `/compliance` | Long-form page with sticky TOC: standards, ethics, confidentiality, COI, quality, zero-tolerance, SAE workflow, archival. |
| `/careers` | Roles, eligibility, training, application form. |
| `/contact` | Intent-routed form, contact cards, **amber SAE/PV hotline callout**. |

The primary CTA across the site is **"Request Feasibility" → `/contact?intent=feasibility`** (the intent param prefills the form).

---

## Things to swap before going live — `TODO: Velnox to supply`

Search the repo for the marker `TODO: Velnox to supply`. The list:

| File | What to swap |
|---|---|
| `lib/content/nav.ts` | `phoneMain`, `phonePv24x7`, `whatsappLink`, full head-office & branch addresses, CIN. |
| `lib/content/leadership.ts` | CEO and MD bios (names already correct: Suruthi Kanagaraj, Gobinath R) and the entire Advisory Committee roster. |
| `lib/content/careers.ts` | Active openings (defaults are the standing role catalogue). |
| `components/site/Footer.tsx` | The `CIN: TODO` token in the bottom bar. |
| `components/forms/ContactForm.tsx` | The `console.log` stub at the submission handler — wire it to your real inbox (Resend, Formspree, or a `/api/contact` route hitting your SMTP). |
| `components/forms/CareersForm.tsx` | Same — wire submission to your careers inbox / ATS. |
| `app/sitemap.ts` & `app/layout.tsx` | The `https://velnoxcr.com` URL once the production domain is final. |
| `public/` | Add `og.png` (1200×630) and `apple-icon.png` if you want richer social-share / iOS home-screen visuals. The favicon at `app/icon.svg` ships dynamically already. |

The site is designed to look complete with these placeholders in place — every TODO is a single line you can replace without touching JSX.

---

## Visual & motion principles

- **Dark first.** Graphite `#0B0F12` base, near-white text. A light toggle is not in scope for v1.
- **Single accent.** Precision teal `#2DD4BF` for CTAs and active states. Used sparingly — it should read as a signal, not as decoration.
- **Amber is for safety only.** `#F59E0B` is reserved for Pharmacovigilance / SAE callouts (footer hotline badge, Contact page banner, Compliance SAE anchor). Do not introduce amber elsewhere.
- **Motion is subtle.** Scroll-reveal on transform + opacity, 600 ms ease, fires once. Marquee on therapeutic chips at 60 s loop, paused on hover. No carousels. No parallax. No cursor effects. The hero has a quiet particle field that pauses when the tab is hidden.
- **Type.** Inter for body, Inter (heavier weights, tightened tracking) for display. Tabular numerals on stats.

---

## Project layout

```
velnoxcr/
├── app/                       # App Router pages
│   ├── layout.tsx             # root layout, fonts, SEO, header/footer/TrustStrip
│   ├── globals.css
│   ├── page.tsx               # Home
│   ├── about/page.tsx
│   ├── about/advisory/page.tsx
│   ├── capabilities/page.tsx
│   ├── experience/page.tsx
│   ├── services/page.tsx
│   ├── compliance/page.tsx
│   ├── careers/page.tsx
│   ├── contact/page.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── icon.svg
├── components/
│   ├── site/                  # Header, Footer, TrustStrip, PageHero, Container, Logo
│   ├── motion/                # Reveal, Marquee, ParticleField
│   ├── ui/                    # Button, Card, Input, Badge, Icon
│   ├── home/                  # Hero, WhoWeAre, CapabilityGrid, MarqueeChips, ProcessStripe,
│   │                          # AudienceTiles, StatBand, CtaBand
│   ├── about/LeadershipCard.tsx
│   ├── capabilities/CapabilityFilter.tsx
│   ├── compliance/TocRail.tsx
│   └── forms/                 # ContactForm, CareersForm
├── lib/
│   ├── content/               # ALL the editable content lives here
│   │   ├── nav.ts             # Nav, primary CTA, COMPANY constants
│   │   ├── capabilities.ts    # 12 capabilities, mapped to SOPs
│   │   ├── process.ts         # 6-step lifecycle
│   │   ├── experience.ts      # TAs, phases, products, marquee chips
│   │   ├── audiences.ts       # 8 audience segments
│   │   ├── compliance.ts      # 7 compliance anchor sections + standards
│   │   ├── leadership.ts      # CEO/MD + advisory committee
│   │   ├── careers.ts         # roles, eligibility, onboarding
│   │   └── stats.ts           # 3-up trust stats
│   └── utils/cn.ts
├── tailwind.config.ts         # design tokens (graphite, teal, amber, fonts)
└── README.md
```

---

## Editing content

Almost everything you'd reasonably want to change is a one-line edit in `lib/content/*.ts`. No JSX changes needed for: company contact details, capability blurbs, process steps, therapeutic areas, audience segments, compliance bullets, roles, eligibility, leadership bios.

If you change a route or rename a page, also update `lib/content/nav.ts` (used by the header, footer, mobile drawer, and sitemap).

---

## Deployment notes (for later)

- **Vercel** is the lowest-friction deploy: connect this repo, `npm run build`, done.
- Form handlers currently `console.log` the payload. For production, add a `/app/api/contact/route.ts` and wire it to your transactional email provider, or front it with Formspree / Tally if you want a no-backend option.
- Set `NEXT_PUBLIC_SITE_URL` (or just edit `app/layout.tsx` and `app/sitemap.ts`) when the production domain is final.

---

© Velnox Clinical Research and Solutions Pvt. Ltd.
