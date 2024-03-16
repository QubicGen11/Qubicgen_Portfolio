import React from 'react'
import './Banking.css'

import Navbar from '../../HomeComponents/Navbar'
import Footer from '../../HomeComponents/Footer'
import Bankinghead from './Bankinghead'
import Bankinglist from './Bankinglist'
import SEO from '../../SEO'


const Banking = () => {
  return (
    
    <>
    <SEO
        title="QubiGen Banking - Empowering Financial Success"
        description="QubiGen Banking, located in Anantapur, Andhra Pradesh, India, is committed to empowering financial success through innovative banking solutions. Join us to experience excellence in banking services where your financial goals become a reality."
        type="website"
        name="QubiGen Banking"
        image="https://example.com/new-og-image.jpg"
        url="https://www.qubicgen.com/banking"
        keywords="QubiGen Banking, Anantapur, Andhra Pradesh, India, finance, banking solutions, financial success, excellence in banking, innovative banking"
    />
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