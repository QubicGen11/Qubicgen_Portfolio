import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css';
import Queries from '../Banking Components/Queries';
import { Link } from 'react-scroll';

const Travellist = () => {
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

  const[TravelServe,setTravelServe]=useState([
    {
      title: 'Travel',
      description: "Explore the world with confidence and convenience with our tailored travel solutions. From booking to adventure, we've got you covered every step of the way."
    },
    {
      title: 'Transportation and Logistics',
      description: "Efficiently navigate the complexities of transportation and logistics with our streamlined solutions. From supply chain optimization to seamless delivery, we ensure your goods reach their destination promptly and reliably."
    },
    {
      title: 'Hospitality',
      description: "Experience unparalleled hospitality with our personalized services and attention to detail. From luxurious accommodations to memorable experiences, we create moments that exceed expectations."
    },
    {
        title: 'Maritime',
        description: "Dive into the world of maritime excellence with our comprehensive solutions. From efficient cargo handling to vessel management, we navigate the seas with precision and reliability."
    },
    {
        title: 'Rail',
        description: "Embark on a journey of efficiency and reliability with our rail solutions. From commuter services to freight transportation, we keep the wheels of progress moving seamlessly."
    },
]);


const [TransportOffering, setTransportOffering] = useState([
  {
      title: 'Transportation Management Systems (TMS)',
      background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709704466/QubicGen/Transportation/vehicles-laptop-supply-chain-representation_23-2149853161_qge0hr.jpg',
      description: 'Development and implementation of TMS solutions to optimize transportation operations, including route planning, load optimization, carrier selection, freight tracking and performance analytics.'
  },
  {
      title: 'Fleet Management Solutions',
      background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709704686/QubicGen/Transportation/supply-chain-representation-still-life_23-2150172465_uk6yir.jpg',
      description: 'Provision of fleet management solutions to monitor and manage vehicle fleets, including GPS tracking, vehicle diagnostics, fuel management, maintenance scheduling and driver performance monitoring.'
  },
  {
      title: 'Warehouse Management Systems (WMS)',
      background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709704750/QubicGen/Transportation/warehouse-worker-logistics-manager-doing-products-audit-storage-room-storehouse-employees-managing-goods-parcels-quality-control-while-analyzing-data-clipboard-digital-tablet_482257-62415_rudi0o.jpg',
      description: 'Implementation of WMS solutions to streamline warehouse operations, including inventory management, order fulfillment, picking and packing, receiving and shipping and warehouse optimization.'
  },
  {
      title: 'Supply Chain Visibility',
      background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709704994/QubicGen/Transportation/map-global-logistics-partnership-import-export-concept_161452-7090_zvnprd.jpg',
      description: 'Development of supply chain visibility solutions to provide real-time visibility into the movement of goods across the supply chain, enabling proactive monitoring, exception management and improved decision-making.'
  },
  {
      title: 'Last-Mile Delivery Solutions',
      background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709705095/QubicGen/Transportation/isometric-fast-free-delivery-by-man-ride-scooter-concept-food-service-website-banner-vector-illustration_589019-2086_ffmrtj.jpg',
      description: 'Deployment of last-mile delivery solutions to optimize the final leg of the delivery process, including route optimization, delivery scheduling, driver communication and customer notifications, to improve delivery efficiency and customer satisfaction.'
  },
  {
      title: 'Cold Chain Management',
      background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709705177/QubicGen/Transportation/role-logistics-globalised-5g-tecnology-concept_250469-9921_dhmyzy.jpg',
      description: 'Implementation of cold chain management solutions to monitor and maintain temperature-sensitive goods throughout the transportation and storage process, ensuring compliance with temperature requirements and quality standards.'
  },
  {
      title: 'Freight Brokerage Platforms',
      background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709705265/QubicGen/Transportation/silhouette-engineer-working-with-container-truck-freight-cargo-ship-importexport-commercial-logistic-transportation-business-concept-generative-ai_634053-3772_rdu1qp.jpg',
      description: 'Development of freight brokerage platforms to facilitate the matching of shippers with carriers, automate freight booking and documentation processes and optimize freight brokerage operations.'
  },
  {
      title: 'Electronic Data Interchange (EDI)',
      background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709705457/QubicGen/Transportation/business-data-information-device-screen_53876-133711_lvikym.jpg',
      description: 'Integration of EDI solutions to enable electronic exchange of business documents, such as orders, invoices and shipping notices, between trading partners in the transportation and logistics ecosystem, improving efficiency and accuracy of data exchange.'
  },
  {
      title: 'Route Optimization and Planning',
      background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709705570/QubicGen/Transportation/travel-agent-offering-trip-planning-clients_23-2149079484_pr6xfd.jpg',
      description: 'Utilization of route optimization and planning software to optimize delivery routes, reduce transportation costs, minimize fuel consumption and improve on-time delivery performance.'
  },
  {
      title: 'Predictive Analytics and Demand Forecasting',
      background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709705635/QubicGen/Transportation/business-team-financial-data-analysis-meeting-report-paper-harmony-office_31965-92107_d132f4.jpg',
      description: 'Utilization of predictive analytics and demand forecasting algorithms to analyze historical data, predict future demand patterns and optimize inventory levels, transportation capacity and resource allocation.'
  },
  {
      title: 'Mobile Commerce and In-Store Technologies',
      background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709705944/QubicGen/Transportation/smart-store-management-systems-conceptmanager-using-digital-tablet-blurred-store-as-background_12892-128_inyhve.jpg',
      description: 'Development of mobile commerce solutions and in-store technologies, such as mobile payment systems, digital signage, interactive kiosks and augmented reality (AR) experiences, to enhance the shopping experience and drive engagement.'
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
          <h1 className="featurette-heading fw-normal lh-1 text-2xl md:text-xl md:ml-3 lg:text-4xl" >Experience the future of travel, transportation, hospitality and logistics with us.</h1>
            <p className="lead" id='leadtext'>At QubicGen, we seamlessly integrate services across Travel, Transportation, Hospitality and Logistics sectors, harnessing innovation to streamline operations and elevate customer experiences globally. From efficient logistics management to unforgettable hospitality services, we are your trusted partner in navigating the intricacies of modern-day travel and commerce.</p>
          </div>
          <div className="col-md-5" bis_skin_checked="1">
          <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709625514/QubicGen/global-transportation-industry_190619-6_sg3ef7.jpg" alt="" />          </div>
        </div>
      </div>

      {/* This is rpalist ends */}

      <div id='whoweserve'>
      
      </div>
    
      

        <div className="container"  style={{marginTop:'130px'}}   >

        <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder', color: 'white' }}  > Who we Serve</h1>
  

          <div className="container text-center" style={{marginTop:'50px'}}  >
            <div className="row" style={{ display: 'flex', justifyContent: 'space-evenly' }} >
              {TravelServe.map((item) => {
                return (
                  <div className="card" style={{ height: '350px', width: '307px', marginTop: '20px' }} >
                    <a className="card1" >
                      <p style={{ fontSize: '24px', paddingBottom: "20px" }}>{item.title}</p>
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

      <div style={{ color: 'white', marginLeft: '40px',marginTop:'70px'}} data-aos="zoom-in"  >
        
        <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }} > Service Offerings</h1>
    
     

        {/* This is offering */}

        <div className="container" style={{marginTop:'80px'}}  >
          <div className="row">
            {TransportOffering.map((serve) => (
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

export default Travellist