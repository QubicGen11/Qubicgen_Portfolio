import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import Queries from '../Industries Components/Banking Components/Queries';


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
  const [Databaseofferings, setDatabaseofferings] = useState([
    {
      title: 'Database Design and Development',
      description: 'Crafting databases tailored to our clients\' precise needs, meticulously creating schemas, tables and relationships to efficiently organize and store data. Our expertise extends to implementing normalization and optimization techniques, ensuring peak performance for your database solution.'
    },
    {
      title: 'Database Administration',
      description: 'Our team handles routine maintenance tasks, monitors performance and optimizes configurations to guarantee seamless operation. We manage user access and permissions with precision, prioritizing data security and integrity at every step.'
    },
    {
      title: 'Data Migration and Integration',
      description: 'We seamlessly migrate data from legacy systems to modern platforms, integrating databases with other systems for smooth data flow. Throughout the process, we maintain data consistency and integrity, ensuring a reliable transition without compromising quality.'
    },
    {
      title: 'Database Security',
      description: 'We implement robust security measures, conducting assessments and audits to identify vulnerabilities and mitigate risks. Through encryption, access controls and authentication mechanisms, we safeguard your sensitive data from unauthorized access and cyber threats.'
    },
    {
      title: 'Performance Tuning and Optimization',
      description: 'Our experts analyze performance issues, optimize configurations and fine-tune resource allocation for optimal efficiency. By optimizing queries, indexing strategies and hardware configurations, we ensure your database operates at its peak potential.'
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
      title: 'HealthCare',
      description: 'Securely manage patient data with our healthcare-focused database solutions, ensuring compliance and privacy.',
      background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709807628/QubicGen/DataBase/Who%20We%20Serve/successful-medical-team_329181-9252_ra6ybo.jpg"
    },

    {
      title: 'Education',
      description: 'Empower academic institutions with scalable database solutions for student management and learning platforms.',
      background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709807661/QubicGen/DataBase/Who%20We%20Serve/person-with-books-digital-art-style-education-day_23-2151164358_dvaqvz.jpg"
    },
    {
      title: 'Manufacturing',
      description: 'Drive efficiency and innovation in manufacturing with our scalable database solutions for production control.',
      background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709807696/QubicGen/DataBase/Who%20We%20Serve/smart-indian-engineer-man-wearing-safety-helmet-doing-stock-tick-check-cardboard-stock-product-management-factory-warehouse-background_609648-1445_pwe0re.jpg"
    },
    {
      title: 'Energy and Utilities',
      description: 'Optimize grid operations and asset management with our reliable database solutions for the energy sector.',
      background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709807702/QubicGen/DataBase/Who%20We%20Serve/turbine-green-energy-electricity-technology-concept_53876-31722_uojffv.jpg"
    },
    {
      title: 'Banking',
      description: 'Ensure data integrity and compliance in financial transactions with our banking-focused database services.',
      background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709807742/QubicGen/DataBase/Who%20We%20Serve/online-banking-person-uses-system-selects-service-hologram-laptop_102583-7081_caaxcb.jpg"
    },
    {
      title: 'Government',
      description: 'Modernize citizen services and improve transparency with our government-focused database services.',
      background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709807775/QubicGen/DataBase/Who%20We%20Serve/grey-marble-column-details-building_1359-886_h7fdsd.jpg"
    },
    {
      title: 'Media',
      description: 'Deliver personalized content experiences with our media-focused database solutions for digital asset management.',
      background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710067270/QubicGen/DataBase/Who%20We%20Serve/3d-glasses-movies-clapper-board_23-2149558757_ktbfbu.jpg"
    },
    {
      title: 'Transportation',
      description: 'Enhance fleet management and passenger safety with our transportation-focused database services.',
      background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709807834/QubicGen/DataBase/Who%20We%20Serve/logistics-transportation-container-cargo-ship-cargo-plane-with-working-crane-bridge-shipyard-sunrise-logistic-import-export-transport-industry-background-ai-generative_123827-24177_jou2y1.jpg"
    },
    {
      title: 'Retail',
      description: 'Optimize inventory management and customer engagement with our retail-focused database solutions.',
      background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709807867/QubicGen/DataBase/Who%20We%20Serve/background-interior-supermarket-out-focus_123827-28040_zssyws.jpg"
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
<Link to="whoweserve" spy={true} smooth={true} offset={-150} duration={200}><li>Service Offerings</li></Link>
<Link to="serviceofferings" spy={true} smooth={true} offset={-180} duration={200}><li>Who We serve</li></Link>
<Link to="querie" spy={true} smooth={true} offset={-200} duration={200}><li>Queries</li></Link>
</nav>

      </div>
      <hr />

      <div id='overview'> 

      </div>

      <div className="container" style={{ color: 'white', marginTop: '50px' }} data-aos="fade-up"  >
        <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder', color: 'white' }}  > Overview</h1>





        <div className="row featurette" bis_skin_checked="1"  >

          <div className="col-md-7" bis_skin_checked="1">
            <h1 className="featurette-heading fw-normal lh-1" style={{ fontSize: '40px', padding: '20px', fontWeight: 'bolder' }}>Data Dynamo: Where Your Information Finds Its Power and Purpose</h1>
            <p className="lead" id='leadtext'>Welcome to the nucleus of data empowerment. Our database services are the cornerstone of efficient data management, offering robust solutions tailored to your needs. From designing and optimizing databases to ensuring seamless integration and security, we empower businesses to unlock the full potential of their data and drive informed decisions.</p>
          </div>
          <div className="col-md-5" bis_skin_checked="1">
            <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709118916/3628676_556_ztwvm5.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* This is rpalist ends */}

      <div id='whoweserve'>

      </div>

           

        <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder',color:'white',marginTop:'20px' }}> Service Offerings</h1>

        <div className="grid grid-flow-row auto-rows-max ml-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-24 ">
           {
              Databaseofferings.map((item) => {
                return (
                  <div className="col" >
                    <div className="card" id='offeringscards' style={{ height: '17rem', width: '18rem', color: 'white' }}>
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






      {/* This is rpa offering start */}



      {/* This is who we server starts */}
      <div id='serviceofferings'>

      </div>

      <div style={{ color: 'white', marginLeft: '40px', marginTop: '100px' }} ref={caseStudiesRef} data-aos="zoom-in"  >

        <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }} > Who we Serve</h1>

        <div className="container" style={{ marginTop: '100px' }}>
          <div className="row">
            {/* Mapping over the 'Weserve' array */}
            {DataBaseServe.map((serve) => {
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
      <div className="queries" id='querie' style={{ marginTop: '50px' }}>
        <Queries />
      </div>






    </>
  )
}

export default Databaselist