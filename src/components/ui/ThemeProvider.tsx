"use client"

import { useEffect } from "react"

interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  useEffect(() => {
    // Prevent theme flashing by setting theme immediately
    const getInitialTheme = (): "light" | "dark" => {
      if (typeof window === "undefined") return "light"
      
      const stored = localStorage.getItem("theme") as "light" | "dark" | null
      if (stored) return stored
      
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }

    const theme = getInitialTheme()
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [])

  return <>{children}</>
} 