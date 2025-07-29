import { Variants } from "framer-motion"

// Fade in animations
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
}

// Scale animations
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
}

export const scaleInUp: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 }
}

// Stagger animations for lists
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

// Hover animations
export const hoverScale: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.02 }
}

export const hoverLift: Variants = {
  initial: { y: 0 },
  hover: { y: -4 }
}

export const hoverGlow: Variants = {
  initial: { boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)" },
  hover: { 
    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1), 0 0 0 1px rgb(255 255 255 / 0.05)"
  }
}

// Floating animations for blobs
export const floatSlow: Variants = {
  animate: {
    y: [0, -20, 0],
    x: [0, 20, 0],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export const floatMedium: Variants = {
  animate: {
    y: [0, -15, 0],
    x: [0, 25, 0],
    transition: {
      duration: 30,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export const floatFast: Variants = {
  animate: {
    y: [0, -25, 0],
    x: [0, 30, 0],
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// Blob animations
export const blob1: Variants = {
  animate: {
    scale: [1, 1.1, 0.9, 1],
    x: [0, 40, 30, 0],
    y: [0, -30, 20, 0],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export const blob2: Variants = {
  animate: {
    scale: [1, 0.9, 1.1, 1],
    x: [0, 35, 50, 0],
    y: [0, 30, -15, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export const blob3: Variants = {
  animate: {
    scale: [1, 1.2, 0.8, 1],
    x: [0, 45, 35, 0],
    y: [0, -25, 40, 0],
    transition: {
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// Spring configurations
export const springConfig = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30
}

export const softSpring = {
  type: "spring" as const,
  stiffness: 200,
  damping: 40
}

export const bouncySpring = {
  type: "spring" as const,
  stiffness: 400,
  damping: 17
}

// Transition configurations
export const smoothTransition = {
  duration: 0.5,
  ease: "easeOut"
}

export const fastTransition = {
  duration: 0.2,
  ease: "easeOut"
}

export const slowTransition = {
  duration: 0.8,
  ease: "easeInOut"
} 

// Header-specific animations
export const themeToggle: Variants = {
  initial: { scale: 1, opacity: 1 },
  hover: { scale: 1.02, opacity: 0.8 },
  tap: { scale: 0.98, opacity: 1 }
}

export const navItem: Variants = {
  initial: { y: 0 },
  hover: { y: -2 }
}

export const buttonHover: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
}

export const cardHover: Variants = {
  initial: { y: 0, scale: 1 },
  hover: { y: -8, scale: 1.02 }
} 