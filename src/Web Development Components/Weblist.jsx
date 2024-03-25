import React, { useEffect, useRef, useState } from 'react'
import './Web.css'
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import Queries from '../Industries Components/Banking Components/Queries';

const Weblist = () => {
  const overviewRef = useRef(null);
  const serveRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const queriesRef = useRef(null);

  const [isNavFixed, setIsNavFixed] = useState(false);
  
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // This is for rpa offering cards
  const [Webofferings, setWebofferings] = useState([
    {
        title: 'Custom Website Development',
        description: 'Creating tailor-made websites from scratch based on client requirements, incorporating unique designs, features and functionalities.'
    },
    {
        title: 'Full-Stack Development',
        description: 'Providing end-to-end development services encompassing both front-end and back-end development, along with database management and server configuration.'
    },
    {
        title: 'Content Management System (CMS) Development',
        description: 'Building websites using CMS platforms such as WordPress, Joomla, Drupal, or Magento, allowing clients to easily manage and update website content without requiring technical expertise.'
    },
    {
        title: 'E-commerce Development',
        description: 'Creating online stores and e-commerce platforms with features such as product catalogs, shopping carts, payment gateways, order management and customer accounts using platforms like WooCommerce, Shopify, Magento, or custom solutions.'
    },
    {
        title: 'Responsive Web Design',
        description: 'Designing websites that are optimized for various devices and screen sizes, ensuring a consistent and seamless user experience across desktops, laptops, tablets and smartphones.'
    },
    {
        title: 'Web Application Development',
        description: 'Developing dynamic and interactive web applications with advanced functionalities such as user authentication, real-time updates, APIs integration and data processing using frameworks like React.js, Angular, Vue.js, or Ember.js.'
    },
    {
        title: 'Web Maintenance and Support',
        description: 'Providing ongoing maintenance, updates and technical support services to ensure the security, performance and reliability of websites, including bug fixes, security patches and software upgrades.'
    },
    {
        title: 'Search Engine Optimization (SEO)',
        description: 'Optimizing websites for search engines to improve visibility, ranking and organic traffic through techniques such as keyword optimization, content creation, link building and site performance optimization.'
    },
    
]);

const[Webserve,setWebserve]=useState([

  {
  title:'HealthCare',
  description: 'Web development in healthcare includes patient portals, telemedicine platforms and EHR systems for streamlined data management. It also encompasses HIE platforms, analytics dashboards and medical education platforms for improved insights and learning experiences.',
  background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709798087/QubicGen/Web%20Development/Who%20We%20Serve/doctor-using-stretoscope-virtual-projection_651396-925_xuwd1x.jpg"
  },
  
  {
  title: 'Finance',
  description: 'Web development in the finance industry drives digital innovation, offering applications like online banking, mobile payments and trading platforms. It enhances security, user experience and business efficiency by providing personalized financial services.',
  background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709798120/QubicGen/Web%20Development/Who%20We%20Serve/collage-finance-banner-concept_23-2150608824_fdflpm.jpg"
  },
  {
    title: 'Education',
    description: 'Web development in education drives transformative change, enabling seamless access to resources like online platforms, virtual classrooms and learning analytics tools. It empowers educators with interactive tools by enhancing student engagement and experiential learning.',
    background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709798181/QubicGen/Web%20Development/Who%20We%20Serve/geometric-science-education-background-vector-gradient-blue-digital-remix_53876-125993_ajtjz9.jpg"
    },
  {
  title: 'Entertainment',
  description: 'Web development powers immersive experiences in entertainment, from streaming services to gaming platforms, enabling content delivery and user engagement. Leveraging HTML5, CSS3 and JavaScript, we create responsive websites for diverse audiences.',
  background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709798297/QubicGen/Web%20Development/Who%20We%20Serve/top-view-clapperboard-movie-elements_23-2147775695_zbeqdx.jpg"
  },
  {
  title: 'Travel',
  description: 'Web development in the travel industry revolutionizes the way people plan, book and experience trips. From online booking platforms to destination guides, we create user-friendly interfaces and integrate third-party services for seamless travel experiences. ',
  background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709798538/QubicGen/Web%20Development/Who%20We%20Serve/high-angle-travel-items-arrangement_23-2149617688_yzjf94.jpg"
  },

    ]);

  // This is for rpa offering cards




  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsNavFixed(scrollPosition >  600);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
 


  
  return (
    
    <>

    {/* This is rpalist starts */}

    <div className="banking-main-list" >
    <nav style={{ position: isNavFixed ? 'fixed' : 'relative', top: isNavFixed ? 70 : 0, zIndex: 1, width: '98vw', backgroundColor: "rgba(0, 0, 0, 0.4)", backdropFilter: "blur(20px)" }}>
<Link to="overview" spy={true} smooth={true} offset={-150} duration={200}><li>Overview</li></Link>
<Link to="whoweserve" spy={true} smooth={true} offset={-150} duration={200}><li>Service Offerings</li></Link>
<Link to="serviceofferings" spy={true} smooth={true} offset={-180} duration={200}><li>Who we serve</li></Link>
<Link to="querie" spy={true} smooth={true} offset={-200} duration={200}><li>Queries</li></Link>
</nav>

    </div>
    <hr />
   
   <div id='overview'>
    
   </div>

    <div className="container" style={{ color: 'white',marginTop:'50px' }} data-aos="fade-up"  >
    <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder', color: 'white' }}  > Overview</h1>




  
    <div className="row featurette" bis_skin_checked="1" style={{marginTop:'100px'}}  >
   
   <div className="col-md-7" bis_skin_checked="1">
     <h1 className="featurette-heading fw-normal lh-1" style={{fontSize:'40px',padding:'20px',fontWeight:'bolder'}}>Building Dreams, One Pixel at a Time: Your Journey to Online Brilliance Begins Here</h1>
     <p className="lead" id='leadtext'>Our web development services are crafted to breathe life into your online vision, combining creativity with technical prowess to create stunning websites that captivate and inspire. From sleek and intuitive designs to robust functionality, we're here to transform your online presence and propel your business to new heights in the digital landscape.</p>
   </div>
   <div className="col-md-5" bis_skin_checked="1">
     <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709795794/QubicGen/Web%20Development/Overview/medium-shot-woman-working-laptop_23-2150323516_ms6dwf.jpg"  alt="" />
   </div>
 </div>
    </div>

    {/* This is rpalist ends */}

    <div id='whoweserve'>
    
    </div>
  
    

    <div style={{ color: 'white', marginLeft: '40px' ,marginTop:'130px'}} data-aos="fade-up"  >
     
     <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }}> Service Offerings</h1>

     <div className="container" style={{marginTop:'100px'}}>
       <div className="row" >

         {
           Webofferings.map((item) => {
             return (
               <div className="col" >
                 <div className="card" id='offeringscards' style={{ height: '14rem', width: '18rem', color: 'white' }}>
                   <div className="card-body">
                     <h5 className="card-title" style={{ fontSize: '20px' }}>{item.title}</h5>
                     <h6 className="card-subtitle mb-2 text-body-secondary">{item.subtitle}</h6>
                     <p className="card-text" style={{ fontSize: '13px' }}>{item.description}</p>

                   </div>
                 </div>
                 <br />
               </div>
             )
           })
         }







       </div>
       <br />

     </div>
   </div>






    {/* This is rpa offering start */}



    {/* This is who we server starts */}
     <div id='serviceofferings'>
    
    </div>
        <h1 className='text-white' style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }} > Who we Serve</h1>

        <div className="grid grid-flow-row auto-rows-max ml-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-24 ">
          {Webserve.map((serve) => {
         return (
            <div className="col">
               {/* Card component */}
               <div className="card mt-8">
                  <div className="card-inner">
                     {/* Front of the card with background image and overlay */}
                     <div className="card-front" style={{ background: `url('${serve.background}') center/cover` }}>
                        <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
                        <p style={{ fontWeight: 'bolder', color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>{serve.title}</p>
                     </div>
                     {/* Back of the card with additional information */}
                     <div className="card-back" style={{ backgroundColor: '#2f2f2f', color: '#000', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <p style={{ fontSize: '12px' }}>{serve.description}</p>
                     </div>
                     <br />
                  </div>
               </div>
            </div>
         );
      })}
</div>

    {/* This is who we server ends */}
    <div className="queries" id='querie' style={{marginTop:'50px'}}>
      <Queries />
    </div>






  </>
  )
}

export default Weblist