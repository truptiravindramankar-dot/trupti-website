"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Seeds", href: "#seeds" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Benefits", href: "#benefits" },
  { name: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-brand-warm/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-green group-hover:bg-brand-green-light transition-colors duration-300">
              <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-brand-cream" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold font-serif text-brand-dark tracking-tight">
                Tru Nutrition
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-brand-olive font-medium -mt-0.5">
                Nourish Naturally
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-dark/70 hover:text-brand-green transition-colors duration-200 relative group cursor-pointer"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <ShimmerButton
              className="h-10 px-6"
              shimmerColor="#A8C686"
              shimmerSize="0.08em"
              background="#2D5016"
            >
              <span className="text-sm font-semibold text-brand-cream">
                Order Now
              </span>
            </ShimmerButton>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-brand-warm/50 transition-colors cursor-pointer"
          >
            {isMobileOpen ? (
              <X className="w-6 h-6 text-brand-dark" />
            ) : (
              <Menu className="w-6 h-6 text-brand-dark" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-brand-warm/50"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block py-2 text-base font-medium text-brand-dark/80 hover:text-brand-green transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <ShimmerButton
                className="w-full h-12 mt-2"
                shimmerColor="#A8C686"
                shimmerSize="0.08em"
                background="#2D5016"
              >
                <span className="text-sm font-semibold text-brand-cream">
                  Order Now
                </span>
              </ShimmerButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
