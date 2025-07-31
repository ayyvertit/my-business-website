"use client"

import { ThemeToggle } from "../ui/ThemeToggle"
import Image from "next/image"

export function MobileHeader() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#F7B6A6] to-white dark:from-[var(--deep-tide)] dark:to-[var(--deep-tide)]/90 backdrop-blur supports-backdrop-blur:blur-md shadow-md">


      <div className="max-w-full mx-auto px-3 sm:px-4">
        <div className="flex items-center h-14 sm:h-16 relative">
          {/* Crystal Coast Concierge text - positioned on the left */}
          <div className="absolute left-0 flex flex-col items-start text-[var(--deep-tide)] dark:text-white leading-none">
            <div style={{ position: 'relative' }}>
              <span className="text-sm sm:text-base font-bold tracking-wide break-words" style={{ letterSpacing: '0.05em' }}>CRYSTAL COAST</span>
            </div>
            <div style={{ position: 'relative', marginTop: '0px' }}>
              <span className="text-xs sm:text-xs tracking-widest break-words" style={{ letterSpacing: '0.1em' }}>CONCIERGE MASSAGE</span>
            </div>
          </div>

          {/* Center - Very Large Logo - truly centered in header */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center">
            <div className="w-13 h-13 sm:w-15 sm:h-15 relative">
              <Image
                src="/logo.png"
                alt="Crystal Coast Concierge Logo"
                width={60}
                height={60}
                className="object-contain dark:filter dark:brightness-0 dark:invert transition-all duration-300 ease-in-out w-full h-full"
              />
            </div>
          </div>

          {/* Theme Toggle - positioned on the right */}
          <div className="absolute right-0 flex items-center">
            <ThemeToggle size="sm" />
          </div>
        </div>
      </div>
    </header>
  )
} 