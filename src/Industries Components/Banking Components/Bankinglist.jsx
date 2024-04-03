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

  const [BankingServe, setBankingServe] = useState([
    {
      title: 'Banking',
      description: 'Banking Products drive innovation and profitability while optimizing resources for the future. Our lending and leasing solutions promote financial innovation and streamline processes, leveraging data insights for growth and risk management. Additionally, our comprehensive cards and payments services offer end-to-end solutions, from consulting to post-implementation support.'
    },
    {
      title: 'FS',
      description: 'In the realm of Retirement & Pensions, we enable funds to steer customer outcomes by integrating automated operational models, digital platforms and personalized experiences. Meanwhile, Wealth Management navigates a dynamic landscape, experiencing shifts due to digital disruption and evolving business models, marking a period of industry flux.'
    },
    {
      title: 'Insurance',
      description: 'Insurance organizations are leveraging new technologies to meet customer needs. Insurance Products assist global carriers in transitioning to customer-centric IT experiences, driving profitability and implementing future-ready solutions.'
    },

  ]);


  const [BankingOffering, setBankingOffering] = useState([
    {
        title: 'Core Banking Solutions',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709622538/QubicGen/bfsi/online-banking-internet-finance-e-commerce_53876-16542_qmqvnm.jpg',
        description: 'Development, implementation and maintenance of core banking systems to manage day-to-day banking operations such as account management, transactions and customer relationship management. '
    },
    {
        title: 'Digital Banking Solutions',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709622417/QubicGen/bfsi/hand-touching-book-hologram-with-rays-application-icons-dark-blue-background-online-communication-education-concept_670147-29290_fpexh9.jpg',
        description: ' Design and development of digital banking platforms, including internet banking portals, mobile banking apps and omnichannel banking experiences to enhance customer engagement and convenience. '
    },
    {
        title: 'Payment Solutions',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709623552/QubicGen/bfsi/coins-smartphone-virtual-environment-representing-digital-financial-transactions_934877-1234_mlsgib.jpg',
        description: 'Development of payment processing systems, including online payment gateways, mobile payment apps, peer-to-peer payment solutions and contactless payment technologies. '
    },
    {
        title: 'Risk Management and Compliance Solutions',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709623019/QubicGen/bfsi/standard-quality-control-concept-m_23-2150041853_yg1emd.jpg',
        description: 'Implementation of risk assessment tools, fraud detection systems and regulatory compliance solutions to ensure adherence to industry regulations and safeguard against financial risks. '
    },
    {
        title: 'Data Analytics and Business Intelligence',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709623525/QubicGen/bfsi/business-concept-with-graphic-holography_23-2149160928_xkqre2.jpg',
        description: 'Utilization of data analytics and business intelligence tools to analyze customer behavior, market trends and financial performance, enabling data-driven decision-making and strategic planning. '
    },
    {
        title: ' Cybersecurity Services',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709630218/QubicGen/cyber-security-concept_23-2148533308_lkosbr.jpg',
        description: ' Provision of cybersecurity services to protect sensitive financial data, prevent cyber threats and ensure compliance with security standards and regulations. '
    },
    {
        title: 'Customer Relationship Management (CRM)',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709623058/QubicGen/bfsi/customer-relationship-management-concept_23-2150038418_jaubrw.jpg',
        description: ' Implementation of CRM systems tailored to the BFSI sector to manage customer interactions, improve customer satisfaction and personalize marketing efforts. '
    },
    {
        title: 'Enterprise Resource Planning (ERP)',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709623221/QubicGen/bfsi/isometric-erp-illustration_52683-84174_cmp1yj.jpg',
        description: 'Integration of ERP solutions to streamline internal operations, automate processes and enhance efficiency across various departments such as finance, human resources and supply chain management. '
    },
    {
        title: 'Regulatory Technology (RegTech)',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709629763/QubicGen/bfsi/All-You-Need-to-Know-about-RegTech-in-2020-825x500_duakfc.jpg',
        description: 'Development of RegTech solutions to assist financial institutions in compliance management, regulatory reporting and monitoring of regulatory changes to ensure adherence to evolving compliance requirements.'
    },
    {
        title: 'Cloud Computing Services',
        background: 'https://res.cloudinary.com/defsu5bfc/image/upload/v1709622450/QubicGen/bfsi/cloud-computing-diagram-cloud-technology-data-storage-networking-internet-service-concept_29488-6850_il5ukx.jpg',
        description: 'Provision of cloud-based infrastructure, software as a service (SaaS) and platform as a service (PaaS) solutions to enable scalability, flexibility and cost-efficiency in IT operations while ensuring data security and regulatory compliance. '
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
      <nav className='cursor-default' style={{ position: isNavFixed ? 'fixed' : 'relative', top: isNavFixed ? 70 : 0, zIndex: 1, width: '98vw', backgroundColor: "rgba(0, 0, 0, 0.4)", backdropFilter: "blur(20px)" }}>
  <Link className='cursor-default' to="overview" spy={true} smooth={true} offset={-150} duration={200}><li>Overview</li></Link>
  <Link className='cursor-default' to="whoweserve" spy={true} smooth={true} offset={-150} duration={200}><li>Who we serve</li></Link>
  <Link className='cursor-default' to="serviceofferings" spy={true} smooth={true} offset={-180} duration={200}><li>Service Offerings</li></Link>
  <Link className='cursor-default' to="querie" spy={true} smooth={true} offset={-200} duration={200}><li>Queries</li></Link>
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
            <p className="lead" id='leadtext'>Harnessing fresh perspectives and cutting-edge strategies, our company is dedicated to revolutionizing the landscape of Retail Banking, Lending and Leasing, Cards and Payments, Asset and Wealth Management, Investment Banks, Stock Exchanges, as well as Life/General Insurances. Despite our newcomer status, we are committed to guiding these sectors through dynamic changes, presenting exciting opportunities to elevate product offerings, services and prioritize customer satisfaction.</p>
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
              {BankingServe.map((item) => {
                return (
                  <div className="card" style={{ height: '350px', width: '307px', marginTop: '20px' }} >
                    <a className="card1 h-80 " >
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
            {BankingOffering.map((serve) => (
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