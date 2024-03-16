import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import './Outsourcing.css'
import Footer from '../HomeComponents/Footer'
import Outsourcinghead from './Outsourcinghead'
import Outsourcinglist from './Outsourcinglist'
import SEO from '../SEO'


const Outsourcing = () => {
  return (
    
    <>
    <SEO
      title="QubiGen - Outsourcing Services"
      description="Optimize your operations with QubiGen's outsourcing services. Discover how we can help you streamline your business processes and drive efficiency through strategic outsourcing."
      type="website"
      name="QubiGen Outsourcing"
      image="https://example.com/outsourcing-og-image.jpg"
      url="https://www.qubicgen.com/outsourcing"
      keywords="QubiGen, Outsourcing Services, operations optimization, business processes, efficiency, strategic outsourcing"
  />
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Outsourcinghead/>
    <Outsourcinglist/>
    <Footer/>

        
    </div>
    </>
  )
}

export default Outsourcing