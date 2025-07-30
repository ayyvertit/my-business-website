import { Shield, Award, Heart } from 'lucide-react'
import { DesktopHeader } from '../../components/marketing/DesktopHeader'
import Footer from '../../components/Footer'

export default function AboutPage() {
  return (
    <>
      <DesktopHeader />
      <main className="min-h-screen bg-[var(--white-sand)] dark:bg-[var(--deep-tide)]">
        <div className="max-w-6xl mx-auto px-8 py-24">
          <h1 className="text-4xl font-bold text-[var(--deep-tide)] dark:text-white mb-8">
            About Us
          </h1>
          <p className="text-lg text-[var(--coastal-mist)] mb-12">
            Learn more about Crystal Coast Concierge Massage.
          </p>
          {/* Add about content here */}
        </div>
      </main>
    </>
  )
} 