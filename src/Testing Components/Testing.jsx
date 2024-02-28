import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import './Testing.css'

import Footer from '../HomeComponents/Footer'
import Testinghead from './Testinghead'
import Testinglist from './Testinglist'
// import Weblist from './Weblist'


const Testing = () => {
  return (
    
    <>
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Testinghead/>
    <Testinglist/>

    <Footer/>

        
    </div>
    </>
  )
}

export default Testing