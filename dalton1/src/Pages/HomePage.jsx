import Hero from "../components/Hero";
import TrustStats from "../components/TrustStats";
import Programs from "../components/Programs";
import Subjects from "../components/Subjects";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Resources from "../components/Resources";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStats />
      <Programs />
      <Subjects />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <Resources />
      <FAQ />
      <FinalCTA />
    </>
  );
}