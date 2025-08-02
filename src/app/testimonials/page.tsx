
import { ResponsiveHeader } from '../../components/marketing/ResponsiveHeader'
import Footer from '../../components/Footer'

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'Emerald Isle',
      rating: 5,
      text: 'Amazing experience! Cameron brought the spa to our vacation rental. Professional, relaxing, and so convenient.',
      emoji: '🏖️'
    },
    {
      name: 'Michael R.',
      location: 'Atlantic Beach',
      rating: 5,
      text: 'The best massage I\'ve ever had. The convenience of having it at home made it even better. Highly recommend!',
      emoji: '🌊'
    },
    {
      name: 'Jennifer L.',
      location: 'Morehead City',
      rating: 5,
      text: 'Perfect for our boat trip! Cameron set up right on the dock. Professional service and wonderful massage.',
      emoji: '⚓'
    },
    {
      name: 'David K.',
      location: 'Swansboro',
      rating: 5,
      text: 'Best massage I\'ve ever had at my Emerald Isle rental. Cameron brings a sense of peace and professionalism that\'s unmatched.',
      emoji: '🎣'
    }
  ];

  return (
    <>
             <ResponsiveHeader />
      <main className="min-h-screen bg-[var(--white-sand)] dark:bg-[var(--deep-tide)]">
        <div className="max-w-6xl mx-auto px-8 py-24">
          <h1 className="text-4xl font-bold text-[var(--deep-tide)] dark:text-white mb-8">
            Client Testimonials
          </h1>
          <p className="text-lg text-[var(--coastal-mist)] mb-12">
            Hear what our clients have to say about their massage experiences.
          </p>
          {/* Add testimonials content here */}
        </div>
      </main>
    </>
  )
} 