import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import Footer from '../HomeComponents/Footer'
import Digitalizationlist from './Digitalizationlist'
import "./Digitalization.css"
import Digitalizationhead from './Digitalizationhead'
import SEO from '../SEO'


const Digitalization = () => {
  return (
    
    <>
    <SEO
    title="QubiGen - Digitalization Solutions"
    description="Accelerate your digital transformation with QubiGen's digitalization solutions. Discover how our expertise in digital technologies can empower your business and enable innovation."
    type="website"
    name="QubiGen Digitalization"
    image="https://example.com/digitalization-og-image.jpg"
    url="https://www.qubicgen.com/digitalization"
    keywords="QubiGen, Digitalization Solutions, digital transformation, business empowerment, innovation, digital technologies"
    />
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
  <Digitalizationhead/>
    <Digitalizationlist/>
   
    <Footer/>

        
    </div>
    </>
  )
}

export default Digitalization