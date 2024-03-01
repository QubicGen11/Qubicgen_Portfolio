import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import './Training.css'
import Footer from '../HomeComponents/Footer'
import Traininghead from './Traininghead'
import Traininglist from './Traininglist'


const Training = () => {
  return (
    
    <>
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
  <Traininghead/>
  <Traininglist/>
    <Footer/>

        
    </div>
    </>
  )
}

export default Training