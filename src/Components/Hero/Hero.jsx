import React from "react";
import "./Hero.css";
import profile_img from "../../assets/Fidan.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
       <p><span>I'm Fidan Rahimli,</span> frontend developer based in Baku.</p> 
      </h1>
      <div className="hero-action">
        <div className="hero-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
