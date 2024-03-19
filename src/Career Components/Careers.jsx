import React, { useEffect } from 'react'
import Navbar from '../HomeComponents/Navbar'
import './Careers.css'
import Footer from '../HomeComponents/Footer'
import 'aos/dist/aos.css';
import AOS from 'aos'
import Carrernext from './Carrernext'




const Careers = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])


  return (
    <>

    
    <Navbar/>

    <div className="careeesfull bg-black" data-aos="fade-right">

    <div className="Careersmain flex bg-center justify-center items-center sm:h-10 " style={{background:"url('https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",backgroundPosition:'center center'}}>
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