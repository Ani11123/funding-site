# CURRENT STATE

Status: Footer Trust Reorder + Spacing — Complete (2026-07-01)
Build: ✅ Clean (static export, 10 routes)
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
- `public/sitemap.xml`: homepage + 8 service pages with lastmod 2026-07-01

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
Col 4: Stay Informed blurb + newsletter button + GDPR/ICO badges + 4 social icons

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

## Service Pages (8 routes)

All placeholder pages using shared `ServicePage` component:
/business-loans · /asset-finance · /invoice-finance · /merchant-cash-advance
/secured-business-loans · /unsecured-business-loans · /working-capital · /revolving-credit-facility

Each has unique metadata title and description. Phase 2 will add full content.

---

## Content Rules

- No unverified statistics or made-up claims
- No FCA regulated claims (awaiting client's FCA reference number)
- No fake testimonials (clearly marked as TODO placeholders)
- No copyrighted or competitor imagery (all Unsplash royalty-free, marked for replacement)
- Original copywriting only
- Phone placeholder: 0000 000 0000
- Email: office@nexorafunding.co.uk (confirmed by client)
- Social links: Facebook + Instagram live; LinkedIn + WhatsApp placeholder (#) until URLs provided

---

## Contact Details (confirmed)

- Phone: `020 3432 3492` (href: `tel:+442034323492`) — applied in ContactForm
- Email: `office@nexorafunding.co.uk` — applied in ContactForm
- Office: Office 19768, 182-184 High Street North, East Ham, London E6 2JA — Google Maps embed live in ContactForm

## Pending Assets (from client)

- WhatsApp number → update wa.me/ URLs in TopBar + Footer
- LinkedIn URL → update href in TopBar + Footer
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
