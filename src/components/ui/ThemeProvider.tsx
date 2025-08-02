"use client"

import { useEffect } from "react"

interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  useEffect(() => {
    // Simple theme initialization
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

    const theme = getInitialTheme()
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [])

  return <>{children}</>
} 