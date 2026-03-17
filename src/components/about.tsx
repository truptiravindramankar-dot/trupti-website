"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Shield, Leaf, Clock } from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";

const values = [
  {
    icon: Leaf,
    title: "Clean Ingredients",
    description:
      "Only natural, high-quality seeds — no preservatives, no additives, no artificial anything.",
  },
  {
    icon: Shield,
    title: "Science-Backed",
    description:
      "Nutritionist-designed blend providing the right balance of fats, protein, fiber, and micronutrients.",
  },
  {
    icon: Clock,
    title: "Built for Busy Lives",
    description:
      "Pre-portioned sachets you can carry anywhere. No measuring, no meal prep, no hassle.",
  },
  {
    icon: Heart,
    title: "Sustainable Habits",
    description:
      "We believe in small, daily practices over extreme diets. Consistency is the real superpower.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-cream/30 to-white" />
      <div className="absolute inset-0 bg-grain" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-brand-gold mb-4">
            Why Tru Nutrition
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Nutrition Made{" "}
            <span className="text-gradient-green">Simple & Sustainable</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-dark/60 leading-relaxed">
            Modern lifestyles make healthy eating hard. We bridge that gap with
            clean, natural, and carefully portioned nutrition solutions designed
            for your daily wellbeing.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-brand-warm/50 hover:border-brand-green/30 hover:shadow-lg hover:shadow-brand-green/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center mb-5 group-hover:bg-brand-green/20 transition-colors">
                <value.icon className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-brand-dark/55 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-brand-green rounded-2xl sm:rounded-3xl p-8 sm:p-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {[
              { value: 5, suffix: "", label: "Super Seeds Blend" },
              { value: 25, suffix: "g", label: "Per Daily Sachet" },
              { value: 7, suffix: "", label: "Days Per Box" },
              { value: 100, suffix: "%", label: "Natural Ingredients" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif">
                  {isInView && (
                    <NumberTicker
                      value={stat.value}
                      className="text-white"
                    />
                  )}
                  <span className="text-brand-sage">{stat.suffix}</span>
                </div>
                <div className="text-sm sm:text-base text-white/70 mt-2 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
