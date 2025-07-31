"use client"

import { useState } from "react"
import { DesktopPage } from "./DesktopPage"
import { TabletPage } from "./TabletPage"
import { MobilePage } from "./MobilePage"

export function DeviceSwitcher() {
  const [currentDevice, setCurrentDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')

  return (
    <div className="min-h-screen">
      {/* Device Switcher Controls - Moved to right, smaller size */}
      <div className="fixed top-4 right-4 z-[9999] bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-lg p-2 shadow-lg border border-gray-200 dark:border-gray-600">
        <div className="flex gap-1">
          <button
            onClick={() => setCurrentDevice('desktop')}
            className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${currentDevice === 'desktop'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
          >
            Desktop
          </button>
          <button
            onClick={() => setCurrentDevice('tablet')}
            className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${currentDevice === 'tablet'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
          >
            Tablet
          </button>
          <button
            onClick={() => setCurrentDevice('mobile')}
            className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${currentDevice === 'mobile'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
          >
            Mobile
          </button>
        </div>
      </div>

      {/* Render Current Device Page */}
      {currentDevice === 'desktop' && <DesktopPage />}
      {currentDevice === 'tablet' && <TabletPage />}
      {currentDevice === 'mobile' && <MobilePage />}
    </div>
  )
} 