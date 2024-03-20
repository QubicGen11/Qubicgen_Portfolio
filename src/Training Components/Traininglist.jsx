import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import Queries from '../Industries Components/Banking Components/Queries';

const Traininglist = () => {
  const overviewRef = useRef(null);
  const serveRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const queriesRef = useRef(null);
  const [isNavFixed, setIsNavFixed] = useState(false);
  
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // This is for rpa offering cards


  const[Ourtrainings,setOurtrainings]=useState([

    {
    title:'RPA',
    description: 'Master the art of automating repetitive tasks and processes with our RPA training, unlocking efficiency and productivity gains for your organization.',
    background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710142879/QubicGen/Trainings/Our%20Trainings/robotic-hand-holograms-rpa-concept_23-2149311909_uflvil.jpg"
    },
    
    {
    title: 'Cyber Security',
    description: 'Protect your digital assets and mitigate risks with our cybersecurity training, equipping you with the skills to defend against evolving threats.',
    background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710143969/QubicGen/Trainings/Our%20Trainings/data-security-technology-background-vector-blue-tone_53876-112201_r0itfq.jpg"
    },
    {
      title: 'ServiceNow',
      description: 'Streamline your IT service management processes with our ServiceNow training, optimizing service delivery and enhancing user experience.',
      background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710143985/QubicGen/Trainings/Our%20Trainings/Frame-6_njvduz.png"
      },
    {
    title: 'Testing',
    description: 'Ensure the reliability and quality of your software applications through rigorous testing methodologies with our comprehensive training program.',
    background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710148915/QubicGen/Trainings/Our%20Trainings/software-testing_zinlyu.png"
    },
    {
    title: 'Prompt Engineering',
    description: ' Elevate your problem-solving skills and technical expertise with our Prompt Engineer training, preparing you for the challenges of dynamic IT environments.',
    background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710148932/QubicGen/Trainings/Our%20Trainings/Prompt-Engineering_ve3jy4.jpg"
    },
    {
      title: 'Azure Data Factory',
      description: '  Harness the power of Microsoft Azure for data integration and analytics with our Azure Data Factory training, unlocking insights for informed decision-making.',
      background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710149063/QubicGen/Trainings/Our%20Trainings/illu_azure_factory-34-1024x562-1_socjfo.jpg"
    },
    {
      title: 'Data Science',
      description: 'Dive into the world of data analysis and machine learning with our Data Science training, transforming raw data into actionable insights.',
      background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710149073/QubicGen/Trainings/Our%20Trainings/What-is-data-science-2_xcx2wq.jpg"
    },
    {
      title: 'SQL',
      description: 'Unlock the potential of relational databases with our SQL Database training, gaining expertise in managing and querying data efficiently.',
      background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710149289/QubicGen/Trainings/Our%20Trainings/gradient-sql-illustration_52683-80408_ydkgpw.jpg"
    },
    {
      title: 'Full Stack Development',
      description: 'Become a proficient developer capable of building both client-side and server-side components with our Full Stack Development training, bridging the gap between front-end and back-end development.',
      background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710149446/QubicGen/Trainings/Our%20Trainings/fullstack_q9jggs.png"
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
<Link to="serviceofferings" spy={true} smooth={true} offset={-180} duration={200}><li>Our Trainings</li></Link>
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
        <h1 className="featurette-heading fw-normal lh-1" style={{fontSize:'40px',padding:'20px',fontWeight:'bolder'}}>Unlock the Power of Digital Transformation with Expert Training in RPA, Cybersecurity, Data Science, and More. Empower Your Future with Cutting-Edge IT Skills</h1>
        <p className="lead" id='leadtext'>We offer comprehensive training programs in a wide range of cutting-edge technologies, empowering individuals and organizations to stay ahead in today's rapidly evolving digital landscape. From Robotic Process Automation (RPA) to Cybersecurity, ServiceNow, Testing, Prompt Engineering, Azure Data Factory, Data Science, RPA with UI Path, Dot.Net, SQL Database, to Full Stack Development, we cover all facets of modern IT skills. Our expert-led courses are designed to equip learners with practical knowledge and hands-on experience, enabling them to thrive in their respective fields and drive innovation.</p>
      </div>
      <div className="col-md-5" bis_skin_checked="1">
        <img src="https://res.cloudinary.com/dightbmyi/image/upload/v1709287543/employees-meeting-room-office_1_gflzj4.jpg"  alt="" />
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
        
        <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }} > Our Trainings</h1>
     
        <div className="container" style={{marginTop:'100px'}}>
   <div className="row">
      {/* Mapping over the 'Weserve' array */}
      {Ourtrainings.map((serve) => {
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

export default Traininglist