import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css';
import Queries from '../Rpa Components/Queries';


const Databaselist = () => {
  const overviewRef = useRef(null);
  const serveRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const queriesRef = useRef(null);

  const [isNavFixed, setIsNavFixed] = useState(false);
  
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // This is for rpa offering cards
  const[Databaseofferings,setDatabaseofferings]=useState([
    {
      title: 'Database Design and Development',
      description: 'Crafting databases tailored to our clients\' precise needs, meticulously creating schemas, tables, and relationships to efficiently organize and store data. Our expertise extends to implementing normalization and optimization techniques, ensuring peak performance for your database solution.'
    },
    {
      title: 'Database Administration',
      description: 'Our team handles routine maintenance tasks, monitors performance, and optimizes configurations to guarantee seamless operation. We manage user access and permissions with precision, prioritizing data security and integrity at every step.'
    },
    {
      title: 'Data Migration and Integration',
      description: 'We seamlessly migrate data from legacy systems to modern platforms, integrating databases with other systems for smooth data flow. Throughout the process, we maintain data consistency and integrity, ensuring a reliable transition without compromising quality.'
    },
    {
      title: 'Database Security',
      description: 'We implement robust security measures, conducting assessments and audits to identify vulnerabilities and mitigate risks. Through encryption, access controls, and authentication mechanisms, we safeguard your sensitive data from unauthorized access and cyber threats.'
    },
    {
      title: 'Performance Tuning and Optimization',
      description: 'Our experts analyze performance issues, optimize configurations, and fine-tune resource allocation for optimal efficiency. By optimizing queries, indexing strategies, and hardware configurations, we ensure your database operates at its peak potential.'
    },
    {
      title: 'Disaster Recovery and High Availability',
      description: 'We develop and implement disaster recovery plans to minimize downtime and data loss, setting up high availability solutions like clustering and replication for continuous data access. Our testing and validation processes ensure readiness for emergencies.'
    },
    {
      title: 'Cloud Database Services',
      description: 'We assist in migrating databases to leading cloud platforms, designing and deploying cloud-native solutions for scalability and cost-effectiveness. Our management and optimization services in the cloud ensure your database performs optimally in a scalable environment.'
    },
    {
      title: 'Database Automation',
      description: 'Transforming database management, our automation service simplifies routine tasks, optimizing performance while minimizing manual intervention. Tailored to meet unique business needs, we streamline operations, ensuring efficiency and reliability for our clients\' data infrastructure.'
    }
  ]);

const [DataBaseServe, setDataBaseServe] = useState([
  {
      title:'HealthCare',
      description: 'Securely manage patient data with our healthcare-focused database solutions, ensuring compliance and privacy.',
      background: "https://img.freepik.com/free-photo/successful-medical-team_329181-9252.jpg?t=st=1709119814~exp=1709123414~hmac=a2b7793627d2d2d4ee59b6ed4dee3c3783886802f52c45a15e021db296d3a8c4&w=740"
      },
      
      {
      title: 'Education',
      description: 'Empower academic institutions with scalable database solutions for student management and learning platforms.',
      background: "https://img.freepik.com/free-photo/person-with-books-digital-art-style-education-day_23-2151164358.jpg?t=st=1709119855~exp=1709123455~hmac=d4203c091526e85cff9741aea228390f0e483d1947c6df17070d4ce43ddf42f8&w=740"
      },
      {
      title: 'Manufacturing',
      description: 'Drive efficiency and innovation in manufacturing with our scalable database solutions for production control.',
      background: "https://img.freepik.com/free-photo/smart-indian-engineer-man-wearing-safety-helmet-doing-stock-tick-check-cardboard-stock-product-management-factory-warehouse-background_609648-1445.jpg?t=st=1709119925~exp=1709123525~hmac=58a97f3dfc93d096638de57ab6dcac6e2a0420aa1866679a1cda695535812a1f&w=740"
      },
      {
      title: 'Energy and Utilities',
      description: 'Optimize grid operations and asset management with our reliable database solutions for the energy sector.',
      background: "https://img.freepik.com/free-photo/turbine-green-energy-electricity-technology-concept_53876-31722.jpg?w=826&t=st=1709120004~exp=1709120604~hmac=8cb4bd897fd66735ae138d9db60a467539581591d0c45220afc6618aca88e775"
      },
      {
      title: 'Banking',
      description :'Ensure data integrity and compliance in financial transactions with our banking-focused database services.',
      background: "https://img.freepik.com/premium-photo/online-banking-person-uses-system-selects-service-hologram-laptop_102583-7081.jpg?w=740"
      },
      {
      title: 'Government',
      description: 'Modernize citizen services and improve transparency with our government-focused database services.',
      background: "https://img.freepik.com/free-photo/grey-marble-column-details-building_1359-886.jpg?t=st=1709109603~exp=1709113203~hmac=3c7a7385652c17affca217c4991154fc705e5deef262b54c84dd5ad40670ef14&w=740"
      },
      {
      title: 'Media',
      description: 'Deliver personalized content experiences with our media-focused database solutions for digital asset management.',
      background: "https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-cinema-tickets-wooden-desk_23-2148188189.jpg?t=st=1709109656~exp=1709113256~hmac=af33f941cc0a2df0fd43470e2f487c91146d36b8ee356372296a23f66c0f4b9e&w=740"
      },
      {
      title: 'Transportation',
      description: 'Enhance fleet management and passenger safety with our transportation-focused database services.',
      background: "https://img.freepik.com/free-photo/logistics-transportation-container-cargo-ship-cargo-plane-with-working-crane-bridge-shipyard-sunrise-logistic-import-export-transport-industry-background-ai-generative_123827-24177.jpg?t=st=1709120106~exp=1709123706~hmac=77cdedc3a3349f43f51317fc838a1aae925cf2690f0a7b998b1ea6c509867b5c&w=740"
      },
      {
      title: 'Retail',
      description: 'Optimize inventory management and customer engagement with our retail-focused database solutions.',
      background: "https://img.freepik.com/free-photo/background-interior-supermarket-out-focus_123827-28040.jpg?t=st=1709120147~exp=1709123747~hmac=a2e2c1c8ddad348797742d1460189012a755a5e2aa5b01e10c727335057d19af&w=740"
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
        <h1 className="featurette-heading fw-normal lh-1" style={{fontSize:'40px',padding:'20px',fontWeight:'bolder'}}>Data Dynamo: Where Your Information Finds Its Power and Purpose</h1>
        <p className="lead" id='leadtext'>Welcome to the nucleus of data empowerment. Our database services are the cornerstone of efficient data management, offering robust solutions tailored to your needs. From designing and optimizing databases to ensuring seamless integration and security, we empower businesses to unlock the full potential of their data and drive informed decisions.</p>
      </div>
      <div className="col-md-5" bis_skin_checked="1">
        <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709118916/3628676_556_ztwvm5.jpg"  alt="" />
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
                                    Databaseofferings.map((item) => {
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
                                   DataBaseServe.map((serve) => {
                                        return (
                                        <div className="col md-3 mb-3" >
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

export default Databaselist