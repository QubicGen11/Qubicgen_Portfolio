import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css';


const Databaselist = () => {
  const overviewRef = useRef(null);
  const serveRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const [isNavFixed, setIsNavFixed] = useState(false);
  
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // This is for rpa offering cards
  const [Dataanalyticsoffering, setDataanalyticsoffering] = useState([
    {
        title: 'Data Exploration and Preparation',
        description: 'Exploring and profiling raw data to understand its structure, quality, and relationships. Preparing data for analysis by cleaning, transforming, and integrating datasets from various sources.'
    },
    {
        title: 'Descriptive Analytics:',
        description: 'Analyzing historical data to understand past trends, patterns, and relationships. Summarizing and visualizing data using techniques such as charts, graphs, and dashboards to gain insights into business performance.'
    },
    {
        title: 'Predictive Analytics:',
        description: 'Forecasting future trends, behaviors, and outcomes based on historical data and statistical models. Building predictive models using machine learning algorithms such as regression, classification, clustering, and time series forecasting.'
    },
    {
        title: 'Prescriptive Analytics',
        description: 'Recommending optimal actions and strategies to achieve desired outcomes based on predictive models and business objectives. Using optimization techniques, simulation models, and decision support systems to prescribe actionable insights.'
    },
    {
        title: 'Data Visualization and Reporting',
        description: 'Creating interactive visualizations, dashboards, and reports to communicate insights and findings effectively to stakeholders. Using tools such as Tableau, Power BI, or Python libraries like Matplotlib and Seaborn.'
    },
    {
        title: 'Big Data Analytics',
        description: 'Analyzing large volumes of structured and unstructured data from diverse sources such as social media, sensors, logs, and IoT devices. Leveraging technologies like Hadoop, Spark, and NoSQL databases for distributed computing and storage.'
    },
    {
        title: 'Text Analytics and Natural Language Processing (NLP)',
        description: 'Extracting insights from textual data such as customer reviews, social media posts, emails, and documents. Analyzing sentiment, categorizing topics, and extracting entities using NLP techniques like text mining and sentiment analysis.'
    },
    {
        title: 'Data Governance and Privacy',
        description: 'Establishing policies, processes, and controls to ensure data quality, integrity, security, and compliance with regulatory requirements such as GDPR, CCPA, HIPAA, and PCI DSS.'
    },
    
]);

const[Dataanalyticsserve,setDataanalyticsserve]=useState([

  {
  title:'Banking',
  description: 'Unlock insights from vast financial data sets to drive informed decision-making, risk assessment, fraud detection, and customer segmentation, empowering banking institutions to optimize operations and enhance customer experiences.',
  background: "https://img.freepik.com/free-photo/revenue-operations-concept_23-2150902423.jpg?t=st=1709113676~exp=1709117276~hmac=c16c5de74bfe8c9b46c5053f6552f648449a980d66a2368ec312a857e8a4fcc2&w=740"
  },
  
  {
  title: 'Healthcare',
  description: 'Utilize data analytics to improve patient care outcomes, treatment effectiveness, resource allocation, and operational efficiency, empowering healthcare providers to enhance patient experiences and optimize healthcare delivery.',
  background: "https://img.freepik.com/free-vector/medical-infographic-with-photo_23-2148368620.jpg?t=st=1709113744~exp=1709117344~hmac=2da6a7298fff5db8cf9457074f97e719b079e1355126bdf97773f261549b3844&w=740"
  },
  {
      title: 'Education',
      description: 'Utilize data analytics to enhance student performance, retention rates, curriculum effectiveness, and resource allocation, enabling educational institutions to make data-driven decisions and improve learning outcomes.',
      background: "https://img.freepik.com/premium-photo/open-book-with-graduation-hat-light-bulb-education-learning-school-university-idea-concept-3d-illustration_56345-604.jpg?w=826"
  },
  {
  title: 'Energy and Utilities',
  description: 'Harness data analytics to optimize energy consumption, grid management, asset performance, and maintenance schedules, enabling energy and utilities providers to improve operational efficiency, reliability, and sustainability.',
  background: "https://img.freepik.com/free-photo/sunset-sky-powers-wind-solar-energy-generated-by-ai_188544-26193.jpg?t=st=1709113949~exp=1709117549~hmac=a03a2b572e15581c4871292f11bc50a1252c682ba7c03cf0aacbee300913a6e3&w=826"
  },
  {
  title: 'Government',
  description: 'Utilize data analytics to enhance policy-making, citizen services, resource allocation, and regulatory compliance, empowering government agencies to improve transparency, efficiency, and citizen satisfaction.',
  background: "https://img.freepik.com/free-photo/neo-classical-courthouse-facade-illuminated-night-generated-by-ai_188544-35360.jpg?t=st=1709114085~exp=1709117685~hmac=bea8842c4c4a3016cbd7aca30879a1fb671ffa54c3e22aa5b6d2eedb1a4d761e&w=826"
  },
  {
  title: 'Retail',
  description :'Utilize data analytics to understand customer behavior, optimize inventory management, personalize marketing strategies, and improve sales forecasting, empowering retailers to enhance customer experiences and drive revenue growth.',
  background: "https://img.freepik.com/free-photo/background-interior-supermarket-out-focus_123827-28041.jpg?t=st=1709114113~exp=1709117713~hmac=6dcffb1ebd83365425366be615d8e2d63da2487264954d3295f6bc149a503c8a&w=740"
  },
  {
  title: 'Manufacturing',
  description: 'Leverage data analytics to optimize production processes, supply chain management, predictive maintenance, and quality control, enabling manufacturers to improve efficiency, reduce costs, and drive innovation.',
  background: "https://img.freepik.com/free-photo/factory-workshop-interior-machines-glass-production-background_645730-396.jpg?t=st=1709104730~exp=1709108330~hmac=cb89cfd3ebbff219b22610f56687568b04fe3666137040f34199db88d7367a77&w=996"
  },
  {
  title: 'Media & Entertainment',
  description: 'Harness the power of data analytics to understand audience preferences, content consumption patterns, advertising effectiveness, and revenue optimization, empowering media and entertainment companies to deliver personalized experiences and maximize ROI.',
  background: "https://img.freepik.com/free-photo/cinema-elements-yellow-background-with-copy-space_23-2148457817.jpg?t=st=1709114274~exp=1709117874~hmac=b454c1cec006618cfffd3e6053576ead4c13010f35b3558c23b8995ec967f2e2&w=740"
  },
  {
  title: 'Transport',
  description: 'Leverage data analytics to optimize route planning, fleet management, passenger experience, and maintenance schedules, enabling transportation companies to improve service reliability, efficiency, and safety.',
  background: "https://img.freepik.com/free-photo/night-view-waibaidu-bridge-blue-tone_1359-16.jpg?t=st=1709114346~exp=1709117946~hmac=d2250a7452d360b1b93348d3cdb9d9979ec2b4b2332784afebe79d85fcb6c6dd&w=740"
  },
  
  
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
        <h1 className="featurette-heading fw-normal lh-1" style={{fontSize:'40px',padding:'20px',fontWeight:'bolder'}}>Data Dynamo: Where Your Information Finds Its Power and Purpose</h1>
        <p className="lead" id='leadtext'>Welcome to the nucleus of data empowerment. Our database services are the cornerstone of efficient data management, offering robust solutions tailored to your needs. From designing and optimizing databases to ensuring seamless integration and security, we empower businesses to unlock the full potential of their data and drive informed decisions.</p>
      </div>
      <div className="col-md-5" bis_skin_checked="1">
        <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709118916/3628676_556_ztwvm5.jpg"  alt="" />
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
                                    Dataanalyticsoffering.map((item) => {
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
                                   Dataanalyticsserve.map((serve) => {
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

export default Databaselist