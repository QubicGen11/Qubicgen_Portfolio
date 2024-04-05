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
      description: 'Automating manual, rule-based tasks such as data entry, form filling, report generation and data migration using RPA tools.',
    },
    {
      title: 'Integration Services',
      subtitle: 'Card subtitle',
      description: 'Integrating RPA solutions with existing systems, applications and databases to enable seamless data exchange and automation across multiple platforms.',
    },
    {
      title: 'Bot Monitoring and Maintenance',
      subtitle: 'Card subtitle',
      description: 'Monitoring bot performance, handling exceptions, troubleshooting issues and ensuring the smooth functioning of RPA solutions.',
    },
    {
      title: 'Process Reengineering',
      subtitle: 'Card subtitle',
      description: 'Redesigning processes to optimize efficiency and maximize the benefits of RPA implementation. This may involve redefining workflows, eliminating bottlenecks and standardizing procedures.',
    },
    {
      title: 'Analytics and Reporting',
      subtitle: 'Card subtitle',
      description: 'Utilizing RPA-generated data to generate insights, track performance metrics and produce reports that help in decision-making and process improvement.',
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
      background:"https://res.cloudinary.com/defsu5bfc/image/upload/v1710063317/QubicGen/RPA/Who%20We%20Serve/rpa-robotic-process-automation-concept_yagj1c_tezko6.png", 
      description: "Harnessing the power of Robotic Process Automation (RPA), we streamline healthcare operations, from appointment scheduling to claims processing, to enhance efficiency and elevate patient care. Let us help you unlock the full potential of automation in healthcare." 
    }, 
    { 
      title: "Manufacturing", 
      background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709797222/QubicGen/RPA/Who%20We%20Serve/person-using-ai-tool-job_23-2150711477_nrtws6.jpg",
      description: "Transform your manufacturing operations with our RPA solutions. From supply chain management to production planning, we automate processes to optimize efficiency and drive innovation in manufacturing." 
    }, 
    { 
      title: "Retail", 
      background:"https://res.cloudinary.com/defsu5bfc/image/upload/v1709797308/QubicGen/RPA/Who%20We%20Serve/grocery-store-aisle-filled-with-healthy-snacks-drinks-readytoeat-meals-vegans_124507-148724_rl5fey.jpg",
      description: "Empower your retail business with our RPA services. From inventory management to customer service, we automate tasks to streamline operations and deliver exceptional shopping experiences." 
    }, 
    { 
      title: "Government", 
      background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709797371/QubicGen/RPA/Who%20We%20Serve/business-people-working-together-table_2_kev6sw_vcjy2b.jpg",
      description: "Modernize government processes with our RPA solutions. From citizen services to administrative tasks, we automate workflows to improve efficiency, transparency and citizen satisfaction." 
    },
    {
      title: "Transportation", 
      background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709797406/QubicGen/RPA/Who%20We%20Serve/truck-with-white-trailer-that-says-scania-side_123827-23486_rspfvz.jpg",
      description: "Drive efficiency in transportation with our RPA services. From logistics management to fleet operations, we automate processes to optimize performance and enhance customer service." 
    }, 
    { 
      title: "BFSI", 
      background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709797451/QubicGen/RPA/Who%20We%20Serve/digital-rupee-inr-indian-currency-golden-coin-background_1017-41094_znzqpe.jpg",
      description: "Transform BFSI operations with our RPA solutions. From compliance management to customer support, we automate tasks to increase productivity, reduce costs and ensure regulatory compliance." 
    }, 
    { 
      title: "Energy & Utilities", 
      background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709797490/QubicGen/RPA/Who%20We%20Serve/solar-panels-wind-mills-sunset-sustainable-energy-eco-environment_1268-27834_eurq4c.jpg",
      description: "Optimize energy and utility operations with our RPA services. From meter reading to billing processes, we automate tasks to improve accuracy, reduce errors and enhance service delivery for utilities providers." 
    },{ 
      title: "Automation Testing" ,
      background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709797531/QubicGen/RPA/Who%20We%20Serve/standard-quality-control-collage-concept_23-2149595830_bhlji2.jpg",
     description: "In the field of automation testing, our RPA services automate test case generation, execution and reporting. By integrating RPA into testing processes, organizations can accelerate testing cycles, increase test coverage and improve overall software quality." 
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
<Link className='hover:cursor-pointer' to="overview"  spy={true} smooth={true} offset={-150} duration={200}><li className="nav-item">Overview</li></Link>
<Link className='hover:cursor-pointer' to="whoweserve" spy={true} smooth={true} offset={-150} duration={200}><li>Service Offerings</li></Link>
<Link className='hover:cursor-pointer' to="serviceofferings" spy={true} smooth={true} offset={-180} duration={200}><li>Who we serve </li></Link>
<Link className='hover:cursor-pointer' to="querie" spy={true} smooth={true} offset={-200} duration={200}><li>Queries</li></Link>
</nav>
    </div>
    <hr />
   
   <div id='overview' className='active'>
    
   </div>

    <div className="container" style={{ color: 'white',marginTop:'50px' }} data-aos="fade-up"  >
    <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder', color: 'white' }}  > Overview</h1>




  
      <div className="row featurette" bis_skin_checked="1" style={{marginTop:'100px'}}  >

        <div className="col-md-7" bis_skin_checked="1">
          <h1 className="featurette-heading fw-normal lh-1" style={{ fontSize: '40px', padding: '20px', fontWeight: 'bolder' }}>Automate, Optimize, Excel: Welcome to RPA Innovation</h1>
          <p className="lead" id='leadtext'>Embrace the transformative power of Robotic Process Automation (RPA) to unlock your business potential. With RPA, streamline workflows, enhance efficiency and propel your organization towards accelerated growth and success.</p>
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
     
     <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }}> Service Offerings</h1>

     <div className="container" style={{marginTop:'100px'}}>
<div className="grid grid-flow-row auto-rows-max ml-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-24 ">
         {
           Cardsarr.map((item) => {
             return (
               <div className="col -ml-14" >
                 <div className="card" id='offeringscards' style={{ height: '14rem', width: '18rem', color: 'white' }}>
                   <div className="card-body">
                     <h5 className="card-title" style={{ fontSize: '20px' }}>{item.title}</h5>
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
          {Weserve.map((serve) => {
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

export default Rpalist