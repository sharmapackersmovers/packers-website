"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Shield, Star, Zap } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-navy-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 hero-gradient opacity-80" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-600/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6"
        >
          <Zap className="w-3.5 h-3.5 text-yellow-400" />
          <span className="text-white/90 text-sm font-medium">
            Get a quote in under 30 minutes
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          Ready to Move{" "}
          <span className="text-gradient-blue bg-gradient-to-r from-electric-400 to-blue-300 bg-clip-text text-transparent">
            Safely?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-white/65 text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Let our professionals handle your move with care, speed, and complete
          transparency. No hidden charges, guaranteed satisfaction.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
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
        </motion.div>
      </div>
    </section>
  );
}
