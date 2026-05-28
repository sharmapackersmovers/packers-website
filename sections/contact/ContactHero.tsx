import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ChevronRight, Home } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative pt-24 pb-0 md:pt-28 overflow-hidden bg-white">
      {/* Top colour bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-400 to-green-500" />

      {/* Light gradient fill */}
      <div className="absolute inset-0 page-banner-light" />

      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-amber-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-52 h-52 bg-green-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 md:pb-14">
        {/* Breadcrumb */}
        <nav className="animate-fade-in-up delay-0 flex items-center gap-1.5 text-sm text-slate-400 mb-8 pt-4">
          <Link href="/" className="hover:text-orange-500 transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" /> Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-600 font-medium">Contact Us</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div>
            <div className="animate-fade-in-up delay-0 inline-flex items-center gap-2 bg-green-100 border border-green-200 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-700 text-sm font-semibold">Get a response within 30 minutes</span>
            </div>

            <h1
              className="animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-[3rem] font-extrabold text-navy-900 leading-tight mb-4"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Let&apos;s Plan Your{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                Perfect Move
              </span>
            </h1>

            <p className="animate-fade-in-up delay-200 text-slate-500 text-lg leading-relaxed mb-8 max-w-lg">
              Fill in your details below and get a free, detailed quote. Our team
              will reach out within 30 minutes with a personalised plan.
            </p>
          </div>

          {/* Right — contact info cards */}
          <div className="animate-fade-in delay-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                icon: Phone,
                label: "Call Us (24/7)",
                value: "+91 98765 43210",
                sub: "Instant response",
                color: "bg-green-50 border-green-100",
                iconColor: "bg-green-500",
                href: "tel:+919876543210",
              },
              {
                icon: Mail,
                label: "Email Us",
                value: "info@sharmapackers.in",
                sub: "Reply within 2 hours",
                color: "bg-blue-50 border-blue-100",
                iconColor: "bg-blue-500",
                href: "mailto:info@sharmapackers.in",
              },
              {
                icon: MapPin,
                label: "Head Office",
                value: "New Delhi, India",
                sub: "500+ cities covered",
                color: "bg-orange-50 border-orange-100",
                iconColor: "bg-orange-500",
                href: "#",
              },
              {
                icon: Clock,
                label: "Working Hours",
                value: "24 × 7 Available",
                sub: "All days of the year",
                color: "bg-purple-50 border-purple-100",
                iconColor: "bg-purple-500",
                href: "#",
              },
            ].map(({ icon: Icon, label, value, sub, color, iconColor, href }) => (
              <a
                key={label}
                href={href}
                className={`flex items-center gap-3 p-4 rounded-2xl border transition-shadow hover:shadow-md ${color}`}
              >
                <div className={`w-10 h-10 ${iconColor} rounded-xl flex items-center justify-center shrink-0`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{label}</p>
                  <p className="text-sm font-bold text-navy-900 truncate">{value}</p>
                  <p className="text-[11px] text-slate-400">{sub}</p>
                </div>
              </a>
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
