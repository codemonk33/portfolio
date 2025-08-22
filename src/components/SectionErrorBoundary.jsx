import React from 'react'
import { AlertTriangle } from 'lucide-react'

class SectionErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    if (process.env.NODE_ENV === 'development') {
      console.error(`Error in ${this.props.sectionName}:`, error, errorInfo)
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="section bg-red-50 dark:bg-red-900/10">
          <div className="container-custom">
            <div className="text-center py-16">
              <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-2">
                Section Temporarily Unavailable
              </h2>
              <p className="text-red-600 dark:text-red-300">
                The {this.props.sectionName} section encountered an error. Please refresh the page.
              </p>
            </div>
          </div>
        </section>
      )
    }

    return this.props.children
  }
}

export default SectionErrorBoundary