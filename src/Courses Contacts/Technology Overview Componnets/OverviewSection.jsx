import React from 'react';
import { motion } from 'framer-motion';

const OverviewSection = () => {
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

  return (
    <motion.div
      className="bg-[#121212] py-16 px-6 font-sans"
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
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Program Highlight Section */}
        <motion.div
          className="bg-[#1e1e1e] text-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold mb-6 text-gradient">
            Program Highlights
          </h2>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            Upgrade your skills with our cutting-edge Web Development Program.
          </p>
          <ul className="space-y-6">
            <li className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] p-4 rounded-full shadow-md">
                <img
                  src="path-to-icon1.png"
                  alt="Program Icon"
                  className="w-8 h-8"
                />
              </div>
              <span className="text-lg">
                Industry-aligned curriculum tailored for professionals.
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-[#FF5722] to-[#FFC107] p-4 rounded-full shadow-md">
                <img
                  src="path-to-icon2.png"
                  alt="Accreditation Icon"
                  className="w-8 h-8"
                />
              </div>
              <span className="text-lg">
                Certification endorsed by{' '}
                <span className="text-yellow-400 font-semibold">Google</span>.
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-[#3F51B5] to-[#2196F3] p-4 rounded-full shadow-md">
                <img
                  src="path-to-icon3.png"
                  alt="Expertise Icon"
                  className="w-8 h-8"
                />
              </div>
              <span className="text-lg">
                Hands-on projects to foster real-world expertise.
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-[#E91E63] to-[#F44336] p-4 rounded-full shadow-md">
                <img
                  src="path-to-icon4.png"
                  alt="Internship Partners Icon"
                  className="w-8 h-8"
                />
              </div>
              <span className="text-lg">150+ Global Internship Partners.</span>
            </li>
          </ul>
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="bg-[#1e1e1e] text-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold mb-6">
            Register for Our Web Development Program
          </h2>
          <form className="space-y-6">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <label className="block text-lg font-semibold text-gray-300 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-600 bg-[#1a1a1a] text-white rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your full name"
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <label className="block text-lg font-semibold text-gray-300 mb-2">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-600 bg-[#1a1a1a] text-white rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your contact number"
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <label className="block text-lg font-semibold text-gray-300 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-gray-600 bg-[#1a1a1a] text-white rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email address"
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <label className="block text-lg font-semibold text-gray-300 mb-2">
                Organization Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-600 bg-[#1a1a1a] text-white rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your Organization name"
              />
            </motion.div>
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FFA500] to-[#FF4500] text-white font-semibold text-lg rounded-lg px-4 py-3 hover:from-[#FF4500] hover:to-[#FFA500] transition-transform duration-200 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Enquiry
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OverviewSection;
