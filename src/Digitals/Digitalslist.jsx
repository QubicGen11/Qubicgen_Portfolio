import React, { useEffect, useRef, useState } from 'react'
import './Digitals.css'
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import Queries from '../Industries Components/Banking Components/Queries';

const Digitalslist = () => {
  const overviewRef = useRef(null);
  const serveRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const queriesRef = useRef(null);

  const [isNavFixed, setIsNavFixed] = useState(false);
  
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // This is for rpa offering cards
  const[DigitalMarketingoffers,setDigitalMarketingoffers]=useState([
    {
      title: "Search Engine Optimization (SEO)",
      description: "Boost website visibility and rankings with strategic optimization techniques, driving organic traffic and attracting qualified leads."
    },
    {
      title: "Pay-Per-Click Advertising (PPC)",
      description: "Drive targeted traffic and maximize ROI through meticulously managed PPC campaigns on leading platforms, optimizing ad performance for better click-through and conversion rates."
    },
    {
      title: "Social Media Marketing (SMM)",
      description: "Enhance brand visibility and engagement with captivating content and targeted advertising on popular social media platforms, fostering meaningful connections and driving website traffic."
    },
    {
      title: "Content Marketing",
      description: "Attract and engage audiences with compelling content across various channels, optimizing for search engines and leveraging content promotion strategies to increase brand awareness and drive website traffic."
    },
    {
      title: "Email Marketing",
      description: "Nurture leads and drive conversions with personalized email campaigns, segmenting lists and analyzing performance to optimize engagement and achieve marketing objectives effectively."
    },
    {
      title: "Website Analytics and Conversion Rate Optimization (CRO)",
      description: "Utilize website analytics to track user behavior and optimize conversion funnels, improving user experience and increasing conversion rates through data-driven insights and testing."
    },
    {
      title: "Online Reputation Management (ORM)",
      description: "Maintain a positive online reputation through proactive engagement and strategic management of online reviews and mentions, enhancing brand credibility and trust among audiences."
    },
    {
      title: "Marketing Automation",
      description: "Streamline marketing processes and enhance efficiency with automation tools, delivering personalized messages and optimizing workflows to nurture leads and drive conversions seamlessly."
    }
  ]);



const[DigitalMarketingServices,setDigitalMarketingServices]=useState([

    
    {
    title: 'Healthcare',
    description: 'Boost patient engagement and reach with targeted digital marketing strategies for healthcare providers.',
    background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709809875/QubicGen/Digital%20Marketing/Who%20We%20Serve/medical-technology-concepts-medical-students-use-mobile-phones-search-information-modern-office-morning-desk_533890-529_ikulti.jpg"
    },
    {
    title: 'E-Commerce',
    description: 'Drive online sales and brand visibility with comprehensive digital marketing solutions for e-commerce businesses.',
    background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709809917/QubicGen/Digital%20Marketing/Who%20We%20Serve/laptop-shopping-bags-online-shopping-concept_1423-189_dmrqcx.jpg"
    },
    {
    title: 'Education',
    description: 'Enhance student recruitment and enrollment with strategic digital marketing services for educational institutions.',
    background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709809963/QubicGen/Digital%20Marketing/Who%20We%20Serve/view-school-supplies-desk_23-2151110149_flvhbn.jpg"
    },
    {
    title: 'Automobile',
    description: 'Maximize brand awareness and drive dealership traffic with tailored digital marketing solutions for the automobile industry.',
    background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709809969/QubicGen/Digital%20Marketing/Who%20We%20Serve/view-car-running-high-speed_23-2150635403_tkm3dy.jpg"
    },
    {
    title: 'Media & Entertainment',
    description: 'Amplify audience engagement and content visibility with dynamic digital marketing strategies for the media and entertainment industry.',
    background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709810010/QubicGen/Digital%20Marketing/Who%20We%20Serve/free-photo-social-media-marketing-concept-marketing_971974-1468_enouse.jpg"
    },
    {
    title: 'Social Media Marketing',
    description: 'Build brand loyalty and drive engagement with expert social media marketing services for businesses.',
    background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709810041/QubicGen/Digital%20Marketing/Who%20We%20Serve/social-media-marketing-concept-marketing-with-applications_23-2150063134_irlpdf.jpg"
    },
    {
    title: 'SEO (Search Engine Optimization)',
    description: 'Improve online visibility and drive organic traffic with results-driven SEO services.',
    background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709810075/QubicGen/Digital%20Marketing/Who%20We%20Serve/top-view-cloud-with-word-seo_1134-68_wv7fyb.jpg"
    },
    {
    title: 'Retail',
    description :'Increase foot traffic and online sales with tailored digital marketing strategies for retail businesses.',
    background: "https://res.cloudinary.com/defsu5bfc/image/upload/v1709810123/QubicGen/Digital%20Marketing/Who%20We%20Serve/smiling-girl-holding-shopping-bags_23-2148286179_qe7fpo.jpg"
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
<Link to="whoweserve" spy={true} smooth={true} offset={-150} duration={200}><li>Service Offerings</li></Link>
<Link to="serviceofferings" spy={true} smooth={true} offset={-180} duration={200}><li>Who We serve</li></Link>
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
     <h1 className="featurette-heading fw-normal lh-1" style={{fontSize:'40px',padding:'20px',fontWeight:'bolder'}}>Navigate the Digital Landscape: Propel Your Brand with Digital Marketing Mastery!</h1>
     <p className="lead" id='leadtext'>Digital marketing encompasses a range of strategies and tactics aimed at promoting businesses and their products or services online. From search engine optimization (SEO) to social media marketing, email campaigns, and content creation, our digital marketing services harness the power of the internet to drive brand awareness, engagement, and conversions. With tailored strategies and expert execution, we help businesses thrive in the competitive digital landscape, reaching their target audiences effectively and maximizing their online presence.</p>
   </div>
   <div className="col-md-5" bis_skin_checked="1">
     <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709809779/QubicGen/Digital%20Marketing/Overview/hand-holding-smartphone-social-media-concept_23-2150208245_s252be.jpg"  alt="" />
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
           DigitalMarketingoffers.map((item) => {
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
        <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder',color:'white' }} > Who we Serve</h1>

    <div style={{ color: 'white', marginLeft: '40px',marginTop:'100px' }} ref={caseStudiesRef} data-aos="zoom-in"  >
        
    <div className="grid grid-flow-row auto-rows-max ml-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-24 ">
              {DigitalMarketingServices.map((serve) => {
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

    {/* This is who we server ends */}
    <div className="queries" id='querie' style={{marginTop:'50px'}}>
      <Queries />
    </div>






  </>
  )
}

export default Digitalslist