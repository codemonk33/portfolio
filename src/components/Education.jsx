import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, BookOpen } from 'lucide-react'
import { fadeUpVariants, staggerContainerVariants } from '../utils/motion'

const educationData = [
      {
      id: 1,
      degree: "Bachelor of Engineering",
      field: "Computer Engineering",
      institution: "Atharva College of Engineering",
      location: "Mumbai, Maharashtra",
      duration: "2023 - 2027",
      gpa: "8.1/10.0",
      status: "current",
      highlights: [
        "Current GPA: 8.1 - Consistent academic performance",
        "Programming Languages: C, C++, Python, JavaScript",
        "Web Technologies: React, React Native, Node.js, MongoDB",
        "Problem Solving: Active on LeetCode, Codeforces, CodeChef",
        "Projects: CureAi (React Native health app), To-Do List app"
      ],
      projects: [
        "CureAi - AI Health Guide",
        "To-Do List Mobile App",
        "Mumbai Hackathon 2024"
      ]
    },
      {
      id: 2,
      degree: "Higher Secondary Certificate",
      field: "Science (PCM + Computer Science)",
      institution: "Mumbai University Affiliated School",
      location: "Mumbai, Maharashtra",
      duration: "2021 - 2023",
      percentage: "85%+",
      status: "completed",
      highlights: [
        "Mathematics, Physics, Chemistry, Computer Science",
        "Strong foundation in programming and logical thinking",
        "Participated in coding competitions and hackathons",
        "Developed interest in software development and problem solving"
      ]
    }
]

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={fadeUpVariants} 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 relative"
          >
            <span className="relative z-10">Education</span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
          </motion.h2>
          <motion.p 
            variants={fadeUpVariants} 
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto"
          >
            My academic journey in computer engineering and technology
          </motion.p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={fadeUpVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-800 z-10">
                {edu.status === 'current' && (
                  <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping"></div>
                )}
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Status Badge */}
                  {edu.status === 'current' && (
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mb-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      Currently Pursuing
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {edu.field}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* GPA/Percentage */}
                  {(edu.gpa || edu.percentage) && (
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-5 h-5 text-yellow-500" />
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {edu.gpa ? `CGPA: ${edu.gpa}` : `Score: ${edu.percentage}`}
                      </span>
                    </div>
                  )}

                  {/* Highlights */}
                  {edu.highlights && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Key Highlights:
                      </h4>
                      <ul className="space-y-1">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Projects */}
                  {edu.projects && (
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Notable Projects:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.projects.map((project, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded-full"
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education