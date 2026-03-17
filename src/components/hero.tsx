"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { WordRotate } from "@/components/ui/word-rotate";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-white to-brand-warm/40" />
      <div className="absolute inset-0 bg-grain" />

      {/* Decorative organic shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-sage/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl" />

      {/* Floating seed elements */}
      <motion.div
        className="absolute top-32 right-[15%] text-6xl opacity-20 hidden lg:block"
        animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        🌻
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-[25%] text-5xl opacity-15 hidden lg:block"
        animate={{ y: [10, -15, 10], rotate: [0, -8, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        🎃
      </motion.div>
      <motion.div
        className="absolute top-[45%] right-[8%] text-4xl opacity-15 hidden lg:block"
        animate={{ y: [-8, 12, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        🌿
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 sm:pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 sm:mb-8"
            >
              <div className="flex items-center gap-2 rounded-full border border-brand-green/20 bg-brand-green/5 px-4 py-1.5">
                <Sparkles className="w-4 h-4 text-brand-gold" />
                <AnimatedShinyText className="text-sm font-medium text-brand-green">
                  Nutritionist-Inspired Daily Routine
                </AnimatedShinyText>
              </div>
            </motion.div>

            {/* Main heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 sm:mb-8">
              <span className="text-brand-dark">7 Days.</span>
              <br />
              <span className="text-brand-dark">7 Sachets.</span>
              <br />
              <span className="text-gradient-green">One Healthy</span>
              <br />
              <span className="text-gradient-green">Habit.</span>
            </h1>

            {/* Rotating subtitle */}
            <div className="flex items-center gap-2 justify-center lg:justify-start mb-6 sm:mb-8">
              <span className="text-base sm:text-lg text-brand-dark/60 font-medium">
                Your daily dose of
              </span>
              <WordRotate
                words={[
                  "Omega-3 Fatty Acids",
                  "Plant Protein",
                  "Natural Fiber",
                  "Essential Minerals",
                  "Antioxidants",
                ]}
                className="text-base sm:text-lg font-bold text-brand-green"
              />
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-brand-dark/60 max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed">
              TruSeeds is a smart seed nutrition system with 5 super seeds,
              pre-portioned into daily sachets. Just open, eat, and nourish — no
              measuring, no guessing.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <ShimmerButton
                className="h-14 px-8"
                shimmerColor="#A8C686"
                shimmerSize="0.08em"
                background="#2D5016"
              >
                <span className="flex items-center gap-2 text-base font-semibold text-brand-cream">
                  Start Your Routine
                  <ArrowRight className="w-5 h-5" />
                </span>
              </ShimmerButton>
              <a
                href="#seeds"
                className="inline-flex items-center justify-center h-14 px-8 rounded-xl border-2 border-brand-green/20 text-brand-green font-semibold hover:bg-brand-green/5 transition-all duration-300 cursor-pointer"
              >
                Explore Seeds
              </a>
            </div>

            {/* Trust bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center gap-6 sm:gap-8 mt-10 sm:mt-12 justify-center lg:justify-start"
            >
              {[
                { value: "5", label: "Super Seeds" },
                { value: "25g", label: "Per Sachet" },
                { value: "0", label: "Preservatives" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-brand-green font-serif">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-brand-dark/50 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Product Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow behind product */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-sage/40 via-brand-gold/20 to-brand-green/30 rounded-full blur-3xl scale-110" />

              {/* Product showcase card */}
              <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 sm:p-10 border border-brand-warm/50 shadow-xl">
                {/* Day indicators */}
                <div className="flex justify-center gap-2 mb-8">
                  {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.08 }}
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        i < 3
                          ? "bg-brand-green text-white shadow-md shadow-brand-green/30"
                          : "bg-brand-warm/60 text-brand-dark/50"
                      }`}
                    >
                      {day}
                    </motion.div>
                  ))}
                </div>

                {/* Sachet illustration */}
                <div className="relative mx-auto w-48 h-56 sm:w-56 sm:h-64 mb-8">
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-br from-brand-green via-brand-green-light to-brand-olive rounded-2xl shadow-2xl shadow-brand-green/20 flex flex-col items-center justify-center text-white p-4 sm:p-6"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 flex items-center justify-center mb-3 sm:mb-4">
                      <span className="text-2xl sm:text-3xl">🌱</span>
                    </div>
                    <span className="text-base sm:text-lg font-bold font-serif">TruSeeds</span>
                    <span className="text-xs sm:text-sm opacity-80 mt-1">Daily Sachet</span>
                    <div className="mt-3 sm:mt-4 px-3 sm:px-4 py-1.5 rounded-full bg-white/20 text-xs font-semibold">
                      25g • Day 4
                    </div>
                  </motion.div>
                </div>

                {/* Seeds preview */}
                <div className="flex justify-center gap-3 sm:gap-4">
                  {[
                    { emoji: "🌾", name: "Flax" },
                    { emoji: "🎃", name: "Pumpkin" },
                    { emoji: "🌻", name: "Sunflower" },
                    { emoji: "🍈", name: "Melon" },
                    { emoji: "🌿", name: "Basil" },
                  ].map((seed, i) => (
                    <motion.div
                      key={seed.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="flex flex-col items-center gap-1"
                    >
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand-cream flex items-center justify-center text-lg sm:text-xl shadow-sm">
                        {seed.emoji}
                      </div>
                      <span className="text-[10px] sm:text-xs font-medium text-brand-dark/50">
                        {seed.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
