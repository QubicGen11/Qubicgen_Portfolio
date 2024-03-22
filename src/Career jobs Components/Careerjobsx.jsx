import React, { useState } from 'react'
import "./Careerjobs.css"
import Footer from '../HomeComponents/Footer'
import Navbar from '../HomeComponents/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Parallax } from 'react-parallax';
import new4 from '../assets/new5.jpg';



const Careerjobsx = () => {
    const [JobsList, setJobsList] = useState([
        {
            title: 'Human Resource Manager',
            qual: 'MBA',
            exp: 'Fresher',
            skills: 'Communication and Management',
            description: 'Seeking HR Manager: Lead our HR department to success! Manage recruitment, employee relations, training, and compliance. Bring your leadership skills and drive positive change. '
        },
        {
            title: 'RPA Developer',
            qual: 'B.Tech / Degree',
            exp: 'Fresher',
            skills: 'UiPath',
            description: 'RPA Developer Wanted: Join us in automating processes! Design, develop, and implement RPA solutions. Skills in UiPath needed. Ready to innovate? '
        },
        {
            title: 'Web Developer',
            qual: 'B.Tech / Degree',
            exp: 'Fresher',
            skills: 'HTML, CSS, JavaScript',
            description: 'Seeking Web Developer: Join our team to craft exceptional online experiences! Design and develop dynamic websites and web applications using HTML, CSS, and JavaScript. Bring creativity and technical expertise to drive our digital presence forward.'
        },
        {
            title: 'SAP Developer',
            qual: 'B.Tech / Degree',
            exp: 'Fresher',
            skills: 'HANA',
            description: "Join us as an SAP Developer and unleash your potential in transforming businesses with cutting-edge technology! You'll design, develop, and customize SAP applications and solutions using ABAP and other programming languages. Bring your passion for innovation and problem-solving to drive our digital transformation forward."
        },
        {
            title: 'Cyber Security Analyst',
            qual: 'B.Tech / Degree',
            exp: 'Fresher',
            skills: 'Cyber Security',
            description: "Join our team as a Cyber Security Analyst and play a pivotal role in safeguarding our organization against cyber threats! You'll be responsible for monitoring, analyzing, and responding to security incidents, conducting threat assessments, and implementing proactive measures to protect our systems and data."
        },
        {
            title: 'Digital Marketing Manager',
            qual: 'B.Tech / Degree',
            exp: 'Fresher',
            skills: 'Digital and Social Media Marketing',
            description: "Join us as a Digital Marketing Manager and lead our online presence to new heights! In this role, you'll oversee digital marketing strategies, manage campaigns, and analyze performance metrics to drive business growth."
        }

    ]);
    return (

        <>
            <Navbar />

            <div className='bg-black'>
                <div className="careeesfull bg-black" data-aos="fade-right">

                    {/* this is career mains starts */}

                    <div className="Careersjobsmain flex bg-center justify-center items-center sm:h-10 " style={{ background: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }}>
                        <div className="z-50 text-2xl ml-3 text-white sm:mx-6  md:text-4xl md:mr-80 lg:text-5xl lg:mb-10 h-36 md:w-96 lg:w-auto xl:w-auto flex flex-col justify-center items-center" >
                            <p className='text-xl md:text-2xl lg:text-3xl xl:text-5xl'>Discover Your Dream Job Here!</p>
                            <div>

                                <input type="text" className='rounded-3xl text-xs font-bold text-black w-72 h-10 my-4' placeholder='Search your dream role' />
                                <FontAwesomeIcon icon={faSearch} className='text-black text-2xl relative -left-9 top-1' />

                            </div>
                        </div>

                    </div>

                    {/* this is career mains ends */}

                    <div>

                    <Parallax bgImage={new4} bgImageAlt="the cat" strength={800} >

                        <div className="careerrrr">
                        {/* <div className="careersjob mt-6">
                            <p className='text-xs sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl mx-5 font-medium ' style={{ color: 'gold' }}>Explore exciting career opportunities at QubicGen.
                                Discover roles that match your skills, passion, and ambition.
                                Join our dynamic team and make a difference!</p>


                            <p className='text-xs sm:text-xl md:text-xl lg:text-2xl xl:text-2xl mx-5 text-white mt-4 font-normal'>
                                Welcome to QubicGen's career hub, your gateway to exciting opportunities!
                                Dive into a diverse array of job listings curated to match your skills and ambitions.
                                Whether you're a seasoned professional or just starting out, QubicGen offers positions that
                                promise growth, challenge, and fulfillment. Join our innovative and supportive team
                                environment, where you can shape the future while unlocking your potential.
                                Explore, apply, and begin your rewarding journey with QubicGen today.
                            </p>

                        </div> */}

                        {/* this is job text ends */}


                        {/* Job starts */}

                        <div className="jobsstart className='text-xs sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl mx-5 font-medium mt-5 " style={{ color: 'gold' }}>
                            <h4 className='z-40 text-5xl' >Latest Jobs</h4>

                            <div className="container" >
                                <div className="grid grid-flow-row auto-rows-max ml-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 ">
                                    {
                                        JobsList.map((item) => {
                                            return (
                                                <div className="col -ml-14" >
                                                    <div className="card-container">
                                                        <div className="group" style={{ width: '260px' }}>
                                                            <div className="card-box">
                                                                <div id="Hegel" className="cardss">
                                                                    <div className="contentss">
                                                                        <p className="some">
                                                                            <h1 className='text-xl font-bold' style={{ textDecoration: 'underline ' }}>Description:</h1>
                                                                            {item.description}
                                                                        </p>
                                                                    </div>
                                                                    <div className="thumb flex flex-col items-start">
                                                                        <h1 style={{ color: 'white', fontSize: '17px' }} className='ml-6 font-semibold'>{item.title} </h1>
                                                                        <div>
                                                                            <p style={{ color: 'white', fontSize: '13px' }} className='ml-7 mt-2 font-normal'>Qualification : {item.qual} </p>
                                                                            <p style={{ color: 'white', fontSize: '13px' }} className='ml-7 mt-2 font-normal' >Experience : {item.exp} </p>
                                                                            <p style={{ color: 'white', fontSize: '13px' }} className='ml-7 mt-2 font-normal'>Skills : {item.skills} </p>
                                                                        </div>

                                                                    </div>


                                                                    <div className="detial">
                                                                        <div className="titless">
                                                                            <button className="buttonapply text-black">
                                                                                Apply Now
                                                                                <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                                                                                    <path
                                                                                        clip-rule="evenodd"
                                                                                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                                                                        fill-rule="evenodd"
                                                                                    ></path>
                                                                                </svg>
                                                                            </button>



                                                                        </div>


                                                                    </div>
                                                                </div>
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


                        </div>


                    

                    </Parallax>



                      
                    </div>


                    {/* this is job text starts */}
                    {/* Job ends */}

                </div>

            </div>

            <Footer />

        </>
    )
}

export default Careerjobsx