import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ContactHero from "@/sections/contact/ContactHero";
import ContactInfo from "@/sections/contact/ContactInfo";
import ContactForm from "@/sections/contact/ContactForm";
import MapSection from "@/sections/contact/MapSection";

export const metadata: Metadata = {
  title: "Contact Us | Sharma Packers & Movers",
  description:
    "Get in touch with Sharma Packers & Movers for a free quote, enquiries, or support. Available 24/7 across India.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <MapSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
