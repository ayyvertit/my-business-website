"use client"

import { useEffect, useState } from 'react'

export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)
    const [isClicking, setIsClicking] = useState(false)

    useEffect(() => {
        const updateCursorPosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        const handleMouseEnter = () => {
            setIsHovering(true)
        }

        const handleMouseLeave = () => {
            setIsHovering(false)
        }

        const handleMouseDown = () => {
            setIsClicking(true)
        }

        const handleMouseUp = () => {
            setIsClicking(false)
        }

        // Track mouse movement
        document.addEventListener('mousemove', updateCursorPosition)
        document.addEventListener('mousedown', handleMouseDown)
        document.addEventListener('mouseup', handleMouseUp)

        // Track hover on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, [role="button"], .interactive')
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', handleMouseEnter)
            element.addEventListener('mouseleave', handleMouseLeave)
        })

        return () => {
            document.removeEventListener('mousemove', updateCursorPosition)
            document.removeEventListener('mousedown', handleMouseDown)
            document.removeEventListener('mouseup', handleMouseUp)
            interactiveElements.forEach(element => {
                element.removeEventListener('mouseenter', handleMouseEnter)
                element.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [])

    return (
        <div
            className={`custom-cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'clicking' : ''}`}
            style={{
                left: `${position.x - 16}px`,
                top: `${position.y - 16}px`,
            }}
        >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {/* Main starfish body - classic 5-pointed star shape */}
                <path d="M12 2L14.5 8.5L22 9L16.5 13.5L18 21L12 17.5L6 21L7.5 13.5L2 9L9.5 8.5L12 2Z" fill="currentColor" />

                {/* Center disc */}
                <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.9" />

                {/* Dense spiky texture - small white granules covering the surface */}
                <circle cx="13" cy="9" r="0.12" fill="white" opacity="0.9" />
                <circle cx="14" cy="9.5" r="0.1" fill="white" opacity="0.9" />
                <circle cx="15" cy="10" r="0.11" fill="white" opacity="0.9" />
                <circle cx="16" cy="10.5" r="0.1" fill="white" opacity="0.9" />
                <circle cx="17" cy="11" r="0.12" fill="white" opacity="0.9" />
                <circle cx="17.5" cy="12" r="0.1" fill="white" opacity="0.9" />
                <circle cx="17" cy="13" r="0.11" fill="white" opacity="0.9" />
                <circle cx="16" cy="13.5" r="0.1" fill="white" opacity="0.9" />
                <circle cx="15" cy="14" r="0.12" fill="white" opacity="0.9" />
                <circle cx="14" cy="14.5" r="0.1" fill="white" opacity="0.9" />
                <circle cx="13" cy="15" r="0.11" fill="white" opacity="0.9" />
                <circle cx="12" cy="15.5" r="0.1" fill="white" opacity="0.9" />
                <circle cx="11" cy="15" r="0.12" fill="white" opacity="0.9" />
                <circle cx="10" cy="14.5" r="0.1" fill="white" opacity="0.9" />
                <circle cx="9" cy="14" r="0.11" fill="white" opacity="0.9" />
                <circle cx="8" cy="13.5" r="0.1" fill="white" opacity="0.9" />
                <circle cx="7" cy="13" r="0.12" fill="white" opacity="0.9" />
                <circle cx="6.5" cy="12" r="0.1" fill="white" opacity="0.9" />
                <circle cx="7" cy="11" r="0.11" fill="white" opacity="0.9" />
                <circle cx="8" cy="10.5" r="0.1" fill="white" opacity="0.9" />
                <circle cx="9" cy="10" r="0.12" fill="white" opacity="0.9" />
                <circle cx="10" cy="9.5" r="0.1" fill="white" opacity="0.9" />
                <circle cx="11" cy="9" r="0.11" fill="white" opacity="0.9" />

                {/* Additional texture on arms */}
                <circle cx="13.5" cy="8" r="0.08" fill="white" opacity="0.8" />
                <circle cx="15.5" cy="8.5" r="0.09" fill="white" opacity="0.8" />
                <circle cx="17.5" cy="9.5" r="0.08" fill="white" opacity="0.8" />
                <circle cx="18.5" cy="11.5" r="0.09" fill="white" opacity="0.8" />
                <circle cx="18" cy="13.5" r="0.08" fill="white" opacity="0.8" />
                <circle cx="16.5" cy="15" r="0.09" fill="white" opacity="0.8" />
                <circle cx="14.5" cy="16" r="0.08" fill="white" opacity="0.8" />
                <circle cx="12.5" cy="16.5" r="0.09" fill="white" opacity="0.8" />
                <circle cx="10.5" cy="16" r="0.08" fill="white" opacity="0.8" />
                <circle cx="8.5" cy="15" r="0.09" fill="white" opacity="0.8" />
                <circle cx="7" cy="13.5" r="0.08" fill="white" opacity="0.8" />
                <circle cx="6" cy="11.5" r="0.09" fill="white" opacity="0.8" />
                <circle cx="6.5" cy="9.5" r="0.08" fill="white" opacity="0.8" />
                <circle cx="8.5" cy="8.5" r="0.09" fill="white" opacity="0.8" />
                <circle cx="10.5" cy="8" r="0.08" fill="white" opacity="0.8" />

                {/* Center texture */}
                <circle cx="12" cy="12" r="0.15" fill="white" opacity="0.9" />
                <circle cx="12.5" cy="11.5" r="0.1" fill="white" opacity="0.9" />
                <circle cx="11.5" cy="11.5" r="0.1" fill="white" opacity="0.9" />
                <circle cx="12.5" cy="12.5" r="0.1" fill="white" opacity="0.9" />
                <circle cx="11.5" cy="12.5" r="0.1" fill="white" opacity="0.9" />

                {/* Radiating lines from center */}
                <path d="M12 12L14.5 8.5" stroke="white" strokeWidth="0.2" opacity="0.6" />
                <path d="M12 12L22 9" stroke="white" strokeWidth="0.2" opacity="0.6" />
                <path d="M12 12L16.5 13.5" stroke="white" strokeWidth="0.2" opacity="0.6" />
                <path d="M12 12L18 21" stroke="white" strokeWidth="0.2" opacity="0.6" />
                <path d="M12 12L9.5 8.5" stroke="white" strokeWidth="0.2" opacity="0.6" />
                <path d="M12 12L2 9" stroke="white" strokeWidth="0.2" opacity="0.6" />
                <path d="M12 12L7.5 13.5" stroke="white" strokeWidth="0.2" opacity="0.6" />
                <path d="M12 12L6 21" stroke="white" strokeWidth="0.2" opacity="0.6" />
            </svg>
        </div>
    )
} 