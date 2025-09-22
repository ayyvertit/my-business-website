import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SITE_CONFIG } from "@/lib/constants"
import { ThemeProvider } from "@/components/ui/ThemeProvider"
import { ClerkProvider, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Check if Clerk is properly configured
  const isClerkConfigured = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && 
                           process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !== 'your_publishable_key_here'

  if (!isClerkConfigured) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--ocean-foam)] to-[var(--white-sand)] dark:from-[var(--deep-tide)] dark:to-[var(--ocean-foam)]">
              <div className="text-center p-8 bg-white/95 dark:bg-[var(--deep-tide)]/95 rounded-2xl shadow-xl">
                <h1 className="text-2xl font-bold text-[var(--deep-tide)] dark:text-white mb-4">
                  Authentication Setup Required
                </h1>
                <p className="text-[var(--deep-tide)] dark:text-[var(--ocean-foam)] mb-6">
                  Please configure your Clerk environment variables in Vercel.
                </p>
                <a 
                  href="/" 
                  className="inline-block bg-[var(--deep-tide)] hover:bg-[var(--deep-tide)]/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Return to Home
                </a>
              </div>
            </div>
            {children}
          </ThemeProvider>
        </body>
      </html>
    )
  }

  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      signInUrl="/login"
      signUpUrl="/login"
      afterSignInUrl="/dashboard"
      afterSignUpUrl="/dashboard"
    >
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider>
            {/* Global User Button - only shows when signed in */}
            <Suspense fallback={null}>
              <div className="fixed top-4 right-4 z-50">
                <SignedIn>
                  <UserButton 
                    appearance={{
                      elements: {
                        userButtonAvatarBox: "w-8 h-8",
                        userButtonPopoverCard: "bg-white dark:bg-[var(--deep-tide)] border border-[var(--coastal-mist)] dark:border-[var(--ocean-foam)]",
                        userButtonPopoverActionButton: "text-[var(--deep-tide)] dark:text-white hover:bg-[var(--coastal-mist)]/20 dark:hover:bg-[var(--ocean-foam)]/20",
                      }
                    }}
                  />
                </SignedIn>
              </div>
            </Suspense>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}