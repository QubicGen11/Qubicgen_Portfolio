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
    background: "https://qubicgen-prod.s3.us-east-1.amazonaws.com/Services/trainings/testing_rpa.jpeg"
    },
    {
    title: 'Cyber Security',
    description: 'Protect your digital assets and mitigate risks with our cybersecurity training, equipping you with the skills to defend against evolving threats.',
    background: "https://qubicgen-prod.s3.us-east-1.amazonaws.com/Services/trainings/testing_cybersecurity.jpg"
    },
    {
      title: 'ServiceNow',
      description: 'Streamline your IT service management processes with our ServiceNow training, optimizing service delivery and enhancing user experience.',
      background: "https://qubicgen-prod.s3.us-east-1.amazonaws.com/Services/trainings/testing_servicenow.jpg"
      },
    {
    title: 'Testing',
    description: 'Ensure the reliability and quality of your software applications through rigorous testing methodologies with our comprehensive training program.',
    background: "https://qubicgen-prod.s3.us-east-1.amazonaws.com/Services/trainings/testing_testing.jpg"
    },
    {
    title: 'Prompt Engineering',
    description: ' Elevate your problem-solving skills and technical expertise with our Prompt Engineer training, preparing you for the challenges of dynamic IT environments.',
    background: "data:image/jpeg;base64,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"
    },
    {
      title: 'Data Science',
      description: 'Dive into the world of data analysis and machine learning with our Data Science training, transforming raw data into actionable insights.',
      background: "https://qubicgen-prod.s3.us-east-1.amazonaws.com/Services/trainings/testing_datascience.jpg"
    },
    {
      title: 'SQL',
      description: 'Unlock the potential of relational databases with our SQL Database training, gaining expertise in managing and querying data efficiently.',
      background: "https://qubicgen-prod.s3.us-east-1.amazonaws.com/Services/trainings/testing_sql.png"
    },
    {
      title: 'Full Stack Development',
      description: 'Become a proficient developer capable of building both client-side and server-side components with our Full Stack Development training, bridging the gap between front-end and back-end development.',
      background: "https://qubicgen-prod.s3.us-east-1.amazonaws.com/Services/trainings/testing_fullstack.jpg"
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
<Link className='hover:cursor-pointer' to="overview" spy={true} smooth={true} offset={-150} duration={200}><li>Overview</li></Link>
<Link className='hover:cursor-pointer' to="serviceofferings" spy={true} smooth={true} offset={-180} duration={200}><li>Our Trainings</li></Link>
<Link className='hover:cursor-pointer' to="querie" spy={true} smooth={true} offset={-200} duration={200}><li>Queries</li></Link>
</nav>

    </div>
    <hr />
   
   <div id='overview'>
    
   </div>

    <div className="container" style={{ color: 'white',marginTop:'50px' }} data-aos="fade-up"  >
    <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder', color: 'white' }}  > Overview</h1>




  
    <div className="row featurette" bis_skin_checked="1" style={{marginTop:'100px'}}  >
   
      <div className="col-md-7" bis_skin_checked="1">
        <h1 className="featurette-heading fw-normal lh-1" style={{fontSize:'40px',padding:'20px',fontWeight:'bolder'}}>Unlock the Power of Digital Transformation with Expert Training in RPA, Cybersecurity, Data Science and More. Empower Your Future with Cutting-Edge IT Skills</h1>
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