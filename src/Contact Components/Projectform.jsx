import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Contact.css';
import Navbar from '../HomeComponents/Navbar';
import Footer from '../HomeComponents/Footer';
import Typewriter from 'typewriter-effect';
import 'intl-tel-input/build/css/intlTelInput.css';
import SEO from '../SEO';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Projectform = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState('project');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    jobTitle: '',
    company: '',
    phone: '',
    message: '',
    type: type
  });
  const [successMessage, setSuccessMessage] = useState('');

  // Function to clear form data
  const clearFormData = () => {
    setFormData({
      name: '',
      email: '',
      jobTitle: '',
      company: '',
      phone: '',
      message: '',
      type: type
    });
  };

  // Function to handle form switch
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    const missingFields = [];
  
    // Check each required field individually
    if (!formData.name) {
      missingFields.push('Full Name');
    }
    if (!formData.email) {
      missingFields.push('Email');
    }
    if (!formData.phone) {
      missingFields.push('Phone');
    }
    if (!formData.jobTitle) {
      missingFields.push('JobTitle');
    }
    if (!formData.company) {
      missingFields.push('Company');
    }
    if (!formData.message) {
      missingFields.push('Comments');
    }
    if (formData.type === 'student' && !formData.course) {
      missingFields.push('Course');
    }
  
    // If any field is missing, display an alert with the names of missing fields
    if (missingFields.length > 0) {
      toast.error(`Please fill in the following required fields: ${missingFields.join(', ')}.`);
      setIsLoading(false);
      return; // Return early, preventing the form from proceeding
    }
  
    try {
      const response = await axios.post('https://qg.vidyantra-dev.com/qubicgen/createProject', formData);
  
      if (response.data.message === 'Duplicate entry') {
        toast.error('This data already exists in the database.');
      } else {
        console.log('Form data submitted:', response.data);
        clearFormData(); // Clear form data after successful submission
        setSuccessMessage('Your message has been sent successfully');
        setIsLoading(false);
        setTimeout(() => {
          setSuccessMessage('');
        }, 4000); // Remove the message after 4 seconds

        setFormData({
          name: '',
          email: '',
          company: '',
          jobTitle: '',
          phone: '',
          message: '',
          type: formData.type === 'project' ? 'project' : 'student' // Set type to 'project' if it was 'project', otherwise set it to 'student'
        });
  
        toast.success('Your message has been sent successfully'); // Use toast for success notification
      }
    } catch (error) {
      setIsLoading(false);
      toast.error('Something went wrong');
      console.error('Error submitting form:', error);
    }
  };
  



  return (
    <>
      <SEO
        title="QubicGen - Contact Us"
        description="Connect with QubiGen and get in touch with our team. Learn how you can reach out to us for inquiries, collaborations, and partnerships. We are here to support your business needs."
        type="website"
        name="QubiGen Contact"
        image="https://res.cloudinary.com/defsu5bfc/image/upload/v1714398176/og_idmawk.png"
        url="https://www.qubicgen.com/projectform"
        keywords="QubiGen, Contact Us, inquiries, collaborations, partnerships, support"
      />
      <ToastContainer /> {/* Add ToastContainer here */}
      <Navbar />
      <div className="boxy" data-aos="fade-right">
        <div className="containerone">
          <div className="forms-container">
            <div className="signin-signup">
              <form onSubmit={handleSubmit} className="sign-in-form">
                <h2 className="text-3xl font-bold mt-4 md:mt-0 text-white" id="wearequbic" style={{ fontSize: '40px' }}>
                  Project <span className='text-yellow-400'>Form</span>
                 
                </h2>
                <div className="input-field " >
                  <i className="fas fa-user" />
                  <input type="text" placeholder="Enter Full Name" name="name" onChange={handleChange} value={formData.name} />
                </div>
                <div className="input-field">
                  <i className="fas fa-envelope" />
                  <input type="email" placeholder="Email" name="email"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={handleChange} value={formData.email} />
                </div>
                <div className="input-field">
                  <i className="fas fa-phone" />
                  <input type="tel" placeholder="Enter 10 digit phone number" name="phone" onChange={handleChange} pattern='[0-9]{10}'  value={formData.phone} />
                </div>
                <div className="input-field">
                  <i className="fas fa-briefcase" />
                  <input type="text" placeholder="Job title" name="jobTitle" onChange={handleChange} value={formData.jobTitle} />
                </div>
                <div className="input-field">
                  <i className="fas fa-building" />
                  <input type="text" placeholder="Enter Company" name="company" onChange={handleChange} value={formData.company} />
                </div>
                <div className="input-field" style={{ height: '20vh' }}>
                  <i className="fas fa-comment" />
                  <input type="text" placeholder="Enter your Message" name="message" onChange={handleChange} value={formData.message} />
                </div>
                <button className="btn-53" style={{ marginTop: '10px' }}>
                  <div className="original"> {isLoading ? 'Submitting...' : 'Submit'}</div>
                  <div className="letters">
                    {isLoading ? (
                      <>
                        <span>S</span>
                        <span>U</span>
                        <span>B</span>
                        <span>M</span>
                        <span>I</span>
                        <span>T</span>
                        <span>I</span>
                        <span>N</span>
                        <span>G</span>
                        <span>.</span>
                        <span>.</span>
                      </>
                    ) : (
                      <>
                        <span>SUBMIT</span>
                      </>
                    )}
                  </div>
                </button>
                {/* {successMessage && <h1 style={{color:'white', fontSize:'1rem'}}>{successMessage}</h1>} */}
              </form>
            
            </div>
          </div>

          
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content" id="lookingproject">
                <h3 style={{ fontSize: '45px' }}>Want to Learn Skills?</h3>
                
                <Link to="/studentform">
                    <button className="btnone" id="sign-up-btn"  style={{ width: '170px', position: 'relative', left: '76px', height: '50px', marginTop: '30px' }}>
                  Student Form
                </button>
                </Link>
              </div>
            </div>







        
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projectform;
