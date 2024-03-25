import React, { useState } from 'react';
import axios from 'axios';
import Typewriter from 'typewriter-effect';

const Queries = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    company: '',
    phone: '',
    address: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await axios.post('https://qubic-gen-portfolio.onrender.com/api/queries', formData);
      console.log('Form data submitted:', response.data);
      // Reset form after successful submission if needed
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        company: '',
        phone: '',
        address: ''
      });
      setLoading(false)
    } catch (error) {
      setLoading(false)
      alert('Please try again')
      console.error('Error submitting form:', error);
    }
  };
  return (

    <>
 <div>
  <section className="min-h-screen flex items-stretch text-white" data-aos="fade-up">



    
    <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style={{backgroundImage: 'url(https://res.cloudinary.com/defsu5bfc/image/upload/v1709795358/QubicGen/question-mark-icon-solving-problem-solution-concept_53876-13887_jqtc9c.jpg)' ,backgroundPosition:'center'}}>
      <div className="absolute bg-black opacity-60 inset-0 z-0" />
      <div className="w-full px-24 z-10">
        <h1 className="text-5xl font-bold text-left tracking-wide">Got Any Queries for us?</h1>
        <p className="text-3xl my-4">Curious minds, welcome! Ask away.</p>
      </div>
      
    </div>
    <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0" style={{backgroundColor: '#161616'}}>
      <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" style={{backgroundImage: 'url(https://res.cloudinary.com/defsu5bfc/image/upload/v1709795358/QubicGen/question-mark-icon-solving-problem-solution-concept_53876-13887_jqtc9c.jpg)',backgroundPosition:'center'}}>
        <div className="absolute bg-black opacity-60 inset-0 z-0" />
      </div>
      <div className="w-full py-6 z-20">
        <h1 className="my-6" style={{fontSize:'50px',fontWeight:'bolder',fontFamily:"'Montserrat', 'sans-serif'"}}>
        <Typewriter
    options={{
      autoStart: true,
      loop:true,
      
      delay: 10,
      strings: ['Any <span class="text-[#ffd700]">Queries?</span>'],
      
    
    }}
  />        </h1>

                <form onSubmit={handleSubmit} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                  <div className="pb-2 pt-4">
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="block w-full p-4 text-lg rounded-sm bg-black" required style={{ borderRadius:'40px', height:'70px' }} />
                  </div>
                  <div className="pb-2 pt-4">
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="block w-full p-4 text-lg rounded-sm bg-black"required  style={{ borderRadius:'40px', height:'70px' }} />
                  </div>
                  <div className="pb-2 pt-4">
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="block w-full p-4 text-lg rounded-sm bg-black" required style={{ borderRadius:'40px', height:'70px' }} />
                  </div>
                  <div className="pb-2 pt-4">
                    <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Job Title" className="block w-full p-4 text-lg rounded-sm bg-black" required style={{ borderRadius:'40px', height:'70px' }} />
                  </div>
                  <div className="pb-2 pt-4">
                    <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company / Organisation" className="block w-full p-4 text-lg rounded-sm bg-black"required  style={{ borderRadius:'40px', height:'70px' }} />
                  </div>
                  <div className="pb-2 pt-4">
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="block w-full p-4 text-lg rounded-sm bg-black" required style={{ borderRadius:'40px', height:'70px' }} />
                  </div>
                  <div className="pb-2 pt-4">
                    <textarea
                      className="block w-full p-4 text-lg rounded-md bg-black border border-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your Message..."
                      style={{ borderRadius: '40px', height: '200px' }}
                    ></textarea>
                  </div>
                  <div className="px-4 pb-2 pt-4">
                    <button type="submit" className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none relative">
                      {loading ? (
                        <span className="animate-spin absolute inset-0 flex justify-center items-center">
                          <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V2.83a1 1 0 00-1.7-.7l-4.58 4.59a1 1 0 00-.29.7V12H4zm2 7.17a1 1 0 001.7.7l4.59-4.59a1 1 0 00.29-.7V12h2a8 8 0 01-8 8v-2.17z"></path>
                          </svg>
                        </span>
                      ) : (
                        'Submit'
                      )}
                    </button>
                  </div>

                <div className="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden ">
                  <a href="#">
                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                  </a>
                  <a href="#">
                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                  </a>
                  <a href="#">
                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                  </a>
                </div>
              </form>
            </div>
          </div>
   </section>
     
      </div>
    </>
   
   )
}

export default Queries