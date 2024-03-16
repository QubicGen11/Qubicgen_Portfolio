import React from 'react'
import './Oil.css'

import Navbar from '../../HomeComponents/Navbar'
import Footer from '../../HomeComponents/Footer'
import Oilhead from './Oilhead'
import Oillist from './Oillist'
import SEO from '../../SEO'




const Oil = () => { 
  return (
    
    <>
    <SEO
    title="QubiGen - Oil & Gas Services"
    description="Navigate the complexities of the oil and gas industry with QubiGen's specialized services. Learn how we can support your operations, enhance safety measures, and drive efficiency in the oil sector."
    type="website"
    name="QubiGen Oil & Gas"
    image="https://example.com/oil-gas-services-og-image.jpg"
    url="https://www.qubicgen.com/oil"
    keywords="QubiGen, Oil & Gas Services, oil and gas industry, operations support, safety measures, efficiency, specialized services"
/>
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Oilhead/>
    <Oillist/>


    
        <Footer/>

        
    </div>
    </>
  )
}

export default Oil