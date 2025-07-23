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
            
            <ul className="mt-8 flex justify-center gap-4 sm:justify-start md:gap-8 ml-3" >
            <p className="mt-1 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left text-white  text-xl">
              Follow us

            </p>
              <li className='falling-icon' data-aos-delay="0">
                <a href="https://www.facebook.com/QubicGen" rel="noreferrer" target="_blank" className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75">
                  <span className="sr-only">Facebook</span>
                 <img style={{height:'30px',width:'30px',marginTop:'5px'}} src="https://res.cloudinary.com/defsu5bfc/image/upload/v1713853663/Facebook-logo-premium-of-golden-social-media-png_miqqpc.png" className='rounded-2xl'  alt="" />
                </a>  
              </li>
              <li className='falling-icon' data-aos-delay="0.2">
                <a href="https://www.instagram.com/qubicgen/" rel="noreferrer" target="_blank" className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75">
                  <span className="sr-only">Instagram</span>
                  <img style={{height:'30px',width:'30px',marginTop:'5px'}} className='rounded-full' src="https://res.cloudinary.com/defsu5bfc/image/upload/v1713853722/cf01074bb3d544d41b2d02f841a31358_dk1wii.jpg" alt="" />
                </a>
              </li>
              <li className='falling-icon' data-aos-delay="0.3">
                <a href="https://twitter.com/QubicGenGlobal" rel="noreferrer" target="_blank" className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75">
                  <span className="sr-only">Twitter</span>
                 <img style={{height:'30px',width:'30px',marginTop:'5px'}} className='rounded-full' src="https://res.cloudinary.com/defsu5bfc/image/upload/v1713853760/a167b5238b5f7e5e91b45dd35408e9b3_m8jvxl.jpg" alt="" />
                </a>
              </li>
             
              <img src="" alt="" />

              <li className='falling-icon' data-aos-delay="0.4">
  <a href="https://www.linkedin.com/company/qubicgen/mycompany/" rel="noreferrer" target="_blank" className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75">
    <span className="sr-only">LinkedIn</span>
   <img style={{height:'30px',width:'30px',marginTop:'5px'}} src="https://res.cloudinary.com/defsu5bfc/image/upload/v1713853801/Linkedin-logo-premium-of-golden-social-media-png_vvmmsa.png" alt="" className='relative right-7 top- rounded-3xl' />
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
                  <a className="footercontact text-xs flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" href="mailto:services@qubicgen.com">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="flex-1 text-sm  dark:text-gray-300 "><a href="mailto:services@qubicgen.com"> services@qubicgen.com </a></p>
                  </a>
                </li>
                <li>
                  <p className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" style={{marginTop:'25px',marginLeft:'10px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+919649749845" className="flex-1 text-sm  hover:text-yellow-400  dark:text-gray-300">+91 964 974 9845</a>
                  </p>
                </li>
                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" style={{marginTop:'25px'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <a target='_blank' href="https://www.google.com/maps?ll=14.647381,77.611864&z=17&t=m&hl=en&gl=IN&mapclient=embed&cid=10294290689329187032"> <address className="-mt-0.5 flex-1 not-italic hover:text-yellow-400 dark:text-gray-300">
                    Opp Govt Polytechnic College, Anantapur , Andhrapradesh
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