import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import './Testing.css'

import Footer from '../HomeComponents/Footer'
import Testinghead from './Testinghead'
import Testinglist from './Testinglist'
import SEO from '../SEO'
// import Weblist from './Weblist'


const Testing = () => {
  return (
    
    <>
    <SEO
        title="QubiGen - Testing Services"
        description="Unleash the power of testing with QubiGen's comprehensive testing services. Discover how we ensure the quality and reliability of your software and processes."
        type="website"
        name="QubiGen Testing"
        image="https://example.com/testing-og-image.jpg"
        url="https://www.qubicgen.com/testing"
        keywords="QubiGen, Testing Services, quality, reliability, software, processes"
    />
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Testinghead/>
    <Testinglist/>

    <Footer/>

        
    </div>
    </>
  )
}

export default Testing