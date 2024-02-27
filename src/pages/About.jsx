import React from "react";
import { Helmet } from 'react-helmet-async';
import Navbar from "../HomeComponents/Navbar";
import Abouthero from "../AboutComponents/Abouthero";
import Aboutfinal from "../AboutComponents/Aboutfinal";
import Aboutprojects from "../AboutComponents/Aboutprojects";
import Footer from "../HomeComponents/Footer";
import "../AboutComponents/Aboutmain.css"

// SEO component definition
function SEO({ title, description, name, type }) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{"About"}</title>
      <meta name='description' content={"Introducing QubicGen, where innovation meets expertise. As a leading provider of tailored services in Intelligent Automation, Web Development, SAP, Database management, Cyber Security, Testing, Digitization, and Digital Marketing, we're dedicated to propelling businesses forward across diverse industries. From medical and manufacturing to education, retail, transportation, and beyond, we cater to the unique needs of each sector, ensuring seamless integration and sustainable growth. At the heart of our mission is the commitment to fostering urban talent by offering comprehensive training programs on trending technologies and opportunities for outsourcing. Additionally, our IT consulting services empower organizations to optimize their operations, streamline processes, and unlock their full potential in the digital age. Discover the possibilities with QubicGen, where innovation and excellence converge to drive success."}/>
      {/* End standard metadata tags */}

      {/* Facebook tags */}
      <meta property="og:type" content="Website" />
      <meta property="og:image" content={""}/>
      <meta property="og:url" content={""}/>
      <meta property="og:title" content={"About"} />
      <meta property="og:description" content={"Introducing QubicGen, where innovation meets expertise. As a leading provider of tailored services in Intelligent Automation, Web Development, SAP, Database management, Cyber Security, Testing, Digitization, and Digital Marketing, we're dedicated to propelling businesses forward across diverse industries. From medical and manufacturing to education, retail, transportation, and beyond, we cater to the unique needs of each sector, ensuring seamless integration and sustainable growth. At the heart of our mission is the commitment to fostering urban talent by offering comprehensive training programs on trending technologies and opportunities for outsourcing. Additionally, our IT consulting services empower organizations to optimize their operations, streamline processes, and unlock their full potential in the digital age. Discover the possibilities with QubicGen, where innovation and excellence converge to drive success."} />
      {/* End Facebook tags */}

      {/* Twitter tags */}
      <meta name="twitter:image" content={image} />

      
      <meta name="twitter:card" content={"Introducing QubicGen, where innovation meets expertise. As a leading provider of tailored services in Intelligent Automation, Web Development, SAP, Database management, Cyber Security, Testing, Digitization, and Digital Marketing, we're dedicated to propelling businesses forward across diverse industries. From medical and manufacturing to education, retail, transportation, and beyond, we cater to the unique needs of each sector, ensuring seamless integration and sustainable growth. At the heart of our mission is the commitment to fostering urban talent by offering comprehensive training programs on trending technologies and opportunities for outsourcing. Additionally, our IT consulting services empower organizations to optimize their operations, streamline processes, and unlock their full potential in the digital age. Discover the possibilities with QubicGen, where innovation and excellence converge to drive success."} />
      <meta name="twitter:title" content={'About'} />
      <meta name="twitter:description" content={"Introducing QubicGen, where innovation meets expertise. As a leading provider of tailored services in Intelligent Automation, Web Development, SAP, Database management, Cyber Security, Testing, Digitization, and Digital Marketing, we're dedicated to propelling businesses forward across diverse industries. From medical and manufacturing to education, retail, transportation, and beyond, we cater to the unique needs of each sector, ensuring seamless integration and sustainable growth. At the heart of our mission is the commitment to fostering urban talent by offering comprehensive training programs on trending technologies and opportunities for outsourcing. Additionally, our IT consulting services empower organizations to optimize their operations, streamline processes, and unlock their full potential in the digital age. Discover the possibilities with QubicGen, where innovation and excellence converge to drive success."} />
      {/* End Twitter tags */}
    </Helmet>
  );
}


const About = () => {
  return (
    <>
    <Navbar/>
    <div style={{backgroundColor:'black'}}>
    <Abouthero />
    <Aboutfinal/>
    <Aboutprojects/>
    <Footer/>

    </div>
   
    
    </>
  )
}

export default About;
