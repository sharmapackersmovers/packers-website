"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Car,
  Bike,
  Warehouse,
  Package,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Home Relocation",
    description: "Complete household shifting with professional packing & safe delivery.",
    href: "/services/household-shifting",
    color: "from-blue-500 to-blue-700",
    bg: "bg-blue-50",
    textColor: "text-blue-700",
  },
  {
    icon: Building2,
    title: "Office Shifting",
    description: "Seamless office moves with zero downtime and full setup support.",
    href: "/services/office-relocation",
    color: "from-purple-500 to-purple-700",
    bg: "bg-purple-50",
    textColor: "text-purple-700",
  },
  {
    icon: Car,
    title: "Car Transport",
    description: "Secure car transportation using enclosed carriers nationwide.",
    href: "/services/car-transportation",
    color: "from-teal-500 to-teal-700",
    bg: "bg-teal-50",
    textColor: "text-teal-700",
  },
  {
    icon: Bike,
    title: "Bike Transport",
    description: "Safe two-wheeler transport with secure packaging and insurance.",
    href: "/services/bike-transportation",
    color: "from-orange-500 to-orange-700",
    bg: "bg-orange-50",
    textColor: "text-orange-700",
  },
  {
    icon: Warehouse,
    title: "Warehouse & Storage",
    description: "Climate-controlled secure storage for short and long-term needs.",
    href: "/services/warehouse-storage",
    color: "from-green-500 to-green-700",
    bg: "bg-green-50",
    textColor: "text-green-700",
  },
  {
    icon: Package,
    title: "Packing & Unpacking",
    description: "Expert packing with quality materials for all types of belongings.",
    href: "/services/packing-unpacking",
    color: "from-pink-500 to-pink-700",
    bg: "bg-pink-50",
    textColor: "text-pink-700",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-electric-600 font-semibold text-sm tracking-wider uppercase bg-electric-50 px-4 py-1.5 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="section-heading">
            Everything You Need for a{" "}
            <span className="text-gradient-blue">Stress-Free Move</span>
          </h2>
          <p className="section-subheading">
            From packing to delivery, we handle every aspect of your relocation
            with professional expertise and care.
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariants}>
              <Link
                href={service.href}
                className="group block bg-white border border-slate-100 rounded-2xl p-6 card-hover hover:border-slate-200 h-full"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-bold text-navy-900 text-lg mb-2 group-hover:text-electric-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <span className="inline-flex items-center gap-1.5 text-electric-600 text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-secondary">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
