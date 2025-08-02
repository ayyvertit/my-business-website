'use client'

import { motion } from "framer-motion"
import { ArrowRight, MapPin, Quote } from "lucide-react"
import { ResponsiveHeader } from "../components/marketing/ResponsiveHeader"
import { Footer } from "../components/marketing/Footer"
import { WaveBackground } from "../components/ui/WaveBackground"
import { DevelopmentNotice } from "../components/ui/DevelopmentNotice"
import Link from "next/link"

// Testimonials data
const testimonials = [
  {
    name: "Sarah M.",
    location: "Emerald Isle",
    text: "Cameron's mobile massage service is incredible! She brought everything needed and created such a relaxing atmosphere. Perfect for our beach vacation.",
    rating: 5
  },
  {
    name: "Michael T.",
    location: "Atlantic Beach",
    text: "Professional, punctual, and the massage was exactly what I needed after a long day. Highly recommend for anyone on the Crystal Coast.",
    rating: 5
  },
  {
    name: "Jennifer L.",
    location: "Morehead City",
    text: "The convenience of having a massage come to our rental was amazing. Cameron is skilled and made us feel so comfortable.",
    rating: 5
  }
]

// Service areas data
const serviceAreas = [
  "Emerald Isle",
  "Atlantic Beach",
  "Pine Knoll Shores",
  "Indian Beach",
  "Salter Path",
  "Morehead City",
  "Beaufort",
  "Newport"
]

// Services data
const services = [
  {
    title: "Swedish Massage",
    description: "A smooth, flowing full-body massage designed to reduce stress, enhance circulation, and promote deep relaxation.",
    duration: "60-120 minutes",
    price: "$115-180"
  },
  {
    title: "Deep Tissue Massage",
    description: "Focused, therapeutic work targeting deeper layers of muscle to relieve chronic tension, postural issues, and physical stress.",
    duration: "60-120 minutes",
    price: "$115-180"
  },
  {
    title: "Custom Therapeutic Massage",
    description: "A tailored blend of techniques adjusted to your unique needs — whether you're looking to unwind, recover, or focus on specific areas.",
    duration: "60-120 minutes",
    price: "$115-180"
  },
  {
    title: "Couples Massage",
    description: "Two consecutive 60-minute sessions for you and your partner, friend, or family member — perfect for romantic getaways or shared self-care.",
    duration: "60 minutes each",
    price: "$230 total"
  }
]

export default function Home() {
  return (
    <>
      <ResponsiveHeader />
      <DevelopmentNotice variant="home" />
      <main id="main-content" role="main" className="min-h-screen">
        {/* Hero Section - Desktop Optimized */}
        <section className="relative h-screen bg-[var(--ocean-foam)] dark:bg-[var(--deep-tide)] flex items-center justify-center text-center overflow-hidden">
          <WaveBackground />
          <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
            <motion.h1
              className="font-serif font-bold text-[var(--deep-tide)] dark:text-white mb-8 text-center"
              style={{
                fontSize: 'clamp(3rem, 8vw, 8rem)',
                lineHeight: '1.1',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              Relaxation, Delivered.
            </motion.h1>
            <motion.p
              className="font-sans text-xl text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] max-w-3xl mx-auto mb-12 text-center leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            >
              Mobile massage experiences on the Crystal Coast — where luxury meets convenience.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            >
              <motion.a
                href="/booking"
                className="group bg-[var(--sea-glass)] hover:bg-[var(--coral-blush)] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Your Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="/services"
                className="group border-2 border-[var(--deep-tide)] dark:border-white text-[var(--deep-tide)] dark:text-white hover:bg-[var(--deep-tide)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--deep-tide)] font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Services
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="py-24 bg-[var(--white-sand)] dark:bg-[var(--deep-tide)]">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--deep-tide)] dark:text-white mb-6">
                Massage Services
              </h2>
              <div className="w-24 h-1 bg-[var(--coral-blush)] mx-auto mb-8" />
              <p className="text-xl text-[var(--coastal-mist)] max-w-3xl mx-auto">
                Professional mobile massage services tailored to your needs and schedule.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="font-serif text-xl font-bold text-[var(--deep-tide)] dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[var(--coastal-mist)] mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[var(--coastal-mist)]">Duration:</span>
                      <span className="font-semibold text-[var(--deep-tide)] dark:text-white">{service.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[var(--coastal-mist)]">Price:</span>
                      <span className="font-semibold text-[var(--sea-glass)]">{service.price}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                href="/services"
                className="inline-block bg-[var(--sea-glass)] hover:bg-[var(--coral-blush)] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                View All Services
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-24 bg-[var(--ocean-foam)] dark:bg-[var(--deep-tide)]">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--deep-tide)] dark:text-white mb-6">
                Service Areas
              </h2>
              <div className="w-24 h-1 bg-[var(--coral-blush)] mx-auto mb-8" />
              <p className="text-xl text-[var(--coastal-mist)] max-w-3xl mx-auto">
                Serving the beautiful Crystal Coast of North Carolina with mobile massage convenience.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={area}
                  className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-xl p-6 text-center shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                >
                  <MapPin className="w-6 h-6 text-[var(--sea-glass)] mx-auto mb-3" />
                  <h3 className="font-serif text-lg font-semibold text-[var(--deep-tide)] dark:text-white">
                    {area}
                  </h3>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                href="/service-area"
                className="inline-block bg-[var(--deep-tide)] dark:bg-white text-white dark:text-[var(--deep-tide)] font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                View Coverage Map
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-[var(--white-sand)] dark:bg-[var(--deep-tide)]">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--deep-tide)] dark:text-white mb-6">
                Client Testimonials
              </h2>
              <div className="w-24 h-1 bg-[var(--coral-blush)] mx-auto mb-8" />
              <p className="text-xl text-[var(--coastal-mist)] max-w-3xl mx-auto">
                Hear from our satisfied clients about their mobile massage experiences.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-2xl p-8 shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-[var(--sea-glass)] mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-[var(--coastal-mist)] mb-6 leading-relaxed italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-[var(--deep-tide)] dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-[var(--coastal-mist)]">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                href="/testimonials"
                className="inline-block bg-[var(--sea-glass)] hover:bg-[var(--coral-blush)] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                Read More Reviews
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-[var(--sea-glass)] to-[var(--coral-blush)]">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to Experience Mobile Luxury?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Book your mobile massage session today and discover the convenience of professional massage therapy brought directly to your location.
              </p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/booking"
                  className="group bg-white text-[var(--sea-glass)] font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center justify-center gap-2"
                >
                  Book Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/about"
                  className="group border-2 border-white text-white hover:bg-white hover:text-[var(--sea-glass)] font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}