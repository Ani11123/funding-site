# ASSETS RECEIVED

Log of all assets provided by the client and integrated into the project.

---

## Lender / Partner Logos (2026-06-29)

14 PNG files received, integrated into `public/assets/lenders/`:

| File | Lender |
|------|--------|
| 365finance.png | 365 Finance |
| bizcap.png | Bizcap |
| capify.png | Capify |
| electcapital.png | Elect Capital |
| fleximize.png | Fleximize |
| fundingcircle.png | Funding Circle |
| iwoca.png | iwoca |
| lendingcrowd.png | LendingCrowd |
| lenkie.png | Lenkie |
| mcl.png | MCL |
| momentafinance.png | Momenta Finance |
| swiftfund.png | Swiftfund |
| together.png | Together |
| youlend.png | YouLend |

Used by: `src/components/TrustedPartners.tsx`

---

## Brand Logo Assets (2026-06-30)

Received in `nexora-logo/` folder. Integrated into `public/assets/logo/`:

| File | Usage |
|------|-------|
| nexora-logo.svg | Full SVG brand mark (not in use — header uses cropped variant) |
| nexora-logo-300w.png | Small PNG variant |
| nexora-logo-600w.png | Medium PNG variant |
| nexora-logo-1200w.png | Large PNG variant |
| nexora-icon.svg | Icon-only mark (used as source for favicon.svg artwork) |
| nexora-header-logo.svg | Cropped variant (icon + NEXORA + FUNDING LIMITED, no tagline) |

Header / Footer: `nexora-header-logo.svg` with viewBox `"0 121 2534 1353"` (tagline excluded)
Dark mode: CSS `brightness(0) invert(1)` filter (no separate white variant provided)

---

## Favicon Assets (2026-06-30)

Received and placed directly in `public/`:

| File | Purpose |
|------|---------|
| favicon.ico | Primary favicon (multi-size ICO) |
| favicon-16x16.png | 16×16 fallback |
| favicon-32x32.png | 32×32 fallback |
| favicon-48x48.png | 48×48 fallback |
| apple-touch-icon.png | iOS home screen icon (180×180) |
| android-chrome-192x192.png | Android chrome icon |
| android-chrome-512x512.png | Android chrome large icon |
| site.webmanifest | PWA manifest |

Custom `public/favicon.svg` was created (not client-provided) to serve modern browsers with
the Nexora icon artwork inlined as SVG paths for dark-mode compatibility.

---

## Compliance Badges (2026-06-30)

Received and placed in `public/assets/compliance/`:

| File | Actual Format | Usage |
|------|--------------|-------|
| GDPR.png | WebP (despite .png extension) | GDPR Compliant badge in Footer |
| ICO.png | WebP (despite .png extension) | ICO Registered badge in Footer |

Both rendered with `brightness(0) invert(1)` CSS filter → white on dark footer background.

---

## Social / Contact URLs (partial)

| Channel | Status | Value |
|---------|--------|-------|
| Facebook | ✅ Received | https://www.facebook.com/profile.php?id=61591289801041 |
| Instagram | ✅ Received | https://www.instagram.com/nexorafunding/ |
| Email | ✅ Confirmed | office@nexorafunding.co.uk |
| WhatsApp | ⏳ Pending | — |
| LinkedIn | ⏳ Pending | — |
| Trustpilot | ⏳ Pending | — |
| Phone | ⏳ Pending | Currently placeholder: 0000 000 0000 |

---

## Not Yet Received

- Office address and geo coordinates (for ContactForm Google Maps embed)
- OG image (1200×630px for social sharing previews)
- Real testimonials (3 minimum for homepage)
- Service page content (for all 8 service pages)
- Blog articles
- Privacy Policy / Terms of Use / Complaints documents
- FCA reference number (if applicable)
- Newsletter signup provider URL
- Licensed photography for section backgrounds (currently Unsplash placeholders)
