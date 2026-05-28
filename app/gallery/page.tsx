import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import GalleryContent from "@/sections/gallery/GalleryContent";

export const metadata: Metadata = {
  title: "Gallery | Sharma Packers & Movers",
  description:
    "Browse our photo gallery showcasing successful home relocations, office moves, car transport, and more by Sharma Packers & Movers.",
};

export default function GalleryPage() {
  return (
    <main>
      <Navbar />
      <GalleryContent />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
