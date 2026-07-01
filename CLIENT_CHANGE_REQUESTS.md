# CLIENT_CHANGE_REQUESTS.md

## Latest Phase 1 Changes

1. Header

* Remove Home menu item.
* Logo should act as Home button.
* Header navigation should only include:

  * Funding Options
  * Contact
* Only one main CTA button:

  * Speak to Advisor
* Contact menu should scroll to contact form.
* Funding Options should scroll to funding options section.
* No dropdown required for Funding Options.
* Add simple animation/hover only.

2. Sub Header

* Add top sub-header above main header.
* Include contact/social style similar in purpose to Keystone.
* Use original content unless client provides exact approved copy.
* Add social media icons.
* Use placeholder links until final social links are provided.

3. Section Order
   Required order:

* Hero
* Funding Options
* How It Works
* Why Choose Us
* Customer Feedback
* Blog Section
* Trusted Partners / Lenders
* Contact Form
* Footer

4. How It Works

* Keep only 4 steps.
* Place above Why Choose Us.
* Each step should be shown as an individual showcase card/section.

5. Funding Options

* No dropdown.
* Use animation/hover only.
* Keep funding option cards visible on homepage.

6. Newsletter

* Footer should include newsletter subscription link only.
* No full newsletter form required.

7. Footer

* Footer left side should include a brief company description.
* Include useful links and contact placeholders.

8. Lenders List

* Client will provide lender list.
* Keep lender/lender logo section above footer.
* Use placeholders until final lender names/logos are provided.

9. Blog Section

* Add blog preview section on homepage.
* Inspired by Keystone-style homepage blog placement, but use original layout/copy.

10. Customer Feedback

* Add customer feedback/testimonial section on homepage.
* Use placeholder testimonials until client provides real testimonials.

11. Trusted Partners Carousel

* Add “Our Trusted Partners” style section.
* Use carousel/marquee animation.
* Do not copy Keystone images/logos.
* Use placeholder cards/logos until client provides approved assets.

12. Images

* Remove current temporary images or move them aside.
* Do not rely on current images as final.
* Use clean placeholders with TODO comments until client provides licensed images on Monday.

13. Pending Assets

* SVG logo
* PNG logo
* Favicon
* Licensed images
* Lender list
* Lender logos
* Client testimonials
* Blog content
* Final social links
* Final phone/email/address

---

## Phase 1 Final Contact Section Refinement (2026-07-01)

Applied following client sign-off session:

**UX Improvements**
- ContactForm heading updated: "Speak with a Commercial Finance Advisor." — more direct, advisor-led, conversion-focused
- Supporting copy updated: "Whether you're exploring funding for growth, equipment, property or working capital, our experienced advisors are here to help you find the right solution." — consultative, plain English, lists real use cases
- Removed the standalone "Find Our Office / LocationSection" below ContactForm — eliminated unnecessary scroll distance and page distraction
- Visual hierarchy rationalised: Heading → Copy → Phone / WhatsApp / Email → Geo card → Enquiry form

**Conversion Improvements**
- Left column copy is now concise and advisory rather than generic
- Contact options (Phone, WhatsApp, Email) retain prominence above the geo card
- White form card remains dominant visual element on the right
- All competing secondary elements removed — single clear CTA: submit the enquiry form

**Geo-Tagging Implementation**
- Compact geo card sits below the three contact options on the left column
- Label row: "Serving Businesses Across the UK" with globe icon
- 88px map placeholder area (CSS grid texture, "Map — coming soon" label)
- Supporting text: "Our advisors support businesses nationwide. Office details will be confirmed shortly."
- Full TODO comment block inside the placeholder div for the Google Maps iframe

**Remaining TODOs (Google Maps)**
- ~~Replace geo card placeholder~~ ✅ Done — real Google Maps iframe now live in ContactForm
- Office: Office 19768, 182-184 High Street North, East Ham, London E6 2JA
- Embed URL: `https://maps.google.com/maps?q=182-184+High+Street+North%2C+East+Ham%2C+London+E6+2JA&t=m&z=16&ie=UTF8&iwloc=B&output=embed`

---

## Round 4 Polish (2026-07-01)

**Copy cleanup**
- All em dashes (—) replaced with commas or full stops across all rendered components: TrustBar, Process, WhyChooseUs, Services, Testimonials, unsecured-business-loans/page.tsx
- Dropdown option: "Not Sure — Need Advice" → "Not sure yet, need advice"
- ContactForm supporting paragraph shortened and made more direct

**Contact section**
- Confirmed phone: `020 3432 3492` (href: `tel:+442034323492`)
- Confirmed email: `office@nexorafunding.co.uk`
- Removed 3 styled contact cards (Phone, WhatsApp, Email) from ContactForm left column
- Added single-line contact: `020 3432 3492 · office@nexorafunding.co.uk`
- Replaced geo card placeholder with real Google Maps iframe (no API key, legacy embed format)
- Office address embedded: Office 19768, 182-184 High Street North, East Ham, London E6 2JA

**Footer**
- Col 1 description rewritten to 3 clean lines, no em dashes, no phone/email links
- GDPR/ICO badges moved from copyright bar to Col 4 (below newsletter button, above social icons)
- Copyright bar simplified (removed GDPR/ICO, removed duplicate "Registered in England & Wales")
