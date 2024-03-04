import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css';
import Queries from './Queries';


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
  background: "https://img.freepik.com/free-photo/robotic-hand-holograms-rpa-concept_23-2149311909.jpg?t=st=1709287933~exp=1709291533~hmac=94764907f68e02455bcec4dcd9122576abf1bf98649e1734f610c6809793db26&w=996"
  },
  
  {
  title: 'Cyber Security',
  description: 'Protect your digital assets and mitigate risks with our cybersecurity training, equipping you with the skills to defend against evolving threats.',
  background: "https://img.freepik.com/free-vector/data-security-technology-background-vector-blue-tone_53876-112201.jpg?t=st=1709288161~exp=1709291761~hmac=8e94a590d2469d28b79a97151067da0494834918b7d0a4a93662df827ee8ff1f&w=996"
  },
  {
    title: 'ServiceNow',
    description: 'Streamline your IT service management processes with our ServiceNow training, optimizing service delivery and enhancing user experience.',
    background: "https://geeksforless.com/wp-content/uploads/2022/09/Frame-6.png"
    },
  {
  title: 'Testing',
  description: 'Ensure the reliability and quality of your software applications through rigorous testing methodologies with our comprehensive training program.',
  background: "https://www.professionalqa.com/assets/images/software-testing.png"
  },
  {
  title: 'Prompt Engineering',
  description: ' Elevate your problem-solving skills and technical expertise with our Prompt Engineer training, preparing you for the challenges of dynamic IT environments.',
  background: "https://dmexco-lightsails-media.s3.eu-central-1.amazonaws.com/wp-content/uploads/2023/07/20205343/Prompt-Engineering.jpg"
  },
  {
    title: 'Azure Data Factory',
    description: '  Harness the power of Microsoft Azure for data integration and analytics with our Azure Data Factory training, unlocking insights for informed decision-making.',
    background: "https://datascientest.com/en/wp-content/uploads/sites/9/2023/09/illu_azure_factory-34-1024x562-1.jpg"
  },
  {
    title: 'Data Science',
    description: 'Dive into the world of data analysis and machine learning with our Data Science training, transforming raw data into actionable insights.',
    background: "https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg"
  },

  {
    title: 'SQL',
    description: 'Unlock the potential of relational databases with our SQL Database training, gaining expertise in managing and querying data efficiently.',
    background: "https://img.freepik.com/premium-vector/gradient-sql-illustration_52683-80408.jpg"
  },
  {
    title: 'Full Stack Development',
    description: 'Become a proficient developer capable of building both client-side and server-side components with our Full Stack Development training, bridging the gap between front-end and back-end development.',
    background: "https://www.freecodecamp.org/news/content/images/2023/01/fullstack.png"
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
        <h1 className="featurette-heading fw-normal lh-1" style={{fontSize:'40px',padding:'20px',fontWeight:'bolder'}}>Unlock the Power of Digital Transformation with Expert Training in RPA, Cybersecurity, Data Science, and More. Empower Your Future with Cutting-Edge IT Skills</h1>
        <p className="lead" id='leadtext'>We offer comprehensive training programs in a wide range of cutting-edge technologies, empowering individuals and organizations to stay ahead in today's rapidly evolving digital landscape. From Robotic Process Automation (RPA) to Cybersecurity, ServiceNow, Testing, Prompt Engineering, Azure Data Factory, Data Science, RPA with UI Path, Dot.Net, SQL Database, to Full Stack Development, we cover all facets of modern IT skills. Our expert-led courses are designed to equip learners with practical knowledge and hands-on experience, enabling them to thrive in their respective fields and drive innovation.</p>
      </div>
      <div className="col-md-5" bis_skin_checked="1">
        <img src="https://res.cloudinary.com/dightbmyi/image/upload/v1709287543/employees-meeting-room-office_1_gflzj4.jpg"  alt="" />
      </div>
    </div>
    </div>

{/* This is rpalist ends */}


   
{/* This is rpa offering start */}

{/* This is rpa offering ends */}


{/* This is who we server starts */}
<div style={{ color: 'white',marginLeft:'40px' }} ref={caseStudiesRef} data-aos = "zoom-in"  >
<br />
      <br />
      <br />
      <br />
                    <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }} > Our Trainings</h1>
      <br />
      <br />
      <br />
                    <br />
                    <div className="container" >
                        <div className="row"  >
                            
                                {
                                    Ourtrainings.map((serve) => {
                                        return (
                                        <div className="col" >
                                           <div className="card" >
                                           <div className="card-inner">
                        <div className="card-front" style={{ background: `url('${serve.background}') center/cover`, }}>
                          <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
                          <p style={{ fontWeight: 'bolder', color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>{serve.title}</p>
                        </div>
                        <div className="card-back" style={{ backgroundColor: '#2f2f2f', color: '#000', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                          <p style={{ fontSize: '12px' }}>{serve.description}</p>
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

export default Traininglist