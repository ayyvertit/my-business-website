"use client"

import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"

interface DevelopmentNoticeProps {
    variant?: "home" | "other"
}

export function DevelopmentNotice({ variant = "home" }: DevelopmentNoticeProps) {
    if (variant === "home") {
        return (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-md mx-4"
            >
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg shadow-lg backdrop-blur-sm">
                    <div className="flex items-start gap-3 p-4">
                        <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                        <div className="text-sm">
                            <p className="font-medium text-amber-800 dark:text-amber-200 mb-1">
                                🚧 Website Under Development
                            </p>
                            <p className="text-amber-700 dark:text-amber-300 leading-relaxed">
                                This website is currently being built. Some features may not be fully functional yet.
                                Thank you for your patience!
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        )
    }

    // Subtle version for other pages
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="fixed bottom-4 right-4 z-40"
        >
            <div className="bg-amber-50/80 dark:bg-amber-900/10 border border-amber-200/50 dark:border-amber-700/50 rounded-full px-3 py-1.5 shadow-sm backdrop-blur-sm">
                <p className="text-xs text-amber-700 dark:text-amber-300 font-medium">
                    🚧 Under Development
                </p>
            </div>
        </motion.div>
    )
} 