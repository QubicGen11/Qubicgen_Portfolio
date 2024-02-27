import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import Rpahead from './Rpahead'
import './Rpa.css'
import Rpalist from './Rpalist'
import Footer from '../HomeComponents/Footer'


const Rpa = () => {
  return (
    
    <>
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Rpahead/>
    <Rpalist/>

    <Footer/>

        
    </div>
    </>
  )
}

export default Rpa