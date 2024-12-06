import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaLaptopCode, FaGlobe } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { MdOutlineWorkspacePremium } from 'react-icons/md';

const OverviewSection = ({ courseData }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const formatDate = (dateString) => {
    if (!dateString) return "soon";
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "soon"; // Invalid date
      
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return "soon";
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-b from-[#121212] to-[#1a1a1a] py-16 px-6 font-sans"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.3 },
        },
      }}
    >
      <div className="container mx-auto">
        <motion.div
          className="bg-gradient-to-r from-[#1e1e1e] to-[#252525] text-white rounded-xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
          variants={itemVariants}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {courseData?.courseName || "Course Overview"}
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto"
              variants={itemVariants}
            >
              {courseData?.courseDescription || "Transform your career with our comprehensive program. Master the latest technologies and build real-world projects."}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="space-y-8"
              variants={itemVariants}
            >
              <div className="flex items-start space-x-6 p-6 bg-[#1a1a1a] rounded-lg hover:bg-[#1f1f1f] transition-all duration-300">
                <motion.div 
                  className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center text-white text-2xl shadow-lg"
                  whileHover="hover"
                  variants={iconVariants}
                >
                  <FaLaptopCode />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Course Duration</h3>
                  <p className="text-gray-400">{courseData?.duration || 6} weeks of intensive training with hands-on projects</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 bg-[#1a1a1a] rounded-lg hover:bg-[#1f1f1f] transition-all duration-300">
                <motion.div 
                  className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg flex items-center justify-center text-white text-2xl shadow-lg"
                  whileHover="hover"
                  variants={iconVariants}
                >
                  <FaCertificate />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Course Type</h3>
                  <p className="text-gray-400">{courseData?.courseType || "Professional Training"}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="space-y-8"
              variants={itemVariants}
            >
              <div className="flex items-start space-x-6 p-6 bg-[#1a1a1a] rounded-lg hover:bg-[#1f1f1f] transition-all duration-300">
                <motion.div 
                  className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white text-2xl shadow-lg"
                  whileHover="hover"
                  variants={iconVariants}
                >
                  <MdOutlineWorkspacePremium />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Technologies</h3>
                  <p className="text-gray-400">{courseData?.technologies || "Cutting-edge tech stack"}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 bg-[#1a1a1a] rounded-lg hover:bg-[#1f1f1f] transition-all duration-300">
                <motion.div 
                  className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg flex items-center justify-center text-white text-2xl shadow-lg"
                  whileHover="hover"
                  variants={iconVariants}
                >
                  <FaGlobe />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Batch Size</h3>
                  <p className="text-gray-400">Limited to {courseData?.maxMentees || "small"} students for personalized attention</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <div className="inline-flex items-center space-x-2 text-sm text-gray-400">
              <BiCodeAlt className="text-purple-500" />
              <span>Next batch starting {formatDate(courseData?.startDate)}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OverviewSection;
