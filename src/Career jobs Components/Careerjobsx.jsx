import React, { useEffect, useState } from 'react'
import "./Careerjobs.css"
import Footer from '../HomeComponents/Footer'
import Navbar from '../HomeComponents/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Parallax } from 'react-parallax';
import new4 from '../assets/new5.jpg';



const Careerjobsx = () => {
    const [step, setStep] = useState(1);
    const [selectedJobRole, setSelectedJobRole] = useState(""); 
    const [searchInput, setSearchInput] = useState(""); // 
    const handleNext = () => {
        setStep(step + 1);
    };
    const handleBack = () => {
        setStep(step - 1);
    };

    useEffect(() => {
        setStep(1); // Set step to 1 when the component mounts
    }, []);
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

    const filteredJobs = JobsList.filter(job =>
        job.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    return (

        <>

            <Navbar />
            <div className='bg-black'>
                <div className="careeesfull bg-black" data-aos="fade-right">
                    <div className="Careersjobsmain flex bg-center justify-center items-center sm:h-10 " style={{ background: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover',backgroundPosition:'center'}}>
                        <div className="z-50 text-2xl ml-3 text-white sm:mx-6  md:text-4xl md:mr-80 lg:text-5xl lg:mb-10 h-36 md:w-96 lg:w-auto xl:w-auto flex flex-col justify-center items-center" >
                            <p className='text-xl md:text-2xl lg:text-3xl xl:text-5xl'>Discover Your Dream Job Here!</p>
                           
                        </div>
                    </div>
                    <Parallax bgImage={new4} bgImageAlt="the cat" strength={800} >
                        <div className="careerrrr">
                            <div className="jobsstart className='text-xs sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl mx-5 font-medium mt-5 " style={{ color: 'gold' }}>
                                <h4 className='z-40 text-5xl'>Latest Jobs</h4>
                                 <div>
                                <input
                                    type="text"
                                    className='rounded-3xl text-xs font-bold text-black w-72 h-10 my-4'
                                    placeholder='Search your dream role'
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)} // Update search input value

                                />
                                
                                <FontAwesomeIcon icon={faSearch} className='text-black text-2xl relative -left-9 top-1' />
                            </div>
                                <div className="container">
                                    <div className="grid grid-flow-row auto-rows-max ml-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 ">
                                        {filteredJobs.map((item, index) => (
                                            <div key={index} className="col -ml-14" >
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
                                                                        <button className="buttonapply text-black" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => setSelectedJobRole(item.title)}>Apply Now</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <br />
                                            </div>
                                        ))}
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </div>
            </div>
            

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog custom-modal-dialog" style={{ zIndex: 2000 }}>
        <div className="modal-content h-auto" >
            {step === 1 && (
                <div>
                    <div className="modal-header ">
                    <h1 className="modal-title fs-5 my-3 text-white z-30" id="staticBackdropLabel">{selectedJobRole} Application</h1>                         
                    <button className='btn-close z-30' data-bs-dismiss="modal" aria-label="Close" onClick={() => setStep(1)}></button>  
                    </div>
                    <div className="modal-body  ">
                        <div className="flex flex-col items-center justify-center h-screen">
                            <div className="w-full max-w-md  rounded-lg shadow-md p-6">
                            <h1 className="modal-title fs-5 my-3 text-white" id="staticBackdropLabel">Job Role</h1>                         

                                <div className="joberoles bg-white h-12 flex items-center rounded-lg pl-2" >
            
                                {selectedJobRole}
                                </div>

                            <h1 className="modal-title fs-5 my-3 text-white" id="staticBackdropLabel" >Personal Details</h1>                         
                                <form className="flex flex-col">
                                <h1 className="text-base text-white" >Name</h1>                         

                                    <input type="text" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Full Name (As Per marks memo)" />
                                    <h1 className="text-base text-white" >Name</h1>                         

                                    <input type="email" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email" />
                                    <input type="text" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Phone Number" />
                                    <input type="text" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="LinkedIn Profile URL" />
                                    <input type="text" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Github Profile URL" />
                                    <textarea name="Address" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Address" defaultValue={""} />
                                    <input type="file" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Upload Resume" />
                                </form>
                                <div className="modal-footer z-50 ">
                        <button type="button" className="bg-gray-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-yellow-400  transition ease-in-out duration-200" data-bs-dismiss="modal" onClick={() => setStep(1)}>Close</button>
                        <button type="button" onClick={handleNext} class="bg-blue-400 text-white font-bold py-2 px-4 rounded-md mt-4  hover:bg-yellow-400 transition ease-in-out duration-150">Next</button>
                        

                    </div>
                            </div>
                        </div>
                    </div>
               
                </div>
            )}
            {step === 2 && (
                <div>
                    <div className="modal-header">
                    <h1 className="modal-title fs-5 my-3 text-white z-30" id="staticBackdropLabel">{selectedJobRole} Application</h1>  
                                        <button className='btn-close z-3    0' data-bs-dismiss="modal" aria-label="Close" onClick={() => setStep(1)}></button>  
                       
                    </div>
                    <div className="modal-body ">
                        <div className="flex flex-col items-center justify-center h-screen">
                            <div className="w-full max-w-md rounded-lg shadow-md p-6">
                                <h2 className="text-2xl font-bold text-white mb-4" >Education</h2>
                                <form className="flex flex-col">
                                    {/* Form inputs */}
                                    <input type="text" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Highest Level of Education Attained*" />
                                    <input type="email" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Name of institution*" />
                                    <input type="text" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Phone Number" />
                                    <input type="text" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Stream*" />
                                    <input type="text" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Year of Graduation*" />
                                    <input type="text" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="CGPA/Percentage*" />
                                </form>
                            </div>
                            <div className="modal-footer ">
                    <button type="button" onClick={handleBack} className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Back</button>
                        <button type="button" onClick={handleNext} className="bg-blue-400 text-white font-bold py-2 px-4 rounded-md mt-4  hover:bg-yellow-400 transition ease-in-out duration-150">Next</button>

                    </div>
                        </div>
                    </div>
                    
                </div>
            )}
            {step === 3 && (
                <div>
                    <div className="modal-header">
                    <h1 className="modal-title fs-5 my-3 text-white z-40" id="staticBackdropLabel">{selectedJobRole} Application</h1>                         
                    <button className='btn-close z-40 ' data-bs-dismiss="modal" aria-label="Close" onClick={() => setStep(1)}></button>  
                    </div>
                    <div className="modal-body ">
                        <div className="flex flex-col items-center justify-center h-screen">
                            <div className="w-full max-w-md  rounded-lg shadow-md p-6">
                                <h2 className="text-2xl font-bold text-white mb-4">Work Experience</h2>
                                <form className="flex flex-col">
                                    {/* Form inputs */}
                                    <input type="text" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Experience Level**" />
                                    <input type="email" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Job Title*" />
                                    <input type="text" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Job Responsibilities/Achievements" />
                                </form>
                            </div>
                            <div className="modal-footer ">
                    <button type="button" onClick={handleBack} class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Back</button>
                        <button type="button" onClick={handleNext} class="bg-blue-400 text-white font-bold py-2 px-4 rounded-md mt-4  hover:bg-yellow-400 transition ease-in-out duration-150">Submit</button>
                    </div>
                        </div>
                    </div>
                    
                </div>
            )}
            {/* Add more steps as needed */}
        </div>
    </div>
</div>




            <Footer />

        </>
    )
}

export default Careerjobsx