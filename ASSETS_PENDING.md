# ASSETS PENDING

All items below are required from the client before final production launch.
Search the codebase for "// TODO" to locate every placeholder in the code.

---

## BRANDING — LOGO ✓ INTEGRATED (2026-06-30)

All production branding assets have been integrated from the nexora-logo/ folder.

Files in public/assets/logo/:
  nexora-logo.svg         ← PRIMARY logo (used in Header + Footer)
  nexora-logo-300w.png    ← fallback PNG (300px wide)
  nexora-logo-600w.png    ← fallback PNG (600px wide)
  nexora-logo-1200w.png   ← fallback PNG (1200px wide)
  nexora-icon.svg         ← standalone brand mark (available for use)

Favicons in public/:
  favicon.ico, favicon-16x16.png, favicon-32x32.png, favicon-48x48.png
  apple-touch-icon.png, android-chrome-192x192.png, android-chrome-512x512.png
  site.webmanifest

LogoMark.tsx:
  - Header (light): nexora-logo.svg at full colour
  - Footer (dark): nexora-logo.svg with CSS filter brightness(0) invert(1) → all-white
  - Fallback: styled text "NEXORA / FUNDING LIMITED" on image load error

layout.tsx:
  - Favicon icons array (ICO + 3 PNG sizes)
  - Apple touch icon
  - site.webmanifest linked
  - themeColor: #04244A via Viewport export

- [ ] OG image — add nexora-logo.svg or branded image to openGraph.images in layout.tsx once confirmed

---

## CONTACT DETAILS

- [ ] Final phone number → update in: Footer.tsx, ContactForm.tsx (currently: 0000 000 0000)
- [ ] Confirm email address: hello@nexorafunding.co.uk → update in: Footer.tsx, ContactForm.tsx
- [ ] Business registered address
- [ ] Registered company number (Companies House)
- [ ] FCA reference number (if regulated → add to footer legal bar + FAQ)

---

## SOCIAL MEDIA URLS

- [ ] LinkedIn profile URL (replaces # in TopBar + Footer)
- [ ] Twitter / X profile URL (replaces # in TopBar + Footer)
- [ ] Facebook page URL (replaces # in TopBar + Footer)
- [ ] Instagram profile URL (replaces # in TopBar)

---

## TRUSTPILOT

- [ ] Trustpilot business profile URL → replace # in TopBar.tsx
  ↳ Currently shows: "See our reviews on Trustpilot" linking to #

---

## LENDER LOGOS — INTEGRATED ✓

All 14 lender logos are now live in TrustedPartners marquee.

Location: public/assets/lenders/
Files:    365finance.png, capify.png, electcapital.png, fleximize.png, fundingcircle.png,
          bizcap.png, iwoca.png, lendingcrowd.png, lenkie.png, mcl.png,
          momentafinance.png, swiftfund.png, together.png, youlend.png

To update: replace PNG files in public/assets/lenders/
To add more: add PNG file + new entry in `partners` array in TrustedPartners.tsx

---

## IMAGERY

- [ ] Hero image: currently using royalty-free Unsplash (London financial district).
  Replace with licensed client-approved image when available.
  Update the src URL in Hero.tsx (line with images.unsplash.com).

- [ ] Blog article featured images ×3 (or more as articles grow)
  → Currently: CSS gradient placeholders in BlogPreview.tsx (TODO comment present)

---

## CONTENT

- [ ] Real client testimonials ×3 minimum (name/initials, role, company, location, quote)
  → Currently: anonymised placeholder quotes in Testimonials.tsx (TODO comment present)

- [ ] Blog articles ×3 minimum (title, excerpt, published date, category, body, URL)
  → Currently: placeholder articles in BlogPreview.tsx (TODO comment present)

- [ ] Final "About" / company summary copy (if different from current footer text)
- [ ] Legal disclaimer text (if required for FCA compliance)

---

## LEGAL PAGES

- [ ] Privacy Policy document → linked from Footer + ContactForm (currently href="#")
- [ ] Terms of Use document → linked from Footer (currently href="#")
- [ ] Complaints procedure document → linked from Footer (currently href="#")
- [ ] Cookie policy (if required by ICO)

---

## NEWSLETTER

- [ ] Newsletter provider account (Mailchimp / ConvertKit / Klaviyo etc.)
- [ ] Newsletter signup URL → replace # in Footer "Subscribe to Newsletter" link
  → Currently: plain link to # (no form — per client request)

---

## NOTES

Placeholder phone:   0000 000 0000 — update in Footer.tsx, ContactForm.tsx
Placeholder email:   hello@nexorafunding.co.uk — confirm this is the real address
Social links:        all # — update in TopBar.tsx, Footer.tsx
Trustpilot link:     # — update in TopBar.tsx

Blog + testimonial content: marked // TODO in component files.
Logo placeholder: automatically upgrades when logo.png / logo-white.png are placed in public/assets/logo/
