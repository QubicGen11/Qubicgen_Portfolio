import React, { useEffect, useRef, useState } from 'react'
import './Rpa.css'
import 'aos/dist/aos.css';
import Queries from './Queries';


const Rpalist = () => {
  const overviewRef = useRef(null);
  const serveRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const queriesRef = useRef(null);
  const [isNavFixed, setIsNavFixed] = useState(false);
  
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // This is for rpa offering cards
  const [Cardsarr, setCardsarr] = useState([
    {
        title: 'Process Assessment and Consulting',
        subtitle: 'Card subtitle',
        description: 'Analyzing current processes to identify areas for automation and providing recommendations on implementing RPA solutions.',
    },
    {
        title: 'Process Automation',
        subtitle: 'Card subtitle',
        description: 'Automating manual, rule-based tasks such as data entry, form filling, report generation, and data migration using RPA tools.',
    },
    {
        title: 'Integration Services',
        subtitle: 'Card subtitle',
        description: 'Integrating RPA solutions with existing systems, applications, and databases to enable seamless data exchange and automation across multiple platforms.',
    },
    {
        title: 'Bot Monitoring and Maintenance',
        subtitle: 'Card subtitle',
        description: 'Monitoring bot performance, handling exceptions, troubleshooting issues, and ensuring the smooth functioning of RPA solutions.',
    },
    {
        title: 'Process Reengineering',
        subtitle: 'Card subtitle',
        description: 'Redesigning processes to optimize efficiency and maximize the benefits of RPA implementation. This may involve redefining workflows, eliminating bottlenecks, and standardizing procedures.',
    },
    {
        title: 'Analytics and Reporting',
        subtitle: 'Card subtitle',
        description: 'Utilizing RPA-generated data to generate insights, track performance metrics, and produce reports that help in decision-making and process improvement.',
    },
    {
        title: 'Cognitive Automation',
        subtitle: 'Card subtitle',
        description: 'Integrating artificial intelligence (AI) technologies such as natural language processing (NLP) and machine learning (ML) with RPA to enable bots to handle more complex tasks.',
    },
    {
        title: 'Training and Support',
        subtitle: 'Card subtitle',
        description: 'Providing training to employees on using RPA tools and offering ongoing support to address any queries or issues related to RPA implementation.',
    },
]);

const [Weserve, setWeserve] = useState([ 

  { 

    title: "HealthCare",
    background:"https://media.istockphoto.com/id/1160014667/photo/rpa-robotic-process-automation-concept.webp?b=1&s=170667a&w=0&k=20&c=2zz-boDvnOZYt3CdJ0M8EMRreNaCKa6vxAAjFhbdXSE=", 

    description: "Harnessing the power of Robotic Process Automation (RPA), we streamline healthcare operations, from appointment scheduling to claims processing, to enhance efficiency and elevate patient care. Let us help you unlock the full potential of automation in healthcare." 

  }, 

  { 

    title: "Manufacturing", 
    background: "https://img.freepik.com/free-photo/person-using-ai-tool-job_23-2150711477.jpg?t=st=1709021125~exp=1709024725~hmac=c496cf767c1179e978669d6d16fadf52c9bbf1113f4f36b988815cfd301db900&w=740",

    description: "Transform your manufacturing operations with our RPA solutions. From supply chain management to production planning, we automate processes to optimize efficiency and drive innovation in manufacturing." 

  }, 

  { 

    title: "Retail", 
    background:"https://img.freepik.com/free-photo/shopping-cart-full-products-inside-supermarket_123827-28165.jpg?t=st=1709030356~exp=1709033956~hmac=22ec31898c73439e24dba822fa9b5703a5ee62716cc01e5f7598f1f247e828cf&w=996",

    description: "Empower your retail business with our RPA services. From inventory management to customer service, we automate tasks to streamline operations and deliver exceptional shopping experiences." 

  }, 

  { 

    title: "Government", 
    background: "https://img.freepik.com/free-photo/neo-classical-courthouse-facade-illuminated-night-generated-by-ai_188544-35360.jpg?t=st=1709030429~exp=1709034029~hmac=a112b3a8f009dc3e5f3b011c6ecbcaa249c3ff2a6bab778884bd9c7ffd6b6e8a&w=1060",

    description: "Modernize government processes with our RPA solutions. From citizen services to administrative tasks, we automate workflows to improve efficiency, transparency, and citizen satisfaction." 

  }, 

  { 

    title: "Transportation", 
    background: "https://img.freepik.com/free-photo/truck-with-white-trailer-that-says-scania-side_123827-23486.jpg?t=st=1709021088~exp=1709024688~hmac=435df176298c401cf02faac7e0202c0492eaf045a76be3cbff7e92c00000fcee&w=740",

    description: "Drive efficiency in transportation with our RPA services. From logistics management to fleet operations, we automate processes to optimize performance and enhance customer service." 

  }, 

  { 

    title: "BFSI", 
    background: "https://img.freepik.com/free-vector/digital-rupee-inr-indian-currency-golden-coin-background_1017-41094.jpg?t=st=1709018630~exp=1709022230~hmac=11d1012f62e248200acd78c0d1ede0c2bf718786b578350b181a16f7a03a694c&w=740",

    description: "Transform BFSI operations with our RPA solutions. From compliance management to customer support, we automate tasks to increase productivity, reduce costs, and ensure regulatory compliance." 

  }, 

  { 

    title: "Energy & Utilities", 
    background: "https://img.freepik.com/free-photo/solar-panels-wind-mills-sunset-sustainable-energy-eco-environment_1268-27834.jpg?t=st=1709020949~exp=1709024549~hmac=01951e78e2969e2426f5a027db27faaa45ee122f37abbd38bfca06767c39c795&w=740",

    description: "Optimize energy and utility operations with our RPA services. From meter reading to billing processes, we automate tasks to improve accuracy, reduce errors, and enhance service delivery for utilities providers." 

  },{ 

    title: "Automation Testing" ,
    background: "https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595830.jpg?t=st=1709018744~exp=1709022344~hmac=2ef72dbf6a55aa5e911a3f4abad872fc0de080ed02b77fc8c9e6db1f7a15054d&w=740",

   description: "In the field of automation testing, our RPA services automate test case generation, execution, and reporting. By integrating RPA into testing processes, organizations can accelerate testing cycles, increase test coverage, and improve overall software quality." 

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
    <nav style={{ position: isNavFixed ? 'fixed' : 'relative', top: isNavFixed ? 70 : 0, zIndex: 1, width: '98vw',backgroundColor:"rgba(0, 0, 0, 0.9)",backdropFilter:"blur(20px)" }}>
          <li onClick={() => scrollToRef(overviewRef)}>Overview</li>  
          <li onClick={() => scrollToRef(serveRef)}>Our Offerings</li>
          <li onClick={() => scrollToRef(caseStudiesRef)}>Who we serve</li>
          <li onClick={() => scrollToRef(queriesRef)}>Queries</li>
          {/* <li onClick={() => scrollToRef(leadershipRef)}>Meet our leadership</li> */}
        </nav>
    </div>
    <hr />
    <br />
    <br />
    
    <div className="container"  style={{color:'white'}}  data-aos = "fade-up" ref={overviewRef }>

      
    <br />
      <br />
     
    <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }}> Overview</h1>
      <br />
      <br />
      <br />
      <br />
    <div className="row featurette" bis_skin_checked="1"  >
   
      <div className="col-md-7" bis_skin_checked="1">
        <h1 className="featurette-heading fw-normal lh-1" style={{fontSize:'40px',padding:'20px',fontWeight:'bolder'}}>Automate, Optimize, Excel: Welcome to RPA Innovation</h1>
        <p className="lead" id='leadtext'>Embrace the transformative power of Robotic Process Automation (RPA) to unlock your business potential. With RPA, streamline workflows, enhance efficiency, and propel your organization towards accelerated growth and success.</p>
      </div>
      <div className="col-md-5" bis_skin_checked="1">
        <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1708941106/QubicGen/globalization-technology-concept-with-3d-rendering-robot-with-global-connection_493806-2305_1_mf1afn.jpg"  alt="" />
      </div>
    </div>
    </div>

{/* This is rpalist ends */}


   
{/* This is rpa offering start */}
<div style={{ color: 'white',marginLeft:'40px' }}  data-aos = "fade-up"  ref={serveRef} >
<br />
      <br />
      <br />
      <br />
      <br />
                    <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }}> Our Offerings</h1>
      <br />
      <br />
      <br />
      <br />
                    <br />
                    <div className="container">
                        <div className="row" >
                            
                                {
                                    Cardsarr.map((item) => {
                                        return (
                                        <div className="col" >
                                            <div className="card" id='offeringscards' style={{ height: '14rem', width: '18rem', backgroundColor: '#242424', color: 'white' }}>
                                                <div className="card-body">
                                                    <h5 className="card-title" style={{fontSize:'20px'}}>{item.title}</h5>
                                                    <h6 className="card-subtitle mb-2 text-body-secondary">{item.subtitle}</h6>
                                                    <p className="card-text" style={{fontSize:'13px'}}>{item.description}</p>

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
{/* This is rpa offering ends */}


{/* This is who we server starts */}
<div style={{ color: 'white',marginLeft:'40px' }} ref={caseStudiesRef} data-aos = "zoom-in"  >
<br />
      <br />
      <br />
      <br />
                    <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }} > Who we Serve</h1>
      <br />
      <br />
      <br />
                    <br />
                    <div className="container" >
                        <div className="row"  >
                            
                                {
                                    Weserve.map((serve) => {
                                        return (
                                        <div className="col" >
                                           <div className="card" >
  <div className="card-inner">
    <div className="card-front" style={{ background: `url('${serve.background}')`, backgroundPosition:'center',objectFit:'cover' }}>
      <p>{serve.title}</p>
    </div>
    <div className="card-back">
      <p>{serve.description}</p>
    </div>
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

{/* This is who we server ends */}

<div className="queries" ref={queriesRef}>
  <Queries/>
</div>


     



    
    </>
  )
}

export default Rpalist