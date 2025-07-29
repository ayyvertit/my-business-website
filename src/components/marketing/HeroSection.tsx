"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Star, Shield, Truck, Heart } from "lucide-react"
import { Button } from "../ui/button"
import { AnimatedBackground } from "../animations/AnimatedBackground"
import { fadeInUp, staggerContainer, staggerItem } from "../../lib/motion"
import Link from "next/link"

export function HeroSection() {
  return (
    <section 
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[var(--ocean-foam)] to-[var(--white-sand)] dark:from-[var(--deep-tide)] dark:to-[var(--background)]"
    >
      {/* Realistic wave background */}
      <AnimatedBackground />
      
      {/* Content */}
      <div className="container-responsive relative z-10">
        <motion.div
          className="text-center max-w-6xl mx-auto px-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow - Better spacing and visual separation */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 mb-16"
            variants={staggerItem}
          >
            <div className="flex items-center space-x-2 px-4 py-2 bg-[var(--sea-glass)]/10 rounded-full border border-[var(--sea-glass)]/20">
              <Sparkles className="w-4 h-4 text-[var(--sea-glass)]" />
              <span className="text-sm font-medium text-[var(--sea-glass)]">Concierge Massage</span>
            </div>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </motion.div>

          {/* Main Headline - Better line breaks and spacing */}
          <motion.h1
            id="hero-heading"
            className="display-1 font-display font-bold leading-tight mb-16 text-[var(--deep-tide)] max-w-5xl mx-auto"
            variants={staggerItem}
          >
            <span className="block text-[var(--deep-tide)]">Relief.</span>
            <span className="block text-[var(--sea-glass)]">Recovery.</span>
            <span className="block text-[var(--coral-blush)]">Relaxation.</span>
          </motion.h1>

          {/* Subheadline - Better paragraph spacing and width */}
          <motion.p
            className="body-large text-[var(--deep-tide)]/80 max-w-3xl mx-auto mb-20 leading-relaxed"
            variants={staggerItem}
          >
            Experience the ultimate in luxury mobile massage therapy. Professional, clinical-grade 
            treatments delivered to your doorstep with the highest standards of care and ethics.
          </motion.p>

          {/* CTA Buttons - Better spacing and layout */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-24"
            variants={staggerItem}
          >
            <Button size="lg" variant="gradient" className="group min-w-[200px]" asChild>
              <Link href="/booking">
                Book Your Session
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="secondaryOutline" className="min-w-[200px]" asChild>
              <Link href="/services">
                View Services & Pricing
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators - Better spacing and visual separation */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-sm text-[var(--deep-tide)]/70 max-w-4xl mx-auto"
            variants={staggerItem}
          >
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-[var(--sea-glass)] flex-shrink-0" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-3">
              <Truck className="w-5 h-5 text-[var(--coral-blush)] flex-shrink-0" />
              <span>Mobile Concierge Service</span>
            </div>
            <div className="flex items-center space-x-3">
              <Heart className="w-5 h-5 text-[var(--coral-blush)] flex-shrink-0" />
              <span>Clinical-Grade Techniques</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Better positioning */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-[var(--deep-tide)]/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-[var(--deep-tide)]/50 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
} 