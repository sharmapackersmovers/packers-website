"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="py-20 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-80" />
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-electric-600/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <m.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="text-4xl md:text-5xl font-bold text-white mb-5"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          Not Sure Which Service?{" "}
          <span className="bg-gradient-to-r from-electric-400 to-blue-300 bg-clip-text text-transparent">
            Let Us Help
          </span>
        </m.h2>

        <m.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="text-white/65 text-xl max-w-2xl mx-auto mb-10"
        >
          Talk to our experts and we&apos;ll recommend the perfect service for
          your needs.
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact#quote-form"
            className="btn-orange text-base px-8 py-4 w-full sm:w-auto justify-center"
          >
            Get Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl transition-all border border-white/20 text-base w-full sm:w-auto"
          >
            <Phone className="w-4 h-4" />
            Call +91 98765 43210
          </a>
        </m.div>
      </div>
    </section>
  );
}
