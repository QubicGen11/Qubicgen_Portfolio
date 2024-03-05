import React from 'react'
import './Oil.css'

import Navbar from '../../HomeComponents/Navbar'
import Footer from '../../HomeComponents/Footer'
import Oilhead from './Oilhead'
import Oillist from './Oillist'




const Oil = () => { 
  return (
    
    <>
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Oilhead/>
    <Oillist/>


    
        <Footer/>

        
    </div>
    </>
  )
}

export default Oil