"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Calendar, Clock, User, Mail, Phone, MapPin, Heart } from 'lucide-react'
import { ResponsiveHeader } from '../../../components/marketing/ResponsiveHeader'
import Footer from '../../../components/Footer'

interface BookingConfirmation {
    customerName: string
    customerEmail: string
    customerPhone: string
    massageType: string
    duration: string
    preferredDate: string
    preferredTime: string
    additionalNotes: string
    amount: number
}

export default function ConfirmationPage() {
    const [bookingData, setBookingData] = useState<BookingConfirmation | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // In a real app, you'd fetch the session data from your backend
        // For now, we'll simulate the booking data
        const urlParams = new URLSearchParams(window.location.search)
        const sessionId = urlParams.get('session_id')

        if (sessionId) {
            // Simulate fetching booking data
            setTimeout(() => {
                setBookingData({
                    customerName: "John Doe",
                    customerEmail: "john@example.com",
                    customerPhone: "(252) 555-0123",
                    massageType: "Swedish Massage",
                    duration: "90 minutes",
                    preferredDate: "2024-02-15",
                    preferredTime: "2:00 PM",
                    additionalNotes: "Please bring extra towels",
                    amount: 110
                })
                setLoading(false)
            }, 1000)
        }
    }, [])

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    if (loading) {
        return (
            <>
                <ResponsiveHeader />
                <main className="min-h-screen bg-[var(--white-sand)] dark:bg-[var(--deep-tide)] flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-[var(--sea-glass)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-[var(--deep-tide)] dark:text-white text-lg">Processing your booking...</p>
                    </div>
                </main>
                <Footer />
            </>
        )
    }

    return (
        <>
            <ResponsiveHeader />
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
                            <motion.div
                                className="w-24 h-24 bg-[var(--sea-glass)] rounded-full flex items-center justify-center mx-auto mb-8"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <CheckCircle className="w-12 h-12 text-white" />
                            </motion.div>
                            <motion.h1
                                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--deep-tide)] dark:text-white mb-6 sm:mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Booking Confirmed!
                            </motion.h1>
                            <motion.div
                                className="w-24 h-1 bg-[var(--coral-blush)] mx-auto mb-8 sm:mb-12"
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            />
                            <motion.p
                                className="text-xl sm:text-2xl text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] max-w-3xl mx-auto"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                Thank you for choosing Crystal Coast Concierge Massage
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* Confirmation Details */}
                <section className="py-16 sm:py-24">
                    <div className="max-w-4xl mx-auto px-6 sm:px-8">
                        <motion.div
                            className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-2xl p-8 sm:p-12 shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="font-serif text-3xl font-bold text-[var(--deep-tide)] dark:text-white mb-8 text-center">
                                Your Session Details
                            </h2>

                            <div className="space-y-8">
                                {/* Service Information */}
                                <div className="bg-[var(--ocean-foam)] dark:bg-[var(--deep-tide)] rounded-xl p-6">
                                    <h3 className="font-serif text-xl font-bold text-[var(--deep-tide)] dark:text-white mb-4 flex items-center gap-2">
                                        <Heart className="w-5 h-5" />
                                        Service Details
                                    </h3>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div>
                                            <p className="text-sm text-[var(--coastal-mist)]">Massage Type</p>
                                            <p className="font-semibold text-[var(--deep-tide)] dark:text-white">
                                                {bookingData?.massageType}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-[var(--coastal-mist)]">Duration</p>
                                            <p className="font-semibold text-[var(--deep-tide)] dark:text-white">
                                                {bookingData?.duration}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-[var(--coastal-mist)]">Date</p>
                                            <p className="font-semibold text-[var(--deep-tide)] dark:text-white">
                                                {bookingData?.preferredDate ? formatDate(bookingData.preferredDate) : ''}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-[var(--coastal-mist)]">Time</p>
                                            <p className="font-semibold text-[var(--deep-tide)] dark:text-white">
                                                {bookingData?.preferredTime}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Information */}
                                <div className="bg-[var(--ocean-foam)] dark:bg-[var(--deep-tide)] rounded-xl p-6">
                                    <h3 className="font-serif text-xl font-bold text-[var(--deep-tide)] dark:text-white mb-4 flex items-center gap-2">
                                        <User className="w-5 h-5" />
                                        Contact Information
                                    </h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <User className="w-4 h-4 text-[var(--coastal-mist)]" />
                                            <span className="text-[var(--deep-tide)] dark:text-white">{bookingData?.customerName}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Mail className="w-4 h-4 text-[var(--coastal-mist)]" />
                                            <span className="text-[var(--deep-tide)] dark:text-white">{bookingData?.customerEmail}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Phone className="w-4 h-4 text-[var(--coastal-mist)]" />
                                            <span className="text-[var(--deep-tide)] dark:text-white">{bookingData?.customerPhone}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Information */}
                                <div className="bg-gradient-to-r from-[var(--sea-glass)] to-[var(--coral-blush)] rounded-xl p-6 text-white">
                                    <h3 className="font-serif text-xl font-bold mb-4 flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5" />
                                        Payment Confirmed
                                    </h3>
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg">Total Amount Paid</span>
                                        <span className="text-2xl font-bold">${bookingData?.amount}</span>
                                    </div>
                                </div>

                                {/* Additional Notes */}
                                {bookingData?.additionalNotes && (
                                    <div className="bg-[var(--ocean-foam)] dark:bg-[var(--deep-tide)] rounded-xl p-6">
                                        <h3 className="font-serif text-xl font-bold text-[var(--deep-tide)] dark:text-white mb-4">
                                            Special Requests
                                        </h3>
                                        <p className="text-[var(--deep-tide)] dark:text-white">
                                            {bookingData.additionalNotes}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Next Steps */}
                <section className="py-16 sm:py-24 bg-[var(--ocean-foam)] dark:bg-[var(--deep-tide)]">
                    <div className="max-w-4xl mx-auto px-6 sm:px-8">
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--deep-tide)] dark:text-white mb-6">
                                                                 What&apos;s Next?
                            </h2>
                            <div className="grid gap-8 sm:grid-cols-3 mt-12">
                                <motion.div
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                >
                                    <div className="w-16 h-16 bg-[var(--coral-blush)] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Calendar className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-serif text-xl font-bold text-[var(--deep-tide)] dark:text-white mb-2">
                                        Prepare for Your Session
                                    </h3>
                                    <p className="text-[var(--coastal-mist)]">
                                        We&apos;ll arrive at your location 10 minutes before your scheduled time
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                >
                                    <div className="w-16 h-16 bg-[var(--sea-glass)] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <MapPin className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-serif text-xl font-bold text-[var(--deep-tide)] dark:text-white mb-2">
                                        Mobile Convenience
                                    </h3>
                                    <p className="text-[var(--coastal-mist)]">
                                        We bring everything needed for your massage - just relax and enjoy
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 1.0 }}
                                >
                                    <div className="w-16 h-16 bg-[var(--coral-blush)] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Clock className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-serif text-xl font-bold text-[var(--deep-tide)] dark:text-white mb-2">
                                        Confirmation Email
                                    </h3>
                                    <p className="text-[var(--coastal-mist)]">
                                                                                 You&apos;ll receive a confirmation email with all the details shortly
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 sm:py-24">
                    <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
                        <motion.div
                            className="bg-gradient-to-r from-[var(--sea-glass)] to-[var(--coral-blush)] rounded-2xl p-8 sm:p-12 text-white"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <motion.h3
                                className="font-serif text-3xl sm:text-4xl font-bold mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                Questions or Changes?
                            </motion.h3>
                            <motion.p
                                className="text-lg sm:text-xl mb-8 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.0 }}
                            >
                                Contact us at (252) 555-0123 or cameron@crystalcoastconcierge.com
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.2 }}
                            >
                                <motion.a
                                    href="/"
                                    className="inline-block bg-white text-[var(--sea-glass)] font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Return to Home
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