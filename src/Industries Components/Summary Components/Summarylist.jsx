import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css';
import Queries from './Queries';

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
      description: 'Comprehensive audit, accounting, and tax services tailored to your business needs. Ensure compliance and optimize financial performance with our expert guidance.'
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
        description: "Comprehensive legal, risk, and compliance solutions tailored to your business needs. Ensure regulatory adherence and mitigate risks with our expert guidance."
    },
    {
        title: 'Technology and Platforms',
        description: "Innovative technology solutions and platforms to propel your business forward. Harness cutting-edge tools and expertise for sustainable growth."
    },    
  ]);



const [EnergyOffering, setEnergyOffering] = useState([
    {
        title: 'Smart Grid Solutions',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709623707/QubicGen/Energy%20and%20Utilities/ideas-reduce-carbon-dioxide-emissions-atmosphere_539854-1838_pbdccd.jpg',
        description: 'Development and implementation of smart grid technologies to modernize the electrical grid infrastructure, improve energy efficiency, enable real-time monitoring, and support integration of renewable energy sources.'
    },
    {
        title: 'Meter Data Management',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709631012/QubicGen/Energy%20and%20Utilities/businessman-analyse-sales-data-economic-growth-graphs_593195-427_lvcn5s.jpg',
        description: 'Provision of meter data management solutions to collect, store, and analyze energy consumption data from smart meters, enabling utilities to optimize billing, forecasting, and demand-side management.'
    },
    {
        title: 'Asset Management Systems',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709631158/QubicGen/Energy%20and%20Utilities/top-view-business-people-working-with-ipad_23-2150103556_plpa9s.jpg',
        description: 'Design and deployment of asset management systems to optimize maintenance schedules, monitor equipment health, and extend the lifespan of critical infrastructure assets such as power plants, substations, and distribution networks.'
    },
    {
        title: 'Renewable Energy Integration',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709623935/QubicGen/Energy%20and%20Utilities/view-bioengineering-advance-tech_23-2150640995_seaxgb.jpg',
        description: 'Integration of renewable energy sources, such as solar, wind, and hydroelectric power, into the existing energy grid through advanced control systems, forecasting models, and grid balancing technologies.'
    },
    {
        title: 'Energy Trading and Risk Management (ETRM)',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709624112/QubicGen/Energy%20and%20Utilities/abstraction-lit-light-bulb-graph-stock-indices-symbol-insight-idea-generative-ai_170984-5148_erhnoq.jpg',
        description: 'Development and implementation of ETRM solutions to manage energy trading activities, including procurement, scheduling, pricing, and hedging, while mitigating market risks and ensuring regulatory compliance.'
    },
    {
        title: 'Customer Engagement Platforms',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709631548/QubicGen/Energy%20and%20Utilities/business-people-shaking-hands-greeting_53876-101876_ipaivh.jpg',
        description: 'Creation of customer engagement platforms to empower energy consumers with real-time access to their energy usage data, personalized recommendations for energy savings, and interactive tools for managing their accounts.'
    },
    {
        title: 'Demand Response Solutions',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709632941/QubicGen/Energy%20and%20Utilities/screen-with-graph-it-that-says-word-financial-it_188544-27324_rysvmg.jpg',
        description: 'Deployment of demand response solutions to enable utilities to dynamically adjust energy consumption in response to grid conditions, customer preferences, and peak demand events, thereby improving grid stability and reliability.'
    },
    {
        title: 'Grid Optimization and Analytics',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709631926/QubicGen/Energy%20and%20Utilities/side-view-engineer-drawing-plan-outdoors_23-2149352262_z7jkuz.jpg',
        description: 'Utilization of advanced analytics and optimization techniques to analyze grid data, optimize energy distribution, predict equipment failures, and improve operational efficiency across the energy infrastructure.'
    },
    {
        title: 'Cybersecurity Solutions',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709629957/QubicGen/bfsi/person-working-html-computer_23-2150038856_s2dzhs.jpg',
        description: 'Provision of cybersecurity services to protect energy infrastructure from cyber threats, including ransomware attacks, data breaches, and unauthorized access, through robust security measures, threat intelligence, and incident response capabilities.'
    },
    {
        title: 'Regulatory Compliance Solutions',
        background: 'https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595842.jpg?t=st=1709632597~exp=1709636197~hmac=86d820bff0ff630ea41481b3da50aba411ae335e30d96139d80d8a9ed8ab3ffa&w=740',
        description: 'Assistance with regulatory compliance requirements, including reporting, auditing, and documentation, to ensure adherence to industry standards and regulations governing the energy and utilities sector.'
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
          <li onClick={() => scrollToRef(serveRef)}>Industry Segments</li>
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
            <h1 className="featurette-heading fw-normal lh-1" style={{ fontSize: '40px', padding: '20px', fontWeight: 'bolder' }}>Empower Your Business with Expert Guidance.</h1>
            <p className="lead" id='leadtext'>At QubicGen, our professional services and consulting offerings encompass a wide range of industries and sectors. With a focus on strategic planning, implementation, and ongoing support, we are committed to helping clients achieve sustainable success in their respective markets. Our dedicated team of experts provides tailored solutions that drive efficiency, innovation, and growth, ensuring that our clients stay ahead of the curve in an ever-evolving business landscape.</p>
          </div>
          <div className="col-md-5" bis_skin_checked="1">
            <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709626430/QubicGen/html-css-collage-concept-with-person_23-2150062008_ddmout.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* This is rpalist ends */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder', color: 'white' }}> Industry Segments</h1>
      <br />
      <br />
      <br />

      <div className="container" ref={serveRef}>
        <div className="container text-center">
          <div className="row" style={{ display: 'flex', justifyContent: 'space-evenly' }} >
            {ProfessionalServe.map((item) => {
              return (
                <div className="card" style={{ height: '350px', width: '307px', marginTop: '20px' }} >
                  <a className="card1" >
                    <p style={{ fontSize: '30px', paddingBottom: "20px",lineHeight:'30px' }}>{item.title}</p>
                    <p style={{ fontSize: '13px',marginTop:'10px' }}>{item.description}</p>
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
            {EnergyOffering.map((serve) => (
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

export default Summarylist