"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/faqs";

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`border rounded-2xl overflow-hidden transition-colors duration-200 ${
        isOpen ? "border-electric-200 bg-electric-50/30" : "border-slate-100 bg-white"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className={`font-semibold text-sm md:text-base leading-snug transition-colors ${
            isOpen ? "text-electric-700" : "text-navy-900 group-hover:text-electric-700"
          }`}
        >
          {faq.question}
        </span>
        <div
          className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ml-4 transition-colors ${
            isOpen
              ? "bg-electric-600 text-white"
              : "bg-slate-100 text-slate-500 group-hover:bg-electric-50 group-hover:text-electric-600"
          }`}
        >
          {isOpen ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5">
              <p className="text-slate-600 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("1");

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <span className="inline-block text-electric-600 font-semibold text-sm tracking-wider uppercase bg-electric-50 px-4 py-1.5 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="section-heading mb-5">
              Frequently Asked{" "}
              <span className="text-gradient-blue">Questions</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Got questions? We&apos;ve got answers. If you don&apos;t find what
              you need here, our team is always ready to help.
            </p>

            <div className="bg-gradient-to-br from-navy-950 to-navy-800 rounded-2xl p-6 text-white">
              <p className="font-semibold text-lg mb-1">Still have questions?</p>
              <p className="text-white/60 text-sm mb-5">
                Contact our support team and we&apos;ll get back to you within
                hours.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+919876543210"
                  className="btn-primary text-sm justify-center"
                >
                  Call Us Now
                </a>
                <a
                  href="mailto:info@sharmapackers.com"
                  className="inline-flex items-center justify-center px-4 py-2.5 bg-white/10 hover:bg-white/15 text-white text-sm font-medium rounded-xl transition-colors"
                >
                  Send Email
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
