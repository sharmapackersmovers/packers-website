"use client";

import { m } from "framer-motion";
import { companyTimeline } from "@/data/stats";

export default function CompanyTimeline() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-electric-600 font-semibold text-sm tracking-wider uppercase bg-electric-50 px-4 py-1.5 rounded-full mb-4">
            Our Journey
          </span>
          <h2 className="section-heading">
            15 Years of{" "}
            <span className="text-gradient-blue">Growth & Excellence</span>
          </h2>
        </m.div>

        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-500/20 via-electric-500/40 to-electric-500/20" />

          <div className="space-y-10">
            {companyTimeline.map((item, i) => (
              <m.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content card */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className={`inline-block bg-white border border-slate-100 rounded-2xl p-6 shadow-sm card-hover max-w-sm ${i % 2 === 0 ? "md:ml-auto" : ""}`}>
                    <span className="inline-block text-electric-600 font-bold text-sm bg-electric-50 px-3 py-1 rounded-full mb-3">
                      {item.year}
                    </span>
                    <h3 className="font-bold text-navy-900 text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-electric-600 rounded-full border-4 border-white shadow-lg shadow-electric-600/40 z-10" />

                {/* Spacer */}
                <div className="hidden md:block flex-1" />
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
