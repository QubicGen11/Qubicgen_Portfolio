import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css';


const Digitalizationlist = () => {
  const overviewRef = useRef(null);
  const serveRef = useRef(null);
  const caseStudiesRef = useRef(null);
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
    <nav style={{ position: isNavFixed ? 'fixed' : 'relative', top: isNavFixed ? 70 : 0, zIndex: 1, width: '98vw',backgroundColor:"rgba(0, 0, 0, 0.9)",backdropFilter:"blur(20px)" }}>
          <li onClick={() => scrollToRef(overviewRef)}>Overview</li>  
          <li onClick={() => scrollToRef(serveRef)}>Our Offerings</li>
          <li onClick={() => scrollToRef(caseStudiesRef)}>Who we serve</li>
          <li onClick={() => scrollToRef(leadershipRef)}>Queries</li>
        </nav>
    </div>
    <hr />
    <br />
    <br />
    
    <div className="container"  style={{color:'white'}}  data-aos = "fade-up" ref={overviewRef }>

      
    <br />
      <br />
     
    <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }}> Overview</h1>
      <br />
      <br />
      <br />
      <br />
    <div className="row featurette" bis_skin_checked="1"  >
   
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


   
{/* This is rpa offering start */}
<div style={{ color: 'white',marginLeft:'40px' }}  data-aos = "fade-up"  ref={serveRef} >
<br />
      <br />
      <br />
      <br />
      <br />
                    <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }}> Our Offerings</h1>
      <br />
      <br />
      <br />
      <br />
                    <br />
                    <div className="container">
                        <div className="row" >
                            
                                {
                                    Digitizationofferings.map((item) => {
                                        return (
                                        <div className="col" >
                                            <div className="card" id='offeringscards' style={{ height: '14rem', width: '18rem', backgroundColor: '#242424', color: 'white' }}>
                                                <div className="card-body">
                                                    <h5 className="card-title" style={{fontSize:'20px'}}>{item.title}</h5>
                                                    <h6 className="card-subtitle mb-2 text-body-secondary">{item.subtitle}</h6>
                                                    <p className="card-text" style={{fontSize:'13px'}}>{item.description}</p>

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
{/* This is rpa offering ends */}


{/* This is who we server starts */}
<div style={{ color: 'white',marginLeft:'40px' }} ref={caseStudiesRef} data-aos = "zoom-in"  >
<br />
      <br />
      <br />
      <br />
                    <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }} > Who we Serve</h1>
      <br />
      <br />
      <br />
                    <br />
                    <div className="container" >
                        <div className="row"  >
                            
                                {
                                    DigitalizationServe.map((serve) => {
                                        return (
                                        <div className="col" >
                                           <div className="card" >
  <div className="card-inner">
    <div className="card-front" style={{ background: `url('${serve.background}')`, backgroundPosition:'center',objectFit:'cover' }}>
      <p>{serve.title}</p>
    </div>
    <div className="card-back">
      <p>{serve.description}</p>
    </div>
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

{/* This is who we server ends */}



     



    
    </>
  )
}

export default Digitalizationlist