import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import {
  HomeShiftingIcon,
  CarTransportIcon,
  WarehouseIcon,
  PackingIcon,
} from "@/components/illustrations/ServiceIcons";

export default function ServicesHero() {
  return (
    <section className="relative pt-24 pb-0 md:pt-28 overflow-hidden bg-white">
      {/* Top colour bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-500 via-teal-400 to-orange-500" />

      {/* Light gradient fill */}
      <div className="absolute inset-0 page-banner-light" />

      {/* Decorative circles */}
      <div className="absolute top-8 right-8 w-72 h-72 bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-8 w-52 h-52 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
        {/* Breadcrumb */}
        <nav className="animate-fade-in-up delay-0 flex items-center gap-1.5 text-sm text-slate-400 mb-8 pt-4">
          <Link href="/" className="hover:text-orange-500 transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" /> Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-600 font-medium">Our Services</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <div className="animate-fade-in-up delay-0 inline-flex items-center gap-2 bg-sky-100 border border-sky-200 rounded-full px-4 py-1.5 mb-5">
              <span className="text-sky-700 text-sm font-semibold">🚚 10+ Professional Services</span>
            </div>

            <h1
              className="animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold text-navy-900 leading-tight mb-4"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Complete Moving{" "}
              <span className="bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent">
                Solutions
              </span>{" "}
              Across India
            </h1>

            <p className="animate-fade-in-up delay-200 text-slate-500 text-lg leading-relaxed mb-8 max-w-lg">
              From packing a single room to relocating an entire corporation — we have
              specialized services for every moving need, across 500+ cities.
            </p>

            <div className="animate-fade-in delay-300 flex flex-wrap gap-3">
              {["Home Relocation", "Office Shifting", "Car & Bike Transport", "Warehouse Storage", "Packing & Unpacking"].map((s) => (
                <span key={s} className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Right — mini service icon grid */}
          <div className="animate-fade-in delay-200 hidden lg:grid grid-cols-2 gap-4">
            {[
              { Icon: HomeShiftingIcon, label: "Home Relocation", color: "bg-blue-50 border-blue-100" },
              { Icon: CarTransportIcon, label: "Car Transport", color: "bg-teal-50 border-teal-100" },
              { Icon: WarehouseIcon, label: "Storage", color: "bg-green-50 border-green-100" },
              { Icon: PackingIcon, label: "Packing", color: "bg-amber-50 border-amber-100" },
            ].map(({ Icon, label, color }) => (
              <div key={label} className={`rounded-2xl border p-4 flex flex-col items-center gap-2 ${color}`}>
                <Icon className="w-20 h-20" />
                <p className="text-xs font-bold text-slate-600 text-center">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="relative">
        <svg viewBox="0 0 1440 48" fill="none" preserveAspectRatio="none" className="w-full h-8 md:h-12">
          <path d="M0 48L1440 48L1440 0C1200 32 960 48 720 40C480 32 240 6 0 30L0 48Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
}
