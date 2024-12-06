import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaUserGraduate, FaHandshake } from 'react-icons/fa';

const Ratingmain = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const stats = [
    {
      icon: <FaStar className="w-8 h-8" />,
      value: "4.8",
      label: "Google Rating",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: <FaUserGraduate className="w-8 h-8" />,
      value: "50K+",
      label: "Mentees Trained",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      value: "500+",
      label: "Hiring Partners",
      gradient: "from-blue-400 to-cyan-500"
    }
  ];

  return (
    <motion.div 
      className="relative text-white py-12 px-8 rounded-2xl border border-gray-800 max-w-4xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background with blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-gray-900 rounded-2xl" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex justify-around items-center flex-wrap gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center group"
            variants={itemVariants}
          >
            {/* Icon Container */}
            <motion.div
              className={`bg-gray-800/50 p-6 rounded-2xl shadow-lg backdrop-blur-sm
                         border border-gray-700/50 group-hover:border-gray-600
                         group-hover:bg-gradient-to-r group-hover:${stat.gradient}`}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              {/* Icon with glow effect */}
              <div className="relative">
                <div className="absolute inset-0 blur-sm bg-white/20 rounded-full" />
                <div className="relative text-white group-hover:text-white/90">
                  {stat.icon}
                </div>
              </div>
            </motion.div>

            {/* Value with animated counting effect */}
            <motion.div
              className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mt-4
                         group-hover:from-yellow-400 group-hover:to-orange-400 transition-all duration-300"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2 + 0.3 }}
            >
              {stat.value}
            </motion.div>

            {/* Label */}
            <div className="text-gray-400 text-sm mt-2 font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-px left-20 right-20 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20" />
      <div className="absolute -bottom-px left-20 right-20 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20" />
    </motion.div>
  );
};

export default Ratingmain;
