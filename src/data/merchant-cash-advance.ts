import {
  PoundSterling,
  Percent,
  Clock,
  RefreshCcw,
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

const product = getProductBySlug("merchant-cash-advance")!;

export const merchantCashAdvanceContent: BusinessFinancePageContent = {
  meta: {
    title: product.seoTitle,
    description: product.seoDescription,
    slug: product.slug,
  },

  breadcrumbLabel: "Merchant Cash Advance",

  hero: {
    eyebrow: "Merchant Cash Advance",
    heading: "Repay as You Earn. Fund as You Grow.",
    description:
      "Fast-access funding based on your future card sales. Payments rise and fall with your daily takings, rather than a fixed monthly amount.",
    primaryCtaLabel: "Speak to a Commercial Finance Advisor",
    secondaryCtaLabel: "Request a Callback",
    image: product.heroImage,
    imageAlt: product.heroImageAlt,
  },

  intro: {
    eyebrow: "About Merchant Cash Advance",
    heading: "What is a merchant cash advance?",
    paragraphs: [
      "A Merchant Cash Advance (MCA) provides fast-access funding based on your future credit and debit card sales. Unlike a traditional loan with fixed monthly payments, an MCA is repaid through a small percentage of your daily card turnover, meaning payments rise and fall in line with your revenue.",
      "This structure offers exceptional flexibility for businesses with strong card transaction volumes, particularly in retail, hospitality and e-commerce.",
    ],
  },

  benefits: {
    eyebrow: "Key Features",
    heading: "What you can expect",
    description: "The headline terms currently available through our merchant cash advance panel.",
    items: [
      {
        icon: PoundSterling,
        title: "Funding Amounts",
        description: "£5,000 to £500,000, sized to your typical card turnover.",
      },
      {
        icon: Percent,
        title: "Repayment Structure",
        description: "A fixed percentage of daily card receipts, typically 5% to 20%.",
      },
      {
        icon: Clock,
        title: "Approval Timeline",
        description: "Funds are often available within 24 to 48 hours of approval.",
      },
      {
        icon: RefreshCcw,
        title: "No Fixed Term",
        description: "Repayment period varies based on your actual trading volumes, not a set schedule.",
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
        description: "Share your funding requirement and an idea of your typical monthly card turnover.",
      },
      {
        icon: UserCog,
        title: "Advisor Assessment",
        description: "A dedicated adviser reviews your card receipt history and sector to identify suitable providers.",
      },
      {
        icon: FileCheck2,
        title: "Matched Solutions",
        description: "We present offers with the factor rate and repayment percentage clearly explained.",
      },
      {
        icon: Banknote,
        title: "Funding Secured",
        description: "Once approved, funds can often reach your account within 24 to 48 hours.",
      },
    ],
  },

  eligibility: {
    eyebrow: "Is This the Right Fit?",
    heading: "When to consider a merchant cash advance",
    description: "This facility is particularly advantageous for businesses that:",
    items: [
      "Have a high volume of card transactions but fluctuating daily revenue",
      "Require rapid access to working capital for stock, refurbishment or marketing",
      "Prefer a repayment structure that adapts to trading performance",
      "May not meet the credit criteria for traditional bank lending",
    ],
    note:
      "Suitability depends on your card turnover history and sector. Speak to an adviser for guidance specific to your business, there's no obligation.",
  },

  loanTypes: {
    eyebrow: "Cost and Affordability",
    heading: "How the cost of an MCA works",
    description: "We believe in clear, upfront communication about how this product is priced.",
    items: [
      {
        title: "Factor Rate, Not Interest",
        description: "An MCA isn't an interest-bearing loan. Instead, a factor rate (or purchase fee) is applied to the advance amount.",
      },
      {
        title: "Modelled on Your Turnover",
        description: "We model projected repayments against your historic card turnover before you commit to anything.",
      },
      {
        title: "Full Cost Transparency",
        description: "We explain the total cost of the facility clearly, so you have full visibility before proceeding.",
      },
    ],
  },

  whyChoose: {
    eyebrow: "Why Choose Nexora",
    heading: "Matched to Your Trading Pattern.",
    description:
      "We assess your card receipt history, sector and funding requirement to match you with the most suitable provider from our specialist panel, then negotiate on your behalf and stay available throughout the repayment period.",
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
    heading: "Merchant cash advance questions we're asked often",
    items: [
      {
        question: "Is a merchant cash advance a loan?",
        answer: "Not in the traditional sense. Rather than charging interest, providers apply a factor rate to the amount advanced, then take repayment as a percentage of your daily card sales.",
      },
      {
        question: "How much could my business access?",
        answer: "Typically £5,000 to £500,000, depending on your card turnover history and sector.",
      },
      {
        question: "How quickly can funds arrive?",
        answer: "Often within 24 to 48 hours of approval, making this one of the faster funding routes we arrange.",
      },
      {
        question: "What happens if my sales are quiet for a while?",
        answer: "Because repayment is a percentage of daily card receipts, a quieter trading period means a smaller repayment, rather than a fixed amount you'd struggle to meet.",
      },
      {
        question: "Which sectors is this best suited to?",
        answer: "It particularly suits businesses with strong card transaction volumes, commonly retail, hospitality and e-commerce.",
      },
      {
        question: "Can I still apply if I've been declined for a bank loan?",
        answer: "Often, yes. Providers on our panel assess card turnover and trading history rather than relying solely on traditional credit criteria.",
      },
    ],
  },

  relatedSolutions: {
    eyebrow: "Related Finance Solutions",
    heading: "Explore other funding routes",
    description: "A merchant cash advance isn't the right fit for every situation. Here are other options worth considering.",
    items: toRelatedSolutionItems(getRelatedProducts("merchant-cash-advance")),
  },

  finalCta: {
    eyebrow: "Ready When You Are",
    heading: "Find Out If an MCA Is Right for Your Business",
    description: "Talk to our commercial finance advisers today. It's free, confidential and with no obligation.",
  },
};
