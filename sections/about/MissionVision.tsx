"use client";

import { m } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide every customer with a seamless, stress-free relocation experience through professional service, transparent pricing, and unwavering commitment to safety. We strive to be the most trusted name in the Indian moving industry.",
    color: "from-blue-500 to-blue-700",
    bg: "from-blue-50 to-blue-50/50",
    border: "border-blue-100",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become India's #1 integrated logistics and relocation company — making professional moving accessible, affordable, and reliable for every household and business across the country.",
    color: "from-purple-500 to-purple-700",
    bg: "from-purple-50 to-purple-50/50",
    border: "border-purple-100",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "We are built on trust, integrity, and customer-first thinking. Every decision we make is guided by our commitment to safety, transparency, and delivering above and beyond expectations — every single time.",
    color: "from-orange-500 to-orange-700",
    bg: "from-orange-50 to-orange-50/50",
    border: "border-orange-100",
  },
];

export default function MissionVision() {
  return (
    <section className="py-20 md:py-28 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-electric-600 font-semibold text-sm tracking-wider uppercase bg-electric-50 px-4 py-1.5 rounded-full mb-4">
            Who We Are
          </span>
          <h2 className="section-heading">
            Purpose, Vision &{" "}
            <span className="text-gradient-blue">Core Values</span>
          </h2>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <m.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.1 }}
              className={`bg-gradient-to-br ${card.bg} border ${card.border} rounded-3xl p-8 card-hover`}
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
              >
                <card.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-navy-900 text-xl mb-4">
                {card.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {card.description}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
