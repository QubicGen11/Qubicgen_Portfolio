import React from 'react'


import Navbar from '../../HomeComponents/Navbar'
import Footer from '../../HomeComponents/Footer'
import Technologyhead from './Technologyhead'
// import Technologylist from './Technologylist'
import SEO from '../../SEO'



const TechnologyOverview = () => {
  return (
    
    <>
    <SEO
     title="QubiGen - Energy Solutions"
     description="Discover sustainable energy solutions with QubiGen. Learn how we are driving innovation in the energy sector to create a more sustainable future for businesses and communities."
     type="website"
     name="QubiGen Energy"
     image="https://example.com/energy-og-image.jpg"
     url="https://www.qubicgen.com/energy"
     keywords="QubiGen, Energy Solutions, sustainable energy, innovation, sustainable future, businesses, communities"
 />
    <Navbar/>
  <div className="bg" style={{backgroundColor:'black'}}>
   <Technologyhead/>
   

    
        {/* <Footer/> */}

        
    </div>
    </>
  )
}

export default TechnologyOverview