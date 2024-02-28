import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import './Database.css'
// 
import Footer from '../HomeComponents/Footer'
import Databasehead from './Databasehead'
import Databaselist from './Databaselist'

// 

const Database = () => {
  return (
    
    <>
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
   <Databasehead/>
   <Databaselist/>

    <Footer/>

        
    </div>
    </>
  )
}

export default Database