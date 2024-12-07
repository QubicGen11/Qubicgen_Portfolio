import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../HomeComponents/Navbar';

const CoursesHero = ({ onApplyNow }) => {
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

  return (
    <>
      <Navbar />
      <motion.div 
        className="relative min-h-[80vh] w-full flex flex-col justify-center bg-[#242424]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/8199133/pexels-photo-8199133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Courses background"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#242424]/90 via-[#242424]/70 to-[#242424]/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Transform Your Future{' '}
              <motion.span 
                className="inline-block bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text relative"
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 8px rgb(255,215,0)",
                  transition: { duration: 0.2 }
                }}
              >
                With Us
              </motion.span>
              <br />
              Through Expert Training
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl"
              variants={textVariants}
            >
              Elevate your skills with industry-focused programs designed 
              to launch you into the future of technology.
            </motion.p>

            <motion.button 
              className="mt-8 px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FF8C00] text-[#242424] font-semibold rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onApplyNow}
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default CoursesHero;