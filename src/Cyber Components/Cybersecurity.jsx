import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import './Cybersecurity.css'
import Cybersecurityhead from './Cybersecurityhead'

import Footer from '../HomeComponents/Footer'
import Cybersecuritylist from './Cybersecuritylist'
import SEO from '../SEO'


const Cybersecurity = () => {
  return (
    
    <>
    <SEO
        title="QubiGen - Cybersecurity Solutions"
        description="Ensure your digital assets are protected with QubiGen's comprehensive cybersecurity solutions. Explore our services to safeguard your business from cyber threats."
        type="website"
        name="QubiGen Cybersecurity"
        image="https://example.com/cybersecurity-og-image.jpg"
        url="https://www.qubicgen.com/cybersecurity"
        keywords="QubiGen, Cybersecurity Solutions, digital assets, protection, services, cyber threats"
    />
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
    <Cybersecurityhead/>
    <Cybersecuritylist/>
    

    <Footer/>

        
    </div>
    </>
  )
}

export default Cybersecurity