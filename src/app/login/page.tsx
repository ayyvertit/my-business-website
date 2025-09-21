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

                    {/* Clerk Components */}
                    <motion.div
                        key={isSignIn ? "signin" : "signup"}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {isSignIn ? (
                            <SignIn
                                appearance={{
                                    elements: {
                                        formButtonPrimary: "bg-[var(--deep-tide)] hover:bg-[var(--deep-tide)]/90 text-white font-semibold",
                                        card: "bg-transparent shadow-none",
                                        headerTitle: "text-[var(--deep-tide)] dark:text-white font-bold text-xl",
                                        headerSubtitle: "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] font-medium",
                                        formFieldLabel: "text-[var(--deep-tide)] dark:text-white font-semibold",
                                        formFieldInput: "bg-[var(--coastal-mist)]/70 dark:bg-[var(--ocean-foam)]/60 border-[var(--coastal-mist)] dark:border-[var(--ocean-foam)] text-[var(--deep-tide)] dark:text-white font-medium placeholder:text-[var(--deep-tide)]/60 dark:placeholder:text-[var(--ocean-foam)]/60",
                                        footerActionLink: "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] font-semibold hover:text-[var(--deep-tide)]/80 dark:hover:text-white/80",
                                        dividerLine: "bg-[var(--coastal-mist)] dark:bg-[var(--ocean-foam)]",
                                        dividerText: "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] font-medium",
                                        formFieldInputShowPasswordButton: "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)]",
                                        formFieldInputShowPasswordButtonIcon: "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)]",
                                        formResendCodeLink: "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] font-semibold",
                                        formFieldRow: "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)]",
                                        formFieldHintText: "text-[var(--deep-tide)]/80 dark:text-[var(--ocean-foam)]/80 font-medium",
                                        formFieldErrorText: "text-red-600 dark:text-red-400 font-semibold",
                                        alertText: "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] font-medium",
                                        alert: "bg-[var(--coastal-mist)]/50 dark:bg-[var(--ocean-foam)]/20 border-[var(--coastal-mist)] dark:border-[var(--ocean-foam)]",
                                        socialButtonsBlockButton: "bg-[var(--coastal-mist)]/70 dark:bg-[var(--ocean-foam)]/60 border-[var(--coastal-mist)] dark:border-[var(--ocean-foam)] text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] font-semibold hover:bg-[var(--coastal-mist)]/90 dark:hover:bg-[var(--ocean-foam)]/80",
                                        socialButtonsBlockButtonText: "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] font-semibold",
                                        formFieldAction: "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] font-semibold",
                                        formFieldActionLink: "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] font-semibold hover:text-[var(--deep-tide)]/80 dark:hover:text-white/80",
                                        identityPreviewText: "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] font-medium",
                                        identityPreviewEditButton: "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] font-semibold",
                                        modalBackdrop: "bg-black/50",
                                        modalContent: "bg-white/95 dark:bg-[var(--deep-tide)]/95 backdrop-blur",
                                        modalCard: "bg-transparent shadow-none",
                                        modalContentRoot: "bg-transparent",
                                        modalContentRootWithScroll: "bg-transparent",
                                        modalContentRootWithoutScroll: "bg-transparent",
                                    },
                                }}
                            />
                        ) : (
                            <SignUp
                                appearance={{
                                    elements: {
                                        formButtonPrimary: "bg-[var(--deep-tide)] hover:bg-[var(--deep-tide)]/90 text-white font-semibold",
                                        card: "bg-transparent shadow-none",
                                        headerTitle: "text-[var(--deep-tide)] dark:text-white font-bold text-xl",
                                        headerSubtitle: "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] font-medium",
                                        formFieldLabel: "text-[var(--deep-tide)] dark:text-white font-semibold",
                                        formFieldInput: "bg-[var(--coastal-mist)]/70 dark:bg-[var(--ocean-foam)]/60 border-[var(--coastal-mist)] dark:border-[var(--ocean-foam)] text-[var(--deep-tide)] dark:text-white font-medium placeholder:text-[var(--deep-tide)]/60 dark:placeholder:text-[var(--ocean-foam)]/60",
                                        footerActionLink: "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] font-semibold hover:text-[var(--deep-tide)]/80 dark:hover:text-white/80",
                                        dividerLine: "bg-[var(--coastal-mist)] dark:bg-[var(--ocean-foam)]",
                                        dividerText: "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] font-medium",
                                        formFieldInputShowPasswordButton: "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)]",
                                        formFieldInputShowPasswordButtonIcon: "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)]",
                                        formResendCodeLink: "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] font-semibold",
                                        formFieldRow: "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)]",
                                        formFieldHintText: "text-[var(--deep-tide)]/80 dark:text-[var(--ocean-foam)]/80 font-medium",
                                        formFieldErrorText: "text-red-600 dark:text-red-400 font-semibold",
                                        alertText: "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] font-medium",
                                        alert: "bg-[var(--coastal-mist)]/50 dark:bg-[var(--ocean-foam)]/20 border-[var(--coastal-mist)] dark:border-[var(--ocean-foam)]",
                                        socialButtonsBlockButton: "bg-[var(--coastal-mist)]/70 dark:bg-[var(--ocean-foam)]/60 border-[var(--coastal-mist)] dark:border-[var(--ocean-foam)] text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] font-semibold hover:bg-[var(--coastal-mist)]/90 dark:hover:bg-[var(--ocean-foam)]/80",
                                        socialButtonsBlockButtonText: "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] font-semibold",
                                        formFieldAction: "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] font-semibold",
                                        formFieldActionLink: "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] font-semibold hover:text-[var(--deep-tide)]/80 dark:hover:text-white/80",
                                        identityPreviewText: "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] font-medium",
                                        identityPreviewEditButton: "text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] font-semibold",
                                        modalBackdrop: "bg-black/50",
                                        modalContent: "bg-white/95 dark:bg-[var(--deep-tide)]/95 backdrop-blur",
                                        modalCard: "bg-transparent shadow-none",
                                        modalContentRoot: "bg-transparent",
                                        modalContentRootWithScroll: "bg-transparent",
                                        modalContentRootWithoutScroll: "bg-transparent",
                                    },
                                }}
                            />
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
} 