import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css';
import Queries from './Queries';


const Outsourcinglist = () => {
  const overviewRef = useRef(null);
  const serveRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const queriesRef = useRef(null);
  const [isNavFixed, setIsNavFixed] = useState(false);
  
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // This is for rpa offering cards

const [OutsourcingServe, setOutsourcingServe] = useState([
  {
      title:'IT Support and Help Desk Services',
      description: 'Remote technical support and help desk assistance for efficient troubleshooting and user guidance, ensuring seamless operation of IT systems.',
      background: "https://img.freepik.com/free-photo/colleagues-with-headphones-working-call-center-office_23-2149256154.jpg?t=st=1709277103~exp=1709280703~hmac=2fc1f610e173a6573060395f855f4881c80c81e1aadf4d145c92eca3a83b61bf&w=740"
      },
      
      {
      title: 'Software Development and Maintenance',
      description: 'Outsourcing software development projects to skilled developers, coupled with ongoing maintenance and support services for sustained functionality and performance.',
      background: "https://img.freepik.com/free-photo/diverse-programmers-discussing-about-html-code-compiling-discovers-errors-standing-front-multiple-screens-startup-office-software-developers-working-server-interface-development_482257-64363.jpg?t=st=1709277167~exp=1709280767~hmac=ea690ab69a415f5bba910b25d9280e64727d77afae8b9ee0002571346d0df12a&w=740"
      },
      {
      title: 'Infrastructure Management',
      description: 'Efficient management and maintenance of IT infrastructure components to ensure optimal performance and reliability, with proactive monitoring and timely upgrades.',
      background: "https://img.freepik.com/free-photo/man-holding-smartphone-with-apartment-buildings-hologram_23-2149369107.jpg?t=st=1709277220~exp=1709280820~hmac=91f085a8adad1466aee665f783b3f5050719bc12efe7bd6d4b3caca1ea355de4&w=740"
      },
      {
      title: 'Cloud Services',
      description: 'Assistance in migrating to and managing cloud-based platforms, optimizing resources, and ensuring security for scalable and cost-effective IT solutions.',
      background: "https://img.freepik.com/free-photo/saas-concept-collage_23-2149399281.jpg?t=st=1709277284~exp=1709280884~hmac=365e22cc657251c2e56fd4d0e4caf4d457cbe4f17e2588ea39240816e3679143&w=740"
      },
      {
      title: 'Data Management and Analytics',
      description :'Outsourcing data management tasks and providing analytics services to extract actionable insights, supporting informed decision-making and business growth.',
      background: "https://img.freepik.com/free-photo/office-workers-using-finance-graphs_23-2150408661.jpg?t=st=1709277380~exp=1709280980~hmac=3e96931aa0395e1ab63d8246b095e2714dd2ade8af12823ef0f1f4698e56f547&w=740"
      },
      {
      title: 'Business Process Outsourcing (BPO)',
      description: 'Outsourcing non-core business processes such as customer support and finance to specialized providers, streamlining operations and enhancing efficiency.',
      background: "https://img.freepik.com/premium-photo/emphasizing-night-shift-call-center-ambiance_1127216-861.jpg?w=826"
      },
      {
      title: 'Quality Assurance and Testing',
      description: 'Outsourcing software testing tasks for thorough quality assurance, ensuring reliability, usability, and performance of software applications.',
      background: "https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595834.jpg?t=st=1709278401~exp=1709282001~hmac=cbd70fcaa5e9e93c3d7b271cab619779670a9c73f4ebe5aa801aef593c85d2ec&w=740"
      },
      {
      title: 'Project Management',
      description: 'Outsourcing project management tasks to experienced professionals for efficient planning, execution, and delivery of IT projects, ensuring successful outcomes and client satisfaction.',
      background: "https://img.freepik.com/free-photo/multiethnic-businesspeople-discussing-financial-company-solution-sitting-conference-table_482257-10542.jpg?t=st=1709278472~exp=1709282072~hmac=0fd8e564465adbbc0a9915bf1f457d4eab6880eaaa0ef84822f6a557507a3bfd&w=740"
      },
      {
      title: 'IT Consulting and Advisory',
      description: 'Strategic IT consulting services and advisory on technology trends and best practices to drive digital transformation and innovation, aligning technology initiatives with business objectives.',
      background: "https://img.freepik.com/free-photo/business-people-working-using-technology-connect-with-others_23-2149369106.jpg?t=st=1709279021~exp=1709282621~hmac=3fbd141a2fe81c2341a16fddee3ca2b49a62f7bac8c7e8e9ce773bc09f678a3b&w=740"
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
        <h1 className="featurette-heading fw-normal lh-1" style={{fontSize:'40px',padding:'20px',fontWeight:'bolder'}}>Outsource with Confidence: Partnering for Success in Every Endeavor. Let Us Handle the Workload, While You Focus on Your Vision.</h1>
        <p className="lead" id='leadtext'>Discover the power of seamless outsourcing solutions tailored to your business needs. From streamlining operations to expanding capabilities, we handle the heavy lifting so you can stay focused on driving success.</p>
      </div>
      <div className="col-md-5" bis_skin_checked="1">
        <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709281234/QubicGen/human-resources-concept-with-hand_fmwmbk.jpg"  alt="" />
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
      <br />
                    <br />
                    {/* <div className="container">
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

                    </div> */}
</div>
{/* This is rpa offering ends */}


{/* This is who we server starts */}
<div style={{ color: 'white',marginLeft:'40px' }} ref={caseStudiesRef} data-aos = "zoom-in"  >
<br />
      <br />
      <br />
      <br />
                    <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }} > Our Offerings</h1>
      <br />
      <br />
      <br />
                    <br />
                    <div className="container" >
                        <div className="row"  >
                            
                                {
                                    OutsourcingServe.map((serve) => {
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

export default Outsourcinglist