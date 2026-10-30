import HeroSection from "@/components/landing/HeroSection";
import WhoWeHelp from "@/components/landing/WhoWeHelp";
import ToolsStack from "@/components/landing/ToolsStack";
import ThreeWays from "@/components/landing/ThreeWays";
import ThreeSteps from "@/components/landing/ThreeSteps";
import CaseStudies from "@/components/landing/CaseStudies";
import Testimonials from "@/components/landing/Testimonials";
import ComparisonTable from "@/components/landing/ComparisonTable";
import FAQSection from "@/components/landing/FAQSection";
import ContactForm from "@/components/landing/ContactForm";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <WhoWeHelp />
      <ToolsStack />
      <ThreeWays />
      <ThreeSteps />
      <CaseStudies />
      <Testimonials />
      <ComparisonTable />
      <FAQSection />
      <ContactForm />
    </>
  );
}
