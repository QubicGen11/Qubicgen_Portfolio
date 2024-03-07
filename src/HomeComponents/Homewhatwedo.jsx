import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';
import './Homewhatwedo.css'
import { Link } from 'react-router-dom';


const Homewhatwedo = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div>
      <section id='homwwhatwedo' className="bg-[#26282b] w-11/12 mx-auto rounded-md m-4 p-4" data-aos="fade-up" style={{width:'85vw'}}>
        <div className="container mx-auto flex flex-col md:flex-row items-center" >
          <div className="md:ml-12 text-center md:text-left" id='lefttextabout' >

          <h2 className="text-3xl font-bold mt-4 md:mt-0 text-white" style={{fontSize:'40px'}}>
  <Typewriter
    options={{
      autoStart: true,
      loop:true,
      
      delay: 2,
      strings: ['What we <span class="text-[#ffd700]">Do</span>'],
      onComplete: (self) => {
        const textElement = self.el;
        const html = textElement.innerHTML;
        textElement.innerHTML = html.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
      },
    }}
  />
</h2>


<p
  id='whatwedotext'
  className="mt-2 text-white"
  style={{
    position: 'relative',
    right: '10px',
    fontSize:'15px',
    fontWeight:'400'
   
  }}
>
  We provide consulting, training, and outsourcing. We encourage young talent by providing internships under RPA, SAP, .Net, etc... QubiGen, situated in the dynamic and thriving city of Anantapur, Andhra Pradesh, India, stands as a beacon of knowledge and a catalyst for success. Our mission is to bridge the gap between learning and achievement, fostering an environment where ideas flourish and ambitions are realized.
</p>

            <a href="#" className="inline-block bg-[#ffd700] text-black mt-4 px-6 py-2 rounded-full font-bold hover:bg-opacity-60 transition duration-300">Read More&apos;</a>
          </div>
          <br />



         


<div id="carouselExampleFade1" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner" style={{ height: '200px', width: '300px',borderRadius:'30px' }}>
    <div className="carousel-item active" data-bs-interval="2000">
  <Link to="/rpa">
  <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1708354331/QubicGen/robotic-arm-rpa-hologram_klywdu_qaw6xz.webp" className="d-block w-100" alt="..."  /> </Link>    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <Link to="/digitalization">
    <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1708354327/QubicGen/26761825_2111.i101.015.F.m004.c9.digital_transformation_digitization_isometric_jttcar_n7620j.webp" className="d-block w-100" alt="..."/>

    </Link>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
<Link to="/sap">
<img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1708354333/QubicGen/998_sap_etuzdj_m4s30u.webp" className="d-block w-100" alt="..."/>

</Link>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <Link to="/cybersecurity">
      <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1708354332/QubicGen/3d-internet-secuirty-badge_lhwfci_s4vubk.webp" className="d-block w-100" alt="..."/>

      </Link>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade1" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade1" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>







        </div>
      </section>


    </div>
  )
}

export default Homewhatwedo
