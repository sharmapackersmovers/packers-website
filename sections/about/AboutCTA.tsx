"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="py-20 md:py-28 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-80" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-600/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          Join 25,000+ Happy{" "}
          <span className="bg-gradient-to-r from-electric-400 to-blue-300 bg-clip-text text-transparent">
            Customers
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/65 text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Experience the Sharma Packers difference. Transparent pricing,
          professional service, and complete peace of mind.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
            Call Us Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
