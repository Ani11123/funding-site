# CURRENT STATE

Status:
Phase 1 — Asset Integration Complete (lender logos, hero photo, conditional logo, build verified)

## Official Brand Palette (Nexora Funding Limited)

Primary Navy:    #0B2E59
Dark Navy:       #082347
Darkest:         #061830
Secondary:       #4F6D8A
Light Grey:      #F4F5F7  (background)
Charcoal:        #333333  (body text)
Orange (accent): #C76A1B  (primary buttons, links, CTA highlights, icons)
Orange hover:    #a85918

Fonts:
  Headings: Montserrat (600/700/800/900) via Google Fonts CSS import
  Body:     Inter (300–900) via Google Fonts CSS import

## Page Structure (top to bottom)

1. TopBar — slim #082347 bar: "See our reviews on Trustpilot" | social icons
2. Header — white sticky: LogoMark (text fallback → auto-upgrades to logo.png) | Funding Options | Contact | "Speak to Advisor" orange CTA
3. Hero — London financial district photo (Unsplash, royalty-free), dark navy overlay, slow 22s zoom, centred single-column
4. TrustBar — white floating card (-mt-10 overlap): £10K–£5M, Multiple Options, Quick Response, UK Wide
5. Services (Funding Options) — 8 cards in 4×2 grid, bg #F4F5F7, hover lift + icon colour change
6. Process (How It Works) — 4 standalone premium cards, bg white, step number watermark
7. WhyChooseUs — standalone full-width #0B2E59 section, 6 feature tiles in 3-col grid + pull quote
8. Testimonials — 3 placeholder cards, bg #F4F5F7 (TODO: real testimonials)
9. BlogPreview — 3 placeholder article cards, bg white (TODO: real content)
10. TrustedPartners — continuous CSS marquee, 14 REAL lender logo PNGs, 55s animation, fade edges
11. ContactForm — dark #0B2E59 section, 2-col: info panel left + white form card right
12. Footer — dark #082347 bg, 4-col: LogoMark + tagline + contacts | Funding links | Company links | Newsletter link + socials

## Logo Implementation

LogoMark component (`src/components/LogoMark.tsx`):
- Tries to load /assets/logo/logo.png (light) or /assets/logo/logo-white.png (dark)
- On error (file not found) → falls back to styled brand text "NEXORA / FUNDING LIMITED"
- Used in: Header (light mode), Footer (dark mode)
- No code changes required when real logo is added — drop PNG into public/assets/logo/

Generated SVG logos REMOVED from public/assets/logo/ (per client instruction)
Favicon removed from metadata (per client instruction — browser default used until real favicon provided)

## Lender Logos (Integrated)

Location: public/assets/lenders/
Files: 365finance.png, capify.png, electcapital.png, fleximize.png, fundingcircle.png,
       bizcap.png, iwoca.png, lendingcrowd.png, lenkie.png, mcl.png,
       momentafinance.png, swiftfund.png, together.png, youlend.png

Source: lenders_logos/ folder (client-provided)
Component: TrustedPartners.tsx uses Next.js Image with object-contain
Easy update: add/remove entries in the `partners` array in TrustedPartners.tsx

## Hero Image

Source: Unsplash (royalty-free) — London financial district at dusk
URL: https://images.unsplash.com/photo-1486325212027-8081e485255e
Implementation: Next.js <Image> with fill + object-cover
Overlay: directional gradient to-bottom 48%→58%→65%→72% (image clearly visible)
Animation: 22s slow zoom preserved (animate-hero-zoom class on wrapper div)
next.config.ts: remotePatterns allows images.unsplash.com

## Supporting Section Images (subtle backgrounds)

All at very low opacity (5–7%) — add depth and warmth without distracting from content.
TODO comments mark every image for licensed replacement when client provides assets.

- WhyChooseUs bg: photo-1600880292203-757bb62b4baf (professional office meeting, 6% opacity)
- ContactForm bg:  photo-1454165804606-c3d57bc86b40 (business advisory, 7% opacity)
- Footer bg:       photo-1486325212027-8081e485255e (same as hero, 5% opacity)

## Animations

- Hero background: slow 22s zoom in/out (CSS keyframe heroZoom on Next.js Image wrapper)
- Cards: hover lift effect (card-lift class)
- Header: shadow on scroll (useEffect)
- Page load: fade-in-up on hero content (animate-fade-in)
- TrustedPartners: 55s CSS marquee (14 logos × 2), pause on hover
- Header nav: underline scale-x animation on hover (orange)

## Content Rules Observed

- No unverified statistics
- No FCA claims in body copy
- No fake testimonials (clearly marked as TODO placeholders)
- Lender logos provided by client (explicit asset provision)
- Hero image: royalty-free Unsplash (London financial district)
- Phone placeholder: 0000 000 0000 (Footer only)
- Email placeholder: hello@nexorafunding.co.uk
- Social links all placeholder (#) until client provides URLs
- Trustpilot link placeholder (#) until client provides profile URL

## Removed From Page (components retained)

- CTA Banner (component file kept, not rendered)
- FAQ (component file kept, not rendered — can restore for Phase 2)

## Pending Assets Required from Client

- Real logo PNG (logo.png + logo-white.png → drop into public/assets/logo/ — no code changes needed)
- Favicon (browser default until client provides; easy to add once logo PNG exists)
- Apple touch icon PNG
- Licensed section images (WhyChooseUs, Contact — CSS sections currently, can enhance)
- Real testimonials
- Real blog articles
- Final phone number
- Social media URLs
- Trustpilot profile URL
- Newsletter provider URL
- FCA reference number (if applicable)
- Privacy Policy, Terms, Complaints documents
- Registered company number

## Next Actions

1. `npm run dev` → review on localhost:3000
2. Device QA — mobile + tablet
3. Client provides real logo PNGs → drop into public/assets/logo/
4. Client provides Trustpilot URL, social URLs
5. Vercel deployment
