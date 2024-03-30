import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Contact.css';
import Navbar from '../HomeComponents/Navbar';
import Footer from '../HomeComponents/Footer';
import Typewriter from 'typewriter-effect';
import 'intl-tel-input/build/css/intlTelInput.css';
import SEO from '../SEO';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const  [activeTab, setActiveTab] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    jobTitle: '',
    course: '',
    company: '',
    phone:'',
    message: '',
    type: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleClick = (tab) => {
    setActiveTab(tab); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      jobTitle: formData.jobTitle,
      course: formData.course,
      company: formData.company,
      phone: formData.phone,
      message: formData.message,
      type: activeTab
    };
    setIsLoading(true);
    try {
      // formData.type = activeTab;
      setIsLoading(true);
      const response = await axios.post('http://localhost:3000/api/contact', payload);
      console.log('Form data submitted:', response.data);
      // Reset form after successful submission if needed
      setFormData({
        fullName: '',
        email: '',
        jobTitle: '',
        course: '',
        phone:'',
        message: '',
        company: '',
        type: ''
      });
      alert('Your message has been sent successfully');
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      alert('Something went wrong');
      console.error('Error submitting form:', error);
    }
  };

  useEffect(() => {
    const sign_in_btn = document.querySelector('#sign-in-btn');
    const sign_up_btn = document.querySelector('#sign-up-btn');

    sign_up_btn.addEventListener('click', () => {
      document.querySelector('.containerone').classList.add('sign-up-mode');
    });

    sign_in_btn.addEventListener('click', () => {
      document.querySelector('.containerone').classList.remove('sign-up-mode');
    });
  }, []);



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

      <Navbar />
      <div className="boxy" data-aos="fade-right">
        <div className="containerone">
          <div className="forms-container">
            <div className="signin-signup">
              <form onSubmit={handleSubmit} className="sign-in-form">
                <h2 className="text-3xl font-bold mt-4 md:mt-0 text-white" id="wearequbic" style={{ fontSize: '40px' }}>
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 2,
                      strings: ['Project<span class="text-[#ffd700]"> Form</span>'],
                      onComplete: (self) => {
                        const textElement = self.el;
                        const html = textElement.innerHTML;
                        textElement.innerHTML = html.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
                      },
                    }}
                  />
                </h2>
                <div className="input-field">
                  <i className="fas fa-user" />
                  <input type="text" placeholder="Enter Full Name" name="fullName" onChange={handleChange} value={formData.fullName} />
                </div>

                <div className="input-field">
                  <i className="fas fa-envelope" />
                  <input type="email" placeholder="Email" name="email" onChange={handleChange} value={formData.email} />
                </div>
                <div className="input-field">
                  <i className="fas fa-phone" />
                  <input type="number" placeholder="Enter phone number" name="phone" onChange={handleChange} value={formData.phone} />
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
                  <i className="fas fa-comment  flex justify-center items-center" />
                  <input type="text" placeholder="Comments" name="message" onChange={handleChange} value={formData.message} />
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
              <form onSubmit={handleSubmit} className="sign-up-form">
                <h2 className="text-3xl font-bold mt-4 md:mt-0 text-white" id="wearequbic" style={{ fontSize: '40px' }}>
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 2,
                      strings: ['Student<span class="text-[#ffd700]"> Form</span>'],
                      onComplete: (self) => {
                        const textElement = self.el;
                        const html = textElement.innerHTML;
                        textElement.innerHTML = html.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
                      },
                    }}
                  />
                </h2>
                <div className="input-field">
                  <i className="fas fa-user" />
                  <input type="text" placeholder="Enter Full Name" name="fullName" onChange={handleChange} value={formData.fullName} />
                </div>
                <div className="input-field">
                  <i className="fas fa-phone" />
                  <input type="number" placeholder="Enter phone number" name="phone" onChange={handleChange} value={formData.phone} />
                </div>
                <div className="input-field">
                  <i className="fas fa-envelope" />
                  <input type="email" placeholder="Enter email" name="email" onChange={handleChange} value={formData.email} />
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
                  <i className="fas fa-comment flex justify-center items-center" />
                  <input type="text" placeholder="Comments" name="message" onChange={handleChange} value={formData.message} />
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
                <h3 style={{ fontSize: '45px' }}>Want to Learn Skills?</h3>
                <button className="btnone" id="sign-up-btn" onClick={() => handleClick('student')} style={{ width: '170px', position: 'relative', left: '76px', height: '50px', marginTop: '30px' }}>
                  Student Form
                </button>
              </div>
            </div>
            <div className="panel right-panel" style={{ position: 'relative', left: '-150px' }}>
              <div className="content" id="studentskill">
                <h3 style={{ fontSize: '45px' }} id="">
                  Looking for Project ?
                </h3>
                <button className="btnone" id="sign-in-btn"  onClick={() => handleClick('project')} style={{ width: '170px', position: 'relative', left: '140px', height: '50px' }}>
                  Project Form
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
