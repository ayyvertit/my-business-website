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