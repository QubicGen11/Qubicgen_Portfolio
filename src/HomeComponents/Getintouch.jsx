import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Getintouch.css';
import vectorgetin from '../assets/Getintouch/vector-186.svg';
import mailgetin from '../assets/Getintouch/mail@2x.png';
import sendgetin from '../assets/Getintouch/send.svg';
import keyboardgetin from '../assets/Getintouch/keyboard@2x.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Getintouch = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

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
        try {
            await axios.post('http://localhost:3000/api/getInTouch', formData);
            // Reset form after successful submission
            setFormData({
                fullName: '',
                email: '',
                message: ''
            });
            console.log('Form data submitted:', formData);
            alert('Form submitted successfully!');
            window.location.reload();

        } catch (error) {
            setIsLoading(false);
            console.error('Error submitting form:', error);
        }
    };

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
                                        <span className="get-in" style={{ fontSize: '50px' }}>Get in</span>
                                        <span style={{ fontSize: '50px' }}> touch with</span>
                                    </p>
                                    <p className="us" style={{ fontSize: '50px' }}>us</p>
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
                                            <input
                                                className="emailfield"
                                                name="fullName"
                                                onChange={handleChange}
                                                placeholder="Name"
                                                type="text"
                                                value={formData.fullName}
                                            />
                                        </div>
                                        <div className="yourname-youremail1">
                                            <b className="your-email">Your email</b>
                                            <input
                                                className="yourname-youremail-child"
                                                name="email"
                                                onChange={handleChange}
                                                placeholder="Email"
                                                type="text"
                                                value={formData.email}
                                            />
                                        </div>
                                    </div>
                                    <div className="sendbutton">
                                        <b className="your-message">Your Message</b>
                                        <textarea
                                            className="yourname-youremail-child"
                                            name="message"
                                            onChange={handleChange}
                                            placeholder="Enter Queries"
                                            rows={30}
                                            style={{ height: '200px' }}
                                            value={formData.message}
                                        />
                                    </div>
                                </div>
                                <button className="send-button" onClick={handleSubmit}  disabled={isLoading}> 
                                        {isLoading ? 'Submitting...' : 'Submit'}
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
    );
};

export default Getintouch;
