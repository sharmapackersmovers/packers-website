"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  HomeShiftingIcon,
  OfficeShiftingIcon,
  CarTransportIcon,
  BikeTransportIcon,
  WarehouseIcon,
  PackingIcon,
} from "@/components/illustrations/ServiceIcons";

const services = [
  {
    title: "Home Relocation",
    description:
      "Full household shifting with professional packing, careful loading, GPS-tracked transport and neat unpacking.",
    href: "/services/household-shifting",
    Icon: HomeShiftingIcon,
    tag: "Most Popular",
    tagColor: "bg-blue-100 text-blue-700",
    accent: "from-blue-500/10 to-blue-600/5",
    border: "border-blue-100 hover:border-blue-300",
    iconBg: "bg-blue-50",
    cta: "text-blue-700",
    bullet: ["Bubble-wrap fragile items", "Dismantles & reassembles furniture", "Same-day booking available"],
  },
  {
    title: "Office Shifting",
    description:
      "Planned commercial relocation with zero operational downtime. Servers, furniture and assets — all handled.",
    href: "/services/office-relocation",
    Icon: OfficeShiftingIcon,
    tag: "Enterprise",
    tagColor: "bg-purple-100 text-purple-700",
    accent: "from-purple-500/10 to-purple-600/5",
    border: "border-purple-100 hover:border-purple-300",
    iconBg: "bg-purple-50",
    cta: "text-purple-700",
    bullet: ["Night-shift moves possible", "IT equipment specialists", "Dedicated project manager"],
  },
  {
    title: "Car Transport",
    description:
      "Door-to-door car shipping using enclosed multi-axle carriers. Zero scratches, full insurance.",
    href: "/services/car-transportation",
    Icon: CarTransportIcon,
    tag: "Fully Insured",
    tagColor: "bg-teal-100 text-teal-700",
    accent: "from-teal-500/10 to-teal-600/5",
    border: "border-teal-100 hover:border-teal-300",
    iconBg: "bg-teal-50",
    cta: "text-teal-700",
    bullet: ["Enclosed carrier transport", "Pre-& post-delivery inspection", "Luxury & sports cars too"],
  },
  {
    title: "Bike Transport",
    description:
      "Safe two-wheeler shipping with secure crating, padding and transit insurance across India.",
    href: "/services/bike-transportation",
    Icon: BikeTransportIcon,
    tag: "Quick Pickup",
    tagColor: "bg-orange-100 text-orange-700",
    accent: "from-orange-500/10 to-orange-600/5",
    border: "border-orange-100 hover:border-orange-300",
    iconBg: "bg-orange-50",
    cta: "text-orange-700",
    bullet: ["Crated transport", "All bike types & sizes", "Real-time tracking"],
  },
  {
    title: "Warehouse & Storage",
    description:
      "Secure climate-controlled storage units available short or long term, with in-out tracking.",
    href: "/services/warehouse-storage",
    Icon: WarehouseIcon,
    tag: "24/7 Secure",
    tagColor: "bg-green-100 text-green-700",
    accent: "from-green-500/10 to-green-600/5",
    border: "border-green-100 hover:border-green-300",
    iconBg: "bg-green-50",
    cta: "text-green-700",
    bullet: ["Climate-controlled units", "CCTV surveillance 24/7", "Flexible rental periods"],
  },
  {
    title: "Packing & Unpacking",
    description:
      "Expert packing using quality cartons, bubble wrap and stretch film. We also unpack and arrange.",
    href: "/services/packing-unpacking",
    Icon: PackingIcon,
    tag: "Premium Care",
    tagColor: "bg-pink-100 text-pink-700",
    accent: "from-pink-500/10 to-pink-600/5",
    border: "border-pink-100 hover:border-pink-300",
    iconBg: "bg-pink-50",
    cta: "text-pink-700",
    bullet: ["5-layer protection", "Labelled boxes", "Separate fragile handling"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.38 } },
};

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ─────────────────────────────────── */}
        <m.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm tracking-wider uppercase bg-orange-50 border border-orange-100 px-4 py-1.5 rounded-full mb-4">
            <span>🚛</span> Our Moving Services
          </span>
          <h2 className="section-heading">
            Everything for a{" "}
            <span className="text-gradient-orange">Hassle-Free Move</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            From packing your first box to placing the last piece of furniture — we cover every step
            of your relocation across India.
          </p>
        </m.div>

        {/* ── Service Cards ──────────────────────────── */}
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <m.div key={service.title} variants={cardVariants}>
              <Link
                href={service.href}
                className={`group flex flex-col bg-white border rounded-2xl overflow-hidden h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-sm ${service.border}`}
              >
                {/* Icon area */}
                <div className={`relative flex items-center justify-between p-5 bg-gradient-to-br ${service.accent}`}>
                  <div className={`p-3 rounded-xl ${service.iconBg} shadow-sm`}>
                    <service.Icon className="w-16 h-16" />
                  </div>
                  {/* Tag */}
                  <span className={`absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full ${service.tagColor}`}>
                    {service.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-bold text-navy-900 text-base mb-1.5 group-hover:text-electric-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-1.5 mb-5">
                    {service.bullet.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-auto">
                    <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${service.cta} group-hover:gap-2.5 transition-all`}>
                      View Details <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </m.div>
          ))}
        </m.div>

        {/* ── Bottom CTA ─────────────────────────────── */}
        <m.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/services" className="btn-secondary">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/contact#quote-form" className="btn-orange">
            Get Free Moving Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </m.div>
      </div>
    </section>
  );
}
