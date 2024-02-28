import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css';


const Testinglist = () => {
  const overviewRef = useRef(null);
  const serveRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const [isNavFixed, setIsNavFixed] = useState(false);
  
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // This is for rpa offering cards
  const [TestingOffers, setTestingOffers] = useState([
    {
        title: 'Functional Testing',
        description: 'Verifying that the software functions as intended and meets specified requirements. This includes testing individual features, user interfaces, and business processes to validate expected behavior.'
    },
    {
        title: 'Regression Testing',
        description: 'Re-running test cases to ensure that recent code changes have not introduced new defects or unintended side effects. This helps maintain the stability and integrity of the software across multiple releases.'
    },
    {
        title: 'User Acceptance Testing (UAT)',
        description: 'Validating the software from an end-user perspective to ensure that it meets business requirements and user expectations. UAT is typically conducted by users or stakeholders before the software is deployed into production.'
    },
    {
        title: 'Performance Testing',
        description: 'Assessing the responsiveness, scalability, and stability of the software under various workload conditions. This includes load testing, stress testing, and scalability testing to identify performance bottlenecks and optimize system performance.'
    },
    {
        title: 'Security Testing',
        description: 'Identifying vulnerabilities and weaknesses in the software that could be exploited by malicious actors. This includes conducting security assessments, penetration testing, and vulnerability scanning to ensure that sensitive data and systems are protected from unauthorized access and attacks.'
    },
    {
        title: 'Compatibility Testing ',
        description: "Evaluating the software's compatibility with different operating systems, web browsers, devices, and network environments. This ensures that the software functions correctly across various platforms and configurations."
    },
    {
        title: 'Automation Testing ',
        description: 'Automating repetitive test cases and scenarios using testing tools and frameworks to improve efficiency, consistency, and coverage. Automation testing includes functional automation, regression automation, and performance automation.'
    },
    
]);

const [TestingServe, setTestingServe] = useState([
  {
      title:'HealthCare',
      description: 'Ensure healthcare system reliability, security, and compliance with our testing services for electronic health records and telemedicine platforms.',
      background: "https://img.freepik.com/free-photo/biotechnology-specialist-laboratory-conducting-experiments_23-2150468696.jpg?t=st=1709116107~exp=1709119707~hmac=0a4f1dfdb8c145ba8b9eb37165127138fccf7eaf0c80cb683429ee1c6053eeec&w=740"
      },
      {
      title: 'Finance',
      description :'Mitigate risks and ensure financial system integrity through our thorough testing solutions for banking applications and trading platforms.',
      background: "https://img.freepik.com/free-photo/screen-with-graph-it-that-says-word-financial-it_188544-27324.jpg?t=st=1709116200~exp=1709119800~hmac=683e4b193e0c46fade052cfbeee6eba6e37d3d91a742c3d78859b23b6dd7efdd&w=826"
      },
      {
      title: 'Retail',
      description: 'Deliver seamless shopping experiences and drive customer satisfaction with our end-to-end testing services for e-commerce websites and mobile apps.',
      background: "https://img.freepik.com/free-photo/clear-view-shopping-cart-with-supermarket-s-blurry-refrigerator-aisle-illuminated-by-bokeh-lights_91128-3496.jpg?t=st=1709116568~exp=1709120168~hmac=15610e5a526e6368eebe3d16d618e9ad55bf424f4d1b1c256d2e184468673fec&w=826"
      },
      {
      title: 'Transportation',
      description: 'Optimize operations and ensure passenger safety with our comprehensive testing solutions for transportation ticketing systems and fleet management software.',
      background: "https://img.freepik.com/free-photo/container-truck-ship-port-ai-generated-image_511042-612.jpg?t=st=1709116632~exp=1709120232~hmac=14f88a3f58e73f6adc1b2c4e185abdeeb21171bc3ae0ece7b5df87bb5a644405&w=826"
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
        <h1 className="featurette-heading fw-normal lh-1" style={{fontSize:'40px',padding:'20px',fontWeight:'bolder'}}>Testing Unleashed: Elevate Your Software with Assurance Beyond Measure</h1>
        <p className="lead" id='leadtext'>Welcome to the epitome of quality assurance. Our testing services ensure that every aspect of your software or application is scrutinized, polished, and perfected. From functionality to performance, we leave no stone unturned, delivering solutions that exceed expectations and inspire confidence in your digital endeavors.</p>
      </div>
      <div className="col-md-5" bis_skin_checked="1">
        <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709117589/33533011_8058227_dpohqb.jpg"  alt="" />
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
                                    TestingOffers.map((item) => {
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
                                    TestingServe.map((serve) => {
                                        return (
                                        <div className="col md-3 mb-3" >
                                           <div className="card" >
  <div className="card-inner">
    <div className="card-front" style={{ background: `url('${serve.background}')`, backgroundPosition:'center',objectFit:'cover',opacity:'0.8' }}>
      <p style={{fontWeight:'bolder'}}>{serve.title}</p>
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

export default Testinglist