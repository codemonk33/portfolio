import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye, X, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { fadeUpVariants, staggerContainerVariants, hoverVariants, scaleInVariants } from '../utils/motion'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
      longDescription: "This comprehensive e-commerce solution features a modern React frontend with TypeScript, a robust Node.js backend with Express, and MongoDB for data persistence. The platform includes advanced features like real-time inventory management, user reviews and ratings, order tracking, and a responsive admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
      ],
      techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Stripe"],
      features: [
        "User authentication & authorization",
        "Product catalog with search & filters",
        "Shopping cart & checkout process",
        "Payment integration with Stripe",
        "Admin dashboard for management",
        "Responsive design for all devices"
      ],
      github: "https://github.com/omtiwari/ecommerce",
      live: "https://ecommerce-demo.omtiwari.dev",
      category: "Full-Stack",
      status: "Completed"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration, and progress tracking.",
      longDescription: "Built with Next.js and Firebase, this task management app enables teams to collaborate effectively on projects. Features include real-time updates, drag-and-drop task organization, team member management, and comprehensive progress analytics.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
      ],
      techStack: ["Next.js", "Firebase", "Tailwind CSS", "Framer Motion", "TypeScript"],
      features: [
        "Real-time task updates",
        "Team collaboration tools",
        "Drag & drop organization",
        "Progress tracking & analytics",
        "Mobile-responsive design",
        "Push notifications"
      ],
      github: "https://github.com/omtiwari/task-manager",
      live: "https://task-manager.omtiwari.dev",
      category: "Frontend",
      status: "Completed"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my work with smooth animations and interactive elements.",
      longDescription: "This portfolio website demonstrates modern web development practices with smooth animations, responsive design, and accessibility features. Built with React and Framer Motion, it showcases my skills and projects in an engaging way.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop"
      ],
      techStack: ["React", "Framer Motion", "Tailwind CSS", "Vite", "JavaScript"],
      features: [
        "Smooth animations & transitions",
        "Responsive design",
        "Dark/light theme toggle",
        "Interactive project showcase",
        "Contact form integration",
        "SEO optimization"
      ],
      github: "https://github.com/omtiwari/portfolio",
      live: "https://omtiwari.dev",
      category: "Frontend",
      status: "Completed"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      longDescription: "This weather dashboard provides comprehensive weather information with interactive maps, detailed forecasts, and historical data analysis. Users can save favorite locations and receive weather alerts.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop"
      ],
      techStack: ["React", "OpenWeather API", "Chart.js", "Leaflet Maps", "CSS Modules"],
      features: [
        "Location-based weather data",
        "Interactive weather maps",
        "7-day forecast",
        "Weather alerts & notifications",
        "Historical data charts",
        "Favorite locations"
      ],
      github: "https://github.com/omtiwari/weather-app",
      live: "https://weather.omtiwari.dev",
      category: "Frontend",
      status: "In Progress"
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "A content management system for blogs with markdown support, user management, and SEO optimization.",
      longDescription: "A full-featured blog platform built with Next.js and Prisma, featuring markdown support, user authentication, content management, and advanced SEO features. Includes an admin panel for content creators.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
      ],
      techStack: ["Next.js", "Prisma", "PostgreSQL", "Markdown", "Tailwind CSS"],
      features: [
        "Markdown editor support",
        "User authentication",
        "Content management system",
        "SEO optimization",
        "Comment system",
        "Admin dashboard"
      ],
      github: "https://github.com/omtiwari/blog-platform",
      live: "https://blog.omtiwari.dev",
      category: "Full-Stack",
      status: "Planning"
    },
    {
      id: 6,
      title: "AI Chat Assistant",
      description: "An intelligent chat assistant powered by machine learning for customer support and user interaction.",
      longDescription: "This AI-powered chat assistant uses natural language processing to provide intelligent responses to user queries. It can handle customer support, answer questions, and provide helpful information in real-time.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
      ],
      techStack: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
      features: [
        "Natural language processing",
        "Real-time chat interface",
        "Multi-language support",
        "Learning from interactions",
        "Integration with databases",
        "Analytics dashboard"
      ],
      github: "https://github.com/omtiwari/ai-chat",
      live: "https://ai-chat.omtiwari.dev",
      category: "AI/ML",
      status: "Planning"
    }
  ]

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      )
    }
  }

  const openProject = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const closeProject = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
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
            <span className="relative z-10">Featured Projects</span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
          </motion.h2>
          <motion.p 
            variants={fadeUpVariants} 
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto"
          >
            A showcase of my work and technical capabilities
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 justify-items-center"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeUpVariants}
              className="group w-full max-w-sm"
            >
              <motion.div
                variants={hoverVariants}
                whileHover="hover"
                className="card overflow-hidden cursor-pointer h-full flex flex-col"
                onClick={() => openProject(project)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Eye size={32} className="text-white" />
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : project.status === 'In Progress'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 whitespace-nowrap">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col min-h-0">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 leading-tight break-words">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 leading-relaxed text-sm break-words overflow-hidden">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4 min-h-0">
                    <div className="flex flex-wrap gap-1.5 max-h-16 overflow-hidden">
                      {project.techStack.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded whitespace-nowrap">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 mt-auto flex-shrink-0">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.github, '_blank')
                      }}
                      className="flex-1 btn-secondary text-sm py-2"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </motion.button>
                    
                    {project.live && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.live, '_blank')
                        }}
                        className="flex-1 btn-primary text-sm py-2"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeProject}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight break-words">
                        {selectedProject.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm">
                        {selectedProject.category} • {selectedProject.status}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={closeProject}
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex-shrink-0"
                    >
                      <X size={24} />
                    </motion.button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  {/* Image Carousel */}
                  <div className="relative mb-6">
                    <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                      <img
                        src={selectedProject.images[currentImageIndex]}
                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Navigation Arrows */}
                      {selectedProject.images.length > 1 && (
                        <>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
                          >
                            <ChevronLeft size={20} />
                          </motion.button>
                          
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
                          >
                            <ChevronRight size={20} />
                          </motion.button>
                        </>
                      )}
                    </div>
                    
                    {/* Image Indicators */}
                    {selectedProject.images.length > 1 && (
                      <div className="flex justify-center space-x-2 mt-4">
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                              index === currentImageIndex
                                ? 'bg-primary-600 dark:bg-primary-400'
                                : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Description */}
                    <div className="lg:col-span-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        About This Project
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        {selectedProject.longDescription}
                      </p>

                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Features
                      </h3>
                      <ul className="space-y-2 mb-6">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                            <span className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                      {/* Tech Stack */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.techStack.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm rounded-full whitespace-nowrap"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Project Links
                        </h3>
                        <div className="space-y-3">
                          <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center w-full btn-secondary"
                          >
                            <Github size={20} className="mr-2" />
                            View Source Code
                          </motion.a>
                          
                          {selectedProject.live && (
                            <motion.a
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              href={selectedProject.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center w-full btn-primary"
                            >
                              <Play size={20} className="mr-2" />
                              Live Demo
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
              Have a Project in Mind?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              <ExternalLink size={20} className="mr-2" />
              Let's Collaborate
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 