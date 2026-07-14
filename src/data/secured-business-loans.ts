import {
  PoundSterling,
  Percent,
  CalendarRange,
  Building2,
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

const product = getProductBySlug("secured-business-loans")!;

export const securedBusinessLoansContent: BusinessFinancePageContent = {
  meta: {
    title: product.seoTitle,
    description: product.seoDescription,
    slug: product.slug,
  },

  breadcrumbLabel: "Secured Business Loans",

  hero: {
    eyebrow: "Secured Business Loans",
    heading: "Larger Facilities. Lower Rates. Strategic Growth.",
    description:
      "Access more substantial funding by leveraging your business or personal assets as collateral, typically with more favourable rates and longer repayment terms than unsecured borrowing.",
    primaryCtaLabel: "Speak to a Commercial Finance Advisor",
    secondaryCtaLabel: "Request a Callback",
    image: product.heroImage,
    imageAlt: product.heroImageAlt,
  },

  intro: {
    eyebrow: "About Secured Business Loans",
    heading: "What is a secured business loan?",
    paragraphs: [
      "A secured business loan gives you access to more substantial funding by using your business or personal assets as collateral. This structure typically offers more favourable interest rates and extended repayment terms compared with unsecured borrowing, making it a sound choice for significant capital investment, acquisitions or long-term expansion.",
      "By securing your borrowing against property, equipment or other valuable assets, you demonstrate reduced risk to the lender. That reduced risk translates into enhanced borrowing capacity and improved cost efficiency over the life of the facility.",
    ],
  },

  benefits: {
    eyebrow: "Key Features",
    heading: "What you can expect",
    description: "The headline terms currently available through our secured lending panel.",
    items: [
      {
        icon: PoundSterling,
        title: "Loan Amounts",
        description: "£25,000 to £5 million+, scaled to the value of the assets you're able to offer as security.",
      },
      {
        icon: Percent,
        title: "Competitive Rates",
        description: "From 4.5% APR (variable), reflecting the reduced risk a secured facility presents to lenders.",
      },
      {
        icon: CalendarRange,
        title: "Repayment Terms",
        description: "1 to 25 years, structured around your business's long-term plans and cashflow.",
      },
      {
        icon: Building2,
        title: "Securable Assets",
        description: "Commercial property, residential property, plant and machinery, vehicles or other high-value business assets.",
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
        description: "Share what you need the funding for and which assets you may be able to offer as security.",
      },
      {
        icon: UserCog,
        title: "Advisor Assessment",
        description: "A dedicated adviser reviews your assets, affordability and objectives against our lender panel.",
      },
      {
        icon: FileCheck2,
        title: "Matched Solutions",
        description: "We present secured lending options with clearly explained rates, terms and security requirements.",
      },
      {
        icon: Banknote,
        title: "Funding Secured",
        description: "Once you're happy to proceed, we guide you through valuation, legal steps and drawdown.",
      },
    ],
  },

  eligibility: {
    eyebrow: "Is This the Right Fit?",
    heading: "When to consider a secured loan",
    description: "This form of financing is particularly well suited to businesses that:",
    items: [
      "Require significant capital for acquisition, refurbishment or expansion",
      "Own assets that can be used to unlock more favourable lending terms",
      "Have a clear, long-term strategy and prefer predictable, structured repayments",
      "Wish to consolidate existing debt into a single, more manageable facility",
    ],
    note:
      "Every lender assesses affordability and asset value individually. Speak to an adviser for guidance specific to your business, there's no obligation.",
  },

  loanTypes: {
    eyebrow: "Risk Considerations",
    heading: "What you should know before securing a loan",
    description: "As a responsible adviser, we believe in full transparency about how secured lending works.",
    items: [
      {
        title: "Collateral-Backed Lending",
        description: "The loan is secured against assets you pledge, such as property, equipment or vehicles. This is what allows for larger amounts and more competitive rates.",
      },
      {
        title: "Assessing Affordability",
        description: "We work closely with you to assess affordability and ensure the proposed structure aligns with your cashflow and appetite for risk.",
      },
      {
        title: "Understanding the Risk",
        description: "Because the loan is backed by collateral, defaulting on repayments could result in the loss of the asset pledged. We explain this clearly before you proceed.",
      },
    ],
  },

  whyChoose: {
    eyebrow: "Why Choose Nexora",
    heading: "Guided from Assessment to Completion.",
    description:
      "Our role is to guide you through the entire process, from initial assessment and asset valuation to lender selection and final negotiation, searching across specialist secured lenders and high-street banks for terms that suit your objectives.",
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
    heading: "Secured business loan questions we're asked often",
    items: [
      {
        question: "What can I use as security for a secured business loan?",
        answer: "Commonly commercial property, residential property, plant and machinery, vehicles, or other high-value business assets. An adviser can talk through what your particular assets might support.",
      },
      {
        question: "What happens if I can't keep up with repayments?",
        answer: "Because the loan is backed by collateral, defaulting could result in the loss of the pledged asset. We assess affordability carefully upfront specifically to reduce this risk.",
      },
      {
        question: "How much can my business borrow?",
        answer: "Typically £25,000 to £5 million or more, depending on the value of the assets offered as security and the lender's own criteria.",
      },
      {
        question: "How long do I have to repay a secured loan?",
        answer: "Terms usually run from 1 to 25 years, structured around your business's long-term plans and cashflow.",
      },
      {
        question: "Will I get a better rate than an unsecured loan?",
        answer: "Generally, yes. Rates on our secured lending panel start from 4.5% APR (variable), reflecting the lower risk a secured facility presents to a lender.",
      },
      {
        question: "Can I use a secured loan to consolidate existing debt?",
        answer: "Yes, this is one of the more common reasons businesses consider secured lending, bringing several facilities together into one structured, predictable repayment.",
      },
    ],
  },

  relatedSolutions: {
    eyebrow: "Related Finance Solutions",
    heading: "Explore other funding routes",
    description: "A secured loan isn't the right fit for every situation. Here are other options worth considering.",
    items: toRelatedSolutionItems(getRelatedProducts("secured-business-loans")),
  },

  finalCta: {
    eyebrow: "Ready When You Are",
    heading: "Let's Structure the Right Secured Loan for You",
    description: "Talk to our commercial finance advisers today. It's free, confidential and with no obligation.",
  },
};
