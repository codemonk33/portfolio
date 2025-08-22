// Rate Limiting Utility for Contact Form
import { emailConfig } from '../config/email'

const STORAGE_KEY = 'portfolio_form_submissions'

export class RateLimiter {
  constructor() {
    this.settings = emailConfig.rateLimitSettings
  }

  // Get submission history from localStorage
  getSubmissionHistory() {
    try {
      const history = localStorage.getItem(STORAGE_KEY)
      return history ? JSON.parse(history) : []
    } catch (error) {
      console.warn('Failed to read submission history:', error)
      return []
    }
  }

  // Save submission history to localStorage
  saveSubmissionHistory(history) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history))
    } catch (error) {
      console.warn('Failed to save submission history:', error)
    }
  }

  // Clean old submissions outside the time window
  cleanOldSubmissions(history) {
    const now = Date.now()
    return history.filter(timestamp => (now - timestamp) < this.settings.timeWindow)
  }

  // Check if user is currently rate limited
  isRateLimited() {
    const history = this.getSubmissionHistory()
    const cleanHistory = this.cleanOldSubmissions(history)
    
    // Update cleaned history
    this.saveSubmissionHistory(cleanHistory)
    
    // Check if user has exceeded the limit
    if (cleanHistory.length >= this.settings.maxSubmissions) {
      // Check if cooldown period has passed since the last submission
      const lastSubmission = Math.max(...cleanHistory)
      const timeSinceLastSubmission = Date.now() - lastSubmission
      
      if (timeSinceLastSubmission < this.settings.cooldownPeriod) {
        return {
          limited: true,
          remainingTime: this.settings.cooldownPeriod - timeSinceLastSubmission,
          submissionCount: cleanHistory.length,
          maxSubmissions: this.settings.maxSubmissions
        }
      } else {
        // Cooldown period has passed, reset the history
        this.saveSubmissionHistory([])
        return { limited: false }
      }
    }
    
    return { limited: false, submissionCount: cleanHistory.length }
  }

  // Record a new submission
  recordSubmission() {
    const history = this.getSubmissionHistory()
    const cleanHistory = this.cleanOldSubmissions(history)
    
    cleanHistory.push(Date.now())
    this.saveSubmissionHistory(cleanHistory)
    
    return {
      totalSubmissions: cleanHistory.length,
      remainingSubmissions: Math.max(0, this.settings.maxSubmissions - cleanHistory.length)
    }
  }

  // Get time remaining for rate limit
  getTimeRemaining() {
    const limitStatus = this.isRateLimited()
    if (limitStatus.limited) {
      return this.formatTime(limitStatus.remainingTime)
    }
    return null
  }

  // Format milliseconds to readable time
  formatTime(milliseconds) {
    const seconds = Math.ceil(milliseconds / 1000)
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    
    if (minutes > 0) {
      return `${minutes}m ${remainingSeconds}s`
    }
    return `${remainingSeconds}s`
  }

  // Get rate limit stats for display
  getStats() {
    const history = this.getSubmissionHistory()
    const cleanHistory = this.cleanOldSubmissions(history)
    const limitStatus = this.isRateLimited()
    
    return {
      submissionsInWindow: cleanHistory.length,
      maxSubmissions: this.settings.maxSubmissions,
      remainingSubmissions: Math.max(0, this.settings.maxSubmissions - cleanHistory.length),
      isLimited: limitStatus.limited,
      timeWindow: this.settings.timeWindow / (60 * 1000), // in minutes
      cooldownPeriod: this.settings.cooldownPeriod / (60 * 1000), // in minutes
      nextResetTime: cleanHistory.length > 0 ? new Date(Math.min(...cleanHistory) + this.settings.timeWindow) : null
    }
  }

  // Reset rate limit (for testing or admin purposes)
  reset() {
    localStorage.removeItem(STORAGE_KEY)
    return { success: true, message: 'Rate limit history cleared' }
  }
}

export default RateLimiter