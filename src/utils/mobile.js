/**
 * Mobile optimization utilities
 */

// Detect if device is mobile
export const isMobile = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

// Optimize animations for mobile
export const getMobileAnimationConfig = () => {
  if (isMobile()) {
    return {
      duration: 0.2, // Faster animations on mobile
      ease: 'easeOut',
      reduce: true
    }
  }
  return {
    duration: 0.3,
    ease: 'easeOut',
    reduce: false
  }
}

// Debounce scroll events for performance
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Throttle for scroll events
export const throttle = (func, limit) => {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Lazy load images for mobile performance
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  }
  
  return new IntersectionObserver(callback, { ...defaultOptions, ...options })
}

// Optimize touch events
export const optimizeTouchEvents = () => {
  // Disable 300ms tap delay on mobile
  if (typeof document !== 'undefined') {
    document.addEventListener('touchstart', function() {}, { passive: true })
  }
}

// Prevent zoom on double tap for iOS
export const preventDoubleTabZoom = () => {
  if (typeof document !== 'undefined') {
    let lastTouchEnd = 0
    document.addEventListener('touchend', function (event) {
      const now = (new Date()).getTime()
      if (now - lastTouchEnd <= 300) {
        event.preventDefault()
      }
      lastTouchEnd = now
    }, false)
  }
}

// Check if reduced motion is preferred
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Mobile viewport height fix for iOS
export const setViewportHeight = () => {
  if (typeof window !== 'undefined') {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }
}

// Initialize mobile optimizations
export const initMobileOptimizations = () => {
  optimizeTouchEvents()
  preventDoubleTabZoom()
  setViewportHeight()
  
  // Update viewport height on resize
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', throttle(setViewportHeight, 100))
  }
}