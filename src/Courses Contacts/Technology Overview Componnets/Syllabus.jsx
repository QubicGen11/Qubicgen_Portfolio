import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen } from 'react-icons/fa';

const SyllabusSection = ({ lessons }) => {
  const [expandedId, setExpandedId] = useState(null);

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

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
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
            className="text-5xl font-bold mb-6 relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text inline-flex items-center gap-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FaBookOpen className="text-4xl" />
              </motion.div>
              Course Syllabus
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Comprehensive curriculum designed to take you from basics to advanced concepts
          </motion.p>
        </motion.div>

        <motion.div 
          className="space-y-6"
          variants={containerVariants}
        >
          {lessons && lessons.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="bg-gradient-to-br from-[#1e1e1e] to-[#252525] rounded-xl shadow-[0_0_15px_rgba(139,92,246,0.1)] overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.button
                onClick={() => toggleExpand(index)}
                className="w-full text-left px-8 py-6 flex justify-between items-center text-xl font-medium text-white focus:outline-none group"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="flex items-center gap-4">
                  <motion.span 
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-400"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {index + 1}
                  </motion.span>
                  <span className="group-hover:text-purple-400 transition-colors duration-300">
                    {item.lessonTitle}
                  </span>
                </span>
                <motion.span 
                  className="text-2xl text-purple-400"
                  animate={{ rotate: expandedId === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ↓
                </motion.span>
              </motion.button>
              
              <motion.div 
                initial={false}
                animate={{
                  height: expandedId === index ? "auto" : 0,
                  opacity: expandedId === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 py-6 text-gray-300 text-lg border-t border-purple-500/20 bg-[#1a1a1a]">
                  {item.lessonDescription}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SyllabusSection;
