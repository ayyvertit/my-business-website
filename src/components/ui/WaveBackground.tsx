"use client"

import { motion } from "framer-motion"

export function WaveBackground() {
  return (
    <div className="absolute inset-x-0 bottom-0 z-0">
      <svg
        className="w-full h-auto"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Multiple wave layers for depth */}
        <motion.path
          d="M0,150 C300,100 600,200 900,150 C1050,125 1200,150 1200,150 L1200,200 L0,200 Z"
          fill="url(#waveGradient1)"
          initial={{ opacity: 0.6 }}
          animate={{ 
            opacity: [0.6, 0.8, 0.6],
            d: [
              "M0,150 C300,100 600,200 900,150 C1050,125 1200,150 1200,150 L1200,200 L0,200 Z",
              "M0,140 C300,110 600,180 900,140 C1050,135 1200,140 1200,140 L1200,200 L0,200 Z",
              "M0,150 C300,100 600,200 900,150 C1050,125 1200,150 1200,150 L1200,200 L0,200 Z"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.path
          d="M0,160 C400,120 700,180 1000,160 C1100,150 1200,160 1200,160 L1200,200 L0,200 Z"
          fill="url(#waveGradient2)"
          initial={{ opacity: 0.4 }}
          animate={{ 
            opacity: [0.4, 0.6, 0.4],
            d: [
              "M0,160 C400,120 700,180 1000,160 C1100,150 1200,160 1200,160 L1200,200 L0,200 Z",
              "M0,150 C400,130 700,170 1000,150 C1100,145 1200,150 1200,150 L1200,200 L0,200 Z",
              "M0,160 C400,120 700,180 1000,160 C1100,150 1200,160 1200,160 L1200,200 L0,200 Z"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.path
          d="M0,170 C500,140 800,190 1100,170 C1150,165 1200,170 1200,170 L1200,200 L0,200 Z"
          fill="url(#waveGradient3)"
          initial={{ opacity: 0.3 }}
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            d: [
              "M0,170 C500,140 800,190 1100,170 C1150,165 1200,170 1200,170 L1200,200 L0,200 Z",
              "M0,160 C500,150 800,180 1100,160 C1150,155 1200,160 1200,160 L1200,200 L0,200 Z",
              "M0,170 C500,140 800,190 1100,170 C1150,165 1200,170 1200,170 L1200,200 L0,200 Z"
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* Gradients for wave colors */}
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--sea-glass)" stopOpacity="0.6" />
            <stop offset="50%" stopColor="var(--ocean-foam)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--coral-blush)" stopOpacity="0.6" />
          </linearGradient>
          
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--ocean-foam)" stopOpacity="0.4" />
            <stop offset="50%" stopColor="var(--coastal-mist)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--sea-glass)" stopOpacity="0.4" />
          </linearGradient>
          
          <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--deep-tide)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="var(--ocean-foam)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--coastal-mist)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
} 