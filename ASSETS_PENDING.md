# ASSETS PENDING

All items below are required from the client before final production launch.
Search the codebase for "// TODO" to locate every placeholder in the code.

---

## BRANDING — LOGO

- [ ] Real logo PNG — light version → drop in: public/assets/logo/logo.png
- [ ] Real logo PNG — dark/white version → drop in: public/assets/logo/logo-white.png

  ↳ No code changes required. LogoMark component auto-displays logo once PNG files exist.
  ↳ Header uses logo.png (light), Footer uses logo-white.png (dark).

- [ ] Favicon — generate from real logo once PNG is available
  ↳ Currently: browser default favicon (no custom favicon set — per client instruction)
  ↳ When logo.png is ready, export 32×32 ICO and add to public/ and layout.tsx

- [ ] Apple touch icon PNG (180×180 from real logo)
- [ ] logo.png for OG image / social sharing meta tags

Generated SVG logos REMOVED from public/assets/logo/ — directory is now empty.

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
