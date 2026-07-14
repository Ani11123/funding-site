import {
  PoundSterling,
  Wrench,
  CalendarRange,
  KeyRound,
  MessageSquareText,
  UserCog,
  FileCheck2,
  Banknote,
  Handshake,
  ShieldCheck,
  Clock3,
  HeartHandshake,
} from "lucide-react";
import type { BusinessFinancePageContent } from "@/components/business-finance/types";
import { getProductBySlug, getRelatedProducts, toRelatedSolutionItems } from "@/data/businessFinanceData";

const product = getProductBySlug("asset-finance")!;

export const assetFinanceContent: BusinessFinancePageContent = {
  meta: {
    title: product.seoTitle,
    description: product.seoDescription,
    slug: product.slug,
  },

  breadcrumbLabel: "Asset Finance",

  hero: {
    eyebrow: "Asset Finance",
    heading: "Invest in Equipment. Preserve Cash Flow. Drive Productivity.",
    description:
      "Acquire the equipment, machinery or vehicles your business needs without a large upfront capital outlay. The asset itself secures the finance.",
    primaryCtaLabel: "Speak to a Commercial Finance Advisor",
    secondaryCtaLabel: "Request a Callback",
    image: product.heroImage,
    imageAlt: product.heroImageAlt,
  },

  intro: {
    eyebrow: "About Asset Finance",
    heading: "What is asset finance?",
    paragraphs: [
      "Asset Finance provides a structured way to acquire the equipment, machinery or vehicles your business needs, without the burden of a large upfront capital outlay. The asset itself serves as security for the finance, enabling competitive rates and flexible repayment structures.",
      "From manufacturing plant and commercial vehicles to IT infrastructure and office equipment, this form of finance supports businesses across all sectors in maintaining operational efficiency and competitive advantage.",
    ],
  },

  benefits: {
    eyebrow: "Key Features",
    heading: "What you can expect",
    description: "The headline terms currently available through our asset finance panel.",
    items: [
      {
        icon: PoundSterling,
        title: "Funding Amounts",
        description: "£2,500 to £2 million+, matched to the asset you need to acquire.",
      },
      {
        icon: Wrench,
        title: "Asset Range",
        description: "Plant, machinery, commercial vehicles, IT, medical equipment, agricultural machinery and more.",
      },
      {
        icon: CalendarRange,
        title: "Repayment Terms",
        description: "1 to 7 years, aligned with the productive life of the asset.",
      },
      {
        icon: KeyRound,
        title: "Ownership Options",
        description: "Hire Purchase, Finance Lease or Operating Lease structures are all available.",
      },
    ],
  },

  howItWorks: {
    eyebrow: "How It Works",
    heading: "Four Clear Steps to Your Funding",
    description: "We handle the complexity so you can focus on running your business.",
    steps: [
      {
        icon: MessageSquareText,
        title: "Tell Us Your Need",
        description: "Share which equipment, vehicle or machinery you're looking to acquire, and your budget.",
      },
      {
        icon: UserCog,
        title: "Advisor Assessment",
        description: "A dedicated adviser reviews your cashflow and balance sheet to recommend the right structure.",
      },
      {
        icon: FileCheck2,
        title: "Matched Solutions",
        description: "We present suitable Hire Purchase, Finance Lease or Operating Lease options from our panel.",
      },
      {
        icon: Banknote,
        title: "Funding Secured",
        description: "Once agreed, funds are released to acquire the asset, with clear, transparent documentation.",
      },
    ],
  },

  eligibility: {
    eyebrow: "Is This the Right Fit?",
    heading: "When to consider asset finance",
    description: "This facility is ideal for businesses that:",
    items: [
      "Require essential equipment but wish to preserve working capital",
      "Prefer fixed, predictable monthly payments to aid budgeting",
      "Need to upgrade or replace assets to remain competitive",
      "Want to match repayment terms to the asset's productive life",
    ],
    note:
      "Suitability depends on the asset type and your business's financial profile. Speak to an adviser for guidance specific to your business, there's no obligation.",
  },

  loanTypes: {
    eyebrow: "Types of Asset Finance",
    heading: "Choose the structure that fits",
    description: "Three common ways to finance equipment, vehicles and machinery.",
    items: [
      {
        title: "Hire Purchase (HP)",
        description: "Pay a deposit followed by fixed monthly instalments. Once all payments are made, ownership of the asset transfers to you.",
      },
      {
        title: "Finance Lease",
        description: "Lease the asset for an agreed period, with rentals reflecting its depreciation. At the end, extend the lease, return the asset, or sell it on behalf of the lender.",
      },
      {
        title: "Operating Lease",
        description: "Suited to assets that depreciate quickly or need regular upgrading, such as IT or company cars. You pay a rental, often with maintenance included.",
      },
    ],
  },

  whyChoose: {
    eyebrow: "Why Choose Nexora",
    heading: "Structured Around Your Equipment Needs.",
    description:
      "We assess your equipment requirements, cashflow and balance sheet to recommend the most appropriate structure, drawing on specialist asset financiers who understand the nuances of different asset classes and sectors.",
    items: [
      {
        icon: Handshake,
        title: "Advisor-Led Approach",
        description: "A dedicated adviser guides you personally, not an automated system.",
      },
      {
        icon: ShieldCheck,
        title: "Honest, Clear Guidance",
        description: "We explain the trade-offs plainly, including where a product isn't the right fit.",
      },
      {
        icon: Clock3,
        title: "Fast, Confidential Process",
        description: "We respect your time and privacy throughout the enquiry.",
      },
      {
        icon: HeartHandshake,
        title: "No Obligation",
        description: "Initial advice is free, with no pressure to proceed.",
      },
    ],
  },

  faqs: {
    eyebrow: "FAQs",
    heading: "Asset finance questions we're asked often",
    items: [
      {
        question: "What type of assets can be financed?",
        answer: "A broad range, including plant, machinery, commercial vehicles, IT equipment, medical equipment and agricultural machinery.",
      },
      {
        question: "What's the difference between Hire Purchase and a Finance Lease?",
        answer: "With Hire Purchase, you own the asset once all payments are made. With a Finance Lease, you rent the asset for an agreed term and can extend, return or sell it at the end.",
      },
      {
        question: "How much can my business borrow?",
        answer: "Typically £2,500 to £2 million or more, depending on the asset and your business's financial profile.",
      },
      {
        question: "How long can repayment terms run?",
        answer: "Usually 1 to 7 years, aligned with how long the asset is expected to remain productive.",
      },
      {
        question: "Do I need a deposit?",
        answer: "This depends on the structure. Hire Purchase typically involves a deposit followed by fixed instalments, an adviser can confirm what applies to your chosen option.",
      },
      {
        question: "Can I finance second-hand equipment?",
        answer: "Often, yes, many lenders on our panel will consider good-condition used assets alongside new equipment.",
      },
    ],
  },

  relatedSolutions: {
    eyebrow: "Related Finance Solutions",
    heading: "Explore other funding routes",
    description: "Asset finance isn't the right fit for every situation. Here are other options worth considering.",
    items: toRelatedSolutionItems(getRelatedProducts("asset-finance")),
  },

  finalCta: {
    eyebrow: "Ready When You Are",
    heading: "Finance Your Next Equipment Investment",
    description: "Talk to our commercial finance advisers today. It's free, confidential and with no obligation.",
  },
};
