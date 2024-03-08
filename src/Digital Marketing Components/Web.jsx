import React from 'react'
import Navbar from '../Services/HomeComponents/Navbar'
import './Web.css'
import Webhead from "./Webhead"

import Footer from '../Services/HomeComponents/Footer'
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