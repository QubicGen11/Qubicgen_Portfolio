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
      description: "Tailored strategies to digitize processes, boost productivity and elevate customer experiences, aligning digital initiatives with business goals."
    },
    {
      title: "Business Process Automation",
      description: "Streamlining operations and reducing manual effort through automated workflows, optimizing efficiency and accuracy across the organization."
    },
    {
      title: "Document Management Systems",
      description: "Centralized repositories for digitized documents, ensuring secure access, compliance and efficient document handling."
    },
    {
      title: "Enterprise Resource Planning (ERP) Systems",
      description: "Integrated solutions to centralize data, streamline processes and enhance visibility, customized to meet specific business needs."
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
        description: 'Drive better patient care with electronic health records, telemedicine and data-driven personalized treatments.',
        background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709811455/QubicGen/Digitalization/Who%20We%20Serve/doctor-giving-presentation-team-interim-doctors_107420-84783_yywolk.jpg"
        },
        
        {
        title: 'Education',
        description: 'Deliver engaging learning through e-learning platforms, virtual classrooms and adaptive learning technologies.',
        background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710067854/QubicGen/Digitalization/Who%20We%20Serve/international-day-education-cartoon-style_23-2151007381_vybke9.jpg"
        },
        {
        title: 'Manufacturing',
        description: 'Optimize production with Industry 4.0 solutions like IoT, robotics and predictive maintenance.',
        background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709811837/QubicGen/Digitalization/Who%20We%20Serve/metallic-robot-arm-modern-steel-factory-generated-by-ai_188544-17870_dxq7gj.jpg"
        },
        {
        title: 'Energy and Utilities',
        description: 'Foster sustainability and efficiency with smart grids, renewable energy integration and data-driven infrastructure management.',
        background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710068041/QubicGen/Digitalization/Who%20We%20Serve/offshore-wind-turbines-wind-power-generative-ai-environmental-electricity_28914-14602_k9vguk.jpg"
        },
        {
        title: 'Finance',
        description :'Streamline financial services through online banking, mobile payments and AI-powered solutions.',
        background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710068291/QubicGen/Digitalization/Who%20We%20Serve/stacks-coins-arranged-bar-graph_35913-2518_z8vbo5.jpg"
        },
        {
        title: 'Government',
        description: 'Improve citizen engagement with online portals, digital identity systems and smart city initiatives.',
        background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710062561/QubicGen/Digitalization/Who%20We%20Serve/grey-marble-column-details-building_1359-886_loaaep.jpg"
        },
        {
        title: 'Media & Entertainment',
        description: 'Captivate audiences with streaming services, social media integration and immersive experiences.',
        background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710067833/QubicGen/Digitalization/Who%20We%20Serve/3d-glasses-movies-tickets-flat-lay_23-2149558744_mjdvo5.jpg"
        },
        {
        title: 'Transportation & Logistics',
        description: 'Enhance efficiency with logistics management software, predictive maintenance and intelligent transportation systems.',
        background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710068442/QubicGen/Digitalization/Who%20We%20Serve/vehicles-laptop-supply-chain-representation_23-2149853161_wmm3u3.jpg"
        },
        {
        title: 'Retail',
        description: 'Reimagine customer experiences with e-commerce platforms, omnichannel integration and data-driven personalization.',
        background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1710068595/QubicGen/Digitalization/Who%20We%20Serve/variety-merchandise-supermarket-store-shelves-generated-by-ai_188544-40842_j2z67o.jpg"
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
<Link className='hover:cursor-pointer' to="overview" spy={true} smooth={true} offset={-150} duration={200}><li>Overview</li></Link>
<Link className='hover:cursor-pointer' to="whoweserve" spy={true} smooth={true} offset={-150} duration={200}><li>Service Offerings</li></Link>
<Link className='hover:cursor-pointer' to="serviceofferings" spy={true} smooth={true} offset={-180} duration={200}><li>Who We serve</li></Link>
<Link className='hover:cursor-pointer' to="querie" spy={true} smooth={true} offset={-200} duration={200}><li>Queries</li></Link>
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
        <p className="lead" id='leadtext'>Digitalization is more than just adopting technology; it's about reshaping the future of business. Our digitalization services offer tailored solutions to transform your operations, optimize processes and stay ahead in a rapidly evolving digital landscape.</p>
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
     
     <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder' }}> Service Offerings</h1>

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