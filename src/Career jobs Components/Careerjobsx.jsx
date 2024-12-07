import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./Careerjobs.css"
import Footer from '../HomeComponents/Footer'
import Navbar from '../HomeComponents/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Parallax } from 'react-parallax';
import new4 from '../assets/new5.jpg';
import SEO from '../SEO';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Careerjobsx = () => {
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedJobRole, setSelectedJobRole] = useState("");
    const [resume, selectedResume] = useState();
    const [searchInput, setSearchInput] = useState("");
    const [reset,  setReset] = useState(true);
    const [loading, setLoading] = useState(true);

    const [isResumeSelected, setIsResumeSelected] = useState(false);
    const [JobsList, setJobsList] = useState([
      {
        title: "Human Resource Manager",
        qual: "MBA",
        exp: "Fresher",
        skills: "Communication and Management",
        description:
          "Seeking HR Manager: Lead our HR department to success! Manage recruitment, employee relations, training, and compliance. Bring your leadership skills and drive positive change. ",
      },
      {
        title: "RPA Developer",
        qual: "B.Tech / Degree",
        exp: "Fresher",
        skills: "UiPath",
        description:
          "RPA Developer Wanted: Join us in automating processes! Design, develop, and implement RPA solutions. Skills in UiPath needed. Ready to innovate? ",
      },
      {
        title: "Web Developer",
        qual: "B.Tech / Degree",
        exp: "Fresher",
        skills: "HTML, CSS, JavaScript",
        description:
          "Seeking Web Developer: Join our team to craft exceptional online experiences! Design and develop dynamic websites and web applications using HTML, CSS, and JavaScript. Bring creativity and technical expertise to drive our digital presence forward.",
      },
      {
        title: "SAP Developer",
        qual: "B.Tech / Degree",
        exp: "Fresher",
        skills: "HANA",
        description:
          "Join us as an SAP Developer and unleash your potential in transforming businesses with cutting-edge technology! You'll design, develop, and customize SAP applications and solutions using ABAP and other programming languages. Bring your passion for innovation and problem-solving to drive our digital transformation forward.",
      },
      {
        title: "Cyber Security Analyst",
        qual: "B.Tech / Degree",
        exp: "Fresher",
        skills: "Cyber Security",
        description:
          "Join our team as a Cyber Security Analyst and play a pivotal role in safeguarding our organization against cyber threats! You'll be responsible for monitoring, analyzing, and responding to security incidents, conducting threat assessments, and implementing proactive measures to protect our systems and data.",
      },
      {
        title: "Digital Marketing Manager",
        qual: "B.Tech / Degree",
        exp: "Fresher",
        skills: "Digital and Social Media Marketing",
        description:
          "Join us as a Digital Marketing Manager and lead our online presence to new heights! In this role, you'll oversee digital marketing strategies, manage campaigns, and analyze performance metrics to drive business growth.",
      },
    ]);
    const [formData, setFormData] = useState({
      fullName: '',
      gender: '',
      phoneNumber: '',
      whatsappNumber: '',
      personalEmail: '',
      officialMail: '',
      course: '',
      branch: '',
      collegeName: '',
      address: '',
      passedOutYear: '',
      tenthPercentage: '',
      twelfthPercentage: '',
      graduationPercentage: '',
      comments: '',
      resume: null
    });

    // Function to validate email format
    let emailValidated = false;
    let phoneValidated = false;


    const handleFileChangess = (e) => {
      const selectedFile = e.target.files[0];
      selectedResume(selectedFile);
      setIsResumeSelected(true); // Update state when file is selected
    };
    
    // Function to validate email format
    const validateEmail = (e) => {
        if (!emailValidated) {
            const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
            const isValidEmail = emailPattern.test(e.target.value);
            if (!isValidEmail) {
                alert('Please enter a valid email address.');
                // Optionally, you can reset the value or set an error state
            }
            // Set flag to true to indicate validation has been performed
            emailValidated = true;
        }
    };
    
    // Function to validate phone number format
    const validatePhone = (e) => {
        if (!phoneValidated) {
            const phonePattern = /[0-9]{10}/;
            const isValidPhone = phonePattern.test(e.target.value);
            if (!isValidPhone) {
                alert('Please enter a valid phone number.');
                // Optionally, you can reset the value or set an error state
            }
            // Set flag to true to indicate validation has been performed
            phoneValidated = true;
        }
    };
    useEffect(() => {
      setStep(1);
    }, []);
  
    const handleNext = () => {
      // Array to store names of missing fields
      const missingFields = [];
  
      // Check each required field individually
      if (!formData.fullName) {
          missingFields.push('Full Name');
      }
      if (!formData.email) {
          missingFields.push('Email');
      }
      if (!formData.phone) {
          missingFields.push('Phone Number');
      }
      if (!formData.address) {
          missingFields.push('Address');
      }
      if (!formData.education) {
          missingFields.push('Education');
      }
      // if (!formData.resumeId) {
      //     missingFields.push('Resume');
      // }


  
      // If any field is missing, display an alert with the names of missing fields
      if (missingFields.length > 0) {
          alert(`Please fill in the following required fields: ${missingFields.join(', ')}.`);
          return; // Return early, preventing the form from proceeding
      }
  
      // Perform other validations if needed
  
      // If all validations pass, proceed to the next step
      setStep(step + 1);
  };



  const handleNextEducation = () => {
    // Array to store names of missing fields
    const missingFields = [];
  
    // Check each required field individually
    if (!formData.education.level) {
        missingFields.push('Highest Level of Education Attained');
    }
    if (!formData.education.institution) {
        missingFields.push('Name of Institution');
    }
    if (!formData.education.stream) {
        missingFields.push('Stream');
    }
    if (!formData.education.graduationYear) {
        missingFields.push('Year of Graduation');
    }
    if (!formData.education.cgpaPercentage) {
        missingFields.push('CGPA/Percentage');
    }
  
    // If any field is missing, display an alert with the names of missing fields
    if (missingFields.length > 0) {
        alert(`Please fill in the following required fields: ${missingFields.join(', ')}.`);
        return; // Return early, preventing the form from proceeding
    }
  
    // Perform other validations if needed
  
    // If all validations pass, proceed to the next step
    setStep(step + 1);
  };
  
  
  
    const handleBack = () => {
      setStep(step - 1);
    };
 

    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      selectedResume(selectedFile);
      setIsResumeSelected(true); // Update state when file is selected
    };
    
    const uploadResume = async (resume) => {
      try {
        const formData = new FormData();
        formData.append('resume', resume);
    
        const response = await axios.post('http://localhost:3000/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('Upload response:', response.data);
        return response.data.fileName; 
        // Optionally, you can handle the response from the upload endpoint here
      } catch (error) {
        console.error('Upload error:', error);
      }
    };
    
  
    const handleInputChange = (event) => {
          const { name, value } = event.target;
          // Handling nested state updates for education and workExperience fields
          if (name.includes('[')) {
            const [key, nestedKey] = name.split(/\[|\]/).filter(Boolean);
            setFormData((prevState) => ({
              ...prevState,
              [key]: {
                ...prevState[key],
                [nestedKey]: value,
              },
            }));
          } else {
            // Handling flat state updates
            setFormData((prevState) => ({
              ...prevState,
              [name]: value,
            }));
          }
        };
    
    const handleChange = (e) => {
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

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);

      try {
        const submitData = new FormData();
        Object.keys(formData).forEach(key => {
          if (key === 'resume') {
            if (formData[key]) {
              submitData.append('resume', formData[key]);
            }
          } else {
            submitData.append(key, formData[key]);
          }
        });

        const response = await fetch('https://qg.vidyantra-dev.com/api/newjob', {
          method: 'POST',
          body: submitData,
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Something went wrong');
        }

        toast.success('Application submitted successfully!');
        
        // Reset form
        setFormData({
          fullName: '',
          gender: '',
          phoneNumber: '',
          whatsappNumber: '',
          personalEmail: '',
          officialMail: '',
          course: '',
          branch: '',
          collegeName: '',
          address: '',
          passedOutYear: '',
          tenthPercentage: '',
          twelfthPercentage: '',
          graduationPercentage: '',
          comments: '',
          resume: null
        });

        // Close modal
        const modal = document.getElementById('staticBackdrop');
        const modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance.hide();

      } catch (error) {
        toast.error(error.message || 'Failed to submit application');
      } finally {
        setIsLoading(false);
      }
    };

    const filteredJobs = JobsList.filter((job) =>
      job.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (

        <>
        <ToastContainer />
    <SEO
        title="QubiGen - Careersjobs"
        description="Connect with QubiGen and get in touch with our team. Learn how you can reach out to us for inquiries, collaborations, and partnerships. We are here to support your business needs."
        type="website"
        name="QubiGen Careers"
        image="https://example.com/contact-og-image.jpg"
        url="https://www.qubicgen.com/Careerjobs"
        keywords="QubiGen, Contact Us, inquiries, collaborations, partnerships, support , jobs , Software , Salaries , Employee"
      />
    
              <Navbar />
              <div className='bg-black'>
                  <div className="careeesfull bg-black" data-aos="fade-right">
                      <div className="Careersjobsmain flex bg-center justify-center items-center sm:h-10 " style={{ background: "url('https://res.cloudinary.com/defsu5bfc/image/upload/v1711394885/photo-1542744173-8e7e53415bb0_shbafj.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                          <div className="z-50 text-2xl ml-3 text-white sm:mx-6  md:text-4xl md:mr-80 lg:text-5xl lg:mb-10 h-36 md:w-96 lg:w-auto xl:w-auto flex flex-col justify-center items-center" >
                              <p className='text-xl md:text-2xl lg:text-3xl xl:text-5xl'>Discover Your Dream Job Here!</p>

                          </div>
                      </div>
                      <Parallax bgImage={new4} bgImageAlt="the cat" strength={800} >
                          <div className="careerrrr">
                              <div className="jobsstart className='text-xs sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl mx-5 font-medium mt-5 " style={{ color: 'gold' }}>
                                  <h4 className='z-40 text-5xl'>Latest Jobs</h4>
                                  <div>
                                      <input
                                          type="text"
                                          className='rounded-3xl text-xs font-bold text-white w-72 h-10 my-4'
                                          placeholder='Search your dream role'
                                          value={searchInput}
                                          onChange={(e) => setSearchInput(e.target.value)} // Update search input value

                                      />

                                      <FontAwesomeIcon icon={faSearch} className='text-black text-2xl relative -left-9 top-1' />
                                  </div>
                                  <div className="container">
                                      <div className="grid grid-flow-row auto-rows-max ml-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 ">
                                          {filteredJobs.map((item, index) => (
                                              <div key={index} className="col -ml-14" >
                                                  <div className="card-container">
                                                      <div className="group" style={{ width: '260px' }}>
                                                          <div className="card-box">
                                                              <div id="Hegel" className="cardss">
                                                                  <div className="contentss">
                                                                      <p className="some">
                                                                          <h1 className='text-xl font-bold' style={{ textDecoration: 'underline ' }}>Description:</h1>
                                                                          {item.description}
                                                                      </p>
                                                                  </div>
                                                                  <div className="thumb flex flex-col items-start">
                                                                      <h1 style={{ color: 'white', fontSize: '17px' }} className='ml-6 font-semibold'>{item.title} </h1>
                                                                      <div>
                                                                          <p style={{ color: 'white', fontSize: '13px' }} className='ml-7 mt-2 font-normal'>Qualification : {item.qual} </p>
                                                                          <p style={{ color: 'white', fontSize: '13px' }} className='ml-7 mt-2 font-normal' >Experience : {item.exp} </p>
                                                                          <p style={{ color: 'white', fontSize: '13px' }} className='ml-7 mt-2 font-normal'>Skills : {item.skills} </p>
                                                                      </div>
                                                                  </div>
                                                                  <div className="detial">
                                                                      <div className="titless">
                                                                          <button className="buttonapply text-black" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => setSelectedJobRole(item.title)}>Apply Now</button>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <br />
                                              </div>
                                          ))}
                                      </div>
                                      <br />
                                  </div>
                              </div>
                          </div>
                      </Parallax>
                  </div>
              </div>


              <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg" style={{ zIndex: 2000 }}>
      <div className="modal-content bg-black/95">
        <div className="modal-header border-0">
          <h1 className="modal-title fs-5 text-white text-bold z-50">{selectedJobRole} Application</h1>
          <button className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="backdrop-blur-3xl rounded-xl shadow-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Personal Information */}
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Full Name *" 
                        name="fullName" 
                        onChange={handleChange} 
                        value={formData.fullName} 
                        required
                        className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>

                    <div className="relative">
                      <select 
                        name="gender" 
                        onChange={handleChange} 
                        value={formData.gender}
                        required
                        className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      >
                        <option value="">Select Gender *</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="relative">
                      <input 
                        type="tel" 
                        placeholder="Phone Number *" 
                        name="phoneNumber" 
                        pattern="[0-9]{10}"
                        onChange={handleChange} 
                        value={formData.phoneNumber} 
                        required
                        className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>

                    <div className="relative">
                      <input 
                        type="tel" 
                        placeholder="WhatsApp Number" 
                        name="whatsappNumber" 
                        pattern="[0-9]{10}"
                        onChange={handleChange} 
                        value={formData.whatsappNumber}
                        className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>

                    <div className="relative">
                      <input 
                        type="email" 
                        placeholder="Personal Email *" 
                        name="personalEmail" 
                        onChange={handleChange} 
                        value={formData.personalEmail} 
                        required
                        className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>

                    <div className="relative">
                      <input 
                        type="email" 
                        placeholder="Official Email" 
                        name="officialMail" 
                        onChange={handleChange} 
                        value={formData.officialMail}
                        className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>

                    {/* Education Details */}
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Course *" 
                        name="course" 
                        onChange={handleChange} 
                        value={formData.course} 
                        required
                        className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>

                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Branch *" 
                        name="branch" 
                        onChange={handleChange} 
                        value={formData.branch} 
                        required
                        className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>

                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="College Name *" 
                        name="collegeName" 
                        onChange={handleChange} 
                        value={formData.collegeName} 
                        required
                        className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>

                    <div className="relative">
                      <input 
                        type="number" 
                        placeholder="Passed Out Year *" 
                        name="passedOutYear" 
                        onChange={handleChange} 
                        value={formData.passedOutYear} 
                        required
                        className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>

                    {/* Academic Percentages */}
                    <div className="relative">
                      <input 
                        type="number" 
                        step="0.01"
                        placeholder="10th Percentage *" 
                        name="tenthPercentage" 
                        onChange={handleChange} 
                        value={formData.tenthPercentage} 
                        required
                        className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>

                    <div className="relative">
                      <input 
                        type="number" 
                        step="0.01"
                        placeholder="12th Percentage *" 
                        name="twelfthPercentage" 
                        onChange={handleChange} 
                        value={formData.twelfthPercentage} 
                        required
                        className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>

                    <div className="relative">
                      <input 
                        type="number" 
                        step="0.01"
                        placeholder="Graduation Percentage *" 
                        name="graduationPercentage" 
                        onChange={handleChange} 
                        value={formData.graduationPercentage} 
                        required
                        className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>

                    {/* Address */}
                    <div className="relative col-span-full">
                      <textarea 
                        placeholder="Address *" 
                        name="address" 
                        onChange={handleChange} 
                        value={formData.address} 
                        required
                        className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        rows="3"
                      />
                    </div>

                    {/* Comments */}
                    <div className="relative col-span-full">
                      <textarea 
                        placeholder="Additional Comments" 
                        name="comments" 
                        onChange={handleChange} 
                        value={formData.comments}
                        className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-black/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        rows="3"
                      />
                    </div>

                    {/* Resume Upload */}
                    <div className="relative col-span-full">
                      <input 
                        type="file" 
                        name="resume" 
                        onChange={handleChange}
                        accept=".pdf,.doc,.docx"
                        required
                        className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-black/20 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-400 file:text-black hover:file:bg-yellow-500"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-4 mt-6">
                    <button 
                      type="button" 
                      className="px-6 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition-colors"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      disabled={isLoading}
                      className="px-6 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition-colors disabled:opacity-50"
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
        </div>
      </div>
    </div>
  </div>




              <Footer />

          </>
      )
  }

  export default Careerjobsx