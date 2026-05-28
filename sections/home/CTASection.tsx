"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight, Phone, Shield, Star, Zap } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background — same warm daytime gradient as hero */}
      <div className="absolute inset-0 hero-gradient" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6"
        >
          <Zap className="w-3.5 h-3.5 text-yellow-400" />
          <span className="text-white/90 text-sm font-medium">
            Get a quote in under 30 minutes
          </span>
        </m.div>

        <m.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          Ready to Move{" "}
          <span className="text-gradient-blue bg-gradient-to-r from-electric-400 to-blue-300 bg-clip-text text-transparent">
            Safely?
          </span>
        </m.h2>

        <m.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="text-white/65 text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Let our professionals handle your move with care, speed, and complete
          transparency. No hidden charges, guaranteed satisfaction.
        </m.p>

        {/* CTAs */}
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            href="/contact#quote-form"
            className="btn-orange text-base px-8 py-4 w-full sm:w-auto justify-center"
          >
            Get Free Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl transition-all duration-200 border border-white/20 text-base w-full sm:w-auto"
          >
            <Phone className="w-4 h-4" />
            +91 98765 43210
          </a>
        </m.div>

        {/* Trust signals */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {[
            { icon: Shield, text: "100% Insured Moves" },
            { icon: Star, text: "4.9/5 Customer Rating" },
            { icon: Phone, text: "24/7 Support Available" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-white/50">
              <Icon className="w-4 h-4 text-electric-400" />
              <span className="text-sm">{text}</span>
            </div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
