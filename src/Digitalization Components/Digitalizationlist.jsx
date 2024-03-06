import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import Queries from '../Industries Components/Banking Components/Queries';

const Digitalizationlist = () => {
  const overviewRef = useRef(null);
  const serveRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const queriesRef = useRef(null);

  const [isNavFixed, setIsNavFixed] = useState(false);
  
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // This is for rpa offering cards
  const[Digitizationofferings,setDigitizationofferings]=useState([
    {
      title: "Digital Strategy Development",
      description: "Tailored strategies to digitize processes, boost productivity, and elevate customer experiences, aligning digital initiatives with business goals."
    },
    {
      title: "Business Process Automation",
      description: "Streamlining operations and reducing manual effort through automated workflows, optimizing efficiency and accuracy across the organization."
    },
    {
      title: "Document Management Systems",
      description: "Centralized repositories for digitized documents, ensuring secure access, compliance, and efficient document handling."
    },
    {
      title: "Enterprise Resource Planning (ERP) Systems",
      description: "Integrated solutions to centralize data, streamline processes, and enhance visibility, customized to meet specific business needs."
    },
    {
      title: "Customer Relationship Management (CRM) Systems",
      description: "Managing customer interactions and sales activities through customized CRM solutions, optimizing customer engagement and retention."
    },
    {
      title: "Digital Collaboration Tools",
      description: "Enabling seamless communication and collaboration among remote teams with intuitive digital platforms, enhancing productivity and teamwork."
    },
    {
      title: "Data Analytics and Business Intelligence (BI)",
      description: "Harnessing data insights to drive informed decision-making through analytics and visualization tools, empowering organizations with actionable insights."
    },
    {
      title: "Mobile App Development",
      description: "Custom mobile applications extending business capabilities to mobile devices, delivering user-friendly interfaces and seamless integration with backend systems."
    }
]);

const [DigitalizationServe, setDigitalizationServe] = useState([
  {
      title:'HealthCare',
      description: 'Drive better patient care with electronic health records, telemedicine, and data-driven personalized treatments.',
      background: "https://img.freepik.com/free-photo/doctor-giving-presentation-team-interim-doctors_107420-84783.jpg?t=st=1709101341~exp=1709104941~hmac=e5dffce83635b7ef2536d9124b9186a97b98d98711d8226b1d718d3e4d07ea4b&w=900"
      },
      
      {
      title: 'Education',
      description: 'Deliver engaging learning through e-learning platforms, virtual classrooms, and adaptive learning technologies.',
      background: "https://img.freepik.com/free-photo/person-with-books-digital-art-style-education-day_23-2151164358.jpg?t=st=1709119855~exp=1709123455~hmac=d4203c091526e85cff9741aea228390f0e483d1947c6df17070d4ce43ddf42f8&w=740"
      },
      {
      title: 'Manufacturing',
      description: 'Optimize production with Industry 4.0 solutions like IoT, robotics, and predictive maintenance.',
      background: "https://img.freepik.com/free-photo/smart-indian-engineer-man-wearing-safety-helmet-doing-stock-tick-check-cardboard-stock-product-management-factory-warehouse-background_609648-1445.jpg?t=st=1709119925~exp=1709123525~hmac=58a97f3dfc93d096638de57ab6dcac6e2a0420aa1866679a1cda695535812a1f&w=740"
      },
      {
      title: 'Energy and Utilities',
      description: 'Foster sustainability and efficiency with smart grids, renewable energy integration, and data-driven infrastructure management.',
      background: "https://img.freepik.com/free-photo/turbine-green-energy-electricity-technology-concept_53876-31722.jpg?w=826&t=st=1709120004~exp=1709120604~hmac=8cb4bd897fd66735ae138d9db60a467539581591d0c45220afc6618aca88e775"
      },
      {
      title: 'Finance',
      description :'Streamline financial services through online banking, mobile payments, and AI-powered solutions.',
      background: "https://img.freepik.com/premium-photo/online-banking-person-uses-system-selects-service-hologram-laptop_102583-7081.jpg?w=740"
      },
      {
      title: 'Government',
      description: 'Improve citizen engagement with online portals, digital identity systems, and smart city initiatives.',
      background: "https://img.freepik.com/free-photo/grey-marble-column-details-building_1359-886.jpg?t=st=1709109603~exp=1709113203~hmac=3c7a7385652c17affca217c4991154fc705e5deef262b54c84dd5ad40670ef14&w=740"
      },
      {
      title: 'Media & Entertainment',
      description: 'Captivate audiences with streaming services, social media integration, and immersive experiences.',
      background: "https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-cinema-tickets-wooden-desk_23-2148188189.jpg?t=st=1709109656~exp=1709113256~hmac=af33f941cc0a2df0fd43470e2f487c91146d36b8ee356372296a23f66c0f4b9e&w=740"
      },
      {
      title: 'Transportation & Logistics',
      description: 'Enhance efficiency with logistics management software, predictive maintenance, and intelligent transportation systems.',
      background: "https://img.freepik.com/free-photo/logistics-transportation-container-cargo-ship-cargo-plane-with-working-crane-bridge-shipyard-sunrise-logistic-import-export-transport-industry-background-ai-generative_123827-24177.jpg?t=st=1709205555~exp=1709209155~hmac=3c5dd30f6e9f9b685a6a09aef132dd2acae8a246e14bfbb0741f2881d83cf473&w=740"
      },
      {
      title: 'Retail',
      description: 'Reimagine customer experiences with e-commerce platforms, omnichannel integration, and data-driven personalization.',
      background: "https://img.freepik.com/free-photo/background-interior-supermarket-out-focus_123827-28040.jpg?t=st=1709120147~exp=1709123747~hmac=a2e2c1c8ddad348797742d1460189012a755a5e2aa5b01e10c727335057d19af&w=740"
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




  
    <div className="row featurette" bis_skin_checked="1" style={{marginTop:'100px'}} >
   
      <div className="col-md-7" bis_skin_checked="1">
        <h1 className="featurette-heading fw-normal lh-1" style={{fontSize:'40px',padding:'20px',fontWeight:'bolder'}}>Navigating Tomorrow's World Today: Embark on Your Digitalization Journey with Us!</h1>
        <p className="lead" id='leadtext'>Digitalization is more than just adopting technology; it's about reshaping the future of business. Our digitalization services offer tailored solutions to transform your operations, optimize processes, and stay ahead in a rapidly evolving digital landscape.</p>
      </div>
      <div className="col-md-5" bis_skin_checked="1">
        <img src="https://res.cloudinary.com/dightbmyi/image/upload/v1709276230/person-working-with-floating-screens_ydma9t.jpg"  alt="" />
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
           Digitizationofferings.map((item) => {
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
      {DigitalizationServe.map((serve) => {
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

export default Digitalizationlist