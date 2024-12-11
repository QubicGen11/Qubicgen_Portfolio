import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const CertificateSection = ({ certificate, certificate2 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const certificates = [certificate, certificate2].filter(Boolean);

  useEffect(() => {
    if (certificates.length <= 1 || isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [certificates.length, isHovered]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const bulletPointVariants = {
    hover: {
      scale: 1.5,
      backgroundColor: "#8B5CF6",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="bg-[#1a1a1a] py-5 px-6">
      <motion.div 
        className="container mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-5xl font-bold text-white mb-6 relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Course Certificate
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Upon successful completion of the course, you'll receive an industry-recognized certificate
          </motion.p>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-[#1e1e1e] to-[#252525] rounded-xl p-12 shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-500"
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2">
              <motion.h3 
                className="text-3xl font-semibold text-white mb-8 flex items-center"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCertificate className="text-yellow-500 mr-4 text-4xl" />
                </motion.div>
                Professional Certificate
              </motion.h3>
              <motion.ul 
                className="space-y-6 text-gray-300"
                variants={containerVariants}
              >
                {[
                  "Industry-recognized certification",
                  "Validates your expertise",
                  "Digital and physical copies provided",
                  "Shareable on LinkedIn and other platforms"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center transform hover:translate-x-2 transition-transform duration-300 text-lg"
                    variants={listItemVariants}
                    custom={index}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.span 
                      className="w-3 h-3 bg-purple-500 rounded-full mr-4"
                      variants={bulletPointVariants}
                      whileHover="hover"
                    />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            
            <div 
              className="w-full md:w-1/2"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative group h-[400px]"
                >
                  {certificates[currentIndex] ? (
                    <motion.img
                      src={certificates[currentIndex]}
                      alt={`Certificate ${currentIndex + 1}`}
                      className="w-full h-full object-contain rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.3)] group-hover:shadow-[0_10px_30px_rgba(139,92,246,0.3)] transition-all duration-500"
                      loading="lazy"
                      style={{ objectFit: 'contain' }}
                    />
                  ) : (
                    <div className="w-full h-full bg-[#252525] rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 text-xl">Certificate preview not available</span>
                    </div>
                  )}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  />
                </motion.div>
              </AnimatePresence>

              {certificates.length > 1 && (
                <div className="flex justify-center mt-4 gap-2">
                  {certificates.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentIndex === index 
                          ? 'bg-purple-500 w-4' 
                          : 'bg-gray-500 hover:bg-purple-400'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CertificateSection;