import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css';
import Queries from './Queries';

const Healthlist = () => {
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

  const[EnergyServe,setEnergyServe]=useState([
    {
      title: 'Electricity',
      description: 'At QubicGen, our developed solutions support the holistic growth of the power industry, spanning Electricity Generation, Transmission, Distribution, Retail, and catering to both commercial and residential sectors.'
    },
    {
      title: 'Renewables',
      description: 'Delivers advanced monitoring and efficiency management platforms for solar and wind energy assets. Additionally, emphasizes the development of innovative technologies in renewable energy, including hydroelectric, wind, bioenergy, solar, and geothermal power.'
    },
    {
      title: 'Water and Waste Management',
      description: 'Our dedication lies in fostering enduring positive change, delivering enhanced value to water, wastewater utilities, and waste management sectors through the provision of seamless, efficient digital services to customers.'
    },
    {
      title: 'Gas',
      description: 'We aid in addressing challenges concerning the seamless operations of gas distribution.'
    },
    {
      title: 'Nuclear',
      description: 'Tackling industry challenges like the rise of nuclear power through innovative solutions with AR and VR technologies, while also offering sustainable alternatives.'
    },
    {
      title: 'Distributed Energy Resources',
      description: 'Delivering comprehensive services for electric vehicle charging systems, constructing microgrids, and facilitating real-time data streaming and infrastructure monitoring. We collaborate closely with end-users, manufacturers, and utilities to ensure optimal operation and efficiency.'
    },
    {
      title: 'Mining',
      description: 'Industry-focused solutions prioritize safety, environmental compliance, project development planning, and operational excellence within the mining sector.'
    },
    {
      title: 'Smart Cities',
      description: 'An integrated system utilizing IoT, data analytics, and machine learning drives smart city transformation, offering solutions such as meter reading and energy management.'
    },
    {
      title: "EPC's",
      description: 'Emphasizing ERP solutions for asset management and digital core to enhance business process automation.'
    },

    
  ]);


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
        <nav style={{ position: isNavFixed ? 'fixed' : 'relative', top: isNavFixed ? 70 : 0, zIndex: 1, width: '98vw', backgroundColor: "rgba(0, 0, 0, 0.9)", backdropFilter: "blur(20px)" }}>
          <li onClick={() => scrollToRef(overviewRef)}>Overview</li>
          <li onClick={() => scrollToRef(caseStudiesRef)}>Service Offerings</li>
          <li onClick={() => scrollToRef(queriesRef)}>Queries</li>
          {/* <li onClick={() => scrollToRef(leadershipRef)}>Meet our leadership</li> */}
        </nav>
      </div>
      <hr />
      <br />
      <br />

      <div className="container" style={{ color: 'white' }} data-aos="fade-up" ref={overviewRef}>


        <br />
        <br />

        <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }}> Overview</h1>
        <br />
        <br />
        <br />
        <br />
        <div className="row featurette" bis_skin_checked="1"  >

          <div className="col-md-7" bis_skin_checked="1">
            <h1 className="featurette-heading fw-normal lh-1" style={{ fontSize: '40px', padding: '20px', fontWeight: 'bolder' }}>Bringing forth the next era of healthcare delivery.</h1>
            <p className="lead" id='leadtext'>We collaborate with healthcare and life sciences enterprises worldwide to redefine their operational processes and enhance patient experiences significantly. Leveraging deep industry insights and technological proficiency, we continuously innovate to develop transformative solutions that revolutionize our clients' business methodologies.</p>
          </div>
          <div className="col-md-5" bis_skin_checked="1">
            <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709623443/QubicGen/medical-banner-with-doctor-working-laptop_23-2149611211_mi7vnl.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* This is rpalist ends */}
      <br />
      <br />
      <br />
      <br />
      





      {/* This is rpa offering start */}

      {/* This is rpa offering ends */}


      {/* This is who we server starts */}
      <div style={{ color: 'white', marginLeft: '40px' }} ref={caseStudiesRef} data-aos="zoom-in"  >
        <br />
        <br />
        <br />
        <br />
        <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }} > Service Offerings</h1>
        <br />
        <br />
        <br />
        <br />
        <div className="container">
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


      </div>

      {/* This is who we server ends */}
      <div className="queries" ref={queriesRef}>
        <Queries />
      </div>






    </>
  )
}

export default Healthlist