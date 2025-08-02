"use client"

import { motion } from "framer-motion"
import { Heart, Clock, Star, Shield, User, MapPin } from 'lucide-react'
import { DesktopHeader } from "./DesktopHeader"
import Footer from "../Footer"

export function DesktopServices() {
  const services = [
    {
      title: "Swedish Massage",
      description: "A gentle, full-body massage using long strokes, kneading, and circular movements to promote relaxation and improve circulation.",
      duration: "60-90 minutes",
      price: "$80-110",
      icon: Heart
    },
    {
      title: "Therapeutic Massage",
      description: "Deep tissue work targeting chronic pain, muscle tension, and specific areas of discomfort for lasting relief.",
      duration: "60-90 minutes", 
      price: "$90-120",
      icon: Shield
    },
    {
      title: "TMJ/MediCupping",
      description: "Specialized treatment for jaw tension and cupping therapy to release muscle tension and improve blood flow.",
      duration: "45-60 minutes",
      price: "$70-90",
      icon: User
    },
    {
      title: "Hot Stone Massage",
      description: "Heated stones placed on key points of the body for deep muscle relaxation and stress relief.",
      duration: "75-90 minutes",
      price: "$100-130",
      icon: Star
    },
    {
      title: "Aromatherapy Massage",
      description: "Essential oils enhance the therapeutic benefits of massage, promoting relaxation and emotional well-being.",
      duration: "60-75 minutes",
      price: "$85-110",
      icon: Heart
    },
    {
      title: "Sports Massage",
      description: "Targeted techniques for athletes and active individuals to improve performance and prevent injury.",
      duration: "60-90 minutes",
      price: "$90-120",
      icon: Shield
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
                Our Massage Services
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
                Professional massage therapy delivered to your door
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <motion.div
              className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <motion.div
                    key={service.title}
                    className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-[var(--coral-blush)] rounded-xl flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[var(--deep-tide)] dark:text-white">
                          {service.title}
                        </h3>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-2 text-sm text-[var(--coastal-mist)]">
                            <Clock className="w-4 h-4" />
                            <span>{service.duration}</span>
                          </div>
                          <div className="text-lg font-semibold text-[var(--sea-glass)]">
                            {service.price}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-lg text-[var(--coastal-mist)] leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-r from-[var(--sea-glass)] to-[var(--coral-blush)]">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center text-white">
            <motion.h2
              className="font-serif text-4xl sm:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Ready to Experience Relief?
            </motion.h2>
            <motion.p
              className="text-xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Book your preferred service and let us bring professional massage therapy to your location.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
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
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
} 