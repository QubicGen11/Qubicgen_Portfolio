import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css';
import Queries from '../Banking Components/Queries';
import {Link} from 'react-scroll'
import "./Retail.css"

const Retaillist = () => {
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
  const[RetailServe,setRetailServe]=useState([
    {
      title: 'Fashion and Apparel',
      description: "We provide Sustainable Solutions for Fast-Fashion Brands, ensuring value across the entire Fiber-to-Fashion Lifecycle. From sourcing to consumption, our approach prioritizes ethical practices and environmental consciousness, revolutionizing the industry for a brighter future."
    },
    {
      title: 'Food and Grocery',
      description: "In Food & Grocery, our Smart Technology Solutions drive Zero-Waste, optimizing the farm-to-fork lifecycle. Through innovation, we minimize food waste, optimize supply chains and enhance shopper convenience. From inventory management to personalized experiences, we empower businesses to embrace sustainability and deliver value to customers."
    },
    {
      title: 'Specialty Retail',
      description: "Specialty Retailers benefit from our Digital Solutions, enabling them to implement hyper-personalization strategies effectively. By leveraging advanced technology, we empower high street Retailers to tailor their offerings to individual customer preferences. Our solutions enhance the shopping experience, driving customer engagement and loyalty while maximizing sales potential."
    },
    {
        title: 'Beauty and Personal Care',
        description: "In Beauty and Personal Care, our solutions prioritize sustainability, inclusivity and innovation. By embracing these values, we aim to enhance the lives of our customers. Through sustainable practices and inclusive product offerings, we empower individuals to look and feel their best while making a positive impact."
    },

]);

const [RetailOffering, setRetailOffering] = useState([
  {
    title: 'Customer Relationship Management (CRM)',
    background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Retail+and+Consumers+Goods/services/customer+relationship+management.jpg',
    description: 'Implementation of CRM systems to manage customer interactions, capture customer data, personalize marketing efforts and improve customer retention through targeted promotions and loyalty programs.'
  },
  {
    title: 'E-Commerce Development',
    background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Retail+and+Consumers+Goods/services/e-commerce+development.jpg',
    description: 'Design, development and customization of e-commerce websites and mobile apps to enable online sales, including features such as product catalogs, shopping carts, payment gateways and order management systems.'
  },
  {
    title: 'Inventory Management Solutions',
    background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Retail+and+Consumers+Goods/services/inventory+management+solutions.jpg',
    description: 'Provision of inventory management solutions to optimize inventory levels, track stock movements, automate replenishment processes and prevent stockouts, improving inventory accuracy and turnover.'
  },
  {
    title: 'Omni-Channel Retailing',
    background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Retail+and+Consumers+Goods/services/omni-channel+retailing.jpg',
    description: 'Integration of online and offline sales channels to provide a seamless shopping experience across multiple touchpoints, including brick-and-mortar stores, e-commerce websites, mobile apps and social media platforms.'
  },
  {
    title: 'Personalization and Recommendation Engines',
    background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Retail+and+Consumers+Goods/services/personalization+and+recommendation+engins.jpg',
    description: 'Development of personalization and recommendation engines to deliver personalized product recommendations, tailored promotions and targeted marketing messages based on customer preferences and behavior.'
  },
  {
    title: 'Point of Sale (POS) Systems',
    background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Retail+and+Consumers+Goods/services/point+of+sale+systems+.jpg',
    description: 'Implementation of POS systems to manage retail transactions, including sales, inventory management, customer data capture and reporting, both in-store and online.'
  },
  {
    title: 'Retail Analytics and Business Intelligence',
    background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Retail+and+Consumers+Goods/services/retail+analytics+and+business+intilligence.jpg',
    description: 'Utilization of retail analytics tools and business intelligence solutions to analyze sales data, customer behavior and market trends, enabling data-driven decision-making and strategic planning.'
  },
  {
    title: 'RFID and Barcode Technologies',
    background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Retail+and+Consumers+Goods/services/RFID+and+Barcode+Technologies+.jpg',
    description: 'Implementation of RFID and barcode technologies for inventory tracking, asset management and loss prevention, enabling real-time visibility into merchandise movements and enhancing inventory accuracy.'
  },
  {
    title: 'Supply Chain Optimization',
    background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Retail+and+Consumers+Goods/services/supply+chain+optimization.jpg',
    description: 'Optimization of retail supply chains through advanced planning and forecasting, demand sensing, supplier collaboration and logistics optimization to improve efficiency, reduce costs and minimize stockouts.'
  },
  {
    title: 'Mobile Commerce and In-Store Technologies',
    background: 'https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Retail+and+Consumers+Goods/services/mobile+commerse.jpg',
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
        <h1 className="featurette-heading fw-normal lh-1" style={{ fontSize: '40px', padding: '20px', fontWeight: 'bolder' }}>Revolutionizing retail, one solution at a time.</h1>
            <p className="lead" id='leadtext'>At QubicGen, we specialize in delivering tailored solutions for Retail and Consumer Goods industries, optimizing operations and enhancing customer experiences. From innovative storefront designs to efficient supply chain management, we empower businesses to excel in the ever-evolving marketplace.</p>
          </div>
          <div className="col-md-5" bis_skin_checked="1">
          <img src="https://qubicgen-prod.s3.us-east-1.amazonaws.com/Industries/Retail+and+Consumers+Goods/one+solution+at+a+time.jpg" alt="" />          </div>
      </div>
    </div>

    {/* This is rpalist ends */}

    <div id='whoweserve'>
    
    </div>
  
    

      <div className="container"  style={{marginTop:'130px'}}   >

      <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder', color: 'white' }}  > Who we Serve</h1>


        <div className="container text-center" style={{marginTop:'50px'}}  >
          <div className="row" style={{ display: 'flex', justifyContent: 'space-evenly' }} >
            {RetailServe.map((item) => {
              return (
                <div className="card" style={{ height: '390px', width: '307px', marginTop: '20px' }} >
                  <a className="card1 h-96" >
                    <p style={{ fontSize: '27px', paddingBottom: "20px" }}>{item.title}</p>
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
          {RetailOffering.map((serve) => (
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

export default Retaillist