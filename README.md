# Nexora Funding Limited — Website

Lead-generation website for Nexora Funding Limited, an independent commercial finance advisory business. Built with Next.js (App Router), TypeScript and Tailwind CSS, exported as a static site for shared hosting.

## Tech stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4** (CSS-based config via `@import "tailwindcss"` in `src/app/globals.css` — there is no `tailwind.config.js`)
- **lucide-react** for iconography on the Business Finance pages
- Static export (`output: "export"` in `next.config.ts`) — no server, no API routes, no database

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

## Building for production

```bash
npm run build      # outputs a fully static site to out/
```

The contents of `out/` are what get uploaded to static hosting (see `HOSTINGER_DEPLOYMENT_STEPS.txt` if supplied separately). `next.config.ts` sets `trailingSlash: true` so every route exports as `route/index.html`, which Apache-based shared hosting serves natively for clean URLs (e.g. `/asset-finance`) with no rewrite rules required.

## Project structure

```
src/
  app/                        Route folders (App Router) — one per page
    <slug>/page.tsx            Business Finance product pages (metadata + content)
  components/
    business-finance/          Shared template + section components for every
                                Business Finance product page (Hero, Intro,
                                KeyBenefits, HowItWorks, Eligibility, LoanTypes,
                                WhyChoose, Faq, RelatedSolutions, FinalCta)
    *.tsx                       Homepage sections (Hero, Services, Process,
                                WhyChooseUs, ContactForm, Footer, etc.)
  data/
    businessFinanceData.ts     Single registry of active Business Finance
                                products (slug, route, icon, SEO metadata).
                                Consumed by the homepage grid, the footer
                                links, and every page's related-solutions
                                block — add/remove a product here.
    <slug>.ts                   Full page content for each Business Finance
                                product, importing shared fields from
                                businessFinanceData.ts
  lib/
    contactFormValidation.ts   Contact form validation schema
    contactFormSubmit.ts       Contact form submission boundary (see file
                                for the Phase 2 CRM integration TODOs)
public/
  assets/                      Logo, lender logos, compliance badges
  favicon.ico, sitemap.xml, robots.txt, site.webmanifest
```

## Adding or removing a Business Finance product

1. Add/remove/edit its entry in `src/data/businessFinanceData.ts`.
2. Add/remove its content file at `src/data/<slug>.ts` (same shape as an existing one) and its `src/app/<slug>/page.tsx` wrapper.
3. Update `public/sitemap.xml` to match.

The homepage grid, footer links, and every other page's "Related Finance Solutions" section update automatically from step 1 — no other file needs touching.

## Contact form

`src/components/ContactForm.tsx` has full client-side validation (see `src/lib/contactFormValidation.ts`) but does not submit anywhere yet — `src/lib/contactFormSubmit.ts` is a deliberate integration boundary with a mocked response, documented with TODOs for the eventual CRM/API integration, server-side validation, spam protection and consent logging.
