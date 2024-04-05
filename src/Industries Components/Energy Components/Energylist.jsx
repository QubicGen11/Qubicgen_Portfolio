import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css';
import Queries from '../Banking Components/Queries';
import { Link } from 'react-scroll';

const Energylist = () => {
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

  const[EnergyServe,setEnergyServe]=useState([
    {
      title: 'Electricity',
      description: 'At QubicGen, our developed solutions support the holistic growth of the power industry, spanning Electricity Generation, Transmission, Distribution, Retail and catering to both commercial and residential sectors.'
    },
    {
      title: 'Renewables',
      description: 'Delivers advanced monitoring and efficiency management platforms for solar and wind energy assets. Additionally, emphasizes the development of innovative technologies in renewable energy, including hydroelectric, wind, bioenergy, solar and geothermal power.'
    },
    {
      title: 'Water and Waste Management',
      description: 'Our dedication lies in fostering enduring positive change, delivering enhanced value to water, wastewater utilities and waste management sectors through the provision of seamless, efficient digital services to customers.'
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
      description: 'Delivering comprehensive services for electric vehicle charging systems, constructing microgrids and facilitating real-time data streaming and infrastructure monitoring. We collaborate closely with end-users, manufacturers and utilities to ensure optimal operation and efficiency.'
    },
    {
      title: 'Mining',
      description: 'Industry-focused solutions prioritize safety, environmental compliance, project development planning and operational excellence within the mining sector.'
    },
    {
      title: 'Smart Cities',
      description: 'An integrated system utilizing IoT, data analytics and machine learning drives smart city transformation, offering solutions such as meter reading and energy management.'
    },
    {
      title: "EPC's",
      description: 'Emphasizing ERP solutions for asset management and digital core to enhance business process automation.'
    },

    
  ]);


  const [EnergyOffering, setEnergyOffering] = useState([
    {
        title: 'Smart Grid Solutions',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709623707/QubicGen/Energy%20and%20Utilities/ideas-reduce-carbon-dioxide-emissions-atmosphere_539854-1838_pbdccd.jpg',
        description: 'Development and implementation of smart grid technologies to modernize the electrical grid infrastructure, improve energy efficiency, enable real-time monitoring and support integration of renewable energy sources.'
    },
    {
        title: 'Meter Data Management',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709631012/QubicGen/Energy%20and%20Utilities/businessman-analyse-sales-data-economic-growth-graphs_593195-427_lvcn5s.jpg',
        description: 'Provision of meter data management solutions to collect, store and analyze energy consumption data from smart meters, enabling utilities to optimize billing, forecasting and demand-side management.'
    },
    {
        title: 'Asset Management Systems',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709631158/QubicGen/Energy%20and%20Utilities/top-view-business-people-working-with-ipad_23-2150103556_plpa9s.jpg',
        description: 'Design and deployment of asset management systems to optimize maintenance schedules, monitor equipment health and extend the lifespan of critical infrastructure assets such as power plants, substations and distribution networks.'
    },
    {
        title: 'Renewable Energy Integration',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709623935/QubicGen/Energy%20and%20Utilities/view-bioengineering-advance-tech_23-2150640995_seaxgb.jpg',
        description: 'Integration of renewable energy sources, such as solar, wind and hydroelectric power, into the existing energy grid through advanced control systems, forecasting models and grid balancing technologies.'
    },
    {
        title: 'Energy Trading and Risk Management (ETRM)',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709624112/QubicGen/Energy%20and%20Utilities/abstraction-lit-light-bulb-graph-stock-indices-symbol-insight-idea-generative-ai_170984-5148_erhnoq.jpg',
        description: 'Development and implementation of ETRM solutions to manage energy trading activities, including procurement, scheduling, pricing and hedging, while mitigating market risks and ensuring regulatory compliance.'
    },
    {
        title: 'Customer Engagement Platforms',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709631548/QubicGen/Energy%20and%20Utilities/business-people-shaking-hands-greeting_53876-101876_ipaivh.jpg',
        description: 'Creation of customer engagement platforms to empower energy consumers with real-time access to their energy usage data, personalized recommendations for energy savings and interactive tools for managing their accounts.'
    },
    {
        title: 'Demand Response Solutions',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709632941/QubicGen/Energy%20and%20Utilities/screen-with-graph-it-that-says-word-financial-it_188544-27324_rysvmg.jpg',
        description: 'Deployment of demand response solutions to enable utilities to dynamically adjust energy consumption in response to grid conditions, customer preferences and peak demand events, thereby improving grid stability and reliability.'
    },
    {
        title: 'Grid Optimization and Analytics',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709631926/QubicGen/Energy%20and%20Utilities/side-view-engineer-drawing-plan-outdoors_23-2149352262_z7jkuz.jpg',
        description: 'Utilization of advanced analytics and optimization techniques to analyze grid data, optimize energy distribution, predict equipment failures and improve operational efficiency across the energy infrastructure.'
    },
    {
        title: 'Cybersecurity Solutions',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709629957/QubicGen/bfsi/person-working-html-computer_23-2150038856_s2dzhs.jpg',
        description: 'Provision of cybersecurity services to protect energy infrastructure from cyber threats, including ransomware attacks, data breaches and unauthorized access, through robust security measures, threat intelligence and incident response capabilities.'
    },
    {
        title: 'Regulatory Compliance Solutions',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709634506/QubicGen/Energy%20and%20Utilities/standard-quality-control-concept-m_23-2150041857_aywknn.jpg',
        description: 'Assistance with regulatory compliance requirements, including reporting, auditing and documentation, to ensure adherence to industry standards and regulations governing the energy and utilities sector.'
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

      <div className="container" style={{ color: 'white',marginTop:'100px' }} data-aos="fade-up"  >
      <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder', color: 'white' }}  > Overview</h1>




    
        <div className="row featurette" bis_skin_checked="1" style={{marginTop:'100px'}}  >

          <div className="col-md-7" bis_skin_checked="1">
          <h1 className="featurette-heading fw-normal lh-1" style={{ fontSize: '40px', padding: '20px', fontWeight: 'bolder' }}>Driving the digital evolution of NextGen Utilities.</h1>
            <p className="lead" id='leadtext'>QubicGen, an established solution provider in the Energy and Utility sectors encompassing Power, Water & Wastewater, Renewable, Electric Vehicle, Microgrid, Natural Resources and Mining industries. We facilitate their growth trajectory through digital technology, business consultancy, infrastructure & enterprise security, platform & network services, etc., aiming to enhance service quality and productivity. Moreover, we tackle industry challenges by continually investing in innovative ideas and solutions.</p>
          </div>
          <div className="col-md-5" bis_skin_checked="1">
          <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709550867/QubicGen/illustration-windmills_433905-2221_ll2zju.jpg" alt="" />          </div>
        </div>
      </div>

      {/* This is rpalist ends */}

      <div id='whoweserve'>
      
      </div>
    
      

        <div className="container"  style={{marginTop:'130px'}}   >

        <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder', color: 'white' }}  > Who we Serve</h1>
  

          <div className="container text-center" style={{marginTop:'50px'}}  >
            <div className="row" style={{ display: 'flex', justifyContent: 'space-evenly' }} >
              {EnergyServe.map((item) => {
                return (
                  <div className="card" style={{ height: '350px', width: '307px', marginTop: '20px' }} >
                    <a className="card1" >
                      <p style={{ fontSize: '26px', paddingBottom: "20px" }}>{item.title}</p>
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

        {/* This is offering ends */}





      </div>

      {/* This is who we server ends */}
      <div className="queries" id='querie' style={{marginTop:'50px'}}>
        <Queries />
      </div>






    </>
  )
}

export default Energylist