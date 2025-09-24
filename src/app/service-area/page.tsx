"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react'
import { ResponsiveHeader } from '../../components/marketing/ResponsiveHeader'
import Footer from '../../components/Footer'

export default function ServiceAreaPage() {
  const serviceAreas = [
    "Atlantic Beach",
    "Emerald Isle",
    "Morehead City",
    "Newport",
    "Beaufort",
    "Cape Carteret",
    "Cedar Point",
    "Pine Knoll Shores"
  ]

  const contactInfo = {
    phone: "(252) 242-0784",
    email: "cameronaverittlmbt@crystalcoastmassage.com",
    note: "If you're outside this range, contact us directly to check availability."
  }

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
                Serving the Crystal Coast of North Carolina
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
                Mobile massage therapy throughout the beautiful Crystal Coast region
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--deep-tide)] dark:text-white mb-6">
                Crystal Coast Concierge Massage proudly serves the following areas:
              </h2>
              <p className="text-lg text-[var(--coastal-mist)] max-w-2xl mx-auto">
                From the pristine beaches of Atlantic Beach to the charming streets of Beaufort,
                we bring professional massage therapy directly to your door.
              </p>
            </motion.div>

            {/* Areas Grid */}
            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={area}
                  className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-[var(--sea-glass)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[var(--deep-tide)] dark:text-white">
                    {area}
                  </h3>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <CheckCircle className="w-4 h-4 text-[var(--sea-glass)]" />
                    <span className="text-sm text-[var(--coastal-mist)]">In Service Area</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Coverage Map Section */}
        <section className="py-16 sm:py-24 bg-[var(--ocean-foam)] dark:bg-[var(--deep-tide)]">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--deep-tide)] dark:text-white mb-4">
                Crystal Coast Coverage
              </h2>
              <p className="text-lg text-[var(--coastal-mist)] max-w-2xl mx-auto">
                Our mobile service covers the entire Crystal Coast region, from the northern beaches
                to the southern shores, ensuring convenient access to professional massage therapy.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-2xl p-8 sm:p-12 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="text-center">
                  <h3 className="font-serif text-xl font-bold text-[var(--deep-tide)] dark:text-white mb-2">
                    Northern Coverage
                  </h3>
                  <p className="text-[var(--coastal-mist)]">
                    Atlantic Beach, Pine Knoll Shores, Newport
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-xl font-bold text-[var(--deep-tide)] dark:text-white mb-2">
                    Central Coverage
                  </h3>
                  <p className="text-[var(--coastal-mist)]">
                    Morehead City, Beaufort, Cedar Point
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-xl font-bold text-[var(--deep-tide)] dark:text-white mb-2">
                    Southern Coverage
                  </h3>
                  <p className="text-[var(--coastal-mist)]">
                    Emerald Isle, Cape Carteret
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-6 sm:px-8">
            <motion.div
              className="bg-gradient-to-r from-[var(--sea-glass)] to-[var(--coral-blush)] rounded-2xl p-8 sm:p-12 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <AlertCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
                  Outside Our Service Area?
                </h3>
                <p className="text-lg leading-relaxed">
                  {contactInfo.note}
                </p>
              </motion.div>

              <motion.div
                className="grid gap-6 sm:grid-cols-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Call Us</h4>
                    <p className="text-white/90">{contactInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pr-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-lg">Email Us</h4>
                    <p className="text-white/90 text-xs sm:text-sm truncate">{contactInfo.email}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="text-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.a
                  href="/booking"
                  className="inline-block bg-white text-[var(--sea-glass)] font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Your Session
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
} 