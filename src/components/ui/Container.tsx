import React from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  as?: React.ElementType
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, size = 'lg', as: Component = 'div', ...props }, ref) => {
    const sizeClasses = {
      sm: 'max-w-4xl',
      md: 'max-w-5xl', 
      lg: 'max-w-6xl',
      xl: 'max-w-7xl',
      full: 'max-w-none'
    }

    return (
      <Component
        ref={ref}
        className={cn(
          'mx-auto px-4 sm:px-6 lg:px-8',
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)
Container.displayName = "Container"

export { Container } 