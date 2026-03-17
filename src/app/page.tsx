import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import SeedsShowcase from "@/components/seeds-showcase";
import HowItWorks from "@/components/how-it-works";
import Benefits from "@/components/benefits";
import WhyDifferent from "@/components/why-different";
import Testimonials from "@/components/testimonials";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <SeedsShowcase />
      <HowItWorks />
      <Benefits />
      <WhyDifferent />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
}
