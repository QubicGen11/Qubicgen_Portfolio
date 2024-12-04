import React from 'react'
import Navbar from '../../HomeComponents/Navbar'

const CoursesHero = () => {
  return (
    <>
    <Navbar/>
    <div className="relative min-h-[80vh] w-full flex flex-col justify-center bg-[#242424]">
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
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-['Parkinsans']">
            Transform Your Future{' '}
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text">
              With Us
            </span>
            <br />
            Through Expert Training
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-2xl ">
            Elevate your skills with industry-focused programs designed 
            to launch you into the future of technology.
          </p>

          <button className="mt-8 px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FF8C00] text-[#242424] font-['Parkinsans'] font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default CoursesHero;
