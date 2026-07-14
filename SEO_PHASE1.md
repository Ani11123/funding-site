# SEO — PHASE 1

Implementation log and checklist for Phase 1 on-page SEO.

---

## Status: ✅ Updated — 6 Business Finance pages live with unique SEO (2026-07-14)

---

## Metadata (layout.tsx)

| Field | Value |
|-------|-------|
| Title | Nexora Funding Limited \| Commercial Finance for UK Businesses |
| Description | Connecting UK businesses with trusted commercial finance solutions through expert, advisor-led funding support. Business loans, invoice finance, asset finance and more. |
| Keywords | business finance UK, commercial finance, business loans, invoice finance, asset finance, merchant cash advance, working capital, SME funding, Nexora Funding |
| metadataBase | https://nexorafunding.co.uk ⚠️ TODO: confirm domain |
| OG title | (same as title) |
| OG type | website |
| OG locale | en_GB |
| OG siteName | Nexora Funding Limited |
| Twitter card | summary_large_image |
| Canonical | https://nexorafunding.co.uk ⚠️ TODO: confirm domain |
| robots | index: true, follow: true |
| themeColor | #0B2E59 |

---

## Crawling & Indexing

### robots.txt (`public/robots.txt`)
```
User-agent: *
Allow: /
Sitemap: https://nexorafunding.co.uk/sitemap.xml
```
⚠️ TODO: Update Sitemap URL with confirmed production domain.

### sitemap.xml (`public/sitemap.xml`)
Includes homepage + 6 active Business Finance pages (updated 2026-07-14). Business Loans and Working Capital routes were removed and are not in the sitemap. All priority and changefreq values set.
⚠️ TODO: Update all `<loc>` URLs with confirmed production domain.
⚠️ TODO: Submit to Google Search Console and Bing Webmaster Tools after deployment.

---

## Image Alt Text Audit

| Component | Image | Alt Text | Status |
|-----------|-------|----------|--------|
| Hero.tsx | Background photo | `""` (decorative) | ✅ Correct |
| Services.tsx | Section image | `"Professional advisor reviewing business finance options with a UK business owner"` | ✅ Good |
| WhyChooseUs.tsx | Background photo | `""` (decorative) | ✅ Correct |
| ContactForm.tsx | Background photo | `""` (decorative) | ✅ Correct |
| TrustedPartners.tsx | Lender logos | Partner label name (e.g. "Funding Circle") | ✅ Good |
| Footer.tsx | GDPR badge | `"GDPR Compliant"` | ✅ Good |
| Footer.tsx | ICO badge | `"ICO Registered"` | ✅ Good |
| LogoMark.tsx | Logo | `"Nexora Funding Limited"` | ✅ Good |

---

## Heading Hierarchy Audit

| Page | h1 | h2 | h3 |
|------|----|----|----|
| Homepage | "The Right Funding. The Right Time." (Hero) | Services, WhyChooseUs, ContactForm, TrustedPartners, Process, Footer cols | Service cards, form heading |
| Business Finance pages (×6) | Hero heading (e.g. "Larger Facilities. Lower Rates. Strategic Growth.") | One per template section (Intro, Key Features, How It Works, Is This the Right Fit, product-specific cards, Why Choose Nexora, FAQs, Related Finance Solutions, Final CTA) | Card/step/FAQ titles |

h1 appears once per page. h2 used for major sections. h3 for sub-sections. ✅
Each of the 6 Business Finance pages also carries a BreadcrumbList JSON-LD schema (Home → Business Finance → page).

---

## Pending SEO Tasks (Phase 2)

- [ ] Add OG image (1200×630 JPG) to `public/` and reference in layout.tsx
- [ ] Update metadataBase + canonical with confirmed production domain
- [ ] Submit sitemap.xml to Google Search Console
- [x] ~~Add per-page metadata to each service page (unique descriptions)~~ — done for all 6 active pages (2026-07-14)
- [ ] Set up Google Analytics / GA4 tracking
- [x] ~~Consider structured data (BreadcrumbList schema)~~ — live on all 6 Business Finance pages (2026-07-14)
- [x] ~~Build out service page content (currently placeholder) for long-tail keyword targeting~~ — done for the 6 active pages; Business Loans and Working Capital removed rather than left as thin placeholder content (client instruction)
- [ ] Add blog content for topical authority in commercial finance
- [ ] Monitor Core Web Vitals after deployment

---

## Notes

- All Unsplash images include `?auto=format` for WebP serving and `q=` parameters for quality control.
- Hero image uses `priority` prop (preloaded in `<head>`).
- Each of the 6 Business Finance pages has a unique `<title>`, meta description, canonical URL and OpenGraph tags via its `page.tsx` metadata export. **No Twitter card metadata** on these pages, explicit client instruction this round (Twitter metadata remains only on the homepage via layout.tsx, untouched).
- No `noindex` directives anywhere — all 6 active pages are indexable. Business Loans and Working Capital pages no longer exist rather than being noindexed placeholders.
