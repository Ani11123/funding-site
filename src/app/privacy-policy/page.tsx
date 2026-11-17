import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { privacyDocument } from "@/data/legal/privacy";

const siteUrl = "https://nexorafunding.co.uk";
const pageUrl = `${siteUrl}/privacy-policy`;
const title = "Privacy & Cookies Policy | Nexora Funding Limited";
const description =
  "How Nexora Funding Limited collects, uses and protects your personal data, and how we use cookies on our website.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: { title, description, url: pageUrl, type: "website" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: privacyDocument.title, item: pageUrl },
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LegalPage doc={privacyDocument} />
    </>
  );
}
