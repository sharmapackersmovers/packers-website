import { Shield, Award, Users } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 hero-gradient overflow-hidden">
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
          <Award className="w-3.5 h-3.5 text-yellow-400" />
          <span className="text-white/90 text-sm font-medium">Trusted Since 2009</span>
        </div>

        <h1
          className="animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          Moving India,{" "}
          <span className="bg-gradient-to-r from-electric-400 to-blue-300 bg-clip-text text-transparent">
            One Home at a Time
          </span>
        </h1>

        <p className="animate-fade-in-up delay-200 text-white/65 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          For over 15 years, Sharma Packers & Movers has been India&apos;s most
          trusted relocation partner — delivering safe, reliable, and affordable
          moving services to families and businesses across the nation.
        </p>

        <div className="animate-fade-in delay-300 flex flex-wrap items-center justify-center gap-8">
          {[
            { icon: Shield, text: "100% Insured" },
            { icon: Award, text: "ISO Certified" },
            { icon: Users, text: "500+ Team Members" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-white/70">
              <Icon className="w-4 h-4 text-electric-400" />
              <span className="text-sm font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-10 md:h-14">
          <path d="M0 60L1440 60L1440 0C1200 40 960 60 720 50C480 40 240 10 0 40L0 60Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
