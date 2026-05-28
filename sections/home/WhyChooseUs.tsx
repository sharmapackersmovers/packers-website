"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Package,
  DollarSign,
  Clock,
  MapPin,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted Professionals",
    description:
      "Background-verified, trained staff with 5+ years of experience in professional packing and moving.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: Package,
    title: "Secure Packaging",
    description:
      "Premium quality packing materials — bubble wrap, corrugated boxes, foam padding for every item.",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description:
      "Transparent, competitive pricing with no hidden charges. Get the best value for professional service.",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We honor every commitment. Your goods are delivered on the promised date — every single time.",
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    icon: MapPin,
    title: "GPS Tracking",
    description:
      "Track your shipment in real-time through our portal. Always know where your belongings are.",
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to assist you at every step.",
    color: "text-pink-600",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-electric-600 font-semibold text-sm tracking-wider uppercase bg-electric-50 px-4 py-1.5 rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="section-heading mb-5">
              The Moving Company{" "}
              <span className="text-gradient-blue">You Can Trust</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              With 15+ years of experience and 25,000+ satisfied customers, we
              have built a reputation for excellence, reliability, and
              professional service across India.
            </p>

            {/* Big number */}
            <div className="flex items-start gap-8">
              <div>
                <p className="text-5xl font-bold text-navy-900">15+</p>
                <p className="text-slate-500 text-sm mt-1">Years Experience</p>
              </div>
              <div className="w-px bg-slate-200 self-stretch" />
              <div>
                <p className="text-5xl font-bold text-navy-900">4.9</p>
                <p className="text-slate-500 text-sm mt-1">Customer Rating</p>
              </div>
              <div className="w-px bg-slate-200 self-stretch" />
              <div>
                <p className="text-5xl font-bold text-navy-900">0%</p>
                <p className="text-slate-500 text-sm mt-1">Damage Rate</p>
              </div>
            </div>
          </motion.div>

          {/* Right grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className={`bg-white rounded-2xl p-5 border ${feature.border} card-hover`}
              >
                <div
                  className={`w-10 h-10 ${feature.bg} rounded-xl flex items-center justify-center mb-3`}
                >
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                </div>
                <h3 className="font-semibold text-navy-900 text-sm mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
