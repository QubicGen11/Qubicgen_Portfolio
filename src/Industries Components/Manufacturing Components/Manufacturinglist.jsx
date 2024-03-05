import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css';
import Queries from './Queries';

const Manufacturinglist = () => {
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

  const[ManufacturingServe,setManufacturingServe]=useState([
    {
      title: 'Automotive',
      description: 'We offer end-to-end digital transformation services and engineering solutions for the automotive industry, integrating technology expertise with a deep understanding of business needs. Our comprehensive services cover product development, supply chain, manufacturing, and after-sales support.'
    },
    {
      title: 'Metals and Mining',
      description: "QubicGen facilitates the digital transformation of Metals & Mining industries by empowering them to embrace innovative and sustainable solutions that enhance business value."
    },
    {
      title: 'Process',
      description: 'QubicGen empowers process manufacturing clients to embrace Industry 4.0, leveraging advanced digital technologies such as IIoT, IT-OT integration, digital industrial networks, collaborative supply chains, analytics, and artificial intelligence (AI).'
    },
   
    
  ]);


  const [ManufacturingOffering, setManufacturingOffering] = useState([
    {
        title: 'Enterprise Resource Planning (ERP) Systems',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709638069/QubicGen/Manufacturing/man-hand-touching-virtual-screen-erp-corporate-company-management-business-internet-technology-concept_47006-834_t6zxbx.jpg',
        description: 'Implementation, customization, and support of ERP systems to integrate and streamline various business processes such as production planning, inventory management, procurement, and supply chain management.'
    },
    {
        title: 'Manufacturing Execution Systems (MES)',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709638143/QubicGen/Manufacturing/worker-are-working-factory-engineer-worker-skills-quality-maintenance-training-industry-factory-worker-warehouse-workshop-factory-operators-mechanical-engineering-team-production_10541-7784_qyp7r2.jpg',
        description: 'Development and deployment of MES solutions to monitor, control, and optimize manufacturing processes in real-time, including shop floor operations, production scheduling, quality control, and equipment maintenance.'
    },
    {
        title: 'Supply Chain Management (SCM)',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709638293/QubicGen/Manufacturing/global-logistics-network-concept-delivery-planning-virtual-screen_161452-6699_nwfhd1.jpg',
        description: 'Implementation of SCM solutions to optimize supply chain operations, including supplier management, procurement, logistics, inventory optimization, and demand forecasting, to reduce costs and improve efficiency.'
    },
    {
        title: 'Product Lifecycle Management (PLM)',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709638360/QubicGen/Manufacturing/software-upgrade-concept-hand-connects-mechanism-with-gear_102583-6288_wk8xmp.jpg',
        description: 'Provision of PLM solutions to manage the entire lifecycle of products from conception to disposal, including product design, engineering, manufacturing, and service, to accelerate time-to-market and improve product quality.'
    },
    {
        title: 'Quality Management Systems (QMS)',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709638423/QubicGen/Manufacturing/standard-quality-control-collage-concept_23-2149595834_n2x7y6.jpg',
        description: 'Development and implementation of QMS solutions to ensure compliance with quality standards and regulations, manage non-conformance issues, track corrective actions, and drive continuous improvement in manufacturing processes.'
    },
    {
        title: 'Internet of Things (IoT) Integration',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709638603/QubicGen/Manufacturing/internet-things-concept_387612-232_tnf2jj.jpg',
        description: 'Integration of IoT technologies into manufacturing processes to collect real-time data from sensors, equipment, and production lines, enabling predictive maintenance, remote monitoring, and optimization of production processes.'
    },
    {
        title: 'Advanced Analytics and Predictive Maintenance',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709638660/QubicGen/Manufacturing/business-visual-data-analyzing-technology-by-creative-computer-software_31965-42764_q97mdy.jpg',
        description: 'Utilization of advanced analytics and predictive maintenance algorithms to analyze manufacturing data, identify patterns, predict equipment failures, and optimize maintenance schedules to minimize downtime and improve productivity.'
    },
    {
        title: 'Digital Twin Solutions',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709638705/QubicGen/Manufacturing/hand-man-with-light-bulb-there-is-gear-icon-it-he-is-using-notebook-computer-idea-inspiration-from-online-technologyinnovation-idea-concept_265022-20214_zhl0yb.jpg',
        description: 'Development of digital twin solutions to create virtual replicas of physical assets, processes, and systems, enabling simulation, optimization, and predictive analysis to improve efficiency, performance, and innovation in manufacturing operations.'
    },
    {
        title: 'Robotics and Automation Solutions',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709638836/QubicGen/Manufacturing/rpa-concept-with-blurry-hand-touching-screen_23-2149311914_f9weyv.jpg',
        description: 'Implementation of robotics and automation solutions to automate repetitive and manual tasks in manufacturing processes, including robotic process automation (RPA), autonomous vehicles, and industrial robots, to improve productivity and reduce costs.'
    },
    {
        title: 'Cybersecurity and Data Protection',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709638923/QubicGen/Manufacturing/background-secure-digital-security-system_49459-587_xsmsxn.jpg',
        description: 'Provision of cybersecurity services to protect manufacturing systems and data from cyber threats, including malware, ransomware, and data breaches, through robust security measures, access controls, and employee training.'
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
          <li onClick={() => scrollToRef(serveRef)}>Who we serve</li>
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
            <h1 className="featurette-heading fw-normal lh-1" style={{ fontSize: '40px', padding: '20px', fontWeight: 'bolder' }}>Introducing the Next Generation of Manufacturing.</h1>
            <p className="lead" id='leadtext'>At QubicGen, we specialize in providing comprehensive solutions in the manufacturing sector. From optimizing production processes to implementing cutting-edge technologies, we are dedicated to helping manufacturers achieve operational excellence, drive innovation, and stay ahead in a competitive market. With our tailored services, we empower companies to maximize efficiency, minimize costs, and elevate their overall performance.</p>
          </div>
          <div className="col-md-5" bis_skin_checked="1">
            <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709625089/QubicGen/frame-body-manufacture-new-cars-workshop-automobile-industry-robotic-arm-fanuc-m2000ia_692702-24694_fk4cmk.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* This is rpalist ends */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder', color: 'white' }}>Who we are</h1>
      <br />
      <br />
      <br />

      <div className="container" ref={serveRef}>
        <div className="container text-center">
          <div className="row" style={{ display: 'flex', justifyContent: 'space-evenly' }} >
            {ManufacturingServe.map((item) => {
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
            {ManufacturingOffering.map((serve) => (
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

export default Manufacturinglist