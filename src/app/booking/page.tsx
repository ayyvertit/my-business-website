import { Phone, Mail, Clock, Shield } from 'lucide-react'
import { Header } from '../../components/marketing/Header'
import Footer from '../../components/Footer'
import ContactForm from '../../components/ContactForm'

export default function BookingPage() {
  return (
    <main className="bg-sand-50 text-gray-900 font-sans">
      <Header />
      
      {/* Booking Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-teal-600 to-teal-700 text-white min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif mb-6">Book a Session</h1>
          <p className="text-xl mb-8 opacity-90">Ready to experience luxury massage therapy at your location?</p>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-serif font-semibold mb-6">Booking Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 text-white rounded-full flex items-center justify-center font-semibold text-lg">1</div>
                    <div>
                      <h4 className="font-semibold text-white text-lg">Contact Us</h4>
                      <p className="text-teal-100">Fill out the form or call us to discuss your needs and schedule</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 text-white rounded-full flex items-center justify-center font-semibold text-lg">2</div>
                    <div>
                      <h4 className="font-semibold text-white text-lg">Confirm Details</h4>
                      <p className="text-teal-100">We'll confirm location, service type, and timing within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 text-white rounded-full flex items-center justify-center font-semibold text-lg">3</div>
                    <div>
                      <h4 className="font-semibold text-white text-lg">Enjoy Your Session</h4>
                      <p className="text-teal-100">We arrive 10-15 minutes early to set up and create a relaxing environment</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-xl font-serif font-semibold mb-6">What to Expect</h3>
                <ul className="space-y-3 text-teal-50">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Professional massage table and equipment</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Premium massage oils and lotions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Relaxing ambient music</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Complete setup and cleanup</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Flexible scheduling options</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center space-x-3 text-teal-100">
              <Phone className="w-6 h-6" />
              <span className="font-semibold">(252) 555-0123</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-teal-100">
              <Mail className="w-6 h-6" />
              <span className="font-semibold">cameron@crystalcoastconcierge.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-teal-100">
              <Clock className="w-6 h-6" />
              <span className="font-semibold">By Appointment Only</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 