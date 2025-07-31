"use client"

import { useState } from "react"
import { DesktopPage } from "./DesktopPage"
import { TabletPage } from "./TabletPage"
import { MobilePage } from "./MobilePage"

export function DeviceSwitcher() {
  const [currentDevice, setCurrentDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')

  return (
    <div className="min-h-screen">
      {/* Device Switcher Controls - Much smaller and repositioned */}
      <div className="fixed top-2 right-6 z-[9998] bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-md p-1 shadow-sm border border-gray-200 dark:border-gray-600">
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
      {currentDevice === 'desktop' && <DesktopPage />}
      {currentDevice === 'tablet' && <TabletPage />}
      {currentDevice === 'mobile' && <MobilePage />}
    </div>
  )
} 