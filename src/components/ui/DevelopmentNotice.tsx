"use client"

import { motion } from "framer-motion"

export function DevelopmentNotice() {
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