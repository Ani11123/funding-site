# CURRENT STATE

Status: Phase 1 Business Finance Content Complete — 6 Pages Live (2026-07-14)
Build: ✅ Clean (static export, 8 routes: homepage + 6 product pages + not-found), zero lint errors
Deployment target: Hostinger (static) or Vercel (server)

---

## Official Brand Palette

Primary Navy:    #0B2E59
Dark Navy:       #082347
Darkest:         #061830
Secondary:       #4F6D8A
Light Grey:      #F4F5F7  (section backgrounds)
Charcoal:        #333333  (body text)
Orange (accent): #C76A1B  (buttons, links, CTA, icons)
Orange hover:    #a85918

Fonts:
  Headings: Montserrat (600/700/800/900) via Google Fonts CSS @import
  Body:     Inter (300–900) via Google Fonts CSS @import

---

## Page Structure (top to bottom)

1.  TopBar — sticky #082347 bar: Trustpilot reference | 4 social icons (LinkedIn, WhatsApp, Facebook, Instagram)
2.  Header — sticky white: LogoMark | Business Finance nav → #business-finance | Contact → #contact | Speak to Advisor CTA
3.  Hero — London financial district (Unsplash), 22s zoom, centred headline + tagline
4.  TrustBar — floating white card (-mt-10 overlap)
5.  Services (#business-finance) — editorial header + 8 service cards in 4×2 grid (bg #F4F5F7)
6.  Process — 4 steps on white bg
7.  WhyChooseUs (#why-us) — 6 feature tiles, #0B2E59 bg, pull quote
8.  Testimonials — 3 placeholder cards (TODO: real content)
9.  BlogPreview — 3 placeholder article cards (TODO: real content)
10. TrustedPartners — 14 lender logos, 55s CSS marquee
11. ContactForm (#contact) — grid items-stretch + left col flex-col; heading + paragraph + compact contact card (Office 2-line, Phone+Email side-by-side) + map (flex-1, min-h-180px, auto-fills to match form height) | right col: white form card
12. Footer — balanced 4-col: brand (1 sentence desc) | Business Finance links | Company links | GDPR/ICO badges → Newsletter → Social icons

---

## Sticky Header Stack

TopBar: `sticky top-0 z-[60]` h-9 = 36px
Header: `sticky top-9 z-50` h-[84/96/108px] (mobile/tablet/desktop)

scroll-margin-top (globals.css):
  Mobile:  128px
  sm:      140px
  lg:      152px

Services overrides to scrollMarginTop: 160px (inline style, covers all breakpoints safely).

---

## Logo Implementation

Component: `src/components/LogoMark.tsx`
- Source: `public/assets/logo/nexora-header-logo.svg`
- viewBox: `"0 121 2534 1353"` — crops tagline at y=1476+, preserves icon + NEXORA + FUNDING LIMITED
- Light mode (Header): full-colour SVG via `<img>`
- Dark mode (Footer): CSS filter `brightness(0) invert(1)` → all-white
- Fallback: styled brand text block if image fails to load
- Header sizes: `w-[120px] sm:w-[140px] lg:w-[170px] h-auto`
- Footer sizes: `w-[155px] sm:w-[175px] lg:w-[200px] h-auto`

---

## Favicon

3-layer SVG approach (`public/favicon.svg`):
- Layer 1: white rounded-square background (rx=80)
- Layer 2: hairline border (#E5E7EB, 16px stroke ≈ 0.5px at 32px display)
- Layer 3: Nexora icon at 90% scale centered on (512,512) via `translate(51.2,51.2) scale(0.90)`

Icon paths: navy #04244A N-body (2 paths) + orange #E36E04 accent bars (2 paths)
Browser support: `app/favicon.ico` (primary) + SVG + PNG size variants in layout.tsx

themeColor: #0B2E59 (updated from #04244A)

---

## SEO (Phase 1)

- Title: "Nexora Funding Limited | Commercial Finance for UK Businesses"
- Description: "Connecting UK businesses with trusted commercial finance solutions through expert, advisor-led funding support. Business loans, invoice finance, asset finance and more."
- metadataBase: https://nexorafunding.co.uk (TODO: confirm domain)
- OpenGraph: title, description, type=website, locale=en_GB, siteName
- Twitter card: summary_large_image
- Canonical: https://nexorafunding.co.uk (TODO: confirm domain)
- robots: index=true, follow=true
- `public/robots.txt`: Allow all, Sitemap pointer
- `public/sitemap.xml`: homepage + 6 active Business Finance pages with lastmod 2026-07-14 (Business Loans and Working Capital routes removed, not in sitemap)

---

## Build / Deployment

next.config.ts: `output: "export"` + `images: { unoptimized: true }`
- Generates `out/` directory for static hosting (Hostinger shared hosting)
- To switch to Vercel/VPS: remove `output` and `unoptimized`, restore `remotePatterns` only
- All 10 routes are static — no API routes, no ISR, no server components with dynamic data

Build command: `npm run build` → outputs to `out/`
Deploy to Hostinger: upload contents of `out/` to public_html

---

## Footer Layout

Grid: `sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10` — balanced 2×2 on tablet, 4-col on desktop
Col 1: logo (140/155/170px) + 1-sentence description
Col 2: Business Finance links (6 items)
Col 3: Company links (4 items)
Col 4: Stay Informed blurb + GDPR/ICO badges + Newsletter button + 4 social icons

## Compliance Badges (Footer)

Files: `public/assets/compliance/GDPR.png` + `ICO.png` (WebP format despite extension)
Rendered at: `h-9 w-[70px]` with `brightness(0) invert(1)` filter → white on dark footer
Labelled: "GDPR Compliant" / "ICO Registered" in 9px uppercase text below each badge
Opacity: 0.55 base, 0.80 on hover
Position: Col 4, between newsletter button and social icons

---

## Lender Logos

Location: `public/assets/lenders/`
14 files: 365finance, capify, electcapital, fleximize, fundingcircle, bizcap, iwoca,
          lendingcrowd, lenkie, mcl, momentafinance, swiftfund, together, youlend
Component: TrustedPartners.tsx — CSS marquee, 55s, doubled track, fade edges
Update: add/remove entries in `partners` array in TrustedPartners.tsx

---

## Service Pages (6 active routes — content approved, 2026-07-14)

All six Business Finance pages are now complete, using client-supplied content, on the approved Business Finance Page Template:

/secured-business-loans · /unsecured-business-loans · /merchant-cash-advance
/invoice-finance · /asset-finance · /revolving-credit-facility

**Business Loans and Working Capital have been removed completely** per latest client instruction (2026-07-14) — routes deleted, no data file, no nav/footer/homepage/sitemap references remain. If a Business Loans-style generic product is wanted again in future, it would need to be reintroduced as a new entry in `businessFinanceData.ts` with its own content file.

Each page has unique metadata (title, description, canonical, OpenGraph — no Twitter card, per client instruction), a BreadcrumbList JSON-LD schema, and full page-specific content (no shared/generic copy across pages beyond the "Why Choose Nexora" positioning tiles, which are intentionally consistent brand messaging).

---

## Business Finance Page Template + Shared Data Architecture (2026-07-14)

The Business Finance Page Template (approved by client) now powers all 6 live product pages. Architecture:

- `src/components/business-finance/types.ts` — `BusinessFinancePageContent` interface, the content contract every page must satisfy
- `src/components/business-finance/Template.tsx` — composes TopBar, Header, Breadcrumb, all 10 content sections, Footer
- `src/components/business-finance/*.tsx` — one component per section (Breadcrumb, Hero, Intro, KeyBenefits, HowItWorks, Eligibility, LoanTypes, WhyChoose, Faq, RelatedSolutions, FinalCta), each accepts only its slice of content as props
- `src/data/businessFinanceData.ts` — **new shared registry**. Single source of truth for all 6 active products (slug, route, nav title, card description, icon, hero image, SEO title/description). Consumed by:
  - `Services.tsx` (homepage Business Finance cards — now a clean 3-column, 2-row grid of 6, replacing the old hardcoded 8-item array)
  - `Footer.tsx` (Business Finance footer links)
  - every page's `relatedSolutions` (via `getRelatedProducts()` + `toRelatedSolutionItems()` helpers, which exclude the current page and only ever reference active/completed products)
- `src/data/<slug>.ts` (one per product) — full page content (hero copy, intro, key benefits, how it works, eligibility, product-specific feature cards, FAQs), importing shared card/SEO fields from `businessFinanceData.ts` rather than duplicating them
- `src/app/<slug>/page.tsx` — thin wrapper per route: metadata + BreadcrumbList JSON-LD + `<BusinessFinanceTemplate content={...} />`

**To add or remove a product in future:** add/remove its entry in `businessFinanceData.ts` and its content file — the homepage grid, footer links and every other page's related-solutions block update automatically. No other file needs touching.

**LoanTypes.tsx** (the "product-specific types/features" section) now adapts its grid to 2, 3 or 4 cards depending on how much content a product supplies, rather than a fixed 3-column layout — used for Secured Loans' 3 risk-consideration cards, Invoice/Asset Finance's 3 product-type cards, and Unsecured/Revolving Credit's 4 feature cards.

**Content sources:**
- Secured Business Loans, Merchant Cash Advance, Invoice Finance, Asset Finance, Revolving Credit Facility — adapted from client-supplied copy ("content for 5 pages.rtf"), lightly edited for grammar/formatting/UK English while preserving commercial meaning.
- Unsecured Business Loans — the client-supplied file ("Unsecured Loans.rtf") referred to a different company throughout ("Capital Bridge Finance" / "Keystone Funding" / "Keystone Business Finance" — Keystone is this project's own competitor reference site). Per user decision, only the factual substance (rates from 6.9%, £10k–£2m, 24hr funding, 4-step process, FAQ facts) was kept; all phrasing was rewritten fresh in Nexora's voice. See PHASE1_SIGNOFF.md.

**New dependency:** `lucide-react`, already in use since the Business Finance template was first built.

**Dead code removed:** `src/components/ServicePage.tsx` (the old generic placeholder component) — no longer referenced by any route now that all 6 pages use the full template.

**QA performed:** `npm run build` + `npm run lint` clean (zero errors, zero warnings, 8 static routes: homepage + 6 products + not-found). Verified live in headless Chromium across 7 breakpoints (1920/1440/1366/1024/768/430/390px) on the homepage and all 6 product pages — no horizontal scroll, no console errors, all "Explore now" links resolve to the correct completed route, related-solutions links correctly exclude the current page and never reference a removed page.

**Known pre-existing issue (not introduced this session, not fixed — see PHASE1_SIGNOFF.md):** the homepage's "Choose the funding route..." section image causes ~76px of horizontal overflow at mobile widths (390–430px). This predates this session's changes (confirmed via diff — only the cards array/grid were touched) and was left alone per the explicit "do not redesign the homepage" instruction. Recommended for a future fix.

---

## Social Links Configuration (2026-07-14)

`src/data/socialLinks.ts` is now the single source of truth for LinkedIn, WhatsApp, Facebook and Instagram — consumed by both `TopBar.tsx` and `Footer.tsx` (previously each hardcoded its own duplicate array). To update a social link in future, edit this one file only.

- **LinkedIn** — official URL now live: `https://www.linkedin.com/in/nexora-funding-483b6741a/?skipRedirect=true`
- **WhatsApp** — still a `#` placeholder pending the client's number
- **Facebook / Instagram** — unchanged, already live

Link behaviour: any href starting with `http` automatically gets `target="_blank"` + `rel="noopener noreferrer"` (external link security/accessibility best practice); placeholder `#` links stay inert with neither attribute until a real URL is supplied.

QA: verified live in headless Chromium — both TopBar and Footer LinkedIn icons resolve to the official URL with correct `target`/`rel`, confirmed on the homepage and a product page, desktop (1440px) and mobile (390px). All four social icons render correctly, `npm run build` + `npm run lint` clean.

---

## Contact Form Validation (2026-07-13)

Client-side validation added to the homepage ContactForm — layout and visual design unchanged, only field-level validation, error UI and submit-flow states added.

**New files:**
- `src/lib/contactFormValidation.ts` — `ContactFormData` type (single source of truth for the form shape), per-field validators, `validateContactForm()`, `fieldOrder` (used for focus-first-invalid-field on submit)
- `src/lib/contactFormSubmit.ts` — `handleSubmitValidatedForm()` submission boundary; currently a mocked 900ms resolve (no network call). Contains the full Phase 2 TODO block (CRM endpoint, auth, consent capture, GDPR consent logging, retry handling, duplicate lead detection, server-side validation, spam protection) — see file for details.

**Validation rules:**
- Name: required, min 2 chars, rejects numbers-only input
- Business name: required, min 2 chars
- Phone: required, allows `+`, spaces, brackets, hyphens; validated by digit count (7–15 digits) rather than a rigid pattern, so it doesn't over-restrict valid UK or international numbers
- Email: required, format-checked, trimmed on blur
- Funding type / Funding amount: required (previously optional — this is the one behavioural change to the form's requiredness)
- Message: optional, max 750 chars (enforced via `maxLength` + validator), live character counter

**UX/accessibility:**
- Errors only appear after a field is touched (blur) or after a submit attempt — never before interaction
- Errors clear live as soon as a field becomes valid
- Each invalid field gets `aria-invalid` + `aria-describedby` pointing at its error text; errors use `role="alert"`, a warning icon, and red text/border (not colour alone)
- On invalid submit, focus moves to the first invalid field in DOM order; entered values are always preserved
- Submit button disables during the simulated network delay; an `isSubmittingRef` guard also blocks a same-tick double-submit race independent of the disabled attribute
- Native browser validation is disabled (`noValidate` on the `<form>`) so this custom UI has full control

**Explicitly not done (by design, Phase 1 scope):** no CRM/API call, no server-side validation, no CAPTCHA, no localStorage persistence of form data, no console logging of submitted values.

**QA performed:** `npm run build` clean, zero TypeScript errors. Verified live in headless Chromium — empty submission, invalid email, invalid phone, numbers-only name, missing dropdowns, error-clears-on-valid-input, value preservation, full valid submission → success state, double-click/rapid-double-submit prevention, keyboard-only tab navigation, and mobile (390px) layout. Zero console errors throughout.

---

## Content Rules

- No unverified statistics or made-up claims
- No FCA regulated claims (awaiting client's FCA reference number)
- No fake testimonials (clearly marked as TODO placeholders)
- No copyrighted or competitor imagery (all Unsplash royalty-free, marked for replacement)
- Original copywriting only
- Phone placeholder: 0000 000 0000
- Email: office@nexorafunding.co.uk (confirmed by client)
- Social links: Facebook, Instagram and **LinkedIn live** (official URL confirmed 2026-07-14: `https://www.linkedin.com/in/nexora-funding-483b6741a/?skipRedirect=true`); WhatsApp still placeholder (#) until a number is provided

---

## Contact Details (confirmed)

- Phone: `020 3432 3492` (href: `tel:+442034323492`) — applied in ContactForm
- Email: `office@nexorafunding.co.uk` — applied in ContactForm
- Office: Office 19768, 182-184 High Street North, East Ham, London E6 2JA — Google Maps embed live in ContactForm

## Pending Assets (from client)

- WhatsApp number → update wa.me/ URL in `src/data/socialLinks.ts` (TopBar + Footer both consume this one file)
- ~~LinkedIn URL~~ ✅ Done (2026-07-14) — official URL live in `src/data/socialLinks.ts`
- Trustpilot profile URL → update href in TopBar
- Newsletter signup URL → update Footer "Subscribe" button
- OG image (1200×630px) → add to public/ and reference in layout.tsx
- Real testimonials → update Testimonials.tsx
- Service page content (all 8 placeholder pages)
- Licensed images for section backgrounds (WhyChooseUs, ContactForm)
- Privacy Policy / Terms / Complaints page content
- FCA reference number (if applicable)

---

## Next Actions

1. Verify build: `npm run build`
2. Upload `out/` to Hostinger public_html
3. Configure custom domain in Hostinger control panel
4. Submit sitemap to Google Search Console
5. Provide client with pending asset checklist
