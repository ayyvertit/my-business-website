"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    const initialTheme = savedTheme || systemTheme
    
    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <header className="sticky top-0 z-50 bg-[var(--white-sand)] dark:bg-[var(--deep-tide)]/90 backdrop-blur supports-backdrop-blur:blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Subheading */}
          <div className="flex flex-col items-start md:items-center text-[var(--deep-tide)] dark:text-white leading-tight">
            <span className="text-2xl font-bold tracking-wide">CRYSTAL COAST</span>
            <span className="text-sm tracking-widest text-[var(--coastal-mist)]">CONCIERGE</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-6 items-center text-[var(--deep-tide)] dark:text-white font-medium">
            <motion.a 
              href="/" 
              className="hover:text-[var(--sea-glass)] transition"
              whileHover={{ y: -2 }}
            >
              Home
            </motion.a>
            <motion.a 
              href="/services" 
              className="hover:text-[var(--sea-glass)] transition"
              whileHover={{ y: -2 }}
            >
              Services
            </motion.a>
            <motion.a 
              href="/about" 
              className="hover:text-[var(--sea-glass)] transition"
              whileHover={{ y: -2 }}
            >
              About
            </motion.a>
            <motion.a 
              href="/booking" 
              className="hover:text-[var(--sea-glass)] transition"
              whileHover={{ y: -2 }}
            >
              Book
            </motion.a>
            <motion.a 
              href="/testimonials" 
              className="hover:text-[var(--sea-glass)] transition"
              whileHover={{ y: -2 }}
            >
              Reviews
            </motion.a>
            <motion.a 
              href="/service-area" 
              className="hover:text-[var(--sea-glass)] transition"
              whileHover={{ y: -2 }}
            >
              Coverage
            </motion.a>
          </nav>

          {/* Theme Toggle */}
          <div className="ml-4">
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="w-10 h-10 p-0 relative overflow-hidden rounded-full"
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                <AnimatePresence mode="wait">
                  {theme === "light" ? (
                    <motion.div
                      key="moon"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 p-0 rounded-full"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="py-4 space-y-4 border-t border-[var(--deep-tide)]/20">
                <Link
                  href="/"
                  className="block text-[var(--deep-tide)] hover:text-[var(--sea-glass)] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="block text-[var(--deep-tide)] hover:text-[var(--sea-glass)] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="block text-[var(--deep-tide)] hover:text-[var(--sea-glass)] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/booking"
                  className="block text-[var(--deep-tide)] hover:text-[var(--sea-glass)] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Book
                </Link>
                <Link
                  href="/testimonials"
                  className="block text-[var(--deep-tide)] hover:text-[var(--sea-glass)] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Reviews
                </Link>
                <Link
                  href="/service-area"
                  className="block text-[var(--deep-tide)] hover:text-[var(--sea-glass)] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Coverage
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
} 