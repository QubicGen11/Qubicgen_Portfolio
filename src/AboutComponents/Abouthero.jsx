import React, { useEffect } from 'react'
import framex2 from '../assets/Aboutaboutassests/public/frame@2x.png'
import materialsym from '../assets/Aboutaboutassests/public/materialsymbolsarrowforwardrounded.svg'
import Typewriter from 'typewriter-effect';
import '../AboutComponents/Aboutmain.css'


import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Abouthero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <>
    
    <div className="Aboutmain flex bg-center justify-left items-center sm:h-10 " >
      <div className="z-50 text-2xl ml-3 flex flex-col mb-56 text-white sm:mx-6  md:text-4xl md:mr-80 lg:text-5xl lg:mb-10 h-36 md:w-96 lg:w-auto xl:w-auto " >

      <h1 className="text-3xl font-bold mt-4 md:mt-0 text-white" style={{zIndex:1,fontSize:'45px', marginBottom:'20px'}}>
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
</h1>        <p className=' text-xs font-medium w-72 sm:w-auto md:w-auto md:text-sm '> Continuing our commitment to excellence, QubicGen envisions a future where technological innovation seamlessly integrates with human expertise, fostering a dynamic landscape for business growth. Our vision is to lead transformative changes across industries, pioneering advancements in Intelligent Automation, Web Development, SAP, Database Management, Cybersecurity, Testing, Digitization, and Digital Marketing. We aim to be the catalyst for innovation, empowering businesses to adapt and thrive in the evolving digital era. By pushing technology boundaries and harnessing urban talent, we aspire to be the go-to partner for organizations seeking tailored solutions for sustainable growth. QubicGen serves as a platform for talent cultivation, facilitating collaboration and progress in diverse sectors.</p>

      </div>
    </div>

    
    </>




  )
}

export default Abouthero