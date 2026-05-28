"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { siteImages } from "@/data/images";

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

          {/* Left — image */}
          <m.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-slate-200">
              <Image
                src={siteImages.aboutTeam}
                alt="Sharma Packers team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
            </div>

            {/* Small inset image */}
            <div className="absolute -bottom-5 -right-5 w-32 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-xl hidden md:block">
              <Image
                src={siteImages.serviceWarehouse}
                alt="Sharma Packers warehouse"
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>

            {/* Stats floating card */}
            <div className="absolute bottom-6 left-6 glass border border-white/15 rounded-2xl px-5 py-4">
              <div className="flex items-center gap-5">
                {[
                  { val: "15+", label: "Years" },
                  { val: "25K+", label: "Customers" },
                  { val: "500+", label: "Cities" },
                ].map((s, i) => (
                  <div key={s.label} className={`text-center ${i > 0 ? "pl-5 border-l border-white/20" : ""}`}>
                    <p className="text-white font-bold text-xl">{s.val}</p>
                    <p className="text-white/60 text-xs mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </m.div>

          {/* Right — content */}
          <m.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-electric-600 font-semibold text-sm tracking-wider uppercase bg-electric-50 px-4 py-1.5 rounded-full mb-4">
              Our Story
            </span>
            <h2 className="section-heading mb-5">
              Built on Trust,{" "}
              <span className="text-gradient-blue">Driven by Excellence</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              Sharma Packers & Movers was founded in 2009 with a simple mission:
              to make relocation stress-free, safe, and affordable for every
              Indian family and business.
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
          </m.div>
        </div>
      </div>
    </section>
  );
}
