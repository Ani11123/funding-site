import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { termsDocument } from "@/data/legal/terms";

const siteUrl = "https://nexorafunding.co.uk";
const pageUrl = `${siteUrl}/terms-and-conditions`;
const title = "Terms and Conditions | Nexora Funding Limited";
const description =
  "The terms that govern your use of the Nexora Funding Limited website and our business finance brokerage services.";

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
    { "@type": "ListItem", position: 2, name: termsDocument.title, item: pageUrl },
  ],
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LegalPage doc={termsDocument} />
    </>
  );
}
