import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import './Cybersecurity.css'
import Cybersecurityhead from './Cybersecurityhead'

import Footer from '../HomeComponents/Footer'
import Cybersecuritylist from './Cybersecuritylist'


const Cybersecurity = () => {
  return (
    
    <>
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Cybersecurityhead/>
    <Cybersecuritylist/>
    

    <Footer/>

        
    </div>
    </>
  )
}

export default Cybersecurity