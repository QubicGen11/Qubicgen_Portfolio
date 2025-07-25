import React, { useEffect } from 'react'
import Navbar from '../HomeComponents/Navbar'
import './Careers.css'
import Footer from '../HomeComponents/Footer'
import 'aos/dist/aos.css';
import AOS from 'aos'
import Carrernext from './Carrernext'
import SEO from '../SEO';




const Careers = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])


  return (
    <>
      <SEO
        title="QubiGen - Careers"
        description="Connect with QubiGen and get in touch with our team. Learn how you can reach out to us for inquiries, collaborations, and partnerships. We are here to support your business needs."
        type="website"
        name="QubiGen Careers"
        image="https://res.cloudinary.com/defsu5bfc/image/upload/v1714398176/og_idmawk.png"
        url="https://www.qubicgen.com/careers"
        keywords="QubiGen, Contact Us, inquiries, collaborations, partnerships, support"
      />
    
    <Navbar/>

    <div className="careeesfull bg-black" data-aos="fade-right">

    <div className="Careersmain flex bg-center justify-center items-center sm:h-10 " style={{background:"url('https://qubicgen-prod.s3.us-east-1.amazonaws.com/Careers/career.jpg')",backgroundPosition:'center center', backgroundSize:'cover'}}>
        <div className="z-50 text-2xl ml-3 text-white sm:mx-6 md:text-4xl md:mr-80 lg:text-5xl lg:mb-10 ">
           <span style={{color:'gold'}}>QubicGen :</span>  Where Curiosity Meets Innovation
        </div>

    </div>

    </div>

  <Carrernext/>




    

    <Footer/>
    </>
  )
}

export default Careers