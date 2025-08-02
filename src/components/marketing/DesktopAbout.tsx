"use client"

import { motion } from "framer-motion"
import { Shield, Award, Heart, MapPin, User, GraduationCap, FileText } from 'lucide-react'
import { DesktopHeader } from "./DesktopHeader"
import Footer from "../Footer"

export function DesktopAbout() {
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
                                Meet Your Massage Therapist
                            </motion.h1>
                            <motion.div
                                className="w-24 h-1 bg-[var(--coral-blush)] mx-auto mb-8 sm:mb-12"
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-16 sm:py-24">
                    <div className="max-w-4xl mx-auto px-6 sm:px-8">

                        {/* Introduction */}
                        <motion.div
                            className="mb-16 sm:mb-20"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-2xl p-8 sm:p-12 shadow-lg">
                                <motion.div
                                    className="flex items-center gap-4 mb-8"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <div className="w-16 h-16 bg-[var(--coral-blush)] rounded-full flex items-center justify-center">
                                        <User className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--deep-tide)] dark:text-white">
                                            Cameron Averitt
                                        </h2>
                                        <p className="font-sans text-lg text-[var(--coastal-mist)]">
                                            Licensed Massage Therapist & Founder
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="space-y-6 text-lg leading-relaxed"
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
                            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >

                            {/* Education */}
                            <motion.div
                                className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-xl p-6 shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-[var(--sea-glass)] rounded-lg flex items-center justify-center">
                                        <GraduationCap className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="font-serif text-xl font-bold text-[var(--deep-tide)] dark:text-white">
                                        Education
                                    </h3>
                                </div>
                                <p className="text-[var(--coastal-mist)] leading-relaxed">
                                    Graduate of Craven Community College's massage therapy program
                                </p>
                            </motion.div>

                            {/* Licensure */}
                            <motion.div
                                className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-xl p-6 shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-[var(--coral-blush)] rounded-lg flex items-center justify-center">
                                        <FileText className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="font-serif text-xl font-bold text-[var(--deep-tide)] dark:text-white">
                                        Licensure
                                    </h3>
                                </div>
                                <p className="text-[var(--coastal-mist)] leading-relaxed">
                                    North Carolina licensed through NCBMBT
                                </p>
                            </motion.div>

                            {/* Approach */}
                            <motion.div
                                className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-xl p-6 shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-[var(--sea-glass)] rounded-lg flex items-center justify-center">
                                        <Heart className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="font-serif text-xl font-bold text-[var(--deep-tide)] dark:text-white">
                                        My Approach
                                    </h3>
                                </div>
                                <p className="text-[var(--coastal-mist)] leading-relaxed">
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