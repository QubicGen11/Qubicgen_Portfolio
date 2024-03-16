import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import Footer from '../HomeComponents/Footer'
import Webhead from './Webhead'
import Weblist from './Weblist'
import SEO from '../SEO'

const Web = () => {
  return (
    
    <>
    <SEO
     title="QubiGen - Web Development Services"
     description="Elevate your online presence with QubiGen's web development services. Discover how our expertise can help you create stunning, high-performance websites and web applications."
     type="website"
     name="QubiGen Web Development"
     image="https://example.com/web-development-og-image.jpg"
     url="https://www.qubicgen.com/webdevelopment"
     keywords="QubiGen, Web Development Services, online presence, expertise, high-performance websites, web applications"
 />
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Webhead/>
    <Weblist/>


    <Footer/>


        
    </div>
    </>
  )
}

export default Web