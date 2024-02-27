import React, { useEffect } from 'react'
import framex2 from '../assets/Aboutaboutassests/public/frame@2x.png'
import materialsym from '../assets/Aboutaboutassests/public/materialsymbolsarrowforwardrounded.svg'
import Typewriter from 'typewriter-effect';
import '../AboutComponents/Aboutmain.css'


import AOS from 'aos';
import 'aos/dist/aos.css';

const Abouthero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <div className="root" data-aos="fade-right" style={{width:'96vw'}} >
    <div className="frame-parent" >
      <img className="frame-icon" alt="" src={framex2} />

               <h1 className="text-3xl font-bold mt-4 md:mt-0 text-white" style={{zIndex:1,fontSize:'45px'}}>
  <Typewriter
    options={{
      autoStart: true,
      loop:true,
      
      delay: 2,
      strings: ['ABOUT <span class="text-[#ffd700]">US</span>'],
      onComplete: (self) => {
        const textElement = self.el;
        const html = textElement.innerHTML;
        textElement.innerHTML = html.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
      },
    }}
  />
</h1>
     

      
      <div className="weekend-ux-is">
      Continuing our commitment to excellence, QubicGen envisions a future where technological innovation seamlessly integrates with human expertise, fostering a dynamic landscape for business growth. Our vision is to lead transformative changes across industries, pioneering advancements in Intelligent Automation, Web Development, SAP, Database Management, Cybersecurity, Testing, Digitization, and Digital Marketing. We aim to be the catalyst for innovation, empowering businesses to adapt and thrive in the evolving digital era. By pushing technology boundaries and harnessing urban talent, we aspire to be the go-to partner for organizations seeking tailored solutions for sustainable growth. QubicGen serves as a platform for talent cultivation, facilitating collaboration and progress in diverse sectors.
      </div>
      <button className="button">
        <div className="contact-us">Join Us</div>
        <img className="material-symbolsarrow-forward-icon" alt="" src={materialsym} />
      </button>
    </div>
  </div>
  )
}

export default Abouthero