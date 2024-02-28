import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import './Web.css'
import Webhead from "./Webhead"

import Footer from '../HomeComponents/Footer'
import Weblist from './Weblist'


const Web = () => {
  return (
    
    <>
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