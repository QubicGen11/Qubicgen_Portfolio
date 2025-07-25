import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css';
import Queries from '../Banking Components/Queries';
import {Link} from 'react-scroll';

const Publiclist = () => {
  const overviewRef = useRef(null);
  const serveRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const queriesRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const [isNavFixed, setIsNavFixed] = useState(false);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // This is for rpa offering cards

  const[PublicServe,setPublicServe]=useState([
    {
      title: 'Federal and State Governments',
      description: 'Our Digital & Technology Transformation Solutions streamline governance and administration services for enhanced efficiency. With tailored offerings like MOVES for the Department of Motor Vehicles and GIST™ for Grants Management, we ensure seamless operations and customer-centric approaches. Trust our expertise to optimize processes'
    },
    {
      title: 'Child Support & HealthCare',
      description: "We're experts in modernizing systems and technology for better Child Care and Health services. Our specialized solutions for the Child Support Enforcement (CSE) Community ensure streamlined operations and improved effectiveness. Count on us to deliver innovative approaches that support crucial child support enforcement efforts."
    },
    {
      title: 'Education',
      description: 'Revolutionary digital technologies and virtualization solutions are employed to enhance education delivery, ensuring effectiveness and efficiency, while also fostering an enjoyable learning experience.'
    },
   
    
  ]);

  const [PublicOffering, setPublicOffering] = useState([
    {
        title: 'E-Government Solutions',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Public+%2C+Sector+and+Government/Public+sector+and+government/Service+Offerings/E-+govenment+solutions.jpeg',
        description: 'Development and implementation of e-government platforms and portals to enable online service delivery, citizen engagement and digital transactions, including services such as tax filing, permit applications and license renewals.'
    },
    {
        title: 'Government Resource Planning (GRP)',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Public+%2C+Sector+and+Government/Public+sector+and+government/Service+Offerings/Governement+resource+planing.jpeg',
        description: 'Implementation of GRP systems to automate and streamline government operations, including financial management, human resources, procurement and budgeting, to improve transparency, accountability and efficiency.'
    },
    {
        title: 'Digital Identity and Authentication',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Public+%2C+Sector+and+Government/Public+sector+and+government/Service+Offerings/digital%20identity%20and%20authentication.jpg',
        description: 'Provision of digital identity and authentication solutions to enable secure access to government services and online transactions, including biometric authentication, digital signatures and identity verification systems.'
    },
    {
        title: 'Open Data Platforms',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Public+%2C+Sector+and+Government/Public+sector+and+government/Service+Offerings/open%20data%20platform.jpeg',
        description: 'Development of open data platforms and APIs to publish government data and information in accessible and machine-readable formats, promoting transparency, innovation and collaboration with the public and private sectors.'
    },
    {
        title: 'Cyber Security and Critical Infrastructure Protection',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Public+%2C+Sector+and+Government/Public+sector+and+government/Service+Offerings/cyber%20security%20and%20critical%20infrastructure%20protection.jpg',
        description: 'Providing cybersecurity services to protect government networks, systems and critical infrastructure from cyber threats, including risk assessments, security audits, incident response and threat intelligence.'
    },
    {
        title: 'Geographic Information Systems (GIS)',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Public+%2C+Sector+and+Government/Public+sector+and+government/Service+Offerings/geographic%20information.jpeg',
        description: 'Implementation of GIS solutions to manage and analyze spatial data for applications such as urban planning, emergency management, land administration and environmental monitoring.'
    },
    {
        title: 'Government Cloud Services',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Public+%2C+Sector+and+Government/Public+sector+and+government/Service+Offerings/Government%20cloud%20services.jpeg',
        description: 'Provision of government cloud services, including infrastructure as a service (IaaS), platform as a service (PaaS) and software as a service (SaaS), to enable cost-effective and scalable IT infrastructure for government agencies and departments.'
    },
    {
        title: 'Digital Transformation Consulting',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Public+%2C+Sector+and+Government/Public+sector+and+government/Service+Offerings/digital%20transformation%20consulting.jpeg',
        description: 'Offering consulting services to government organizations on digital transformation initiatives, including strategy development, change management, organizational readiness assessment and technology adoption planning.'
    },
    {
        title: 'Emergency Management Systems',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Public+%2C+Sector+and+Government/Public+sector+and+government/Service+Offerings/emergency%20management%20system.jpeg',
        description: 'Development and implementation of emergency management systems to support disaster preparedness, response and recovery efforts, including situational awareness, resource coordination and communication systems.'
    },
    {
        title: 'Regulatory and Compliance and Governance',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Public+%2C+Sector+and+Government/Public+sector+and+government/Service+Offerings/Regularity%20and%20compliance%20and%20governance.jpeg',
        description: 'Assisting government agencies in understanding and complying with regulatory requirements, standards and best practices related to data privacy, cybersecurity, accessibility and IT governance.'
    },
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
<Link className='hover:cursor-pointer' to="overview" spy={true} smooth={true} offset={-150} duration={200}><li>Overview</li></Link>
<Link className='hover:cursor-pointer' to="whoweserve" spy={true} smooth={true} offset={-150} duration={200}><li>Who we serve</li></Link>
<Link className='hover:cursor-pointer' to="serviceofferings" spy={true} smooth={true} offset={-180} duration={200}><li>Service Offerings</li></Link>
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
        <h1 className="featurette-heading fw-normal lh-1" style={{ fontSize: '40px', padding: '20px', fontWeight: 'bolder' }}>Utilizing Digital & Information Technology to enhance the quality of life for citizens.</h1>
            <p className="lead" id='leadtext'>QubicGen's specialized Public Sector Practice delivers comprehensive IT services and solutions tailored for Government, International Organizations and higher education sectors worldwide. Our offerings encompass ERP Implementation, Business Transformation, Enterprise Portals, Business Intelligence, Data Warehousing, Enterprise Application Integration, Middleware solutions, Infrastructure support, Robotic Process Automation, Artificial Intelligence, Machine Learning, Advanced Analytics, Cloud Migration (AWS, Azure, IBM, Google), Geographical Information Systems and Application Development and Maintenance Services (ADMS).</p>
          </div>
          <div className="col-md-5" bis_skin_checked="1">
            <img src="https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Public+%2C+Sector+and+Government/Public+sector+and+government/Overview.avif" alt="" />
          </div>
      </div>
    </div>

    {/* This is rpalist ends */}

    <div id='whoweserve'>
    
    </div>
  
    

      <div className="container"  style={{marginTop:'130px'}}   >

      <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder', color: 'white' }}  > Who we Serve</h1>


        <div className="container text-center" style={{marginTop:'50px'}}  >
          <div className="row" style={{ display: 'flex', justifyContent: 'space-evenly' }} >
            {PublicServe.map((item) => {
              return (
                <div className="card" style={{ height: '400px', width: '307px', marginTop: '20px', }} >
                  <a className="card1" style={{ height: '350px', width: '307px', marginTop: '20px' }} >
                    <p style={{ fontSize: '30px', paddingBottom: "20px",lineHeight:'30px' }}>{item.title}</p>
                    <p style={{ fontSize: '13px' }}>{item.description}</p>
                    <div className="go-corner">
                      <div className="go-arrow">
                        →
                      </div>
                    </div>
                  </a>

                </div>
              )
            })}



          </div>
        </div>

      </div>







    {/* This is rpa offering start */}



    {/* This is who we server starts */}
     <div id='serviceofferings'>
    
    </div>

    <div style={{ color: 'white', marginLeft: '40px',marginTop:'120px'}} data-aos="zoom-in"  >
      
      <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }} > Service Offerings</h1>
  
   

      {/* This is offering */}

      <div className="container" style={{marginTop:'80px'}}  >
        <div className="row">
          {PublicOffering.map((serve) => (
            <div className="book" style={{ marginLeft: '50px', marginTop: '20px' }}>
              <p className='text-sm'>{serve.description}</p>
              <div className="cover" style={{ background: `rgba(255, 255, 255, 0.8) url('${serve.background}') center/cover` }}>
                <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
                <p style={{ fontWeight: 'bolder', color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '15px' }}>{serve.title}</p>
              </div>


            </div>


          ))}
        </div>
        <br />
      </div>

      {/* This is offering ends */}





    </div>

    {/* This is who we server ends */}
    <div className="queries" id='querie' style={{marginTop:'50px'}}>
      <Queries />
    </div>






  </>
  )
}

export default Publiclist