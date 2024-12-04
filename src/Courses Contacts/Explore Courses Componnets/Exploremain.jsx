import React, { useState } from 'react';

const Exploremain = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const getRandomImage = () => {
    return `https://corizo.in/wp-content/uploads/2024/09/UI_Design.jpg`;
  };

  const courses = [
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

  const categories = ['All', 'Tech Data', 'Mechanics', 'Business', 'Medical', 'Design', 'Bootcamp', 'AI & ML', 'Cloud Computing', 'Digital Marketing', 'Data Science'];

  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="bg-[#2e2e2e] rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
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
                    {course.title}
                  </h3>
                  <span className="bg-[#3e3e3e] px-3 py-1 rounded-full text-sm font-semibold">
                    {course.price}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  {course.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center text-sm">
                      <span className="text-yellow-400 mr-1">★</span>
                      {course.rating}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {course.students} students
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between space-x-4">
                  <button className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black px-4 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 hover:shadow-lg">
                    Enroll Now
                  </button>
                  <button 
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
