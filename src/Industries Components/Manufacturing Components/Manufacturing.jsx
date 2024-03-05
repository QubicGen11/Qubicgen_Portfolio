import React from 'react'
import './Manufacturing.css'

import Navbar from '../../HomeComponents/Navbar'
import Footer from '../../HomeComponents/Footer'
import Manufacturinghead from './Manufacturinghead'
import Manufacturinglist from './Manufacturinglist'




const Manufacturing = () => {
  return (
    
    <>
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