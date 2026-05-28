"use client";

import { m } from "framer-motion";

const TRUST_ITEMS = [
  {
    emoji: "🚚",
    label: "Pan-India Coverage",
    sub: "500+ Cities",
    bg: "bg-blue-50",
    border: "border-blue-100",
    text: "text-blue-700",
  },
  {
    emoji: "📦",
    label: "Pro Packing",
    sub: "Premium materials",
    bg: "bg-orange-50",
    border: "border-orange-100",
    text: "text-orange-700",
  },
  {
    emoji: "🛡️",
    label: "Transit Insurance",
    sub: "Full coverage",
    bg: "bg-green-50",
    border: "border-green-100",
    text: "text-green-700",
  },
  {
    emoji: "📍",
    label: "GPS Tracking",
    sub: "Real-time updates",
    bg: "bg-purple-50",
    border: "border-purple-100",
    text: "text-purple-700",
  },
  {
    emoji: "⏰",
    label: "On-Time Delivery",
    sub: "Always punctual",
    bg: "bg-teal-50",
    border: "border-teal-100",
    text: "text-teal-700",
  },
  {
    emoji: "📞",
    label: "24/7 Support",
    sub: "Always reachable",
    bg: "bg-rose-50",
    border: "border-rose-100",
    text: "text-rose-700",
  },
];

export default function TrustBar() {
  return (
    <section className="py-8 md:py-10 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
          Why thousands of families trust Sharma Packers &amp; Movers
        </p>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.07 } }, hidden: {} }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
        >
          {TRUST_ITEMS.map((item) => (
            <m.div
              key={item.label}
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35 } } }}
              className={`flex flex-col items-center text-center gap-2 p-4 rounded-2xl border ${item.bg} ${item.border} hover:shadow-md transition-shadow`}
            >
              <span className="text-2xl leading-none">{item.emoji}</span>
              <div>
                <p className={`text-xs font-bold ${item.text}`}>{item.label}</p>
                <p className="text-slate-400 text-[10px] mt-0.5">{item.sub}</p>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
