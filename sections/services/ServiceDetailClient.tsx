"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Phone,
  ChevronRight,
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
} from "lucide-react";
import type { Service } from "@/data/services";
import { services } from "@/data/services";

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

export default function ServiceDetailClient({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] || Package;
  const gradient = gradients[service.icon] || "from-blue-500 to-blue-700";
  const related = services
    .filter((s) => s.id !== service.id && s.category === service.category)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 hero-gradient overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/50 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              href="/services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/80">{service.title}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-5 shadow-xl`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h1
                  className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  {service.title}
                </h1>
                <p className="text-white/65 text-xl leading-relaxed mb-8">
                  {service.shortDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact#quote-form"
                    className="btn-orange justify-center text-base px-7 py-3.5"
                  >
                    Get Free Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/20 text-base"
                  >
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Price card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass border border-white/10 rounded-3xl p-8"
            >
              <p className="text-white/50 text-sm mb-1">Starting from</p>
              <p
                className="text-4xl font-bold text-white mb-5"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                {service.price}
              </p>
              <div className="space-y-3">
                {service.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-electric-400 shrink-0" />
                    <span className="text-white/70 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-10 md:h-14">
            <path d="M0 60L1440 60L1440 0C1200 40 960 60 720 50C480 40 240 10 0 40L0 60Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Detail content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                About This Service
              </h2>
              <p className="text-slate-600 leading-relaxed text-base mb-8">
                {service.fullDescription}
              </p>

              <h3 className="text-xl font-bold text-navy-900 mb-5">
                What&apos;s Included
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-100"
                  >
                    <CheckCircle className="w-4 h-4 text-electric-600 shrink-0" />
                    <span className="text-slate-700 text-sm font-medium">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Quick quote card */}
              <div className="bg-gradient-to-br from-navy-950 to-navy-800 rounded-2xl p-6 text-white">
                <p className="font-bold text-lg mb-2">Get a Free Quote</p>
                <p className="text-white/60 text-sm mb-5">
                  Response within 30 minutes
                </p>
                <Link
                  href="/contact#quote-form"
                  className="btn-orange w-full justify-center text-sm"
                >
                  Request Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+919876543210"
                  className="mt-2 flex items-center justify-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" /> +91 98765 43210
                </a>
              </div>

              {/* Related services */}
              {related.length > 0 && (
                <div className="bg-white border border-slate-100 rounded-2xl p-5">
                  <p className="font-bold text-navy-900 text-sm mb-4">
                    Related Services
                  </p>
                  <div className="space-y-2">
                    {related.map((rel) => {
                      const RelIcon = iconMap[rel.icon] || Package;
                      return (
                        <Link
                          key={rel.id}
                          href={`/services/${rel.slug}`}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div
                            className={`w-8 h-8 bg-gradient-to-br ${gradients[rel.icon] || "from-blue-500 to-blue-700"} rounded-lg flex items-center justify-center shrink-0`}
                          >
                            <RelIcon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-slate-700 text-sm font-medium group-hover:text-electric-700 transition-colors">
                            {rel.title}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
