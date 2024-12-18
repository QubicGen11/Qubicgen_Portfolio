import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
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

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const fallbackTestimonials = [
  
  {
    _id: '1',
    name: 'Vandana Bheemireddy',
    designation: 'RPA Developer',
    testimonial: 'The RPA Developer course was a game-changer for me. The automation projects were challenging and rewarding, and the instructors were incredibly supportive.'
  }
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(fallbackTestimonials);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('https://qg.vidyantra-dev.com/qubicgen/allTestimonials');
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials');
        }
        const data = await response.json();
        if (data && data.length > 0) {
          setTestimonials([...data, ...fallbackTestimonials]);
        }
      } catch (err) {
        console.error('Error fetching testimonials:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <div className="bg-[#1a1a1a] text-white py-10 flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#1a1a1a] text-white py-10 flex justify-center items-center min-h-[400px]">
        <p className="text-red-400">Error loading testimonials: {error}</p>
      </div>
    );
  }

  return (
    <motion.div 
      className="bg-[#1a1a1a] text-white py-24 px-6 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="text-center mb-16"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
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
              <FaQuoteLeft className="text-4xl" />
            </motion.div>
            What Our Students Say
          </span>
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-400 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Hear what our graduates have to say about their learning experience
        </motion.p>
      </motion.div>
      <motion.div 
        className="overflow-hidden relative px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex animate-scroll space-x-6 mx-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial._id || index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
              className="bg-gradient-to-br from-[#2e2e2e] to-[#252525] rounded-xl shadow-xl p-8 flex flex-col items-start w-[350px] min-w-[350px] relative overflow-hidden"
            >
              <motion.div 
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              />
              <div className="flex items-center mb-6">
                <motion.div 
                  className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl font-bold mr-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.7 }}
                >
                  {testimonial.name[0]}
                </motion.div>
                <div>
                  <motion.h2 
                    className="text-xl font-semibold text-gray-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {testimonial.name}
                  </motion.h2>
                  <motion.p 
                    className="text-sm text-purple-400 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {testimonial.designation}
                  </motion.p>
                </div>
              </div>
              <motion.p 
                className="text-gray-400 text-sm leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {testimonial.testimonial}
              </motion.p>
              <motion.div 
                className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-tl-full -z-10"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;
