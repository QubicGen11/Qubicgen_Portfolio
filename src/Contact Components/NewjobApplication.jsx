import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../HomeComponents/Navbar';
import Footer from '../HomeComponents/Footer';
import SEO from '../SEO';

const NewjobApplication = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    phoneNumber: '',
    whatsAppNumber: '', // Note the capital 'A' to match the API format
    personalEmail: '',
    officeEmail: '', // Changed from officialMail to match API format
    course: '',
    branch: '',
    collegeName: '',
    address: '',
    passedOutYear: '',
    tenthPercentage: '',
    twelthPercentage: '', // Changed from twelfthPercentage to match API format
    graduationPercentage: '',
    resume: null,
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    
    // Handle file input separately
    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: files[0] // Store the file object
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData();
      
      // Append all form fields with proper date formatting
      Object.keys(formData).forEach(key => {
        if (key === 'resume') {
          if (formData[key]) {
            formDataToSend.append('resume', formData[key]);
          }
        } else if (key === 'passedOutYear') {
          // Format the year to ISO string
          const year = formData[key];
          const formattedDate = `${year}-01-01T00:00:00.000Z`;
          formDataToSend.append('passedOutYear', formattedDate);
        } else {
          formDataToSend.append(key, formData[key]);
        }
      });

      // Send form data to your API
      const response = await fetch('https://qg.vidyantra-dev.com/qubicgen/newCareer', {
        method: 'POST',
        body: formDataToSend,
      }); 

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      // Show success message
      toast.success('Application submitted successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Reset form
      setFormData({
        fullName: '',
        gender: '',
        phoneNumber: '',
        whatsAppNumber: '',
        personalEmail: '',
        officeEmail: '',
        course: '',
        branch: '',
        collegeName: '',
        address: '',
        passedOutYear: '',
        tenthPercentage: '',
        twelthPercentage: '',
        graduationPercentage: '',
        resume: null,
        comments: ''
      });
      
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';

    } catch (error) {
      console.error('Submission error:', error);
      toast.error(error.message || 'Failed to submit application. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="QubicGen - Job Application"
        description="Apply for opportunities at QubicGen. Join our team and be part of our growing success story."
        type="website"
        name="QubicGen Job Application"
        image="https://res.cloudinary.com/defsu5bfc/image/upload/v1714398176/og_idmawk.png"
        url="https://www.qubicgen.com/newjobapplication"
        keywords="QubicGen, Job Application, Career, Opportunities"
      />
      <ToastContainer />
      <Navbar />
      <div 
        className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-3xl rounded-xl shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-white">
                  Job <span className="text-yellow-400">Application</span>
                </h2>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-user text-gray-400"></i>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Full Name *" 
                    name="fullName" 
                    onChange={handleChange} 
                    value={formData.fullName} 
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>

                {/* Gender */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-venus-mars text-gray-400"></i>
                  </div>
                  <select 
                    name="gender" 
                    onChange={handleChange} 
                    value={formData.gender}
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent appearance-none"
                  >
                    <option value="">Select Gender *</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                {/* Phone Numbers */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-phone text-gray-400"></i>
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number *" 
                    name="phoneNumber" 
                    pattern="[0-9]{10}"
                    onChange={handleChange} 
                    value={formData.phoneNumber} 
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fab fa-whatsapp text-gray-400"></i>
                  </div>
                  <input 
                    type="tel" 
                    placeholder="WhatsApp Number *" 
                    name="whatsAppNumber" 
                    pattern="[0-9]{10}"
                    onChange={handleChange} 
                    value={formData.whatsAppNumber} 
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>

                {/* Emails */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-envelope text-gray-400"></i>
                  </div>
                  <input 
                    type="email" 
                    placeholder="Personal Email *" 
                    name="personalEmail" 
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    onChange={handleChange} 
                    value={formData.personalEmail} 
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-envelope text-gray-400"></i>
                  </div>
                  <input 
                    type="email" 
                    placeholder="Official Email *" 
                    name="officeEmail" 
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    onChange={handleChange} 
                    value={formData.officeEmail} 
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>

                {/* Education Details */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-graduation-cap text-gray-400"></i>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Course *" 
                    name="course" 
                    onChange={handleChange} 
                    value={formData.course} 
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-code-branch text-gray-400"></i>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Branch/Specialization *" 
                    name="branch" 
                    onChange={handleChange} 
                    value={formData.branch} 
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-university text-gray-400"></i>
                  </div>
                  <input 
                    type="text" 
                    placeholder="College Name *" 
                    name="collegeName" 
                    onChange={handleChange} 
                    value={formData.collegeName} 
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-map-marker-alt text-gray-400"></i>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Address *" 
                    name="address" 
                    onChange={handleChange} 
                    value={formData.address} 
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>

                {/* Passed Out Year */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-calendar text-gray-400"></i>
                  </div>
                  <input
                    type="number"
                    placeholder="Passed Out Year *"
                    name="passedOutYear"
                    onChange={handleChange}
                    value={formData.passedOutYear}
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>

                {/* Percentages */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-percent text-gray-400"></i>
                  </div>
                  <input 
                    type="number" 
                    step="0.01" 
                    min="0" 
                    max="100"
                    placeholder="10th Percentage *" 
                    name="tenthPercentage" 
                    onChange={handleChange} 
                    value={formData.tenthPercentage} 
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-percent text-gray-400"></i>
                  </div>
                  <input 
                    type="number" 
                    step="0.01" 
                    min="0" 
                    max="100"
                    placeholder="12th Percentage *" 
                    name="twelthPercentage" 
                    onChange={handleChange} 
                    value={formData.twelthPercentage} 
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-percent text-gray-400"></i>
                  </div>
                  <input 
                    type="number" 
                    step="0.01" 
                    min="0" 
                    max="100"
                    placeholder="Graduation Percentage (Last sem) *" 
                    name="graduationPercentage" 
                    onChange={handleChange} 
                    value={formData.graduationPercentage} 
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>

                <div className="relative col-span-full">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-file-upload text-gray-400"></i>
                  </div>
                  <input 
                    type="file" 
                    name="resume" 
                    onChange={handleChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-400 file:text-black hover:file:bg-yellow-500"
                  />
                </div>

                {/* Add a preview of selected file name if needed */}
                {formData.resume && (
                  <div className="text-sm text-gray-400 mt-1">
                    Selected file: {formData.resume.name}
                  </div>
                )}

                {/* Comments */}
                <div className="relative col-span-full">
                  <div className="absolute top-3 left-0 pl-3 pointer-events-none">
                    <i className="fas fa-comment text-gray-400"></i>
                  </div>
                  <textarea 
                    placeholder="Comments (Optional)" 
                    name="comments" 
                    onChange={handleChange} 
                    value={formData.comments}
                    className="w-full pl-10 pr-3 py-2 h-32 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-8">
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="group relative inline-flex items-center px-8 py-3 overflow-hidden rounded-full bg-yellow-400 text-black font-bold hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300"
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewjobApplication;
