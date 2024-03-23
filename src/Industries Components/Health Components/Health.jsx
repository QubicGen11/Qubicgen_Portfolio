import React, { useState } from 'react'
import './Health.css'

import Navbar from '../../HomeComponents/Navbar'
import Footer from '../../HomeComponents/Footer'
import Healthhead from './Healthhead'
import Healthlist from './Healthlist'
import SEO from '../../SEO'




const Health = () => {
 
    

  return (
    
    <>
    <SEO
     title="QubiGen - Health Solutions"
     description="Prioritize health and wellness with QubiGen's innovative health solutions. Discover how we are revolutionizing healthcare to improve outcomes and enhance well-being."
     type="website"
     name="QubiGen Health"
     image="https://example.com/health-solutions-og-image.jpg"
     url="https://www.qubicgen.com/health"
     keywords="QubiGen, Health Solutions, health and wellness, healthcare, outcomes, well-being, innovation"
 />
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Healthhead/>
 <Healthlist/>

    
        <Footer/>

        
    </div>
    </>
  )
}

export default Health