"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface Preferences {
    pressure: "light" | "medium" | "deep"
    focusAreas: string[]
    scentPreference: string
}

const focusAreaOptions = [
    "Neck & Shoulders",
    "Back & Spine",
    "Arms & Hands",
    "Legs & Feet",
    "Full Body",
    "Stress Relief",
    "Sports Recovery"
]

const scentOptions = [
    "Lavender (Relaxing)",
    "Eucalyptus (Invigorating)",
    "Peppermint (Refreshing)",
    "Chamomile (Calming)",
    "Unscented",
    "Custom Blend"
]

export default function PreferencesForm() {
    const [preferences, setPreferences] = useState<Preferences>({
        pressure: "medium",
        focusAreas: [],
        scentPreference: "Lavender (Relaxing)"
    })
    const [isSaving, setIsSaving] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    const handleFocusAreaToggle = (area: string) => {
        setPreferences(prev => ({
            ...prev,
            focusAreas: prev.focusAreas.includes(area)
                ? prev.focusAreas.filter(a => a !== area)
                : [...prev.focusAreas, area]
        }))
    }

    const handleSave = async () => {
        setIsSaving(true)

        try {
            const response = await fetch('/api/preferences', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(preferences),
            })

            if (response.ok) {
                setShowSuccess(true)
                setTimeout(() => setShowSuccess(false), 3000)
            }
        } catch (error) {
            console.error('Error saving preferences:', error)
        } finally {
            setIsSaving(false)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/90 dark:bg-[var(--deep-tide)]/90 backdrop-blur rounded-2xl shadow-xl border border-[var(--coastal-mist)] dark:border-[var(--ocean-foam)] p-6"
        >
            <h2 className="text-2xl font-serif font-semibold text-[var(--deep-tide)] dark:text-white mb-6">
                Massage Preferences
            </h2>

            <div className="space-y-6">
                {/* Pressure Preference */}
                <div>
                    <label className="block text-[var(--deep-tide)] dark:text-white font-medium mb-3">
                        Preferred Pressure Level
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                        {(["light", "medium", "deep"] as const).map((pressure) => (
                            <button
                                key={pressure}
                                onClick={() => setPreferences(prev => ({ ...prev, pressure }))}
                                className={`py-3 px-4 rounded-lg border transition-all ${preferences.pressure === pressure
                                        ? "bg-[var(--deep-tide)] text-white border-[var(--deep-tide)]"
                                        : "bg-white/50 dark:bg-[var(--ocean-foam)]/20 border-[var(--coastal-mist)] dark:border-[var(--ocean-foam)] text-[var(--deep-tide)] dark:text-white hover:bg-[var(--ocean-foam)]/10"
                                    }`}
                            >
                                {pressure.charAt(0).toUpperCase() + pressure.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Focus Areas */}
                <div>
                    <label className="block text-[var(--deep-tide)] dark:text-white font-medium mb-3">
                        Focus Areas (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {focusAreaOptions.map((area) => (
                            <button
                                key={area}
                                onClick={() => handleFocusAreaToggle(area)}
                                className={`py-2 px-3 rounded-lg border text-sm transition-all ${preferences.focusAreas.includes(area)
                                        ? "bg-[var(--deep-tide)] text-white border-[var(--deep-tide)]"
                                        : "bg-white/50 dark:bg-[var(--ocean-foam)]/20 border-[var(--coastal-mist)] dark:border-[var(--ocean-foam)] text-[var(--deep-tide)] dark:text-white hover:bg-[var(--ocean-foam)]/10"
                                    }`}
                            >
                                {area}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Scent Preference */}
                <div>
                    <label className="block text-[var(--deep-tide)] dark:text-white font-medium mb-3">
                        Scent Preference
                    </label>
                    <select
                        value={preferences.scentPreference}
                        onChange={(e) => setPreferences(prev => ({ ...prev, scentPreference: e.target.value }))}
                        className="w-full py-3 px-4 bg-white/50 dark:bg-[var(--ocean-foam)]/20 border border-[var(--coastal-mist)] dark:border-[var(--ocean-foam)] rounded-lg text-[var(--deep-tide)] dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--deep-tide)] dark:focus:ring-[var(--ocean-foam)]"
                    >
                        {scentOptions.map((scent) => (
                            <option key={scent} value={scent}>
                                {scent}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                    <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className="bg-[var(--deep-tide)] hover:bg-[var(--deep-tide)]/90 disabled:opacity-50 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2"
                    >
                        {isSaving ? (
                            <>
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                <span>Saving...</span>
                            </>
                        ) : (
                            <span>Save Preferences</span>
                        )}
                    </button>
                </div>

                {/* Success Message */}
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 px-4 py-3 rounded-lg"
                    >
                        ✅ Preferences saved successfully!
                    </motion.div>
                )}
            </div>
        </motion.div>
    )
} 