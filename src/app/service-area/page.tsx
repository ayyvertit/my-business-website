import { MapPin } from 'lucide-react'
import { Header } from '../../components/marketing/Header'
import Footer from '../../components/Footer'

export default function ServiceAreaPage() {
  const locations = [
    { city: 'Emerald Isle', zip: '28594', emoji: '🏖️' },
    { city: 'Atlantic Beach', zip: '28512', emoji: '🌊' },
    { city: 'Swansboro', zip: '28584', emoji: '🎣' },
    { city: 'Morehead City', zip: '28557', emoji: '⚓' },
    { city: 'Trent Woods', zip: '28562', emoji: '🏘️' },
  ];

  return (
    <main className="bg-sand-50 text-gray-900 font-sans">
      <Header />
      
      {/* Service Area Section */}
      <section className="py-20 px-6 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-sand-200 to-sand-300 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-10 h-10 text-sand-700" />
          </div>
          <h1 className="text-4xl font-serif mb-6 text-gray-800">Service Area</h1>
          <p className="text-xl text-gray-700 mb-8">
            Serving the beautiful Crystal Coast of North Carolina
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {locations.map((location, index) => (
              <div key={index} className="bg-sand-100 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{location.emoji}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{location.city}</h3>
                <p className="text-teal-700 font-mono font-bold">{location.zip}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-sand-100 p-8 rounded-xl">
            <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">All ZIP Codes</h2>
            <p className="text-gray-700 font-mono text-lg">28594 • 28512 • 28584 • 28557 • 28562</p>
            <p className="text-gray-600 mt-4">
              We travel to your location - whether it's your home, vacation rental, or marina dock.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 