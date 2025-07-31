"use client"

import { ThemeToggle } from "../ui/ThemeToggle"
import Image from "next/image"

export function MobileHeader() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#F7B6A6] to-white dark:from-[var(--deep-tide)] dark:to-[var(--deep-tide)]/90 backdrop-blur supports-backdrop-blur:blur-md shadow-md">
      {/* Device Switcher Controls - Compact and positioned at top */}
      <div className="fixed top-2 right-6 z-[9998] bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-md p-1 shadow-sm border border-gray-200 dark:border-gray-600">
        <div className="flex gap-0.5">
          <button
            className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          >
            D
          </button>
          <button
            className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          >
            T
          </button>
          <button
            className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-500 text-white"
          >
            M
          </button>
        </div>
      </div>

      {/* Crystal Coast Concierge - Fixed positioned in top-left with better text scaling */}
      <div style={{
        position: 'fixed',
        top: '16px',
        left: '16px',
        zIndex: 9999
      }}>
        <div className="flex items-start gap-2">
          {/* Text - Better scaling for small screens */}
          <div className="flex flex-col items-start text-[var(--deep-tide)] dark:text-white leading-none">
            <div style={{ position: 'relative' }}>
              <span className="text-base sm:text-lg font-bold tracking-wide break-words" style={{ letterSpacing: '0.05em' }}>CRYSTAL COAST</span>
            </div>
            <div style={{ position: 'relative', marginTop: '0px' }}>
              <span className="text-xs sm:text-sm tracking-widest break-words" style={{ letterSpacing: '0.1em' }}>CONCIERGE</span>
            </div>
          </div>

          {/* Logo - Responsive sizing */}
          <div className="w-12 h-12 sm:w-16 sm:h-16 relative mt-1 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Crystal Coast Concierge Logo"
              width={64}
              height={64}
              className="object-contain dark:filter dark:brightness-0 dark:invert transition-all duration-300 ease-in-out w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="max-w-full mx-auto px-3 sm:px-4">
        <div className="flex justify-end items-center h-14 sm:h-16">
          {/* Theme Toggle - Positioned on the right */}
          <div className="flex items-center">
            <ThemeToggle size="sm" />
          </div>
        </div>
      </div>
    </header>
  )
} 