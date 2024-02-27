import React from 'react'

import './Carausel.css'

const Carausel = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide carousel"  data-bs-ride="carousel">
  <div className="carousel-indicators" id='btnsofcarausel'>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000" >
      <img src= "https://res.cloudinary.com/defsu5bfc/image/upload/v1708354330/QubicGen/Slide1_1_ejspvq_e2vp5u.webp" id='slide1img' className="d-block w-100" alt="Image is still loading" />
      <div className="carousel-caption">
        <h1 style={{color:'white'}}>Unlock</h1>
          <h1 style={{color:'white'}}>Your </h1>
          <h1>Thoughts.</h1>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1708354334/QubicGen/Slidethree_1_oyauhe_rsbljp.webp" id='slide3img' className="d-block w-100" alt="..." />
      <div className="carousel-caption">
        <h1 style={{color:'white'}}>your trusted it partner </h1>
        <h1>for reliability and excellence.</h1>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1708354335/QubicGen/Slidetwo_v2l3e3_kunfm5.webp" id='slide2img' className="d-block w-100" alt="..." />
      <div className="carousel-caption2">
        <h1 style={{color:'white'}}>one stop solution </h1>
        <h1>for all your business ideas. </h1>
      </div>
    </div>
   
    <div className="carousel-item" data-bs-interval="3000">
      <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1708354328/QubicGen/Slide3_hfsrsc_fryv1e.webp" id='slide4img' className="d-block w-100" alt="..." />
      <div className="carousel-caption">
        <h1 style={{color:'white'}}>Automate.</h1>
        <h1>Operate.</h1>
        <h1>Excel...</h1>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>



   
    </div>
  )
}

export default Carausel
