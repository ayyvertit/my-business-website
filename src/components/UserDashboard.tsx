"use client"

import { motion } from "framer-motion"
import { User } from "@clerk/nextjs/server"
import PreferencesForm from "./PreferencesForm"
import BookingHistory from "./BookingHistory"

interface UserDashboardProps {
    user: User
}

export default function UserDashboard({ user }: UserDashboardProps) {
    const firstName = user.firstName || user.emailAddresses[0]?.emailAddress.split('@')[0] || 'there'

    return (
        <div className="min-h-screen bg-gradient-to-br from-[var(--ocean-foam)] to-[var(--white-sand)] dark:from-[var(--deep-tide)] dark:to-[var(--ocean-foam)]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    {/* Welcome Header */}
                    <div className="text-center">
                        <h1 className="text-4xl font-serif font-bold text-[var(--deep-tide)] dark:text-white mb-4">
                            Welcome back, {firstName}!
                        </h1>
                        <p className="text-lg text-[var(--deep-tide)]/70 dark:text-[var(--ocean-foam)]/70">
                            Manage your preferences and view your booking history
                        </p>
                    </div>

                    {/* User Info Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-white/90 dark:bg-[var(--deep-tide)]/90 backdrop-blur rounded-2xl shadow-xl border border-[var(--coastal-mist)] dark:border-[var(--ocean-foam)] p-6"
                    >
                        <h2 className="text-2xl font-serif font-semibold text-[var(--deep-tide)] dark:text-white mb-4">
                            Your Information
                        </h2>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <span className="text-[var(--deep-tide)]/70 dark:text-[var(--ocean-foam)]/70 font-medium">Email:</span>
                                <span className="text-[var(--deep-tide)] dark:text-white">{user.emailAddresses[0]?.emailAddress}</span>
                            </div>
                            {user.phoneNumbers[0] && (
                                <div className="flex items-center space-x-3">
                                    <span className="text-[var(--deep-tide)]/70 dark:text-[var(--ocean-foam)]/70 font-medium">Phone:</span>
                                    <span className="text-[var(--deep-tide)] dark:text-white">{user.phoneNumbers[0].phoneNumber}</span>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Preferences Form */}
                    <PreferencesForm />

                    {/* Booking History */}
                    <BookingHistory />

                    {/* Payment Management */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-white/90 dark:bg-[var(--deep-tide)]/90 backdrop-blur rounded-2xl shadow-xl border border-[var(--coastal-mist)] dark:border-[var(--ocean-foam)] p-6"
                    >
                        <h2 className="text-2xl font-serif font-semibold text-[var(--deep-tide)] dark:text-white mb-4">
                            Payment Information
                        </h2>
                        <p className="text-[var(--deep-tide)]/70 dark:text-[var(--ocean-foam)]/70 mb-4">
                            Manage your payment methods and billing information
                        </p>
                        <button className="bg-[var(--deep-tide)] hover:bg-[var(--deep-tide)]/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                            Manage Payment Info
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
} 