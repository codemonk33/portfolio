// Google Analytics Utility Functions for Om Tiwari's Portfolio
// This file provides easy-to-use functions for tracking user interactions

// Analytics Configuration
export const analyticsConfig = {
  // Google Analytics Measurement ID for Om Tiwari Portfolio
  measurementId: import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-02S25N93PW',
  
  // Track different sections of the portfolio
  sections: {
    HERO: 'hero',
    EDUCATION: 'education', 
    EXPERIENCE: 'experience',
    SKILLS: 'skills',
    PROJECTS: 'projects',
    CERTIFICATIONS: 'certifications',
    CONTACT: 'contact'
  },
  
  // Track different user actions
  actions: {
    VIEW_SECTION: 'view_section',
    CLICK_SOCIAL_LINK: 'click_social_link',
    DOWNLOAD_RESUME: 'download_resume',
    CONTACT_FORM_SUBMIT: 'contact_form_submit',
    CONTACT_FORM_ERROR: 'contact_form_error',
    PROJECT_VIEW: 'project_view',
    SKILL_HOVER: 'skill_hover',
    THEME_TOGGLE: 'theme_toggle'
  }
}

// Check if Google Analytics is loaded
export const isAnalyticsLoaded = () => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
}

// Basic page view tracking
export const trackPageView = (pagePath = window.location.pathname) => {
  if (!isAnalyticsLoaded()) return
  
  window.gtag('config', analyticsConfig.measurementId, {
    page_path: pagePath,
    page_title: 'Om Tiwari Portfolio'
  })
}

// Track section views (when user scrolls to different sections)
export const trackSectionView = (sectionName) => {
  if (!isAnalyticsLoaded()) return
  
  window.gtag('event', analyticsConfig.actions.VIEW_SECTION, {
    event_category: 'Portfolio Navigation',
    event_label: sectionName,
    portfolio_section: sectionName,
    value: 1
  })
  
  console.log(`📊 Analytics: Section viewed - ${sectionName}`)
}

// Track social link clicks
export const trackSocialClick = (platform, url) => {
  if (!isAnalyticsLoaded()) return
  
  window.gtag('event', analyticsConfig.actions.CLICK_SOCIAL_LINK, {
    event_category: 'Social Links',
    event_label: platform,
    link_url: url,
    social_platform: platform,
    value: 1
  })
  
  console.log(`📊 Analytics: Social link clicked - ${platform}`)
}

// Track contact form submissions (already integrated in Contact.jsx)
export const trackContactFormSubmit = (submissionCount = 1) => {
  if (!isAnalyticsLoaded()) return
  
  window.gtag('event', analyticsConfig.actions.CONTACT_FORM_SUBMIT, {
    event_category: 'Contact',
    event_label: 'Portfolio Contact Form Success',
    submission_number: submissionCount,
    value: 1
  })
  
  console.log(`📊 Analytics: Contact form submitted - #${submissionCount}`)
}

// Track contact form errors
export const trackContactFormError = (errorType) => {
  if (!isAnalyticsLoaded()) return
  
  window.gtag('event', analyticsConfig.actions.CONTACT_FORM_ERROR, {
    event_category: 'Contact',
    event_label: 'Portfolio Contact Form Error',
    error_type: errorType,
    value: 1
  })
  
  console.log(`📊 Analytics: Contact form error - ${errorType}`)
}

// Track project interactions
export const trackProjectView = (projectName, projectType = 'featured') => {
  if (!isAnalyticsLoaded()) return
  
  window.gtag('event', analyticsConfig.actions.PROJECT_VIEW, {
    event_category: 'Projects',
    event_label: projectName,
    project_name: projectName,
    project_type: projectType,
    value: 1
  })
  
  console.log(`📊 Analytics: Project viewed - ${projectName}`)
}

// Track resume downloads
export const trackResumeDownload = () => {
  if (!isAnalyticsLoaded()) return
  
  window.gtag('event', analyticsConfig.actions.DOWNLOAD_RESUME, {
    event_category: 'Downloads',
    event_label: 'Resume PDF',
    file_name: 'Om_Tiwari_Resume.pdf',
    value: 1
  })
  
  console.log('📊 Analytics: Resume downloaded')
}

