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


    <footer className="bg-black dark:bg-gray-900" ref={footerRef} >
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-teal-600 sm:justify-start dark:text-teal-300">
              <img src={Logo} alt="" style={{ height: '90px' }} />
            </div>
            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left dark:text-gray-400">

            </p>
            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8" >
              <li className='falling-icon' data-aos-delay="0">
                <a href="#" rel="noreferrer" target="_blank" className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li className='falling-icon' data-aos-delay="0.2">
                <a href="https://www.instagram.com/qubicgen/" rel="noreferrer" target="_blank" className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </li>
              <li className='falling-icon' data-aos-delay="0.3">
                <a href="https://twitter.com/QubicGen" rel="noreferrer" target="_blank" className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
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
   <img style={{height:'20px',width:'20px',marginTop:'5px'}} src="data:image/png;base64,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" alt="" className='relative right-7 top- rounded-full' />
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
              <ul className="mt-8 space-y-4 text-sm servicesfoot">
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



            <div className="text-center sm:text-left">
              <p className="text-lg font-medium" style={{fontSize:'25px',color:'gold'}} >Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" href="mailto:someone@example.com">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="flex-1 text-gray-700 dark:text-gray-300"><a href="mailto:someone@example.com"> services@qubicgen.com </a></p>
                  </a>
                </li>
                <li>
                  <p className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" style={{marginTop:'25px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="flex-1 text-gray-700 dark:text-gray-300" >+91 964 974 9845 </span>
                  </p>
                </li>
                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" style={{marginTop:'25px'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <a target='_blank' href="https://www.google.com/maps?ll=14.647381,77.611864&z=17&t=m&hl=en&gl=IN&mapclient=embed&cid=10294290689329187032"> <address className="-mt-0.5 flex-1 not-italic text-gray-700 dark:text-gray-300">
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
              <a className="inline-block text-teal-600 underline transition hover:text-teal-600/75 dark:text-teal-500 dark:hover:text-teal-500/75" href="#">
                Terms &amp; Conditions
              </a>
              <span>·</span>
              <a className="inline-block text-teal-600 underline transition hover:text-teal-600/75 dark:text-teal-500 dark:hover:text-teal-500/75" href="#">
                Privacy Policy
              </a>
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