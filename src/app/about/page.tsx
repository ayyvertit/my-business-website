"use client"

import { motion } from "framer-motion"
import { Shield, Award, Heart, MapPin, GraduationCap, FileText } from 'lucide-react'
import { ResponsiveHeader } from '../../components/marketing/ResponsiveHeader'
import Footer from '../../components/Footer'

export default function AboutPage() {
  return (
    <>
      <ResponsiveHeader />
      <main className="min-h-screen bg-[var(--white-sand)] dark:bg-[var(--deep-tide)]">

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[var(--ocean-foam)] to-[var(--white-sand)] dark:from-[var(--deep-tide)] dark:to-[var(--deep-tide)] py-24 sm:py-32">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--deep-tide)] dark:text-white mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Meet Your Massage Therapist
              </motion.h1>
              <motion.div
                className="w-24 h-1 bg-[var(--coral-blush)] mx-auto mb-8 sm:mb-12"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <motion.p
                className="text-xl sm:text-2xl text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Professional, certified, and passionate about your wellness
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-6 sm:px-8">
            <motion.div
              className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-2xl p-8 sm:p-12 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-serif text-3xl font-bold text-[var(--deep-tide)] dark:text-white mb-8 text-center">
                Cameron&apos;s Story
              </h2>
              <div className="prose prose-lg max-w-none text-[var(--coastal-mist)]">
                <p className="text-lg leading-relaxed mb-6">
                  I&apos;ve dedicated my career to helping people find relief from stress, pain, and tension. My journey began with a deep appreciation for the healing power of touch and a desire to make wellness accessible to everyone.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  After working in traditional spa settings, I realized that many people couldn&apos;t access quality massage therapy due to time constraints, mobility issues, or simply the inconvenience of traveling to a spa. This inspired me to create Crystal Coast Concierge Massage - bringing professional, therapeutic massage directly to your door.
                </p>
                <p className="text-lg leading-relaxed">
                  Whether you&apos;re a local resident, a vacationer enjoying the Crystal Coast, or someone seeking convenience without compromise, I&apos;m here to provide you with a personalized massage experience in the comfort of your own space.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Credentials & Approach Section */}
        <section className="py-16 sm:py-24 bg-[var(--ocean-foam)] dark:bg-[var(--deep-tide)]">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--deep-tide)] dark:text-white mb-4">
                Credentials & Approach
              </h2>
              <p className="text-lg text-[var(--coastal-mist)] max-w-2xl mx-auto">
                Professional training and a commitment to your wellness journey
              </p>
            </motion.div>

            <motion.div
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <GraduationCap className="w-12 h-12 text-[var(--sea-glass)] mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-[var(--deep-tide)] dark:text-white mb-2">
                  Licensed & Certified
                </h3>
                <p className="text-[var(--coastal-mist)]">
                  State-licensed massage therapist (NC License #22913) with ongoing continuing education
                </p>
              </motion.div>

              <motion.div
                className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Shield className="w-12 h-12 text-[var(--coral-blush)] mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-[var(--deep-tide)] dark:text-white mb-2">
                  ABMP Insured Professional
                </h3>
                <p className="text-[var(--coastal-mist)]">
                  Fully insured through ABMP with professional liability coverage for your peace of mind
                </p>
              </motion.div>

              <motion.div
                className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Heart className="w-12 h-12 text-[var(--sea-glass)] mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-[var(--deep-tide)] dark:text-white mb-2">
                  Personalized Care
                </h3>
                <p className="text-[var(--coastal-mist)]">
                  Each session tailored to your specific needs and comfort level
                </p>
              </motion.div>

              <motion.div
                className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <MapPin className="w-12 h-12 text-[var(--coral-blush)] mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-[var(--deep-tide)] dark:text-white mb-2">
                  Mobile Convenience
                </h3>
                <p className="text-[var(--coastal-mist)]">
                  Professional equipment and setup brought directly to your location
                </p>
              </motion.div>

              <motion.div
                className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Award className="w-12 h-12 text-[var(--sea-glass)] mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-[var(--deep-tide)] dark:text-white mb-2">
                  Specialized Training
                </h3>
                <p className="text-[var(--coastal-mist)]">
                  Advanced training in therapeutic techniques and specialized modalities
                </p>
              </motion.div>

              <motion.div
                className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <FileText className="w-12 h-12 text-[var(--coral-blush)] mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-[var(--deep-tide)] dark:text-white mb-2">
                  Health History
                </h3>
                <p className="text-[var(--coastal-mist)]">
                  Comprehensive intake process to ensure safe and effective treatment
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
} 