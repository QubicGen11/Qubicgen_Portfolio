import React from 'react'
import './Retail.css'

import Navbar from '../../HomeComponents/Navbar'
import Footer from '../../HomeComponents/Footer'
import Retailhead from './Retailhead'
import Retaillist from './Retaillist'




const Retail = () => {
  return (
    
    <>
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Retailhead/>
    <Retaillist/>
  

    
        <Footer/>

        
    </div>
    </>
  )
}

export default Retail