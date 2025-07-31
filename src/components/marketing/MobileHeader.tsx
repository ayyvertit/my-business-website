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

      <div className="max-w-full mx-auto px-3 sm:px-4">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Left side - empty for balance */}
          <div className="w-10 sm:w-12"></div>
          
          {/* Center - Large Logo */}
          <div className="flex-1 flex justify-center items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
              <Image
                src="/logo.png"
                alt="Crystal Coast Concierge Logo"
                width={48}
                height={48}
                className="object-contain dark:filter dark:brightness-0 dark:invert transition-all duration-300 ease-in-out w-full h-full"
              />
            </div>
          </div>
          
          {/* Right side - Theme Toggle */}
          <div className="flex items-center w-10 sm:w-12 justify-end">
            <ThemeToggle size="sm" />
          </div>
        </div>
      </div>
    </header>
  )
} 