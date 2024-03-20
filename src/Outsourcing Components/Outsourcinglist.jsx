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
        background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710069614/QubicGen/Outsourcing/What%20We%20Serve/colleagues-with-headphones-working-call-center-office_23-2149256154_gthdix.jpg"
        },        
        {
        title: 'Software Development and Maintenance',
        description: 'Outsourcing software development projects to skilled developers, coupled with ongoing maintenance and support services for sustained functionality and performance.',
        background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710069653/QubicGen/Outsourcing/What%20We%20Serve/diverse-programmers-discussing-about-html-code-compiling-discovers-errors-standing-front-multiple-screens-startup-office-software-developers-working-server-interface-development_482257-64363_zf1bd2.jpg"
        },
        {
        title: 'Infrastructure Management',
        description: 'Efficient management and maintenance of IT infrastructure components to ensure optimal performance and reliability, with proactive monitoring and timely upgrades.',
        background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710069711/QubicGen/Outsourcing/What%20We%20Serve/man-holding-smartphone-with-apartment-buildings-hologram_23-2149369107_tiv7uv.jpg"
        },
        {
        title: 'Cloud Services',
        description: 'Assistance in migrating to and managing cloud-based platforms, optimizing resources, and ensuring security for scalable and cost-effective IT solutions.',
        background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710069724/QubicGen/Outsourcing/What%20We%20Serve/saas-concept-collage_23-2149399281_g4y7wp.jpg"
        },
        {
        title: 'Data Management and Analytics',
        description :'Outsourcing data management tasks and providing analytics services to extract actionable insights, supporting informed decision-making and business growth.',
        background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710069740/QubicGen/Outsourcing/What%20We%20Serve/office-workers-using-finance-graphs_23-2150408661_ybp6pw.jpg"
        },
        {
        title: 'Business Process Outsourcing (BPO)',
        description: 'Outsourcing non-core business processes such as customer support and finance to specialized providers, streamlining operations and enhancing efficiency.',
        background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710069828/QubicGen/Outsourcing/What%20We%20Serve/emphasizing-night-shift-call-center-ambiance_1127216-861_izi6oe.jpg"
        },
        {
        title: 'Quality Assurance and Testing',
        description: 'Outsourcing software testing tasks for thorough quality assurance, ensuring reliability, usability, and performance of software applications.',
        background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710069840/QubicGen/Outsourcing/What%20We%20Serve/standard-quality-control-collage-concept_23-2149595834_xfvauk.jpg"
        },
        {
        title: 'Project Management',
        description: 'Outsourcing project management tasks to experienced professionals for efficient planning, execution, and delivery of IT projects, ensuring successful outcomes and client satisfaction.',
        background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710069912/QubicGen/Outsourcing/What%20We%20Serve/multiethnic-businesspeople-discussing-financial-company-solution-sitting-conference-table_482257-10542_wqntyr.jpg"
        },
        {
        title: 'IT Consulting and Advisory',
        description: 'Strategic IT consulting services and advisory on technology trends and best practices to drive digital transformation and innovation, aligning technology initiatives with business objectives.',
        background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710069953/QubicGen/Outsourcing/What%20We%20Serve/business-people-working-using-technology-connect-with-others_23-2149369106_h6aeos.jpg"
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

<Link to="serviceofferings" spy={true} smooth={true} offset={-180} duration={200}><li>Who We serve</li></Link>
<Link to="querie" spy={true} smooth={true} offset={-200} duration={200}><li>Queries</li></Link>
</nav>

    </div>
    <hr />
   
   <div id='overview'>
    
   </div>

    <div className="container" style={{ color: 'white',marginTop:'50px' }} data-aos="fade-up"  >
    <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder', color: 'white' }}  > Overview</h1>




  
    <div className="row featurette" bis_skin_checked="1" style={{marginTop:'100px'}} >
   
   <div className="col-md-7" bis_skin_checked="1">
     <h1 className="featurette-heading fw-normal lh-1" style={{fontSize:'40px',padding:'20px',fontWeight:'bolder'}}>Outsource with Confidence: Partnering for Success in Every Endeavor. Let Us Handle the Workload, While You Focus on Your Vision.</h1>
     <p className="lead" id='leadtext'>Discover the power of seamless outsourcing solutions tailored to your business needs. From streamlining operations to expanding capabilities, we handle the heavy lifting so you can stay focused on driving success.</p>
   </div>
   <div className="col-md-5" bis_skin_checked="1">
     <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709281234/QubicGen/Outsourcing/Overview/human-resources-concept-with-hand_fmwmbk.jpg"  alt="" />
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