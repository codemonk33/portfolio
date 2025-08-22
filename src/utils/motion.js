// Motion Design System Tokens
export const motionTokens = {
  // Durations (in seconds)
  duration: {
    xs: 0.12,    // 120ms
    sm: 0.18,    // 180ms
    md: 0.24,    // 240ms
    lg: 0.32,    // 320ms
    xl: 0.48,    // 480ms
  },
  
  // Easing functions
  easing: {
    inout: [0.65, 0, 0.35, 1], // inout-cubic
    spring: {
      type: "spring",
      stiffness: 180,
      damping: 20,
    },
    easeOut: [0.25, 0.46, 0.45, 0.94],
    easeIn: [0.55, 0.055, 0.675, 0.19],
  },
  
  // Distances (in pixels)
  distance: {
    fadeUp: 16,
    slideUp: 8,
    slide: 24,
    scale: 0.98,
  },
  
  // Stagger delays (in seconds)
  stagger: {
    xs: 0.06,    // 60ms
    sm: 0.08,    // 80ms
    md: 0.1,     // 100ms
  },
  
  // Hover effects
  hover: {
    scale: 1.05,
    y: -4,
    shadow: "0 8px 24px rgba(0, 0, 0, 0.16)",
  },
  
  // Tilt effects
  tilt: {
    max: 8,      // degrees
    scale: 1.02,
  },
}

// Common animation variants
export const fadeUpVariants = {
  hidden: { 
    opacity: 0, 
    y: motionTokens.distance.fadeUp 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: motionTokens.duration.md,
      ease: motionTokens.easing.inout,
    }
  }
}

export const slideUpVariants = {
  hidden: { 
    opacity: 0, 
    y: motionTokens.distance.slideUp 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: motionTokens.duration.sm,
      ease: motionTokens.easing.inout,
    }
  }
}

export const scaleInVariants = {
  hidden: { 
    opacity: 0, 
    scale: motionTokens.distance.scale 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: motionTokens.duration.md,
      ease: motionTokens.easing.easeOut,
    }
  }
}

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: motionTokens.stagger.md,
      delayChildren: 0.1,
    }
  }
}

// Hover animations
export const hoverVariants = {
  initial: { scale: 1, y: 0 },
  hover: { 
    scale: motionTokens.hover.scale, 
    y: motionTokens.hover.y,
    transition: {
      duration: motionTokens.duration.sm,
      ease: motionTokens.easing.easeOut,
    }
  }
}

// Card hover effects
export const cardHoverVariants = {
  initial: { 
    scale: 1, 
    y: 0,
    rotateY: 0,
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)"
  },
  hover: { 
    scale: motionTokens.tilt.scale,
    y: motionTokens.hover.y,
    rotateY: motionTokens.tilt.max,
    boxShadow: motionTokens.hover.shadow,
    transition: {
      duration: motionTokens.duration.md,
      ease: motionTokens.easing.easeOut,
    }
  }
}

// Page transition variants
export const pageVariants = {
  initial: { 
    opacity: 0, 
    y: motionTokens.distance.fadeUp 
  },
  in: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: motionTokens.duration.lg,
      ease: motionTokens.easing.inout,
    }
  },
  out: { 
    opacity: 0, 
    y: -motionTokens.distance.fadeUp,
    transition: {
      duration: motionTokens.duration.md,
      ease: motionTokens.easing.easeIn,
    }
  }
}

// Reduced motion variants (for accessibility)
export const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.01, // Very fast for reduced motion
    }
  }
}

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
  return false
}

// Get appropriate variants based on motion preference
export const getMotionVariants = (normalVariants, reducedVariants = reducedMotionVariants) => {
  return prefersReducedMotion() ? reducedVariants : normalVariants
}

// Spring animation for interactive elements
export const springConfig = {
  type: "spring",
  stiffness: 180,
  damping: 20,
  mass: 1,
}

// Parallax effect (disabled for reduced motion)
export const getParallaxConfig = (distance = 50) => {
  if (prefersReducedMotion()) {
    return { y: 0 }
  }
  return { y: distance }
} 