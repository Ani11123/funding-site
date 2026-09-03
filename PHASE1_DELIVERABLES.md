# Nexora Funding Limited — Website Phase 1 Deliverables

**Prepared:** 14 July 2026
**Status:** Complete, ready for client review and deployment
**Purpose:** This document is the single source of truth for what has been delivered in Phase 1. Keep it alongside the handover ZIP files — anyone picking up future work should start here.

---

## 1. What This Phase Covered

A complete, premium lead-generation website for Nexora Funding Limited: a homepage, six fully-written Business Finance product pages, a validated enquiry form, and full technical/SEO groundwork — built and packaged ready for hosting.

This is a **static website**: fast, secure, and does not require a database or backend server to run.

---

## 2. Pages Delivered

### Homepage
One page covering the full visitor journey:

| Section | Purpose |
|---|---|
| Top bar | Trustpilot reference + social links (LinkedIn, Facebook, Instagram, WhatsApp) |
| Header | Logo, navigation, "Speak to Advisor" call-to-action |
| Hero | Headline, tagline, primary calls-to-action |
| Trust bar | Key value statements (funding range, coverage, response time) |
| Business Finance | The 6 product cards (below), each linking to its full page |
| How It Works | 4-step process explanation |
| Why Choose Us | Brand positioning and trust-building |
| Customer Feedback | Placeholder testimonials (real ones pending — see Section 6) |
| Blog Preview | Placeholder articles (real content pending — see Section 6) |
| Trusted Partners | Lender logo marquee (14 lenders) |
| Contact | Full enquiry form (see Section 3) |
| Footer | Navigation, social links, compliance badges, newsletter signup |

### Business Finance Pages (6)

Each page has a hero, an explanation of the product, key features, a 4-step process, suitability guidance, product-specific detail, an FAQ section, related-product suggestions, and a closing call-to-action — all in Nexora's own voice, written in UK business English.

| Page | Live route |
|---|---|
| Secured Business Loans | `/secured-business-loans` |
| Unsecured Business Loans | `/unsecured-business-loans` |
| Merchant Cash Advance | `/merchant-cash-advance` |
| Invoice Finance | `/invoice-finance` |
| Asset Finance | `/asset-finance` |
| Revolving Credit Facility | `/revolving-credit-facility` |

All six pages share one visual template, so they feel like one coherent product family. Every "Explore now" link on the homepage, and every "Related Finance Solutions" link on each page, has been tested and confirmed working.

**Note:** Business Loans and Working Capital were removed at your request — those routes no longer exist and carry no links anywhere on the site.

---

## 3. Contact / Enquiry Form

The homepage enquiry form validates every field before it can be submitted:

- Full name, business name, phone, email, funding type and funding amount are all required
- Phone accepts UK and international formats
- Clear, accessible error messages appear under each field if something's missing or invalid
- A success message confirms once a valid enquiry is submitted
- The form cannot be submitted twice by accident

**Important:** the form does not yet send enquiries anywhere (no email, no CRM). It is fully built and validated, ready to be connected to a CRM or inbox in Phase 2 — see Section 7.

---

## 4. Branding & Design

- Full Nexora brand palette, typography (Montserrat/Inter) and visual language applied consistently across every page
- Logo, favicon, and compliance badges (GDPR/ICO) in place
- Fully responsive — tested at 7 screen sizes from large desktop (1920px) down to small mobile (390px)
- Social links: **LinkedIn is now live** (see Section 8), Facebook and Instagram are live, WhatsApp remains a placeholder pending your number

---

## 5. Technical Summary

- Built with Next.js, TypeScript and Tailwind CSS
- Exported as a fully static site — works on ordinary web hosting, no server setup required
- Clean build with zero errors and zero warnings
- Unique page titles, descriptions and search-engine metadata on every page
- Sitemap and robots.txt included and correctly configured
- No tracking scripts, no analytics installed yet (see Section 7)

---

## 6. Still Needed From You

The site is fully functional without these, but they'll complete the picture:

- [ ] WhatsApp number (to replace the placeholder link)
- [ ] LinkedIn — ✅ done
- [ ] Trustpilot business profile URL
- [ ] Confirmed office address (for future map/contact detail use)
- [ ] Real customer testimonials (currently placeholder examples)
- [ ] Blog articles (currently placeholder examples)
- [ ] Privacy Policy, Terms of Use and Complaints procedure text
- [ ] A social-share image (1200×630px) for links shared on social media
- [ ] FCA reference number, if applicable
- [ ] Confirmation of your final domain name (currently configured for `nexorafunding.co.uk`)

None of these block going live today — they can be added at any time without rebuilding the site.

---

## 7. Phase 2 — Future Scope (Not Built Yet)

- Connecting the enquiry form to a CRM or inbox (HubSpot, Zoho, Salesforce, Pipedrive, or a custom system — your choice)
- Server-side form security and spam protection
- Google Analytics / tracking setup
- Real blog content and testimonials
- Any additional Business Finance pages you'd like added later

---

## 8. What Changed Most Recently

- **LinkedIn integration (14 July 2026):** the official Nexora LinkedIn link (`https://www.linkedin.com/in/nexora-funding-483b6741a/?skipRedirect=true`) now appears wherever social icons are shown (top bar and footer, every page), opening correctly in a new tab.
  - **Please double-check this is the correct profile** before going live — it is a personal-profile-style LinkedIn URL (`/in/...`) rather than a LinkedIn Company Page (`/company/...`). If you have (or want) an official Company Page instead, just send the URL and it's a one-line update.

---

## 9. What You've Been Given

Two files accompany this document:

1. **`nexora-hostinger-deployment.zip`** — the finished website, ready to upload to your hosting. See `HOSTINGER_DEPLOYMENT_STEPS.txt` for exact steps.
2. **`nexora-source-code-handover.zip`** — the full project source code, for any developer doing future work on the site.

---

## 10. Sign-Off Checklist

- [x] Homepage complete
- [x] 6 Business Finance pages complete
- [x] Contact form built and validated
- [x] LinkedIn link live and correct format confirmed
- [x] SEO foundations in place
- [x] Responsive design tested across devices
- [x] Site builds cleanly with no errors
- [ ] Client review and approval
- [ ] Domain and hosting confirmed live (see Hostinger guide)
