interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'teal' | 'white' | 'gray'
  className?: string
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'teal',
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const colorClasses = {
    teal: 'border-teal-200 border-t-teal-600',
    white: 'border-white/20 border-t-white',
    gray: 'border-gray-200 border-t-gray-600'
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div 
        className={`${sizeClasses[size]} border-4 rounded-full animate-spin ${colorClasses[color]}`}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
} 