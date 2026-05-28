"use client";

import { m } from "framer-motion";
import { Users, MapPin, Package, Award } from "lucide-react";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

const stats = [
  {
    icon: Users,
    value: 25000,
    suffix: "+",
    label: "Happy Customers",
    description: "Families & businesses served",
    color: "from-blue-500 to-blue-700",
    delay: 0,
  },
  {
    icon: MapPin,
    value: 500,
    suffix: "+",
    label: "Cities Served",
    description: "Pan-India coverage",
    color: "from-teal-500 to-teal-700",
    delay: 120,
  },
  {
    icon: Package,
    value: 50000,
    suffix: "+",
    label: "Deliveries Completed",
    description: "Successful relocations",
    color: "from-purple-500 to-purple-700",
    delay: 400,
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Years Experience",
    description: "Trusted since 2009",
    color: "from-orange-500 to-orange-700",
    delay: 600,
  },
];

function StatCard({
  stat,
}: {
  stat: (typeof stats)[0];
}) {
  const { count, ref } = useCounterAnimation({
    end: stat.value,
    duration: 2200,
    delay: stat.delay,
  });

  return (
    <m.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: stat.delay / 1000 }}
      className="text-center"
    >
      <div
        className={`w-14 h-14 mx-auto bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
      >
        <stat.icon className="w-7 h-7 text-white" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count.toLocaleString("en-IN")}
        {stat.suffix}
      </div>
      <div className="text-white font-semibold text-base mb-1">
        {stat.label}
      </div>
      <div className="text-white/50 text-sm">{stat.description}</div>
    </m.div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 md:py-28 bg-navy-950 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-electric-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-electric-400 font-semibold text-sm tracking-wider uppercase bg-electric-600/15 px-4 py-1.5 rounded-full mb-4">
            Our Achievements
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Numbers That Define{" "}
            <span className="text-gradient-blue bg-gradient-to-r from-electric-400 to-blue-300 bg-clip-text text-transparent">
              Our Excellence
            </span>
          </h2>
        </m.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
