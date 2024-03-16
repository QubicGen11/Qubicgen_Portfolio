import React from "react";
import Navbar from "../HomeComponents/Navbar";
import Getintouch from "../HomeComponents/Getintouch";
import Carausel from "../HomeComponents/Carausel";
import Homewhatwedo from "../HomeComponents/Homewhatwedo";
import Homewhomweserve from "../HomeComponents/Homewhomweserve";
import Homemeetourteam from "../HomeComponents/Homemeetourteam";
import Homeabout from "../HomeComponents/Homeabout";
import Footer from "../HomeComponents/Footer";
import SEO from "../SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="QubiGen - Empowering Success"
        description="QubiGen, situated in the dynamic and thriving city of Anantapur, Andhra Pradesh, India, stands as a beacon of knowledge and a catalyst for success. Our mission is to bridge the gap between learning and achievement, focusing on innovative where ideas flourish and ambitions are realized. Here, tradition meets technology, creating a unique synergy."
        type="website"
        name="QubiGen"
        image="https://example.com/og-image.jpg"
        url="https://www.qubicgen.com/"
        keywords="QubiGen, Anantapur, Andhra Pradesh, India, education, innovation, success, technology, top tech company, Anatapur tech, Anatapur technology, Anatapur innovation, Anatapur success, Anatapur education"
      />
      <Navbar />
      <div style={{backgroundColor:'#242424'}}>
        <Carausel />
        <Homeabout/>
        <Homewhatwedo/>
        <Homewhomweserve/>
        <Homemeetourteam/>
        <Getintouch />
        <Footer />
      </div>
    </>
  );
};

export default Home;
