import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink, Code, Users, Target, Award } from 'lucide-react'
import { fadeUpVariants, staggerContainerVariants, cardHoverVariants } from '../utils/motion'

const Experience = () => {
  const [flippedCard, setFlippedCard] = useState(null)

  const experienceData = [
    {
      id: 1,
      role: "Software Development Intern",
      company: "TechCorp Solutions",
      location: "Mumbai, India",
      duration: "May 2024 - Aug 2024",
      type: "Internship",
      frontContent: {
        description: "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
        techStack: ["React", "Node.js", "MongoDB", "Express", "Git"],
        achievements: ["Improved application performance by 25%", "Reduced bug reports by 40%"]
      },
      backContent: {
        responsibilities: [
          "Developed responsive web interfaces using React and modern CSS",
          "Implemented RESTful APIs with Node.js and Express",
          "Collaborated with UI/UX designers to improve user experience",
          "Participated in code reviews and agile development processes",
          "Optimized database queries and improved application performance"
        ],
        impact: "Successfully delivered 3 major features ahead of schedule, contributing to a 15% increase in user engagement."
      }
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "StartupHub",
      location: "Remote",
      duration: "Jan 2024 - Apr 2024",
      type: "Freelance",
      frontContent: {
        description: "Built modern, responsive web applications for various clients. Focused on creating intuitive user interfaces and optimizing performance.",
        techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
        achievements: ["Completed 5 client projects", "Maintained 100% client satisfaction"]
      },
      backContent: {
        responsibilities: [
          "Designed and developed custom web applications for clients",
          "Implemented responsive design principles and accessibility features",
          "Optimized applications for performance and SEO",
          "Provided ongoing maintenance and support for deployed applications",
          "Collaborated with clients to understand requirements and provide solutions"
        ],
        impact: "Helped clients increase their online presence and user engagement through modern, performant web applications."
      }
    },
    {
      id: 3,
      role: "Open Source Contributor",
      company: "Various Projects",
      location: "GitHub",
      duration: "Ongoing",
      type: "Volunteer",
      frontContent: {
        description: "Active contributor to open source projects. Focus on improving documentation, fixing bugs, and adding new features.",
        techStack: ["JavaScript", "Python", "Git", "GitHub", "Documentation"],
        achievements: ["50+ contributions", "5 projects maintained"]
      },
      backContent: {
        responsibilities: [
          "Review and merge pull requests from other contributors",
          "Maintain and update project documentation",
          "Fix bugs and implement new features",
          "Participate in community discussions and code reviews",
          "Help onboard new contributors to projects"
        ],
        impact: "Contributed to the growth of the open source community and improved the quality of various projects."
      }
    }
  ]

  const handleCardFlip = (cardId) => {
    setFlippedCard(flippedCard === cardId ? null : cardId)
  }

  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUpVariants} className="section-title">
            Professional Experience
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="section-subtitle">
            My journey in software development and technology
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
        >
          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={fadeUpVariants}
              className="relative h-[480px] perspective-1000 w-full"
            >
              {/* Flip Card Container */}
              <motion.div
                className={`relative w-full h-full transition-all duration-500 transform-style-preserve-3d overflow-hidden ${
                  flippedCard === experience.id ? 'rotate-y-180' : ''
                }`}
                style={{ transformStyle: 'preserve-3d' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Front of Card */}
                <motion.div
                  className="absolute inset-0 w-full h-full backface-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="card h-full p-6 flex flex-col overflow-hidden">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight break-words hyphens-auto flex-1 min-w-0">
                          {experience.role}
                        </h3>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0 ${
                          experience.type === 'Internship' 
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                            : experience.type === 'Freelance'
                            ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                            : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        }`}>
                          {experience.type}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                          <Briefcase size={16} className="mr-2 flex-shrink-0" />
                          <span className="font-medium truncate">{experience.company}</span>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                          <MapPin size={14} className="mr-2 flex-shrink-0" />
                          <span className="truncate">{experience.location}</span>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                          <Calendar size={14} className="mr-2 flex-shrink-0" />
                          <span className="truncate">{experience.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1 leading-relaxed break-words hyphens-auto overflow-hidden">
                      {experience.frontContent.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 flex items-center">
                        <Code size={16} className="mr-2 flex-shrink-0" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-1.5 max-h-20 overflow-hidden">
                        {experience.frontContent.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded-full whitespace-nowrap"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-4 flex-shrink-0">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 flex items-center">
                        <Award size={16} className="mr-2 flex-shrink-0" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1 max-h-16 overflow-hidden">
                        {experience.frontContent.achievements.slice(0, 2).map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                            <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                            <span className="break-words">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Flip Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCardFlip(experience.id)}
                      className="mt-auto w-full btn-secondary text-sm"
                    >
                      View Details
                    </motion.button>
                  </div>
                </motion.div>

                {/* Back of Card */}
                <motion.div
                  className="absolute inset-0 w-full h-full backface-hidden rotate-y-180"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <div className="card h-full p-6 flex flex-col bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        Detailed Responsibilities
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium text-sm truncate">
                        {experience.role}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-4 flex-1 overflow-hidden">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 flex items-center">
                        <Users size={16} className="mr-2 flex-shrink-0" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-1.5 max-h-48 overflow-y-auto">
                        {experience.backContent.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                            <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                            <span className="break-words">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact */}
                    <div className="mb-4 flex-shrink-0">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 flex items-center">
                        <Target size={16} className="mr-2 flex-shrink-0" />
                        Impact & Results
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed break-words">
                        {experience.backContent.impact}
                      </p>
                    </div>

                    {/* Flip Back Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCardFlip(experience.id)}
                      className="mt-auto w-full btn-primary text-sm"
                    >
                      View Summary
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-motion-sm">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Looking Forward
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm always open to new opportunities and challenges. Whether it's contributing to innovative projects, 
              learning new technologies, or collaborating with talented teams, I'm excited to continue growing in my career.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary mt-6"
            >
              <ExternalLink size={20} className="mr-2" />
              Connect With Me
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 