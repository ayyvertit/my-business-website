"use client"

import { motion } from "framer-motion"

interface SectionDividerProps {
  variant?: "wave" | "blob" | "simple"
  className?: string
}

export function SectionDivider({ variant = "wave", className = "" }: SectionDividerProps) {
  // Enhanced wave paths with more organic curves
  const wavePath = "M0,256L80,245.3C160,235,320,213,480,218.7C640,224,800,256,960,250.7C1120,245,1280,203,1360,181.3L1440,160V320H0Z"
  const blobPath = "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"

  return (
    <motion.div
      className={`h-32 w-full relative z-0 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/50 to-bg dark:via-bg/50 dark:to-bg" />
      
      {/* Animated SVG shape with enhanced motion */}
      <svg 
        className="absolute top-0 left-0 w-full h-full" 
        viewBox="0 0 1440 320" 
        preserveAspectRatio="none"
      >
        <motion.path
          fill="url(#ocean-gradient)"
          fillOpacity="0.8"
          d={variant === "wave" ? wavePath : blobPath}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ 
            pathLength: 1, 
            opacity: 1,
            transition: { 
              pathLength: { duration: 2, ease: "easeInOut" },
              opacity: { duration: 1, delay: 0.5 }
            }
          }}
          viewport={{ once: true }}
        />
        
        {/* Enhanced gradient definitions */}
        <defs>
          <linearGradient id="ocean-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--sea-glass)" stopOpacity="0.8" />
            <stop offset="25%" stopColor="var(--ocean-foam)" stopOpacity="0.6" />
            <stop offset="50%" stopColor="var(--coastal-mist)" stopOpacity="0.7" />
            <stop offset="75%" stopColor="var(--coral-blush)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--sea-glass)" stopOpacity="0.8" />
          </linearGradient>
          
          {/* Radial gradient for depth */}
          <radialGradient id="depth-gradient" cx="50%" cy="0%" r="100%">
            <stop offset="0%" stopColor="var(--sea-glass)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--deep-tide)" stopOpacity="0.1" />
          </radialGradient>
        </defs>
      </svg>
      
      {/* Enhanced floating particles with better motion */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-crystal-seaGlass rounded-full opacity-60"
        animate={{
          y: [0, -15, 0],
          x: [0, 8, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-1 h-1 bg-crystal-coralBlush rounded-full opacity-40"
        animate={{
          y: [0, -12, 0],
          x: [0, 6, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-crystal-oceanFoam rounded-full opacity-50"
        animate={{
          y: [0, -18, 0],
          x: [0, 10, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      
      {/* Additional subtle particles */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-crystal-deepTide rounded-full opacity-30"
        animate={{
          y: [0, -8, 0],
          x: [0, 4, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-0.5 h-0.5 bg-crystal-coralBlush rounded-full opacity-25"
        animate={{
          y: [0, -6, 0],
          x: [0, 3, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
    </motion.div>
  )
} 