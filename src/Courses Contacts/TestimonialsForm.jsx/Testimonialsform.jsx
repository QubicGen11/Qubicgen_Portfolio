import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser, FaEnvelope, FaBriefcase, FaQuoteRight } from 'react-icons/fa';

const TestimonialsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    designation: '',
    testimonial: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // New state for handling submission status

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state to true
    try {
      const response = await fetch('https://qg.vidyantra-dev.com/qubicgen/newTestimonial', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit testimonial');
      }

      toast.success('Thank you for your testimonial!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        designation: '',
        testimonial: ''
      });
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C] relative">
           <ToastContainer />
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/creative-designers-working-project-together_58466-11706.jpg?t=st=1733515876~exp=1733519476~hmac=dfc066e7edfa01c945f9b9e80eba55dcf5ba91d34c6ca15a41742987e6b3ea89&w=1060')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.15'
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-pink-600 text-transparent bg-clip-text">
              What Our Students Say
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Hear what our graduates have to say about their learning experience
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image and Quote */}
            <div className="space-y-8">
              <div className="relative group">
                <img 
                  src="https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Testimonial" 
                  className="rounded-2xl w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl" />
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-[#242424] rounded-2xl p-8 shadow-xl border border-gray-800">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full pl-10 pr-4 py-3 bg-[#1C1C1C] border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      className="w-full pl-10 pr-4 py-3 bg-[#1C1C1C] border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                {/* Designation Input */}
                <div className="relative">
                  <FaBriefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400" />
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    placeholder="Your Role / Designation"
                    className="w-full pl-10 pr-4 py-3 bg-[#1C1C1C] border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                {/* Testimonial Input */}
                <div>
                  <textarea
                    name="testimonial"
                    value={formData.testimonial}
                    onChange={handleInputChange}
                    placeholder="Share your experience..."
                    rows="4"
                    className="w-full px-4 py-3 bg-[#1C1C1C] border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full py-4 ${isSubmitting ? 'bg-gray-500' : 'bg-gradient-to-r from-purple-500 to-pink-500'} text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-0.5 transition-all duration-300`}
                  disabled={isSubmitting} // Disable button while submitting
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Testimonial'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsForm;