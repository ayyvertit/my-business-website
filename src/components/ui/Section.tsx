import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  animation?: boolean
  delay?: number
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, as: Component = 'section', animation = true, delay = 0, ...props }, ref) => {
    const sectionClasses = cn(
      'py-16 sm:py-20 lg:py-32',
      className
    )

    if (animation) {
      return (
        <motion.section
          ref={ref}
          className={sectionClasses}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay }}
          {...props}
        >
          {children}
        </motion.section>
      )
    }

    return (
      <Component ref={ref} className={sectionClasses} {...props}>
        {children}
      </Component>
    )
  }
)
Section.displayName = "Section"

export { Section } 