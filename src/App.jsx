import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import Home from "./pages/Home";
import About from "./pages/About";
// import Services from "./pages/Services";
// import Industries from "./pages/Industries";
// import Blog from "./pages/Blog";
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './ScrollToTop'; 
import Rpa from "./Rpa Components/Rpa";
import Sap from "./Sap Components/Sap";
import Cybersecurity from "./Cyber Components/Cybersecurity";
import Dataanalytics from "./Data Analytics Components/Dataanalytics";
import Testing from "./Testing Components/Testing";
import Database from "./Database Components/Database";
import Digitals from "./Digitals/Digitals";
import Digitalization from "./Digitalization Components/Digitalization";
import Outsourcing from "./Outsourcing Components/Outsourcing";
import Businessconsulting from "./Business Consulting Components/Businessconsulting";
import Web from "./Web Development Components/Web";
import Training from "./Training Components/Training";
import Banking from "./Industries Components/Banking Components/Banking";
import Energy from "./Industries Components/Energy Components/Energy";
import Public from "./Industries Components/Public Components/Public";
import Health from "./Industries Components/Health Components/Health";
import Media from "./Industries Components/Media Components/Media";
import Manufacturing from "./Industries Components/Manufacturing Components/Manufacturing";
import Travel from "./Industries Components/Travel Componets/Travel";
import Retail from "./Industries Components/Retail Components/Retail";
import Oil from "./Industries Components/Oil Components/Oil";
import Summary from "./Industries Components/Summary Components/Summary";
import Contact from "./Contact Components/Studentform";
import Careers from "./Career Components/Careers";
import Blog from "./Career Components/Carrernext";
import Careerjobsx from "./Career jobs Components/Careerjobsx";
import Terms from "./Terms and Conditions/Terms";
import Privacy from "./Privacy/Privacy";
import Swiper from './HomeComponents/Swiper';
import Projectform from "./Contact Components/Projectform";
import Studentform from "./Contact Components/Studentform";
import Login from './Admin/Login';
import ProtectedRoutes from './Admin/Protected';
import AdminDashboard from './Admin/Dashboard';
import NewjobApplication from "./Contact Components/NewjobApplication";
import CoursesHero from "./Courses Contacts/Courses Hero Components/CoursesHero";
import Coursesmain from "./Courses Contacts/Coursesmain";
import TechnologyOverview from "./Courses Contacts/Technology Overview Componnets/TechnologyOverview";
import Technologymain from "./Courses Contacts/Technologymain";
import AdminPage from "./Courses Contacts/Course Admin Component/Courseadmin";
import Pricing from "./Courses Contacts/Pricing section/Pricing";
import { ToastContainer } from "react-toastify";
import RegistrationTable from "./SecreatFolder/Secreat";
import Certificate from "./Certificate/Certificate";
import Serverdown from "./Serverdown";

// import TechnologyOverview from "./Courses Contacts/Technology Overview Componnets/TechnologyOverview";
const Nopage = lazy(()=>import ( './404') );
// Import the NotFound component

const isServerDown = false; // Set to true to show the server down page

const App = () => {
  if (isServerDown) {
    return <Serverdown />;
  }
  return (
    <div>
      <ToastContainer/>

    <HelmetProvider> {/* Wrap your App component with HelmetProvider */}

      <Router>
          <ScrollToTop /> 
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/banking" element={<Banking/>} />
            <Route path="/about" element={<About />} />
            <Route path="/rpa" element={<Rpa/>} />
            <Route path="/sap" element={<Sap/>} />
            <Route path="/cybersecurity" element={<Cybersecurity/>} />
            <Route path="/dataanalytics" element={<Dataanalytics/>} />
            <Route path="/testing" element={<Testing/>} />
            <Route path="/database" element={<Database/>} />
            <Route path="/digitalmarketing" element={<Digitals/>} />
            <Route path="/digitalization" element={<Digitalization/>} />
            <Route path="/outsourcing" element={<Outsourcing/>} />
            <Route path="/businessconsulting" element={<Businessconsulting/>} />
            <Route path="/webdevelopment" element={<Web/>} />
            <Route path="/training" element={<Training/>} />
            <Route path="/energy" element={<Energy/>} />
            <Route path="/public" element={<Public/>} />
            <Route path="/health" element={<Health/>} />
            <Route path="/media" element={<Media/>} />
            <Route path="/manufacturing" element={<Manufacturing/>} />
            <Route path="/travel" element={<Travel/>} />
            <Route path="/retail" element={<Retail/>} />
            <Route path="/oil" element={<Oil/>} />
            <Route path="/summary" element={<Summary/>} />
            <Route path="/studentform" element={<Studentform/>} />
            <Route path="/careers" element={<Careers/>} />
            <Route path="/blogs" element={<Blog/>} />
            <Route path="/Careerjobs" element={<Careerjobsx/>} />
            <Route path="/terms" element={<Terms/>} />
            <Route path="/privacy" element={<Privacy/>} />
            <Route path="/swiper" element={<Swiper/>} />
            <Route path="/projectform" element={<Projectform/>} />
            <Route path="/newjobapplication" element={<NewjobApplication/>} />
            <Route path="/admin/login" element={<Login />} />
  
            <Route path="*" element={<Nopage />} /> 
            <Route path="/courses" element={<Coursesmain/>} />
            <Route path="/technology/:courseId" element={<Technologymain />} />
            <Route path="/pricing" element={<Pricing />} />
            {/* <Route path="/studentsonboardingform" element={<RegistrationTable />} /> */}
            <Route path="/certificate/:id" element={<Certificate />} />
            {/* <Route path="" element={<AdminPage/>} /> */}
            <Route
              path="/admin/dashboard"
              element={
          
                  <AdminDashboard />
               
              }
            />




            <Route
              path="/courseadmin"
              element={
                <ProtectedRoutes>
                  <AdminPage />
                </ProtectedRoutes>
              }
            />



          </Routes>
        </Suspense>
      </Router>
      </HelmetProvider>
    </div>

  );
};

export default App;
