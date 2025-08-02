"use client"

import { useState, useEffect } from "react"

export type Theme = "light" | "dark"

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Get initial theme
    const getInitialTheme = (): Theme => {
      if (typeof window === "undefined") return "light"
      
      const stored = localStorage.getItem("theme") as Theme | null
      if (stored) return stored
      
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }

    const initialTheme = getInitialTheme()
    setTheme(initialTheme)

    // Listen for theme changes from other instances
    const handleThemeChange = (event: CustomEvent) => {
      const newTheme = event.detail.theme as Theme
      setTheme(newTheme)
    }

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "theme" && event.newValue) {
        const newTheme = event.newValue as Theme
        setTheme(newTheme)
      }
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? "dark" : "light"
      // Only update if no stored preference
      if (!localStorage.getItem("theme")) {
        setTheme(newTheme)
      }
    }

    // Add listeners
    window.addEventListener("themeChange", handleThemeChange as EventListener)
    window.addEventListener("storage", handleStorageChange)
    mediaQuery.addEventListener("change", handleSystemThemeChange)

    return () => {
      window.removeEventListener("themeChange", handleThemeChange as EventListener)
      window.removeEventListener("storage", handleStorageChange)
      mediaQuery.removeEventListener("change", handleSystemThemeChange)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    
    // Update localStorage
    localStorage.setItem("theme", newTheme)
    
    // Update DOM
    document.documentElement.classList.toggle("dark", newTheme === "dark")
    
    // Dispatch custom event for cross-tab synchronization
    window.dispatchEvent(new CustomEvent("themeChange", { detail: { theme: newTheme } }))
  }

  const setThemeMode = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
    window.dispatchEvent(new CustomEvent("themeChange", { detail: { theme: newTheme } }))
  }

  return {
    theme,
    mounted,
    toggleTheme,
    setTheme: setThemeMode,
    isDark: theme === "dark",
    isLight: theme === "light"
  }
} 