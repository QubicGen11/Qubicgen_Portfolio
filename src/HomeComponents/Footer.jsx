import React, { useEffect, useRef } from 'react'
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Footer.css'
import Logo from "./og.png"
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const icons = document.querySelectorAll('.falling-icon');
    const options = {
      threshold: 0.5, // Adjust this threshold as needed
    };

    const handleIntersection = (entries) => {
      let delay = 0; // Initial delay

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          icons.forEach((icon) => {
            const iconDelay = icon.getAttribute('data-aos-delay') || 0;
            setTimeout(() => {
              icon.style.animation = `fallAnimation 1s ease-out ${iconDelay}s both`;
            }, delay * 1000); // Convert seconds to milliseconds
            delay += 0.2; // Adjust the delay between icons
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(footerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const icons = document.querySelectorAll('.falling-icon');
    const options = {
      threshold: 0.5, // Adjust this threshold as needed
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          icons.forEach((icon) => {
            const delay = icon.getAttribute('data-aos-delay') || 0;
            icon.style.animation = `fallAnimation 1s ease-out ${delay}s both`;
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(footerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (


    <footer className="bg-black" ref={footerRef} >
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-teal-600 sm:justify-start dark:text-teal-300">
              <img src={Logo} alt="" style={{ height: '90px' }} />
            </div>
            <p className="mt-6 max-w-md text-center leading-relaxed  sm:max-w-xs sm:text-left">

            </p>
            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8" >
              <li className='falling-icon' data-aos-delay="0">
                <a href="#" rel="noreferrer" target="_blank" className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75">
                  <span className="sr-only">Facebook</span>
                 <img style={{height:'20px',width:'20px',marginTop:'5px'}} src="https://res.cloudinary.com/defsu5bfc/image/upload/v1712055473/QubicGen/Icons/facebook_ax9okf.jpg" className='rounded-2xl'  alt="" />
                </a>  
              </li>
              <li className='falling-icon' data-aos-delay="0.2">
                <a href="https://www.instagram.com/qubicgen/" rel="noreferrer" target="_blank" className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75">
                  <span className="sr-only">Instagram</span>
                  <img style={{height:'20px',width:'20px',marginTop:'5px'}} className='rounded-full' src="https://res.cloudinary.com/defsu5bfc/image/upload/v1712053984/QubicGen/Icons/18246125_v982-d3-04_lpukwx.jpg" alt="" />
                </a>
              </li>
              <li className='falling-icon' data-aos-delay="0.3">
                <a href="https://twitter.com/QubicGen" rel="noreferrer" target="_blank" className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75">
                  <span className="sr-only">Twitter</span>
                 <img style={{height:'20px',width:'20px',marginTop:'5px'}} className='rounded-full' src="https://res.cloudinary.com/defsu5bfc/image/upload/v1712054347/QubicGen/Icons/sl_z_072523_61700_03_wsklkg.jpg" alt="" />
                </a>
              </li>
              {/* <li className='falling-icon' data-aos-delay="0.4">
                <a href="#" rel="noreferrer" target="_blank" className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </li> */}

              <img src="" alt="" />

              <li className='falling-icon' data-aos-delay="0.4">
  <a href="https://www.linkedin.com/company/qubicgen/mycompany/" rel="noreferrer" target="_blank" className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75">
    <span className="sr-only">LinkedIn</span>
   <img style={{height:'20px',width:'20px',marginTop:'5px'}} src="https://res.cloudinary.com/defsu5bfc/image/upload/v1712053071/QubicGen/Icons/linkedin_kmrbri.png" alt="" className='relative right-7 top- rounded-3xl' />
  </a>
</li>

            </ul>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">




            {/* <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900 dark:text-white">Our Services</p>
                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" href="#">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" href="#">
                      Web Design
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" href="#">
                      Marketing
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" href="#">
                      Google Ads
                    </a>
                  </li>
                </ul>
              </div> */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium dark:text-white" style={{fontSize:'25px',color:'gold'}} >Services</p>
              <ul className="mt-8 space-y-4 text-sm servicesfoot text-white">
                <li>
                  <Link className="transition hover:text-gold dark:text-white dark:hover:text-gold/75" to="/rpa">
                    RPA
                  </Link>
                </li>
                <li>
                  <Link className=" dark:text-white dark:hover:text-white/75" to="/cybersecurity">
                    Cyber Security
                  </Link>
                </li>
                <li>
                  <Link className=" dark:text-white dark:hover:text-white/75" to="/sap">
                   SAP
                  </Link>
                </li>
                <li>
                  <Link className=" dark:text-white dark:hover:text-white/75" to="/digitalmarketing">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link className=" dark:text-white dark:hover:text-white/75" to="/webdevelopment">
                    Web Development
                  </Link>
                </li>

              </ul>
            </div>



            <div className="text-center sm:text-left text-white">
              <p className="text-lg font-medium" style={{fontSize:'25px',color:'gold'}} >Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="footercontact flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" href="mailto:services@qubicgen.com">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="flex-1  dark:text-gray-300 "><a href="mailto:services@qubicgen.com"> services@qubicgen.com </a></p>
                  </a>
                </li>
                <li>
                  <p className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" style={{marginTop:'25px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+919649749845" className="flex-1 hover:text-yellow-400  dark:text-gray-300">+91 964 974 9845</a>
                  </p>
                </li>
                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" style={{marginTop:'25px'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <a target='_blank' href="https://www.google.com/maps?ll=14.647381,77.611864&z=17&t=m&hl=en&gl=IN&mapclient=embed&cid=10294290689329187032"> <address className="-mt-0.5 flex-1 not-italic hover:text-yellow-400 dark:text-gray-300">
                    Opp Govt Polytecnic College, Anantapur , Andhrapradesh
                  </address></a>
                  
                </li>

                
              </ul>
            </div>


            <div className="text-center sm:text-left" style={{marginLeft:'50px'}}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.1498649216232!2d77.61164921531011!3d14.64743296342421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14b000140666b%3A0x8edcaad72813c8d8!2sQubicgen!5e0!3m2!1sen!2sin!4v1709601779988!5m2!1sen!2sin"
                width="300"
                height="250"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6 dark:border-gray-800">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="block sm:inline">All rights reserved.</span>
              <Link className="inline-block text-teal-600 underline transition hover:text-teal-600/75 dark:text-teal-500 dark:hover:text-teal-500/75" to="/terms">
                Terms &amp; Conditions
              </Link>
              <span>·</span>
              <Link className="inline-block text-teal-600 underline transition hover:text-teal-600/75 dark:text-teal-500 dark:hover:text-teal-500/75" to="/privacy">
                Privacy Policy
              </Link>
            </p>
            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0 dark:text-gray-400">
              © 2023 QubicGen
            </p>
          </div>
        </div>
      </div>
    </footer>


  )
}

export default Footer