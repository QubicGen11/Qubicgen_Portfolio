import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import './Training.css'
import Footer from '../HomeComponents/Footer'
import Traininghead from './Traininghead'
import Traininglist from './Traininglist'
import SEO from '../SEO'


const Training = () => {
  return (
    
    <>
    <SEO
    title="QubiGen - Training Services"
    description="Invest in your team's success with QubiGen's comprehensive training services. Explore how our training programs can empower your workforce and drive professional growth."
    type="website"
    name="QubiGen Training"
    image="https://example.com/training-og-image.jpg"
    url="https://www.qubicgen.com/training"
    keywords="QubiGen, Training Services, team success, training programs, workforce empowerment, professional growth"
/>
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