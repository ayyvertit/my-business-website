import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SITE_CONFIG } from "@/lib/constants"
import { ThemeProvider } from "@/components/ui/ThemeProvider"
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {/* Auth UI is scoped to /dashboard layout now */}
          <Suspense fallback={null} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}