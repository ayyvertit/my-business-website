"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ThemeToggle } from "../ui/ThemeToggle"

export function TabletHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--white-sand)] dark:bg-[var(--deep-tide)]/90 backdrop-blur supports-backdrop-blur:blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Branding */}
          <div className="flex flex-col items-start text-[var(--deep-tide)] dark:text-white leading-tight">
            <span className="text-2xl font-bold tracking-wide">CRYSTAL COAST</span>
            <span className="text-sm tracking-widest text-[var(--coastal-mist)]">CONCIERGE</span>
          </div>

          {/* Tablet Navigation - Compact */}
          <nav className="flex gap-6 items-center text-[var(--deep-tide)] dark:text-white font-medium">
            <motion.a
              href="/"
              className="hover:text-[var(--sea-glass)] transition-colors duration-300"
              whileHover={{ y: -1 }}
            >
              Home
            </motion.a>
            <motion.a
              href="/services"
              className="hover:text-[var(--sea-glass)] transition-colors duration-300"
              whileHover={{ y: -1 }}
            >
              Services
            </motion.a>
            <motion.a
              href="/booking"
              className="hover:text-[var(--sea-glass)] transition-colors duration-300"
              whileHover={{ y: -1 }}
            >
              Book
            </motion.a>
            <motion.a
              href="/about"
              className="hover:text-[var(--sea-glass)] transition-colors duration-300"
              whileHover={{ y: -1 }}
            >
              About
            </motion.a>
          </nav>

          {/* Enhanced Theme Toggle */}
          <div className="flex items-center gap-3">
            <ThemeToggle size="md" />
          </div>
        </div>
      </div>
    </header>
  )
} 