// Track theme toggles (dark/light mode)
export const trackThemeToggle = (newTheme) => {
  if (!isAnalyticsLoaded()) return
  
  window.gtag('event', analyticsConfig.actions.THEME_TOGGLE, {
    event_category: 'UI Interaction',
    event_label: `Theme Changed to ${newTheme}`,
    theme: newTheme,
    value: 1
  })
  
  console.log(`📊 Analytics: Theme changed to ${newTheme}`)
}

// Track skill interactions
export const trackSkillInteraction = (skillName, interactionType = 'hover') => {
  if (!isAnalyticsLoaded()) return
  
  window.gtag('event', analyticsConfig.actions.SKILL_HOVER, {
    event_category: 'Skills',
    event_label: skillName,
    skill_name: skillName,
    interaction_type: interactionType,
    value: 1
  })
  
  console.log(`📊 Analytics: Skill ${interactionType} - ${skillName}`)
}

// Track scroll depth (how far users scroll)
export const trackScrollDepth = (percentage) => {
  if (!isAnalyticsLoaded()) return
  
  // Only track at 25%, 50%, 75%, 100% milestones
  const milestones = [25, 50, 75, 100]
  if (!milestones.includes(percentage)) return
  
  window.gtag('event', 'scroll', {
    event_category: 'Engagement',
    event_label: `Scrolled ${percentage}%`,
    scroll_depth: percentage,
    value: percentage
  })
  
  console.log(`📊 Analytics: Scroll depth - ${percentage}%`)
}

// Track time spent on site
export const trackTimeOnSite = (timeInSeconds) => {
  if (!isAnalyticsLoaded()) return
  
  // Track time milestones: 30s, 1min, 2min, 5min
  const milestones = [30, 60, 120, 300]
  if (!milestones.includes(timeInSeconds)) return
  
  const timeLabel = timeInSeconds < 60 ? `${timeInSeconds}s` : `${Math.floor(timeInSeconds/60)}min`
  
  window.gtag('event', 'timing_complete', {
    event_category: 'Engagement',
    event_label: `Time on site: ${timeLabel}`,
    time_seconds: timeInSeconds,
    value: timeInSeconds
  })
  
  console.log(`📊 Analytics: Time on site - ${timeLabel}`)
}

// Enhanced tracking for job hunting insights
export const trackJobHuntingMetrics = () => {
  if (!isAnalyticsLoaded()) return
  
  // Track if user came from job-related sources
  const referrer = document.referrer
  const jobSites = ['linkedin', 'indeed', 'glassdoor', 'naukri', 'monster', 'github']
  
  const isJobSiteReferral = jobSites.some(site => referrer.includes(site))
  
  if (isJobSiteReferral) {
    const siteName = jobSites.find(site => referrer.includes(site))
    
    window.gtag('event', 'job_site_referral', {
      event_category: 'Job Hunting',
      event_label: `Came from ${siteName}`,
      referral_source: siteName,
      value: 1
    })
    
    console.log(`📊 Analytics: Job site referral from ${siteName}`)
  }
}

// Initialize analytics when the page loads
export const initializeAnalytics = () => {
  if (typeof window === 'undefined') return
  
  // Track page load
  trackPageView()
  
  // Track job hunting metrics
  trackJobHuntingMetrics()
  
  // Set up scroll depth tracking
  let maxScrollPercentage = 0
  const trackScroll = () => {
    const scrollTop = window.pageYOffset
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight
    const currentPercentage = Math.round((scrollTop / documentHeight) * 100)
    
    if (currentPercentage > maxScrollPercentage) {
      maxScrollPercentage = currentPercentage
      trackScrollDepth(currentPercentage)
    }
  }
  
  // Set up time tracking
  const startTime = Date.now()
  const timeTracker = () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000)
    trackTimeOnSite(timeSpent)
  }
  
  // Add event listeners
  window.addEventListener('scroll', trackScroll)
  setInterval(timeTracker, 30000) // Check every 30 seconds
  
  console.log('📊 Analytics initialized for Om Tiwari Portfolio')
}

export default {
  trackPageView,
  trackSectionView,
  trackSocialClick,
  trackContactFormSubmit,
  trackContactFormError,
  trackProjectView,
  trackResumeDownload,
  trackThemeToggle,
  trackSkillInteraction,
  initializeAnalytics
}