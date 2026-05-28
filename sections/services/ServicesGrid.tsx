"use client";

import { useState } from "react";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import {
  Home,
  Building2,
  MapPin,
  Globe,
  Car,
  Bike,
  Package,
  ArrowUpDown,
  Warehouse,
  Truck,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { services, serviceCategories } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building2,
  MapPin,
  Globe,
  Car,
  Bike,
  Package,
  ArrowUpDown,
  Warehouse,
  Truck,
};

const gradients: Record<string, string> = {
  Home: "from-blue-500 to-blue-700",
  Building2: "from-purple-500 to-purple-700",
  MapPin: "from-teal-500 to-teal-700",
  Globe: "from-green-500 to-green-700",
  Car: "from-orange-500 to-orange-700",
  Bike: "from-pink-500 to-pink-700",
  Package: "from-yellow-500 to-yellow-700",
  ArrowUpDown: "from-indigo-500 to-indigo-700",
  Warehouse: "from-red-500 to-red-700",
  Truck: "from-cyan-500 to-cyan-700",
};

export default function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-electric-600 text-white shadow-lg shadow-electric-600/25"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <m.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((service, i) => {
              const Icon = iconMap[service.icon] || Package;
              const gradient = gradients[service.icon] || "from-blue-500 to-blue-700";

              return (
                <m.div
                  key={service.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="group bg-white border border-slate-100 rounded-3xl p-6 card-hover h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-xs font-semibold bg-slate-50 text-slate-500 px-3 py-1 rounded-full border border-slate-100 capitalize">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="font-bold text-navy-900 text-lg mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">
                      {service.shortDescription}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 gap-1.5 mb-5">
                      {service.features.slice(0, 3).map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-slate-600 text-xs"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-electric-500 shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                      <span className="text-electric-700 font-bold text-sm">
                        {service.price}
                      </span>
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1.5 text-electric-600 text-sm font-semibold hover:gap-2.5 transition-all"
                      >
                        Details <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </m.div>
              );
            })}
          </m.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
