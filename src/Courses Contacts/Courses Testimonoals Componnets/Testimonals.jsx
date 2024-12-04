import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Parthiv Kumar',
    course: 'Cybersecurity',
    university: 'Amrita Vishwa Vidyapeetham',
    title: 'I am grateful to Corizo for this wonderful opportunity',
    description:
      'During this intensive program, I gained valuable knowledge and hands-on experience in various aspects of cybersecurity...',
    image: 'path-to-parthiv-image',
  },
  {
    name: 'Ashi Dabhade',
    course: 'Psychology',
    university: 'Shri Vaishnav Vidyapeeth Vishwavidyalaya',
    title: 'I got deep insights into psychological theories and practical skills',
    description:
      'This experience has been incredibly enriching, providing me with deep insights into psychological theories...',
    image: 'path-to-ashi-image',
  },
  {
    name: 'Pavan R V',
    course: 'Data Science',
    university: 'Amrita Vishwa Vidyapeetham',
    title: 'Guidance and expertise were instrumental in my learning journey',
    description:
      'Thank you, Corizo, for providing such a valuable opportunity...',
    image: 'path-to-pavan-image',
  },
  {
    name: 'Prabash Tankala',
    course: 'Web Development',
    university: 'GITAM Deemed University',
    title: 'This experience allowed me to enhance my technical skills',
    description:
      'I recently completed a rewarding internship at Corizo, where I had the opportunity to delve deeply into the field of Machine Learning...',
    image: 'path-to-prabash-image',
  },
  {
    name: 'Simran Yaseen',
    course: 'Nanoscience & Technology',
    university: 'GD Goenka University',
    title: 'This journey has been rewarding',
    description:
      'This journey has been rewarding, providing me with invaluable skills and insights that I am eager to apply in my professional endeavors...',
    image: 'path-to-simran-image',
  },
  {
    name: 'Aashi Makhija',
    course: 'Marketing',
    university: 'Vellore Institute of Technology',
    title: 'I got to learn how to build a strong network and create posts',
    description:
      'I’m happy to share with you all that I completed my internship at Corizo, as a Marketing Intern in the past 4 weeks...',
    image: 'path-to-aashi-image',
  },
  {
    name: 'Aashi Makhija',
    course: 'Marketing',
    university: 'Vellore Institute of Technology',
    title: 'I got to learn how to build a strong network and create posts',
    description:
      'I’m happy to share with you all that I completed my internship at Corizo, as a Marketing Intern in the past 4 weeks...',
    image: 'path-to-aashi-image',
  },
  {
    name: 'Aashi Makhija',
    course: 'Marketing',
    university: 'Vellore Institute of Technology',
    title: 'I got to learn how to build a strong network and create posts',
    description:
      'I’m happy to share with you all that I completed my internship at Corizo, as a Marketing Intern in the past 4 weeks...',
    image: 'path-to-aashi-image',
  },
  {
    name: 'Aashi Makhija',
    course: 'Marketing',
    university: 'Vellore Institute of Technology',
    title: 'I got to learn how to build a strong network and create posts',
    description:
      'I’m happy to share with you all that I completed my internship at Corizo, as a Marketing Intern in the past 4 weeks...',
    image: 'path-to-aashi-image',
  },
  {
    name: 'Aashi Makhija',
    course: 'Marketing',
    university: 'Vellore Institute of Technology',
    title: 'I got to learn how to build a strong network and create posts',
    description:
      'I’m happy to share with you all that I completed my internship at Corizo, as a Marketing Intern in the past 4 weeks...',
    image: 'path-to-aashi-image',
  },
  {
    name: 'Aashi Makhija',
    course: 'Marketing',
    university: 'Vellore Institute of Technology',
    title: 'I got to learn how to build a strong network and create posts',
    description:
      'I’m happy to share with you all that I completed my internship at Corizo, as a Marketing Intern in the past 4 weeks...',
    image: 'path-to-aashi-image',
  },
  {
    name: 'Aashi Makhija',
    course: 'Marketing',
    university: 'Vellore Institute of Technology',
    title: 'I got to learn how to build a strong network and create posts',
    description:
      'I’m happy to share with you all that I completed my internship at Corizo, as a Marketing Intern in the past 4 weeks...',
    image: 'path-to-aashi-image',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

const Testimonials = () => {
  return (
    <motion.div 
      className="bg-[#1a1a1a] text-white py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 
        className="text-center text-4xl font-bold mb-12 text-gray-200"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        What Our Students Say
      </motion.h1>
      <motion.div 
        className="overflow-hidden relative px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex animate-scroll space-x-6 mx-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
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
                    {testimonial.course}
                  </motion.p>
                  <motion.p 
                    className="text-sm text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {testimonial.university}
                  </motion.p>
                </div>
              </div>
              <motion.h3 
                className="text-gray-100 font-bold text-lg mb-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                {testimonial.title}
              </motion.h3>
              <motion.p 
                className="text-gray-400 text-sm leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {testimonial.description}
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
