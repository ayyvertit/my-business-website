"use client"

import { useTheme } from "@/lib/hooks/useTheme"
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import { ResponsiveHeader } from "@/components/marketing/ResponsiveHeader"
import { Footer } from "@/components/marketing/Footer"

export default function TestThemePage() {
  const { theme, mounted, toggleTheme, setTheme, isDark, isLight } = useTheme()

  return (
    <>
      <ResponsiveHeader />
      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Theme Testing Page</h1>
          
          <div className="grid gap-8">
            {/* Theme Status */}
            <section className="bg-[var(--card)] p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Theme Status</h2>
              <div className="space-y-2">
                <p><strong>Current Theme:</strong> {theme}</p>
                <p><strong>Mounted:</strong> {mounted ? "Yes" : "No"}</p>
                <p><strong>Is Dark:</strong> {isDark ? "Yes" : "No"}</p>
                <p><strong>Is Light:</strong> {isLight ? "Yes" : "No"}</p>
              </div>
            </section>

            {/* Theme Controls */}
            <section className="bg-[var(--card)] p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Theme Controls</h2>
              <div className="flex flex-wrap gap-4 items-center">
                <ThemeToggle size="lg" />
                <button
                  onClick={toggleTheme}
                  className="px-4 py-2 bg-[var(--sea-glass)] text-white rounded-lg hover:bg-[var(--coral-blush)] transition-colors"
                >
                  Toggle Theme
                </button>
                <button
                  onClick={() => setTheme("light")}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Force Light
                </button>
                <button
                  onClick={() => setTheme("dark")}
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  Force Dark
                </button>
              </div>
            </section>

            {/* Color Test */}
            <section className="bg-[var(--card)] p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Color Test</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-[var(--white-sand)] p-4 rounded-lg border">
                  <p className="font-semibold">White Sand</p>
                  <p className="text-sm text-[var(--coastal-mist)]">Background</p>
                </div>
                <div className="bg-[var(--ocean-foam)] p-4 rounded-lg border">
                  <p className="font-semibold">Ocean Foam</p>
                  <p className="text-sm text-[var(--coastal-mist)]">Secondary</p>
                </div>
                <div className="bg-[var(--sea-glass)] p-4 rounded-lg border">
                  <p className="font-semibold text-white">Sea Glass</p>
                  <p className="text-sm text-white/80">Primary</p>
                </div>
                <div className="bg-[var(--coral-blush)] p-4 rounded-lg border">
                  <p className="font-semibold text-white">Coral Blush</p>
                  <p className="text-sm text-white/80">Accent</p>
                </div>
              </div>
            </section>

            {/* Cross-tab Test */}
            <section className="bg-[var(--card)] p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Cross-tab Test</h2>
              <p className="mb-4">
                Open this page in multiple tabs and change the theme in one tab. 
                The theme should sync across all tabs automatically.
              </p>
              <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="text-yellow-800 dark:text-yellow-200">
                  <strong>Test Instructions:</strong>
                </p>
                <ol className="list-decimal list-inside mt-2 text-yellow-800 dark:text-yellow-200">
                  <li>Open this page in a new tab</li>
                  <li>Change the theme in one tab</li>
                  <li>Check if the theme changes in the other tab</li>
                  <li>Try refreshing both tabs to ensure persistence</li>
                </ol>
              </div>
            </section>

            {/* System Theme Test */}
            <section className="bg-[var(--card)] p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">System Theme Test</h2>
              <p className="mb-4">
                Change your system theme (light/dark mode) and see if the website 
                automatically follows it (when no theme is manually set).
              </p>
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
                <p className="text-blue-800 dark:text-blue-200">
                  <strong>Note:</strong> This only works when no theme has been manually selected.
                  Once you click a theme toggle, it will remember your preference.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 