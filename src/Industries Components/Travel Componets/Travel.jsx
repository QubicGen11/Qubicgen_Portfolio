import React from 'react'
import './Travel.css'

import Navbar from '../../HomeComponents/Navbar'
import Footer from '../../HomeComponents/Footer'
import Travelhead from './Travelhead'
import Travellist from './Travellist'
import SEO from '../../SEO'




const Travel = () => {
  return (
    
    <>
    <SEO
     title="QubiGen - Travel Services"
     description="Embark on memorable journeys with QubiGen's travel services. Explore how we can enhance your travel experiences, provide personalized services, and ensure seamless travel arrangements."
     type="website"
     name="QubiGen Travel"
     image="https://example.com/travel-services-og-image.jpg"
     url="https://www.qubicgen.com/travel"
     keywords="QubiGen, Travel Services, memorable journeys, travel experiences, personalized services, seamless arrangements"
 />
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Travelhead/>
    <Travellist/>


    
        <Footer/>

        
    </div>
    </>
  )
}

export default Travel