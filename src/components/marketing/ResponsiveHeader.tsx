"use client"

import { useState, useEffect } from "react"
import { DesktopHeader } from "./DesktopHeader"
import { TabletHeader } from "./TabletHeader"
import { MobileHeader } from "./MobileHeader"

export function ResponsiveHeader() {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 1024) {
        setScreenSize('desktop')
      } else if (width >= 768) {
        setScreenSize('tablet')
      } else {
        setScreenSize('mobile')
      }
    }

    // Set initial size
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Render only the appropriate component
  switch (screenSize) {
    case 'desktop':
      return <DesktopHeader />
    case 'tablet':
      return <TabletHeader />
    case 'mobile':
      return <MobileHeader />
    default:
      return <MobileHeader /> // Fallback
  }
} 