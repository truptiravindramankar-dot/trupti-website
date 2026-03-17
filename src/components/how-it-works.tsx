"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Package, CalendarDays, Utensils, Repeat } from "lucide-react";

const steps = [
  {
    icon: Package,
    number: "01",
    title: "Get Your Box",
    description:
      "Each TruSeeds box contains 7 individually sealed sachets — one full week of balanced seed nutrition, ready to go.",
    detail: "7 sachets × 25g each",
  },
  {
    icon: CalendarDays,
    number: "02",
    title: "One Sachet a Day",
    description:
      "Simply open one sachet each morning. Pre-portioned for the perfect daily amount — no measuring needed.",
    detail: "Just 25g per day",
  },
  {
    icon: Utensils,
    number: "03",
    title: "Eat or Sprinkle",
    description:
      "Enjoy the lightly roasted seeds as a crunchy snack, or sprinkle them on your breakfast, salads, or smoothie bowls.",
    detail: "Lightly roasted for flavor",
  },
  {
    icon: Repeat,
    number: "04",
    title: "Build the Habit",
    description:
      "Consistency is key. After a few weeks, your daily seed routine becomes second nature — and your body will thank you.",
    detail: "One small habit, big results",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-brand-dark" />
      <div className="absolute inset-0 bg-grain opacity-30" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-brand-gold mb-4">
            Simple as 1-2-3-4
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            How{" "}
            <span className="text-brand-sage">TruSeeds</span>{" "}
            Works
          </h2>
          <p className="text-base sm:text-lg text-white/60 leading-relaxed">
            No complicated diets. No strict meal plans. Just one simple daily
            habit that delivers real nutritional value.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative"
            >
              {/* Connector line (hidden on mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-px bg-gradient-to-r from-brand-sage/40 to-transparent z-0" />
              )}

              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-brand-sage/30 hover:bg-white/10 transition-all duration-300 h-full">
                {/* Step number */}
                <div className="text-5xl sm:text-6xl font-bold font-serif text-brand-green/20 absolute top-4 right-6">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-brand-green/20 flex items-center justify-center mb-5 group-hover:bg-brand-green/30 transition-colors">
                  <step.icon className="w-7 h-7 text-brand-sage" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base text-white/55 leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Detail tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/20 text-xs sm:text-sm font-medium text-brand-sage">
                  {step.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
