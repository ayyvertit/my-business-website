import { Phone, Mail, Clock, Shield } from 'lucide-react'
import { DesktopHeader } from '../../components/marketing/DesktopHeader'
import Footer from '../../components/Footer'
import ContactForm from '../../components/ContactForm'

export default function BookingPage() {
  return (
    <>
      <DesktopHeader />
      <main className="min-h-screen bg-[var(--white-sand)] dark:bg-[var(--deep-tide)]">
        <div className="max-w-6xl mx-auto px-8 py-24">
          <h1 className="text-4xl font-bold text-[var(--deep-tide)] dark:text-white mb-8">
            Book Your Session
          </h1>
          <p className="text-lg text-[var(--coastal-mist)] mb-12">
            Schedule your massage appointment with us.
          </p>
          {/* Add booking content here */}
        </div>
      </main>
    </>
  )
} 