"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon } from "lucide-react"

interface ThemeToggleProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

// Initialize theme immediately to prevent flickering
function initializeTheme() {
  if (typeof window === 'undefined') return "light"
  
  const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  const initialTheme = savedTheme || systemTheme
  
  // Apply theme immediately
  document.documentElement.classList.toggle("dark", initialTheme === "dark")
  
  return initialTheme
}

export function ThemeToggle({ className = "", size = "md" }: ThemeToggleProps) {
  const [theme, setTheme] = useState<"light" | "dark">(() => initializeTheme())
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        const newTheme = e.matches ? "dark" : "light"
        setTheme(newTheme)
        document.documentElement.classList.toggle("dark", newTheme === "dark")
      }
    }
    
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const toggleTheme = () => {
    if (isAnimating) return // Prevent rapid clicking
    
    setIsAnimating(true)
    const newTheme = theme === "light" ? "dark" : "light"
    
    // Smooth transition with delay
    setTimeout(() => {
      setTheme(newTheme)
      localStorage.setItem("theme", newTheme)
      document.documentElement.classList.toggle("dark", newTheme === "dark")
      setIsAnimating(false)
    }, 150) // Small delay for smooth animation
  }

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-11 h-11", 
    lg: "w-14 h-14"
  }

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }

  // Don't render until mounted to prevent hydration mismatch
  if (!isMounted) {
    return (
      <div className={`${sizeClasses[size]} ${className} rounded-full bg-[var(--sea-glass)] flex items-center justify-center shadow-lg`}>
        <div className={`${iconSizes[size]} text-white`}>
          {theme === "light" ? <Moon /> : <Sun />}
        </div>
      </div>
    )
  }

  return (
    <motion.button
      onClick={toggleTheme}
      disabled={isAnimating}
      className={`theme-toggle ${sizeClasses[size]} ${className} rounded-full bg-[var(--sea-glass)] hover:bg-[var(--coral-blush)] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-800`}
      whileHover={{ 
        scale: 1.05,
        rotate: 5,
        transition: { duration: 0.3 }
      }}
      whileTap={{ 
        scale: 0.95,
        rotate: -5,
        transition: { duration: 0.2 }
      }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ 
            duration: 0.4,
            ease: "easeInOut"
          }}
          className="text-white"
        >
          {theme === "light" ? (
            <Moon className={iconSizes[size]} />
          ) : (
            <Sun className={iconSizes[size]} />
          )}
        </motion.div>
      </AnimatePresence>
      
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-white/20"
        initial={{ scale: 0, opacity: 0 }}
        animate={isAnimating ? { scale: 1.5, opacity: 0 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </motion.button>
  )
} 