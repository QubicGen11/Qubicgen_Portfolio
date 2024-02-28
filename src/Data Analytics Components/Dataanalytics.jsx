import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import './Dataanalytics.css'
// 
import Footer from '../HomeComponents/Footer'
import Dataanalyticshead from './Dataanalyticshead'
import Dataanaliticslist from './Dataanaliticslist'
// 

const Dataanalytics = () => {
  return (
    
    <>
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Dataanalyticshead/>
    <Dataanaliticslist/>

    <Footer/>

        
    </div>
    </>
  )
}

export default Dataanalytics