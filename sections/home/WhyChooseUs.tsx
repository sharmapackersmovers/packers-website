"use client";

import Image from "next/image";
import { m } from "framer-motion";
import {
  Shield,
  Package,
  DollarSign,
  Clock,
  MapPin,
  Headphones,
  CheckCircle,
} from "lucide-react";
import { siteImages } from "@/data/images";

const features = [
  {
    icon: Shield,
    title: "Trusted Professionals",
    description: "Background-verified, trained staff with 5+ years of experience.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Package,
    title: "Secure Packaging",
    description: "Premium bubble wrap, corrugated boxes, and foam padding for every item.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Transparent, competitive pricing with no hidden charges.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Your goods delivered on the promised date — every single time.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: MapPin,
    title: "GPS Tracking",
    description: "Track your shipment in real-time — always know where your goods are.",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated support team is available round the clock.",
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 section-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left — image ─────────────────────────────────────────── */}
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
                src={siteImages.whyChooseUs}
                alt="Professional movers carefully packing household items"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-navy-950/20 to-transparent" />
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-5 border border-slate-100 flex gap-6">
              {[
                { value: "15+", label: "Years" },
                { value: "4.9", label: "Rating" },
                { value: "0%", label: "Damage" },
              ].map((s, i) => (
                <div key={s.label} className={`text-center ${i > 0 ? "pl-6 border-l border-slate-100" : ""}`}>
                  <p className="text-2xl font-bold text-navy-900">{s.value}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Verified badge */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-slate-100 flex items-center gap-2.5">
              <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-navy-900 text-sm leading-none mb-0.5">ISO Certified</p>
                <p className="text-slate-400 text-xs">Verified Company</p>
              </div>
            </div>
          </m.div>

          {/* ── Right — content ──────────────────────────────────────── */}
          <div>
            <m.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="inline-block text-electric-600 font-semibold text-sm tracking-wider uppercase bg-electric-50 px-4 py-1.5 rounded-full mb-4">
                Why Choose Us
              </span>
              <h2 className="section-heading mb-4">
                The Moving Company{" "}
                <span className="text-gradient-blue">You Can Trust</span>
              </h2>
              <p className="text-slate-500 text-base leading-relaxed">
                With 15+ years of experience and 25,000+ satisfied customers, we
                have built a reputation for excellence, reliability, and
                professional service across India.
              </p>
            </m.div>

            <m.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.map((feature) => (
                <m.div
                  key={feature.title}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-4 border border-slate-100 card-hover flex items-start gap-3"
                >
                  <div className={`w-10 h-10 ${feature.bg} rounded-xl flex items-center justify-center shrink-0`}>
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 text-sm mb-1">{feature.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </m.div>
              ))}
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}
