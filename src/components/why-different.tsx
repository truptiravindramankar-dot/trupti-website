"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Marquee } from "@/components/ui/marquee";
import { Check, X } from "lucide-react";

const comparisons = [
  { feature: "Pre-portioned daily sachets", truseeds: true, others: false },
  { feature: "Structured 7-day system", truseeds: true, others: false },
  { feature: "5 super seeds balanced blend", truseeds: true, others: false },
  { feature: "No preservatives or additives", truseeds: true, others: false },
  { feature: "Nutritionist-designed portions", truseeds: true, others: false },
  { feature: "Carry-anywhere convenience", truseeds: true, others: false },
  { feature: "Lightly roasted for flavor", truseeds: true, others: false },
];

const marqueeItems = [
  "Omega-3 Fatty Acids",
  "Plant Protein",
  "Dietary Fiber",
  "Vitamin E",
  "Zinc",
  "Iron",
  "Antioxidants",
  "Healthy Fats",
  "Magnesium",
  "Essential Minerals",
];

export default function WhyDifferent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-brand-cream/30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-brand-gold mb-4">
            The TruSeeds Difference
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Why TruSeeds is{" "}
            <span className="text-gradient-green">Not Just Another Product</span>
          </h2>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-brand-warm/50 overflow-hidden shadow-lg shadow-brand-green/5">
            {/* Table header */}
            <div className="grid grid-cols-3 gap-4 px-6 sm:px-8 py-4 sm:py-5 bg-brand-green text-white">
              <div className="text-sm sm:text-base font-semibold">Feature</div>
              <div className="text-sm sm:text-base font-semibold text-center">TruSeeds</div>
              <div className="text-sm sm:text-base font-semibold text-center">Loose Seeds</div>
            </div>

            {/* Table rows */}
            {comparisons.map((row, i) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.06 }}
                className={`grid grid-cols-3 gap-4 px-6 sm:px-8 py-3 sm:py-4 ${
                  i % 2 === 0 ? "bg-white" : "bg-brand-cream/30"
                }`}
              >
                <div className="text-sm sm:text-base text-brand-dark/70 font-medium">
                  {row.feature}
                </div>
                <div className="flex justify-center">
                  <div className="w-7 h-7 rounded-full bg-brand-green/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-brand-green" />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Nutrient Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-center text-sm font-semibold tracking-[0.2em] uppercase text-brand-dark/40 mb-6">
            Packed with essential nutrients
          </p>
          <Marquee pauseOnHover className="[--duration:30s]">
            {marqueeItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 mx-4 px-5 py-2.5 rounded-full bg-white border border-brand-warm/50 shadow-sm"
              >
                <div className="w-2 h-2 rounded-full bg-brand-green" />
                <span className="text-sm font-medium text-brand-dark/70 whitespace-nowrap">
                  {item}
                </span>
              </div>
            ))}
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
}
