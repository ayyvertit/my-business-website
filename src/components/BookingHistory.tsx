"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Booking {
    id: string
    date: string
    service: string
    duration: string
    location: string
    status: "completed" | "upcoming"
}

const mockBookings: Booking[] = [
    {
        id: "1",
        date: "2024-01-15",
        service: "Swedish Massage",
        duration: "90 minutes",
        location: "Emerald Isle",
        status: "completed"
    },
    {
        id: "2",
        date: "2024-01-22",
        service: "Deep Tissue Massage",
        duration: "60 minutes",
        location: "Atlantic Beach",
        status: "completed"
    },
    {
        id: "3",
        date: "2024-02-05",
        service: "Custom Therapeutic Massage",
        duration: "120 minutes",
        location: "Morehead City",
        status: "upcoming"
    }
]

export default function BookingHistory() {
    const [isExpanded, setIsExpanded] = useState(false)
    const [bookings] = useState<Booking[]>(mockBookings)

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    const handleRebook = (booking: Booking) => {
        // This would typically redirect to the booking form with pre-filled data
        console.log('Rebooking:', booking)
        // For now, just show an alert
        alert(`Redirecting to booking form with ${booking.service} - ${booking.duration}`)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/90 dark:bg-[var(--deep-tide)]/90 backdrop-blur rounded-2xl shadow-xl border border-[var(--coastal-mist)] dark:border-[var(--ocean-foam)] p-6"
        >
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif font-semibold text-[var(--deep-tide)] dark:text-white">
                    Booking History
                </h2>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] hover:text-[var(--deep-tide)]/70 dark:hover:text-[var(--ocean-foam)]/70 transition-colors"
                >
                    {isExpanded ? "Show Less" : "Show All"}
                </button>
            </div>

            <div className="space-y-4">
                {bookings.slice(0, isExpanded ? bookings.length : 2).map((booking, index) => (
                    <motion.div
                        key={booking.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="bg-white/50 dark:bg-[var(--ocean-foam)]/20 border border-[var(--coastal-mist)] dark:border-[var(--ocean-foam)] rounded-lg p-4"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                    <h3 className="font-semibold text-[var(--deep-tide)] dark:text-white">
                                        {booking.service}
                                    </h3>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${booking.status === "completed"
                                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200"
                                            : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200"
                                        }`}>
                                        {booking.status === "completed" ? "Completed" : "Upcoming"}
                                    </span>
                                </div>
                                <p className="text-[var(--deep-tide)]/70 dark:text-[var(--ocean-foam)]/70 text-sm mb-1">
                                    {formatDate(booking.date)}
                                </p>
                                <p className="text-[var(--deep-tide)]/70 dark:text-[var(--ocean-foam)]/70 text-sm">
                                    {booking.duration} • {booking.location}
                                </p>
                            </div>

                            {booking.status === "completed" && (
                                <button
                                    onClick={() => handleRebook(booking)}
                                    className="bg-[var(--deep-tide)] hover:bg-[var(--deep-tide)]/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors ml-4"
                                >
                                    Book Again
                                </button>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {!isExpanded && bookings.length > 2 && (
                <div className="text-center mt-4">
                    <p className="text-[var(--deep-tide)]/70 dark:text-[var(--ocean-foam)]/70 text-sm">
                        +{bookings.length - 2} more bookings
                    </p>
                </div>
            )}
        </motion.div>
    )
} 