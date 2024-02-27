import React from 'react'
import './Homeabout.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

const Homeabout = () => {
  return (
    <div>
        
        <section id='homeabout-main' className="bg-[#26282b] w-11/12 mx-auto rounded-md m-4 p-4 shadow-lg" data-aos="fade-up" style={{width:'85vw'}}>
            <div className="container mx-auto flex flex-col md:flex-row items-center">
              <img id="aboutusimage" src="https://media.istockphoto.com/id/1402604850/photo/the-word-about-us-on-wooden-cubes-business-communication-and-information.webp?b=1&s=170667a&w=0&k=20&c=M1zgL2pGwZ_g3cwmOvdMtzz92PlTLdihv6_wgaW1QZc=" style={{borderRadius:"30px"}} alt="" />
              <div className="md:ml-12 text-center md:text-left">
                
              
              <h2 className="text-3xl font-bold mt-4 md:mt-0 text-white" id='wearequbic' style={{fontSize:'30px'}}>
  <Typewriter
    options={{
      autoStart: true,
      loop:true,
      
      delay: 2,
      strings: ['We are <span class="text-[#ffd700]">QubiGen</span>'],
      onComplete: (self) => {
        const textElement = self.el;
        const html = textElement.innerHTML;
        textElement.innerHTML = html.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
      },
    }}
  />
</h2>



                <p className="mt-2 text-white">
 
  QubiGen, situated in the dynamic and thriving city of Anantapur, Andhra Pradesh, India, stands as a beacon of knowledge and a catalyst for success. Our mission is to bridge the gap between learning and achievement, focusing on innovative where ideas flourish and ambitions are realizedWith a focus on innovation and excellence, QubiGen empowers individuals to unlock their potential and contribute meaningfully to their communities.Here, tradition meets technology, creating a unique synergy.|
</p>
                <Link to="/about" className="inline-block bg-[#ffd700] text-black mt-4 px-6 py-2 rounded-full font-bold hover:bg-opacity-60 transition duration-300">Read More&apos;</Link>
              </div>
            </div>
          </section>
       
      
    </div>
  )
}

export default Homeabout
