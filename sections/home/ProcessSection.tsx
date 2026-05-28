"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    emoji: "📋",
    title: "Book & Get Quote",
    description:
      "Fill our quick quote form or call. We confirm your booking within 30 minutes with a transparent, all-inclusive estimate.",
    color: "border-blue-200 bg-blue-50",
    badge: "bg-blue-600",
    dot: "bg-blue-500",
  },
  {
    step: "02",
    emoji: "📦",
    title: "Expert Packing",
    description:
      "Our team arrives with premium materials — 5-layer wrapping for fragile items, labelled boxes for easy unpacking.",
    color: "border-purple-200 bg-purple-50",
    badge: "bg-purple-600",
    dot: "bg-purple-500",
  },
  {
    step: "03",
    emoji: "🚚",
    title: "GPS-Tracked Move",
    description:
      "Goods loaded onto our insured trucks. Track your shipment live on your phone — every stop, every update.",
    color: "border-teal-200 bg-teal-50",
    badge: "bg-teal-600",
    dot: "bg-teal-500",
  },
  {
    step: "04",
    emoji: "🏠",
    title: "Delivery & Setup",
    description:
      "We unload, unpack, and arrange furniture at your new home. Zero damage guaranteed — you sign off when happy.",
    color: "border-orange-200 bg-orange-50",
    badge: "bg-orange-500",
    dot: "bg-orange-500",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm tracking-wider uppercase bg-teal-50 border border-teal-100 px-4 py-1.5 rounded-full mb-4">
            <span>🗺️</span> How We Work
          </span>
          <h2 className="section-heading">
            Your Move in{" "}
            <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </h2>
          <p className="section-subheading max-w-xl mx-auto">
            A streamlined process so your relocation is worry-free — from the first call to the last box unpacked.
          </p>
        </m.div>

        {/* ── Road journey ─────────────────────────── */}
        <div className="relative">
          {/* Road SVG connector (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[14%] right-[14%] z-0">
            <svg viewBox="0 0 700 24" fill="none" className="w-full h-6" preserveAspectRatio="none">
              {/* Road base */}
              <rect y="8" width="700" height="10" rx="5" fill="#e2e8f0" />
              {/* Road dashes */}
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <rect key={i} x={40 + i * 76} y="11.5" width="36" height="3" rx="1.5" fill="#cbd5e1" />
              ))}
              {/* Orange accent line */}
              <rect y="8" width="700" height="3" rx="1.5" fill="#f97316" opacity="0.35" />
              {/* Truck icon on road */}
              <g transform="translate(314, 2)">
                <rect width="36" height="16" rx="3" fill="#0f172a" />
                <rect x="2" y="2" width="12" height="12" rx="2" fill="#1e3a8a" />
                <rect x="3" y="3" width="9" height="8" rx="1" fill="#60a5fa" opacity="0.8" />
                <rect x="16" y="3" width="18" height="10" rx="1" fill="#f97316" />
                <circle cx="8" cy="16" r="4" fill="#1e293b" />
                <circle cx="28" cy="16" r="4" fill="#1e293b" />
              </g>
            </svg>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, i) => (
              <m.div
                key={step.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.38, delay: i * 0.1 }}
                className="group relative"
              >
                {/* Step number + emoji bubble */}
                <div className="flex justify-center mb-5">
                  <div className="relative">
                    <div className={`w-[104px] h-[104px] ${step.color} border-2 rounded-[28px] flex flex-col items-center justify-center shadow-sm group-hover:shadow-md transition-shadow`}>
                      <span className="text-4xl leading-none mb-1">{step.emoji}</span>
                      <span className="text-xs font-bold text-slate-400">STEP {step.step}</span>
                    </div>
                    {/* Badge */}
                    <div className={`absolute -top-2.5 -right-2.5 w-7 h-7 ${step.badge} text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md border-2 border-white`}>
                      {step.step}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center px-2">
                  <h3 className="font-bold text-navy-900 text-base mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Mobile vertical connector */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex flex-col items-center mt-5 mb-1">
                    <div className="w-0.5 h-5 bg-gradient-to-b from-slate-200 to-slate-100" />
                    <div className={`w-2 h-2 ${step.dot} rounded-full`} />
                  </div>
                )}
              </m.div>
            ))}
          </div>
        </div>

        {/* ── CTA ──────────────────────────────────── */}
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="mt-14 bg-gradient-to-r from-navy-900 to-navy-800 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-navy-900/20"
        >
          <div>
            <p className="text-white/60 text-sm font-medium mb-1">Ready to move?</p>
            <h3 className="text-white text-2xl font-bold">Book your move in under 2 minutes</h3>
            <p className="text-white/50 text-sm mt-1.5">
              Get a free quote • On-site survey available • Guaranteed dates
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact#quote-form"
              className="btn-orange text-sm px-6 py-3"
            >
              Get Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl transition-all text-sm border border-white/20"
            >
              📞 Call Now
            </a>
          </div>
        </m.div>
      </div>
    </section>
  );
}
