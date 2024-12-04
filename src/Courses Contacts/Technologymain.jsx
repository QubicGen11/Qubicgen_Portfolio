import React from 'react'
import TechnologyOverview from './Technology Overview Componnets/TechnologyOverview'
import OverviewSection from './Technology Overview Componnets/OverviewSection'
import Secureplacements from './Secure Placement Componnets/Secureplacements'
import SyllabusSection from './Technology Overview Componnets/Syllabus'
import CertificateSection from './Technology Overview Componnets/CertificateSection'
import Testimonials from './Courses Testimonoals Componnets/Testimonals'
import Footer from '../HomeComponents/Footer'
import FaqSection from './Technology Overview Componnets/Faq'

const Technologymain = () => {
  return (
    <div>
        <TechnologyOverview/>
        
        <OverviewSection/>
        <Secureplacements/>
        <SyllabusSection/>
        <CertificateSection/>
        <Testimonials/>
        <FaqSection/>

        <Footer/>

      
    </div>
  )
}

export default Technologymain
