"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ThemeToggle } from "../ui/ThemeToggle"
import Image from "next/image"

export function DesktopHeader() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#F7B6A6] to-white dark:from-[var(--deep-tide)] dark:to-[var(--deep-tide)]/90 backdrop-blur supports-backdrop-blur:blur-md shadow-md relative">
      {/* Force fresh deployment - Desktop header with logo and gradient - Updated */}
      {/* Crystal Coast Concierge - Fixed positioned in top-left */}
      <div style={{
        position: 'fixed',
        top: '16px',
        left: '16px',
        zIndex: 9999
      }}>
        <div className="flex items-start gap-3">
          {/* Text - Centered vertically in header */}
          <div className="flex flex-col items-start text-[var(--deep-tide)] dark:text-white leading-none" style={{ marginTop: '8px' }}>
            <div style={{ position: 'relative' }}>
              <span style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '0.05em' }}>CRYSTAL COAST</span>
            </div>
            <div style={{ position: 'relative', marginTop: '0px' }}>
              <span className="tracking-widest break-words" style={{ fontSize: '24px', fontWeight: 'normal', letterSpacing: '0.1em' }}>CONCIERGE MASSAGE</span>
            </div>
          </div>

          {/* Logo - Much larger, almost touching top and bottom */}
          <div className="w-28 h-28 relative" style={{ marginTop: '8px' }}>
            <Image
              src="/logo.png"
              alt="Crystal Coast Concierge Logo"
              width={112}
              height={112}
              className="object-contain dark:filter dark:brightness-0 dark:invert transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-center h-32">
          {/* Navigation Links - Center */}
          <div className="flex gap-5">
            <motion.a
              href="/"
              style={{
                padding: '12px 24px',
                backgroundColor: '#7FCAC5',
                color: 'white',
                fontWeight: '600',
                borderRadius: '9999px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F7B6A6';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#7FCAC5';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
              }}
              whileHover={{ y: -3, scale: 1.05 }}
            >
              Home
            </motion.a>
            <motion.a
              href="/services"
              style={{
                padding: '12px 24px',
                backgroundColor: '#7FCAC5',
                color: 'white',
                fontWeight: '600',
                borderRadius: '9999px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F7B6A6';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#7FCAC5';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
              }}
              whileHover={{ y: -3, scale: 1.05 }}
            >
              Services
            </motion.a>
            <motion.a
              href="/about"
              style={{
                padding: '12px 24px',
                backgroundColor: '#7FCAC5',
                color: 'white',
                fontWeight: '600',
                borderRadius: '9999px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F7B6A6';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#7FCAC5';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
              }}
              whileHover={{ y: -3, scale: 1.05 }}
            >
              About
            </motion.a>
            <motion.a
              href="/booking"
              style={{
                padding: '12px 24px',
                backgroundColor: '#7FCAC5',
                color: 'white',
                fontWeight: '600',
                borderRadius: '9999px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F7B6A6';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#7FCAC5';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
              }}
              whileHover={{ y: -3, scale: 1.05 }}
            >
              Book
            </motion.a>
            <motion.a
              href="/testimonials"
              style={{
                padding: '12px 24px',
                backgroundColor: '#7FCAC5',
                color: 'white',
                fontWeight: '600',
                borderRadius: '9999px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F7B6A6';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#7FCAC5';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
              }}
              whileHover={{ y: -3, scale: 1.05 }}
            >
              Reviews
            </motion.a>
            <motion.a
              href="/service-area"
              style={{
                padding: '12px 24px',
                backgroundColor: '#7FCAC5',
                color: 'white',
                fontWeight: '600',
                borderRadius: '9999px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F7B6A6';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#7FCAC5';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
              }}
              whileHover={{ y: -3, scale: 1.05 }}
            >
              Coverage
            </motion.a>
          </div>
        </div>
      </div>

      {/* Theme Toggle - Fixed positioned on the right */}
      <div style={{
        position: 'fixed',
        top: '64px',
        right: '32px',
        zIndex: 9999,
        transform: 'translateY(-50%)'
      }}>
        <ThemeToggle size="lg" />
      </div>
    </header>
  )
} 