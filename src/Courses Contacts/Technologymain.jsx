import React, { useState, useEffect } from "react";
import TechnologyOverview from "./Technology Overview Componnets/TechnologyOverview";
import OverviewSection from "./Technology Overview Componnets/OverviewSection";
import Secureplacements from "./Secure Placement Componnets/Secureplacements";
import SyllabusSection from "./Technology Overview Componnets/Syllabus";
import CertificateSection from "./Technology Overview Componnets/CertificateSection";
import Testimonials from "./Courses Testimonoals Componnets/Testimonals";
import Footer from "../HomeComponents/Footer";
import FaqSection from "./Technology Overview Componnets/Faq";
import Navbar from "../HomeComponents/Navbar";
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { ThreeDots } from 'react-loader-spinner'; // Import the loader
import Pricing from "./Pricing section/Pricing";

const Technologymain = () => {
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://qg.vidyantra-dev.com/qubicgen/courses/${courseId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch course details');
        }
        const data = await response.json();
        setCourseData(data);
      } catch (error) {
        console.error("Error fetching course details:", error);
        toast.error("Error loading course details");
      } finally {
        setLoading(false);
      }
    };

    if (courseId) {
      fetchCourseDetails();
    }
  }, [courseId]);

  // Scroll to section function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a]">
        <ThreeDots 
          height="80" 
          width="80" 
          color="#FFD700" 
          ariaLabel='loading' 
          visible={true} 
        />
        {/* <div className="text-xl ml-4 ">Loading course details...</div> */}
      </div>
    );
  }

  return (
    <div>
      {/* Main Navbar */}
      <Navbar />

      {/* Technology Overview Section */}
      <div id="overview">
        <TechnologyOverview 
          title={courseData?.courseName}
          description={courseData?.courseDescription}
          startDate={courseData?.startDate}
          duration={courseData?.duration}
          rating={courseData?.rating}
          courseImage={courseData?.courseImage}
          courseBanner={courseData?.courseBanner}
          brochure={courseData?.brochure}
        />
      </div>

      {/* Sticky Program-Specific Navbar */}
      <nav
        className="bg-black/70 text-white sticky top-[90px] z-10 shadow-lg backdrop-blur-md"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div className="container mx-auto px-6 py-3 flex justify-center">
          <ul className="flex space-x-12 text-base md:text-lg font-medium">
            <li className="cursor-pointer relative group" onClick={() => scrollToSection("overview")}>
              <span className="hover:text-yellow-400 transition duration-300 text-md" style={{fontFamily:'sans-serif'}}>
                Overview
              </span>
              <div className="absolute w-0 h-[2px] bg-yellow-400 rounded-full bottom-0 left-0 group-hover:w-full transition-all duration-300"></div>
            </li>
            <li className="cursor-pointer relative group" onClick={() => scrollToSection("secureplacements")}>
              <span className="hover:text-yellow-400 transition duration-300 text-md" style={{fontFamily:'sans-serif'}}>
                Placements
              </span>
              <div className="absolute w-0 h-[2px] bg-yellow-400 rounded-full bottom-0 left-0 group-hover:w-full transition-all duration-300"></div>
            </li>
            <li className="cursor-pointer relative group" onClick={() => scrollToSection("syllabus")}>
              <span className="hover:text-yellow-400 transition duration-300 text-md" style={{fontFamily:'sans-serif'}}>
                Syllabus
              </span>
              <div className="absolute w-0 h-[2px] bg-yellow-400 rounded-full bottom-0 left-0 group-hover:w-full transition-all duration-300"></div>
            </li>
            <li className="cursor-pointer relative group" onClick={() => scrollToSection("certifications")}>
              <span className="hover:text-yellow-400 transition duration-300 text-md" style={{fontFamily:'sans-serif'}}>
                Certifications
              </span>
              <div className="absolute w-0 h-[2px] bg-yellow-400 rounded-full bottom-0 left-0 group-hover:w-full transition-all duration-300"></div>
            </li>
            <li className="cursor-pointer relative group" onClick={() => scrollToSection("testimonials")}>
              <span className="hover:text-yellow-400 transition duration-300 text-md" style={{fontFamily:'sans-serif'}}>
                Reviews
              </span>
              <div className="absolute w-0 h-[2px] bg-yellow-400 rounded-full bottom-0 left-0 group-hover:w-full transition-all duration-300"></div>
            </li>
            <li className="cursor-pointer relative group" onClick={() => scrollToSection("pricing")}>
              <span className="hover:text-yellow-400 transition duration-300 text-md" style={{fontFamily:'sans-serif'}}>
                Pricing
              </span>
              <div className="absolute w-0 h-[2px] bg-yellow-400 rounded-full bottom-0 left-0 group-hover:w-full transition-all duration-300"></div>
            </li>
            <li className="cursor-pointer relative group" onClick={() => scrollToSection("faq")}>
              <span className="hover:text-yellow-400 transition duration-300 text-md" style={{fontFamily:'sans-serif'}}>
                FAQs
              </span>
              <div className="absolute w-0 h-[2px] bg-yellow-400 rounded-full bottom-0 left-0 group-hover:w-full transition-all duration-300"></div>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sections */}
      <div id="overviewsection" className=" ">
        <OverviewSection startDate={courseData?.startDate}/>
      </div>
      <div id="secureplacements" >
        <Secureplacements />
      </div>
      <div id="syllabus" className="">
        <SyllabusSection lessons={courseData?.courseLessons} />
      </div>
      <div id="certifications" >
        <CertificateSection certificate={courseData?.certificate} />
      </div>
      <div id="testimonials" >
        <Testimonials />
      </div>
      <div id="pricing">
  <Pricing
    selfPaced={courseData?.selfPaced}
    mentorship={courseData?.mentorship}
    dualPath={courseData?.dualPath}
  />
</div>

      <div id="faq" >
        <FaqSection faqs={courseData?.courseFaqs} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Technologymain;