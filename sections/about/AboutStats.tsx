"use client";

import { motion } from "framer-motion";
import { Users, MapPin, Package, Award, Truck, Star } from "lucide-react";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

const stats = [
  { icon: Users, value: 25000, suffix: "+", label: "Happy Customers", delay: 0 },
  { icon: MapPin, value: 500, suffix: "+", label: "Cities Served", delay: 150 },
  { icon: Package, value: 50000, suffix: "+", label: "Moves Completed", delay: 300 },
  { icon: Award, value: 15, suffix: "+", label: "Years of Experience", delay: 450 },
  { icon: Truck, value: 200, suffix: "+", label: "Moving Vehicles", delay: 600 },
  { icon: Star, value: 4.9, suffix: "/5", label: "Customer Rating", delay: 750 },
];

function StatItem({ stat }: { stat: (typeof stats)[0] }) {
  const isDecimal = stat.value % 1 !== 0;
  const { count, ref } = useCounterAnimation({
    end: isDecimal ? Math.floor(stat.value) : stat.value,
    duration: 2000,
    delay: stat.delay,
  });

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: stat.delay / 1000 }}
      className="text-center"
    >
      <div className="w-12 h-12 mx-auto bg-electric-600/15 rounded-xl flex items-center justify-center mb-3">
        <stat.icon className="w-6 h-6 text-electric-400" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-white mb-1">
        {isDecimal ? "4.9" : count.toLocaleString("en-IN")}
        {stat.suffix}
      </div>
      <div className="text-white/50 text-sm">{stat.label}</div>
    </motion.div>
  );
}

export default function AboutStats() {
  return (
    <section className="py-16 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-800 to-navy-950 opacity-80" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
