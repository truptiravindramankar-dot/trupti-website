"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const seeds = [
  {
    name: "Flax Seeds",
    emoji: "🌾",
    color: "from-amber-600 to-amber-800",
    bgLight: "bg-amber-50",
    borderColor: "border-amber-200",
    accentColor: "text-amber-700",
    role: "Rich in Omega-3 fatty acids and dietary fiber",
    benefits: [
      "Supports digestion & gut health",
      "Promotes hormonal balance",
      "Heart-healthy omega-3s",
    ],
    highlight: "Omega-3",
  },
  {
    name: "Pumpkin Seeds",
    emoji: "🎃",
    color: "from-orange-500 to-orange-700",
    bgLight: "bg-orange-50",
    borderColor: "border-orange-200",
    accentColor: "text-orange-700",
    role: "High plant protein and zinc content",
    benefits: [
      "Boosts immunity naturally",
      "Supports muscle recovery",
      "Enhances metabolic health",
    ],
    highlight: "Zinc & Protein",
  },
  {
    name: "Sunflower Seeds",
    emoji: "🌻",
    color: "from-yellow-500 to-yellow-700",
    bgLight: "bg-yellow-50",
    borderColor: "border-yellow-200",
    accentColor: "text-yellow-700",
    role: "Excellent source of Vitamin E and antioxidants",
    benefits: [
      "Protects cells from oxidative stress",
      "Supports healthy skin & hair",
      "Rich in antioxidants",
    ],
    highlight: "Vitamin E",
  },
  {
    name: "Watermelon Seeds",
    emoji: "🍈",
    color: "from-emerald-500 to-emerald-700",
    bgLight: "bg-emerald-50",
    borderColor: "border-emerald-200",
    accentColor: "text-emerald-700",
    role: "Plant protein and iron source",
    benefits: [
      "Supports energy levels",
      "Boosts overall vitality",
      "Iron for healthy blood",
    ],
    highlight: "Iron & Energy",
  },
  {
    name: "Basil Seeds",
    emoji: "🌿",
    color: "from-green-600 to-green-800",
    bgLight: "bg-green-50",
    borderColor: "border-green-200",
    accentColor: "text-green-700",
    role: "Cooling fiber-rich seeds",
    benefits: [
      "Supports digestion & hydration",
      "Natural appetite control",
      "Cooling effect on the body",
    ],
    highlight: "Fiber & Hydration",
  },
];

export default function SeedsShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="seeds"
      className="relative py-20 sm:py-28 overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-cream/50 to-white" />
      <div className="absolute inset-0 bg-grain" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-brand-gold mb-4">
            The Power Blend
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            5 Super Seeds,{" "}
            <span className="text-gradient-green">One Perfect Blend</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-dark/60 leading-relaxed">
            Each seed is chosen for its unique nutritional superpower. Together,
            they deliver a complete spectrum of essential nutrients in every
            sachet.
          </p>
        </motion.div>

        {/* Seeds selector - mobile scrollable, desktop grid */}
        <div className="flex gap-3 sm:gap-4 justify-center mb-10 sm:mb-12 overflow-x-auto pb-2 px-2">
          {seeds.map((seed, i) => (
            <motion.button
              key={seed.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              onClick={() => setActiveIndex(i)}
              className={`flex-shrink-0 flex flex-col items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                activeIndex === i
                  ? `${seed.bgLight} ${seed.borderColor} shadow-lg`
                  : "bg-white border-brand-warm/50 hover:border-brand-warm"
              }`}
            >
              <span className="text-2xl sm:text-3xl">{seed.emoji}</span>
              <span
                className={`text-xs sm:text-sm font-semibold whitespace-nowrap ${
                  activeIndex === i ? seed.accentColor : "text-brand-dark/60"
                }`}
              >
                {seed.name.split(" ")[0]}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Active seed detail */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div
            className={`relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 ${seeds[activeIndex].borderColor} ${seeds[activeIndex].bgLight}`}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Visual side */}
              <div
                className={`relative p-8 sm:p-12 flex flex-col items-center justify-center bg-gradient-to-br ${seeds[activeIndex].color} text-white min-h-[250px] sm:min-h-[320px]`}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-7xl sm:text-8xl mb-4 sm:mb-6"
                >
                  {seeds[activeIndex].emoji}
                </motion.div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif mb-2">
                  {seeds[activeIndex].name}
                </h3>
                <div className="px-4 py-1.5 rounded-full bg-white/20 text-sm font-semibold">
                  {seeds[activeIndex].highlight}
                </div>
              </div>

              {/* Info side */}
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <h4 className="text-lg sm:text-xl font-bold text-brand-dark mb-3">
                  Nutritional Role
                </h4>
                <p className="text-base text-brand-dark/70 mb-6 sm:mb-8 leading-relaxed">
                  {seeds[activeIndex].role}
                </p>

                <h4 className="text-lg sm:text-xl font-bold text-brand-dark mb-4">
                  Key Benefits
                </h4>
                <ul className="space-y-3">
                  {seeds[activeIndex].benefits.map((benefit, i) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${seeds[activeIndex].color}`}
                      />
                      <span className="text-sm sm:text-base text-brand-dark/70 font-medium">
                        {benefit}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
