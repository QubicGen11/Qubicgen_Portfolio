import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css';
import Queries from '../Banking Components/Queries';
import { Link } from 'react-scroll';

const Summarylist = () => {
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

  const[ProfessionalServe,setProfessionalServe]=useState([
    {
      title: 'Audit, Accounting and Tax',
      description: 'Comprehensive audit, accounting and tax services tailored to your business needs. Ensure compliance and optimize financial performance with our expert guidance.'
    },
    {
      title: 'Consulting and Advisory',
      description: "Strategic consulting and advisory services to drive business growth and innovation. Partner with us for insightful guidance and actionable solutions."
    },
    {
      title: 'Human Capital and Recruitment',
      description: "Tailored human capital and recruitment solutions to build high-performing teams. Partner with us to attract top talent and optimize workforce efficiency."
    },
    {
        title: 'Legal,Risk and Compliance',
        description: "Comprehensive legal, risk and compliance solutions tailored to your business needs. Ensure regulatory adherence and mitigate risks with our expert guidance."
    },
    {
        title: 'Technology and Platforms',
        description: "Innovative technology solutions and platforms to propel your business forward. Harness cutting-edge tools and expertise for sustainable growth."
    },    
  ]);



  const [ProfessionalOffering, setProfessionalOffering] = useState([
    {
        title: 'IT Consulting',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Professional+Services/Professiona+services/Service+offerings/IT%20Consultings.jpeg',
        description: 'Providing strategic guidance and advisory services to businesses on leveraging technology to address specific challenges, improve processes and achieve business goals.'
    },
    {
        title: 'Digital Transformation',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Professional+Services/Professiona+services/Service+offerings/Digital%20transformation.jpeg',
        description: 'Assisting organizations in adopting digital technologies and strategies to modernize their operations, enhance customer experiences and stay competitive in the digital age.'
    },
    {
        title: 'Software Development',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Professional+Services/Professiona+services/Service+offerings/Software%20development.jpeg',
        description: 'Designing, developing and implementing customized software solutions tailored to the unique needs and requirements of businesses across various industries.'
    },
    {
        title: 'System Integration',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Professional+Services/Professiona+services/Service+offerings/system%20integration.jpeg',
        description: 'Integrating disparate systems, applications and technologies within an organization to enable seamless data exchange, workflow automation and business process optimization.'
    },
    {
        title: 'Enterprise Architecture',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Professional+Services/Professiona+services/Service+offerings/enterprice%20architecture.jpeg',
        description: 'Designing and implementing comprehensive enterprise architecture frameworks to align IT initiatives with business objectives, optimize IT infrastructure and support future growth.'
    },
    {
        title: 'Project Management',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Professional+Services/Professiona+services/Service+offerings/project%20management.jpeg',
        description: 'Managing IT projects from initiation to completion, including project planning, resource allocation, risk management and quality assurance, to ensure successful project delivery within scope, budget and timeline constraints.'
    },
    {
        title: 'Cybersecurity Services',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Professional+Services/Professiona+services/Service+offerings/cybersecurity%20services.jpeg',
        description: 'Assessing, implementing and managing cybersecurity measures to protect businesses from cyber threats, including risk assessments, security audits, penetration testing and incident response.'
    },
    {
        title: 'Cloud Services',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Professional+Services/Professiona+services/Service+offerings/Cloud%20services.jpeg',
        description: 'Providing cloud computing services, including cloud migration, architecture design, infrastructure management and software-as-a-service (SaaS) solutions, to help businesses leverage the scalability, flexibility and cost-efficiency of cloud platforms.'
    },
    {
        title: 'Data Analytics and Business Intelligence',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Professional+Services/Professiona+services/Service+offerings/data%20analytics%20and%20business%20intelligence.jpeg',
        description: 'Analyzing data to extract valuable insights, trends and patterns that can inform decision-making, drive business growth and improve operational efficiency.'
    },
    {
        title: 'Training and Support',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Professional+Services/Professiona+services/Service+offerings/training%20and%20support.jpeg',
        description: 'Offering training programs and ongoing support services to help businesses and their employees effectively utilize and maximize the value of IT solutions and technologies.'
    },
    {
        title: 'Regulatory Compliance',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Professional+Services/Professiona+services/Service+offerings/Regularity%20Compliance.jpeg',
        description: 'Assisting businesses in understanding and complying with industry regulations and standards related to data privacy, cybersecurity and IT governance.'
    },
    {
        title: 'Managed IT Services',
        background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Professional+Services/Professiona+services/Service+offerings/managed%20ITservices.jpeg',
        description: 'Providing outsourced IT management and support services, including network monitoring, helpdesk support, software updates and system maintenance, to ensure the reliability and security of IT infrastructure.'
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
        <h1 className="featurette-heading fw-normal lh-1" style={{ fontSize: '40px', padding: '20px', fontWeight: 'bolder' }}>Empower Your Business with Expert Guidance.</h1>
            <p className="lead" id='leadtext'>At QubicGen, our professional services and consulting offerings encompass a wide range of industries and sectors. With a focus on strategic planning, implementation and ongoing support, we are committed to helping clients achieve sustainable success in their respective markets. Our dedicated team of experts provides tailored solutions that drive efficiency, innovation and growth, ensuring that our clients stay ahead of the curve in an ever-evolving business landscape.</p>
          </div>
          <div className="col-md-5" bis_skin_checked="1">
            <img src="https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Professional+Services/Professiona+services/Overview.jpg" alt="" />
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
            {ProfessionalServe.map((item) => {
              return (
                <div className="card" style={{ height: '350px', width: '307px', marginTop: '20px' }} >
                  <a className="card1" >
                    <p style={{ fontSize: '30px', paddingBottom: "20px" ,lineHeight:'30px'}}>{item.title}</p>
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

    <div style={{ color: 'white', marginLeft: '40px',marginTop:'90px'}} data-aos="zoom-in"  >
      
      <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }} > Service Offerings</h1>
  
   

      {/* This is offering */}

      <div className="container" style={{marginTop:'80px'}}  >
        <div className="row">
          {ProfessionalOffering.map((serve) => (
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

export default Summarylist