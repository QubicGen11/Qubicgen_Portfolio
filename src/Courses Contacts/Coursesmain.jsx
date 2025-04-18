import React, { useRef } from 'react'
import CoursesHero from './Courses Hero Components/CoursesHero'
import Secureplacements from './Secure Placement Componnets/Secureplacements'
import Ratingmain from './Rating Components/Ratingmain'
import Exploremain from './Explore Courses Componnets/Exploremain'
import Testimonials from './Courses Testimonoals Componnets/Testimonals'
import Footer from '../HomeComponents/Footer'
import TestimonialsForm from './TestimonialsForm.jsx/Testimonialsform'

const Coursesmain = () => {
  const exploreRef = useRef(null);

  const scrollToExplore = () => {
    if (exploreRef.current) {
      exploreRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
        <CoursesHero onApplyNow={scrollToExplore}/>
        <Secureplacements/>
        <Ratingmain/>
        <div ref={exploreRef}>
          <Exploremain/>
        </div>  
        <Testimonials/>
        <TestimonialsForm/>
        <Footer/>
    </div>
  )
}

export default Coursesmain
