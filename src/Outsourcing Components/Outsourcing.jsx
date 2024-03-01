import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import './Outsourcing.css'
import Footer from '../HomeComponents/Footer'
import Outsourcinghead from './Outsourcinghead'
import Outsourcinglist from './Outsourcinglist'


const Outsourcing = () => {
  return (
    
    <>
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Outsourcinghead/>
    <Outsourcinglist/>
    <Footer/>

        
    </div>
    </>
  )
}

export default Outsourcing