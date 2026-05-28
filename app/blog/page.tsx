import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { blogPosts } from "@/data/blog";
import { Clock, User, Tag, ArrowRight, ChevronRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Moving Tips & Guides Blog | Sharma Packers & Movers",
  description:
    "Expert moving advice, packing guides, relocation checklists and industry insights from India's most trusted packers and movers. Read our blog for a stress-free move.",
  keywords: "packers movers tips, moving guide india, relocation advice, packing tips, home shifting guide",
  openGraph: {
    title: "Moving Tips & Guides | Sharma Packers & Movers Blog",
    description: "Expert relocation advice from India's trusted packers and movers.",
    type: "website",
  },
};

const CATEGORIES = ["All", "Moving Tips", "Packing Guide", "Buyer's Guide", "Vehicle Transport", "Office Moving", "Industry Insights"];

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <main>
      <Navbar />

      {/* ── Page Hero ────────────────────────────────────── */}
      <section className="relative pt-24 pb-0 md:pt-28 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-500 via-blue-400 to-purple-500" />
        <div className="absolute inset-0 page-banner-light" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-52 h-52 bg-purple-200/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 md:pb-18">
          <nav className="animate-fade-in-up delay-0 flex items-center gap-1.5 text-sm text-slate-400 mb-8 pt-4">
            <Link href="/" className="hover:text-orange-500 transition-colors flex items-center gap-1">
              🏠 Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-600 font-medium">Blog</span>
          </nav>

          <div className="text-center max-w-2xl mx-auto">
            <div className="animate-fade-in-up delay-0 inline-flex items-center gap-2 bg-sky-100 border border-sky-200 rounded-full px-4 py-1.5 mb-5">
              <BookOpen className="w-3.5 h-3.5 text-sky-600" />
              <span className="text-sky-700 text-sm font-semibold">Expert Moving Guides &amp; Tips</span>
            </div>
            <h1
              className="animate-fade-in-up delay-100 text-4xl sm:text-5xl font-extrabold text-navy-900 leading-tight mb-4"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Moving{" "}
              <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
                Tips &amp; Guides
              </span>
            </h1>
            <p className="animate-fade-in-up delay-200 text-slate-500 text-lg">
              Expert advice from India&apos;s trusted packers and movers — to make your next move safe, smooth and stress-free.
            </p>
          </div>
        </div>

        <div className="relative">
          <svg viewBox="0 0 1440 48" fill="none" preserveAspectRatio="none" className="w-full h-8 md:h-12">
            <path d="M0 48L1440 48L1440 0C1200 32 960 48 720 40C480 32 240 6 0 30L0 48Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── Featured Post ────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Featured Article</p>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid md:grid-cols-2 gap-8 bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
          >
            {/* Image */}
            <div className="relative h-56 md:h-auto min-h-64 overflow-hidden">
              <Image
                src={featured.coverImage}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent" />
              <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-full ${featured.categoryColor}`}>
                {featured.category}
              </span>
            </div>
            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <h2
                className="text-2xl md:text-3xl font-bold text-navy-900 mb-3 leading-snug group-hover:text-sky-600 transition-colors"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                {featured.title}
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
                <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" />{featured.author}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                <span>{featured.date}</span>
              </div>
              <span className="inline-flex items-center gap-2 text-sky-600 font-semibold text-sm group-hover:gap-3 transition-all">
                Read Article <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Category Filter + Grid ────────────────────────── */}
      <section className="pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category chips */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors cursor-default ${
                  cat === "All"
                    ? "bg-navy-900 text-white border-navy-900"
                    : "bg-white text-slate-500 border-slate-200"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full ${post.categoryColor}`}>
                    {post.category}
                  </span>
                </div>
                {/* Body */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-bold text-navy-900 text-base mb-2 leading-snug group-hover:text-sky-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>

                  <div className="mt-auto flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-50">
                    <span className="inline-flex items-center gap-1.5 text-sky-600 text-xs font-semibold group-hover:gap-2.5 transition-all">
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Tags cloud */}
          <div className="mt-14 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Tag className="w-4 h-4" /> Popular Topics
            </p>
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(blogPosts.flatMap((p) => p.tags))).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs text-slate-500 bg-slate-50 border border-slate-100 rounded-full hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-3xl p-10 shadow-2xl">
            <p className="text-orange-400 font-semibold text-sm mb-2">Ready to move?</p>
            <h2 className="text-white text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              Get a Free Moving Quote Today
            </h2>
            <p className="text-white/60 mb-8 max-w-md mx-auto">
              Expert advice is great — but expert execution is better. Let us handle your move.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact#quote-form" className="btn-orange">
                Get Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+919876543210" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/20 text-sm transition-all">
                📞 +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
