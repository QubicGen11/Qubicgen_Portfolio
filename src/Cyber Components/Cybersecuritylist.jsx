import React, { useEffect, useRef, useState } from 'react'
import './Cybersecurity.css'
import 'aos/dist/aos.css';
import Queries from '../Rpa Components/Queries';


const Cybersecuritylist = () => {
  const overviewRef = useRef(null);
  const serveRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const queriesRef = useRef(null);

  const [isNavFixed, setIsNavFixed] = useState(false);
  
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // This is for rpa offering cards
  const [Cyberoffers, setCyberoffers] = useState([
    {
        title: 'Vulnerability Assessment and Penetration Testing (VAPT) ',
        description: 'Identifying weaknesses and vulnerabilities in networks, systems, and applications through assessments and conducting controlled attacks to test their security posture.'
    },
    {
        title: 'Security Information and Event Management (SIEM) ',
        description: 'Implementing SIEM solutions to collect, analyze, and correlate security events and logs from various sources to detect and respond to security incidents in real-time.'
    },
    {
        title: 'Intrusion Detection and Prevention Systems (IDPS)',
        description: 'Deploying IDPS solutions to monitor network traffic and detect and block malicious activities, including unauthorized access, malware infections, and insider threats.'
    },
    {
        title: 'Firewall Management',
        description: 'Managing and configuring firewall devices to enforce access controls, filter network traffic, and protect against unauthorized access and cyber-attacks.'
    },
    {
        title: 'Identity and Access Management (IAM) ',
        description: 'Implementing IAM solutions to manage user identities, roles, and permissions, enforce access controls, and ensure that only authorized users have access to resources and data.'
    },
    
]);

const[Cybersecurityserve,setCybersecurity]=useState([

  {
  title:'Finance and Insurance',
  description: 'Cyber security in finance and insurance involves protecting sensitive financial data by implementing robust encryption, access controls, and fraud detection mechanisms to safeguard against cyber attacks targeting financial transactions and personal information.',
  background: "https://img.freepik.com/free-photo/unrecognizable-businessman-pointing-printed-chart-showing-graph-colleagues-professional-content-partners-making-notes-statistics-cooperation-communication-partnership-concept_74855-14267.jpg?t=st=1709101279~exp=1709104879~hmac=9d53d1d3901256dff88c5f60fde96527158250c59d66a76aaa13721eab59cfc4&w=900"
  },
  
  {
  title: 'Healthcare',
  description: 'In healthcare, cyber security focuses on protecting electronic health records (EHRs), medical devices, and patient confidentiality. This entails implementing strong authentication measures, encryption protocols, and intrusion detection systems to prevent data breaches and ensure compliance with regulations like HIPAA.',
  background: "https://img.freepik.com/free-photo/doctor-giving-presentation-team-interim-doctors_107420-84783.jpg?t=st=1709101341~exp=1709104941~hmac=e5dffce83635b7ef2536d9124b9186a97b98d98711d8226b1d718d3e4d07ea4b&w=900"
  },
  {
  title: 'Energy and Utilities',
  description: 'Cyber security in the energy sector is crucial for safeguarding critical infrastructure by deploying advanced threat detection technologies, segmenting networks, and conducting regular security assessments to mitigate the risk of cyber attacks.',
  background: "https://img.freepik.com/free-photo/aerial-shot-two-power-plant-sunset-vilnius_181624-15104.jpg?t=st=1709103814~exp=1709107414~hmac=76e752f29ec6e7a7f2711880f864903a300b14684cc9f6449869912edd2595e2&w=900"
  },
  {
  title: 'Government',
  description: 'Encompasses protecting sensitive government data, citizen information, and national security interests from cyber threats. This includes establishing robust perimeter defenses, monitoring for suspicious activity, and collaborating with intelligence agencies to identify and neutralize cyber threats targeting government networks and systems.',
  background: "https://img.freepik.com/free-photo/national-museum-history-romania_1268-14722.jpg?t=st=1709103919~exp=1709107519~hmac=c8577d7f9d0361eba35e61a114b4e7907d2e4ff29a935f9ee1d58bc331d72232&w=900"
  },
  {
  title: 'Retail',
  description :'Involves safeguarding customer payment data, online shopping platforms, and supply chain networks from cyber attacks. This requires implementing secure payment processing systems, conducting regular vulnerability assessments.',
  background: "https://img.freepik.com/free-photo/abundance-healthy-food-choices-supermarket-aisle-generated-by-ai_188544-42447.jpg?t=st=1709104308~exp=1709107908~hmac=6b7cf59a6cd0c7e1a55d71b83d85eece657e761dc383687d3ccf2bdb394cc3c9&w=1060"
  },
  {
  title: 'Manufacturing',
  description: 'Focuses on protecting industrial control systems (ICS), production networks, and intellectual property from cyber threats. This includes implementing network segmentation, endpoint protection, and intrusion detection systems to prevent unauthorized access and ensure the integrity of manufacturing processes and product designs.',
  background: "https://img.freepik.com/free-photo/factory-workshop-interior-machines-glass-production-background_645730-396.jpg?t=st=1709104730~exp=1709108330~hmac=cb89cfd3ebbff219b22610f56687568b04fe3666137040f34199db88d7367a77&w=996"
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
        <h1 className="featurette-heading fw-normal lh-1" style={{fontSize:'40px',padding:'20px',fontWeight:'bolder'}}>Defend Your Digital Domain: Expert Cyber Security Solutions for Total Protection</h1>
        <p className="lead" id='leadtext'>In a world where digital threats loom large, our cyber security services stand as your shield against unseen dangers. We offer comprehensive solutions tailored to safeguard your digital assets, ensuring peace of mind in an ever-evolving cyber landscape. From threat detection to incident response, trust us to fortify your defenses and keep your organization secure.</p>
      </div>
      <div className="col-md-5" bis_skin_checked="1">
        <img src="https://res.cloudinary.com/defsu5bfc/image/upload/v1709112147/QubicGen/online-security-dark-background-3d-illustration_qgwvz8.jpg"  alt="" />
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
                                    Cyberoffers.map((item) => {
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
                                    Cybersecurityserve.map((serve) => {
                                        return (
                                        <div className="col md-3 mb-3" >
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


<div className="queries" ref={queriesRef}>
  <Queries/>
</div>



    
    </>
  )
}

export default Cybersecuritylist