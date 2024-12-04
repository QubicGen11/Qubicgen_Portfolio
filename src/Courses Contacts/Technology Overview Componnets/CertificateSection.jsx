import React from 'react';
import { motion } from 'framer-motion';

const CertificateShowcase = () => {
  const certificates = [
    {
      id: 1,
      image: 'https://corizo.in/wp-content/uploads/2024/09/c11.jpg',
      alt: 'Certificate of Excellence',
    },
    {
      id: 2,
      image: 'https://corizo.in/wp-content/uploads/2024/09/c22.jpg',
      alt: 'Certificate of Internship',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const certificateVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="py-16 overflow-hidden "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto text-center px-4">
        <motion.h2
          className="text-4xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certify your Success
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              className="relative group rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl"
              variants={certificateVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <motion.img
                src={certificate.image}
                alt={certificate.alt}
                className="w-full h-auto object-cover rounded-lg"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <p className="text-white text-lg font-semibold">{certificate.alt}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CertificateShowcase;