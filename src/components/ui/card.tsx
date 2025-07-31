import React from 'react'
import { motion } from 'framer-motion'

// Fix: Provide a fallback for the missing 'cn' utility
function cn(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(' ')
}

interface BaseCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

interface AnimatedCardProps extends BaseCardProps {
  animation: true
}

interface StaticCardProps extends BaseCardProps {
  animation?: false
}

type CardProps = AnimatedCardProps | StaticCardProps

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = true, animation = true, ...props }, ref) => {
    const cardClasses = cn(
      "bg-white/80 dark:bg-white/10 backdrop-blur rounded-2xl p-8 shadow-lg",
      hover && "hover:shadow-xl transition-all duration-300",
      className
    )

    if (animation) {
      return (
        <motion.div
          ref={ref}
          className={cardClasses}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={hover ? { y: -8, scale: 1.02 } : undefined}
        >
          {children}
        </motion.div>
      )
    }

    return (
      <div ref={ref} className={cardClasses}>
        {children}
      </div>
    )
  }
)
Card.displayName = "Card"

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("mb-4", className)} {...props}>
        {children}
      </div>
    )
  }
)
CardHeader.displayName = "CardHeader"

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("", className)} {...props}>
        {children}
      </div>
    )
  }
)
CardContent.displayName = "CardContent"

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("mt-4 pt-4 border-t border-gray-200 dark:border-gray-700", className)} {...props}>
        {children}
      </div>
    )
  }
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardContent, CardFooter } 