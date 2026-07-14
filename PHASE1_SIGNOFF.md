# PHASE 1 SIGN-OFF

Status as of 2026-07-14. Internal document — not included in client-facing handover packages.

---

## What's complete

- Homepage (approved, untouched this round)
- Business Finance Page Template (approved by client)
- 6 Business Finance pages live on the approved template, each with full page-specific content, unique SEO metadata and a BreadcrumbList schema:
  - Secured Business Loans — `/secured-business-loans`
  - Unsecured Business Loans — `/unsecured-business-loans`
  - Merchant Cash Advance — `/merchant-cash-advance`
  - Invoice Finance — `/invoice-finance`
  - Asset Finance — `/asset-finance`
  - Revolving Credit Facility — `/revolving-credit-facility`
- Business Loans and Working Capital removed completely (route, data, and every reference across nav, footer, homepage cards, related-solutions blocks and sitemap)
- Shared `businessFinanceData.ts` registry — homepage cards, footer links and every page's related-solutions block all read from one file; adding, removing or reordering a product no longer requires touching more than two files (the registry + that product's content file)
- Sitemap updated to the 6 active routes only; robots.txt verified correct
- `npm run build` and `npm run lint` both clean — zero errors, zero warnings, 8 static routes
- Responsive QA across 7 breakpoints (1920 / 1440 / 1366 / 1024 / 768 / 430 / 390px) on the homepage and all 6 product pages
- Link audit — every homepage "Explore now" card resolves to its correct completed page; every page's Related Finance Solutions section links only to other completed pages, never to itself or to a removed page

## Content provenance flag (resolved)

The client-supplied "Unsecured Loans.rtf" file referred throughout to a different company — "Capital Bridge Finance" in its tagline, then "Keystone Funding" / "Keystone Business Finance" in the body copy and FAQs. Keystone Funding (keystonefunding.co.uk) is this project's own listed competitor/reference site in PROJECT_CONTEXT.md, so this content reads as having been drafted from, or copy-pasted from, the competitor's own site without the brand name ever being fully swapped over.

This was surfaced to the user before anything was published. Decision taken: keep only the factual substance from the file (loan amounts £10,000–£2,000,000, fixed rates from 6.9%, funds within 24 hours of approval, open to all sectors, the 4-step process, and the FAQ facts) and have every sentence rewritten fresh in Nexora's own voice. No phrasing, sentence structure or self-reference from the supplied file was reused. The result is `src/data/unsecured-business-loans.ts`.

**Recommendation:** ask the client to confirm this was an attachment mix-up (a draft copywriter's file, or a competitor-research reference accidentally sent) rather than intended content, so it doesn't recur for future pages.

## Known issue, not fixed this round

The homepage's "Choose the funding route that fits your business" section image causes approximately 76px of horizontal overflow at mobile widths (390–430px) — the image container doesn't respect its parent's width constraint at that breakpoint. Confirmed via `git diff` to predate this session (only the cards array and grid were touched today). Left alone per the explicit "do not redesign the homepage" instruction. Recommended for a small, contained fix in a future session focused on the homepage.

## Pending / Phase 2

- CRM/API integration for the contact form (HubSpot, Zoho, Salesforce, Pipedrive or custom — no provider chosen yet)
- Server-side form validation, spam protection, lead routing, GDPR consent logging, automated notifications
- Client asset handoff still outstanding: WhatsApp number, LinkedIn URL, Trustpilot profile URL, confirmed office address for any future location page, OG image (1200×630), real testimonials, blog content, Privacy Policy / Terms / Complaints page copy, FCA reference number (if applicable)
- Domain confirmation (metadataBase / canonical / sitemap currently point at `nexorafunding.co.uk` pending confirmation)
- Google Search Console / Bing Webmaster sitemap submission (post-deployment)
- Real licensed photography to replace Unsplash placeholders across the site
- The homepage mobile horizontal-scroll issue noted above

## Sign-off readiness

Ready for the client's local review:
- [x] Homepage complete
- [x] 6 Business Finance pages complete, content-approved-source-based
- [x] 2 previously-planned services (Business Loans, Working Capital) cleanly removed, no broken links, no thin pages left behind
- [x] SEO complete for all 6 active pages
- [x] Build clean, static export verified
- [x] Responsive QA passed
- [ ] Client to review packages locally before any push or deployment (per instruction, nothing has been pushed or deployed)
