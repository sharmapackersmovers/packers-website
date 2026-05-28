import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/data/blog";
import {
  Clock, User, Calendar, Tag, ArrowRight,
  ChevronRight, BookOpen, Phone,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <main>
      <Navbar />

      {/* ── Article Hero ─────────────────────────────────── */}
      <section className="relative pt-24 pb-0 md:pt-28 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-500 via-blue-400 to-purple-500" />
        <div className="absolute inset-0 page-banner-light" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {/* Breadcrumb */}
          <nav className="animate-fade-in-up delay-0 flex items-center gap-1.5 text-sm text-slate-400 mb-6 pt-4 flex-wrap">
            <Link href="/" className="hover:text-orange-500 transition-colors">🏠 Home</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <Link href="/blog" className="hover:text-orange-500 transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span className="text-slate-600 font-medium line-clamp-1">{post.title}</span>
          </nav>

          {/* Category */}
          <div className="animate-fade-in-up delay-0 mb-4">
            <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full ${post.categoryColor}`}>
              <BookOpen className="w-3 h-3" /> {post.category}
            </span>
          </div>

          {/* Title */}
          <h1
            className="animate-fade-in-up delay-100 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 leading-tight mb-5"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            {post.title}
          </h1>

          {/* Meta */}
          <div className="animate-fade-in delay-200 flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-orange-500" />
              <strong className="text-slate-700">{post.author}</strong> — {post.authorRole}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" /> {post.readTime}
            </span>
          </div>
        </div>

        <div className="relative">
          <svg viewBox="0 0 1440 48" fill="none" preserveAspectRatio="none" className="w-full h-8 md:h-12">
            <path d="M0 48L1440 48L1440 0C1200 32 960 48 720 40C480 32 240 6 0 30L0 48Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── Article Body ─────────────────────────────────── */}
      <article className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Cover image */}
          <div className="relative w-full aspect-[16/7] rounded-3xl overflow-hidden shadow-xl mb-10">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          {/* Excerpt lead */}
          <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-orange-400 pl-5 mb-10 italic">
            {post.excerpt}
          </p>

          {/* Article sections */}
          <div className="space-y-10">
            {post.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                  {section.heading}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">{section.body}</p>
                {section.list && (
                  <ul className="space-y-2.5">
                    {section.list.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                        <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-slate-100">
            <div className="flex flex-wrap items-center gap-2">
              <Tag className="w-4 h-4 text-slate-400" />
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs text-slate-500 bg-slate-50 border border-slate-100 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author card */}
          <div className="mt-8 p-6 bg-orange-50 border border-orange-100 rounded-2xl flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-orange-200 flex items-center justify-center shrink-0">
              <User className="w-7 h-7 text-orange-600" />
            </div>
            <div>
              <p className="font-bold text-navy-900">{post.author}</p>
              <p className="text-slate-500 text-sm">{post.authorRole}, Sharma Packers &amp; Movers</p>
              <p className="text-slate-400 text-xs mt-0.5">15+ years of experience in professional relocation services across India.</p>
            </div>
          </div>

          {/* In-article CTA */}
          <div className="mt-10 p-6 bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl shadow-xl text-center">
            <p className="text-white/70 text-sm mb-1">Need help with your move?</p>
            <p className="text-white font-bold text-lg mb-4">Get a free, no-obligation quote in 30 minutes</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact#quote-form" className="btn-orange text-sm">
                Get Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+919876543210" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/20 text-sm transition-all">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* ── Related Posts ─────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-navy-900" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              More Moving Guides
            </h2>
            <Link href="/blog" className="text-sm text-sky-600 font-semibold hover:underline flex items-center gap-1">
              All Articles <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((rp) => (
              <Link
                key={rp.slug}
                href={`/blog/${rp.slug}`}
                className="group flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={rp.coverImage}
                    alt={rp.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full ${rp.categoryColor}`}>
                    {rp.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-navy-900 text-sm leading-snug mb-2 group-hover:text-sky-600 transition-colors line-clamp-2">
                    {rp.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-50">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{rp.readTime}</span>
                    <span className="flex items-center gap-1 text-sky-600 font-semibold group-hover:gap-1.5 transition-all">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
