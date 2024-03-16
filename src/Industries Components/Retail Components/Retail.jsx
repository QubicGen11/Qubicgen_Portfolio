import React from 'react'
import './Retail.css'

import Navbar from '../../HomeComponents/Navbar'
import Footer from '../../HomeComponents/Footer'
import Retailhead from './Retailhead'
import Retaillist from './Retaillist'
import SEO from '../../SEO'




const Retail = () => {
  return (
    
    <>
    <SEO
     title="QubiGen - Retail Solutions"
     description="Revolutionize your retail business with QubiGen's retail solutions. Discover how we can help you improve customer experiences, optimize operations, and drive growth in the retail industry."
     type="website"
     name="QubiGen Retail"
     image="https://example.com/retail-solutions-og-image.jpg"
     url="https://www.qubicgen.com/retail"
     keywords="QubiGen, Retail Solutions, retail business, customer experiences, operations optimization, growth, retail industry"
 />
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Retailhead/>
    <Retaillist/>
  

    
        <Footer/>

        
    </div>
    </>
  )
}

export default Retail