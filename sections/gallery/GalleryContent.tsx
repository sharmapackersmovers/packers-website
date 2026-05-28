"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, ZoomIn, X } from "lucide-react";

const categories = [
  { id: "all", label: "All" },
  { id: "packing", label: "Packing" },
  { id: "loading", label: "Loading & Unloading" },
  { id: "transport", label: "Transportation" },
  { id: "office", label: "Office Moves" },
  { id: "vehicle", label: "Vehicle Transport" },
];

interface GalleryItem {
  id: string;
  category: string;
  label: string;
  aspect: string;
  colors: string;
}

const galleryItems: GalleryItem[] = [
  { id: "1", category: "packing", label: "Professional Packing", aspect: "aspect-[4/3]", colors: "from-blue-200 to-blue-300" },
  { id: "2", category: "loading", label: "Loading Process", aspect: "aspect-square", colors: "from-teal-200 to-teal-300" },
  { id: "3", category: "transport", label: "Long Distance Move", aspect: "aspect-[4/3]", colors: "from-slate-200 to-slate-300" },
  { id: "4", category: "office", label: "Office Relocation", aspect: "aspect-[3/4]", colors: "from-purple-200 to-purple-300" },
  { id: "5", category: "vehicle", label: "Car Transport", aspect: "aspect-[4/3]", colors: "from-orange-200 to-orange-300" },
  { id: "6", category: "packing", label: "Fragile Item Packing", aspect: "aspect-square", colors: "from-pink-200 to-pink-300" },
  { id: "7", category: "loading", label: "Heavy Furniture Move", aspect: "aspect-[4/3]", colors: "from-green-200 to-green-300" },
  { id: "8", category: "transport", label: "Fleet Vehicles", aspect: "aspect-[3/4]", colors: "from-yellow-200 to-yellow-300" },
  { id: "9", category: "office", label: "Corporate Move", aspect: "aspect-[4/3]", colors: "from-indigo-200 to-indigo-300" },
  { id: "10", category: "vehicle", label: "Bike Transport", aspect: "aspect-square", colors: "from-red-200 to-red-300" },
  { id: "11", category: "packing", label: "Electronics Packing", aspect: "aspect-[4/3]", colors: "from-cyan-200 to-cyan-300" },
  { id: "12", category: "loading", label: "Team at Work", aspect: "aspect-[3/4]", colors: "from-violet-200 to-violet-300" },
];

export default function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6"
          >
            <Camera className="w-3.5 h-3.5 text-electric-400" />
            <span className="text-white/90 text-sm font-medium">
              Real Moves, Real Stories
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Our Work in{" "}
            <span className="bg-gradient-to-r from-electric-400 to-blue-300 bg-clip-text text-transparent">
              Pictures
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/65 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            A glimpse into thousands of successful moves we&apos;ve completed
            across India.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-10 md:h-14">
            <path d="M0 60L1440 60L1440 0C1200 40 960 60 720 50C480 40 240 10 0 40L0 60Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Gallery section */}
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
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="break-inside-avoid"
                >
                  <button
                    onClick={() => setLightbox(item)}
                    className={`relative w-full ${item.aspect} block group overflow-hidden rounded-2xl bg-gradient-to-br ${item.colors} border border-slate-100`}
                    aria-label={`View ${item.label}`}
                  >
                    {/* Placeholder content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                      <Camera className="w-10 h-10 text-white/40 mb-3" />
                      <span className="text-white/60 text-sm font-medium text-center">
                        {item.label}
                      </span>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <div className="scale-0 group-hover:scale-100 transition-transform duration-300 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl">
                        <ZoomIn className="w-5 h-5 text-navy-900" />
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3 bg-black/30 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full capitalize">
                      {item.category}
                    </div>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <Camera className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500 font-medium">
                No images in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`w-full aspect-[4/3] rounded-2xl bg-gradient-to-br ${lightbox.colors} flex flex-col items-center justify-center`}
              >
                <Camera className="w-16 h-16 text-white/30 mb-4" />
                <p className="text-white/70 text-lg font-semibold">
                  {lightbox.label}
                </p>
                <p className="text-white/40 text-sm mt-1 capitalize">
                  {lightbox.category}
                </p>
              </div>

              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-slate-700" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
