import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, Github, Linkedin, Code, ExternalLink, Trophy, Zap } from 'lucide-react'
import { fadeUpVariants, slideUpVariants, hoverVariants, staggerContainerVariants } from '../utils/motion'
import { trackResumeDownload, trackSectionView } from '../utils/analytics'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = [
    'Software Developer',
    'Computer Engineering Student',
    'Problem Solver',
    'Tech Enthusiast'
  ]

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const deleteSpeed = 50
    
    if (!isDeleting && currentText === texts[currentIndex]) {
      setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    } else {
      const timer = setTimeout(() => {
        if (isDeleting) {
          setCurrentText(texts[currentIndex].substring(0, currentText.length - 1))
        } else {
          setCurrentText(texts[currentIndex].substring(0, currentText.length + 1))
        }
      }, isDeleting ? deleteSpeed : typeSpeed)
      
      return () => clearTimeout(timer)
    }
  }, [currentText, currentIndex, isDeleting, texts])

  // Handle resume download
  const handleResumeDownload = () => {
    trackResumeDownload()
    
    // Check if resume file exists, otherwise show alert
    const resumePath = '/resume/RESUME.pdf'
    
    // Try to download, with fallback message
    fetch(resumePath, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          // File exists, proceed with download
          const link = document.createElement('a')
          link.href = resumePath
          link.download = 'Om_Tiwari_Resume.pdf'
          link.target = '_blank'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        } else {
          throw new Error('File not found')
        }
      })
      .catch(() => {
        // File doesn't exist, show professional message
        alert('Resume is being updated! Please contact me at tiwariomse@gmail.com or connect via LinkedIn for the latest version.')
        // Redirect to LinkedIn as fallback
        window.open('https://www.linkedin.com/in/omtiwari666/', '_blank', 'noopener,noreferrer')
      })
  }

  // Handle view projects scroll
  const handleViewProjects = () => {
    trackSectionView('projects')
    
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const socialLinks = [
    { icon: Mail, href: 'mailto:tiwariomse@gmail.com', label: 'Email', color: 'hover:text-red-500' },
    { icon: Github, href: 'https://github.com/codemonk33', label: 'GitHub', color: 'hover:text-gray-700 dark:hover:text-gray-300' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/omtiwari666/', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Code, href: 'https://leetcode.com/u/codemonk33/', label: 'LeetCode', color: 'hover:text-yellow-500' },
    { icon: Trophy, href: 'https://codeforces.com/profile/codemonk33', label: 'Codeforces', color: 'hover:text-blue-500' },
    { icon: Zap, href: 'https://www.codechef.com/users/codemonk33', label: 'CodeChef', color: 'hover:text-orange-500' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container-custom">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1
            variants={fadeUpVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Hi, I'm{' '}
            <span className="text-gradient bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 bg-clip-text text-transparent">
              Om Tiwari
            </span>
          </motion.h1>

          {/* Typewriter Tagline */}
          <motion.div
            variants={slideUpVariants}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-12 flex items-center justify-center"
          >
            <div className="text-center">
              I'm a{' '}
              <span className="text-primary-600 dark:text-primary-400 font-semibold">
                {currentText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-0.5 h-8 bg-primary-600 dark:bg-primary-400 ml-1"
                />
              </span>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={fadeUpVariants}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            A curious and passionate Computer Engineering undergrad from Mumbai University. 
            Lifelong learner, problem solver & builder with expertise in Python, C++, JavaScript, React, and Node.js.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 w-full max-w-md sm:max-w-none mx-auto"
          >
            <motion.button
              variants={hoverVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              onClick={handleResumeDownload}
              className="btn-primary group w-full sm:w-auto touch-manipulation"
            >
              <Download size={18} className="mr-2 group-hover:animate-bounce flex-shrink-0" />
              Download Resume
            </motion.button>
            
            <motion.button
              variants={hoverVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              onClick={handleViewProjects}
              className="btn-secondary group w-full sm:w-auto touch-manipulation"
            >
              <ExternalLink size={18} className="mr-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              View Projects
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeUpVariants}
            className="flex justify-center items-center space-x-4 sm:space-x-6 mb-6 sm:mb-0"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={hoverVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                className={`p-2.5 sm:p-3 rounded-full bg-white dark:bg-gray-800 shadow-motion-sm hover:shadow-motion-md transition-all duration-200 ${social.color} border border-gray-200 dark:border-gray-700 touch-manipulation`}
                aria-label={social.label}
              >
                <social.icon size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary-200/20 to-accent-200/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 0.9, 1],
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
            scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-accent-200/20 to-primary-200/20 rounded-full blur-xl"
        />
      </div>
    </section>
  )
}

export default Hero 