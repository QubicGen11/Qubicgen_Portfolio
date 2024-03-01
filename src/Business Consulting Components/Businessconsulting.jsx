import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import './Businessconsulting.css'
import Footer from '../HomeComponents/Footer'
import Businessconsultinghead from './Businessconsultinghead'
import Businessconsultinglist from './Businessconsultinglist'


const Businessconsulting = () => {
  return (
    
    <>
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Businessconsultinghead/>
    <Businessconsultinglist/>

    <Footer/>

        
    </div>
    </>
  )
}

export default Businessconsulting