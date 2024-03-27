import React from "react";
import { useState } from "react";
import Navbar from "../HomeComponents/Navbar";
import Footer from "../HomeComponents/Footer";
import axios from 'axios';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('student');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    details: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      formData.type = activeTab;
      setIsLoading(true);
      const response = await axios.post('http://77.37.45.21:3000/api/contact', formData);
      console.log('Form data submitted:', response.data);
      alert('Your message has been sent successfully');
      // Clear form after successful submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        details: '',
        company: '',
      });
      setIsLoading(false);
      window.location.reload();
    } catch (error) {
      setIsLoading(false);
      console.error('Error submitting form:', error);
      alert('Something went wrong');
    }
  };
  return (
    <>
    <Navbar/>
      <section className="relative bg-[#0a0a0a] overflow-hidden lg:p-8">
        <div className="container">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <span className="mb-4 font-bold block text-2xl text-primary">
                  Contact Us
                </span>
                <h2 className="mb-6 font-semibold text-xl uppercase text-white">
                  GET IN TOUCH WITH US
                </h2>
                <p className="mb-9 text-base leading-relaxed text-white">
                 Either you are an organization or a student, we are here to help.
                </p>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-white ">
                      Our Location
                    </h4>
                    <p className="text-base text-white">
                      Anantapur, Andhra Pradesh
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-white">
                      Phone Number
                    </h4>
                    <p className="text-base text-white">
                      (+62)81 414 257 9980
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-white ">
                      Email Address
                    </h4>
                    <p className="text-base text-white">
                      info@yourdomain.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mb-4 flex border-b">
              <button
                className={`mr-4 pb-2 text-lg font-semibold ${activeTab === 'student' ? 'border-b-2 border-primary text-primary' : 'text-white'}`}
                onClick={() => setActiveTab('student')}
              >
                Student
              </button>
              <button
                className={`pb-2 text-lg font-semibold ${activeTab === 'company' ? 'border-b-2 border-primary text-primary' : 'text-white'}`}
                onClick={() => setActiveTab('company')}
              >
                Company
              </button>
            </div>
              <div className="relative rounded-lg p-8 shadow-lg sm:p-12">
              <form onSubmit={handleSubmit}>
      {activeTab === 'student' ? (
        <>
          <input
           className="w-full resize-none rounded  mt-8 border border-stroke px-[14px] py-3 text-base text-black outline-none focus:border-primary"
            type="text"
            name="fullName"
            placeholder="Your Name"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
           className="w-full resize-none rounded  mt-8 border border-stroke px-[14px] py-3 text-base text-black outline-none focus:border-primary"
            type="text"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
          className="w-full resize-none rounded  mt-8 border border-stroke px-[14px] py-3 text-base text-black outline-none focus:border-primary"
            type="text"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
          className="w-full rounded border mt-8 border-stroke px-[14px] py-3 text-base text-black outline-none focus:border-primary"
            placeholder="Your Request"
            name="details"
            value={formData.details}
            onChange={handleChange}
          />
        </>
      ) : (
        <>
          <input
           className="w-full resize-none rounded  mt-8 border border-stroke px-[14px] py-3 text-base text-black outline-none focus:border-primary"
            type="text"
            name="fullName"
            placeholder="Your Company's Name"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
           className="w-full resize-none rounded  mt-8 border border-stroke px-[14px] py-3 text-base text-black outline-none focus:border-primary"
            type="text"
            name="email"
            placeholder="Your Company's Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
          className="w-full resize-none rounded  mt-8 border border-stroke px-[14px] py-3 text-base text-black outline-none focus:border-primary"
            type="text"
            name="phone"
            placeholder="Your Company's Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
          className="w-full rounded border mt-8 border-stroke px-[14px] py-3 text-base text-black outline-none focus:border-primary"
            placeholder="Your Request"
            name="details"
            value={formData.details}
            onChange={handleChange}
          />
        </>
      )}
      <div>
        <button
          type="submit"
          className="w-full mt-8 rounded border border-primary bg-yellow p-3 text-white transition hover:bg-opacity-90"
        > {isLoading ? 'Sending...' :
          'Send Message'}
        </button>
      </div>
    </form>
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer />
    </>
  );
};

export default Contact;

// const input = ({ row, placeholder, name, defaultValue }) => {
//   return (
//     <>
//       <div className="mb-6">
//         <textarea
//           rows={row}
//           placeholder={placeholder}
//           name={name}
//           className="w-full resize-none rounded  mt-8 border border-stroke px-[14px] py-3 text-base text-black outline-none focus:border-primary"
//           defaultValue={defaultValue}
//         />
//       </div>
//     </>
//   );
// };

// const input = ({ type, placeholder, name }) => {
//   return (
//     <>
//       <div className="mb-6">
//         <input
//           type={type}
//           placeholder={placeholder}
//           name={name}
//           className="w-full rounded border mt-8 border-stroke px-[14px] py-3 text-base text-black outline-none focus:border-primary"
//         />
//       </div>
//     </>
//   );
// };