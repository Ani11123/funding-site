import type { Metadata } from "next";
import BusinessFinanceTemplate from "@/components/business-finance/Template";
import { businessLoansContent } from "@/data/business-loans";

const siteUrl = "https://nexorafunding.co.uk";
const pageUrl = `${siteUrl}/${businessLoansContent.meta.slug}`;

export const metadata: Metadata = {
  title: businessLoansContent.meta.title,
  description: businessLoansContent.meta.description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: businessLoansContent.meta.title,
    description: businessLoansContent.meta.description,
    url: pageUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: businessLoansContent.meta.title,
    description: businessLoansContent.meta.description,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Business Finance", item: `${siteUrl}/#business-finance` },
    { "@type": "ListItem", position: 3, name: businessLoansContent.breadcrumbLabel, item: pageUrl },
  ],
};

export default function BusinessLoansPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BusinessFinanceTemplate content={businessLoansContent} />
    </>
  );
}
