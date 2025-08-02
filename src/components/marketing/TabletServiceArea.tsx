"use client"

import { motion } from "framer-motion"
import { MapPin, Car, Clock, Phone, Mail } from 'lucide-react'
import { TabletHeader } from "./TabletHeader"
import { Footer } from "./Footer"

export function TabletServiceArea() {
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
            <TabletHeader />
            <main className="min-h-screen bg-[var(--white-sand)] dark:bg-[var(--deep-tide)]">

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-[var(--ocean-foam)] to-[var(--white-sand)] dark:from-[var(--deep-tide)] dark:to-[var(--deep-tide)] py-20">
                    <div className="max-w-5xl mx-auto px-6">
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.h1
                                className="font-serif text-3xl sm:text-4xl font-bold text-[var(--deep-tide)] dark:text-white mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Serving the Crystal Coast
                            </motion.h1>
                            <motion.div
                                className="w-20 h-1 bg-[var(--coral-blush)] mx-auto mb-8"
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            />
                            <motion.p
                                className="text-lg text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] max-w-2xl mx-auto"
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
                <section className="py-12">
                    <div className="max-w-5xl mx-auto px-6">
                        <motion.h2
                            className="font-serif text-2xl sm:text-3xl font-bold text-[var(--deep-tide)] dark:text-white mb-6 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            Our Service Areas
                        </motion.h2>
                        <motion.div
                            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {serviceAreas.map((area, index) => (
                                <motion.div
                                    key={area}
                                    className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-lg p-4 shadow-lg text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -3, scale: 1.01 }}
                                >
                                    <MapPin className="w-6 h-6 text-[var(--coral-blush)] mx-auto mb-2" />
                                    <h3 className="font-serif text-sm font-bold text-[var(--deep-tide)] dark:text-white">
                                        {area}
                                    </h3>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-12 bg-[var(--ocean-foam)] dark:bg-[var(--deep-tide)]">
                    <div className="max-w-5xl mx-auto px-6">
                        <motion.h2
                            className="font-serif text-2xl sm:text-3xl font-bold text-[var(--deep-tide)] dark:text-white mb-8 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            Why Choose Mobile Massage?
                        </motion.h2>
                        <motion.div
                            className="grid gap-6 grid-cols-1 md:grid-cols-2"
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
                                        className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-xl p-6 shadow-lg"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        whileHover={{ y: -3, scale: 1.01 }}
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 bg-[var(--coral-blush)] rounded-lg flex items-center justify-center">
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="font-serif text-xl font-bold text-[var(--deep-tide)] dark:text-white">
                                                {feature.title}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-[var(--coastal-mist)] leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12 bg-gradient-to-r from-[var(--sea-glass)] to-[var(--coral-blush)]">
                    <div className="max-w-3xl mx-auto px-6 text-center text-white">
                        <motion.h2
                            className="font-serif text-3xl font-bold mb-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            Ready to Experience Convenience?
                        </motion.h2>
                        <motion.p
                            className="text-base mb-6 leading-relaxed"
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
                                className="inline-block bg-white text-[var(--sea-glass)] font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base"
                                whileHover={{ scale: 1.03, y: -1 }}
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