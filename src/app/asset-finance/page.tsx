import type { Metadata } from "next";
import BusinessFinanceTemplate from "@/components/business-finance/Template";
import { assetFinanceContent as content } from "@/data/asset-finance";

const siteUrl = "https://nexorafunding.co.uk";
const pageUrl = `${siteUrl}/${content.meta.slug}`;

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    url: pageUrl,
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Business Finance", item: `${siteUrl}/#business-finance` },
    { "@type": "ListItem", position: 3, name: content.breadcrumbLabel, item: pageUrl },
  ],
};

export default function AssetFinancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BusinessFinanceTemplate content={content} />
    </>
  );
}
