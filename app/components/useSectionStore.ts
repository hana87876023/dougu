'use client'

import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

// Section information interface
export interface SectionInfo {
  id: string
  title: string
  index: number
  bgImage?: string
  ctaLabel?: string
}

// Store state interface
interface SectionState {
  // Current section
  currentSectionIndex: number
  previousSectionIndex: number
  
  // Animation state
  isTransitioning: boolean
  transitionDirection: 'next' | 'prev' | null
  
  // Section data
  sections: SectionInfo[]
  
  // Actions
  setCurrentSection: (index: number) => void
  goToNextSection: () => void
  goToPrevSection: () => void
  goToSection: (index: number) => void
  setTransitioning: (transitioning: boolean) => void
  setSections: (sections: SectionInfo[]) => void
  
  // Getters
  getCurrentSection: () => SectionInfo | null
  getPreviousSection: () => SectionInfo | null
  getTotalSections: () => number
  isFirstSection: () => boolean
  isLastSection: () => boolean
}

// Default sections data
const defaultSections: SectionInfo[] = [
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

// Create the store with middleware for subscriptions
export const useSectionStore = create<SectionState>()(
  subscribeWithSelector((set, get) => ({
    // Initial state
    currentSectionIndex: 0,
    previousSectionIndex: 0,
    isTransitioning: false,
    transitionDirection: null,
    sections: defaultSections,

    // Actions
    setCurrentSection: (index: number) => {
      const state = get()
      const totalSections = state.sections.length
      
      // Validate index
      if (index < 0 || index >= totalSections) return
      
      // Skip if already transitioning or same section
      if (state.isTransitioning || index === state.currentSectionIndex) return

      set({
        previousSectionIndex: state.currentSectionIndex,
        currentSectionIndex: index,
        transitionDirection: index > state.currentSectionIndex ? 'next' : 'prev',
        isTransitioning: true,
      })
    },

    goToNextSection: () => {
      const state = get()
      const nextIndex = state.currentSectionIndex + 1
      
      if (nextIndex < state.sections.length) {
        state.setCurrentSection(nextIndex)
      }
    },

    goToPrevSection: () => {
      const state = get()
      const prevIndex = state.currentSectionIndex - 1
      
      if (prevIndex >= 0) {
        state.setCurrentSection(prevIndex)
      }
    },

    goToSection: (index: number) => {
      const state = get()
      state.setCurrentSection(index)
    },

    setTransitioning: (transitioning: boolean) => {
      set({
        isTransitioning: transitioning,
        transitionDirection: transitioning ? get().transitionDirection : null,
      })
    },

    setSections: (sections: SectionInfo[]) => {
      set({
        sections: sections.map((section, index) => ({
          ...section,
          index,
        })),
      })
    },

    // Getters
    getCurrentSection: () => {
      const state = get()
      return state.sections[state.currentSectionIndex] || null
    },

    getPreviousSection: () => {
      const state = get()
      return state.sections[state.previousSectionIndex] || null
    },

    getTotalSections: () => {
      return get().sections.length
    },

    isFirstSection: () => {
      return get().currentSectionIndex === 0
    },

    isLastSection: () => {
      const state = get()
      return state.currentSectionIndex === state.sections.length - 1
    },
  }))
)

// Selector hooks for better performance
export const useCurrentSectionIndex = () =>
  useSectionStore((state) => state.currentSectionIndex)

export const useCurrentSection = () =>
  useSectionStore((state) => state.getCurrentSection())

export const useIsTransitioning = () =>
  useSectionStore((state) => state.isTransitioning)

export const useTransitionDirection = () =>
  useSectionStore((state) => state.transitionDirection)

export const useSectionActions = () =>
  useSectionStore((state) => ({
    goToNextSection: state.goToNextSection,
    goToPrevSection: state.goToPrevSection,
    goToSection: state.goToSection,
    setTransitioning: state.setTransitioning,
  }))

// Navigation helpers
export const useCanNavigate = () => {
  const isTransitioning = useIsTransitioning()
  return !isTransitioning
}

export const useSectionNavigation = () => {
  const currentIndex = useCurrentSectionIndex()
  const totalSections = useSectionStore((state) => state.getTotalSections())
  const isFirst = useSectionStore((state) => state.isFirstSection())
  const isLast = useSectionStore((state) => state.isLastSection())
  
  return {
    currentIndex,
    totalSections,
    isFirst,
    isLast,
    hasNext: !isLast,
    hasPrev: !isFirst,
  }
}