import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets.js";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            mollitia odio eius ducimus deleniti rerum dolore nemo, aperiam
            quaerat tempore sapiente sint. Est labore tempore facilis quidem
            incidunt deserunt ratione.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook Icon" />
            <img src={assets.twitter_icon} alt="Twitter Icon" />
            <img src={assets.linkedin_icon} alt="LinkedIn Icon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 9999988888</li>
            <li>xyz123@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Tomato- All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
