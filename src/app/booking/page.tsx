"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CreditCard } from 'lucide-react'
import { DesktopHeader } from '../../components/marketing/DesktopHeader'
import Footer from '../../components/Footer'

interface BookingData {
  name: string
  email: string
  phone: string
  massageType: string
  duration: string
  preferredDate: string
  preferredTime: string
  additionalNotes: string
}

interface Pricing {
  [key: string]: {
    [key: string]: number
  }
}

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState<'form' | 'summary' | 'payment'>('form')
  const [bookingData, setBookingData] = useState<BookingData>({
    name: '',
    email: '',
    phone: '',
    massageType: '',
    duration: '',
    preferredDate: '',
    preferredTime: '',
    additionalNotes: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const massageTypes = [
    { value: 'swedish', label: 'Swedish Massage', description: 'Gentle, relaxing full-body massage' },
    { value: 'deep-tissue', label: 'Deep Tissue Massage', description: 'Targets deeper muscle layers' },
    { value: 'customized', label: 'Customized Massage', description: 'Blend of techniques for your needs' }
  ]

  const durations = [
    { value: '60', label: '60 minutes', price: 80 },
    { value: '90', label: '90 minutes', price: 110 },
    { value: '120', label: '120 minutes', price: 140 }
  ]

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM'
  ]

  const pricing: Pricing = {
    swedish: { '60': 80, '90': 110, '120': 140 },
    'deep-tissue': { '60': 90, '90': 125, '120': 160 },
    customized: { '60': 85, '90': 120, '120': 150 }
  }

  const getCurrentPrice = () => {
    if (!bookingData.massageType || !bookingData.duration) return 0
    return pricing[bookingData.massageType]?.[bookingData.duration] || 0
  }

  const handleInputChange = (field: keyof BookingData, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (bookingData.name && bookingData.email && bookingData.phone &&
      bookingData.massageType && bookingData.duration &&
      bookingData.preferredDate && bookingData.preferredTime) {
      setCurrentStep('summary')
    }
  }

  const handleProceedToPayment = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...bookingData,
          amount: getCurrentPrice(),
          serviceName: `${massageTypes.find(t => t.value === bookingData.massageType)?.label} - ${durations.find(d => d.value === bookingData.duration)?.label}`
        }),
      })

      const { sessionId } = await response.json()

      // Redirect to Stripe Checkout
      const stripe = await import('@stripe/stripe-js').then(({ loadStripe }) =>
        loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
      )

      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId })
        if (error) {
          // Error occurred during checkout
        }
      }
    } catch (error) {
      // Error creating checkout session
    } finally {
      setIsLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

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
                Reserve your mobile massage experience with ease
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-6 sm:px-8">
            <AnimatePresence mode="wait">
              {currentStep === 'form' && (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-2xl p-8 sm:p-12 shadow-lg">
                    <h2 className="font-serif text-3xl font-bold text-[var(--deep-tide)] dark:text-white mb-8 text-center">
                      Your Booking Details
                    </h2>

                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="relative">
                          <label className="block text-sm font-medium text-[var(--deep-tide)] dark:text-white mb-2">
                            <User className="w-4 h-4 inline mr-2" />
                            Full Name *
                          </label>
                          <input
                            type="text"
                            value={bookingData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[var(--sea-glass)] focus:border-transparent bg-white dark:bg-gray-800 text-[var(--deep-tide)] dark:text-white transition-all duration-200"
                            required
                          />
                        </div>

                        <div className="relative">
                          <label className="block text-sm font-medium text-[var(--deep-tide)] dark:text-white mb-2">
                            <Mail className="w-4 h-4 inline mr-2" />
                            Email Address *
                          </label>
                          <input
                            type="email"
                            value={bookingData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[var(--sea-glass)] focus:border-transparent bg-white dark:bg-gray-800 text-[var(--deep-tide)] dark:text-white transition-all duration-200"
                            required
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <label className="block text-sm font-medium text-[var(--deep-tide)] dark:text-white mb-2">
                          <Phone className="w-4 h-4 inline mr-2" />
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={bookingData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[var(--sea-glass)] focus:border-transparent bg-white dark:bg-gray-800 text-[var(--deep-tide)] dark:text-white transition-all duration-200"
                          required
                        />
                      </div>

                      {/* Service Selection */}
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="relative">
                          <label className="block text-sm font-medium text-[var(--deep-tide)] dark:text-white mb-2">
                            Massage Type *
                          </label>
                          <select
                            value={bookingData.massageType}
                            onChange={(e) => handleInputChange('massageType', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[var(--sea-glass)] focus:border-transparent bg-white dark:bg-gray-800 text-[var(--deep-tide)] dark:text-white transition-all duration-200"
                            required
                          >
                            <option value="">Select massage type</option>
                            {massageTypes.map(type => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="relative">
                          <label className="block text-sm font-medium text-[var(--deep-tide)] dark:text-white mb-2">
                            Duration *
                          </label>
                          <select
                            value={bookingData.duration}
                            onChange={(e) => handleInputChange('duration', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[var(--sea-glass)] focus:border-transparent bg-white dark:bg-gray-800 text-[var(--deep-tide)] dark:text-white transition-all duration-200"
                            required
                          >
                            <option value="">Select duration</option>
                            {durations.map(duration => (
                              <option key={duration.value} value={duration.value}>
                                {duration.label} - ${duration.price}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Date and Time */}
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="relative">
                          <label className="block text-sm font-medium text-[var(--deep-tide)] dark:text-white mb-2">
                            <Calendar className="w-4 h-4 inline mr-2" />
                            Preferred Date *
                          </label>
                          <input
                            type="date"
                            value={bookingData.preferredDate}
                            onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[var(--sea-glass)] focus:border-transparent bg-white dark:bg-gray-800 text-[var(--deep-tide)] dark:text-white transition-all duration-200"
                            required
                          />
                        </div>

                        <div className="relative">
                          <label className="block text-sm font-medium text-[var(--deep-tide)] dark:text-white mb-2">
                            <Clock className="w-4 h-4 inline mr-2" />
                            Preferred Time *
                          </label>
                          <select
                            value={bookingData.preferredTime}
                            onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[var(--sea-glass)] focus:border-transparent bg-white dark:bg-gray-800 text-[var(--deep-tide)] dark:text-white transition-all duration-200"
                            required
                          >
                            <option value="">Select time</option>
                            {timeSlots.map(time => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Additional Notes */}
                      <div className="relative">
                        <label className="block text-sm font-medium text-[var(--deep-tide)] dark:text-white mb-2">
                          <MessageSquare className="w-4 h-4 inline mr-2" />
                          Additional Notes
                        </label>
                        <textarea
                          value={bookingData.additionalNotes}
                          onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[var(--sea-glass)] focus:border-transparent bg-white dark:bg-gray-800 text-[var(--deep-tide)] dark:text-white transition-all duration-200 resize-none"
                          placeholder="Any special requests or health considerations..."
                        />
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[var(--sea-glass)] to-[var(--coral-blush)] text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Review Booking
                      </motion.button>
                    </form>
                  </div>
                </motion.div>
              )}

              {currentStep === 'summary' && (
                <motion.div
                  key="summary"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white/80 dark:bg-white/10 backdrop-blur rounded-2xl p-8 sm:p-12 shadow-lg">
                    <h2 className="font-serif text-3xl font-bold text-[var(--deep-tide)] dark:text-white mb-8 text-center">
                      Booking Summary
                    </h2>

                    <div className="space-y-6">
                      {/* Service Details */}
                      <div className="bg-[var(--ocean-foam)] dark:bg-[var(--deep-tide)] rounded-xl p-6">
                        <h3 className="font-serif text-xl font-bold text-[var(--deep-tide)] dark:text-white mb-4">
                          Service Details
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <p className="text-sm text-[var(--coastal-mist)]">Massage Type</p>
                            <p className="font-semibold text-[var(--deep-tide)] dark:text-white">
                              {massageTypes.find(t => t.value === bookingData.massageType)?.label}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-[var(--coastal-mist)]">Duration</p>
                            <p className="font-semibold text-[var(--deep-tide)] dark:text-white">
                              {durations.find(d => d.value === bookingData.duration)?.label}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-[var(--coastal-mist)]">Date</p>
                            <p className="font-semibold text-[var(--deep-tide)] dark:text-white">
                              {formatDate(bookingData.preferredDate)}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-[var(--coastal-mist)]">Time</p>
                            <p className="font-semibold text-[var(--deep-tide)] dark:text-white">
                              {bookingData.preferredTime}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="bg-[var(--ocean-foam)] dark:bg-[var(--deep-tide)] rounded-xl p-6">
                        <h3 className="font-serif text-xl font-bold text-[var(--deep-tide)] dark:text-white mb-4">
                          Contact Information
                        </h3>
                        <div className="space-y-2">
                          <p><span className="text-sm text-[var(--coastal-mist)]">Name:</span> {bookingData.name}</p>
                          <p><span className="text-sm text-[var(--coastal-mist)]">Email:</span> {bookingData.email}</p>
                          <p><span className="text-sm text-[var(--coastal-mist)]">Phone:</span> {bookingData.phone}</p>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="bg-gradient-to-r from-[var(--sea-glass)] to-[var(--coral-blush)] rounded-xl p-6 text-white">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-semibold">Total Amount</span>
                          <span className="text-2xl font-bold">${getCurrentPrice()}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <motion.button
                          onClick={() => setCurrentStep('form')}
                          className="flex-1 bg-gray-200 dark:bg-gray-700 text-[var(--deep-tide)] dark:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Edit Booking
                        </motion.button>
                        <motion.button
                          onClick={handleProceedToPayment}
                          disabled={isLoading}
                          className="flex-1 bg-gradient-to-r from-[var(--sea-glass)] to-[var(--coral-blush)] text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {isLoading ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Processing...
                            </>
                          ) : (
                            <>
                              <CreditCard className="w-5 h-5" />
                              Proceed to Payment
                            </>
                          )}
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
} 