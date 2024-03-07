import React, { useEffect, useRef, useState } from 'react'
import './Rpa.css'
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import Queries from '../Industries Components/Banking Components/Queries';


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
      background: "https://media.istockphoto.com/id/1160014667/photo/rpa-robotic-process-automation-concept.webp?b=1&s=170667a&w=0&k=20&c=2zz-boDvnOZYt3CdJ0M8EMRreNaCKa6vxAAjFhbdXSE=",

      description: "Harnessing the power of Robotic Process Automation (RPA), we streamline healthcare operations, from appointment scheduling to claims processing, to enhance efficiency and elevate patient care. Let us help you unlock the full potential of automation in healthcare."

    },

    {

      title: "Manufacturing",
      background: "https://img.freepik.com/free-photo/person-using-ai-tool-job_23-2150711477.jpg?t=st=1709021125~exp=1709024725~hmac=c496cf767c1179e978669d6d16fadf52c9bbf1113f4f36b988815cfd301db900&w=740",

      description: "Transform your manufacturing operations with our RPA solutions. From supply chain management to production planning, we automate processes to optimize efficiency and drive innovation in manufacturing."

    },

    {

      title: "Retail",
      background: "https://img.freepik.com/free-photo/shopping-cart-full-products-inside-supermarket_123827-28165.jpg?t=st=1709030356~exp=1709033956~hmac=22ec31898c73439e24dba822fa9b5703a5ee62716cc01e5f7598f1f247e828cf&w=996",

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

    }, {

      title: "Automation Testing",
      background: "https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595830.jpg?t=st=1709018744~exp=1709022344~hmac=2ef72dbf6a55aa5e911a3f4abad872fc0de080ed02b77fc8c9e6db1f7a15054d&w=740",

      description: "In the field of automation testing, our RPA services automate test case generation, execution, and reporting. By integrating RPA into testing processes, organizations can accelerate testing cycles, increase test coverage, and improve overall software quality."

    }

  ]);

  // This is for rpa offering cards




  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsNavFixed(scrollPosition > 600);
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
          <h1 className="featurette-heading fw-normal lh-1" style={{ fontSize: '40px', padding: '20px', fontWeight: 'bolder' }}>Automate, Optimize, Excel: Welcome to RPA Innovation</h1>
          <p className="lead" id='leadtext'>Embrace the transformative power of Robotic Process Automation (RPA) to unlock your business potential. With RPA, streamline workflows, enhance efficiency, and propel your organization towards accelerated growth and success.</p>
        </div>
        <div className="col-md-5" bis_skin_checked="1">
          <img src="https://img.freepik.com/free-photo/rpa-concept-with-screen-bright-light_23-2149311912.jpg?t=st=1708944002~exp=1708947602~hmac=1c12623ab682bb1c20b79a27522355531983153c0795f02f9c7f3cea9053de66&w=740    " alt="" />
        </div>
      </div>
    </div>

    {/* This is rpalist ends */}

    <div id='whoweserve'>
    
    </div>
  
    

    <div style={{ color: 'white', marginLeft: '40px' ,marginTop:'130px'}} data-aos="fade-up"  >
     
     <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }}> Our Offerings</h1>

     <div className="container" style={{marginTop:'100px'}}>
       <div className="row" >

         {
           Cardsarr.map((item) => {
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

    <div style={{ color: 'white', marginLeft: '40px',marginTop:'100px' }} ref={caseStudiesRef} data-aos="zoom-in"  >
        
        <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }} > Who we Serve</h1>
     
        <div className="container" style={{marginTop:'100px'}}>
   <div className="row">
      {/* Mapping over the 'Weserve' array */}
      {Weserve.map((serve) => {
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

export default Rpalist