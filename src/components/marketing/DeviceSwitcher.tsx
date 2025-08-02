"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { DesktopPage } from "./DesktopPage"
import { TabletPage } from "./TabletPage"
import { MobilePage } from "./MobilePage"
import { DesktopAbout } from "./DesktopAbout"
import { TabletAbout } from "./TabletAbout"
import { MobileAbout } from "./MobileAbout"
import { DesktopServices } from "./DesktopServices"
import { TabletServices } from "./TabletServices"
import { MobileServices } from "./MobileServices"
import { DesktopServiceArea } from "./DesktopServiceArea"
import { TabletServiceArea } from "./TabletServiceArea"
import { MobileServiceArea } from "./MobileServiceArea"
import { DesktopBooking } from "./DesktopBooking"
import { TabletBooking } from "./TabletBooking"
import { MobileBooking } from "./MobileBooking"
import { DesktopTestimonials } from "./DesktopTestimonials"
import { TabletTestimonials } from "./TabletTestimonials"
import { MobileTestimonials } from "./MobileTestimonials"

export function DeviceSwitcher() {
  const [currentDevice, setCurrentDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')
  const pathname = usePathname()

  // Auto-detect device on mount and window resize
  useEffect(() => {
    const detectDevice = () => {
      const width = window.innerWidth
      if (width < 768) {
        setCurrentDevice('mobile')
      } else if (width < 1024) {
        setCurrentDevice('tablet')
      } else {
        setCurrentDevice('desktop')
      }
    }

    // Set initial device
    detectDevice()

    // Listen for window resize
    window.addEventListener('resize', detectDevice)

    // Cleanup
    return () => window.removeEventListener('resize', detectDevice)
  }, [])

  // Determine which component to render based on pathname and device
  const renderContent = () => {
    switch (pathname) {
      case '/':
        switch (currentDevice) {
          case 'desktop': return <DesktopPage />
          case 'tablet': return <TabletPage />
          case 'mobile': return <MobilePage />
        }
        break
      case '/about':
        switch (currentDevice) {
          case 'desktop': return <DesktopAbout />
          case 'tablet': return <TabletAbout />
          case 'mobile': return <MobileAbout />
        }
        break
      case '/services':
        switch (currentDevice) {
          case 'desktop': return <DesktopServices />
          case 'tablet': return <TabletServices />
          case 'mobile': return <MobileServices />
        }
        break
      case '/service-area':
        switch (currentDevice) {
          case 'desktop': return <DesktopServiceArea />
          case 'tablet': return <TabletServiceArea />
          case 'mobile': return <MobileServiceArea />
        }
        break
      case '/booking':
        switch (currentDevice) {
          case 'desktop': return <DesktopBooking />
          case 'tablet': return <TabletBooking />
          case 'mobile': return <MobileBooking />
        }
        break
      case '/testimonials':
        switch (currentDevice) {
          case 'desktop': return <DesktopTestimonials />
          case 'tablet': return <TabletTestimonials />
          case 'mobile': return <MobileTestimonials />
        }
        break
      default:
        // Default to home page
        switch (currentDevice) {
          case 'desktop': return <DesktopPage />
          case 'tablet': return <TabletPage />
          case 'mobile': return <MobilePage />
        }
    }
  }

  return (
    <div className="min-h-screen">
      {/* Device Switcher Controls - Much smaller and repositioned */}
      <div className="fixed top-2 right-12 z-[9998] bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-md p-1 shadow-sm border border-gray-200 dark:border-gray-600">
        <div className="flex gap-0.5">
          <button
            onClick={() => setCurrentDevice('desktop')}
            className={`px-1.5 py-0.5 rounded text-[10px] font-medium transition-colors ${currentDevice === 'desktop'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
          >
            D
          </button>
          <button
            onClick={() => setCurrentDevice('tablet')}
            className={`px-1.5 py-0.5 rounded text-[10px] font-medium transition-colors ${currentDevice === 'tablet'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
          >
            T
          </button>
          <button
            onClick={() => setCurrentDevice('mobile')}
            className={`px-1.5 py-0.5 rounded text-[10px] font-medium transition-colors ${currentDevice === 'mobile'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
          >
            M
          </button>
        </div>
      </div>

      {/* Render Current Device Page */}
      {renderContent()}
    </div>
  )
} 