// Service Types
export interface Service {
    id: string
    title: string
    description: string
    duration: string
    price: string
    features?: string[]
}

// Testimonial Types
export interface Testimonial {
    id: number
    quote: string
    author: string
    location: string
    rating: number
    date?: string
}

// Navigation Types
export interface NavigationItem {
    name: string
    href: string
    external?: boolean
}

// Social Media Types
export interface SocialLink {
    name: string
    href: string
    icon: string
}

// Contact Types
export interface ContactInfo {
    phone: string
    email: string
    address: string
    hours?: string
}

// Booking Types
export interface BookingForm {
    name: string
    email: string
    phone: string
    service: string
    date: string
    time: string
    location: string
    notes?: string
}

// SEO Types
export interface SEOData {
    title: string
    description: string
    keywords?: string[]
    ogImage?: string
    canonical?: string
}

// Animation Types
export interface AnimationProps {
    initial?: any
    animate?: any
    exit?: any
    transition?: any
    whileHover?: any
    whileTap?: any
    whileInView?: any
    viewport?: any
} 