'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSectionStore, useCurrentSectionIndex, useIsTransitioning, useSectionNavigation } from './useSectionStore'
import { navDotVariants, buttonVariants } from '@/libs/framerConfigs'

// Navigation props
interface StickyNavProps {
  className?: string
  position?: 'right' | 'left'
  showLabels?: boolean
}

// Main sticky navigation component
export const StickyNav: React.FC<StickyNavProps> = ({
  className = '',
  position = 'right',
  showLabels = false,
}) => {
  const { sections, goToSection } = useSectionStore()
  const currentIndex = useCurrentSectionIndex()
  const isTransitioning = useIsTransitioning()
  const { hasPrev: canNavigateUp, hasNext: canNavigateDown } = useSectionNavigation()
  
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollTime, setLastScrollTime] = useState(Date.now())

  // Auto-hide navigation after period of inactivity
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3000)

    const handleActivity = () => {
      setIsVisible(true)
      setLastScrollTime(Date.now())
      clearTimeout(timer)
    }

    // Show navigation on mouse move or touch
    window.addEventListener('mousemove', handleActivity)
    window.addEventListener('touchstart', handleActivity)
    window.addEventListener('wheel', handleActivity)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('mousemove', handleActivity)
      window.removeEventListener('touchstart', handleActivity)
      window.removeEventListener('wheel', handleActivity)
    }
  }, [lastScrollTime])

  // Handle dot click navigation
  const handleDotClick = (index: number) => {
    if (!isTransitioning && index !== currentIndex) {
      goToSection(index)
    }
  }

  // Navigation positioning classes
  const positionClasses = position === 'right' 
    ? 'right-6 items-end' 
    : 'left-6 items-start'

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          className={`
            fixed
            top-1/2
            transform
            -translate-y-1/2
            z-50
            flex
            flex-col
            ${positionClasses}
            gap-4
            ${className}
          `}
          initial={{ opacity: 0, x: position === 'right' ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: position === 'right' ? 20 : -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Section dots navigation */}
          <div className="flex flex-col gap-3">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                className={`
                  nav-dot
                  relative
                  group
                  ${currentIndex === index ? 'active' : ''}
                `}
                variants={navDotVariants}
                initial="inactive"
                animate={currentIndex === index ? 'active' : 'inactive'}
                whileHover="hover"
                onClick={() => handleDotClick(index)}
                disabled={isTransitioning}
                aria-label={`Go to ${section.title} section`}
              >
                {/* Dot label tooltip */}
                {showLabels && (
                  <motion.span
                    className={`
                      absolute
                      ${position === 'right' ? 'right-full mr-3' : 'left-full ml-3'}
                      top-1/2
                      transform
                      -translate-y-1/2
                      bg-dark-bg
                      text-light-text
                      px-3
                      py-1
                      rounded
                      text-sm
                      font-medium
                      whitespace-nowrap
                      border
                      border-light-text/20
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-200
                      pointer-events-none
                    `}
                  >
                    {section.title}
                    
                    {/* Arrow pointing to dot */}
                    <span
                      className={`
                        absolute
                        top-1/2
                        transform
                        -translate-y-1/2
                        ${position === 'right' 
                          ? 'left-full border-l-dark-bg border-l-4 border-y-4 border-y-transparent border-r-0' 
                          : 'right-full border-r-dark-bg border-r-4 border-y-4 border-y-transparent border-l-0'
                        }
                      `}
                    />
                  </motion.span>
                )}
              </motion.button>
            ))}
          </div>

          {/* Progress indicator */}
          <motion.div
            className="
              w-px
              h-20
              bg-light-text/20
              relative
              mx-auto
              mt-4
            "
          >
            <motion.div
              className="
                absolute
                top-0
                left-0
                w-full
                bg-accent-cyan
                rounded-full
              "
              initial={{ height: '0%' }}
              animate={{ 
                height: `${((currentIndex + 1) / sections.length) * 100}%` 
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

// Scroll indicators (up/down arrows)
export const ScrollIndicators: React.FC = () => {
  const { hasPrev: canNavigateUp, hasNext: canNavigateDown } = useSectionNavigation()
  const { goToNextSection, goToPrevSection } = useSectionActions()
  const isTransitioning = useIsTransitioning()

  return (
    <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-40">
      {/* Scroll up indicator */}
      <AnimatePresence>
        {canNavigateUp && (
          <motion.button
            className="
              w-12
              h-12
              bg-glass-bg
              backdrop-blur-sm
              border
              border-glass-border
              rounded-full
              flex
              items-center
              justify-center
              text-accent-cyan
              hover:bg-accent-cyan
              hover:text-dark-bg
              transition-colors
              duration-300
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
            variants={buttonVariants}
            initial="initial"
            animate="initial"
            whileHover="hover"
            whileTap="tap"
            exit={{ opacity: 0, scale: 0 }}
            onClick={goToPrevSection}
            disabled={isTransitioning}
            aria-label="Scroll to previous section"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Scroll down indicator */}
      <AnimatePresence>
        {canNavigateDown && (
          <motion.button
            className="
              w-12
              h-12
              bg-glass-bg
              backdrop-blur-sm
              border
              border-glass-border
              rounded-full
              flex
              items-center
              justify-center
              text-accent-cyan
              hover:bg-accent-cyan
              hover:text-dark-bg
              transition-colors
              duration-300
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
            variants={buttonVariants}
            initial="initial"
            animate="initial"
            whileHover="hover"
            whileTap="tap"
            exit={{ opacity: 0, scale: 0 }}
            onClick={goToNextSection}
            disabled={isTransitioning}
            aria-label="Scroll to next section"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

// Mini progress bar (top of screen)
export const ProgressBar: React.FC = () => {
  const currentIndex = useCurrentSectionIndex()
  const { sections } = useSectionStore()
  const progress = ((currentIndex + 1) / sections.length) * 100

  return (
    <motion.div
      className="
        fixed
        top-0
        left-0
        right-0
        h-1
        bg-dark-bg/50
        z-50
        backdrop-blur-sm
      "
    >
      <motion.div
        className="
          h-full
          bg-gradient-to-r
          from-accent-cyan
          to-accent-cyan/70
          origin-left
        "
        initial={{ scaleX: 0 }}
        animate={{ scaleX: progress / 100 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
    </motion.div>
  )
}

// Section transition indicator
export const TransitionIndicator: React.FC = () => {
  const isTransitioning = useIsTransitioning()

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          className="
            fixed
            bottom-6
            left-1/2
            transform
            -translate-x-1/2
            z-50
            bg-glass-bg
            backdrop-blur-sm
            border
            border-glass-border
            rounded-full
            px-4
            py-2
            text-sm
            text-light-text
            font-medium
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-accent-cyan rounded-full animate-pulse" />
            Transitioning...
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Keyboard shortcuts indicator
export const KeyboardShortcuts: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '?') {
        setIsVisible(!isVisible)
      }
      if (e.key === 'Escape') {
        setIsVisible(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="
            fixed
            inset-0
            bg-dark-bg/80
            backdrop-blur-sm
            z-[9999]
            flex
            items-center
            justify-center
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsVisible(false)}
        >
          <motion.div
            className="
              bg-glass-bg
              backdrop-blur-lg
              border
              border-glass-border
              rounded-xl
              p-8
              max-w-md
              mx-4
            "
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-heading font-semibold text-accent-cyan mb-6">
              Keyboard Shortcuts
            </h3>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-light-text/70">Navigate down</span>
                <kbd className="bg-light-text/10 px-2 py-1 rounded">↓ / Space</kbd>
              </div>
              <div className="flex justify-between">
                <span className="text-light-text/70">Navigate up</span>
                <kbd className="bg-light-text/10 px-2 py-1 rounded">↑</kbd>
              </div>
              <div className="flex justify-between">
                <span className="text-light-text/70">First section</span>
                <kbd className="bg-light-text/10 px-2 py-1 rounded">Home</kbd>
              </div>
              <div className="flex justify-between">
                <span className="text-light-text/70">Last section</span>
                <kbd className="bg-light-text/10 px-2 py-1 rounded">End</kbd>
              </div>
              <div className="flex justify-between">
                <span className="text-light-text/70">Show shortcuts</span>
                <kbd className="bg-light-text/10 px-2 py-1 rounded">?</kbd>
              </div>
            </div>
            
            <p className="text-xs text-light-text/50 mt-6 text-center">
              Press ESC or click outside to close
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}