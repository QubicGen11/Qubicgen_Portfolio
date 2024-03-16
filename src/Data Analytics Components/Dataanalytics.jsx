import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import './Dataanalytics.css'
// 
import Footer from '../HomeComponents/Footer'
import Dataanalyticshead from './Dataanalyticshead'
import Dataanaliticslist from './Dataanaliticslist'
import SEO from '../SEO'
// 

const Dataanalytics = () => {
  return (
    
    <>
    <SEO
        title="QubiGen - Data Analytics Services"
        description="Leverage the power of data with QubiGen's Data Analytics services. Unlock insights, make informed decisions, and drive business growth with our analytics expertise."
        type="website"
        name="QubiGen Data Analytics"
        image="https://example.com/data-analytics-og-image.jpg"
        url="https://www.qubicgen.com/dataanalytics"
        keywords="QubiGen, Data Analytics Services, data insights, informed decisions, business growth, analytics expertise"
    />
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