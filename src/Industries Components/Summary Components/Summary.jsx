import React from 'react'
import './Summary.css'

import Navbar from '../../HomeComponents/Navbar'
import Footer from '../../HomeComponents/Footer'
import Summaryhead from './Summaryhead'
import Summarylist from './Summarylist'
import SEO from '../../SEO'




const Summary = () => {
  return (
    
    <>
    <SEO
    title="QubiGen - Summary Page"
    description="Get a comprehensive summary of QubiGen's services and solutions. Explore how we can help transform your business, drive innovation, and achieve success across various industries."
    type="website"
    name="QubiGen Summary"
    image="https://example.com/summary-og-image.jpg"
    url="https://www.qubicgen.com/summary"
    keywords="QubiGen, Summary Page, services, solutions, transformation, innovation, success"
/>
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Summaryhead/>
    <Summarylist/>

    
        <Footer/>

        
    </div>
    </>
  )
}

export default Summary