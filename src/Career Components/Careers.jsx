import React from "react";
import "./Careers.css";
import Navbar from "../HomeComponents/Navbar";
import { Parallax } from "react-parallax";
import slideone from '../assets/testone.jpg';
import slidetwo from '../assets/testtwo.jpg';
import slidethree from '../assets/Carausel/slide1.jpeg';

const Careers = () => {
  return (
    <>
      <Navbar />
      <div className="app">
      <Parallax  bgImage={slideone} bgImageAlt="the cat" strength={600} >
        <div className="content">
        <div className="text">
        Content goes here. Parallax height grows with content height.


        </div>
        </div>
      
      </Parallax>
      <Parallax  bgImage={slidetwo} bgImageAlt="the cat" strength={300} >
        <div className="content">
        <div className="text">
        Content goes here. Parallax height grows with content height.


        </div>
        </div>
      
      </Parallax>
      <Parallax  bgImage={slidethree} bgImageAlt="the cat" strength={600} >
        <div className="content">
        <div className="text">
        Content goes here. Parallax height grows with content height.


        </div>
        </div>
      
      </Parallax>

      <div className="content">

      </div>

      </div>

    </>
  );
};

export default Careers;
