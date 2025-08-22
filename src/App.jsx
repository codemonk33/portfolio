import React, { Suspense, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import ScrollToTop from './components/ScrollToTop'
import { ThemeProvider } from './context/ThemeContext'
import { initializeAnalytics } from './utils/analytics'
import { initMobileOptimizations } from './utils/mobile'

// Simple error boundary to catch runtime errors in child components
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, message: '' }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, message: error?.message || 'Unknown error' }
  }
  componentDidCatch(error, info) {
    // Log error in development only
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught:', error, info)
    }
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-red-50">
          <div className="p-6 rounded-lg border border-red-200 text-red-800 bg-white shadow">
            <h2 className="text-xl font-semibold mb-2">A component crashed</h2>
            <p className="text-sm">{this.state.message}</p>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

function App() {
  // Initialize Google Analytics and mobile optimizations when the app loads
  useEffect(() => {
    initializeAnalytics()
    initMobileOptimizations()
  }, [])

  return (
    <ThemeProvider>
      <ErrorBoundary>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 touch-manipulation mobile-scroll-smooth">
          {/* Skip navigation for screen readers */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-primary-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content">
            <Hero />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Certifications />
            <Contact />
          </main>
          <Footer />
          <ThemeToggle />
          <ScrollToTop />
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App