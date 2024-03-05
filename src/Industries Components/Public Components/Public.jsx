import React from 'react'
import './Public.css'

import Navbar from '../../HomeComponents/Navbar'
import Footer from '../../HomeComponents/Footer'
import Publichead from './Publichead'
import Publiclist from './Publiclist'




const Public = () => {
  return (
    
    <>
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Publichead/>
    <Publiclist/>

    
        <Footer/>

        
    </div>
    </>
  )
}

export default Public