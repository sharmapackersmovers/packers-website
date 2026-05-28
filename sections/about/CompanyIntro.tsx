"use client";

import { motion } from "framer-motion";
import { CheckCircle, Package } from "lucide-react";

const highlights = [
  "Founded in 2009 in New Delhi",
  "Over 25,000 satisfied customers",
  "Operating in 500+ cities across India",
  "Team of 500+ trained professionals",
  "Fleet of 200+ modern moving vehicles",
  "ISO certified operations",
];

export default function CompanyIntro() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-navy-950 to-navy-800 aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-10">
                <div className="w-24 h-24 mx-auto mb-5 bg-gradient-to-br from-electric-500 to-electric-700 rounded-3xl flex items-center justify-center shadow-2xl shadow-electric-500/40">
                  <Package className="w-12 h-12 text-white" />
                </div>
                <p className="text-white/70 text-sm">Our Headquarters</p>
                <p className="text-white font-semibold mt-1">New Delhi, India</p>
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 glass border border-white/10 rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-2xl">15+</p>
                    <p className="text-white/60 text-xs">Years of Excellence</p>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div>
                    <p className="text-white font-bold text-2xl">25K+</p>
                    <p className="text-white/60 text-xs">Happy Families</p>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div>
                    <p className="text-white font-bold text-2xl">500+</p>
                    <p className="text-white/60 text-xs">Cities Served</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-electric-600 font-semibold text-sm tracking-wider uppercase bg-electric-50 px-4 py-1.5 rounded-full mb-4">
              Our Story
            </span>
            <h2 className="section-heading mb-5">
              Built on Trust,{" "}
              <span className="text-gradient-blue">Driven by Excellence</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              Sharma Packers & Movers was founded in 2009 with a simple
              mission: to make relocation stress-free, safe, and affordable for
              every Indian family and business.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              What started as a small team of 5 passionate movers has grown into
              India&apos;s trusted relocation brand with 500+ professionals
              serving customers in every corner of the country. We believe that
              every move — big or small — deserves the same level of dedication
              and care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-electric-600 shrink-0" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
