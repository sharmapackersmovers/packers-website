"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Package, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const isHomePage = pathname === "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 bg-gradient-to-br from-electric-500 to-electric-700 rounded-xl flex items-center justify-center shadow-lg shadow-electric-500/30 group-hover:scale-105 transition-transform">
                <Package className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className={`font-bold text-base tracking-tight transition-colors ${
                    isScrolled || !isHomePage
                      ? "text-navy-900"
                      : "text-white"
                  }`}
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Sharma
                </span>
                <span
                  className={`text-[10px] font-medium tracking-widest uppercase transition-colors ${
                    isScrolled || !isHomePage
                      ? "text-electric-600"
                      : "text-electric-400"
                  }`}
                >
                  Packers & Movers
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? isScrolled || !isHomePage
                        ? "text-electric-600 bg-electric-50"
                        : "text-white bg-white/15"
                      : isScrolled || !isHomePage
                      ? "text-slate-600 hover:text-navy-900 hover:bg-slate-50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+919876543210"
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  isScrolled || !isHomePage
                    ? "text-slate-600 hover:text-electric-600"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                +91 98765 43210
              </a>
              <Link
                href="/contact#quote-form"
                className="btn-primary text-sm px-5 py-2.5"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled || !isHomePage
                  ? "text-navy-900 hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <m.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-slate-100 shadow-xl md:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <m.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "text-electric-600 bg-electric-50"
                        : "text-slate-700 hover:text-navy-900 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </m.div>
              ))}
              <div className="pt-3 pb-1 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-xl"
                >
                  <Phone className="w-4 h-4 text-electric-600" />
                  +91 98765 43210
                </a>
                <Link
                  href="/contact#quote-form"
                  className="btn-primary justify-center text-sm"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
