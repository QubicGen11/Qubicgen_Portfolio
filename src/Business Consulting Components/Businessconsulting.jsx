import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import './Businessconsulting.css'
import Footer from '../HomeComponents/Footer'
import Businessconsultinghead from './Businessconsultinghead'
import Businessconsultinglist from './Businessconsultinglist'
import SEO from '../SEO'


const Businessconsulting = () => {
  return (
    
    <>
    <SEO
     title="QubiGen - Business Consulting"
     description="Unlock the potential of your business with QubiGen's expert consulting services. Explore how our consultants can guide you towards growth, innovation, and sustainable success."
     type="website"
     name="QubiGen Business Consulting"
     image="https://example.com/business-consulting-og-image.jpg"
     url="https://www.qubicgen.com/businessconsulting"
     keywords="QubiGen, Business Consulting, business potential, consulting services, growth, innovation, sustainable success"
 />
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Businessconsultinghead/>
    <Businessconsultinglist/>

    <Footer/>

        
    </div>
    </>
  )
}

export default Businessconsulting