"use client"

import { motion } from "framer-motion"

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Ocean base gradient - deep to shallow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--deep-tide)]/40 via-[var(--sea-glass)]/30 to-[var(--ocean-foam)]/50" />
      
      {/* Multiple wave systems for realistic ocean movement */}
      <div className="absolute inset-0">
        {/* Deep ocean swell - slow and large */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[var(--deep-tide)]/50 to-transparent"
          animate={{
            y: [0, -40, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Mid-depth waves - medium speed */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[var(--sea-glass)]/60 to-transparent"
          animate={{
            y: [0, -30, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        {/* Shallow waves - faster and breaking */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[var(--ocean-foam)]/70 to-transparent"
          animate={{
            y: [0, -25, 0],
            opacity: [0.6, 0.9, 0.6]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        />
        
        {/* Breaking wave foam */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/80 to-transparent"
          animate={{
            y: [0, -12, 0],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      {/* Individual wave crests that roll naturally */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 bg-gradient-to-t from-white/60 to-transparent rounded-full"
          style={{
            left: `${(i * 12) + 5}%`,
            width: `${80 + Math.sin(i) * 40}px`,
            height: `${12 + Math.cos(i) * 6}px`,
            transform: `translateX(${Math.sin(i * 0.3) * 20}px)`
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.4, 0.9, 0.4],
            scaleX: [1, 1.4, 1],
            scaleY: [1, 1.3, 1]
          }}
          transition={{
            duration: 6 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.6
          }}
        />
      ))}
      
      {/* Breaking wave sections with foam */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`breaking-${i}`}
          className="absolute bottom-0 bg-white/70 rounded-full"
          style={{
            left: `${(i * 20) + 8}%`,
            width: `${100 + Math.sin(i) * 50}px`,
            height: `${8 + Math.cos(i) * 4}px`
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
            scaleX: [1, 1.6, 1],
            scaleY: [1, 1.4, 1]
          }}
          transition={{
            duration: 8 + i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.2
          }}
        />
      ))}
      
      {/* Foam particles that spread naturally */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={`foam-${i}`}
          className="absolute bottom-0 bg-white/70 rounded-full"
          style={{
            left: `${(i * 3.7 + 2) % 100}%`,
            bottom: `${(i * 2.3 + 1) % 30}%`,
            width: `${3 + (i * 0.24) % 6}px`,
            height: `${3 + (i * 0.18) % 6}px`
          }}
          animate={{
            y: [0, -25 - (i * 0.6) % 15, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.6, 1.3, 0.6],
            x: [0, Math.sin(i) * 15, 0]
          }}
          transition={{
            duration: 4 + (i * 0.12) % 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: (i * 0.2) % 5
          }}
        />
      ))}
      
      {/* Sand texture and beach gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[var(--white-sand)]/95 via-[var(--white-sand)]/70 to-transparent" />
      
      {/* Horizon line with depth */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--deep-tide)]/50 to-transparent" />
      
      {/* Sky reflection and atmosphere */}
      <div className="absolute top-0 left-0 right-0 h-56 bg-gradient-to-b from-[var(--ocean-foam)]/40 via-[var(--ocean-foam)]/20 to-transparent" />
      
      {/* Subtle atmospheric particles for depth */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`atmosphere-${i}`}
          className="absolute bg-white/30 rounded-full"
          style={{
            top: `${(i * 2.8 + 1) % 60}%`,
            left: `${(i * 4.7 + 2) % 100}%`,
            width: `${1 + (i * 0.15) % 3}px`,
            height: `${1 + (i * 0.12) % 3}px`
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.5, 0.2],
            x: [0, Math.sin(i) * 8, 0]
          }}
          transition={{
            duration: 10 + (i * 0.25) % 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: (i * 0.3) % 6
          }}
        />
      ))}
    </div>
  )
} 