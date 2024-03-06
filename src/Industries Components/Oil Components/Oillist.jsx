import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css';
import Queries from './Queries';
import {Link} from 'react-scroll'

const Oillist = () => {
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

  const[OilServe,setOilServe]=useState([
    {
      title: 'Upstream',
      description: "In Upstream, Tech Mahindra's offerings thrive through collaboration among domain, business, and IT experts, creating a unique and effective approach."
    },
    {
      title: 'Downstream',
      description: "QubicGen leverages deep domain expertise to provide innovative solutions for downstream clients, enhancing customer satisfaction and operational efficiency."
    },
   
  ]);


  const [OilOffering, setOilOffering] = useState([
    {
        title: 'Exploration and Production Software',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709707444/QubicGen/Oil%20and%20Gas/person-using-ai-tool-job_23-2150711507_ngsldj.jpg',
        description: 'Development and implementation of software solutions for reservoir modeling, seismic interpretation, well planning, drilling optimization, production monitoring, and reservoir management.'
    },
    {
        title: 'Asset Integrity Management',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709707492/QubicGen/Oil%20and%20Gas/what_is_asset_integrity_lbngaw.png',
        description: 'Provision of asset integrity management solutions to monitor and maintain the integrity of oil and gas assets, including pipelines, platforms, and equipment, through inspection, maintenance, and risk assessment.'
    },
    {
        title: 'Integrated Operations Centers',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709707503/QubicGen/Oil%20and%20Gas/smart_manufacturing_control_room_image_dgfiry.jpg',
        description: 'Design and deployment of integrated operations centers (IOCs) to enable real-time monitoring, control, and decision-making across oil and gas operations, including drilling, production, and transportation.'
    },
    {
        title: 'Enterprise Resource Planning (ERP) Systems',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709707545/QubicGen/Oil%20and%20Gas/1683272400288_gpp0lc.jpg',
        description: 'Implementation of ERP systems tailored to the needs of the oil and gas industry to streamline business processes, including financial management, procurement, supply chain management, and human resources.'
    },
    {
        title: 'Geographic Information Systems (GIS)',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709707576/QubicGen/Oil%20and%20Gas/GIS_header-icon-art_qfeu7r.png',
        description: 'Integration of GIS solutions to manage spatial data, including maps, satellite imagery, and geographic features, for applications such as land management, pipeline routing, environmental monitoring, and emergency response.'
    },
    {
        title: 'Health, Safety, and Environment (HSE) Solutions',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709707609/QubicGen/Oil%20and%20Gas/health-safety-environment-hse-dark-blue-background_387612-470_jbjunr.jpg',
        description: 'Development and implementation of HSE solutions to ensure compliance with health, safety, and environmental regulations, manage incidents, track environmental performance, and mitigate risks.'
    },
    {
        title: 'Remote Monitoring and Surveillance',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709708106/QubicGen/Oil%20and%20Gas/portrait-male-security-guard-with-uniform_23-2150368726_zw6aod.jpg',
        description: 'Deployment of remote monitoring and surveillance systems using sensors, drones, and other technologies to monitor remote oil and gas assets, detect anomalies, and optimize operations.'
    },
    {
        title: 'Data Analytics and Predictive Maintenance',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709707792/QubicGen/Oil%20and%20Gas/Data-Analytics-for-PdM-800x445_et1etp.jpg',
        description: 'Utilization of data analytics and predictive maintenance algorithms to analyze equipment performance data, predict equipment failures, and optimize maintenance schedules to minimize downtime and improve asset reliability.'
    },
    {
        title: 'Cybersecurity and Industrial Control Systems (ICS) Security',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709707969/QubicGen/Oil%20and%20Gas/organized-female-hacker-her-team-stealing-information-from-government-server-using-super-computers_482257-20619_rkh42i.jpg',
        description: 'Provision of cybersecurity services to protect oil and gas assets and operations from cyber threats, including ransomware attacks, data breaches, and unauthorized access, through robust security measures and monitoring of industrial control systems.'
    },
    {
        title: 'Digital Twins and Simulation Modeling',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709708024/QubicGen/Oil%20and%20Gas/digitaltwins_qzmbsn.jpg',
        description: 'Development of digital twin solutions and simulation models to create virtual replicas of oil and gas assets, simulate operational scenarios, optimize performance, and support decision-making.'
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
<Link to="whoweserve" spy={true} smooth={true} offset={-150} duration={200}><li>Who we serve</li></Link>
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
  
    

      <div className="container"  style={{marginTop:'130px'}}   >

      <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder', color: 'white' }}  > Who we Serve</h1>


        <div className="container text-center" style={{marginTop:'50px'}}  >
          <div className="row" style={{ display: 'flex', justifyContent: 'space-evenly' }} >
            {OilServe.map((item) => {
              return (
                <div className="card" style={{ height: '350px', width: '307px', marginTop: '20px' }} >
                  <a className="card1" >
                    <p style={{ fontSize: '30px', paddingBottom: "20px" }}>{item.title}</p>
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
          {OilOffering.map((serve) => (
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

export default Oillist