"use client"

import { useEffect, useState } from "react"
import { DesktopHeader } from "./DesktopHeader"
import { TabletHeader } from "./TabletHeader"
import { MobileHeader } from "./MobileHeader"

type DeviceType = "desktop" | "tablet" | "mobile"

export function ResponsiveHeader() {
  const [deviceType, setDeviceType] = useState<DeviceType>("desktop")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const detectDevice = () => {
      const width = window.innerWidth
      if (width >= 1024) {
        setDeviceType("desktop")
      } else if (width >= 768) {
        setDeviceType("tablet")
      } else {
        setDeviceType("mobile")
      }
    }

    // Initial detection
    detectDevice()

    // Listen for resize events
    window.addEventListener("resize", detectDevice)

    return () => window.removeEventListener("resize", detectDevice)
  }, [])

  // Provide a fallback header during SSR to avoid blank page
  if (!isClient) {
    return <DesktopHeader />
  }

  // Render appropriate header based on device type
  switch (deviceType) {
    case "tablet":
      return <TabletHeader />
    case "mobile":
      return <MobileHeader />
    default:
      return <DesktopHeader />
  }
} 