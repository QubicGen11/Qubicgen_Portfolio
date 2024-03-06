import React, { useEffect, useRef, useState } from 'react'
import './Sap.css'
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import Queries from '../Industries Components/Banking Components/Queries';
const Saplist = () => {
  const overviewRef = useRef(null);
  const serveRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const queriesRef = useRef(null);

  const [isNavFixed, setIsNavFixed] = useState(false);
  
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // This is for rpa offering cards
  const [Sapoffers, setSapoffers] = useState([
    {
        title: 'Enterprise Resource Planning (ERP)',
        description: 'SAP ERP software helps businesses manage core processes such as finance, human resources, procurement, manufacturing, sales, and distribution in an integrated manner. '
    },
    {
        title: 'Customer Relationship Management (CRM)',
        description: 'SAP CRM solutions enable businesses to manage customer interactions, sales processes, marketing campaigns, and service activities to improve customer satisfaction and loyalty.'
    },
    {
        title: 'Supply Chain Management (SCM)',
        description: 'SAP SCM software helps businesses optimize supply chain processes, including demand planning, inventory management, procurement, production planning, and logistics, to enhance efficiency and responsiveness. '
    },
    {
        title: 'Supplier Relationship Management (SRM)',
        description: 'SAP SRM solutions focus on managing relationships with suppliers, facilitating procurement processes, negotiating contracts, and ensuring compliance to improve supplier collaboration and reduce costs.'
    },
    {
        title: 'Business Intelligence (BI) and Analytics',
        description: 'SAP BI and analytics tools provide capabilities for data visualization, reporting, ad-hoc analysis, and predictive analytics, enabling businesses to gain insights into their operations and make informed decisions.'
    },
    {
        title: 'Enterprise Asset Management (EAM)',
        description: 'SAP EAM software supports the management of physical assets throughout their lifecycle, including asset tracking, maintenance planning, work order management, and asset performance analysis.'
    },
    {
        title: 'Human Capital Management (HCM)',
        description: 'SAP HCM solutions cover HR processes such as payroll, talent management, workforce planning, employee self-service, and compliance management to attract, develop, and retain talent effectively.'
    },
    {
        title: 'Cloud Services',
        description: 'SAP offers cloud-based solutions and services, including SAP S/4HANA Cloud, SAP SuccessFactors (for HR), SAP Customer Experience (for CRM), SAP Ariba (for procurement), and SAP Analytics Cloud, providing flexibility, scalability, and innovation to businesses.'
    },
    {
        title: 'Digital Transformation Services',
        description: 'SAP provides consulting and implementation services to help businesses embark on their digital transformation journey, leveraging technologies such as artificial intelligence, machine learning, IoT, blockchain, and big data analytics to drive innovation and competitive advantage.'
    }
]);

const [Sapserve, setSapserve] = useState([
    {
        title:'HealthCare',
        description: 'For healthcare providers, SAP services can help them improve patient outcomes, reduce costs, and deliver personalized care. SAP solutions cover everything from healthcare analytics and electronic medical records (EMR) to health information exchange (HIE) and beyond.',
        background: "https://img.freepik.com/free-photo/physician-with-stethoscope-virtual-screen-background_1232-181.jpg?t=st=1709108798~exp=1709112398~hmac=27d46e5f123250912e5f15ca8a0a90a7c1d920e77286135426cabc65044f5dea&w=740"
        },
        
        {
        title: 'Education',
        description: 'SAP services can help educators and learners transform the way they teach and learn. Digital learning experiences, streamlined administrative processes, and optimized resource management are some of the benefits of SAP solutions for education.',
        background: "https://img.freepik.com/free-photo/top-view-academic-cap-with-globe-school-bus_23-2148756549.jpg?t=st=1709108998~exp=1709112598~hmac=af7bb60e9030d5cef5b661a77b7aaad9d4bf3d0619180a99f864acae453e37fe&w=740"
        },
        {
        title: 'Manufacturing',
        description: 'Manufacturers can optimize their production processes, enhance product quality, and innovate new business models with SAP services. SAP solutions support digital product innovation, smart manufacturing, and servitization and aftermarket for manufacturing.',
        background: "https://img.freepik.com/free-photo/person-using-ai-tool-job_23-2150711467.jpg?t=st=1709109222~exp=1709112822~hmac=0a3c99ebd4ceb4938a98314370adec152fdf9a9b7c6ea01ca29e15e8d2656c17&w=740"
        },
        {
        title: 'Energy and Utilities',
        description: 'SAP services can help energy companies and utilities manage the transition to a more sustainable and decentralized energy landscape. Smart metering and markets, customer experience, field service, and bill to cash are some of the features of SAP solutions for energy and utilities.',
        background: "https://img.freepik.com/free-photo/wind-energy-with-wind-turbines-background_53876-124631.jpg?t=st=1709109370~exp=1709112970~hmac=b72c4cda197a929fb906c7fc913fbab791eefa2d97915e2fdb5a3652832481a7&w=826"
        },
        {
        title: 'Banking',
        description :'Banks and financial institutions can deliver better value, customer satisfaction, and shareholder returns with SAP services. SAP solutions support finance and risk, total spend management, digital customer engagement, and banking operations for banking.',
        background: "https://img.freepik.com/free-vector/shiny-indian-rupee-digital-currency-background-with-circuit-lines_1017-41186.jpg?t=st=1709109533~exp=1709113133~hmac=443e6c62a6d2c2cadc2442d098145812cc75ae3bd3e521b1b45c34568add30f6&w=740"
        },
        {
        title: 'Government',
        description: 'SAP services can help public sector organizations improve citizen services, increase efficiency, and achieve sustainability goals. SAP solutions support government ERP, public sector analytics, human capital management, spend management, and citizen services for government.',
        background: "https://img.freepik.com/free-photo/grey-marble-column-details-building_1359-886.jpg?t=st=1709109603~exp=1709113203~hmac=3c7a7385652c17affca217c4991154fc705e5deef262b54c84dd5ad40670ef14&w=740"
        },
        {
        title: 'Media and Entertainment',
        description: 'Media companies and content creators can deliver engaging and personalized experiences to their audiences with SAP services. SAP solutions support content creation and production, content distribution, content monetization, and customer experience for media and entertainment.',
        background: "https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-cinema-tickets-wooden-desk_23-2148188189.jpg?t=st=1709109656~exp=1709113256~hmac=af33f941cc0a2df0fd43470e2f487c91146d36b8ee356372296a23f66c0f4b9e&w=740"
        }
    
    ]);

  // This is for rpa offering cards




  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsNavFixed(scrollPosition >  600);
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




  
    <div className="row featurette" bis_skin_checked="1"style={{marginTop:'100px'}} >
   
      <div className="col-md-7" bis_skin_checked="1">
        <h1 className="featurette-heading fw-normal lh-1" style={{fontSize:'40px',padding:'20px',fontWeight:'bolder'}}>Unlock the Power of SAP: Transform Your Business with Our Expertise</h1>
        <p className="lead" id='leadtext'>SAP is a leading enterprise resource planning (ERP) software suite trusted by businesses worldwide to streamline operations, enhance efficiency, and drive growth. Our tailored SAP solutions encompass consulting, implementation, customization, and support services, ensuring seamless integration with your existing infrastructure and aligning with your unique business needs. From finance and procurement to human resources and supply chain management, our expertise spans across all SAP modules, enabling you to unlock the full potential of your enterprise and achieve sustainable success.</p>
      </div>
      <div className="col-md-5" bis_skin_checked="1">
        <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709110790/QubicGen/cloud-storage-network-server-online-backup-graphic_uxrwve.jpg"  alt="" />
      </div>
    </div>
    </div>

    {/* This is rpalist ends */}

    <div id='whoweserve'>
    
    </div>
  
    

    <div style={{ color: 'white', marginLeft: '40px' ,marginTop:'130px'}} data-aos="fade-up"  >
     
     <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }}> Our Offerings</h1>

     <div className="container" style={{marginTop:'100px'}}>
       <div className="row" >

         {
           Sapoffers.map((item) => {
             return (
               <div className="col" >
                 <div className="card" id='offeringscards' style={{ height: '14rem', width: '18rem', color: 'white' }}>
                   <div className="card-body">
                     <h5 className="card-title" style={{ fontSize: '20px' }}>{item.title}</h5>
                     <h6 className="card-subtitle mb-2 text-body-secondary">{item.subtitle}</h6>
                     <p className="card-text" style={{ fontSize: '13px' }}>{item.description}</p>

                   </div>
                 </div>
                 <br />
               </div>
             )
           })
         }







       </div>
       <br />

     </div>
   </div>






    {/* This is rpa offering start */}



    {/* This is who we server starts */}
     <div id='serviceofferings'>
    
    </div>

    <div style={{ color: 'white', marginLeft: '40px',marginTop:'100px' }} ref={caseStudiesRef} data-aos="zoom-in"  >
        
        <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }} > Who we Serve</h1>
     
        <div className="container" style={{marginTop:'100px'}}>
   <div className="row">
      {/* Mapping over the 'Weserve' array */}
      {Sapserve.map((serve) => {
         return (
            <div className="col">
               {/* Card component */}
               <div className="card">
                  <div className="card-inner">
                     {/* Front of the card with background image and overlay */}
                     <div className="card-front" style={{ background: `url('${serve.background}') center/cover` }}>
                        <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
                        <p style={{ fontWeight: 'bolder', color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>{serve.title}</p>
                     </div>
                     {/* Back of the card with additional information */}
                     <div className="card-back" style={{ backgroundColor: '#2f2f2f', color: '#000', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <p style={{ fontSize: '12px' }}>{serve.description}</p>
                     </div>
                  </div>
               </div>
               <br />
            </div>
         );
      })}
   </div>
   <br />
</div>

          <br />

        </div>

    {/* This is who we server ends */}
    <div className="queries" id='querie' style={{marginTop:'50px'}}>
      <Queries />
    </div>






  </>
  )
}

export default Saplist