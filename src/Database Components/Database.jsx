import React from 'react'
import Navbar from '../HomeComponents/Navbar'
import './Database.css'
// 
import Footer from '../HomeComponents/Footer'
import Databasehead from './Databasehead'
import Databaselist from './Databaselist'
import SEO from '../SEO'

// 

const Database = () => {
  return (
    
    <>
    <SEO
      title="QubiGen - Database Solutions"
      description="Explore QubiGen's Database solutions designed to optimize your data management and empower your business. Discover how our expertise in databases can drive efficiency and performance."
      type="website"
      name="QubiGen Database"
      image="https://example.com/database-og-image.jpg"
      url="https://www.qubicgen.com/database"
      keywords="QubiGen, Database Solutions, data management, efficiency, performance, expertise"
  />
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