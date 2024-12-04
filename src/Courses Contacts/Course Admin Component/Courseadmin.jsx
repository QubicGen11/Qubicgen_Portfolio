import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast, Toaster } from 'react-hot-toast';
import { 
  AcademicCapIcon,
  HomeIcon,
  UsersIcon,
  ChartBarIcon,
  CogIcon,
  DocumentTextIcon,
  PlusIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

const AdminPage = () => {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    courseName: "",
    courseType: "",
    description: "",
    duration: "",
    mentees: "",
    startDate: "",
    rating: "",
    courseImage: null,
    brochure: null,
    certificateImage: null,
    technologies: "",
  });
  
  const [lessons, setLessons] = useState([{ name: "", description: "" }]);

  // Load courses from localStorage on component mount
  useEffect(() => {
    const savedCourses = localStorage.getItem("courses");
    if (savedCourses) {
      setCourses(JSON.parse(savedCourses));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const addLesson = () => {
    setLessons([...lessons, { name: "", description: "" }]);
  };

  const handleLessonChange = (index, field, value) => {
    const updatedLessons = [...lessons];
    updatedLessons[index][field] = value;
    setLessons(updatedLessons);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Create a new course object with all data
      const newCourse = {
        ...formData,
        id: Date.now().toString(),
        lessons: lessons,
        createdAt: new Date().toISOString()
      };

      // Update courses array
      const updatedCourses = [...courses, newCourse];
      setCourses(updatedCourses);
      
      // Save to localStorage
      localStorage.setItem("courses", JSON.stringify(updatedCourses));

      // Show success message
      toast.success('Course created successfully!');
      
      // Reset form
      setFormData({
        courseName: "",
        courseType: "",
        description: "",
        duration: "",
        mentees: "",
        startDate: "",
        rating: "",
        courseImage: null,
        brochure: null,
        certificateImage: null,
        technologies: "",
      });
      setLessons([{ name: "", description: "" }]);
    } catch (error) {
      toast.error('Error creating course. Please try again.');
      console.error('Error creating course:', error);
    }
  };

  const menuItems = [
    { icon: HomeIcon, text: 'Dashboard' },
    { icon: AcademicCapIcon, text: 'Courses', active: true },
    { icon: UsersIcon, text: 'Students' },
    { icon: ChartBarIcon, text: 'Analytics' },
    { icon: DocumentTextIcon, text: 'Reports' },
    { icon: CogIcon, text: 'Settings' }
  ];

  return (
    <div className="flex min-h-screen bg-gray-900">
      <Toaster position="top-right" />
      
      {/* Sidebar */}
      <motion.div 
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        className="w-64 bg-gray-800 min-h-screen fixed left-0 top-0 text-white p-4 border-r border-gray-700"
      >
        <div className="flex items-center justify-center mb-8 pt-4">
          <BookOpenIcon className="h-8 w-8 text-yellow-400 mr-2" />
          <motion.h1 
            className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Course Admin
          </motion.h1>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                item.active 
                  ? 'bg-yellow-500/20 text-yellow-400' 
                  : 'hover:bg-gray-700 text-gray-300 hover:text-white'
              }`}
              whileHover={{ x: 5 }}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.text}</span>
            </motion.div>
          ))}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
            <p className="text-sm text-gray-400">Logged in as</p>
            <p className="font-semibold text-yellow-400">Admin User</p>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Create a New Course
          </motion.h1>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg shadow-xl space-y-6 border border-gray-700 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Grid layout for form fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Course Name */}
              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                <label className="block text-lg font-semibold mb-2 text-gray-200">Course Name *</label>
                <input
                  type="text"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleInputChange}
                  placeholder="Enter course name"
                  className="w-full px-4 py-2 rounded-md bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                  required
                />
              </motion.div>

              {/* Course Type */}
              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                <label className="block text-lg font-semibold mb-2 text-gray-200">Course Type *</label>
                <select
                  name="courseType"
                  value={formData.courseType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                  required
                >
                  <option value="">Select course type</option>
                  <option value="Technology">Technology</option>
                  <option value="Management">Management</option>
                  <option value="Design">Design</option>
                </select>
              </motion.div>

              {/* Technologies Used */}
              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                <label className="block text-lg font-semibold mb-2 text-gray-200">Technologies Used *</label>
                <input
                  type="text"
                  name="technologies"
                  value={formData.technologies}
                  onChange={handleInputChange}
                  placeholder="e.g., React, Node.js, Python"
                  className="w-full px-4 py-2 rounded-md bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                  required
                />
              </motion.div>

              {/* Duration */}
              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                <label className="block text-lg font-semibold mb-2 text-gray-200">Duration *</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  placeholder="e.g., 2-3 Months"
                  className="w-full px-4 py-2 rounded-md bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                  required
                />
              </motion.div>

              {/* Start Date */}
              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                <label className="block text-lg font-semibold mb-2 text-gray-200">Start Date *</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                  required
                />
              </motion.div>

              {/* Mentees */}
              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                <label className="block text-lg font-semibold mb-2 text-gray-200">Max Mentees *</label>
                <input
                  type="number"
                  name="mentees"
                  value={formData.mentees}
                  onChange={handleInputChange}
                  placeholder="Enter max number of mentees"
                  className="w-full px-4 py-2 rounded-md bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                  required
                  min="1"
                />
              </motion.div>
            </div>

            {/* Description */}
            <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <label className="block text-lg font-semibold mb-2 text-gray-200">Course Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter course description"
                className="w-full px-4 py-2 rounded-md bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                rows="4"
                required
              ></textarea>
            </motion.div>

            {/* File Uploads */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                <label className="block text-lg font-semibold mb-2 text-gray-200">Course Image *</label>
                <input
                  type="file"
                  name="courseImage"
                  onChange={handleInputChange}
                  accept="image/*"
                  className="w-full px-4 py-2 rounded-md bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-yellow-400 file:text-black hover:file:bg-yellow-500"
                  required
                />
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                <label className="block text-lg font-semibold mb-2 text-gray-200">Brochure (PDF) *</label>
                <input
                  type="file"
                  name="brochure"
                  onChange={handleInputChange}
                  accept=".pdf"
                  className="w-full px-4 py-2 rounded-md bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-yellow-400 file:text-black hover:file:bg-yellow-500"
                  required
                />
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                <label className="block text-lg font-semibold mb-2 text-gray-200">Certificate *</label>
                <input
                  type="file"
                  name="certificateImage"
                  onChange={handleInputChange}
                  accept="image/*"
                  className="w-full px-4 py-2 rounded-md bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-yellow-400 file:text-black hover:file:bg-yellow-500"
                  required
                />
              </motion.div>
            </div>

            {/* Lessons Section */}
            <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <div className="flex items-center justify-between mb-4">
                <label className="block text-lg font-semibold text-gray-200">Syllabus (Lessons)</label>
                <motion.button
                  type="button"
                  onClick={addLesson}
                  className="flex items-center px-4 py-2 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <PlusIcon className="h-5 w-5 mr-2" />
                  Add Lesson
                </motion.button>
              </div>

              <div className="space-y-4">
                {lessons.map((lesson, index) => (
                  <motion.div
                    key={index}
                    className="border border-gray-600 p-4 rounded-md hover:border-yellow-400 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="mb-3">
                      <label className="block text-sm font-medium mb-1 text-gray-300">Lesson Name</label>
                      <input
                        type="text"
                        value={lesson.name}
                        onChange={(e) => handleLessonChange(index, "name", e.target.value)}
                        placeholder="Enter lesson name"
                        className="w-full px-4 py-2 rounded-md bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-300">Lesson Description</label>
                      <textarea
                        value={lesson.description}
                        onChange={(e) => handleLessonChange(index, "description", e.target.value)}
                        placeholder="Enter lesson description"
                        className="w-full px-4 py-2 rounded-md bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                        rows="3"
                        required
                      ></textarea>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg rounded-md transition-all duration-300"
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(251, 191, 36, 0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              Create Course
            </motion.button>
          </motion.form>
        </motion.div>
      </main>
    </div>
  );
};

export default AdminPage;