import "./Navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import mainlogo from "./og.png"
import { useEffect, useState } from "react";

const Navbar = () => {
  const [visibleSection, setVisibleSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init(); // Initialize AOS library

    const handleScroll = () => {
      const navbar = document.querySelector(".head");
      const scrollPosition = window.scrollY;

      const transparency = Math.min(scrollPosition / 200, 1);
const newColor = `rgba(${36 - 36 * transparency}, ${36 - 36 * transparency}, ${36 - 36 * transparency}, 1)`;
navbar.style.backgroundColor = newColor;

      
   
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showSection = (section) => {
    setVisibleSection(section);
  };

  const hideSections = () => {
    setVisibleSection(null);
  };

  const handleDropdownClick = (section) => {
    if (visibleSection === section) {
      // If the section is already visible, clicking again should hide it
      hideSections();
    } else {
      // Otherwise, show the clicked section
      showSection(section);
    }
  };

  const handleToggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <>
     <div className="head" style={{ position: "sticky", top: 0, zIndex: 1000, }}>
        <div className="navli">
         <Link to="/"><img src={mainlogo} id="mainlogo" alt="" /></Link> 

       
        </div>

        <nav className={`nav ${isMobile ? "mobile" : ""}`}>
          <Link to="/" style={{ textDecoration: 'none' }}><li>Home</li></Link>
          <div
            className="dropdown"
            // onMouseEnter={() => showSection("industries")}
            // onMouseLeave={hideSections}
            onClick={() => handleDropdownClick("industries")}
          >
            <li>Industries</li>
          </div>
          <div
            className="dropdown"
            // onMouseEnter={() => showSection("services")}
            // onMouseLeave={hideSections}
            onClick={() => handleDropdownClick("services")}
          >
            <li>Services</li>
          </div>
          <li>Careers</li>
          <li>Blog</li>
          <li>Contact</li>
        </nav>


{/* This is offcanvas btn starts */}


<button
        id="otherOffcanvasBtn"
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#otherOffcanvas"
        aria-controls="otherOffcanvas"
        style={{ position: 'absolute', right: '30px' }}
      >
<img style={{height:'20px',width:'20px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAADPz8+WlpZLS0v7+/vu7u5vb29TU1PDw8Pz8/N8fHyCgoITExMzMzOsrKyPj4+6urrU1NTo6Oizs7NCQkJkZGQoKCilpaUtLS05OTmenp7IyMiFhYVaWlpqamoLCwt+baPtAAACfUlEQVR4nO3di27CMAyF4TBWoAxYx2UX2Abv/5RbpSE2aXLSJpJl5/+ewEdQSlLXCQEAAAAAAAAAAAAAAAAA/Fu2H5/3dnyu2uWgfLv5xJ75Ljlf02kXO1LXpAWcHbQrHe0wSwm4XGvXmWGdcDU2G+0qs2ziX9SVdo2ZVrGAW+0Ks20jCZ+1C8z2LAecaddXgPx7+qhdXgGPYsKzdnkFnMWEL9rlFfAiJrxol1eCmFC7uCLEhJb/sV2txYT32uUVcBATWl03/daJCd+1yyvgXUzo4Mf0IgcMr9oFZnuNJGzetCvM9BZdIFq/EiNXof3v6SkeMISpdpUZpikBQ3jSrnO0p7SA3+tgixvCk8k8aS/xx2561K53oGOXvuV9Dbm9s2M7OB4AAAAAAAAAALBj2Z6mdpwGvm4Rmv1C+1nSYIt94rsIvdZmN/umTQ34oF3qaA9pAe19QW8WKQFtPuG+mscDWu/0lru8g4dm/Vi7gvVXZqIvzTTa9RUg3xbtNgvdyG1Ddm+FN/JN0Vqf0H82YkL7LcKxJmHt6oqo/DO0uaj46ygm9P9b6v9+6P8/jf//pRWsLfyvDytY41ewT2P5ppi411bBfmkFe949588tAAAAAAAAAACAJc7nRO06aw/Yhs36mtkcen1Onte21y51tMSZe+7nJp60q8ySMPvS/fzSxvrc+egMWtvzWXuxOcLa9RXg+yrsyVei/5nsdg+zupHn6vs/G0G7uiIqT2j9ft+Tz5mxuWz6Sz4ryHqXd0/u9Lbfqh9t1nd/7loFZ+eZf2kmev5hBWdY+j+HtIKzZCs4Dzj4P9O5Z+1c7g9euAAAAAAAAAAAAAAAAABQhS+ZyFZoP93BCgAAAABJRU5ErkJggg==" alt="" />      </button>

      {/* Off-canvas component */}
    <div
  className="offcanvas offcanvas-end"
  data-bs-scroll="true"
  tabIndex="-1"
  id="otherOffcanvas"
  aria-labelledby="otherOffcanvasLabel"
  style={{
    backgroundColor: 'black',
    color: 'white',
    position: 'fixed',
    top: 0,
    zIndex: 20000000, // Increase the z-index value
    height: '80vh',
    overflowY: 'auto'
  }}
>
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style={{ color: 'white', fontSize: '30px' }}
          >
            X
          </button>
          </div>
  <div className="offcanvas-body" style={{position:'relative'}}>
   <Link to="/"><li>Home</li></Link> 

   <div className="dropdown" style={{position:'relative',right:'14px'}}>
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{border:'none'}}>
   <Link to="/"><li>Industies</li></Link> 
  </button>
    <ul className="dropdown-menu" style={{backgroundColor:'#242424',width:'50vw'}} >
    <Link to="/banking" style={{ color: 'white', textDecoration: 'none' }}><li>Banking, Financial Services and Insurance</li></Link>
                <Link to="/energy" style={{ color: 'white', textDecoration: 'none' }}><li>Energy and Utilities</li></Link>
                <Link to="#" style={{ color: 'white', textDecoration: 'none' }}><li>Media and Entertainment</li></Link>
                <Link to="#" style={{ color: 'white', textDecoration: 'none' }}><li>Healthcare Life Sciences</li></Link>
                <Link to="#" style={{ color: 'white', textDecoration: 'none' }}><li>Retail and Consumer Goods</li></Link>
                <Link to="#" style={{ color: 'white', textDecoration: 'none' }}><li>Travel, Transportation, Hospitality and Logistics</li></Link>
                <Link to="#" style={{ color: 'white', textDecoration: 'none' }}><li>Public Sector and Government</li></Link>
                <Link to="#" style={{ color: 'white', textDecoration: 'none' }}><li>Oil and Gas</li></Link>
                <Link to="#" style={{ color: 'white', textDecoration: 'none' }}><li>Manufacturing</li></Link>
                <Link to="#" style={{ color: 'white', textDecoration: 'none' }}><li>Professional Services</li></Link>
    </ul>
  <br />
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{border:'none'}}>
   <Link to="/"><li>Services</li></Link> 
  </button>
  <ul className="dropdown-menu" style={{backgroundColor:'#242424' ,width:'50vw'}}>
  <Link to="/rpa" style={{ color: 'white', textDecoration: 'none' }}><li>Robotic Process Automation</li></Link>
              <Link to="/webdevelopment" style={{ color: 'white', textDecoration: 'none' }}><li>Web Development</li></Link>
              <Link to="/sap" style={{ color: 'white', textDecoration: 'none' }}><li>SAP</li></Link>
              <Link to="/database" style={{ color: 'white', textDecoration: 'none' }}><li>DataBase</li></Link>
              <Link to="/digitalmarketing" style={{ color: 'white', textDecoration: 'none' }}><li>Digital Marketing</li></Link>
              <Link to="/digitalization" style={{ color: 'white', textDecoration: 'none' }}><li>Digitalization</li></Link>
              <Link to="/outsourcing" style={{ color: 'white', textDecoration: 'none' }}><li>Outsourcing</li></Link>
              <Link to="/cybersecurity" style={{ color: 'white', textDecoration: 'none' }}><li>Cyber Security</li></Link>
              <Link to="/dataanalytics" style={{ color: 'white', textDecoration: 'none' }}><li>Data Analytics</li></Link>
              <Link to="/testing" style={{ color: 'white', textDecoration: 'none' }}><li>Testing</li></Link>
              <Link to="/businessconsulting" style={{ color: 'white', textDecoration: 'none' }}><li>Business Consulting</li></Link>
              <Link to="/training" style={{ color: 'white', textDecoration: 'none' }}><li>Trainings and Certifications</li></Link>
  </ul>
  
</div>

    <Link to="/about"><li>About Us</li></Link>
    <li>Portfolio Companies</li>
    <li>Investors</li>
    <li>Contact Us</li>

      
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
                  <a href="#" rel="noreferrer" target="_blank" className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
                <li className='falling-icon'data-aos-delay="0.3">
                  <a href="#" rel="noreferrer" target="_blank" className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li className='falling-icon'data-aos-delay="0.4">
                  <a href="#" rel="noreferrer" target="_blank" className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
                <li className='falling-icon'data-aos-delay="0.5">
                  <a href="#" rel="noreferrer" target="_blank" className="text-teal-700 transition hover:text-teal-700/75 dark:text-teal-500 dark:hover:text-teal-500/75">
                    <span className="sr-only">Dribbble</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
  </div>
</div>

{/* This is offcanvas btn ends */}


{/* This is industries section starts */}
      </div>


      <div
        className={`industriesec ${visibleSection === "industries" ? "show" : ""}`}
        onMouseEnter={() => showSection("industries")}
        onMouseLeave={hideSections}
      >
        <h2 style={{ color: "gold", paddingLeft: '20px', fontFamily: 'Montserrat,sans-serif' }} >Industries</h2>
        <p style={{ padding: '1px 20px 20px 20px', fontFamily: 'Montserrat,sans-serif', fontSize: '15px' }}>As various industries merge and novel sectors arise, we are actively reconsidering our strategy, solutions, and platforms. Our innovators and thought leaders engage in ongoing dialogues with individuals who have a significant impact on and mold the future direction of these industries.</p>
        <div className="indusmain" style={{ paddingLeft: '20px' }}>
          <div className="indus1">
            <Link to="" style={{ color: 'white', textDecoration: 'none' }}></Link>
            <Link to="/banking"><li>Banking, Financial Services and Insurance</li></Link>
            <Link to="/energy"><li>Energy and Utilities</li></Link>
            <Link to=""><li>Media and Entertainment</li></Link>
            <Link to=""> <li>Healthcare Life Sciences</li></Link>
          </div>
          <div className="indus2">
            <Link to="" style={{ color: 'white', textDecoration: 'none' }}>
            </Link>
            <Link to=""><li>Retail and Consumer Goods</li></Link>
            <Link to=""><li>Travel, Transportation, Hospitality and Logistics</li></Link>
            <Link to=""><li>Public Sector and Government</li></Link>
          </div>
          <div className="indus3">
            <Link to="" style={{ color: 'white', textDecoration: 'none' }}>
            </Link>
            <Link to=""><li>Oil and Gas</li></Link>
            <Link to=""><li>Manufacturing</li></Link>
            <Link to=""><li>Professional Services</li></Link>
          </div>
        </div>
      </div>

{/* This is industries section ends */}

      <div
        className={`servicesec ${visibleSection === "services" ? "show" : ""}`}
        onMouseEnter={() => showSection("services")}
        onMouseLeave={hideSections}
      >
        <h2 style={{ color: "gold", paddingLeft: '20px', fontFamily: 'Montserrat,sans-serif' }} >Services</h2>
        <p style={{ padding: '1px 20px 20px 20px', fontFamily: 'Montserrat,sans-serif', fontSize: '15px' }}>Our array of service offerings is tailored to adapt to the evolving needs of our customers in today's dynamic world. From crafting strategic plans to delivering tangible results, our service portfolio covers a comprehensive spectrum.</p>
        <div className="servicemain" style={{ paddingLeft: '20px' }}>
          <div className="service1">
            <Link to="" style={{ color: 'white', textDecoration: 'none' }}></Link>
            <Link to="/rpa"><li>Robotic Process Automation</li></Link>
            <Link to="/webdevelopment"><li>Web Development</li></Link>
            <Link to="/sap"><li>SAP</li></Link>
            <Link to="/database"> <li>DataBase</li></Link>
          </div>
          <div className="service2">
            <Link to="" style={{ color: 'white', textDecoration: 'none' }}>
            </Link>
            <Link to="/digitalmarketing"><li>Digital Marketing</li></Link>
            <Link to="/digitalization"><li>Digitalization</li></Link>
            <Link to="/outsourcing"><li>Outsourcing</li></Link>
            <Link to="/cybersecurity"><li>Cyber Security</li></Link>
          </div>
          <div className="service3">
            <Link to="" style={{ color: 'white', textDecoration: 'none' }}>
            </Link>
            <Link to="/dataanalytics"><li>Data Analytics</li></Link>
            <Link to="/testing"><li>Testing</li></Link>
            <Link to="/businessconsulting"><li>Business Consulting</li></Link>
            <Link to="/training"><li>Trainings and Certifications</li></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;