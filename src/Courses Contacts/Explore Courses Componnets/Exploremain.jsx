'use client'

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Exploremain = () => {
  const navigate = useNavigate();

  const handleCourseClick = (courseId, action) => {
    if (action === 'enroll') {
      // Handle enrollment logic
      console.log('Enrolling in course:', courseId);
    } else {
      navigate(`/technology/${courseId}`);
    }
  };

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [courses, setCourses] = useState([]);
  const getRandomImage = () => {
    const images = [
      'data:image/png;base64,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'
      // Add more image URLs here...
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  const staticCourses = [
    {
      title: 'Web Development',
      image: getRandomImage(),
      description: 'Master Web Fundamentals to Build Your Own Website',
      category: 'Tech Data',
      rating: 4.8,
      students: '20K+',
      price: '$99'
    },
    {
      title: 'Android Development',
      image: getRandomImage(),
      description: 'Master Android Programming to Create Your Own Mobile',
      category: 'Tech Data',
      rating: 4.9,
      students: '15K+',
      price: '$89',
      tag: 'Best Seller'
    },
    {
      title: 'Cyber Security',
      image: getRandomImage(),
      description: 'Master Cloud Security to Safeguard Your Digital Assets',
      category: 'Tech Data',
      rating: 4.7,
      students: '10K+',
      price: '$79'
    },
    {
      title: 'Machine Learning',
      image: getRandomImage(),
      description: 'Learn ML Algorithms and Build Intelligent Systems',
      category: 'AI & ML',
      rating: 4.8,
      students: '25K+',
      price: '$99'
    },
    {
      title: 'Data Analysis',
      image: getRandomImage(),
      description: 'Master Data Analysis and Visualization',
      category: 'Data Science',
      rating: 4.6,
      students: '12K+',
      price: '$69'
    },
    {
      title: 'UI/UX Design',
      image: getRandomImage(),
      description: 'Create Beautiful and User-Friendly Interfaces',
      category: 'Design',
      rating: 4.7,
      students: '18K+',
      price: '$89'
    },
    {
      title: 'Cyber Security',
      image: getRandomImage(),
      description: 'Master Cloud Security to Safeguard Your Digital Assets',
      category: 'Tech Data',
      rating: 4.7,
      students: '10K+',
      price: '$79'
    },
    {
      title: 'Machine Learning',
      image: getRandomImage(),
      description: 'Learn ML Algorithms and Build Intelligent Systems',
      category: 'AI & ML',
      rating: 4.8,
      students: '25K+',
      price: '$99'
    },
    {
      title: 'Data Analysis',
      image: getRandomImage(),
      description: 'Master Data Analysis and Visualization',
      category: 'Data Science',
      rating: 4.6,
      students: '12K+',
      price: '$69'
    },
    {
      title: 'UI/UX Design',
      image: getRandomImage(),
      description: 'Create Beautiful and User-Friendly Interfaces',
      category: 'Design',
      rating: 4.7,
      students: '18K+',
      price: '$89'
    },
    {
      title: 'Full Stack Development',
      image: getRandomImage(),
      description: 'Become a Full Stack Developer in 3 months',
      category: 'Bootcamp',
      rating: 4.8,
      students: '20K+',
      price: '$99'
    },
    {
      title: 'Investment Banking',
      image: getRandomImage(),
      description: 'Master Financial Planning and Investment Strategies',
      category: 'Business',
      rating: 4.7,
      students: '10K+',
      price: '$79',
      tag: 'New'
    },
    {
      title: 'Medical Terminology',
      image: getRandomImage(),
      description: 'Learn Essential Medical Terms and Concepts',
      category: 'Medical',
      rating: 4.6,
      students: '12K+',
      price: '$69'
    },
    {
      title: 'Mechanical Design',
      image: getRandomImage(),
      description: 'Master CAD and Mechanical Design Principles',
      category: 'Mechanics',
      rating: 4.7,
      students: '18K+',
      price: '$89'
    }
  ];


  useEffect(() => {
    const storedCourses = localStorage.getItem('courses');
    if (storedCourses) {
      const parsedCourses = JSON.parse(storedCourses);
      setCourses([...staticCourses, ...parsedCourses]);
    } else {
      setCourses(staticCourses);
    }
  }, []);

  const categories = ['All', ...new Set(courses.map(course => course.courseType || course.category))];

  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(course => (course.courseType || course.category) === selectedCategory);

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

        {/* Horizontal Category Navigation */}
        <div className="relative">
          <div className="flex overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
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

      {/* Courses Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id || index}
              className="bg-[#2e2e2e] rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={course.image || course.courseImage || 'https://corizo.in/wp-content/uploads/2024/09/UI_Design.jpg'}
                  alt={course.title || course.courseName}
                  className="w-full h-48 object-cover"
                />
                {course.tag && (
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {course.tag}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-[#FFD700] transition-colors duration-300">
                    {course.title || course.courseName}
                  </h3>
                  {course.price && (
                    <span className="bg-[#3e3e3e] px-3 py-1 rounded-full text-sm font-semibold">
                      {course.price}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  {course.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center text-sm">
                      <span className="text-yellow-400 mr-1">★</span>
                      {course.rating || 'N/A'}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {course.students || `${course.mentees} mentees`}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between space-x-4">
                  <button 
                    onClick={() => handleCourseClick(course.id || index, 'enroll')}
                    className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black px-4 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 hover:shadow-lg"
                  >
                    Enroll Now
                  </button>
                  <button 
                    onClick={() => handleCourseClick(course.id || index, 'details')}
                    className="relative overflow-hidden px-4 py-2 rounded-lg font-semibold text-[#FFD700] group-hover:text-black transition-colors duration-300"
                  >
                    <span className="relative z-10">Know More</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FFA500] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      →
                    </span>
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

