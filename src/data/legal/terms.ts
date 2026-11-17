import type { LegalDocument } from "@/components/legal/LegalPage";

/**
 * Terms of Service — client-supplied ("Term and condition.docx").
 *
 * Text is reproduced as supplied, with these approved edits only:
 *   - "woek@" corrected to the approved work@nexorafunding.co.uk (§1, §17)
 *   - §13 complaint contact placeholders filled with confirmed details
 *   - §17 garbled "Registered office address Company name:" line corrected
 *   - Editorial/drafting notes addressed to the client removed (§1, §3, §13)
 *   - Bracketed defined-term suggestions removed from the introduction
 *   - Unconfirmed FCA-specific statements removed (§3 commission disclosure
 *     sentence, §13 DISP / Financial Ombudsman paragraph)
 */

const companyDetails = [
  "Company name: **Nexora Funding Limited**",
  "Company number: **17308576**",
  "Registered office: **Office 19768 182-184 High Street North, East Ham, London, United Kingdom, E6 2JA**",
  "Email for privacy enquiries: **work@nexorafunding.co.uk**",
  "Telephone: **+44 7537 158677**",
  "ICO registration number: **ZC199459**",
];

export const termsDocument: LegalDocument = {
  title: "Terms and Conditions",
  dateLabel: "Effective date",
  date: "10 November 2026",
  intro: [
    "These Terms of Service govern your use of the website and business finance brokerage services provided by **Nexora Funding Limited**.",
    "By using our website or services, you agree to these Terms. Please read them carefully before submitting a finance application or using our services.",
  ],
  sections: [
    {
      id: "about-us",
      number: 1,
      title: "About Us",
      blocks: [
        { type: "p", text: "**Nexora Funding Limited** is a company registered in England and Wales." },
        { type: "h3", text: "Company details:" },
        { type: "ul", items: companyDetails },
        { type: "p", text: "**We are a credit broker, not a lender.**" },
      ],
    },
    {
      id: "our-services",
      number: 2,
      title: "Our Services",
      blocks: [
        { type: "p", text: "We help eligible UK businesses explore business finance by introducing them to lenders and other finance providers from our panel." },
        { type: "p", text: "Our services may be provided directly through our website or through approved third-party platforms, introducers or partners." },
        { type: "p", text: "We do not make lending decisions. Any decision to offer finance, together with the amount, interest rate, fees, security requirements, repayment period and other terms, is determined by the relevant lender or finance provider." },
        { type: "p", text: "**We cannot guarantee that you will receive an offer of finance or that any particular finance product will be available to you.**" },
        { type: "p", text: "Unless expressly stated otherwise, we do not provide independent financial advice, legal advice, tax advice or debt counselling." },
        { type: "p", text: "Businesses experiencing financial difficulty may wish to obtain independent support, including from **Business Debtline**." },
      ],
    },
    {
      id: "fees-and-commission",
      number: 3,
      title: "Fees and Commission",
      blocks: [
        { type: "p", text: "Unless we tell you otherwise before you use a particular service, **we do not charge you a fee for our credit broking service**." },
        { type: "p", text: "We may receive a commission or other remuneration from a lender or finance provider if you enter into a finance arrangement following our introduction." },
        { type: "p", text: "The existence, nature and amount of commission may vary between lenders and products." },
        { type: "p", text: "Where required by applicable law or regulation, we will provide appropriate information about our commission arrangements." },
      ],
    },
    {
      id: "finance-applications",
      number: 4,
      title: "Finance Applications and Lending Decisions",
      blocks: [
        { type: "p", text: "When you submit an enquiry or application through us:" },
        {
          type: "ul",
          items: [
            "we may share relevant information with appropriate lenders or finance providers;",
            "lenders may conduct eligibility, identity, fraud-prevention and credit checks;",
            "a lender may request further information or documentation;",
            "submitting an application does not guarantee approval; and",
            "any finance offer will be subject to the lender's own terms, conditions and eligibility requirements.",
          ],
        },
        { type: "p", text: "The lender, rather than Nexora Funding Limited, is responsible for deciding whether to provide finance." },
        { type: "p", text: "You should carefully review the lender's agreement and applicable charges before entering into any finance arrangement." },
      ],
    },
    {
      id: "your-responsibilities",
      number: 5,
      title: "Your Responsibilities",
      blocks: [
        { type: "p", text: "When using our services, you agree to:" },
        {
          type: "ul",
          items: [
            "provide accurate, complete and up-to-date information;",
            "provide information you are legally entitled to disclose;",
            "promptly notify us of material changes to information you have provided;",
            "use our services only for lawful purposes;",
            "not impersonate another person or business;",
            "keep any login credentials and passwords secure;",
            "not attempt to interfere with or compromise our systems or website; and",
            "comply with applicable laws and regulations.",
          ],
        },
        { type: "p", text: "Where you provide personal information about a director, shareholder, beneficial owner, partner, employee or another individual, you must have an appropriate basis for providing that information to us." },
      ],
    },
    {
      id: "credit-and-identity-checks",
      number: 6,
      title: "Credit and Identity Checks",
      blocks: [
        { type: "p", text: "As part of assessing or arranging a finance application, Nexora Funding Limited, lenders and relevant service providers may carry out checks permitted by applicable law." },
        { type: "p", text: "Depending on the product and lender, these may include:" },
        {
          type: "ul",
          items: [
            "identity verification;",
            "fraud-prevention checks;",
            "business credit searches;",
            "searches relating to directors, shareholders or beneficial owners; and",
            "other eligibility or affordability checks.",
          ],
        },
        { type: "p", text: "The precise checks and their effect should be explained at the appropriate stage of the application process and in the relevant privacy information." },
      ],
    },
    {
      id: "data-protection-and-privacy",
      number: 7,
      title: "Data Protection and Privacy",
      blocks: [
        { type: "p", text: "We process personal data in accordance with applicable UK data protection legislation and our **Privacy Policy**." },
        { type: "p", text: "Our Privacy Policy explains, among other things, what personal information we collect, why we process it, our lawful bases for processing, who we may share it with, how long we retain it and the rights available to individuals." },
        { type: "p", text: "Lenders and other finance providers receiving personal information may act as independent data controllers and process that information according to their own privacy notices." },
      ],
    },
    {
      id: "third-party-lenders",
      number: 8,
      title: "Third-Party Lenders and Services",
      blocks: [
        { type: "p", text: "Our website or services may provide access to products, websites or services operated by third parties." },
        { type: "p", text: "A lender or finance provider is independently responsible for:" },
        {
          type: "ul",
          items: [
            "its lending decisions;",
            "its eligibility criteria;",
            "the finance products it provides;",
            "its rates, fees and charges;",
            "its contractual documentation; and",
            "its ongoing relationship with you after finance is provided.",
          ],
        },
        { type: "p", text: "While we take reasonable steps when selecting parties with whom we work, we do not control independent third-party services." },
        { type: "p", text: "Nothing in these Terms excludes responsibility that cannot lawfully be excluded." },
      ],
    },
    {
      id: "intellectual-property",
      number: 9,
      title: "Intellectual Property",
      blocks: [
        { type: "p", text: "Unless otherwise stated, the content and materials available through our website and services, including text, branding, graphics, databases, software and other materials, are owned by or licensed to **Nexora Funding Limited** and are protected by applicable intellectual property laws." },
        { type: "p", text: "You must not, without our prior written permission:" },
        {
          type: "ul",
          items: [
            "reproduce or commercially redistribute our content;",
            "scrape or systematically extract website data;",
            "use automated bots or similar technologies in a manner that interferes with our services;",
            "modify, reverse engineer or misuse our systems where prohibited by law; or",
            "use our branding or intellectual property in a way that suggests an unauthorised association with us.",
          ],
        },
      ],
    },
    {
      id: "reviews-and-feedback",
      number: 10,
      title: "Reviews and Feedback",
      blocks: [
        { type: "p", text: "If you voluntarily provide feedback, reviews or comments directly to us, we may use them to improve our services and, where appropriate and lawful, for marketing purposes." },
        { type: "p", text: "Where reviews are posted through a third-party platform such as Trustpilot, your use of that platform will also be governed by the platform's applicable terms and privacy arrangements." },
        { type: "p", text: "We will handle personal data contained in feedback in accordance with our Privacy Policy." },
      ],
    },
    {
      id: "availability-and-security",
      number: 11,
      title: "Availability and Security",
      blocks: [
        { type: "p", text: "We aim to keep our website and services available and secure but cannot guarantee uninterrupted or error-free availability." },
        { type: "p", text: "We may temporarily restrict or suspend access where reasonably necessary for:" },
        {
          type: "ul",
          items: [
            "maintenance or technical reasons;",
            "security;",
            "suspected fraud or misuse;",
            "a breach of these Terms; or",
            "compliance with legal or regulatory obligations.",
          ],
        },
      ],
    },
    {
      id: "limitation-of-liability",
      number: 12,
      title: "Limitation of Liability",
      blocks: [
        { type: "p", text: "Nothing in these Terms excludes or limits liability where doing so would be unlawful." },
        { type: "p", text: "Subject to applicable law, we are not responsible for a lender's independent decision to approve or decline an application or for changes a lender makes to its products, rates or eligibility requirements." },
        { type: "p", text: "Nothing in these Terms is intended to exclude any rights or remedies that cannot legally be excluded or restricted." },
      ],
    },
    {
      id: "complaints",
      number: 13,
      title: "Complaints",
      blocks: [
        { type: "p", text: "If you are dissatisfied with our services, please contact us:" },
        {
          type: "ul",
          items: [
            "**Email:** work@nexorafunding.co.uk",
            "**Telephone:** +44 7537 158677",
            "**Post:** Complaints Team, Nexora Funding Limited, Office 19768 182-184 High Street North, East Ham, London, United Kingdom, E6 2JA",
          ],
        },
        { type: "p", text: "We will investigate complaints in accordance with any complaints-handling requirements applicable to us." },
      ],
    },
    {
      id: "suspension-and-termination",
      number: 14,
      title: "Suspension and Termination",
      blocks: [
        { type: "p", text: "You may stop using our services at any time." },
        { type: "p", text: "We may suspend or terminate access where reasonably necessary, including if:" },
        {
          type: "ul",
          items: [
            "you materially breach these Terms;",
            "information supplied to us is materially inaccurate or misleading;",
            "we reasonably suspect fraudulent, unlawful or abusive activity;",
            "continued provision of the service creates a security risk; or",
            "suspension or termination is required by law or regulation.",
          ],
        },
        { type: "p", text: "Termination will not affect rights or obligations that arose before termination." },
      ],
    },
    {
      id: "changes-to-these-terms",
      number: 15,
      title: "Changes to These Terms",
      blocks: [
        { type: "p", text: "We may amend these Terms where reasonably necessary, including to reflect changes to:" },
        {
          type: "ul",
          items: [
            "our services;",
            "applicable law or regulation;",
            "technology or security requirements; or",
            "our business operations.",
          ],
        },
        { type: "p", text: "The latest version will be made available on our website and will display its effective date." },
        { type: "p", text: "Where a material change affects an existing contractual relationship and advance notice is required, we will provide appropriate notice." },
      ],
    },
    {
      id: "governing-law",
      number: 16,
      title: "Governing Law",
      blocks: [
        { type: "p", text: "These Terms are governed by the laws of **England and Wales**." },
        { type: "p", text: "Subject to any mandatory rights or alternative dispute-resolution provisions that apply, disputes arising in connection with these Terms will be subject to the jurisdiction of the courts of England and Wales." },
        { type: "p", text: "If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue to apply." },
      ],
    },
    {
      id: "contact-us",
      number: 17,
      title: "Contact Us",
      blocks: [
        { type: "p", text: "If you have questions about these Terms or our services, please contact:" },
        { type: "h3", text: "Nexora Funding Limited" },
        { type: "ul", items: companyDetails },
      ],
    },
  ],
};
