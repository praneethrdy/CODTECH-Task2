import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "../../App.css"

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="" target="_blank" className="items">
            <FaInstagram className="icons" style={{color: "CADCFC"}}/>
          </a>
          <a href="https://www.google.com" target="_blank" className="items">
            <CiFacebook className="icons" style={{color: "CADCFC"}} />
          </a>
          <a href="https://www.linkedin.com/in/praneeth-reddy-devarannagari" target="_blank" className="items">
            <CiLinkedin className="icons" style={{color: "CADCFC"}} />
          </a>
          <a href="" target="_blank" className="items">
            <FaSquareXTwitter className="icons" style={{color: "CADCFC"}} />
          </a>
          <a href="https://github.com/" target="_blank" className="items">
            <FaGithubSquare className="icons" style={{color: "CADCFC"}}/>
          </a>
          <a
            href="mailto:devarannagaripraneeth@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" style={{color: "CADCFC"}} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
