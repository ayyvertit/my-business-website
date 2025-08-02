"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, User, Mail, Phone, MapPin, MessageSquare, CreditCard } from 'lucide-react'
import { DesktopHeader } from "./DesktopHeader"
import Footer from "../Footer"

export function DesktopBooking() {
    const [formData, setFormData] = useState({
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        massageType: '',
        duration: '',
        preferredDate: '',
        preferredTime: '',
        additionalNotes: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // Simulate booking submission
        console.log('Booking submitted:', formData)
        // In a real app, this would send to your API
        alert('Booking submitted successfully! (This is a simulation)')
    }

    const massageTypes = [
        "Swedish Massage",
        "Therapeutic Massage",
        "TMJ/MediCupping",
        "Hot Stone Massage",
        "Aromatherapy Massage",
        "Sports Massage"
    ]

    const durations = [
        "60 minutes",
        "75 minutes",
        "90 minutes"
    ]

    const timeSlots = [
        "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
        "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
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
                                Book Your Session
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
                                Schedule your mobile massage therapy session
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* Booking Form */}
                <section className="py-16 sm:py-24">
                    <div className="max-w-4xl mx-auto px-6 sm:px-8">
                        <motion.div
                            className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-2xl p-8 shadow-xl"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <form onSubmit={handleSubmit} className="space-y-8">

                                {/* Personal Information */}
                                <div>
                                    <h3 className="font-serif text-2xl font-bold text-[var(--deep-tide)] dark:text-white mb-6 flex items-center gap-3">
                                        <User className="w-6 h-6 text-[var(--coral-blush)]" />
                                        Personal Information
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-[var(--deep-tide)] dark:text-white mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="customerName"
                                                value={formData.customerName}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-[var(--coastal-mist)] rounded-lg focus:ring-2 focus:ring-[var(--coral-blush)] focus:border-transparent bg-white/50 dark:bg-white/10"
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-[var(--deep-tide)] dark:text-white mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="customerEmail"
                                                value={formData.customerEmail}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-[var(--coastal-mist)] rounded-lg focus:ring-2 focus:ring-[var(--coral-blush)] focus:border-transparent bg-white/50 dark:bg-white/10"
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-[var(--deep-tide)] dark:text-white mb-2">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                name="customerPhone"
                                                value={formData.customerPhone}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-[var(--coastal-mist)] rounded-lg focus:ring-2 focus:ring-[var(--coral-blush)] focus:border-transparent bg-white/50 dark:bg-white/10"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-[var(--deep-tide)] dark:text-white mb-2">
                                                Service Address *
                                            </label>
                                            <input
                                                type="text"
                                                name="serviceAddress"
                                                required
                                                className="w-full px-4 py-3 border border-[var(--coastal-mist)] rounded-lg focus:ring-2 focus:ring-[var(--coral-blush)] focus:border-transparent bg-white/50 dark:bg-white/10"
                                                placeholder="Enter your address"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Service Details */}
                                <div>
                                    <h3 className="font-serif text-2xl font-bold text-[var(--deep-tide)] dark:text-white mb-6 flex items-center gap-3">
                                        <Calendar className="w-6 h-6 text-[var(--coral-blush)]" />
                                        Service Details
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-[var(--deep-tide)] dark:text-white mb-2">
                                                Massage Type *
                                            </label>
                                            <select
                                                name="massageType"
                                                value={formData.massageType}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-[var(--coastal-mist)] rounded-lg focus:ring-2 focus:ring-[var(--coral-blush)] focus:border-transparent bg-white/50 dark:bg-white/10"
                                            >
                                                <option value="">Select massage type</option>
                                                {massageTypes.map(type => (
                                                    <option key={type} value={type}>{type}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-[var(--deep-tide)] dark:text-white mb-2">
                                                Duration *
                                            </label>
                                            <select
                                                name="duration"
                                                value={formData.duration}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-[var(--coastal-mist)] rounded-lg focus:ring-2 focus:ring-[var(--coral-blush)] focus:border-transparent bg-white/50 dark:bg-white/10"
                                            >
                                                <option value="">Select duration</option>
                                                {durations.map(duration => (
                                                    <option key={duration} value={duration}>{duration}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-[var(--deep-tide)] dark:text-white mb-2">
                                                Preferred Date *
                                            </label>
                                            <input
                                                type="date"
                                                name="preferredDate"
                                                value={formData.preferredDate}
                                                onChange={handleInputChange}
                                                required
                                                min={new Date().toISOString().split('T')[0]}
                                                className="w-full px-4 py-3 border border-[var(--coastal-mist)] rounded-lg focus:ring-2 focus:ring-[var(--coral-blush)] focus:border-transparent bg-white/50 dark:bg-white/10"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <label className="block text-sm font-semibold text-[var(--deep-tide)] dark:text-white mb-2">
                                            Preferred Time *
                                        </label>
                                        <select
                                            name="preferredTime"
                                            value={formData.preferredTime}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-[var(--coastal-mist)] rounded-lg focus:ring-2 focus:ring-[var(--coral-blush)] focus:border-transparent bg-white/50 dark:bg-white/10"
                                        >
                                            <option value="">Select time</option>
                                            {timeSlots.map(time => (
                                                <option key={time} value={time}>{time}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Additional Notes */}
                                <div>
                                    <h3 className="font-serif text-2xl font-bold text-[var(--deep-tide)] dark:text-white mb-6 flex items-center gap-3">
                                        <MessageSquare className="w-6 h-6 text-[var(--coral-blush)]" />
                                        Additional Notes
                                    </h3>
                                    <textarea
                                        name="additionalNotes"
                                        value={formData.additionalNotes}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className="w-full px-4 py-3 border border-[var(--coastal-mist)] rounded-lg focus:ring-2 focus:ring-[var(--coral-blush)] focus:border-transparent bg-white/50 dark:bg-white/10 resize-none"
                                        placeholder="Any special requests, medical conditions, or preferences..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[var(--sea-glass)] to-[var(--coral-blush)] text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center justify-center gap-3"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <CreditCard className="w-5 h-5" />
                                    Book Your Session
                                </motion.button>

                            </form>
                        </motion.div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
} 