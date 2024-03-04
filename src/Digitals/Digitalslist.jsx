import React, { useEffect, useRef, useState } from 'react'
import './Digitals.css'
import 'aos/dist/aos.css';
import Queries from './Queries';


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
    background: "https://img.freepik.com/free-photo/doctor-giving-presentation-team-interim-doctors_107420-84783.jpg?t=st=1709101341~exp=1709104941~hmac=e5dffce83635b7ef2536d9124b9186a97b98d98711d8226b1d718d3e4d07ea4b&w=900"
    },
    {
    title: 'E-Commerce',
    description: 'Drive online sales and brand visibility with comprehensive digital marketing solutions for e-commerce businesses.',
    background: "https://img.freepik.com/free-photo/laptop-shopping-bags-online-shopping-concept_1423-189.jpg?t=st=1709190042~exp=1709193642~hmac=7ef9b66995e43ecff674e0992bc5a72e3cb1828f8d88e346fea686d6f5867530&w=740"
    },
    {
    title: 'Education',
    description: 'Enhance student recruitment and enrollment with strategic digital marketing services for educational institutions.',
    background: "https://img.freepik.com/free-photo/view-school-supplies-desk_23-2151110149.jpg?t=st=1709190136~exp=1709193736~hmac=a39c40063cc086b36e469ae583227a7ff5fa35c2ff0ece3b0037b8b2d617e3f5&w=740"
    },
    {
    title: 'Automobile',
    description: 'Maximize brand awareness and drive dealership traffic with tailored digital marketing solutions for the automobile industry.',
    background: "https://img.freepik.com/free-photo/view-car-running-high-speed_23-2150635403.jpg?t=st=1709190376~exp=1709193976~hmac=82089b2f438b80412ab1faaac215f5cff816ca73f474745f09a4519a59036dac&w=826"
    },
    {
    title: 'Media & Entertainment',
    description: 'Amplify audience engagement and content visibility with dynamic digital marketing strategies for the media and entertainment industry.',
    background: "https://img.freepik.com/premium-photo/free-photo-social-media-marketing-concept-marketing_971974-1468.jpg?w=740"
    },
    {
    title: 'Social Media Marketing',
    description: 'Build brand loyalty and drive engagement with expert social media marketing services for businesses.',
    background: "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063134.jpg?t=st=1709190459~exp=1709194059~hmac=97030e35a4dbbf1d4619a14dfd827a8ac8e27bd3717d231097894266ebe9b465&w=740"
    },
    {
    title: 'SEO (Search Engine Optimization)',
    description: 'Improve online visibility and drive organic traffic with results-driven SEO services.',
    background: "https://img.freepik.com/free-photo/top-view-cloud-with-word-seo_1134-68.jpg?t=st=1709190506~exp=1709194106~hmac=4a0b0a9027c99a9bc926be849d21f158e02fd76fce42a60c3c90ea374258c9cb&w=740"
    },
    {
    title: 'Retail',
    description :'Increase foot traffic and online sales with tailored digital marketing strategies for retail businesses.',
    background: "https://img.freepik.com/free-photo/smiling-girl-holding-shopping-bags_23-2148286179.jpg?t=st=1709190553~exp=1709194153~hmac=954dac8ab313c77a380810c2924baa6027c8067427da6f3122a946440ef37bb7&w=740"
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
          <li onClick={() => scrollToRef(queriesRef)}>Queries</li>

          {/* <li onClick={() => scrollToRef(leadershipRef)}>Meet our leadership</li> */}
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
        <h1 className="featurette-heading fw-normal lh-1" style={{fontSize:'40px',padding:'20px',fontWeight:'bolder'}}>Navigate the Digital Landscape: Propel Your Brand with Digital Marketing Mastery!</h1>
        <p className="lead" id='leadtext'>Digital marketing encompasses a range of strategies and tactics aimed at promoting businesses and their products or services online. From search engine optimization (SEO) to social media marketing, email campaigns, and content creation, our digital marketing services harness the power of the internet to drive brand awareness, engagement, and conversions. With tailored strategies and expert execution, we help businesses thrive in the competitive digital landscape, reaching their target audiences effectively and maximizing their online presence.</p>
      </div>
      <div className="col-md-5" bis_skin_checked="1">
        <img src="https://img.freepik.com/free-photo/hand-holding-smartphone-social-media-concept_23-2150208245.jpg?t=st=1709199800~exp=1709203400~hmac=bacf01bcd194b7f7910481804bc42e5fd9a1c8b3ec4fd4e27b220ccceb67a884&w=740"  alt="" />
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
                                    DigitalMarketingoffers.map((item) => {
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
                                    DigitalMarketingServices.map((serve) => {
                                        return (
                                        <div className="col" >
                                           <div className="card" >
                                           <div className="card-inner">
                        <div className="card-front" style={{ background: `url('${serve.background}') center/cover`, }}>
                          <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
                          <p style={{ fontWeight: 'bolder', color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>{serve.title}</p>
                        </div>
                        <div className="card-back" style={{ backgroundColor: '#2f2f2f', color: '#000', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                          <p style={{ fontSize: '12px' }}>{serve.description}</p>
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


     

<div className="queries" ref={queriesRef}>
  <Queries/>
</div>

    
    </>
  )
}

export default Digitalslist