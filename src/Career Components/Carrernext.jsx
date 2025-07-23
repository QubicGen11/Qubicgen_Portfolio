import { Parallax } from "react-parallax";
import new4 from '../assets/new4.jpg';
import Careersherone from "./Careersherone";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Carrernext = () => {


  return (
    <div className="contenttwo" >

      <Parallax bgImage={new4} bgImageAlt="the cat" strength={800} >
        <div className="careerscontent">
          <Careersherone />

          <motion.div className="text-2xl ml-4 sm:text-2xl sm:ml-6 md:ml-6 lg:text-4xl lg:ml-10 xl:text-5xl font-serif xl:mt-24 xl:font-bold  text-white" data-aos="fade-up" style={{ fontFamily: "'Montserrat', 'sans-serif'" }}>
            Explore <span style={{ color: 'gold' }}>QubicGen </span>
          </motion.div>

          <div className="maincareersthree md:flex mt-6" data-aos="fade-up">

            <div className="careersleft mx-5 mt-1 md:w-auto">
              <img className='career-card-img rounded-lg' src="https://qubicgen-prod.s3.us-east-1.amazonaws.com/Careers/carrer+paths.jpg" alt="" />
              <p className='careerstext text-center animate-bounce text-black w-36 flex items-center ml-auto mb-6 text-base relative bottom-20 left-6 justify-center' style={{ height: '100px', backgroundColor: 'gold' }} id='careerstextthree'>Career Paths</p>

            </div>

            <div className="careersright flex justify-center flex-col lg:items-center xl:items-center mb-28">
              <p className='text-white mx-5 mt-1 font-normal ml-4 py-4 text-1xl md:ml-6 lg:text-lg lg:ml-10 xl:w-[50vw]'>At QubicGen, career paths are as diverse as our team members&apos; ambitions. Whether you&apos;re a seasoned professional or just starting your journey, we offer opportunities for growth and advancement across various disciplines. From technical roles to
                leadership positions, we empower our team to chart their own course and reach their full potential. With
                mentorship, training programs, and ongoing support, QubicGen is the
                perfect place to launch or elevate your career. Join us and unlock a world of possibilities.
              </p>
<Link to="/Careerjobs" className="mr-auto">

<button className="animated-button w-48 h-12 rounded-3xl self-start ml-12 font-black z-20" >
        <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>
       <Link to="/Careerjobs"><span className="text font-medium text-black ">Explore More</span></Link> 
        <span className="circle" />
        <svg xmlns="http://www.w3.org/2000/svg" className="arr-1 " viewBox="0 0 24 24">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>
      </button>    

</Link>
  



                  
      
      
      </div>
            

          </div>




          <div className="maincareerstwo md:flex flex-row-reverse" data-aos="fade-up">

            <div className="careersleft mx-5 mt-1 md:w-auto">
              <img className='career-card-img rounded-lg' src="https://qubicgen-prod.s3.us-east-1.amazonaws.com/Careers/life+at+qubicgen.jpg" alt="" />
              <p className='careerstext text-center animate-bounce text-black w-28 flex items-center mr-auto mb-6 text-base relative bottom-20 right-9 ' style={{ height: '100px', backgroundColor: 'gold' }} id='careerstexttwo'>Life at QubicGen</p>

            </div>

            <div className="careersright flex lg:items-center xl:items-center">
              <p className='text-white mx-5 mt-1 font-normal ml-4 py-4 text-1xl md:ml-6 lg:text-lg lg:ml-10 xl:w-[50vw]'>QubicGen is your gateway to a
                Life at QubicGen is an exhilarating journey filled with endless possibilities and meaningful connections. Our vibrant community of innovators, dreamers, and doers fosters a culture of collaboration, where every idea is welcomed and celebrated. From brainstorming sessions to team outings, every moment at QubicGen is an opportunity to learn, grow, and make lasting memories.  Join us and experience the excitement of life at QubicGen firsthand.
              </p>

            </div>

          </div>

          <div className="maincareers md:flex lg:mt-6 xl:mt-16" data-aos="fade-up">

     


            <div className="careersleft mx-5 mt-1 md:w-auto">
              <img className='career-card-img rounded-lg' src="https://qubicgen-prod.s3.us-east-1.amazonaws.com/Careers/why+qubicgen.jpg" alt="" />
              <p className='careerstext text-center animate-bounce text-black w-36 flex items-center ml-auto mb-6 text-base relative bottom-20 left-6 justify-center' style={{ height: '100px', backgroundColor: 'gold' }} id='careerstexttwo'>Why QubicGen?</p>

            </div>

            <div className="careersright flex lg:items-start xl:items-center xl:mb-28 ">
              <p className='text-white font-normal mx-5 mt-1  ml-4 py-4 text-xl md:ml-6 lg:text-lg lg:ml-10 xl:w-[50vw]'>QubicGen is your gateway to a
                world of  innovation and
                opportunity.
                Our culture thrives on creativity
                and  collaboration, where every
                team member&apos;s voice is heard
                and valued. Join us, and  be part
                of a dynamic community where
                impactful work is the norm.
                At QubicGen, we&apos;re not just building
                careers; we&apos;re shaping the future
                together.
              </p>

            </div>

          </div>





          <div className="maincareersfour md:flex flex-row-reverse" data-aos="fade-up">

            <div className="careersleft mx-5 mt-1 md:w-auto">
              <img className='career-card-img rounded-lg' src="https://qubicgen-prod.s3.us-east-1.amazonaws.com/Careers/benfits+and+perks.jpg" alt="" />
              <p className='careerstext text-center animate-bounce text-black w-28 flex items-center mr-auto mb-6 text-base relative bottom-20 right-3 ' style={{ height: '100px', backgroundColor: 'gold' }} id='careerstextfour'>Benefits & Perks</p>

            </div>

            <div className="careersright flex lg:items-center xl:items-center mb-28">
              <p className='text-white mx-5 mt-1 font-normal ml-4 py-4 text-1xl md:ml-6 lg:text-lg lg:ml-10 xl:w-[50vw]'>We prioritize the well-being and success of our team members by offering a comprehensive range of benefits and perks. From competitive compensation packages to flexible work arrangements, we strive to create an environment where employees feel valued and supported. Additionally, we provide opportunities for professional development, including access to training programs and mentorship opportunities.
              </p>

            </div>

          </div>

        </div>

      </Parallax>

    </div>
  );
};

export default Carrernext;


