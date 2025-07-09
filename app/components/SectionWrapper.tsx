'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion'
import { useSectionStore, useCurrentSectionIndex, useIsTransitioning, useTransitionDirection } from './useSectionStore'
import { sectionVariants, scrollVariants, textVariants, staggerContainer } from '@/libs/framerConfigs'

// Props interface for SectionWrapper
interface SectionWrapperProps {
  index: number
  id: string
  children: React.ReactNode
  bgImage?: string
  className?: string
  overlayOpacity?: number
}

// Individual section wrapper with 3D rotation
export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  index,
  id,
  children,
  bgImage,
  className = '',
  overlayOpacity = 0.4,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const currentIndex = useCurrentSectionIndex()
  const isTransitioning = useIsTransitioning()
  const transitionDirection = useTransitionDirection()
  const controls = useAnimation()
  const isInView = useInView(ref, { margin: '-50%' })

  // Update current section when in view (for scroll detection)
  const { setCurrentSection } = useSectionStore()
  
  useEffect(() => {
    if (isInView && !isTransitioning && currentIndex !== index) {
      setCurrentSection(index)
    }
  }, [isInView, isTransitioning, currentIndex, index, setCurrentSection])

  // Animation logic based on section state
  useEffect(() => {
    const isCurrent = currentIndex === index
    const isPrevious = currentIndex - 1 === index
    const isNext = currentIndex + 1 === index

    if (isCurrent) {
      // Current section - show normally
      controls.start('enter')
    } else if (isPrevious && transitionDirection === 'next') {
      // Previous section when going forward - rotate left
      controls.start('exitLeft')
    } else if (isNext && transitionDirection === 'prev') {
      // Next section when going backward - rotate right
      controls.start('exitRight')
    } else {
      // Hidden sections
      controls.start('initial')
    }
  }, [currentIndex, index, transitionDirection, controls])

  // Dynamic z-index based on section state
  const getZIndex = () => {
    if (currentIndex === index) return 30
    if (Math.abs(currentIndex - index) === 1) return 20
    return 10
  }

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`
        section-container
        absolute
        inset-0
        w-full
        h-screen
        ${className}
      `}
      style={{
        zIndex: getZIndex(),
        transformOrigin: '50% 50%',
      }}
      initial="initial"
      animate={controls}
      variants={sectionVariants}
    >
      {/* Background image with parallax effect */}
      {bgImage && (
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          {/* Overlay for better text readability */}
          <div
            className="absolute inset-0 bg-dark-bg"
            style={{ opacity: overlayOpacity }}
          />
        </motion.div>
      )}

      {/* Content container with stagger animation */}
      <motion.div
        className="
          relative
          z-10
          w-full
          h-full
          flex
          flex-col
          justify-center
          items-center
          px-4
          sm:px-8
          lg:px-16
        "
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: '-20%' }}
      >
        {children}
      </motion.div>

      {/* Section indicator dot */}
      <motion.div
        className="
          absolute
          bottom-8
          left-1/2
          transform
          -translate-x-1/2
          w-2
          h-8
          bg-accent-cyan/30
          rounded-full
        "
        initial={{ scaleY: 0 }}
        animate={{ scaleY: currentIndex === index ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-full bg-accent-cyan rounded-full"
          animate={{ height: currentIndex === index ? '100%' : '30%' }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.section>
  )
}

// Hero section component
export const HeroSection: React.FC<{ index: number }> = ({ index }) => {
  return (
    <SectionWrapper
      index={index}
      id="hero"
      bgImage="/images/hero-bg.jpg"
      overlayOpacity={0.6}
    >
      <motion.div
        className="text-center max-w-4xl mx-auto"
        variants={textVariants}
      >
        <motion.h1
          className="
            text-6xl
            sm:text-7xl
            lg:text-8xl
            font-heading
            font-semibold
            gradient-text
            mb-6
            text-shadow
          "
          variants={textVariants}
        >
          Roto
          <br />
          Transitions
        </motion.h1>
        
        <motion.p
          className="
            text-xl
            sm:text-2xl
            lg:text-3xl
            text-light-text/80
            mb-12
            leading-relaxed
          "
          variants={textVariants}
        >
          Experience the future of web design with stunning 3D transitions
          <br />
          and immersive animations
        </motion.p>
        
        <motion.button
          className="btn-primary text-lg px-12 py-4"
          variants={textVariants}
          whileHover={{ scale: 1.05, rotateX: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Magic
        </motion.button>
      </motion.div>
    </SectionWrapper>
  )
}

// Services section component
export const ServicesSection: React.FC<{ index: number }> = ({ index }) => {
  const services = [
    {
      title: '3D Animations',
      description: 'Stunning visual effects that bring your content to life',
      icon: '🎨',
    },
    {
      title: 'Smooth Transitions',
      description: 'Seamless navigation between sections and pages',
      icon: '⚡',
    },
    {
      title: 'Responsive Design',
      description: 'Perfect experience across all devices and screen sizes',
      icon: '📱',
    },
  ]

  return (
    <SectionWrapper
      index={index}
      id="services"
      bgImage="/images/services-bg.jpg"
      overlayOpacity={0.7}
    >
      <motion.div
        className="text-center max-w-6xl mx-auto"
        variants={textVariants}
      >
        <motion.h2
          className="
            text-5xl
            sm:text-6xl
            font-heading
            font-semibold
            gradient-text
            mb-16
          "
          variants={textVariants}
        >
          Our Services
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, serviceIndex) => (
            <motion.div
              key={service.title}
              className="glass-card text-center group"
              variants={textVariants}
              whileHover={{
                y: -15,
                rotateY: 5,
                rotateX: 5,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-6xl mb-6"
                animate={{
                  rotateY: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: serviceIndex * 0.5,
                }}
              >
                {service.icon}
              </motion.div>
              
              <h3 className="text-2xl font-heading font-semibold mb-4 text-accent-cyan">
                {service.title}
              </h3>
              
              <p className="text-light-text/80 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}

// Portfolio section component
export const PortfolioSection: React.FC<{ index: number }> = ({ index }) => {
  return (
    <SectionWrapper
      index={index}
      id="portfolio"
      bgImage="/images/portfolio-bg.jpg"
      overlayOpacity={0.5}
    >
      <motion.div
        className="text-center max-w-4xl mx-auto"
        variants={textVariants}
      >
        <motion.h2
          className="
            text-5xl
            sm:text-6xl
            font-heading
            font-semibold
            gradient-text
            mb-12
          "
          variants={textVariants}
        >
          Portfolio
        </motion.h2>
        
        <motion.p
          className="
            text-xl
            sm:text-2xl
            text-light-text/80
            mb-16
            leading-relaxed
          "
          variants={textVariants}
        >
          Discover our latest projects showcasing cutting-edge
          <br />
          web technologies and design excellence
        </motion.p>
        
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              className="
                glass-card
                aspect-square
                bg-gradient-to-br
                from-accent-cyan/20
                to-transparent
                border-accent-cyan/30
              "
              variants={textVariants}
              whileHover={{
                rotateY: 10,
                rotateX: 10,
                scale: 1.05,
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-4xl font-heading font-semibold text-accent-cyan">
                  0{item}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}

// CTA section component
export const CTASection: React.FC<{ index: number }> = ({ index }) => {
  return (
    <SectionWrapper
      index={index}
      id="cta"
      bgImage="/images/cta-bg.jpg"
      overlayOpacity={0.8}
    >
      <motion.div
        className="text-center max-w-4xl mx-auto"
        variants={textVariants}
      >
        <motion.h2
          className="
            text-5xl
            sm:text-6xl
            lg:text-7xl
            font-heading
            font-semibold
            gradient-text
            mb-8
          "
          variants={textVariants}
        >
          Ready to Create
          <br />
          Something Amazing?
        </motion.h2>
        
        <motion.p
          className="
            text-xl
            sm:text-2xl
            text-light-text/80
            mb-16
            leading-relaxed
          "
          variants={textVariants}
        >
          Let's bring your vision to life with stunning 3D web experiences
          <br />
          that captivate and inspire your audience
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={textVariants}
        >
          <motion.button
            className="btn-primary text-lg px-12 py-4"
            whileHover={{ scale: 1.05, rotateX: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.button>
          
          <motion.button
            className="
              border-2
              border-accent-cyan
              text-accent-cyan
              font-semibold
              py-4
              px-12
              rounded-lg
              transition-all
              duration-300
              hover:bg-accent-cyan
              hover:text-dark-bg
            "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Pricing
          </motion.button>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}