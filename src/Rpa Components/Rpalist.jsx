import React, { useEffect, useRef, useState } from 'react'
import './Rpa.css'
import 'aos/dist/aos.css';


const Rpalist = () => {
  const overviewRef = useRef(null);
  const serveRef = useRef(null);
  const caseStudiesRef = useRef(null);
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
    background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709019776/QubicGen/person-using-ai-tool-job_3_spimvo.jpg",

    description: "Transform your manufacturing operations with our RPA solutions. From supply chain management to production planning, we automate processes to optimize efficiency and drive innovation in manufacturing." 

  }, 

  { 

    title: "Retail", 
    background:"https://res.cloudinary.com/dightbmyi/image/upload/v1709018276/QG/different-people-taking-care-warehouse-logistics_2_bscg7d.jpg",

    description: "Empower your retail business with our RPA services. From inventory management to customer service, we automate tasks to streamline operations and deliver exceptional shopping experiences." 

  }, 

  { 

    title: "Government", 
    background: "https://res.cloudinary.com/dightbmyi/image/upload/v1709018739/QG/business-people-working-together-table_2_kev6sw.jpg",

    description: "Modernize government processes with our RPA solutions. From citizen services to administrative tasks, we automate workflows to improve efficiency, transparency, and citizen satisfaction." 

  }, 

  { 

    title: "Transportation", 
    background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709019299/QubicGen/Gemini_Generated_Image_2_ycuyqd.jpg",

    description: "Drive efficiency in transportation with our RPA services. From logistics management to fleet operations, we automate processes to optimize performance and enhance customer service." 

  }, 

  { 

    title: "BFSI", 
    background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709018779/QubicGen/34355879_sl_020622_4930_25_1_m1ey3b.jpg",

    description: "Transform BFSI operations with our RPA solutions. From compliance management to customer support, we automate tasks to increase productivity, reduce costs, and ensure regulatory compliance." 

  }, 

  { 

    title: "Energy & Utilities", 
    background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709018348/QubicGen/solar-panels-wind-mills-sunset-sustainable-energy-eco-environment_1_xonapt.jpg",

    description: "Optimize energy and utility operations with our RPA services. From meter reading to billing processes, we automate tasks to improve accuracy, reduce errors, and enhance service delivery for utilities providers." 

  },{ 

    title: "Automation Testing" ,
    background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709020099/QubicGen/standard-quality-control-collage-concept_1_bhcliq.jpg",

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
    <nav style={{ position: isNavFixed ? 'fixed' : 'relative', top: isNavFixed ? 50 : 0, zIndex: 1, width: '90vw',backgroundColor:"rgba(0, 0, 0, 0.9)" }}>
          <li onClick={() => scrollToRef(overviewRef)}>Overview</li>  
          <li onClick={() => scrollToRef(serveRef)}>Our Offerings</li>
          <li onClick={() => scrollToRef(caseStudiesRef)}>Who we serve</li>
          {/* <li onClick={() => scrollToRef(leadershipRef)}>Meet our leadership</li> */}
        </nav>
    </div>
    <hr />
    <br />
    <br />
    
    <div className="container"  style={{color:'white'}} ref={overviewRef } data-aos = "fade-up">
    <div className="row featurette" bis_skin_checked="1" >
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
<div style={{ color: 'white' }} ref={serveRef} data-aos = "fade-up" >
                    <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }} > Our Offerings</h1>
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
<div style={{ color: 'white' }} ref={caseStudiesRef} data-aos = "zoom-in" >
                    <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }} > Who we Serve</h1>
                    <br />
                    <div className="container">
                        <div className="row" >
                            
                                {
                                    Weserve.map((serve) => {
                                        return (
                                        <div className="col" >
                                           <div className="card">
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


     



    
    </>
  )
}

export default Rpalist