"use client"

import { ClerkProvider } from "@clerk/nextjs"
import Link from "next/link"

interface ClerkWrapperProps {
  children: React.ReactNode
}

export default function ClerkWrapper({ children }: ClerkWrapperProps) {
  const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || null

  if (!clerkKey || clerkKey === 'your_publishable_key_here') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--ocean-foam)] to-[var(--white-sand)] dark:from-[var(--deep-tide)] dark:to-[var(--ocean-foam)]">
        <div className="text-center p-8 bg-white/95 dark:bg-[var(--deep-tide)]/95 rounded-2xl shadow-xl">
          <h1 className="text-2xl font-bold text-[var(--deep-tide)] dark:text-white mb-4">
            Authentication Setup Required
          </h1>
          <p className="text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] mb-6">
            Please configure your Clerk environment variables in Vercel.
          </p>
          <Link
            href="/"
            className="inline-block bg-[var(--deep-tide)] hover:bg-[var(--deep-tide)]/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <ClerkProvider
      publishableKey={clerkKey}
      signInUrl="/login"
      signUpUrl="/login"
      afterSignInUrl="/dashboard"
      afterSignUpUrl="/dashboard"
    >
      {children}
    </ClerkProvider>
  )
}
