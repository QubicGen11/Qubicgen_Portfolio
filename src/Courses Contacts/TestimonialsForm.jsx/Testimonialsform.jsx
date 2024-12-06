import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser, FaEnvelope, FaBriefcase, FaQuoteRight, FaImage } from 'react-icons/fa';

const TestimonialsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    designation: '',
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const existingTestimonials = JSON.parse(localStorage.getItem('testimonials') || '[]');
      const newTestimonial = {
        ...formData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString()
      };
      
      localStorage.setItem('testimonials', JSON.stringify([...existingTestimonials, newTestimonial]));
      toast.success('Thank you for your testimonial!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
        designation: '',
        image: null
      });
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-12 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <div className="h-[600px] w-1/2">
        <img 
          src="https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="" 
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      
      <div className="w-1/2 max-w-2xl">
        <div className="text-center mb-6">
          <FaQuoteRight className="mx-auto h-10 w-10 text-yellow-400" />
          <h2 className="mt-4 text-2xl font-extrabold text-white">
            Share Your Experience
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            Your feedback helps us improve and inspires others in their journey
          </p>
        </div>

        <div className="backdrop-blur-lg bg-white/10 rounded-2xl shadow-xl overflow-hidden">
          <form onSubmit={handleSubmit} className="p-6">
            <div className="space-y-4">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-5 w-5 text-yellow-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="block w-full pl-10 pr-3 py-2.5 border border-transparent rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white/30 transition duration-150"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-yellow-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="block w-full pl-10 pr-3 py-2.5 border border-transparent rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white/30 transition duration-150"
                    required
                  />
                </div>
              </div>

              {/* Designation */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaBriefcase className="h-5 w-5 text-yellow-400" />
                </div>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  placeholder="Your Role / Designation"
                  className="block w-full pl-10 pr-3 py-2.5 border border-transparent rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white/30 transition duration-150"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share your experience..."
                  rows="3"
                  className="block w-full px-4 py-2.5 border border-transparent rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white/30 transition duration-150"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-150"
                >
                  Submit Testimonial
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsForm;