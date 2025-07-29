import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Stripe-inspired variants
        primary: "bg-[var(--sea-glass)] text-white hover:bg-[var(--sea-glass)]/90 shadow-md hover:shadow-lg transition-all duration-300 focus-visible:ring-[var(--sea-glass)] rounded-xl",
        secondaryOutline: "border-2 border-[var(--coral-blush)] text-[var(--coral-blush)] hover:bg-[var(--coral-blush)] hover:text-white transition-all duration-300 rounded-xl",
        gradient: "bg-gradient-to-r from-[var(--sea-glass)] to-[var(--coral-blush)] text-white hover:from-[var(--sea-glass)]/90 hover:to-[var(--coral-blush)]/90 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden rounded-xl",
        glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-soft hover:shadow-lg-glow rounded-xl",
        shimmer: "bg-gradient-to-r from-[var(--sea-glass)] to-[var(--coral-blush)] text-white relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent rounded-xl",
        // Apple-inspired minimal
        minimal: "bg-transparent text-[var(--deep-tide)] hover:bg-[var(--deep-tide)]/5 transition-colors duration-200 rounded-xl",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-4 py-2 text-sm",
        md: "h-11 px-5 py-2.5 text-sm",
        lg: "h-14 px-8 py-4 text-base",
        xl: "h-16 px-10 py-5 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <motion.div
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="relative"
      >
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
        {/* Shimmer effect for gradient buttons */}
        {variant === "gradient" && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        )}
      </motion.div>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants } 