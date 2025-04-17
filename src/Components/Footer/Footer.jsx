import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo.png";
import instagram from "../Assets/instagram_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";
import pinterest from "../Assets/pintester_icon.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="footer" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <Link to="/latest">
          <li>Products</li>
        </Link>
        <Link to="/company">
          <li>Company</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      <div className="social-icons">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
      </div>
      <div className="footer-copy">
        <hr />
        <p>© 2021 Shopper. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
