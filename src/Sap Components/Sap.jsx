import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import './Sap.css'
import Saphead from "./Saphead"

import Footer from '../HomeComponents/Footer'
import Saplist from './Saplist'
import SEO from '../SEO'


const Rpa = () => {
  return (
    
    <>
    <SEO
        title="QubiGen - SAP Services"
        description="Discover QubiGen's SAP services tailored to optimize your business operations and drive growth. Learn how our expertise in SAP can elevate your enterprise."
        type="website"
        name="QubiGen SAP"
        image="https://example.com/sap-og-image.jpg"
        url="https://www.qubicgen.com/sap"
        keywords="QubiGen, SAP Services, business operations, growth, expertise, enterprise"
    />
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Saphead/>
    <Saplist/>
    

    <Footer/>

        
    </div>
    </>
  )
}

export default Rpa