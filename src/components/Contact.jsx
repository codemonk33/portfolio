import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin, Code, ExternalLink, Trophy, Zap, Shield, BarChart3 } from 'lucide-react'
import emailjs from 'emailjs-com'
import ReCAPTCHA from 'react-google-recaptcha'
import { fadeUpVariants, staggerContainerVariants, hoverVariants } from '../utils/motion'
import { emailConfig } from '../config/email'
import RateLimiter from '../utils/rateLimiter'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState('idle') // idle, submitting, success, error
  const [errors, setErrors] = useState({})
  const [recaptchaToken, setRecaptchaToken] = useState(null)
  const [submitCount, setSubmitCount] = useState(0)
  const [rateLimitInfo, setRateLimitInfo] = useState(null)
  const [isRateLimited, setIsRateLimited] = useState(false)
  const formRef = useRef()
  const recaptchaRef = useRef()
  const rateLimiter = useRef(new RateLimiter())

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'tiwariomse@gmail.com',
      link: 'mailto:tiwariomse@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 63947 28539',
      link: 'tel:+916394728539',
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Mumbai, Maharashtra, India',
      link: 'https://maps.google.com/?q=Mumbai,Maharashtra,India',
      color: 'text-blue-500'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/codemonk33',
      color: 'hover:text-gray-700 dark:hover:text-gray-300',
      bgColor: 'bg-gray-100 dark:bg-gray-700'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/omtiwari666/',
      color: 'hover:text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900'
    },
    {
      name: 'LeetCode',
      icon: Code,
      url: 'https://leetcode.com/u/codemonk33/',
      color: 'hover:text-yellow-500',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900'
    },
    {
      name: 'Codeforces',
      icon: Trophy,
      url: 'https://codeforces.com/profile/codemonk33',
      color: 'hover:text-blue-500',
      bgColor: 'bg-blue-100 dark:bg-blue-900'
    },
    {
      name: 'CodeChef',
      icon: Zap,
      url: 'https://www.codechef.com/users/codemonk33',
      color: 'hover:text-orange-500',
      bgColor: 'bg-orange-100 dark:bg-orange-900'
    }
  ]

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    // Check rate limiting
    const limitCheck = rateLimiter.current.isRateLimited()
    if (limitCheck.limited) {
      setErrors({ 
        rateLimit: `Too many submissions. Please wait ${rateLimiter.current.getTimeRemaining()} before trying again.` 
      })
      setIsRateLimited(true)
      return
    }

    // Enforce reCAPTCHA (skip if using placeholder key)
    if (emailConfig.recaptchaSiteKey !== 'your_production_site_key_here' && !recaptchaToken) {
      setErrors({ recaptcha: 'Please complete the reCAPTCHA verification to prevent spam' })
      return
    }
    
    setFormStatus('submitting')
    setSubmitCount(prev => prev + 1)
    
    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: emailConfig.contactName,
        to_email: emailConfig.contactEmail,
        reply_to: formData.email,
        submission_time: new Date().toLocaleString(),
        submission_count: submitCount + 1
      }

      // Initialize EmailJS with public key first
      emailjs.init(emailConfig.publicKey)
      
      // Send email using EmailJS with reCAPTCHA V2 verification
      const result = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        {
          publicKey: emailConfig.publicKey,
          captchaResponse: recaptchaToken
        }
      )

      console.log('Email sent successfully:', result)
      
      // Track successful submission (basic analytics)
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
          event_category: 'Contact',
          event_label: 'Portfolio Contact Form',
          value: 1
        })
      }

      // Record successful submission for rate limiting
      const submissionStats = rateLimiter.current.recordSubmission()
      
      setFormStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setErrors({})
      setRecaptchaToken(null)
      setIsRateLimited(false)
      setRateLimitInfo(submissionStats)
      
      // Reset reCAPTCHA
      if (recaptchaRef.current) {
        recaptchaRef.current.reset()
      }
      
      // Reset success status after 8 seconds
      setTimeout(() => setFormStatus('idle'), 8000)
      
    } catch (error) {
      console.error('Email sending failed:', error)
      console.error('Error details:', {
        message: error.message,
        text: error.text,
        status: error.status,
        serviceId: emailConfig.serviceId,
        templateId: emailConfig.templateId,
        publicKey: emailConfig.publicKey
      })
      
      // Set detailed error message for debugging
      let errorMessage = 'Unknown error occurred'
      if (error.text) {
        errorMessage = error.text
      } else if (error.message) {
        errorMessage = error.message
      }
      
      // Show specific error in the UI temporarily for debugging
      setErrors({ 
        submit: `EmailJS Error: ${errorMessage}. Check console for details.` 
      })
      
      // Track failed submission
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_error', {
          event_category: 'Contact',
          event_label: 'Portfolio Contact Form Error',
          value: 1
        })
      }
      
      setFormStatus('error')
      setTimeout(() => {
        setFormStatus('idle')
        setErrors({})
      }, 12000)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }

    // Save draft to localStorage
    const draftData = { ...formData, [name]: value }
    localStorage.setItem('portfolio-contact-draft', JSON.stringify(draftData))
  }

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token)
    if (errors.recaptcha) {
      setErrors(prev => ({ ...prev, recaptcha: '' }))
    }
  }

  // Load draft from localStorage on component mount
  React.useEffect(() => {
    const savedDraft = localStorage.getItem('portfolio-contact-draft')
    if (savedDraft) {
      try {
        const draftData = JSON.parse(savedDraft)
        setFormData(draftData)
      } catch (error) {
        console.log('Failed to load draft:', error)
      }
    }
  }, [])

  // Clear draft when form is successfully submitted
  React.useEffect(() => {
    if (formStatus === 'success') {
      localStorage.removeItem('portfolio-contact-draft')
    }
  }, [formStatus])

  // Check rate limit status on component mount and periodically
  React.useEffect(() => {
    const checkRateLimit = () => {
      const limitCheck = rateLimiter.current.isRateLimited()
      const stats = rateLimiter.current.getStats()
      
      setIsRateLimited(limitCheck.limited)
      setRateLimitInfo(stats)
      
      if (limitCheck.limited && errors.rateLimit) {
        setErrors(prev => ({
          ...prev,
          rateLimit: `Too many submissions. Please wait ${rateLimiter.current.getTimeRemaining()} before trying again.`
        }))
      }
    }

    // Check immediately
    checkRateLimit()

    // Check every 30 seconds if rate limited
    const interval = setInterval(checkRateLimit, 30000)
    
    return () => clearInterval(interval)
  }, [errors.rateLimit])

  const getInputClasses = (fieldName) => {
    const baseClasses = "w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 text-base"
    const errorClasses = "border-red-300 focus:border-red-500 focus:ring-red-200"
    const normalClasses = "border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-primary-200 dark:bg-gray-700 dark:text-white"
    
    return `${baseClasses} ${errors[fieldName] ? errorClasses : normalClasses}`
  }

  return (
    <section id="contact" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUpVariants} className="section-title">
            Get In Touch
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="section-subtitle">
            Let's discuss your next project or just say hello
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target={info.title === 'Location' ? '_blank' : undefined}
                  rel={info.title === 'Location' ? 'noopener noreferrer' : undefined}
                  variants={hoverVariants}
                  whileHover="hover"
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200 group"
                >
                  <div className={`p-3 rounded-full ${info.bgColor} group-hover:scale-110 transition-transform duration-200`}>
                    <info.icon size={24} className={info.color} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={hoverVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-full ${social.bgColor} ${social.color} transition-all duration-200`}
                    aria-label={social.name}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-lg p-6 border border-primary-200 dark:border-primary-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Response Time
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                I typically respond to messages within 24 hours during weekdays. 
                For urgent matters, feel free to call or send a direct message on LinkedIn.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-motion-sm border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>

                          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={getInputClasses('name')}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center mt-2 text-sm text-red-600 dark:text-red-400"
                  >
                    <AlertCircle size={16} className="mr-1" />
                    {errors.name}
                  </motion.p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={getInputClasses('email')}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center mt-2 text-sm text-red-600 dark:text-red-400"
                  >
                    <AlertCircle size={16} className="mr-1" />
                    {errors.email}
                  </motion.p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={getInputClasses('subject')}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center mt-2 text-sm text-red-600 dark:text-red-400"
                  >
                    <AlertCircle size={16} className="mr-1" />
                    {errors.subject}
                  </motion.p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={getInputClasses('message')}
                  placeholder="Tell me about your project or inquiry..."
                  maxLength={1000}
                />
                
                {/* Character Counter */}
                <div className="flex justify-between items-center mt-2">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {formData.message.length}/1000 characters
                  </div>
                  {formData.message.length > 800 && (
                    <div className="text-xs text-amber-600 dark:text-amber-400">
                      {1000 - formData.message.length} characters remaining
                    </div>
                  )}
                </div>

                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center mt-2 text-sm text-red-600 dark:text-red-400"
                  >
                    <AlertCircle size={16} className="mr-1" />
                    {errors.message}
                  </motion.p>
                )}
              </div>

              {/* Rate Limit Warning */}
              {isRateLimited && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-4 bg-amber-100 dark:bg-amber-900/20 text-amber-800 dark:text-amber-200 rounded-lg"
                >
                  <AlertCircle size={20} className="mr-2" />
                  <div>
                    <div className="font-medium">Rate limit reached</div>
                    <div className="text-sm">
                      You've submitted {rateLimitInfo?.submissionsInWindow || 0} messages in the last {rateLimitInfo?.timeWindow || 15} minutes.
                      Please wait before submitting again.
                    </div>
                  </div>
                </motion.div>
              )}

              {/* reCAPTCHA - Production or Development Mode */}
              <div className="flex flex-col items-center">
                {emailConfig.recaptchaSiteKey === 'your_production_site_key_here' ? (
                  // Development mode - reCAPTCHA not configured
                  <div className="p-4 bg-amber-100 dark:bg-amber-900/20 text-amber-800 dark:text-amber-200 rounded-lg text-center">
                    <Shield size={20} className="inline mr-2" />
                    <div className="text-sm">
                      <div className="font-medium">reCAPTCHA Setup Required</div>
                      <div className="mt-1">
                        Form will work without reCAPTCHA in development mode.
                        <br />
                        See <code>SECURITY_GUIDE.md</code> for production setup.
                      </div>
                    </div>
                  </div>
                ) : (
                  // Production mode - reCAPTCHA configured
                  <>
                    <div className="mb-2 text-sm text-gray-600 dark:text-gray-400 text-center">
                      <Shield size={16} className="inline mr-1" />
                      Verify you're human to prevent spam
                    </div>
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={emailConfig.recaptchaSiteKey}
                      onChange={handleRecaptchaChange}
                      theme="light"
                      className="transform scale-90 origin-center"
                    />
                  </>
                )}
                
                {errors.recaptcha && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center mt-2 text-sm text-red-600 dark:text-red-400"
                  >
                    <Shield size={16} className="mr-1" />
                    {errors.recaptcha}
                  </motion.p>
                )}
                {errors.rateLimit && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center mt-2 text-sm text-red-600 dark:text-red-400"
                  >
                    <AlertCircle size={16} className="mr-1" />
                    {errors.rateLimit}
                  </motion.p>
                )}
              </div>

              {/* Form Analytics Info */}
              <div className="text-xs text-gray-500 dark:text-gray-400 text-center space-y-1">
                <div className="flex items-center justify-center gap-2">
                  <BarChart3 size={12} />
                  Form submission #{submitCount + 1} • Protected by reCAPTCHA • Emails sent to {emailConfig.contactEmail}
                </div>
                {rateLimitInfo && (
                  <div className="flex items-center justify-center gap-2">
                    <Shield size={12} />
                    Rate limit: {rateLimitInfo.remainingSubmissions || 0}/{rateLimitInfo.maxSubmissions} submissions remaining in {rateLimitInfo.timeWindow}min window
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={formStatus === 'submitting' || isRateLimited}
                whileHover={formStatus !== 'submitting' && !isRateLimited ? { scale: 1.02 } : {}}
                whileTap={formStatus !== 'submitting' && !isRateLimited ? { scale: 0.98 } : {}}
                className={`w-full btn-primary flex items-center justify-center ${
                  formStatus === 'submitting' || isRateLimited ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {formStatus === 'submitting' ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : formStatus === 'success' ? (
                  <>
                    <CheckCircle size={20} className="mr-2" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Submit Error Display */}
              {errors.submit && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-4 bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 rounded-lg"
                >
                  <AlertCircle size={20} className="mr-2" />
                  {errors.submit}
                </motion.div>
              )}

              {/* Form Status Messages */}
              <AnimatePresence>
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg"
                  >
                    <CheckCircle size={20} className="mr-2" />
                    Thank you {formData.name || 'for your message'}! Your email has been sent successfully to {emailConfig.contactEmail}. I'll get back to you within 24-48 hours.
                  </motion.div>
                )}

                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center p-4 bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 rounded-lg"
                  >
                    <AlertCircle size={20} className="mr-2" />
                    Oops! Something went wrong. Please try again or contact me directly via email.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-motion-sm">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              I'm excited to hear about your ideas and help bring them to life. 
              Let's create something amazing together!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              <Send size={20} className="mr-2" />
              Let's Talk
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 