import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css';
import Queries from './Queries';

const Bankinglist = () => {
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

  const [BankingServe, setBankingServe] = useState([
    {
      title: 'Banking',
      description: 'Banking Products drive innovation and profitability while optimizing resources for the future. Our lending and leasing solutions promote financial innovation and streamline processes, leveraging data insights for growth and risk management. Additionally, our comprehensive cards and payments services offer end-to-end solutions, from consulting to post-implementation support.'
    },
    {
      title: 'FS',
      description: 'In the realm of Retirement & Pensions, we enable funds to steer customer outcomes by integrating automated operational models, digital platforms, and personalized experiences. Meanwhile, Wealth Management navigates a dynamic landscape, experiencing shifts due to digital disruption and evolving business models, marking a period of industry flux.'
    },
    {
      title: 'Insurance',
      description: 'Insurance organizations are leveraging new technologies to meet customer needs. Insurance Products assist global carriers in transitioning to customer-centric IT experiences, driving profitability and implementing future-ready solutions.'
    },

  ]);


  const [BankingOffering, setBankingOffering] = useState([
    {
      title: 'Core Banking Solutions',
      description: 'Development, implementation, and maintenance of core banking systems to manage day-to-day banking operations such as account management, transactions, and customer relationship management. '
    },
    {
      title: 'Digital Banking Solutions',
      description: ' Design and development of digital banking platforms, including internet banking portals, mobile banking apps, and omnichannel banking experiences to enhance customer engagement and convenience. '
    },
    {
      title: 'Payment Solutions',
      description: 'Development of payment processing systems, including online payment gateways, mobile payment apps, peer-to-peer payment solutions, and contactless payment technologies. '
    },
    {
      title: 'Risk Management and Compliance Solutions',
      description: 'Implementation of risk assessment tools, fraud detection systems, and regulatory compliance solutions to ensure adherence to industry regulations and safeguard against financial risks. '
    },
    {
      title: 'Data Analytics and Business Intelligence',
      description: 'Utilization of data analytics and business intelligence tools to analyze customer behavior, market trends, and financial performance, enabling data-driven decision-making and strategic planning. '
    },
    {
      title: ' Cybersecurity Services',
      description: ' Provision of cybersecurity services to protect sensitive financial data, prevent cyber threats, and ensure compliance with security standards and regulations. '
    },
    {
      title: 'Customer Relationship Management (CRM)',
      description: ' Implementation of CRM systems tailored to the BFSI sector to manage customer interactions, improve customer satisfaction, and personalize marketing efforts. '
    },
    {
      title: 'Enterprise Resource Planning (ERP)',
      description: 'Integration of ERP solutions to streamline internal operations, automate processes, and enhance efficiency across various departments such as finance, human resources, and supply chain management. '
    },
    {
      title: 'Regulatory Technology (RegTech)',
      description: 'Development of RegTech solutions to assist financial institutions in compliance management, regulatory reporting, and monitoring of regulatory changes to ensure adherence to evolving compliance requirements.'
    },
    {
      title: 'Cloud Computing Services',
      description: 'Provision of cloud-based infrastructure, software as a service (SaaS), and platform as a service (PaaS) solutions to enable scalability, flexibility, and cost-efficiency in IT operations while ensuring data security and regulatory compliance. '
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
          <li onClick={() => scrollToRef(caseStudiesRef)}>Who we serve</li>
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
            <h1 className="featurette-heading fw-normal lh-1" style={{ fontSize: '40px', padding: '20px', fontWeight: 'bolder' }}>Guiding the course of change</h1>
            <p className="lead" id='leadtext'>Harnessing fresh perspectives and cutting-edge strategies, our company is dedicated to revolutionizing the landscape of Retail Banking, Lending and Leasing, Cards and Payments, Asset and Wealth Management, Investment Banks, Stock Exchanges, as well as Life/General Insurances. Despite our newcomer status, we are committed to guiding these sectors through dynamic changes, presenting exciting opportunities to elevate product offerings, services, and prioritize customer satisfaction.</p>
          </div>
          <div className="col-md-5" bis_skin_checked="1">
            <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709535501/QubicGen/stack-money-coin-with-trading-graph_1_jjrd0p.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* This is rpalist ends */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder', color: 'white' }}> Who we Serve</h1>
      <br />
      <br />
      <br />

      <div className="container">
        <div className="container text-center">
          <div className="row" style={{ display: 'flex', justifyContent: 'space-evenly' }} >
            {BankingServe.map((item) => {
              return (
                <div className="card" style={{ height: '350px', width: '307px', marginTop: '20px' }} >
                  <a className="card1" href="#" >
                    <p style={{ fontSize: '30px', paddingBottom: "20px" }}>{item.title}</p>
                    <p style={{ fontSize: '13px' }}>{item.description}</p>
                    <div className="go-corner" href="#">
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
        <div className="container" >
          <div className="row"   >

            {
              BankingOffering.map((serve) => {
                return (
                  <div className="book" style={{ marginLeft: '50px', marginTop: '20px' }}>
                    <p>{serve.description}</p>
                    <div className="cover">
                      <p style={{ fontSize: '20px', padding: '20px' }}>{serve.title}</p>
                    </div>
                  </div>
                )
              })
            }







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

export default Bankinglist