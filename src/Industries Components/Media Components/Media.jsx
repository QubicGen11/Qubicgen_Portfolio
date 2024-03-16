import React from 'react'
import './Media.css'

import Navbar from '../../HomeComponents/Navbar'
import Footer from '../../HomeComponents/Footer'
import Mediahead from './Mediahead'
import Medialist from './Medialist'
import SEO from '../../SEO'




const Media = () => {
  return (
    
    <>
    <SEO
     title="QubiGen - Media Services"
     description="Elevate your media presence with QubiGen's media services. Explore how we can help you reach your audience effectively through creative and strategic media solutions."
     type="website"
     name="QubiGen Media"
     image="https://example.com/media-services-og-image.jpg"
     url="https://www.qubicgen.com/media"
     keywords="QubiGen, Media Services, media presence, audience reach, creative solutions, strategic media"
 />
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Mediahead/>
    <Medialist/>
    
   

    
        <Footer/>

        
    </div>
    </>
  )
}

export default Media