"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const infoCards = [
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 98765 43210", "+91 91234 56789"],
    href: "tel:+919876543210",
    color: "from-blue-500 to-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@sharmapackers.com", "support@sharmapackers.com"],
    href: "mailto:info@sharmapackers.com",
    color: "from-purple-500 to-purple-700",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    icon: MapPin,
    title: "Our Office",
    lines: ["123, Transport Nagar,", "Delhi - 110006, India"],
    href: "#map",
    color: "from-teal-500 to-teal-700",
    bg: "bg-teal-50",
    border: "border-teal-100",
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Monday – Sunday", "8:00 AM – 8:00 PM"],
    href: null,
    color: "from-orange-500 to-orange-700",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
];

export default function ContactInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {infoCards.map((card, i) => {
            const Wrapper = card.href ? "a" : "div";
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Wrapper
                  {...(card.href ? { href: card.href } : {})}
                  className={`block bg-white border ${card.border} rounded-2xl p-6 card-hover group h-full`}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-105 transition-transform`}
                  >
                    <card.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-navy-900 text-base mb-2">
                    {card.title}
                  </h3>
                  {card.lines.map((line) => (
                    <p key={line} className="text-slate-600 text-sm">
                      {line}
                    </p>
                  ))}
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
