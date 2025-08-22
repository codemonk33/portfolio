import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, Code, Trophy, Zap } from 'lucide-react'
import { fadeUpVariants } from '../utils/motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/codemonk33',
      color: 'hover:text-gray-700 dark:hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/omtiwari666/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'LeetCode',
      icon: Code,
      url: 'https://leetcode.com/u/codemonk33/',
      color: 'hover:text-yellow-500'
    },
    {
      name: 'Codeforces',
      icon: Trophy,
      url: 'https://codeforces.com/profile/codemonk33',
      color: 'hover:text-blue-500'
    },
    {
      name: 'CodeChef',
      icon: Zap,
      url: 'https://www.codechef.com/users/codemonk33',
      color: 'hover:text-orange-500'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:tiwariomse@gmail.com',
      color: 'hover:text-red-500'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">O</span>
                </div>
                <span className="text-2xl font-bold">Om Tiwari</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                A passionate Computer Engineering student and Software Developer, 
                dedicated to creating innovative solutions and building the future of technology.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-full bg-gray-800 dark:bg-gray-700 text-gray-300 transition-all duration-200 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-2 text-gray-300">
                <p>om.tiwari@example.com</p>
                <p>+91 98765 43210</p>
                <p>Mumbai, Maharashtra, India</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center text-gray-400">
              <span>© {currentYear} Om Tiwari. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <span className="flex items-center">
                Made with <Heart size={16} className="mx-1 text-red-500" /> in India
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 transform rotate-12 scale-150"></div>
      </div>
    </footer>
  )
}

export default Footer 