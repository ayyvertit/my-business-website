"use client"

import { motion } from "framer-motion"
import { Star, Quote } from 'lucide-react'
import { DesktopHeader } from "./DesktopHeader"
import Footer from "../Footer"

export function DesktopTestimonials() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            location: "Atlantic Beach",
            rating: 5,
            text: "Amazing experience! The therapist was professional, punctual, and the massage was exactly what I needed after a long week. Will definitely book again.",
            service: "Swedish Massage"
        },
        {
            name: "Michael Chen",
            location: "Emerald Isle",
            rating: 5,
            text: "Outstanding service. They brought everything needed and set up in my vacation rental. The therapeutic massage helped with my chronic back pain.",
            service: "Therapeutic Massage"
        },
        {
            name: "Lisa Rodriguez",
            location: "Morehead City",
            rating: 5,
            text: "Perfect for a relaxing day at home. The hot stone massage was incredible and the aromatherapy added such a nice touch. Highly recommend!",
            service: "Hot Stone Massage"
        },
        {
            name: "David Thompson",
            location: "Beaufort",
            rating: 5,
            text: "As an athlete, I need regular sports massage. This mobile service is so convenient and the therapist really knows their stuff.",
            service: "Sports Massage"
        },
        {
            name: "Jennifer Williams",
            location: "Newport",
            rating: 5,
            text: "The TMJ treatment was a game-changer for my jaw tension. Professional, clean, and very effective. Worth every penny.",
            service: "TMJ/MediCupping"
        },
        {
            name: "Robert Davis",
            location: "Cedar Point",
            rating: 5,
            text: "Excellent service from start to finish. Easy booking, on-time arrival, and a fantastic massage. Will be a regular customer.",
            service: "Aromatherapy Massage"
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
                                Client Testimonials
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
                                Hear from our satisfied clients across the Crystal Coast
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* Testimonials Grid */}
                <section className="py-16 sm:py-24">
                    <div className="max-w-7xl mx-auto px-6 sm:px-8">
                        <motion.div
                            className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.name}
                                    className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                >
                                    <div className="flex items-center gap-2 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <Quote className="w-8 h-8 text-[var(--coral-blush)] mb-4" />
                                    <p className="text-lg text-[var(--coastal-mist)] leading-relaxed mb-6">
                                        "{testimonial.text}"
                                    </p>
                                    <div className="border-t border-[var(--coastal-mist)] pt-4">
                                        <h4 className="font-serif text-lg font-bold text-[var(--deep-tide)] dark:text-white">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-[var(--coastal-mist)]">
                                            {testimonial.location} • {testimonial.service}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
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
                            Ready to Experience the Difference?
                        </motion.h2>
                        <motion.p
                            className="text-xl mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Join our satisfied clients and experience professional mobile massage therapy.
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