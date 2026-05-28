import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import HeroSection from "@/sections/home/HeroSection";
import TrustBar from "@/sections/home/TrustBar";
import ServicesSection from "@/sections/home/ServicesSection";
import WhyChooseUs from "@/sections/home/WhyChooseUs";
import StatsSection from "@/sections/home/StatsSection";
import ProcessSection from "@/sections/home/ProcessSection";
import FAQSection from "@/sections/home/FAQSection";
import CTASection from "@/sections/home/CTASection";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <WhyChooseUs />
      <StatsSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
