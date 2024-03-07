import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';
import './Homewhomweserve.css'
import { Link } from 'react-scroll';

const Homewhomweserve = () => {
  return (
    <div>
      
    <section id='whomweserve' className="bg-[#26282b] w-11/12 mx-auto rounded-md m-4 p-4" data-aos="fade-right" style={{width:'85vw'}}>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
      

<div id="carouselExampleFade2" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner" style={{ height: '200px', width: '300px',borderRadius:'30px' }}>
    <div className="carousel-item active" data-bs-interval="2000">
    <a href="/health">
              <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1708354326/QubicGen/ai-dna-gene-editing-technology-biotech-genetic-engineering_ietf9w_niphrh.webp" className="d-block w-100" alt="..." />
            </a>
        </div>
    <div className="carousel-item" data-bs-interval="2000">
      <a href="/manufacturing">
      <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1708354325/QubicGen/hightech-robot-arms-automated-manufacturing-plant_fdv51e_upx4ji.webp" style={{ height: '300px', width: '300px',borderRadius:'30px' }} className="d-block w-100" alt="..."/>

      </a>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <a href="/travel">
      <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1708354325/QubicGen/Gemini_Generated_Image_3_wl9ihw_ysvyrz.webp"/>


      </a>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <a href="/energy">
      <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709796312/QubicGen/solar-energy-pannel-big-solar-farm-warm-light-tone-generative-ai_36049-972_efzgeo.jpg" style={{height:'300px'}} className="d-block w-100" alt="..."/>

      </a>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade2" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade2" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      
        


        <div className="md:ml-12 text-center md:text-left" id='righttextserve'>
        <h2 className="text-3xl font-bold mt-4 md:mt-0 text-white" style={{fontSize:'40px'}}>
  <Typewriter
    options={{
      autoStart: true,
      loop:true,
      
      delay: 2,
      strings: [' To whom we <span class="text-[#ffd700]">Serve</span>'],
      onComplete: (self) => {
        const textElement = self.el;
        const html = textElement.innerHTML;
        textElement.innerHTML = html.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
      },
    }}
  />
</h2>          <p className="mt-2 text-white" style={{fontSize:'15px',fontWeight:'400'}}>
            We provide consulting, training, and outsourcing. We encourage young talent by providing internships under RPA, SAP, .Net etc... QubiGen, situated in the dynamic and thriving city of Anantapur, Andhra Pradesh, India, stands as a beacon of knowledge and a catalyst for success. Our mission is to bridge the gap between learning and achievement, fostering an environment where ideas flourish and ambitions are.
          </p>
          <a href="#" className="inline-block bg-[#ffd700] text-black mt-4 px-6 py-2 rounded-full font-bold hover:bg-opacity-60 transition duration-300">Read More&apos;</a>
        </div>
      </div>
    </section>
 
    </div>
  )
}

export default Homewhomweserve
