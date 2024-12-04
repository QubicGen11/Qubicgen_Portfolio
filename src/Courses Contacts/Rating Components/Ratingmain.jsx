import React from 'react';

const Ratingmain = () => {
  return (
    <div className=" text-white py-8 px-6 rounded-xl border border-gray-700 max-w-4xl mx-auto shadow-2xl bg-[#1a1a1a]">
      <div className="flex justify-around items-center space-x-8">
        {/* Google Rating */}
        <div className="flex flex-col items-center group">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md group-hover:scale-105 group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:to-[#FFA500] transition-all duration-300 ease-in-out">
            <img
              src="path-to-icon1.png"
              alt="Google Rating"
              className="w-10 h-10"
            />
          </div>
          <div className="text-2xl font-bold text-purple-400 mt-2 group-hover:text-yellow-400 transition-colors duration-300">
            4.8
          </div>
          <div className="text-gray-400 text-sm">Google Rating</div>
        </div>

        {/* Mentees Trained */}
        <div className="flex flex-col items-center group">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md group-hover:scale-105 group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:to-[#FFA500] transition-all duration-300 ease-in-out">
            <img
              src="path-to-icon2.png"
              alt="Mentees Trained"
              className="w-10 h-10"
            />
          </div>
          <div className="text-2xl font-bold text-purple-400 mt-2 group-hover:text-yellow-400 transition-colors duration-300">
            50K+
          </div>
          <div className="text-gray-400 text-sm">Mentees Trained</div>
        </div>

        {/* Hiring Partner */}
        <div className="flex flex-col items-center group">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md group-hover:scale-105 group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:to-[#FFA500] transition-all duration-300 ease-in-out">
            <img
              src="path-to-icon3.png"
              alt="Hiring Partner"
              className="w-10 h-10"
            />
          </div>
          <div className="text-2xl font-bold text-purple-400 mt-2 group-hover:text-yellow-400 transition-colors duration-300">
            500+
          </div>
          <div className="text-gray-400 text-sm">Hiring Partner</div>
        </div>
      </div>
    </div>
  );
};

export default Ratingmain;
