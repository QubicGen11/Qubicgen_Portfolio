import React, { useEffect, useRef, useState } from 'react'
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import Queries from '../Industries Components/Banking Components/Queries';


const Businessconsultinglist = () => {
  const overviewRef = useRef(null);
  const serveRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const queriesRef = useRef(null);
  const [isNavFixed, setIsNavFixed] = useState(false);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // This is for rpa offering cards
  const [BusinessOffers, setBusinessOffers] = useState([
    {
      title: 'Strategic Planning and Alignment',
      description: 'Defining business goals and aligning them with IT strategy to capitalize on technology opportunities and ensure organizational success.'
    },
    {
      title: 'Business Process Improvement',
      description: 'Analyzing and optimizing existing processes to streamline operations, enhance productivity, and drive efficiency.'
    },
    {
      title: 'Digital Transformation',
      description: 'Guiding businesses through digital transformation initiatives, integrating technology to innovate and thrive in the digital age.'
    },
    {
      title: 'IT Governance and Risk Management',
      description: 'Establishing governance frameworks and mitigating IT risks to ensure compliance and protect business assets.'
    },
    {
      title: 'IT Portfolio Management',
      description: 'Maximizing the value of IT investments by prioritizing and allocating resources strategically across initiatives aligned with business priorities.'
    },
    {
      title: 'IT Service Management (ITSM)',
      description: 'Implementing best practices and processes to enhance IT service delivery, improve customer satisfaction, and drive operational excellence.'
    },
    {
      title: 'Change Management',
      description: 'Facilitating smooth transitions and adoption of new technologies through effective change management strategies and communication plans.'
    },
    {
      title: 'Vendor Management',
      description: 'Selecting and managing IT vendors to optimize value, mitigate risks, and ensure quality service delivery.'
    },
    {
      title: 'Business Continuity Planning',
      description: 'Developing resilience and recovery strategies to minimize disruptions and ensure continuity of operations during unforeseen events.'
    },

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
<Link to="overview" spy={true} smooth={true} offset={-150} duration={200}><li>Overview</li></Link>
<Link to="whoweserve" spy={true} smooth={true} offset={-150} duration={200}><li>Service Offerings</li></Link>

<Link to="querie" spy={true} smooth={true} offset={-200} duration={200}><li>Queries</li></Link>
</nav>

    </div>
    <hr />
   
   <div id='overview'>
    
   </div>

    <div className="container" style={{ color: 'white',marginTop:'50px' }} data-aos="fade-up"  >
    <h1 style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bolder', color: 'white' }}  > Overview</h1>




  
    <div className="row featurette" bis_skin_checked="1" style={{marginTop:'100px'}}  >

<div className="col-md-7" bis_skin_checked="1">
  <h1 className="featurette-heading fw-normal lh-1" style={{ fontSize: '40px', padding: '20px', fontWeight: 'bolder' }}>Empower Your Business with Strategic Guidance. Our Consulting Services Offer Tailored Solutions to Drive Growth, Efficiency, and Innovation. </h1>
  <p className="lead" id='leadtext'>Transform your business with our expert consulting services. We offer strategic guidance and tailored solutions to propel your growth, enhance efficiency, and foster innovation. From insightful analysis to actionable plans, we're committed to empowering your success every step of the way.</p>
</div>
<div className="col-md-5" bis_skin_checked="1">
  <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1710142264/QubicGen/Business%20Consulting/Overview/three-businesspersons-meeting_f87y5a_1_1_na6zih.jpg" alt="" />
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
           BusinessOffers.map((item) => {
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


          <br />


    {/* This is who we server ends */}
    <div className="queries" id='querie' style={{marginTop:'50px'}}>
      <Queries />
    </div>






  </>
  )
}

export default Businessconsultinglist