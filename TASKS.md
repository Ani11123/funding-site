# TASKS

## PHASE 1 — COMPLETE

[x] Create Next.js project
[x] Configure Tailwind
[x] Create Layout
[x] Create TopBar (announcement bar)
[x] Create Header (white sticky, nav, CTA)
[x] Create Hero Section
[x] Create TrustBar (floating white stats bar)
[x] Create Funding Options / Services (8 cards, 4x2 grid)
[x] Create WhyChooseUs
[x] Create Process Section
[x] Create CTA Banner
[x] Create Contact Form
[x] Create FAQ
[x] Create Footer
[x] Assemble page.tsx (full layout)
[x] npm run build — zero TypeScript errors

## BRAND ITERATION — COMPLETE (2026-06-26)

[x] Apply Brand DNA colour palette throughout
[x] Update globals.css — new CSS variables, marquee animation
[x] Update TopBar → slim sub-header with contact placeholders + social icons
[x] Update Header → simplified nav (Funding Options + Contact only), single "Speak to Advisor" CTA
[x] Update Hero → brand colours, CSS gradient with zoom animation
[x] Update TrustBar → brand colours
[x] Update Services → brand colours, improved polish
[x] Update Process → 4 steps only, standalone premium cards, above WhyChooseUs
[x] Update WhyChooseUs → standalone section, 6 feature tiles, pull quote
[x] Create Testimonials.tsx — premium placeholder testimonials (TODO: real content)
[x] Create BlogPreview.tsx — placeholder blog cards (TODO: real content)
[x] Create TrustedPartners.tsx — continuous CSS marquee (TODO: client logos)
[x] Update Footer → company summary + useful links + newsletter link (no form)
[x] Update ContactForm → brand colour alignment
[x] Update page.tsx → new section order per client request
[x] Remove FAQ + CTA Banner from page (components retained, not rendered)

## NEXORA OFFICIAL BRANDING — COMPLETE (2026-06-26)

