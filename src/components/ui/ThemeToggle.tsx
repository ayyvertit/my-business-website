"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon } from "lucide-react"

interface ThemeToggleProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function ThemeToggle({ className = "", size = "md" }: ThemeToggleProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Get initial theme
    const getInitialTheme = (): "light" | "dark" => {
      if (typeof window === "undefined") return "light"

      try {
        const stored = localStorage.getItem("theme") as "light" | "dark" | null
        if (stored) return stored

        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      } catch (e) {
        return "light"
      }
    }

    const initialTheme = getInitialTheme()
    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className={`w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 ${className}`} />
    )
  }

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className={`${sizeClasses[size]} rounded-full bg-[var(--sea-glass)] hover:bg-[var(--coral-blush)] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <AnimatePresence mode="wait">
        {theme === "light" ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="w-5 h-5 text-white" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="w-5 h-5 text-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
} 