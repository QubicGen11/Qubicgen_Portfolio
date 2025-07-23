import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css';
import Queries from '../Banking Components/Queries';
import { Link } from 'react-scroll';

const Bankinglist = () => {


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
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Healthcare+Life+Sciences/health+care/Service+Offerings/Electric%20health%20records.jpeg',
        description: 'Development, implementation and customization of electronic health records (EHR) systems to digitize patient health information, streamline clinical workflows and improve care coordination among healthcare providers.'
    },
    {
        title: 'Health Information Exchange (HIE)',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Healthcare+Life+Sciences/health+care/Service+Offerings/health%20information%20exchange.jpeg',
        description: 'Integration of health information exchange platforms to facilitate secure sharing of patient data among healthcare organizations, enabling seamless communication and collaboration across the care continuum.'
    },
    {
        title: 'Telemedicine and Telehealth Solutions',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Healthcare+Life+Sciences/health+care/Service+Offerings/telemedecine%20and%20tele%20health%20solutions.jpeg',
        description: 'Design and deployment of telemedicine and telehealth solutions, including video conferencing platforms, remote patient monitoring systems and virtual care platforms, to enable remote consultations, monitoring and care delivery.'
    },
    {
        title: 'Medical Imaging and Picture Archiving and Communication Systems (PACS)',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Healthcare+Life+Sciences/health+care/Service+Offerings/medical%20imaging.jpeg',
        description: 'Development and implementation of PACS solutions to manage medical imaging data, including storage, retrieval and distribution of radiology images, enabling timely diagnosis and treatment planning.'
    },
    {
        title: 'Healthcare Analytics and Business Intelligence',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Healthcare+Life+Sciences/health+care/Service+Offerings/healthcare%20Analytics.jpeg',
        description: 'Utilization of healthcare analytics tools and business intelligence solutions to analyze clinical, operational and financial data, identify trends and make data-driven decisions to improve patient outcomes and optimize resource utilization.'
    },
    {
        title: 'Revenue Cycle Management (RCM)',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Healthcare+Life+Sciences/health+care/Service+Offerings/revenue%20cycling%20management.jpeg',
        description: 'Provision of revenue cycle management services to healthcare organizations, including billing, coding, claims management and accounts receivable management, to optimize revenue capture and ensure timely reimbursement.'
    },
    {
        title: 'Population Health Management',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Healthcare+Life+Sciences/health+care/Service+Offerings/population%20health%20management.jpeg',
        description: 'Development and implementation of population health management platforms to analyze patient populations, identify at-risk individuals and implement targeted interventions to improve health outcomes and reduce healthcare costs.'
    },
    {
        title: 'Healthcare Interoperability and Standards Compliance',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Healthcare+Life+Sciences/health+care/Service+Offerings/Healthcare+Interoperability+and+Stannderds+compilance.jpeg',
        description: 'Assistance with healthcare interoperability initiatives and compliance with industry standards such as HL7, FHIR and DICOM to ensure seamless data exchange and interoperability among healthcare systems and applications.'
    },
    {
        title: 'Cybersecurity and Data Privacy',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Healthcare+Life+Sciences/health+care/Service+Offerings/cybersecurity%20and%20data%20privacy.jpeg',
        description: 'Provision of cybersecurity services to protect sensitive healthcare data from cyber threats, including ransomware attacks, data breaches and unauthorized access, through robust security measures, encryption and access controls.'
    },
    {
        title: 'Compliance and Regulatory Consulting',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Healthcare+Life+Sciences/health+care/Service+Offerings/compliance%20and%20regularity%20consulting.jpeg',
        description: 'Consulting and advisory services to help healthcare organizations navigate regulatory requirements, including HIPAA, HITECH, GDPR and Meaningful Use and implement compliance programs to safeguard patient privacy and data security.'
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
  <Link className='hover:cursor-pointer' to="overview" spy={true} smooth={true} offset={-150} duration={200}><li>Overview</li></Link>
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
          <h1 className="featurette-heading fw-normal lh-1" style={{ fontSize: '40px', padding: '20px', fontWeight: 'bolder' }}>Bringing forth the next era of healthcare delivery.</h1>
            <p className="lead" id='leadtext'>We collaborate with healthcare and life sciences enterprises worldwide to redefine their operational processes and enhance patient experiences significantly. Leveraging deep industry insights and technological proficiency, we continuously innovate to develop transformative solutions that revolutionize our client's business methodologies.</p>
          </div>
          <div className="col-md-5" bis_skin_checked="1">
          <img src="https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Healthcare+Life+Sciences/health+care/overview.jpeg" alt="" />          </div>
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
                <p className='text-sm'  >{serve.description}</p>
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