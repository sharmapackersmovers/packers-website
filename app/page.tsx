import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import HeroSection from "@/sections/home/HeroSection";
import ServicesSection from "@/sections/home/ServicesSection";
import WhyChooseUs from "@/sections/home/WhyChooseUs";
import StatsSection from "@/sections/home/StatsSection";
import ProcessSection from "@/sections/home/ProcessSection";
import TestimonialsSection from "@/sections/home/TestimonialsSection";
import FAQSection from "@/sections/home/FAQSection";
import CTASection from "@/sections/home/CTASection";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <StatsSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
