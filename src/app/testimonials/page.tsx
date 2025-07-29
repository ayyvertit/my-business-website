import { Star } from 'lucide-react'
import { Header } from '../../components/marketing/Header'
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
    <main className="bg-sand-50 text-gray-900 font-sans">
      <Header />
      
      {/* Testimonials Section */}
      <section className="bg-sand-200 py-20 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-sand-300 to-sand-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">⭐</span>
            </div>
            <h1 className="text-4xl font-serif mb-6 text-gray-800">What Clients Say</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Real experiences from satisfied clients across the Crystal Coast
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm p-8 rounded-xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-sand-200/50">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <span className="text-2xl">{testimonial.emoji}</span>
                </div>
                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-sand-200 to-sand-300 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-sand-700">{testimonial.name.charAt(0)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-white/80 p-8 rounded-xl inline-block">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Ready to Experience It Yourself?</h2>
              <a
                href="/booking"
                className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-8 rounded-xl text-lg shadow-lg transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Book Your Session
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 