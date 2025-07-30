"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "../ui/ThemeToggle"

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[var(--white-sand)] dark:bg-[var(--deep-tide)]/90 backdrop-blur supports-backdrop-blur:blur-md shadow-md">
      <div className="max-w-full mx-auto px-3 sm:px-4">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Mobile Logo - Improved text sizing for small screens */}
          <div className="flex flex-col items-start text-[var(--deep-tide)] dark:text-white leading-tight">
            <span className="text-lg sm:text-xl font-bold tracking-wide">CRYSTAL COAST</span>
            <span className="text-xs sm:text-xs tracking-widest text-[var(--coastal-mist)]">CONCIERGE</span>
          </div>

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