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
    name: 'Sarah Johnson',
    designation: 'Full Stack Developer',
    testimonial: 'The web development course was incredibly comprehensive. The hands-on projects and real-world applications helped me secure my dream job. Highly recommended!'
  },
  {
    _id: '2',
    name: 'Michael Chen',
    designation: 'Data Science Student',
    testimonial: 'The instructors are extremely knowledgeable and supportive. The course structure made complex concepts easy to understand. Ive gained confidence in my programming skills.'
  },
  {
    _id: '3',
    name: 'Priya Patel',
    designation: 'UI/UX Designer',
    testimonial: 'This course transformed my design approach. The blend of theory and practical exercises was perfect. I now have a strong portfolio and better career prospects.'
  },
  {
    _id: '4',
    name: 'Alex Rodriguez',
    designation: 'Cloud Architecture Student',
    testimonial: 'The cloud computing modules were excellent. Real-world scenarios and hands-on labs made learning AWS and Azure much easier. Great learning experience!'
  },
  {
    _id: '5',
    name: 'Emma Wilson',
    designation: 'Cybersecurity Enthusiast',
    testimonial: 'The cybersecurity course exceeded my expectations. Practical labs and industry-relevant content helped me understand complex security concepts effectively.'
  },
  {
    _id: '6',
    name: 'Raj Sharma',
    designation: 'Machine Learning Engineer',
    testimonial: 'The AI/ML course provided deep insights into neural networks and deep learning. The practical projects helped me understand real-world applications.'
  },
  {
    _id: '7',
    name: 'Lisa Wang',
    designation: 'DevOps Engineer',
    testimonial: 'Excellent DevOps course! Learned CI/CD pipelines, containerization, and cloud deployment. The hands-on labs were particularly helpful.'
  },
  {
    _id: '8',
    name: 'James Anderson',
    designation: 'Blockchain Developer',
    testimonial: 'The blockchain development course was outstanding. From smart contracts to DApp development, everything was explained clearly with practical examples.'
  },
  {
    _id: '9',
    name: 'Sophia Martinez',
    designation: 'Mobile App Developer',
    testimonial: 'The mobile app development course was fantastic! Learning both iOS and Android development has opened up many career opportunities.'
  },
  {
    _id: '10',
    name: 'David Kim',
    designation: 'Game Developer',
   
    testimonial: 'The game development course was amazing! Learning Unity and C# through practical projects was both fun and educational.'
  },
  {
    _id: '11',
    name: 'Aisha Patel',
    designation: 'Data Analytics Student',
    testimonial: 'The data analytics course provided excellent insights into data visualization and statistical analysis. The real-world projects were invaluable.'
  },
  {
    _id: '12',
    name: 'Tom Wilson',
    designation: 'IoT Specialist',
    testimonial: 'The IoT course was comprehensive and practical. Working with various sensors and microcontrollers gave me hands-on experience in embedded systems.'
  },
  {
    _id: '13',
    name: 'Nina Petrova',
    designation: 'QA Engineer',
    testimonial: 'The software testing course was thorough and practical. Learned both manual and automated testing techniques. The industry projects were very helpful.'
  },
  {
    _id: '14',
    name: 'Carlos Mendoza',
    designation: 'Frontend Developer',
    testimonial: 'The React and Vue.js courses were excellent! The project-based learning approach helped me master modern frontend development.'
  },
  {
    _id: '15',
    name: 'Emily Chang',
    designation: 'Backend Developer',
    testimonial: 'The Node.js and Python backend development courses were fantastic. The microservices architecture projects were particularly enlightening.'
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
