"use client"

import { motion } from "framer-motion"
import { ArrowRight, MapPin, Quote } from "lucide-react"
import { DesktopHeader } from "./DesktopHeader"
import { Footer } from "./Footer"
import { WaveBackground } from "../ui/WaveBackground"
import Link from "next/link"

// Testimonials data
const testimonials = [
  {
    quote: "The best massage experience I've ever had! Felt like a dream.",
    author: "Alex R.",
    location: "Atlantic Beach"
  },
  {
    quote: "Professional, relaxing, and convenient. Perfect for vacation rentals.",
    author: "Sarah M.",
    location: "Emerald Isle"
  },
  {
    quote: "Amazing service! Came to our boat and made everything so easy.",
    author: "Mike T.",
    location: "Morehead City"
  }
]

// Service areas
const serviceAreas = [
  "Atlantic Beach", "Emerald Isle", "Morehead City", "Beaufort",
  "Newport", "Cedar Point", "Swansboro", "Cape Carteret"
]

// Services data
const services = [
  {
    title: "Swedish Massage",
    description: "A gentle, full-body massage to ease stress and promote relaxation."
  },
  {
    title: "Therapeutic Massage",
    description: "Deep tissue work for chronic pain and muscle tension relief."
  },
  {
    title: "TMJ/MediCupping",
    description: "Specialized treatment for jaw tension and cupping therapy."
  },
  {
    title: "Hot Stone Massage",
    description: "Heated stones for deep muscle relaxation and stress relief."
  },
  {
    title: "Aromatherapy Massage",
    description: "Essential oils enhance the therapeutic benefits of massage."
  },
  {
    title: "Sports Massage",
    description: "Targeted techniques for athletes and active individuals."
  }
]

export function DesktopPage() {
  return (
    <>
      <DesktopHeader />

      <main id="main-content" role="main" className="min-h-screen">

        {/* Hero Section - Desktop Optimized */}
        <section className="relative h-screen bg-[var(--ocean-foam)] dark:bg-[var(--deep-tide)] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 z-0">
            <WaveBackground />
          </div>
          <div className="max-w-6xl mx-auto px-8 text-center z-10">
            <motion.h1
              className="font-serif font-bold text-[var(--deep-tide)] dark:text-white mb-8 text-center"
              style={{ fontSize: '8rem', lineHeight: '1.1' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              Relaxation, Delivered.
            </motion.h1>
            <motion.p
              className="font-sans text-xl text-[var(--coastal-mist)] dark:text-[var(--ocean-foam)] max-w-3xl mx-auto mb-12 text-center leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            >
              Mobile massage experiences on the Crystal Coast — where luxury meets convenience.
            </motion.p>
            <motion.div
              className="flex gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            >
              <motion.a
                href="/booking"
                className="inline-block bg-[var(--coral-blush)] text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg font-semibold text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Now
              </motion.a>
              <motion.a
                href="/services"
                className="inline-block border-2 border-[var(--sea-glass)] text-[var(--sea-glass)] px-8 py-4 rounded-full hover:bg-[var(--sea-glass)] hover:text-white transition-all duration-300 text-lg font-semibold text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Services
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Services Section - Desktop Grid */}
        <section className="bg-[var(--white-sand)] dark:bg-[var(--deep-tide)] py-32">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <motion.h2
              className="font-serif text-5xl text-[var(--deep-tide)] dark:text-white mb-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Our Massage Services
            </motion.h2>
            <motion.div
              className="grid gap-8 grid-cols-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <h3 className="font-serif text-2xl font-bold text-[var(--deep-tide)] dark:text-white mb-4 text-center">{service.title}</h3>
                  <p className="font-sans text-lg text-[var(--coastal-mist)] leading-relaxed text-center">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section - Desktop Layout */}
        <section className="bg-[var(--ocean-foam)] dark:bg-[var(--deep-tide)] py-32">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <motion.h2
              className="font-serif text-5xl text-[var(--deep-tide)] dark:text-white mb-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Client Testimonials
            </motion.h2>
            <motion.div
              className="grid gap-8 grid-cols-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.blockquote
                  key={index}
                  className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-2xl p-8 shadow-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Quote className="w-12 h-12 text-[var(--sea-glass)] mb-6 mx-auto" />
                  <p className="font-sans italic text-lg text-[var(--deep-tide)] dark:text-white mb-6 leading-relaxed text-center">&ldquo;{testimonial.quote}&rdquo;</p>
                  <footer className="font-sans text-base text-[var(--coastal-mist)] text-center">
                    – {testimonial.author}, {testimonial.location}
                  </footer>
                </motion.blockquote>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Service Area Section - Desktop Layout */}
        <section className="bg-[var(--white-sand)] dark:bg-[var(--deep-tide)] py-32">
          <div className="max-w-6xl mx-auto px-8 text-center">
            <motion.h2
              className="font-serif text-5xl text-[var(--deep-tide)] dark:text-white mb-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Serving the Crystal Coast
            </motion.h2>
            <motion.p
              className="font-sans text-xl mb-12 text-[var(--coastal-mist)] text-center leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We come to you—wherever you are in the region.
            </motion.p>
            <motion.div
              className="grid grid-cols-4 gap-8 justify-items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {serviceAreas.map((area, index) => (
                <motion.span
                  key={area}
                  className="font-sans text-lg text-[var(--deep-tide)] dark:text-white p-4 bg-white/60 dark:bg-white/10 rounded-xl text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {area}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Booking Call-to-Action Section - Desktop Enhanced */}
        <section className="relative bg-gradient-to-br from-[var(--sea-glass)] to-[var(--coral-blush)] py-32">
          <div className="max-w-4xl mx-auto px-8 text-center text-white">
            <motion.h2
              className="font-serif text-6xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Ready to feel your best?
            </motion.h2>
            <motion.p
              className="font-sans text-xl mb-12 leading-relaxed text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Book a massage session and let us bring relaxation to you.
            </motion.p>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.a
                href="/booking"
                className="inline-block bg-white text-[var(--sea-glass)] font-semibold px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-xl text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Your Massage
              </motion.a>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
} 