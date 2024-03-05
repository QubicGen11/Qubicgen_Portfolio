import React from 'react'
import './Summary.css'

import Navbar from '../../HomeComponents/Navbar'
import Footer from '../../HomeComponents/Footer'
import Summaryhead from './Summaryhead'
import Summarylist from './Summarylist'




const Summary = () => {
  return (
    
    <>
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Summaryhead/>
    <Summarylist/>

    
        <Footer/>

        
    </div>
    </>
  )
}

export default Summary