import React from 'react'
import './Manufacturing.css'

import Navbar from '../../HomeComponents/Navbar'
import Footer from '../../HomeComponents/Footer'
import Manufacturinghead from './Manufacturinghead'
import Manufacturinglist from './Manufacturinglist'
import SEO from '../../SEO'




const Manufacturing = () => {
  return (
    
    <>
    <SEO
     title="QubiGen - Manufacturing Solutions"
     description="Transform your manufacturing processes with QubiGen's innovative solutions. Discover how we can optimize your operations, increase efficiency, and drive productivity in the manufacturing sector."
     type="website"
     name="QubiGen Manufacturing"
     image="https://example.com/manufacturing-og-image.jpg"
     url="https://www.qubicgen.com/manufacturing"
     keywords="QubiGen, Manufacturing Solutions, manufacturing processes, operations optimization, efficiency, productivity, innovation"
 />
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Manufacturinghead/>
    <Manufacturinglist/>


    
        <Footer/>

        
    </div>
    </>
  )
}

export default Manufacturing