import { Shield, Award, Heart } from 'lucide-react'
import { Header } from '../../components/marketing/Header'
import Footer from '../../components/Footer'

export default function AboutPage() {
  return (
    <main className="bg-sand-50 text-gray-900 font-sans">
      <Header />
      
      {/* About Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center bg-white/50 min-h-screen">
        <div className="w-40 h-40 bg-gradient-to-br from-sand-200 to-sand-300 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-6xl">👨‍⚕️</span>
        </div>
        <h1 className="text-4xl font-serif mb-6 text-gray-800">About Me</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          NC Licensed Massage Therapist based in Newport, NC. Craven Community College graduate, bringing spa-quality bodywork to your home, beach rental, or marina.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-sand-100 p-8 rounded-xl">
            <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Credentials</h2>
            <ul className="space-y-3 text-left">
              <li className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span>NC Licensed Massage Therapist</span>
              </li>
              <li className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span>Craven Community College Graduate</span>
              </li>
              <li className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span>Fully Licensed & Insured</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-sand-100 p-8 rounded-xl">
            <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">Why Concierge Service?</h2>
            <ul className="space-y-3 text-left">
              <li className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span>No travel time or parking hassles</span>
              </li>
              <li className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span>Relax in your own familiar environment</span>
              </li>
              <li className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span>Perfect for vacation rentals and boat owners</span>
              </li>
              <li className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span>Professional setup and cleanup included</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 