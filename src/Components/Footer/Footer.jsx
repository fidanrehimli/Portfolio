import React from "react";
import "./Footer.css";
import { CiUser } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
      <h1 className="logo-name">Fidan Rahimli</h1>
          <p>I am 21-year-old I am a young programming developer enthusiast.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <CiUser />
            <input type="emial" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Fidan Rahimli. All right reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
