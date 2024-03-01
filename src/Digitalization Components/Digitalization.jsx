import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import Footer from '../HomeComponents/Footer'
import Queries from './Queries'
import Digitalizationlist from './Digitalizationlist'
import "./Digitalization.css"
import Digitalizationhead from './Digitalizationhead'


const Digitalization = () => {
  return (
    
    <>
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
  <Digitalizationhead/>
    <Digitalizationlist/>
   
    <Queries/>
    <Footer/>

        
    </div>
    </>
  )
}

export default Digitalization