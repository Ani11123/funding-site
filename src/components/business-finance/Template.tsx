import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "./Breadcrumb";
import Hero from "./Hero";
import Intro from "./Intro";
import KeyBenefits from "./KeyBenefits";
import HowItWorks from "./HowItWorks";
import Eligibility from "./Eligibility";
import LoanTypes from "./LoanTypes";
import WhyChoose from "./WhyChoose";
import Faq from "./Faq";
import RelatedSolutions from "./RelatedSolutions";
import FinalCta from "./FinalCta";
import type { BusinessFinancePageContent } from "./types";

/**
 * Master template for every Business Finance service page.
 * Each page (business-loans, asset-finance, invoice-finance, ...) supplies
 * its own BusinessFinancePageContent object — the layout and design system
 * stay identical across all of them.
 */
export default function BusinessFinanceTemplate({ content }: { content: BusinessFinancePageContent }) {
  return (
    <>
      <TopBar />
      <Header />
      <Breadcrumb currentLabel={content.breadcrumbLabel} />
      <main>
        <Hero content={content.hero} />
        <Intro content={content.intro} />
        <KeyBenefits content={content.benefits} />
        <HowItWorks content={content.howItWorks} />
        <Eligibility content={content.eligibility} />
        <LoanTypes content={content.loanTypes} />
        <WhyChoose content={content.whyChoose} />
        <Faq content={content.faqs} />
        <RelatedSolutions content={content.relatedSolutions} />
        <FinalCta content={content.finalCta} />
      </main>
      <Footer />
    </>
  );
}
