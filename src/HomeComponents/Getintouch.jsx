import React, { useEffect } from 'react'
import './Getintouch.css'
import vectorgetin from '../assets/Getintouch/vector-186.svg'
import mailgetin from '../assets/Getintouch/mail@2x.png'
import sendgetin from '../assets/Getintouch/send.svg'
import keyboardgetin from '../assets/Getintouch/keyboard@2x.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Getintouch = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
      }, [])
    return (
        <div>

            <div className="getintouch" data-aos="fade-right">
                <div className="contact-page">
                    <div className="frame-a" />
                    <section className="frame-b-wrapper">
                        <div className="frame-b">
                            <div className="frame-c">
                                <h1 className="get-in-touch-container">
                                    <p className="get-in-touch-with">
                                        <span className="get-in">Get in</span>
                                        <span> touch with</span>
                                    </p>
                                    <p className="us">us</p>
                                </h1>
                                <div className="frame-d">
                                    <div className="group-a-parent">
                                        <div className="group-a" />
                                        <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709273884/Group_2372_1_duuuo0.png" alt="" />
                                    </div>
                                    <img className="frame-e-icon" loading="eager" alt="" src={vectorgetin} />
                                </div>
                            </div>
                            <div className="mailicon">
                                <div className="nameframe">
                                    <div className="emailframe">
                                        <div className="yourname-youremail">
                                            <b className="your-name">Your name</b>
                                            <input className="emailfield" placeholder="Name" type="text" />
                                        </div>
                                        <div className="yourname-youremail1">
                                            <b className="your-email">Your email</b>
                                            <input className="yourname-youremail-child" placeholder="Email" type="text" />
                                        </div>
                                  

                                    </div>
                                    <div className="sendbutton">
                                        <b className="your-message">Your Message</b>
                                        <textarea className="yourname-youremail-child" placeholder="Enter Queries" rows={30} style={{height:'200px'}}></textarea> 

                                    </div>
                                </div>
                                <button className="send-button">
                                    <b className="send-message">Send Message</b>
                                    <img className="send-icon" alt="" src={sendgetin} />
                                </button>
                            </div>
                        </div>
                    </section>
                    <img className="mail-icon" loading="eager" alt="" src={mailgetin} />
                    <img className="keyboard-icon" loading="eager" alt="" src={keyboardgetin} />
                    <div className="line-separator">
                        <div className="frame-group" />
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Getintouch
