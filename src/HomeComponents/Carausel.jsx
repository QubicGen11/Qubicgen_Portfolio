import React, { useEffect, useState } from 'react';

import './Carausel.css';

const Carausel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Start automatic movement of the carousel after mounting
    const intervalId = setInterval(() => {
      // Move the carousel to the next slide
      const nextIndex = (currentIndex + 1) % 4; // Assuming there are 4 carousel items
      setCurrentIndex(nextIndex);
    }, 3000); // Adjust the interval as per your requirement

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentIndex]); // Ensure the effect runs whenever currentIndex changes

  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators" id='btnsofcarausel'>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className={currentIndex === 0 ? "active" : ""} aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} className={currentIndex === 1 ? "active" : ""} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} className={currentIndex === 2 ? "active" : ""} aria-label="Slide 3" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} className={currentIndex === 3 ? "active" : ""} aria-label="Slide 4" />
        </div>
        <div className="carousel-inner">
          <div className={currentIndex === 0 ? "carousel-item active" : "carousel-item"} data-bs-interval="3000">
            <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709803237/QubicGen/Home%20Page/Corossal/Slide1_1_ejspvq_e2vp5u_1_1_afehbj.jpg" id='slide1img' className="d-block w-100" alt="Image is still loading" loading="lazy" />
            <div className="carousel-caption">
              <h1 style={{color:'white'}}>Unlock</h1>
              <h1 style={{color:'white'}}>Your</h1>
              <h1>Thoughts.</h1>
            </div>
          </div>
          <div className={currentIndex === 1 ? "carousel-item active" : "carousel-item"} data-bs-interval="3000">
            <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709803508/QubicGen/Home%20Page/Corossal/Slidethree_1_oyauhe_rsbljp_1_1_1_1_deornf.jpg" id='slide3img' className="d-block w-100" alt="..." loading="lazy" />
            <div className="carousel-caption" id='captiontrust' >
              <h1 style={{color:'white'}}>your trusted it partner </h1>
              <h1>for reliability and excellence.</h1>
            </div>
          </div>
          <div className={currentIndex === 2 ? "carousel-item active" : "carousel-item"} data-bs-interval="3000">
            <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709803609/QubicGen/Home%20Page/Corossal/Slidetwo_v2l3e3_kunfm5_2_lswsgi.jpg" id='slide2img' className="d-block w-100" alt="..." loading="lazy" />
            <div className="carousel-caption">
              <h1 style={{color:'white'}}>one stop solution </h1>
              <h1>for all your business ideas. </h1>
            </div>
          </div>
          <div className={currentIndex === 3 ? "carousel-item active" : "carousel-item"} data-bs-interval="3000">
            <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1710313514/QubicGen/Home%20Page/Corossal/robot-hand-finger-ai-background-technology-graphics_tq7hs0.jpg" id='slide4img' className="d-block w-100" alt="..." loading="lazy" />
            <div className="carousel-caption">
              <h1 style={{color:'white'}}>Automate.</h1>
              <h1>Operate.</h1>
              <h1>Excel...</h1>
            </div>
          </div>
        </div>
        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
    </div>
  )
}

export default Carausel
