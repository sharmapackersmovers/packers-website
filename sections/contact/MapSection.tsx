"use client";

import { m } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function MapSection() {
  return (
    <section id="map" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-bold text-navy-900">Find Our Office</h2>
          <p className="text-slate-500 text-sm mt-2">
            123, Transport Nagar, Delhi - 110006
          </p>
        </m.div>

        {/* Map placeholder */}
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="relative h-80 md:h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl overflow-hidden border border-slate-200 flex items-center justify-center"
        >
          {/* Fake map grid */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(to right, #e2e8f0 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Center pin */}
          <div className="relative flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center mb-3">
              <MapPin className="w-7 h-7 text-electric-600" />
            </div>
            <div className="bg-white rounded-xl px-4 py-2.5 shadow-lg border border-slate-100 text-center">
              <p className="font-semibold text-navy-900 text-sm">
                Sharma Packers & Movers
              </p>
              <p className="text-slate-500 text-xs mt-0.5">
                123, Transport Nagar, Delhi
              </p>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 btn-primary text-sm px-4 py-2"
            >
              <Navigation className="w-3.5 h-3.5" />
              Get Directions
            </a>
          </div>
        </m.div>
      </div>
    </section>
  );
}
