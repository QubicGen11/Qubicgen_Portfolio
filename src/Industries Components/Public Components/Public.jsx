import React from 'react'
import './Public.css'

import Navbar from '../../HomeComponents/Navbar'
import Footer from '../../HomeComponents/Footer'
import Publichead from './Publichead'
import Publiclist from './Publiclist'
import SEO from '../../SEO'




const Public = () => {
  return (
    
    <>
    <SEO
    title="QubiGen - Public Services"
    description="Explore QubiGen's public services aimed at enhancing public infrastructure and services. Learn how we are contributing to the betterment of public facilities and citizen services."
    type="website"
    name="QubiGen Public"
    image="https://example.com/public-services-og-image.jpg"
    url="https://www.qubicgen.com/public"
    keywords="QubiGen, Public Services, public infrastructure, citizen services, public facilities, betterment"
/>
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Publichead/>
    <Publiclist/>

    
        <Footer/>

        
    </div>
    </>
  )
}

export default Public