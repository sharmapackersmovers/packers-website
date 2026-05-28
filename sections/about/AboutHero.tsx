import Link from "next/link";
import { Shield, Award, Users, ChevronRight, Home } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative pt-24 pb-0 md:pt-28 overflow-hidden bg-white">
      {/* Top colour bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-400 to-sky-500" />

      {/* Light gradient fill */}
      <div className="page-banner-light absolute inset-0" />

      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-48 h-48 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
        {/* Breadcrumb */}
        <nav className="animate-fade-in-up delay-0 flex items-center gap-1.5 text-sm text-slate-400 mb-8 pt-4">
          <Link href="/" className="hover:text-orange-500 transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" /> Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-600 font-medium">About Us</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <div className="animate-fade-in-up delay-0 inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-1.5 mb-5">
              <Award className="w-3.5 h-3.5 text-orange-600" />
              <span className="text-orange-700 text-sm font-semibold">Trusted Since 2009</span>
            </div>

            <h1
              className="animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold text-navy-900 leading-tight mb-4"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Moving India,{" "}
              <span className="bg-gradient-to-r from-orange-500 to-sky-500 bg-clip-text text-transparent">
                One Home at a Time
              </span>
            </h1>

            <p className="animate-fade-in-up delay-200 text-slate-500 text-lg leading-relaxed mb-8 max-w-lg">
              For over 15 years, Sharma Packers &amp; Movers has been India&apos;s most trusted
              relocation partner — safe, reliable, and affordable for every family and business.
            </p>

            <div className="animate-fade-in delay-300 flex flex-wrap gap-4">
              {[
                { icon: Shield, text: "100% Insured", color: "bg-green-50 text-green-700 border-green-200" },
                { icon: Award, text: "ISO Certified", color: "bg-blue-50 text-blue-700 border-blue-200" },
                { icon: Users, text: "500+ Team Members", color: "bg-orange-50 text-orange-700 border-orange-200" },
              ].map(({ icon: Icon, text, color }) => (
                <div key={text} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold ${color}`}>
                  <Icon className="w-4 h-4" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — stat cards */}
          <div className="animate-fade-in delay-200 grid grid-cols-2 gap-4">
            {[
              { value: "15+", label: "Years of Experience", emoji: "🏆", bg: "bg-orange-50 border-orange-100" },
              { value: "25K+", label: "Happy Customers", emoji: "😊", bg: "bg-sky-50 border-sky-100" },
              { value: "500+", label: "Cities Served", emoji: "📍", bg: "bg-green-50 border-green-100" },
              { value: "200+", label: "Moving Vehicles", emoji: "🚚", bg: "bg-amber-50 border-amber-100" },
            ].map((stat) => (
              <div key={stat.label} className={`rounded-2xl border p-5 text-center ${stat.bg}`}>
                <div className="text-3xl mb-1">{stat.emoji}</div>
                <p className="text-3xl font-extrabold text-navy-900">{stat.value}</p>
                <p className="text-slate-500 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="relative">
        <svg viewBox="0 0 1440 48" fill="none" preserveAspectRatio="none" className="w-full h-8 md:h-12">
          <path d="M0 48L1440 48L1440 0C1200 32 960 48 720 40C480 32 240 6 0 30L0 48Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
