import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css';
import Queries from './Queries';

const Medialist = () => {
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


  const [EnergyOffering, setEnergyOffering] = useState([
    {
        title: 'Smart Grid Solutions',
        background:'',
        description: 'Development and implementation of smart grid technologies to modernize the electrical grid infrastructure, improve energy efficiency, enable real-time monitoring, and support integration of renewable energy sources.'
    },
    {
        title: 'Meter Data Management',
        description: 'Provision of meter data management solutions to collect, store, and analyze energy consumption data from smart meters, enabling utilities to optimize billing, forecasting, and demand-side management.'
    },
    {
        title: 'Asset Management Systems',
        description: 'Design and deployment of asset management systems to optimize maintenance schedules, monitor equipment health, and extend the lifespan of critical infrastructure assets such as power plants, substations, and distribution networks.'
    },
    {
        title: 'Renewable Energy Integration',
        description: 'Integration of renewable energy sources, such as solar, wind, and hydroelectric power, into the existing energy grid through advanced control systems, forecasting models, and grid balancing technologies.'
    },
    {
        title: 'Energy Trading and Risk Management (ETRM)',
        description: 'Development and implementation of ETRM solutions to manage energy trading activities, including procurement, scheduling, pricing, and hedging, while mitigating market risks and ensuring regulatory compliance.'
    },
    {
        title: 'Customer Engagement Platforms',
        description: 'Creation of customer engagement platforms to empower energy consumers with real-time access to their energy usage data, personalized recommendations for energy savings, and interactive tools for managing their accounts.'
    },
    {
        title: 'Demand Response Solutions',
        description: 'Deployment of demand response solutions to enable utilities to dynamically adjust energy consumption in response to grid conditions, customer preferences, and peak demand events, thereby improving grid stability and reliability.'
    },
    {
        title: 'Grid Optimization and Analytics',
        description: 'Utilization of advanced analytics and optimization techniques to analyze grid data, optimize energy distribution, predict equipment failures, and improve operational efficiency across the energy infrastructure.'
    },
    {
        title: 'Cybersecurity Solutions',
        description: 'Provision of cybersecurity services to protect energy infrastructure from cyber threats, including ransomware attacks, data breaches, and unauthorized access, through robust security measures, threat intelligence, and incident response capabilities.'
    },
    {
        title: 'Regulatory Compliance Solutions',
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
            <h1 className="featurette-heading fw-normal lh-1" style={{ fontSize: '40px', padding: '20px', fontWeight: 'bolder' }}>QubicGen's cutting edge Solutions.</h1>
            <p className="lead" id='leadtext'> Investors, management, and boards prioritize building an extensive content library over immediate operational profits to boost subscriptions and ad revenues. As media houses and new-age media companies transition, their strategic emphasis will soon pivot from content creation to content monetization. Positioned within the evolving value chain, media houses can drive profitability forward with QubicGen's innovative solutions.</p>
          </div>
          <div className="col-md-5" bis_skin_checked="1">
            <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709620134/QubicGen/creative-digital-picture-gallery-blue-background-photo-album-media-technology-concept_670147-2557_gsqy9v.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* This is rpalist ends */}
      <br />
      <br />
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

export default Medialist