import { Header } from '../../components/marketing/Header'
import Footer from '../../components/Footer'

export default function ServicesPage() {
  const services = [
    { 
      title: "90‑Min Premium Swedish", 
      price: "$180", 
      emoji: "💆‍♀️",
      description: "Classic relaxation massage using long, flowing strokes to promote circulation and reduce stress."
    },
    { 
      title: "Deep Tissue Concierge", 
      price: "$200", 
      emoji: "💪",
      description: "Therapeutic massage targeting deeper muscle layers to release chronic tension and improve mobility."
    },
    { 
      title: "Dockside or Outdoor Massage", 
      price: "$220", 
      emoji: "🌊",
      description: "Luxurious treatment in the great outdoors, perfect for beach rentals and boat owners."
    },
  ];

  return (
    <main className="bg-sand-50 text-gray-900 font-sans">
      <Header />
      
      {/* Services Section */}
      <section className="bg-sand-100 py-20 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-serif text-center mb-10 text-gray-800">Services</h1>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-sand-200"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-sand-200 to-sand-300 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">{service.emoji}</span>
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h2>
                <p className="text-teal-700 font-bold text-3xl mb-4">{service.price}</p>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <span>✓</span>
                    <span>Professional equipment included</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <span>✓</span>
                    <span>Premium massage oils</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <span>✓</span>
                    <span>Setup and cleanup included</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 