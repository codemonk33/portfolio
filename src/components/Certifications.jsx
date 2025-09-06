import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, ExternalLink, X, Download, Calendar, MapPin } from 'lucide-react'
import { fadeUpVariants, staggerContainerVariants, hoverVariants, scaleInVariants } from '../utils/motion'
import { isMobile, getMobileAnimationConfig } from '../utils/mobile'

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null)
  const [isMobileDevice, setIsMobileDevice] = useState(false)

  useEffect(() => {
    setIsMobileDevice(isMobile())
    
    const handleResize = () => {
      setIsMobileDevice(isMobile())
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const certificationsData = [
    {
      id: 1,
      name: "Python (Basic) Certificate",
      issuer: "HackerRank",
      date: "August 2025",
      location: "Online",
      image: "python.jpg",
      credentialId: "F213AA1C3B04",
      description: "Comprehensive certification covering Python development services, best practices, and architectural patterns.",
      skills: ["Lambda", "Maps", "OOPS", "Data Structures" , "Functions"],
      validity: "Lifetime",
      verificationUrl: "https://www.hackerrank.com/certificates/iframe/f213aa1c3b04",
      downloadUrl: "https://www.hackerrank.com/certificates/iframe/f213aa1c3b04 "
    },
    {   
      id: 2,
      name: "SQL (Advanced) Certificate",
      issuer: "HackerRank",
      date: "September 2025",
      location: "Online",
      image: "SQL.jpg",
      credentialId: "5C6843939DCC",
      description: "Validates advanced SQL skills in querying, optimization, and data analysis, including expertise in joins, subqueries, window functions, performance tuning, and handling complex datasets.",
      skills: ["Advanced SQL Queries", "Joins & Subqueries", "Window Functions", "Query Optimization", "Data Aggregation & Analytics", "Database Management"],
      validity: "Lifetime",
      verificationUrl: "https://www.hackerrank.com/certificates/iframe/5c6843939dcc",
      downloadUrl: "https://www.hackerrank.com/certificates/iframe/5c6843939dcc"
    },
    {
      id: 3,
      name: "Machine Learning",
      issuer: "Udemy",
      date: "September 2025",
      location: "Online",
      image: "Machine-Learning.png",
      credentialId: "UC-31bc540d-41ef-458b-af1b-a3dbd842df46",
      description: "Comprehensive certification in Machine Learning, Artificial Intelligence, Python, and R, with hands-on training across real-world datasets and AI applications. The course also integrates ChatGPT-based tools for modern AI-driven problem solving.",
      skills: ["Supervised Learning (Regression, Classification)",

            "Unsupervised Learning (Clustering, Association Rules)",

            "Deep Learning (ANN, CNN, RNN)",

            "Natural Language Processing (NLP)",

            "Reinforcement Learning",

            "Model Selection & Evaluation (Cross-Validation, Bias-Variance)",

            "Python for Machine Learning",
            "AI & ChatGPT Integration"],
      validity: "Lifetime",
      verificationUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-31bc540d-41ef-458b-a1fb-a3dbd842df46.jpg",
      downloadUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-31bc540d-41ef-458b-a1fb-a3dbd842df46.jpg"
    },
    {
      id: 4,
      name: "Data Structure and Algorithms",
      issuer: "Udemy",
      date: "Ongoing",
      location: "Online",
      image: "DSA.jpg",
      credentialId: ".....",
      description: "This certification in Data Structures and Algorithms with C and C++ validates expertise in recursion, data structures, sorting, searching, and complexity analysis, showcasing analytical and optimization skills essential for efficient software development and system design.",
      skills: ["Implementation of Data Structures in C++",

            "Recursive Algorithm Design",

            "Core Data Structures",

            "Sorting & Searching Techniques",

            "Advanced Structures",

            "Algorithm Complexity Analysis",

            "Analytical Thinking & Problem-Solving"],
      validity: "Lifetime",
      verificationUrl: "",
      downloadUrl: ""
    },

    {
      id: 5,
      name: "Mobile Development with React Native",
      issuer: "Udemy",
      date: "Ongoing",
      location: "Online",
      image: "React-Native.png",
      credentialId: ".....",
      description: "Specialized certification in React Native development, with hands-on training in building mobile applications using React Native and JavaScript.",
      skills: ["React Native & React Hooks","JavaScript (ES6+) & TypeScript","Redux & Context API","REST APIs, GraphQL, Firebase","Push notifications & offline storage","App deployment"],
      validity: "Lifetime",
      verificationUrl: "",
      downloadUrl: ""
    },
   
  ]

  const openCert = (cert) => {
    setSelectedCert(cert)
  }

  const closeCert = () => {
    setSelectedCert(null)
  }

  return (
    <section id="certifications" className="section bg-white dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUpVariants} className="section-title">
            Certifications & Awards
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="section-subtitle">
            Professional certifications and recognition for my skills and expertise
          </motion.p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={fadeUpVariants}
              className="group"
            >
              <motion.div
                variants={isMobileDevice ? {} : hoverVariants}
                whileHover={isMobileDevice ? {} : "hover"}
                className="card overflow-hidden cursor-pointer h-full touch-manipulation"
                onClick={() => openCert(cert)}
                onTouchEnd={(e) => {
                  // Improve touch responsiveness
                  e.stopPropagation()
                }}
              >
                {/* Certificate Image */}
                <div className={`relative overflow-hidden ${isMobileDevice ? 'h-48 sm:h-52' : 'h-48'}`}>
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className={`w-full h-full object-cover transition-transform duration-300 ${
                      isMobileDevice ? '' : 'group-hover:scale-110'
                    }`}
                    loading="lazy"
                    style={{
                      aspectRatio: '16/9',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                    isMobileDevice ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`} />
                  
                  {/* View Details Overlay */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    isMobileDevice ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    <div className="text-center text-white">
                      <Award size={isMobileDevice ? 24 : 32} className="mx-auto mb-2" />
                      <span className={`font-medium ${isMobileDevice ? 'text-xs' : 'text-sm'}`}>View Details</span>
                    </div>
                  </div>

                  {/* Issuer Badge */}
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                    <span className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200">
                      {cert.issuer}
                    </span>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className={`flex-1 flex flex-col ${isMobileDevice ? 'p-3 sm:p-4' : 'p-6'}`}>
                  <h3 className={`font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200 leading-tight ${
                    isMobileDevice ? 'text-base sm:text-lg group-hover:text-primary-600 dark:group-hover:text-primary-400' : 'text-xl group-hover:text-primary-600 dark:group-hover:text-primary-400'
                  }`}>
                    {cert.name}
                  </h3>
                  
                  <div className={`space-y-2 mb-4 text-gray-600 dark:text-gray-300 ${
                    isMobileDevice ? 'text-xs' : 'text-sm'
                  }`}>
                    <div className="flex items-center">
                      <Calendar size={isMobileDevice ? 12 : 14} className="mr-2 flex-shrink-0" />
                      <span className="truncate">{cert.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={isMobileDevice ? 12 : 14} className="mr-2 flex-shrink-0" />
                      <span className="truncate">{cert.location}</span>
                    </div>
                  </div>

                  <p className={`text-gray-600 dark:text-gray-300 mb-3 flex-1 leading-relaxed ${
                    isMobileDevice ? 'text-xs line-clamp-2 sm:line-clamp-3' : 'text-sm'
                  }`}>
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {cert.skills.slice(0, isMobileDevice ? 2 : 3).map((skill, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded text-xs leading-tight ${
                            isMobileDevice ? 'max-w-[120px] truncate' : ''
                          }`}
                          title={skill}
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > (isMobileDevice ? 2 : 3) && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                          +{cert.skills.length - (isMobileDevice ? 2 : 3)} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Validity */}
                  <div className="mt-auto">
                    <span className={`text-gray-500 dark:text-gray-400 ${
                      isMobileDevice ? 'text-xs' : 'text-xs'
                    }`}>
                      Valid until: {cert.validity}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center ${
                isMobileDevice ? 'p-2' : 'p-4'
              }`}
              onClick={closeCert}
              onTouchStart={(e) => {
                // Only close on backdrop touch, not content touch
                if (e.target === e.currentTarget) {
                  closeCert()
                }
              }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={getMobileAnimationConfig()}
                className={`bg-white dark:bg-gray-800 rounded-2xl w-full overflow-y-auto ${
                  isMobileDevice 
                    ? 'max-w-full max-h-[95vh] rounded-lg' 
                    : 'max-w-4xl max-h-[90vh]'
                }`}
                onClick={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className={`border-b border-gray-200 dark:border-gray-700 ${
                  isMobileDevice ? 'p-4' : 'p-6'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <h2 className={`font-bold text-gray-900 dark:text-white truncate ${
                        isMobileDevice ? 'text-lg' : 'text-2xl'
                      }`}>
                        {selectedCert.name}
                      </h2>
                      <p className={`text-gray-600 dark:text-gray-300 mt-1 truncate ${
                        isMobileDevice ? 'text-sm' : 'text-base'
                      }`}>
                        {selectedCert.issuer} • {selectedCert.date}
                      </p>
                    </div>
                    <motion.button
                      whileHover={isMobileDevice ? {} : { scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        closeCert();
                      }}
                      onTouchStart={(e) => e.stopPropagation()}
                      className={`rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex-shrink-0 ${
                        isMobileDevice ? 'p-2' : 'p-2'
                      }`}
                    >
                      <X size={isMobileDevice ? 20 : 24} />
                    </motion.button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className={isMobileDevice ? 'p-4' : 'p-6'}>
                  <div className={`grid gap-6 ${
                    isMobileDevice ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'
                  }`}>
                    {/* Certificate Image */}
                    <div>
                      <div className="relative rounded-lg overflow-hidden">
                        <img
                          src={selectedCert.image}
                          alt={selectedCert.name}
                          className={`w-full object-cover ${
                            isMobileDevice ? 'h-52 sm:h-64' : 'h-80'
                          }`}
                          loading="lazy"
                          style={{
                            aspectRatio: '16/9',
                            objectFit: 'cover',
                            objectPosition: 'center'
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    </div>

                    {/* Certificate Details */}
                    <div className={`space-y-4 ${isMobileDevice ? '' : 'space-y-6'}`}>
                      <div>
                        <h3 className={`font-semibold text-gray-900 dark:text-white mb-3 ${
                          isMobileDevice ? 'text-base' : 'text-lg'
                        }`}>
                          About This Certification
                        </h3>
                        <p className={`text-gray-600 dark:text-gray-300 leading-relaxed ${
                          isMobileDevice ? 'text-sm' : 'text-base'
                        }`}>
                          {selectedCert.description}
                        </p>
                      </div>

                      <div>
                        <h3 className={`font-semibold text-gray-900 dark:text-white mb-3 ${
                          isMobileDevice ? 'text-base' : 'text-lg'
                        }`}>
                          Credential Details
                        </h3>
                        <div className={`space-y-2 ${
                          isMobileDevice ? 'text-xs' : 'text-sm'
                        }`}>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Credential ID:</span>
                            <span className="font-medium text-gray-900 dark:text-white truncate ml-2">{selectedCert.credentialId}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Issue Date:</span>
                            <span className="font-medium text-gray-900 dark:text-white">{selectedCert.date}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Location:</span>
                            <span className="font-medium text-gray-900 dark:text-white">{selectedCert.location}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Validity:</span>
                            <span className="font-medium text-gray-900 dark:text-white">{selectedCert.validity}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className={`font-semibold text-gray-900 dark:text-white mb-3 ${
                          isMobileDevice ? 'text-base' : 'text-lg'
                        }`}>
                          Skills Covered
                        </h3>
                        <div className={`flex flex-wrap gap-1 sm:gap-2 ${
                          isMobileDevice ? 'max-h-32 overflow-y-auto' : ''
                        }`}>
                          {selectedCert.skills.map((skill, index) => (
                            <span
                              key={index}
                              className={`px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full ${
                                isMobileDevice ? 'text-xs' : 'text-sm'
                              }`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className={`pt-4 ${isMobileDevice ? 'space-y-2' : 'space-y-3'}`}>
                        <motion.a
                          whileHover={isMobileDevice ? {} : { scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={selectedCert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center w-full btn-secondary touch-manipulation ${
                            isMobileDevice ? 'btn-mobile-full' : ''
                          }`}
                          onClick={(e) => e.stopPropagation()}
                          onTouchStart={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={isMobileDevice ? 16 : 20} className="mr-2" />
                          <span className={isMobileDevice ? 'text-sm' : ''}>Verify Credential</span>
                        </motion.a>
                        
                        <motion.a
                          whileHover={isMobileDevice ? {} : { scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={selectedCert.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center w-full btn-primary touch-manipulation ${
                            isMobileDevice ? 'btn-mobile-full' : ''
                          }`}
                          onClick={(e) => e.stopPropagation()}
                          onTouchStart={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={isMobileDevice ? 16 : 20} className="mr-2" />
                          <span className={isMobileDevice ? 'text-sm' : ''}>Preview Certificate</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
              Continuous Learning Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              I believe in continuous learning and professional development. These certifications represent my commitment 
              to staying current with industry best practices and expanding my technical expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-300">
              <span>• DevOps</span>
              <span>• Mobile Development</span>
              <span>• Cloud Computing</span>
              <span>• AI/ML</span> 
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications 