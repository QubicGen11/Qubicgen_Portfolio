import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import './Secureplacements.css';

const Secureplacements = () => {
  const topLogos = [
    { 
      id: 1, 
      src: "https://zerodha.com/static/images/logo.svg", 
      alt: "Zerodha",
      invert: true 
    },
    { 
      id: 2, 
      src: "https://corizo.in/wp-content/themes/techglobiz/images/brand-logo202.png", 
      alt: "Khatabook",
      invert: false 
    },
    { 
      id: 3, 
      src: "https://corizo.in/wp-content/themes/techglobiz/images/brand-logo204.png", 
      alt: "Expedia",
      invert: false 
    },
    { 
      id: 4, 
      src: "https://corizo.in/wp-content/themes/techglobiz/images/brand-logo201.png", 
      alt: "NoBroker",
      invert: false 
    },
  ];

  const bottomLogos = [
    { 
      id: 1, 
      src: "https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_1.svg?v=1732879309", 
      alt: "Boat",
      invert: true 
    },
    { 
      id: 2, 
      src: "https://www.ultratechcement.com/content/experience-fragments/ultratechcement/in/ihb/header/master1/_jcr_content/root/container_copy_86747432/container/image_copy.coreimg.png/1727338314222/ultratech-cement-logo.png", 
      alt: "Speedcheck",
      invert: false 
    },
    { 
      id: 3, 
      src: "https://fastly-production.24c.in/cars24/seo/static/1_20230830_1693395013.png", 
      alt: "Cars24",
      invert: true 
    },
    { 
      id: 4, 
      src: "https://corizo.in/wp-content/themes/techglobiz/images/brand-logo205.png", 
      alt: "Razorpay",
      invert: false 
    },
  ];

  const LogoComponent = ({ logo }) => (
    <motion.div 
      className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl p-6 w-52 h-28 group"
      whileHover={{ 
        scale: 1.05,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        transition: { duration: 0.2 }
      }}
    >
      <img 
        src={logo.src} 
        alt={logo.alt}
        className={`max-h-16 w-auto object-contain ${logo.invert ? 'brightness-0 invert' : ''}`}
      />
    </motion.div>
  );

  return (
    <div className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
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
                <FaBriefcase className="text-4xl" />
              </motion.div>
              Secure Placements with Top Brands
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Join leading companies and kickstart your career journey
          </motion.p>
        </motion.div>
        
        <div className="relative overflow-hidden py-8">
          {/* First Row */}
          <div className="flex gap-8 marquee-container">
            <div className="flex gap-8 marquee">
              {[...topLogos, ...topLogos].map((logo, idx) => (
                <LogoComponent key={`${logo.id}-${idx}`} logo={logo} />
              ))}
            </div>
            <div className="flex gap-8 marquee" aria-hidden="true">
              {[...topLogos, ...topLogos].map((logo, idx) => (
                <LogoComponent key={`${logo.id}-${idx}-duplicate`} logo={logo} />
              ))}
            </div>
          </div>

          {/* Second Row */}
          <div className="flex gap-8 marquee-container-reverse mt-8">
            <div className="flex gap-8 marquee-reverse">
              {[...bottomLogos, ...bottomLogos].map((logo, idx) => (
                <LogoComponent key={`${logo.id}-${idx}`} logo={logo} />
              ))}
            </div>
            <div className="flex gap-8 marquee-reverse" aria-hidden="true">
              {[...bottomLogos, ...bottomLogos].map((logo, idx) => (
                <LogoComponent key={`${logo.id}-${idx}-duplicate`} logo={logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secureplacements;