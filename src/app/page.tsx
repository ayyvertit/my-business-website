'use client'

import { motion } from "framer-motion"
import { ArrowRight, MapPin, Quote } from "lucide-react"
import { Header } from "../components/marketing/Header"
import { Footer } from "../components/marketing/Footer"
import { WaveBackground } from "../components/ui/WaveBackground"
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

export default function Home() {
  return (
    <>
      <Header />
      
      <main id="main-content" role="main" className="min-h-screen">
        
        {/* Hero Section */}
        <section className="relative h-[90vh] bg-[var(--ocean-foam)] dark:bg-[var(--deep-tide)] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 z-0">
            <WaveBackground />
          </div>
          <div className="max-w-5xl mx-auto px-4 text-center z-10">
            <motion.h1 
              className="font-serif text-5xl sm:text-6xl font-bold text-[var(--deep-tide)] dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Relaxation, Delivered.
            </motion.h1>
            <motion.p 
              className="font-sans mt-4 text-lg text-[var(--coastal-mist)] dark:text-[var(--ocean-foam)] max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Mobile massage experiences on the Crystal Coast — where luxury meets convenience.
            </motion.p>
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="/booking"
                className="inline-block bg-[var(--coral-blush)] text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                Book Now
              </a>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-[var(--white-sand)] dark:bg-[var(--deep-tide)] py-24">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.h2 
              className="font-serif text-3xl text-[var(--deep-tide)] dark:text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Massage Services
            </motion.h2>
            <motion.div 
              className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-white/60 dark:bg-white/10 backdrop-blur rounded-xl p-6 shadow-md hover:scale-[1.02] transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="font-serif text-xl font-bold text-[var(--deep-tide)] dark:text-white mb-2">{service.title}</h3>
                  <p className="font-sans text-sm text-[var(--coastal-mist)]">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-[var(--ocean-foam)] dark:bg-[var(--deep-tide)] py-24">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.h2 
              className="font-serif text-3xl text-[var(--deep-tide)] dark:text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Client Testimonials
            </motion.h2>
            <motion.div 
              className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.blockquote
                  key={index}
                  className="bg-white/60 dark:bg-white/10 backdrop-blur rounded-xl p-6 shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Quote className="w-8 h-8 text-[var(--sea-glass)] mb-4 mx-auto" />
                  <p className="font-sans italic text-[var(--deep-tide)] dark:text-white mb-4">"{testimonial.quote}"</p>
                  <footer className="font-sans text-sm text-[var(--coastal-mist)]">
                    – {testimonial.author}, {testimonial.location}
                  </footer>
                </motion.blockquote>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="bg-[var(--white-sand)] dark:bg-[var(--deep-tide)] py-24">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <motion.h2 
              className="font-serif text-3xl text-[var(--deep-tide)] dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Serving the Crystal Coast
            </motion.h2>
            <motion.p 
              className="font-sans mb-8 text-[var(--coastal-mist)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We come to you—wherever you are in the region.
            </motion.p>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {serviceAreas.map((area, index) => (
                <motion.span
                  key={area}
                  className="font-sans text-sm text-[var(--deep-tide)] dark:text-white"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  {area}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Booking Call-to-Action Section */}
        <section className="relative bg-gradient-to-br from-[var(--sea-glass)] to-[var(--coral-blush)] py-24">
          <div className="max-w-xl mx-auto px-4 text-center text-white">
            <motion.h2 
              className="font-serif text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to feel your best?
            </motion.h2>
            <motion.p 
              className="font-sans mt-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Book a massage session and let us bring relaxation to you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a 
                href="/booking" 
                className="inline-block bg-white text-[var(--sea-glass)] font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition"
              >
                Book Your Massage
              </a>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}