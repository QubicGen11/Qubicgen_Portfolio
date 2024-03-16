import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import Footer from '../HomeComponents/Footer'
import "./Digitals.css"
import Digitalshead from './Digitalshead'
import Digitalslist from './Digitalslist'
import SEO from '../SEO'


const Digitals = () => {
  return (
    
    <>
    <SEO
        title="QubiGen - Digital Marketing Services"
        description="Empower your brand and drive growth with QubiGen's digital marketing services. Discover how our expertise in digital marketing can elevate your online presence and boost your reach."
        type="website"
        name="QubiGen Digital Marketing"
        image="https://example.com/digital-marketing-og-image.jpg"
        url="https://www.qubicgen.com/digitalmarketing"
        keywords="QubiGen, Digital Marketing Services, brand, growth, online presence, reach, digital marketing"
    />
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Digitalshead/>
    <Digitalslist/>
    <Footer/>

        
    </div>
    </>
  )
}

export default Digitals