'use client'

import { useEffect, useRef, useCallback } from 'react'
import { useSectionStore } from './useSectionStore'

// Configuration for wheel snapping behavior
interface WheelSnappingConfig {
  threshold: number // Minimum wheel delta to trigger section change
  debounceTime: number // Time in ms to debounce wheel events
  touchThreshold: number // Minimum touch delta for mobile
  enableKeyboard: boolean // Enable keyboard navigation
  enableTouch: boolean // Enable touch navigation
}

const defaultConfig: WheelSnappingConfig = {
  threshold: 50,
  debounceTime: 150,
  touchThreshold: 50,
  enableKeyboard: true,
  enableTouch: true,
}

export const useWheelSnapping = (config: Partial<WheelSnappingConfig> = {}) => {
  const mergedConfig = { ...defaultConfig, ...config }
  
  const {
    goToNextSection,
    goToPrevSection,
    setTransitioning,
    isTransitioning,
    isFirstSection,
    isLastSection,
  } = useSectionStore()

  // Refs for managing event state
  const lastWheelTime = useRef<number>(0)
  const wheelDelta = useRef<number>(0)
  const touchStartY = useRef<number>(0)
  const touchStartX = useRef<number>(0)
  const isTouching = useRef<boolean>(false)

  // Debounced wheel handler
  const handleWheel = useCallback(
    (event: WheelEvent) => {
      event.preventDefault()
      
      // Skip if transitioning
      if (isTransitioning) return
      
      const now = Date.now()
      const timeDiff = now - lastWheelTime.current
      
      // Accumulate wheel delta
      wheelDelta.current += event.deltaY
      
      // Check if enough time has passed and threshold is met
      if (timeDiff > mergedConfig.debounceTime && Math.abs(wheelDelta.current) > mergedConfig.threshold) {
        if (wheelDelta.current > 0) {
          // Scrolling down - go to next section
          if (!isLastSection()) {
            goToNextSection()
          }
        } else {
          // Scrolling up - go to previous section
          if (!isFirstSection()) {
            goToPrevSection()
          }
        }
        
        // Reset accumulated delta and update last wheel time
        wheelDelta.current = 0
        lastWheelTime.current = now
      }
    },
    [
      isTransitioning,
      isFirstSection,
      isLastSection,
      goToNextSection,
      goToPrevSection,
      mergedConfig.debounceTime,
      mergedConfig.threshold,
    ]
  )

  // Touch event handlers for mobile
  const handleTouchStart = useCallback((event: TouchEvent) => {
    if (!mergedConfig.enableTouch) return
    
    const touch = event.touches[0]
    touchStartY.current = touch.clientY
    touchStartX.current = touch.clientX
    isTouching.current = true
  }, [mergedConfig.enableTouch])

  const handleTouchEnd = useCallback(
    (event: TouchEvent) => {
      if (!mergedConfig.enableTouch || !isTouching.current) return
      
      const touch = event.changedTouches[0]
      const deltaY = touchStartY.current - touch.clientY
      const deltaX = Math.abs(touchStartX.current - touch.clientX)
      
      // Only proceed if vertical swipe is dominant and meets threshold
      if (Math.abs(deltaY) > deltaX && Math.abs(deltaY) > mergedConfig.touchThreshold) {
        event.preventDefault()
        
        if (!isTransitioning) {
          if (deltaY > 0) {
            // Swiped up - go to next section
            if (!isLastSection()) {
              goToNextSection()
            }
          } else {
            // Swiped down - go to previous section
            if (!isFirstSection()) {
              goToPrevSection()
            }
          }
        }
      }
      
      isTouching.current = false
    },
    [
      mergedConfig.enableTouch,
      mergedConfig.touchThreshold,
      isTransitioning,
      isFirstSection,
      isLastSection,
      goToNextSection,
      goToPrevSection,
    ]
  )

  // Keyboard navigation handler
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!mergedConfig.enableKeyboard || isTransitioning) return
      
      switch (event.key) {
        case 'ArrowDown':
        case 'PageDown':
        case ' ': // Space key
          event.preventDefault()
          if (!isLastSection()) {
            goToNextSection()
          }
          break
        case 'ArrowUp':
        case 'PageUp':
          event.preventDefault()
          if (!isFirstSection()) {
            goToPrevSection()
          }
          break
        case 'Home':
          event.preventDefault()
          useSectionStore.getState().goToSection(0)
          break
        case 'End':
          event.preventDefault()
          const totalSections = useSectionStore.getState().getTotalSections()
          useSectionStore.getState().goToSection(totalSections - 1)
          break
      }
    },
    [
      mergedConfig.enableKeyboard,
      isTransitioning,
      isFirstSection,
      isLastSection,
      goToNextSection,
      goToPrevSection,
    ]
  )

  // Attach/detach event listeners
  useEffect(() => {
    const options: AddEventListenerOptions = { passive: false }
    
    // Add wheel event listener
    window.addEventListener('wheel', handleWheel, options)
    
    // Add touch event listeners
    if (mergedConfig.enableTouch) {
      window.addEventListener('touchstart', handleTouchStart, options)
      window.addEventListener('touchend', handleTouchEnd, options)
    }
    
    // Add keyboard event listener
    if (mergedConfig.enableKeyboard) {
      window.addEventListener('keydown', handleKeyDown)
    }
    
    // Cleanup function
    return () => {
      window.removeEventListener('wheel', handleWheel)
      
      if (mergedConfig.enableTouch) {
        window.removeEventListener('touchstart', handleTouchStart)
        window.removeEventListener('touchend', handleTouchEnd)
      }
      
      if (mergedConfig.enableKeyboard) {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [
    handleWheel,
    handleTouchStart,
    handleTouchEnd,
    handleKeyDown,
    mergedConfig.enableTouch,
    mergedConfig.enableKeyboard,
  ])

  // Listen to transition state changes to auto-clear transitioning flag
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setTransitioning(false)
      }, 800) // Match section transition duration
      
      return () => clearTimeout(timer)
    }
  }, [isTransitioning, setTransitioning])

  // Return navigation state and manual controls
  return {
    isTransitioning,
    canNavigateUp: !isFirstSection() && !isTransitioning,
    canNavigateDown: !isLastSection() && !isTransitioning,
    goToNextSection: () => {
      if (!isTransitioning && !isLastSection()) {
        goToNextSection()
      }
    },
    goToPrevSection: () => {
      if (!isTransitioning && !isFirstSection()) {
        goToPrevSection()
      }
    },
  }
}

// Additional hook for programmatic navigation with position tracking
export const useSectionNavigation = () => {
  const {
    currentSectionIndex,
    goToSection,
    getCurrentSection,
    getTotalSections,
    isTransitioning,
  } = useSectionStore()

  const navigateToSection = useCallback(
    (index: number) => {
      if (!isTransitioning && index >= 0 && index < getTotalSections()) {
        goToSection(index)
      }
    },
    [isTransitioning, getTotalSections, goToSection]
  )

  const scrollToSection = useCallback(
    (sectionId: string) => {
      const element = document.getElementById(sectionId)
      if (element && !isTransitioning) {
        const sections = useSectionStore.getState().sections
        const sectionIndex = sections.findIndex((section) => section.id === sectionId)
        if (sectionIndex !== -1) {
          navigateToSection(sectionIndex)
        }
      }
    },
    [isTransitioning, navigateToSection]
  )

  return {
    currentSectionIndex,
    currentSection: getCurrentSection(),
    totalSections: getTotalSections(),
    isTransitioning,
    navigateToSection,
    scrollToSection,
  }
}