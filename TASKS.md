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

## PENDING

[ ] Client provides real logo PNG → drop into public/assets/logo/logo.png + logo-white.png
[ ] Device QA — mobile + tablet testing
[ ] Client asset handoff — testimonials, blog articles, social URLs, Trustpilot URL
[ ] Vercel deployment

## PHASE 2 (FUTURE)

[ ] Form backend integration (email notifications)
[ ] Individual service/product pages
[ ] Blog CMS or static pages
[ ] Real testimonials integration
[ ] Favicon generation from real logo
[ ] Phase 2 professional version scoping
