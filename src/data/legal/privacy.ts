import type { LegalDocument } from "@/components/legal/LegalPage";

/**
 * Privacy & Cookies Policy — client-supplied ("Privacy and cokkie Policy.docx").
 *
 * Text is reproduced as supplied, with these approved edits only:
 *   - "woek@" corrected to the approved work@nexorafunding.co.uk (§1)
 *   - "[insert privacy email address]" placeholders filled with the same
 *     address (§9, §10)
 *   - Editorial/drafting notes addressed to the client removed (§2, §4, §6,
 *     §8, §9, §10, §11, §12 and the "What you still need before publishing" /
 *     "Key improvements" notes after §14)
 *   - Bracketed defined-term suggestion removed from §1
 *
 * PENDING CLIENT REVISION: §12 and §13 describe cookie consent choices and a
 * "Cookie Settings" control that the website does not currently provide.
 */

export const privacyDocument: LegalDocument = {
  title: "Privacy & Cookies Policy",
  dateLabel: "Last updated",
  date: "10 November 2026",
  sections: [
    {
      id: "about-us",
      number: 1,
      title: "About Us",
      blocks: [
        { type: "p", text: "**Nexora Funding Limited** respects your privacy and is committed to protecting your personal data." },
        { type: "p", text: "For UK data protection law, **Nexora Funding Limited** is the data controller responsible for personal data collected through this website and through communications with us." },
        { type: "h3", text: "Company details" },
        {
          type: "ul",
          items: [
            "Company name: **Nexora Funding Limited**",
            "Company number: **17308576**",
            "Registered office: **Office 19768 182-184 High Street North, East Ham, London, United Kingdom, E6 2JA**",
            "Email for privacy enquiries: **work@nexorafunding.co.uk**",
            "Telephone: **+44 7537 158677**",
            "ICO registration number: **ZC199459**",
          ],
        },
      ],
    },
    {
      id: "personal-data-we-collect",
      number: 2,
      title: "Personal Data We Collect",
      blocks: [
        { type: "p", text: "Depending on how you interact with us, we may collect information including:" },
        {
          type: "ul",
          items: [
            "your name;",
            "email address and telephone number;",
            "residential or business address;",
            "information you provide when making a funding or finance enquiry;",
            "business and employment information;",
            "financial information relevant to your enquiry;",
            "correspondence and communications with us;",
            "technical information such as your IP address, browser type and device information;",
            "information about how you use our website; and",
            "marketing and communication preferences.",
          ],
        },
      ],
    },
    {
      id: "how-we-use-your-data",
      number: 3,
      title: "How We Use Your Personal Data",
      blocks: [
        { type: "p", text: "We may process personal data for purposes including:" },
        {
          type: "ul",
          items: [
            "responding to enquiries;",
            "assessing and dealing with funding or financial-services enquiries;",
            "communicating with you about products or services you have requested;",
            "administering our relationship with you;",
            "maintaining our business and financial records;",
            "detecting or preventing fraud and protecting our systems;",
            "complying with our legal and regulatory obligations;",
            "improving and securing our website; and",
            "sending marketing communications where permitted by law.",
          ],
        },
      ],
    },
    {
      id: "lawful-bases",
      number: 4,
      title: "Our Lawful Bases",
      blocks: [
        { type: "p", text: "Depending on the circumstances, we may rely on one or more lawful bases under UK data protection law, including:" },
        { type: "h3", text: "Contract" },
        { type: "p", text: "Where processing is necessary to take steps at your request before entering into a contract or to perform a contract with you." },
        { type: "h3", text: "Legal obligation" },
        { type: "p", text: "Where we need to process information to comply with a legal or regulatory requirement that applies to us." },
        { type: "h3", text: "Legitimate interests" },
        { type: "p", text: "Where processing is necessary for our legitimate business interests or those of a third party, provided that those interests are not overridden by your rights and interests." },
        { type: "h3", text: "Consent" },
        { type: "p", text: "Where we have specifically asked for your consent. Where processing is based on consent, you may withdraw that consent." },
      ],
    },
    {
      id: "marketing",
      number: 5,
      title: "Marketing",
      blocks: [
        { type: "p", text: "We may send you information about our products or services where we are permitted to do so under applicable law." },
        { type: "p", text: "Where consent is required, we will obtain your consent before sending the relevant marketing communication." },
        { type: "p", text: "You can ask us to stop sending marketing communications at any time by following the unsubscribe instructions in our communications or contacting us using the details provided above." },
      ],
    },
    {
      id: "sharing-your-data",
      number: 6,
      title: "Sharing Your Personal Data",
      blocks: [
        { type: "p", text: "We may share personal data where reasonably necessary with organisations such as:" },
        {
          type: "ul",
          items: [
            "lenders and funding providers;",
            "professional advisers;",
            "identity verification and fraud-prevention providers;",
            "IT, hosting and website service providers;",
            "customer relationship management and communication providers;",
            "payment or financial-service providers, where applicable;",
            "regulators, public authorities and law-enforcement bodies where required; and",
            "prospective purchasers or advisers in connection with a sale, merger or restructuring of our business.",
          ],
        },
        { type: "p", text: "We require service providers processing personal data on our behalf to handle it appropriately and in accordance with applicable data protection requirements." },
      ],
    },
    {
      id: "international-transfers",
      number: 7,
      title: "International Transfers",
      blocks: [
        { type: "p", text: "Some organisations that provide services to us may process personal data outside the United Kingdom." },
        { type: "p", text: "Where personal data is transferred internationally, we will take appropriate measures required by applicable UK data protection law to protect that information." },
      ],
    },
    {
      id: "how-long-we-keep-your-information",
      number: 8,
      title: "How Long We Keep Your Information",
      blocks: [
        { type: "p", text: "We retain personal data only for as long as reasonably necessary for the purposes for which it was collected, including satisfying applicable legal, regulatory, accounting and reporting requirements." },
        { type: "p", text: "Retention periods may differ depending on the type of information and the reason it is being processed." },
      ],
    },
    {
      id: "your-rights",
      number: 9,
      title: "Your Data Protection Rights",
      blocks: [
        { type: "p", text: "Depending on the circumstances, UK data protection law gives you rights relating to your personal data. These can include the right to:" },
        {
          type: "ul",
          items: [
            "request access to your personal data;",
            "request correction of inaccurate or incomplete information;",
            "request deletion of your personal data in certain circumstances;",
            "request restriction of processing;",
            "object to certain processing;",
            "request transfer of your personal data where applicable; and",
            "withdraw consent where processing is based on consent.",
          ],
        },
        { type: "p", text: "To exercise your rights, contact us at **work@nexorafunding.co.uk**." },
      ],
    },
    {
      id: "complaints",
      number: 10,
      title: "Complaints",
      blocks: [
        { type: "p", text: "If you have concerns about how we use your personal data, please contact us first at **work@nexorafunding.co.uk** so that we can investigate your concerns." },
        { type: "p", text: "You also have the right to make a complaint to the UK's data protection supervisory authority, the **Information Commissioner's Office (ICO)**." },
      ],
    },
    {
      id: "what-are-cookies",
      number: 11,
      title: "What Are Cookies?",
      groupHeading: "Cookies Policy",
      blocks: [
        { type: "p", text: "Cookies are small files that are stored on your device when you visit a website. They can allow a website to recognise your device and remember information about your preferences or previous actions." },
      ],
    },
    {
      id: "cookies-we-use",
      number: 12,
      title: "Cookies We Use",
      blocks: [
        { type: "p", text: "Our website may use the following categories of cookies:" },
        { type: "h3", text: "Strictly necessary cookies" },
        { type: "p", text: "These cookies are necessary for the website or a service requested by you to function and cannot always be disabled through our website." },
        { type: "h3", text: "Analytics cookies" },
        { type: "p", text: "These cookies help us understand how visitors use our website, such as which pages are visited and how users interact with the site." },
        { type: "p", text: "**Where consent is required, these cookies will not be set unless you consent to them.**" },
        { type: "h3", text: "Functional cookies" },
        { type: "p", text: "These cookies enable additional functionality and may remember choices or preferences." },
        { type: "p", text: "**Where consent is required, they will only be used after you provide consent.**" },
        { type: "h3", text: "Advertising or targeting cookies" },
        { type: "p", text: "If used, these cookies may be used to build an understanding of your interests or provide relevant advertising." },
        { type: "p", text: "**Where consent is required, advertising or targeting cookies will not be set before you provide consent.**" },
      ],
    },
    {
      id: "managing-cookie-preferences",
      number: 13,
      title: "Managing Your Cookie Preferences",
      blocks: [
        { type: "p", text: "When you first visit our website, you will be given appropriate choices regarding cookies that require consent." },
        { type: "p", text: "You can change or withdraw your cookie choices through **Cookie Settings** on our website." },
        { type: "p", text: "You may also restrict or delete cookies using your web browser. Disabling some cookies may affect certain website features." },
      ],
    },
    {
      id: "changes-to-this-policy",
      number: 14,
      title: "Changes to This Policy",
      blocks: [
        { type: "p", text: "We may update this Privacy & Cookies Policy from time to time to reflect changes to our business, website, legal obligations or the way we process personal data." },
        { type: "p", text: 'Any updated version will be published on this page together with the revised "Last updated" date.' },
      ],
    },
  ],
};
