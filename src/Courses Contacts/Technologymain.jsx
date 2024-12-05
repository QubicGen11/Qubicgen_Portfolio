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

const Technologymain = () => {
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    const storedCourses = localStorage.getItem('courses');
    if (storedCourses) {
      const courses = JSON.parse(storedCourses);
      const selectedCourse = courses.find(c => c.id === courseId);
      setCourseData(selectedCourse);
    }
  }, [courseId]);

  // Scroll to section function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      {/* Main Navbar */}
      <Navbar />

      {/* Technology Overview Section */}
      <div id="overview">
        <TechnologyOverview 
          title={courseData?.courseName}
          description={courseData?.description}
          startDate={courseData?.startDate}
          duration={courseData?.duration}
          rating={courseData?.rating}
        />
      </div>

      {/* Sticky Program-Specific Navbar */}
      <nav
        className="bg-black/70 text-white sticky top-[90px] z-50 shadow-lg backdrop-blur-md"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div className="container mx-auto px-6 py-3 flex justify-center">
          <ul className="flex space-x-12 text-base md:text-lg font-medium">
            <li
              className="cursor-pointer relative group"
              onClick={() => scrollToSection("overview")}
            >
              <span className="hover:text-yellow-400 transition duration-300 text-md" style={{fontFamily:'sans-serif'}}>
                Overview
              </span>
              <div className="absolute w-0 h-[2px] bg-yellow-400 rounded-full bottom-0 left-0 group-hover:w-full transition-all duration-300"></div>
            </li>
            <li
              className="cursor-pointer relative group"
              onClick={() => scrollToSection("secureplacements")}
            >
              <span className="hover:text-yellow-400 transition duration-300 text-md" style={{fontFamily:'sans-serif'}}>
                Placements
              </span>
              <div className="absolute w-0 h-[2px] bg-yellow-400 rounded-full bottom-0 left-0 group-hover:w-full transition-all duration-300"></div>
            </li>
            <li
              className="cursor-pointer relative group"
              onClick={() => scrollToSection("syllabus")}
            >
              <span className="hover:text-yellow-400 transition duration-300 text-md" style={{fontFamily:'sans-serif'}}>
                Syllabus
              </span>
              <div className="absolute w-0 h-[2px] bg-yellow-400 rounded-full bottom-0 left-0 group-hover:w-full transition-all duration-300"></div>
            </li>
            <li
              className="cursor-pointer relative group"
              onClick={() => scrollToSection("certifications")}
            >
              <span className="hover:text-yellow-400 transition duration-300 text-md" style={{fontFamily:'sans-serif'}}>
                Certifications
              </span>
              <div className="absolute w-0 h-[2px] bg-yellow-400 rounded-full bottom-0 left-0 group-hover:w-full transition-all duration-300"></div>
            </li>
            <li
              className="cursor-pointer relative group"
              onClick={() => scrollToSection("testimonials")}
            >
              <span className="hover:text-yellow-400 transition duration-300 text-md" style={{fontFamily:'sans-serif'}}>
                Reviews
              </span>
              <div className="absolute w-0 h-[2px] bg-yellow-400 rounded-full bottom-0 left-0 group-hover:w-full transition-all duration-300"></div>
            </li>
            <li
              className="cursor-pointer relative group"
              onClick={() => scrollToSection("faq")}
            >
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
        <OverviewSection />
      </div>
      <div id="secureplacements" className="pt-24 pb-12">
        <Secureplacements />
      </div>
      <div id="syllabus" className="pt-24 pb-12">
        <SyllabusSection lessons={courseData?.lessons} />
      </div>
      <div id="certifications" className="pt-24 pb-12">
        <CertificateSection />
      </div>
      <div id="testimonials" className="pt-24 pb-12">
        <Testimonials />
      </div>
      <div id="faq" className="pt-24 pb-12">
        <FaqSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Technologymain;
