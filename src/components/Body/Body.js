import React from "react";
import "./Body.css";
import Intro from "../Intro/Intro";
import FixedBg from "../FixedBg/FixedBg";
import Services from "../Services/Services";
import About from '../About'
import Contact from "../Contact";


const Body = () => {
  return (
      <div className="body">
          <FixedBg />
     <Intro />
     <Services />
     <About />
     <Contact />
    
     </div>
  );
};

export default Body;
