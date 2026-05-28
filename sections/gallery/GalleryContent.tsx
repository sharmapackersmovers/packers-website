"use client";

import { useState } from "react";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import { Camera, ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import { siteImages } from "@/data/images";

const categories = [
  { id: "all", label: "All" },
  { id: "packing", label: "Packing" },
  { id: "loading", label: "Loading & Unloading" },
  { id: "transport", label: "Transportation" },
  { id: "office", label: "Office Moves" },
  { id: "vehicle", label: "Vehicle Transport" },
];

type GalleryItem = (typeof siteImages.gallery)[0];

export default function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === "all"
      ? siteImages.gallery
      : siteImages.gallery.filter((item) => item.category === activeCategory);

  const lightboxIndex = lightbox
    ? filtered.findIndex((i) => i.id === lightbox.id)
    : -1;

  const navigateLightbox = (dir: number) => {
    if (lightboxIndex < 0) return;
    const next = (lightboxIndex + dir + filtered.length) % filtered.length;
    setLightbox(filtered[next]);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-0 md:pt-28 overflow-hidden bg-white">
        {/* Top colour bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 via-pink-400 to-orange-500" />
        {/* Light gradient fill */}
        <div className="absolute inset-0 page-banner-light" />
        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-48 h-48 bg-pink-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
          {/* Breadcrumb */}
          <nav className="animate-fade-in-up delay-0 flex items-center gap-1.5 text-sm text-slate-400 mb-8 pt-4">
            <a href="/" className="hover:text-orange-500 transition-colors">🏠 Home</a>
            <span>›</span>
            <span className="text-slate-600 font-medium">Gallery</span>
          </nav>

          <div className="text-center max-w-2xl mx-auto">
            <div className="animate-fade-in-up delay-0 inline-flex items-center gap-2 bg-purple-100 border border-purple-200 rounded-full px-4 py-1.5 mb-5">
              <Camera className="w-3.5 h-3.5 text-purple-600" />
              <span className="text-purple-700 text-sm font-semibold">Real Moves, Real Stories</span>
            </div>
            <h1
              className="animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold text-navy-900 leading-tight mb-4"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Our Work in{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Pictures
              </span>
            </h1>
            <p className="animate-fade-in-up delay-200 text-slate-500 text-lg leading-relaxed">
              A glimpse into thousands of successful moves we&apos;ve completed across India.
            </p>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="relative">
          <svg viewBox="0 0 1440 48" fill="none" preserveAspectRatio="none" className="w-full h-8 md:h-12">
            <path d="M0 48L1440 48L1440 0C1200 32 960 48 720 40C480 32 240 6 0 30L0 48Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
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

          {/* Masonry grid */}
          <AnimatePresence mode="wait">
            <m.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
            >
              {filtered.map((item, i) => (
                <m.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="break-inside-avoid"
                >
                  <button
                    onClick={() => setLightbox(item)}
                    className="relative w-full block group overflow-hidden rounded-2xl bg-slate-100"
                    aria-label={`View ${item.label}`}
                  >
                    <div className={`relative w-full ${i % 3 === 0 ? "aspect-[4/3]" : i % 3 === 1 ? "aspect-square" : "aspect-[3/4]"}`}>
                      <Image
                        src={item.url}
                        alt={item.label}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/40 transition-all duration-300 flex items-center justify-center">
                      <div className="scale-0 group-hover:scale-100 transition-transform duration-300 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl">
                        <ZoomIn className="w-5 h-5 text-navy-900" />
                      </div>
                    </div>

                    {/* Label */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm font-semibold">{item.label}</p>
                      <p className="text-white/70 text-xs capitalize">{item.category}</p>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3 bg-black/30 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full capitalize">
                      {item.category}
                    </div>
                  </button>
                </m.div>
              ))}
            </m.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <Camera className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500 font-medium">No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <m.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={lightbox.url}
                  alt={lightbox.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white font-semibold text-lg">{lightbox.label}</p>
                  <p className="text-white/60 text-sm capitalize">{lightbox.category}</p>
                </div>
              </div>

              {/* Close */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-slate-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-slate-700" />
              </button>

              {/* Prev / Next */}
              <button
                onClick={() => navigateLightbox(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigateLightbox(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
