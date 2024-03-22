import React from "react";
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

import Login from "./Admin/Login";
import Contact from "./Contact Components/Contact";
import Careers from "./Career Components/Careers";
import Blog from "./Career Components/Carrernext";
import Admin from "./Admin/Admin";
import Careerjobsx from "./Career jobs Components/Careerjobsx";





const App = () => {
  return (
    <HelmetProvider> {/* Wrap your App component with HelmetProvider */}

      <Router>
          <ScrollToTop /> 
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
          <Route path="/adminPage" element={<Admin/>} />
          <Route path="/admin/login" element={<Login/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/careers" element={<Careers/>} />
          <Route path="/blogs" element={<Blog/>} />
          <Route path="/jobs" element={<Careerjobsx/>} />
         
        </Routes>
      </Router>

      
    </HelmetProvider>
  );
};

export default App;
