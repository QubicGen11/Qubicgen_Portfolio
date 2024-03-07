import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import Footer from '../HomeComponents/Footer'
import "./Digitals.css"
import Digitalshead from './Digitalshead'
import Digitalslist from './Digitalslist'


const Digitals = () => {
  return (
    
    <>
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Digitalshead/>
    <Digitalslist/>
    <Footer/>

        
    </div>
    </>
  )
}

export default Digitals