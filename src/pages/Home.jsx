import React from "react";
import Navbar from "../HomeComponents/Navbar"
import Getintouch from "../HomeComponents/Getintouch"
import Carausel from "../HomeComponents/Carausel";
import Homewhatwedo from "../HomeComponents/Homewhatwedo";
import Homewhomweserve from "../HomeComponents/Homewhomweserve";
import Homemeetourteam from "../HomeComponents/Homemeetourteam";
import Homeabout from "../HomeComponents/Homeabout";
import Footer from "../HomeComponents/Footer";

const Home = () => {
  return (
    <>
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
}

export default Home;
