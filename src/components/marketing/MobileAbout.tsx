"use client"

import { motion } from "framer-motion"
import { Shield, Award, Heart, MapPin, User, GraduationCap, FileText } from 'lucide-react'
import { MobileHeader } from "./MobileHeader"
import { Footer } from "./Footer"

export function MobileAbout() {
    return (
        <>
            <MobileHeader />
            <main className="min-h-screen bg-[var(--white-sand)] dark:bg-[var(--deep-tide)]">

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-[var(--ocean-foam)] to-[var(--white-sand)] dark:from-[var(--deep-tide)] dark:to-[var(--deep-tide)] py-16">
                    <div className="max-w-sm mx-auto px-4">
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.h1
                                className="font-serif text-2xl sm:text-3xl font-bold text-[var(--deep-tide)] dark:text-white mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Meet Your Massage Therapist
                            </motion.h1>
                            <motion.div
                                className="w-16 h-1 bg-[var(--coral-blush)] mx-auto mb-6"
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-8">
                    <div className="max-w-sm mx-auto px-4">

                        {/* Introduction */}
                        <motion.div
                            className="mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-lg p-4 shadow-lg">
                                <motion.div
                                    className="flex items-center gap-3 mb-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <div className="w-10 h-10 bg-[var(--coral-blush)] rounded-full flex items-center justify-center">
                                        <User className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="font-serif text-lg font-bold text-[var(--deep-tide)] dark:text-white">
                                            Cameron Averitt
                                        </h2>
                                        <p className="font-sans text-xs text-[var(--coastal-mist)]">
                                            Licensed Massage Therapist & Founder
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="space-y-3 text-sm leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    <p className="text-[var(--deep-tide)] dark:text-white">
                                        Hi, I'm Cameron Averitt, licensed massage therapist and founder of Crystal Coast Concierge Massage. I started this mobile practice with one goal in mind — to make high-quality, therapeutic massage more accessible and relaxing than ever.
                                    </p>
                                    <p className="text-[var(--deep-tide)] dark:text-white">
                                        I'm a graduate of Craven Community College's massage therapy program and hold my North Carolina licensure through the NCBMBT. My approach is rooted in professionalism, client comfort, and customized care. Whether you're a vacationer seeking rest or a resident needing relief, I bring a tailored experience directly to your door.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Credentials & Approach */}
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >

                            {/* Education */}
                            <motion.div
                                className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-lg p-4 shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 bg-[var(--sea-glass)] rounded-lg flex items-center justify-center">
                                        <GraduationCap className="w-4 h-4 text-white" />
                                    </div>
                                    <h3 className="font-serif text-base font-bold text-[var(--deep-tide)] dark:text-white">
                                        Education
                                    </h3>
                                </div>
                                <p className="text-xs text-[var(--coastal-mist)] leading-relaxed">
                                    Graduate of Craven Community College's massage therapy program
                                </p>
                            </motion.div>

                            {/* Licensure */}
                            <motion.div
                                className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-lg p-4 shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 bg-[var(--coral-blush)] rounded-lg flex items-center justify-center">
                                        <FileText className="w-4 h-4 text-white" />
                                    </div>
                                    <h3 className="font-serif text-base font-bold text-[var(--deep-tide)] dark:text-white">
                                        Licensure
                                    </h3>
                                </div>
                                <p className="text-xs text-[var(--coastal-mist)] leading-relaxed">
                                    North Carolina licensed through NCBMBT
                                </p>
                            </motion.div>

                            {/* Approach */}
                            <motion.div
                                className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-lg p-4 shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 bg-[var(--sea-glass)] rounded-lg flex items-center justify-center">
                                        <Heart className="w-4 h-4 text-white" />
                                    </div>
                                    <h3 className="font-serif text-base font-bold text-[var(--deep-tide)] dark:text-white">
                                        My Approach
                                    </h3>
                                </div>
                                <p className="text-xs text-[var(--coastal-mist)] leading-relaxed">
                                    Rooted in professionalism, client comfort, and customized care
                                </p>
                            </motion.div>
                        </motion.div>

                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
} 