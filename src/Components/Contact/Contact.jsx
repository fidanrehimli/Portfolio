import React from "react";
import "./Contact.css";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <CiMail />
              <p>frhimli6@gmail.com</p>
            </div>
            <div className="contact-detail">
              <IoCallOutline />
              <p>+994556106875</p>
            </div>
            <div className="contact-detail">
              <CiLocationOn />
              <p>Baku</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
