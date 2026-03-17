"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Leaf } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green via-brand-green-light to-brand-olive" />
      <div className="absolute inset-0 bg-grain opacity-20" />

      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-8">
            <Leaf className="w-8 h-8 text-brand-sage" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Start Your Seed Routine
            <br />
            <span className="text-brand-sage">Today</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join thousands who have made the switch to smarter nutrition. One
            small sachet, one big step towards a healthier you.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ShimmerButton
              className="h-14 sm:h-16 px-8 sm:px-10"
              shimmerColor="#C4961A"
              shimmerSize="0.1em"
              background="#FFFFFF"
            >
              <span className="flex items-center gap-2 text-base sm:text-lg font-bold text-brand-green">
                Order TruSeeds Now
                <ArrowRight className="w-5 h-5" />
              </span>
            </ShimmerButton>
          </div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-10 sm:mt-12"
          >
            {[
              "100% Natural",
              "No Preservatives",
              "Nutritionist Approved",
              "Free Shipping",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-sage" />
                <span className="text-sm text-white/60 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
