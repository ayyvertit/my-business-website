"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[var(--deep-tide)] text-white py-12">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <p>Crystal Coast Concierge Massage, PLLC</p>
        <p>© 2025 All rights reserved.</p>
        <nav className="flex justify-center gap-6 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/booking" className="hover:underline">Book</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/service-area" className="hover:underline">Service Area</Link>
        </nav>
      </div>
    </footer>
  )
} 