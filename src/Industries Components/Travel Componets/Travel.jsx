import React from 'react'
import './Travel.css'

import Navbar from '../../HomeComponents/Navbar'
import Footer from '../../HomeComponents/Footer'
import Travelhead from './Travelhead'
import Travellist from './Travellist'




const Travel = () => {
  return (
    
    <>
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Travelhead/>
    <Travellist/>


    
        <Footer/>

        
    </div>
    </>
  )
}

export default Travel