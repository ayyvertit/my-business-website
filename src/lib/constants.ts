// Site Configuration
export const SITE_CONFIG = {
    name: "Crystal Coast Concierge Massage",
    description: "Mobile massage experiences on the Crystal Coast — where luxury meets convenience.",
    url: "https://crystalcoastconcierge.com",
    phone: "+1 (555) 123-4567",
    email: "info@crystalcoastconcierge.com",
    address: "Crystal Coast, North Carolina"
} as const

// Service Areas
export const SERVICE_AREAS = [
    "Atlantic Beach",
    "Emerald Isle",
    "Morehead City",
    "Beaufort",
    "Newport",
    "Cedar Point",
    "Swansboro",
    "Cape Carteret"
] as const

// Services
export const SERVICES = [
    {
        id: "swedish",
        title: "Swedish Massage",
        description: "A gentle, full-body massage to ease stress and promote relaxation.",
        duration: "60-90 minutes",
        price: "$120-180"
    },
    {
        id: "therapeutic",
        title: "Therapeutic Massage",
        description: "Deep tissue work for chronic pain and muscle tension relief.",
        duration: "60-90 minutes",
        price: "$140-200"
    },
    {
        id: "tmj-cupping",
        title: "TMJ/MediCupping",
        description: "Specialized treatment for jaw tension and cupping therapy.",
        duration: "45-60 minutes",
        price: "$100-140"
    },
    {
        id: "hot-stone",
        title: "Hot Stone Massage",
        description: "Heated stones for deep muscle relaxation and stress relief.",
        duration: "75-90 minutes",
        price: "$160-220"
    },
    {
        id: "aromatherapy",
        title: "Aromatherapy Massage",
        description: "Essential oils enhance the therapeutic benefits of massage.",
        duration: "60-75 minutes",
        price: "$130-190"
    },
    {
        id: "sports",
        title: "Sports Massage",
        description: "Targeted techniques for athletes and active individuals.",
        duration: "45-75 minutes",
        price: "$110-170"
    }
] as const

// Testimonials
export const TESTIMONIALS = [
    {
        id: 1,
        quote: "The best massage experience I've ever had! Felt like a dream.",
        author: "Alex R.",
        location: "Atlantic Beach",
        rating: 5
    },
    {
        id: 2,
        quote: "Professional, relaxing, and convenient. Perfect for vacation rentals.",
        author: "Sarah M.",
        location: "Emerald Isle",
        rating: 5
    },
    {
        id: 3,
        quote: "Amazing service! Came to our boat and made everything so easy.",
        author: "Mike T.",
        location: "Morehead City",
        rating: 5
    }
] as const

// Navigation
export const NAVIGATION = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Service Area", href: "/service-area" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "About", href: "/about" },
    { name: "Book Now", href: "/booking" }
] as const

// Social Media
export const SOCIAL_LINKS = [
    { name: "Facebook", href: "#", icon: "facebook" },
    { name: "Instagram", href: "#", icon: "instagram" },
    { name: "Google Reviews", href: "#", icon: "google" }
] as const 