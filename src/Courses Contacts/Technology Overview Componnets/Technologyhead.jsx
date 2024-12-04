import React from 'react';
import { motion } from 'framer-motion';

const Technologyhead = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-16 px-6 h-[60vh] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1555725305-e823b44548de?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Light Opacity Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <motion.div
        className="relative container mx-auto text-center text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Title Section */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          Web Development :{' '}
          <span className="text-white">Advance Your Career With Our Program</span>
        </motion.h1>

        {/* Details Section */}
      

        {/* Buttons Section */}
        <motion.div
          className="mt-10 flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.button
            className="bg-white text-purple-800 font-semibold px-6 py-3 rounded-md shadow-md text-lg hover:bg-gray-200"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download Brochure
          </motion.button>
          <motion.button
            className="bg-purple-600 text-white text-lg font-semibold px-6 py-3 rounded-md shadow-md hover:bg-purple-500"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Apply Now
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologyhead;
