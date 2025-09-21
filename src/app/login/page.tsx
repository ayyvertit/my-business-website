"use client"

// import { SignIn, SignUp } from "@clerk/nextjs" // Temporarily disabled
import { useState } from "react"
import { motion } from "framer-motion"

export default function LoginPage() {
    const [isSignIn, setIsSignIn] = useState(true)

    return (
        <div className="min-h-screen bg-gradient-to-br from-[var(--ocean-foam)] to-[var(--white-sand)] dark:from-[var(--deep-tide)] dark:to-[var(--ocean-foam)] flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/95 dark:bg-[var(--deep-tide)]/95 backdrop-blur rounded-2xl shadow-xl border border-[var(--coastal-mist)] dark:border-[var(--ocean-foam)] p-8"
                >
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-serif font-bold text-[var(--deep-tide)] dark:text-white mb-2 drop-shadow-sm">
                            Crystal Coast Concierge
                        </h1>
                        <p className="text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] font-medium text-lg">
                            {isSignIn ? "Welcome back" : "Create your account"}
                        </p>
                    </div>

                    {/* Toggle Buttons */}
                    <div className="flex bg-[var(--coastal-mist)] dark:bg-[var(--ocean-foam)]/30 rounded-lg p-1 mb-6">
                        <button
                            onClick={() => setIsSignIn(true)}
                            className={`flex-1 py-3 px-4 rounded-md text-sm font-semibold transition-all ${isSignIn
                                    ? "bg-white dark:bg-[var(--deep-tide)] text-[var(--deep-tide)] dark:text-white shadow-sm"
                                    : "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] hover:text-[var(--deep-tide)]/80 dark:hover:text-white/80"
                                }`}
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => setIsSignIn(false)}
                            className={`flex-1 py-3 px-4 rounded-md text-sm font-semibold transition-all ${!isSignIn
                                    ? "bg-white dark:bg-[var(--deep-tide)] text-[var(--deep-tide)] dark:text-white shadow-sm"
                                    : "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] hover:text-[var(--deep-tide)]/80 dark:hover:text-white/80"
                                }`}
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Temporarily disabled Clerk authentication */}
                    <motion.div
                        key={isSignIn ? "signin" : "signup"}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-center p-8"
                    >
                        <div className="bg-[var(--coastal-mist)]/20 dark:bg-[var(--ocean-foam)]/20 rounded-xl p-8 border border-[var(--coastal-mist)] dark:border-[var(--ocean-foam)]">
                            <h3 className="text-xl font-bold text-[var(--deep-tide)] dark:text-white mb-4">
                                Authentication Temporarily Disabled
                            </h3>
                            <p className="text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] mb-6">
                                User authentication is currently being set up. Please check back soon!
                            </p>
                            <a 
                                href="/" 
                                className="inline-block bg-[var(--deep-tide)] hover:bg-[var(--deep-tide)]/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                            >
                                Return to Home
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
} 