import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Contact.css';
import Navbar from '../HomeComponents/Navbar';
import Footer from '../HomeComponents/Footer';
import Typewriter from 'typewriter-effect';
import 'intl-tel-input/build/css/intlTelInput.css';
import SEO from '../SEO';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Studentform = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState('project');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    phone: '',
    stream: '',
    college:'',
 
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const clearFormData = () => {
    setFormData({
      name: '',
      email: '',
      course: '',
      phone: '',
      stream: '',
      college:'',
 
      message: '',
    });
  };

  const handleFormSwitch = (type) => {
    setType(type);
    setFormData({
      ...formData,
      type: type
    });
  };

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
  
    if (!formData.name) {
      missingFields.push('Full Name');
    }
    if (!formData.email) {
      missingFields.push('Email');
    }
    if (!formData.phone) {
      missingFields.push('Phone');
    }
    if (!formData.course) {
      missingFields.push('Please Select a Course');
    }
    if (!formData.stream) {
      missingFields.push('Stream');
    }
    if (!formData.college) {
      missingFields.push('College');
    }
    if (!formData.message) {
      missingFields.push('Message');
    }
   
  
    if (missingFields.length > 0) {
      toast.error(`Please fill in the following required fields: ${missingFields.join(', ')}.`);
      setIsLoading(false);
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:3000/api/student', formData);
  
      if (response.data.message === 'Duplicate entry') {
        toast.error('This data already exists in the database.');
      } else {
        console.log('Form data submitted:', response.data);
        clearFormData();
        setSuccessMessage('Your message has been sent successfully');
        setIsLoading(false);
        setTimeout(() => {
          setSuccessMessage('');
        }, 4000); 

        setFormData({
          name: '',
          email: '',
          course: '',
          phone: '',
          stream:'',
          message: '',
          college:'',
        });
  
        toast.success('Your message has been sent successfully');
      }
    } catch (error) {
      setIsLoading(false);
      toast.error('Please Check Feilds');
      console.error('Error submitting form:', error);
    }
  };
  



  return (
    <>
      <SEO
        title="QubiGen - Contact Us"
        description="Connect with QubiGen and get in touch with our team. Learn how you can reach out to us for inquiries, collaborations, and partnerships. We are here to support your business needs."
        type="website"
        name="QubiGen Contact"
        image="https://example.com/contact-og-image.jpg"
        url="https://www.qubicgen.com/contact"
        keywords="QubiGen, Contact Us, inquiries, collaborations, partnerships, support"
      />
      <ToastContainer />
      <Navbar />
      <div className="boxy" data-aos="fade-right" >
        <div className="containerone" >
          <div className="forms-container" >
            <div className="signin-signup" >
             
              <form onSubmit={handleSubmit} className="sign-in-form md:relative bottom-7">
                <h2 className="text-3xl font-bold mt-4 md:mt-0 text-white" id="wearequbic" style={{ fontSize: '40px' }}>
                  Student <span className='text-yellow-400'>Form</span>
                </h2>
                <div className="input-field" >
                  <i className="fas fa-user" />
                  <input type="text" placeholder="Enter Full Name" name="name" onChange={handleChange} value={formData.name} />
                </div>
                <div className="input-field">
                  <i className="fas fa-phone" />
                  <input type="tel" placeholder="Enter 10 digit phone number" name="phone" onChange={handleChange} pattern='[0-9]{10}'  value={formData.phone} />
                </div>
                <div className="input-field">
                  <i className="fas fa-envelope" />
                  <input type="email" placeholder="Enter email" name="email"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={handleChange} value={formData.email} />
                </div>
                <div className="input-field">
                  <i className="fas fa-graduation-cap" />
                  <input type="text" placeholder="Enter College Name" name="college"   onChange={handleChange} value={formData.college} />
                  
                </div>
                <div className="input-field">
                  <i className="fas fa-book" />
                  <input type="text" placeholder="Enter Your Branch" name="stream"   onChange={handleChange} value={formData.stream} />

                </div>
                <div className="input-field">
                  <i className="fas fa-check" />
                  <select
                    name="course"
                    id="course"
                    style={{ color: 'black' }}
                    onChange={handleChange}
                    value={formData.course}
                  >
                    <option value="select" hidden>Select a Course</option>
                    <option value="rpa">RPA</option>
                    <option value="web">Web Development</option>
                    <option value="sap">SAP</option>
                    <option value="testing">Testing</option>
                  </select>
                </div>
                <div className="input-field" style={{ height: '20vh' }}>
                  <i className="fas fa-comment" />
                  <input type="text" placeholder="Comments" name="message" onChange={handleChange} value={formData.message} />
                </div>
                <button className="btn-53 mb-9" >
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
                        <span>S</span>
                        <span>U</span>
                        <span>B</span>
                        <span>M</span>
                        <span>I</span>
                        <span>T</span>
                      </>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content" id="lookingproject">
                <h3 style={{ fontSize: '45px' }}>Looking for Project?</h3>
                <Link to="/projectform">
                  <button className="btnone" id="sign-up-btn" style={{ width: '170px', position: 'relative', left: '76px', height: '50px', marginTop: '30px' }}>
                    Project Form
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

export default Studentform;
