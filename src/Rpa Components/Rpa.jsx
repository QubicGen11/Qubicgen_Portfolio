import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import Rpahead from './Rpahead'
import './Rpa.css'
import Rpalist from './Rpalist'
import Footer from '../HomeComponents/Footer'
import SEO from '../SEO'


const Rpa = () => {
  return (
    
    <>
    <SEO
        title="QubiGen - RPA Solutions"
        description="Explore QubiGen's Robotic Process Automation (RPA) solutions designed to streamline business processes and increase efficiency. Discover how automation can transform your operations."
        type="website"
        name="QubiGen RPA"
        image="https://example.com/rpa-og-image.jpg"
        url="https://www.qubicgen.com/rpa"
        keywords="QubiGen, RPA Solutions, automation, business processes, efficiency, transformation, operations"
    />
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Rpahead/>
    <Rpalist/>
    <Footer/>

        
    </div>
    </>
  )
}

export default Rpa