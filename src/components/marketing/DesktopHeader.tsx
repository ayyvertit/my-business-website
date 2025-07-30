"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ThemeToggle } from "../ui/ThemeToggle"

export function DesktopHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--white-sand)] dark:bg-[var(--deep-tide)]/90 backdrop-blur supports-backdrop-blur:blur-md shadow-md relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center h-24">
          {/* Logo & Branding - Left */}
          <div className="flex flex-col items-center text-[var(--deep-tide)] dark:text-white leading-tight" style={{ marginTop: '40px' }}>
            <div style={{ textAlign: 'center', width: '100%', position: 'relative' }}>
              <span style={{ fontSize: '30px', fontWeight: 'bold', letterSpacing: '0.05em' }}>CRYSTAL COAST</span>
              {/* Water wave effect overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(45deg, #7FCAC5, #B9D6D4, #E7F3F4, #7FCAC5)',
                backgroundSize: '400% 400%',
                animation: 'wave 3s ease-in-out infinite',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                fontSize: '30px',
                fontWeight: 'bold',
                letterSpacing: '0.05em',
                textAlign: 'center',
                width: '100%'
              }}>
                CRYSTAL COAST
              </div>
            </div>
            <div style={{ textAlign: 'center', width: '100%', marginTop: '4px', position: 'relative' }}>
              <span style={{ color: 'var(--coastal-mist)', fontSize: '18px' }}>CONCIERGE</span>
              {/* Water wave effect overlay for CONCIERGE */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(45deg, #7FCAC5, #B9D6D4, #E7F3F4, #7FCAC5)',
                backgroundSize: '400% 400%',
                animation: 'wave 3s ease-in-out infinite 0.5s',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                fontSize: '18px',
                textAlign: 'center',
                width: '100%'
              }}>
                CONCIERGE
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links - Fixed positioned across header */}
      <div style={{
        position: 'fixed',
        top: '12px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        display: 'flex',
        gap: '20px',
        width: '800px',
        justifyContent: 'space-between'
      }}>
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

      {/* Theme Toggle - Forced to far right with inline styles */}
      <div style={{
        position: 'fixed',
        top: '48px',
        right: '32px',
        zIndex: 9999,
        transform: 'translateY(-50%)'
      }}>
        <ThemeToggle size="lg" />
      </div>
    </header>
  )
} 