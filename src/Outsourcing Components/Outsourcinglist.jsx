import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import Queries from '../Industries Components/Banking Components/Queries';


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
        background: "https://qubicgen-prod.s3.us-east-1.amazonaws.com/Services/Outsourcing/Outsourcing_Servings/ithelp&desktop.jpeg"
        },        
        {
        title: 'Software Development and Maintenance',
        description: 'Outsourcing software development projects to skilled developers, coupled with ongoing maintenance and support services for sustained functionality and performance.',
        background: "https://qubicgen-prod.s3.us-east-1.amazonaws.com/Services/Outsourcing/Outsourcing_Servings/software%20development%20and%20maintainance.jpg"
        },

        {
        title: 'Cloud Services',
        description: 'Assistance in migrating to and managing cloud-based platforms, optimizing resources and ensuring security for scalable and cost-effective IT solutions.',
        background: "https://qubicgen-prod.s3.us-east-1.amazonaws.com/Services/Outsourcing/Outsourcing_Servings/cloudservice.jpg"
        },
        {
        title: 'Data Management and Analytics',
        description :'Outsourcing data management tasks and providing analytics services to extract actionable insights, supporting informed decision-making and business growth.',
        background: "https://qubicgen-prod.s3.us-east-1.amazonaws.com/Services/Outsourcing/Outsourcing_Servings/data%20management%20and%20analytics.jpeg"
        },
        {
        title: 'Business Process Outsourcing (BPO)',
        description: 'Outsourcing non-core business processes such as customer support and finance to specialized providers, streamlining operations and enhancing efficiency.',
        background: "https://qubicgen-prod.s3.us-east-1.amazonaws.com/Services/Outsourcing/Outsourcing_Servings/business%20processing%20unit.jpeg"
        },
        {
        title: 'Quality Assurance and Testing',
        description: 'Outsourcing software testing tasks for thorough quality assurance, ensuring reliability, usability and performance of software applications.',
        background: "https://qubicgen-prod.s3.us-east-1.amazonaws.com/Services/Outsourcing/Outsourcing_Servings/Quality-Assurance-AwsQuality.png"
        },
        {
        title: 'Project Management',
        description: 'Outsourcing project management tasks to experienced professionals for efficient planning, execution and delivery of IT projects, ensuring successful outcomes and client satisfaction.',
        background: "https://qubicgen-prod.s3.us-east-1.amazonaws.com/Services/Outsourcing/Outsourcing_Servings/project%20management.jpg"
        },
        {
        title: 'IT Consulting and Advisory',
        description: 'Strategic IT consulting services and advisory on technology trends and best practices to drive digital transformation and innovation, aligning technology initiatives with business objectives.',
        background: "https://qubicgen-prod.s3.us-east-1.amazonaws.com/Services/Outsourcing/Outsourcing_Servings/it+consulting.webp"
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
<Link className='hover:cursor-pointer' to="overview" spy={true} smooth={true} offset={-150} duration={200}><li>Overview</li></Link>

<Link className='hover:cursor-pointer' to="serviceofferings" spy={true} smooth={true} offset={-180} duration={200}><li>Who We serve</li></Link>
<Link className='hover:cursor-pointer' to="querie" spy={true} smooth={true} offset={-200} duration={200}><li>Queries</li></Link>
</nav>

    </div>
    <hr />
   
   <div id='overview'>
    
   </div>

    <div className="container" style={{ color: 'white',marginTop:'50px' }} data-aos="fade-up"  >
    <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder', color: 'white' }}  > Overview</h1>




  
    <div className="row featurette" bis_skin_checked="1" style={{marginTop:'100px'}} >
   
   <div className="col-md-7" bis_skin_checked="1">
     <h1 className="featurette-heading fw-normal lh-1" style={{fontSize:'30px',padding:'20px',fontWeight:'bolder'}}>Outsource with Confidence: Partnering for Success in Every Endeavor. Let Us Handle the Workload, While You Focus on Your Vision.</h1>
     <p className="lead" id='leadtext'>Discover the power of seamless outsourcing solutions tailored to your business needs. From streamlining operations to expanding capabilities, we handle the heavy lifting so you can stay focused on driving success.</p>
   </div>
   <div className="col-md-5" bis_skin_checked="1">
     <img src="https://qubicgen-prod.s3.us-east-1.amazonaws.com/Services/Outsourcing/outsourcing_overview.jpeg" className='w-[30vw]'  alt="" />
   </div>
 </div>
    </div>

    {/* This is rpalist ends */}

    <div id='whoweserve'>
    
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
      {OutsourcingServe.map((serve) => {
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

export default Outsourcinglist