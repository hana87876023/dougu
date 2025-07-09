import { Variants, Transition } from 'framer-motion'

// Easing functions for smooth animations
export const easings = {
  smooth: [0.25, 0.1, 0.25, 1],
  snappy: [0.4, 0, 0.2, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
} as const

// Common durations
export const durations = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.8,
  slower: 1.2,
} as const

// 3D Section rotation variants
export const sectionVariants: Variants = {
  initial: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    z: 0,
  },
  exitLeft: {
    rotateY: -90,
    opacity: 0,
    scale: 0.8,
    z: -200,
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
    },
  },
  exitRight: {
    rotateY: 90,
    opacity: 0,
    scale: 0.8,
    z: -200,
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
    },
  },
  enter: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    z: 0,
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
      delay: 0.1,
    },
  },
}

// Glass card hover animations
export const glassCardVariants: Variants = {
  initial: {
    y: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  },
  hover: {
    y: -15,
    rotateX: 5,
    rotateY: 5,
    scale: 1.02,
    transition: {
      duration: durations.fast,
      ease: easings.snappy,
    },
  },
}

// Button animation variants
export const buttonVariants: Variants = {
  initial: {
    scale: 1,
    rotateX: 0,
    boxShadow: '0 4px 6px rgba(0, 230, 230, 0.1)',
  },
  hover: {
    scale: 1.05,
    rotateX: -5,
    boxShadow: '0 10px 25px rgba(0, 230, 230, 0.3)',
    transition: {
      duration: durations.fast,
      ease: easings.bounce,
    },
  },
  tap: {
    scale: 0.95,
    rotateX: 0,
    transition: {
      duration: 0.1,
    },
  },
}

// Navigation dot variants
export const navDotVariants: Variants = {
  inactive: {
    scale: 1,
    backgroundColor: 'transparent',
    borderColor: '#c5c4c4',
  },
  active: {
    scale: 1.2,
    backgroundColor: '#00e6e6',
    borderColor: '#00e6e6',
    transition: {
      duration: durations.fast,
      ease: easings.snappy,
    },
  },
  hover: {
    scale: 1.1,
    borderColor: '#00e6e6',
    transition: {
      duration: 0.2,
    },
  },
}

// Text animation variants
export const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
}

// Stagger container for text animations
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Hero section specific animations
export const heroVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.slower,
      ease: easings.smooth,
    },
  },
}

// Scroll-triggered animations
export const scrollVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 50,
    rotateX: -15,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
}

// Float animation for background elements
export const floatVariants: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Page transition variants
export const pageTransition: Transition = {
  type: 'tween',
  ease: easings.smooth,
  duration: durations.slow,
}

// 3D perspective settings
export const perspectiveSettings = {
  perspective: 1200,
  perspectiveOrigin: '50% 50%',
} as const

// Common spring configurations
export const springConfigs = {
  gentle: {
    type: 'spring' as const,
    stiffness: 120,
    damping: 14,
  },
  wobbly: {
    type: 'spring' as const,
    stiffness: 180,
    damping: 12,
  },
  stiff: {
    type: 'spring' as const,
    stiffness: 260,
    damping: 20,
  },
} as const