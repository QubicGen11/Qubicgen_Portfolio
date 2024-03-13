import React, { useEffect, useRef } from 'react'
import "./Contact.css"
import Navbar from '../HomeComponents/Navbar'
import Footer from '../HomeComponents/Footer'

const Contact = () => {
    const containeroneRef = useRef(null);

    useEffect(() => {
      const sign_in_btn = document.querySelector("#sign-in-btn");
      const sign_up_btn = document.querySelector("#sign-up-btn");
  
      sign_up_btn.addEventListener("click", () => {
        containeroneRef.current.classList.add("sign-up-mode");
      });
  
      sign_in_btn.addEventListener("click", () => {
        containeroneRef.current.classList.remove("sign-up-mode");
      });
    }, []);
  
  return (
    <>

    <Navbar/>
     <div className="boxy">
    <div className="containerone"  ref={containeroneRef}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Student Form</h2>
            <div className="input-field">
              <i className="fas fa-user" />
              <input type="text" placeholder="Enter Full Name" />
            </div>
            <div className="input-field">
              <i className="fas fa-phone" />
              <input type="number" placeholder="Enter Mobile" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope" />
              <input type="email" placeholder="Enter email" />
            </div>
            <div className="input-field">
              <i className="fas fa-caret-down" />
              <select name="year" id="year" style={{color:'black'}}>
                <option value="select">Select a Course</option>
                <option value="rpa">RPA</option>
                <option value="year2">Web Development</option>
                <option value="year2">SAP</option>
                <option value="year2">Testing</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="input-field" style={{height: '20vh'}}>
              <i className="fas fa-" style={{position: 'relative', top: '20px',border:'none'}} />
              <input type="text" placeholder="Enter Message" />
            </div>
            <input type="submit" defaultValue="submit" className="btn solid" id='studsub' />
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Project Form</h2>
            <div className="input-field">
              <i className="fas fa-user" />
              <input type="text" placeholder="Enter Full Name" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-phone" />
              <input type="number" placeholder="Number" />
            </div>
            <div className="input-field">
              <i className="fas fa-user" />
              <input type="text" placeholder="Job title" />
            </div>
            <div className="input-field">
              <i className="fas fa-building" />
              <input type="text" placeholder="Enter Company" />
            </div>
            <div className="input-field" style={{height: '20vh'}}>
              <i className="fas fa-address-book" style={{position: 'relative', top: '20px'}} />
              <input type="text" placeholder="Enter Comments" />
            </div>
            <input type="submit" className="btn" defaultValue="submit" id='prosub' />
          </form>
        </div>
      </div>




      
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Looking for Project ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" id="sign-up-btn" style={{width:'200px'}}>
              Project Form
            </button>
          </div>
          <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1710237566/QubicGen/Contact%20Us/cropped_robot_yspx0x.jpg" style={{position: 'relative', right: '100px'}} className="imageone" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Are you a Student ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn">
              Student Form
            </button>
          </div>
          <img src="img/register.svg " id="register" style={{position: 'relative', right: '100px'}} className="imageone" alt="" />
        </div>
      </div>
      
    </div>
  </div>
  <Footer/>
    </>
   
  )
}

export default Contact