"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "../ui/ThemeToggle"
import Image from "next/image"

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false)

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

      {/* Crystal Coast Concierge - Fixed positioned in top-left */}
      <div style={{
        position: 'fixed',
        top: '16px',
        left: '16px',
        zIndex: 9999
      }}>
        <div className="flex items-start gap-2">
          {/* Text */}
          <div className="flex flex-col items-start text-[var(--deep-tide)] dark:text-white leading-none">
            <div style={{ position: 'relative' }}>
              <span style={{ fontSize: '18px', fontWeight: 'bold', letterSpacing: '0.05em' }}>CRYSTAL COAST</span>
            </div>
            <div style={{ position: 'relative', marginTop: '0px' }}>
              <span style={{ fontSize: '10px', letterSpacing: '0.1em' }}>CONCIERGE</span>
            </div>
          </div>

          {/* Logo */}
          <div className="w-16 h-16 relative mt-1">
            <Image
              src="/logo.png"
              alt="Crystal Coast Concierge Logo"
              width={64}
              height={64}
              className="object-contain dark:filter dark:brightness-0 dark:invert transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>

      <div className="max-w-full mx-auto px-3 sm:px-4">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Mobile Menu Button - Enhanced touch targets */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Enhanced Theme Toggle - Small */}
            <ThemeToggle size="sm" />

            {/* Hamburger Menu - Improved touch target */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-11 h-11 sm:w-10 sm:h-10 p-0 rounded-full flex items-center justify-center bg-[var(--coastal-mist)]/20 hover:bg-[var(--coastal-mist)]/30 transition-colors touch-manipulation"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-5 h-5 text-[var(--deep-tide)]" />
              ) : (
                <Menu className="w-5 h-5 text-[var(--deep-tide)]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Slide Down */}
        {isOpen && (
          <div className="border-t border-[var(--deep-tide)]/20 bg-[var(--white-sand)] dark:bg-[var(--deep-tide)]/95">
            <div className="py-3 sm:py-4 space-y-1 sm:space-y-2">
              <Link
                href="/"
                className="block px-3 sm:px-4 py-3 text-[var(--deep-tide)] dark:text-white hover:bg-[var(--coastal-mist)]/20 transition-colors rounded-lg mx-1 sm:mx-2 min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block px-3 sm:px-4 py-3 text-[var(--deep-tide)] dark:text-white hover:bg-[var(--coastal-mist)]/20 transition-colors rounded-lg mx-1 sm:mx-2 min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/booking"
                className="block px-3 sm:px-4 py-3 text-[var(--deep-tide)] dark:text-white hover:bg-[var(--coastal-mist)]/20 transition-colors rounded-lg mx-1 sm:mx-2 min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                Book
              </Link>
              <Link
                href="/about"
                className="block px-3 sm:px-4 py-3 text-[var(--deep-tide)] dark:text-white hover:bg-[var(--coastal-mist)]/20 transition-colors rounded-lg mx-1 sm:mx-2 min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/testimonials"
                className="block px-3 sm:px-4 py-3 text-[var(--deep-tide)] dark:text-white hover:bg-[var(--coastal-mist)]/20 transition-colors rounded-lg mx-1 sm:mx-2 min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                Reviews
              </Link>
              <Link
                href="/service-area"
                className="block px-3 sm:px-4 py-3 text-[var(--deep-tide)] dark:text-white hover:bg-[var(--coastal-mist)]/20 transition-colors rounded-lg mx-1 sm:mx-2 min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                Coverage
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 