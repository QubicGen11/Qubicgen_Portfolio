import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import Queries from '../Industries Components/Banking Components/Queries';

const Testinglist = () => {
  const overviewRef = useRef(null);
  const serveRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const queriesRef = useRef(null);

  const [isNavFixed, setIsNavFixed] = useState(false);
  
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // This is for rpa offering cards
  const [TestingOffers, setTestingOffers] = useState([
    {
        title: 'Functional Testing',
        description: 'Verifying that the software functions as intended and meets specified requirements. This includes testing individual features, user interfaces, and business processes to validate expected behavior.'
    },
    {
        title: 'Regression Testing',
        description: 'Re-running test cases to ensure that recent code changes have not introduced new defects or unintended side effects. This helps maintain the stability and integrity of the software across multiple releases.'
    },
    {
        title: 'User Acceptance Testing (UAT)',
        description: 'Validating the software from an end-user perspective to ensure that it meets business requirements and user expectations. UAT is typically conducted by users or stakeholders before the software is deployed into production.'
    },
    {
        title: 'Performance Testing',
        description: 'Assessing the responsiveness, scalability, and stability of the software under various workload conditions. This includes load testing, stress testing, and scalability testing to identify performance bottlenecks and optimize system performance.'
    },
    {
        title: 'Security Testing',
        description: 'Identifying vulnerabilities and weaknesses in the software that could be exploited by malicious actors. This includes conducting security assessments, penetration testing, and vulnerability scanning to ensure that sensitive data and systems are protected from unauthorized access and attacks.'
    },
    {
        title: 'Compatibility Testing ',
        description: "Evaluating the software's compatibility with different operating systems, web browsers, devices, and network environments. This ensures that the software functions correctly across various platforms and configurations."
    },
    {
        title: 'Automation Testing ',
        description: 'Automating repetitive test cases and scenarios using testing tools and frameworks to improve efficiency, consistency, and coverage. Automation testing includes functional automation, regression automation, and performance automation.'
    },
    {
      title: 'Integration Testing' ,
description: 'Testing the interactions and compatibility between different modules, components, or systems to ensure seamless integration.'
    }
    
]);

const [TestingServe, setTestingServe] = useState([
  {
      title:'HealthCare',
      description: 'Ensure healthcare system reliability, security, and compliance with our testing services for electronic health records and telemedicine platforms.',
      background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710141503/QubicGen/Testing/Who%20We%20Serve/biotechnology-specialist-laboratory-conducting-experiments_23-2150468696_bce5ur.jpg"
      },
      {
      title: 'Finance',
      description :'Mitigate risks and ensure financial system integrity through our thorough testing solutions for banking applications and trading platforms.',
      background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710141682/QubicGen/Testing/Who%20We%20Serve/blue-money-business-graph-finance-chart-diagram-economy-3d-coin-background-with-growth-financial-data-concept-investment-market-profit-bar-success-market-stock-technology-currency-report_79161-2359_hur7jd.jpg"
      },
      {
      title: 'Retail',
      description: 'Deliver seamless shopping experiences and drive customer satisfaction with our end-to-end testing services for e-commerce websites and mobile apps.',
      background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710141633/QubicGen/Testing/Who%20We%20Serve/clear-view-shopping-cart-with-supermarket-s-blurry-refrigerator-aisle-illuminated-by-bokeh-lights_91128-3496_pj0cms.jpg"
      },
      {
      title: 'Transportation',
      description: 'Optimize operations and ensure passenger safety with our comprehensive testing solutions for transportation ticketing systems and fleet management software.',
      background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710141660/QubicGen/Testing/Who%20We%20Serve/container-truck-ship-port-ai-generated-image_511042-612_iizmby.jpg"
      }
  
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
<Link to="whoweserve" spy={true} smooth={true} offset={-150} duration={200}><li>Who we serve</li></Link>
<Link to="serviceofferings" spy={true} smooth={true} offset={-180} duration={200}><li>Service Offerings</li></Link>
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
     <h1 className="featurette-heading fw-normal lh-1" style={{fontSize:'40px',padding:'20px',fontWeight:'bolder'}}>Testing Unleashed: Elevate Your Software with Assurance Beyond Measure</h1>
     <p className="lead" id='leadtext'>Welcome to the epitome of quality assurance. Our testing services ensure that every aspect of your software or application is scrutinized, polished, and perfected. From functionality to performance, we leave no stone unturned, delivering solutions that exceed expectations and inspire confidence in your digital endeavors.</p>
   </div>
   <div className="col-md-5" bis_skin_checked="1">
     <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1710141444/QubicGen/Testing/Overview/software-tester-concept-illustration_114360-12815_wgmqbp.jpg"  alt="" />
   </div>
 </div>
    </div>

    {/* This is rpalist ends */}

    <div id='whoweserve'>
    
    </div>
  
        
    

     <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder',color:'white' }}> Our Offerings</h1>



     <div className="grid grid-flow-row auto-rows-max ml-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-24 ">
     {
           TestingOffers.map((item) => {
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



    {/* This is rpa offering start */}



    {/* This is who we server starts */}
     <div id='serviceofferings'>
    
    </div>

    <div style={{ color: 'white', marginLeft: '40px',marginTop:'100px' }} ref={caseStudiesRef} data-aos="zoom-in"  >
        
        <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }} > Who we Serve</h1>
     
        <div className="container" style={{marginTop:'100px'}}>
   <div className="row">
      {/* Mapping over the 'Weserve' array */}
      {TestingServe.map((serve) => {
         return (
            <div className="col">
               {/* Card component */}
               <div className="card">
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
                  </div>
               </div>
               <br />
            </div>
         );
      })}
   </div>
   <br />
</div>

          <br />

        </div>

    {/* This is who we server ends */}
    <div className="queries" id='querie' style={{marginTop:'50px'}}>
      <Queries />
    </div>






  </>
  )
}

export default Testinglist