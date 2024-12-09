import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';


const FormModal = ({ isOpen, onClose, onSubmit, programType, coursePrice }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    collegeName: '',
    programType: '',
    coursePrice: 0,
    programName: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData((prevData) => ({
        ...prevData,
        programType: programType || '',
        coursePrice: coursePrice || 0,
        programName: programType
      }));
    }
  }, [programType, coursePrice, isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:9098/qubicgen/newEnrollment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      await onSubmit(formData);
      toast.success("Successfully submitted! Our team will reach out to you.");

      onClose();
    } catch (error) {
      toast.error("Error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        className="bg-[#1e1e1e] text-white rounded-lg p-8 shadow-md z-50 relative mt-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-6">Register for Our Program</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-600 bg-[#1a1a1a] text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full border border-gray-600 bg-[#1a1a1a] text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your contact number"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-600 bg-[#1a1a1a] text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              College Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              className="w-full border border-gray-600 bg-[#1a1a1a] text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your college name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Program Type <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="programType"
              value={formData.programType}
              readOnly
              className="w-full border border-gray-600 bg-[#1a1a1a] text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Course Price <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="coursePrice"
              value={formData.coursePrice}
              readOnly
              className="w-full border border-gray-600 bg-[#1a1a1a] text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg"
            >
              Cancel
            </button>
            <motion.button
              type="submit"
              className={`px-4 py-2 bg-gradient-to-r from-[#FFA500] to-[#FF4500] text-white font-semibold rounded-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default FormModal; 