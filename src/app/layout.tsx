import type { Metadata } from "next"
import { Inter, Lato, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const lato = Lato({ 
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato"
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair"
})

export const metadata: Metadata = {
  title: "Crystal Coast Concierge Massage - Luxury Mobile Massage Therapy",
  description: "Experience premium mobile massage therapy on North Carolina's Crystal Coast. Professional, licensed massage therapy delivered to your home, dock, or vacation rental.",
  keywords: "mobile massage, concierge massage, Crystal Coast, North Carolina, massage therapy, luxury massage, in-home massage",
  authors: [{ name: "Crystal Coast Concierge Massage" }],
  creator: "Crystal Coast Concierge Massage",
  publisher: "Crystal Coast Concierge Massage",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://crystalcoastconcierge.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Crystal Coast Concierge Massage - Luxury Mobile Massage Therapy",
    description: "Experience premium mobile massage therapy on North Carolina's Crystal Coast. Professional, licensed massage therapy delivered to your home, dock, or vacation rental.",
    url: "https://crystalcoastconcierge.com",
    siteName: "Crystal Coast Concierge Massage",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Crystal Coast Concierge Massage - Luxury Mobile Massage Therapy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crystal Coast Concierge Massage - Luxury Mobile Massage Therapy",
    description: "Experience premium mobile massage therapy on North Carolina's Crystal Coast. Professional, licensed massage therapy delivered to your home, dock, or vacation rental.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme')
                  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
                  const theme = savedTheme || systemTheme
                  document.documentElement.classList.toggle('dark', theme === 'dark')
                } catch (e) {
                  // Fallback to system preference if localStorage is not available
                  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
                  document.documentElement.classList.toggle('dark', systemTheme === 'dark')
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${lato.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}