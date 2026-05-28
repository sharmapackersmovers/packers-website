"use client";

import { m } from "framer-motion";
import { ClipboardList, Package, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Book Service",
    description:
      "Fill out our quick quote form or call us. We'll confirm your booking within 30 minutes with a detailed estimate.",
    color: "from-blue-500 to-blue-700",
    glow: "shadow-blue-500/30",
  },
  {
    step: "02",
    icon: Package,
    title: "Professional Packing",
    description:
      "Our trained team arrives on time with premium materials and carefully packs all your belongings with precision.",
    color: "from-purple-500 to-purple-700",
    glow: "shadow-purple-500/30",
  },
  {
    step: "03",
    icon: Truck,
    title: "Safe Transportation",
    description:
      "Your goods are loaded and transported in our GPS-tracked vehicles. Track in real-time through our portal.",
    color: "from-teal-500 to-teal-700",
    glow: "shadow-teal-500/30",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "Safe Delivery",
    description:
      "We deliver, unload, and help set up at your new location. Full satisfaction guaranteed before we leave.",
    color: "from-orange-500 to-orange-700",
    glow: "shadow-orange-500/30",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-electric-600 font-semibold text-sm tracking-wider uppercase bg-electric-50 px-4 py-1.5 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="section-heading">
            Your Move in{" "}
            <span className="text-gradient-blue">4 Simple Steps</span>
          </h2>
          <p className="section-subheading">
            A streamlined process designed to make your relocation as smooth and
            stress-free as possible.
          </p>
        </m.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-500 via-teal-500 to-orange-500 opacity-20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <m.div
                key={step.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.12 }}
                className="relative text-center group"
              >
                {/* Step number */}
                <div className="relative inline-flex mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-xl ${step.glow} group-hover:scale-105 transition-transform duration-300 mx-auto`}
                  >
                    <step.icon className="w-9 h-9 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-7 h-7 bg-navy-900 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white shadow-md">
                    {step.step}
                  </div>
                </div>

                <h3 className="font-bold text-navy-900 text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow (mobile/tablet) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-slate-200 to-transparent" />
                  </div>
                )}
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
