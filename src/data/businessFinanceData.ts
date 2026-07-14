import type { LucideIcon } from "lucide-react";
import { Landmark, CreditCard, FileText, Boxes, RefreshCw, Banknote } from "lucide-react";

/**
 * Single source of truth for every active Business Finance product.
 *
 * The homepage Business Finance section (Services.tsx), the Footer's
 * funding links, and every product page's "Related Finance Solutions"
 * section all read from this file. Add, remove or reorder a product here
 * and every one of those surfaces updates automatically — nothing else
 * needs to be touched.
 *
 * To retire a product without deleting its page (e.g. content pending),
 * remove its entry here — it will disappear from the homepage, footer and
 * all related-solutions blocks, but its route file can remain unlinked.
 */
export interface BusinessFinanceProduct {
  slug: string;
  route: string;
  navTitle: string;
  cardDescription: string;
  icon: LucideIcon;
  heroImage: string;
  heroImageAlt: string;
  seoTitle: string;
  seoDescription: string;
}

export const businessFinanceProducts: BusinessFinanceProduct[] = [
  {
    slug: "secured-business-loans",
    route: "/secured-business-loans",
    navTitle: "Secured Business Loans",
    cardDescription: "Larger funding amounts secured against business assets or commercial property.",
    icon: Landmark,
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85",
    heroImageAlt: "Commercial office building representing asset-backed business finance",
    seoTitle: "Secured Business Loans | Nexora Funding Limited",
    seoDescription:
      "Unlock greater borrowing power with asset-backed secured business loans from £25,000 to £5 million+. Speak to a Nexora adviser, free and with no obligation.",
  },
  {
    slug: "unsecured-business-loans",
    route: "/unsecured-business-loans",
    navTitle: "Unsecured Business Loans",
    cardDescription: "No collateral required. Quick access to funds for operational needs and growth.",
    icon: Banknote,
    heroImage: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1920&q=85",
    heroImageAlt: "UK business owner reviewing paperwork at a desk",
    seoTitle: "Unsecured Business Loans | Nexora Funding Limited",
    seoDescription:
      "Borrow £10,000 to £2 million with no assets pledged as security. Fast, flexible unsecured business loans with rates from 6.9% APR. Speak to a Nexora adviser today.",
  },
  {
    slug: "merchant-cash-advance",
    route: "/merchant-cash-advance",
    navTitle: "Merchant Cash Advance",
    cardDescription: "Access fast funding based on your card turnover with flexible repayments.",
    icon: CreditCard,
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&q=85",
    heroImageAlt: "Card payment terminal in a UK retail business",
    seoTitle: "Merchant Cash Advance | Nexora Funding Limited",
    seoDescription:
      "Flexible funding repaid as a percentage of your card takings. From £5,000 to £500,000, often available within 24-48 hours. Speak to a Nexora adviser.",
  },
  {
    slug: "invoice-finance",
    route: "/invoice-finance",
    navTitle: "Invoice Finance",
    cardDescription: "Release cash tied up in outstanding invoices to maintain steady cashflow.",
    icon: FileText,
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=85",
    heroImageAlt: "Business owner reviewing invoices and financial paperwork",
    seoTitle: "Invoice Finance | Nexora Funding Limited",
    seoDescription:
      "Unlock up to 90% of the value of your outstanding invoices within 24 hours. Factoring, invoice discounting and selective options. Speak to a Nexora adviser.",
  },
  {
    slug: "asset-finance",
    route: "/asset-finance",
    navTitle: "Asset Finance",
    cardDescription: "Finance equipment, vehicles and machinery without straining working capital.",
    icon: Boxes,
    heroImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=85",
    heroImageAlt: "Warehouse machinery and equipment financed through asset finance",
    seoTitle: "Asset Finance | Nexora Funding Limited",
    seoDescription:
      "Acquire equipment, vehicles or machinery from £2,500 to £2 million+ without a large upfront outlay. Hire Purchase, Finance Lease and Operating Lease options.",
  },
  {
    slug: "revolving-credit-facility",
    route: "/revolving-credit-facility",
    navTitle: "Revolving Credit Facility",
    cardDescription: "Flexible credit access you can draw on whenever your business needs it.",
    icon: RefreshCw,
    heroImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=85",
    heroImageAlt: "Business team discussing flexible working capital planning",
    seoTitle: "Revolving Credit Facility | Nexora Funding Limited",
    seoDescription:
      "A flexible line of credit from £10,000 to £1 million+ that you can draw, repay and redraw as needed. Rates from 6.9% APR. Speak to a Nexora adviser.",
  },
];

export function getProductBySlug(slug: string): BusinessFinanceProduct | undefined {
  return businessFinanceProducts.find((p) => p.slug === slug);
}

/** Related products for a given page, excluding itself, in catalog order. */
export function getRelatedProducts(excludeSlug: string, limit = 4): BusinessFinanceProduct[] {
  return businessFinanceProducts.filter((p) => p.slug !== excludeSlug).slice(0, limit);
}

/** Maps catalog products onto the shape RelatedSolutions.tsx expects. */
export function toRelatedSolutionItems(products: BusinessFinanceProduct[]) {
  return products.map((p) => ({
    icon: p.icon,
    title: p.navTitle,
    description: p.cardDescription,
    href: p.route,
  }));
}
