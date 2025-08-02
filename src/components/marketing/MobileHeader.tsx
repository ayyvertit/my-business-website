"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "../ui/ThemeToggle"
import Image from "next/image"

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/service-area", label: "Service Area" },
    { href: "/booking", label: "Book" },
    { href: "/testimonials", label: "Reviews" }
  ]

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#F7B6A6] to-white dark:from-[var(--deep-tide)] dark:to-[var(--deep-tide)]/90 backdrop-blur supports-backdrop-blur:blur-md shadow-md">

      <div className="max-w-full mx-auto px-3 sm:px-4">
        <div className="flex items-center h-14 sm:h-16 relative">
          {/* Crystal Coast Concierge text - positioned on the left */}
          <motion.a
            href="/"
            className="absolute left-0 flex flex-col items-start text-[var(--deep-tide)] dark:text-white leading-none cursor-pointer hover:opacity-80 transition-opacity duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div style={{ position: 'relative' }}>
              <span className="text-sm sm:text-base font-bold tracking-wide break-words" style={{ letterSpacing: '0.05em' }}>CRYSTAL COAST</span>
            </div>
            <div style={{ position: 'relative', marginTop: '0px' }}>
              <span className="text-xs sm:text-xs tracking-widest break-words" style={{ letterSpacing: '0.1em' }}>CONCIERGE MASSAGE</span>
            </div>
          </motion.a>

          {/* Center - Very Large Logo - truly centered in header */}
          <motion.a
            href="/"
            className="absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center cursor-pointer hover:opacity-80 transition-opacity duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-13 h-13 sm:w-15 sm:h-15 relative">
              <Image
                src="/logo.png"
                alt="Crystal Coast Concierge Logo"
                width={60}
                height={60}
                className="object-contain dark:filter dark:brightness-0 dark:invert transition-all duration-300 ease-in-out w-full h-full"
              />
            </div>
          </motion.a>

          {/* Right side - Menu button and Theme Toggle */}
          <div className="absolute right-0 flex items-center gap-2">
            <ThemeToggle size="sm" />

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-white/20 transition-colors"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isMenuOpen ? "open" : "closed"}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-[var(--deep-tide)] dark:text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-[var(--deep-tide)] dark:text-white" />
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-white/95 dark:bg-[var(--deep-tide)]/95 backdrop-blur border-t border-gray-200 dark:border-gray-700"
          >
            <nav className="px-4 py-6">
              <div className="space-y-2">
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="block w-full px-4 py-3 text-left text-[var(--deep-tide)] dark:text-white font-medium rounded-lg hover:bg-[var(--ocean-foam)] dark:hover:bg-white/10 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 