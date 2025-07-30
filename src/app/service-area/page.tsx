import { DesktopHeader } from '../../components/marketing/DesktopHeader'

export default function ServiceAreaPage() {
  return (
    <>
      <DesktopHeader />
      <main className="min-h-screen bg-[var(--white-sand)] dark:bg-[var(--deep-tide)]">
        <div className="max-w-6xl mx-auto px-8 py-24">
          <h1 className="text-4xl font-bold text-[var(--deep-tide)] dark:text-white mb-8">
            Service Area
          </h1>
          <p className="text-lg text-[var(--coastal-mist)] mb-12">
            We serve the entire Crystal Coast region.
          </p>
          {/* Add service area content here */}
        </div>
      </main>
    </>
  )
} 