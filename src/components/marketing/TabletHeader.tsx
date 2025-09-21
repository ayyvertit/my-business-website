"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ThemeToggle } from "../ui/ThemeToggle"
import Image from "next/image"
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs"

export function TabletHeader() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#F7B6A6] to-white dark:from-[var(--deep-tide)] dark:to-[var(--deep-tide)]/90 backdrop-blur supports-backdrop-blur:blur-md shadow-md relative">

      {/* Crystal Coast Concierge - Fixed positioned in top-left */}
      <div style={{
        position: 'fixed',
        top: '16px',
        left: '16px',
        zIndex: 9999
      }}>
        <motion.a
          href="/"
          className="flex items-start gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Text */}
          <div className="flex flex-col items-start text-[var(--deep-tide)] dark:text-white leading-none">
            <div style={{ position: 'relative' }}>
              <span style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '0.05em' }}>CRYSTAL COAST</span>
            </div>
            <div style={{ position: 'relative', marginTop: '0px' }}>
              <span className="tracking-widest break-words" style={{ fontSize: '20px', fontWeight: 'normal', letterSpacing: '0.1em' }}>CONCIERGE MASSAGE</span>
            </div>
          </div>

          {/* Logo */}
          <div className="w-20 h-20 relative" style={{ marginTop: '6px' }}>
            <Image
              src="/logo.png"
              alt="Crystal Coast Concierge Logo"
              width={80}
              height={80}
              className="object-contain dark:filter dark:brightness-0 dark:invert transition-all duration-300 ease-in-out"
            />
          </div>
        </motion.a>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center h-24">
          {/* Navigation Links - Center with all tabs */}
          <div className="flex gap-3 flex-wrap justify-center">
            <motion.a
              href="/"
              style={{
                padding: '8px 16px',
                backgroundColor: '#7FCAC5',
                color: 'white',
                fontWeight: '600',
                borderRadius: '9999px',
                boxShadow: '0 8px 12px -3px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                fontSize: '14px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F7B6A6';
                e.currentTarget.style.boxShadow = '0 16px 20px -5px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#7FCAC5';
                e.currentTarget.style.boxShadow = '0 8px 12px -3px rgba(0, 0, 0, 0.1)';
              }}
              whileHover={{ y: -2, scale: 1.03 }}
            >
              Home
            </motion.a>
            <motion.a
              href="/about"
              style={{
                padding: '8px 16px',
                backgroundColor: '#7FCAC5',
                color: 'white',
                fontWeight: '600',
                borderRadius: '9999px',
                boxShadow: '0 8px 12px -3px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                fontSize: '14px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F7B6A6';
                e.currentTarget.style.boxShadow = '0 16px 20px -5px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#7FCAC5';
                e.currentTarget.style.boxShadow = '0 8px 12px -3px rgba(0, 0, 0, 0.1)';
              }}
              whileHover={{ y: -2, scale: 1.03 }}
            >
              About
            </motion.a>
            <motion.a
              href="/services"
              style={{
                padding: '8px 16px',
                backgroundColor: '#7FCAC5',
                color: 'white',
                fontWeight: '600',
                borderRadius: '9999px',
                boxShadow: '0 8px 12px -3px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                fontSize: '14px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F7B6A6';
                e.currentTarget.style.boxShadow = '0 16px 20px -5px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#7FCAC5';
                e.currentTarget.style.boxShadow = '0 8px 12px -3px rgba(0, 0, 0, 0.1)';
              }}
              whileHover={{ y: -2, scale: 1.03 }}
            >
              Services
            </motion.a>
            <motion.a
              href="/service-area"
              style={{
                padding: '8px 16px',
                backgroundColor: '#7FCAC5',
                color: 'white',
                fontWeight: '600',
                borderRadius: '9999px',
                boxShadow: '0 8px 12px -3px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                fontSize: '14px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F7B6A6';
                e.currentTarget.style.boxShadow = '0 16px 20px -5px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#7FCAC5';
                e.currentTarget.style.boxShadow = '0 8px 12px -3px rgba(0, 0, 0, 0.1)';
              }}
              whileHover={{ y: -2, scale: 1.03 }}
            >
              Service Area
            </motion.a>
            <motion.a
              href="/booking"
              style={{
                padding: '8px 16px',
                backgroundColor: '#7FCAC5',
                color: 'white',
                fontWeight: '600',
                borderRadius: '9999px',
                boxShadow: '0 8px 12px -3px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                fontSize: '14px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F7B6A6';
                e.currentTarget.style.boxShadow = '0 16px 20px -5px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#7FCAC5';
                e.currentTarget.style.boxShadow = '0 8px 12px -3px rgba(0, 0, 0, 0.1)';
              }}
              whileHover={{ y: -2, scale: 1.03 }}
            >
              Book
            </motion.a>
            <motion.a
              href="/testimonials"
              style={{
                padding: '8px 16px',
                backgroundColor: '#7FCAC5',
                color: 'white',
                fontWeight: '600',
                borderRadius: '9999px',
                boxShadow: '0 8px 12px -3px rgba(0, 0, 0, 0.1)',
                textDecoration: 'none',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                fontSize: '14px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F7B6A6';
                e.currentTarget.style.boxShadow = '0 16px 20px -5px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#7FCAC5';
                e.currentTarget.style.boxShadow = '0 8px 12px -3px rgba(0, 0, 0, 0.1)';
              }}
              whileHover={{ y: -2, scale: 1.03 }}
            >
              Reviews
            </motion.a>
            <SignedIn>
              <motion.a
                href="/dashboard"
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#F7B6A6',
                  color: 'white',
                  fontWeight: '600',
                  borderRadius: '9999px',
                  boxShadow: '0 8px 12px -3px rgba(0, 0, 0, 0.1)',
                  textDecoration: 'none',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  fontSize: '14px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#7FCAC5';
                  e.currentTarget.style.boxShadow = '0 16px 20px -5px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#F7B6A6';
                  e.currentTarget.style.boxShadow = '0 8px 12px -3px rgba(0, 0, 0, 0.1)';
                }}
                whileHover={{ y: -2, scale: 1.03 }}
              >
                Dashboard
              </motion.a>
            </SignedIn>
            <SignedOut>
              <motion.a
                href="/login"
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#7FCAC5',
                  color: 'white',
                  fontWeight: '600',
                  borderRadius: '9999px',
                  boxShadow: '0 8px 12px -3px rgba(0, 0, 0, 0.1)',
                  textDecoration: 'none',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  fontSize: '14px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F7B6A6';
                  e.currentTarget.style.boxShadow = '0 16px 20px -5px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#7FCAC5';
                  e.currentTarget.style.boxShadow = '0 8px 12px -3px rgba(0, 0, 0, 0.1)';
                }}
                whileHover={{ y: -2, scale: 1.03 }}
              >
                Login
              </motion.a>
            </SignedOut>
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
        <ThemeToggle size="md" />
      </div>

      {/* User Button - Fixed positioned on the right, below theme toggle */}
      <SignedIn>
        <div style={{
          position: 'fixed',
          top: '120px',
          right: '32px',
          zIndex: 9999
        }}>
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "w-9 h-9",
                userButtonTrigger: "focus:shadow-none"
              }
            }}
          />
        </div>
      </SignedIn>
    </header>
  )
} 