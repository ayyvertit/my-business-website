"use client"

import { motion } from "framer-motion"
import { Clock, MapPin, Heart, Users, Car, Star } from 'lucide-react'
import { DesktopHeader } from '../../components/marketing/DesktopHeader'
import Footer from '../../components/Footer'

export default function ServicesPage() {
  const services = [
    {
      icon: "👐",
      title: "Swedish Massage",
      description: "A gentle, relaxing full-body massage that eases stress and promotes circulation. Perfect for unwinding.",
      durations: ["60", "90", "120"],
      durationUnit: "minutes",
      featured: false
    },
    {
      icon: "💪",
      title: "Deep Tissue Massage",
      description: "Targets deeper layers of muscle tension. Ideal for chronic pain, soreness, or post-activity recovery.",
      durations: ["60", "90", "120"],
      durationUnit: "minutes",
      featured: false
    },
    {
      icon: "🧘",
      title: "Customized Massage",
      description: "A blend of techniques based on your body's unique needs. Your session, your way.",
      durations: ["All"],
      durationUnit: "durations available",
      featured: true
    },
    {
      icon: "🏝️",
      title: "Couples Massage",
      subtitle: "(Available On-Request)",
      description: "Unwind together. Great for vacationers, retreats, or romantic getaways.",
      durations: ["Booking"],
      durationUnit: "requirements apply",
      featured: false
    }
  ]

  const features = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Mobile Convenience",
      description: "All services are offered in-home, at your Airbnb, beach rental, or event space."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Scheduling",
      description: "Book sessions that fit your schedule, whether you're a local or vacationing."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Personalized Care",
      description: "Each session is tailored to your specific needs and comfort level."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Crystal Coast Coverage",
      description: "Serving the entire region from Atlantic Beach to Cape Carteret."
    }
  ]

  return (
    <>
      <DesktopHeader />
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
                Massage Services Tailored to You
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
                Professional massage therapy brought directly to your door
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <motion.div
              className="grid gap-8 sm:grid-cols-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className={`bg-white/80 dark:bg-white/10 backdrop-blur rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${service.featured ? 'ring-2 ring-[var(--coral-blush)]' : ''
                    }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl font-bold text-[var(--deep-tide)] dark:text-white mb-1">
                        {service.title}
                      </h3>
                      {service.subtitle && (
                        <p className="font-sans text-sm text-[var(--coastal-mist)] italic">
                          {service.subtitle}
                        </p>
                      )}
                    </div>
                    {service.featured && (
                      <div className="flex items-center gap-1 text-[var(--coral-blush)]">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="text-sm font-medium">Featured</span>
                      </div>
                    )}
                  </div>

                  <p className="text-[var(--coastal-mist)] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.durations.map((duration, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-[var(--sea-glass)] text-white px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {duration} {service.durationUnit}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
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
                Why Choose Mobile Massage?
              </h2>
              <p className="text-lg text-[var(--coastal-mist)] max-w-2xl mx-auto">
                Experience the convenience and comfort of professional massage therapy in your own space
              </p>
            </motion.div>

            <motion.div
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-[var(--coral-blush)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[var(--deep-tide)] dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--coastal-mist)] leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
            <motion.div
              className="bg-gradient-to-r from-[var(--sea-glass)] to-[var(--coral-blush)] rounded-2xl p-8 sm:p-12 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h3
                className="font-serif text-3xl sm:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Ready to Experience Mobile Massage?
              </motion.h3>
              <motion.p
                className="text-lg sm:text-xl mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Book your session and let us bring relaxation directly to your door.
                Perfect for vacationers, locals, and anyone seeking convenience without compromise.
              </motion.p>
              <motion.div
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