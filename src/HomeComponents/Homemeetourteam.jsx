import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';
import "./Meetourteam.css"


const Homemeetourteam = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <div id='meetoutteam'>
 
    <section className="bg-[#26282b] w-11/12 mx-auto rounded-md m-4 p-4" style={{width:'82vw'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">Meet Our  <span className="text-[#ffd700]">Team</span></h2>
          <p className="mt-4 text-white">Our team of experts will help you achieve your goals. </p>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="bg-white p-6 rounded-lg shadow-lg h-96">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
              alt="Jane Cooper"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Cooper</h3>
            <p className="text-gray-600">Software Engineer</p>
            <p className="text-gray-600">Description: Your description here</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg h-96">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
              alt="Jane Cooper"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Cooper</h3>
            <p className="text-gray-600">Software Engineer</p>
            <p className="text-gray-600">Description: Your description here</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg h-96">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
              alt="Jane Cooper"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Cooper</h3>
            <p className="text-gray-600">Software Engineer</p>
            <p className="text-gray-600">Description: Your description here</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg h-96">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
              alt="Jane Cooper"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Cooper</h3>
            <p className="text-gray-600">Software Engineer</p>
            <p className="text-gray-600">Description: Your description here</p>
          </div>
          
          
        </div>
      </div>
    </section>

    </div>
  )
}

export default Homemeetourteam
