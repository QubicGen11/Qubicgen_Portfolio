import React, { useEffect, useState } from 'react';
import './Carausel.css';

const Carausel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % 4;
      setCurrentIndex(nextIndex);
    }, 3000); // Change interval to 5 seconds
  
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators" id='btnsofcarausel'>
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={currentIndex === index ? "active" : ""}
              aria-current={currentIndex === index ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
        <div className="carousel-inner">
          <div className={currentIndex === 0 ? "carousel-item active" : "carousel-item"}>
            <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709803237/QubicGen/Home%20Page/Corossal/Slide1_1_ejspvq_e2vp5u_1_1_afehbj.jpg" id='slide1img' className="d-block w-100" alt="Image is still loading" loading="lazy" />
            <div className="carousel-caption">
              <h1 style={{color:'white'}}>Unlock</h1>
              <h1 style={{color:'white'}}>Your</h1>
              <h1>Thoughts.</h1>
            </div>
          </div>
          <div className={currentIndex === 1 ? "carousel-item active" : "carousel-item"}>
            <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709803508/QubicGen/Home%20Page/Corossal/Slidethree_1_oyauhe_rsbljp_1_1_1_1_deornf.jpg" id='slide3img' className="d-block w-100" alt="..." loading="lazy" />
            <div className="carousel-caption" id='captiontrust' >
              <h1 style={{color:'white'}}>your trusted it partner </h1>
              <h1>for reliability and excellence.</h1>
            </div>
          </div>
          <div className={currentIndex === 2 ? "carousel-item active" : "carousel-item"} >
            <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709803609/QubicGen/Home%20Page/Corossal/Slidetwo_v2l3e3_kunfm5_2_lswsgi.jpg" id='slide2img' className="d-block w-100" alt="..." loading="lazy" />
            <div className="carousel-caption">
              <h1 style={{color:'white'}}>one stop solution </h1>
              <h1>for all your business ideas. </h1>
            </div>
          </div>
          <div className={currentIndex === 3 ? "carousel-item active" : "carousel-item"} >
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

export default Carausel;
