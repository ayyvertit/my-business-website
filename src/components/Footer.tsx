import { Phone, Mail, MapPin, Clock, Shield, Award, Sparkles, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden" role="contentinfo">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-teal-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-500/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-purple-500/10 rounded-full animate-ping"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-8 group">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
              </div>
              <div>
                <h3 className="text-3xl font-bold group-hover:text-teal-300 transition-colors duration-300">Crystal Coast Concierge</h3>
                <p className="text-gray-300 text-lg font-medium">Luxury Massage Therapy</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-lg text-lg">
              Premium in-home massage therapy delivered to your doorstep, dock, or vacation rental.
              Experience luxury wellness in the comfort of your own space on North Carolina&apos;s stunning Crystal Coast.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-3 text-gray-300 group">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-5 h-5 text-teal-400" />
                </div>
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 group">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-5 h-5 text-teal-400" />
                </div>
                <span className="text-sm font-medium">5-Star Rated</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2 group">
                <div className="w-2 h-2 bg-teal-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span className="group-hover:text-white transition-colors duration-300">Swedish Massage</span>
              </li>
              <li className="flex items-center space-x-2 group">
                <div className="w-2 h-2 bg-teal-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span className="group-hover:text-white transition-colors duration-300">Deep Tissue Massage</span>
              </li>
              <li className="flex items-center space-x-2 group">
                <div className="w-2 h-2 bg-teal-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span className="group-hover:text-white transition-colors duration-300">Custom Therapeutic</span>
              </li>
              <li className="flex items-center space-x-2 group">
                <div className="w-2 h-2 bg-teal-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span className="group-hover:text-white transition-colors duration-300">Couples Massage</span>
              </li>
              <li className="flex items-center space-x-2 group">
                <div className="w-2 h-2 bg-teal-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span className="group-hover:text-white transition-colors duration-300">Mobile Service</span>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Contact & Hours</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Phone className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <p className="font-semibold text-white group-hover:text-teal-300 transition-colors duration-300">(252) 555-0123</p>
                  <p className="text-sm">Call or text to book</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Mail className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <p className="font-semibold text-white group-hover:text-teal-300 transition-colors duration-300">cameron@crystalcoastconcierge.com</p>
                  <p className="text-sm">Email inquiries</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Clock className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <p className="font-semibold text-white group-hover:text-teal-300 transition-colors duration-300">By Appointment Only</p>
                  <p className="text-sm">Flexible scheduling available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <h4 className="text-xl font-bold mb-8 text-center text-white">Service Areas</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 text-center">
            {[
              'Emerald Isle',
              'Atlantic Beach',
              'Morehead City',
              'Beaufort',
              'Newport',
              'Cape Carteret',
              'Swansboro',
              'Harkers Island'
            ].map((city) => (
              <div key={city} className="group">
                <div className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300 font-medium">
                  {city}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 relative z-10">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} Crystal Coast Concierge Massage. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Cameron Averitt, LMBT | NC License #22913
              </p>
            </div>
            <div className="flex space-x-8 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-teal-400 transition-colors duration-300 font-medium">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-teal-400 transition-colors duration-300 font-medium">
                Terms of Service
              </a>
              <a href="#accessibility" className="hover:text-teal-400 transition-colors duration-300 font-medium">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 