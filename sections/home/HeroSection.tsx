import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Shield,
  Star,
  CheckCircle,
  MapPin,
  Truck,
  Clock,
} from "lucide-react";

const trustBadges = [
  { icon: Shield, text: "100% Insured" },
  { icon: Star, text: "4.9 Rated" },
  { icon: CheckCircle, text: "25K+ Happy Customers" },
];

const floatingCards = [
  {
    icon: MapPin,
    title: "GPS Tracking",
    sub: "Real-time updates",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Truck,
    title: "Safe Delivery",
    sub: "Zero damage policy",
    color: "from-teal-500 to-teal-700",
  },
  {
    icon: Clock,
    title: "On-Time Guarantee",
    sub: "Always punctual",
    color: "from-orange-500 to-orange-700",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen hero-gradient flex items-center overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Gradient blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-electric-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — pure CSS animations, no JS needed */}
          <div>
            {/* Badge */}
            <div className="animate-fade-in-up delay-0 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Trusted by 25,000+ Families
              </span>
            </div>

            {/* Heading */}
            <h1
              className="animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Safe & Reliable{" "}
              <span className="bg-gradient-to-r from-electric-400 to-blue-300 bg-clip-text text-transparent">
                Packers & Movers
              </span>{" "}
              Across India
            </h1>

            <p className="animate-fade-in-up delay-200 text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
              Expert relocation services for homes, offices, and vehicles. GPS
              tracking, full insurance, and zero damage guarantee. Serving 500+
              cities across India.
            </p>

            {/* CTAs */}
            <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/contact#quote-form"
                className="btn-orange text-base px-7 py-3.5 justify-center"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl transition-all duration-200 border border-white/20 backdrop-blur-sm text-base"
              >
                <Phone className="w-4 h-4" />
                Call Now: +91 98765 43210
              </a>
            </div>

            {/* Trust badges */}
            <div className="animate-fade-in delay-400 flex flex-wrap items-center gap-4">
              {trustBadges.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-white/70"
                >
                  <Icon className="w-4 h-4 text-electric-400" />
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual card */}
          <div className="animate-fade-in delay-200 relative hidden lg:block">
            <div className="relative glass rounded-3xl p-8 border border-white/10">
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-white/5 to-white/10 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-electric-500 to-electric-700 rounded-3xl flex items-center justify-center shadow-2xl shadow-electric-500/40">
                    <Truck className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-white/50 text-sm">Professional Moving Truck</p>
                  <p className="text-white/30 text-xs mt-1">GPS Tracked</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
                <div className="flex-1">
                  <p className="text-white/50 text-xs mb-0.5">From</p>
                  <p className="text-white font-semibold text-sm">New Delhi</p>
                </div>
                <div className="w-8 h-[2px] bg-electric-500/50 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-electric-500 rounded-full" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-white/50 text-xs mb-0.5">To</p>
                  <p className="text-white font-semibold text-sm">Mumbai</p>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            {floatingCards.map((card, i) => (
              <div
                key={card.title}
                className={`animate-fade-in absolute glass border border-white/10 rounded-2xl p-3 flex items-center gap-3 ${
                  i === 0
                    ? "-left-10 top-1/4"
                    : i === 1
                    ? "-right-8 top-1/2"
                    : "-left-6 bottom-8"
                }`}
                style={{ animationDelay: `${300 + i * 100}ms` }}
              >
                <div
                  className={`w-9 h-9 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center shrink-0`}
                >
                  <card.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">{card.title}</p>
                  <p className="text-white/50 text-[10px]">{card.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-12 md:h-16">
          <path d="M0 60L1440 60L1440 0C1200 40 960 60 720 50C480 40 240 10 0 40L0 60Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
