import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import './Digitalmark.css'

import Footer from '../HomeComponents/Footer'
import Digitalmarkhead from './Digitalmarkhead'



const Digitalmark = () => {
  return (
    
    <>
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Digitalmarkhead/>


    <Footer/>

        
    </div>
    </>
  )
}

export default Digitalmark