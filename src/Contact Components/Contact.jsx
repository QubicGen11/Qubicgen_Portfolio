import React, { useState } from 'react';
import './Contact.css'; // Assuming the CSS file is named Contact.css
import Footer from '../HomeComponents/Footer';
import Navbar from '../HomeComponents/Navbar';

const Contact = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false); // Updated initial state

  const handleSignInClick = () => {
    setIsRightPanelActive(false); // Activate form2 on the right side
  };

  const handleSignUpClick = () => {
    setIsRightPanelActive(true); // Activate form1 on the left side
  };

  const handleSubmitForm1 = (e) => {
    e.preventDefault();
  };

  const handleSubmitForm2 = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <div className="contact_one" style={{height:'800px'}}>
        <div className={`containerone  ${isRightPanelActive ? 'right-panel-active' : ''} `} >
          {/* Sign Up */}
          <div className="container__form container--signup" >
            <form action="#" className="form" id="form1" onSubmit={handleSubmitForm1} >
              <h2 className="form__title" style={{fontWeight: 'bolder', fontSize: '40px'}}>Projects</h2>
              <input type="name" placeholder="Enter Full Name" className="input" />
              <input type="email" placeholder="Email" className="input" />
              <input type="tel" placeholder="Mobile No." className="input" />
              <input type="text" placeholder="Job Title" className="input" />
              <input type="text" placeholder="Company/Organization" className="input" />
              <input type="text" placeholder="Message" className="input" />
              <button className="btn">Submit</button>
            </form>
          </div>

          {/* Sign In */}
          <div className="container__form container--signin">
            <form action="#" className="form" id="form2" onSubmit={handleSubmitForm2}>
              <h2 className="form__title" style={{fontWeight: 'bolder', fontSize: '40px'}}>Trainings</h2>
              <input type="name" placeholder="Enter Full Name" className="input" />
              <input type="email" placeholder="Email" className="input" />
              <input type="tel" placeholder="Mobile No." className="input" />
              <select className="dropdownone" defaultValue="">
                <option value="" disabled>Select Course</option>
                <option value="admin">RPA</option>
                <option value="user">Cyber Security</option>
                <option value="user">Service Now</option>
                <option value="user">Testing</option>
                <option value="user">Prompt Engineering</option>
                <option value="user">Azure Data Factory</option>
                <option value="user">Data Science</option>
                <option value="user">SQL</option>
                <option value="user">Full Stack Development</option>
              </select>
              <input type="text" placeholder="Message" className="input" />
              <button className="btn">Submit</button>
            </form>
          </div>

          {/* Overlay */}
          <div className="container__overlay">
            <div className="overlay">
              <div className="overlay__panel overlay--left">
                <button className="btn" id="signIn" onClick={handleSignInClick}>Want to Learn Skills?</button>
              </div>
              <div className="overlay__panel overlay--right">
                <button className="btn" id="signUp" onClick={handleSignUpClick}>Have any Project Ideas?</button>
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