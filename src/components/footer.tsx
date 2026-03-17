"use client";

import { Leaf } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Product: [
    { name: "TruSeeds", href: "#" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Benefits", href: "#benefits" },
    { name: "Ingredients", href: "#seeds" },
  ],
  Company: [
    { name: "About Us", href: "#about" },
    { name: "Our Philosophy", href: "#about" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ],
  Support: [
    { name: "FAQ", href: "#" },
    { name: "Shipping", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-brand-dark overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 group mb-4 sm:mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-green group-hover:bg-brand-green-light transition-colors">
                <Leaf className="w-5 h-5 text-brand-cream" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold font-serif text-white tracking-tight">
                  Tru Nutrition
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase text-brand-sage font-medium -mt-0.5">
                  Nourish Naturally
                </span>
              </div>
            </a>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Simplifying healthy eating through thoughtfully designed nutrition
              products. One small habit for a lifetime of wellness.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4 sm:mb-6">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 hover:text-brand-sage transition-colors cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10 sm:my-12 bg-white/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} Tru Nutrition. All rights reserved.
          </p>
          <p className="text-sm text-white/30">
            7 Days. 7 Sachets. One Healthy Habit.
          </p>
        </div>
      </div>
    </footer>
  );
}
