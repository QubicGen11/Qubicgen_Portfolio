import React from "react";
import { Helmet } from 'react-helmet-async';
import Navbar from "../HomeComponents/Navbar";
import Abouthero from "../AboutComponents/Abouthero";
import Aboutfinal from "../AboutComponents/Aboutfinal";
import Aboutprojects from "../AboutComponents/Aboutprojects";
import Footer from "../HomeComponents/Footer";
import "../AboutComponents/Aboutmain.css"
import SEO from "../SEO";

const About = () => {
  return (
    <>
    <SEO
        title="QubiGen - About Us"
        description="Learn more about QubiGen and our mission to empower success through knowledge, innovation, and technology. Discover how we bridge the gap between learning and achievement to help you reach your goals."
        type="website"
        name="QubiGen About"
        image="https://example.com/about-og-image.jpg"
        url="https://www.qubicgen.com/about"
        keywords="QubiGen, About Us, mission, empower success, knowledge, innovation, technology, learning, achievement, goals"
    />
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
