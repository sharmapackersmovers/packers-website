"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "text-yellow-400 fill-yellow-400"
              : "text-slate-200 fill-slate-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const navigate = (dir: number) => {
    setDirection(dir);
    setActiveIndex((prev) =>
      dir > 0
        ? (prev + 1) % testimonials.length
        : (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 md:py-28 section-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-electric-600 font-semibold text-sm tracking-wider uppercase bg-electric-50 px-4 py-1.5 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="section-heading">
            What Our Customers{" "}
            <span className="text-gradient-blue">Say About Us</span>
          </h2>
          <p className="section-subheading">
            Real stories from families and businesses who trusted us with their
            most precious belongings.
          </p>
        </motion.div>

        {/* Main testimonial */}
        <div className="relative max-w-3xl mx-auto mb-10">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/60 border border-slate-100 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-8 w-10 h-10 bg-electric-50 rounded-xl flex items-center justify-center">
                <Quote className="w-5 h-5 text-electric-500" />
              </div>

              <StarRating rating={testimonials[activeIndex].rating} />

              <p className="text-slate-700 text-lg leading-relaxed mt-5 mb-7 italic">
                &ldquo;{testimonials[activeIndex].review}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${testimonials[activeIndex].color} rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                  >
                    {testimonials[activeIndex].initials}
                  </div>
                  <div>
                    <p className="font-bold text-navy-900">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-slate-500 text-sm">
                      {testimonials[activeIndex].location}
                    </p>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <span className="inline-block bg-slate-50 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-full border border-slate-100">
                    {testimonials[activeIndex].service}
                  </span>
                  <p className="text-slate-400 text-xs mt-1">
                    {testimonials[activeIndex].date}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center hover:border-electric-300 hover:bg-electric-50 transition-colors shadow-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 text-slate-600" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > activeIndex ? 1 : -1);
                  setActiveIndex(i);
                }}
                className={`transition-all duration-200 rounded-full ${
                  i === activeIndex
                    ? "w-6 h-2.5 bg-electric-600"
                    : "w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => navigate(1)}
            className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center hover:border-electric-300 hover:bg-electric-50 transition-colors shadow-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 text-slate-600" />
          </button>
        </div>

        {/* Grid of other testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm card-hover"
            >
              <StarRating rating={t.rating} />
              <p className="text-slate-600 text-sm mt-3 mb-4 line-clamp-3 leading-relaxed">
                &ldquo;{t.review}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 bg-gradient-to-br ${t.color} rounded-xl flex items-center justify-center text-white font-bold text-xs`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
