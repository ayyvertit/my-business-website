"use client"

import { motion } from "framer-motion"
import { Check, Clock, Star } from "lucide-react"
import { Card, CardContent, CardHeader } from "../ui/card"
import { staggerContainer, staggerItem, hoverLift } from "../../lib/motion"

const services = [
  {
    name: "Swedish Massage",
    duration: "60 min",
    price: "$115",
    description: "A smooth, flowing full-body massage designed to reduce stress, enhance circulation, and promote deep relaxation.",
    features: [
      "Full body massage",
      "Stress relief",
      "Improved circulation",
      "Muscle tension release"
    ],
    popular: false
  },
  {
    name: "Deep Tissue Massage",
    duration: "60 min",
    price: "$115",
    description: "Focused, therapeutic work targeting deeper layers of muscle to relieve chronic tension, postural issues, and physical stress.",
    features: [
      "Deep tissue techniques",
      "Pain management",
      "Injury recovery",
      "Postural correction"
    ],
    popular: true
  },
  {
    name: "Swedish Massage",
    duration: "90 min",
    price: "$150",
    description: "Extended session for complete relaxation and recovery",
    features: [
      "Extended full body",
      "Enhanced relaxation",
      "Deeper muscle work",
      "Comprehensive care"
    ],
    popular: false
  },
  {
    name: "Deep Tissue Massage",
    duration: "90 min",
    price: "$150",
    description: "Comprehensive deep tissue session for serious issues",
    features: [
      "Extended deep tissue",
      "Chronic pain relief",
      "Injury rehabilitation",
      "Long-term healing"
    ],
    popular: false
  },
  {
    name: "Custom Therapeutic",
    duration: "60 min",
    price: "$115",
    description: "A tailored blend of techniques adjusted to your unique needs — whether you're looking to unwind, recover, or focus on specific areas.",
    features: [
      "Personalized approach",
      "Technique blending",
      "Targeted treatment",
      "Flexible focus"
    ],
    popular: false
  }
]

export function ServicesSection() {
  return (
    <motion.section
      className="relative py-16 sm:py-24 bg-gradient-to-b from-bg via-surface/50 to-bg dark:from-bg dark:via-surface/20 dark:to-bg overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true }}
    >
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-2 opacity-10 dark:opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--sea-glass)]/5 via-[var(--ocean-foam)]/10 to-[var(--coral-blush)]/5 dark:from-[var(--sea-glass)]/3 dark:via-[var(--deep-tide)]/8 dark:to-[var(--coral-blush)]/3" />

      <div className="container-responsive">
        {/* Section Header - Better spacing and typography */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-[var(--sea-glass)]/10 rounded-full mb-6 sm:mb-8 border border-[var(--sea-glass)]/20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <Star className="w-4 h-4 text-[var(--sea-glass)]" />
            <span className="text-sm font-medium text-[var(--sea-glass)]">Our Services</span>
          </motion.div>

          <motion.h2
            className="heading-1 font-display font-bold mb-6 sm:mb-8 text-[var(--deep-tide)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Luxury <span className="text-[var(--sea-glass)]">Spa Services</span>
          </motion.h2>

          <motion.p
            className="body-large text-[var(--deep-tide)]/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Experience clinical-grade massage therapy in the comfort of your own space.
            Each session is tailored to your specific needs and goals.
          </motion.p>
        </motion.div>

        {/* Services Grid - Better spacing and layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name + service.duration}
              variants={staggerItem}
              whileHover="hover"
              custom={index}
            >
              <Card className="h-auto sm:h-full relative group">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[var(--sea-glass)] to-[var(--coral-blush)] text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <CardHeader className="pb-4 sm:pb-6">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <h3 className="heading-3 font-display text-[var(--deep-tide)]">{service.name}</h3>
                    <div className="flex items-center space-x-2 text-[var(--deep-tide)]/60">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">{service.duration}</span>
                    </div>
                  </div>
                  <p className="body text-[var(--deep-tide)]/70 mb-3 sm:mb-4">
                    {service.description}
                  </p>
                  <div className="text-2xl sm:text-3xl font-bold text-[var(--sea-glass)]">
                    {service.price}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-[var(--sea-glass)] mt-0.5 flex-shrink-0" />
                        <span className="body-small text-[var(--deep-tide)]/70">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gradient-to-r from-[var(--sea-glass)] to-[var(--coral-blush)] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group min-h-[44px]">
                    Book This Session
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Add-ons Section - Better spacing and layout */}
        <motion.div
          className="mt-16 sm:mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h3 className="heading-2 font-display font-bold mb-4 sm:mb-6 text-[var(--deep-tide)]">
            Additional <span className="text-[var(--sea-glass)]">Modalities</span>
          </h3>
          <p className="body text-[var(--deep-tide)]/70 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Enhance your session with these specialized techniques. All available upon request.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {[
              "Cupping Therapy",
              "Gua Sha",
              "Hot Stones",
              "Aromatherapy"
            ].map((modality) => (
              <div
                key={modality}
                className="bg-[var(--ocean-foam)]/50 dark:bg-[var(--deep-tide)]/20 rounded-2xl p-4 sm:p-6 text-sm font-medium text-[var(--deep-tide)] border border-[var(--sea-glass)]/20 min-h-[44px] flex items-center justify-center"
              >
                {modality}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
} 