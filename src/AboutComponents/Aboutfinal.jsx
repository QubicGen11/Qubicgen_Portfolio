import React, { useEffect } from 'react'
import subtract from "../assets/Aboutaboutassests/public/subtract.svg"
import rectangle71 from  "../assets/Aboutaboutassests/public/rectangle-71.svg"
import image512 from  "../assets/Aboutaboutassests/public/image-51@2x.png"
import subtract2 from  "../assets/Aboutaboutassests/public/subtract-2.svg"
import image522 from  "../assets/Aboutaboutassests/public/image-52@2x.png"
import arrow10 from  "../assets/Aboutaboutassests/public/arrow-10.svg"
import arrow8 from  "../assets/Aboutaboutassests/public/arrow-8.svg"
import arrow9 from  "../assets/Aboutaboutassests/public/arrow-9.svg"
import arrow12 from  "../assets/Aboutaboutassests/public/arrow-12.svg"
import arrow11 from  "../assets/Aboutaboutassests/public/arrow-11.svg"
import group474 from  "../assets/Aboutaboutassests/public/group-47450@2x.png"
import arrow7 from  "../assets/Aboutaboutassests/public/arrow-7.svg"
import subtract32 from  "../assets/Aboutaboutassests/public/subtract-3@2x.png"
import subtract42x from  "../assets/Aboutaboutassests/public/subtract-4@2x.png"
import group47451 from  "../assets/Aboutaboutassests/public/group-47451-1@2x.png"
import group474511x from  "../assets/Aboutaboutassests/public/group-47451@2x.png"
import group474521x from  "../assets/Aboutaboutassests/public/group-47452-1@2x.png"
import group474501x from  "../assets/Aboutaboutassests/public/group-47450-1@2x.png"
import group474522x from  "../assets/Aboutaboutassests/public/group-47452@2x.png"
import Typewriter from 'typewriter-effect';
import './Aboutmain.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'





