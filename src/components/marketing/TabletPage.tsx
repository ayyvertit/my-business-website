"use client"

import { motion } from "framer-motion"
import { ArrowRight, MapPin, Quote } from "lucide-react"
import { TabletHeader } from "./TabletHeader"
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

export function TabletPage() {
  return (
    <>
      <TabletHeader />

      <main id="main-content" role="main" className="min-h-screen">

        {/* Hero Section - Tablet Optimized */}
        <section className="relative h-[80vh] bg-[var(--ocean-foam)] dark:bg-[var(--deep-tide)] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 z-0">
            <WaveBackground />
          </div>
          <div className="max-w-5xl mx-auto px-6 text-center z-10">
            <motion.h1
              className="font-serif text-7xl md:text-8xl lg:text-9xl font-black text-[var(--deep-tide)] dark:text-white mb-10 leading-none tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Relaxation, Delivered.
            </motion.h1>
            <motion.p
              className="font-sans text-xl text-[var(--coastal-mist)] dark:text-[var(--ocean-foam)] max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              Mobile massage experiences on the Crystal Coast — where luxury meets convenience.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              <motion.a
                href="/booking"
                className="inline-block bg-[var(--coral-blush)] text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Now
              </motion.a>
              <motion.a
                href="/services"
                className="inline-block border-2 border-[var(--sea-glass)] text-[var(--sea-glass)] px-8 py-4 rounded-full hover:bg-[var(--sea-glass)] hover:text-white transition-all duration-300 text-lg font-semibold"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                View Services
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Services Section - Tablet Grid */}
        <section className="bg-[var(--white-sand)] dark:bg-[var(--deep-tide)] py-24">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.h2
              className="font-serif text-4xl text-[var(--deep-tide)] dark:text-white mb-12"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Massage Services
            </motion.h2>
            <motion.div
              className="grid gap-6 grid-cols-2"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  <h3 className="font-serif text-xl font-bold text-[var(--deep-tide)] dark:text-white mb-3">{service.title}</h3>
                  <p className="font-sans text-base text-[var(--coastal-mist)] leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section - Tablet Layout */}
        <section className="bg-[var(--ocean-foam)] dark:bg-[var(--deep-tide)] py-24">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.h2
              className="font-serif text-4xl text-[var(--deep-tide)] dark:text-white mb-12"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Client Testimonials
            </motion.h2>
            <motion.div
              className="grid gap-6 grid-cols-1 md:grid-cols-2"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.blockquote
                  key={index}
                  className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-xl p-6 shadow-md"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  <Quote className="w-10 h-10 text-[var(--sea-glass)] mb-4 mx-auto" />
                  <p className="font-sans italic text-base text-[var(--deep-tide)] dark:text-white mb-4 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                  <footer className="font-sans text-sm text-[var(--coastal-mist)]">
                    – {testimonial.author}, {testimonial.location}
                  </footer>
                </motion.blockquote>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Service Area Section - Tablet Layout */}
        <section className="bg-[var(--white-sand)] dark:bg-[var(--deep-tide)] py-24">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.h2
              className="font-serif text-4xl text-[var(--deep-tide)] dark:text-white mb-6"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Serving the Crystal Coast
            </motion.h2>
            <motion.p
              className="font-sans text-lg mb-8 text-[var(--coastal-mist)]"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We come to you—wherever you are in the region.
            </motion.p>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {serviceAreas.map((area, index) => (
                <motion.span
                  key={area}
                  className="font-sans text-base text-[var(--deep-tide)] dark:text-white p-3 bg-white/60 dark:bg-white/10 rounded-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.03, y: -1 }}
                >
                  {area}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Booking Call-to-Action Section - Tablet Enhanced */}
        <section className="relative bg-gradient-to-br from-[var(--sea-glass)] to-[var(--coral-blush)] py-24">
          <div className="max-w-3xl mx-auto px-6 text-center text-white">
            <motion.h2
              className="font-serif text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to feel your best?
            </motion.h2>
            <motion.p
              className="font-sans text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Book a massage session and let us bring relaxation to you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href="/booking"
                className="inline-block bg-white text-[var(--sea-glass)] font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                whileHover={{ scale: 1.03, y: -1 }}
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