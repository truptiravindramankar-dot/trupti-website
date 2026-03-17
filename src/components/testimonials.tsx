"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "I've tried so many supplements and nutrition plans, but TruSeeds is the only thing I've actually stuck with. One sachet a day — it's so simple that I never skip it. My digestion has improved noticeably!",
    name: "Priya Sharma",
    designation: "Yoga Instructor, Mumbai",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    quote:
      "As a fitness trainer, I'm always looking for clean protein sources. TruSeeds gives me plant protein, zinc, and omega-3s without any processed junk. I sprinkle it on everything — oats, salads, even curd!",
    name: "Arjun Mehta",
    designation: "Fitness Coach, Bangalore",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    quote:
      "Between work and kids, I barely have time to think about nutrition. TruSeeds solved that problem completely. The sachets fit in my purse, and my kids love the crunch too. It's become a family habit!",
    name: "Sneha Kapoor",
    designation: "Working Mother, Delhi",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    quote:
      "The concept of a 7-day seed routine really spoke to me. I was never consistent with healthy eating before, but the sachet format makes it effortless. I've been doing this for 3 months now and feel more energetic.",
    name: "Rahul Desai",
    designation: "Software Engineer, Pune",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    quote:
      "As a nutritionist, I recommend TruSeeds to my clients who struggle with consistency. The portion control is perfect — 25 grams is exactly the right daily amount. Finally, someone got the product design right!",
    name: "Dr. Meera Patel",
    designation: "Clinical Nutritionist, Ahmedabad",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-28 overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/40 via-white to-brand-cream/30" />
      <div className="absolute inset-0 bg-grain" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-brand-gold mb-4">
            Real Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Loved by{" "}
            <span className="text-gradient-green">Health-Conscious People</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-dark/60 leading-relaxed">
            Join thousands who have made TruSeeds part of their daily routine.
          </p>
        </motion.div>

        {/* Animated Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatedTestimonials testimonials={testimonials} autoplay />
        </motion.div>
      </div>
    </section>
  );
}
