import React from 'react';

const OverviewSection = () => {
  return (
    <div className="bg-[#1a1a1a] py-16 px-6 font-sans">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Program Highlight Section */}
        <div className="bg-[#242424] text-white rounded-lg p-8 shadow-md">
          <h2 className="text-3xl font-bold mb-4">Program Highlight</h2>
          <p className="text-lg text-gray-400 mb-6">
            Transform your skills with our comprehensive program
          </p>
          <ul className="space-y-6">
            <li className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-4 rounded-full">
                <img
                  src="path-to-icon1.png"
                  alt="Program Icon"
                  className="w-8 h-8"
                />
              </div>
              <span className="text-lg">
                Designed for executives, consultants, and entrepreneurs
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-4 rounded-full">
                <img
                  src="path-to-icon2.png"
                  alt="Accreditation Icon"
                  className="w-8 h-8"
                />
              </div>
              <span className="text-lg">
                Accreditation from{' '}
                <span className="text-lime-400 font-semibold">Wipro</span>
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-4 rounded-full">
                <img
                  src="path-to-icon3.png"
                  alt="Expertise Icon"
                  className="w-8 h-8"
                />
              </div>
              <span className="text-lg">
                Fosters expertise and innovation for professional growth
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-4 rounded-full">
                <img
                  src="path-to-icon4.png"
                  alt="Internship Partners Icon"
                  className="w-8 h-8"
                />
              </div>
              <span className="text-lg">100+ Internship Partners</span>
            </li>
          </ul>
        </div>

        {/* Form Section */}
        <div className="bg-[#242424] text-white rounded-lg p-8 shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Fill the form to apply for Web Development Program
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-lg font-semibold text-gray-300 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-600 bg-[#1a1a1a] text-white rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Name"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-300 mb-2">
                Phone number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-600 bg-[#1a1a1a] text-white rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Phone number"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-300 mb-2">
                Email ID <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-gray-600 bg-[#1a1a1a] text-white rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Email Address"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-300 mb-2">
                College name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-600 bg-[#1a1a1a] text-white rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="College name*"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-white font-semibold text-lg rounded-lg px-4 py-3 hover:from-[#FFA500] hover:to-[#FFD700] transition"
            >
              Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
