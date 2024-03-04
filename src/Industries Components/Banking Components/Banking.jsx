import React from 'react'
import './Banking.css'

import Navbar from '../../HomeComponents/Navbar'
import Footer from '../../HomeComponents/Footer'
import Bankinghead from './Bankinghead'
import Bankinglist from './Bankinglist'


const Banking = () => {
  return (
    
    <>
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Bankinghead/>
    <Bankinglist/>
    
        <Footer/>

        
    </div>
    </>
  )
}

export default Banking