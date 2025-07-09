'use client'

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useWheelSnapping } from './components/useWheelSnapping'
import { useSectionStore } from './components/useSectionStore'
import { 
  HeroSection, 
  ServicesSection, 
  PortfolioSection, 
  CTASection 
} from './components/SectionWrapper'
import { 
  StickyNav, 
  ScrollIndicators, 
  ProgressBar, 
  TransitionIndicator,
  KeyboardShortcuts 
} from './components/StickyNav'
import { heroVariants, pageTransition } from './libs/framerConfigs'

// Main page component
export default function HomePage() {
  // Initialize wheel snapping for section navigation
  useWheelSnapping({
    threshold: 50,
    debounceTime: 150,
    enableKeyboard: true,
    enableTouch: true,
  })

  // Get current section and transition state
  const { 
    currentSectionIndex, 
    isTransitioning, 
    sections,
    setSections 
  } = useSectionStore()

  // Initialize sections data on mount
  useEffect(() => {
    const sectionData = [
      {
        id: 'hero',
        title: 'Hero',
        index: 0,
        bgImage: '/images/hero-bg.jpg',
      },
      {
        id: 'services',
        title: 'Services',
        index: 1,
        bgImage: '/images/services-bg.jpg',
      },
      {
        id: 'portfolio',
        title: 'Portfolio',
        index: 2,
        bgImage: '/images/portfolio-bg.jpg',
      },
      {
        id: 'cta',
        title: 'Contact',
        index: 3,
        bgImage: '/images/cta-bg.jpg',
        ctaLabel: 'Get Started',
      },
    ]
    
    setSections(sectionData)
  }, [setSections])

  // Disable scroll restoration to prevent conflicts with custom navigation
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  return (
    <motion.main
      id="main-content"
      className="
        relative
        w-full
        h-screen
        overflow-hidden
        bg-dark-bg
        preserve-3d
      "
      initial="initial"
      animate="animate"
      variants={heroVariants}
      transition={pageTransition}
    >
      {/* 3D Sections Container */}
      <div 
        className="
          relative
          w-full
          h-full
          preserve-3d
        "
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Hero Section */}
        <HeroSection index={0} />

        {/* Services Section */}
        <ServicesSection index={1} />

        {/* Portfolio Section */}
        <PortfolioSection index={2} />

        {/* CTA Section */}
        <CTASection index={3} />
      </div>

      {/* Navigation Components */}
      <StickyNav showLabels={true} position="right" />
      <ScrollIndicators />
      <ProgressBar />
      <TransitionIndicator />
      <KeyboardShortcuts />

      {/* Background Ambient Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="
              absolute
              w-2
              h-2
              bg-accent-cyan/20
              rounded-full
              blur-sm
            "
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + (i * 10)}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Gradient orbs */}
        <motion.div
          className="
            absolute
            top-1/4
            right-1/4
            w-64
            h-64
            bg-gradient-radial
            from-accent-cyan/10
            to-transparent
            rounded-full
            blur-xl
          "
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="
            absolute
            bottom-1/4
            left-1/4
            w-48
            h-48
            bg-gradient-radial
            from-accent-cyan/5
            to-transparent
            rounded-full
            blur-xl
          "
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: 2,
          }}
        />
      </div>

      {/* Loading overlay for initial render */}
      <AnimatePresence>
        {typeof window !== 'undefined' && !sections.length && (
          <motion.div
            className="
              fixed
              inset-0
              bg-dark-bg
              flex
              items-center
              justify-center
              z-[9999]
            "
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <motion.div
                className="
                  w-16
                  h-16
                  border-4
                  border-accent-cyan/20
                  border-t-accent-cyan
                  rounded-full
                  mx-auto
                  mb-4
                "
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <p className="text-light-text/60 font-medium">
                Loading Experience...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Accessibility announcements */}
      <div
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {isTransitioning 
          ? `Navigating to section ${currentSectionIndex + 1} of ${sections.length}`
          : `Currently viewing section ${currentSectionIndex + 1} of ${sections.length}: ${sections[currentSectionIndex]?.title || ''}`
        }
      </div>

      {/* SEO and social meta refresh */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Roto Transitions',
            description: 'Modern 3D web experiences with stunning transitions and animations',
            url: 'https://roto-transitions.vercel.app',
            logo: 'https://roto-transitions.vercel.app/logo.png',
            sameAs: [
              'https://twitter.com/rototransitions',
              'https://github.com/rototransitions',
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              availableLanguage: 'English',
            },
          }),
        }}
      />
    </motion.main>
  )
}