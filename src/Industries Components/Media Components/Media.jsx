import React from 'react'
import './Media.css'

import Navbar from '../../HomeComponents/Navbar'
import Footer from '../../HomeComponents/Footer'
import Mediahead from './Mediahead'
import Medialist from './Medialist'




const Media = () => {
  return (
    
    <>
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