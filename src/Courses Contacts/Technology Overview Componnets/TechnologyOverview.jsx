import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FormModal from './FormModal'; // Import the modal component

const TechnologyOverview = ({ 
  title, 
  description, 
  startDate, 
  duration, 
  rating,
  courseImage,
  courseBanner,
  brochure
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch('http://localhost:9098/qubicgen/newEnrollment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Close the modal and download the brochure
      handleModalClose();
      if (brochure) {
        window.open(brochure, '_blank');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Format the date to show month name
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleString('default', { month: 'long' });
  };

  return (
    <motion.div   
      className="relative min-h-[90vh] w-full flex flex-col justify-center bg-[#111]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={courseBanner}
          alt="Technology background"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.8)] to-[rgba(14,26,37,0.60)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between">
        {/* Left Text Content */}
        <motion.div 
          className="max-w-2xl text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight whitespace-nowrap">
            <span className="text-[#00FF00]">{title}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-lg">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <motion.button 
              className="px-8 py-4 bg-white text-[#0e1a25] font-semibold rounded-lg shadow-md hover:bg-gray-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleModalOpen}
            >
              Download Brochure
            </motion.button>
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-white font-semibold rounded-lg shadow-md hover:from-[#FFA500] hover:to-[#FF8C00]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleModalOpen}
            >
              Apply Now
            </motion.button>
          </div>
        </motion.div>

        {/* Right Program Details */}
        <motion.div
          className="flex flex-col gap-10 mt-12 md:mt-20 items-center md:items-start"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 }}
        >
          {/* Batch Details */}
          <motion.div
            className="flex flex-row items-center justify-between bg-gradient-to-r from-[#6A0DAD] to-[#8E44AD] text-white py-6 px-8 rounded-lg shadow-lg w-[320px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div>
              <div className="text-lg font-semibold">Batch Starting</div>
              <div className="text-3xl font-bold text-[#ADFF2F]">{formatDate(startDate)}</div>
              <div className="text-sm mt-2 text-[#FF4500]">5 seats left</div>
            </div>
            <div className="text-4xl">📅</div>
          </motion.div>

          {/* Duration */}
          <motion.div
            className="flex flex-row items-center justify-between bg-gradient-to-r from-[#FFA07A] to-[#FF4500] text-white py-6 px-8 rounded-lg shadow-lg w-[320px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div>
              <div className="text-lg font-semibold">Duration</div>
              <div className="text-3xl font-bold text-[#FFFFFF]">{duration || '2-3 Months'}</div>
            </div>
            <div className="text-4xl">⏳</div>
          </motion.div>

          {/* Program Rating */}
          <motion.div
            className="flex flex-row items-center justify-between bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-white py-6 px-8 rounded-lg shadow-lg w-[320px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div>
              <div className="text-lg font-semibold">Program Rating</div>
              <div className="text-3xl font-bold flex items-center">
                {rating || '4.8'} <span className="ml-2 text-yellow-300">★</span>
              </div>
            </div>
            <div className="text-4xl">⭐</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Form Modal */}
      <FormModal 
        isOpen={isModalOpen} 
        onClose={handleModalClose} 
        onSubmit={handleFormSubmit} 
      />
    </motion.div>
  );
};

export default TechnologyOverview;
