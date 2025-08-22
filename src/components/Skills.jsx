import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Cloud, Palette, Wrench, Brain } from 'lucide-react'
import { fadeUpVariants, staggerContainerVariants, hoverVariants } from '../utils/motion'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const skillCategories = [
    {
      id: 'frontend',
      name: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 90, projects: ['Portfolio', 'E-commerce App', 'Dashboard'] },
        { name: 'JavaScript', level: 95, projects: ['All Projects', 'API Integration', 'DOM Manipulation'] },
        { name: 'TypeScript', level: 85, projects: ['Enterprise App', 'Type Safety', 'Interfaces'] },
        { name: 'HTML/CSS', level: 95, projects: ['Responsive Design', 'CSS Grid', 'Flexbox'] },
        { name: 'Tailwind CSS', level: 90, projects: ['Portfolio', 'Component Library', 'Utility-first'] },
        { name: 'Next.js', level: 80, projects: ['SSR Apps', 'API Routes', 'File-based Routing'] }
      ]
    },
    {
      id: 'backend',
      name: 'Backend Development',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 85, projects: ['REST APIs', 'Authentication', 'File Upload'] },
        { name: 'Express.js', level: 80, projects: ['Middleware', 'Routing', 'Error Handling'] },
        { name: 'Python', level: 75, projects: ['Data Analysis', 'Automation', 'Scripts'] },
        { name: 'MongoDB', level: 70, projects: ['CRUD Operations', 'Aggregation', 'Indexing'] },
        { name: 'PostgreSQL', level: 65, projects: ['Database Design', 'Queries', 'Relations'] }
      ]
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'AWS', level: 70, projects: ['EC2', 'S3', 'Lambda'] },
        { name: 'Docker', level: 65, projects: ['Containerization', 'Multi-stage Builds'] },
        { name: 'Git', level: 90, projects: ['Version Control', 'Collaboration', 'CI/CD'] },
        { name: 'Vercel', level: 85, projects: ['Deployment', 'Serverless Functions'] },
        { name: 'Netlify', level: 80, projects: ['Static Sites', 'Form Handling'] }
      ]
    },
    {
      id: 'design',
      name: 'Design & UX',
      icon: Palette,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Figma', level: 75, projects: ['Wireframes', 'Prototypes', 'Design Systems'] },
        { name: 'Adobe XD', level: 70, projects: ['UI Design', 'User Flows', 'Mockups'] },
        { name: 'Responsive Design', level: 90, projects: ['Mobile-first', 'Breakpoints', 'Flexibility'] },
        { name: 'User Experience', level: 80, projects: ['User Research', 'Usability Testing', 'Accessibility'] }
      ]
    },
    {
      id: 'tools',
      name: 'Development Tools',
      icon: Wrench,
      color: 'from-indigo-500 to-blue-500',
      skills: [
        { name: 'VS Code', level: 95, projects: ['Extensions', 'Debugging', 'Productivity'] },
        { name: 'Chrome DevTools', level: 85, projects: ['Debugging', 'Performance', 'Network'] },
        { name: 'Postman', level: 80, projects: ['API Testing', 'Collections', 'Automation'] },
        { name: 'Framer Motion', level: 85, projects: ['Animations', 'Transitions', 'Gestures'] }
      ]
    },
    {
      id: 'soft',
      name: 'Soft Skills',
      icon: Brain,
      color: 'from-teal-500 to-green-500',
      skills: [
        { name: 'Problem Solving', level: 90, projects: ['Algorithm Design', 'Debugging', 'Optimization'] },
        { name: 'Communication', level: 85, projects: ['Team Collaboration', 'Client Interaction', 'Documentation'] },
        { name: 'Time Management', level: 80, projects: ['Project Planning', 'Deadlines', 'Prioritization'] },
        { name: 'Learning', level: 95, projects: ['New Technologies', 'Best Practices', 'Industry Trends'] }
      ]
    }
  ]

  const currentCategory = skillCategories.find(cat => cat.id === activeCategory)

  return (
    <section id="skills" className="section bg-white dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUpVariants} className="section-title">
            Skills & Expertise
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="section-subtitle">
            My technical skills and competencies across various domains
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex overflow-x-auto sm:flex-wrap sm:justify-center gap-3 mb-12 -mx-4 px-4"
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              variants={hoverVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`inline-flex items-center space-x-2 px-5 py-2.5 rounded-full font-medium transition-all duration-200 whitespace-nowrap leading-none max-w-[80vw] sm:max-w-none ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <category.icon size={20} />
              <span className="truncate">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {/* Progress Bars */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
              <currentCategory.icon size={24} className={`mr-3 sm:w-7 sm:h-7 bg-gradient-to-r ${currentCategory.color} bg-clip-text text-transparent`} />
              {currentCategory.name}
            </h3>
            
            {currentCategory.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-center justify-between mb-2 min-w-0">
                  <span className="font-medium text-gray-900 dark:text-white truncate pr-3">{skill.name}</span>
                  <span className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
                    {skill.level}%
                  </span>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full bg-gradient-to-r ${currentCategory.color} rounded-full relative`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-full"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </div>

                {/* Project Tooltip */}
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 min-w-0">
                  <span className="text-xs text-gray-500 dark:text-gray-400 block truncate">
                    Used in: {skill.projects.join(', ')}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Circular Progress & Stats */}
          <div className="space-y-8">
            {/* Overall Progress */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Overall Proficiency
              </h4>
              <div className="relative inline-block">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-gray-200 dark:text-gray-700"
                  />
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeLinecap="round"
                    className="text-primary-500"
                    initial={{ strokeDasharray: 0, strokeDashoffset: 0 }}
                    animate={{ 
                      strokeDasharray: `${2 * Math.PI * 56}`,
                      strokeDashoffset: `${2 * Math.PI * 56 * (1 - 0.85)}`
                    }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">85%</span>
                </div>
              </div>
            </div>

            {/* Skill Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {skillCategories.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Categories</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Skills</div>
              </div>
            </div>

            {/* Learning Focus */}
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Currently Learning
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Machine Learning</span>
                  <span className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-2 py-1 rounded-full">
                    In Progress
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Blockchain Development</span>
                  <span className="text-xs bg-accent-100 dark:bg-accent-900 text-accent-800 dark:text-accent-200 px-2 py-1 rounded-full">
                    Planning
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8 border border-primary-200 dark:border-primary-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to continuous learning. I regularly participate in 
              online courses, attend tech conferences, and contribute to open-source projects to stay current.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 