"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, User, Mail, Phone, MapPin, MessageSquare, CreditCard } from 'lucide-react'
import { MobileHeader } from "./MobileHeader"
import { Footer } from "./Footer"

export function MobileBooking() {
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
        console.log('Booking submitted:', formData)
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
                                Book Your Session
                            </motion.h1>
                            <motion.div
                                className="w-16 h-1 bg-[var(--coral-blush)] mx-auto mb-6"
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            />
                            <motion.p
                                className="text-sm sm:text-base text-[var(--deep-tide)] dark:text-[var(--ocean-foam)]"
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
                <section className="py-8">
                    <div className="max-w-sm mx-auto px-4">
                        <motion.div
                            className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-lg p-4 shadow-xl"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <form onSubmit={handleSubmit} className="space-y-4">

                                {/* Personal Information */}
                                <div>
                                    <h3 className="font-serif text-lg font-bold text-[var(--deep-tide)] dark:text-white mb-3 flex items-center gap-2">
                                        <User className="w-4 h-4 text-[var(--coral-blush)]" />
                                        Personal Information
                                    </h3>
                                    <div className="space-y-3">
                                        <div>
                                            <label className="block text-xs font-semibold text-[var(--deep-tide)] dark:text-white mb-1">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="customerName"
                                                value={formData.customerName}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-3 py-3 border border-[var(--coastal-mist)] rounded-lg focus:ring-2 focus:ring-[var(--coral-blush)] focus:border-transparent bg-white/50 dark:bg-white/10 text-sm min-h-[44px]"
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-[var(--deep-tide)] dark:text-white mb-1">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="customerEmail"
                                                value={formData.customerEmail}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-3 py-3 border border-[var(--coastal-mist)] rounded-lg focus:ring-2 focus:ring-[var(--coral-blush)] focus:border-transparent bg-white/50 dark:bg-white/10 text-sm min-h-[44px]"
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-[var(--deep-tide)] dark:text-white mb-1">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                name="customerPhone"
                                                value={formData.customerPhone}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-3 py-3 border border-[var(--coastal-mist)] rounded-lg focus:ring-2 focus:ring-[var(--coral-blush)] focus:border-transparent bg-white/50 dark:bg-white/10 text-sm min-h-[44px]"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-[var(--deep-tide)] dark:text-white mb-1">
                                                Service Address *
                                            </label>
                                            <input
                                                type="text"
                                                name="serviceAddress"
                                                required
                                                className="w-full px-3 py-3 border border-[var(--coastal-mist)] rounded-lg focus:ring-2 focus:ring-[var(--coral-blush)] focus:border-transparent bg-white/50 dark:bg-white/10 text-sm min-h-[44px]"
                                                placeholder="Enter your address"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Service Details */}
                                <div>
                                    <h3 className="font-serif text-lg font-bold text-[var(--deep-tide)] dark:text-white mb-3 flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-[var(--coral-blush)]" />
                                        Service Details
                                    </h3>
                                    <div className="space-y-3">
                                        <div>
                                            <label className="block text-xs font-semibold text-[var(--deep-tide)] dark:text-white mb-1">
                                                Massage Type *
                                            </label>
                                            <select
                                                name="massageType"
                                                value={formData.massageType}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-3 py-3 border border-[var(--coastal-mist)] rounded-lg focus:ring-2 focus:ring-[var(--coral-blush)] focus:border-transparent bg-white/50 dark:bg-white/10 text-sm min-h-[44px]"
                                            >
                                                <option value="">Select massage type</option>
                                                {massageTypes.map(type => (
                                                    <option key={type} value={type}>{type}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-[var(--deep-tide)] dark:text-white mb-1">
                                                Duration *
                                            </label>
                                            <select
                                                name="duration"
                                                value={formData.duration}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-3 py-3 border border-[var(--coastal-mist)] rounded-lg focus:ring-2 focus:ring-[var(--coral-blush)] focus:border-transparent bg-white/50 dark:bg-white/10 text-sm min-h-[44px]"
                                            >
                                                <option value="">Select duration</option>
                                                {durations.map(duration => (
                                                    <option key={duration} value={duration}>{duration}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-[var(--deep-tide)] dark:text-white mb-1">
                                                Preferred Date *
                                            </label>
                                            <input
                                                type="date"
                                                name="preferredDate"
                                                value={formData.preferredDate}
                                                onChange={handleInputChange}
                                                required
                                                min={new Date().toISOString().split('T')[0]}
                                                className="w-full px-3 py-3 border border-[var(--coastal-mist)] rounded-lg focus:ring-2 focus:ring-[var(--coral-blush)] focus:border-transparent bg-white/50 dark:bg-white/10 text-sm min-h-[44px]"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-[var(--deep-tide)] dark:text-white mb-1">
                                                Preferred Time *
                                            </label>
                                            <select
                                                name="preferredTime"
                                                value={formData.preferredTime}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-3 py-3 border border-[var(--coastal-mist)] rounded-lg focus:ring-2 focus:ring-[var(--coral-blush)] focus:border-transparent bg-white/50 dark:bg-white/10 text-sm min-h-[44px]"
                                            >
                                                <option value="">Select time</option>
                                                {timeSlots.map(time => (
                                                    <option key={time} value={time}>{time}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Additional Notes */}
                                <div>
                                    <h3 className="font-serif text-lg font-bold text-[var(--deep-tide)] dark:text-white mb-3 flex items-center gap-2">
                                        <MessageSquare className="w-4 h-4 text-[var(--coral-blush)]" />
                                        Additional Notes
                                    </h3>
                                    <textarea
                                        name="additionalNotes"
                                        value={formData.additionalNotes}
                                        onChange={handleInputChange}
                                        rows={3}
                                        className="w-full px-3 py-3 border border-[var(--coastal-mist)] rounded-lg focus:ring-2 focus:ring-[var(--coral-blush)] focus:border-transparent bg-white/50 dark:bg-white/10 resize-none text-sm"
                                        placeholder="Any special requests, medical conditions, or preferences..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[var(--sea-glass)] to-[var(--coral-blush)] text-white font-semibold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base flex items-center justify-center gap-2 min-h-[48px]"
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <CreditCard className="w-4 h-4" />
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