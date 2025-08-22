import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.body.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setScrollProgress(scrollPercent)
    }

    window.addEventListener('scroll', toggleVisibility)
    window.addEventListener('scroll', updateScrollProgress)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
      window.removeEventListener('scroll', updateScrollProgress)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.3, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 z-40 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-motion-lg border border-gray-200 dark:border-gray-700 hover:shadow-motion-hover transition-all duration-300 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        {/* Circular Progress */}
        <div className="relative w-full h-full">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 48 48">
            {/* Background circle */}
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-gray-200 dark:text-gray-700"
            />
            {/* Progress circle */}
            <motion.circle
              cx="24"
              cy="24"
              r="20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              className="text-primary-500"
              initial={{ strokeDasharray: 0, strokeDashoffset: 0 }}
              animate={{ 
                strokeDasharray: `${2 * Math.PI * 20}`,
                strokeDashoffset: `${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`
              }}
              transition={{ duration: 0.3 }}
            />
          </svg>
          
          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <ChevronUp size={20} className="text-gray-700 dark:text-gray-300" />
          </div>
        </div>

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded whitespace-nowrap pointer-events-none"
        >
          Scroll to top
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
        </motion.div>
      </motion.button>
    </AnimatePresence>
  )
}

export default ScrollToTop 