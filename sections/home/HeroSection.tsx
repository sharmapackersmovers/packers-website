"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Phone, MapPin, Shield, Star, CheckCircle2, Truck } from "lucide-react";
import MovingTruck from "@/components/illustrations/MovingTruck";

const SERVICES = [
  "Home Relocation",
  "Office Shifting",
  "Car Transport",
  "Bike Transport",
  "Warehouse & Storage",
  "Packing & Unpacking",
];

const CITIES = [
  "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai",
  "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow",
  "Chandigarh", "Indore", "Bhopal", "Nagpur", "Surat",
];

export default function HeroSection() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [service, setService] = useState("");

  const handleQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (from) params.set("from", from);
    if (to) params.set("to", to);
    if (service) params.set("service", service);
    window.location.href = `/contact#quote-form`;
  };

  return (
    <section className="relative min-h-screen hero-gradient flex flex-col overflow-hidden">
      {/* ── Subtle grid overlay ────────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
      />
      {/* ── Glow blobs ─────────────────────────────────── */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-60 h-60 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* ── Main content ───────────────────────────────── */}
      <div className="relative flex-1 flex items-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-10 md:pt-36 md:pb-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center w-full">

          {/* ─────────────── LEFT COLUMN ──────────────── */}
          <div>
            {/* Verified badge */}
            <div className="animate-fade-in-up delay-0 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                India&apos;s Most Trusted Packers &amp; Movers
              </span>
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-[3.3rem] font-extrabold text-white leading-tight mb-4"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Move Anywhere in{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                India
              </span>
              {" "}— Safe &amp; On Time
            </h1>

            <p className="animate-fade-in-up delay-200 text-white/65 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
              Professional packing, GPS-tracked trucks, door-to-door delivery
              across 500+ cities. Household, office, car &amp; bike shifting — all under one roof.
            </p>

            {/* ── Inline Quick-Quote Widget ──────────── */}
            <form
              onSubmit={handleQuote}
              className="animate-fade-in-up delay-300 w-full"
            >
              <div className="bg-white rounded-2xl shadow-2xl shadow-black/40 overflow-hidden border border-white/10">
                {/* Title bar */}
                <div className="bg-orange-500 px-5 py-2.5 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-bold tracking-wide">
                    GET FREE MOVING QUOTE — INSTANT
                  </span>
                </div>
                {/* Fields */}
                <div className="flex flex-col sm:flex-row gap-0">
                  {/* From */}
                  <div className="flex-1 flex items-center gap-2.5 px-4 py-3.5 border-b sm:border-b-0 sm:border-r border-slate-100">
                    <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                        Moving From
                      </label>
                      <select
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        className="w-full text-navy-900 text-sm font-semibold bg-transparent outline-none cursor-pointer"
                      >
                        <option value="">Select City</option>
                        {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Swap icon */}
                  <div className="hidden sm:flex items-center justify-center px-2 bg-slate-50">
                    <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center">
                      <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                        <path d="M3 5h10M10 2l3 3-3 3M13 11H3M6 8l-3 3 3 3" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* To */}
                  <div className="flex-1 flex items-center gap-2.5 px-4 py-3.5 border-b sm:border-b-0 sm:border-r border-slate-100">
                    <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                        Moving To
                      </label>
                      <select
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        className="w-full text-navy-900 text-sm font-semibold bg-transparent outline-none cursor-pointer"
                      >
                        <option value="">Select City</option>
                        {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Service */}
                  <div className="flex-1 flex items-center gap-2.5 px-4 py-3.5 border-b sm:border-b-0 sm:border-r border-slate-100">
                    <Truck className="w-4 h-4 text-teal-500 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                        Service Type
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full text-navy-900 text-sm font-semibold bg-transparent outline-none cursor-pointer"
                      >
                        <option value="">All Services</option>
                        {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-4 sm:py-0 flex items-center justify-center gap-2 transition-colors text-sm tracking-wide"
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <p className="text-white/45 text-xs mt-2.5 pl-1">
                Free consultation • No hidden charges • Response within 30 minutes
              </p>
            </form>

            {/* ── Trust signals ──────────────────────── */}
            <div className="animate-fade-in delay-400 flex flex-wrap items-center gap-x-5 gap-y-2.5 mt-6">
              {[
                { icon: Shield, text: "100% Insured" },
                { icon: Star, text: "4.9★ Rated" },
                { icon: CheckCircle2, text: "Zero Damage Guarantee" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-white/65">
                  <Icon className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-xs font-medium">{text}</span>
                </div>
              ))}
            </div>

            {/* ── Call CTA ───────────────────────────── */}
            <div className="animate-fade-in delay-500 mt-5">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-xl px-5 py-2.5 text-sm transition-all backdrop-blur-sm"
              >
                <span className="flex items-center justify-center w-7 h-7 bg-green-500 rounded-full">
                  <Phone className="w-3.5 h-3.5 text-white" />
                </span>
                Call Now: +91 98765 43210
                <span className="text-green-400 text-xs ml-0.5">(24/7)</span>
              </a>
            </div>
          </div>

          {/* ─────────────── RIGHT COLUMN ─────────────── */}
          <div className="hidden lg:block">
            <MovingTruck />
            {/* Route indicator */}
            <div className="mt-4 flex items-center justify-center gap-3 bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl px-5 py-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-orange-400 rounded-full" style={{ animation: "routeDot 2s ease-in-out infinite" }} />
                <span className="text-white/80 text-sm font-semibold">New Delhi</span>
              </div>
              <div className="flex-1 flex items-center gap-1 px-2">
                <div className="flex-1 h-px bg-gradient-to-r from-orange-400/60 via-blue-400/60 to-blue-400/60" />
                <svg viewBox="0 0 20 10" className="w-5 h-2.5">
                  <path d="M0 5 L12 5 M9 2 L12 5 L9 8" stroke="#60a5fa" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-400/60 to-blue-500/60" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-white/80 text-sm font-semibold">Mumbai</span>
                <span className="w-2.5 h-2.5 bg-blue-400 rounded-full" style={{ animation: "routeDot 2s ease-in-out infinite 1s" }} />
              </div>
              <span className="ml-2 bg-green-500/20 text-green-400 text-xs font-bold px-2.5 py-0.5 rounded-full border border-green-500/30">
                GPS Live
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Wave divider ────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 56" fill="none" preserveAspectRatio="none" className="w-full h-10 md:h-14">
          <path d="M0 56L1440 56L1440 0C1200 36 960 56 720 46C480 36 240 8 0 36L0 56Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
