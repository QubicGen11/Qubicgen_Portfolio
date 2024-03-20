import React, { useEffect } from 'react'
import unsplash9 from  "../assets/Aboutaboutassests/public/unsplashluseu9gtyzm@2x.png"
import paperplane from  "../assets/Aboutaboutassests/public/paper-plane@2x.png"

import AOS from 'aos';
import 'aos/dist/aos.css';
import '../AboutComponents/Aboutmain.css'
import { Link } from 'react-router-dom';




const Aboutprojects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <div className="main-frame" data-aos="fade-up">
        <div className="frames-with-text-links">
          <div className="frames-with-text-links1">
            <div className="unsplashluseu9gtyzm-parent">
              <img className="unsplashluseu9gtyzm-icon" alt="" src={unsplash9} />
              <div className="have-project-idea">
                <div className="ametminimmollitnondeseruntulla">
                  <img className="paper-plane-icon" loading="eager" alt="" src={paperplane} />
                  <div className="contact-now1">
                    <h1 className="have-any-project">Have any project idea?</h1>
                  
                  </div>
                </div>

                <Link to="/contact">
                <button className="contact-now-wrapper">
                  <b className="contact-now2">Contact Now</b>
                </button>
                </Link>
              
              </div>
            </div>
            
          </div>
          





        </div>
      </div>

  )
}

export default Aboutprojects