[x] Replace all palette colours → official Nexora palette (#0B2E59, #C76A1B, #082347, #F4F5F7, #333333)
[x] Add Montserrat font (headings) to globals.css Google Fonts import
[x] Update TopBar → remove phone/email, add Trustpilot reference
[x] Update Hero → remove right-side funding summary card, centre all content, add tagline
[x] Update Footer → Nexora branding, tagline, orange accent
[x] All buttons → orange #C76A1B primary, #a85918 hover
[x] npm run build — zero TypeScript errors

## ASSET INTEGRATION — COMPLETE (2026-06-29)

[x] Copy 14 lender logos (PNG) from lenders_logos/ to public/assets/lenders/
[x] Remove generated SVG logos from public/assets/logo/ (per client instruction)
[x] Create LogoMark.tsx — conditional component: real logo if PNG exists, else styled text
[x] Update Header.tsx — use LogoMark (light mode), remove inline SVG
[x] Update Footer.tsx — use LogoMark (dark mode), remove inline SVG
[x] Remove favicon icons from layout.tsx metadata — use browser default
[x] Update next.config.ts — allow images.unsplash.com remote pattern
[x] Update Hero.tsx — replace CSS gradient with real Unsplash photo (London financial district) + dark overlay + Next.js Image
[x] Update TrustedPartners.tsx — 14 real lender logos with Next.js Image, remove placeholder cards
[x] npm run build — zero TypeScript errors
[x] Update BRAND_DNA.md, CURRENT_STATE.md, TASKS.md, ASSETS_PENDING.md

## IMAGE IMPROVEMENTS — COMPLETE (2026-06-29)

[x] Hero — reduce overlay opacity from ~93% to 48–72% directional gradient (image now clearly visible)
[x] WhyChooseUs — add subtle Unsplash background image at 6% opacity for depth
[x] ContactForm — add subtle Unsplash background image at 7% opacity
[x] Footer — add relative/overflow-hidden, subtle background image at 5% opacity
[x] npm run build — zero TypeScript errors

## PRODUCTION BRANDING INTEGRATION — COMPLETE (2026-06-30)

[x] Copy nexora-logo.svg, nexora-logo-300/600/1200w.png, nexora-icon.svg → public/assets/logo/
[x] Copy favicon.ico, favicon-16/32/48x16.png, apple-touch-icon.png, android-chrome-192/512.png → public/
[x] Copy site.webmanifest → public/
[x] Rewrite LogoMark.tsx — <img> with onError fallback; CSS filter for dark-background inversion
[x] Update layout.tsx — favicon icons metadata, manifest, themeColor (#04244A) via Viewport export
[x] npm run build — zero TypeScript errors
[x] Update CURRENT_STATE.md, TASKS.md, ASSETS_PENDING.md

## PHASE 1 FINAL REFINEMENT — COMPLETE (2026-07-01)

[x] Hero tagline confirmed: "Connecting UK businesses with trusted commercial finance solutions."
[x] ContactForm geo element — upgraded to premium UK map placeholder card with grid lines, location rings, orange pin dot, TODO comments for Google Maps embed + office address
[x] SEO Phase 1 — layout.tsx title/description/OG/twitter/canonical updated; robots.txt + sitemap.xml created
[x] Footer GDPR/ICO badges — increased from h-7 w-14 to h-9 w-[70px]; added "GDPR Compliant" / "ICO Registered" text labels; opacity tweaked to 0.55/0.80
[x] Logo verified — nexora-header-logo.svg with viewBox "0 121 2534 1353" (icon + NEXORA + FUNDING LIMITED, no tagline)
[x] Favicon refined — 3-layer floating design: white bg (rx=80) + hairline border (#E5E7EB) + icon at 90% scale centred on (512,512)
[x] Responsive QA — code review of all breakpoints; all sections use correct responsive padding/grid patterns
[x] Performance — Hero priority flag ✓; all images have sizes attributes ✓; TrustedPartners logos sizes="112px" ✓
[x] next.config.ts — output: "export" + unoptimized: true for Hostinger static hosting
[x] Documentation — CURRENT_STATE.md updated; ASSETS_RECEIVED.md created; SEO_PHASE1.md created; TASKS.md updated
[x] npm run build — clean build, zero errors

## PHASE 1 POST-REFINEMENT — COMPLETE (2026-07-01)

[x] WhyChooseUs cards — backdrop-blur-sm, bg-white/[0.09]→0.13, border-white/20, p-7, icon w-12 h-12 rounded-xl, heading text-base mb-3, body text-slate-200/90
[x] ContactForm trust panel (v1) — removed CSS map placeholder; added structured trust/signal panel
[x] LocationSection component created (retained as file but removed from page — see below)
[x] npm run build — 10 static routes, zero errors

## CONTACT SECTION FINAL SIGN-OFF — COMPLETE (2026-07-01)

[x] Removed standalone "Find Our Office" LocationSection from page.tsx — created unnecessary scroll distance and distracted from the form
[x] ContactForm heading: "Let's find the right funding..." → "Speak with a Commercial Finance Advisor."
[x] ContactForm supporting copy: updated to "Whether you're exploring funding for growth, equipment, property or working capital, our experienced advisors are here to help you find the right solution."
[x] Removed multi-zone trust panel (UK Coverage header + 3 signal rows + compact contacts) — replaced with a single compact geo card
[x] Compact geo card: "Serving Businesses Across the UK" label | 88px map placeholder (TODO for Google Maps iframe, office address, geo coordinates) | short supporting text. Sits immediately below the three contact options on the left column.
[x] Visual hierarchy confirmed: Heading → Copy → Phone/WhatsApp/Email → Geo card → Form (dominant)
[x] npm run build — 10 static routes, zero errors

## ROUND 4 POLISH — COMPLETE (2026-07-01)

[x] Em dash sweep — all visible copy: TrustBar, Process (steps 1+3), WhyChooseUs (features + body + blockquote), Services (×4), Testimonials, unsecured-business-loans/page.tsx
[x] ContactForm redesign — removed 3 styled contact cards + compact geo card; added single-line contact (020 3432 3492 · office@nexorafunding.co.uk); added real Google Maps iframe (Office 19768, 182-184 High Street North, East Ham, London E6 2JA)
[x] ContactForm dropdown — "Not Sure — Need Advice" → "Not sure yet, need advice"
[x] ContactForm copy — paragraph shortened and made more direct
[x] Footer Col 1 — description simplified to 3 concise lines; removed phone and email links
[x] Footer Col 4 — GDPR/ICO badges moved from copyright bar to below newsletter button, above social icons
[x] Footer copyright bar — simplified (removed GDPR/ICO, removed "Registered in England & Wales" duplicate)
[x] Build — clean, 10 static routes, zero errors

## FINAL PHASE 1 UI POLISH — COMPLETE (2026-07-01)

[x] ContactForm — added structured contact block (Office / Phone / Email with orange labels, border-white/12 container, per-row dividers) between paragraph and map
[x] ContactForm — map height increased to h-52 sm:h-60 for better column balance
[x] ContactForm — left column now visually balances the enquiry form at desktop widths
[x] Footer — description reduced to 1 concise sentence per Brand DNA tone
[x] Footer — Col 1 sm:col-span-2 removed; tablet layout now a balanced 2×2 grid
[x] Footer — grid gap tightened to gap-8 lg:gap-10 (was uniform gap-10)
[x] Footer — logo size reduced to 140/155/170px (was 155/175/200px) for proportional balance
[x] Footer — footer body padding py-14 → py-12 for tighter vertical rhythm
[x] Build — clean, 10 static routes, zero errors

## CONTACT SECTION BALANCE FIX — COMPLETE (2026-07-01)

[x] Grid: items-start → items-stretch so both columns lock to the same height
[x] Left column: wrapped in flex flex-col so map can flex-1 to fill remaining space
[x] Grid gap: gap-14 lg:gap-20 → gap-10 lg:gap-14 (tighter, more connected)
[x] Contact card: Office condensed to 2 lines; Phone + Email placed side-by-side in a split row
[x] Contact card padding: py-4 → py-3.5 per row (compact without feeling cramped)
[x] Map: removed fixed h-52 sm:h-60 — now flex-1 min-h-[180px] so it auto-fills to match form
[x] Result: left column and form card finish at the same baseline on all desktop widths
[x] Mobile/tablet: stacking unaffected; min-h-[180px] ensures map always readable
[x] Build — clean, 10 static routes, zero errors

## FOOTER TRUST REORDER + SPACING — COMPLETE (2026-07-01)

[x] Col 4 reordered: GDPR/ICO badges → Newsletter button → Social icons (trust hierarchy: compliance first, CTA second)
[x] Grid body padding: py-10 → py-8
[x] Col 1 logo margin: mb-4 → mb-3
[x] Col 2 heading margin: mb-4 → mb-3
[x] Col 3 heading margin: mb-4 → mb-3
[x] Col 4 heading margin: mb-4 → mb-3
[x] Copyright bar: py-4 → py-3, gap-4 → gap-3
[x] All badge/newsletter/social styling and colours preserved exactly
[x] Build — clean, 10 static routes, zero errors

## FINAL TYPOGRAPHY SYSTEM PASS — COMPLETE (2026-07-01)

### Section Heading System (applied to all major sections)

```
text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight tracking-tight
```

Centred sections (Process, Testimonials, TrustedPartners) also receive `max-w-2xl mx-auto` directly on the h2 to create a consistent 672px heading frame and allow natural line-wrapping at the 42px desktop size.

**Files changed and reasoning:**

Services.tsx — `font-bold` → `font-extrabold`, added `lg:text-[42px] tracking-tight`. Left-aligned in 54% column; constrained naturally by layout.

Process.tsx — `font-bold` → `font-extrabold`, added `lg:text-[42px] tracking-tight max-w-2xl mx-auto`. Centred section; max-w-2xl creates frame and allows "Four Clear Steps to Your Funding" to wrap naturally at 42px desktop.

WhyChooseUs.tsx — Already `lg:text-[42px] font-extrabold`. Added `tracking-tight`. Changed `mb-5` → `mb-4` to match all other sections.

Testimonials.tsx — `font-bold` → `font-extrabold`, added `lg:text-[42px] tracking-tight max-w-2xl mx-auto`. Centred section.

BlogPreview.tsx — `font-bold` → `font-extrabold`, added `lg:text-[42px] tracking-tight`. Left-aligned in flex row; constrained by layout.

TrustedPartners.tsx — `font-bold` → `font-extrabold`, added `lg:text-[42px] tracking-tight max-w-2xl mx-auto`. Centred strip section.

ContactForm.tsx — `font-bold` → `font-extrabold`, added `lg:text-[42px] tracking-tight`. Changed `mb-5` → `mb-4`. Left-aligned in 50% column; constrained by layout.

**TrustBar intentionally excluded** — "Independent advisors. Working for your business." is a transitional editorial positioning statement at `text-2xl sm:text-[28px]`. Its smaller restrained size is a deliberate design decision that gives it a distinct editorial quality between Hero and Services. Enforcing the section heading size on TrustBar would make it lose its character.

**Why these properties:**
- `lg:text-[42px]` — adds visual mass at desktop; at 36px (text-4xl) short single-line headings lack weight. 42px matches WhyChooseUs which was the strongest heading.
- `font-extrabold` — heavier visual weight than bold; creates more presence for single-line headings and brings all sections to equal prominence
- `tracking-tight` (-0.025em) — appropriate for large extrabold headings; adds professional condensed quality
- `max-w-2xl mx-auto` (672px) on centred h2s — consistent container width; at 42px extrabold, longer headings wrap naturally to 2 lines, creating a frame that gives single-line headings visual focus

Build: clean, 10 static routes, zero TypeScript errors.

## FINAL CREATIVE DIRECTION & PREMIUM UI AUDIT — COMPLETE (2026-07-01)

[x] Services h2 — sm:text-[34px] removed, standardised to sm:text-4xl (36px Tailwind scale; custom pixel values eliminated from type system)
[x] Header mobile CTA — font-semibold → font-bold (matches desktop CTA and all other primary orange buttons across the site)

### Full Creative Director Audit — Pass ✅

The following areas were inspected and confirmed production-ready. No further changes required:

TYPOGRAPHY
- Heading hierarchy is consistent: eyebrow (text-xs tracking-[0.2em] uppercase), h2 (text-3xl sm:text-4xl, bold), description (text-sm sm:text-base)
- WhyChooseUs h2 uses font-extrabold (intentional — it is the strongest brand statement section on the page)
- TrustBar h2 uses text-2xl sm:text-[28px] (intentional — editorial/positioning statement, not a section anchor)
- Line breaks and heading widths reviewed; no orphaned words found
- All paragraph max-widths contextually appropriate (max-w-xl for centred sections, max-w-md within constrained columns)

VISUAL RHYTHM
- Section alternation (dark → white → light-grey → white → dark → light-grey → white → light-grey → dark → darkest) is deliberate and premium
- Section padding rhythm: py-20 lg:py-28 across primary sections; py-16 lg:py-20 for strip sections (TrustedPartners) — intentional hierarchy
- TrustBar asymmetric padding (pt-16 pb-14 sm:pt-20 sm:pb-16) confirmed intentional — visual weight at top supports editorial statement
- WhyChooseUs heading grid gap-12 lg:gap-20 — generous for dark section focus ✅

DESIGN CONSISTENCY
- All primary orange filled buttons: font-bold, rounded-md, hover:bg-[#a85918], hover:-translate-y-0.5 ✅
- All secondary/ghost buttons: font-semibold (appropriate lighter weight for non-primary CTAs) ✅
- All card families: rounded-2xl, p-7, card-lift (Services, Process, Testimonials, Blog) ✅
- All icon containers: w-12 h-12, rounded-xl (Services, Process, WhyChooseUs) ✅
- WhyChooseUs tiles use no card-lift (appropriate — glass tiles on dark bg behave differently) ✅
- Button height (py-3.5) consistent across all section CTAs ✅
- Hero CTAs use py-4 (appropriately larger for hero prominence) ✅

BRAND PALETTE
- Old gold colour (rgba(176,141,87)) fully purged — WhyChooseUs glow corrected to brand orange in previous session
- Orange #C76A1B applied consistently: buttons, icons, hover states, eyebrows, accent lines ✅
- Dark navy #082347 used for Footer and TopBar; Navy #0B2E59 for contact/dark sections ✅

CONVERSION REVIEW
- 5-second test passes: what Nexora does (Hero headline/tagline), why trust (TrustBar + testimonials), what to do (Hero CTAs), why enquire (section CTAs + "No obligation" copy)
- Services section has advisor callout ("Not sure which option fits?") — addresses top objection at right moment ✅
- Process CTA now orange (standardised) — flow continues naturally to contact ✅
- WhyChooseUs CTA with reassurance text ("Free consultation. No obligation. No hidden fees.") ✅
- ContactForm as final section before footer — correct conversion placement ✅

ACCESSIBILITY
- All images: decorative images alt="", content images descriptive alt text ✅
- All social icons: aria-label ✅
- All form inputs: paired <label> elements ✅
- Map iframe: title attribute ✅
- Header mobile menu: aria-label="Toggle navigation menu" ✅
- Input focus states: ring-2 ring-[#C76A1B]/30 border-[#C76A1B] ✅

HOVER STATES
- All card families: card-lift (translateY -5px + shadow) ✅
- WhyChooseUs tiles: bg opacity + border colour (no lift — correct for glass tiles) ✅
- All orange buttons: hover:bg-[#a85918] + hover:-translate-y-0.5 ✅
- All nav/text links: hover:text-[#C76A1B] ✅
- Process step accent line: grows from w-8 → w-12 on hover ✅
- Blog card: inner image zoom (group-hover:scale-105) + title colour change ✅

SEO
- All metadata, canonical, robots, sitemap, OG, Twitter card intact ✅
- Heading hierarchy: one h1 per page, h2 for sections, h3 for cards ✅
- All alt text confirmed ✅

RESPONSIVE
- Sticky stack: TopBar 36px + Header 84/96/108px — scroll-margin-top values correct ✅
- Cards: 1 col mobile → 2 col sm → 4 col lg (Services, Process) ✅
- Services editorial header: stacks on mobile, 54/46 split on lg ✅
- WhyChooseUs blockquote: hidden on mobile (hidden lg:flex), no lost content ✅
- TrustBar: stacks to 1 col on mobile, 2×2 on sm, 4-col on lg ✅

BUILD
- 10 static routes, zero TypeScript errors ✅

## FINAL PRE-DELIVERY DESIGN QA — COMPLETE (2026-07-01)

[x] Typography system — eyebrow label spacing standardised to mb-4 across all sections (Process, Testimonials, BlogPreview were mb-3)
[x] Typography system — h2 bottom margin standardised to mb-4 in Process and Testimonials (was mb-3, now matches Services)
[x] Card radius — Services cards unified to rounded-2xl (was rounded-xl, now matches Process/Testimonials/Blog card family)
[x] Icon containers — Services icon containers unified to w-12 h-12 rounded-xl (was w-11 h-11 rounded-lg, now matches Process and WhyChooseUs)
[x] Button colour consistency — Process "Start Your Journey" changed to orange bg-[#C76A1B] (was navy bg-[#0B2E59]); all primary CTAs now orange across site
[x] Button weight consistency — Header desktop CTA changed to font-bold (was font-semibold); now matches all other primary CTAs
[x] Button radius consistency — ContactForm submit button changed to rounded-md (was rounded-lg); now matches all other buttons
[x] Section heading scale — TrustedPartners h2 raised to text-3xl sm:text-4xl (was text-2xl sm:text-3xl); now consistent with all other section headings
[x] Brand palette — WhyChooseUs diagonal highlight glow corrected from old gold rgba(176,141,87,0.08) to brand orange rgba(199,106,27,0.08)
[x] Build — clean, 10 static routes, zero TypeScript errors
[x] Documentation — CURRENT_STATE.md and TASKS.md updated; Footer Layout Col 4 description corrected

## BUSINESS FINANCE PAGE TEMPLATE — COMPLETE, PENDING CLIENT APPROVAL (2026-07-13)

[x] Installed lucide-react (first icon library dependency on the project; sitewide icons were previously inline SVG)
[x] Defined `BusinessFinancePageContent` content contract (`src/components/business-finance/types.ts`) — the reusable shape every Business Finance page will supply
[x] Built 11 section components (Breadcrumb, Hero, Intro, KeyBenefits, HowItWorks, Eligibility, LoanTypes, WhyChoose, Faq, RelatedSolutions, FinalCta) in `src/components/business-finance/`, each reusing the existing design system exactly (palette, Eyebrow pattern, card-lift, icon treatment, type scale)
[x] Built `Template.tsx` composing TopBar → Header → Breadcrumb → 10 content sections → Footer
[x] Wrote full placeholder content for Business Loans (`src/data/business-loans.ts`) — original copy, no fabricated stats, no FCA claims, Brand DNA voice
[x] Rebuilt `/business-loans/page.tsx` on the new template: per-page metadata, canonical, OpenGraph, Twitter card, BreadcrumbList JSON-LD schema
[x] All CTAs route to `/#contact` (page has no contact form of its own)
[x] `npm run build` — clean, 10 static routes, zero TypeScript errors
[x] Live QA in headless Chromium at 1440px (desktop) and 390px (mobile): breadcrumb, hero, all sections, FAQ accordion open/close, Related Solutions links verified, zero console errors
[x] CURRENT_STATE.md + TASKS.md updated documenting the template

**Update (2026-07-14):** Template approved by client. All 7 remaining pages were superseded by a further client instruction — see below.

## CONTACT FORM VALIDATION — COMPLETE (2026-07-13)

[x] Created `src/lib/contactFormValidation.ts` — `ContactFormData` type, per-field validators (name, businessName, phone, email, fundingType, amount, message), `validateContactForm()`
[x] Created `src/lib/contactFormSubmit.ts` — `handleSubmitValidatedForm()` submission boundary abstraction, mocked (no network call), with full Phase 2 TODO block for CRM integration
[x] Name — required, min 2 chars, rejects numbers-only
[x] Business name — required, min 2 chars
[x] Phone — required, supports UK + international (`+`, spaces, brackets, hyphens), validated by digit count (7-15) rather than a rigid pattern
[x] Email — required, format-checked, trimmed cleanly on blur
[x] Funding type + Funding amount — now required (previously optional)
[x] Message — optional, max 750 chars, live character counter
[x] Inline errors beneath each field: icon + red text (not colour alone), `aria-invalid` + `aria-describedby`, `role="alert"`
[x] Errors only shown after blur/touch or a submit attempt — never before interaction; clear live once valid
[x] Focus moves to first invalid field on failed submit; entered values always preserved
[x] Submit button disables during submission; `isSubmittingRef` guards against same-tick double-submit race
[x] Native form validation disabled (`noValidate`) so custom UI has full control
[x] No CRM/API call, no server-side validation, no CAPTCHA, no localStorage persistence, no console logging of form data (all intentional Phase 1 boundaries)
[x] `npm run build` — clean, zero TypeScript errors, 10 static routes
[x] QA in headless Chromium: empty submission, invalid email, invalid phone, numbers-only name, missing dropdowns, live error-clearing, value preservation, valid submission → success, double-submit prevention, keyboard-only navigation, mobile (390px) layout — all confirmed, zero console errors
[x] CURRENT_STATE.md, TASKS.md, CLIENT_CHANGE_REQUESTS.md updated

**Not done (explicitly out of scope, deferred to Phase 2):** CRM/API integration, server-side validation, spam protection, lead routing, consent logging, automated notifications. See `src/lib/contactFormSubmit.ts` for the itemised TODO list at the integration boundary.

## PHASE 1 BUSINESS FINANCE CONTENT — COMPLETE (2026-07-14)

Latest client instruction overrode prior scope: remove Business Loans and Working Capital entirely, build 6 new pages from supplied content instead.

[x] Deleted `/business-loans` route + `src/data/business-loans.ts` completely (no references remain anywhere)
[x] Deleted `/working-capital` route completely
[x] Created `src/data/businessFinanceData.ts` — single shared registry (slug, route, nav title, card description, icon, hero image, SEO metadata) for all 6 active products, consumed by Services.tsx, Footer.tsx, and every page's Related Solutions block
[x] Adjusted `LoanTypes.tsx` to adapt its grid to 2/3/4 items instead of a fixed 3-column layout
[x] Built full content + page for **Secured Business Loans** (`/secured-business-loans`) from client-supplied copy
[x] Built full content + page for **Merchant Cash Advance** (`/merchant-cash-advance`) from client-supplied copy
[x] Built full content + page for **Invoice Finance** (`/invoice-finance`) from client-supplied copy
[x] Built full content + page for **Asset Finance** (`/asset-finance`) from client-supplied copy
[x] Built full content + page for **Revolving Credit Facility** (`/revolving-credit-facility`) from client-supplied copy
[x] Built full content + page for **Unsecured Business Loans** (`/unsecured-business-loans`) — client's supplied file referenced a different company throughout (Capital Bridge Finance / Keystone Funding, Keystone being this project's own competitor reference site); flagged to the user, who chose to keep only the factual substance and have all copy rewritten fresh in Nexora's voice
[x] Updated `Services.tsx` — homepage Business Finance grid now reads from the shared registry, 3-column/2-row balanced layout for 6 cards (was a 4-column/2-row layout for 8)
[x] Updated `Footer.tsx` — Business Finance links now generated from the shared registry (6 links, was a stale hand-maintained list of 6 that didn't match the homepage's 8)
[x] Removed dead `src/components/ServicePage.tsx` (no longer referenced once all 6 routes moved to the full template)
[x] Fixed 6 pre-existing `@next/next/no-html-link-for-pages` lint errors (Header.tsx logo link, Hero/WhyChoose/FinalCta internal CTA links) by switching to `next/link`'s `Link` component
[x] Updated `public/sitemap.xml` — 6 active routes only, dated 2026-07-14
[x] Verified `public/robots.txt` — still correct, no changes needed
[x] `npm run build` — clean, zero TypeScript errors, 8 static routes
[x] `npm run lint` — zero errors, zero warnings
[x] Responsive QA in headless Chromium across 7 breakpoints (1920/1440/1366/1024/768/430/390px) on homepage + all 6 product pages — no horizontal scroll on any product page, no console errors anywhere
[x] Link check — all 6 homepage "Explore now" links resolve to their correct completed route; every page's Related Solutions links exclude the current page and never reference a removed page
[x] Design QA — homepage Business Finance section confirmed as a clean, balanced 2×3 grid; product pages confirmed visually consistent with the approved template (typography, spacing, cards, CTA hierarchy)
[x] CURRENT_STATE.md, TASKS.md, CLIENT_CHANGE_REQUESTS.md, SEO_PHASE1.md, PHASE1_SIGNOFF.md updated

**Found, not fixed (pre-existing, flagged for manual review):** homepage "Choose the funding route..." section image causes ~76px horizontal overflow at mobile widths (390-430px). Confirmed via diff to predate this session — left alone per explicit "do not redesign the homepage" instruction.

## LINKEDIN INTEGRATION — COMPLETE (2026-07-14)

[x] Created `src/data/socialLinks.ts` — single reusable config for LinkedIn, WhatsApp, Facebook, Instagram
[x] Updated `TopBar.tsx` to consume the shared config instead of hardcoding its own icon array
[x] Updated `Footer.tsx` to consume the shared config instead of hardcoding its own icon array
[x] Replaced the LinkedIn placeholder (`#`) with the official URL in both places: `https://www.linkedin.com/in/nexora-funding-483b6741a/?skipRedirect=true`
[x] Confirmed no other LinkedIn references existed anywhere in the project (no team/about section, no structured data, no separate mobile-nav icons)
[x] External links (href starting with `http`) get `target="_blank"` + `rel="noopener noreferrer"`; the WhatsApp placeholder correctly stays without these until it has a real URL
[x] `npm run build` + `npm run lint` — clean, zero errors, zero warnings
[x] QA in headless Chromium — LinkedIn icon in both TopBar and Footer confirmed pointing to the official URL with correct `target`/`rel`, checked on the homepage and a product page, desktop (1440px) and mobile (390px); all four social icons still render correctly
[x] No layout or design changes made — icon markup, spacing and styling are unchanged, only the data source and href moved
[x] CURRENT_STATE.md and TASKS.md updated

## PENDING

[ ] Client local review and approval before push/deploy
[ ] Upload out/ to Hostinger public_html (instructions in HOSTINGER_DEPLOYMENT_STEPS.txt)
[ ] Configure custom domain in Hostinger
[ ] Submit sitemap to Google Search Console
[ ] Client asset handoff — WhatsApp number, LinkedIn URL, Trustpilot URL, office address, OG image, testimonials, policy pages
[ ] Visual QA on real devices (mobile/tablet) after Hostinger deployment
[ ] Consider fixing the pre-existing homepage mobile horizontal-scroll issue (see above)

## PHASE 2 (FUTURE)

[ ] Form backend integration (email notifications)
[ ] Individual service/product pages
[ ] Blog CMS or static pages
[ ] Real testimonials integration
[ ] Phase 2 professional version scoping
