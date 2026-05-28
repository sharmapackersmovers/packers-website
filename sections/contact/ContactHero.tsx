import { MessageSquare } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 hero-gradient overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-electric-600/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up delay-0 inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6">
          <MessageSquare className="w-3.5 h-3.5 text-electric-400" />
          <span className="text-white/90 text-sm font-medium">
            Get a response within 30 minutes
          </span>
        </div>

        <h1
          className="animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          Let&apos;s Plan Your{" "}
          <span className="bg-gradient-to-r from-electric-400 to-blue-300 bg-clip-text text-transparent">
            Perfect Move
          </span>
        </h1>

        <p className="animate-fade-in-up delay-200 text-white/65 text-xl max-w-2xl mx-auto leading-relaxed">
          Fill in your details below and get a free, detailed quote. Our team
          will reach out within 30 minutes to assist you.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-10 md:h-14">
          <path d="M0 60L1440 60L1440 0C1200 40 960 60 720 50C480 40 240 10 0 40L0 60Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
