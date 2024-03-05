import React from 'react'
import './Health.css'

import Navbar from '../../HomeComponents/Navbar'
import Footer from '../../HomeComponents/Footer'
import Healthhead from './Healthhead'
import Healthlist from './Healthlist'




const Health = () => {
  return (
    
    <>
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Healthhead/>
 <Healthlist/>

    
        <Footer/>

        
    </div>
    </>
  )
}

export default Health