import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css';
import Queries from './Queries';
import { Link } from 'react-scroll';

const Bankinglist = () => {
  // const overviewRef = useRef(null);
  // const serveRef = useRef(null);
  // const caseStudiesRef = useRef(null);
  // const queriesRef = useRef(null);
  // const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const [isNavFixed, setIsNavFixed] = useState(false);

  // const scrollToRef = (ref) => {
  //   ref.current.scrollIntoView({ behavior: 'smooth' });
  // };

  // This is for rpa offering cards



  const [HealthOffering, setHealthOffering] = useState([
    {
        title: 'Electronic Health Records (EHR) Systems',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709637205/QubicGen/HealthCare/project-manager-working-update-tasks-with-gantt-chart-scheduling-diagram-hospital-success-smart-medical-doctor-working-with-smart-medical-doctor-as-conceptxa_71455-1228_gssxrw.jpg',
        description: 'Development, implementation, and customization of electronic health records (EHR) systems to digitize patient health information, streamline clinical workflows, and improve care coordination among healthcare providers.'
    },
    {
        title: 'Health Information Exchange (HIE)',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709637297/QubicGen/HealthCare/medical-team-having-meeting-with-doctors-white-lab-coats-surgical-scrubs-seated-table-discussing-patients-working-online-using-computers-medical-industry_533878-1711_hz1lvc.jpg',
        description: 'Integration of health information exchange platforms to facilitate secure sharing of patient data among healthcare organizations, enabling seamless communication and collaboration across the care continuum.'
    },
    {
        title: 'Telemedicine and Telehealth Solutions',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709637324/QubicGen/HealthCare/telemedicine-service-online-video-call-doctor-actively-chat-with-patient_31965-62472_dtrzf7.jpg',
        description: 'Design and deployment of telemedicine and telehealth solutions, including video conferencing platforms, remote patient monitoring systems, and virtual care platforms, to enable remote consultations, monitoring, and care delivery.'
    },
    {
        title: 'Medical Imaging and Picture Archiving and Communication Systems (PACS)',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709637423/QubicGen/HealthCare/portrait-mature-biologist-woman-working-computer-modern-equipment-microbiological-laboratory_482257-34412_icmwwa.jpg',
        description: 'Development and implementation of PACS solutions to manage medical imaging data, including storage, retrieval, and distribution of radiology images, enabling timely diagnosis and treatment planning.'
    },
    {
        title: 'Healthcare Analytics and Business Intelligence',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709637543/QubicGen/HealthCare/scientific-data-processing-with-human-body-scope-scanning-with-male-doctor-writing_1134-11878_hyy9ci.jpg',
        description: 'Utilization of healthcare analytics tools and business intelligence solutions to analyze clinical, operational, and financial data, identify trends, and make data-driven decisions to improve patient outcomes and optimize resource utilization.'
    },
    {
        title: 'Revenue Cycle Management (RCM)',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709637572/QubicGen/HealthCare/top-view-businesspeople-working-with-icons-painted-table_1134-100_tqeic3.jpg',
        description: 'Provision of revenue cycle management services to healthcare organizations, including billing, coding, claims management, and accounts receivable management, to optimize revenue capture and ensure timely reimbursement.'
    },
    {
        title: 'Population Health Management',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709637618/QubicGen/HealthCare/close-up-picture-doctor-s-hands-posting-symbol-home-family-member-model_1150-26706_rvtk8g.jpg',
        description: 'Development and implementation of population health management platforms to analyze patient populations, identify at-risk individuals, and implement targeted interventions to improve health outcomes and reduce healthcare costs.'
    },
    {
        title: 'Healthcare Interoperability and Standards Compliance',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709637659/QubicGen/HealthCare/medical-infographic-with-photo_23-2148368620_xpdhcg.jpg',
        description: 'Assistance with healthcare interoperability initiatives and compliance with industry standards such as HL7, FHIR, and DICOM to ensure seamless data exchange and interoperability among healthcare systems and applications.'
    },
    {
        title: 'Cybersecurity and Data Privacy',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709637761/QubicGen/HealthCare/cyber-security-concept_23-2148532223_xyfk62.jpg',
        description: 'Provision of cybersecurity services to protect sensitive healthcare data from cyber threats, including ransomware attacks, data breaches, and unauthorized access, through robust security measures, encryption, and access controls.'
    },
    {
        title: 'Compliance and Regulatory Consulting',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709637813/QubicGen/HealthCare/standard-quality-control-collage-concept_23-2149595850_aqwrio.jpg',
        description: 'Consulting and advisory services to help healthcare organizations navigate regulatory requirements, including HIPAA, HITECH, GDPR, and Meaningful Use, and implement compliance programs to safeguard patient privacy and data security.'
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
  <Link to="serviceofferings" spy={true} smooth={true} offset={-180} duration={200}><li>Service Offerings</li></Link>
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
            <h1 className="featurette-heading fw-normal lh-1" style={{ fontSize: '40px', padding: '20px', fontWeight: 'bolder' }}>Guiding the course of change</h1>
            <p className="lead" id='leadtext'>Harnessing fresh perspectives and cutting-edge strategies, our company is dedicated to revolutionizing the landscape of Retail Banking, Lending and Leasing, Cards and Payments, Asset and Wealth Management, Investment Banks, Stock Exchanges, as well as Life/General Insurances. Despite our newcomer status, we are committed to guiding these sectors through dynamic changes, presenting exciting opportunities to elevate product offerings, services, and prioritize customer satisfaction.</p>
          </div>
          <div className="col-md-5" bis_skin_checked="1">
            <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709535501/QubicGen/stack-money-coin-with-trading-graph_1_jjrd0p.jpg" alt="" />
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

      <div style={{ color: 'white', marginLeft: '40px',marginTop:'120px'}} data-aos="zoom-in"  >
        
        <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }} > Service Offerings</h1>
    
     

        {/* This is offering */}

        <div className="container" style={{marginTop:'80px'}}  >
          <div className="row">
            {HealthOffering.map((serve) => (
              <div className="book" style={{ marginLeft: '50px', marginTop: '20px' }}>
                <p>{serve.description}</p>
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

export default Bankinglist