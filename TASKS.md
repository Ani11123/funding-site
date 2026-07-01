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

## PENDING

[ ] Upload out/ to Hostinger public_html
[ ] Configure custom domain in Hostinger
[ ] Submit sitemap to Google Search Console
[ ] Client asset handoff — WhatsApp number, LinkedIn URL, Trustpilot URL, phone number, office address + geo coordinates (to complete geo card Google Maps embed), OG image, testimonials, policy pages
[ ] Replace ContactForm geo card 88px placeholder div with Google Maps iframe once office address is confirmed
[ ] Visual QA on real devices (mobile/tablet) after Hostinger deployment

## PHASE 2 (FUTURE)

[ ] Form backend integration (email notifications)
[ ] Individual service/product pages
[ ] Blog CMS or static pages
[ ] Real testimonials integration
[ ] Phase 2 professional version scoping
