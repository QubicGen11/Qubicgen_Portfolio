import React, { useState } from 'react';
import axios from 'axios';
import Typewriter from 'typewriter-effect';

const Queries = () => {
  const [typewriterInitialized, setTypewriterInitialized] = useState(false);

  const handleTypewriterInit = () => {
    if (!typewriterInitialized) {
      setTypewriterInitialized(true);
    }
  };
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
      {typewriterInitialized ? (
        <span>Any <span className="text-[#ffd700]">Queries?</span></span>
      ) : (
        <Typewriter
          options={{
            autoStart: true,
            loop: false,
            delay: 10,
            strings: ['Any <span class="text-[#ffd700]">Queries?</span>'],
          }}
          onInit={handleTypewriterInit}
        />
      )}

</h1>

<form onSubmit={handleSubmit} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto flex flex-wrap  ">
    <div className="pb-2 pt-4 w-full md:w-1/2" >
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="block w-full p-4  rounded-sm bg-black text-base" required style={{ borderRadius: '20px', height: '50px' }} />
    </div>
    <div className="pb-2 pt-4 w-full md:w-1/2">
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="block w-full p-4 text-base rounded-sm bg-black" required style={{ borderRadius: '20px', height: '50px' }} />
    </div>
    <div className="pb-2 pt-4 w-full md:w-2/2">
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="block w-full p-4 text-base rounded-sm bg-black" required style={{ borderRadius: '20px', height: '50px' }} />
    </div>
    <div className="pb-2 pt-4 w-full md:w-1/2">
        <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Job Title" className="block w-full p-4 text-base rounded-sm bg-black" required style={{ borderRadius: '20px', height: '50px' }} />
    </div>
    <div className="pb-2 pt-4 w-full md:w-1/2">
        <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company / Organisation" className="block w-full p-4 text-base rounded-sm bg-black" required style={{ borderRadius: '20px', height: '50px' }} />
    </div>
    <div className="pb-2 pt-4 w-full md:w-2/2">
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="block w-full p-4 text-base rounded-sm bg-black" required style={{ borderRadius: '20px', height: '50px' }} />
    </div>
    <div className="pb-2 pt-4 w-full">
        <textarea
            className="block w-full p-4 text-lg rounded-md bg-black border border-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your Message..."
            style={{ borderRadius: '20px', height: '100px' }}
        ></textarea>
    </div>
    <div className="px-4 pb-2 pt-4 w-full">
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
</form>


              
            </div>
          </div>
   </section>
     



        
      </div>

  

      
    </>
   
   )
}

export default Queries