"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Heart,
  Dumbbell,
  Apple,
  Zap,
  ShieldCheck,
  Droplets,
} from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const benefits = [
  {
    Icon: Heart,
    name: "Heart Health",
    description:
      "Essential healthy fats from flax and sunflower seeds support cardiovascular health and help maintain healthy cholesterol levels.",
    className: "col-span-1 lg:col-span-2 lg:row-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-pink-50/50" />
    ),
    href: "#",
    cta: "Learn more",
  },
  {
    Icon: Dumbbell,
    name: "Plant Protein",
    description:
      "Pumpkin and watermelon seeds deliver high-quality plant-based protein for muscle recovery and daily nutrition.",
    className: "col-span-1 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50/50" />
    ),
    href: "#",
    cta: "Learn more",
  },
  {
    Icon: Apple,
    name: "Digestive Wellness",
    description:
      "High fiber content from flax and basil seeds supports healthy digestion and promotes gut microbiome balance.",
    className: "col-span-1 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50/50" />
    ),
    href: "#",
    cta: "Learn more",
  },
  {
    Icon: Zap,
    name: "Natural Energy",
    description:
      "Iron and essential minerals from watermelon seeds boost energy levels and overall vitality throughout the day.",
    className: "col-span-1 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-yellow-50/50" />
    ),
    href: "#",
    cta: "Learn more",
  },
  {
    Icon: ShieldCheck,
    name: "Immune Support",
    description:
      "Zinc from pumpkin seeds strengthens your immune defenses, while Vitamin E from sunflower seeds provides powerful antioxidant protection against cellular damage.",
    className: "col-span-1 lg:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-purple-50/50" />
    ),
    href: "#",
    cta: "Learn more",
  },
  {
    Icon: Droplets,
    name: "Hydration & Appetite Control",
    description:
      "Basil seeds are naturally cooling and support healthy hydration levels while helping manage appetite.",
    className: "col-span-1 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-teal-50/50" />
    ),
    href: "#",
    cta: "Learn more",
  },
];

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="benefits" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-cream/20 to-white" />
      <div className="absolute inset-0 bg-grain" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-brand-gold mb-4">
            Powered by Nature
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Benefits of Your{" "}
            <span className="text-gradient-green">Daily Seed Routine</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-dark/60 leading-relaxed">
            Every sachet delivers a comprehensive blend of essential nutrients
            working together to support your overall health and wellbeing.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[18rem]">
            {benefits.map((benefit) => (
              <BentoCard key={benefit.name} {...benefit} />
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}
