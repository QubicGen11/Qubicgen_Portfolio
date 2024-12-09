'use client'

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { ThreeDots } from 'react-loader-spinner';

const Exploremain = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [detailsLoading, setDetailsLoading] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://qg.vidyantra-dev.com/qubicgen/allCourses');
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
        toast.error("Error fetching courses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleCourseClick = async (courseId, action) => {
    try {
      if (action === 'details') {
        setDetailsLoading(courseId);
        const response = await fetch(`https://qg.vidyantra-dev.com/qubicgen/courses/${courseId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch course details');
        }
        const courseDetails = await response.json();
        navigate(`/technology/${courseId}`, { state: { courseDetails } });
      } else if (action === 'enroll') {
        toast.success("Enrollment feature coming soon!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error fetching course details");
    } finally {
      setDetailsLoading(null);
    }
  };

  const categories = ['All', ...new Set(courses.map(course => course.courseType))];

  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(course => course.courseType === selectedCategory);

  if (loading) {
    return (
      <div className="bg-[#1a1a1a] text-white py-16 min-h-screen flex items-center justify-center">
        <ThreeDots 
          height="80" 
          width="80" 
          color="#FFD700" 
          ariaLabel='loading' 
          visible={true} 
        />
        <div className="text-xl ml-4">Loading courses...</div>
      </div>
    );
  }

  return (
    <div className="bg-[#1a1a1a] text-white py-16">
      {/* Header */}
      <div className="container mx-auto px-4 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500]">Premium Courses</span>
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Transform your career with industry-leading courses designed by experts
        </p>

        {/* Horizontal Category Navigation with hidden scrollbar */}
        <div className="relative">
          <div className="flex overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 no-scrollbar">
            <div className="flex space-x-4 mx-auto">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105
                    ${selectedCategory === category 
                      ? 'bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-semibold shadow-lg' 
                      : 'bg-[#2e2e2e] hover:bg-[#3e3e3e]'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add this CSS to your global styles or in a style tag */}
      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      {/* Courses Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-[#2e2e2e] rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={course.courseImage || 'https://corizo.in/wp-content/uploads/2024/09/UI_Design.jpg'}
                  alt={course.courseName}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-[#FFD700] transition-colors duration-300">
                    {course.courseName}
                  </h3>
                  <span className="bg-[#3e3e3e] px-3 py-1 rounded-full text-sm font-semibold">
                    {course.duration} hrs
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  {course.courseDescription && course.courseDescription.length > 14 
                    ? `${course.courseDescription.substring(0, 14)}...` 
                    : course.courseDescription || 'No description available'}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center text-sm">
                      <span className="text-yellow-400 mr-1">★</span>
                      {course.rating || 'N/A'}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {course.maxMentees ? `${course.maxMentees} mentees` : 'N/A'}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between space-x-4">
                  <button 
                    onClick={() => handleCourseClick(course.id, 'enroll')}
                    className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black px-4 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 hover:shadow-lg"
                  >
                    Enroll Now
                  </button>
                  <button 
                    onClick={() => handleCourseClick(course.id, 'details')}
                    className="relative overflow-hidden px-4 py-2 rounded-lg font-semibold text-[#FFD700] group-hover:text-black transition-colors duration-300"
                  >
                    {detailsLoading === course.id ? (
                      <ThreeDots 
                        height="20" 
                        width="20" 
                        color="black" 
                        ariaLabel='loading' 
                        visible={true} 
                      />
                    ) : (
                      <span className="relative z-10">Know More</span>
                    )}
                    <span className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFA500] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exploremain;

