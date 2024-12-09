import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
  const [isDownloadingBrochure, setIsDownloadingBrochure] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleModalOpen = (isBrochure = false) => {
    setIsDownloadingBrochure(isBrochure);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch('https://qg.vidyantra-dev.com/qubicgen/newEnrollment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
  
      // Close the modal
      handleModalClose();
      
      // Display success message
      setSuccessMessage("Our team will contact you soon!");
      
      // Wait for 3 seconds before opening the brochure
      setTimeout(() => {
        if (isDownloadingBrochure && brochure) {
          window.open(brochure, "_blank"); // Open the brochure in a new tab
        }
        setSuccessMessage(""); // Clear the success message after download
      }, 3000); // 3000 milliseconds = 3 seconds
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleDownloadBrochure = async () => {
    if (brochure) {
      try {
        const response = await fetch(brochure);
        if (!response.ok) throw new Error('Failed to download brochure');

        const blob = await response.blob();
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', 'brochure.pdf'); // Set a default file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setSuccessMessage("Thank you for downloading!"); // Set success message

        // Remove the success message after 2 seconds
        setTimeout(() => {
          setSuccessMessage(""); // Clear the success message
        }, 2000); // 2000 milliseconds = 2 seconds
      } catch (error) {
        console.error('Error downloading brochure:', error);
      }
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Enhanced text variants with stagger effect
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  // New animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 100 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "backOut"
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
      transition={{ duration: 1.2 }}
    >
      {/* Background with parallax effect */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img 
          src={courseBanner}
          alt="Technology background"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.85)] to-[rgba(14,26,37,0.75)]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between">
        {/* Left Text Content */}
        <div className=' mx-auto my-auto'>

        <motion.div 
          className="max-w-2xl text-center md:text-left"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.8, ease: "easeOut" }
              }
            }}
          >
            <span className="bg-gradient-to-r from-[#00FF00] to-[#98FB98] text-transparent bg-clip-text">{title}</span>
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-lg">
            {description}
          </p>

          {/* Enhanced Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-[#0e1a25] font-semibold rounded-lg shadow-xl hover:shadow-2xl backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255,255,255,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadBrochure}
            >
              Download Brochure
            </motion.button>
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255,215,0,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                handleModalOpen(false); // Close the modal (if it was open)
                scrollToSection("pricing"); // Scroll to the pricing section
              }}
            >
              Apply Now
            </motion.button>
          </div>
        </motion.div>
        </div>

        {/* Right Program Details with enhanced animations */}
        <motion.div
          className="flex flex-col gap-10 mt-12 md:mt-0 items-center md:items-start"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate="visible"
        >
          {/* Batch Details Card */}
          <motion.div
            variants={cardVariants}
            className="flex flex-row items-center justify-between bg-gradient-to-r from-[#6A0DAD] to-[#8E44AD] text-white py-6 px-8 rounded-lg shadow-xl hover:shadow-2xl backdrop-blur-md w-[320px]"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(106,13,173,0.4)"
            }}
          >
            <div>
              <div className="text-lg font-semibold">Batch Starting</div>
              <div className="text-3xl font-bold text-[#ADFF2F]">{formatDate(startDate)}</div>
              <div className="text-sm mt-2 text-[#FF4500]">Limited Seats Only</div>
            </div>
            <div className="text-4xl">📅</div>
          </motion.div>

          {/* Duration Card */}
          <motion.div
            variants={cardVariants}
            className="flex flex-row items-center justify-between bg-gradient-to-r from-[#FFA07A] to-[#FF4500] text-white py-6 px-8 rounded-lg shadow-xl hover:shadow-2xl backdrop-blur-md w-[320px]"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(255,69,0,0.4)"
            }}
          >
            <div>
              <div className="text-lg font-semibold">Duration</div>
              <div className="text-3xl font-bold text-[#FFFFFF]">{duration || '2-3 Months'}</div>
            </div>
            <div className="text-4xl">⏳</div>
          </motion.div>

          {/* Rating Card */}
          <motion.div
            variants={cardVariants}
            className="flex flex-row items-center justify-between bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-white py-6 px-8 rounded-lg shadow-xl hover:shadow-2xl backdrop-blur-md w-[320px]"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(255,215,0,0.4)"
            }}
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

      {/* Success Message Popup */}
      {successMessage && (
        <motion.div
          className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {successMessage}
        </motion.div>
      )}
    </motion.div>
  );
};

export default TechnologyOverview;
