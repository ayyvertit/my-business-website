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
        description: "A smooth, flowing full-body massage designed to reduce stress, enhance circulation, and promote deep relaxation.",
        duration: "60-120 minutes",
        price: "$115-180"
    },
    {
        id: "deep-tissue",
        title: "Deep Tissue Massage",
        description: "Focused, therapeutic work targeting deeper layers of muscle to relieve chronic tension, postural issues, and physical stress.",
        duration: "60-120 minutes",
        price: "$115-180"
    },
    {
        id: "custom-therapeutic",
        title: "Custom Therapeutic Massage",
        description: "A tailored blend of techniques adjusted to your unique needs — whether you're looking to unwind, recover, or focus on specific areas.",
        duration: "60-120 minutes",
        price: "$115-180"
    },
    {
        id: "couples",
        title: "Couples Massage",
        description: "Two consecutive 60-minute sessions for you and your partner, friend, or family member — perfect for romantic getaways or shared self-care.",
        duration: "60 minutes each",
        price: "$230 total"
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