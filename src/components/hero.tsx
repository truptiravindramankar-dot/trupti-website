"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Leaf } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { WordRotate } from "@/components/ui/word-rotate";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Rich layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f00] via-[#132d08] to-[#1a3a10]" />

      {/* Organic mesh gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_40%,rgba(168,198,134,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_20%,rgba(196,164,92,0.1),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_60%_80%,rgba(168,198,134,0.08),transparent)]" />

      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }} />

      {/* Animated glowing orbs */}
      <motion.div
        className="absolute top-[15%] right-[10%] w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(168,198,134,0.12) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(196,164,92,0.1) 0%, transparent 70%)" }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-[50%] left-[50%] w-[300px] h-[300px] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, rgba(168,198,134,0.06) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Floating botanical line art */}
      <motion.div
        className="absolute top-24 right-[12%] hidden lg:block"
        animate={{ y: [-10, 10, -10], rotate: [0, 3, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Leaf className="w-16 h-16 text-brand-sage/15 stroke-[0.5]" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-[20%] hidden lg:block"
        animate={{ y: [8, -12, 8], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <Leaf className="w-12 h-12 text-brand-gold/10 stroke-[0.5] rotate-45" />
      </motion.div>
      <motion.div
        className="absolute top-[55%] left-[8%] hidden lg:block"
        animate={{ y: [-6, 14, -6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      >
        <Leaf className="w-10 h-10 text-brand-sage/10 stroke-[0.5] -rotate-30" />
      </motion.div>

      {/* Horizontal decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-sage/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-sage/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 sm:pb-20 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-8 sm:mb-10"
          >
            <div className="flex items-center gap-2 rounded-full border border-brand-sage/20 bg-white/5 backdrop-blur-sm px-5 py-2">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <AnimatedShinyText className="text-sm font-medium text-brand-sage/90">
                Nutritionist-Inspired Daily Routine
              </AnimatedShinyText>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[1.05] tracking-tight mb-6 sm:mb-8">
              <span className="text-brand-cream/95">7 Days.</span>
              <br />
              <span className="text-brand-cream/95">7 Sachets.</span>
              <br />
              <span className="bg-gradient-to-r from-brand-sage via-brand-green-light to-brand-sage bg-clip-text text-transparent">
                One Healthy Habit.
              </span>
            </h1>
          </motion.div>

          {/* Rotating subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 justify-center mb-6 sm:mb-8"
          >
            <span className="text-base sm:text-lg text-brand-cream/40 font-medium">
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
              className="text-base sm:text-lg font-bold text-brand-sage"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg text-brand-cream/50 max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed"
          >
            TruSeeds is a smart seed nutrition system with 5 super seeds,
            pre-portioned into daily sachets. Just open, eat, and nourish — no
            measuring, no guessing.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <ShimmerButton
              className="h-14 px-10"
              shimmerColor="#A8C686"
              shimmerSize="0.08em"
              background="rgba(168,198,134,0.15)"
            >
              <span className="flex items-center gap-2 text-base font-semibold text-brand-cream">
                Start Your Routine
                <ArrowRight className="w-5 h-5" />
              </span>
            </ShimmerButton>
            <a
              href="#seeds"
              className="inline-flex items-center justify-center h-14 px-10 rounded-xl border border-brand-sage/20 text-brand-sage font-semibold hover:bg-white/5 transition-all duration-300 cursor-pointer backdrop-blur-sm"
            >
              Explore Seeds
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap items-center gap-8 sm:gap-16 mt-16 sm:mt-20 justify-center"
          >
            {[
              { value: "5", label: "Super Seeds" },
              { value: "25g", label: "Per Sachet" },
              { value: "0", label: "Preservatives" },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center relative">
                <div className="text-3xl sm:text-4xl font-bold text-brand-sage font-serif">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-brand-cream/35 font-medium mt-1">
                  {stat.label}
                </div>
                {i < 2 && (
                  <div className="hidden sm:block absolute -right-8 sm:-right-10 top-1/2 -translate-y-1/2 w-px h-8 bg-brand-sage/15" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-cream to-transparent" />
    </section>
  );
}
