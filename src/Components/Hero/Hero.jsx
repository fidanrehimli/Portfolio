import React from "react";
import "./Hero.css";
import profile_img from "../../assets/Fidan.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1><span>I'm Fidan Rahimli,</span> frontend developer based in Baku.</h1>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
