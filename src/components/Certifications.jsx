import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, ExternalLink, X, Download, Calendar, MapPin } from 'lucide-react'
import { fadeUpVariants, staggerContainerVariants, hoverVariants, scaleInVariants } from '../utils/motion'

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null)

  const certificationsData = [
    {
      id: 1,
      name: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
      date: "December 2024",
      location: "Online",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop",
      credentialId: "AWS-DEV-12345",
      description: "Comprehensive certification covering AWS development services, best practices, and architectural patterns.",
      skills: ["AWS Lambda", "DynamoDB", "API Gateway", "CloudFormation", "S3", "EC2"],
      validity: "3 years",
      verificationUrl: "https://aws.amazon.com/certification/certified-developer-associate/",
      downloadUrl: "https://aws.amazon.com/certification/certified-developer-associate/"
    },
    {
      id: 2,
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "November 2024",
      location: "Online",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop",
      credentialId: "GCP-DEV-67890",
      description: "Advanced certification demonstrating expertise in Google Cloud Platform development and deployment.",
      skills: ["Cloud Functions", "Cloud Run", "BigQuery", "Pub/Sub", "Cloud Storage", "Kubernetes"],
      validity: "2 years",
      verificationUrl: "https://cloud.google.com/certification/cloud-developer",
      downloadUrl: "https://cloud.google.com/certification/cloud-developer"
    },
    {
      id: 3,
      name: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      date: "October 2024",
      location: "Online",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop",
      credentialId: "AZURE-DEV-11223",
      description: "Professional certification for Azure cloud development and solution architecture.",
      skills: ["Azure Functions", "Cosmos DB", "App Service", "Service Bus", "Blob Storage", "Azure DevOps"],
      validity: "2 years",
      verificationUrl: "https://www.microsoft.com/en-us/learning/certification/azure-developer-associate/",
      downloadUrl: "https://www.microsoft.com/en-us/learning/certification/azure-developer-associate/"
    },
    {
      id: 4,
      name: "Certified Scrum Master (CSM)",
      issuer: "Scrum Alliance",
      date: "September 2024",
      location: "Mumbai, India",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
      credentialId: "CSM-45678",
      description: "Professional certification demonstrating expertise in Scrum methodology and agile project management.",
      skills: ["Scrum Framework", "Agile Principles", "Team Facilitation", "Sprint Planning", "Retrospectives"],
      validity: "2 years",
      verificationUrl: "https://www.scrumalliance.org/certifications/certified-scrum-master",
      downloadUrl: "https://www.scrumalliance.org/certifications/certified-scrum-master"
    },
    {
      id: 5,
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "August 2024",
      location: "Online",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=400&fit=crop",
      credentialId: "MONGODB-DEV-33445",
      description: "Specialized certification in MongoDB database development and administration.",
      skills: ["MongoDB Atlas", "Aggregation Pipeline", "Indexing", "Sharding", "Replication", "Data Modeling"],
      validity: "3 years",
      verificationUrl: "https://university.mongodb.com/course_completion",
      downloadUrl: "https://university.mongodb.com/course_completion"
    },
    {
      id: 6,
      name: "React Developer Certification",
      issuer: "Meta",
      date: "July 2024",
      location: "Online",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=400&fit=crop",
      credentialId: "REACT-DEV-55667",
      description: "Official certification demonstrating advanced React development skills and best practices.",
      skills: ["React Hooks", "Context API", "Performance Optimization", "Testing", "State Management", "Component Design"],
      validity: "2 years",
      verificationUrl: "https://www.meta.com/certification",
      downloadUrl: "https://www.meta.com/certification"
    }
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={fadeUpVariants}
              className="group"
            >
                              <motion.div
                  variants={hoverVariants}
                  whileHover="hover"
                  className="card overflow-hidden cursor-pointer h-full"
                  onClick={() => openCert(cert)}
                  onTouchStart={() => openCert(cert)}
                >
                {/* Certificate Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* View Details Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <Award size={32} className="mx-auto mb-2" />
                      <span className="text-sm font-medium">View Details</span>
                    </div>
                  </div>

                  {/* Issuer Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200">
                      {cert.issuer}
                    </span>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {cert.name}
                  </h3>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-2" />
                      {cert.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-2" />
                      {cert.location}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 leading-relaxed text-sm">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.slice(0, 3).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                          +{cert.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Validity */}
                  <div className="mt-auto">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
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
               className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
               onClick={closeCert}
               onTouchStart={closeCert}
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
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedCert.name}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        {selectedCert.issuer} • {selectedCert.date}
                      </p>
                    </div>
                                         <motion.button
                       whileHover={{ scale: 1.1 }}
                       whileTap={{ scale: 0.9 }}
                       onClick={(e) => {
                         e.stopPropagation();
                         closeCert();
                       }}
                       onTouchStart={(e) => e.stopPropagation()}
                       className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                     >
                       <X size={24} />
                     </motion.button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Certificate Image */}
                    <div>
                      <div className="relative rounded-lg overflow-hidden">
                        <img
                          src={selectedCert.image}
                          alt={selectedCert.name}
                          className="w-full h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    </div>

                    {/* Certificate Details */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          About This Certification
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {selectedCert.description}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Credential Details
                        </h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Credential ID:</span>
                            <span className="font-medium text-gray-900 dark:text-white">{selectedCert.credentialId}</span>
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
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Skills Covered
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedCert.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-3 pt-4">
                        <motion.a
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={selectedCert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full btn-secondary"
                          onClick={(e) => e.stopPropagation()}
                          onTouchStart={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={20} className="mr-2" />
                          Verify Credential
                        </motion.a>
                        
                        <motion.a
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={selectedCert.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full btn-primary"
                          onClick={(e) => e.stopPropagation()}
                          onTouchStart={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={20} className="mr-2" />
                          Preview Certificate
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
              <span>• AWS Certified Developer</span>
              <span>• Google Cloud Professional</span>
              <span>• Azure Developer Associate</span>
              <span>• Certified Scrum Master</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications 