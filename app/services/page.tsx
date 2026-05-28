import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ServicesHero from "@/sections/services/ServicesHero";
import ServicesGrid from "@/sections/services/ServicesGrid";
import ServicesCTA from "@/sections/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Services | Sharma Packers & Movers",
  description:
    "Explore our full range of packing and moving services — household shifting, office relocation, car transport, bike transport, warehouse storage, and more.",
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
