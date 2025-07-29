'use client'

import { useState } from 'react'
import { Star, Clock, ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  price: number
  duration: string
  description: string
  emoji: string
  colorTheme: 'teal' | 'sand' | 'lavender'
  onBookNow: () => void
}

export default function ServiceCard({
  title,
  price,
  duration,
  description,
  emoji,
  colorTheme,
  onBookNow
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const colorClasses = {
    teal: {
      gradient: 'from-teal-100 to-teal-200',
      text: 'from-teal-600 to-teal-700',
      button: 'from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700',
      accent: 'text-teal-600'
    },
    sand: {
      gradient: 'from-sand-100 to-sand-200',
      text: 'from-sand-600 to-sand-700',
      button: 'from-sand-500 to-sand-600 hover:from-sand-600 hover:to-sand-700',
      accent: 'text-sand-600'
    },
    lavender: {
      gradient: 'from-lavender-100 to-lavender-200',
      text: 'from-lavender-600 to-lavender-700',
      button: 'from-lavender-500 to-lavender-600 hover:from-lavender-600 hover:to-lavender-700',
      accent: 'text-lavender-600'
    }
  }

  const theme = colorClasses[colorTheme]

  return (
    <div
      className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-white/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      aria-labelledby={`service-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="text-center mb-6">
        <div 
          className={`w-20 h-20 bg-gradient-to-br ${theme.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
          aria-hidden="true"
        >
          <span className="text-3xl" role="img" aria-label={`${title} service icon`}>
            {emoji}
          </span>
        </div>
        <h3 
          id={`service-${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-2xl font-serif font-semibold text-gray-900 mb-2"
        >
          {title}
        </h3>
        <div className={`text-4xl font-bold bg-gradient-to-r ${theme.text} bg-clip-text text-transparent mb-2`}>
          ${price}
        </div>
        <div className="flex items-center justify-center space-x-1 text-gray-500 mb-4">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{duration}</span>
        </div>
      </div>
      
      <p className="text-gray-600 text-center mb-6 leading-relaxed">
        {description}
      </p>

      {/* Features List */}
      <div className="mb-6 space-y-2">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Star className={`w-4 h-4 ${theme.accent}`} />
          <span>Professional equipment included</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Star className={`w-4 h-4 ${theme.accent}`} />
          <span>Premium massage oils</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Star className={`w-4 h-4 ${theme.accent}`} />
          <span>Setup and cleanup included</span>
        </div>
      </div>

      <button 
        onClick={onBookNow}
        className={`w-full bg-gradient-to-r ${theme.button} text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 group/button`}
        aria-label={`Book ${title} session`}
      >
        <span>Book Now</span>
        <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-200" />
      </button>
    </div>
  )
} 