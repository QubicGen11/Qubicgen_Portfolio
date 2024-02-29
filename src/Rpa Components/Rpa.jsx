import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import Rpahead from './Rpahead'
import './Rpa.css'
import Rpalist from './Rpalist'
import Footer from '../HomeComponents/Footer'
import Queries from './Queries'


const Rpa = () => {
  return (
    
    <>
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Rpahead/>
    <Rpalist/>
    <Queries/>
    <Footer/>

        
    </div>
    </>
  )
}

export default Rpa