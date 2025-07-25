import "./Navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";
import mainlogo from "./og.png"
import { useEffect, useState } from "react";
import dropydown from "../assets/dropdowns.png"

const Navbar = () => {

  const [timeoutId, setTimeoutId] = useState(null);

  const showSectionss = () => {
    clearTimeout(timeoutId);
    document.getElementById('dropdown').classList.remove('hidden');
  };

  const hideSectionsss = () => {
    setTimeoutId(
      setTimeout(() => {
        document.getElementById('dropdown').classList.add('hidden');
      }, 300) // Adjust the delay time here (300 milliseconds in this case)
    );
  };
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdownss = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const [visibleSection, setVisibleSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleIndustries = () => {
    setIsIndustriesOpen(!isIndustriesOpen);
    setIsServicesOpen(false); // Close the services dropdown
  };
  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
    setIsIndustriesOpen(false); // Close the industries dropdown
  };


  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsIndustriesOpen(false); // Close the industries dropdown
  };

  // Define showSections function
  const showSections = () => {
    const dropdown = document.getElementById("dropdown");
    if (dropdown) {
      dropdown.classList.remove("hidden");
    }
  };

  // Define hideSections function
  const hideSectionss = () => {
    const dropdown = document.getElementById("dropdown");
    if (dropdown) {
      dropdown.classList.add("hidden");
    }
  };


  useEffect(() => {
    AOS.init(); // Initialize AOS library

    const handleScroll = () => {
      const navbar = document.querySelector(".head");
      const scrollPosition = window.scrollY;

      const transparency = Math.min(scrollPosition / 200, 1);
      const newColor = `rgba(${0 - 0 * transparency}, ${0 - 0 * transparency}, ${0 - 0 * transparency}, 1)`;
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

  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  // Add this useEffect to fetch courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://qg.vidyantra-dev.com/qubicgen/allCourses');
        if (!response.ok) throw new Error('Failed to fetch courses');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  // Group courses by category
  const groupedCourses = courses.reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {});

  // Split courses into three columns
  const courseCategories = Object.keys(groupedCourses);
  const columnsCount = 3;
  const itemsPerColumn = Math.ceil(courseCategories.length / columnsCount);

  // Add this to your state declarations
  const [coursePageIndex, setCoursePageIndex] = useState(0);

  // Add this function to handle next button click
  const handleNextCourses = () => {
    setCoursePageIndex((prev) => prev + 1);
    if (coursePageIndex >= Math.floor(courses.length / 12)) {
      setCoursePageIndex(0);
    }
  };

  // Add this function for previous button
  const handlePreviousCourses = () => {
    setCoursePageIndex((prev) => {
      if (prev <= 0) {
        return Math.floor(courses.length / 12);
      }
      return prev - 1;
    });
  };

  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const toggleCourses = () => {
    setIsCoursesOpen(!isCoursesOpen);
    setIsIndustriesOpen(false);
    setIsServicesOpen(false);
    setIsContactOpen(false);
  };

  return (
    <>
      <div className="head" style={{ position: "sticky", top: 0, zIndex: 1000, }}>
        <div className="navli hover:cursor-auto">
          <Link to="/"><img src={mainlogo} id="mainlogo" alt="" className="navli hover:cursor-auto" /></Link>


        </div>

        <nav className={`nav  ${isMobile ? "mobile" : ""}`}>
          <Link to="/" style={{ textDecoration: 'none' }}><li className="hover:cursor-pointer" onMouseEnter={hideSections}>Home</li></Link>
          <Link to="/about" style={{ textDecoration: 'none' }}><li className="hover:cursor-pointer" onMouseEnter={hideSections}>About</li></Link>
          <div
            className="dropdown"
            onMouseEnter={() => showSection("industries")}
          // onMouseLeave={hideSections} 
          // onClick={() => handleDropdownClick("industries")}
          >
            <li className="hover:cursor-pointer" >Industries</li>
          </div>

          <div
            className="dropdown"
            onMouseEnter={() => showSection("services")}
          // onMouseLeave={hideSections}
          // onClick={() => handleDropdownClick("services")}
          >
            <li className="hover:cursor-pointer">Services</li>
          </div>

          <Link to="/careers"><li className="hover:cursor-pointer" onMouseEnter={hideSections}
          >Careers</li></Link>
          <div
            className="dropdown"
            onMouseEnter={() => showSection("courses")}
          >
            {/* <Link to="/courses" style={{ textDecoration: 'none' }}>
              <li className="hover:cursor-pointer">Courses</li>
            </Link> */}
          </div>


          <div>
 <li
   className="hover:cursor-pointer relative"
   onMouseOver={() => {
     showSectionss();               // Your existing show function
     setVisibleSection(null);       // Hide other sections (like Courses)
     setIsIndustriesOpen(false);    // Hide Industries dropdown
     setIsServicesOpen(false);      // Hide Services dropdown
     setIsCoursesOpen(false);       // Hide Courses dropdown
   }}
   onMouseLeave={hideSectionsss}    // Keep your existing hide function
 >
   Contact
   <section className="absolute top-[70px] -right-20 bg-black p-2 hidden w-44" id="dropdown">
     <ul className="text-center">
       <Link to="/projectform"><li style={{ fontWeight: 'lighter', fontSize: '14px' }}>Project Form</li></Link>
       <Link to="/studentform"><li style={{ fontWeight: 'lighter', fontSize: '14px' }}>Student Form</li></Link>
       <Link to="/newjobapplication"><li style={{ fontWeight: 'lighter', fontSize: '14px' }}>Job Application</li></Link>
     </ul>
   </section>
 </li>
</div>







        </nav>


        {/* This is offcanvas btn starts */}


        <button
          id="otherOffcanvasBtn"
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#otherOffcanvas"
          aria-controls="otherOffcanvas"
          style={{ position: 'absolute', right: '40px', backgroundColor: 'none' }}
        >


          <span style={{ fontSize: '24px', display: 'inline-block', verticalAlign: 'middle' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </span>
          </button>

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
            height: '100vh',
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
          <div className="offcanvas-body" style={{ padding: '80px' }}>
            <Link to="/"><li className="serviceseclist hover:cursor-pointer mb-4 pl-7 pt-1"  >HOME</li></Link>
            <Link to="/about"><li className="serviceseclist hover:cursor-pointer mb-4  pl-7 pt-1" >ABOUT US</li></Link>

            <div>
              <div onClick={toggleIndustries} className="serviceseclist hover:cursor-pointer mb-4 pl-7 pt-1">
                INDUSTRIES <i className="fas fa-caret-down ml-3"></i>
              </div>
              {isIndustriesOpen && (
                <ul id="industysec" className="relative right-11 w-72 pl-7 pt-1">
                  <li className="industyseclist pl-7 pt-1 w-auto rounded-lg">
                    <Link to="/banking" style={{ color: 'white', textDecoration: 'none' }}>Banking, Financial Services and Insurance</Link>
                  </li>
                  {/* <li className="industyseclist pl-7 pt-1 w-auto rounded-lg">
                    <Link to="/energy" style={{ color: 'white', textDecoration: 'none' }}>Energy and Utilities</Link>
                  </li> */}
                  <li className="industyseclist pl-7 pt-1 w-auto rounded-lg">
                    <Link to="/media" style={{ color: 'white', textDecoration: 'none' }}>Media and Entertainment</Link>
                  </li>
                  <li className="industyseclist pl-7 pt-1 w-auto rounded-lg">
                    <Link to="/health" style={{ color: 'white', textDecoration: 'none' }}>Healthcare Life Sciences</Link>
                  </li>
                  <li className="industyseclist pl-7 pt-1 w-auto rounded-lg">
                    <Link to="/retail" style={{ color: 'white', textDecoration: 'none' }}>Retail and Consumer Goods</Link>
                  </li>
                  <li className="industyseclist pl-7 pt-1 w-auto rounded-lg">
                    <Link to="/travel" style={{ color: 'white', textDecoration: 'none' }}>Travel, Transportation, Hospitality and Logistics</Link>
                  </li>
                  <li className="industyseclist pl-7 pt-1 w-auto rounded-lg">
                    <Link to="/public" style={{ color: 'white', textDecoration: 'none' }}>Public Sector and Government</Link>
                  </li>
                  <li className="industyseclist pl-7 pt-1 w-auto rounded-lg">
                    <Link to="/oil" style={{ color: 'white', textDecoration: 'none' }}>Oil and Gas</Link>
                  </li>
                  <li className="industyseclist pl-7 pt-1 w-auto rounded-lg">
                    <Link to="/manufacturing" style={{ color: 'white', textDecoration: 'none' }}>Manufacturing</Link>
                  </li>
                  <li className="industyseclist pl-7 pt-1 w-auto rounded-lg">
                    <Link to="/summary" style={{ color: 'white', textDecoration: 'none' }}>Professional Services</Link>
                  </li>
                </ul>
              )}

              <div onClick={toggleServices} className="serviceseclist hover:cursor-pointer mb-4 pl-7 pt-1" >
                SERVICES <i className="fas fa-caret-down ml-3"></i>
              </div>
              {isServicesOpen && (

                <ul className="relative right-11 w-72 pl-7 pt-1" id="serviceseclist" >
                  <li className="serviceseclist pl-7 pt-1">
                    <Link to="/rpa" style={{ color: 'white', textDecoration: 'none' }}>Robotic Process Automation</Link>
                  </li>
                  <li className="serviceseclist pl-7 pt-1">
                    <Link to="/webdevelopment" style={{ color: 'white', textDecoration: 'none' }}>Web Development</Link>
                  </li>
                  {/* <li className="serviceseclist pl-7 pt-1">
                    <Link to="/sap" style={{ color: 'white', textDecoration: 'none' }}>SAP</Link>
                  </li> */}
                  <li className="serviceseclist pl-7 pt-1">
                    <Link to="/database" style={{ color: 'white', textDecoration: 'none' }}>Database</Link>
                  </li>
                  <li className="serviceseclist pl-7 pt-1">
                    <Link to="/digitalmarketing" style={{ color: 'white', textDecoration: 'none' }}>Digital Marketing</Link>
                  </li>
                  <li className="serviceseclist pl-7 pt-1">
                    <Link to="/digitalization" style={{ color: 'white', textDecoration: 'none' }}>Digitalization</Link>
                  </li>
                  <li className="serviceseclist pl-7 pt-1">
                    <Link to="/outsourcing" style={{ color: 'white', textDecoration: 'none' }}>Outsourcing</Link>
                  </li>
                  <li className="serviceseclist pl-7 pt-1">
                    {/* <Link to="/cybersecurity" style={{ color: 'white', textDecoration: 'none' }}>Cyber Security</Link> */}
                  </li>
                  <li className="serviceseclist pl-7 pt-1">
                    <Link to="/dataanalytics" style={{ color: 'white', textDecoration: 'none' }}>Data Analytics</Link>
                  </li>
                  <li className="serviceseclist pl-7 pt-1">
                    <Link to="/testing" style={{ color: 'white', textDecoration: 'none' }}>Testing</Link>
                  </li>
                  <li className="serviceseclist pl-7 pt-1">
                    <Link to="/businessconsulting" style={{ color: 'white', textDecoration: 'none' }}>Business Consulting</Link>
                  </li>
                  <li className="serviceseclist pl-7 pt-1">
                    <Link to="/training" style={{ color: 'white', textDecoration: 'none' }}>Trainings and Certifications</Link>
                  </li>
                </ul>

              )}
            </div>









            <Link to="/careers"><li className="serviceseclist hover:cursor-pointer mb-4 pl-7 pt-1">CAREERS</li></Link>


            <div>
              <div onClick={toggleContact} className="serviceseclist hover:cursor-pointer mb-4 pl-7 pt-1 ">
                CONTACT US<i className="fas fa-caret-down ml-3"></i>
              </div>
              {isContactOpen && (
                <ul id="industysec" className="relative right-11 w-72 pl-7 pb-10">

                  <li className="industyseclist pl-7 pt-1 w-auto rounded-lg">
                    <Link to="/projectform" style={{ color: 'white', textDecoration: 'none' }}>Project Form</Link>
                  </li>
                  <li className="industyseclist pl-7 pt-1 w-auto rounded-lg">
                    <Link to="/studentform" style={{ color: 'white', textDecoration: 'none' }}>Student Form</Link>
                  </li>
                  <li className="industyseclist pl-7 pt-1 w-auto rounded-lg">
                    <Link to="/newjobapplication" style={{ color: 'white', textDecoration: 'none' }}>Job Application</Link>
                  </li>
                </ul>
              )}




            </div>











            {/*       
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
              </ul> */}

            {/* <div>
              <div onClick={toggleCourses} className="serviceseclist hover:cursor-pointer mb-4 pl-7 pt-1">
                COURSES <i className="fas fa-caret-down ml-3"></i>
              </div>
              {isCoursesOpen && (
                <ul className="relative right-11 w-72 pl-7 pt-1">
                  {courses
                    .slice(coursePageIndex * 12, (coursePageIndex + 1) * 12)
                    .map((course) => (
                      <li key={course.id} className="serviceseclist pl-7 pt-1">
                        <Link to={`/technology/${course.id}`} style={{ color: 'white', textDecoration: 'none' }}>
                          {course.courseName}
                        </Link>
                      </li>
                    ))}
                  <div className="courses-navigation pl-7 pt-3" style={{ display: 'flex', gap: '20px' }}>
                    {coursePageIndex > 0 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePreviousCourses();
                        }}
                        className="text-white hover:text-gold"
                        style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px' }}
                      >
                        <i className="fas fa-chevron-left mr-2"></i>
                        Previous Courses
                      </button>
                    )}
                    {courses.length > (coursePageIndex + 1) * 12 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNextCourses();
                        }}
                        className="text-white hover:text-gold"
                        style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px' }}
                      >
                        Next Courses
                        <i className="fas fa-chevron-right ml-2"></i>
                      </button>
                    )}
                  </div>
                </ul>
              )}
            </div> */}
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
            <Link to="/banking"><li className="hover:cursor-pointer">Banking, Financial Services and Insurance</li></Link>
            {/* <Link to="/energy"><li className="hover:cursor-pointer">Energy and Utilities</li></Link> */}
            <Link to="/media"><li className="hover:cursor-pointer">Media and Entertainment</li></Link>
            <Link to="/health"> <li className="hover:cursor-pointer">Healthcare Life Sciences</li></Link>
          </div>
          <div className="indus2">
            <Link to="" style={{ color: 'white', textDecoration: 'none' }}>
            </Link>
            <Link to="/retail"><li className="hover:cursor-pointer">Retail and Consumer Goods</li></Link>
            <Link to="/travel"><li className="hover:cursor-pointer">Travel, Transportation, Hospitality and Logistics</li></Link>
            <Link to="/public"><li className="hover:cursor-pointer">Public Sector and Government</li></Link>
          </div>
          <div className="indus3">
            <Link to="" style={{ color: 'white', textDecoration: 'none' }}>
            </Link>
            <Link to="/oil"><li className="hover:cursor-pointer">Oil and Gas</li></Link>
            <Link to="/manufacturing"><li className="hover:cursor-pointer">Manufacturing</li></Link>
            <Link to="/summary"><li className="hover:cursor-pointer">Professional Services</li></Link>
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
            <Link to="/rpa"><li className="hover:cursor-pointer">Robotic Process Automation</li></Link>
            <Link to="/webdevelopment"><li className="hover:cursor-pointer">Web Development</li></Link>
            {/* <Link to="/sap"><li className="hover:cursor-pointer">SAP</li></Link> */}
            <Link to="/database"> <li className="hover:cursor-pointer">DataBase</li></Link>
          </div>
          <div className="service2">
            <Link to="" style={{ color: 'white', textDecoration: 'none' }}>
            </Link>
            <Link to="/digitalmarketing"><li className="hover:cursor-pointer">Digital Marketing</li></Link>
            <Link to="/digitalization"><li className="hover:cursor-pointer">Digitalization</li></Link>
            <Link to="/outsourcing"><li className="hover:cursor-pointer">Outsourcing</li></Link>
            {/* <Link to="/cybersecurity"><li className="hover:cursor-pointer">Cyber Security</li></Link> */}
          </div>
          <div className="service3">
            <Link to="" style={{ color: 'white', textDecoration: 'none' }}>
            </Link>
            <Link to="/dataanalytics"><li className="hover:cursor-pointer">Data Analytics</li></Link>
            <Link to="/testing"><li className="hover:cursor-pointer">Testing</li></Link>
            <Link to="/businessconsulting"><li className="hover:cursor-pointer">Business Consulting</li></Link>
            <Link to="/training"><li className="hover:cursor-pointer">Trainings and Certifications</li></Link>
          </div>
        </div>
      </div>

      <div
        className={`coursesec ${visibleSection === "courses" ? "show" : ""}`}
        style={{ marginTop: '20px' }}
        onMouseEnter={() => showSection("courses")}
        onMouseLeave={hideSections}
      >
        <div className="courses-header">
          <h2 style={{ color: "gold", paddingLeft: '20px', fontFamily: 'Montserrat,sans-serif' }}>
            Courses
          </h2>
          <div className="courses-navigation" style={{ display: 'flex', gap: '20px', marginRight: '20px', alignItems: 'center' }}>
            {coursePageIndex > 0 && (
              <button
                className="prev-courses-btn"
                onClick={handlePreviousCourses}
                style={{ display: 'flex', alignItems: 'center', gap: '5px', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
              >
                <span style={{ fontSize: '14px', fontFamily: 'Montserrat,sans-serif' }}>Previous Courses</span>
              </button>
            )}
            {courses.length > (coursePageIndex + 1) * 12 && (
              <button
                className="next-courses-btn"
                onClick={handleNextCourses}
                style={{ display: 'flex', alignItems: 'center', gap: '5px', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
              >
                <span style={{ fontSize: '14px', fontFamily: 'Montserrat,sans-serif' }}>Next Courses</span>
              </button>
            )}
          </div>
        </div>
        <p style={{ padding: '1px 20px 20px 20px', fontFamily: 'Montserrat,sans-serif', fontSize: '15px' }}>
          Elevate your skills with industry-focused programs designed to transform your career through expert training.
        </p>
        {!courses.length ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
          </div>
        ) : (
          <div className="coursemain" style={{ paddingLeft: '20px' }}>
            <div className="course1">
              <Link to="" style={{ color: 'white', textDecoration: 'none' }}></Link>
              {courses
                .slice(coursePageIndex * 12, coursePageIndex * 12 + 4)
                .map((course) => (
                  <Link key={course.id} to={`/technology/${course.id}`}>
                    <li className="hover:cursor-pointer">{course.courseName}</li>
                  </Link>
                ))}
            </div>
            <div className="course2">
              <Link to="" style={{ color: 'white', textDecoration: 'none' }}></Link>
              {courses
                .slice(coursePageIndex * 12 + 4, coursePageIndex * 12 + 8)
                .map((course) => (
                  <Link key={course.id} to={`/technology/${course.id}`}>
                    <li className="hover:cursor-pointer">{course.courseName}</li>
                  </Link>
                ))}
            </div>
            <div className="course3">
              <Link to="" style={{ color: 'white', textDecoration: 'none' }}></Link>
              {courses
                .slice(coursePageIndex * 12 + 8, coursePageIndex * 12 + 12)
                .map((course) => (
                  <Link key={course.id} to={`/technology/${course.id}`}>
                    <li className="hover:cursor-pointer">{course.courseName}</li>
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;