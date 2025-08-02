"use client"

import { motion } from "framer-motion"
import { MapPin, Car, Clock, Phone, Mail } from 'lucide-react'
import { DesktopHeader } from "./DesktopHeader"
import Footer from "../Footer"

export function DesktopServiceArea() {
    const serviceAreas = [
        "Atlantic Beach", "Emerald Isle", "Morehead City", "Beaufort",
        "Newport", "Cedar Point", "Swansboro", "Cape Carteret"
    ]

    const features = [
        {
            icon: Car,
            title: "Mobile Service",
            description: "We come to you - your home, hotel, vacation rental, or boat."
        },
        {
            icon: Clock,
            title: "Flexible Scheduling",
            description: "Available 7 days a week with morning, afternoon, and evening appointments."
        },
        {
            icon: Phone,
            title: "Easy Booking",
            description: "Book online or call us directly for personalized service."
        },
        {
            icon: Mail,
            title: "Professional Setup",
            description: "We bring everything needed - massage table, linens, oils, and equipment."
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
                                Serving the Crystal Coast
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
                                Mobile massage therapy throughout the Crystal Coast region
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* Service Areas Grid */}
                <section className="py-16 sm:py-24">
                    <div className="max-w-6xl mx-auto px-6 sm:px-8">
                        <motion.h2
                            className="font-serif text-3xl sm:text-4xl font-bold text-[var(--deep-tide)] dark:text-white mb-8 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            Our Service Areas
                        </motion.h2>
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {serviceAreas.map((area, index) => (
                                <motion.div
                                    key={area}
                                    className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-xl p-6 shadow-lg text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                >
                                    <MapPin className="w-8 h-8 text-[var(--coral-blush)] mx-auto mb-3" />
                                    <h3 className="font-serif text-lg font-bold text-[var(--deep-tide)] dark:text-white">
                                        {area}
                                    </h3>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 sm:py-24 bg-[var(--ocean-foam)] dark:bg-[var(--deep-tide)]">
                    <div className="max-w-6xl mx-auto px-6 sm:px-8">
                        <motion.h2
                            className="font-serif text-3xl sm:text-4xl font-bold text-[var(--deep-tide)] dark:text-white mb-12 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            Why Choose Mobile Massage?
                        </motion.h2>
                        <motion.div
                            className="grid gap-8 grid-cols-1 lg:grid-cols-2"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {features.map((feature, index) => {
                                const IconComponent = feature.icon
                                return (
                                    <motion.div
                                        key={feature.title}
                                        className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-2xl p-8 shadow-lg"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                    >
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-16 h-16 bg-[var(--coral-blush)] rounded-xl flex items-center justify-center">
                                                <IconComponent className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className="font-serif text-2xl font-bold text-[var(--deep-tide)] dark:text-white">
                                                {feature.title}
                                            </h3>
                                        </div>
                                        <p className="text-lg text-[var(--coastal-mist)] leading-relaxed">
                                            {feature.description}
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
                            Ready to Experience Convenience?
                        </motion.h2>
                        <motion.p
                            className="text-xl mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Book your mobile massage session and let us bring relaxation to your doorstep.
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
                                Book Your Mobile Session
                            </motion.a>
                        </motion.div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
} 