const Aboutfinal = () => {


  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <>

<main className="image" >
    <section className="contact-icon">
      <div className="mission-and-vision">
        <div className="discuss-projects">
                  <h1 className="our-mission-and-container" id='ourmissionandcon' style={{zIndex:1,fontSize:'45px',color:'white'}}>
  <Typewriter
    options={{
      autoStart: true,
      loop:true,
      
      delay: 2,
      strings: ['OUR <span class="text-[#ffd700]">MISSION</span> OUR <span class="text-[#ffd700]">VISION</span>'],
      onComplete: (self) => {
        const textElement = self.el;
        const html = textElement.innerHTML;
        textElement.innerHTML = html.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
      },
    }}
  />
</h1>



       
        </div>
        {/* <img className="subtract-icon" loading="eager" alt="" src={subtract} /> */}
        


<div class="container text-center">
  <div class="row">
    
    <div class="col w-60">
    <div className="case-studies-list"  data-aos="fade-right">
            {/* <img className="subtract-icon1" loading="eager" alt="" src={subtract2} style={{zIndex:'1'}}/> */}
            <div className="terms-conditions-link">
              <img className="terms-conditions-link-child" alt="" src={rectangle71} />
              <div className="privacy-policy-link">
                <img className="image-51-icon" loading="eager" alt="" src={image512} />
              </div>
              <div className="footer-frame" >
                <h2 className="our-mission text-white text-3xl flex items-center">
                  <span>OUR </span>
                  <span className="mission">MISSION</span>
                </h2>
                <div className="to-focus-on text-white text-left">
                QubicGen has a dual mission: first, to develop urban talent through comprehensive training programs, preparing them to tackle the challenges posed by emerging technologies. Second, to empower organizations with high-quality IT consulting services that improve operations, increase efficiency, and foster innovation.
                </div>
              </div>
            </div>
          </div>
              </div>




    <div class="col ">
<div className="case-studies-list "  data-aos="fade-right">
            {/* <img className="subtract-icon1" loading="eager" alt="" src={subtract2} style={{zIndex:'1'}}/> */}
            <div className="terms-conditions-link">
              <img className="terms-conditions-link-child" alt="" src={rectangle71} />
              <div className="privacy-policy-link">
                <img className="image-51-icon" loading="eager" alt="" src={image522} />
              </div>
              <div className="footer-frame" >
                <h2 className="our-mission text-white text-3xl flex items-center">
                  <span>OUR </span>
                  <span className="mission">VISION</span>
                </h2>
                <div className="to-focus-on text-white text-left">
                Guiding businesses on their digital transformation paths with strategic insights and premier technical proficiency, our IT firm places utmost importance on meeting client requirements. Utilizing agile methodologies in project development guarantees punctual delivery and smooth system integration and innovations                </div>
              </div>
            </div>
          </div> 

          
             </div>
  </div>
  
</div>







        
      </div>
      <div className="instance" >
        <div className="heading">
          <div className="text-link-wrapper" data-aos="fade-right">
            <div className="text-link1">
              <div className="documentation-wrapper">
                <div className="documentation">

                <h1 className="our-work-process" style={{zIndex:1,fontSize:'45px',color:'white',width:'800px'}}>
  <Typewriter
    options={{
      autoStart: true,
      loop:true,
      
      delay: 2,
      strings: ['OUR WORK <span class="text-[#ffd700]">FLOW</span>'],
      onComplete: (self) => {
        const textElement = self.el;
        const html = textElement.innerHTML;
        textElement.innerHTML = html.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
      },
    }}
  />
</h1>



                </div>
              </div>
              <div className="digitalbranding-parent">
                <div className="digitalbranding">
                  <div className="line" />
                  <div className="frame" />
                  <div className="empathize">Empathize</div>
                </div>
                <div className="digitalbranding1">
                  <div className="digitalbranding-child" />
                  <div className="digitalbranding-item" />
                  <img className="digitalbranding-inner" alt="" src={arrow10} />
                  <div className="ideate">Ideate</div>
                  <div className="our-work-process1">
                    <div className="frames-in-frame-group" />
                    <div className="amet-minim" />
                    <img className="our-work-process-child" loading="eager" alt="" src={arrow8} />
                    <img className="our-work-process-item" alt="" src={arrow9} />
                    <div className="define">Define</div>
                  </div>
                </div>
                <div className="digitalbranding2">
                  <div className="rectangle-div" />
                  <div className="digitalbranding-child1" />
                  {/* <img className="arrow-icon" alt="" src={arrow12} /> */}
                  <img className="digitalbranding-child2" alt="" src={arrow11} />
                  <div className="qualitative-test">
                    <p className="qualitative" style={{fontSize:'17px',fontWeight:'500'}}>Qualitative</p>
                    <p className="test"style={{fontSize:'17px',fontWeight:'500'}}>test</p>
                  </div>
            
                  <div className="contact-now">
                    <div className="resources" />
                    <div className="about-services-features-pricin" />
                    <div className="prototype">Prototype</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="company-logo" data-aos="fade-left">
            <div className="digitalbranding-group">
              <div className="digitalbranding3">



                       <h1 className="our-work-process" style={{zIndex:1,fontSize:'45px',color:'white',width:'800px'}}>
  <Typewriter
    options={{
      autoStart: true,
      loop:true,
      
      delay: 2,
      strings: ['WHY CHOOSE <span class="text-[#ffd700]">US</span>'],
      onComplete: (self) => {
        const textElement = self.el;
        const html = textElement.innerHTML;
        textElement.innerHTML = html.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
      },
    }}
  />
</h1>
                <div className="amet-minim-mollit1" style={{width:'500px'}}>
                At Qubicgen,  we're dedicated to be your trusted partner in navigating these complexities and unlocking your full potential for success.                </div>
              </div>
              <div className="frame-group">
                <div className="frames">
                  <img className="frames-child" loading="eager" alt="" src={group474} />
                  <div className="frames1">
                    <b className="digital-branding">Industry Expertise</b>
                    <div className="frames2">
                      <div className="frames-item" />
                      <div className="frames-inner" />
                    </div>
                    <div className="amet-minim-mollit-non-deserunt-parent">
                      <div className="amet-minim-mollit2">
                      With extensive experience in catering to diverse sectors, we understand the unique challenges and opportunities specific to your industry. Our specialized knowledge enables us to provide targeted solutions that drive tangible results.                      </div>
                      <img className="subtract-icon7" loading="eager" alt="" src={subtract32} />
                    </div>
                   
                   <Link to="/contact">
                   <button className="project-discussions">
                      <b className="discuss-for-projects">Discuss for Projects</b>
                      <img className="project-discussions-child" alt="" src={arrow7} />
                    </button>
                    </Link> 


                  </div>
                </div>
                <div className="frames3">
                  <img className="group-icon" loading="eager" alt="" src={group474501x} />
                  <div className="creative-solutions-parent">
                    <b className="creative-solutions">Comprehensive Services</b>
                    <div className="line-parent">
                      <div className="frame-item" />
                      <div className="frame-inner" />
                    </div>
                    <div className="amet-minim-mollit-non-deserunt-group">
                      <div className="amet-minim-mollit3">
                      we offer a wide range of services to address every aspect of your digital journey. Whether you require assistance with RPA implementation, digital marketing strategies, web development, or automation solutions, we have you covered.
                      </div>
                      <img className="subtract-icon8" loading="eager" alt="" src={subtract32} />
                    </div>
                   <Link to="/contact">
                   <button className="project-discussions">
                      <b className="discuss-for-projects">Discuss for Projects</b>
                      <img className="project-discussions-child" alt="" src={arrow7} />
                    </button>
                    </Link> 
                  </div>
                </div>
                <div className="frames4">
                  <img className="frames-child1" alt="" src={group474521x} />
                  <div className="marketing-solutions-parent">
                    <b className="marketing-solutions">Innovation-driven Approach: </b>
                    <div className="line-group">
                      <div className="line-div" />
                      <div className="frame-child2" />
                    </div>
                    <div className="amet-minim-mollit-non-deserunt-container">
                      <div className="amet-minim-mollit4">
                      We are at the forefront of technological innovation, constantly exploring trends to ensure that our clients stay ahead. Our commitment to innovation drives us to deliver forward-thinking solutions that propel your business towards success.
                      </div>
                      <img className="subtract-icon9" loading="eager" alt="" src={subtract32} />
                    </div>
                    <Link to="/contact">
                   <button className="project-discussions">
                      <b className="discuss-for-projects">Discuss for Projects</b>
                      <img className="project-discussions-child" alt="" src={arrow7} />
                    </button>
                    </Link> 
                  </div>
                </div>
                <div className="frames5">
                  <img className="frames-child2" loading="eager" alt="" src={group474511x}/>
                  <div className="business-analytics-parent">
                    <b className="business-analytics">Customized Solutions</b>
                    <div className="line-container">
                      <div className="frame-child4" />
                      <div className="frame-child5" />
                    </div>
                    <div className="frame-div">
                      <div className="amet-minim-mollit5">
                      We understand that every business is unique, which is why we take a personalized approach to address your specific needs. Our team works closely with you to develop tailored strategies and solutions that align with your goals and drive measurable outcomes
                      </div>
                      <img className="subtract-icon10" loading="eager" alt="" src={subtract32} />
                    </div>
                    <Link to="/contact">
                   <button className="project-discussions">
                      <b className="discuss-for-projects">Discuss for Projects</b>
                      <img className="project-discussions-child" alt="" src={arrow7} />
                    </button>
                    </Link> 
                  </div>
                </div>
                <div className="frames6">
                  <img className="frames-child3" loading="eager" alt="" src={group47451} />
                  <div className="ui-ux-design-parent">
                    <b className="ui-ux"> Reliable Support</b>
                    <div className="line-parent1">
                      <div className="frame-child7" />
                      <div className="frame-child8" />
                    </div>
                    <div className="amet-minim-mollit-non-deserunt-parent1">
                      <div className="amet-minim-mollit6">
                      we believe in providing reliable support every step of the way. Whether you need assistance with implementation, troubleshooting, or ongoing maintenance, our team of experts are here to ensure that you receive the support you need, when you need it
                      </div>
                      <img className="subtract-icon11" loading="eager" alt="" src={subtract42x} />
                    </div>
                    <Link to="/contact">
                   <button className="project-discussions">
                      <b className="discuss-for-projects">Discuss for Projects</b>
                      <img className="project-discussions-child" alt="" src={arrow7} />
                    </button>
                    </Link> 
                  </div>
                </div>
                <div className="frames7">
                  <img className="frames-child4" alt="" src={group474522x} />
                  <div className="photography-parent">
                    <b className="photography">Commitment to Excellence</b>
                    <div className="line-parent2">
                      <div className="frame-child10" />
                      <div className="frame-child11" />
                    </div>
                    <div className="amet-minim-mollit-non-deserunt-parent2">
                      <div className="amet-minim-mollit7">
                      We are committed to excellence in everything we do, striving to set the highest standards for quality, reliability, and customer satisfaction. When you choose us, you can rest assured that you are partnering with a trusted ally dedicated to helping you achieve your business objectives.
                      </div>
                      <img className="subtract-icon12" loading="eager" alt="" src={subtract42x} />
                    </div>
                    <Link to="/contact">
                   <button className="project-discussions">
                      <b className="discuss-for-projects">Discuss for Projects</b>
                      <img className="project-discussions-child" alt="" src={arrow7} />
                    </button>
                    </Link> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  </main> 
    </>
 
  
  )
}

export default Aboutfinal