import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import AboutHero from "@/sections/about/AboutHero";
import CompanyIntro from "@/sections/about/CompanyIntro";
import MissionVision from "@/sections/about/MissionVision";
import TeamSection from "@/sections/about/TeamSection";
import CompanyTimeline from "@/sections/about/CompanyTimeline";
import AboutStats from "@/sections/about/AboutStats";
import AboutCTA from "@/sections/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us | Sharma Packers & Movers",
  description:
    "Learn about Sharma Packers & Movers — our story, mission, team, and 15+ years of delivering safe and reliable relocation services across India.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <CompanyIntro />
      <MissionVision />
      <AboutStats />
      <CompanyTimeline />
      <TeamSection />
      <AboutCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
