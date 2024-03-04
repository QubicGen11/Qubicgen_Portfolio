import React from 'react'
import './Energy.css'

import Navbar from '../../HomeComponents/Navbar'
import Footer from '../../HomeComponents/Footer'
import Energyhead from './Energyhead'
import Energylist from './Energylist'



const Energy = () => {
  return (
    
    <>
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Energyhead/>
    <Energylist/>

    
        <Footer/>

        
    </div>
    </>
  )
}

export default Energy